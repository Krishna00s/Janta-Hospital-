import Image from "next/image";
import Link from "next/link";
import { Phone, MapPin, ArrowUpRight, Clock, ShieldCheck, HeartPulse } from "lucide-react";
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
      {/* Rich Abstract Organic Botanical Vine flowing visibly behind content */}
      <BotanicalGrowingVine />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 pb-8 sm:pb-12">
        
        {/* Patient-Centric Header */}
        <ScrollReveal direction="heading" className="max-w-2xl mb-6 sm:mb-8">
          <Badge variant="mint" dot className="mb-2 sm:mb-3">
            JANTA HOSPITAL
          </Badge>
          <h2
            id="gallery-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#122421] leading-tight"
          >
            Janta Hospital की एक झलक
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#475B57] leading-relaxed">
            Lohardaga के Palmerganj में आपकी सेहत का पूरा ध्यान — जानिए Hospital आने पर आपको क्या सुविधा मिलती है।
          </p>
        </ScrollReveal>

        {/* Asymmetric Editorial Composition (Wide Patient Guide + 2 Stacked Focus Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
          
          {/* Left Column (7 cols): Wide Illustrated Patient Journey Feature */}
          <ScrollReveal direction="card" delay={0} className="lg:col-span-7 flex">
            <div className="group relative rounded-3xl overflow-hidden border border-[#D5EAE0] shadow-xs bg-white w-full card-hover-lift flex flex-col justify-between">
              
              {/* Generous Illustration Banner */}
              <div className="relative w-full h-52 sm:h-64 bg-[#EDF7F3] border-b border-[#DDEFE8] overflow-hidden">
                <Image
                  src="/illustrations/about-hospital-care.svg"
                  alt="Janta Hospital patient care and consultation illustration"
                  fill
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
              </div>
              
              {/* Patient Care Steps */}
              <div className="p-5 sm:p-7 space-y-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold font-sans text-[#122421] tracking-tight">
                    जब आप Hospital आते हैं
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475B57] mt-1 leading-relaxed">
                    मरीज़ों और उनके परिवार के लिए आसान व्यवस्था — बिना किसी उलझन के तुरंत सही देखभाल:
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                  <div className="p-3.5 rounded-2xl bg-[#F4FAF7] border border-[#E0EFE8]">
                    <span className="text-[11px] font-extrabold text-[#0A5C4F] uppercase tracking-wider block mb-1">
                      1. Reception
                    </span>
                    <p className="text-xs text-[#3B524E] font-medium leading-snug">
                      Ground Floor पर पर्ची बनवाएँ और Token लें।
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#F4FAF7] border border-[#E0EFE8]">
                    <span className="text-[11px] font-extrabold text-[#0A5C4F] uppercase tracking-wider block mb-1">
                      2. Doctor से मिलना
                    </span>
                    <p className="text-xs text-[#3B524E] font-medium leading-snug">
                      बीमारी के अनुसार सही कमरे में Doctor को दिखाएँ।
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#F4FAF7] border border-[#E0EFE8]">
                    <span className="text-[11px] font-extrabold text-[#0A5C4F] uppercase tracking-wider block mb-1">
                      3. दवा और पट्टी
                    </span>
                    <p className="text-xs text-[#3B524E] font-medium leading-snug">
                      बरामदे पर ही दवा दुकान और ड्रेसिंग उपलब्ध है।
                    </p>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0A5C4F] hover:underline"
                  >
                    <span>Hospital का रास्ता देखें</span>
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </Link>
                  <span className="text-[11px] text-[#6B7F7B]">Palmerganj, Lohardaga</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column (5 cols): Two Asymmetric Supporting Healthcare Cards */}
          <div className="lg:col-span-5 flex flex-col gap-5 sm:gap-6 justify-between">
            
            {/* Card 1: 24-Hour Emergency Response */}
            <ScrollReveal direction="card" delay={80} className="flex-1 flex">
              <div className="group relative rounded-3xl p-5 sm:p-6 bg-gradient-to-br from-[#0A5C4F] to-[#074B40] text-white shadow-md overflow-hidden flex flex-col justify-between w-full card-hover-lift">
                
                {/* Background Subtle First-Aid Kit Illustration */}
                <div className="pointer-events-none absolute -right-4 -bottom-4 w-44 h-36 opacity-30 overflow-hidden">
                  <Image
                    src="/illustrations/service-emergency-24h.svg"
                    alt="Emergency care medical illustration"
                    fill
                    className="object-contain object-right-bottom"
                  />
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-[#7CE4C9] animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-200">
                      24 घंटे सेवा
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-extrabold text-white leading-tight">
                    24 घंटे Emergency सेवा
                  </h3>
                  <p className="text-xs sm:text-sm text-emerald-100/90 mt-1.5 leading-relaxed max-w-sm">
                    रात हो या दिन, अचानक तबीयत बिगड़ने, चोट या दर्द में तुरंत प्राथमिक देखभाल और इलाज।
                  </p>
                </div>

                <div className="pt-4 mt-3 border-t border-white/20 relative z-10 flex items-center justify-between">
                  <a
                    href={phoneHref}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-[#0A5C4F] font-bold text-xs hover:bg-emerald-50 transition-colors shadow-xs"
                  >
                    <Phone className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Emergency Call करें</span>
                  </a>
                  <span className="text-[11px] text-emerald-200 font-medium">Duty Doctors उपलब्ध</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 2: On-Site Medicine Dispensary */}
            <ScrollReveal direction="card" delay={140} className="flex-1 flex">
              <div className="group relative rounded-3xl p-5 sm:p-6 border border-[#D5EAE0] bg-white shadow-xs overflow-hidden flex flex-col justify-between w-full card-hover-lift">
                
                <div className="flex items-start gap-4">
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-[#EDF7F3] border border-[#CDEAE0] overflow-hidden shrink-0">
                    <Image
                      src="/illustrations/facility-pharmacy-dispensary.svg"
                      alt="Dispensary counter medical illustration"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#0A5C4F] block mb-1">
                      Front Porch Counter
                    </span>
                    <h3 className="text-base sm:text-lg font-bold font-sans text-[#122421] group-hover:text-[#0A5C4F] transition-colors leading-snug">
                      Hospital में दवा दुकान
                    </h3>
                    <p className="text-xs text-[#475B57] mt-1 leading-relaxed">
                      Doctor को दिखाने के तुरंत बाद सभी ज़रूरी दवाएँ और पट्टियाँ सीधे Hospital में मिल जाती हैं।
                    </p>
                  </div>
                </div>

                <div className="pt-3 mt-3 border-t border-[#EEF3F0] flex items-center justify-between">
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#0A5C4F] hover:underline"
                  >
                    <span>दवा और अन्य सेवाएँ देखें</span>
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </Link>
                  <span className="text-[11px] text-[#6B7F7B]">Ground Floor</span>
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
