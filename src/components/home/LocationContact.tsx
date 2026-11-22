import {
  MapPin,
  Phone,
  Clock,
  Navigation,
  MessageSquare,
} from "lucide-react";
import { hospitalConfig } from "@/content/hospital";
import { Badge } from "@/components/shared/Badge";
import { Button } from "@/components/shared/Button";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { GoogleMapPreview } from "@/components/home/GoogleMapPreview";
import { BotanicalSideClimber } from "@/components/ui/BotanicalDecorations";

export function LocationContact() {
  const { location, contact } = hospitalConfig;
  const phoneHref = `tel:${contact.phone.value}`;

  return (
    <section
      id="contact"
      aria-labelledby="visit-heading"
      className="relative w-full pt-10 sm:pt-14 lg:pt-16 pb-10 sm:pb-14 lg:pb-16 bg-white text-[#122421] overflow-hidden"
    >
      {/* Restrained botanical SVG accent near contact information (does not interfere with map) */}
      <BotanicalSideClimber side="left" className="opacity-40" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* Compact Editorial Header with Progressive Scroll Entrance */}
        <ScrollReveal direction="heading" className="max-w-2xl mb-6 sm:mb-8">
          <Badge variant="mint" dot className="mb-2 sm:mb-3">
            LOCATION &amp; CONTACT
          </Badge>
          <h2
            id="visit-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#122421] leading-tight"
          >
            Hospital का पता
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#2E4540] font-semibold">
            Palmerganj, Lohardaga — Head Post Office के ठीक पीछे, Bus Stand के पास। Emergency के लिए 24 घंटे खुला है।
          </p>
        </ScrollReveal>

        {/* 2-Column Integrated Layout with Staggered Entrance */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          
          {/* Left Column: Direct Address, Phone, & Actions (6 cols on lg) */}
          <ScrollReveal direction="card" delay={0} className="lg:col-span-6 space-y-4 sm:space-y-5">
            
            {/* Address & Landmark Card with Hover Lift */}
            <div className="p-5 sm:p-6 rounded-3xl bg-[#FCFDFD] border border-[#EAF2EF] shadow-2xs card-hover-lift">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-2xl bg-[#E8F5F1] text-[#0A5C4F] flex items-center justify-center shrink-0 border border-[#C2EADB]">
                  <MapPin className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#0A5C4F] block mb-1">
                    Hospital का पता
                  </span>
                  <h3 className="font-sans font-bold text-base sm:text-lg text-[#122421]">
                    {hospitalConfig.name.value}
                  </h3>
                  <p className="text-sm sm:text-base text-[#122421] font-semibold mt-1">
                    {location.fullAddress}
                  </p>
                  <p className="text-xs sm:text-sm text-[#2E4540] font-semibold mt-1">
                    Head Post Office के पीछे · Main Bus Stand के पास
                  </p>
                </div>
              </div>

              {/* Operating Hours & Verified Status */}
              <div className="mt-4 pt-4 border-t border-[#F0F5F2] flex items-center justify-between text-xs sm:text-sm">
                <span className="inline-flex items-center gap-1.5 font-bold text-[#A63F45]">
                  <Clock className="w-4 h-4 text-[#A63F45]" aria-hidden="true" />
                  24/7 Emergency खुला
                </span>
                <span className="px-3 py-1 rounded-full bg-[#F9EDEE] text-[#A63F45] border border-[#ECCDD0] text-xs font-bold shadow-2xs">
                  24/7 Emergency Active
                </span>
              </div>
            </div>

            {/* Telephone Numbers with Hover Lift */}
            <div className="p-5 sm:p-6 rounded-3xl bg-[#FCFDFD] border border-[#EAF2EF] shadow-2xs card-hover-lift">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#0A5C4F] block mb-1.5">
                Phone और WhatsApp
              </span>

              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <a
                  href={phoneHref}
                  className="font-sans font-extrabold text-xl sm:text-2xl text-[#0A5C4F] hover:underline"
                >
                  {contact.phone.formatted}
                </a>

                <a
                  href={contact.whatsapp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-[#0A5C4F] hover:underline"
                >
                  <MessageSquare className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>WhatsApp पर बात करें →</span>
                </a>
              </div>

              <div className="mt-2.5 pt-2.5 border-t border-[#F0F5F2] flex flex-wrap items-center gap-x-4 gap-y-1 text-xs sm:text-sm text-[#2E4540] font-semibold">
                <span className="font-bold">अन्य संपर्क नंबर:</span>
                {contact.phone.alternatePhones.map((ph) => (
                  <a
                    key={ph}
                    href={`tel:+91${ph}`}
                    className="font-mono text-xs sm:text-sm font-bold text-[#122421] hover:text-[#0A5C4F]"
                  >
                    +91 {ph}
                  </a>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Button
                href={contact.mapsUrl.value}
                variant="primary"
                size="md"
                external
                icon={<Navigation className="w-4 h-4 text-white" aria-hidden="true" />}
              >
                Google Maps पर रास्ता देखें
              </Button>

              <Button
                href={phoneHref}
                variant="secondary"
                size="md"
                icon={<Phone className="w-4 h-4 text-[#0A5C4F]" aria-hidden="true" />}
              >
                अभी Call करें
              </Button>
            </div>

          </ScrollReveal>

          {/* Right Column: Genuine Google Maps Location Card (6 cols on lg) with Scroll Reveal */}
          <ScrollReveal direction="card" delay={120} className="lg:col-span-6">
            <GoogleMapPreview mapsUrl={contact.mapsUrl.value} />
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
}
