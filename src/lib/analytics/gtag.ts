/**
 * Google Analytics 4 (GA4) Privacy-Conscious Integration
 * Janta Hospital, Lohardaga, Jharkhand
 *
 * Applicable Privacy & Healthcare Policies:
 * - Google Health & Sensitive Category Data Collection Restrictions
 * - Consent Mode v2 Default Denied Architecture
 * - Strict Healthcare URL & Specialty Sanitization
 * - Zero Advertising / Google Signals / Remarketing Signals
 * - Restricted Data Processing (RDP) & IP Anonymization Enforced
 * - Production-Domain Strict Enforcement (jantahospitallohardaga.in)
 */

export const GA4_ENABLED = false; // Explicitly disabled until privacy configuration is formally approved

export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-6GC4JVQTJR";

export const OFFICIAL_PRODUCTION_HOSTNAME = "jantahospitallohardaga.in";

export const CONSENT_STORAGE_KEY = "jh_analytics_consent";
export const CONSENT_EVENT_NAME = "jh_analytics_consent_updated";

export type ConsentStatus = "granted" | "denied";

export type ContactChannel = "phone" | "emergency_phone" | "whatsapp";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Checks whether the current runtime environment is the official production domain.
 * Prevents tracking on localhost, 127.0.0.1, Vercel preview URLs, and Cloudflare Pages dev URLs.
 */
export function isProductionDomain(): boolean {
  if (!GA4_ENABLED) return false;
  if (typeof window === "undefined") return false;
  return window.location.hostname === OFFICIAL_PRODUCTION_HOSTNAME;
}

/**
 * Checks whether the visitor has explicitly granted consent for analytics storage.
 * Default is false (denied).
 */
export function hasAnalyticsConsent(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return localStorage.getItem(CONSENT_STORAGE_KEY) === "granted";
  } catch {
    return false;
  }
}

/**
 * Retrieves the current recorded consent choice, or null if undecided.
 */
export function getSavedConsentStatus(): ConsentStatus | null {
  if (typeof window === "undefined") return null;
  try {
    const val = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (val === "granted" || val === "denied") return val;
    return null;
  } catch {
    return null;
  }
}

/**
 * Updates the user's analytics consent preference.
 * Dispatches an event so active client components can react immediately without page reload.
 */
export function setAnalyticsConsent(status: ConsentStatus): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(CONSENT_STORAGE_KEY, status);
  } catch {
    // Local storage unavailable
  }

  // Update gtag Consent Mode state if window.gtag exists
  if (typeof window.gtag === "function") {
    window.gtag("consent", "update", {
      analytics_storage: status,
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });
  }

  // Notify listeners
  window.dispatchEvent(
    new CustomEvent(CONSENT_EVENT_NAME, { detail: { consent: status } })
  );
}

export interface SanitizedRoute {
  path: string;
  title: string;
}

/**
 * Healthcare Privacy Rule: Sanitizes page URLs and titles before transmission to GA4.
 *
 * In accordance with healthcare privacy standards and Google's health policy:
 * - Query strings and URL hash fragments are strictly stripped (prevents leaking search queries).
 * - Medical specialty detail paths (/services/*) are generalized to /services/[specialty].
 * - Individual doctor profile paths (/doctors/*) are generalized to /doctors/[profile].
 * - Prevents transmission of browsing interests that could reveal specific medical conditions.
 */
export function sanitizeRouteForAnalytics(rawPath: string): SanitizedRoute {
  if (!rawPath) {
    return { path: "/", title: "Home | Janta Hospital Lohardaga" };
  }

  // Strip query parameters and hash fragments
  const cleanPath = rawPath.split("?")[0].split("#")[0].replace(/\/+$/, "") || "/";

  // Sanitize medical specialty sub-routes
  if (cleanPath.startsWith("/services/")) {
    return {
      path: "/services/[specialty]",
      title: "Medical Service Information | Janta Hospital Lohardaga",
    };
  }

  // Sanitize doctor profile sub-routes
  if (cleanPath.startsWith("/doctors/")) {
    return {
      path: "/doctors/[profile]",
      title: "Doctor Profile | Janta Hospital Lohardaga",
    };
  }

  // Standard public institutional pages
  switch (cleanPath) {
    case "/":
      return { path: "/", title: "Home | Janta Hospital Lohardaga" };
    case "/about":
      return { path: "/about", title: "About Janta Hospital | Lohardaga" };
    case "/contact":
      return { path: "/contact", title: "Contact & Directions | Janta Hospital Lohardaga" };
    case "/emergency":
      return { path: "/emergency", title: "Emergency Medical Care | Janta Hospital Lohardaga" };
    case "/gallery":
      return { path: "/gallery", title: "Hospital Facilities & Guide | Janta Hospital" };
    case "/services":
      return { path: "/services", title: "Medical Services Overview | Janta Hospital" };
    case "/doctors":
      return { path: "/doctors", title: "Doctors & Specialists Overview | Janta Hospital" };
    case "/privacy-policy":
      return { path: "/privacy-policy", title: "Privacy Policy | Janta Hospital Lohardaga" };
    default:
      return { path: cleanPath, title: "Janta Hospital Lohardaga" };
  }
}

