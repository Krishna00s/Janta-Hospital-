import Image from "next/image";
import {
  Activity,
  Stethoscope,
  Pill,
  ShieldCheck,
  Compass,
  Phone,
  CheckCircle2,
  Clock,
  ArrowUpRight,
} from "lucide-react";
import { HospitalService } from "@/content/services";

interface ServiceCardProps {
  service: HospitalService;
  priority?: boolean;
}

export function ServiceCard({ service, priority = false }: ServiceCardProps) {
  // Select icon dynamically
  const renderIcon = () => {
    const iconClass = "w-5 h-5 text-[#0A5C4F]";
    switch (service.iconName) {
      case "activity":
        return <Activity className={iconClass} aria-hidden="true" />;
      case "stethoscope":
        return <Stethoscope className={iconClass} aria-hidden="true" />;
      case "pill":
        return <Pill className={iconClass} aria-hidden="true" />;
      case "compass":
        return <Compass className={iconClass} aria-hidden="true" />;
      default:
        return <ShieldCheck className={iconClass} aria-hidden="true" />;
    }
  };

  return (
    <article
      className={`group relative bg-white rounded-2xl sm:rounded-3xl border ${
        service.isEmergency
          ? "border-[#A9DCCB] ring-1 ring-[#A9DCCB]/50"
          : "border-[#E5ECE8]"
      } overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between`}
    >
      <div>
        {/* Medical Illustration Header */}
        {service.image && (
          <div className="relative w-full h-44 sm:h-52 overflow-hidden bg-[#EDF7F3] flex items-center justify-center border-b border-[#E2EDE8]">
            <Image
              src={service.image.src}
              alt={service.image.alt}
              width={service.image.width}
              height={service.image.height}
              priority={priority}
              className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500 ease-out"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/45 via-transparent to-transparent pointer-events-none" />
            
            <div className="absolute top-3 left-3 flex flex-wrap gap-2">
              <span className="px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-xs text-[#0A5C4F] text-[11px] font-bold uppercase tracking-wider shadow-xs">
                {service.category}
              </span>
              {service.isEmergency && (
                <span className="px-2.5 py-1 rounded-full bg-[#0A5C4F] text-white text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7CE4C9] animate-pulse" />
                  24 / 7 Active
                </span>
              )}
            </div>

            <div className="absolute bottom-3 left-3 right-3 text-white">
              <span className="text-xs font-medium text-[#E0F3EC] flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                {service.availability}
              </span>
            </div>
          </div>
        )}

        {/* Card Body */}
        <div className="p-5 sm:p-6 lg:p-7 space-y-4">
          {!service.image && (
            <div className="flex items-center justify-between gap-2">
              <div className="w-10 h-10 rounded-xl bg-[#E8F5F1] flex items-center justify-center">
                {renderIcon()}
              </div>
              <span className="px-2.5 py-1 rounded-full bg-[#E8F5F1] text-[#0A5C4F] text-xs font-bold uppercase tracking-wider">
                {service.category}
              </span>
            </div>
          )}

          <div>
            <div className="flex items-center gap-2 mb-1.5">
              {service.image && (
                <div className="w-7 h-7 rounded-lg bg-[#E8F5F1] flex items-center justify-center shrink-0">
                  {renderIcon()}
                </div>
              )}
              <h3 className="text-lg sm:text-xl font-extrabold text-[#122421] tracking-tight group-hover:text-[#0A5C4F] transition-colors leading-tight">
                {service.name}
              </h3>
            </div>
            
            <p className="text-xs sm:text-sm text-[#475B57] leading-relaxed mt-2">
              {service.fullDescription}
            </p>
          </div>

          {/* Key Features List */}
          <div className="space-y-2 pt-2 border-t border-[#EEF3F0]">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#3B524E] block">
              ख़ास बातें और सुविधाएँ
            </span>
            <ul className="space-y-1.5">
              {service.keyFeatures.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2 text-xs text-[#2A3E39] font-medium"
                >
                  <CheckCircle2
                    className="w-3.5 h-3.5 text-[#0A5C4F] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="p-5 sm:p-6 lg:p-7 pt-0">
        <a
          href={service.actionHref}
          className={`w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A5C4F] ${
            service.isEmergency
              ? "bg-[#0A5C4F] text-white hover:bg-[#07463C] shadow-sm"
              : "bg-[#E8F5F1] text-[#0A5C4F] hover:bg-[#0A5C4F] hover:text-white"
          }`}
        >
          {service.actionHref.startsWith("tel:") ? (
            <Phone className="w-4 h-4" aria-hidden="true" />
          ) : (
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          )}
          <span>{service.actionLabel}</span>
        </a>
      </div>
    </article>
  );
}
