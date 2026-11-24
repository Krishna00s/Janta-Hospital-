import Image from "next/image";
import { Phone, Clock, MessageSquare, ArrowUpRight, ShieldAlert, CheckCircle2 } from "lucide-react";
import {
  hospitalConfig,
  emergencyPhone,
  emergencyPhoneHref,
  whatsappHref,
} from "@/content/hospital";

export function EmergencyQuickHelp() {

  return (
    <section
      id="emergency"
      aria-labelledby="emergency-heading"
      className="relative w-full py-10 sm:py-14 lg:py-16 bg-[#FAFCFA] text-[#122421] border-b border-[#E5EFEA]"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Restrained, High-Contrast Emergency Container */}
        <div className="rounded-3xl bg-white border-2 border-[#ECCDD0] hover:border-[#DDA5AB] shadow-sm p-6 sm:p-8 lg:p-10 transition-all card-hover-lift">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Column (7 cols on lg): Direct Immediate Urgency & Rapid Phone Actions */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5">
              
              {/* Eyebrow & Live Status Badge */}
              <div className="flex items-center gap-2.5 flex-wrap">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F9EDEE] text-[#A63F45] border border-[#ECCDD0] text-xs font-semibold tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-[#A63F45] animate-pulse" aria-hidden="true" />
                  24/7 Emergency Active
                </span>
                <span className="text-xs sm:text-sm text-[#475B57] font-medium">
                  Palmerganj, Lohardaga
                </span>
              </div>

              {/* Main Section Heading */}
              <div>
                <h2
                  id="emergency-heading"
                  className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-[#122421] leading-snug py-0.5"
                >
                  <span>मदद चाहिए? सीधे </span>
                  <span className="font-medium text-[#A63F45]">Call</span>
                  <span> करें।</span>
                </h2>
                <p className="mt-2 text-sm sm:text-base text-[#2E4540] leading-relaxed max-w-xl font-normal">
                  Lohardaga में 24 घंटे Emergency सेवा चालू है — अचानक तबीयत खराब होने, चोट या दर्द में बिना किसी पूर्व सूचना के सीधे Hospital आएँ या तुरंत कॉल करें।
                </p>
              </div>

              {/* Primary Call Action & WhatsApp Contact */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
                <a
                  href={emergencyPhoneHref}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#A63F45] text-white hover:bg-[#8E3339] font-semibold text-sm sm:text-base transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A63F45] shrink-0"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-white animate-call-ring" aria-hidden="true" />
                  <span>Emergency Call ({emergencyPhone})</span>
                </a>

                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-white text-[#0A5C4F] hover:bg-[#EAF6F1] font-semibold text-xs sm:text-sm transition-colors border border-[#B7D8CA] hover:border-[#0A5C4F]"
                >
                  <MessageSquare className="w-4 h-4 text-[#0A5C4F]" aria-hidden="true" />
                  <span>WhatsApp करें</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#0A5C4F]" aria-hidden="true" />
                </a>
              </div>

              {/* Three Rapid Patient Assurances */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-[#E5EFEA] text-xs sm:text-sm font-medium text-[#2E4540]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0A5C4F] shrink-0" aria-hidden="true" />
                  <span>बिना Appointment सीधे आएँ</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0A5C4F] shrink-0" aria-hidden="true" />
                  <span>Duty Doctors 24/7 मौजूद</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0A5C4F] shrink-0" aria-hidden="true" />
                  <span>First Aid व दवा हमेशा तैयार</span>
                </div>
              </div>

            </div>

            {/* Right Column (5 cols on lg): Authentic Hospital Entrance Photography */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md aspect-[16/11] rounded-2xl overflow-hidden border border-[#D2E6DC] shadow-xs bg-[#EDF7F3]">
                <Image
                  src="/images/gallery-entrance.webp"
                  alt="24/7 Emergency Ramp & Entrance - Janta Hospital Lohardaga"
                  fill
                  sizes="(min-width: 1024px) 38vw, 100vw"
                  className="object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-80" aria-hidden="true" />
                
                <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#A63F45] text-xs font-semibold border border-[#ECCDD0]">
                  <Clock className="w-3.5 h-3.5 text-[#A63F45]" aria-hidden="true" />
                  24 घंटे खुला
                </span>

                <span className="absolute bottom-2.5 left-3 text-xs text-white/95 font-medium drop-shadow-xs">
                  Main Emergency Ramp &amp; Porch
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
