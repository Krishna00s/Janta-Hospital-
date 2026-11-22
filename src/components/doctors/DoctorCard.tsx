import Image from "next/image";
import { Phone, Clock, Stethoscope, AlertCircle } from "lucide-react";
import { Doctor } from "@/content/doctors";

interface DoctorCardProps {
  doctor: Doctor;
  receptionPhone: string;
}

export function DoctorCard({ doctor, receptionPhone }: DoctorCardProps) {
  const isPlaceholder = doctor.status === "placeholder";
  const isEmergency = doctor.id === "doc-duty-emergency" || doctor.specialty.toLowerCase().includes("emergency");
  const phoneHref = `tel:${receptionPhone}`;

  return (
    <div
      className={`group relative rounded-2xl p-5 sm:p-6 transition-all flex flex-col justify-between ${
        isEmergency
          ? "bg-[#F9EDEE]/40 border border-[#ECCDD0] shadow-sm"
          : "bg-white border border-[#E2EBE7] shadow-xs hover:shadow-md"
      }`}
    >
      <div>
        {/* Top Header: Specialty Badge & Duty Tag */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${
              isEmergency
                ? "bg-[#A63F45] text-white shadow-2xs"
                : "bg-[#E8F5F1] text-[#0A5C4F]"
            }`}
          >
            <Stethoscope
              className={`w-3.5 h-3.5 ${isEmergency ? "text-white" : "text-[#0A5C4F]"}`}
              aria-hidden="true"
            />
            <span>{doctor.specialty}</span>
          </span>

          <span
            className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold ${
              isEmergency ? "bg-[#F9EDEE] text-[#A63F45] border border-[#ECCDD0]" : "bg-gray-100 text-gray-700"
            }`}
          >
            <Clock
              className={`w-3 h-3 ${isEmergency ? "text-[#A63F45]" : "text-gray-500"}`}
              aria-hidden="true"
            />
            <span>{doctor.dutyHours}</span>
          </span>
        </div>

        {/* Doctor Portrait or Dignified Silhouette */}
        <div className="flex items-center gap-4 mb-4">
          <div
            className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden flex items-center justify-center shrink-0 border ${
              isEmergency
                ? "bg-[#F9EDEE] border-[#ECCDD0] text-[#A63F45]"
                : "bg-linear-to-br from-[#EBF5F1] to-[#D2EAE1] border-[#C5E4D8] text-[#0A5C4F]"
            }`}
          >
            {doctor.portrait ? (
              <Image
                src={doctor.portrait}
                alt={doctor.name}
                width={80}
                height={80}
                className="w-full h-full object-cover"
              />
            ) : (
              <div
                className={`flex flex-col items-center justify-center ${
                  isEmergency ? "text-[#A63F45]" : "text-[#0A5C4F]"
                }`}
              >
                <Stethoscope className="w-8 h-8 opacity-80" aria-hidden="true" />
                <span className="text-xs font-bold tracking-tight uppercase mt-0.5 opacity-80">
                  Duty Staff
                </span>
              </div>
            )}
          </div>

          <div>
            <h3
              className={`text-lg sm:text-xl font-extrabold tracking-tight transition-colors leading-tight ${
                isEmergency
                  ? "text-[#A63F45] group-hover:text-[#8E3339]"
                  : "text-[#122421] group-hover:text-[#0A5C4F]"
              }`}
            >
              {doctor.name}
            </h3>
            <p className="text-xs sm:text-sm text-[#2E4540] font-semibold mt-1 leading-snug">
              {doctor.qualifications}
            </p>
          </div>
        </div>

        {/* Availability Details */}
        <div
          className={`rounded-xl p-3 border mb-4 space-y-1 ${
            isEmergency ? "bg-[#F9EDEE]/60 border-[#ECCDD0]" : "bg-[#F8FAF9] border-[#EAF0ED]"
          }`}
        >
          <span
            className={`text-xs uppercase font-bold tracking-wider block ${
              isEmergency ? "text-[#A63F45]" : "text-[#3B524E]"
            }`}
          >
            Doctor Availability &amp; Timing
          </span>
          <p
            className={`text-xs sm:text-sm font-bold leading-relaxed ${
              isEmergency ? "text-[#471E21]" : "text-[#122421]"
            }`}
          >
            {doctor.availabilityDetails}
          </p>
        </div>

        {/* Development Verification Badge (Truth in Advertising) */}
        {isPlaceholder && (
          <div className="flex items-start gap-2 p-2.5 rounded-lg bg-amber-50/80 border border-amber-200/80 text-amber-900 text-xs font-semibold mb-4 leading-relaxed">
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
          className={`w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all focus-visible:outline-none focus-visible:ring-2 ${
            isEmergency
              ? "bg-[#A63F45] text-white hover:bg-[#8E3339] shadow-sm shadow-[#A63F45]/20 focus-visible:ring-[#A63F45]"
              : "bg-[#E8F5F1] text-[#0A5C4F] hover:bg-[#0A5C4F] hover:text-white focus-visible:ring-[#0A5C4F]"
          }`}
        >
          <Phone className={`w-3.5 h-3.5 ${isEmergency ? "text-white" : ""}`} aria-hidden="true" />
          <span>{isEmergency ? "Emergency Duty Line" : "OPD Timing पूछें"}</span>
        </a>
      </div>

    </div>
  );
}
