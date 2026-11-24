import { Metadata } from "next";
import Image from "next/image";
import { Phone, Clock, ShieldCheck, AlertCircle, CheckCircle2, Stethoscope, ArrowRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/shared/PageHero";
import { ContactCTA } from "@/components/shared/ContactCTA";
import { Container } from "@/components/shared/Container";
import { BotanicalSideClimber } from "@/components/ui/BotanicalDecorations";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { departmentGroups, doctorsData, allDoctors } from "@/content/doctors";
import { hospitalConfig, primaryPhone, primaryPhoneHref } from "@/content/hospital";
import { DoctorCard } from "@/components/doctors/DoctorCard";

export const metadata: Metadata = {
  title: "Our Doctors & Clinical Team | Janta Hospital Lohardaga",
  description:
    "Meet the medical team at Janta Hospital, Lohardaga. Led by Dr. Parwej Alam (Hospital Director & Consulting Physician) and Dr. Rahbar Bharti, with on-call specialists in General Surgery, Neurosurgery, and Anaesthesia.",
  alternates: {
    canonical: "/doctors",
  },
  openGraph: {
    title: "Meet Our Doctors | Janta Hospital Lohardaga",
    description:
      "Dedicated medical officers, general physicians, and on-call surgical specialists serving Palmerganj, Lohardaga.",
    url: "https://jantahospital.in/doctors",
  },
};

export default function DoctorsPage() {
  const phoneHref = primaryPhoneHref;

  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* High-Priority LCP Image Preload for Doctors Page */}
      <link
        rel="preload"
        as="image"
        href="/images/gallery-signboard.webp"
        type="image/webp"
        fetchPriority="high"
      />
      <Header />

      <main className="flex-1">
        {/* Page Hero */}
        <PageHero
          breadcrumbs={[{ label: "Doctors" }]}
          eyebrow="OUR DOCTORS & SPECIALISTS"
          title="हमारे"
          italicWord="Doctors"
          description="Palmerganj, Lohardaga में 24 घंटे फिजिशियन कवरेज और ऑन-कॉल विशेषज्ञ सर्जिकल टीम — आपकी और आपके परिवार की देखभाल के लिए समर्पित।"
          action={
            <a
              href={primaryPhoneHref}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0A5C4F] text-white font-semibold text-xs sm:text-sm hover:bg-[#07463C] transition-colors shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A5C4F]"
            >
              <Phone className="w-4 h-4 text-white" aria-hidden="true" />
              <span>Doctor Availability जानकारी लें ({primaryPhone})</span>
            </a>
          }
        />

        {/* Section A: Institutional Availability Anchor & Official Signboard */}
        <section className="relative py-8 sm:py-12 bg-white overflow-hidden border-b border-[#E5EFEA]">
          <BotanicalSideClimber side="left" className="opacity-25 sm:opacity-30" />
          
          <Container className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column (5 cols on lg): Authentic Signboard */}
              <ScrollReveal direction="card" delay={0} className="lg:col-span-5 flex flex-col gap-4">
                <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden border border-[#B7D8CA] hover:border-[#8DBDAA] bg-[#0D2420] shadow-2xs card-hover-lift transition-all">
                  <Image
                    src="/images/gallery-signboard.webp"
                    alt="Hospital entrance signboard displaying doctor timings and consultation schedule at Janta Hospital Palmerganj"
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                    priority
                  />
                </div>

                <div className="p-4 rounded-2xl bg-[#F4FAF7] border border-[#B7D8CA] flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#E8F5F1] text-[#0A5C4F] border border-[#B7D8CA] flex items-center justify-center shrink-0">
                    <Stethoscope className="w-6 h-6 text-[#0A5C4F]" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="font-sans font-semibold text-sm sm:text-base text-[#122421] block">
                      7 सदस्यीय क्लिनिकल टीम
                    </span>
                    <p className="text-xs sm:text-sm text-[#2E4540] mt-0.5 leading-snug font-normal">
                      2 सामान्य फिजिशियन (24/7 कवरेज) + 5 ऑन-कॉल विशेषज्ञ (सर्जरी, न्यूरो, एनेस्थीसिया)।
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Right Column (7 cols on lg): Doctor Availability Protocol */}
              <ScrollReveal direction="card" delay={100} className="lg:col-span-7 space-y-4">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#0A5C4F]">
                    DOCTOR AVAILABILITY
                  </span>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#122421] tracking-tight mt-1 leading-snug py-0.5">
                    <span className="font-medium">Doctor</span> <span>कब मिलेंगे? </span>
                    <span className="font-serif italic font-normal text-[#0A5C4F]">
                      समय और व्यवस्था।
                    </span>
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-[#2E4540] font-normal leading-relaxed">
                  Janta Hospital Lohardaga में फिजिशियन व ड्यूटी डॉक्टर्स (RMO) द्वारा 24 घंटे प्राथमिक चिकित्सा कवरेज दी जाती है। साथ ही प्रतिदिन सुबह और शाम की OPD में नियमित परामर्श तथा क्लिनिकल आवश्यकतानुसार ऑन-कॉल विशेषज्ञ उपस्थित होते हैं।
                </p>

                <div className="space-y-3 pt-1">
                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F8FAF9] border border-[#D2E6DC]">
                    <CheckCircle2 className="w-4 h-4 text-[#0A5C4F] shrink-0 mt-0.5" aria-hidden="true" />
                    <div className="text-xs sm:text-sm leading-relaxed text-[#2E4540] font-normal">
                      <strong className="text-[#122421] font-semibold block mb-0.5">24/7 Hospital Physician Coverage</strong>
                      अस्पताल में 24 घंटे फिजिशियन व ड्यूटी मेडिकल टीम की सतत उपलब्धता रहती है ताकि आपातकालीन स्थिति में तुरंत प्राथमिक मदद मिल सके।
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F8FAF9] border border-[#D2E6DC]">
                    <CheckCircle2 className="w-4 h-4 text-[#0A5C4F] shrink-0 mt-0.5" aria-hidden="true" />
                    <div className="text-xs sm:text-sm leading-relaxed text-[#2E4540] font-normal">
                      <strong className="text-[#122421] font-semibold block mb-0.5">ऑन-कॉल विशेषज्ञ व्यवस्था (Specialist On-call Network)</strong>
                      जनरल सर्जरी, न्यूरोसर्जरी और एनेस्थीसिया के विशेषज्ञ स्थायी रूप से ऑनसाइट नहीं रहते; उन्हें क्लिनिकल आवश्यकता व पूर्व पुष्टि पर बुलाया जाता है।
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F8FAF9] border border-[#D2E6DC]">
                    <CheckCircle2 className="w-4 h-4 text-[#0A5C4F] shrink-0 mt-0.5" aria-hidden="true" />
                    <div className="text-xs sm:text-sm leading-relaxed text-[#2E4540] font-normal">
                      <strong className="text-[#122421] font-semibold block mb-0.5">सत्यापित टोकन प्रक्रिया</strong>
                      रिसेप्शन काउंटर पर रोज़ाना टोकन दिए जाते हैं। आने से पहले फ़ोन पर डॉक्टर की उपलब्धता अवश्य पुष्टि कर लें।
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={phoneHref}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0A5C4F] text-white font-semibold text-xs sm:text-sm hover:bg-[#07463C] transition-colors shadow-xs"
                  >
                    <Phone className="w-4 h-4 text-emerald-200" aria-hidden="true" />
                    <span>Reception से पूछें — आज कौन से Doctor उपलब्ध हैं?</span>
                  </a>
                </div>
              </ScrollReveal>

            </div>
          </Container>
        </section>

        {/* Section B: Medical Team by Departments */}
        <section className="py-12 sm:py-16 bg-[#FAFCFB]">
          <Container>
            <div className="space-y-12 sm:space-y-16">
              
              {/* Division 1: General Physicians (Primary Focus, 24/7 Coverage) */}
              {(() => {
                const group = departmentGroups[0];
                return (
                  <div key={group.id} id={group.id} className="scroll-mt-24">
                    <ScrollReveal direction="heading" className="max-w-3xl mb-6 sm:mb-8">
                      <div className="flex flex-wrap items-center gap-2.5 mb-2">
                        <span className="px-3 py-1 rounded-full bg-[#E8F5F1] text-[#0A5C4F] text-xs font-semibold uppercase tracking-wider border border-[#B7D8CA]">
                          {group.category}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-white text-[#2E4540] text-xs font-medium border border-[#D2E6DC]">
                          {group.badge}
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-semibold text-[#122421] tracking-tight leading-snug">
                        {group.titleHindi}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#2E4540] font-normal leading-relaxed mt-1">
                        {group.description}
                      </p>

                      <div className="mt-2.5 p-3 rounded-xl bg-white border border-[#D2E6DC] text-xs text-[#475B57] leading-relaxed flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 text-[#0A5C4F] shrink-0" aria-hidden="true" />
                        <span>{group.disclaimer}</span>
                      </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                      {group.doctors.map((doc, docIdx) => (
                        <ScrollReveal
                          key={doc.id}
                          direction="card"
                          delay={docIdx * 80}
                          className="h-full flex"
                        >
                          <DoctorCard
                            doctor={doc}
                            receptionPhone={primaryPhone}
                            featured={doc.isOwner}
                          />
                        </ScrollReveal>
                      ))}
                    </div>
                  </div>
                );
              })()}

              {/* Single Concise Specialist Availability Notice */}
              <ScrollReveal direction="card" delay={0}>
                <div className="p-4 sm:p-5 rounded-2xl bg-[#EAF5F1] border border-[#B2DFD6] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm text-[#1B4D44]">
                  <div className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-[#00796B] shrink-0" aria-hidden="true" />
                    <span className="font-medium">
                      Specialists are available on call. Please contact the hospital to confirm availability before visiting.
                    </span>
                  </div>
                  <a
                    href={primaryPhoneHref}
                    className="shrink-0 font-semibold text-[#00796B] hover:underline inline-flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Call {primaryPhone}</span>
                  </a>
                </div>
              </ScrollReveal>

              {/* Division 2: General Surgery (Specialists Section — Expertise & Classification) */}
              {(() => {
                const group = departmentGroups[1];
                return (
                  <div key={group.id} id={group.id} className="scroll-mt-24 rounded-3xl p-5 sm:p-7 lg:p-8 bg-[#F0F8F5] border-2 border-[#B2DFD6] shadow-2xs">
                    <ScrollReveal direction="heading" className="max-w-4xl mb-6">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="px-3 py-1 rounded-full bg-[#E0F2F1] text-[#00695C] text-xs font-semibold uppercase tracking-wider border border-[#80CBC4]">
                          ON-CALL SPECIALISTS
                        </span>
                        <span className="px-3 py-1 rounded-full bg-white text-[#2A6B62] text-xs font-medium border border-[#B2DFDB]">
                          3 Consultant Surgeons • On-call
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-semibold text-[#122421] tracking-tight leading-snug">
                        {group.titleHindi}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#2E4540] font-normal leading-relaxed mt-1">
                        {group.description}
                      </p>

                      {/* Supporting Specialty Visual for General Surgery Scope */}
                      <div className="relative w-full h-32 sm:h-36 rounded-2xl overflow-hidden mt-4 mb-1 border border-[#B0DCD2] bg-[#E8F5F1]">
                        <Image
                          src="/images/services/service-general-surgery.webp"
                          alt="Surgical procedure and theater equipment for General Surgery"
                          fill
                          sizes="(min-width: 1024px) 70vw, 100vw"
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                        <span className="absolute bottom-2 left-2.5 right-2.5 text-xs text-white/95 font-medium truncate drop-shadow-xs">
                          Surgical Theater &amp; Clinical Procedure Scope
                        </span>
                      </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                      {group.doctors.map((doc, docIdx) => (
                        <ScrollReveal
                          key={doc.id}
                          direction="card"
                          delay={docIdx * 80}
                          className="h-full flex"
                        >
                          <DoctorCard
                            doctor={doc}
                            receptionPhone={primaryPhone}
                          />
                        </ScrollReveal>
                      ))}
                    </div>
                  </div>
                );
              })()}

              {/* Division 3 & 4: Balanced Side-by-Side 2-Column Desktop Grid for Single-Specialist Categories */}
              {(() => {
                const neuroGroup = departmentGroups[2];
                const anaesthesiaGroup = departmentGroups[3];
                return (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
                    
                    {/* Neurosurgery Column (Specialists Section — Expertise & Classification) */}
                    <div id={neuroGroup.id} className="scroll-mt-24 rounded-3xl p-5 sm:p-7 bg-[#F0F8F5] border-2 border-[#B2DFD6] shadow-2xs flex flex-col justify-between">
                      <div>
                        <ScrollReveal direction="heading" className="mb-5">
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <span className="px-3 py-1 rounded-full bg-[#E0F2F1] text-[#00695C] text-xs font-semibold uppercase tracking-wider border border-[#80CBC4]">
                              {neuroGroup.category}
                            </span>
                            <span className="px-2.5 py-0.5 rounded-full bg-white text-[#2A6B62] text-[11px] font-medium border border-[#B2DFDB]">
                              {neuroGroup.badge}
                            </span>
                          </div>

                          <h3 className="text-xl sm:text-2xl font-semibold text-[#122421] tracking-tight leading-snug">
                            {neuroGroup.titleHindi}
                          </h3>
                          <p className="text-xs sm:text-sm text-[#2E4540] font-normal leading-relaxed mt-1">
                            {neuroGroup.description}
                          </p>

                          {/* Supporting Specialty Visual for Neurosurgery */}
                          <div className="relative w-full h-28 sm:h-32 rounded-2xl overflow-hidden mt-3.5 mb-1 border border-[#B0DCD2] bg-[#E8F5F1]">
                            <Image
                              src="/images/services/service-neurosurgery.webp"
                              alt="Neurological clinical examination and brain/spine scan visual"
                              fill
                              sizes="(min-width: 1024px) 35vw, 100vw"
                              className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                            <span className="absolute bottom-2 left-2 right-2 text-xs text-white/95 font-medium truncate drop-shadow-xs">
                              Neurological Scan &amp; Brain/Spine Scope
                            </span>
                          </div>
                        </ScrollReveal>
                      </div>

                      <div className="flex-1 flex flex-col pt-1">
                        {neuroGroup.doctors.map((doc, docIdx) => (
                          <ScrollReveal
                            key={doc.id}
                            direction="card"
                            delay={docIdx * 80}
                            className="h-full flex"
                          >
                            <DoctorCard
                              doctor={doc}
                              receptionPhone={primaryPhone}
                            />
                          </ScrollReveal>
                        ))}
                      </div>
                    </div>

                    {/* Anaesthesia Column (Specialists Section — Expertise & Classification) */}
                    <div id={anaesthesiaGroup.id} className="scroll-mt-24 rounded-3xl p-5 sm:p-7 bg-[#F0F8F5] border-2 border-[#B2DFD6] shadow-2xs flex flex-col justify-between">
                      <div>
                        <ScrollReveal direction="heading" className="mb-5">
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <span className="px-3 py-1 rounded-full bg-[#E0F2F1] text-[#00695C] text-xs font-semibold uppercase tracking-wider border border-[#80CBC4]">
                              {anaesthesiaGroup.category}
                            </span>
                            <span className="px-2.5 py-0.5 rounded-full bg-white text-[#2A6B62] text-[11px] font-medium border border-[#B2DFDB]">
                              {anaesthesiaGroup.badge}
                            </span>
                          </div>

                          <h3 className="text-xl sm:text-2xl font-semibold text-[#122421] tracking-tight leading-snug">
                            {anaesthesiaGroup.titleHindi}
                          </h3>
                          <p className="text-xs sm:text-sm text-[#2E4540] font-normal leading-relaxed mt-1">
                            {anaesthesiaGroup.description}
                          </p>

                          {/* Supporting Specialty Visual for Anaesthesia */}
                          <div className="relative w-full h-28 sm:h-32 rounded-2xl overflow-hidden mt-3.5 mb-1 border border-[#B0DCD2] bg-[#E8F5F1]">
                            <Image
                              src="/images/services/service-anaesthesia.webp"
                              alt="Anaesthesia vital signs and patient monitoring visual"
                              fill
                              sizes="(min-width: 1024px) 35vw, 100vw"
                              className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                            <span className="absolute bottom-2 left-2 right-2 text-xs text-white/95 font-medium truncate drop-shadow-xs">
                              Pre-Op Vitals &amp; Safe Anaesthesia Management
                            </span>
                          </div>
                        </ScrollReveal>
                      </div>

                      <div className="flex-1 flex flex-col pt-1">
                        {anaesthesiaGroup.doctors.map((doc, docIdx) => (
                          <ScrollReveal
                            key={doc.id}
                            direction="card"
                            delay={docIdx * 80}
                            className="h-full flex"
                          >
                            <DoctorCard
                              doctor={doc}
                              receptionPhone={primaryPhone}
                            />
                          </ScrollReveal>
                        ))}
                      </div>
                    </div>

                  </div>
                );
              })()}

            </div>
          </Container>
        </section>

        {/* Section C: OPD Timetable & Token Guide */}
        <section className="py-10 sm:py-16 bg-white border-t border-[#E5EFEA]">
          <Container>
            <div className="max-w-3xl mx-auto">
              <ScrollReveal direction="heading" className="text-center mb-8">
                <span className="text-xs font-medium uppercase tracking-widest text-[#0A5C4F]">
                  OPD TIMINGS &amp; TOKEN
                </span>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#122421] tracking-tight mt-1 leading-tight">
                  <span>Doctor से मिलने का </span>
                  <span className="font-serif italic font-normal text-[#0A5C4F]">
                    समय और Token।
                  </span>
                </h2>
                <p className="text-xs sm:text-sm text-[#2E4540] font-normal mt-2">
                  मरीज़ों की सुविधा और सही जाँच के लिए OPD का समय नीचे दिया गया है।
                </p>
              </ScrollReveal>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
                
                {/* Morning OPD Slot */}
                <ScrollReveal direction="card" delay={0} className="h-full">
                  <div className="p-5 bg-white rounded-2xl border border-[#B7D8CA] hover:border-[#8DBDAA] shadow-2xs space-y-2 h-full card-hover-lift transition-all">
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#0A5C4F] uppercase tracking-wider">
                      <Clock className="w-4 h-4" aria-hidden="true" />
                      <span>सुबह की OPD (Morning Session)</span>
                    </div>
                    <h3 className="text-lg font-semibold text-[#122421]">
                      सुबह 9:00 से दोपहर 1:00 बजे
                    </h3>
                    <p className="text-sm text-[#2E4540] leading-relaxed font-normal">
                      सामान्य बीमारियों की जाँच, फॉलो-अप, शुगर और ब्लड प्रेशर की नियमित जाँच। टोकन सुबह 8:30 बजे से दिए जाते हैं।
                    </p>
                  </div>
                </ScrollReveal>

                {/* Evening OPD Slot */}
                <ScrollReveal direction="card" delay={80} className="h-full">
                  <div className="p-5 bg-white rounded-2xl border border-[#B7D8CA] hover:border-[#8DBDAA] shadow-2xs space-y-2 h-full card-hover-lift transition-all">
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#0A5C4F] uppercase tracking-wider">
                      <Clock className="w-4 h-4" aria-hidden="true" />
                      <span>शाम की OPD (Evening Session)</span>
                    </div>
                    <h3 className="text-lg font-semibold text-[#122421]">
                      शाम 5:00 से रात 8:00 बजे
                    </h3>
                    <p className="text-sm text-[#2E4540] leading-relaxed font-normal">
                      कामकाजी लोगों और परिवारों के लिए शाम की OPD। पर्ची जाँच, Dressing और सामान्य उपचार।
                    </p>
                  </div>
                </ScrollReveal>

              </div>

              {/* Specialist Call Notice */}
              <ScrollReveal direction="card" delay={120}>
                <div className="p-4 sm:p-5 bg-[#E8F5F1] rounded-2xl border border-[#A9DCCB] text-[#0A5C4F] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm font-normal">
                  <div className="flex items-center gap-2.5">
                    <AlertCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                    <span>
                      On-call Specialists (General Surgery, Neurosurgery, Anaesthesia) के लिए आने से पहले Reception Desk पर Call करके ज़रूर पता करें।
                    </span>
                  </div>
                  <a
                    href={primaryPhoneHref}
                    className="font-semibold underline shrink-0 hover:text-[#07463C] inline-flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Call {primaryPhone}</span>
                  </a>
                </div>
              </ScrollReveal>

            </div>
          </Container>
        </section>

        {/* Pre-Footer Call to Action */}
        <ContactCTA />
      </main>

      <Footer />
    </div>
  );
}
