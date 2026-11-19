import Image from "next/image";
import { Clock, Stethoscope, Phone, ShieldCheck, CalendarCheck, ArrowUpRight } from "lucide-react";
import { doctorsData, Doctor } from "@/content/doctors";
import { Badge } from "@/components/shared/Badge";
import { DoctorsToLocationWave } from "@/components/ui/SectionWaves";
import { BotanicalUnfurlingSpiral } from "@/components/ui/BotanicalDecorations";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

export function MeetOurDoctors() {
  const sortedDoctors = [...doctorsData.doctors].sort(
    (a, b) => a.displayOrder - b.displayOrder
  );

  const phoneHref = `tel:${doctorsData.receptionInquiry.phoneValue}`;

  return (
    <section
      id="doctors"
      aria-labelledby="doctors-heading"
      className="relative w-full pt-10 sm:pt-14 lg:pt-16 pb-0 bg-[#FCFDFD] text-[#122421] overflow-hidden"
    >
      {/* Abstract Botanical Unfurling Fern Spiral behind doctor layout */}
      <BotanicalUnfurlingSpiral />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 pb-8 sm:pb-12">
        
        {/* Section Header with Scroll Entrance */}
        <ScrollReveal direction="heading" className="max-w-2xl mb-6 sm:mb-8">
          <Badge variant="mint" dot className="mb-2 sm:mb-3">
            {doctorsData.eyebrow}
          </Badge>
          <h2
            id="doctors-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#122421] leading-tight"
          >
            {doctorsData.title}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#475B57] leading-relaxed">
            {doctorsData.subtitle}
          </p>
        </ScrollReveal>

        {/* 24/7 Medical Assistance Availability Strip */}
        <ScrollReveal direction="heading" delay={60} className="mb-6 sm:mb-8">
          <div className="p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#EAF6F1] via-[#F3FAF7] to-[#EAF6F1] border border-[#CDEAE0] shadow-xs">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-[#0A5C4F] text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                  <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-sans font-extrabold text-sm sm:text-base text-[#0A5C4F]">
                      {doctorsData.roundTheClockNotice.highlight}
                    </h3>
                    <span className="px-2 py-0.5 rounded-full bg-white/80 border border-[#BDE5D7] text-[10px] font-bold text-[#0A5C4F] uppercase tracking-wider">
                      Rotating Duty Roster
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#475B57] mt-0.5 sm:mt-1 max-w-3xl leading-relaxed">
                    {doctorsData.roundTheClockNotice.description}
                  </p>
                </div>
              </div>

              <a
                href={phoneHref}
                className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#0A5C4F] text-white text-xs sm:text-sm font-bold shrink-0 hover:bg-[#074B40] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A5C4F]"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-200" aria-hidden="true" />
                <span>Doctor की उपलब्धता जानें ({doctorsData.receptionInquiry.phoneFormatted})</span>
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* Mobile-First Doctor Portraits Grid with Card Lift Interaction */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 items-stretch">
          {sortedDoctors.map((doc: Doctor, idx: number) => (
            <ScrollReveal key={doc.id} direction="card" delay={idx * 120} className="flex">
              <article className="group rounded-3xl overflow-hidden border border-[#E2ECE9] bg-white shadow-xs hover:border-[#C2EADB] w-full card-hover-lift flex flex-col justify-between">
                {/* Generous Portrait Area */}
                <div className="relative w-full aspect-[4/3] bg-gradient-to-b from-[#EDF7F3] to-[#DFEFE8] overflow-hidden flex items-center justify-center border-b border-[#EAF2EF]">
                  {doc.portrait ? (
                    <Image
                      src={doc.portrait}
                      alt={`Medical Illustration of ${doc.name}`}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-contain p-2 sm:p-3 group-hover:scale-104 transition-transform duration-500 ease-out"
                    />
                  ) : (
                    <div className="flex flex-col items-center text-center p-6 text-[#0A5C4F]">
                      <div className="w-16 h-16 rounded-2xl bg-white/90 border border-[#BDE5D7] flex items-center justify-center shadow-xs mb-3 group-hover:scale-105 transition-transform duration-300">
                        <Stethoscope className="w-8 h-8 text-[#0A5C4F]" aria-hidden="true" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#0A5C4F] bg-white/80 px-3 py-1 rounded-full border border-[#CDEAE0]">
                        {doc.specialty}
                      </span>
                      <span className="text-[10px] text-[#6B7F7B] mt-2 italic">
                        [Official Portrait Pending Administration Submission]
                      </span>
                    </div>
                  )}

                  {/* Duty Hours Tag floating on portrait */}
                  <div className="absolute top-3.5 right-3.5 z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[11px] font-bold text-[#0A5C4F] border border-[#CDEAE0] shadow-2xs">
                      <Clock className="w-3.5 h-3.5 text-[#0A5C4F]" aria-hidden="true" />
                      {doc.dutyHours}
                    </span>
                  </div>
                </div>

                {/* Doctor Details */}
                <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#0A5C4F] block mb-1">
                      {doc.specialty}
                    </span>
                    <h3 className="font-sans font-extrabold text-xl text-[#122421] group-hover:text-[#0A5C4F] transition-colors leading-snug">
                      {doc.name}
                    </h3>
                    <p className="text-xs text-[#526662] font-medium mt-1 leading-relaxed">
                      {doc.qualifications}
                    </p>

                    {/* Availability Details */}
                    <div className="mt-4 pt-4 border-t border-[#F0F5F2] flex items-start gap-2.5 text-xs text-[#475B57]">
                      <CalendarCheck className="w-4 h-4 text-[#0A5C4F] shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="leading-relaxed">{doc.availabilityDetails}</span>
                    </div>
                  </div>

                  {/* Card Action */}
                  <div className="pt-5 mt-5 border-t border-[#F0F5F2] flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-[#6B7F7B]">
                      Token व OPD जानकारी
                    </span>
                    <a
                      href={phoneHref}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#0A5C4F] hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#0A5C4F] rounded"
                    >
                      <span>Token / समय पूछें</span>
                      <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        {/* Daily Roster Notice */}
        <ScrollReveal direction="heading" delay={150} className="mt-10">
          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#EAF2EF] shadow-2xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#E8F5F1] text-[#0A5C4F] flex items-center justify-center shrink-0 border border-[#C2EADB]">
                <Phone className="w-4 h-4" aria-hidden="true" />
              </div>
              <p className="text-xs sm:text-sm text-[#475B57] leading-relaxed">
                {doctorsData.receptionInquiry.helperText}
              </p>
            </div>

            <a
              href={phoneHref}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0A5C4F] hover:underline shrink-0"
            >
              <span>Reception पर Call करें ({doctorsData.receptionInquiry.phoneFormatted})</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </ScrollReveal>

      </div>

      {/* Doctors → Location & Contact Curved Mint Transition */}
      <DoctorsToLocationWave />
    </section>
  );
}
