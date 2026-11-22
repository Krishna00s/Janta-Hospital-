import Image from "next/image";
import { ShieldCheck, Building } from "lucide-react";
import { hospitalConfig } from "@/content/hospital";
import { Badge } from "@/components/shared/Badge";

export function Facilities() {
  const { facilities, imagery } = hospitalConfig;

  return (
    <section
      id="facilities"
      aria-labelledby="facilities-heading"
      className="relative w-full py-16 sm:py-20 lg:py-28 bg-white text-[#122421] overflow-hidden border-t border-[#EDF4F1]"
    >
      {/* Background ambient mint wave */}
      <div
        className="pointer-events-none absolute -bottom-32 right-0 w-[550px] h-[550px] bg-[#E8F5F1]/50 rounded-full blur-3xl opacity-60 z-0"
        aria-hidden="true"
      />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <Badge variant="mint" dot className="mb-4">
            FACILITIES & PATIENT EXPERIENCE
          </Badge>
          <h2
            id="facilities-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#122421] leading-[1.12]"
          >
            <span className="font-sans block">Thoughtfully structured</span>
            <span className="font-serif italic font-normal text-[#0A5C4F] block mt-1">
              for accessible patient care.
            </span>
          </h2>
          <p className="mt-4 sm:mt-5 text-base sm:text-lg text-[#475B57] leading-relaxed">
            From easy ground-floor veranda access to an on-premises medicine dispensary and 24-hour emergency
            readiness, our Palmerganj facility is planned to eliminate delays and ensure patient comfort.
          </p>
        </div>

        {/* Asymmetric 2-Column Walkthrough */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Feature Breakdown */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4">
              {facilities.map((facility, index) => (
                <div
                  key={facility.id}
                  className="p-5 sm:p-6 rounded-2xl bg-[#FCFDFD] border border-[#EAF2EF] hover:border-[#BCE7D7] hover:bg-white hover:shadow-xs transition-all flex items-start gap-4"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#E8F5F1] text-[#0A5C4F] flex items-center justify-center shrink-0 border border-[#C2EADB] mt-0.5">
                    <span className="font-bold text-xs sm:text-sm">{index + 1}</span>
                  </div>

                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="font-sans font-bold text-sm sm:text-base text-[#122421]">
                        {facility.title}
                      </h3>
                      <span className="px-2.5 py-0.5 rounded-full bg-[#EAF5F0] text-xs font-bold text-[#0A5C4F]">
                        {facility.highlight}
                      </span>
                    </div>
                    <p className="text-sm text-[#2E4540] font-medium leading-relaxed">
                      {facility.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Assurance Strip */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#F4FAF7] border border-[#C2EADB] flex items-center gap-3.5 text-xs sm:text-sm font-medium text-[#0A5C4F]">
              <ShieldCheck className="w-5 h-5 shrink-0 text-[#0A5C4F]" aria-hidden="true" />
              <span>
                <strong>Hygienic Standards:</strong> Regular sanitization across patient waiting areas,
                veranda steps, and clinical consultation rooms.
              </span>
            </div>
          </div>

          {/* Right Column: Overlapping Photographic Composition */}
          <div className="lg:col-span-6 relative">
            
            {/* Primary Image: Veranda & Entrance */}
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-3xl overflow-hidden shadow-lg border-4 border-white bg-[#F4FAF7]">
              <Image
                src={imagery.gallery.entrance.src}
                alt={imagery.gallery.entrance.alt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"
                aria-hidden="true"
              />
              <div className="absolute left-4 right-4 bottom-4 text-white z-10">
                <span className="px-2.5 py-0.5 rounded-full bg-[#0A5C4F]/90 backdrop-blur-md text-xs font-bold tracking-wider uppercase mb-1 inline-block">
                  Front Veranda
                </span>
                <p className="font-bold text-sm sm:text-base">
                  Ground-Floor Entryway & Patient Waiting Area
                </p>
              </div>
            </div>

            {/* Overlapping Secondary Card: On-Site Pharmacy */}
            <div className="hidden sm:block absolute -bottom-8 -left-6 w-64 rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white z-20">
              <div className="relative w-full h-36 bg-[#F4FAF7]">
                <Image
                  src={imagery.gallery.pharmacy.src}
                  alt={imagery.gallery.pharmacy.alt}
                  fill
                  sizes="256px"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>
              <div className="p-3">
                <span className="text-xs font-bold text-[#0A5C4F] uppercase tracking-wider block">
                  On-Premises
                </span>
                <span className="font-bold text-xs sm:text-sm text-[#122421] block">
                  Medicine Dispensary (दवाई)
                </span>
              </div>
            </div>

            {/* Overlapping Quick Fact Pill */}
            <div className="hidden sm:flex absolute -top-4 -right-4 p-3 rounded-2xl bg-white/95 backdrop-blur-md border border-[#EAF2EF] shadow-md items-center gap-2.5 z-20">
              <div className="w-8 h-8 rounded-xl bg-[#E8F5F1] text-[#0A5C4F] flex items-center justify-center shrink-0">
                <Building className="w-4 h-4" aria-hidden="true" />
              </div>
              <div>
                <span className="font-bold text-xs sm:text-sm text-[#122421] block">Two-Story Facility</span>
                <span className="text-xs text-[#3B524E] font-medium block">Palmerganj, Lohardaga</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
