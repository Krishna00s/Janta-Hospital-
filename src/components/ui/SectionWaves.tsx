"use client";

import { FC, useEffect, useRef, useState } from "react";

/**
 * SectionWaves Component Collection
 *
 * Distinct, large, organic multi-layered SVG compositions connecting homepage sections.
 * Features:
 * - Three-layer palette for rich visible depth without dark or heavy effects:
 *     1. Light mint: #E0F3EC (broad background shapes)
 *     2. Medium sage: #A9DCCB (overlapping curves)
 *     3. Accent green: #75BCA5 (sparingly for contour lines and highlights)
 * - Deep medical green (#0A5C4F) and Forest footer base (#073B32) for branding & footer.
 * - Distinct asymmetric Bézier silhouettes per section.
 * - Static by default for peak performance; continuous drift with offscreen pausing on footer.
 * - pointer-events: none, aria-hidden="true", overflow-hidden.
 */

// 1. Hero → Inside Janta Hospital
export const HeroToGalleryWave: FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none select-none relative w-full overflow-hidden leading-none z-10 ${className}`}
    >
      <svg
        viewBox="0 0 1440 140"
        fill="none"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-10 sm:h-14 lg:h-20 block"
      >
        {/* Layer 1: Light mint broad background shape */}
        <path
          d="M 0,45 C 320,105 680,15 1020,65 C 1220,95 1350,35 1440,20 L 1440,140 L 0,140 Z"
          fill="#E0F3EC"
          opacity="0.95"
        />
        {/* Layer 2: Medium sage overlapping wave with asymmetric crest under courtyard */}
        <path
          d="M 0,72 C 280,35 640,105 960,55 C 1180,20 1340,75 1440,60 L 1440,140 L 0,140 Z"
          fill="#A9DCCB"
          opacity="0.85"
        />
        {/* Layer 3: Gallery surface transition into #FCFDFD */}
        <path
          d="M 0,98 C 360,68 740,118 1100,82 C 1260,68 1370,92 1440,88 L 1440,140 L 0,140 Z"
          fill="#FCFDFD"
        />
        {/* Accent green contour ridge */}
        <path
          d="M 0,72 C 280,35 640,105 960,55 C 1180,20 1340,75 1440,60"
          stroke="#75BCA5"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

// 1b. Dedicated Page Hero → Content Wave (Clean transition into #FFFFFF)
export const PageHeroToContentWave: FC<{ className?: string; targetColor?: string }> = ({
  className = "",
  targetColor = "#FFFFFF",
}) => {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none select-none relative w-full overflow-hidden leading-none z-10 ${className}`}
    >
      <svg
        viewBox="0 0 1440 100"
        fill="none"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-8 sm:h-12 lg:h-16 block"
      >
        <path
          d="M 0,20 C 320,65 680,10 1040,45 C 1220,65 1350,25 1440,15 L 1440,100 L 0,100 Z"
          fill="#E0F3EC"
          opacity="0.9"
        />
        <path
          d="M 0,45 C 280,20 640,75 980,35 C 1180,15 1340,55 1440,45 L 1440,100 L 0,100 Z"
          fill="#A9DCCB"
          opacity="0.85"
        />
        <path
          d="M 0,70 C 360,45 740,85 1100,55 C 1260,45 1370,68 1440,65 L 1440,100 L 0,100 Z"
          fill={targetColor}
        />
        <path
          d="M 0,45 C 280,20 640,75 980,35 C 1180,15 1340,55 1440,45"
          stroke="#75BCA5"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

// 2. Inside Janta Hospital → Medical Services
export const GalleryToServicesWave: FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none select-none relative w-full overflow-hidden leading-none z-10 ${className}`}
    >
      <svg
        viewBox="0 0 1440 130"
        fill="none"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-10 sm:h-14 lg:h-20 block"
      >
        {/* Layer 1: Leftward light mint swell */}
        <path
          d="M 0,25 C 240,0 580,75 880,30 C 1140,-10 1340,55 1440,40 L 1440,130 L 0,130 Z"
          fill="#E0F3EC"
          opacity="0.9"
        />
        {/* Layer 2: Central medium sage rolling wave */}
        <path
          d="M 0,55 C 340,85 720,25 1060,65 C 1240,85 1360,40 1440,50 L 1440,130 L 0,130 Z"
          fill="#A9DCCB"
          opacity="0.85"
        />
        {/* Layer 3: Clean clinical white surface into Services */}
        <path
          d="M 0,85 C 300,60 660,100 1020,72 C 1220,58 1350,84 1440,80 L 1440,130 L 0,130 Z"
          fill="#FFFFFF"
        />
        {/* Accent green contour line */}
        <path
          d="M 0,55 C 340,85 720,25 1060,65 C 1240,85 1360,40 1440,50"
          stroke="#75BCA5"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

// 3. Medical Services → Meet Our Doctors
export const ServicesToDoctorsWave: FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none select-none relative w-full overflow-hidden leading-none z-10 ${className}`}
    >
      <svg
        viewBox="0 0 1440 150"
        fill="none"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-12 sm:h-16 lg:h-22 block"
      >
        {/* Layer 1: Broad light mint swell */}
        <path
          d="M 0,35 C 380,85 760,5 1100,65 C 1260,95 1370,45 1440,30 L 1440,150 L 0,150 Z"
          fill="#E0F3EC"
          opacity="0.95"
        />
        {/* Layer 2: Medium sage wave with prominent rightward crest */}
        <path
          d="M 0,65 C 260,30 620,100 940,50 C 1180,10 1340,70 1440,55 L 1440,150 L 0,150 Z"
          fill="#A9DCCB"
          opacity="0.88"
        />
        {/* Layer 3: Doctors section warm off-white surface (#FCFDFD) */}
        <path
          d="M 0,95 C 320,70 700,115 1060,80 C 1240,62 1360,92 1440,88 L 1440,150 L 0,150 Z"
          fill="#FCFDFD"
        />
        {/* Accent green contour line */}
        <path
          d="M 0,65 C 260,30 620,100 940,50 C 1180,10 1340,70 1440,55"
          stroke="#75BCA5"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

