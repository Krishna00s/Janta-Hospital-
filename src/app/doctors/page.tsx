import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, Clock, ShieldCheck, AlertCircle, CheckCircle2, Stethoscope, ArrowRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/shared/PageHero";
import { ContactCTA } from "@/components/shared/ContactCTA";
import { Container } from "@/components/shared/Container";
import { BotanicalSideClimber } from "@/components/ui/BotanicalDecorations";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { departmentGroups, doctorsData, allDoctors } from "@/content/doctors";
import { hospitalDirector } from "@/content/leadership";
import { LeadershipPortrait } from "@/components/leadership/LeadershipPortrait";
import { hospitalConfig, primaryPhone, primaryPhoneHref } from "@/content/hospital";
import { DoctorCard } from "@/components/doctors/DoctorCard";
import { getCanonicalUrl, siteConfig } from "@/config/site";
import { generateBreadcrumbJsonLd, generateDoctorsJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: {
    absolute: "Doctors in Lohardaga | General Physicians & Specialists | Janta Hospital",
  },
  description:
    "Consult experienced doctors in Lohardaga at Janta Hospital. Resident general physicians available for daily OPD with on-call specialist doctors in general surgery, orthopaedics, and neurosurgery.",
  alternates: {
    canonical: getCanonicalUrl("/doctors"),
  },
  openGraph: {
    title: "Doctors in Lohardaga | General Physicians & Specialists | Janta Hospital",
    description:
      "Consult experienced doctors in Lohardaga at Janta Hospital. Resident general physicians available for daily OPD with on-call specialist doctors in general surgery, orthopaedics, and neurosurgery.",
    url: getCanonicalUrl("/doctors"),
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
    title: "Doctors in Lohardaga | General Physicians & Specialists | Janta Hospital",
    description:
      "Consult experienced doctors in Lohardaga at Janta Hospital. Resident general physicians available for daily OPD with on-call specialist doctors in general surgery, orthopaedics, and neurosurgery.",
    images: [siteConfig.defaultOgImage.url],
  },
};

