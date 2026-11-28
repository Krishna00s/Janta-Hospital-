"use client";

import Link from "next/link";
import {
  Phone,
  Clock,
  CheckCircle2,
  Stethoscope,
  MapPin,
  MessageSquare,
  ArrowRight,
  ShieldCheck,
  Calendar,
  AlertCircle,
  HelpCircle,
  Award,
} from "lucide-react";
import { Doctor, allDoctors } from "@/content/doctors";
import { DoctorPortrait } from "@/components/doctors/DoctorPortrait";
import { DoctorCard } from "@/components/doctors/DoctorCard";
import { Container } from "@/components/shared/Container";
import { PageHero } from "@/components/shared/PageHero";
import { ContactCTA } from "@/components/shared/ContactCTA";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import {
  primaryPhone,
  primaryPhoneHref,
  whatsappHref,
  hospitalConfig,
} from "@/content/hospital";
import { serviceDetailsList } from "@/content/servicePages";

interface DoctorDetailViewProps {
  doctor: Doctor;
}

export function DoctorDetailView({ doctor }: DoctorDetailViewProps) {
  const isGeneralPhysician = doctor.category === "General Physicians";

  // Linked services
  const linkedServices = serviceDetailsList.filter((svc) =>
    doctor.serviceSlugs?.includes(svc.slug)
  );

  // Other doctors from the clinical team
  const otherDoctors = allDoctors.filter((d) => d.id !== doctor.id);

  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Page Hero */}
      <PageHero
        breadcrumbs={[
          { label: "Doctors", href: "/doctors" },
          { label: doctor.name },
        ]}
        eyebrow={doctor.category.toUpperCase()}
        title={doctor.name.split(" ")[0]}
        italicWord={doctor.name.split(" ").slice(1).join(" ")}
        description={`${doctor.role} • Janta Hospital, Lohardaga`}
        action={
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={primaryPhoneHref}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0A5C4F] text-white font-semibold text-xs sm:text-sm hover:bg-[#07463C] transition-colors shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A5C4F]"
            >
              <Phone className="w-4 h-4 text-white" aria-hidden="true" />
              <span>Call for Consultation ({primaryPhone})</span>
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

      {/* Hospital Coverage vs Specialist Notice Bar */}
      <section className="py-3 sm:py-3.5 bg-[#F4FAF7] border-b border-[#D2E6DC]">
        <Container>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs sm:text-sm text-[#1B4D44]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0A5C4F] animate-pulse shrink-0" />
              <span className="font-semibold">{doctor.availabilityDetails}</span>
            </div>
            <div className="flex items-center gap-2 font-medium text-[#475B57]">
              <Clock className="w-3.5 h-3.5 text-[#0A5C4F] shrink-0" aria-hidden="true" />
              <span>24/7 Hospital Coverage &bull; Confirm Specialist via Reception</span>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Profile Content: 2-Column Clean Layout */}
      <section className="py-10 sm:py-14 lg:py-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column (7 cols): Clinical Bio, Specialties, Timings, FAQs */}
            <div className="lg:col-span-7 space-y-8 sm:space-y-10">
              
              {/* 1. Doctor Introduction & Narrative */}
              <ScrollReveal direction="card" delay={0}>
                <div className="space-y-3.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-[#E8F5F1] text-[#0A5C4F] text-xs font-semibold uppercase tracking-wider border border-[#B7D8CA]">
                      {doctor.category}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white text-[#2E4540] text-xs font-medium border border-[#D2E6DC]">
                      {doctor.availabilityType}
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-semibold text-[#122421] tracking-tight">
                    About {doctor.name}
                  </h2>

                  {doctor.bioEnglish && (
                    <p className="text-sm sm:text-base text-[#2E4540] font-normal leading-relaxed">
                      {doctor.bioEnglish}
                    </p>
                  )}

                  {doctor.bioHindi && (
                    <div className="p-4 sm:p-5 rounded-2xl bg-[#F4FAF7] border border-[#B7D8CA] text-xs sm:text-sm text-[#1E3833] leading-relaxed">
                      <p className="font-semibold text-[#0A5C4F] mb-1.5 text-xs uppercase tracking-wider">Patient Guidance &amp; Care Note</p>
                      <p className="font-normal text-[#2E4540] leading-relaxed patient-note-text">{doctor.bioHindi}</p>
                    </div>
                  )}
                </div>
              </ScrollReveal>

              {/* 2. Key Clinical Specialties */}
              {doctor.keySpecialties && doctor.keySpecialties.length > 0 && (
                <ScrollReveal direction="card" delay={60}>
                  <div className="p-6 sm:p-7 rounded-3xl bg-[#FAFCFA] border border-[#B7D8CA] space-y-4">
                    <div className="flex items-center gap-2.5 text-[#0A5C4F]">
                      <Stethoscope className="w-5 h-5 text-[#0A5C4F]" aria-hidden="true" />
                      <h3 className="font-semibold text-base sm:text-lg text-[#122421]">
                        Specialization &amp; Clinical Focus
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 gap-2.5">
                      {doctor.keySpecialties.map((spec, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-[#2E4540] leading-relaxed"
                        >
                          <CheckCircle2
                            className="w-4 h-4 text-[#0A5C4F] shrink-0 mt-0.5"
                            aria-hidden="true"
                          />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              )}

              {/* 3. OPD & Consultation Guidance */}
              <ScrollReveal direction="card" delay={100}>
                <div className="p-6 rounded-3xl bg-white border border-[#D2E6DC] space-y-4 shadow-2xs">
                  <div className="flex items-center gap-2.5 text-[#0A5C4F]">
                    <Calendar className="w-5 h-5 text-[#0A5C4F]" aria-hidden="true" />
                    <h3 className="font-semibold text-base sm:text-lg text-[#122421]">
                      Consultation &amp; Timings
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                    <div className="p-4 rounded-xl bg-[#F4FAF7] border border-[#D2E6DC] space-y-1.5">
                      <span className="font-semibold text-[#122421] block">
                        OPD Registration
                      </span>
                      <p className="text-[#475B57] leading-relaxed">
                        Obtain an OPD consultation slip and token from the Ground Floor Reception counter.
                      </p>
                      <p className="text-[11px] text-[#5A736E]">
                        (Ground Floor Reception से OPD पर्ची व टोकन प्राप्त करें।)
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#F4FAF7] border border-[#D2E6DC] space-y-1.5">
                      <span className="font-semibold text-[#122421] block">
                        Doctor Availability
                      </span>
                      <p className="text-[#475B57] leading-relaxed">
                        Contact Reception for today&apos;s OPD timing and doctor availability (+91 9341900715).
                      </p>
                      <p className="text-[11px] text-[#5A736E]">
                        (आज के OPD समय व डॉक्टर की उपस्थिति के लिए रिसेप्शन पर कॉल करें।)
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-[#475B57] leading-relaxed pt-1">
                    * Please bring your previous prescription slips, diagnostic test reports, and current medications when visiting the doctor. (परामर्श से पहले पुरानी पर्ची व रिपोर्ट साथ रखें।)
                  </p>
                </div>
              </ScrollReveal>

              {/* 4. Doctor FAQs */}
              {doctor.faqs && doctor.faqs.length > 0 && (
                <ScrollReveal direction="card" delay={120}>
                  <div className="space-y-4 pt-2">
                    <div className="flex items-center gap-2 text-[#0A5C4F]">
                      <HelpCircle className="w-5 h-5 text-[#0A5C4F]" aria-hidden="true" />
                      <h3 className="text-xl sm:text-2xl font-semibold text-[#122421] tracking-tight">
                        Frequently Asked Questions (FAQs)
                      </h3>
                    </div>

                    <div className="space-y-3">
                      {doctor.faqs.map((faq, idx) => (
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
            </div>

            {/* Right Column (5 cols): Clean Profile Card, Linked Services, Location */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Doctor Monogram / Portrait Slot (4:5 Ratio) */}
              <ScrollReveal direction="card" delay={0}>
                <div className="rounded-3xl p-6 bg-white border-2 border-[#97C5B3] shadow-xs flex flex-col items-center text-center space-y-4">
                  <div className="w-48 sm:w-56 md:w-60 mx-auto">
                    <DoctorPortrait doctor={doctor} priority />
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-[#122421]">
                      {doctor.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-[#0A5C4F]">
                      {doctor.role}
                    </p>
                    <span className="inline-block text-[11px] font-medium text-[#475B57] bg-[#F4FAF7] px-3 py-1 rounded-full border border-[#D2E6DC] mt-1">
                      {doctor.availabilityType}
                    </span>
                  </div>

                  <div className="w-full pt-4 border-t border-[#D2E6DC] space-y-2.5">
                    <a
                      href={primaryPhoneHref}
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-[#0A5C4F] text-white hover:bg-[#07463C] font-semibold text-sm shadow-xs transition-colors"
                    >
                      <Phone className="w-4 h-4" aria-hidden="true" />
                      <span>Check Availability ({primaryPhone})</span>
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
                </div>
              </ScrollReveal>

              {/* Linked Hospital Services */}
              {linkedServices.length > 0 && (
                <ScrollReveal direction="card" delay={60}>
                  <div className="p-6 rounded-3xl bg-[#FAFCFA] border border-[#B7D8CA] space-y-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#0A5C4F] block">
                      ASSOCIATED SERVICES
                    </span>
                    <h4 className="font-semibold text-sm sm:text-base text-[#122421]">
                      Related Services
                    </h4>

                    <div className="space-y-2 pt-1">
                      {linkedServices.map((svc) => (
                        <Link
                          key={svc.slug}
                          href={`/services/${svc.slug}`}
                          className="group p-3 rounded-xl bg-white border border-[#D2E6DC] hover:border-[#8DBDAA] hover:shadow-2xs transition-all flex items-center justify-between"
                        >
                          <div>
                            <span className="text-[11px] font-semibold text-[#0A5C4F] uppercase tracking-wider block">
                              {svc.badge}
                            </span>
                            <span className="text-xs sm:text-sm font-semibold text-[#122421] group-hover:text-[#0A5C4F] transition-colors">
                              {svc.name}
                            </span>
                          </div>
                          <ArrowRight className="w-4 h-4 text-[#475B57] group-hover:text-[#0A5C4F] group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              )}

              {/* Hospital Location Card */}
              <ScrollReveal direction="card" delay={100}>
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
                    className="shrink-0 inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white text-[#0A5C4F] border border-[#B7D8CA] hover:bg-[#EAF6F1] text-xs font-semibold transition-colors"
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

      {/* Other Doctors Section */}
      <section className="py-10 sm:py-14 bg-[#F8FBF9] border-t border-[#E5EFEA]">
        <Container>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="px-3 py-1 rounded-full bg-[#E8F5F1] text-[#0A5C4F] text-xs font-semibold uppercase tracking-wider border border-[#B7D8CA] inline-block mb-1.5">
                OUR CLINICAL TEAM
              </span>
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#122421] tracking-tight">
                Our Specialists
              </h2>
            </div>
            <Link
              href="/doctors"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#0A5C4F] hover:underline"
            >
              <span>View All 7 Doctors</span>
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherDoctors.slice(0, 3).map((doc) => (
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

      {/* Global Contact CTA */}
      <ContactCTA />
    </div>
  );
}
