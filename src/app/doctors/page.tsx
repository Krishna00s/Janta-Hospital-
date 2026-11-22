import { Metadata } from "next";
import Image from "next/image";
import { Phone, Clock, ShieldCheck, AlertCircle, CheckCircle2 } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/shared/PageHero";
import { ContactCTA } from "@/components/shared/ContactCTA";
import { Container } from "@/components/shared/Container";
import { BotanicalSideClimber } from "@/components/ui/BotanicalDecorations";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { doctorsData } from "@/content/doctors";
import { hospitalConfig } from "@/content/hospital";

export const metadata: Metadata = {
  title: "Our Doctors & Clinical Team | Janta Hospital Lohardaga",
  description:
    "Doctors and clinical team at Janta Hospital, Lohardaga. 24/7 emergency medical assistance via rotating duty medical officers and daily morning and evening outpatient consultations.",
  alternates: {
    canonical: "/doctors",
  },
  openGraph: {
    title: "Meet Our Doctors | Janta Hospital Lohardaga",
    description:
      "Dedicated medical officers and consulting physicians serving Lohardaga. 24/7 emergency coverage with scheduled morning and evening OPD clinics.",
    url: "https://jantahospital.in/doctors",
  },
};

export default function DoctorsPage() {
  const phoneHref = `tel:${hospitalConfig.contact.phone.value}`;

  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* High-Priority LCP Image Preload for Doctors Page */}
      <link
        rel="preload"
        as="image"
        href="/illustrations/doctor-physician.svg"
        type="image/svg+xml"
        fetchPriority="high"
      />
      <Header />

      <main className="flex-1">
        {/* Page Hero */}
        <PageHero
          breadcrumbs={[{ label: "Doctors" }]}
          eyebrow="OUR DOCTORS & CLINICAL TEAM"
          title="हमारे"
          italicWord="Doctors"
          description="Lohardaga के Palmerganj में आपकी देखभाल के लिए समर्पित Duty Doctors, परामर्श फिजिशियन और मेडिकल स्टाफ।"
          action={
            <a
              href={phoneHref}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0A5C4F] text-white font-bold text-xs sm:text-sm hover:bg-[#07463C] transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A5C4F]"
            >
              <Phone className="w-4 h-4 text-white" aria-hidden="true" />
              <span>आज का Doctor Roster पूछें ({hospitalConfig.contact.phone.formatted})</span>
            </a>
          }
        />

        {/* Section A: Honest Editorial Doctor & Clinical Care Presentation */}
        <section className="relative py-8 sm:py-14 bg-white overflow-hidden">
          {/* Subtle botanical side climber behind layout */}
          <BotanicalSideClimber side="left" />
          
          <Container className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column (5 cols on lg): Large Expressive Doctor Illustrations */}
              <ScrollReveal direction="card" delay={0} className="lg:col-span-5 flex flex-col gap-4">
                <div className="relative w-full rounded-3xl overflow-hidden border border-[#D5EAE0] bg-gradient-to-b from-[#EDF7F3] to-[#DFEFE8] shadow-md flex items-center justify-center p-4">
                  <Image
                    src="/illustrations/doctor-physician.svg"
                    alt="Doctor at Janta Hospital Lohardaga"
                    width={500}
                    height={400}
                    className="w-full h-auto max-h-[340px] object-contain p-2"
                    priority
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-xs font-bold text-[#0A5C4F] uppercase tracking-wider border border-[#CDEAE0]">
                    Duty Medical Care
                  </span>
                </div>

                {/* Sub-illustration Card */}
                <div className="p-4 rounded-2xl bg-[#F4FAF7] border border-[#DCEFE6] flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-xl bg-white border border-[#CDEAE0] overflow-hidden shrink-0">
                    <Image
                      src="/illustrations/doctor-specialist.svg"
                      alt="Specialist doctor consultation illustration"
                      width={64}
                      height={64}
                      className="w-full h-full object-contain p-1"
                    />
                  </div>
                  <div>
                    <span className="font-sans font-bold text-sm sm:text-base text-[#122421] block">
                      विशेषज्ञ डॉक्टर्स (Specialists)
                    </span>
                    <p className="text-xs sm:text-sm text-[#2E4540] mt-0.5 leading-snug font-semibold">
                      तय दिनों पर विशेषज्ञ डॉक्टर उपलब्ध होते हैं। Reception Desk से टोकन लें।
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Right Column (7 cols on lg): Doctor Availability Protocol & Reception Guide */}
              <ScrollReveal direction="card" delay={100} className="lg:col-span-7 space-y-5">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#0A5C4F]">
                    DOCTOR AVAILABILITY &amp; ROSTER
                  </span>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#122421] tracking-tight mt-1 leading-tight">
                    <span>Doctor कब मिलेंगे? </span>
                    <span className="font-serif italic font-normal text-[#0A5C4F]">
                      समय और व्यवस्था।
                    </span>
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-[#2E4540] font-semibold leading-relaxed">
                  Janta Hospital Lohardaga में 24 घंटे Emergency ड्यूटी पर Resident Medical Officers (RMO) उपस्थित रहते हैं। साथ ही प्रतिदिन सुबह और शाम की OPD में अनुभवी फिजीशियन और तय दिनों पर विजिटिंग विशेषज्ञ डॉक्टर्स उपलब्ध होते हैं।
                </p>

                {/* Key Doctor Protocols */}
                <div className="space-y-3 pt-1">
                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F8FAF9] border border-[#E0EFE8]">
                    <CheckCircle2 className="w-4 h-4 text-[#0A5C4F] shrink-0 mt-0.5" aria-hidden="true" />
                    <div className="text-xs sm:text-sm leading-relaxed text-[#2E4540] font-semibold">
                      <strong className="text-[#122421] block mb-0.5">24/7 Emergency Care Coverage</strong>
                      अचानक तबीयत खराब होने, चोट या दर्द में बिना किसी पूर्व सूचना के सीधे आ सकते हैं।
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F8FAF9] border border-[#E0EFE8]">
                    <CheckCircle2 className="w-4 h-4 text-[#0A5C4F] shrink-0 mt-0.5" aria-hidden="true" />
                    <div className="text-xs sm:text-sm leading-relaxed text-[#2E4540] font-semibold">
                      <strong className="text-[#122421] block mb-0.5">दैनिक OPD (Morning &amp; Evening)</strong>
                      सोमवार से शनिवार सुबह 9:00 से दोपहर 1:00 और शाम 5:00 से रात 8:00 बजे तक।
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F8FAF9] border border-[#E0EFE8]">
                    <CheckCircle2 className="w-4 h-4 text-[#0A5C4F] shrink-0 mt-0.5" aria-hidden="true" />
                    <div className="text-xs sm:text-sm leading-relaxed text-[#2E4540] font-semibold">
                      <strong className="text-[#122421] block mb-0.5">सत्यापित टोकन प्रक्रिया</strong>
                      रिसेप्शन काउंटर पर रोज़ाना टोकन दिए जाते हैं। आने से पहले फ़ोन पर डॉक्टर की पुष्टि अवश्य करें।
                    </div>
                  </div>
                </div>

                {/* Direct Action */}
                <div className="pt-2">
                  <a
                    href={phoneHref}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0A5C4F] text-white font-bold text-xs sm:text-sm hover:bg-[#07463C] transition-colors shadow-sm"
                  >
                    <Phone className="w-4 h-4 text-emerald-200" aria-hidden="true" />
                    <span>Reception से पूछें — आज कौन से Doctor उपलब्ध हैं?</span>
                  </a>
                </div>

              </ScrollReveal>

            </div>
          </Container>
        </section>

        {/* Section B: 24/7 Doctor Coverage Notice Banner */}
        <section className="py-6 sm:py-8 bg-[#F9EDEE]/40 border-y border-[#ECCDD0]">
          <Container>
            <ScrollReveal direction="card" className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl p-5 sm:p-6 border border-[#ECCDD0] shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#F9EDEE] text-[#A63F45] border border-[#ECCDD0] flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                    <ShieldCheck className="w-5 h-5 text-[#A63F45]" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm sm:text-base font-bold text-[#A63F45]">
                        {doctorsData.roundTheClockNotice.highlight}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-[#F9EDEE] text-[#A63F45] border border-[#ECCDD0] text-xs font-bold uppercase tracking-wider">
                        Continuous Duty
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#471E21] leading-relaxed font-semibold">
                      {doctorsData.roundTheClockNotice.description}
                    </p>
                  </div>
                </div>

                <a
                  href={phoneHref}
                  className="shrink-0 w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#A63F45] text-white font-bold text-xs sm:text-sm hover:bg-[#8E3339] transition-colors shadow-sm shadow-[#A63F45]/20"
                >
                  <Phone className="w-4 h-4 text-white animate-call-ring" aria-hidden="true" />
                  <span>Duty Desk पर Call करें</span>
                </a>
              </div>
            </ScrollReveal>
          </Container>
        </section>

        {/* Section C: Outpatient Consultation Guide & Token Information */}
        <section className="py-10 sm:py-16 bg-[#F8FAF9] border-t border-[#E5EFEA]">
          <Container>
            <div className="max-w-3xl mx-auto">
              <ScrollReveal direction="heading" className="text-center mb-8">
                <span className="text-xs font-bold uppercase tracking-widest text-[#0A5C4F]">
                  OPD TIMINGS &amp; TOKEN
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#122421] tracking-tight mt-1 leading-tight">
                  <span>Doctor से मिलने का </span>
                  <span className="font-serif italic font-normal text-[#0A5C4F]">
                    समय और Token।
                  </span>
                </h2>
                <p className="text-xs sm:text-sm text-[#2E4540] font-semibold mt-2">
                  मरीज़ों की सुविधा और सही जाँच के लिए OPD का समय नीचे दिया गया है।
                </p>
              </ScrollReveal>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
                
                {/* Morning OPD Slot */}
                <ScrollReveal direction="card" delay={0} className="h-full">
                  <div className="p-5 bg-white rounded-2xl border border-[#D5E5DE] shadow-2xs space-y-2 h-full">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#0A5C4F] uppercase tracking-wider">
                      <Clock className="w-4 h-4" aria-hidden="true" />
                      <span>सुबह की OPD (Morning Session)</span>
                    </div>
                    <h3 className="text-lg font-bold text-[#122421]">
                      सुबह 9:00 से दोपहर 1:00 बजे
                    </h3>
                    <p className="text-sm text-[#2E4540] leading-relaxed font-semibold">
                      सामान्य बीमारियों की जाँच, फॉलो-अप, शुगर और ब्लड प्रेशर की नियमित जाँच। टोकन सुबह 8:30 बजे से दिए जाते हैं।
                    </p>
                  </div>
                </ScrollReveal>

                {/* Evening OPD Slot */}
                <ScrollReveal direction="card" delay={80} className="h-full">
                  <div className="p-5 bg-white rounded-2xl border border-[#D5E5DE] shadow-2xs space-y-2 h-full">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#0A5C4F] uppercase tracking-wider">
                      <Clock className="w-4 h-4" aria-hidden="true" />
                      <span>शाम की OPD (Evening Session)</span>
                    </div>
                    <h3 className="text-lg font-bold text-[#122421]">
                      शाम 5:00 से रात 8:00 बजे
                    </h3>
                    <p className="text-sm text-[#2E4540] leading-relaxed font-semibold">
                      कामकाजी लोगों और परिवारों के लिए शाम की OPD। पर्ची जाँच, Dressing और सामान्य उपचार।
                    </p>
                  </div>
                </ScrollReveal>

              </div>

              {/* Roster Verification Box */}
              <ScrollReveal direction="card" delay={120}>
                <div className="p-4 sm:p-5 bg-[#E8F5F1] rounded-2xl border border-[#A9DCCB] text-[#0A5C4F] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm font-semibold">
                  <div className="flex items-center gap-2.5">
                    <AlertCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                    <span>
                      Visiting Specialists के आने का दिन हर हफ़्ते बदल सकता है। आने से पहले Reception Desk पर Call करके ज़रूर पता करें।
                    </span>
                  </div>
                  <a
                    href={phoneHref}
                    className="font-bold underline shrink-0 hover:text-[#07463C] inline-flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Call +91 96938 21174</span>
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
