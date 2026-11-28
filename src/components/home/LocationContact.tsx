import {
  MapPin,
  Phone,
  Clock,
  Navigation,
  MessageSquare,
} from "lucide-react";
import {
  hospitalConfig,
  primaryPhone,
  primaryPhoneHref,
  emergencyPhone,
  emergencyPhoneHref,
  whatsappHref,
} from "@/content/hospital";
import { Badge } from "@/components/shared/Badge";
import { Button } from "@/components/shared/Button";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { GoogleMapPreview } from "@/components/home/GoogleMapPreview";
import { BotanicalSideClimber } from "@/components/ui/BotanicalDecorations";

export function LocationContact() {
  const { location, contact } = hospitalConfig;

  return (
    <section
      id="contact"
      aria-labelledby="visit-heading"
      className="relative w-full pt-10 sm:pt-14 lg:pt-16 pb-10 sm:pb-14 lg:pb-16 bg-white text-[#122421] overflow-hidden"
    >
      {/* Restrained botanical SVG accent near contact information (does not interfere with map) */}
      <BotanicalSideClimber side="left" className="opacity-40" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* Compact Editorial Header with Harmonized Mixed-Script Typography */}
        <ScrollReveal direction="heading" className="max-w-2xl mb-6 sm:mb-8">
          <Badge variant="mint" dot className="mb-2 sm:mb-3">
            LOCATION &amp; CONTACT
          </Badge>
          <h2
            id="visit-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-[#122421] leading-snug py-0.5"
          >
            <span>Hospital Location &amp; </span>
            <span className="font-serif italic font-normal text-[#0A5C4F]">Contact</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#2E4540] font-normal">
            Main Road, near Head Post Office, Powergunj, Lohardaga. Open 24/7 for emergency care and admissions. (24 घंटे इमरजेंसी के लिए खुला है।)
          </p>
        </ScrollReveal>

        {/* 2-Column Integrated Layout with Staggered Entrance */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          
          {/* Left Column: Direct Address, Phone, & Actions (6 cols on lg) */}
          <ScrollReveal direction="card" delay={0} className="lg:col-span-6 space-y-4 sm:space-y-5">
            
            {/* Address & Landmark Card with Refined Green Border & Hover Lift */}
            <div className="p-5 sm:p-6 rounded-3xl bg-[#FCFDFD] border border-[#B7D8CA] hover:border-[#8DBDAA] shadow-2xs card-hover-lift transition-all">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-2xl bg-[#E8F5F1] text-[#0A5C4F] flex items-center justify-center shrink-0 border border-[#C2EADB]">
                  <MapPin className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#0A5C4F] block mb-1">
                    Hospital का पता
                  </span>
                  <h3 className="font-sans font-semibold text-base sm:text-lg text-[#122421]">
                    {hospitalConfig.name.value}
                  </h3>
                  <p className="text-sm sm:text-base text-[#122421] font-normal mt-1">
                    {location.fullAddress}
                  </p>
                  <p className="text-xs sm:text-sm text-[#2E4540] font-normal mt-1">
                    Head Post Office के पीछे · Main Bus Stand के पास
                  </p>
                </div>
              </div>

              {/* Operating Hours & Verified Status */}
              <div className="mt-4 pt-4 border-t border-[#D2E6DC]/60 flex items-center justify-between text-xs sm:text-sm">
                <span className="inline-flex items-center gap-1.5 font-semibold text-[#A63F45]">
                  <Clock className="w-4 h-4 text-[#A63F45]" aria-hidden="true" />
                  24 घंटे Emergency खुला
                </span>
                <span className="text-xs text-[#2E4540] font-normal">
                  Powergunj, Lohardaga
                </span>
              </div>
            </div>

            {/* Telephone Numbers with Refined Green Border & Hover Lift */}
            <div className="p-5 sm:p-6 rounded-3xl bg-[#FCFDFD] border border-[#B7D8CA] hover:border-[#8DBDAA] shadow-2xs card-hover-lift transition-all space-y-3">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#0A5C4F] block mb-1">
                  Hospital Enquiries — सामान्य पूछताछ व OPD
                </span>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <a
                    href={primaryPhoneHref}
                    className="font-sans font-semibold text-xl sm:text-2xl text-[#0A5C4F] hover:underline"
                  >
                    {primaryPhone}
                  </a>

                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs sm:text-sm font-medium text-[#0A5C4F] hover:underline"
                  >
                    <MessageSquare className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="pt-2.5 border-t border-[#F0F5F2]">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#A63F45] flex items-center gap-1.5 mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A63F45]" />
                  Emergency Contact (24/7 आपातकालीन सेवा)
                </span>
                <a
                  href={emergencyPhoneHref}
                  className="font-sans font-semibold text-lg sm:text-xl text-[#A63F45] hover:underline inline-flex items-center gap-1.5"
                >
                  <Phone className="w-4 h-4 text-[#A63F45]" aria-hidden="true" />
                  <span>{emergencyPhone}</span>
                </a>
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
                Get Directions
              </Button>

              <Button
                href={primaryPhoneHref}
                variant="secondary"
                size="md"
                icon={<Phone className="w-4 h-4 text-[#0A5C4F]" aria-hidden="true" />}
              >
                Call Now
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
