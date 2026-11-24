import ReactDOM from "react-dom";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Clock,
  MapPin,
  HeartPulse,
  Phone,
  Building2,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/shared/PageHero";
import { ContactCTA } from "@/components/shared/ContactCTA";
import { Container } from "@/components/shared/Container";
import { BotanicalOrganicSweep } from "@/components/ui/BotanicalDecorations";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import {
  hospitalConfig,
  primaryPhone,
  primaryPhoneHref,
  emergencyPhone,
  emergencyPhoneHref,
} from "@/content/hospital";
import { getCanonicalUrl, siteConfig } from "@/config/site";
import { generateBreadcrumbJsonLd, generateAboutPageJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: {
    absolute: "About Janta Hospital | Lohardaga, Jharkhand",
  },
  description:
    "Learn about Janta Hospital, its medical team, healthcare services and patient-focused approach in Lohardaga, Jharkhand.",
  alternates: {
    canonical: getCanonicalUrl("/about"),
  },
  openGraph: {
    title: "About Janta Hospital | Lohardaga, Jharkhand",
    description:
      "Learn about Janta Hospital, its medical team, healthcare services and patient-focused approach in Lohardaga, Jharkhand.",
    url: getCanonicalUrl("/about"),
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
    title: "About Janta Hospital | Lohardaga, Jharkhand",
    description:
      "Learn about Janta Hospital, its medical team, healthcare services and patient-focused approach in Lohardaga, Jharkhand.",
    images: [siteConfig.defaultOgImage.url],
  },
};

