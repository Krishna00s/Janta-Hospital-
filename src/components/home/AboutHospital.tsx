import Image from "next/image";
import Link from "next/link";
import { Clock, HeartPulse, ArrowRight, Building2, Phone } from "lucide-react";
import { hospitalConfig } from "@/content/hospital";
import { Badge } from "@/components/shared/Badge";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { AboutToLocationWave } from "@/components/ui/SectionWaves";
import { BotanicalOrganicSweep } from "@/components/ui/BotanicalDecorations";

export function AboutHospital() {
  const phoneHref = `tel:${hospitalConfig.contact.phone.value}`;

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative w-full pt-10 sm:pt-14 lg:pt-16 pb-0 bg-[#F8FAF9] text-[#122421] overflow-hidden"
    >
      {/* Abstract Botanical Organic Sweep behind content */}
      <BotanicalOrganicSweep />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 pb-8 sm:pb-12">
        
        {/* Section Heading */}
        <ScrollReveal direction="heading" className="max-w-2xl mb-8 sm:mb-10">
          <Badge variant="mint" dot className="mb-2 sm:mb-3">
            ABOUT JANTA HOSPITAL
          </Badge>
          <h2
            id="about-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#122421] leading-tight"
          >
            Janta Hospital के बारे में
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#2E4540] font-semibold leading-relaxed">
            Palmerganj, Lohardaga में स्थानीय और ग्रामीण परिवारों के लिए एक सुलभ और भरोसेमंद स्वास्थ्य केंद्र।
          </p>
        </ScrollReveal>

        {/* 2-Column Asymmetric Composition: Honest Story + Medical Illustration */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column (7 cols on lg): Short Genuine Introduction & Patient Pillars */}
          <ScrollReveal direction="card" delay={0} className="lg:col-span-7 space-y-5 sm:space-y-6">
            <div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#122421] tracking-tight leading-snug">
                <span>हर परिवार के लिए आसान और </span>
                <span className="font-serif italic font-normal text-[#0A5C4F]">
                  भरोसेमंद इलाज।
                </span>
              </h3>
              <p className="mt-3 text-xs sm:text-sm lg:text-base text-[#2E4540] font-semibold leading-relaxed">
                Lohardaga के Palmerganj में Head Post Office के ठीक पीछे स्थित Janta Hospital स्थानीय लोगों और आस-पास के ग्रामीण क्षेत्रों के लिए एक भरोसेमंद स्वास्थ्य केंद्र है। यहाँ हर मरीज़ को तुरंत सही सलाह, 24 घंटे आपातकालीन सेवा और आवश्यक दवाएँ एक ही स्थान पर उपलब्ध कराई जाती हैं।
              </p>
            </div>

            {/* Three Simple Patient Guarantees */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <div className="p-4 rounded-2xl bg-white border border-[#DCE8E2] shadow-2xs space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#0A5C4F]">
                  <Building2 className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Ground Floor</span>
                </div>
                <h4 className="font-sans font-bold text-sm text-[#122421]">
                  आसान पहुँच
                </h4>
                <p className="text-xs sm:text-sm text-[#2E4540] font-semibold leading-snug">
                  प्रवेश करते ही Reception, पर्ची, टोकन और दवा काउंटर।
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#F9EDEE]/60 border border-[#ECCDD0] shadow-2xs space-y-1 text-[#471E21]">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#A63F45]">
                  <Clock className="w-3.5 h-3.5 text-[#A63F45]" aria-hidden="true" />
                  <span>24/7 Duty Doctor</span>
                </div>
                <h4 className="font-sans font-bold text-sm text-[#A63F45]">
                  Emergency Coverage
                </h4>
                <p className="text-xs sm:text-sm text-[#471E21] font-semibold leading-snug">
                  रात हो या दिन, Duty Doctors हमेशा प्राथमिक इलाज के लिए मौजूद।
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#DCE8E2] shadow-2xs space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#0A5C4F]">
                  <HeartPulse className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>सही सलाह</span>
                </div>
                <h4 className="font-sans font-bold text-sm text-[#122421]">
                  उचित मार्गदर्शन
                </h4>
                <p className="text-xs sm:text-sm text-[#2E4540] font-semibold leading-snug">
                  ईमानदार जाँच, दवा और आवश्यकता पड़ने पर सही केंद्र के लिए मार्गदर्शन।
                </p>
              </div>
            </div>

            {/* Navigation and Call Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#0A5C4F] text-white font-bold text-xs sm:text-sm hover:bg-[#07463C] transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A5C4F]"
              >
                <span>Hospital के बारे में जानें</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>

              <a
                href={phoneHref}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white text-[#0A5C4F] font-bold text-xs sm:text-sm border border-[#CDEAE0] hover:bg-[#E8F5F1] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#0A5C4F]" aria-hidden="true" />
                <span>Reception पर बात करें</span>
              </a>
            </div>

          </ScrollReveal>

          {/* Right Column (5 cols on lg): Large Hospital Care Illustration */}
          <ScrollReveal direction="card" delay={120} className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md aspect-[4/3] sm:aspect-[4/3] rounded-3xl overflow-hidden border border-[#D2E7DC] shadow-md bg-white">
              <Image
                src="/illustrations/about-hospital-care.svg"
                alt="Janta Hospital healthcare and patient assistance illustration"
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover"
                loading="lazy"
              />
              <span className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-xs font-bold text-[#0A5C4F] uppercase tracking-wider border border-[#CDEAE0] shadow-2xs">
                Palmerganj, Lohardaga
              </span>
            </div>
          </ScrollReveal>

        </div>

      </div>

      {/* About Hospital → Location & Contact Wave Transition */}
      <AboutToLocationWave />
    </section>
  );
}
