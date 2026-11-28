import Image from "next/image";
import { Building2, ShieldCheck } from "lucide-react";
import { LeadershipMember } from "@/content/leadership";

interface LeadershipPortraitProps {
  leader: LeadershipMember;
  className?: string;
  priority?: boolean;
  aspectRatio?: "4/5";
  objectPosition?: string;
  compact?: boolean;
}

/**
 * Universal Leadership Portrait Component
 * Enforces a strict 4:5 portrait ratio (800 × 1000 px source standard).
 * Features upper-center object-fit: cover and optional per-person focal-point override.
 * Identical container proportions whether displaying real photograph or initials placeholder.
 */
export function LeadershipPortrait({
  leader,
  className = "",
  priority = false,
  objectPosition,
  compact = false,
}: LeadershipPortraitProps) {
  const resolvedObjectPosition =
    objectPosition || leader.portraitFocalPoint || "50% 20%";

  return (
    <div
      className={`relative w-full aspect-[4/5] rounded-2xl overflow-hidden border border-[#96C7B4] shadow-2xs ${className}`}
      style={{ aspectRatio: "4 / 5" }}
    >
      {leader.portrait ? (
        <Image
          src={leader.portrait}
          alt={leader.portraitAlt || leader.name}
          fill
          priority={priority}
          sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 50vw"
          className="object-cover"
          style={{ objectPosition: resolvedObjectPosition }}
        />
      ) : compact ? (
        /* Compact Editorial Leadership Portrait Placeholder (4:5 Ratio) */
        <div
          className="relative w-full h-full flex flex-col items-center justify-center p-2 select-none bg-linear-to-b from-[#E4F3EC] via-[#EDF7F3] to-[#D5EFE5]"
          aria-label={`Portrait slot for ${leader.name} - ${leader.designation}`}
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.04] bg-[radial-gradient(#0A5C4F_1px,transparent_1px)] [background-size:10px_10px]"
            aria-hidden="true"
          />
          <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center shadow-xs border bg-white text-[#0A5C4F] border-[#89C0AB] ring-2 ring-[#0A5C4F]/10 relative z-10">
            <span className="font-serif font-bold text-base sm:text-lg tracking-tight text-[#0A5C4F]">
              {leader.initials}
            </span>
          </div>
          <div className="flex items-center gap-1 mt-1.5 text-[#0A5C4F] relative z-10">
            <Building2 className="w-3 h-3 text-[#0A5C4F]" aria-hidden="true" />
            <span className="text-[9px] sm:text-[10px] font-semibold tracking-wider uppercase text-[#1C352D] text-center line-clamp-1">
              Director
            </span>
          </div>
        </div>
      ) : (
        /* Refined Editorial Leadership Portrait Placeholder (4:5 Ratio) */
        <div
          className="relative w-full h-full flex flex-col items-center justify-between p-3.5 sm:p-4 select-none bg-linear-to-b from-[#E4F3EC] via-[#EDF7F3] to-[#D5EFE5]"
          aria-label={`Portrait slot for ${leader.name} - ${leader.designation}`}
        >
          {/* Subtle Background Geometric Pattern */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.04] bg-[radial-gradient(#0A5C4F_1px,transparent_1px)] [background-size:12px_12px]"
            aria-hidden="true"
          />

          {/* Top Status Pill */}
          <div className="w-full flex items-center justify-end relative z-10">
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/95 text-[#0A5C4F] border border-[#B7D8CA] font-semibold tracking-wide uppercase">
              {leader.badge}
            </span>
          </div>

          {/* Center Monogram Emblem */}
          <div className="flex flex-col items-center justify-center my-auto relative z-10">
            <div className="w-13 h-13 sm:w-15 sm:h-15 rounded-full flex items-center justify-center shadow-xs border bg-white text-[#0A5C4F] border-[#89C0AB] ring-3 ring-[#0A5C4F]/10">
              <span className="font-serif font-bold text-xl sm:text-2xl tracking-tight text-[#0A5C4F]">
                {leader.initials}
              </span>
            </div>

            <div className="flex items-center gap-1.5 mt-2 text-[#0A5C4F]">
              <Building2 className="w-3.5 h-3.5 text-[#0A5C4F]" aria-hidden="true" />
              <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase text-[#1C352D]">
                {leader.designation}
              </span>
            </div>
          </div>

          {/* Bottom Administrative Verification Label */}
          <div className="w-full pt-1.5 border-t border-[#D2E6DC]/80 flex items-center justify-center gap-1.5 relative z-10 text-[10px] text-[#3D5650] font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-[#0A5C4F]" aria-hidden="true" />
            <span>Hospital Administration</span>
          </div>
        </div>
      )}
    </div>
  );
}
