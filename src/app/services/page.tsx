import { Metadata } from "next";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/shared/PageHero";
import { ServiceCard } from "@/components/services/ServiceCard";
import { ContactCTA } from "@/components/shared/ContactCTA";
import { Container } from "@/components/shared/Container";
import { BotanicalBranchingTendril } from "@/components/ui/BotanicalDecorations";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { servicesData } from "@/content/services";
import { hospitalConfig } from "@/content/hospital";

export const metadata: Metadata = {
  title: "Medical Services | 24-Hour Emergency & OPD | Janta Hospital",
  description:
    "Explore clinical services at Janta Hospital in Palmerganj, Lohardaga. Offering 24-hour emergency care, outpatient OPD consultations, on-site pharmacy dispensary, and clinical dressing support.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Medical Services | Janta Hospital Lohardaga",
    description:
      "Comprehensive community healthcare services in Lohardaga, Jharkhand: 24/7 emergency response, daily OPD consultations, and on-premises pharmacy.",
    url: "https://jantahospital.in/services",
  },
};

export default function ServicesPage() {
  const phoneHref = `tel:${hospitalConfig.contact.phone.value}`;

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Page Hero */}
        <PageHero
          breadcrumbs={[{ label: "Services" }]}
          eyebrow="SERVICES"
          title="इलाज और"
          italicWord="सुविधाएँ"
          description="24/7 Emergency Care, OPD Consultation, Hospital Pharmacy और Dressing & Injection — Lohardaga में आपकी हर स्वास्थ्य ज़रूरत का ध्यान।"
          action={
            <>
              <a
                href={phoneHref}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#A63F45] text-white font-bold text-xs sm:text-sm hover:bg-[#8E3339] transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A63F45]"
              >
                <Phone className="w-4 h-4 text-white animate-call-ring" aria-hidden="true" />
                <span>Emergency Helpline ({hospitalConfig.contact.phone.formatted})</span>
              </a>
              <Link
                href="/doctors"
                prefetch={false}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#122421] font-bold text-xs sm:text-sm hover:bg-gray-50 transition-colors border border-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A5C4F]"
              >
                <span>हमारे Doctors देखें</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#0A5C4F]" aria-hidden="true" />
              </Link>
            </>
          }
        />

        {/* Section A: Emergency Notice Banner */}
        <section className="py-3.5 sm:py-4 bg-[#F9EDEE] text-[#471E21] border-b border-[#ECCDD0]">
          <Container>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm">
              <div className="flex items-center gap-2.5 font-bold text-[#471E21] text-sm sm:text-base">
                <span className="w-2.5 h-2.5 rounded-full bg-[#A63F45] shrink-0" />
                <span>24/7 Emergency Care सेवा चालू है — सीधे Hospital आएँ।</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-[#A63F45] font-bold text-xs sm:text-sm">Emergency Helpline:</span>
                <a
                  href={phoneHref}
                  className="font-mono font-bold text-[#A63F45] text-sm sm:text-base hover:underline inline-flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-[#A63F45]" aria-hidden="true" />
                  <span>{hospitalConfig.contact.phone.formatted}</span>
                </a>
              </div>
            </div>
          </Container>
        </section>

        {/* Section B: Medical Services Grid */}
        <section className="relative pt-16 pb-16 sm:py-16 bg-white overflow-hidden">
          {/* Abstract Botanical Branching Tendril behind service cards */}
          <BotanicalBranchingTendril />
          <Container className="relative z-10">
            <ScrollReveal direction="heading" className="max-w-2xl mb-12 sm:mb-12 space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0A5C4F]">
                Our Services
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#122421] tracking-tight mt-1 leading-tight">
                <span>Lohardaga में </span>
                <span className="font-serif italic font-normal text-[#0A5C4F]">
                  स्वास्थ्य सुविधाएँ और 24/7 Emergency Care
                </span>
              </h2>
              <p className="text-sm sm:text-base text-[#2E4540] font-semibold leading-relaxed">
                Janta Hospital Palmerganj में 24/7 Emergency Care, अनुभवी Duty Doctors, daily OPD Consultation और Hospital Pharmacy एक ही छत के नीचे उपलब्ध है। स्थानीय और ग्रामीण परिवारों के लिए त्वरित चिकित्सा सहायता।
              </p>
            </ScrollReveal>

            {/* Asymmetric Services Directory Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-start">
              {servicesData.map((service, idx) => (
                <ScrollReveal
                  key={service.id}
                  direction="card"
                  delay={idx * 80}
                  className="h-full flex flex-col"
                >
                  <ServiceCard service={service} priority={idx === 0} />
                </ScrollReveal>
              ))}
            </div>
          </Container>
        </section>

        {/* Section C: Patient Access Protocol */}
        <section className="py-10 sm:py-16 bg-[#F6FAF8] border-t border-[#E2EEE8]">
          <Container>
            <ScrollReveal direction="heading" className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0A5C4F]">
                Patient Guide
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#122421] tracking-tight mt-1 leading-tight">
                <span>Hospital कैसे आएँ और </span>
                <span className="font-serif italic font-normal text-[#0A5C4F]">
                  क्या करें?
                </span>
              </h2>
              <p className="text-xs sm:text-sm text-[#2E4540] font-semibold mt-2">
                Emergency, OPD Consultation और Hospital Pharmacy की आसान जानकारी।
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Step 1: Emergency Access */}
              <ScrollReveal direction="card" delay={0} className="h-full">
                <div className="p-6 bg-[#F9EDEE]/50 rounded-2xl border border-[#ECCDD0] shadow-2xs space-y-3 text-[#471E21] h-full">
                  <div className="w-10 h-10 rounded-xl bg-[#A63F45] text-white flex items-center justify-center font-bold text-sm shadow-2xs">
                    01
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#A63F45]">
                    24/7 Emergency Care
                  </h3>
                  <p className="text-xs sm:text-sm text-[#471E21] leading-relaxed font-semibold">
                    अचानक तबीयत खराब होने या चोट लगने पर बिना किसी देरी के सीधे Palmerganj Hospital आएँ। 24 घंटे Duty Staff मौजूद रहता है।
                  </p>
                  <div className="pt-2">
                    <a
                      href={phoneHref}
                      className="text-xs sm:text-sm font-bold text-[#A63F45] hover:underline inline-flex items-center gap-1.5"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#A63F45]" aria-hidden="true" />
                      <span>Duty Staff को सूचित करें: {hospitalConfig.contact.phone.formatted}</span>
                      <ArrowRight className="w-3 h-3" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </ScrollReveal>

              {/* Step 2: Outpatient Consultation */}
              <ScrollReveal direction="card" delay={80} className="h-full">
                <div className="p-6 bg-white rounded-2xl border border-[#D5E5DE] shadow-2xs space-y-3 h-full">
                  <div className="w-10 h-10 rounded-xl bg-[#E8F5F1] text-[#0A5C4F] flex items-center justify-center font-bold text-sm">
                    02
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#122421]">
                    OPD Consultation
                  </h3>
                  <p className="text-xs sm:text-sm text-[#2E4540] leading-relaxed font-semibold">
                    सोमवार से शनिवार सुबह और शाम Doctor से मिलने की सुविधा। Ground Floor Reception से टोकन लें या Phone पर पुष्टि करें।
                  </p>
                  <div className="pt-2">
                    <Link
                      href="/doctors"
                      className="text-xs sm:text-sm font-bold text-[#0A5C4F] hover:underline inline-flex items-center gap-1"
                    >
                      <span>OPD Timing देखें</span>
                      <ArrowRight className="w-3 h-3" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>

              {/* Step 3: Pharmacy Collection */}
              <ScrollReveal direction="card" delay={160} className="h-full">
                <div className="p-6 bg-white rounded-2xl border border-[#D5E5DE] shadow-2xs space-y-3 h-full">
                  <div className="w-10 h-10 rounded-xl bg-[#E8F5F1] text-[#0A5C4F] flex items-center justify-center font-bold text-sm">
                    03
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#122421]">
                    Hospital Pharmacy
                  </h3>
                  <p className="text-xs sm:text-sm text-[#2E4540] leading-relaxed font-semibold">
                    Doctor को दिखाने के तुरंत बाद Hospital में ही दवा काउंटर से अपनी दवाएँ और ज़रूरी सर्जिकल सामान प्राप्त करें।
                  </p>
                  <div className="pt-2">
                    <Link
                      href="/contact"
                      className="text-xs sm:text-sm font-bold text-[#0A5C4F] hover:underline inline-flex items-center gap-1"
                    >
                      <span>पता और समय</span>
                      <ArrowRight className="w-3 h-3" aria-hidden="true" />
                    </Link>
                  </div>
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
