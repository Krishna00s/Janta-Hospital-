"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Clock,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  MapPin,
  MessageSquare,
  ArrowRight,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";
import { ServiceDetail } from "@/content/servicePages";
import { allDoctors } from "@/content/doctors";
import { DoctorCard } from "@/components/doctors/DoctorCard";
import { Container } from "@/components/shared/Container";
import { PageHero } from "@/components/shared/PageHero";
import { ContactCTA } from "@/components/shared/ContactCTA";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import {
  primaryPhone,
  primaryPhoneHref,
  emergencyPhone,
  emergencyPhoneHref,
  whatsappHref,
  hospitalConfig,
} from "@/content/hospital";
import { serviceDetailsList } from "@/content/servicePages";

interface ServiceDetailViewProps {
  service: ServiceDetail;
}

export function ServiceDetailView({ service }: ServiceDetailViewProps) {
  const isEmergencyAction = service.actionType === "emergency";
  const actionPhoneFormatted = isEmergencyAction ? emergencyPhone : primaryPhone;
  const actionPhoneHref = isEmergencyAction ? emergencyPhoneHref : primaryPhoneHref;

  // Filter relevant doctors
  const associatedDoctors = allDoctors.filter((doc) =>
    service.doctorIds.includes(doc.id)
  );

  // Other services for related services bar
  const relatedServices = serviceDetailsList.filter(
    (s) => s.slug !== service.slug
  );

  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Page Hero */}
      <PageHero
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: service.name },
        ]}
        eyebrow={service.category.toUpperCase()}
        title={service.name.split(" ")[0]}
        italicWord={service.name.split(" ").slice(1).join(" ")}
        description={service.shortDescription}
        action={
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={actionPhoneHref}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-xs sm:text-sm text-white shadow-xs transition-colors focus-visible:outline-none focus-visible:ring-2 ${
                isEmergencyAction
                  ? "bg-[#A63F45] hover:bg-[#8E3339] focus-visible:ring-[#A63F45]"
                  : "bg-[#0A5C4F] hover:bg-[#07463C] focus-visible:ring-[#0A5C4F]"
              }`}
            >
              <Phone
                className={`w-4 h-4 ${isEmergencyAction ? "animate-call-ring" : ""}`}
                aria-hidden="true"
              />
              <span>{service.actionLabel} ({actionPhoneFormatted})</span>
            </a>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white text-[#0A5C4F] font-semibold text-xs sm:text-sm border border-[#B7D8CA] hover:bg-[#EAF6F1] transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-[#0A5C4F]" aria-hidden="true" />
              <span>WhatsApp</span>
            </a>
          </div>
        }
      />

      {/* Availability Strip */}
      <section className="py-3 sm:py-3.5 bg-[#F4FAF7] border-b border-[#D2E6DC]">
        <Container>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs sm:text-sm text-[#1B4D44]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0A5C4F] animate-pulse shrink-0" />
              <span className="font-semibold">{service.availability}</span>
            </div>
            <div className="flex items-center gap-2 font-medium text-[#475B57]">
              <MapPin className="w-3.5 h-3.5 text-[#0A5C4F] shrink-0" aria-hidden="true" />
              <span>Main Road, Powergunj, Lohardaga</span>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Service Content: 2-Column Asymmetric Layout */}
      <section className="py-10 sm:py-14 lg:py-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column (7 cols): Clinical Narrative, Scope, Process, FAQs */}
            <div className="lg:col-span-7 space-y-8 sm:space-y-10">
              
              {/* 1. Clinical Overview */}
              <ScrollReveal direction="card" delay={0}>
                <div className="space-y-3.5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F5F1] text-[#0A5C4F] text-xs font-semibold uppercase tracking-wider border border-[#B7D8CA]">
                    <span>{service.badge}</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-semibold text-[#122421] tracking-tight leading-snug">
                    {service.name}
                  </h2>
                  <p className="text-base sm:text-lg text-[#2E4540] font-normal leading-relaxed">
                    {service.introHindi}
                  </p>
                  <p className="text-sm sm:text-base text-[#475B57] font-normal leading-relaxed">
                    {service.detailedOverview}
                  </p>
                </div>
              </ScrollReveal>

              {/* 2. Scope of Services (What We Provide) */}
              <ScrollReveal direction="card" delay={60}>
                <div className="p-6 sm:p-7 rounded-3xl bg-[#FAFCFA] border border-[#B7D8CA] space-y-4">
                  <div className="flex items-center gap-2.5 text-[#0A5C4F]">
                    <ShieldCheck className="w-5 h-5 text-[#0A5C4F]" aria-hidden="true" />
                    <h3 className="font-semibold text-base sm:text-lg text-[#122421]">
                      What We Treat &amp; Clinical Scope
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 gap-2.5">
                    {service.scopeOfService.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-[#2E4540] leading-relaxed"
                      >
                        <CheckCircle2
                          className="w-4 h-4 text-[#0A5C4F] shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* 3. Patient Journey: What to Expect */}
              <ScrollReveal direction="card" delay={100}>
                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#0A5C4F]">
                      PATIENT CARE PROCESS
                    </span>
                    <h3 className="text-xl sm:text-2xl font-semibold text-[#122421] tracking-tight mt-1">
                      What to Expect
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {service.whatToExpect.map((step) => (
                      <div
                        key={step.step}
                        className="p-4 rounded-2xl bg-white border border-[#D2E6DC] hover:border-[#8DBDAA] shadow-2xs space-y-1.5 transition-all"
                      >
                        <div className="flex items-center justify-between">
                          <span className="w-6 h-6 rounded-full bg-[#E8F5F1] text-[#0A5C4F] text-xs font-bold flex items-center justify-center border border-[#B7D8CA]">
                            {step.step}
                          </span>
                          <span className="text-[11px] font-semibold text-[#475B57] uppercase tracking-wider">
                            {step.title}
                          </span>
                        </div>
                        <h4 className="font-semibold text-sm text-[#122421]">
                          {step.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-[#475B57] leading-relaxed font-normal">
                          {step.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* 4. Service-Specific FAQs */}
              {service.faqs && service.faqs.length > 0 && (
                <ScrollReveal direction="card" delay={120}>
                  <div className="space-y-4 pt-2">
                    <div className="flex items-center gap-2 text-[#0A5C4F]">
                      <HelpCircle className="w-5 h-5 text-[#0A5C4F]" aria-hidden="true" />
                      <h3 className="text-xl sm:text-2xl font-semibold text-[#122421] tracking-tight">
                        Frequently Asked Questions (FAQs)
                      </h3>
                    </div>

                    <div className="space-y-3">
                      {service.faqs.map((faq, idx) => (
                        <div
                          key={idx}
                          className="p-4 sm:p-5 rounded-2xl bg-white border border-[#D2E6DC] space-y-2 shadow-2xs"
                        >
                          <h4 className="font-semibold text-sm sm:text-base text-[#122421]">
                            {faq.question}
                          </h4>
                          <p className="text-xs sm:text-sm text-[#2E4540] leading-relaxed font-normal">
                            {faq.answer}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              )}

              {/* Referral Guidance Note */}
              {service.referralNote && (
                <ScrollReveal direction="card" delay={140}>
                  <div className="p-4 sm:p-5 rounded-2xl bg-[#EAF5F0] border border-[#B7D8CA] flex items-start gap-3.5 text-xs sm:text-sm text-[#1B4D44]">
                    <AlertCircle className="w-5 h-5 text-[#0A5C4F] shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <strong className="font-semibold block mb-0.5">
                        Patient Safety &amp; Referral Guidance:
                      </strong>
                      <span className="leading-relaxed text-[#2E4540]">
                        {service.referralNote}
                      </span>
                    </div>
                  </div>
                </ScrollReveal>
              )}
            </div>

            {/* Right Column (5 cols): Photo, Consultation Box, Location */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Feature Photograph */}
              <ScrollReveal direction="card" delay={0}>
                <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden border border-[#B7D8CA] shadow-2xs bg-[#0D2420]">
                  <Image
                    src={service.image.src}
                    alt={service.image.alt}
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute bottom-3 left-3 right-3 text-xs text-white/95 font-medium drop-shadow-xs">
                    {service.name} • Janta Hospital Lohardaga
                  </span>
                </div>
              </ScrollReveal>

              {/* Consultation / Help Desk Box */}
              <ScrollReveal direction="card" delay={80}>
                <div className="p-6 rounded-3xl bg-linear-to-b from-[#F7FCF9] to-white border-2 border-[#97C5B3] shadow-xs space-y-4">
                  <div className="space-y-1">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#0A5C4F] block">
                      CONSULTATION &amp; INQUIRY
                    </span>
                    <h3 className="text-lg sm:text-xl font-semibold text-[#122421]">
                      Consultation &amp; Timings
                    </h3>
                    <p className="text-xs sm:text-sm text-[#475B57] leading-relaxed">
                      To confirm today&apos;s OPD schedule, token availability, or specialist visit, contact Reception:
                    </p>
                    <p className="text-[11px] text-[#5A736E]">
                      (Doctor की वर्तमान उपस्थिति, टोकन और समय की पुष्टि के लिए संपर्क करें।)
                    </p>
                  </div>

                  <div className="space-y-2.5 pt-1">
                    <a
                      href={actionPhoneHref}
                      className={`w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl text-white font-semibold text-sm shadow-xs transition-colors ${
                        isEmergencyAction
                          ? "bg-[#A63F45] hover:bg-[#8E3339]"
                          : "bg-[#0A5C4F] hover:bg-[#07463C]"
                      }`}
                    >
                      <Phone className="w-4 h-4" aria-hidden="true" />
                      <span>{service.actionLabel} ({actionPhoneFormatted})</span>
                    </a>

                    <a
                      href={whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-white text-[#0A5C4F] border border-[#B7D8CA] hover:bg-[#EAF6F1] font-semibold text-sm transition-colors"
                    >
                      <MessageSquare className="w-4 h-4 text-[#0A5C4F]" aria-hidden="true" />
                      <span>WhatsApp</span>
                    </a>
                  </div>

                  <div className="pt-3 border-t border-[#D2E6DC] text-xs text-[#475B57] space-y-1">
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-[#0A5C4F]" aria-hidden="true" />
                      <span>{service.availability}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-[#0A5C4F]" aria-hidden="true" />
                      <span>Ground Floor, Powergunj, Lohardaga</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Direct Maps Directions Card */}
              <ScrollReveal direction="card" delay={120}>
                <div className="p-5 rounded-2xl bg-[#FAFCFA] border border-[#D2E6DC] flex items-center justify-between gap-3">
                  <div className="space-y-0.5">
                    <span className="font-semibold text-xs sm:text-sm text-[#122421] block">
                      Hospital Location
                    </span>
                    <p className="text-xs text-[#475B57]">
                      Main Road, near Head Post Office, Powergunj, Lohardaga
                    </p>
                  </div>
                  <a
                    href={hospitalConfig.contact.mapsUrl.value}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white text-[#0A5C4F] border border-[#B7D8CA] hover:bg-[#EAF6F1] text-xs font-semibold transition-colors"
                  >
                    <span>Get Directions</span>
                    <ArrowRight className="w-3 h-3" aria-hidden="true" />
                  </a>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Relevant Doctors Section */}
      {associatedDoctors.length > 0 && (
        <section className="py-10 sm:py-14 bg-[#F8FBF9] border-t border-[#E5EFEA]">
          <Container>
            <div className="max-w-2xl mb-8">
              <span className="px-3 py-1 rounded-full bg-[#E8F5F1] text-[#0A5C4F] text-xs font-semibold uppercase tracking-wider border border-[#B7D8CA] inline-block mb-2">
                CLINICAL SPECIALISTS
              </span>
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#122421] tracking-tight">
                Specialists for this Service
              </h2>
              <p className="text-xs sm:text-sm text-[#475B57] font-normal mt-1 leading-relaxed">
                Consult experienced doctors and visiting specialists at Janta Hospital. (विशेषज्ञ टीम द्वारा व्यक्तिगत जाँच व परामर्श प्रदान किया जाता है।)
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {associatedDoctors.map((doc) => (
                <DoctorCard
                  key={doc.id}
                  doctor={doc}
                  receptionPhone={primaryPhone}
                  featured={doc.displayOrder === 1}
                />
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Related Services Navigation Strip */}
      <section className="py-10 sm:py-12 bg-white border-t border-[#E5EFEA]">
        <Container>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#0A5C4F]">
                EXPLORE MORE CARE
              </span>
              <h3 className="text-xl sm:text-2xl font-semibold text-[#122421] tracking-tight">
                Explore Other Services
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

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {relatedServices.map((rel) => (
              <Link
                key={rel.slug}
                href={`/services/${rel.slug}`}
                className="group p-4 rounded-2xl bg-[#FAFCFA] border border-[#D2E6DC] hover:border-[#8DBDAA] hover:bg-white hover:shadow-2xs transition-all flex flex-col justify-between"
              >
                <div className="space-y-1">
                  <span className="text-[11px] font-semibold text-[#0A5C4F] uppercase tracking-wider block">
                    {rel.badge}
                  </span>
                  <h4 className="font-semibold text-xs sm:text-sm text-[#122421] group-hover:text-[#0A5C4F] transition-colors leading-snug">
                    {rel.name}
                  </h4>
                </div>
                <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[#475B57] mt-3 group-hover:text-[#0A5C4F] transition-colors">
                  <span>View Details</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Global Contact CTA */}
      <ContactCTA />
    </div>
  );
}
