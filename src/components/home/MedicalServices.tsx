import {
  Activity,
  Stethoscope,
  HeartPulse,
  Pill,
  Bandage,
  Compass,
  Phone,
  ArrowRight,
  Clock,
  CheckCircle2,
} from "lucide-react";
import { hospitalConfig } from "@/content/hospital";
import { Badge } from "@/components/shared/Badge";
import { Button } from "@/components/shared/Button";

// Map icon string identifiers to Lucide components
function getServiceIcon(icon: string) {
  switch (icon) {
    case "activity":
      return <Activity className="w-5 h-5" aria-hidden="true" />;
    case "stethoscope":
      return <Stethoscope className="w-5 h-5" aria-hidden="true" />;
    case "heart-pulse":
      return <HeartPulse className="w-5 h-5" aria-hidden="true" />;
    case "pill":
      return <Pill className="w-5 h-5" aria-hidden="true" />;
    case "band-aid":
      return <Bandage className="w-5 h-5" aria-hidden="true" />;
    case "compass":
      return <Compass className="w-5 h-5" aria-hidden="true" />;
    default:
      return <Stethoscope className="w-5 h-5" aria-hidden="true" />;
  }
}

export function MedicalServices() {
  const { services, contact } = hospitalConfig;
  const featuredService = services[0]; // 24-Hour Emergency
  const otherServices = services.slice(1);

  return (
    <section
      id="departments"
      aria-labelledby="services-heading"
      className="relative w-full py-16 sm:py-20 lg:py-28 bg-white text-[#122421] overflow-hidden border-t border-[#EDF4F1]"
    >
      {/* Background soft ambient mint glow */}
      <div
        className="pointer-events-none absolute top-1/2 -left-48 w-96 h-96 bg-[#E8F5F1]/50 rounded-full blur-3xl opacity-60 z-0"
        aria-hidden="true"
      />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <Badge variant="mint" dot className="mb-4">
              VERIFIED CLINICAL SERVICES
            </Badge>
            <h2
              id="services-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#122421] leading-[1.12]"
            >
              <span className="font-sans block">Essential healthcare</span>
              <span className="font-serif italic font-normal text-[#0A5C4F] block mt-1">
                focused on patient well-being.
              </span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#475B57] leading-relaxed">
              Every service listed reflects confirmed on-premises clinical operations in Lohardaga—combining
              round-the-clock emergency assistance with daily outpatient consultations and on-site dispensing.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <Button
              href={`tel:${contact.phone.value}`}
              variant="secondary"
              size="md"
              icon={<Phone className="w-4 h-4 text-[#0A5C4F]" aria-hidden="true" />}
            >
              Inquire Timings
            </Button>
          </div>
        </div>

        {/* Asymmetric Services Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Featured Primary Card: 24-Hour Emergency Care (Spans 5 cols on lg) */}
          <div className="lg:col-span-5 relative rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-[#0A5C4F] to-[#063F36] text-white shadow-xl overflow-hidden flex flex-col justify-between min-h-[420px] lg:min-h-[500px]">
            
            {/* Background decorative curve */}
            <div
              className="pointer-events-none absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-white/5 blur-2xl"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute top-0 right-0 w-44 h-44 bg-emerald-400/10 rounded-full blur-xl"
              aria-hidden="true"
            />

            <div>
              <div className="flex items-center justify-between gap-3 mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-xs font-bold tracking-wider text-emerald-200 border border-white/20">
                  <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                  {featuredService.badge}
                </span>
                <span className="text-[11px] font-semibold text-emerald-200/80 uppercase tracking-widest">
                  Signboard Verified
                </span>
              </div>

              <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-emerald-300 border border-white/20 mb-6">
                {getServiceIcon(featuredService.icon)}
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold font-sans text-white leading-tight mb-4">
                {featuredService.title}
              </h3>

              <p className="text-emerald-100/90 text-sm sm:text-base leading-relaxed mb-6">
                {featuredService.shortDescription}
              </p>

              <ul className="space-y-2.5 text-xs sm:text-sm text-emerald-100/80 border-t border-white/10 pt-5">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0" aria-hidden="true" />
                  <span>Immediate vital triage & acute stabilization</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0" aria-hidden="true" />
                  <span>On-site emergency medicine availability</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0" aria-hidden="true" />
                  <span>Direct emergency line: {contact.phone.formatted}</span>
                </li>
              </ul>
            </div>

            <div className="pt-8">
              <a
                href={featuredService.actionHref}
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-white text-[#0A5C4F] font-bold text-sm sm:text-base hover:bg-emerald-50 transition-colors shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                <span>Call Emergency Hotline</span>
              </a>
            </div>

          </div>

          {/* Grid of Other Verified Services (Spans 7 cols on lg) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {otherServices.map((service) => (
              <div
                key={service.id}
                className="group relative rounded-3xl p-5 sm:p-6 bg-[#FCFDFD] border border-[#EAF2EF] hover:border-[#BCE7D7] hover:shadow-md hover:bg-white transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#E8F5F1] text-[#0A5C4F] flex items-center justify-center shrink-0 group-hover:bg-[#0A5C4F] group-hover:text-white transition-colors">
                      {getServiceIcon(service.icon)}
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#EAF5F0] text-[10px] font-bold tracking-wider text-[#0A5C4F]">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="font-sans font-bold text-base sm:text-lg text-[#122421] group-hover:text-[#0A5C4F] transition-colors mb-2">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#475B57] leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="pt-5 mt-4 border-t border-[#F0F5F2] flex items-center justify-between">
                  <a
                    href={service.actionHref}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0A5C4F] group-hover:text-[#074B40] transition-colors"
                  >
                    <span>{service.actionText}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </a>

                  <span className="text-[10px] text-[#869994] font-medium">
                    Verified
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