/**
 * Healthcare Privacy Rule: Sanitizes document.referrer.
 * Strips search engine queries or path parameters that may contain medical search terms.
 */
export function sanitizeReferrer(rawReferrer: string): string {
  if (!rawReferrer) return "";
  try {
    const url = new URL(rawReferrer);
    return `${url.origin}/`;
  } catch {
    return "";
  }
}

/**
 * Transmits a privacy-sanitized page_view event.
 * Only fires if:
 * 1. Runtime hostname is jantahospitallohardaga.in
 * 2. Visitor has explicitly granted analytics consent
 * 3. window.gtag is available
 */
export function trackPageView(rawPath: string): void {
  if (!isProductionDomain() || !hasAnalyticsConsent()) {
    if (process.env.NODE_ENV !== "production") {
      const sanitized = sanitizeRouteForAnalytics(rawPath);
      // Helpful debug log during local testing without sending real network hits
      console.debug("[GA4 Healthcare Privacy - Pageview Suppressed]", {
        isProductionDomain: isProductionDomain(),
        hasConsent: hasAnalyticsConsent(),
        sanitizedPayload: sanitized,
      });
    }
    return;
  }

  if (typeof window === "undefined" || typeof window.gtag !== "function") return;

  const { path, title } = sanitizeRouteForAnalytics(rawPath);
  const cleanReferrer = sanitizeReferrer(document.referrer);

  window.gtag("event", "page_view", {
    page_path: path,
    page_location: `https://${OFFICIAL_PRODUCTION_HOSTNAME}${path}`,
    page_title: title,
    page_referrer: cleanReferrer,
  });
}

/**
 * Privacy-Safe Generic Conversion Event: contact_click
 *
 * Strictly adheres to healthcare boundaries:
 * - NO patient identifiers or contact details
 * - NO doctor names or specialist designations
 * - NO medical condition or treatment categories
 * - NO raw WhatsApp message text or phone numbers
 *
 * Parameters sent:
 * - channel: "phone" | "emergency_phone" | "whatsapp"
 * - interaction_type: "click"
 */
export function trackContactClick(channel: ContactChannel): void {
  if (!isProductionDomain() || !hasAnalyticsConsent()) {
    if (process.env.NODE_ENV !== "production") {
      console.debug("[GA4 Healthcare Privacy - Contact Click Suppressed]", {
        channel,
        interaction_type: "click",
      });
    }
    return;
  }

  if (typeof window === "undefined" || typeof window.gtag !== "function") return;

  window.gtag("event", "contact_click", {
    channel,
    interaction_type: "click",
  });
}

/**
 * Privacy-Safe Generic Conversion Event: directions_click
 *
 * Strictly adheres to healthcare boundaries:
 * - NO user GPS coordinates or origin address
 * - NO doctor or specialty attribution
 *
 * Parameters sent:
 * - destination: "hospital_campus"
 * - interaction_type: "map_directions"
 */
export function trackDirectionsClick(): void {
  if (!isProductionDomain() || !hasAnalyticsConsent()) {
    if (process.env.NODE_ENV !== "production") {
      console.debug("[GA4 Healthcare Privacy - Directions Click Suppressed]", {
        destination: "hospital_campus",
        interaction_type: "map_directions",
      });
    }
    return;
  }

  if (typeof window === "undefined" || typeof window.gtag !== "function") return;

  window.gtag("event", "directions_click", {
    destination: "hospital_campus",
    interaction_type: "map_directions",
  });
}
