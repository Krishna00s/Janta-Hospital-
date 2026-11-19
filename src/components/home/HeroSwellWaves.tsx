"use client";

import { FC, useEffect, useRef, useState } from "react";

export const HeroSwellWaves: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(true);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { rootMargin: "200px 0px 200px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className={`absolute bottom-0 left-0 w-[320px] sm:w-[480px] lg:w-[680px] xl:w-[780px] h-[200px] sm:h-[280px] lg:h-[380px] pointer-events-none select-none z-0 overflow-hidden ${
        !inView ? "animation-paused" : ""
      }`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 780 380"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Layer 1 Gradient: Light Mint #E0F3EC */}
          <linearGradient id="wave-bg-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E0F3EC" stopOpacity="0.95" />
            <stop offset="65%" stopColor="#E0F3EC" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>

          {/* Layer 2 Gradient: Medium Sage #A9DCCB */}
          <linearGradient id="wave-secondary-grad" x1="0%" y1="0%" x2="100%" y2="80%">
            <stop offset="0%" stopColor="#A9DCCB" stopOpacity="0.85" />
            <stop offset="60%" stopColor="#E0F3EC" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>

          {/* Layer 3 Gradient: Accent Green #75BCA5 */}
          <linearGradient id="wave-primary-grad" x1="0%" y1="0%" x2="80%" y2="100%">
            <stop offset="0%" stopColor="#75BCA5" stopOpacity="0.8" />
            <stop offset="55%" stopColor="#A9DCCB" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#E0F3EC" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Layer 1: Background gentle swell */}
        <path
          d="M -40 90 C 140 80, 310 180, 540 280 C 630 325, 700 350, 780 380 L -40 380 Z"
          fill="url(#wave-bg-grad)"
          className="animate-hero-swell-1 origin-bottom-left"
        />

        {/* Layer 2: Secondary pale mint wave */}
        <path
          d="M -40 175 C 120 150, 260 235, 460 315 C 550 350, 620 365, 700 380 L -40 380 Z"
          fill="url(#wave-secondary-grad)"
          className="animate-hero-swell-2 origin-bottom-left"
        />

        {/* Layer 3: Primary soft botanical green crest */}
        <path
          d="M -40 255 C 100 215, 220 270, 380 335 C 450 360, 520 370, 580 380 L -40 380 Z"
          fill="url(#wave-primary-grad)"
          className="animate-hero-swell-3 origin-bottom-left"
        />
      </svg>
    </div>
  );
};
