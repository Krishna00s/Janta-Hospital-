import Image from "next/image";
import Link from "next/link";
import { Clock, Phone, ShieldCheck, ArrowRight } from "lucide-react";
import { doctorsData } from "@/content/doctors";
import { hospitalConfig } from "@/content/hospital";
import { Badge } from "@/components/shared/Badge";
import { DoctorsToAboutWave } from "@/components/ui/SectionWaves";
import { BotanicalUnfurlingSpiral } from "@/components/ui/BotanicalDecorations";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

export function MeetOurDoctors() {
  const phoneHref = `tel:${hospitalConfig.contact.phone.value}`;

  return (
    <section
      id="doctors"
      aria-labelledby="doctors-heading"
      className="relative w-full pt-10 sm:pt-14 lg:pt-16 pb-0 bg-[#FCFDFD] text-[#122421] overflow-hidden"
    >
      {/* Abstract Botanical Unfurling Fern Spiral behind doctor layout */}
      <BotanicalUnfurlingSpiral />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 pb-8 sm:pb-12">
        
        {/* Section Header with Scroll Entrance */}
        <ScrollReveal direction="heading" className="max-w-2xl mb-8 sm:mb-10">
          <Badge variant="mint" dot className="mb-2 sm:mb-3">
            {doctorsData.eyebrow}
          </Badge>
          <h2
            id="doctors-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#122421] leading-tight"
          >
            {doctorsData.title}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#2E4540] font-semibold leading-relaxed">
            Lohardaga में आपकी सेहत और देखभाल के लिए समर्पित Duty Doctors और Medical Staff।
          </p>
        </ScrollReveal>

        {/* Strong Editorial Composition: Large Faceless Doctor Anchor + Patient Clarity Schedule */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column (5 cols on lg): Large Faceless Doctor Illustration Anchor */}
          <ScrollReveal direction="card" delay={0} className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl sm:rounded-[2.5rem] bg-gradient-to-b from-[#EBF6F2] via-[#E2F0EA] to-[#D5ECE2] p-4 sm:p-6 border border-[#BCE2D4] shadow-lg shadow-[#0A5C4F]/5 overflow-hidden flex flex-col justify-between">
              
              {/* Subtle top badge */}
              <div className="flex items-center justify-between gap-2 z-10">
                <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-xs font-bold text-[#0A5C4F] uppercase tracking-wider border border-[#CDEAE0] shadow-2xs">
                  Duty &amp; OPD Care
                </span>
                <span className="text-xs font-bold text-[#2E4540]">
                  Palmerganj
                </span>
              </div>

              {/* Large Faceless Doctor Vector Illustration */}
              <div className="relative w-full flex-1 my-2">
                <Image
                  src="/illustrations/doctor-physician.svg"
                  alt="Doctor at Janta Hospital Lohardaga"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-contain"
                  loading="lazy"
                />
              </div>

              {/* Bottom Reassurance Card */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-[#CDEAE0] text-center z-10 shadow-xs">
                <span className="font-sans font-bold text-sm sm:text-base text-[#122421] block">
                  अनुभवी एवं समर्पित डॉक्टर्स
                </span>
                <span className="text-xs sm:text-sm text-[#2E4540] font-semibold mt-0.5 block">
                  24 घंटे Emergency Coverage और दैनिक OPD
                </span>
              </div>

            </div>
          </ScrollReveal>

          {/* Right Column (7 cols on lg): "Doctor कब मिलेंगे?" OPD Timings & Reception Token Guide */}
          <ScrollReveal direction="card" delay={120} className="lg:col-span-7 space-y-5 sm:space-y-6">
            
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8F5F1] text-[#0A5C4F] text-xs font-bold uppercase tracking-wider mb-2 border border-[#C2EADB]">
                <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                <span>OPD &amp; Duty Roster</span>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#122421] tracking-tight">
                Doctor कब मिलेंगे?
              </h3>
              <p className="text-xs sm:text-sm text-[#2E4540] mt-1.5 leading-relaxed font-semibold">
                हॉस्पिटल में 24 घंटे Duty Doctor उपलब्ध रहते हैं। सामान्य परामर्श एवं विशेषज्ञ डॉक्टरों के मिलने का समय नीचे दिया गया है:
              </p>
            </div>

            {/* Timetable Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              
              {/* Morning Slot */}
              <div className="p-4 rounded-2xl bg-white border border-[#DCE8E2] shadow-2xs space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold text-[#0A5C4F] uppercase tracking-wider">
                    सुबह की OPD
                  </span>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#EBF6F2] text-[#0A5C4F] font-bold">
                    सोम – शनि
                  </span>
                </div>
                <h4 className="font-sans font-bold text-base text-[#122421]">
                  सुबह 9:00 से दोपहर 1:00
                </h4>
                <p className="text-sm text-[#2E4540] leading-relaxed font-semibold">
                  बुखार, सर्दी, पेट दर्द, शुगर व बीपी की नियमित जाँच और दवा।
                </p>
              </div>

              {/* Evening Slot */}
              <div className="p-4 rounded-2xl bg-white border border-[#DCE8E2] shadow-2xs space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold text-[#0A5C4F] uppercase tracking-wider">
                    शाम की OPD
                  </span>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#EBF6F2] text-[#0A5C4F] font-bold">
                    सोम – शनि
                  </span>
                </div>
                <h4 className="font-sans font-bold text-base text-[#122421]">
                  शाम 5:00 से रात 8:00
                </h4>
                <p className="text-sm text-[#2E4540] leading-relaxed font-semibold">
                  कामकाजी लोगों और परिवारों के लिए शाम को डॉक्टर से सलाह।
                </p>
              </div>

              {/* 24-Hour Emergency Duty */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#F9EDEE]/60 border border-[#ECCDD0] shadow-2xs space-y-2 sm:col-span-2 text-[#471E21]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#A63F45]" aria-hidden="true" />
                  <span className="text-xs sm:text-sm font-bold text-[#A63F45] uppercase tracking-wider">
                    24/7 Duty Doctor Emergency
                  </span>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#A63F45] text-white font-bold ml-auto shadow-2xs">
                    Continuous Coverage
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#471E21] font-semibold leading-relaxed">
                  Hospital में 24 घंटे Duty Doctors (RMO) मौजूद रहते हैं ताकि अचानक तबीयत बिगड़ने, चोट या दर्द में तुरंत प्राथमिक मदद मिल सके।
                </p>
              </div>

            </div>

            {/* Reception Token Guidance & Call CTA */}
            <div className="pt-2 space-y-3">
              <p className="text-xs sm:text-sm text-[#2E4540] leading-relaxed font-semibold">
                <strong className="text-[#122421]">Token कैसे लें:</strong> Doctors के मिलने का समय और Token रोज़ सुबह Ground Floor Reception पर तय होते हैं। आने से पहले Phone करके पुष्टि कर लें।
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
                <a
                  href={phoneHref}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#0A5C4F] text-white font-bold text-xs sm:text-sm hover:bg-[#07463C] transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A5C4F]"
                >
                  <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-200" aria-hidden="true" />
                  <span>Doctor की उपलब्धता जानें ({hospitalConfig.contact.phone.formatted})</span>
                </a>

                <Link
                  href="/doctors"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-3 text-xs sm:text-sm font-bold text-[#0A5C4F] hover:underline"
                >
                  <span>OPD Timing देखें</span>
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
              </div>
            </div>

          </ScrollReveal>

        </div>

      </div>

      {/* Doctors → About Hospital Wave Transition */}
      <DoctorsToAboutWave />
    </section>
  );
}
