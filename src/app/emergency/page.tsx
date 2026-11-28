import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Clock,
  AlertCircle,
  CheckCircle2,
  MapPin,
  ShieldAlert,
  ShieldCheck,
  Stethoscope,
  Wind,
  Activity,
  Pill,
  Compass,
  ArrowRight,
  FileText,
  AlertTriangle,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/shared/Container";
import { PageHero } from "@/components/shared/PageHero";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { ContactCTA } from "@/components/shared/ContactCTA";
import { emergencyConfig } from "@/content/emergency";
import { hospitalConfig, primaryPhone, primaryPhoneHref } from "@/content/hospital";
import { getCanonicalUrl, getSiteUrl, siteConfig } from "@/config/site";
import { generateBreadcrumbJsonLd, generateEmergencyJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: {
    absolute:
      "24 Hour Emergency Hospital in Lohardaga | 24/7 Emergency Care | Janta Hospital",
  },
  description:
    "24/7 Emergency Medical Care in Powergunj, Lohardaga at Janta Hospital. Immediate primary stabilization, oxygen support, nebulization, wound dressing, duty doctor coverage and on-site pharmacy.",
  alternates: {
    canonical: getCanonicalUrl("/emergency"),
  },
  openGraph: {
    title:
      "24 Hour Emergency Hospital in Lohardaga | 24/7 Emergency Care | Janta Hospital",
    description:
      "24/7 Emergency Medical Care in Powergunj, Lohardaga at Janta Hospital. Duty doctor coverage, oxygen support, wound dressing, emergency injections and 24-hour medicine counter.",
    url: getCanonicalUrl("/emergency"),
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
    images: [
      {
        url: `${getSiteUrl()}/images/gallery-entrance.webp`,
        width: 1200,
        height: 800,
        alt: "24-Hour Emergency Care entrance at Janta Hospital Lohardaga",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "24 Hour Emergency Hospital in Lohardaga | 24/7 Emergency Care | Janta Hospital",
    description:
      "24/7 Emergency Medical Care in Powergunj, Lohardaga at Janta Hospital. Immediate primary care, duty doctor coverage, oxygen support and on-site pharmacy.",
    images: [`${getSiteUrl()}/images/gallery-entrance.webp`],
  },
};

export default function EmergencyPage() {
  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: "Emergency Care", path: "/emergency" },
  ]);

  const emergencyJsonLd = generateEmergencyJsonLd();

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(emergencyJsonLd) }}
      />
      <Header />

      <main className="flex-1">
        {/* Page Hero with Urgent Visual Accent */}
        <PageHero
          breadcrumbs={[{ label: "Emergency Care" }]}
          eyebrow="24/7 EMERGENCY RESPONSE • LOHARDAGA"
          title="24/7 Emergency Care"
          italicWord="Lohardaga"
          description="Round-the-clock emergency medical response in Powergunj, Lohardaga. On-duty resident doctors and nursing staff are ready 24/7 for immediate primary clinical care, oxygen support, and acute trauma stabilization — अचानक तबीयत बिगड़ने या चोट लगने पर सीधे अस्पताल आएँ।"
          action={
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={emergencyConfig.phoneHref}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#A63F45] text-white hover:bg-[#8E3339] font-bold text-sm sm:text-base shadow-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A63F45]"
              >
                <Phone className="w-5 h-5 text-white animate-call-ring" aria-hidden="true" />
                <span>Emergency Call ({emergencyConfig.phoneFormatted})</span>
              </a>

              <a
                href={emergencyConfig.nationalEmergencyHref}
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-full bg-white text-[#A63F45] border-2 border-[#ECCDD0] hover:bg-[#F9EDEE] font-semibold text-xs sm:text-sm transition-colors"
              >
                <ShieldAlert className="w-4 h-4 text-[#A63F45]" aria-hidden="true" />
                <span>Highway Trauma: Dial 112</span>
              </a>
            </div>
          }
        />

        {/* Section 1: Critical Immediate Notice & Guidance */}
        <section className="py-4 bg-[#F9EDEE] border-b border-[#ECCDD0] text-[#471E21]">
          <Container>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs sm:text-sm">
              <div className="flex items-center gap-2.5 font-semibold">
                <span className="w-3 h-3 rounded-full bg-[#A63F45] animate-ping shrink-0" />
                <span>
                  Emergency Helpline Active: <strong>{emergencyConfig.phoneFormatted}</strong> (24 घंटे इमरजेंसी चालू)
                </span>
              </div>
              <div className="flex items-center gap-3 font-medium text-[#A63F45]">
                <span>Ground Floor Ramp Access</span>
                <span>•</span>
                <span>24/7 Open</span>
              </div>
            </div>
          </Container>
        </section>

        {/* Section 2: What to Do in Life-Threatening Situation (2-Column Action Grid) */}
        <section className="py-10 sm:py-14 bg-white border-b border-[#E5EFEA]">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column (7 cols): Direct Action Guidance */}
              <ScrollReveal direction="card" delay={0} className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F9EDEE] text-[#A63F45] text-xs font-semibold uppercase tracking-wider border border-[#ECCDD0]">
                  <AlertTriangle className="w-3.5 h-3.5 text-[#A63F45]" aria-hidden="true" />
                  <span>Immediate Action Guide</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#122421] tracking-tight leading-tight">
                  What to Do in an Acute Emergency
                </h2>

                <p className="text-sm sm:text-base text-[#2E4540] leading-relaxed">
                  In acute medical situations involving severe chest pain, sudden breathlessness, collapse, head injury, uncontrolled bleeding, or road accident trauma: आपात स्थिति में इन चरणों का पालन करें
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                  <div className="p-4 rounded-2xl bg-[#FCFDFD] border border-[#B7D8CA] space-y-1">
                    <span className="text-xs font-bold text-[#0A5C4F] uppercase tracking-wider block">
                      Step 1: Come Directly to the Hospital
                    </span>
                    <p className="text-xs sm:text-sm text-[#475B57] leading-relaxed">
                      Bring the patient directly to Janta Hospital, Powergunj without needing prior appointment. Our ground-floor triage team takes over immediately — सीधे अस्पताल आएँ
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#FCFDFD] border border-[#B7D8CA] space-y-1">
                    <span className="text-xs font-bold text-[#0A5C4F] uppercase tracking-wider block">
                      Step 2: Notify En Route
                    </span>
                    <p className="text-xs sm:text-sm text-[#475B57] leading-relaxed">
                      If possible, call our Emergency Helpline at <strong>+91 9308348606</strong> while travelling so the medical team prepares the emergency bed in advance — रास्ते से सूचित करें
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#FCFDFD] border border-[#B7D8CA] space-y-1">
                    <span className="text-xs font-bold text-[#0A5C4F] uppercase tracking-wider block">
                      Step 3: Primary Vital Stabilization
                    </span>
                    <p className="text-xs sm:text-sm text-[#475B57] leading-relaxed">
                      Duty doctors promptly start medical oxygen, check vitals (BP, pulse, SpO2), and administer emergency fluids or analgesics — तुरंत प्राथमिक स्थिरीकरण
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#FCFDFD] border border-[#B7D8CA] space-y-1">
                    <span className="text-xs font-bold text-[#0A5C4F] uppercase tracking-wider block">
                      Step 4: Specialist Care or Referral
                    </span>
                    <p className="text-xs sm:text-sm text-[#475B57] leading-relaxed">
                      Visiting surgeons are contacted, or if advanced ICU/ventilator care is needed, seamless transfer guidance to Ranchi is coordinated — विशेषज्ञ या रेफरल सहायता
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Right Column (5 cols): Authentic Emergency Ramp Entrance Photo */}
              <ScrollReveal direction="card" delay={80} className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-md aspect-[4/3] rounded-3xl overflow-hidden border-2 border-[#ECCDD0] shadow-xs bg-[#0D2420]">
                  <Image
                    src="/images/gallery-entrance.webp"
                    alt="24-Hour Emergency entrance ramp at Janta Hospital Lohardaga"
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />
                  
                  <span className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-[#A63F45] text-white text-xs font-bold shadow-sm">
                    24/7 Emergency Ramp
                  </span>

                  <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-medium">
                    Janta Hospital, Main Road, near Head Post Office, Powergunj
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </Container>
        </section>

        {/* Section 3: Verified Emergency Capabilities (Truth in Advertising) */}
        <section className="py-10 sm:py-16 bg-[#FAFCFA] border-b border-[#E5EFEA]">
          <Container>
            <div className="max-w-3xl mb-8 sm:mb-12">
              <span className="px-3 py-1 rounded-full bg-[#E8F5F1] text-[#0A5C4F] text-xs font-semibold uppercase tracking-wider border border-[#B7D8CA] inline-block mb-2">
                VERIFIED EMERGENCY CAPABILITIES
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#122421] tracking-tight">
                Verified Emergency Medical Capabilities
              </h2>
              <p className="text-sm sm:text-base text-[#475B57] font-normal mt-2 leading-relaxed">
                Confirmed clinical services and immediate interventions available 24 hours a day at Janta Hospital: अस्पताल में उपलब्ध प्रमाणित आपातकालीन सेवाएँ
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {emergencyConfig.verifiedCapabilities.map((cap, idx) => (
                <ScrollReveal
                  key={idx}
                  direction="card"
                  delay={idx * 60}
                  className="h-full flex"
                >
                  <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#B7D8CA] hover:border-[#8DBDAA] shadow-2xs space-y-3 flex flex-col justify-between h-full card-hover-lift transition-all">
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between">
                        <span className="px-2.5 py-0.5 rounded-full bg-[#E8F5F1] text-[#0A5C4F] text-xs font-bold border border-[#B7D8CA]">
                          {cap.badge}
                        </span>
                        <CheckCircle2 className="w-4 h-4 text-[#0A5C4F]" aria-hidden="true" />
                      </div>
                      <h3 className="font-sans font-semibold text-base sm:text-lg text-[#122421]">
                        {cap.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#475B57] leading-relaxed font-normal">
                        {cap.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </Container>
        </section>

        {/* Section 4: Doctor Coverage Distinction */}
        <section className="py-10 sm:py-14 bg-white border-b border-[#E5EFEA]">
          <Container>
            <div className="p-6 sm:p-8 rounded-3xl bg-[#F0F8F5] border-2 border-[#B2DFD6] space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#E0F2F1] text-[#00695C] border border-[#80CBC4] flex items-center justify-center shrink-0">
                  <Stethoscope className="w-5 h-5 text-[#00695C]" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-[#122421] tracking-tight">
                    {emergencyConfig.doctorCoverageDistinction.heading}
                  </h3>
                  <span className="text-xs text-[#00695C] font-semibold uppercase tracking-wider block mt-0.5">
                    Transparent Clinical Guidelines
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm pt-2">
                <div className="p-4 rounded-2xl bg-white border border-[#B2DFDB] space-y-1.5 shadow-2xs">
                  <div className="flex items-center gap-2 text-[#00695C] font-bold">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#00695C]" />
                    <span>24/7 Resident Duty Doctors (Onsite)</span>
                  </div>
                  <p className="text-[#2E4540] leading-relaxed">
                    {emergencyConfig.doctorCoverageDistinction.residentCoverage}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-[#B2DFDB] space-y-1.5 shadow-2xs">
                  <div className="flex items-center gap-2 text-[#00695C] font-bold">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#00695C]" />
                    <span>Visiting Specialist Network (On-call)</span>
                  </div>
                  <p className="text-[#2E4540] leading-relaxed">
                    {emergencyConfig.doctorCoverageDistinction.specialistCoverage}
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Section 5: What to Bring & What NOT to delay */}
        <section className="py-10 sm:py-14 bg-[#FAFCFA] border-b border-[#E5EFEA]">
          <Container>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="text-center space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#A63F45]">
                  PATIENT PREPARATION
                </span>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#122421] tracking-tight">
                  What to Bring to the Emergency Department
                </h2>
              </div>

              {/* Crucial Warning Alert */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#F9EDEE] border-2 border-[#ECCDD0] text-[#471E21] flex items-start gap-3.5 text-xs sm:text-sm">
                <AlertCircle className="w-5 h-5 text-[#A63F45] shrink-0 mt-0.5" aria-hidden="true" />
                <div className="space-y-1">
                  <strong className="font-bold block text-sm sm:text-base text-[#A63F45]">
                    Crucial Patient Safety Instruction:
                  </strong>
                  <p className="leading-relaxed">
                    {emergencyConfig.whatToBringWarning}
                  </p>
                </div>
              </div>

              {/* Checklist */}
              <div className="grid grid-cols-1 gap-3">
                {emergencyConfig.whatToBring.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white border border-[#D2E6DC] flex items-start gap-3 text-xs sm:text-sm"
                  >
                    <FileText className="w-4 h-4 text-[#0A5C4F] shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <span className="font-semibold text-[#122421] block">
                        {item.item}
                      </span>
                      <p className="text-[#475B57] text-xs mt-0.5 leading-relaxed">
                        {item.note}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Section 6: Emergency FAQs */}
        <section className="py-10 sm:py-16 bg-white border-b border-[#E5EFEA]">
          <Container>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="text-center space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#0A5C4F]">
                  EMERGENCY FAQS
                </span>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#122421] tracking-tight">
                  Frequently Asked Questions (Emergency Care)
                </h2>
              </div>

              <div className="space-y-3">
                {emergencyConfig.faqs.map((faq, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-[#FCFDFD] border border-[#D2E6DC] space-y-2 shadow-2xs"
                  >
                    <h3 className="font-semibold text-sm sm:text-base text-[#122421]">
                      {faq.question}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#2E4540] leading-relaxed font-normal">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Section 7: Associated Services Links */}
        <section className="py-10 bg-[#F4FAF7]">
          <Container>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#0A5C4F]">
                  RELATED CARE
                </span>
                <h3 className="text-xl font-semibold text-[#122421]">
                  Related Hospital Departments
                </h3>
              </div>
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#0A5C4F] hover:underline"
              >
                <span>View All Services</span>
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              <Link
                href="/services/general-medicine"
                className="p-4 rounded-2xl bg-white border border-[#D2E6DC] hover:border-[#8DBDAA] shadow-2xs hover:shadow-xs transition-all space-y-1"
              >
                <span className="text-[11px] font-semibold text-[#0A5C4F] uppercase tracking-wider block">
                  Daily OPD
                </span>
                <span className="font-semibold text-sm text-[#122421] block">
                  General Medicine
                </span>
                <span className="text-xs text-[#475B57] block">
                  Fevers &amp; General Medicine →
                </span>
              </Link>

              <Link
                href="/services/pharmacy"
                className="p-4 rounded-2xl bg-white border border-[#D2E6DC] hover:border-[#8DBDAA] shadow-2xs hover:shadow-xs transition-all space-y-1"
              >
                <span className="text-[11px] font-semibold text-[#0A5C4F] uppercase tracking-wider block">
                  24/7 Open
                </span>
                <span className="font-semibold text-sm text-[#122421] block">
                  Hospital Pharmacy
                </span>
                <span className="text-xs text-[#475B57] block">
                  24-Hour Medicine Counter →
                </span>
              </Link>

              <Link
                href="/services/orthopaedic-surgery"
                className="p-4 rounded-2xl bg-white border border-[#D2E6DC] hover:border-[#8DBDAA] shadow-2xs hover:shadow-xs transition-all space-y-1"
              >
                <span className="text-[11px] font-semibold text-[#0A5C4F] uppercase tracking-wider block">
                  Bone &amp; Joint
                </span>
                <span className="font-semibold text-sm text-[#122421] block">
                  Orthopaedic Surgery
                </span>
                <span className="text-xs text-[#475B57] block">
                  Fracture &amp; Splinting Support →
                </span>
              </Link>

              <Link
                href="/services/neurosurgery"
                className="p-4 rounded-2xl bg-white border border-[#D2E6DC] hover:border-[#8DBDAA] shadow-2xs hover:shadow-xs transition-all space-y-1"
              >
                <span className="text-[11px] font-semibold text-[#0A5C4F] uppercase tracking-wider block">
                  Head Injury
                </span>
                <span className="font-semibold text-sm text-[#122421] block">
                  Neurosurgery
                </span>
                <span className="text-xs text-[#475B57] block">
                  Head Injury Stabilization →
                </span>
              </Link>
            </div>
          </Container>
        </section>

        {/* Global Contact CTA */}
        <ContactCTA />
      </main>

      <Footer />
    </div>
  );
}
