import { FC } from "react";

interface AnimatedWavesProps {
  /**
   * Position of the wave relative to the section:
   * - "bottom": Flows along the bottom edge, curving upward
   * - "top": Flows along the top edge, curving downward
   */
  position?: "top" | "bottom";

  /**
   * Visual variant:
   * - "standard": 3-layer rich mint and sage organic waves
   * - "subtle": 2-layer pale mint wave for photographic transitions
   * - "crest": Crisp accent wave with highlighted contour line
   */
  variant?: "standard" | "subtle" | "crest";

  /**
   * Additional custom CSS classes (e.g. for height or z-index)
   */
  className?: string;

  /**
   * Custom fill color for the bottom base layer (defaults to white)
   */
  baseFill?: string;
}

/**
 * AnimatedWaves Component
 * Reusable editorial motion component rendering seamless, layered SVG wave drift.
 *
 * Palette:
 * - Light mint: #E0F3EC
 * - Medium sage: #A9DCCB
 * - Accent green: #75BCA5
 */
export const AnimatedWaves: FC<AnimatedWavesProps> = ({
  position = "bottom",
  variant = "standard",
  className = "",
  baseFill = "#FFFFFF",
}) => {
  const isTop = position === "top";

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none select-none absolute left-0 right-0 w-full overflow-hidden z-10 ${
        isTop ? "top-0 rotate-180" : "bottom-0"
      } ${className}`}
    >
      <div className="relative w-full h-full overflow-hidden">
        {/* Layer 1: Deepest Background Wave (Light mint #E0F3EC, 34s drift) */}
        <div className="absolute inset-0 w-[200%] h-full animate-wave-slow flex">
          <svg
            viewBox="0 0 2400 120"
            preserveAspectRatio="none"
            className="w-full h-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 0 40 
                 C 180 20, 420 68, 650 30 
                 C 880 -8, 1020 60, 1200 40 
                 C 1380 20, 1620 68, 1850 30 
                 C 2080 -8, 2220 60, 2400 40 
                 L 2400 120 L 0 120 Z"
              fill={variant === "subtle" ? "#EBF7F2" : "#E0F3EC"}
              opacity={variant === "subtle" ? "0.7" : "0.95"}
            />
          </svg>
        </div>

        {/* Layer 2: Mid-layer Wave (Medium sage #A9DCCB, Counter-drift, 28s) */}
        {variant !== "subtle" && (
          <div className="absolute inset-0 w-[200%] h-full animate-wave-reverse flex">
            <svg
              viewBox="0 0 2400 120"
              preserveAspectRatio="none"
              className="w-full h-full"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M 0 60 
                   C 200 80, 480 32, 750 72 
                   C 950 102, 1000 40, 1200 60 
                   C 1400 80, 1680 32, 1950 72 
                   C 2150 102, 2200 40, 2400 60 
                   L 2400 120 L 0 120 Z"
                fill="#A9DCCB"
                opacity="0.8"
              />
            </svg>
          </div>
        )}

        {/* Layer 3: Foreground Crest Wave (Accent green #75BCA5 / baseFill, 22s drift) */}
        <div className="absolute inset-0 w-[200%] h-full animate-wave-fast flex">
          <svg
            viewBox="0 0 2400 120"
            preserveAspectRatio="none"
            className="w-full h-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 0 78 
                 C 160 62, 380 96, 620 70 
                 C 860 44, 1040 94, 1200 78 
                 C 1360 62, 1580 96, 1820 70 
                 C 2060 44, 2240 94, 2400 78 
                 L 2400 120 L 0 120 Z"
              fill={variant === "crest" ? "#75BCA5" : baseFill}
              opacity={variant === "crest" ? "0.6" : "0.95"}
            />

            {/* Layer 4: Accent Contour Line */}
            {variant === "crest" && (
              <path
                d="M 0 78 
                   C 160 62, 380 96, 620 70 
                   C 860 44, 1040 94, 1200 78 
                   C 1360 62, 1580 96, 1820 70 
                   C 2060 44, 2240 94, 2400 78"
                stroke="#75BCA5"
                strokeWidth="2"
                strokeLinecap="round"
                opacity="0.9"
              />
            )}
          </svg>
        </div>
      </div>
    </div>
  );
};
