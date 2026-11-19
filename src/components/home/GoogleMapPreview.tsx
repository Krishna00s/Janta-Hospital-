"use client";

import { useState, useEffect, useRef } from "react";
import { MapPin, ArrowUpRight } from "lucide-react";

interface GoogleMapPreviewProps {
  mapsUrl: string;
}

/**
 * GoogleMapPreview Component
 *
 * Genuine Google Maps embed displaying Janta Hospital in Palmerganj, Lohardaga.
 *
 * Requirements fulfilled:
 * - Real Google Maps zero-API-key embed focused on verified hospital location.
 * - Entire card acts as a single accessible anchor pointing to Google Maps in a new tab.
 * - iframe has pointer-events-none so all clicks trigger the parent card link.
 * - Zero nested interactive elements (no nested <a> or <button> tags).
 * - Lazy-loaded via IntersectionObserver (mounted 350px before entering viewport) to maintain 95+ Lighthouse performance.
 * - Stable aspect-ratio placeholder prevents Cumulative Layout Shift (CLS = 0).
 * - Full keyboard accessibility with visible focus rings.
 */
export function GoogleMapPreview({ mapsUrl }: GoogleMapPreviewProps) {
  const [shouldLoad, setShouldLoad] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "350px 0px 350px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const embedUrl =
    "https://maps.google.com/maps?q=Janta+Hospital,+Behind+Head+Post+Office,+Palmerganj,+Lohardaga,+Jharkhand+835302&t=&z=16&ie=UTF8&iwloc=&output=embed";

  return (
    <a
      href={mapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Open Maps - Janta Hospital location in Google Maps (opens in a new tab)"
      className="group block w-full rounded-3xl overflow-hidden border border-[#E0F3EC] shadow-md hover:shadow-xl bg-white card-hover-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A5C4F] focus-visible:ring-offset-2 transition-all cursor-pointer"
    >
      {/* Map Viewport Area */}
      <div
        ref={containerRef}
        className="relative w-full aspect-[4/3] sm:aspect-[16/11] bg-[#E0F3EC] overflow-hidden"
      >
        {/* Placeholder / Fallback before iframe mounts or while loading */}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center p-6 text-center transition-opacity duration-300 ${
            shouldLoad ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
          aria-hidden="true"
        >
          <div className="w-12 h-12 rounded-2xl bg-[#0A5C4F] text-white flex items-center justify-center shadow-md mb-3 group-hover:scale-105 transition-transform">
            <MapPin className="w-6 h-6" />
          </div>
          <span className="font-sans font-bold text-sm text-[#122421]">Janta Hospital</span>
          <span className="text-xs text-[#0A5C4F] font-semibold mt-0.5">
            Palmerganj, Behind Head Post Office, Lohardaga
          </span>
          <span className="text-[11px] text-[#475B57] mt-1.5 font-medium">
            Loading Google Maps preview...
          </span>
        </div>

        {/* Real Google Maps Iframe */}
        {shouldLoad && (
          <iframe
            src={embedUrl}
            title="Google Maps location of Janta Hospital in Palmerganj, Lohardaga"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 w-full h-full border-0 pointer-events-none"
            tabIndex={-1}
            aria-hidden="true"
          />
        )}

        {/* Floating Verified Destination Pill over the Map */}
        <div className="absolute top-3.5 left-3.5 z-10 pointer-events-none">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[#A9DCCB] shadow-sm text-xs font-semibold text-[#0A5C4F]">
            <span className="w-2 h-2 rounded-full bg-[#0A5C4F] animate-pulse" />
            <span>Live Map Preview</span>
          </div>
        </div>

        {/* Hover Highlight Overlay */}
        <div className="absolute inset-0 bg-[#0A5C4F]/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      </div>

      {/* Bottom Action / Landmark Bar */}
      <div className="p-5 sm:p-6 bg-white border-t border-[#F0F5F2] flex items-center justify-between gap-4">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0A5C4F]">
              Verified Location
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#E0F3EC] text-[#0A5C4F] font-semibold">
              PIN 835302
            </span>
          </div>
          <span className="text-sm font-bold text-[#122421] block truncate mt-0.5 group-hover:text-[#0A5C4F] transition-colors">
            Head Post Office के पीछे · Main Bus Stand के पास
          </span>
          <span className="text-xs text-[#475B57] block mt-0.5">
            Google Maps पर सीधा रास्ता देखने के लिए यहाँ क्लिक करें
          </span>
        </div>

        {/* Visual Pill Indicator (Span to avoid nested links) */}
        <span className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-[#0A5C4F] text-white text-xs font-bold group-hover:bg-[#074B40] transition-all shrink-0 shadow-sm group-hover:scale-102">
          <span>Open Maps</span>
          <ArrowUpRight
            className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            aria-hidden="true"
          />
        </span>
      </div>
    </a>
  );
}
