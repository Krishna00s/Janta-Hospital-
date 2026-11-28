import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowUpRight } from "lucide-react";
import { hospitalConfig } from "@/content/hospital";
import { Badge } from "@/components/shared/Badge";
import { GalleryToServicesWave } from "@/components/ui/SectionWaves";
import { BotanicalGrowingVine } from "@/components/ui/BotanicalDecorations";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

export function HospitalGallery() {
  const phoneHref = `tel:${hospitalConfig.contact.phone.value}`;

  return (
    <section
      id="about"
      aria-labelledby="gallery-heading"
      className="relative w-full pt-10 sm:pt-14 lg:pt-16 pb-0 bg-[#FCFDFD] text-[#122421] overflow-hidden"
    >
      {/* Rich Abstract Organic Botanical Vine flowing with restrained opacity behind content */}
      <BotanicalGrowingVine className="opacity-20 sm:opacity-25" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 pb-8 sm:pb-12">
        
        {/* Patient-Centric Header with Harmonized Mixed-Script Typography */}
        <ScrollReveal direction="heading" className="max-w-2xl mb-6 sm:mb-8">
          <Badge variant="mint" dot className="mb-2 sm:mb-3">
            JANTA HOSPITAL
          </Badge>
          <h2
            id="gallery-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-[#122421] leading-snug py-0.5"
          >
            <span className="font-medium">Janta Hospital</span> <span>की एक झलक</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#2E4540] font-normal leading-relaxed">
            Lohardaga के Powergunj में आपकी सेहत का पूरा ध्यान — जानिए Hospital आने पर आपको क्या सुविधा मिलती है।
          </p>
        </ScrollReveal>

        {/* Asymmetric Editorial Composition (Wide Patient Guide + 2 Stacked Focus Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
          
          {/* Left Column (7 cols): Wide Authentic Campus Photo & Patient Journey Feature */}
          <ScrollReveal direction="card" delay={0} className="lg:col-span-7 flex">
            <div className="group relative rounded-3xl overflow-hidden border border-[#B7D8CA] hover:border-[#8DBDAA] shadow-2xs bg-white w-full card-hover-lift flex flex-col justify-between transition-all">
              
              {/* Authentic Hospital Building Banner */}
              <div className="relative w-full h-52 sm:h-64 bg-[#0D2420] border-b border-[#D2E6DC] overflow-hidden">
                <Image
                  src="/images/janta-hospital-exterior.webp"
                  alt="Janta Hospital daytime exterior building facade in Powergunj, Lohardaga"
                  fill
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
              </div>
              
              {/* Patient Care Steps */}
              <div className="p-5 sm:p-7 space-y-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold font-sans text-[#122421] tracking-tight">
                    जब आप Hospital आते हैं
                  </h3>
                  <p className="text-xs sm:text-sm text-[#2E4540] font-normal mt-1 leading-relaxed">
                    मरीज़ों और उनके परिवार के लिए आसान व्यवस्था — बिना किसी उलझन के तुरंत सही देखभाल:
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                  <div className="p-3.5 rounded-2xl bg-[#F4FAF7] border border-[#D2E6DC]">
                    <span className="text-xs font-semibold text-[#0A5C4F] uppercase tracking-wider block mb-1">
                      1. Reception
                    </span>
                    <p className="text-xs sm:text-sm text-[#2E4540] font-normal leading-snug">
                      Ground Floor पर पर्ची बनवाएँ और Token लें।
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#F4FAF7] border border-[#D2E6DC]">
                    <span className="text-xs font-semibold text-[#0A5C4F] uppercase tracking-wider block mb-1">
                      2. OPD Consultation
                    </span>
                    <p className="text-xs sm:text-sm text-[#2E4540] font-normal leading-snug">
                      बीमारी के अनुसार सही कमरे में Doctor को दिखाएँ।
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#F4FAF7] border border-[#D2E6DC]">
                    <span className="text-xs font-semibold text-[#0A5C4F] uppercase tracking-wider block mb-1">
                      3. Pharmacy &amp; Dressing
                    </span>
                    <p className="text-xs sm:text-sm text-[#2E4540] font-normal leading-snug">
                      बरामदे पर ही दवा दुकान और ड्रेसिंग उपलब्ध है।
                    </p>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#0A5C4F] hover:underline"
                  >
                    <span>Get Directions</span>
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </Link>
                  <span className="text-xs sm:text-sm text-[#2E4540] font-normal">Powergunj, Lohardaga</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column (5 cols): Two Asymmetric Supporting Healthcare Cards */}
          <div className="lg:col-span-5 flex flex-col gap-5 sm:gap-6 justify-between">
            
            {/* Card 1: 24-Hour Emergency Response (Muted Crimson Emergency Accent) */}
            <ScrollReveal direction="card" delay={80} className="flex-1 flex">
              <div className="group relative rounded-3xl p-5 sm:p-6 bg-[#FAFCFA] border border-[#ECCDD0] hover:border-[#DDA5AB] shadow-2xs overflow-hidden flex flex-col justify-between w-full card-hover-lift transition-all">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-[#A63F45]" />
                    <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#A63F45]">
                      24/7 Emergency Care
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-semibold text-[#122421] leading-tight">
                    24/7 Emergency Care
                  </h3>
                  <p className="text-sm text-[#2E4540] font-normal mt-1.5 leading-relaxed max-w-sm">
                    रात हो या दिन, अचानक तबीयत बिगड़ने, चोट या दर्द में तुरंत प्राथमिक देखभाल और इलाज।
                  </p>
                </div>

                <div className="pt-4 mt-3 border-t border-[#ECCDD0]/60 relative z-10 flex items-center justify-between">
                  <a
                    href={phoneHref}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#A63F45] text-white hover:bg-[#8E3339] font-semibold text-xs sm:text-sm shadow-xs transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-white" aria-hidden="true" />
                    <span>Emergency Call</span>
                  </a>
                  <span className="text-xs sm:text-sm text-[#A63F45] font-medium">Duty Doctors उपलब्ध</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 2: On-Site Medicine Dispensary */}
            <ScrollReveal direction="card" delay={140} className="flex-1 flex">
              <div className="group relative rounded-3xl p-5 sm:p-6 border border-[#B7D8CA] hover:border-[#8DBDAA] bg-white shadow-2xs overflow-hidden flex flex-col justify-between w-full card-hover-lift transition-all">
                
                <div className="flex items-start gap-4">
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-[#0D2420] border border-[#D2E6DC] overflow-hidden shrink-0">
                    <Image
                      src="/images/gallery-pharmacy.webp"
                      alt="Front porch medicine dispensary counter at Janta Hospital"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#0A5C4F] block mb-1">
                      Front Porch Counter
                    </span>
                    <h3 className="text-base sm:text-lg font-semibold font-sans text-[#122421] group-hover:text-[#0A5C4F] transition-colors leading-snug">
                      Hospital Pharmacy
                    </h3>
                    <p className="text-xs sm:text-sm text-[#2E4540] font-normal mt-1 leading-relaxed">
                      Doctor को दिखाने के तुरंत बाद सभी ज़रूरी दवाएँ और पट्टियाँ सीधे Hospital में मिल जाती हैं।
                    </p>
                  </div>
                </div>

                <div className="pt-3 mt-3 border-t border-[#D2E6DC]/60 flex items-center justify-between">
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-[#0A5C4F] hover:underline"
                  >
                    <span>Explore Services</span>
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </Link>
                  <span className="text-xs sm:text-sm text-[#2E4540] font-normal">Ground Floor</span>
                </div>
              </div>
            </ScrollReveal>

          </div>

        </div>

      </div>

      {/* Gallery → Services Wave Transition */}
      <GalleryToServicesWave />
    </section>
  );
}
