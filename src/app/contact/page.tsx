import { Metadata } from "next";
import Image from "next/image";
import {
  Phone,
  MessageSquare,
  MapPin,
  Navigation,
  ShieldCheck,
  Building,
  ArrowUpRight,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/shared/PageHero";
import { GoogleMapPreview } from "@/components/home/GoogleMapPreview";
import { HospitalFAQ } from "@/components/home/HospitalFAQ";
import { ContactCTA } from "@/components/shared/ContactCTA";
import { Container } from "@/components/shared/Container";
import { BotanicalSideClimber } from "@/components/ui/BotanicalDecorations";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import {
  hospitalConfig,
  primaryPhone,
  primaryPhoneHref,
  emergencyPhone,
  emergencyPhoneHref,
  whatsappNumber,
  whatsappHref,
} from "@/content/hospital";
import { getCanonicalUrl, siteConfig } from "@/config/site";
import { generateBreadcrumbJsonLd, generateContactPageJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: {
    absolute: "Janta Hospital Contact Number & Address | Lohardaga, Jharkhand",
  },
  description:
    "Janta Hospital contact number: +91 9341900715, 24/7 Emergency: +91 9308348606. Hospital address: Main Road, near Head Post Office, Powergunj, Lohardaga, Jharkhand – 835302, India.",
  alternates: {
    canonical: getCanonicalUrl("/contact"),
  },
  openGraph: {
    title: "Janta Hospital Contact Number & Address | Lohardaga, Jharkhand",
    description:
      "Janta Hospital contact number: +91 9341900715, 24/7 Emergency: +91 9308348606. Hospital address: Main Road, near Head Post Office, Powergunj, Lohardaga, Jharkhand – 835302, India.",
    url: getCanonicalUrl("/contact"),
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
    title: "Janta Hospital Contact Number & Address | Lohardaga, Jharkhand",
    description:
      "Janta Hospital contact number: +91 9341900715, 24/7 Emergency: +91 9308348606. Hospital address: Main Road, near Head Post Office, Powergunj, Lohardaga, Jharkhand – 835302, India.",
    images: [siteConfig.defaultOgImage.url],
  },
};

export default function ContactPage() {
  const breadcrumbJsonLd = generateBreadcrumbJsonLd([{ name: "Contact", path: "/contact" }]);
  const contactJsonLd = generateContactPageJsonLd();

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <Header />

      <main className="flex-1">
        {/* Page Hero */}
        <PageHero
          breadcrumbs={[{ label: "Contact" }]}
          eyebrow="CONTACT &amp; DIRECTIONS"
          title="Hospital Location &amp;"
          italicWord="Contact"
          description="Official address: Main Road, near Head Post Office, Powergunj, Lohardaga, Jharkhand – 835302, India. Available 24/7 for emergency admissions and daily clinical inquiries. (24 घंटे इमरजेंसी व परामर्श के लिए संपर्क करें।)"
          action={
            <a
              href={emergencyPhoneHref}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#A63F45] text-white font-semibold text-xs sm:text-sm hover:bg-[#8E3339] transition-colors shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A63F45]"
            >
              <Phone className="w-4 h-4 text-white animate-call-ring" aria-hidden="true" />
              <span>Emergency Call ({emergencyPhone})</span>
            </a>
          }
        />

        {/* Section A: Primary Contact Cards */}
        <section className="relative py-10 sm:py-16 bg-white overflow-hidden" aria-labelledby="contact-options-heading">
          <BotanicalSideClimber side="right" className="opacity-25 sm:opacity-30" />
          <Container className="relative z-10">
            <h2 id="contact-options-heading" className="sr-only">
              Direct Contact &amp; Emergency Options
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
              
              {/* Card 1: 24/7 Primary Emergency Hotline */}
              <ScrollReveal direction="card" delay={0} className="h-full">
                <div className="bg-[#A63F45] text-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-[#8E3339] shadow-md flex flex-col justify-between space-y-5 h-full">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="w-10 h-10 rounded-xl bg-white/10 text-white flex items-center justify-center">
                        <Phone className="w-5 h-5 text-white" aria-hidden="true" />
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#A63F45] text-xs font-semibold uppercase tracking-wider shadow-2xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#A63F45] animate-pulse" />
                        24 / 7 Active
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
                      24/7 Emergency Helpline
                    </h3>
                    <p className="text-xs sm:text-sm text-white/90 mt-1.5 leading-relaxed font-normal">
                      Direct connection with on-duty resident doctors and emergency medical staff for acute crises. (24 घंटे इमरजेंसी सहायता के लिए सीधे कॉल करें।)
                    </p>

                    <div className="mt-4 pt-3 border-t border-white/20">
                      <span className="text-xs font-medium uppercase tracking-wider text-white/90 block mb-1">
                        Emergency Contact (24/7):
                      </span>
                      <a
                        href={emergencyPhoneHref}
                        className="font-mono font-semibold text-2xl sm:text-3xl text-white hover:text-emerald-100 transition-colors block"
                      >
                        {emergencyPhone}
                      </a>
                    </div>
                  </div>

                  <a
                    href={emergencyPhoneHref}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-white text-[#A63F45] font-semibold text-xs sm:text-sm hover:bg-[#F9EDEE] transition-colors shadow-xs"
                  >
                    <Phone className="w-4 h-4 text-[#A63F45] fill-current animate-call-ring" aria-hidden="true" />
                    <span>Call Emergency Helpline</span>
                  </a>
                </div>
              </ScrollReveal>

              {/* Card 2: WhatsApp Inquiries */}
              <ScrollReveal direction="card" delay={80} className="h-full">
                <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-[#B7D8CA] hover:border-[#8DBDAA] shadow-2xs card-hover-lift transition-all flex flex-col justify-between space-y-5 h-full">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="w-10 h-10 rounded-xl bg-[#E8F5F1] text-[#0A5C4F] flex items-center justify-center border border-[#B7D8CA]">
                        <MessageSquare className="w-5 h-5 text-[#0A5C4F]" aria-hidden="true" />
                      </span>
                      <span className="px-3 py-1 rounded-full bg-[#E8F5F1] text-[#0A5C4F] text-xs font-semibold uppercase tracking-wider border border-[#B7D8CA]">
                        Quick Message
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-semibold text-[#122421] tracking-tight">
                      WhatsApp Support
                    </h3>
                    <p className="text-xs sm:text-sm text-[#2E4540] mt-1.5 leading-relaxed font-normal">
                      Inquire about doctor availability, OPD tokens, visiting specialists, and general guidance. (Doctor के समय, टोकन या दवा की जानकारी के लिए संदेश भेजें।)
                    </p>

                    <div className="mt-4 pt-3 border-t border-[#EAEFEA]">
                      <span className="text-xs font-medium uppercase tracking-wider text-[#3B524E] block mb-1">
                        WhatsApp Helpline:
                      </span>
                      <a
                        href={whatsappHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono font-semibold text-lg text-[#122421] hover:text-[#0A5C4F] transition-colors block"
                      >
                        {primaryPhone}
                      </a>
                    </div>
                  </div>

                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#E8F5F1] text-[#0A5C4F] font-semibold text-xs sm:text-sm hover:bg-[#0A5C4F] hover:text-white transition-all border border-[#A9DCCB]"
                  >
                    <MessageSquare className="w-4 h-4" aria-hidden="true" />
                    <span>Chat on WhatsApp</span>
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </div>
              </ScrollReveal>

              {/* Card 3: Hospital Enquiries (General / OPD / Reception / Duty Line) */}
              <ScrollReveal direction="card" delay={160} className="h-full">
                <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-[#B7D8CA] hover:border-[#8DBDAA] shadow-2xs card-hover-lift transition-all flex flex-col justify-between space-y-5 h-full">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="w-10 h-10 rounded-xl bg-[#E8F5F1] text-[#0A5C4F] flex items-center justify-center border border-[#B7D8CA]">
                        <Building className="w-5 h-5 text-[#0A5C4F]" aria-hidden="true" />
                      </span>
                      <span className="px-3 py-1 rounded-full bg-[#E8F5F1] text-[#0A5C4F] text-xs font-semibold uppercase tracking-wider border border-[#B7D8CA]">
                        Reception &amp; OPD
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-semibold text-[#122421] tracking-tight">
                      Hospital Enquiries
                    </h3>
                    <p className="text-xs sm:text-sm text-[#2E4540] mt-1.5 leading-relaxed font-normal">
                      General inquiries, OPD registration, doctor schedules, pharmacy confirmation, and patient assistance — सामान्य पूछताछ व रिसेप्शन सहायता।
                    </p>

                    <div className="mt-4 pt-3 border-t border-[#D2E6DC]/60 space-y-2">
                      <div>
                        <span className="text-xs font-medium uppercase tracking-wider text-[#3B524E] block mb-0.5">
                          Main Reception Desk:
                        </span>
                        <a
                          href={primaryPhoneHref}
                          className="font-mono text-lg font-semibold text-[#0A5C4F] hover:underline block"
                        >
                          {primaryPhone}
                        </a>
                      </div>

                      <div className="pt-1 border-t border-[#EAEFEA] space-y-1">
                        {hospitalConfig.contact.phone.alternatePhones.map((ph) => (
                          <div key={ph} className="flex items-center justify-between">
                            <span className="text-xs text-[#2E4540] font-normal">Alternate Duty:</span>
                            <a
                              href={`tel:+91${ph}`}
                              className="font-mono text-xs font-semibold text-[#0A5C4F] hover:underline"
                            >
                              +91 {ph}
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <a
                    href={primaryPhoneHref}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#0A5C4F] text-white font-semibold text-xs sm:text-sm hover:bg-[#07463C] transition-colors shadow-xs"
                  >
                    <Phone className="w-4 h-4 text-emerald-200" aria-hidden="true" />
                    <span>Call Hospital Reception</span>
                  </a>
                </div>
              </ScrollReveal>

            </div>
          </Container>
        </section>

        {/* Section B: Physical Address & Real Google Maps Card */}
        <section className="py-10 sm:py-16 bg-[#F8FAF9] border-y border-[#D2E6DC]">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* Left Column: Full Address & Transit Instructions */}
              <ScrollReveal direction="card" delay={0} className="lg:col-span-5 space-y-6">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#0A5C4F]">
                    DIRECTIONS &amp; LANDMARKS
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-semibold text-[#122421] tracking-tight mt-1 leading-snug py-0.5">
                    <span>How to Reach </span>
                    <span className="font-serif italic font-normal text-[#0A5C4F]">
                      Janta Hospital.
                    </span>
                  </h2>
                </div>

                {/* Address Card */}
                <div className="p-5 bg-white rounded-2xl border border-[#B7D8CA] hover:border-[#8DBDAA] shadow-2xs card-hover-lift transition-all space-y-2">
                  <div className="flex items-center gap-2 text-xs font-medium text-[#0A5C4F] uppercase tracking-wider">
                    <MapPin className="w-4 h-4" aria-hidden="true" />
                    <span>Official Hospital Address</span>
                  </div>
                  <p className="text-base font-semibold text-[#122421] leading-snug">
                    {hospitalConfig.location.fullAddress}
                  </p>
                  <p className="text-xs sm:text-sm text-[#2E4540] font-normal pt-1">
                    Main Road, near Head Post Office, Powergunj, Lohardaga, Jharkhand – 835302, India
                  </p>
                </div>

                {/* Transit Details */}
                <div className="space-y-3">
                  <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#3B524E]">
                    Landmarks &amp; Transit Route
                  </h3>

                  <div className="flex items-start gap-3 p-3.5 bg-white rounded-xl border border-[#E0EFE8]">
                    <Navigation className="w-4 h-4 text-[#0A5C4F] shrink-0 mt-0.5" aria-hidden="true" />
                    <div className="text-xs sm:text-sm leading-relaxed text-[#2E4540] font-normal">
                      <strong className="text-[#122421] font-semibold block mb-0.5">From Lohardaga Main Bus Stand:</strong>
                      Located 3 to 5 minutes walking distance. Head along Main Road towards the Head Post Office in Powergunj — बस स्टैंड से केवल 3-5 मिनट की दूरी।
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 bg-white rounded-xl border border-[#E0EFE8]">
                    <Building className="w-4 h-4 text-[#0A5C4F] shrink-0 mt-0.5" aria-hidden="true" />
                    <div className="text-xs sm:text-sm leading-relaxed text-[#2E4540] font-normal">
                      <strong className="text-[#122421] font-semibold block mb-0.5">Head Post Office Landmark:</strong>
                      Situated on the street directly adjacent to the Head Post Office with prominent 24-hour entrance signage — मुख्य डाकघर के पास वाली सड़क पर।
                    </div>
                  </div>
                </div>

                {/* 24/7 Telephone Assistance Supporting Photo Card */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#D5E5DE] shadow-2xs flex items-center gap-4">
                  <div className="relative w-20 h-20 rounded-xl bg-[#0D2420] border border-[#D5EAE0] overflow-hidden shrink-0">
                    <Image
                      src="/images/gallery-entrance.webp"
                      alt="Janta Hospital entrance and reception veranda in Powergunj, Lohardaga"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base text-[#122421]">24/7 Telephone Assistance</h4>
                    <p className="text-xs sm:text-sm text-[#2E4540] mt-0.5 leading-relaxed font-normal">
                      Call our reception desk anytime for directions, doctor availability, or emergency assistance — रास्ता पूछने या जानकारी के लिए कॉल करें।
                    </p>
                    <a
                      href={primaryPhoneHref}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0A5C4F] hover:underline mt-1 font-mono"
                    >
                      <Phone className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>{primaryPhone}</span>
                    </a>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={hospitalConfig.contact.mapsUrl.value}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#0A5C4F] text-white font-semibold text-xs sm:text-sm hover:bg-[#07463C] transition-colors shadow-xs"
                  >
                    <Navigation className="w-4 h-4" aria-hidden="true" />
                    <span>Get Directions (Google Maps)</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#7CE4C9]" aria-hidden="true" />
                  </a>
                </div>
              </ScrollReveal>

              {/* Right Column: Google Maps Interactive Card */}
              <ScrollReveal direction="card" delay={100} className="lg:col-span-7">
                <GoogleMapPreview mapsUrl={hospitalConfig.contact.mapsUrl.value} />
              </ScrollReveal>
            </div>
          </Container>
        </section>

        {/* Section C: Operating & Consultation Hours */}
        <section className="py-10 sm:py-16 bg-white">
          <Container>
            <div className="max-w-3xl mx-auto">
              <ScrollReveal direction="heading" className="text-center mb-8">
                <span className="text-xs font-medium uppercase tracking-widest text-[#0A5C4F]">
                  HOSPITAL TIMINGS
                </span>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#122421] tracking-tight mt-1 leading-tight">
                  <span>Hospital Operating Hours &amp; </span>
                  <span className="font-serif italic font-normal text-[#0A5C4F]">
                    Timings.
                  </span>
                </h2>
              </ScrollReveal>

              <ScrollReveal direction="card" delay={60}>
                <div className="rounded-2xl border border-[#D5E5DE] overflow-hidden divide-y divide-[#EBF2EE]">
                  <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-[#F9EDEE]/50 border-l-4 border-l-[#A63F45]">
                    <div>
                      <span className="text-xs sm:text-sm font-semibold uppercase text-[#A63F45] block">
                        24/7 Emergency Care
                      </span>
                      <span className="text-xs sm:text-sm text-[#471E21] font-normal">
                        Immediate care for acute illness, trauma, and accidents — आपातकाल के लिए
                      </span>
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-[#A63F45] inline-flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#A63F45]" />
                      Open 24 Hours • Every Day (24 घंटे खुला)
                    </span>
                  </div>

                  <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-white">
                    <div>
                      <span className="text-xs sm:text-sm font-semibold uppercase text-[#122421] block">
                        Daily OPD Consultation
                      </span>
                      <span className="text-xs sm:text-sm text-[#2E4540] font-normal">
                        General physician evaluations, follow-ups, and BP/Sugar tests
                      </span>
                    </div>
                    <span className="text-xs sm:text-sm text-[#122421] font-normal">
                      Mon – Sat: Contact Reception for Timing
                    </span>
                  </div>

                  <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-[#FCFDFD]">
                    <div>
                      <span className="text-xs sm:text-sm font-semibold uppercase text-[#122421] block">
                        Doctor Availability &amp; Tokens
                      </span>
                      <span className="text-xs sm:text-sm text-[#2E4540] font-normal">
                        Daily OPD token issue and specialist visit schedule
                      </span>
                    </div>
                    <span className="text-xs sm:text-sm text-[#0A5C4F] font-semibold">
                      Call Reception: +91 93419 00715
                    </span>
                  </div>

                  <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-white">
                    <div>
                      <span className="text-xs sm:text-sm font-semibold uppercase text-[#122421] block">
                        Hospital Pharmacy Counter
                      </span>
                      <span className="text-xs sm:text-sm text-[#2E4540] font-normal">
                        On-site prescription medicines and emergency surgical supplies
                      </span>
                    </div>
                    <span className="text-xs sm:text-sm text-[#122421] font-normal">
                      Open 24 Hours • 7 Days a Week (24 घंटे खुला)
                    </span>
                  </div>
                </div>
              </ScrollReveal>

            </div>
          </Container>
        </section>

        {/* Patient Frequently Asked Questions */}
        <HospitalFAQ />

        {/* Pre-Footer Call to Action */}
        <ContactCTA />
      </main>

      <Footer />
    </div>
  );
}
