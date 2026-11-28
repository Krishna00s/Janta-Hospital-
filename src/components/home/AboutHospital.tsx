import Image from "next/image";
import Link from "next/link";
import { Clock, HeartPulse, ArrowRight, Building2, Phone } from "lucide-react";
import { hospitalConfig, primaryPhoneHref } from "@/content/hospital";
import { Badge } from "@/components/shared/Badge";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { BotanicalOrganicSweep } from "@/components/ui/BotanicalDecorations";

export function AboutHospital() {
  const phoneHref = primaryPhoneHref;

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative w-full py-12 sm:py-16 lg:py-20 bg-[#F8FAF9] text-[#122421] border-b border-[#E5EFEA] overflow-hidden"
    >
      {/* Abstract Botanical Organic Sweep behind content with restrained opacity */}
      <BotanicalOrganicSweep className="opacity-20 sm:opacity-25" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* Section Heading with Harmonized Mixed-Script Typography */}
        <ScrollReveal direction="heading" className="max-w-2xl mb-8 sm:mb-10">
          <Badge variant="mint" dot className="mb-2 sm:mb-3">
            ABOUT JANTA HOSPITAL
          </Badge>
          <h2
            id="about-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-[#122421] leading-snug py-0.5"
          >
            <span>About </span>
            <span className="font-serif italic font-normal text-[#0A5C4F]">Janta Hospital</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#2E4540] font-normal leading-relaxed">
            Accessible, patient-centered healthcare for families in Lohardaga and surrounding rural communities. (Powergunj, Lohardaga में एक सुलभ और भरोसेमंद स्वास्थ्य केंद्र।)
          </p>
        </ScrollReveal>

        {/* 2-Column Asymmetric Composition: Honest Story + Real Exterior Photography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column (7 cols on lg): Short Genuine Introduction & Patient Pillars */}
          <ScrollReveal direction="card" delay={0} className="lg:col-span-7 space-y-5 sm:space-y-6">
            <div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#122421] tracking-tight leading-snug">
                <span>Accessible &amp; Trusted Healthcare </span>
                <span className="font-serif italic font-normal text-[#0A5C4F]">
                  for Every Family.
                </span>
              </h3>
              <p className="mt-3 text-xs sm:text-sm lg:text-base text-[#2E4540] font-normal leading-relaxed">
                Located near the Head Post Office in Powergunj, Lohardaga, Janta Hospital serves as a dependable medical institution for our local community. Every patient receives honest medical advice, 24-hour emergency care, and prescribed pharmaceuticals under one roof — यहाँ हर मरीज़ को 24 घंटे आपातकालीन सेवा और आवश्यक दवाएँ एक ही स्थान पर उपलब्ध कराई जाती हैं।
              </p>
            </div>

            {/* Three Simple Patient Guarantees with Consistent Green Borders */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-[#B7D8CA] hover:border-[#8DBDAA] shadow-2xs space-y-1 transition-all">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-[#0A5C4F]">
                  <Building2 className="w-3.5 h-3.5 text-[#0A5C4F]" aria-hidden="true" />
                  <span>Ground Floor</span>
                </div>
                <h4 className="font-sans font-semibold text-sm text-[#122421]">
                  Easy Ground Floor Access
                </h4>
                <p className="text-xs sm:text-sm text-[#2E4540] font-normal leading-snug">
                  Immediate reception, OPD tokens, and on-site pharmacy — प्रवेश करते ही टोकन व दवा काउंटर
                </p>
              </div>

              <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-[#B7D8CA] hover:border-[#8DBDAA] shadow-2xs space-y-1 transition-all">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-[#0A5C4F]">
                  <Clock className="w-3.5 h-3.5 text-[#0A5C4F]" aria-hidden="true" />
                  <span>24/7 Coverage</span>
                </div>
                <h4 className="font-sans font-semibold text-sm text-[#122421]">
                  24/7 Duty Doctors
                </h4>
                <p className="text-xs sm:text-sm text-[#2E4540] font-normal leading-snug">
                  Day and night on-site resident medical officers. (24 घंटे ड्यूटी डॉक्टर की उपस्थिति)
                </p>
              </div>

              <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-[#B7D8CA] hover:border-[#8DBDAA] shadow-2xs space-y-1 transition-all">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-[#0A5C4F]">
                  <HeartPulse className="w-3.5 h-3.5 text-[#0A5C4F]" aria-hidden="true" />
                  <span>Care Guidance</span>
                </div>
                <h4 className="font-sans font-semibold text-sm text-[#122421]">
                  Compassionate Guidance
                </h4>
                <p className="text-xs sm:text-sm text-[#2E4540] font-normal leading-snug">
                  Honest diagnosis, genuine medicines, and referral support — ईमानदार सलाह व मार्गदर्शन
                </p>
              </div>
            </div>

            {/* Navigation and Call Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#0A5C4F] text-white font-semibold text-xs sm:text-sm hover:bg-[#07463C] transition-colors shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A5C4F]"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>

              <a
                href={phoneHref}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white text-[#0A5C4F] font-semibold text-xs sm:text-sm border border-[#B7D8CA] hover:bg-[#E8F5F1] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#0A5C4F]" aria-hidden="true" />
                <span>Call Reception</span>
              </a>
            </div>

          </ScrollReveal>

          {/* Right Column (5 cols on lg): Authentic Hospital Building Photograph */}
          <ScrollReveal direction="card" delay={120} className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md aspect-[4/3] rounded-3xl overflow-hidden border border-[#B7D8CA] hover:border-[#8DBDAA] shadow-xs bg-white card-hover-lift">
              <Image
                src="/images/janta-hospital-exterior.webp"
                alt="Janta Hospital Daytime Exterior Building Facade at Powergunj Lohardaga"
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" aria-hidden="true" />
              <span className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-xs font-semibold text-[#0A5C4F] uppercase tracking-wider border border-[#B7D8CA] shadow-2xs">
                Powergunj, Lohardaga
              </span>
              <span className="absolute bottom-3 left-3.5 text-xs text-white/95 font-medium drop-shadow-xs">
                Head Post Office के ठीक पीछे
              </span>
            </div>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
}