export default function DoctorsPage() {
  const phoneHref = primaryPhoneHref;
  const breadcrumbJsonLd = generateBreadcrumbJsonLd([{ name: "Doctors", path: "/doctors" }]);
  const doctorsJsonLd = generateDoctorsJsonLd();

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(doctorsJsonLd) }}
      />
      <Header />

      <main className="flex-1">
        {/* Page Hero */}
        <PageHero
          breadcrumbs={[{ label: "Doctors" }]}
          eyebrow="OUR DOCTORS &amp; SPECIALISTS"
          title="Our Clinical"
          italicWord="Doctors"
          description="Experienced resident physicians providing 24-hour hospital medical coverage, supported by visiting specialist surgeons in Lohardaga. (Powergunj, Lohardaga में 24 घंटे फिजिशियन कवरेज और ऑन-कॉल विशेषज्ञ टीम।)"
          action={
            <a
              href={primaryPhoneHref}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0A5C4F] text-white font-semibold text-xs sm:text-sm hover:bg-[#07463C] transition-colors shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A5C4F]"
            >
              <Phone className="w-4 h-4 text-white" aria-hidden="true" />
              <span>Check Doctor Availability ({primaryPhone})</span>
            </a>
          }
        />

        {/* Section A: Institutional Availability Anchor & Official Signboard */}
        <section className="relative py-8 sm:py-12 bg-white overflow-hidden border-b border-[#E5EFEA]">
          <BotanicalSideClimber side="left" className="opacity-25 sm:opacity-30" />
          
          <Container className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column (5 cols on lg): Authentic Signboard */}
              <ScrollReveal direction="card" delay={0} className="lg:col-span-5 flex flex-col gap-4">
                <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden border border-[#B7D8CA] hover:border-[#8DBDAA] bg-[#0D2420] shadow-2xs card-hover-lift transition-all">
                  <Image
                    src="/images/gallery-signboard.webp"
                    alt="Hospital entrance signboard displaying doctor timings and consultation schedule at Janta Hospital Powergunj"
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                    priority
                  />
                </div>

                <div className="p-4 rounded-2xl bg-[#F4FAF7] border border-[#B7D8CA] flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#E8F5F1] text-[#0A5C4F] border border-[#B7D8CA] flex items-center justify-center shrink-0">
                    <Stethoscope className="w-6 h-6 text-[#0A5C4F]" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="font-sans font-semibold text-sm sm:text-base text-[#122421] block">
                      7 Clinical Team Members
                    </span>
                    <p className="text-xs sm:text-sm text-[#2E4540] mt-0.5 leading-snug font-normal">
                      2 resident general physicians (24/7 coverage) + 5 on-call specialists (surgery, neuro, anaesthesia). (24 घंटे फिजिशियन + ऑन-कॉल विशेषज्ञ टीम)
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Right Column (7 cols on lg): Doctor Availability Protocol */}
              <ScrollReveal direction="card" delay={100} className="lg:col-span-7 space-y-4">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#0A5C4F]">
                    DOCTOR AVAILABILITY
                  </span>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#122421] tracking-tight mt-1 leading-snug py-0.5">
                    <span>Doctor Availability &amp; </span>
                    <span className="font-serif italic font-normal text-[#0A5C4F]">
                      Consultation Schedule.
                    </span>
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-[#2E4540] font-normal leading-relaxed">
                  Janta Hospital Lohardaga provides continuous 24-hour medical coverage through resident duty doctors, alongside daily morning and afternoon outpatient (OPD) consultation clinics and an on-call specialist network — अस्पताल में 24 घंटे ड्यूटी डॉक्टर और रोज़ाना OPD परामर्श उपलब्ध रहता है।
                </p>

                <div className="space-y-3 pt-1">
                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F8FAF9] border border-[#D2E6DC]">
                    <CheckCircle2 className="w-4 h-4 text-[#0A5C4F] shrink-0 mt-0.5" aria-hidden="true" />
                    <div className="text-xs sm:text-sm leading-relaxed text-[#2E4540] font-normal">
                      <strong className="text-[#122421] font-semibold block mb-0.5">24/7 Hospital Physician Coverage</strong>
                      Resident physicians and duty medical officers are on-site around the clock for immediate evaluation and acute patient triage. (24 घंटे ड्यूटी डॉक्टर की उपस्थिति)
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F8FAF9] border border-[#D2E6DC]">
                    <CheckCircle2 className="w-4 h-4 text-[#0A5C4F] shrink-0 mt-0.5" aria-hidden="true" />
                    <div className="text-xs sm:text-sm leading-relaxed text-[#2E4540] font-normal">
                      <strong className="text-[#122421] font-semibold block mb-0.5">On-Call Specialist Network</strong>
                      Consultants in General Surgery, Neurosurgery, and Anaesthesia attend upon clinical necessity and advance appointment scheduling via reception — ऑन-कॉल विशेषज्ञ व्यवस्था
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F8FAF9] border border-[#D2E6DC]">
                    <CheckCircle2 className="w-4 h-4 text-[#0A5C4F] shrink-0 mt-0.5" aria-hidden="true" />
                    <div className="text-xs sm:text-sm leading-relaxed text-[#2E4540] font-normal">
                      <strong className="text-[#122421] font-semibold block mb-0.5">OPD Registration &amp; Tokens</strong>
                      Daily OPD consultation tokens are issued at the Ground Floor reception desk. Calling ahead to confirm today&apos;s queue and availability is welcomed — रिसेप्शन से टोकन प्राप्त करें
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={phoneHref}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0A5C4F] text-white font-semibold text-xs sm:text-sm hover:bg-[#07463C] transition-colors shadow-xs"
                  >
                    <Phone className="w-4 h-4 text-emerald-200" aria-hidden="true" />
                    <span>Inquire Today&apos;s Doctor Availability ({primaryPhone})</span>
                  </a>
                </div>
              </ScrollReveal>

            </div>
          </Container>
        </section>

        {/* Section B: Medical Team by Departments */}
        <section className="py-12 sm:py-16 bg-[#FAFCFB]">
          <Container>
            <div className="space-y-12 sm:space-y-16">
              
              {/* ============================================================ */}
              {/* DEDICATED HOSPITAL LEADERSHIP SECTION                        */}
              {/* ============================================================ */}
              <div id="leadership" className="scroll-mt-24 pb-4 border-b border-[#D8ECE2]">
                <ScrollReveal direction="heading" className="max-w-3xl mb-6 sm:mb-8">
                  <div className="flex flex-wrap items-center gap-2.5 mb-2">
                    <span className="px-3 py-1 rounded-full bg-[#E8F5F1] text-[#0A5C4F] text-xs font-semibold uppercase tracking-wider border border-[#B7D8CA]">
                      Hospital Leadership
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white text-[#2E4540] text-xs font-medium border border-[#D2E6DC]">
                      Administrative Direction
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-semibold text-[#122421] tracking-tight leading-snug">
                    <span>Executive &amp; Administrative </span>
                    <span className="font-serif italic font-normal text-[#0A5C4F]">
                      Direction
                    </span>
                  </h3>
                  <p className="text-xs sm:text-sm text-[#2E4540] font-normal leading-relaxed mt-1">
                    Executive hospital leadership overseeing facility management, non-clinical administration, and patient reception coordination at Janta Hospital. (अस्पताल प्रशासन और कार्यकारी नेतृत्व)
                  </p>
                </ScrollReveal>

                {/* Director Premium Editorial Card */}
                <ScrollReveal direction="card" delay={0}>
                  <div className="w-full max-w-3xl rounded-3xl p-5 sm:p-7 bg-linear-to-b from-white to-[#F7FCF9] border-2 border-[#96C7B4] shadow-xs flex flex-col sm:flex-row gap-6 items-center justify-between card-hover-lift">
                    {/* Portrait Area in 4:5 ratio */}
                    <div className="w-36 sm:w-44 md:w-48 shrink-0 mx-auto sm:mx-0">
                      <LeadershipPortrait leader={hospitalDirector} priority />
                    </div>

                    {/* Details */}
                    <div className="flex-1 flex flex-col justify-between space-y-3 w-full">
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className="px-2.5 py-0.5 rounded-full bg-[#0A5C4F] text-white text-[11px] font-semibold tracking-wide uppercase">
                            {hospitalDirector.badge}
                          </span>
                          <span className="px-2.5 py-0.5 rounded-full bg-[#E8F5F1] text-[#0A5C4F] border border-[#B7D8CA] text-[11px] font-medium">
                            Administrative Governance
                          </span>
                        </div>

                        <h4 className="text-xl sm:text-2xl font-semibold text-[#122421] leading-snug">
                          <Link href={`/leadership/${hospitalDirector.slug}`} className="hover:underline">
                            {hospitalDirector.name}
                          </Link>
                        </h4>
                        <p className="text-xs sm:text-sm font-medium text-[#0A5C4F] mt-0.5">
                          {hospitalDirector.designation}
                        </p>

                        <p className="text-xs sm:text-sm text-[#2E4540] font-normal leading-relaxed mt-2.5">
                          {hospitalDirector.administrativeSummary}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-[#D2E6DC]/70 flex flex-wrap items-center justify-between gap-3">
                        <Link
                          href={`/leadership/${hospitalDirector.slug}`}
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#0A5C4F] text-white text-xs sm:text-sm font-semibold hover:bg-[#07463C] transition-colors shadow-2xs min-h-[38px]"
                        >
                          <span>View Profile</span>
                          <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                        </Link>
                        <span className="text-xs text-[#475B57] font-medium">
                          Executive Administration Office
                        </span>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              {/* Division 1: General Physicians (Primary Focus, 24/7 Coverage) */}
              {(() => {
                const group = departmentGroups[0];
                return (
                  <div key={group.id} id={group.id} className="scroll-mt-24">
                    <ScrollReveal direction="heading" className="max-w-3xl mb-6 sm:mb-8">
                      <div className="flex flex-wrap items-center gap-2.5 mb-2">
                        <span className="px-3 py-1 rounded-full bg-[#E8F5F1] text-[#0A5C4F] text-xs font-semibold uppercase tracking-wider border border-[#B7D8CA]">
                          {group.category}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-white text-[#2E4540] text-xs font-medium border border-[#D2E6DC]">
                          {group.badge}
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-semibold text-[#122421] tracking-tight leading-snug">
                        {group.titleHindi}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#2E4540] font-normal leading-relaxed mt-1">
                        {group.description}
                      </p>

                      <div className="mt-2.5 p-3 rounded-xl bg-white border border-[#D2E6DC] text-xs text-[#475B57] leading-relaxed flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 text-[#0A5C4F] shrink-0" aria-hidden="true" />
                        <span>{group.disclaimer}</span>
                      </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                      {group.doctors.map((doc, docIdx) => (
                        <ScrollReveal
                          key={doc.id}
                          direction="card"
                          delay={docIdx * 80}
                          className="h-full flex"
                        >
                          <DoctorCard
                            doctor={doc}
                            receptionPhone={primaryPhone}
                            featured={doc.displayOrder === 1}
                          />
                        </ScrollReveal>
                      ))}
                    </div>
                  </div>
                );
              })()}

              {/* Single Concise Specialist Availability Notice */}
              <ScrollReveal direction="card" delay={0}>
                <div className="p-4 sm:p-5 rounded-2xl bg-[#EAF5F1] border border-[#B2DFD6] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm text-[#1B4D44]">
                  <div className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-[#00796B] shrink-0" aria-hidden="true" />
                    <span className="font-medium">
                      Specialists are available on call. Please contact the hospital to confirm availability before visiting.
                    </span>
                  </div>
                  <a
                    href={primaryPhoneHref}
                    className="shrink-0 font-semibold text-[#00796B] hover:underline inline-flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Call {primaryPhone}</span>
                  </a>
                </div>
              </ScrollReveal>

              {/* Division 2: General Surgery */}
              {(() => {
                const group = departmentGroups[1];
                return (
                  <div key={group.id} id={group.id} className="scroll-mt-24 rounded-3xl p-5 sm:p-7 lg:p-8 bg-[#F0F8F5] border-2 border-[#B2DFD6] shadow-2xs">
                    <ScrollReveal direction="heading" className="max-w-4xl mb-6">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="px-3 py-1 rounded-full bg-[#E0F2F1] text-[#00695C] text-xs font-semibold uppercase tracking-wider border border-[#80CBC4]">
                          ON-CALL SPECIALISTS
                        </span>
                        <span className="px-3 py-1 rounded-full bg-white text-[#2A6B62] text-xs font-medium border border-[#B2DFDB]">
                          3 Consultant Surgeons • On-call
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-semibold text-[#122421] tracking-tight leading-snug">
                        {group.titleHindi}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#2E4540] font-normal leading-relaxed mt-1">
                        {group.description}
                      </p>

                      <div className="relative w-full h-32 sm:h-36 rounded-2xl overflow-hidden mt-4 mb-1 border border-[#B0DCD2] bg-[#E8F5F1]">
                        <Image
                          src="/images/services/service-general-surgery.webp"
                          alt="Surgical procedure and theater equipment for General Surgery"
                          fill
                          sizes="(min-width: 1024px) 70vw, 100vw"
                          className="object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                        <span className="absolute bottom-2 left-2.5 right-2.5 text-xs text-white/95 font-medium truncate drop-shadow-xs">
                          Surgical Theater &amp; Clinical Procedure Scope
                        </span>
                      </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                      {group.doctors.map((doc, docIdx) => (
                        <ScrollReveal
                          key={doc.id}
                          direction="card"
                          delay={docIdx * 80}
                          className="h-full flex"
                        >
                          <DoctorCard
                            doctor={doc}
                            receptionPhone={primaryPhone}
                          />
                        </ScrollReveal>
                      ))}
                    </div>
                  </div>
                );
              })()}

              {/* Division 3 & 4: Balanced Side-by-Side 2-Column Desktop Grid for Single-Specialist Categories */}
              {(() => {
                const neuroGroup = departmentGroups[2];
                const anaesthesiaGroup = departmentGroups[3];
                return (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
                    
                    {/* Neurosurgery Column */}
                    <div id={neuroGroup.id} className="scroll-mt-24 rounded-3xl p-5 sm:p-7 bg-[#F0F8F5] border-2 border-[#B2DFD6] shadow-2xs flex flex-col justify-between">
                      <div>
                        <ScrollReveal direction="heading" className="mb-5">
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <span className="px-3 py-1 rounded-full bg-[#E0F2F1] text-[#00695C] text-xs font-semibold uppercase tracking-wider border border-[#80CBC4]">
                              {neuroGroup.category}
                            </span>
                            <span className="px-2.5 py-0.5 rounded-full bg-white text-[#2A6B62] text-[11px] font-medium border border-[#B2DFDB]">
                              {neuroGroup.badge}
                            </span>
                          </div>

                          <h3 className="text-xl sm:text-2xl font-semibold text-[#122421] tracking-tight leading-snug">
                            {neuroGroup.titleHindi}
                          </h3>
                          <p className="text-xs sm:text-sm text-[#2E4540] font-normal leading-relaxed mt-1">
                            {neuroGroup.description}
                          </p>

                          <div className="relative w-full h-28 sm:h-32 rounded-2xl overflow-hidden mt-3.5 mb-1 border border-[#B0DCD2] bg-[#E8F5F1]">
                            <Image
                              src="/images/services/service-neurosurgery.webp"
                              alt="Neurological clinical examination and brain/spine scan visual"
                              fill
                              sizes="(min-width: 1024px) 35vw, 100vw"
                              className="object-cover"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                            <span className="absolute bottom-2 left-2 right-2 text-xs text-white/95 font-medium truncate drop-shadow-xs">
                              Neurological Scan &amp; Brain/Spine Scope
                            </span>
                          </div>
                        </ScrollReveal>
                      </div>

                      <div className="flex-1 flex flex-col pt-1">
                        {neuroGroup.doctors.map((doc, docIdx) => (
                          <ScrollReveal
                            key={doc.id}
                            direction="card"
                            delay={docIdx * 80}
                            className="h-full flex"
                          >
                            <DoctorCard
                              doctor={doc}
                              receptionPhone={primaryPhone}
                            />
                          </ScrollReveal>
                        ))}
                      </div>
                    </div>

                    {/* Anaesthesia Column */}
                    <div id={anaesthesiaGroup.id} className="scroll-mt-24 rounded-3xl p-5 sm:p-7 bg-[#F0F8F5] border-2 border-[#B2DFD6] shadow-2xs flex flex-col justify-between">
                      <div>
                        <ScrollReveal direction="heading" className="mb-5">
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <span className="px-3 py-1 rounded-full bg-[#E0F2F1] text-[#00695C] text-xs font-semibold uppercase tracking-wider border border-[#80CBC4]">
                              {anaesthesiaGroup.category}
                            </span>
                            <span className="px-2.5 py-0.5 rounded-full bg-white text-[#2A6B62] text-[11px] font-medium border border-[#B2DFDB]">
                              {anaesthesiaGroup.badge}
                            </span>
                          </div>

                          <h3 className="text-xl sm:text-2xl font-semibold text-[#122421] tracking-tight leading-snug">
                            {anaesthesiaGroup.titleHindi}
                          </h3>
                          <p className="text-xs sm:text-sm text-[#2E4540] font-normal leading-relaxed mt-1">
                            {anaesthesiaGroup.description}
                          </p>

                          <div className="relative w-full h-28 sm:h-32 rounded-2xl overflow-hidden mt-3.5 mb-1 border border-[#B0DCD2] bg-[#E8F5F1]">
                            <Image
                              src="/images/services/service-anaesthesia.webp"
                              alt="Anaesthesia vital signs and patient monitoring visual"
                              fill
                              sizes="(min-width: 1024px) 35vw, 100vw"
                              className="object-cover"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                            <span className="absolute bottom-2 left-2 right-2 text-xs text-white/95 font-medium truncate drop-shadow-xs">
                              Pre-Op Vitals &amp; Safe Anaesthesia Management
                            </span>
                          </div>
                        </ScrollReveal>
                      </div>

                      <div className="flex-1 flex flex-col pt-1">
                        {anaesthesiaGroup.doctors.map((doc, docIdx) => (
                          <ScrollReveal
                            key={doc.id}
                            direction="card"
                            delay={docIdx * 80}
                            className="h-full flex"
                          >
                            <DoctorCard
                              doctor={doc}
                              receptionPhone={primaryPhone}
                            />
                          </ScrollReveal>
                        ))}
                      </div>
                    </div>

                  </div>
                );
              })()}

            </div>
          </Container>
        </section>

        {/* Section C: OPD Timetable & Token Guide */}
        <section className="py-10 sm:py-16 bg-white border-t border-[#E5EFEA]">
          <Container>
            <div className="max-w-3xl mx-auto">
              <ScrollReveal direction="heading" className="text-center mb-8">
                <span className="text-xs font-medium uppercase tracking-widest text-[#0A5C4F]">
                  OPD TIMINGS &amp; TOKEN
                </span>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#122421] tracking-tight mt-1 leading-tight">
                  <span>OPD Consultation Schedule &amp; </span>
                  <span className="font-serif italic font-normal text-[#0A5C4F]">
                    Timings.
                  </span>
                </h2>
                <p className="text-xs sm:text-sm text-[#2E4540] font-normal mt-2">
                  Daily outpatient consultation guidelines and registration procedure for patients — दैनिक OPD परामर्श व टोकन व्यवस्था
                </p>
              </ScrollReveal>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
                
                {/* Morning OPD Slot */}
                <ScrollReveal direction="card" delay={0} className="h-full">
                  <div className="p-5 bg-white rounded-2xl border border-[#B7D8CA] hover:border-[#8DBDAA] shadow-2xs space-y-2 h-full card-hover-lift transition-all">
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#0A5C4F] uppercase tracking-wider">
                      <Clock className="w-4 h-4" aria-hidden="true" />
                      <span>Daily OPD Registration</span>
                    </div>
                    <h3 className="text-lg font-semibold text-[#122421]">
                      Daily General OPD
                    </h3>
                    <p className="text-sm text-[#2E4540] leading-relaxed font-normal">
                      Routine consultation for acute fevers, respiratory conditions, blood pressure, and blood sugar checks. Consultation slips and tokens are available at the Ground Floor reception desk — सामान्य बीमारियों की जाँच व फॉलो-अप
                    </p>
                  </div>
                </ScrollReveal>

                {/* Evening OPD Slot */}
                <ScrollReveal direction="card" delay={80} className="h-full">
                  <div className="p-5 bg-white rounded-2xl border border-[#B7D8CA] hover:border-[#8DBDAA] shadow-2xs space-y-2 h-full card-hover-lift transition-all">
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#0A5C4F] uppercase tracking-wider">
                      <Clock className="w-4 h-4" aria-hidden="true" />
                      <span>Doctor Timing &amp; Availability</span>
                    </div>
                    <h3 className="text-lg font-semibold text-[#122421]">
                      Contact Reception for Timings
                    </h3>
                    <p className="text-sm text-[#2E4540] leading-relaxed font-normal">
                      To confirm today&apos;s OPD consultation timings and current doctor availability, contact our reception desk (+91 9341900715) before arriving — आज के OPD समय व डॉक्टर की उपस्थिति के लिए कॉल करें
                    </p>
                  </div>
                </ScrollReveal>

              </div>

              {/* Specialist Call Notice */}
              <ScrollReveal direction="card" delay={120}>
                <div className="p-4 sm:p-5 bg-[#E8F5F1] rounded-2xl border border-[#A9DCCB] text-[#0A5C4F] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm font-normal">
                  <div className="flex items-center gap-2.5">
                    <AlertCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                    <span>
                      Visiting specialists (General Surgery, Neurosurgery, Anaesthesia) visit on an on-call basis. Please contact Reception (+91 9341900715) to confirm their visiting schedule.
                    </span>
                  </div>
                  <a
                    href={primaryPhoneHref}
                    className="font-semibold underline shrink-0 hover:text-[#07463C] inline-flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Call {primaryPhone}</span>
                  </a>
                </div>

                <div className="mt-6 flex justify-center">
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#0A5C4F] font-semibold text-xs sm:text-sm hover:bg-[#E8F5F1] transition-all border border-[#A9DCCB] shadow-2xs"
                  >
                    <span>View All Services</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
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
