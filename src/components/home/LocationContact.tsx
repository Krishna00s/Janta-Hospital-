import {
  MapPin,
  Phone,
  Clock,
  Compass,
  MessageSquare,
  Navigation,
} from "lucide-react";
import { hospitalConfig } from "@/content/hospital";
import { Badge } from "@/components/shared/Badge";
import { Button } from "@/components/shared/Button";

export function LocationContact() {
  const { location, contact } = hospitalConfig;
  const phoneHref = `tel:${contact.phone.value}`;

  return (
    <section
      id="contact"
      aria-labelledby="location-heading"
      className="relative w-full py-16 sm:py-20 lg:py-28 bg-[#FCFDFD] text-[#122421] overflow-hidden border-t border-[#EDF4F1]"
    >
      {/* Background ambient gradient */}
      <div
        className="pointer-events-none absolute top-10 left-10 w-96 h-96 bg-[#E8F5F1]/50 rounded-full blur-3xl opacity-60 z-0"
        aria-hidden="true"
      />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <Badge variant="mint" dot className="mb-4">
            VERIFIED LOCATION & ACCESS
          </Badge>
          <h2
            id="location-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#122421] leading-[1.12]"
          >
            <span className="font-sans block">Directions & contact,</span>
            <span className="font-serif italic font-normal text-[#0A5C4F] block mt-1">
              easy to reach when it matters.
            </span>
          </h2>
          <p className="mt-4 sm:mt-5 text-base sm:text-lg text-[#475B57] leading-relaxed">
            Conveniently located in Palmerganj, Lohardaga, behind the Head Post Office and adjacent to the
            central bus terminal area. Open 24 hours for emergency response and acute care.
          </p>
        </div>

        {/* 2-Column Location & Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Contact Details, Local Landmarks & Action Buttons (7 cols on lg) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Address Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#EAF2EF] shadow-2xs">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#E8F5F1] text-[#0A5C4F] flex items-center justify-center shrink-0 border border-[#C2EADB]">
                  <MapPin className="w-6 h-6" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0A5C4F] block mb-1">
                    Hospital Address
                  </span>
                  <h3 className="font-sans font-extrabold text-lg sm:text-xl text-[#122421] leading-snug">
                    {hospitalConfig.name.value}
                  </h3>
                  <p className="mt-1.5 text-sm sm:text-base text-[#475B57] font-medium leading-relaxed">
                    {location.fullAddress}
                  </p>
                  <p className="mt-2 text-xs sm:text-sm text-[#6B7F7B] leading-relaxed">
                    {location.directionsNote}
                  </p>
                </div>
              </div>

              {/* Direct Actions */}
              <div className="mt-6 pt-6 border-t border-[#F0F5F2] flex flex-wrap items-center gap-3">
                <Button
                  href={contact.mapsUrl.value}
                  variant="primary"
                  size="md"
                  external
                  icon={<Navigation className="w-4 h-4 text-white" aria-hidden="true" />}
                >
                  Get Directions in Google Maps
                </Button>

                <Button
                  href={phoneHref}
                  variant="secondary"
                  size="md"
                  icon={<Phone className="w-4 h-4 text-[#0A5C4F]" aria-hidden="true" />}
                >
                  Call Hospital ({contact.phone.formatted})
                </Button>
              </div>
            </div>

            {/* Telephone Numbers & Alternate Lines Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#EAF2EF] shadow-2xs">
              <h3 className="font-sans font-bold text-base sm:text-lg text-[#122421] mb-4 flex items-center gap-2">
                <Phone className="w-5 h-5 text-[#0A5C4F]" aria-hidden="true" />
                <span>Verified Hospital Telephone Numbers</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Primary Hotline */}
                <div className="p-4 rounded-2xl bg-[#F4FAF7] border border-[#C2EADB]">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#0A5C4F] block">
                    Primary Hotline & WhatsApp
                  </span>
                  <a
                    href={phoneHref}
                    className="font-sans font-extrabold text-lg text-[#0A5C4F] hover:underline block mt-1"
                  >
                    {contact.phone.formatted}
                  </a>
                  <span className="text-[11px] text-[#6B7F7B] block mt-0.5">
                    Direct administration & emergency connection
                  </span>
                </div>

                {/* Signboard Emergency Lines */}
                <div className="p-4 rounded-2xl bg-[#FCFDFD] border border-[#EAF2EF]">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#6B7F7B] block">
                    Signboard Registered Lines
                  </span>
                  <div className="mt-1 space-y-0.5">
                    {contact.phone.alternatePhones.map((ph) => (
                      <a
                        key={ph}
                        href={`tel:+91${ph}`}
                        className="font-mono text-xs font-bold text-[#122421] hover:text-[#0A5C4F] block"
                      >
                        +91 {ph}
                      </a>
                    ))}
                  </div>
                  <span className="text-[10px] text-[#869994] block mt-1">
                    Listed on official exterior building board
                  </span>
                </div>
              </div>

              {/* WhatsApp Quick Link */}
              <div className="mt-4 pt-4 border-t border-[#F0F5F2] flex items-center justify-between">
                <span className="text-xs text-[#475B57]">Need quick guidance on WhatsApp?</span>
                <a
                  href={contact.whatsapp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0A5C4F] hover:underline"
                >
                  <MessageSquare className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Start WhatsApp Chat →</span>
                </a>
              </div>
            </div>

            {/* Landmark Navigation Guide */}
            <div className="p-5 sm:p-6 rounded-3xl bg-[#F4FAF7] border border-[#C2EADB] shadow-2xs">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-white text-[#0A5C4F] flex items-center justify-center shrink-0 border border-[#C2EADB] mt-0.5">
                  <Compass className="w-4 h-4" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-bold text-sm sm:text-base text-[#122421]">
                    How to Reach Janta Hospital, Lohardaga
                  </h4>
                  <ul className="mt-2 space-y-1.5 text-xs sm:text-sm text-[#475B57]">
                    <li>• <strong>From Bus Stand:</strong> Head toward Palmerganj market (approx. 3–5 minute walk).</li>
                    <li>• <strong>From Head Post Office:</strong> Located directly behind the main post office building.</li>
                    <li>• <strong>From Lohardaga Railway Station:</strong> Approx. 2.5 km by auto-rickshaw or local taxi.</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Google Maps Interactive Preview Card (5 cols on lg) */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="rounded-3xl overflow-hidden border border-[#E2ECE9] shadow-md bg-white">
              
              {/* Map Visual Header */}
              <div className="relative w-full aspect-[4/3] bg-[#E8F5F1] overflow-hidden flex items-center justify-center p-6 text-center">
                {/* Styled Map Background Grid Representation */}
                <div
                  className="absolute inset-0 opacity-25"
                  style={{
                    backgroundImage:
                      "radial-gradient(#0A5C4F 1px, transparent 1px), radial-gradient(#0A5C4F 1px, #E8F5F1 1px)",
                    backgroundSize: "24px 24px",
                    backgroundPosition: "0 0, 12px 12px",
                  }}
                  aria-hidden="true"
                />

                {/* Decorative Roads / Map Paths */}
                <svg
                  className="absolute inset-0 w-full h-full opacity-30 pointer-events-none"
                  viewBox="0 0 400 300"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M 0 150 Q 150 180, 200 120 T 400 80" stroke="#0A5C4F" strokeWidth="8" />
                  <path d="M 180 0 Q 200 120, 220 300" stroke="#0A5C4F" strokeWidth="6" />
                  <path d="M 50 250 L 350 220" stroke="#0A5C4F" strokeWidth="4" />
                </svg>

                {/* Central Pin Pulse */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="relative flex items-center justify-center">
                    <div className="absolute w-16 h-16 rounded-full bg-[#0A5C4F]/20 animate-ping" />
                    <div className="w-12 h-12 rounded-full bg-[#0A5C4F] text-white flex items-center justify-center shadow-lg border-2 border-white">
                      <MapPin className="w-6 h-6" aria-hidden="true" />
                    </div>
                  </div>

                  <div className="mt-3 p-2.5 rounded-xl bg-white/95 backdrop-blur-md border border-[#C2EADB] shadow-md">
                    <span className="font-bold text-xs text-[#122421] block">Janta Hospital</span>
                    <span className="text-[10px] text-[#0A5C4F] font-semibold block">Palmerganj, Lohardaga</span>
                  </div>
                </div>
              </div>

              {/* Map Card Footer Details */}
              <div className="p-5 sm:p-6 space-y-4">
                <div className="flex items-center justify-between text-xs text-[#475B57]">
                  <span className="flex items-center gap-1.5 font-semibold text-[#0A5C4F]">
                    <Clock className="w-4 h-4" aria-hidden="true" />
                    <span>24 Hours Open (Emergency)</span>
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-[#EAF5F0] text-[10px] font-bold text-[#0A5C4F]">
                    Verified
                  </span>
                </div>

                <p className="text-xs text-[#6B7F7B] leading-relaxed">
                  Pinpoint destination confirmed. Navigate directly on mobile via Google Maps turn-by-turn directions.
                </p>

                <a
                  href={contact.mapsUrl.value}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-[#0A5C4F] text-white font-bold text-sm hover:bg-[#074B40] transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A5C4F]"
                >
                  <Navigation className="w-4 h-4" aria-hidden="true" />
                  <span>Start GPS Navigation →</span>
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
