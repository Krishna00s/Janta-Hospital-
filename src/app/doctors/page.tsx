import { Metadata } from "next";
import Link from "next/link";
import { Phone, Clock, ShieldCheck, Stethoscope, AlertCircle, Calendar, ArrowRight, UserCheck } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/shared/PageHero";
import { DoctorCard } from "@/components/doctors/DoctorCard";
import { ContactCTA } from "@/components/shared/ContactCTA";
import { Container } from "@/components/shared/Container";
import { BotanicalSideClimber } from "@/components/ui/BotanicalDecorations";
import { doctorsData } from "@/content/doctors";
import { hospitalConfig } from "@/content/hospital";

export const metadata: Metadata = {
  title: "Our Doctors & Clinical Team | Janta Hospital Lohardaga",
  description:
    "Meet our doctors and clinical team at Janta Hospital, Lohardaga. 24/7 emergency medical assistance via rotating duty medical officers and daily outpatient specialist consultations.",
  alternates: {
    canonical: "/doctors",
  },
  openGraph: {
    title: "Meet Our Doctors | Janta Hospital Lohardaga",
    description:
      "Dedicated medical officers and consulting physicians serving Lohardaga. Medical assistance available 24/7 with scheduled morning and evening OPD clinics.",
    url: "https://jantahospital.in/doctors",
  },
};

export default function DoctorsPage() {
  const phoneHref = `tel:${hospitalConfig.contact.phone.value}`;

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Page Hero */}
        <PageHero
          breadcrumbs={[{ label: "हमारे Doctors" }]}
          eyebrow="OUR DOCTORS"
          title="हमारे"
          italicWord="Doctors"
          description={doctorsData.subtitle}
          action={
            <a
              href={phoneHref}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0A5C4F] text-white font-bold text-xs sm:text-sm hover:bg-[#07463C] transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A5C4F]"
            >
              <Phone className="w-4 h-4 text-white" aria-hidden="true" />
              <span>आज का Roster पूछें ({hospitalConfig.contact.phone.formatted})</span>
            </a>
          }
        />

        {/* Section A: 24/7 Doctor Coverage Notice Banner */}
        <section className="py-6 sm:py-8 bg-[#EBF5F1] border-b border-[#D5EAE0]">
          <Container>
            <div className="max-w-4xl mx-auto bg-white rounded-2xl p-5 sm:p-6 border border-[#A9DCCB] shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#0A5C4F] text-white flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-5 h-5 text-[#7CE4C9]" aria-hidden="true" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm sm:text-base font-extrabold text-[#122421]">
                      {doctorsData.roundTheClockNotice.highlight}
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-[#E8F5F1] text-[#0A5C4F] text-[10px] font-bold uppercase tracking-wider">
                      Continuous Duty
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#475B57] leading-relaxed">
                    {doctorsData.roundTheClockNotice.description}
                  </p>
                </div>
              </div>

              <a
                href={phoneHref}
                className="shrink-0 w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#0A5C4F] text-white font-bold text-xs sm:text-sm hover:bg-[#07463C] transition-colors"
              >
                <Phone className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Duty Desk पर Call करें</span>
              </a>
            </div>
          </Container>
        </section>

        {/* Section B: Doctors Roster Directory Grid */}
        <section className="relative py-10 sm:py-16 bg-white overflow-hidden">
          {/* Subtle botanical side climber & tendrils behind doctor layout */}
          <BotanicalSideClimber side="left" />
          <Container className="relative z-10">
            <div className="max-w-2xl mb-8 sm:mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0A5C4F]">
                Doctors Directory
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#122421] tracking-tight mt-1 leading-tight">
                <span>Hospital के Doctors और </span>
                <span className="font-serif italic font-normal text-[#0A5C4F]">
                  Medical Officers।
                </span>
              </h2>
              <p className="text-xs sm:text-sm text-[#475B57] mt-2 leading-relaxed">
                Reception counter पर रोज़ाना Doctors की ड्यूटी और टोकन अपडेट किए जाते हैं। आने से पहले फ़ोन करके पुष्टि अवश्य करें।
              </p>
            </div>

            {/* Doctor Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-start">
              {doctorsData.doctors.map((doctor) => (
                <DoctorCard
                  key={doctor.id}
                  doctor={doctor}
                  receptionPhone={hospitalConfig.contact.phone.value}
                />
              ))}
            </div>
          </Container>
        </section>

        {/* Section C: Outpatient Consultation Guide & Token Information */}
        <section className="py-10 sm:py-16 bg-[#F8FAF9] border-t border-[#E5EFEA]">
          <Container>
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <span className="text-xs font-bold uppercase tracking-widest text-[#0A5C4F]">
                  OPD TIMINGS &amp; TOKEN
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#122421] tracking-tight mt-1 leading-tight">
                  <span>Doctor से मिलने का </span>
                  <span className="font-serif italic font-normal text-[#0A5C4F]">
                    समय और Token।
                  </span>
                </h2>
                <p className="text-xs sm:text-sm text-[#475B57] mt-2">
                  मरीज़ों की सुविधा और सही जाँच के लिए OPD का समय नीचे दिया गया है।
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
                
                {/* Morning OPD Slot */}
                <div className="p-5 bg-white rounded-2xl border border-[#D5E5DE] shadow-2xs space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#0A5C4F] uppercase tracking-wider">
                    <Clock className="w-4 h-4" aria-hidden="true" />
                    <span>सुबह की OPD (Morning Session)</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#122421]">
                    सुबह 9:00 से दोपहर 1:00 बजे
                  </h3>
                  <p className="text-xs text-[#475B57] leading-relaxed">
                    सामान्य बीमारियों की जाँच, फॉलो-अप, शुगर और ब्लड प्रेशर की नियमित जाँच। टोकन सुबह 8:30 बजे से दिए जाते हैं।
                  </p>
                </div>

                {/* Evening OPD Slot */}
                <div className="p-5 bg-white rounded-2xl border border-[#D5E5DE] shadow-2xs space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#0A5C4F] uppercase tracking-wider">
                    <Clock className="w-4 h-4" aria-hidden="true" />
                    <span>शाम की OPD (Evening Session)</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#122421]">
                    शाम 5:00 से रात 8:00 बजे
                  </h3>
                  <p className="text-xs text-[#475B57] leading-relaxed">
                    कामकाजी लोगों और परिवारों के लिए शाम की OPD। पर्ची जाँच, मरहम-पट्टी और सामान्य उपचार।
                  </p>
                </div>

              </div>

              {/* Roster Verification Box */}
              <div className="p-4 sm:p-5 bg-[#E8F5F1] rounded-2xl border border-[#A9DCCB] text-[#0A5C4F] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm">
                <div className="flex items-center gap-2.5">
                  <AlertCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>
                    Visiting Specialists के आने का दिन हर हफ़्ते बदल सकता है। आने से पहले Reception Desk पर Call करके ज़रूर पता करें।
                  </span>
                </div>
                <a
                  href={phoneHref}
                  className="font-bold underline shrink-0 hover:text-[#07463C]"
                >
                  Call +91 96938 21174
                </a>
              </div>

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
