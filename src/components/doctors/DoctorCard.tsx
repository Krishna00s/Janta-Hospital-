import Link from "next/link";
import { Phone, Clock, Stethoscope, ArrowRight } from "lucide-react";
import { Doctor } from "@/content/doctors";
import { DoctorPortrait } from "@/components/doctors/DoctorPortrait";

interface DoctorCardProps {
  doctor: Doctor;
  receptionPhone?: string;
  featured?: boolean;
}

export function DoctorCard({
  doctor,
  receptionPhone = "+91 93419 00715",
  featured = false,
}: DoctorCardProps) {
  const isGeneralPhysician = doctor.category === "General Physicians";
  const cleanDigits = receptionPhone.replace(/\D/g, "");
  const phoneHref = `tel:+${cleanDigits.startsWith("91") ? cleanDigits : "91" + cleanDigits}`;

  return (
    <article
      className={`group relative rounded-2xl sm:rounded-3xl p-5 sm:p-6 transition-all flex flex-col justify-between card-hover-lift ${
        featured
          ? "bg-linear-to-b from-white to-[#F7FCF9] border-2 border-[#97C5B3] shadow-xs"
          : "bg-white border border-[#B7D8CA] hover:border-[#8DBDAA] shadow-2xs"
      }`}
    >
      <div className="space-y-4">
        {/* Top Badges: Category & Availability */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${
              featured
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

        {/* Doctor Info & 4:5 Portrait Layout */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 items-center sm:items-start">
          {/* Universal 4:5 Portrait Container */}
          <div className="w-36 sm:w-40 shrink-0 mx-auto sm:mx-0">
            <DoctorPortrait doctor={doctor} priority={featured} />
          </div>

          {/* Details */}
          <div className="flex-1 space-y-2 text-center sm:text-left min-w-0 w-full">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold tracking-tight text-[#122421] group-hover:text-[#0A5C4F] transition-colors leading-snug">
                <Link href={`/doctors/${doctor.id}`} className="hover:underline">
                  {doctor.name}
                </Link>
              </h3>
              <p className="text-xs sm:text-sm font-medium text-[#0A5C4F] mt-0.5">
                {doctor.role}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-[#2E4540] leading-relaxed font-normal">
              {doctor.availabilityDetails}
            </p>
          </div>
        </div>
      </div>

      {/* Clear Details / Contact Action */}
      <div className="pt-4 mt-4 border-t border-[#D2E6DC]/70 flex flex-wrap items-center justify-between gap-2.5">
        <div className="flex items-center gap-2">
          <a
            href={phoneHref}
            className={`inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors min-h-[38px] ${
              featured
                ? "bg-[#0A5C4F] text-white hover:bg-[#07463C] shadow-2xs"
                : "bg-[#EAF6F1] text-[#0A5C4F] hover:bg-[#0A5C4F] hover:text-white border border-[#B7D8CA]"
            }`}
            aria-label={`Inquire about ${doctor.name} availability`}
          >
            <Phone className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Check Availability</span>
          </a>

          <Link
            href={`/doctors/${doctor.id}`}
            className="inline-flex items-center gap-1 text-xs font-semibold text-[#0A5C4F] hover:text-[#07463C] px-2.5 py-2 rounded-lg hover:bg-[#EAF6F1] transition-colors"
            aria-label={`View profile for ${doctor.name}`}
          >
            <span>View Profile</span>
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>
        </div>

        <span className="text-[11px] sm:text-xs text-[#475B57] font-medium text-right shrink-0">
          {isGeneralPhysician ? "Daily OPD" : "On-call"}
        </span>
      </div>
    </article>
  );
}
