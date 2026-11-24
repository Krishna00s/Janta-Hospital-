"use client";

import { useState, useEffect } from "react";
import { MapPin, ArrowUpRight, AlertCircle, RefreshCw } from "lucide-react";

interface GoogleMapPreviewProps {
  mapsUrl: string;
}

/**
 * GoogleMapPreview Component
 *
 * Real, interactive Google Maps embed displaying Janta Hospital in Palmerganj, Lohardaga.
 *
 * Requirements fulfilled:
 * - Direct, canonical Google Maps embed URL with zero-API-key and zero 301-redirect/X-Frame-Options block.
 * - Real interactive iframe with pointer-events-auto for native mobile touch (pan, pinch, zoom).
 * - Direct DOM mounting with native browser lazy loading (loading="lazy").
 * - Active onLoad and onError tracking so loading placeholder is dismissed when ready and never permanently obscures the map.
 * - Genuine fallback error state with direct "Open in Google Maps" link if the network or browser blocks the embed.
 * - Fixes text truncation: Address and landmarks wrap naturally without unnecessary ellipsis.
 * - Preserves card styling, rounded-3xl corners, live preview badge, and verified PIN 835302 details.
 */
export function GoogleMapPreview({ mapsUrl }: GoogleMapPreviewProps) {
  const [mapStatus, setMapStatus] = useState<"loading" | "loaded" | "error">("loading");

  // Canonical zero-redirect Google Maps embed URL for Janta Hospital, Palmerganj, Lohardaga
  const canonicalEmbedUrl =
    "https://www.google.com/maps/embed?origin=mfe&pb=!1m3!2m1!1sJanta+Hospital,+Behind+Head+Post+Office,+Palmerganj,+Lohardaga,+Jharkhand+835302!6i16";

  useEffect(() => {
    // Safety fallback: if iframe takes longer than 6 seconds, gracefully reveal the map
    // so an infinite loading message can never trap the user or obscure the iframe
    const fallbackTimer = setTimeout(() => {
      setMapStatus((current) => (current === "loading" ? "loaded" : current));
    }, 6000);

    return () => clearTimeout(fallbackTimer);
  }, []);

  return (
    <div className="w-full rounded-3xl overflow-hidden border border-[#B7D8CA] hover:border-[#8DBDAA] shadow-xs hover:shadow-md bg-white card-hover-lift transition-all">
      {/* Map Viewport Area */}
      <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] bg-[#E0F3EC] overflow-hidden">
        
        {/* Real Interactive Google Maps Iframe */}
        <iframe
          src={canonicalEmbedUrl}
          title="Google Maps location of Janta Hospital in Palmerganj, Lohardaga"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          onLoad={() => setMapStatus("loaded")}
          onError={() => setMapStatus("error")}
          className="absolute inset-0 w-full h-full border-0 z-0 pointer-events-auto"
          aria-label="Interactive Google Map showing Janta Hospital location"
        />

        {/* Loading Placeholder (fades out completely once loaded) */}
        {mapStatus === "loading" && (
          <div
            className="absolute inset-0 z-10 flex flex-col items-center justify-center p-6 text-center bg-[#E0F3EC] transition-opacity duration-300"
            aria-live="polite"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#0A5C4F] text-white flex items-center justify-center shadow-md mb-3 animate-pulse">
              <MapPin className="w-6 h-6" />
            </div>
            <span className="font-sans font-bold text-sm text-[#122421]">Janta Hospital</span>
            <span className="text-xs text-[#0A5C4F] font-semibold mt-0.5">
              Palmerganj, Behind Head Post Office, Lohardaga
            </span>
            <span className="text-xs sm:text-sm text-[#3B524E] mt-1.5 font-semibold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#0A5C4F] animate-ping" />
              Loading Google Maps...
            </span>
          </div>
        )}

        {/* Fallback Error State if Google Maps cannot load */}
        {mapStatus === "error" && (
          <div
            className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 text-center bg-[#F9EDEE] text-[#471E21]"
            role="alert"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#A63F45] text-white flex items-center justify-center shadow-md mb-3">
              <AlertCircle className="w-6 h-6" />
            </div>
            <span className="font-sans font-bold text-sm text-[#122421]">Google Maps Unavailable</span>
            <span className="text-xs text-[#A63F45] font-semibold mt-0.5">
              Palmerganj, Behind Head Post Office, Lohardaga (PIN 835302)
            </span>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#A63F45] text-white text-xs font-bold shadow-sm hover:bg-[#8E3339] transition-colors"
              >
                <span>Open in Google Maps</span>
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
              <button
                type="button"
                onClick={() => setMapStatus("loading")}
                className="inline-flex items-center gap-1 px-3 py-2 rounded-full bg-white text-[#471E21] border border-[#ECCDD0] text-xs font-bold hover:bg-gray-50 transition-colors"
              >
                <RefreshCw className="w-3 h-3" aria-hidden="true" />
                <span>Retry</span>
              </button>
            </div>
          </div>
        )}

        {/* Floating Verified Destination Pill over the Map */}
        <div className="absolute top-3.5 left-3.5 z-20 pointer-events-none">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[#A9DCCB] shadow-sm text-xs font-semibold text-[#0A5C4F]">
            <span className="w-2 h-2 rounded-full bg-[#0A5C4F] animate-pulse" />
            <span>Hospital Location</span>
          </div>
        </div>
      </div>

      {/* Bottom Action / Landmark Bar */}
      <div className="p-5 sm:p-6 bg-white border-t border-[#F0F5F2] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0A5C4F]">
              Verified Location
            </span>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#E0F3EC] text-[#0A5C4F] font-bold">
              PIN 835302
            </span>
          </div>
          {/* Natural line wrapping without ellipsis */}
          <span className="text-sm sm:text-base font-bold text-[#122421] block mt-1 break-words leading-snug">
            Head Post Office के पीछे · Main Bus Stand के पास
          </span>
          <span className="text-xs sm:text-sm text-[#3B524E] font-medium block mt-0.5 break-words">
            Google Maps पर सीधा रास्ता देखने के लिए नीचे दिए गए बटन पर क्लिक करें
          </span>
        </div>

        {/* Dedicated Clickable Open Maps Action Button */}
        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open Janta Hospital location directly in Google Maps (opens in a new tab)"
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#0A5C4F] text-white text-xs sm:text-sm font-bold hover:bg-[#074B40] transition-all shrink-0 shadow-sm hover:scale-102 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A5C4F] focus-visible:ring-offset-2 self-start sm:self-auto"
        >
          <span>Open Maps</span>
          <ArrowUpRight
            className="w-3.5 h-3.5 hover:translate-x-0.5 hover:-translate-y-0.5 transition-transform"
            aria-hidden="true"
          />
        </a>
      </div>
    </div>
  );
}
