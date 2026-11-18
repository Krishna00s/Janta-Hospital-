import {
  Stethoscope,
  Clock,
  Phone,
  MessageSquare,
  CalendarCheck2,
  Users,
} from "lucide-react";
import { hospitalConfig } from "@/content/hospital";
import { Badge } from "@/components/shared/Badge";
import { Button } from "@/components/shared/Button";

export function MedicalTeam() {
  const { medicalTeam, contact } = hospitalConfig;

  return (
    <section
      id="doctors"
      aria-labelledby="doctors-heading"
      className="relative w-full py-16 sm:py-20 lg:py-28 bg-[#FCFDFD] text-[#122421] overflow-hidden border-t border-[#EDF4F1]"
    >
      {/* Background ambient gradient */}
      <div
        className="pointer-events-none absolute top-0 right-1/4 w-[450px] h-[450px] bg-[#E8F5F1]/40 rounded-full blur-3xl opacity-60 z-0"
        aria-hidden="true"
      />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <Badge variant="mint" dot className="mb-4">
            CLINICAL ROSTER & PHYSICIANS
          </Badge>
          <h2
            id="doctors-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#122421] leading-[1.12]"
          >
            <span className="font-sans block">Consulting doctors</span>
            <span className="font-serif italic font-normal text-[#0A5C4F] block mt-1">
              dedicated to attentive care.
            </span>
          </h2>
          <p className="mt-4 sm:mt-5 text-base sm:text-lg text-[#475B57] leading-relaxed">
            {medicalTeam.subtitle} Doctor availability, morning/evening OPD slots, and visiting specialist
            schedules are confirmed directly through the hospital reception desk.
          </p>
        </div>

        {/* Clinical Roster Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {medicalTeam.departments.map((dept, index) => (
            <div
              key={index}
              className="rounded-3xl p-6 sm:p-7 bg-white border border-[#EAF2EF] shadow-2xs hover:shadow-md hover:border-[#C2EADB] transition-all flex flex-col justify-between"
            >
              <div>
                {/* Department Badge & Availability */}
                <div className="flex items-center justify-between gap-2 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#E8F5F1] text-[#0A5C4F] flex items-center justify-center border border-[#C2EADB] shadow-xs">
                    {index === 0 && <Stethoscope className="w-6 h-6" aria-hidden="true" />}
                    {index === 1 && <Clock className="w-6 h-6" aria-hidden="true" />}
                    {index === 2 && <Users className="w-6 h-6" aria-hidden="true" />}
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF5F0] text-[11px] font-bold text-[#0A5C4F]">
                    <Clock className="w-3 h-3" aria-hidden="true" />
                    {dept.availability}
                  </span>
                </div>

                {/* Role / Discipline Title */}
                <h3 className="font-sans font-bold text-lg sm:text-xl text-[#122421] mb-2">
                  {dept.role}
                </h3>

                {/* Scope of Service */}
                <p className="text-xs sm:text-sm text-[#475B57] leading-relaxed mb-6">
                  {dept.scope}
                </p>
              </div>

              {/* Consultation Inquiries Action */}
              <div className="pt-5 border-t border-[#F0F5F2] flex items-center justify-between">
                <a
                  href={`tel:${contact.phone.value}`}
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#0A5C4F] hover:text-[#074B40] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Confirm Schedule</span>
                </a>

                <span className="text-[10px] text-[#869994] font-medium">
                  Reception Verified
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Transparent Operational Notice & Front Desk Assistance Card */}
        <div className="mt-8 sm:mt-10 p-6 sm:p-8 rounded-3xl bg-[#F4FAF7] border border-[#C2EADB] shadow-xs flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="flex items-start gap-4 max-w-2xl">
            <div className="w-10 h-10 rounded-xl bg-white text-[#0A5C4F] flex items-center justify-center shrink-0 border border-[#C2EADB] shadow-xs mt-0.5">
              <CalendarCheck2 className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <span className="font-bold text-sm sm:text-base text-[#122421] block">
                Daily Doctor Availability & OPD Confirmation
              </span>
              <p className="mt-1 text-xs sm:text-sm text-[#475B57] leading-relaxed">
                {medicalTeam.verificationNotice}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0 w-full sm:w-auto">
            <Button
              href={`tel:${contact.phone.value}`}
              variant="primary"
              size="md"
              className="flex-1 sm:flex-initial"
              icon={<Phone className="w-4 h-4 text-white" aria-hidden="true" />}
            >
              Call Reception ({contact.phone.formatted})
            </Button>

            <Button
              href={contact.whatsapp.link}
              variant="secondary"
              size="md"
              external
              className="flex-1 sm:flex-initial"
              icon={<MessageSquare className="w-4 h-4 text-[#0A5C4F]" aria-hidden="true" />}
            >
              WhatsApp
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
}
