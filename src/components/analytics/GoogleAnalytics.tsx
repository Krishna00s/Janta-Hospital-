"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";
import { usePathname } from "next/navigation";
import {
  GA4_ENABLED,
  GA_MEASUREMENT_ID,
  isProductionDomain,
  hasAnalyticsConsent,
  CONSENT_EVENT_NAME,
  trackPageView,
  trackContactClick,
  trackDirectionsClick,
} from "@/lib/analytics/gtag";

/**
 * GoogleAnalytics Component
 *
 * Implements Google Analytics 4 (GA4) with strict healthcare privacy standards:
 * - Production-Only Activation (jantahospitallohardaga.in)
 * - Consent Mode v2 Default Denied State
 * - Script Injected ONLY after explicit user consent
 * - Automatic pageviews disabled (send_page_view: false)
 * - Advertising personalization disabled (allow_google_signals: false, allow_ad_personalization_signals: false)
 * - Restricted data processing enabled (restricted_data_processing: true)
 * - IP anonymization enforced (anonymize_ip: true)
 * - Sanitized route tracking preventing leakage of sensitive medical conditions or doctor inquiries
 * - Generic conversion delegation for phone, emergency phone, WhatsApp, and Google Maps
 */
export function GoogleAnalytics() {
  if (!GA4_ENABLED) {
    return null;
  }

  const pathname = usePathname();
  const [consentGranted, setConsentGranted] = useState<boolean>(false);
  const isScriptLoadedRef = useRef<boolean>(false);
  const lastTrackedPathRef = useRef<string | null>(null);

  // Initialize dataLayer and default Consent Mode immediately
  useEffect(() => {
    if (typeof window === "undefined") return;

    window.dataLayer = window.dataLayer || [];
    if (!window.gtag) {
      window.gtag = function () {
        window.dataLayer.push(arguments);
      };
    }

    // Default: Strictly DENIED across all storage categories
    window.gtag("consent", "default", {
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
      analytics_storage: "denied",
    });

    // Check if user already consented in previous visit
    const initialConsent = hasAnalyticsConsent();
    setConsentGranted(initialConsent);

    // Listen for real-time consent updates from ConsentBanner or Privacy Policy page
    const handleConsentChange = (e: Event) => {
      const customEvent = e as CustomEvent<{ consent: "granted" | "denied" }>;
      const isGranted = customEvent.detail?.consent === "granted";
      setConsentGranted(isGranted);
    };

    window.addEventListener(CONSENT_EVENT_NAME, handleConsentChange);
    return () => {
      window.removeEventListener(CONSENT_EVENT_NAME, handleConsentChange);
    };
  }, []);

  // When consent is granted on production domain, configure GA4 and track initial pageview
  const handleScriptLoad = () => {
    if (typeof window === "undefined" || !window.gtag) return;
    isScriptLoadedRef.current = true;

    // Update consent state to granted for analytics_storage only (keep ad signals denied)
    window.gtag("consent", "update", {
      analytics_storage: "granted",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });

    window.gtag("js", new Date());

    // Configure GA4 with strict privacy settings
    window.gtag("config", GA_MEASUREMENT_ID, {
      send_page_view: false, // Automatic page-view collection strictly DISABLED
      allow_google_signals: false, // Advertising personalization DISABLED
      allow_ad_personalization_signals: false, // Ad personalization DISABLED
      restricted_data_processing: true, // Google Restricted Data Processing ENABLED
      anonymize_ip: true, // IP Anonymization ENFORCED
      cookie_flags: "SameSite=None;Secure",
    });

    // Send the first privacy-sanitized pageview
    if (pathname) {
      lastTrackedPathRef.current = pathname;
      trackPageView(pathname);
    }
  };

  // Track route changes on client navigation (without duplicates)
  useEffect(() => {
    if (!pathname) return;
    if (!consentGranted || !isProductionDomain()) return;
    if (!isScriptLoadedRef.current) return;

    // Deduplicate consecutive identical routes
    if (lastTrackedPathRef.current === pathname) return;
    lastTrackedPathRef.current = pathname;

    trackPageView(pathname);
  }, [pathname, consentGranted]);

  // Global privacy-safe event delegation for generic contact and direction clicks
  useEffect(() => {
    const handleGlobalClick = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement).closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href") || "";

      // 1. Telephone / Emergency calls
      if (href.startsWith("tel:")) {
        // Generic categorization only; no phone numbers or personal data transmitted
        if (href.includes("9308348606")) {
          trackContactClick("emergency_phone");
        } else {
          trackContactClick("phone");
        }
        return;
      }

      // 2. WhatsApp chat clicks (Generic channel only; raw message text is NEVER transmitted)
      if (href.includes("wa.me") || href.includes("whatsapp")) {
        trackContactClick("whatsapp");
        return;
      }

      // 3. Google Maps directions clicks (Generic hospital destination; no user coordinates)
      if (
        href.includes("maps.app.goo.gl") ||
        href.includes("google.com/maps") ||
        href.includes("maps.google.com")
      ) {
        trackDirectionsClick();
      }
    };

    document.addEventListener("click", handleGlobalClick, {
      capture: true,
      passive: true,
    });
    return () => {
      document.removeEventListener("click", handleGlobalClick, { capture: true });
    };
  }, []);

  // PRODUCTION & CONSENT GUARD:
  // The external gtag.js script is rendered ONLY if:
  // 1. Runtime environment is official production domain (jantahospitallohardaga.in)
  // 2. User has explicitly granted consent
  if (!isProductionDomain() || !consentGranted) {
    return null;
  }

  return (
    <Script
      id="ga4-script"
      src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      strategy="afterInteractive"
      onLoad={handleScriptLoad}
    />
  );
}
