import { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  Building2,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Clock,
  MapPin,
  HeartHandshake,
  Users,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/shared/PageHero";
import { Container } from "@/components/shared/Container";
import { ContactCTA } from "@/components/shared/ContactCTA";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { BotanicalSideClimber } from "@/components/ui/BotanicalDecorations";
import { hospitalDirector } from "@/content/leadership";
import { LeadershipPortrait } from "@/components/leadership/LeadershipPortrait";
import { hospitalConfig, primaryPhone, primaryPhoneHref } from "@/content/hospital";
import { getCanonicalUrl, siteConfig } from "@/config/site";
import { generateBreadcrumbJsonLd, generateDirectorJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: {
    absolute: "Jiyaul Ansari - Hospital Director | Janta Hospital Lohardaga",
  },
  description:
    "Profile of Jiyaul Ansari, Hospital Director at Janta Hospital, Powergunj, Lohardaga. Administrative leadership, facility management, and general coordination.",
  alternates: {
    canonical: getCanonicalUrl("/leadership/jiyaul-ansari"),
  },
  openGraph: {
    title: "Jiyaul Ansari - Hospital Director | Janta Hospital Lohardaga",
    description:
      "Profile of Jiyaul Ansari, Hospital Director at Janta Hospital, Powergunj, Lohardaga. Administrative leadership, facility management, and general coordination.",
    url: getCanonicalUrl("/leadership/jiyaul-ansari"),
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
    images: [
      {
        url: siteConfig.defaultOgImage.url,
        width: siteConfig.defaultOgImage.width,
        height: siteConfig.defaultOgImage.height,
        alt: "Jiyaul Ansari - Hospital Director at Janta Hospital Lohardaga",
        type: siteConfig.defaultOgImage.type,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jiyaul Ansari - Hospital Director | Janta Hospital Lohardaga",
    description:
      "Profile of Jiyaul Ansari, Hospital Director at Janta Hospital, Powergunj, Lohardaga. Administrative leadership, facility management, and general coordination.",
    images: [siteConfig.defaultOgImage.url],
  },
};

export default function DirectorProfilePage() {
  const leader = hospitalDirector;
  const phoneHref = primaryPhoneHref;

  // Breadcrumbs link exclusively to verified existing routes (/about and current profile)
  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: "Leadership", path: "/about" },
    { name: leader.name, path: "/leadership/jiyaul-ansari" },
  ]);

  const directorJsonLd = generateDirectorJsonLd({
    slug: leader.slug,
    name: leader.name,
    designation: leader.designation,
    summary: leader.administrativeSummary,
  });

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(directorJsonLd) }}
      />
      <Header />

      <main className="flex-1">
        {/* Profile Hero with verified breadcrumb routing */}
        <PageHero
          breadcrumbs={[
            { label: "Leadership", href: "/about" },
            { label: leader.name },
          ]}
          eyebrow="HOSPITAL LEADERSHIP • ADMINISTRATION"
          title="Hospital Director"
          italicWord="Jiyaul Ansari"
          description={leader.administrativeSummary}
          action={
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={phoneHref}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0A5C4F] text-white font-semibold text-xs sm:text-sm hover:bg-[#07463C] transition-colors shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A5C4F]"
              >
                <Phone className="w-4 h-4 text-emerald-200" aria-hidden="true" />
                <span>Hospital Reception ({primaryPhone})</span>
              </a>
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-white text-[#0A5C4F] font-semibold text-xs sm:text-sm hover:bg-[#E8F5F1] transition-colors border border-[#B7D8CA] shadow-2xs"
              >
                <Building2 className="w-4 h-4 text-[#0A5C4F]" aria-hidden="true" />
                <span>About Janta Hospital</span>
              </Link>
            </div>
          }
        />

        {/* Section A: Institutional Notice */}
        <section className="py-4 sm:py-4.5 bg-[#F2F8F5] border-b border-[#D8ECE2]">
          <Container>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs sm:text-sm text-[#1F3330] font-normal">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#0A5C4F]" aria-hidden="true" />
                <span className="font-semibold text-[#122421]">
                  Hospital Administration &amp; Operations
                </span>
                <span className="hidden sm:inline text-gray-300">•</span>
                <span>Overseeing facility readiness, premises maintenance, and patient assistance.</span>
              </div>
              <span className="font-mono text-xs sm:text-sm text-[#0A5C4F] font-medium">
                Powergunj, Lohardaga
              </span>
            </div>
          </Container>
        </section>

        {/* Section B: Director Narrative & Administrative Overview */}
        <section className="relative py-10 sm:py-16 bg-white overflow-hidden">
          <BotanicalSideClimber side="right" className="opacity-20" />
          <Container className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* Left Column (7 cols): Introduction, Responsibilities & Pillars */}
              <div className="lg:col-span-7 space-y-8 sm:space-y-10">
                
                {/* 1. Introduction */}
                <ScrollReveal direction="card" delay={0}>
                  <div className="space-y-3.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-[#0A5C4F] text-white text-xs font-semibold uppercase tracking-wider shadow-2xs">
                        {leader.badge}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-[#E8F5F1] text-[#0A5C4F] text-xs font-medium border border-[#B7D8CA]">
                        {leader.designation}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-semibold text-[#122421] tracking-tight mt-1 leading-snug">
                      About {leader.name}
                    </h2>

                    <p className="text-sm sm:text-base text-[#2E4540] font-normal leading-relaxed">
                      {leader.introduction}
                    </p>

                    <div className="p-4 sm:p-5 rounded-2xl bg-[#F4FAF7] border border-[#B7D8CA] text-xs sm:text-sm text-[#1E3833] leading-relaxed">
                      <p className="font-semibold text-[#0A5C4F] mb-1.5 text-xs uppercase tracking-wider">
                        Administrative &amp; Facility Care Note
                      </p>
                      <p className="font-normal text-[#2E4540] leading-relaxed patient-note-text">
                        {leader.hindiSummary}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>

                {/* 2. Administrative Role Overview */}
                <ScrollReveal direction="card" delay={80}>
                  <div className="space-y-4">
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-widest text-[#0A5C4F]">
                        OPERATIONAL SCOPE
                      </span>
                      <h3 className="text-xl sm:text-2xl font-semibold text-[#122421] tracking-tight mt-1 leading-snug">
                        Administrative Responsibilities
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {leader.administrativeOverview.map((item, idx) => (
                        <div
                          key={idx}
                          className="p-4 rounded-2xl bg-[#FCFDFD] border border-[#D2E6DC] hover:border-[#96C7B4] shadow-2xs transition-all flex flex-col justify-between"
                        >
                          <div>
                            <div className="w-8 h-8 rounded-xl bg-[#E8F5F1] text-[#0A5C4F] flex items-center justify-center mb-3">
                              <CheckCircle2 className="w-4 h-4 text-[#0A5C4F]" aria-hidden="true" />
                            </div>
                            <h4 className="font-semibold text-sm sm:text-base text-[#122421] mb-1 leading-snug">
                              {item.title}
                            </h4>
                            <p className="text-xs sm:text-sm text-[#2E4540] leading-relaxed font-normal">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>

                {/* 3. Leadership Pillars */}
                <ScrollReveal direction="card" delay={120}>
                  <div className="space-y-4">
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-widest text-[#0A5C4F]">
                        INSTITUTIONAL VALUES
                      </span>
                      <h3 className="text-xl sm:text-2xl font-semibold text-[#122421] tracking-tight mt-1 leading-snug">
                        Core Administrative Pillars
                      </h3>
                    </div>

                    <div className="space-y-3">
                      {leader.keyPillars.map((pillar, idx) => (
                        <div
                          key={idx}
                          className="p-4 rounded-xl bg-white border border-[#D2E6DC] flex items-start gap-3.5"
                        >
                          <div className="w-8 h-8 rounded-lg bg-[#E8F5F1] text-[#0A5C4F] flex items-center justify-center shrink-0 mt-0.5">
                            {idx === 0 && <Clock className="w-4 h-4 text-[#0A5C4F]" />}
                            {idx === 1 && <HeartHandshake className="w-4 h-4 text-[#0A5C4F]" />}
                            {idx === 2 && <Users className="w-4 h-4 text-[#0A5C4F]" />}
                          </div>
                          <div>
                            <h4 className="font-semibold text-sm sm:text-base text-[#122421] leading-snug">
                              {pillar.title}
                            </h4>
                            <p className="text-xs sm:text-sm text-[#2E4540] leading-relaxed font-normal mt-0.5">
                              {pillar.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>

              </div>

              {/* Right Column (5 cols): Portrait, Office & Directory Links */}
              <div className="lg:col-span-5 space-y-6">
                
                {/* Director Portrait Area (4:5 Ratio) */}
                <ScrollReveal direction="card" delay={40}>
                  <div className="p-4 sm:p-5 rounded-3xl bg-linear-to-b from-white to-[#F7FCF9] border-2 border-[#96C7B4] shadow-xs space-y-4">
                    <div className="w-48 sm:w-56 md:w-60 mx-auto">
                      <LeadershipPortrait leader={leader} priority />
                    </div>
                    <div className="text-center pt-1">
                      <h3 className="text-xl font-semibold text-[#122421]">
                        {leader.name}
                      </h3>
                      <p className="text-xs sm:text-sm font-medium text-[#0A5C4F] mt-0.5">
                        {leader.designation}
                      </p>
                      <p className="text-xs text-[#526661] mt-1">
                        Janta Hospital • Powergunj, Lohardaga
                      </p>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Administrative Reception Desk */}
                <ScrollReveal direction="card" delay={80}>
                  <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#B7D8CA] shadow-2xs space-y-4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl bg-[#E8F5F1] text-[#0A5C4F] flex items-center justify-center shrink-0">
                        <Building2 className="w-5 h-5 text-[#0A5C4F]" aria-hidden="true" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm sm:text-base text-[#122421]">
                          Hospital Administration Office
                        </h4>
                        <p className="text-xs text-[#475B57]">
                          Ground Floor Reception &amp; Administrative Desk
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2.5 pt-2 border-t border-[#D2E6DC] text-xs sm:text-sm">
                      <div className="flex items-start gap-2 text-[#2E4540]">
                        <MapPin className="w-4 h-4 text-[#0A5C4F] shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{hospitalConfig.location.fullAddress}</span>
                      </div>
                      <div className="flex items-center gap-2 text-[#2E4540]">
                        <Clock className="w-4 h-4 text-[#0A5C4F] shrink-0" aria-hidden="true" />
                        <span>24/7 Administrative &amp; Reception Assistance</span>
                      </div>
                    </div>

                    <div className="pt-2">
                      <a
                        href={phoneHref}
                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#0A5C4F] text-white font-semibold text-xs sm:text-sm hover:bg-[#07463C] transition-colors shadow-2xs min-h-[40px]"
                      >
                        <Phone className="w-4 h-4 text-emerald-200" aria-hidden="true" />
                        <span>Administrative Enquiries ({primaryPhone})</span>
                      </a>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Related Directory Links */}
                <ScrollReveal direction="card" delay={120}>
                  <div className="p-5 sm:p-6 rounded-2xl bg-[#F8FAF9] border border-[#D2E6DC] space-y-3">
                    <h4 className="font-semibold text-xs uppercase tracking-wider text-[#0A5C4F]">
                      Hospital Directory
                    </h4>
                    <div className="space-y-2">
                      <Link
                        href="/about"
                        className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-[#D2E6DC] hover:border-[#0A5C4F] text-xs sm:text-sm font-medium text-[#122421] transition-all"
                      >
                        <span className="flex items-center gap-2">
                          <Building2 className="w-4 h-4 text-[#0A5C4F]" aria-hidden="true" />
                          <span>About Janta Hospital</span>
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#0A5C4F]" aria-hidden="true" />
                      </Link>

                      <Link
                        href="/doctors"
                        className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-[#D2E6DC] hover:border-[#0A5C4F] text-xs sm:text-sm font-medium text-[#122421] transition-all"
                      >
                        <span className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-[#0A5C4F]" aria-hidden="true" />
                          <span>Meet Our Clinical Doctors</span>
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#0A5C4F]" aria-hidden="true" />
                      </Link>

                      <Link
                        href="/services"
                        className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-[#D2E6DC] hover:border-[#0A5C4F] text-xs sm:text-sm font-medium text-[#122421] transition-all"
                      >
                        <span className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#0A5C4F]" aria-hidden="true" />
                          <span>Healthcare Services</span>
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#0A5C4F]" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>

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
