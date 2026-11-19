import { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, ShieldCheck, HeartPulse } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/shared/PageHero";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { ContactCTA } from "@/components/shared/ContactCTA";
import { Container } from "@/components/shared/Container";
import { BotanicalGrowingVine } from "@/components/ui/BotanicalDecorations";
import { hospitalConfig } from "@/content/hospital";

export const metadata: Metadata = {
  title: "Hospital की सुविधाएँ और व्यवस्था | Janta Hospital Lohardaga",
  description:
    "Lohardaga के Palmerganj में Janta Hospital की व्यवस्था और सुविधाएँ: 24 घंटे Emergency, Doctor से मिलना (OPD), दवा की दुकान और वार्ड व्यवस्था।",
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    title: "Hospital की सुविधाएँ और व्यवस्था | Janta Hospital Lohardaga",
    description:
      "Lohardaga के Palmerganj में Janta Hospital की सुविधाएँ: 24 घंटे Emergency सेवा, OPD और दवा काउंटर।",
    url: "https://jantahospital.in/gallery",
  },
};

export default function GalleryPage() {
  const phoneHref = `tel:${hospitalConfig.contact.phone.value}`;

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Page Hero */}
        <PageHero
          breadcrumbs={[{ label: "सुविधाएँ और व्यवस्था" }]}
          eyebrow="PATIENT GUIDE"
          title="Hospital की"
          italicWord="सुविधाएँ"
          description="Lohardaga के Palmerganj में मरीज़ों की सुविधा और देखभाल की पूरी जानकारी — 24 घंटे Emergency, Doctor से मिलना, दवा काउंटर और वार्ड व्यवस्था।"
          action={
            <>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0A5C4F] text-white font-bold text-xs sm:text-sm hover:bg-[#07463C] transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A5C4F]"
              >
                <MapPin className="w-4 h-4 text-white" aria-hidden="true" />
                <span>Hospital का पता देखें</span>
              </Link>
              <a
                href={phoneHref}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#122421] font-bold text-xs sm:text-sm hover:bg-gray-50 transition-colors border border-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A5C4F]"
              >
                <Phone className="w-4 h-4 text-[#0A5C4F]" aria-hidden="true" />
                <span>Emergency Call ({hospitalConfig.contact.phone.formatted})</span>
              </a>
            </>
          }
        />

        {/* Section A: Patient Guide Notice */}
        <section className="py-4 sm:py-4.5 bg-[#F2F8F5] border-b border-[#D8ECE2]">
          <Container>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#475B57]">
              <div className="flex items-center gap-2">
                <HeartPulse className="w-4 h-4 text-[#0A5C4F]" aria-hidden="true" />
                <span className="font-semibold text-[#122421]">
                  मरीज़ों की सुविधा गाइड (Patient Guide)
                </span>
                <span className="hidden sm:inline text-gray-300">•</span>
                <span>Hospital आने पर आपको किस विभाग में क्या सुविधा मिलती है, यहाँ साफ़ जानकारी दी गई है।</span>
              </div>
              <span className="font-mono text-[11px] text-[#0A5C4F] font-bold">
                Palmerganj, Lohardaga
              </span>
            </div>
          </Container>
        </section>

        {/* Section B: Asymmetric Patient Facilities Guide */}
        <section className="relative pt-12 pb-16 sm:py-16 bg-white overflow-hidden" aria-labelledby="facilities-guide-heading">
          {/* Restrained occasional organic shape around guide */}
          <BotanicalGrowingVine className="opacity-50" />
          <Container className="relative z-10">
            <div className="max-w-2xl mb-8 sm:mb-10 space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0A5C4F]">
                Patient Guide &amp; Facilities
              </span>
              <h2 id="facilities-guide-heading" className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#122421] tracking-tight mt-1 leading-tight">
                <span>Hospital की सुविधाएँ और </span>
                <span className="font-serif italic font-normal text-[#0A5C4F]">
                  व्यवस्था।
                </span>
              </h2>
              <p className="text-sm sm:text-base text-[#475B57] leading-relaxed">
                Ground Floor Reception, 24 घंटे Emergency, Doctor से मिलना, दवा काउंटर और वार्ड व्यवस्था की पूरी जानकारी।
              </p>
            </div>
            <GalleryGrid />
          </Container>
        </section>

        {/* Pre-Footer Call to Action */}
        <ContactCTA />
      </main>

      <Footer />
    </div>
  );
}
