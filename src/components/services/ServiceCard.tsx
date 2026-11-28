import Link from "next/link";
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
  ArrowRight,
  ArrowUpRight,
  AlertCircle,
} from "lucide-react";
import { HospitalService } from "@/content/services";

const dedicatedRouteMap: Record<string, string> = {
  "emergency-care": "/emergency",
  "general-surgery": "/services/general-surgery",
  "orthopaedic-surgery": "/services/orthopaedic-surgery",
  "laparoscopic-surgery": "/services/laparoscopic-surgery",
  "neurosurgery": "/services/neurosurgery",
  "opd-consultations": "/services/general-medicine",
  "pharmacy-counter": "/services/pharmacy",
};

interface ServiceCardProps {
  service: HospitalService;
  priority?: boolean;
}

export function ServiceCard({ service, priority = false }: ServiceCardProps) {
  const isEmergency = service.isEmergency;
  const isSurgical = Boolean(service.isSurgical);
  const isPendingConfirmation = service.status === "pending_confirmation";
  const dedicatedRoute = dedicatedRouteMap[service.id];

  const renderIcon = () => {
    const iconClass = `w-5 h-5 ${isEmergency ? "text-[#A63F45]" : "text-[#0A5C4F]"}`;
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
      className={`group relative rounded-2xl sm:rounded-3xl border transition-all flex flex-col justify-between h-full card-hover-lift ${
        isEmergency
          ? "bg-[#FAFCFA] border-2 border-[#ECCDD0] hover:border-[#DDA5AB] shadow-2xs"
          : isSurgical
          ? "bg-white border-2 border-[#C0DCD4] hover:border-[#0A5C4F] shadow-xs hover:shadow-md"
          : "bg-white border border-[#B7D8CA] hover:border-[#8DBDAA] shadow-2xs"
      } overflow-hidden`}
    >
      <div>
        {/* Visual Header: Authentic Photography for verified services or Representative for Surgery */}
        {service.image ? (
          <div className="relative w-full h-40 sm:h-44 overflow-hidden bg-[#EDF7F3] flex items-center justify-center border-b border-[#D2E6DC]">
            <Image
              src={service.image.src}
              alt={service.image.alt}
              width={service.image.width}
              height={service.image.height}
              priority={priority}
              className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500 ease-out"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/55 via-black/20 to-transparent pointer-events-none" />
            
            <div className="absolute top-3 left-3 flex items-center gap-2">
              <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider shadow-xs ${
                isEmergency
                  ? "bg-white text-[#A63F45]"
                  : isSurgical
                  ? "bg-[#0A5C4F] text-white"
                  : "bg-white/95 text-[#0A5C4F] border border-[#B7D8CA]"
              }`}>
                {service.category}
              </span>
            </div>

            <div className="absolute bottom-2.5 left-3 right-3 text-white">
              <span className="text-xs sm:text-sm font-normal text-[#E0F3EC] flex items-center gap-1.5 drop-shadow-xs">
                <Clock className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                <span>{service.availability}</span>
              </span>
            </div>
          </div>
        ) : (
          /* Typography-Led Header for Surgical Specialties (No fake stock surgery photos) */
          <div className="p-5 pb-0">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <span
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${
                  isEmergency
                    ? "bg-[#F9EDEE] text-[#A63F45] border border-[#ECCDD0]"
                    : "bg-[#E8F5F1] text-[#0A5C4F] border border-[#B7D8CA]"
                }`}
              >
                {renderIcon()}
                <span>{service.category}</span>
              </span>

              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#F4FAF7] text-[#2E4540] border border-[#D2E6DC] text-[11px] font-medium">
                <Clock className="w-3 h-3 text-[#0A5C4F]" aria-hidden="true" />
                <span>{service.availability}</span>
              </span>
            </div>
          </div>
        )}

        {/* Card Body with Consistent 5-Point Anatomy */}
        <div className="p-5 sm:p-6 space-y-3.5">
          {/* 1. Specialty / Service Name */}
          <div>
            <h3
              className={`text-lg sm:text-xl font-semibold tracking-tight transition-colors leading-snug ${
                isEmergency
                  ? "text-[#A63F45]"
                  : "text-[#122421] group-hover:text-[#0A5C4F]"
              }`}
            >
              {dedicatedRoute ? (
                <Link href={dedicatedRoute} className="hover:underline">
                  {service.name}
                </Link>
              ) : (
                service.name
              )}
            </h3>

            {service.hindiName && (
              <p className="text-xs font-medium text-[#0A5C4F] mt-0.5">
                {service.hindiName}
              </p>
            )}
            
            {/* 2. Short, Useful Description */}
            <p className="text-xs sm:text-sm text-[#2E4540] font-normal leading-relaxed mt-1.5">
              {service.shortDescription}
            </p>
          </div>

          {/* 3. Two or Three Relevant Verified Details */}
          <ul className="space-y-2 pt-2 border-t border-[#D2E6DC]/60 text-xs text-[#2E4540]" role="list">
            {service.keyFeatures.slice(0, 3).map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle2
                  className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${
                    isEmergency ? "text-[#A63F45]" : "text-[#0A5C4F]"
                  }`}
                  aria-hidden="true"
                />
                <span className="leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>

          {/* 4. Availability & Confirmation Caveat */}
          {isPendingConfirmation && (
            <div className="p-2.5 rounded-xl bg-[#F7FAF9] border border-[#D2E6DC] text-[11px] text-[#475B57] leading-relaxed flex items-start gap-1.5">
              <AlertCircle className="w-3.5 h-3.5 text-[#0A5C4F] shrink-0 mt-0.5" aria-hidden="true" />
              <span>प्रक्रिया की उपलब्धता एवं ओटी समय अस्पताल प्रबंधन की पुष्टि अनुसार।</span>
            </div>
          )}
        </div>
      </div>

      {/* 5. Clear Details / Contact Action */}
      <div className="p-5 sm:p-6 pt-0 mt-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
        <a
          href={service.actionHref}
          className={`flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-colors min-h-[40px] ${
            isEmergency
              ? "bg-[#A63F45] text-white hover:bg-[#8E3339] shadow-xs"
              : isSurgical
              ? "bg-[#0A5C4F] text-white hover:bg-[#07463C] shadow-xs"
              : "bg-[#EAF6F1] text-[#0A5C4F] hover:bg-[#0A5C4F] hover:text-white border border-[#B7D8CA]"
          }`}
        >
          <Phone className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
          <span>{service.actionLabel}</span>
        </a>

        {dedicatedRoute && (
          <Link
            href={dedicatedRoute}
            className="inline-flex items-center justify-center gap-1 py-2.5 px-3.5 rounded-xl bg-white text-[#0A5C4F] border border-[#B7D8CA] hover:bg-[#EAF6F1] text-xs font-semibold transition-colors min-h-[40px] shrink-0"
            aria-label={`View details for ${service.name}`}
          >
            <span>View Details</span>
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>
        )}
      </div>
    </article>
  );
}
