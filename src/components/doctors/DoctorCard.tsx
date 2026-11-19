import Image from "next/image";
import { Phone, Clock, ShieldCheck, Stethoscope, AlertCircle } from "lucide-react";
import { Doctor } from "@/content/doctors";

interface DoctorCardProps {
  doctor: Doctor;
  receptionPhone: string;
}

export function DoctorCard({ doctor, receptionPhone }: DoctorCardProps) {
  const isPlaceholder = doctor.status === "placeholder";
  const phoneHref = `tel:${receptionPhone}`;

  return (
    <div className="group relative bg-white rounded-2xl border border-[#E2EBE7] p-5 sm:p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
      
      <div>
        {/* Top Header: Specialty Badge & Duty Tag */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#E8F5F1] text-[#0A5C4F] text-[11px] sm:text-xs font-bold uppercase tracking-wide">
            <Stethoscope className="w-3.5 h-3.5 text-[#0A5C4F]" aria-hidden="true" />
            <span>{doctor.specialty}</span>
          </span>

          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-gray-100 text-gray-700 text-[11px] font-medium">
            <Clock className="w-3 h-3 text-gray-500" aria-hidden="true" />
            <span>{doctor.dutyHours}</span>
          </span>
        </div>

        {/* Doctor Portrait or Dignified Silhouette */}
        <div className="flex items-center gap-4 mb-4">
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden bg-linear-to-br from-[#EBF5F1] to-[#D2EAE1] flex items-center justify-center shrink-0 border border-[#C5E4D8]">
            {doctor.portrait ? (
              <Image
                src={doctor.portrait}
                alt={doctor.name}
                width={80}
                height={80}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="flex flex-col items-center justify-center text-[#0A5C4F]">
                <Stethoscope className="w-8 h-8 opacity-80" aria-hidden="true" />
                <span className="text-[9px] font-bold tracking-tight uppercase mt-0.5 opacity-70">
                  Duty Staff
                </span>
              </div>
            )}
          </div>

          <div>
            <h3 className="text-lg sm:text-xl font-extrabold text-[#122421] tracking-tight group-hover:text-[#0A5C4F] transition-colors leading-tight">
              {doctor.name}
            </h3>
            <p className="text-xs sm:text-sm text-[#475B57] font-medium mt-1 leading-snug">
              {doctor.qualifications}
            </p>
          </div>
        </div>

        {/* Availability Details */}
        <div className="bg-[#F8FAF9] rounded-xl p-3 border border-[#EAF0ED] mb-4 space-y-1">
          <span className="text-[11px] uppercase font-bold text-[#3B524E] tracking-wider block">
            Doctor के मिलने का समय
          </span>
          <p className="text-xs sm:text-sm text-[#122421] font-semibold leading-relaxed">
            {doctor.availabilityDetails}
          </p>
        </div>

        {/* Development Verification Badge (Truth in Advertising) */}
        {isPlaceholder && (
          <div className="flex items-start gap-2 p-2.5 rounded-lg bg-amber-50/80 border border-amber-200/80 text-amber-900 text-[11px] mb-4 leading-relaxed">
            <AlertCircle className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" aria-hidden="true" />
            <span>
              <strong>Roster notice:</strong> Daily duty roster रोज़ सुबह reception पर तय होता है।
              आने से पहले phone करके on-duty Doctor के बारे में ज़रूर पता कर लें।
            </span>
          </div>
        )}
      </div>

      {/* Action: Call Reception Desk */}
      <div className="pt-2 border-t border-[#EEF3F0]">
        <a
          href={phoneHref}
          className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#E8F5F1] text-[#0A5C4F] font-bold text-xs sm:text-sm hover:bg-[#0A5C4F] hover:text-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A5C4F]"
        >
          <Phone className="w-3.5 h-3.5" aria-hidden="true" />
          <span>Token / समय पूछें</span>
        </a>
      </div>

    </div>
  );
}
