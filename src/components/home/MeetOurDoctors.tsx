import Image from "next/image";
import Link from "next/link";
import { Clock, Phone, ShieldCheck, ArrowRight } from "lucide-react";
import { allDoctors, doctorsData } from "@/content/doctors";
import { hospitalConfig, primaryPhone, primaryPhoneHref } from "@/content/hospital";
import { Badge } from "@/components/shared/Badge";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { DoctorPortrait } from "@/components/doctors/DoctorPortrait";

export function MeetOurDoctors() {
  const phoneHref = primaryPhoneHref;
  const generalPhysicians = allDoctors.filter((d) => d.category === "General Physicians");
  const drParwej = generalPhysicians.find((d) => d.id === "dr-parwej-alam") || generalPhysicians[0];
  const drRahbar = generalPhysicians.find((d) => d.id === "dr-rahbar-bharti") || generalPhysicians[1];
  const specialists = allDoctors.filter((d) => d.category !== "General Physicians");

  return (
    <section
      id="doctors"
      aria-labelledby="doctors-heading"
      className="relative w-full py-12 sm:py-16 lg:py-20 bg-[#FAFCFA] text-[#122421] border-b border-[#E5EFEA] overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* Section Header */}
        <ScrollReveal direction="heading" className="max-w-2xl mb-8 sm:mb-10">
          <Badge variant="mint" dot className="mb-2 sm:mb-3">
            {doctorsData.eyebrow}
          </Badge>
          <h2
            id="doctors-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-[#122421] leading-snug py-0.5"
          >
            <span>हमारे</span> <span className="font-medium">Doctors</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#2E4540] font-normal leading-relaxed">
            Palmerganj, Lohardaga में 24 घंटे फिजिशियन कवरेज और ऑन-कॉल विशेषज्ञ सर्जिकल टीम।
          </p>
        </ScrollReveal>

        {/* ============================================================ */}
        {/* BLOCK 1: General Physicians (Primary Focus, 24/7 Coverage)   */}
        {/* ============================================================ */}
        <div className="mb-10 sm:mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 rounded-full bg-[#E8F5F1] text-[#0A5C4F] text-xs font-semibold uppercase tracking-wider border border-[#B7D8CA]">
              General Physicians • 24/7 Hospital Coverage
            </span>
            <span className="text-xs text-[#475B57] font-medium hidden sm:inline">
              दैनिक सुबह व शाम OPD परामर्श
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
            
            {/* Featured: Dr. Parwej Alam (Hospital Director & Consulting Physician) */}
            <ScrollReveal direction="card" delay={0} className="lg:col-span-7 flex">
              <div className="w-full rounded-3xl p-5 sm:p-6 bg-linear-to-b from-white to-[#F7FCF9] border-2 border-[#96C7B4] shadow-xs flex flex-col sm:flex-row gap-5 items-center justify-between card-hover-lift">
                {/* Doctor Portrait Slot */}
                <div className="w-full sm:w-44 md:w-48 shrink-0">
                  <DoctorPortrait doctor={drParwej} aspectRatio="compact" priority />
                </div>

                {/* Doctor Details */}
                <div className="flex-1 flex flex-col justify-between space-y-3 w-full">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <span className="px-2.5 py-0.5 rounded-full bg-[#0A5C4F] text-white text-[11px] font-semibold tracking-wide">
                        Hospital Director
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-[#E8F5F1] text-[#0A5C4F] border border-[#B7D8CA] text-[11px] font-medium">
                        Consulting Physician
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-semibold text-[#122421] leading-snug">
                      {drParwej.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-[#0A5C4F] mt-0.5">
                      {drParwej.role}
                    </p>

                    <p className="text-xs sm:text-sm text-[#2E4540] font-normal leading-relaxed mt-2">
                      हॉस्पिटल में 24/7 फिजिशियन व ड्यूटी डॉक्टर कवरेज उपलब्ध रहती है। बुखार, पेट दर्द, शुगर, बीपी एवं सामान्य बीमारियों के लिए नियमित OPD परामर्श।
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#D2E6DC]/70 flex flex-wrap items-center justify-between gap-3">
                    <a
                      href={phoneHref}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0A5C4F] text-white text-xs sm:text-sm font-semibold hover:bg-[#07463C] transition-colors shadow-2xs min-h-[40px]"
                    >
                      <Phone className="w-3.5 h-3.5 text-emerald-200" aria-hidden="true" />
                      <span>परामर्श व टोकन जानकारी</span>
                    </a>
                    <span className="text-xs text-[#475B57] font-medium">
                      Ground Floor OPD
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* General Physician: Dr. Rahbar Bharti */}
            <ScrollReveal direction="card" delay={80} className="lg:col-span-5 flex">
              <div className="w-full rounded-3xl p-5 sm:p-6 bg-white border border-[#B7D8CA] hover:border-[#8DBDAA] shadow-2xs flex flex-col justify-between card-hover-lift">
                <div className="flex flex-col sm:flex-row gap-4 items-center">
                  <div className="w-full sm:w-32 shrink-0">
                    <DoctorPortrait doctor={drRahbar} aspectRatio="compact" />
                  </div>

                  <div className="flex-1 space-y-1 w-full">
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#E8F5F1] text-[#0A5C4F] border border-[#B7D8CA] text-[10px] font-semibold uppercase tracking-wider">
                      General Physician
                    </span>
                    <h3 className="text-lg sm:text-xl font-semibold text-[#122421] leading-snug">
                      {drRahbar.name}
                    </h3>
                    <p className="text-xs font-medium text-[#0A5C4F]">
                      {drRahbar.specialty}
                    </p>
                    <p className="text-xs text-[#2E4540] font-normal leading-relaxed pt-1">
                      {drRahbar.availabilityDetails}
                    </p>
                  </div>
                </div>

                <div className="pt-3 mt-4 border-t border-[#D2E6DC]/70 flex items-center justify-between gap-2">
                  <a
                    href={phoneHref}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#EAF6F1] text-[#0A5C4F] hover:bg-[#0A5C4F] hover:text-white border border-[#B7D8CA] text-xs font-semibold transition-colors min-h-[38px]"
                  >
                    <Phone className="w-3 h-3" aria-hidden="true" />
                    <span>उपलब्धता पूछें</span>
                  </a>
                  <span className="text-xs text-[#475B57] font-medium">
                    24/7 ड्यूटी कवरेज
                  </span>
                </div>
              </div>
            </ScrollReveal>

          </div>

          {/* 24/7 Hospital Coverage Note */}
          <div className="mt-3.5 px-4 py-2.5 rounded-xl bg-[#F4FAF7] border border-[#D2E6DC] text-xs text-[#2E4540] leading-relaxed flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#0A5C4F] shrink-0" aria-hidden="true" />
            <span>
              <strong>24/7 कवरेज स्पष्टीकरण:</strong> 24 घंटे का लेबल हॉस्पिटल में फिजिशियन व ड्यूटी डॉक्टर्स (RMO) की सतत उपस्थिति को दर्शाता है, किसी एक डॉक्टर के लगातार ऑनसाइट रहने को नहीं।
            </span>
          </div>
        </div>

        {/* ============================================================ */}
        {/* BLOCK 2: Specialists Section — Expertise & Classification     */}
        {/* ============================================================ */}
        <div className="mb-10 sm:mb-12 rounded-3xl p-5 sm:p-7 lg:p-8 bg-[#F0F8F5] border-2 border-[#B2DFD6] shadow-2xs">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
            <div className="max-w-2xl">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full bg-[#E0F2F1] text-[#00695C] text-xs font-semibold uppercase tracking-wider border border-[#80CBC4] inline-block">
                  ON-CALL SPECIALISTS NETWORK
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-white text-[#2A6B62] text-[11px] font-medium border border-[#B2DFDB]">
                  3 General Surgery • 1 Neurosurgery • 1 Anaesthesia
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-[#122421] tracking-tight leading-snug">
                विशेषज्ञ सर्जन एवं कंसल्टेंट टीम
              </h3>
              <p className="text-xs sm:text-sm text-[#2E4540] font-normal leading-relaxed mt-1">
                General Surgery, Neurosurgery एवं Anaesthesia के विशेषज्ञ ऑन-कॉल उपलब्ध हैं। इन्हें क्लिनिकल आवश्यकता एवं पूर्व पुष्टि के अनुसार हॉस्पिटल बुलाया जाता है।
              </p>
            </div>

            <div className="text-xs text-[#2A6B62] bg-white/80 backdrop-blur-xs px-3.5 py-2 rounded-xl border border-[#B2DFDB] shrink-0 font-medium">
              <span>विशेषज्ञ क्लिनिकल आवश्यकता अनुसार ऑन-कॉल</span>
            </div>
          </div>

          {/* 5-Column Grid on lg: 3 General Surgeons + 1 Neurosurgeon + 1 Anaesthesiologist */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {specialists.map((doc, idx) => (
              <ScrollReveal
                key={doc.id}
                direction="card"
                delay={idx * 60}
                className="h-full flex"
              >
                <div className="w-full rounded-2xl p-4 bg-white border border-[#B0DCD2] hover:border-[#00796B] shadow-2xs flex flex-col justify-between card-hover-lift transition-all">
                  <div className="space-y-2.5">
                    {/* Specialty Pill */}
                    <div className="flex items-center justify-between gap-1">
                      <span className="px-2 py-0.5 rounded-full bg-[#E0F2F1] text-[#00695C] text-[10px] font-semibold uppercase tracking-wider border border-[#B2DFDB]">
                        {doc.category}
                      </span>
                      <span className="text-[10px] text-[#2A6B62] font-medium">On-call</span>
                    </div>

                    {/* Compact Portrait Slot */}
                    <DoctorPortrait doctor={doc} aspectRatio="compact" />

                    {/* Name & Role */}
                    <div className="space-y-0.5 pt-1">
                      <h4 className="text-sm sm:text-base font-semibold text-[#122421] leading-snug">
                        {doc.name}
                      </h4>
                      <p className="text-xs font-medium text-[#00695C]">
                        {doc.role}
                      </p>
                      <p className="text-[11px] text-[#475B57] leading-tight pt-1">
                        {doc.availabilityDetails}
                      </p>
                    </div>
                  </div>

                  {/* Inquiry CTA */}
                  <div className="pt-2.5 mt-2.5 border-t border-[#D2E6DC]/70">
                    <a
                      href={phoneHref}
                      className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-[#E0F2F1] hover:bg-[#00796B] text-[#00695C] hover:text-white border border-[#80CBC4] text-xs font-semibold transition-colors min-h-[36px]"
                    >
                      <Phone className="w-3 h-3" aria-hidden="true" />
                      <span>उपलब्धता पूछें</span>
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <p className="text-xs text-[#2A6B62] mt-3.5 font-medium">
            Specialists are available on call. Please contact the hospital to confirm availability before visiting.
          </p>
        </div>

        {/* ============================================================ */}
        {/* BLOCK 3: Signboard Reference & Timetable Anchor              */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center bg-white rounded-3xl p-5 sm:p-7 border border-[#B7D8CA] shadow-2xs mb-8">
          
          {/* Authentic Signboard Photo (5 cols) */}
          <div className="lg:col-span-5 relative w-full aspect-[16/11] rounded-2xl overflow-hidden border border-[#D2E6DC] shadow-2xs">
            <Image
              src="/images/gallery-signboard.webp"
              alt="Hospital entrance signboard and doctor consultation schedule at Janta Hospital Lohardaga"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
              loading="lazy"
            />
            <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/45 via-transparent to-transparent" aria-hidden="true" />
            <span className="absolute bottom-2.5 left-3 text-xs text-white font-medium drop-shadow-xs">
              Palmerganj Main Entrance
            </span>
          </div>

          {/* Timings & Token Protocol (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8F5F1] text-[#0A5C4F] text-xs font-semibold uppercase tracking-wider mb-2 border border-[#C2EADB]">
                <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                <span>OPD &amp; Token Protocol</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-[#122421] leading-snug">
                <span className="font-medium">Doctor</span> <span>कब मिलेंगे? टोकन एवं समय</span>
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
              <div className="p-3.5 rounded-xl bg-[#F8FAF9] border border-[#D2E6DC]">
                <strong className="text-[#0A5C4F] block font-semibold mb-0.5">सुबह की OPD (सोम – शनि)</strong>
                <span className="text-[#122421] font-medium block">सुबह 9:00 से दोपहर 1:00</span>
                <span className="text-[#475B57] text-xs">टोकन सुबह 8:30 बजे से रिसेप्शन पर उपलब्ध</span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#F8FAF9] border border-[#D2E6DC]">
                <strong className="text-[#0A5C4F] block font-semibold mb-0.5">शाम की OPD (सोम – शनि)</strong>
                <span className="text-[#122421] font-medium block">शाम 5:00 से रात 8:00</span>
                <span className="text-[#475B57] text-xs">दैनिक फॉलो-अप व सामान्य परामर्श</span>
              </div>
            </div>

            <p className="text-xs text-[#2E4540] leading-relaxed">
              <strong>टोकन निर्देश:</strong> डॉक्टर्स के मिलने का समय और टोकन रोज़ सुबह Ground Floor Reception पर तय होते हैं। आने से पहले फ़ोन पर डॉक्टर की उपलब्धता अवश्य पुष्टि कर लें।
            </p>
          </div>

        </div>

        {/* Action Bar: View All Doctors & Call CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/doctors"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#0A5C4F] text-white font-semibold text-xs sm:text-sm hover:bg-[#07463C] transition-colors shadow-xs min-h-[44px]"
          >
            <span>हमारे Doctors और Specialists देखें</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>

          <a
            href={phoneHref}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#EAF6F1] text-[#0A5C4F] font-semibold text-xs sm:text-sm hover:bg-[#D5EFE5] transition-colors border border-[#B7D8CA] min-h-[44px]"
          >
            <Phone className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Duty Desk पर Call करें ({primaryPhone})</span>
          </a>
        </div>

      </div>
    </section>
  );
}
