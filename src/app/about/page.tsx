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
    absolute: "About Janta Hospital | Hospital in Lohardaga, Jharkhand",
  },
  description:
    "Learn about Janta Hospital in Powergunj, Lohardaga, Jharkhand. Dedicated to compassionate patient healthcare, 24-hour emergency care, experienced physicians, and honest community medicine.",
  alternates: {
    canonical: getCanonicalUrl("/about"),
  },
  openGraph: {
    title: "About Janta Hospital | Hospital in Lohardaga, Jharkhand",
    description:
      "Learn about Janta Hospital in Powergunj, Lohardaga, Jharkhand. Dedicated to compassionate patient healthcare, 24-hour emergency care, experienced physicians, and honest community medicine.",
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
    title: "About Janta Hospital | Hospital in Lohardaga, Jharkhand",
    description:
      "Learn about Janta Hospital in Powergunj, Lohardaga, Jharkhand. Dedicated to compassionate patient healthcare, 24-hour emergency care, experienced physicians, and honest community medicine.",
    images: [siteConfig.defaultOgImage.url],
  },
};

export default function AboutPage() {
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
          title="About"
          italicWord="Janta Hospital"
          description="Providing 24-hour emergency medical care, resident physician OPD consultations, and an on-site 24/7 pharmacy in Powergunj, Lohardaga. (Lohardaga के Powergunj में 24 घंटे Emergency सेवा और अनुभवी Doctors की देखरेख।)"
          action={
            <>
              <a
                href={primaryPhoneHref}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0A5C4F] text-white font-semibold text-xs sm:text-sm hover:bg-[#07463C] transition-colors shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A5C4F]"
              >
                <Phone className="w-4 h-4 text-white" aria-hidden="true" />
                <span>Call Reception ({primaryPhone})</span>
              </a>
              <a
                href={hospitalConfig.contact.mapsUrl.value}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#122421] font-medium text-xs sm:text-sm hover:bg-gray-50 transition-colors border border-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A5C4F]"
              >
                <MapPin className="w-4 h-4 text-[#0A5C4F]" aria-hidden="true" />
                <span>Get Directions</span>
              </a>
            </>
          }
        />

        {/* Section A: Narrative & Daytime Campus Photograph */}
        <section className="relative py-10 sm:py-16 bg-white overflow-hidden">
          <BotanicalOrganicSweep className="opacity-20 sm:opacity-25" />
          <Container className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Authentic Hospital Exterior Photograph */}
              <ScrollReveal direction="card" delay={0} className="lg:col-span-6 order-2 lg:order-1">
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#B7D8CA] hover:border-[#8DBDAA] shadow-2xs card-hover-lift transition-all bg-[#0D2420]">
                  <picture className="w-full h-auto">
                    <source
                      media="(min-width: 1024px)"
                      type="image/avif"
                      srcSet="/images/janta-hospital-exterior.avif"
                    />
                    <source
                      media="(min-width: 1024px)"
                      type="image/webp"
                      srcSet="/images/janta-hospital-exterior.webp"
                    />
                    <source
                      media="(max-width: 1023px)"
                      type="image/avif"
                      srcSet="/images/janta-hospital-exterior-mobile-sm.avif 480w, /images/janta-hospital-exterior-mobile.avif 800w"
                      sizes="(max-width: 640px) calc(100vw - 32px), 800px"
                    />
                    <source
                      media="(max-width: 1023px)"
                      type="image/webp"
                      srcSet="/images/janta-hospital-exterior-mobile-sm.webp 480w, /images/janta-hospital-exterior-mobile.webp 800w"
                      sizes="(max-width: 640px) calc(100vw - 32px), 800px"
                    />
                    <img
                      src="/images/janta-hospital-exterior-mobile.webp"
                      alt="Daytime exterior photograph of Janta Hospital building in Powergunj, Lohardaga"
                      width={800}
                      height={533}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-auto object-cover"
                    />
                  </picture>
                  <div className="p-4 sm:p-5 bg-white border-t border-[#D2E6DC]">
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#0A5C4F] uppercase tracking-wider mb-1">
                      <Building2 className="w-4 h-4" aria-hidden="true" />
                      <span>Healthcare Facility in Powergunj, Lohardaga</span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#2E4540] font-normal leading-relaxed">
                      Located near Head Post Office, Powergunj — Featuring Ground Floor Reception, 24/7 on-site pharmacy, and round-the-clock emergency care.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Editorial Mission Narrative */}
              <ScrollReveal direction="card" delay={100} className="lg:col-span-6 space-y-4 sm:space-y-6 order-1 lg:order-2">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#0A5C4F]">
                    OUR CLINICAL MISSION
                  </span>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#122421] tracking-tight mt-1 leading-snug py-0.5">
                    <span>Trusted Healthcare for Every </span>
                    <span className="font-serif italic font-normal text-[#0A5C4F]">
                      Family in Lohardaga.
                    </span>
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-[#2E4540] font-normal leading-relaxed">
                  Located near the Head Post Office in Powergunj, Janta Hospital serves as a dependable healthcare institution for the people of Lohardaga and neighbouring rural communities. Under the administrative direction of{" "}
                  <Link
                    href="/leadership/jiyaul-ansari"
                    className="font-medium text-[#0A5C4F] hover:underline"
                  >
                    Hospital Director Jiyaul Ansari
                  </Link>
                  {" "}and clinical guidance of Consulting Physician Dr. Parwej Alam, the hospital is committed to providing accessible outpatient clinical care, prompt trauma stabilization, and round-the-clock emergency support.
                </p>

                <p className="text-sm sm:text-base text-[#2E4540] font-normal leading-relaxed">
                  Whether arriving for an urgent medical emergency in the middle of the night, seeking daily OPD consultations for fevers and chronic conditions, or filling prescriptions at our on-site pharmacy, every patient is treated with dignity, clinical transparency, and honest care — लोहरदगा में हर मरीज़ को सही सलाह, प्रामाणिक दवा और 24 घंटे आपातकालीन सहायता मिलती है।
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
                        Immediate primary stabilization by on-duty resident doctors. (24 घंटे ड्यूटी डॉक्टर की उपस्थिति)
                      </span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#F4FAF7] border border-[#B7D8CA] hover:border-[#8DBDAA] flex items-start gap-2.5 shadow-2xs">
                    <HeartPulse className="w-4 h-4 text-[#0A5C4F] shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <span className="text-xs sm:text-sm font-semibold text-[#122421] block">
                        Compassionate Guidance
                      </span>
                      <span className="text-xs text-[#2E4540] font-normal leading-snug block">
                        Honest diagnosis, genuine medicines, and Ranchi referral support — ईमानदार सलाह व रेफरल मार्गदर्शन
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
                HOSPITAL INFRASTRUCTURE
              </span>
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#122421] tracking-tight mt-1 leading-snug py-0.5">
                <span>Key Facilities &amp; </span>
                <span className="font-serif italic font-normal text-[#0A5C4F]">
                  Hospital Spaces.
                </span>
              </h2>
              <p className="text-xs sm:text-sm text-[#2E4540] mt-2 leading-relaxed font-normal">
                Thoughtfully organized facilities designed for patient comfort, accessibility, and clinical efficiency: मरीज़ों और परिजनों की सुविधा के लिए अस्पताल की व्यवस्था
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
                        Reception &amp; Triage Entryway
                      </h3>
                      <p className="text-xs sm:text-sm text-[#2E4540] leading-relaxed font-normal">
                        Immediate assistance upon entering the ground floor. Patients receive OPD tokens, consultation slips, and direct guidance to on-duty physicians — ग्राउंड फ्लोर रिसेप्शन से ओपीडी पर्ची और टोकन प्राप्त करें।
                      </p>
                    </div>
                  </div>
                  <div className="px-5 pb-5">
                    <span className="text-xs text-[#0A5C4F] font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Accessible Ground Floor Entrance</span>
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
                        24/7 On-Site Pharmacy
                      </h3>
                      <p className="text-xs sm:text-sm text-[#2E4540] leading-relaxed font-normal">
                        Located conveniently in the front veranda. Stocks genuine prescription drugs, emergency injections, and sterile surgical bandages round the clock — अस्पताल परिसर में 24 घंटे दवा काउंटर उपलब्ध।
                      </p>
                    </div>
                  </div>
                  <div className="px-5 pb-5">
                    <span className="text-xs text-[#0A5C4F] font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Round-the-Clock Medicine Availability</span>
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
                        Consultation Chambers &amp; Care Ward
                      </h3>
                      <p className="text-xs sm:text-sm text-[#2E4540] leading-relaxed font-normal">
                        Clean consulting chambers, sterile dressing rooms, and an observation ward for patients requiring day-care IV fluids and stabilization — परामर्श कक्ष, ड्रेसिंग रूम और शांत वातावरण में उपचार।
                      </p>
                    </div>
                  </div>
                  <div className="px-5 pb-5">
                    <span className="text-xs text-[#0A5C4F] font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Clean &amp; Maintained Environment</span>
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
                  HOSPITAL DETAILS
                </span>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#122421] tracking-tight mt-1 leading-snug py-0.5">
                  <span>Essential Hospital </span>
                  <span className="font-serif italic font-normal text-[#0A5C4F]">
                    Information.
                  </span>
                </h2>
                <p className="text-xs sm:text-sm text-[#2E4540] font-normal mt-2">
                  Verified institutional details and key contact numbers for patients and visitors — प्रमाणित जानकारी व संपर्क सूत्र
                </p>
              </ScrollReveal>

              <ScrollReveal direction="card" delay={60}>
                <div className="rounded-2xl border border-[#B7D8CA] overflow-hidden shadow-2xs divide-y divide-[#EBF2EE]">
                  <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-[#FCFDFD]">
                    <span className="text-xs font-medium uppercase text-[#3B524E] tracking-wider">
                      Hospital Name
                    </span>
                    <span className="text-sm font-semibold text-[#122421]">
                      {hospitalConfig.name.value} / जनता हॉस्पिटल
                    </span>
                  </div>

                  <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-white">
                    <span className="text-xs font-medium uppercase text-[#3B524E] tracking-wider">
                      Hospital Director
                    </span>
                    <span className="text-xs sm:text-sm text-[#122421] font-normal">
                      <Link
                        href="/leadership/jiyaul-ansari"
                        className="font-semibold text-[#0A5C4F] hover:underline"
                      >
                        Jiyaul Ansari
                      </Link>{" "}
                      (Executive Administration)
                    </span>
                  </div>

                  <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-[#FCFDFD]">
                    <span className="text-xs font-medium uppercase text-[#3B524E] tracking-wider">
                      Consulting Physician
                    </span>
                    <span className="text-xs sm:text-sm text-[#122421] font-normal">
                      <Link
                        href="/doctors/dr-parwej-alam"
                        className="font-semibold text-[#0A5C4F] hover:underline"
                      >
                        Dr. Parwej Alam
                      </Link>{" "}
                      (Clinical Outpatient Care)
                    </span>
                  </div>

                  <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-white">
                    <span className="text-xs font-medium uppercase text-[#3B524E] tracking-wider">
                      Official Address
                    </span>
                    <span className="text-xs sm:text-sm text-[#122421] font-normal text-left sm:text-right">
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
                        Active 24/7 • On-Duty Resident Doctors (24 घंटे उपलब्ध)
                      </span>
                      <a
                        href={emergencyPhoneHref}
                        className="text-xs sm:text-sm font-mono font-semibold text-[#A63F45] hover:underline inline-flex items-center gap-1.5"
                      >
                        <Phone className="w-3.5 h-3.5 text-[#A63F45]" aria-hidden="true" />
                        <span>Helpline: {emergencyPhone}</span>
                      </a>
                    </div>
                  </div>

                  <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-white">
                    <span className="text-xs sm:text-sm font-medium uppercase text-[#3B524E] tracking-wider">
                      OPD Consultation
                    </span>
                    <span className="text-xs sm:text-sm text-[#122421] font-normal">
                      Daily OPD Consultation • Confirm via Reception (+91 9341900715)
                    </span>
                  </div>

                  <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-[#FCFDFD]">
                    <div>
                      <span className="text-xs sm:text-sm font-medium uppercase text-[#3B524E] tracking-wider block">
                        Main Telephone
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
                      Ground floor front veranda • Open 24/7 (24 घंटे सातों दिन खुला)
                    </span>
                  </div>
                </div>

                {/* Link to Services, Doctors, and Leadership */}
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs sm:text-sm font-medium">
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1.5 text-[#0A5C4F] hover:underline"
                  >
                    <span>Explore Hospital Services</span>
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </Link>
                  <span className="hidden sm:inline text-gray-300">•</span>
                  <Link
                    href="/doctors"
                    className="inline-flex items-center gap-1.5 text-[#0A5C4F] hover:underline"
                  >
                    <span>Meet Our Clinical Team</span>
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </Link>
                  <span className="hidden sm:inline text-gray-300">•</span>
                  <Link
                    href="/leadership/jiyaul-ansari"
                    className="inline-flex items-center gap-1.5 text-[#0A5C4F] hover:underline"
                  >
                    <span>Hospital Director Profile</span>
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
