import Link from "next/link";
import { Phone, MapPin, MessageSquare, ArrowUpRight } from "lucide-react";
import {
  hospitalConfig,
  primaryPhone,
  primaryPhoneHref,
  emergencyPhone,
  emergencyPhoneHref,
  whatsappHref,
} from "@/content/hospital";
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
        fill="#75BCA5"
      />
    </svg>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();
  const phoneHref = `tel:${hospitalConfig.contact.phone.value}`;

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Doctors", href: "/doctors" },
    { label: "About", href: "/about" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer id="footer" className="relative w-full bg-[#0A5C4F] text-white overflow-hidden">
      {/* 1. Restrained Asymmetrical Organic Transition into #0A5C4F */}
      <LocationToFooterWave />

      {/* 2. Main Editorial Footer Container */}
      <div className="relative z-20 pt-6 sm:pt-8 lg:pt-10 pb-8 sm:pb-12 bg-[#0A5C4F]">
        <Container>
          
          {/* Top Section: Strong Editorial Heading & Primary Contact Actions */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8 pb-8 sm:pb-10 border-b border-[#147061]">
            <div className="max-w-xl space-y-2 sm:space-y-3">
              <span className="text-xs font-medium uppercase tracking-widest text-[#A9DCCB] block">
                Janta Hospital • Lohardaga
              </span>
              <h2 className="text-2xl min-[360px]:text-3xl sm:text-4xl lg:text-[2.6rem] font-semibold tracking-tight text-white leading-tight">
                <span>ज़रूरत के समय, </span>
                <span className="font-serif italic font-normal text-[#E0F3EC]">
                  आपके साथ।
                </span>
              </h2>
              <p className="text-sm sm:text-base text-[#E0F3EC] font-normal leading-relaxed">
                Lohardaga के Palmerganj में 24 घंटे Emergency सेवा, अनुभवी Doctors और सभी ज़रूरी दवाएँ एक ही जगह।
              </p>
            </div>

            {/* Clear Primary Contact Actions */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 shrink-0">
              <a
                href={primaryPhoneHref}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white text-[#0A5C4F] font-semibold text-xs sm:text-sm hover:bg-[#E0F3EC] transition-colors shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <Phone className="w-4 h-4 text-[#A63F45]" aria-hidden="true" />
                <span>अभी Call करें ({primaryPhone})</span>
              </a>

              <a
                href={hospitalConfig.contact.mapsUrl.value}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#084F43] text-white font-medium text-xs sm:text-sm border border-[#167868] hover:bg-[#074338] transition-colors shadow-2xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <MapPin className="w-4 h-4 text-[#A9DCCB]" aria-hidden="true" />
                <span>रास्ता देखें (Google Maps)</span>
              </a>
            </div>
          </div>

          {/* Middle Section: Spacious, Balanced 3-Column Layout on Desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 py-8 sm:py-10 border-b border-[#147061] items-start">
            
            {/* Column 1: Hospital Identity & Verified Location (4 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#084F43] border border-[#167868] flex items-center justify-center shrink-0">
                  <MedicalCrossIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <span className="font-sans font-semibold text-lg sm:text-xl tracking-tight text-white block leading-tight">
                    {hospitalConfig.name.value}
                  </span>
                  <span className="text-xs font-medium text-[#A9DCCB] tracking-widest uppercase">
                    {hospitalConfig.locationName}
                  </span>
                </div>
              </div>

              <div className="text-xs sm:text-sm text-[#E0F3EC] space-y-1.5 leading-relaxed max-w-sm">
                <p className="font-semibold text-white">
                  {hospitalConfig.location.fullAddress}
                </p>
                <p className="text-xs text-[#A8D8C8] font-normal">
                  Head Post Office के ठीक पीछे • Main Bus Stand के पास
                </p>
              </div>

              <div className="pt-1">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#084F43] text-xs font-medium text-[#E0F3EC] border border-[#167868]">
                  <span className="w-2 h-2 rounded-full bg-[#A9DCCB]" />
                  24 घंटे Emergency सेवा उपलब्ध
                </span>
              </div>
            </div>

            {/* Column 2: Useful Navigation (3 cols) */}
            <div className="lg:col-span-3 space-y-3">
              <h3 className="text-xs font-medium uppercase tracking-wider text-[#A9DCCB]">
                Hospital Directory
              </h3>
              <ul className="space-y-1 text-xs sm:text-sm font-normal text-[#E0F3EC]">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      prefetch={false}
                      className="inline-flex items-center py-1.5 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#A9DCCB] rounded"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Direct Contact Numbers & WhatsApp (4 cols) */}
            <div className="lg:col-span-4 space-y-4">
              <div>
                <h3 className="text-xs font-medium uppercase tracking-wider text-[#A9DCCB] mb-1.5">
                  Hospital Enquiries
                </h3>
                <a
                  href={primaryPhoneHref}
                  className="font-sans font-semibold text-xl sm:text-2xl text-white hover:text-[#E0F3EC] transition-colors block"
                >
                  {primaryPhone}
                </a>
                <span className="text-xs text-[#E0F3EC] font-normal mt-0.5 block">
                  सामान्य पूछताछ, OPD व डॉक्टर परामर्श
                </span>
              </div>

              {/* Secondary & Emergency Line */}
              <div className="pt-2 border-t border-[#147061]">
                <h3 className="text-xs font-medium uppercase tracking-wider text-[#FFD1D8] mb-1.5 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF7588]" />
                  Emergency Contact (24/7)
                </h3>
                <a
                  href={emergencyPhoneHref}
                  className="font-sans font-semibold text-lg sm:text-xl text-white hover:text-[#FFD2D8] transition-colors block"
                >
                  {emergencyPhone}
                </a>
                <span className="text-xs text-[#E0F3EC] font-normal mt-0.5 block">
                  24 घंटे आपातकालीन चिकित्सा एवं ट्रॉमा सहायता
                </span>
              </div>

              <div className="pt-1">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#A9DCCB] hover:text-[#E0F3EC] transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-[#A9DCCB]" aria-hidden="true" />
                  <span>WhatsApp पर संदेश भेजें</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>

          </div>

          {/* Bottom Section: Legal Copyright & Agency Signature */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-[#A8D8C8] font-normal">
            <p className="text-center sm:text-left">
              © {currentYear} {hospitalConfig.name.value}. All rights reserved.
            </p>
            <p className="text-center sm:text-right text-[#A8D8C8]">
              <span>Designed &amp; Developed by </span>
              <a
                href="https://zenova-enterprises.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-white hover:text-[#7CE4C9] transition-colors underline decoration-[#167868] hover:decoration-[#7CE4C9] underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7CE4C9] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A5C4F] rounded-xs"
              >
                Zenova Enterprises
              </a>
            </p>
          </div>

        </Container>
      </div>
    </footer>
  );
}
