import Image from "next/image";
import { Stethoscope, UserCheck } from "lucide-react";
import { Doctor } from "@/content/doctors";

interface DoctorPortraitProps {
  doctor: Doctor;
  className?: string;
  priority?: boolean;
  aspectRatio?: "4/5";
  objectPosition?: string;
}

/**
 * Universal Doctor Portrait Component
 * Enforces a strict 4:5 portrait ratio (800 × 1000 px source standard).
 * Features upper-center object-fit: cover and optional per-person focal-point override.
 * Identical container proportions whether displaying real photograph or initials placeholder.
 */
export function DoctorPortrait({
  doctor,
  className = "",
  priority = false,
  objectPosition,
}: DoctorPortraitProps) {
  const isFirst = doctor.displayOrder === 1;
  const resolvedObjectPosition =
    objectPosition || doctor.portraitFocalPoint || "50% 20%";

  return (
    <div
      className={`relative w-full aspect-[4/5] rounded-2xl overflow-hidden border ${
        isFirst
          ? "border-[#96C7B4] shadow-2xs"
          : "border-[#B7D8CA]"
      } ${className}`}
      style={{ aspectRatio: "4 / 5" }}
    >
      {doctor.portrait ? (
        <Image
          src={doctor.portrait}
          alt={doctor.portraitAlt || doctor.name}
          fill
          priority={priority}
          sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 50vw"
          className="object-cover"
          style={{ objectPosition: resolvedObjectPosition }}
        />
      ) : (
        /* Dignified, Intentional Editorial Medical Portrait Placeholder (4:5 Ratio) */
        <div
          className={`relative w-full h-full flex flex-col items-center justify-between p-3 sm:p-4 select-none ${
            isFirst
              ? "bg-linear-to-b from-[#E4F3EC] via-[#EDF7F3] to-[#D5EFE5]"
              : "bg-linear-to-b from-[#EDF6F2] via-[#F4FAF7] to-[#E2EFE9]"
          }`}
          aria-label={`Portrait slot for ${doctor.name}`}
        >
          {/* Subtle Background Clinical Pattern */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.035] bg-[radial-gradient(#0A5C4F_1px,transparent_1px)] [background-size:12px_12px]"
            aria-hidden="true"
          />

          {/* Top Status Pill */}
          <div className="w-full flex items-center justify-end relative z-10">
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/95 text-[#475B57] border border-[#B7D8CA]/60 font-medium tracking-wide">
              {doctor.category === "General Physicians" ? "24/7 Coverage" : "On-call"}
            </span>
          </div>

          {/* Center Monogram Emblem */}
          <div className="flex flex-col items-center justify-center my-auto relative z-10">
            <div
              className={`w-13 h-13 sm:w-15 sm:h-15 rounded-full flex items-center justify-center shadow-2xs border ${
                isFirst
                  ? "bg-white text-[#0A5C4F] border-[#89C0AB] ring-3 ring-[#0A5C4F]/10"
                  : "bg-white text-[#1C352D] border-[#B7D8CA]"
              }`}
            >
              <span className="font-serif font-bold text-xl sm:text-2xl tracking-tight text-[#0A5C4F]">
                {doctor.initials}
              </span>
            </div>

            <div className="flex items-center gap-1.5 mt-2 text-[#0A5C4F]/90">
              <Stethoscope className="w-3.5 h-3.5" aria-hidden="true" />
              <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase text-[#1C352D]">
                {doctor.specialty.split("/")[0].trim()}
              </span>
            </div>
          </div>

          {/* Bottom Verification Label */}
          <div className="w-full pt-1.5 border-t border-[#D2E6DC]/70 flex items-center justify-center gap-1 relative z-10 text-[10px] text-[#475B57] font-medium">
            <UserCheck className="w-3 h-3 text-[#0A5C4F]" aria-hidden="true" />
            <span>सत्यापित डॉक्टर स्लॉट</span>
          </div>
        </div>
      )}
    </div>
  );
}
