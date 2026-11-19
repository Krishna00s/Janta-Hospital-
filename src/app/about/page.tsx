import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
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
import { hospitalConfig } from "@/content/hospital";

export const metadata: Metadata = {
  title: "About Janta Hospital | 24-Hour Healthcare in Lohardaga",
  description:
    "Learn about Janta Hospital in Palmerganj, Lohardaga, Jharkhand. Providing 24-hour emergency medical care, outpatient consultations, on-site pharmacy, and patient-first healthcare.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Janta Hospital | Lohardaga, Jharkhand",
    description:
      "A trusted community healthcare center in Palmerganj, Lohardaga, providing 24-hour emergency medical response, daily OPD, and on-site medicine counter.",
    url: "https://jantahospital.in/about",
  },
};

export default function AboutPage() {
  const phoneHref = `tel:${hospitalConfig.contact.phone.value}`;

  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* High-Priority LCP Image Preload for About Page */}
      <link
        rel="preload"
        as="image"
        href="/illustrations/about-hospital-care.svg"
        type="image/svg+xml"
        fetchPriority="high"
      />
      <Header />

      <main className="flex-1">
        {/* Page Hero */}
        <PageHero
          breadcrumbs={[{ label: "हमारा Hospital" }]}
          eyebrow="ABOUT JANTA HOSPITAL"
          title="हमारा"
          italicWord="Hospital"
          description="Lohardaga के Palmerganj में 24 घंटे Emergency सेवा, अनुभवी Doctors और सभी ज़रूरी दवाएँ एक ही जगह।"
          action={
            <>
              <a
                href={phoneHref}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0A5C4F] text-white font-bold text-xs sm:text-sm hover:bg-[#07463C] transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A5C4F]"
              >
                <Phone className="w-4 h-4 text-white" aria-hidden="true" />
                <span>अभी Call करें ({hospitalConfig.contact.phone.formatted})</span>
              </a>
              <Link
                href="/contact"
                prefetch={false}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#122421] font-bold text-xs sm:text-sm hover:bg-gray-50 transition-colors border border-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A5C4F]"
              >
                <MapPin className="w-4 h-4 text-[#0A5C4F]" aria-hidden="true" />
                <span>Hospital का पता देखें</span>
              </Link>
            </>
          }
        />

        {/* Section A: Narrative & Daytime Campus Photograph */}
        <section className="relative py-10 sm:py-16 bg-white overflow-hidden">
          {/* Abstract Organic Botanical Sweep connecting photograph and narrative */}
          <BotanicalOrganicSweep />
          <Container className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Healthcare & Community Care Medical Illustration (Left on desktop, second on mobile) */}
              <div className="lg:col-span-6 order-2 lg:order-1">
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#D5E5DE] shadow-sm bg-[#EDF7F3]">
                  <Image
                    src="/illustrations/about-hospital-care.svg"
                    alt="Medical illustration of doctors and clinical care at Janta Hospital in Palmerganj, Lohardaga"
                    width={800}
                    height={533}
                    priority
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-4 sm:p-5 bg-white border-t border-[#E5EFEA]">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#0A5C4F] uppercase tracking-wider mb-1">
                      <Building2 className="w-4 h-4" aria-hidden="true" />
                      <span>Palmerganj में सेवा और देखभाल</span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#475B57] leading-relaxed">
                      Head Post Office के ठीक पीछे स्थित Hospital — Ground Floor पर Reception, दवा काउंटर और 24 घंटे Emergency सेवाएँ।
                    </p>
                  </div>
                </div>
              </div>

              {/* Editorial Mission Narrative (Right on desktop, first on mobile) */}
              <div className="lg:col-span-6 space-y-4 sm:space-y-6 order-1 lg:order-2">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#0A5C4F]">
                    हमारा संकल्प
                  </span>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#122421] tracking-tight mt-1 leading-tight">
                    <span>हर परिवार के लिए आसान और </span>
                    <span className="font-serif italic font-normal text-[#0A5C4F]">
                      भरोसेमंद इलाज।
                    </span>
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-[#475B57] leading-relaxed">
                  Lohardaga के Palmerganj में Head Post Office के ठीक पीछे स्थित Janta Hospital स्थानीय लोगों और आस-पास के ग्रामीण परिवारों के लिए एक भरोसेमंद स्वास्थ्य केंद्र है।
                </p>

                <p className="text-sm sm:text-base text-[#475B57] leading-relaxed">
                  चाहे रात में अचानक Emergency में आना हो, सुबह Doctor से सलाह लेनी हो या दवाई Counter से दवा लेनी हो — यहाँ हर मरीज़ को अपना समझकर सही सलाह और देखभाल दी जाती है।
                </p>

                {/* Key Pillars */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-[#F4FAF7] border border-[#E0EFE8] flex items-start gap-2.5">
                    <Clock className="w-4 h-4 text-[#0A5C4F] shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <span className="text-xs font-bold text-[#122421] block">
                        24 घंटे Emergency सेवा
                      </span>
                      <span className="text-[11px] text-[#556D67] leading-snug block">
                        Duty Doctors द्वारा तुरंत प्राथमिक जाँच और इलाज
                      </span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#F4FAF7] border border-[#E0EFE8] flex items-start gap-2.5">
                    <HeartPulse className="w-4 h-4 text-[#0A5C4F] shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <span className="text-xs font-bold text-[#122421] block">
                        सही सलाह और मदद
                      </span>
                      <span className="text-[11px] text-[#556D67] leading-snug block">
                        ईमानदार जाँच, दवा और ज़रूरत पर Ranchi के लिए मार्गदर्शन
                      </span>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </Container>
        </section>

        {/* Section B: Spaces Inside the Facility */}
        <section className="py-10 sm:py-16 bg-[#F8FAF9] border-y border-[#E5EFEA]">
          <Container>
            <div className="max-w-2xl mb-8 sm:mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0A5C4F]">
                Hospital व्यवस्था
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#122421] tracking-tight mt-1 leading-tight">
                <span>Hospital के मुख्य </span>
                <span className="font-serif italic font-normal text-[#0A5C4F]">
                  हिस्से।
                </span>
              </h2>
              <p className="text-xs sm:text-sm text-[#475B57] mt-2 leading-relaxed">
                मरीज़ों और परिवारों की सुविधा के लिए अस्पताल की व्यवस्था:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Card 1: Ground-Floor Reception Entry */}
              <div className="bg-white rounded-2xl border border-[#DCE8E2] overflow-hidden shadow-2xs flex flex-col justify-between">
                <div>
                  <div className="relative h-48 sm:h-52 w-full bg-[#EDF7F3] border-b border-[#E2EDE8]">
                    <Image
                      src="/illustrations/facility-reception-desk.svg"
                      alt="Front veranda, reception entryway, and ground-floor access illustration at Janta Hospital, Lohardaga"
                      width={800}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-white/95 text-[#0A5C4F] text-[11px] font-bold uppercase tracking-wide">
                      Ground Floor
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-extrabold text-base sm:text-lg text-[#122421] mb-1">
                      मुख्य द्वार और Reception
                    </h3>
                    <p className="text-xs text-[#475B57] leading-relaxed">
                      Ground Floor पर प्रवेश करते ही Reception डेस्क, जहाँ से टोकन, पर्ची और डॉक्टर से मिलने की तुरंत जानकारी मिलती है।
                    </p>
                  </div>
                </div>
                <div className="px-5 pb-5">
                  <span className="text-[11px] text-[#0A5C4F] font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Ground Floor से आसान प्रवेश</span>
                  </span>
                </div>
              </div>

              {/* Card 2: On-Site Pharmacy */}
              <div className="bg-white rounded-2xl border border-[#DCE8E2] overflow-hidden shadow-2xs flex flex-col justify-between">
                <div>
                  <div className="relative h-48 sm:h-52 w-full bg-[#EDF7F3] border-b border-[#E2EDE8]">
                    <Image
                      src="/illustrations/facility-pharmacy-dispensary.svg"
                      alt="On-site medicine dispensary counter illustration at Janta Hospital"
                      width={800}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-white/95 text-[#0A5C4F] text-[11px] font-bold uppercase tracking-wide">
                      दवा की दुकान
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-extrabold text-base sm:text-lg text-[#122421] mb-1">
                      Hospital में दवा की दुकान
                    </h3>
                    <p className="text-xs text-[#475B57] leading-relaxed">
                      Doctor को दिखाने के तुरंत बाद Hospital में ही सभी ज़रूरी दवाइयाँ और पट्टियाँ आसानी से मिल जाती हैं।
                    </p>
                  </div>
                </div>
                <div className="px-5 pb-5">
                  <span className="text-[11px] text-[#0A5C4F] font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Hospital में ही दवा उपलब्ध</span>
                  </span>
                </div>
              </div>

              {/* Card 3: Patient Care Ward & Setup */}
              <div className="bg-white rounded-2xl border border-[#DCE8E2] overflow-hidden shadow-2xs flex flex-col justify-between">
                <div>
                  <div className="relative h-48 sm:h-52 w-full bg-[#EDF7F3] border-b border-[#E2EDE8]">
                    <Image
                      src="/illustrations/facility-clinical-ward.svg"
                      alt="Clinical observation ward and inpatient setup illustration at Janta Hospital"
                      width={800}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-white/95 text-[#0A5C4F] text-[11px] font-bold uppercase tracking-wide">
                      24 घंटे देखभाल
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-extrabold text-base sm:text-lg text-[#122421] mb-1">
                      मरीज़ देखभाल और वार्ड सेटअप
                    </h3>
                    <p className="text-xs text-[#475B57] leading-relaxed">
                      साफ़-सुथरे बिस्तर, ड्रिप स्टैंड, ड्रेसिंग और शांत वातावरण में 24 घंटे प्राथमिक स्वास्थ्य देखभाल।
                    </p>
                  </div>
                </div>
                <div className="px-5 pb-5">
                  <span className="text-[11px] text-[#0A5C4F] font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>साफ़ और सुरक्षित वार्ड</span>
                  </span>
                </div>
              </div>

            </div>
          </Container>
        </section>

        {/* Section C: Verified Fact Ledger Table */}
        <section className="py-10 sm:py-16 bg-white">
          <Container>
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <span className="text-xs font-bold uppercase tracking-widest text-[#0A5C4F]">
                  Hospital Ledger
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#122421] tracking-tight mt-1 leading-tight">
                  <span>Hospital से जुड़ी </span>
                  <span className="font-serif italic font-normal text-[#0A5C4F]">
                    ज़रूरी जानकारी।
                  </span>
                </h2>
                <p className="text-xs sm:text-sm text-[#475B57] mt-2">
                  मरीज़ों की सुविधा के लिए Janta Hospital द्वारा प्रमाणित जानकारी।
                </p>
              </div>

              <div className="rounded-2xl border border-[#DCE8E2] overflow-hidden shadow-2xs divide-y divide-[#EBF2EE]">
                <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-[#FCFDFD]">
                  <span className="text-xs font-bold uppercase text-[#3B524E] tracking-wider">
                    Hospital का नाम
                  </span>
                  <span className="text-sm font-extrabold text-[#122421]">
                    {hospitalConfig.name.value} / जनता हॉस्पिटल
                  </span>
                </div>

                <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-white">
                  <span className="text-xs font-bold uppercase text-[#3B524E] tracking-wider">
                    Hospital का पता
                  </span>
                  <span className="text-xs sm:text-sm text-[#122421] font-medium text-right sm:text-right">
                    {hospitalConfig.location.fullAddress}
                  </span>
                </div>

                <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-[#FCFDFD]">
                  <span className="text-xs font-bold uppercase text-[#3B524E] tracking-wider">
                    Emergency सेवा
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-[#0A5C4F] inline-flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#0A5C4F] animate-pulse" />
                    24 घंटे चालू (Duty Doctors द्वारा)
                  </span>
                </div>

                <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-white">
                  <span className="text-xs font-bold uppercase text-[#3B524E] tracking-wider">
                    Doctor से मिलने का समय (OPD)
                  </span>
                  <span className="text-xs sm:text-sm text-[#122421] font-medium">
                    सोमवार से शनिवार • सुबह और शाम
                  </span>
                </div>

                <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-[#FCFDFD]">
                  <span className="text-xs font-bold uppercase text-[#3B524E] tracking-wider">
                    मुख्य Phone नंबर
                  </span>
                  <a
                    href={phoneHref}
                    className="text-sm font-mono font-bold text-[#0A5C4F] hover:underline"
                  >
                    {hospitalConfig.contact.phone.formatted}
                  </a>
                </div>

                <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-white">
                  <span className="text-xs font-bold uppercase text-[#3B524E] tracking-wider">
                    दवा की दुकान
                  </span>
                  <span className="text-xs sm:text-sm text-[#122421] font-medium">
                    Hospital परिसर में सामने ही उपलब्ध
                  </span>
                </div>
              </div>

              {/* Link to Services and Doctors */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs font-bold">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1.5 text-[#0A5C4F] hover:underline"
                >
                  <span>इलाज और सुविधाएँ देखें</span>
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
                <span className="hidden sm:inline text-gray-300">•</span>
                <Link
                  href="/doctors"
                  className="inline-flex items-center gap-1.5 text-[#0A5C4F] hover:underline"
                >
                  <span>हमारे Doctors के बारे में जानें</span>
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
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
