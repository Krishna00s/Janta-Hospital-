import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowRight, ArrowUpRight, Clock, ShieldCheck, MapPin, Activity, Stethoscope, AlertCircle } from "lucide-react";
import {
  hospitalConfig,
  primaryPhoneHref,
  emergencyPhone,
  emergencyPhoneHref,
} from "@/content/hospital";
import { servicesData, surgicalServices, emergencyServices } from "@/content/services";
import { Badge } from "@/components/shared/Badge";
import { ServicesToDoctorsWave } from "@/components/ui/SectionWaves";
import { BotanicalBranchingTendril } from "@/components/ui/BotanicalDecorations";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

const serviceRouteMap: Record<string, string> = {
  "general-surgery": "/services/general-surgery",
  "orthopaedic-surgery": "/services/orthopaedic-surgery",
  "laparoscopic-surgery": "/services/laparoscopic-surgery",
  "neurosurgery": "/services/neurosurgery",
  "opd-consultations": "/services/general-medicine",
  "pharmacy-counter": "/services/pharmacy",
};

export function MedicalServices() {
  const { contact } = hospitalConfig;
  const phoneHref = `tel:${contact.phone.value}`;

  return (
    <section
      id="departments"
      aria-labelledby="services-heading"
      className="relative w-full pt-10 sm:pt-14 lg:pt-16 pb-0 bg-white text-[#122421] overflow-hidden"
    >
      {/* Abstract Organic Botanical Tendril Branching behind service cards */}
      <BotanicalBranchingTendril className="opacity-25 sm:opacity-30" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 pb-8 sm:pb-12">
        
        {/* Compact Editorial Heading with Scroll Entrance */}
        <ScrollReveal direction="heading" className="max-w-2xl mb-8 sm:mb-10">
          <Badge variant="mint" dot className="mb-2 sm:mb-3">
            SERVICES &amp; SPECIALTIES
          </Badge>
          <h2
            id="services-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-[#122421] leading-snug py-0.5"
          >
            Medical &amp; Surgical Services
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#2E4540] font-normal leading-relaxed">
            Providing 24/7 emergency medical care, visiting specialist surgical consultations, and daily outpatient healthcare in Lohardaga. (24/7 आपातकालीन देखभाल व विशेषज्ञ परामर्श।)
          </p>
        </ScrollReveal>

        {/* ============================================================ */}
        {/* SECTION 1: Emergency Care Primary Highlight (Full-Width Card) */}
        {/* ============================================================ */}
        <ScrollReveal direction="card" delay={0} className="mb-8 sm:mb-10">
          <div className="group relative rounded-3xl p-5 sm:p-7 bg-[#FAFCFA] border-2 border-[#ECCDD0] hover:border-[#DDA5AB] shadow-2xs overflow-hidden flex flex-col md:flex-row items-stretch justify-between gap-6 card-hover-lift">
            <div className="flex-1 space-y-3">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F9EDEE] text-[#A63F45] border border-[#ECCDD0] text-xs font-semibold tracking-wider">
                  <Clock className="w-3.5 h-3.5 text-[#A63F45]" aria-hidden="true" />
                  24/7 Emergency Active
                </span>
                <span className="text-xs font-semibold text-[#A63F45] uppercase tracking-wider">
                  Immediate Assessment &amp; Care
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold font-sans text-[#122421] leading-snug">
                24/7 Emergency Care &amp; Assessment
              </h3>
              <p className="text-sm sm:text-base text-[#2E4540] font-normal max-w-2xl leading-relaxed">
                अचानक तबीयत बिगड़ने, चोट लगने या तेज दर्द में बिना किसी पूर्व सूचना के सीधे Powergunj Hospital आएँ। 24 घंटे Duty Doctor व प्रशिक्षित मेडिकल स्टाफ द्वारा तुरंत प्राथमिक चिकित्सा व स्थिरीकरण किया जाता है।
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-[#471E21] font-medium pt-1">
                <span>• तुरंत प्राथमिक जाँच व स्थिरीकरण</span>
                <span>• ऑक्सीजन व नेबुलाइज़र सहायता</span>
                <span>• आपातकालीन इंजेक्शन व दवाएँ</span>
              </div>
            </div>

            <div className="flex flex-col justify-between shrink-0 md:w-64 pt-4 md:pt-0 border-t md:border-t-0 md:border-l border-[#ECCDD0] md:pl-6 space-y-3">
              <span className="text-xs text-[#A63F45] font-semibold uppercase tracking-wider">
                Emergency Helpline
              </span>
              <a
                href={emergencyPhoneHref}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#A63F45] text-white font-semibold text-xs sm:text-sm hover:bg-[#8E3339] transition-colors shadow-xs"
              >
                <Phone className="w-4 h-4 text-white animate-call-ring" aria-hidden="true" />
                <span>Emergency Call ({emergencyPhone})</span>
              </a>
              <Link
                href="/emergency"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full bg-white text-[#A63F45] border border-[#ECCDD0] hover:bg-[#F9EDEE] text-xs font-semibold transition-colors"
              >
                <span>View Emergency Details</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#A63F45]" aria-hidden="true" />
              </Link>
              <span className="text-[11px] text-[#A63F45] font-medium text-center">
                Powergunj, Lohardaga • 24 घंटे उपलब्ध
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* ============================================================ */}
        {/* SECTION 2: Surgical Services Showcase (4 Compact Editorial Tiles) */}
        {/* ============================================================ */}
        <div className="mb-10 sm:mb-12">
          <div className="max-w-2xl mb-4 sm:mb-6">
            <span className="px-3 py-1 rounded-full bg-[#E8F5F1] text-[#0A5C4F] text-xs font-semibold uppercase tracking-wider border border-[#B7D8CA] inline-block mb-1.5">
              SURGICAL SERVICES
            </span>
            <h3 className="text-xl sm:text-2xl font-semibold text-[#122421] tracking-tight leading-snug">
              Specialist Surgical Consultations
            </h3>
            <p className="text-xs sm:text-sm text-[#2E4540] font-normal leading-relaxed mt-1">
              General Surgery, Orthopaedic Surgery, Laparoscopic Surgery एवं Neurosurgery के विशेषज्ञ ऑन-कॉल उपलब्ध हैं।
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {surgicalServices.map((service, idx) => (
              <ScrollReveal
                key={service.id}
                direction="card"
                delay={idx * 70}
                className="h-full flex"
              >
                <div className="w-full rounded-2xl bg-white border-2 border-[#C0DCD4] hover:border-[#0A5C4F] shadow-2xs hover:shadow-sm flex flex-col justify-between overflow-hidden card-hover-lift transition-all">
                  <div>
                    {/* Representative Surgical Medical Visual Header */}
                    {service.image && (
                      <div className="relative w-full h-28 sm:h-32 bg-[#EDF7F3] overflow-hidden border-b border-[#D2E6DC]">
                        <Image
                          src={service.image.src}
                          alt={service.image.alt}
                          fill
                          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, calc(100vw - 32px)"
                          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/55 via-black/20 to-transparent pointer-events-none" />
                        <div className="absolute top-2 left-2 flex items-center gap-1">
                          <span className="px-2 py-0.5 rounded-full bg-[#0A5C4F] text-white text-[10px] font-semibold uppercase tracking-wider shadow-xs">
                            {service.badge}
                          </span>
                        </div>
                        <div className="absolute bottom-2 left-2 right-2 text-white text-[11px] font-medium drop-shadow-xs flex items-center gap-1">
                          <Clock className="w-3 h-3 text-[#E0F3EC] shrink-0" aria-hidden="true" />
                          <span className="truncate">{service.availability}</span>
                        </div>
                      </div>
                    )}

                    <div className="p-4 sm:p-5 space-y-2.5">
                      <div>
                        <h4 className="text-base sm:text-lg font-semibold text-[#122421] leading-snug">
                          {serviceRouteMap[service.id] ? (
                            <Link href={serviceRouteMap[service.id]} className="hover:underline">
                              {service.name}
                            </Link>
                          ) : (
                            service.name
                          )}
                        </h4>
                        {service.hindiName && (
                          <p className="text-xs text-[#0A5C4F] font-medium mt-0.5">
                            {service.hindiName}
                          </p>
                        )}
                      </div>

                      <p className="text-xs text-[#2E4540] font-normal leading-relaxed">
                        {service.shortDescription}
                      </p>

                      <div className="pt-2 border-t border-[#D2E6DC]/70 space-y-1.5 text-[11px] text-[#475B57]">
                        {service.keyFeatures.slice(0, 2).map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-1.5">
                            <span className="text-[#0A5C4F] font-bold">•</span>
                            <span className="leading-snug">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-4 sm:p-5 pt-0 mt-auto flex items-center gap-2">
                    <a
                      href={service.actionHref}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-[#0A5C4F] text-white hover:bg-[#07463C] text-xs font-semibold shadow-xs transition-colors min-h-[38px]"
                    >
                      <span>Check Availability</span>
                    </a>
                    {serviceRouteMap[service.id] && (
                      <Link
                        href={serviceRouteMap[service.id]}
                        className="inline-flex items-center justify-center gap-1 px-3 py-2 rounded-xl bg-white text-[#0A5C4F] border border-[#B7D8CA] hover:bg-[#EAF6F1] text-xs font-semibold transition-colors min-h-[38px] shrink-0"
                      >
                        <span>View Details</span>
                        <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                      </Link>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-3 px-3.5 py-2 rounded-xl bg-[#F8FAF9] border border-[#D2E6DC] text-[11px] text-[#475B57] leading-relaxed flex items-center gap-2">
            <AlertCircle className="w-3.5 h-3.5 text-[#0A5C4F] shrink-0" aria-hidden="true" />
            <span>
              <strong>प्रबंधन पुष्टि सूचना:</strong> सर्जरी व ऑपरेशन संबंधी विशेषताएँ अस्पताल प्रतिनिधि द्वारा प्रस्तावित हैं; विशिष्ट प्रक्रियाओं व ओटी समय की अंतिम पुष्टि रिसेप्शन से की जाती है।
            </span>
          </div>
        </div>

        {/* ============================================================ */}
        {/* SECTION 3: General Clinical Services (Verified Real Photos) */}
        {/* ============================================================ */}
        <div>
          <div className="max-w-2xl mb-4 sm:mb-6">
            <span className="px-3 py-1 rounded-full bg-[#E8F5F1] text-[#0A5C4F] text-xs font-semibold uppercase tracking-wider border border-[#B7D8CA] inline-block mb-1.5">
              PRIMARY CARE &amp; ESSENTIALS
            </span>
            <h3 className="text-xl sm:text-2xl font-semibold text-[#122421] tracking-tight leading-snug">
              Daily OPD, Pharmacy &amp; Clinical Services
            </h3>
            <p className="text-xs sm:text-sm text-[#2E4540] font-normal leading-relaxed mt-1">
              अस्पताल परिसर में रोज़ाना उपलब्ध प्राथमिक स्वास्थ्य सेवाएँ।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
            
            {/* Tile 1: OPD Consultation */}
            <ScrollReveal direction="card" delay={0} className="flex">
              <div className="group relative rounded-3xl overflow-hidden shadow-2xs border border-[#B7D8CA] hover:border-[#8DBDAA] bg-white flex flex-col justify-between w-full card-hover-lift">
                <div className="relative w-full h-32 sm:h-36 bg-[#EDF7F3] border-b border-[#D2E6DC] overflow-hidden">
                  <Image
                    src="/images/gallery-staircase.webp"
                    alt="Clinical floor access corridor leading to OPD consultation rooms at Janta Hospital"
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                </div>

                <div className="p-4 sm:p-5 flex flex-col justify-between flex-1 space-y-3">
                  <div>
                    <h4 className="text-lg font-semibold text-[#122421] group-hover:text-[#0A5C4F] transition-colors leading-snug">
                      OPD Consultation
                    </h4>
                    <p className="text-xs font-medium text-[#0A5C4F]">
                      दैनिक बाह्य रोगी विभाग
                    </p>
                    <p className="text-xs sm:text-sm text-[#2E4540] font-normal mt-1 leading-relaxed">
                      बुखार, सर्दी, पेट दर्द और सामान्य बीमारियों के लिए दैनिक सुबह-शाम डॉक्टर सलाह।
                    </p>
                  </div>

                  <div className="pt-2.5 border-t border-[#D2E6DC]/60 flex items-center justify-between text-xs">
                    <a
                      href={primaryPhoneHref}
                      className="inline-flex items-center gap-1 font-semibold text-[#0A5C4F] hover:underline"
                    >
                      <span>OPD Timing</span>
                      <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </a>
                    <span className="text-[#475B57] font-medium">Ground Floor</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Tile 2: Hospital Pharmacy */}
            <ScrollReveal direction="card" delay={80} className="flex">
              <div className="group relative rounded-3xl overflow-hidden shadow-2xs border border-[#B7D8CA] hover:border-[#8DBDAA] bg-white flex flex-col justify-between w-full card-hover-lift">
                <div className="relative w-full h-32 sm:h-36 bg-[#EDF7F3] border-b border-[#D2E6DC] overflow-hidden">
                  <Image
                    src="/images/gallery-pharmacy.webp"
                    alt="On-site pharmacy dispensary counter at Janta Hospital"
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                </div>

                <div className="p-4 sm:p-5 flex flex-col justify-between flex-1 space-y-3">
                  <div>
                    <h4 className="text-lg font-semibold text-[#122421] group-hover:text-[#0A5C4F] transition-colors leading-snug">
                      Hospital Pharmacy
                    </h4>
                    <p className="text-xs font-medium text-[#0A5C4F]">
                      अस्पताल दवा काउंटर
                    </p>
                    <p className="text-xs sm:text-sm text-[#2E4540] font-normal mt-1 leading-relaxed">
                      डॉक्टर द्वारा लिखी गई सभी दवाएँ व सर्जिकल सामग्री सीधे फ्रंट पोर्च काउंटर पर उपलब्ध।
                    </p>
                  </div>

                  <div className="pt-2.5 border-t border-[#D2E6DC]/60 flex items-center justify-between text-xs">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1 font-semibold text-[#0A5C4F] hover:underline"
                    >
                      <span>Pharmacy Info</span>
                      <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </Link>
                    <span className="text-[#475B57] font-medium">Front Porch</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Tile 3: Dressing & Injection */}
            <ScrollReveal direction="card" delay={140} className="flex">
              <div className="group relative rounded-3xl overflow-hidden shadow-2xs border border-[#B7D8CA] hover:border-[#8DBDAA] bg-white flex flex-col justify-between w-full card-hover-lift">
                <div className="relative w-full h-32 sm:h-36 bg-[#EDF7F3] border-b border-[#D2E6DC] overflow-hidden">
                  <Image
                    src="/images/gallery-signboard.webp"
                    alt="Clinical procedures and emergency medical services signage at Janta Hospital"
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                </div>

                <div className="p-4 sm:p-5 flex flex-col justify-between flex-1 space-y-3">
                  <div>
                    <h4 className="text-lg font-semibold text-[#122421] group-hover:text-[#0A5C4F] transition-colors leading-snug">
                      Dressing &amp; Injection
                    </h4>
                    <p className="text-xs font-medium text-[#0A5C4F]">
                      पट्टी एवं इंजेक्शन कक्ष
                    </p>
                    <p className="text-xs sm:text-sm text-[#2E4540] font-normal mt-1 leading-relaxed">
                      घाव की antiseptic dressing, पट्टी बदलना, injection और routine checkup।
                    </p>
                  </div>

                  <div className="pt-2.5 border-t border-[#D2E6DC]/60 flex items-center justify-between text-xs">
                    <a
                      href={phoneHref}
                      className="inline-flex items-center gap-1 font-semibold text-[#0A5C4F] hover:underline"
                    >
                      <span>View Details</span>
                      <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </a>
                    <span className="text-[#475B57] font-medium">Ground Floor</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>

        {/* Link to Dedicated Services Page */}
        <div className="mt-10 flex justify-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#EAF6F1] text-[#0A5C4F] font-semibold text-sm sm:text-base hover:bg-[#0A5C4F] hover:text-white transition-all border border-[#A9DCCB] shadow-2xs"
          >
            <span>View All Services</span>
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>

      </div>

      {/* Services → Doctors Expressive Sage & Mint Wave Transition */}
      <ServicesToDoctorsWave />
    </section>
  );
}
