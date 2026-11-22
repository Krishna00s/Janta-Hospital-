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
          ? "border border-[#ECCDD0] shadow-sm"
          : "border-[#E5ECE8]"
      } overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between h-full`}
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
              <span className={`px-3 py-1 rounded-full backdrop-blur-xs text-xs font-bold uppercase tracking-wider shadow-xs ${
                service.isEmergency
                  ? "bg-white text-[#A63F45]"
                  : "bg-white/95 text-[#0A5C4F]"
              }`}>
                {service.category}
              </span>
              {service.isEmergency && (
                <span className="px-3 py-1 rounded-full bg-[#A63F45] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  24 / 7 Active
                </span>
              )}
            </div>

            <div className="absolute bottom-3 left-3 right-3 text-white">
              <span className="text-xs sm:text-sm font-semibold text-[#E0F3EC] flex items-center gap-1.5">
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
              <span className="px-3 py-1 rounded-full bg-[#E8F5F1] text-[#0A5C4F] text-xs font-extrabold uppercase tracking-wider">
                {service.category}
              </span>
            </div>
          )}

          <div>
            <div className="flex items-center gap-2 mb-1.5">
              {service.image && (
                <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                  service.isEmergency ? "bg-[#F9EDEE]" : "bg-[#E8F5F1]"
                }`}>
                  {service.isEmergency ? (
                    <Activity className="w-5 h-5 text-[#A63F45]" aria-hidden="true" />
                  ) : (
                    renderIcon()
                  )}
                </div>
              )}
              <h3 className={`text-lg sm:text-xl font-extrabold tracking-tight transition-colors leading-tight ${
                service.isEmergency
                  ? "text-[#A63F45]"
                  : "text-[#122421] group-hover:text-[#0A5C4F]"
              }`}>
                {service.name}
              </h3>
            </div>
            
            <p className="text-sm sm:text-base text-[#1F3330] font-semibold leading-relaxed mt-2">
              {service.fullDescription}
            </p>
          </div>

          {/* Key Features List */}
          <div className="space-y-2 pt-2 border-t border-[#EEF3F0]">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#2E4540] block">
              ख़ास बातें और सुविधाएँ
            </span>
            <ul className="space-y-1.5">
              {service.keyFeatures.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2 text-xs sm:text-sm text-[#1E302C] font-semibold"
                >
                  <CheckCircle2
                    className={`w-4 h-4 shrink-0 mt-0.5 ${
                      service.isEmergency ? "text-[#A63F45]" : "text-[#0A5C4F]"
                    }`}
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
          className={`w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all focus-visible:outline-none focus-visible:ring-2 ${
            service.isEmergency
              ? "bg-[#A63F45] text-white hover:bg-[#8E3339] shadow-sm shadow-[#A63F45]/20 focus-visible:ring-[#A63F45]"
              : "bg-[#E8F5F1] text-[#0A5C4F] hover:bg-[#0A5C4F] hover:text-white focus-visible:ring-[#0A5C4F]"
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
