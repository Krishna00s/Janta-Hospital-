import Link from "next/link";
import { Phone, MapPin, MessageSquare, ArrowUpRight } from "lucide-react";
import { hospitalConfig } from "@/content/hospital";
import { Container } from "@/components/shared/Container";
import { LocationToFooterWave } from "@/components/ui/SectionWaves";

// Custom Emerald Cross Emblem
function MedicalCrossIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M8.5 3C8.5 2.17157 9.17157 1.5 10 1.5H14C14.8284 1.5 15.5 2.17157 15.5 3V8.5H21C21.8284 8.5 22.5 9.17157 22.5 10V14C22.5 14.8284 21.8284 15.5 21 15.5H15.5V21C15.5 21.8284 14.8284 22.5 14 22.5H10C9.17157 22.5 8.5 21.8284 8.5 21V15.5H3C2.17157 15.5 1.5 14.8284 1.5 14V10C1.5 9.17157 2.17157 8.5 3 8.5H8.5V3Z"
        fill="#7CE4C9"
      />
    </svg>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();
  const phoneHref = `tel:${hospitalConfig.contact.phone.value}`;

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "हमारा Hospital", href: "/about" },
    { label: "इलाज और सुविधाएँ", href: "/services" },
    { label: "हमारे Doctors", href: "/doctors" },
    { label: "Hospital की तस्वीरें", href: "/gallery" },
    { label: "पता और Contact", href: "/contact" },
  ];

  return (
    <footer id="footer" className="relative w-full bg-[#073B32] text-white overflow-hidden">
      {/* 1. Dramatic Wave Transition from Location (#FFFFFF) into Deep Green (#073B32) */}
      <LocationToFooterWave />

      {/* 2. Main Editorial Footer Container (Efficient, Proportional Grid) */}
      <div className="relative z-20 pt-6 sm:pt-10 lg:pt-12 pb-6 sm:pb-8 bg-[#073B32]">
        <Container>
          
          {/* Integrated Master Grid: Editorial Message (Left) & Essential Directory (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 pb-8 sm:pb-10 border-b border-[#12584A] items-start">
            
            {/* Left Column (lg:col-span-6): Editorial Headline, Prompt & Primary Actions */}
            <div className="lg:col-span-6 space-y-4 sm:space-y-5">
              <div>
                <span className="inline-block px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[#0A5C4F] text-[#7CE4C9] text-[11px] sm:text-xs font-bold uppercase tracking-widest mb-3 border border-[#166E5E]">
                  24 घंटे Emergency सेवा
                </span>
                <h2 className="text-2xl min-[360px]:text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold tracking-tight text-white leading-tight">
                  <span>यहाँ जब आपको हमारी </span>
                  <span className="font-serif italic font-normal text-[#7CE4C9]">
                    ज़रूरत हो।
                  </span>
                </h2>
                <p className="mt-2 text-xs sm:text-sm lg:text-base text-[#C8E8DC] max-w-lg font-normal leading-relaxed">
                  Lohardaga के Palmerganj में 24 घंटे Emergency और रोज़ाना OPD की सुविधा।
                </p>
              </div>

              {/* Primary Contact Actions */}
              <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 pt-1">
                <a
                  href={phoneHref}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full bg-white text-[#073B32] font-bold text-xs sm:text-sm hover:bg-[#E8F5F1] transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7CE4C9]"
                >
                  <Phone className="w-3.5 h-3.5 text-[#0A5C4F]" aria-hidden="true" />
                  <span>अभी Call करें ({hospitalConfig.contact.phone.formatted})</span>
                </a>

                <a
                  href={hospitalConfig.contact.mapsUrl.value}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full bg-[#0A5C4F]/80 text-white font-bold text-xs sm:text-sm border border-[#1E7767] hover:bg-[#0A5C4F] transition-colors shadow-2xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7CE4C9]"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#7CE4C9]" aria-hidden="true" />
                  <span>रास्ता देखें</span>
                </a>
              </div>

              {/* 24/7 Status Indicator */}
              <div className="pt-1">
                <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#0A5C4F]/60 text-[11px] sm:text-xs text-[#7CE4C9] border border-[#166E5E]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7CE4C9] animate-pulse" />
                  24 घंटे Emergency सेवा चालू है
                </span>
              </div>
            </div>

            {/* Right Column (lg:col-span-6): Hospital Identity, Address & Fast Directory */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 pt-2 lg:pt-0">
              
              {/* Identity & Address */}
              <div className="space-y-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#0A5C4F] border border-[#1D7767] flex items-center justify-center shrink-0">
                    <MedicalCrossIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <span className="font-sans font-bold text-base sm:text-lg tracking-tight text-white block leading-tight">
                      {hospitalConfig.name.value}
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-semibold text-[#80C8B5] tracking-widest uppercase">
                      {hospitalConfig.locationName}
                    </span>
                  </div>
                </div>

                <div className="text-xs text-[#C8E8DC] space-y-1 leading-relaxed">
                  <p className="font-medium text-white">
                    {hospitalConfig.location.fullAddress}
                  </p>
                  <p className="text-[11px] text-[#80C8B5]">
                    Head Post Office के पीछे · Main Bus Stand के पास
                  </p>
                </div>

                {/* Quick Navigation Links */}
                <div className="pt-2">
                  <h3 className="text-[11px] font-bold uppercase tracking-wider text-[#7CE4C9] mb-2 font-sans">
                    Navigation
                  </h3>
                  <ul className="grid grid-cols-2 gap-x-2 gap-y-1 text-xs text-[#C8E8DC]">
                    {navLinks.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          prefetch={false}
                          className="inline-flex items-center min-h-[36px] py-1.5 px-1 -mx-1 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#7CE4C9] rounded"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Direct Contact Numbers & WhatsApp */}
              <div className="space-y-3">
                <h3 className="text-[11px] font-bold uppercase tracking-wider text-[#7CE4C9] font-sans">
                  सीधे संपर्क करें
                </h3>

                <div>
                  <span className="text-[11px] text-[#80C8B5] block mb-0.5">
                    Emergency और Reception
                  </span>
                  <a
                    href={phoneHref}
                    className="font-sans font-extrabold text-lg sm:text-xl text-white hover:text-[#7CE4C9] transition-colors"
                  >
                    {hospitalConfig.contact.phone.formatted}
                  </a>
                </div>

                <div className="pt-1.5 border-t border-[#12584A]">
                  <span className="text-[11px] text-[#80C8B5] block mb-1">
                    अन्य संपर्क नंबर:
                  </span>
                  <div className="flex flex-wrap gap-x-3 gap-y-1">
                    {hospitalConfig.contact.phone.alternatePhones.map((ph) => (
                      <a
                        key={ph}
                        href={`tel:+91${ph}`}
                        className="font-mono text-xs font-medium text-[#C8E8DC] hover:text-[#7CE4C9]"
                      >
                        +91 {ph}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="pt-1.5">
                  <a
                    href={hospitalConfig.contact.whatsapp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#7CE4C9] hover:underline"
                  >
                    <MessageSquare className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>WhatsApp पर बात करें (+91 {hospitalConfig.contact.whatsapp.value})</span>
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Bottom Row: Legal / Verified Credits */}
          <div className="pt-4 sm:pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] sm:text-xs text-[#80C8B5]">
            <p>
              © {currentYear} {hospitalConfig.name.value}, Lohardaga. All rights reserved.
            </p>
            <div className="flex items-center gap-3">
              <span>Palmerganj, Lohardaga</span>
              <span>•</span>
              <span>Near Bus Stand</span>
              <span>•</span>
              <span>Emergency 24x7</span>
            </div>
          </div>

        </Container>
      </div>
    </footer>
  );
}