export default function AboutPage() {
  ReactDOM.preload("/images/janta-hospital-exterior.webp", {
    as: "image",
    type: "image/webp",
    fetchPriority: "high",
  });

  const phoneHref = primaryPhoneHref;
  const breadcrumbJsonLd = generateBreadcrumbJsonLd([{ name: "About", path: "/about" }]);
  const aboutJsonLd = generateAboutPageJsonLd();

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />
      <Header />

      <main className="flex-1">
        {/* Page Hero */}
        <PageHero
          breadcrumbs={[{ label: "About" }]}
          eyebrow="ABOUT JANTA HOSPITAL"
          title="हमारा"
          italicWord="Hospital"
          description="Lohardaga के Palmerganj में 24 घंटे Emergency सेवा, अनुभवी Doctors और सभी ज़रूरी दवाएँ एक ही जगह।"
          action={
            <>
              <a
                href={primaryPhoneHref}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0A5C4F] text-white font-semibold text-xs sm:text-sm hover:bg-[#07463C] transition-colors shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A5C4F]"
              >
                <Phone className="w-4 h-4 text-white" aria-hidden="true" />
                <span>अभी Call करें ({primaryPhone})</span>
              </a>
              <Link
                href="/contact"
                prefetch={false}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#122421] font-medium text-xs sm:text-sm hover:bg-gray-50 transition-colors border border-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A5C4F]"
              >
                <MapPin className="w-4 h-4 text-[#0A5C4F]" aria-hidden="true" />
                <span>Hospital का पता देखें</span>
              </Link>
            </>
          }
        />

        {/* Section A: Narrative & Daytime Campus Photograph */}
        <section className="relative py-10 sm:py-16 bg-white overflow-hidden">
          {/* Abstract Organic Botanical Sweep connecting photograph and narrative with restrained opacity */}
          <BotanicalOrganicSweep className="opacity-20 sm:opacity-25" />
          <Container className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Authentic Hospital Exterior Photograph (Left on desktop, second on mobile) */}
              <ScrollReveal direction="card" delay={0} className="lg:col-span-6 order-2 lg:order-1">
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#B7D8CA] hover:border-[#8DBDAA] shadow-2xs card-hover-lift transition-all bg-[#0D2420]">
                  <Image
                    src="/images/janta-hospital-exterior.webp"
                    alt="Daytime exterior photograph of Janta Hospital building in Palmerganj, Lohardaga"
                    width={800}
                    height={533}
                    priority
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-4 sm:p-5 bg-white border-t border-[#D2E6DC]">
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#0A5C4F] uppercase tracking-wider mb-1">
                      <Building2 className="w-4 h-4" aria-hidden="true" />
                      <span>Palmerganj में सेवा और देखभाल</span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#2E4540] font-normal leading-relaxed">
                      Head Post Office के ठीक पीछे स्थित Hospital — Ground Floor पर Reception, दवा काउंटर और 24 घंटे Emergency सेवाएँ।
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Editorial Mission Narrative (Right on desktop, first on mobile) */}
              <ScrollReveal direction="card" delay={100} className="lg:col-span-6 space-y-4 sm:space-y-6 order-1 lg:order-2">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#0A5C4F]">
                    हमारा संकल्प
                  </span>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#122421] tracking-tight mt-1 leading-snug py-0.5">
                    <span>हर परिवार के लिए आसान और </span>
                    <span className="font-serif italic font-normal text-[#0A5C4F]">
                      भरोसेमंद इलाज।
                    </span>
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-[#2E4540] font-normal leading-relaxed">
                  Lohardaga के Palmerganj में Head Post Office के ठीक पीछे स्थित Janta Hospital स्थानीय लोगों और आस-पास के ग्रामीण परिवारों के लिए एक भरोसेमंद स्वास्थ्य केंद्र है।
                </p>

                <p className="text-sm sm:text-base text-[#2E4540] font-normal leading-relaxed">
                  चाहे रात में अचानक Emergency में आना हो, सुबह Doctor से सलाह लेनी हो या दवाई Counter से दवा लेनी हो — यहाँ हर मरीज़ को अपना समझकर सही सलाह और देखभाल दी जाती है।
                </p>

                {/* Key Pillars */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-[#F9EDEE]/60 border border-[#ECCDD0] hover:border-[#DDA5AB] text-[#471E21] flex items-start gap-2.5 shadow-2xs">
                    <Clock className="w-4 h-4 text-[#A63F45] shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <span className="text-xs sm:text-sm font-semibold text-[#A63F45] block">
                        24/7 Emergency Care
                      </span>
                      <span className="text-xs text-[#471E21] font-normal leading-snug block">
                        Duty Doctors द्वारा तुरंत प्राथमिक जाँच और इलाज
                      </span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#F4FAF7] border border-[#B7D8CA] hover:border-[#8DBDAA] flex items-start gap-2.5 shadow-2xs">
                    <HeartPulse className="w-4 h-4 text-[#0A5C4F] shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <span className="text-xs sm:text-sm font-semibold text-[#122421] block">
                        सही सलाह और मदद
                      </span>
                      <span className="text-xs text-[#2E4540] font-normal leading-snug block">
                        ईमानदार जाँच, दवा और ज़रूरत पर Ranchi के लिए मार्गदर्शन
                      </span>
                    </div>
                  </div>
                </div>

              </ScrollReveal>

            </div>
          </Container>
        </section>

        {/* Section B: Spaces Inside the Facility */}
        <section className="py-10 sm:py-16 bg-[#F8FAF9] border-y border-[#D2E6DC]">
          <Container>
            <ScrollReveal direction="heading" className="max-w-2xl mb-8 sm:mb-12">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#0A5C4F]">
                Hospital व्यवस्था
              </span>
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#122421] tracking-tight mt-1 leading-snug py-0.5">
                <span>Hospital के मुख्य </span>
                <span className="font-serif italic font-normal text-[#0A5C4F]">
                  हिस्से।
                </span>
              </h2>
              <p className="text-xs sm:text-sm text-[#2E4540] mt-2 leading-relaxed font-normal">
                मरीज़ों और परिवारों की सुविधा के लिए अस्पताल की व्यवस्था:
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Card 1: Ground-Floor Reception Entry */}
              <ScrollReveal direction="card" delay={0} className="h-full">
                <div className="bg-white rounded-2xl border border-[#B7D8CA] hover:border-[#8DBDAA] overflow-hidden shadow-2xs flex flex-col justify-between h-full card-hover-lift transition-all">
                  <div>
                    <div className="relative h-48 sm:h-52 w-full bg-[#EDF7F3] border-b border-[#D2E6DC]">
                      <Image
                        src="/images/gallery-entrance.webp"
                        alt="Front veranda, accessible ramp, and reception entryway at Janta Hospital, Lohardaga"
                        width={800}
                        height={600}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="font-semibold text-base sm:text-lg text-[#122421] mb-1">
                        मुख्य द्वार और Reception
                      </h3>
                      <p className="text-xs sm:text-sm text-[#2E4540] leading-relaxed font-normal">
                        Ground Floor पर प्रवेश करते ही Reception डेस्क, जहाँ से टोकन, पर्ची और डॉक्टर से मिलने की तुरंत जानकारी मिलती है।
                      </p>
                    </div>
                  </div>
                  <div className="px-5 pb-5">
                    <span className="text-xs text-[#0A5C4F] font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Ground Floor से आसान प्रवेश</span>
                    </span>
                  </div>
                </div>
              </ScrollReveal>

              {/* Card 2: On-Site Pharmacy */}
              <ScrollReveal direction="card" delay={80} className="h-full">
                <div className="bg-white rounded-2xl border border-[#B7D8CA] hover:border-[#8DBDAA] overflow-hidden shadow-2xs flex flex-col justify-between h-full card-hover-lift transition-all">
                  <div>
                    <div className="relative h-48 sm:h-52 w-full bg-[#EDF7F3] border-b border-[#D2E6DC]">
                      <Image
                        src="/images/gallery-pharmacy.webp"
                        alt="On-site medicine dispensary counter at Janta Hospital porch"
                        width={800}
                        height={600}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="font-semibold text-base sm:text-lg text-[#122421] mb-1">
                        Hospital Pharmacy
                      </h3>
                      <p className="text-xs sm:text-sm text-[#2E4540] leading-relaxed font-normal">
                        Doctor को दिखाने के तुरंत बाद Hospital में ही सभी ज़रूरी दवाइयाँ और पट्टियाँ आसानी से मिल जाती हैं।
                      </p>
                    </div>
                  </div>
                  <div className="px-5 pb-5">
                    <span className="text-xs text-[#0A5C4F] font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Hospital Pharmacy Counter</span>
                    </span>
                  </div>
                </div>
              </ScrollReveal>

              {/* Card 3: Clinic Floor Access Staircase */}
              <ScrollReveal direction="card" delay={160} className="h-full">
                <div className="bg-white rounded-2xl border border-[#B7D8CA] hover:border-[#8DBDAA] overflow-hidden shadow-2xs flex flex-col justify-between h-full card-hover-lift transition-all">
                  <div>
                    <div className="relative h-48 sm:h-52 w-full bg-[#EDF7F3] border-b border-[#D2E6DC]">
                      <Image
                        src="/images/gallery-staircase.webp"
                        alt="Clinic floor access corridor and consulting staircase at Janta Hospital"
                        width={800}
                        height={600}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="font-semibold text-base sm:text-lg text-[#122421] mb-1">
                        Clinic Floor &amp; Consultation
                      </h3>
                      <p className="text-xs sm:text-sm text-[#2E4540] leading-relaxed font-normal">
                        सुव्यवस्थित परामर्श कक्ष, ड्रेसिंग रूम और शांत वातावरण में 24 घंटे प्राथमिक स्वास्थ्य देखभाल।
                      </p>
                    </div>
                  </div>
                  <div className="px-5 pb-5">
                    <span className="text-xs text-[#0A5C4F] font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>साफ़ और सुव्यवस्थित परिसर</span>
                    </span>
                  </div>
                </div>
              </ScrollReveal>

            </div>
          </Container>
        </section>

        {/* Section C: Verified Fact Ledger Table */}
        <section className="py-10 sm:py-16 bg-white">
          <Container>
            <div className="max-w-3xl mx-auto">
              <ScrollReveal direction="heading" className="text-center mb-8">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#0A5C4F]">
                  Hospital Ledger
                </span>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#122421] tracking-tight mt-1 leading-snug py-0.5">
                  <span>Hospital से जुड़ी </span>
                  <span className="font-serif italic font-normal text-[#0A5C4F]">
                    ज़रूरी जानकारी।
                  </span>
                </h2>
                <p className="text-xs sm:text-sm text-[#2E4540] font-normal mt-2">
                  मरीज़ों की सुविधा के लिए Janta Hospital द्वारा प्रमाणित जानकारी।
                </p>
              </ScrollReveal>

              <ScrollReveal direction="card" delay={60}>
                <div className="rounded-2xl border border-[#B7D8CA] overflow-hidden shadow-2xs divide-y divide-[#EBF2EE]">
                  <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-[#FCFDFD]">
                    <span className="text-xs font-medium uppercase text-[#3B524E] tracking-wider">
                      Hospital का नाम
                    </span>
                    <span className="text-sm font-semibold text-[#122421]">
                      {hospitalConfig.name.value} / जनता हॉस्पिटल
                    </span>
                  </div>

                  <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-white">
                    <span className="text-xs font-medium uppercase text-[#3B524E] tracking-wider">
                      Hospital का पता
                    </span>
                    <span className="text-xs sm:text-sm text-[#122421] font-normal text-right sm:text-right">
                      {hospitalConfig.location.fullAddress}
                    </span>
                  </div>

                  <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-[#F9EDEE]/50 border-l-4 border-l-[#A63F45]">
                    <span className="text-xs sm:text-sm font-medium uppercase text-[#A63F45] tracking-wider">
                      Emergency Care (24/7)
                    </span>
                    <div className="flex flex-col sm:items-end gap-1">
                      <span className="text-xs sm:text-sm font-semibold text-[#A63F45] inline-flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#A63F45]" />
                        24/7 चालू (Duty Doctors द्वारा)
                      </span>
                      <a
                        href={emergencyPhoneHref}
                        className="text-xs sm:text-sm font-mono font-semibold text-[#A63F45] hover:underline inline-flex items-center gap-1.5"
                      >
                        <Phone className="w-3.5 h-3.5 text-[#A63F45]" aria-hidden="true" />
                        <span>हेल्पलाइन: {emergencyPhone}</span>
                      </a>
                    </div>
                  </div>

                  <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-white">
                    <span className="text-xs sm:text-sm font-medium uppercase text-[#3B524E] tracking-wider">
                      OPD Consultation Timing
                    </span>
                    <span className="text-xs sm:text-sm text-[#122421] font-normal">
                      सोमवार से शनिवार • सुबह और शाम
                    </span>
                  </div>

                  <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-[#FCFDFD]">
                    <div>
                      <span className="text-xs sm:text-sm font-medium uppercase text-[#3B524E] tracking-wider block">
                        मुख्य Phone नंबर
                      </span>
                      <span className="text-xs text-[#526661] font-normal">
                        Hospital Enquiries &amp; OPD
                      </span>
                    </div>
                    <a
                      href={primaryPhoneHref}
                      className="text-sm sm:text-base font-mono font-semibold text-[#0A5C4F] hover:underline inline-flex items-center gap-1.5"
                    >
                      <Phone className="w-4 h-4 text-[#0A5C4F]" aria-hidden="true" />
                      <span>{primaryPhone}</span>
                    </a>
                  </div>

                  <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-white">
                    <span className="text-xs sm:text-sm font-medium uppercase text-[#3B524E] tracking-wider">
                      Hospital Pharmacy
                    </span>
                    <span className="text-xs sm:text-sm text-[#122421] font-normal">
                      Hospital परिसर में सामने ही उपलब्ध
                    </span>
                  </div>
                </div>

                {/* Link to Services and Doctors */}
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs sm:text-sm font-medium">
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1.5 text-[#0A5C4F] hover:underline"
                  >
                    <span>Services देखें</span>
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </Link>
                  <span className="hidden sm:inline text-gray-300">•</span>
                  <Link
                    href="/doctors"
                    className="inline-flex items-center gap-1.5 text-[#0A5C4F] hover:underline"
                  >
                    <span>Doctors देखें</span>
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </Link>
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
