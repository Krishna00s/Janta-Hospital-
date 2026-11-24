import { Phone, Clock, Stethoscope, ArrowUpRight } from "lucide-react";
import { Doctor } from "@/content/doctors";
import { DoctorPortrait } from "@/components/doctors/DoctorPortrait";

interface DoctorCardProps {
  doctor: Doctor;
  receptionPhone: string;
  featured?: boolean;
}

export function DoctorCard({
  doctor,
  receptionPhone = "+91 93419 00715",
  featured = false,
}: DoctorCardProps) {
  const isOwner = Boolean(doctor.isOwner);
  const isGeneralPhysician = doctor.category === "General Physicians";
  const cleanDigits = receptionPhone.replace(/\D/g, "");
  const phoneHref = `tel:+${cleanDigits.startsWith("91") ? cleanDigits : "91" + cleanDigits}`;

  return (
    <article
      className={`group relative rounded-2xl sm:rounded-3xl p-5 sm:p-6 transition-all flex flex-col justify-between card-hover-lift ${
        isOwner || featured
          ? "bg-linear-to-b from-white to-[#F7FCF9] border-2 border-[#97C5B3] shadow-xs"
          : "bg-white border border-[#B7D8CA] hover:border-[#8DBDAA] shadow-2xs"
      }`}
    >
      <div className="space-y-4">
        {/* Top Badges: Category & Availability */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${
              isOwner
                ? "bg-[#0A5C4F] text-white shadow-2xs"
                : isGeneralPhysician
                ? "bg-[#E8F5F1] text-[#0A5C4F] border border-[#B7D8CA]"
                : "bg-[#F1F8F5] text-[#244E44] border border-[#C5E1D5]"
            }`}
          >
            <Stethoscope className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{doctor.category}</span>
          </span>

          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#F4FAF7] text-[#2E4540] border border-[#D2E6DC] text-[11px] font-medium">
            <Clock className="w-3 h-3 text-[#0A5C4F]" aria-hidden="true" />
            <span>{doctor.availabilityType}</span>
          </span>
        </div>

        {/* 1. Doctor's Name, Specialty & Role */}
        <div className="space-y-1">
          <div className="flex items-baseline justify-between gap-2">
            <h3 className="text-lg sm:text-xl font-semibold tracking-tight text-[#122421] group-hover:text-[#0A5C4F] transition-colors leading-snug">
              {doctor.name}
            </h3>
            {isOwner && (
              <span className="shrink-0 text-[11px] font-semibold text-[#0A5C4F] px-2.5 py-0.5 rounded-full bg-[#E8F5F1] border border-[#B7D8CA]">
                Hospital Director
              </span>
            )}
          </div>

          <p className="text-xs sm:text-sm font-medium text-[#0A5C4F]">
            {doctor.role}
          </p>
        </div>

        {/* 2. Compact Portrait Slot (Restrained Height, not oversized) */}
        <div className="w-full">
          <DoctorPortrait doctor={doctor} aspectRatio="compact" />
        </div>

        {/* 3. Relevant Verified Information */}
        <div className="space-y-1">
          <p className="text-xs sm:text-sm text-[#2E4540] leading-relaxed font-normal">
            {doctor.availabilityDetails}
          </p>
        </div>
      </div>

      {/* 4. Clear Details / Contact Action */}
      <div className="pt-4 mt-4 border-t border-[#D2E6DC]/70 flex items-center justify-between gap-3">
        <a
          href={phoneHref}
          className={`inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors min-h-[40px] ${
            isOwner
              ? "bg-[#0A5C4F] text-white hover:bg-[#07463C] shadow-2xs"
              : "bg-[#EAF6F1] text-[#0A5C4F] hover:bg-[#0A5C4F] hover:text-white border border-[#B7D8CA]"
          }`}
          aria-label={`Inquire about ${doctor.name} availability`}
        >
          <Phone className="w-3.5 h-3.5" aria-hidden="true" />
          <span>उपलब्धता पूछें</span>
        </a>

        <span className="text-xs text-[#475B57] font-medium text-right">
          {isGeneralPhysician ? "दैनिक OPD परामर्श" : "On-call Specialist"}
        </span>
      </div>
    </article>
  );
}