// 4. Meet Our Doctors → Location & Contact
export const DoctorsToLocationWave: FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none select-none relative w-full overflow-hidden leading-none z-10 ${className}`}
    >
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-10 sm:h-14 lg:h-20 block"
      >
        {/* Layer 1: Broad light mint wave */}
        <path
          d="M 0,30 C 300,65 660,5 1000,50 C 1200,75 1350,25 1440,20 L 1440,120 L 0,120 Z"
          fill="#E0F3EC"
          opacity="0.95"
        />
        {/* Layer 2: Medium sage wave */}
        <path
          d="M 0,55 C 340,25 720,75 1080,42 C 1260,25 1360,58 1440,52 L 1440,120 L 0,120 Z"
          fill="#A9DCCB"
          opacity="0.85"
        />
        {/* Layer 3: White transition into Location & Contact */}
        <path
          d="M 0,82 C 340,55 720,100 1080,68 C 1260,50 1360,82 1440,78 L 1440,120 L 0,120 Z"
          fill="#FFFFFF"
        />
        {/* Accent green contour line */}
        <path
          d="M 0,55 C 340,25 720,75 1080,42 C 1260,25 1360,58 1440,52"
          stroke="#75BCA5"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

// 5. Location & Contact → Deep Medical Green Footer (STRONGEST TRANSITION — ANIMATED)
export const LocationToFooterWave: FC<{ className?: string }> = ({ className = "" }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    // Unpause 300px before entering viewport so drift is seamlessly active on arrival
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { rootMargin: "300px 0px 300px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={`pointer-events-none select-none relative w-full overflow-hidden leading-none z-20 ${className}`}
    >
      <div className="relative w-full h-14 sm:h-20 lg:h-24 overflow-hidden">
        {/* Layer 1: Light Mint Sky/Swell (#E0F3EC) */}
        <svg
          viewBox="0 0 1440 200"
          fill="none"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 w-full h-full block"
        >
          <path
            d="M 0,35 C 340,100 740,0 1080,70 C 1260,105 1380,40 1440,30 L 1440,200 L 0,200 Z"
            fill="#E0F3EC"
            opacity="0.95"
          />
        </svg>

        {/* Layer 2: Animated Drifting Medium Sage Wave (#A9DCCB) (Seamless continuous drift) */}
        <div
          className={`absolute inset-0 w-[200%] h-full animate-wave-slow flex opacity-90 ${
            !inView ? "animation-paused" : ""
          }`}
        >
          <svg
            viewBox="0 0 2880 200"
            fill="none"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full block"
          >
            <path
              d="M 0,70 
                 C 260,30 580,110 900,60 
                 C 1140,20 1320,90 1440,70 
                 C 1700,30 2020,110 2340,60 
                 C 2580,20 2760,90 2880,70 
                 L 2880,200 L 0,200 Z"
              fill="#A9DCCB"
            />
          </svg>
        </div>

        {/* Layer 3: Accent Green Wave (#75BCA5) */}
        <svg
          viewBox="0 0 1440 200"
          fill="none"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 w-full h-full block"
        >
          <path
            d="M 0,95 C 300,55 640,125 980,80 C 1180,50 1340,95 1440,90 L 1440,200 L 0,200 Z"
            fill="#75BCA5"
            opacity="0.85"
          />
        </svg>

        {/* Layer 4: Deep Emerald Wave (#0A5C4F) with Luminous Mint Highlight */}
        <svg
          viewBox="0 0 1440 200"
          fill="none"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 w-full h-full block"
        >
          <path
            d="M 0,120 C 320,75 680,150 1020,100 C 1220,70 1360,120 1440,115 L 1440,200 L 0,200 Z"
            fill="#0A5C4F"
          />
          {/* Luminous contour accent line */}
          <path
            d="M 0,120 C 320,75 680,150 1020,100 C 1220,70 1360,120 1440,115"
            stroke="#7CE4C9"
            strokeWidth="2"
            strokeOpacity="0.8"
            strokeLinecap="round"
          />
        </svg>

        {/* Layer 5: Foundation Deep Green Footer Base (#073B32) */}
        <svg
          viewBox="0 0 1440 200"
          fill="none"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 w-full h-full block"
        >
          <path
            d="M 0,155 C 280,125 620,180 960,140 C 1180,115 1340,160 1440,155 L 1440,200 L 0,200 Z"
            fill="#073B32"
          />
        </svg>
      </div>
    </div>
  );
};
