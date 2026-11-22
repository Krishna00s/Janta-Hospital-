import Image from "next/image";
import { Phone, Clock, MessageSquare, ArrowUpRight } from "lucide-react";
import { hospitalConfig } from "@/content/hospital";
import { EmergencyToServicesWave } from "@/components/ui/SectionWaves";

export function EmergencyQuickHelp() {
  const { contact } = hospitalConfig;
  const phoneHref = `tel:${contact.phone.value}`;

  return (
    <section
      id="emergency"
      aria-labelledby="emergency-heading"
      className="relative w-full pt-8 sm:pt-12 lg:pt-14 pb-0 bg-[#FCFDFD] text-[#122421] overflow-hidden"
    >
      {/* Soft organic background contour */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 w-full h-full overflow-hidden select-none z-0"
      >
        <svg
          viewBox="0 0 1440 600"
          fill="none"
          preserveAspectRatio="none"
          className="w-full h-full opacity-70"
        >
          <path
            d="M -40,120 C 220,60 480,240 820,160 C 1140,80 1340,190 1480,140 L 1480,600 L -40,600 Z"
            fill="#EAF5F0"
          />
          <path
            d="M -20,240 C 280,180 560,320 920,260 C 1220,210 1380,280 1460,250 L 1460,600 L -20,600 Z"
            fill="#D5EFE5"
            opacity="0.6"
          />
        </svg>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 pb-8 sm:pb-12">
        <div className="rounded-3xl sm:rounded-[2.5rem] bg-gradient-to-br from-[#0A5C4F] via-[#085246] to-[#064238] text-white p-6 sm:p-9 lg:p-12 shadow-xl shadow-[#0A5C4F]/20 border border-[#167868] overflow-hidden relative">
          
          {/* Subtle background ambient wave highlight inside card */}
          <div className="pointer-events-none absolute -right-16 -top-16 w-80 h-80 rounded-full bg-white/10 blur-2xl" aria-hidden="true" />
          <div className="pointer-events-none absolute -left-16 -bottom-16 w-80 h-80 rounded-full bg-[#75BCA5]/20 blur-2xl" aria-hidden="true" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            
            {/* Left Column: Expressive Emergency Illustration (5 cols on lg) */}
            <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
              <div className="relative w-full max-w-md aspect-[4/3] rounded-2xl sm:rounded-3xl bg-white/95 backdrop-blur-md p-2.5 sm:p-3.5 border border-white/50 shadow-md">
                <Image
                  src="/illustrations/service-emergency-24h.svg"
                  alt="24/7 Emergency चिकित्सा सहायता - Janta Hospital Lohardaga"
                  fill
                  sizes="(min-width: 1024px) 38vw, 100vw"
                  className="object-contain p-2"
                />
                <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F9EDEE] text-[#A63F45] border border-[#ECCDD0] text-xs font-bold uppercase tracking-wider shadow-xs">
                  <Clock className="w-3.5 h-3.5 text-[#A63F45]" aria-hidden="true" />
                  24/7 Emergency
                </span>
              </div>
            </div>

            {/* Right Column: Direct Immediate Urgency & Rapid Phone Actions (7 cols on lg) */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-4 sm:space-y-6">
              
              {/* Eyebrow & Live Status with small muted crimson badge */}
              <div className="flex items-center gap-2.5 flex-wrap">
                <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F9EDEE] text-[#A63F45] border border-[#ECCDD0] text-xs font-bold uppercase tracking-wider shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-[#A63F45] animate-ping" />
                  Emergency Helpline चालू है
                </span>
                <span className="text-xs sm:text-sm text-[#A9DCCB] font-semibold">
                  Palmerganj, Lohardaga
                </span>
              </div>

              {/* Main Section Heading */}
              <div>
                <h2
                  id="emergency-heading"
                  className="text-2xl sm:text-3xl lg:text-4xl xl:text-[2.65rem] font-extrabold tracking-tight text-white leading-tight"
                >
                  मदद चाहिए? सीधे Call करें।
                </h2>
                <p className="mt-2 text-sm sm:text-base text-white leading-relaxed max-w-xl font-semibold">
                  Lohardaga में 24 घंटे Emergency सेवा चालू है — अचानक तबीयत खराब होने, चोट या दर्द में बिना झिझक तुरंत संपर्क करें या सीधे Hospital आएँ।
                </p>
              </div>

              {/* Primary Call Action & WhatsApp Contact */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
                <a
                  href={phoneHref}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 sm:py-4 rounded-full bg-white text-[#0A5C4F] hover:bg-[#E0F3EC] font-bold text-sm sm:text-base transition-colors shadow-lg shadow-black/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white shrink-0"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[#A63F45] fill-current animate-call-ring" aria-hidden="true" />
                  <span>अभी Call करें ({contact.phone.formatted})</span>
                </a>

                <a
                  href={contact.whatsapp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 sm:py-4 rounded-full bg-[#084F43] text-white hover:bg-[#074338] font-bold text-xs sm:text-sm transition-colors border border-[#167868] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <MessageSquare className="w-4 h-4 text-[#A9DCCB]" aria-hidden="true" />
                  <span>WhatsApp करें</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-white" aria-hidden="true" />
                </a>
              </div>

              {/* Three Rapid Patient Guarantees */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-3 border-t border-[#167868] text-xs sm:text-sm font-bold text-[#E0F3EC]">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A9DCCB] shrink-0" />
                  <span>बिना Appointment सीधे आएँ</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A9DCCB] shrink-0" />
                  <span>Duty Doctors हमेशा मौजूद</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A9DCCB] shrink-0" />
                  <span>First Aid व दवा उपलब्ध</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* Emergency → Medical Services Wave Transition */}
      <EmergencyToServicesWave />
    </section>
  );
}
