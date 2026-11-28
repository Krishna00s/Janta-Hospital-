"use client";

import { useEffect, useState } from "react";
import { ShieldCheck, Check, X, RotateCcw } from "lucide-react";
import {
  getSavedConsentStatus,
  setAnalyticsConsent,
  CONSENT_STORAGE_KEY,
  CONSENT_EVENT_NAME,
  ConsentStatus,
} from "@/lib/analytics/gtag";

/**
 * ConsentManagerControl Component
 *
 * Interactive preference manager rendered on the Privacy Policy page.
 * Allows visitors to inspect, modify, or revoke their analytics consent at any time.
 */
export function ConsentManagerControl() {
  const [status, setStatus] = useState<ConsentStatus | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    setStatus(getSavedConsentStatus());

    const handleUpdate = () => {
      setStatus(getSavedConsentStatus());
    };

    window.addEventListener(CONSENT_EVENT_NAME, handleUpdate);
    return () => {
      window.removeEventListener(CONSENT_EVENT_NAME, handleUpdate);
    };
  }, []);

  const handleGrant = () => {
    setAnalyticsConsent("granted");
    setStatus("granted");
    setMessage("Analytics सहमति स्वीकृत कर दी गई है। (Analytics consent granted)");
    setTimeout(() => setMessage(null), 4000);
  };

  const handleDeny = () => {
    setAnalyticsConsent("denied");
    setStatus("denied");
    setMessage("Analytics सहमति अस्वीकृत कर दी गई है। (Analytics consent revoked)");
    setTimeout(() => setMessage(null), 4000);
  };

  const handleReset = () => {
    try {
      localStorage.removeItem(CONSENT_STORAGE_KEY);
    } catch {
      // storage unavailable
    }
    setStatus(null);
    window.dispatchEvent(
      new CustomEvent(CONSENT_EVENT_NAME, { detail: { consent: null } })
    );
    setMessage("सहमति रीसेट कर दी गई है। सूचना बैनर फिर से दिखाई देगा। (Choice reset)");
    setTimeout(() => setMessage(null), 4000);
  };

  return (
    <div className="p-5 sm:p-6 rounded-2xl bg-[#F4FAF7] border border-[#B7D8CA] text-xs sm:text-sm space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#D2E6DC] pb-3">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-[#0A5C4F]" aria-hidden="true" />
          <span className="font-semibold text-[#122421]">
            आपकी वर्तमान Analytics सहमति स्थिति (Current Status):
          </span>
        </div>

        <div>
          {status === "granted" && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E0F3EC] text-[#0A5C4F] font-bold text-xs border border-[#A9DCCB]">
              <span className="w-2 h-2 rounded-full bg-[#0A5C4F]" />
              स्वीकृत (Analytics Enabled)
            </span>
          )}
          {status === "denied" && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FCE8E6] text-[#A63F45] font-bold text-xs border border-[#F5C2BE]">
              <span className="w-2 h-2 rounded-full bg-[#A63F45]" />
              अस्वीकृत (Analytics Disabled)
            </span>
          )}
          {status === null && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#475B57] font-medium text-xs border border-gray-300">
              <span className="w-2 h-2 rounded-full bg-gray-400" />
              अनिर्णित (Pending Decision)
            </span>
          )}
        </div>
      </div>

      <p className="text-xs text-[#2E4540] leading-relaxed">
        आप नीचे दिए गए विकल्पों से किसी भी समय अपनी Analytics सहमति बदल सकते हैं या वापस ले सकते हैं। अस्वीकृत स्थिति में Google Analytics की कोई भी स्क्रिप्ट आपके ब्राउज़र में लोड नहीं होती है।
      </p>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center gap-2 pt-1">
        <button
          type="button"
          onClick={handleGrant}
          className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A5C4F] ${
            status === "granted"
              ? "bg-[#0A5C4F] text-white shadow-xs cursor-default"
              : "bg-white text-[#0A5C4F] hover:bg-[#E8F5F1] border border-[#B7D8CA]"
          }`}
        >
          <Check className="w-3.5 h-3.5" aria-hidden="true" />
          <span>Enable Analytics</span>
        </button>

        <button
          type="button"
          onClick={handleDeny}
          className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A5C4F] ${
            status === "denied"
              ? "bg-[#A63F45] text-white shadow-xs cursor-default"
              : "bg-white text-[#5A736E] hover:bg-gray-100 border border-gray-300"
          }`}
        >
          <X className="w-3.5 h-3.5" aria-hidden="true" />
          <span>Disable Analytics</span>
        </button>

        <button
          type="button"
          onClick={handleReset}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium text-[#475B57] hover:bg-gray-100 border border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A5C4F]"
        >
          <RotateCcw className="w-3.5 h-3.5 text-[#5A736E]" aria-hidden="true" />
          <span>Reset Choice</span>
        </button>
      </div>

      {message && (
        <div className="p-3 rounded-xl bg-white border border-[#B7D8CA] text-xs text-[#0A5C4F] font-medium animate-in fade-in">
          {message}
        </div>
      )}
    </div>
  );
}
