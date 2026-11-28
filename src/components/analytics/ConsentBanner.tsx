"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ShieldCheck, Check, X } from "lucide-react";
import {
  getSavedConsentStatus,
  setAnalyticsConsent,
  CONSENT_EVENT_NAME,
} from "@/lib/analytics/gtag";

/**
 * ConsentBanner Component
 *
 * Privacy-first analytics consent notification.
 * - Appears only when user has not previously recorded an explicit choice.
 * - Does not block page interaction or shift layout (zero CLS).
 * - Accessible dialog with clear Hindi and English explanations.
 * - Explains that no personal health data or advertising tracking is performed.
 */
export function ConsentBanner() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    // Check saved preference after hydration to avoid SSR mismatch
    const saved = getSavedConsentStatus();
    if (saved === null) {
      // Small graceful entrance delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 750);
      return () => clearTimeout(timer);
    }

    // Listen for consent resets from the Privacy Policy page
    const handleConsentChange = () => {
      const current = getSavedConsentStatus();
      if (current === null) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener(CONSENT_EVENT_NAME, handleConsentChange);
    return () => {
      window.removeEventListener(CONSENT_EVENT_NAME, handleConsentChange);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  const handleAccept = () => {
    setAnalyticsConsent("granted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    setAnalyticsConsent("denied");
    setIsVisible(false);
  };

  return (
    <aside
      aria-label="Analytics Consent"
      role="region"
      className="fixed bottom-3 inset-x-3 sm:bottom-5 sm:right-5 sm:left-auto sm:max-w-md z-50 animate-in fade-in slide-in-from-bottom-4 duration-300 pointer-events-auto"
    >
      <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-[#B7D8CA] shadow-xl text-[#122421] space-y-3">
        {/* Header & Icon */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#E8F5F1] text-[#0A5C4F] flex items-center justify-center shrink-0 border border-[#B7D8CA]">
            <ShieldCheck className="w-5 h-5" aria-hidden="true" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-[#122421] tracking-tight">
              गोपनीयता एवं Analytics (Privacy Notice)
            </h3>
            <span className="text-[11px] text-[#475B57] block">
              Janta Hospital, Lohardaga
            </span>
          </div>
        </div>

        {/* Narrative */}
        <p className="text-xs text-[#2E4540] leading-relaxed">
          हम वेबसाइट के तकनीकी सुधार हेतु प्राइवेसी-सुरक्षित Analytics का उपयोग करते हैं।
          हम <strong>कोई विज्ञापन कुकीज, व्यक्तिगत संपर्क या स्वास्थ्य संबंधी निजी जानकारी एकत्र नहीं करते</strong>।
        </p>

        <p className="text-[11px] text-[#5A736E] leading-normal">
          We use privacy-conscious analytics for site performance. No advertising or personal health data is collected.{" "}
          <Link
            href="/privacy-policy"
            className="text-[#0A5C4F] font-semibold underline underline-offset-2 hover:text-[#07463C]"
          >
            प्राइवेसी पॉलिसी पढ़ें
          </Link>
        </p>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 pt-1">
          <button
            type="button"
            onClick={handleAccept}
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#0A5C4F] text-white text-xs font-semibold hover:bg-[#07463C] transition-colors shadow-2xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A5C4F]"
          >
            <Check className="w-3.5 h-3.5" aria-hidden="true" />
            <span>स्वीकार करें (Accept)</span>
          </button>

          <button
            type="button"
            onClick={handleDecline}
            className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-[#F0F6F3] text-[#2E4540] text-xs font-medium hover:bg-[#E2EFE9] transition-colors border border-[#D2E6DC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A5C4F]"
          >
            <X className="w-3.5 h-3.5" aria-hidden="true" />
            <span>अस्वीकार (Decline)</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
