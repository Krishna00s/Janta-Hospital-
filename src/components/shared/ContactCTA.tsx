import Link from "next/link";
import { Phone, MessageSquare, MapPin, ArrowUpRight } from "lucide-react";
import {
  hospitalConfig,
  primaryPhone,
  primaryPhoneHref,
  whatsappHref,
} from "@/content/hospital";
import { Container } from "@/components/shared/Container";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

interface ContactCTAProps {
  className?: string;
}

export function ContactCTA({ className = "" }: ContactCTAProps) {
  return (
    <section className={`w-full py-10 sm:py-14 bg-[#F2F8F5] relative overflow-hidden ${className}`}>
      {/* Decorative Mint Wavelet */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-10 -right-10 w-72 h-72 rounded-full bg-[#E0F3EC] blur-2xl opacity-60"
      />

      <Container className="relative z-10">
        <ScrollReveal direction="card">
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#E0EFEA] shadow-sm flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-10">
            
            {/* Text Content */}
            <div className="space-y-2 sm:space-y-3 max-w-xl">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F5F1] text-[#0A5C4F] text-xs font-medium uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0A5C4F] animate-pulse" aria-hidden="true" />
                Doctor से बात करनी है?
              </span>

              <h2 className="text-2xl sm:text-3xl font-semibold text-[#122421] tracking-tight leading-tight">
                <span>मदद चाहिए या </span>
                <span className="font-serif italic font-normal text-[#0A5C4F]">
                  Hospital आना है?
                </span>
              </h2>

              <p className="text-sm sm:text-base text-[#2E4540] font-normal leading-relaxed">
                Palmerganj, Lohardaga में 24/7 Emergency Care और रोज़ाना Doctor OPD उपलब्ध है।
                Doctor की जानकारी के लिए Phone करें या तुरंत इलाज के लिए सीधे Hospital आएँ।
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <a
                href={primaryPhoneHref}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#0A5C4F] text-white font-semibold text-sm hover:bg-[#07463C] transition-colors shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A5C4F]"
              >
                <Phone className="w-4 h-4 text-white" aria-hidden="true" />
                <span>अभी Call करें ({primaryPhone})</span>
              </a>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#E8F5F1] text-[#0A5C4F] font-medium text-sm hover:bg-[#D5EFE6] transition-colors border border-[#A9DCCB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A5C4F]"
              >
                <MessageSquare className="w-4 h-4 text-[#0A5C4F]" aria-hidden="true" />
                <span>WhatsApp पर बात करें</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#0A5C4F]" aria-hidden="true" />
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white text-[#122421] font-medium text-sm hover:bg-gray-50 transition-colors border border-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A5C4F]"
              >
                <MapPin className="w-4 h-4 text-[#475B57]" aria-hidden="true" />
                <span>Hospital का पता</span>
              </Link>
            </div>

          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
