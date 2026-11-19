import { Metadata } from "next";
import Link from "next/link";
import { Phone, Clock, AlertTriangle, ShieldCheck, ArrowRight, MapPin } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/shared/PageHero";
import { ServiceCard } from "@/components/services/ServiceCard";
import { ContactCTA } from "@/components/shared/ContactCTA";
import { Container } from "@/components/shared/Container";
import { BotanicalBranchingTendril } from "@/components/ui/BotanicalDecorations";
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
          breadcrumbs={[{ label: "इलाज और सुविधाएँ" }]}
          eyebrow="SERVICES"
          title="इलाज और"
          italicWord="सुविधाएँ"
          description="24 घंटे Emergency, Doctor से सलाह (OPD), दवा की दुकान और मरहम-पट्टी — Lohardaga में आपकी हर स्वास्थ्य ज़रूरत का ध्यान।"
          action={
            <>
              <a
                href={phoneHref}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0A5C4F] text-white font-bold text-xs sm:text-sm hover:bg-[#07463C] transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A5C4F]"
              >
                <Phone className="w-4 h-4 text-white" aria-hidden="true" />
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
        <section className="py-6 sm:py-5 bg-[#EBF5F1] border-b border-[#D5EAE0]">
          <Container>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm">
              <div className="flex items-center gap-2.5 text-[#0A5C4F] font-bold">
                <span className="w-2.5 h-2.5 rounded-full bg-[#0A5C4F] animate-ping shrink-0" />
                <span>24 घंटे Emergency सेवा चालू है — सीधे Hospital आएँ।</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[#475B57] text-xs">Emergency Helpline:</span>
                <a
                  href={phoneHref}
                  className="font-mono font-bold text-[#0A5C4F] hover:underline"
                >
                  {hospitalConfig.contact.phone.formatted}
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
            <div className="max-w-2xl mb-12 sm:mb-12 space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0A5C4F]">
                Our Services
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#122421] tracking-tight mt-1 leading-tight">
                <span>Lohardaga में </span>
                <span className="font-serif italic font-normal text-[#0A5C4F]">
                  स्वास्थ्य सुविधाएँ और 24 घंटे Emergency
                </span>
              </h2>
              <p className="text-sm sm:text-base text-[#475B57] leading-relaxed">
                Janta Hospital Palmerganj में 24 घंटे Emergency सेवा, अनुभवी Duty Doctors, daily OPD (Doctor से सलाह) और दवा काउंटर एक ही छत के नीचे उपलब्ध है। स्थानीय और ग्रामीण परिवारों के लिए त्वरित चिकित्सा सहायता।
              </p>
            </div>

            {/* Asymmetric Services Directory Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-start">
              {servicesData.map((service, idx) => (
                <ServiceCard key={service.id} service={service} priority={idx === 0} />
              ))}
            </div>
          </Container>
        </section>

        {/* Section C: Patient Access Protocol */}
        <section className="py-10 sm:py-16 bg-[#F6FAF8] border-t border-[#E2EEE8]">
          <Container>
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0A5C4F]">
                Patient Guide
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#122421] tracking-tight mt-1 leading-tight">
                <span>Hospital कैसे आएँ और </span>
                <span className="font-serif italic font-normal text-[#0A5C4F]">
                  क्या करें?
                </span>
              </h2>
              <p className="text-xs sm:text-sm text-[#475B57] mt-2">
                Emergency, Doctor से मिलने (OPD) और दवा लेने की आसान जानकारी।
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Step 1: Emergency Access */}
              <div className="p-6 bg-white rounded-2xl border border-[#D5E5DE] shadow-2xs space-y-3">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-red-700 flex items-center justify-center font-bold text-sm">
                  01
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#122421]">
                  Emergency में सीधे आएँ
                </h3>
                <p className="text-xs sm:text-sm text-[#475B57] leading-relaxed">
                  अचानक तबीयत खराब होने या चोट लगने पर बिना किसी देरी के सीधे Palmerganj Hospital आएँ। 24 घंटे Duty Staff मौजूद रहता है।
                </p>
                <div className="pt-2">
                  <a
                    href={phoneHref}
                    className="text-xs font-bold text-[#0A5C4F] hover:underline inline-flex items-center gap-1"
                  >
                    <span>Duty Staff को सूचित करें: {hospitalConfig.contact.phone.formatted}</span>
                    <ArrowRight className="w-3 h-3" aria-hidden="true" />
                  </a>
                </div>
              </div>

              {/* Step 2: Outpatient Consultation */}
              <div className="p-6 bg-white rounded-2xl border border-[#D5E5DE] shadow-2xs space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#E8F5F1] text-[#0A5C4F] flex items-center justify-center font-bold text-sm">
                  02
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#122421]">
                  OPD में Token लें
                </h3>
                <p className="text-xs sm:text-sm text-[#475B57] leading-relaxed">
                  सोमवार से शनिवार सुबह और शाम Doctor से मिलने की सुविधा। Ground Floor Reception से टोकन लें या Phone पर पुष्टि करें।
                </p>
                <div className="pt-2">
                  <Link
                    href="/doctors"
                    className="text-xs font-bold text-[#0A5C4F] hover:underline inline-flex items-center gap-1"
                  >
                    <span>Doctors का समय देखें</span>
                    <ArrowRight className="w-3 h-3" aria-hidden="true" />
                  </Link>
                </div>
              </div>

              {/* Step 3: Pharmacy Collection */}
              <div className="p-6 bg-white rounded-2xl border border-[#D5E5DE] shadow-2xs space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#E8F5F1] text-[#0A5C4F] flex items-center justify-center font-bold text-sm">
                  03
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#122421]">
                  दवा और पट्टी
                </h3>
                <p className="text-xs sm:text-sm text-[#475B57] leading-relaxed">
                  Doctor को दिखाने के तुरंत बाद Hospital में ही दवा काउंटर से अपनी दवाएँ और ज़रूरी सर्जिकल सामान प्राप्त करें।
                </p>
                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="text-xs font-bold text-[#0A5C4F] hover:underline inline-flex items-center gap-1"
                  >
                    <span>पता और समय</span>
                    <ArrowRight className="w-3 h-3" aria-hidden="true" />
                  </Link>
                </div>
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
