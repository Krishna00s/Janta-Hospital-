import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Phone, ArrowRight, ShieldCheck, Clock, AlertCircle, CheckCircle2 } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/shared/PageHero";
import { ServiceCard } from "@/components/services/ServiceCard";
import { ContactCTA } from "@/components/shared/ContactCTA";
import { Container } from "@/components/shared/Container";
import { BotanicalBranchingTendril } from "@/components/ui/BotanicalDecorations";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import {
  servicesData,
  emergencyServices,
  surgicalServices,
  generalServices,
} from "@/content/services";
import { hospitalConfig, emergencyPhone, emergencyPhoneHref } from "@/content/hospital";
import { getCanonicalUrl, siteConfig } from "@/config/site";
import { generateBreadcrumbJsonLd, generateServicesJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: {
    absolute: "Hospital Services in Lohardaga | Janta Hospital",
  },
  description:
    "Explore emergency care, OPD consultations, surgical service enquiries, pharmacy and other healthcare services at Janta Hospital, Lohardaga.",
  alternates: {
    canonical: getCanonicalUrl("/services"),
  },
  openGraph: {
    title: "Hospital Services in Lohardaga | Janta Hospital",
    description:
      "Explore emergency care, OPD consultations, surgical service enquiries, pharmacy and other healthcare services at Janta Hospital, Lohardaga.",
    url: getCanonicalUrl("/services"),
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
    images: [
      {
        url: siteConfig.defaultOgImage.url,
        width: siteConfig.defaultOgImage.width,
        height: siteConfig.defaultOgImage.height,
        alt: siteConfig.defaultOgImage.alt,
        type: siteConfig.defaultOgImage.type,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hospital Services in Lohardaga | Janta Hospital",
    description:
      "Explore emergency care, OPD consultations, surgical service enquiries, pharmacy and other healthcare services at Janta Hospital, Lohardaga.",
    images: [siteConfig.defaultOgImage.url],
  },
};

export default function ServicesPage() {
  const phoneHref = emergencyPhoneHref;
  const breadcrumbJsonLd = generateBreadcrumbJsonLd([{ name: "Services", path: "/services" }]);
  const servicesJsonLd = generateServicesJsonLd();

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      <Header />

      <main className="flex-1">
        {/* Page Hero */}
        <PageHero
          breadcrumbs={[{ label: "Services" }]}
          eyebrow="MEDICAL &amp; SURGICAL SERVICES"
          title="इलाज और"
          italicWord="सुविधाएँ"
          description="24/7 Emergency Care, विशेषज्ञ सर्जरी परामर्श (General, Ortho, Laparoscopic, Neuro), दैनिक OPD और अस्पताल फार्मेसी — Palmerganj, Lohardaga में संपूर्ण देखभाल।"
          action={
            <>
              <a
                href={emergencyPhoneHref}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#A63F45] text-white font-semibold text-xs sm:text-sm hover:bg-[#8E3339] transition-colors shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A63F45]"
              >
                <Phone className="w-4 h-4 text-white animate-call-ring" aria-hidden="true" />
                <span>Emergency Helpline ({emergencyPhone})</span>
              </a>
              <Link
                href="/doctors"
                prefetch={false}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#122421] font-medium text-xs sm:text-sm hover:bg-gray-50 transition-colors border border-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A5C4F]"
              >
                <span>हमारे Doctors देखें</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#0A5C4F]" aria-hidden="true" />
              </Link>
            </>
          }
        />

        {/* Section A: Emergency Care Banner */}
        <section className="py-3.5 sm:py-4 bg-[#F9EDEE] text-[#471E21] border-b border-[#ECCDD0]">
          <Container>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm">
              <div className="flex items-center gap-2.5 font-semibold text-[#471E21] text-sm sm:text-base">
                <span className="w-2.5 h-2.5 rounded-full bg-[#A63F45] shrink-0 animate-pulse" />
                <span>24/7 Emergency Care सेवा चालू है — सीधे Hospital आएँ।</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-[#A63F45] font-medium text-xs sm:text-sm">Emergency Helpline:</span>
                <a
                  href={emergencyPhoneHref}
                  className="font-mono font-semibold text-[#A63F45] text-sm sm:text-base hover:underline inline-flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-[#A63F45]" aria-hidden="true" />
                  <span>{emergencyPhone}</span>
                </a>
              </div>
            </div>
          </Container>
        </section>

        {/* ============================================================ */}
        {/* SECTION 1: Emergency Care Primary Block (2-Column Desktop) */}
        {/* ============================================================ */}
        <section id="emergency" className="py-10 sm:py-14 lg:py-16 bg-[#FAFCFA] border-b border-[#E5EFEA]">
          <Container>
            <ScrollReveal direction="card" delay={0}>
              <div className="rounded-3xl bg-white border-2 border-[#ECCDD0] p-6 sm:p-8 lg:p-10 shadow-xs">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                  {/* Left Column (7 cols): Direct Urgency, Clinical Details & Action */}
                  <div className="lg:col-span-7 space-y-4 sm:space-y-5">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F9EDEE] text-[#A63F45] border border-[#ECCDD0] text-xs font-semibold tracking-wider">
                        <span className="w-2 h-2 rounded-full bg-[#A63F45] animate-pulse" aria-hidden="true" />
                        24/7 Emergency Care
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-[#E8F5F1] text-[#0A5C4F] text-xs font-medium border border-[#B7D8CA]">
                        Verified On Premises
                      </span>
                    </div>

                    <div>
                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#122421] tracking-tight leading-snug">
                        <span>24 घंटे आपातकालीन </span>
                        <span className="text-[#A63F45]">प्राथमिक देखभाल</span>
                        <span> एवं स्थिरीकरण</span>
                      </h2>
                      <p className="mt-2 text-sm sm:text-base text-[#2E4540] font-normal leading-relaxed">
                        अचानक तबीयत बिगड़ने, चोट, जलने, सांस लेने में तकलीफ या गंभीर दर्द में तुरंत प्राथमिक उपचार, ऑक्सीजन सहायता और स्थिरीकरण। Duty Doctor व प्रशिक्षित नर्सिंग स्टाफ 24 घंटे उपलब्ध रहते हैं।
                      </p>
                    </div>

                    {/* Assurances List */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                      {emergencyServices[0].keyFeatures.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#122421]">
                          <CheckCircle2 className="w-4 h-4 text-[#A63F45] shrink-0 mt-0.5" aria-hidden="true" />
                          <span className="leading-snug">{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Actions & Immediate Note */}
                    <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                      <a
                        href={emergencyPhoneHref}
                        className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#A63F45] text-white font-semibold text-sm hover:bg-[#8E3339] transition-all shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A63F45] active:scale-[0.99] min-h-[44px]"
                      >
                        <Phone className="w-4 h-4 text-white animate-call-ring shrink-0" aria-hidden="true" />
                        <span>Emergency Call: {emergencyPhone}</span>
                      </a>
                      <span className="text-xs text-[#475B57] font-medium text-center sm:text-left">
                        Palmerganj, Lohardaga • सीधे अस्पताल आएँ
                      </span>
                    </div>
                  </div>

                  {/* Right Column (5 cols): Clean Framed Entrance Photo */}
                  <div className="lg:col-span-5">
                    <div className="relative rounded-2xl overflow-hidden border border-[#D5E5DE] shadow-xs group bg-[#F0F6F3]">
                      <div className="aspect-[4/3] relative w-full overflow-hidden">
                        <Image
                          src="/images/gallery-entrance.webp"
                          alt="24-Hour emergency care entrance access at Janta Hospital Lohardaga"
                          fill
                          sizes="(max-width: 1024px) 100vw, 420px"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          priority
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </Container>
        </section>

        {/* ============================================================ */}
        {/* SECTION 2: Surgery & Operations Showcase */}
        {/* ============================================================ */}
        <section id="surgery" className="relative py-12 sm:py-16 bg-[#FAFCFB] border-b border-[#E5EFEA] overflow-hidden">
          <BotanicalBranchingTendril className="opacity-25 sm:opacity-30" />
          
          <Container className="relative z-10">
            <ScrollReveal direction="heading" className="max-w-3xl mb-8 sm:mb-10">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full bg-[#E8F5F1] text-[#0A5C4F] text-xs font-semibold uppercase tracking-wider border border-[#B7D8CA]">
                  SURGICAL SERVICES
                </span>
                <span className="px-3 py-1 rounded-full bg-white text-[#475B57] text-xs font-medium border border-[#D2E6DC]">
                  On-call Specialist Network
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#122421] tracking-tight leading-snug">
                <span>विशेषज्ञ सर्जरी एवं </span>
                <span className="font-serif italic font-normal text-[#0A5C4F]">
                  ऑपरेशन परामर्श।
                </span>
              </h2>

              <p className="text-sm sm:text-base text-[#2E4540] font-normal leading-relaxed mt-2">
                General Surgery, Orthopaedic Surgery, Laparoscopic Surgery और Neurosurgery में अनुभवी ऑन-कॉल सर्जनों द्वारा प्राथमिक परामर्श एवं क्लिनिकल असेसमेंट उपलब्ध है।
              </p>

              {/* Management Confirmation Caveat Banner */}
              <div className="mt-4 p-4 rounded-2xl bg-white border border-[#D2E6DC] text-xs text-[#475B57] leading-relaxed flex items-start gap-2.5 shadow-2xs">
                <AlertCircle className="w-4 h-4 text-[#0A5C4F] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <strong className="text-[#122421] font-semibold block mb-0.5">
                    अस्पताल प्रबंधन सूचना (Verification &amp; Scheduling Policy):
                  </strong>
                  सर्जरी व ऑपरेशन की विशिष्ट श्रेणियाँ अस्पताल प्रतिनिधि द्वारा प्रस्तावित हैं। विशिष्ट प्रक्रियाओं, आवश्यक जांचों, उपकरण उपयुक्तता एवं ऑपरेशन थिएटर (OT) समय की पुष्टि अस्पताल रिसेप्शन एवं ड्यूटी डॉक्टर से संपर्क करके की जाती है।
                </div>
              </div>
            </ScrollReveal>

            {/* 4 Surgical Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
              {surgicalServices.map((service, idx) => (
                <ScrollReveal
                  key={service.id}
                  direction="card"
                  delay={idx * 80}
                  className="h-full flex flex-col"
                >
                  <ServiceCard service={service} />
                </ScrollReveal>
              ))}
            </div>
          </Container>
        </section>

        {/* ============================================================ */}
        {/* SECTION 3: General Medical Services (Verified Essentials) */}
        {/* ============================================================ */}
        <section id="general-services" className="py-12 sm:py-16 bg-white border-b border-[#E5EFEA]">
          <Container>
            <ScrollReveal direction="heading" className="max-w-3xl mb-8 sm:mb-10">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#0A5C4F]">
                PRIMARY HEALTHCARE &amp; AMENITIES
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#122421] tracking-tight mt-1 leading-snug">
                <span>दैनिक OPD, फार्मेसी एवं </span>
                <span className="font-serif italic font-normal text-[#0A5C4F]">
                  क्लिनिकल सुविधाएँ।
                </span>
              </h2>
              <p className="text-sm sm:text-base text-[#2E4540] font-normal leading-relaxed mt-2">
                दैनिक सुबह-शाम डॉक्टर परामर्श, ऑन-साइट दवा काउंटर, सुरक्षित घाव ड्रेसिंग और मरीजों का मार्गदर्शन — एक ही छत के नीचे।
              </p>
            </ScrollReveal>

            {/* General Services Grid: Balanced 2x2 Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
              {generalServices.map((service, idx) => (
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
        <section className="py-10 sm:py-16 bg-[#F6FAF8]">
          <Container>
            <ScrollReveal direction="heading" className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-medium uppercase tracking-widest text-[#0A5C4F]">
                Patient Guide
              </span>
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#122421] tracking-tight mt-1 leading-tight">
                <span>Hospital कैसे आएँ और </span>
                <span className="font-serif italic font-normal text-[#0A5C4F]">
                  क्या करें?
                </span>
              </h2>
              <p className="text-xs sm:text-sm text-[#2E4540] font-normal mt-2">
                Emergency, OPD Consultation, सर्जरी परामर्श और Hospital Pharmacy की आसान जानकारी।
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Step 1: Emergency Access */}
              <ScrollReveal direction="card" delay={0} className="h-full">
                <div className="p-6 bg-[#F9EDEE]/50 rounded-2xl border border-[#ECCDD0] shadow-2xs space-y-3 text-[#471E21] h-full">
                  <div className="w-10 h-10 rounded-xl bg-[#A63F45] text-white flex items-center justify-center font-semibold text-sm shadow-2xs">
                    01
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-[#A63F45]">
                    24/7 Emergency Care
                  </h3>
                  <p className="text-xs sm:text-sm text-[#471E21] leading-relaxed font-normal">
                    अचानक तबीयत खराब होने या चोट लगने पर बिना किसी देरी के सीधे Palmerganj Hospital आएँ। 24 घंटे Duty Staff मौजूद रहता है।
                  </p>
                  <div className="pt-2">
                    <a
                      href={emergencyPhoneHref}
                      className="text-xs sm:text-sm font-medium text-[#A63F45] hover:underline inline-flex items-center gap-1.5"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#A63F45]" aria-hidden="true" />
                      <span>Duty Staff को सूचित करें: {emergencyPhone}</span>
                      <ArrowRight className="w-3 h-3" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </ScrollReveal>

              {/* Step 2: Outpatient & Surgery Consultation */}
              <ScrollReveal direction="card" delay={80} className="h-full">
                <div className="p-6 bg-white rounded-2xl border border-[#D5E5DE] shadow-2xs space-y-3 h-full">
                  <div className="w-10 h-10 rounded-xl bg-[#E8F5F1] text-[#0A5C4F] flex items-center justify-center font-semibold text-sm">
                    02
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-[#122421]">
                    OPD एवं सर्जरी परामर्श
                  </h3>
                  <p className="text-xs sm:text-sm text-[#2E4540] leading-relaxed font-normal">
                    सोमवार से शनिवार दैनिक OPD और ऑन-कॉल सर्जन से मिलने की सुविधा। Ground Floor Reception से टोकन लें या Phone पर पुष्टि करें।
                  </p>
                  <div className="pt-2">
                    <Link
                      href="/doctors"
                      className="text-xs sm:text-sm font-medium text-[#0A5C4F] hover:underline inline-flex items-center gap-1"
                    >
                      <span>हमारे Doctors देखें</span>
                      <ArrowRight className="w-3 h-3" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>

              {/* Step 3: Pharmacy Collection */}
              <ScrollReveal direction="card" delay={160} className="h-full">
                <div className="p-6 bg-white rounded-2xl border border-[#D5E5DE] shadow-2xs space-y-3 h-full">
                  <div className="w-10 h-10 rounded-xl bg-[#E8F5F1] text-[#0A5C4F] flex items-center justify-center font-semibold text-sm">
                    03
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-[#122421]">
                    Hospital Pharmacy
                  </h3>
                  <p className="text-xs sm:text-sm text-[#2E4540] leading-relaxed font-normal">
                    Doctor को दिखाने के तुरंत बाद Hospital में ही दवा काउंटर से अपनी दवाएँ और ज़रूरी सर्जिकल सामान प्राप्त करें।
                  </p>
                  <div className="pt-2">
                    <Link
                      href="/contact"
                      className="text-xs sm:text-sm font-medium text-[#0A5C4F] hover:underline inline-flex items-center gap-1"
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
