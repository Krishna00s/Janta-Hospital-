import Link from "next/link";
import { HeartPulse, MapPin, Phone } from "lucide-react";
import { hospitalConfig } from "@/content/hospital";
import { Container } from "@/components/shared/Container";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="footer"
      className="bg-[#F7FAF8] border-t border-[#E2ECE9] text-[#122421] pt-16 pb-12 transition-colors"
    >
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-[#E2ECE9]">
          
          {/* Identity & Mission */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#0A5C4F] flex items-center justify-center text-white">
                <HeartPulse className="w-4 h-4" aria-hidden="true" />
              </div>
              <span className="font-sans font-bold text-xl text-[#122421]">
                {hospitalConfig.name.value}
              </span>
            </div>
            <p className="text-sm text-[#475B57] max-w-md leading-relaxed">
              {hospitalConfig.shortIntro}
            </p>
            <div className="text-xs text-[#6B7F7B]">
              <span>Official digital information portal • Lohardaga, Jharkhand</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0A5C4F] mb-4 font-sans">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-[#475B57]">
              <li>
                <Link href="/" className="hover:text-[#0A5C4F] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-[#0A5C4F] transition-colors">
                  About Hospital
                </Link>
              </li>
              <li>
                <Link href="/#departments" className="hover:text-[#0A5C4F] transition-colors">
                  Departments & Services
                </Link>
              </li>
              <li>
                <Link href="/#facilities" className="hover:text-[#0A5C4F] transition-colors">
                  Facilities
                </Link>
              </li>
              <li>
                <Link href="/#doctors" className="hover:text-[#0A5C4F] transition-colors">
                  Doctors
                </Link>
              </li>
            </ul>
          </div>

          {/* Location & Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0A5C4F] mb-4 font-sans">
              Contact & Location
            </h4>
            <div className="space-y-2.5 text-sm text-[#475B57]">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#0A5C4F] shrink-0" aria-hidden="true" />
                <a
                  href={`tel:${hospitalConfig.contact.phone.value}`}
                  className="font-semibold text-[#0A5C4F] hover:underline"
                >
                  {hospitalConfig.contact.phone.formatted}
                </a>
              </div>
              <p className="font-medium text-[#122421]">{hospitalConfig.location.landmark}</p>
              <p>{hospitalConfig.location.town}, {hospitalConfig.location.state}, {hospitalConfig.location.country}</p>
              <div className="pt-1">
                <a
                  href={hospitalConfig.contact.mapsUrl.value}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0A5C4F] hover:underline"
                >
                  <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Open in Google Maps →</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright & Production Note */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-[#6B7F7B] gap-4">
          <p>© {currentYear} {hospitalConfig.name.value}, Lohardaga. All rights reserved.</p>
          <p>Static Export • Cloudflare Pages Compatible</p>
        </div>
      </Container>
    </footer>
  );
}
