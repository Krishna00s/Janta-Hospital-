import { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, HeartPulse } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/shared/PageHero";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { ContactCTA } from "@/components/shared/ContactCTA";
import { Container } from "@/components/shared/Container";
import { BotanicalGrowingVine } from "@/components/ui/BotanicalDecorations";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { hospitalConfig, emergencyPhone, emergencyPhoneHref } from "@/content/hospital";
import { getCanonicalUrl, siteConfig } from "@/config/site";
import { generateBreadcrumbJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: {
    absolute: "Hospital Photos & Premises | Janta Hospital Lohardaga",
  },
  description:
    "View genuine photographs of Janta Hospital in Lohardaga, Jharkhand — including the hospital entrance, emergency reception, consultation chambers, and on-site medicine counter.",
  alternates: {
    canonical: getCanonicalUrl("/gallery"),
  },
  openGraph: {
    title: "Hospital Photos & Premises | Janta Hospital Lohardaga",
    description:
      "View genuine photographs of Janta Hospital in Lohardaga, Jharkhand — including the hospital entrance, emergency reception, consultation chambers, and on-site medicine counter.",
    url: getCanonicalUrl("/gallery"),
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
    title: "Hospital Photos & Premises | Janta Hospital Lohardaga",
    description:
      "View genuine photographs of Janta Hospital in Lohardaga, Jharkhand — including the hospital entrance, emergency reception, consultation chambers, and on-site medicine counter.",
    images: [siteConfig.defaultOgImage.url],
  },
};

export default function GalleryPage() {
  const phoneHref = `tel:${hospitalConfig.contact.phone.value}`;
  const breadcrumbJsonLd = generateBreadcrumbJsonLd([{ name: "Gallery", path: "/gallery" }]);

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Header />

      <main className="flex-1">
        {/* Page Hero */}
        <PageHero
          breadcrumbs={[{ label: "Gallery" }]}
          eyebrow="PATIENT GUIDE &amp; FACILITIES"
          title="Hospital Facilities &amp;"
          italicWord="Premises"
          description="Genuine photographs and patient facility directory for Janta Hospital, Powergunj, Lohardaga: 24/7 Emergency Care, OPD consultation chambers, on-site pharmacy, and patient care wards — अस्पताल परिसर और सुविधाओं की संपूर्ण जानकारी।"
          action={
            <>
              <Link
                href="/contact"
                prefetch={false}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0A5C4F] text-white font-semibold text-xs sm:text-sm hover:bg-[#07463C] transition-colors shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A5C4F]"
              >
                <MapPin className="w-4 h-4 text-white" aria-hidden="true" />
                <span>View Hospital Location</span>
              </Link>
              <a
                href={emergencyPhoneHref}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#A63F45] text-white font-semibold text-xs sm:text-sm hover:bg-[#8E3339] transition-colors border border-[#A63F45] shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A63F45]"
              >
                <Phone className="w-4 h-4 text-white animate-call-ring" aria-hidden="true" />
                <span>Emergency Call ({emergencyPhone})</span>
              </a>
            </>
          }
        />

        {/* Section A: Patient Guide Notice */}
        <section className="py-4 sm:py-4.5 bg-[#F2F8F5] border-b border-[#D8ECE2]">
          <Container>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs sm:text-sm text-[#1F3330] font-normal">
              <div className="flex items-center gap-2">
                <HeartPulse className="w-4 h-4 text-[#0A5C4F]" aria-hidden="true" />
                <span className="font-semibold text-[#122421]">
                  Patient Facility Guide
                </span>
                <span className="hidden sm:inline text-gray-300">•</span>
                <span>Clear overview of departments, consultation chambers, and ground-floor access for patients and families.</span>
              </div>
              <span className="font-mono text-xs sm:text-sm text-[#0A5C4F] font-medium">
                Powergunj, Lohardaga
              </span>
            </div>
          </Container>
        </section>

        {/* Section B: Asymmetric Patient Facilities Guide */}
        <section className="relative pt-12 pb-16 sm:py-16 bg-white overflow-hidden" aria-labelledby="facilities-guide-heading">
          <BotanicalGrowingVine className="opacity-50" />
          <Container className="relative z-10">
            <ScrollReveal direction="heading" className="max-w-2xl mb-8 sm:mb-10 space-y-2">
              <span className="text-xs font-medium uppercase tracking-widest text-[#0A5C4F]">
                FACILITY DIRECTORY
              </span>
              <h2 id="facilities-guide-heading" className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#122421] tracking-tight mt-1 leading-tight">
                <span>Hospital Facilities &amp; </span>
                <span className="font-serif italic font-normal text-[#0A5C4F]">
                  Care Spaces.
                </span>
              </h2>
              <p className="text-sm sm:text-base text-[#2E4540] font-normal leading-relaxed">
                Ground Floor Reception, 24/7 Emergency Care, OPD consultation rooms, hospital dispensary, and patient observation areas — मरीज़ों की सुविधा और अस्पताल व्यवस्था की पूरी जानकारी।
              </p>
            </ScrollReveal>
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
