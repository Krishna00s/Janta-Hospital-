import Image from "next/image";
import { MapPin, Phone, ShieldCheck, ArrowUpRight } from "lucide-react";
import { hospitalConfig } from "@/content/hospital";
import { Badge } from "@/components/shared/Badge";

export function HospitalGallery() {
  const { gallery, exterior } = hospitalConfig.imagery;

  return (
    <section
      id="about"
      aria-labelledby="gallery-heading"
      className="relative w-full py-16 sm:py-20 lg:py-28 bg-[#FCFDFD] text-[#122421] overflow-hidden border-t border-[#EDF4F1]"
    >
      {/* Soft mint atmospheric depth in background */}
      <div
        className="pointer-events-none absolute -top-40 right-0 w-[500px] h-[500px] bg-gradient-to-b from-[#E8F5F1]/50 to-transparent rounded-full blur-3xl opacity-70 z-0"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-t from-[#E8F5F1]/40 to-transparent rounded-full blur-2xl opacity-60 z-0"
        aria-hidden="true"
      />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <Badge variant="mint" dot className="mb-4">
            INSIDE JANTA HOSPITAL
          </Badge>
          <h2
            id="gallery-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#122421] leading-[1.12]"
          >
            <span className="font-sans block">Care rooted in</span>
            <span className="font-serif italic font-normal text-[#0A5C4F] block mt-1">
              our local community.
            </span>
          </h2>
          <p className="mt-4 sm:mt-5 text-base sm:text-lg text-[#475B57] leading-relaxed">
            Located in Palmerganj, behind the Head Post Office in Lohardaga, Janta Hospital provides
            accessible general outpatient consultations, round-the-clock emergency medical assistance,
            and an on-site medicine counter designed to serve local families with dependable, patient-first care.
          </p>
        </div>

        {/* Asymmetric Editorial Photographic Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-8 items-stretch">
          
          {/* Main Dominant Image: Hospital Facade (Spans 7 columns on desktop) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="group relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[16/11] rounded-3xl overflow-hidden shadow-md border border-[#E2ECE9] bg-[#F4FAF7]">
              <Image
                src={exterior.src}
                alt={exterior.alt}
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="w-full h-full object-cover object-[48%_35%] group-hover:scale-102 transition-transform duration-500"
                loading="lazy"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"
                aria-hidden="true"
              />
              
              {/* Overlay Caption Card */}
              <div className="absolute left-4 right-4 bottom-4 sm:left-6 sm:bottom-6 z-10 flex flex-wrap items-end justify-between gap-3 text-white">
                <div>
                  <span className="inline-block px-2.5 py-1 rounded-full bg-[#0A5C4F]/90 backdrop-blur-md text-[11px] font-bold tracking-wider uppercase text-white mb-1.5">
                    Verified Facility
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold font-sans drop-shadow-sm">
                    Two-Story Clinical Center with Veranda
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-200 drop-shadow-sm">
                    Palmerganj, Behind Head Post Office, Lohardaga
                  </p>
                </div>

                <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold text-white border border-white/30">
                  <ShieldCheck className="w-4 h-4 text-[#8CE3BC]" aria-hidden="true" />
                  <span>24-Hour Active</span>
                </div>
              </div>
            </div>

            {/* Quick Community Narrative Strip beneath dominant image */}
            <div className="mt-5 sm:mt-6 p-5 sm:p-6 rounded-2xl bg-white border border-[#EAF2EF] shadow-2xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#E8F5F1] text-[#0A5C4F] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <span className="font-bold text-sm text-[#122421] block">
                    Centrally Located for Immediate Access
                  </span>
                  <span className="text-xs text-[#6B7F7B] block">
                    Walking distance from Lohardaga Bus Stand & Palmerganj market
                  </span>
                </div>
              </div>

              <a
                href={hospitalConfig.contact.mapsUrl.value}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0A5C4F] hover:text-[#074B40] transition-colors whitespace-nowrap"
              >
                <span>View on Map</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Secondary Column: 2 Asymmetric Feature Crop Panels (Spans 5 columns on desktop) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5 sm:gap-6">
            
            {/* Panel 1: Front Veranda & Ground-Floor Reception */}
            <div className="group relative rounded-3xl overflow-hidden border border-[#E2ECE9] shadow-2xs bg-white flex flex-col">
              <div className="relative w-full aspect-[16/10] sm:aspect-[4/3] lg:aspect-[16/9] overflow-hidden bg-[#F4FAF7]">
                <Image
                  src={gallery.entrance.src}
                  alt={gallery.entrance.alt}
                  fill
                  sizes="(min-width: 1024px) 42vw, (min-width: 640px) 50vw, 100vw"
                  className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 right-3 z-10">
                  <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-bold text-[#0A5C4F] shadow-xs border border-[#C2EADB]">
                    {gallery.entrance.tag}
                  </span>
                </div>
              </div>

              <div className="p-4 sm:p-5">
                <h3 className="font-sans font-bold text-base text-[#122421] group-hover:text-[#0A5C4F] transition-colors">
                  {gallery.entrance.caption}
                </h3>
                <p className="mt-1 text-xs text-[#475B57] leading-relaxed">
                  Stepped porch with easy ground-level entrance, landscaped palm planters, and comfortable waiting access.
                </p>
              </div>
            </div>

            {/* Panel 2: On-Site Medicine Dispensary */}
            <div className="group relative rounded-3xl overflow-hidden border border-[#E2ECE9] shadow-2xs bg-white flex flex-col">
              <div className="relative w-full aspect-[16/10] sm:aspect-[4/3] lg:aspect-[16/9] overflow-hidden bg-[#F4FAF7]">
                <Image
                  src={gallery.pharmacy.src}
                  alt={gallery.pharmacy.alt}
                  fill
                  sizes="(min-width: 1024px) 42vw, (min-width: 640px) 50vw, 100vw"
                  className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 right-3 z-10">
                  <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-bold text-[#0A5C4F] shadow-xs border border-[#C2EADB]">
                    {gallery.pharmacy.tag}
                  </span>
                </div>
              </div>

              <div className="p-4 sm:p-5">
                <h3 className="font-sans font-bold text-base text-[#122421] group-hover:text-[#0A5C4F] transition-colors">
                  {gallery.pharmacy.caption}
                </h3>
                <p className="mt-1 text-xs text-[#475B57] leading-relaxed">
                  Front medicine counter (दवाई / स्वास्थ्य) providing immediate dispensing of prescribed pharmaceuticals.
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* Third Row: Architectural Highlights & Verified Signage */}
        <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6">
          
          {/* Signboard Detail (Spans 7 cols on lg) */}
          <div className="lg:col-span-7 rounded-3xl border border-[#E2ECE9] p-5 sm:p-6 bg-white shadow-2xs flex flex-col sm:flex-row items-center gap-5">
            <div className="relative w-full sm:w-48 aspect-[16/9] rounded-2xl overflow-hidden shrink-0 border border-[#E2ECE9] bg-[#F4FAF7]">
              <Image
                src={gallery.signboard.src}
                alt={gallery.signboard.alt}
                fill
                sizes="(min-width: 640px) 192px, 100vw"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </div>
            <div className="text-left">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#0A5C4F] block">
                Official Signage Record
              </span>
              <h3 className="font-bold text-base text-[#122421] mt-0.5">
                Authorized 24-Hour Emergency Medical Care
              </h3>
              <p className="text-xs text-[#475B57] mt-1 leading-relaxed">
                Registered on-site emergency contact lines: 9308348608, 8340678334, 8825389125, and direct hotline {hospitalConfig.contact.phone.formatted}.
              </p>
            </div>
          </div>

          {/* Spiral Staircase Architecture (Spans 5 cols on lg) */}
          <div className="lg:col-span-5 rounded-3xl border border-[#E2ECE9] p-5 sm:p-6 bg-white shadow-2xs flex items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="relative w-16 h-16 rounded-2xl overflow-hidden shrink-0 border border-[#C2EADB] bg-[#F4FAF7]">
                <Image
                  src={gallery.staircase.src}
                  alt={gallery.staircase.alt}
                  fill
                  sizes="64px"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>
              <div>
                <span className="font-bold text-sm text-[#122421] block">
                  Modern Exterior Architecture
                </span>
                <span className="text-xs text-[#6B7F7B] block mt-0.5">
                  Distinctive spiral staircase with illuminated facade cove lighting
                </span>
              </div>
            </div>

            <a
              href={`tel:${hospitalConfig.contact.phone.value}`}
              className="p-3 rounded-xl bg-[#E8F5F1] text-[#0A5C4F] hover:bg-[#0A5C4F] hover:text-white transition-colors shrink-0"
              aria-label={`Call Hospital at ${hospitalConfig.contact.phone.formatted}`}
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
