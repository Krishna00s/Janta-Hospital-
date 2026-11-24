import { ReactNode } from "react";
import { Container } from "@/components/shared/Container";
import { Breadcrumbs, BreadcrumbItem } from "@/components/shared/Breadcrumbs";
import { PageHeroToContentWave } from "@/components/ui/SectionWaves";

interface PageHeroProps {
  breadcrumbs: BreadcrumbItem[];
  eyebrow: string;
  title: string;
  italicWord?: string;
  description: string;
  action?: ReactNode;
  targetBgColor?: string;
}

export function PageHero({
  breadcrumbs,
  eyebrow,
  title,
  italicWord,
  description,
  action,
  targetBgColor = "#FFFFFF",
}: PageHeroProps) {
  return (
    <section className="relative w-full bg-linear-to-b from-[#EBF5F1] via-[#F4FAF7] to-[#FCFDFD] pt-6 sm:pt-8 lg:pt-10 overflow-hidden">
      {/* Background Decorative Soft Tint Circle */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 right-0 w-96 h-96 bg-[#D8EFE7]/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"
      />

      <Container className="relative z-10 pb-6 sm:pb-8 lg:pb-10">
        {/* Breadcrumb Navigation */}
        <div className="mb-4 sm:mb-6">
          <Breadcrumbs items={breadcrumbs} />
        </div>

        {/* Content Block */}
        <div className="max-w-3xl space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A5C4F]/10 border border-[#0A5C4F]/20 text-[#0A5C4F] text-xs font-medium uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0A5C4F]" aria-hidden="true" />
            <span>{eyebrow}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#122421] tracking-tight leading-[1.15]">
            <span>{title} </span>
            {italicWord && (
              <span className="font-serif italic font-normal text-[#0A5C4F]">
                {italicWord}
              </span>
            )}
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-[#475B57] font-normal leading-relaxed max-w-2xl">
            {description}
          </p>

          {action && <div className="pt-2 flex flex-wrap gap-3">{action}</div>}
        </div>
      </Container>

      {/* Organic Wave Transition into Content Surface */}
      <PageHeroToContentWave targetColor={targetBgColor} />
    </section>
  );
}
