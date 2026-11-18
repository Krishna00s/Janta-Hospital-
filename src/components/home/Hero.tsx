import Image from "next/image";
import { Phone, MapPin, Users, Stethoscope, PlusCircle, ArrowUpRight } from "lucide-react";
import { hospitalConfig } from "@/content/hospital";
import { Button } from "@/components/shared/Button";
import { Badge } from "@/components/shared/Badge";

// Realistic Botanical Leaf Foliage SVG component
function BotanicalLeavesTopLeft({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 220 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Branch stem */}
      <path
        d="M-10 -10 C30 25, 75 60, 130 75"
        stroke="#274833"
        strokeWidth="3.5"
        strokeLinecap="round"
        opacity="0.8"
      />
      <path
        d="M60 40 C95 45, 140 35, 175 15"
        stroke="#274833"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.75"
      />
      <path
        d="M85 55 C115 80, 135 125, 140 160"
        stroke="#274833"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.7"
      />

      {/* Leaf 1 - large drooping leaf */}
      <path
        d="M-5 15 C25 20, 65 65, 80 100 C50 95, 15 65, -5 15 Z"
        fill="#2E6941"
        opacity="0.9"
      />
      <path
        d="M-5 15 C20 45, 55 75, 80 100"
        stroke="#458C5D"
        strokeWidth="1.5"
        opacity="0.6"
      />

      {/* Leaf 2 - highlighted sunlit leaf */}
      <path
        d="M45 35 C80 30, 130 50, 155 70 C125 80, 75 75, 45 35 Z"
        fill="#428E5A"
        opacity="0.92"
      />
      <path
        d="M45 35 C85 50, 120 62, 155 70"
        stroke="#67B681"
        strokeWidth="1.5"
        opacity="0.7"
      />

      {/* Leaf 3 - bright top leaf */}
      <path
        d="M75 15 C110 5, 160 8, 185 20 C155 32, 105 32, 75 15 Z"
        fill="#55A870"
        opacity="0.85"
      />

      {/* Leaf 4 - deep background shadow leaf */}
      <path
        d="M20 5 C50 -5, 95 -10, 130 -5 C105 15, 60 20, 20 5 Z"
        fill="#1E472C"
        opacity="0.8"
      />

      {/* Leaf 5 - hanging tip leaf */}
      <path
        d="M95 65 C125 90, 140 135, 142 165 C125 140, 105 105, 95 65 Z"
        fill="#397F50"
        opacity="0.88"
      />
    </svg>
  );
}

function BotanicalLeavesRight({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Branch stem from right edge */}
      <path
        d="M250 80 C200 95, 140 120, 90 170"
        stroke="#274833"
        strokeWidth="3.5"
        strokeLinecap="round"
        opacity="0.8"
      />
      <path
        d="M170 110 C150 70, 120 30, 80 5"
        stroke="#274833"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path
        d="M130 145 C95 160, 60 190, 30 230"
        stroke="#274833"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.75"
      />

      {/* Leaf 1 - right top drooping */}
      <path
        d="M240 40 C195 45, 145 25, 100 10 C140 5, 195 10, 240 40 Z"
        fill="#36794B"
        opacity="0.88"
      />
      {/* Leaf 2 - foreground lush leaf */}
      <path
        d="M210 85 C170 80, 115 105, 80 140 C115 145, 170 125, 210 85 Z"
        fill="#4EA068"
        opacity="0.92"
      />
      <path
        d="M210 85 C165 100, 125 120, 80 140"
        stroke="#75C690"
        strokeWidth="1.5"
        opacity="0.65"
      />
      {/* Leaf 3 - sunlit lower leaf */}
      <path
        d="M150 135 C110 145, 65 180, 35 220 C65 210, 115 180, 150 135 Z"
        fill="#2F6E43"
        opacity="0.9"
      />
      {/* Leaf 4 - tip small leaf */}
      <path
        d="M110 160 C80 185, 45 220, 20 255 C35 235, 70 205, 110 160 Z"
        fill="#5BB177"
        opacity="0.85"
      />
    </svg>
  );
}

function MobileBottomRightFoliage({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M 170 120 C 140 90, 100 65, 50 50"
        stroke="#274833"
        strokeWidth="2.5"
        opacity="0.7"
      />
      <path
        d="M 150 100 C 125 75, 85 65, 55 70 C 75 85, 110 105, 150 100 Z"
        fill="#3B7D50"
        opacity="0.85"
      />
      <path
        d="M 120 80 C 95 55, 50 45, 25 50 C 45 65, 80 85, 120 80 Z"
        fill="#4EA068"
        opacity="0.9"
      />
      <path
        d="M 90 60 C 70 35, 30 25, 10 30 C 25 45, 55 65, 90 60 Z"
        fill="#66B983"
        opacity="0.8"
      />
    </svg>
  );
}

function MobileBottomFoliage({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M-10 130 C20 100, 60 70, 110 50"
        stroke="#274833"
        strokeWidth="2.5"
        opacity="0.7"
      />
      <path
        d="M10 110 C35 85, 75 75, 105 80 C85 95, 50 115, 10 110 Z"
        fill="#3B7D50"
        opacity="0.85"
      />
      <path
        d="M40 90 C65 65, 110 55, 135 60 C115 75, 80 95, 40 90 Z"
        fill="#4EA068"
        opacity="0.9"
      />
      <path
        d="M70 70 C90 45, 130 35, 150 40 C135 55, 105 75, 70 70 Z"
        fill="#66B983"
        opacity="0.8"
      />
    </svg>
  );
}

export function Hero() {
  const phoneHref = `tel:${hospitalConfig.contact.phone.value}`;

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative w-full overflow-hidden bg-white text-[#122421] min-h-0 lg:min-h-[740px] xl:min-h-[820px] lg:flex lg:items-center"
    >
      {/* ------------------------------------------------------------- */}
      {/* 1. CINEMATIC BOTANICAL FOLIAGE ACCENTS (Framing)              */}
      {/* ------------------------------------------------------------- */}
      {/* Top-Left Ambient Leaves */}
      <div
        className="pointer-events-none absolute -top-4 -left-4 sm:-top-8 sm:-left-8 w-28 h-28 sm:w-44 sm:h-44 lg:w-56 lg:h-56 z-30 select-none opacity-85 blur-[1.2px]"
        aria-hidden="true"
      >
        <BotanicalLeavesTopLeft className="w-full h-full" />
      </div>

      {/* Top-Right & Right-Edge Ambient Leaves (Desktop only to keep mobile whitespace pristine) */}
      <div
        className="hidden lg:block pointer-events-none absolute top-0 -right-6 xl:-right-8 w-60 h-64 xl:w-72 xl:h-80 z-30 select-none opacity-85 blur-[1.5px]"
        aria-hidden="true"
      >
        <BotanicalLeavesRight className="w-full h-full" />
      </div>

      {/* ------------------------------------------------------------- */}
      {/* 2. BOTTOM-LEFT DECORATIVE ORGANIC WAVES                       */}
      {/* ------------------------------------------------------------- */}
      <div
        className="absolute bottom-0 left-0 w-[320px] sm:w-[480px] lg:w-[680px] xl:w-[780px] h-[200px] sm:h-[280px] lg:h-[380px] pointer-events-none select-none z-0 overflow-hidden"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 780 380"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="wave-bg-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E2F6EE" stopOpacity="0.85" />
              <stop offset="65%" stopColor="#EEF9F4" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>

            <linearGradient id="wave-secondary-grad" x1="0%" y1="0%" x2="100%" y2="80%">
              <stop offset="0%" stopColor="#D0EFE3" stopOpacity="0.75" />
              <stop offset="60%" stopColor="#E2F6EE" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>

            <linearGradient id="wave-primary-grad" x1="0%" y1="0%" x2="80%" y2="100%">
              <stop offset="0%" stopColor="#B6E5D4" stopOpacity="0.65" />
              <stop offset="55%" stopColor="#CAEFE0" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#F5FCF9" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Layer 1: Background gentle swell */}
          <path
            d="M -40 90 C 140 80, 310 180, 540 280 C 630 325, 700 350, 780 380 L -40 380 Z"
            fill="url(#wave-bg-grad)"
          />

          {/* Layer 2: Secondary pale mint wave */}
          <path
            d="M -40 175 C 120 150, 260 235, 460 315 C 550 350, 620 365, 700 380 L -40 380 Z"
            fill="url(#wave-secondary-grad)"
          />

          {/* Layer 3: Primary soft botanical green crest */}
          <path
            d="M -40 255 C 100 215, 220 270, 380 335 C 450 360, 520 370, 580 380 L -40 380 Z"
            fill="url(#wave-primary-grad)"
          />
        </svg>
      </div>

      {/* SVG ClipPath Definitions */}
      <svg width="0" height="0" className="absolute pointer-events-none" aria-hidden="true">
        <defs>
          {/* Desktop Signature Organic S-Curve */}
          <clipPath id="hero-organic-curve" clipPathUnits="objectBoundingBox">
            <path
              d="M 0.14 0 
                 C 0.05 0.16, 0.01 0.32, 0.01 0.46 
                 C 0.01 0.64, 0.07 0.82, 0.18 1 
                 L 1 1 
                 L 1 0 
                 Z"
            />
          </clipPath>

          {/* Mobile Flowing Wave Curve across the top of the photo */}
          <clipPath id="hero-mobile-curve" clipPathUnits="objectBoundingBox">
            <path
              d="M 0 0.18 
                 C 0.18 0.08, 0.42 0.22, 0.68 0.10 
                 C 0.82 0.04, 0.94 0.05, 1 0.12 
                 L 1 1 
                 L 0 1 
                 Z"
            />
          </clipPath>
        </defs>
      </svg>

      {/* ------------------------------------------------------------- */}
      {/* 3. DESKTOP IMMERSIVE FULL-BLEED IMAGE (57-60% of viewport)    */}
      {/* ------------------------------------------------------------- */}
      <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[57%] xl:w-[60%] z-10 select-none pointer-events-none">
        {/* Layered Mint Wave Stroke Framing the Organic S-Curve */}
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-full pointer-events-none z-20"
          aria-hidden="true"
        >
          <path
            d="M 14 0 C 5 16, 1 32, 1 46 C 1 64, 7 82, 18 100"
            fill="none"
            stroke="#E2F6EE"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
          <path
            d="M 14 0 C 5 16, 1 32, 1 46 C 1 64, 7 82, 18 100"
            fill="none"
            stroke="#BCE7D7"
            strokeWidth="1.2"
            opacity="0.85"
            strokeLinecap="round"
          />
        </svg>

        {/* Soft mint glow layer behind the curve */}
        <div
          className="absolute inset-0 bg-[#E8F5F1]/80 [clip-path:url(#hero-organic-curve)] -translate-x-2 opacity-70 z-0"
          aria-hidden="true"
        />

        {/* Real Hospital Exterior Photograph */}
        <div className="relative w-full h-full [clip-path:url(#hero-organic-curve)] z-10 bg-[#F4FAF7]">
          <Image
            src={hospitalConfig.imagery.exterior.src}
            alt={hospitalConfig.imagery.exterior.alt}
            fill
            priority
            sizes="(min-width: 1280px) 60vw, 57vw"
            className="w-full h-full object-cover object-[58%_35%] pointer-events-auto"
          />

          {/* Subtle gradient depth vignette */}
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent opacity-60"
            aria-hidden="true"
          />
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* 4. HERO CONTENT CONTAINER (Desktop Left / Mobile Top)         */}
      {/* ------------------------------------------------------------- */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-1 sm:py-10 lg:py-16 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-center">
          
          {/* Left Column: Eyebrow, Headline, Micro-Pills, Actions, Desktop Location Card */}
          <div className="lg:col-span-6 xl:col-span-5 space-y-3.5 sm:space-y-6 max-w-lg lg:max-w-none">
            
            {/* Eyebrow Pill */}
            <div>
              <Badge variant="mint" dot>
                {hospitalConfig.eyebrow}
              </Badge>
            </div>

            {/* Impactful Headline with Newsreader Editorial Serif Italic Accent */}
            <h1
              id="hero-heading"
              className="text-4xl min-[360px]:text-[2.6rem] sm:text-6xl lg:text-[4.2rem] xl:text-[4.75rem] font-extrabold tracking-tight text-[#122421] leading-[1.08] sm:leading-[1.05]"
            >
              <span className="font-sans block text-[#122421]">Care, </span>
              <span className="font-serif italic font-normal text-[#0A5C4F] relative inline-block mt-0.5 sm:mt-1">
                closer to home.
                {/* Elegant curved underline flourish spanning under 'closer to home.' */}
                <svg
                  className="absolute -bottom-2 sm:-bottom-3 left-0 w-full h-3 sm:h-4 text-[#0A5C4F] overflow-visible pointer-events-none"
                  viewBox="0 0 240 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M 4 12 C 70 3, 170 3, 236 10"
                    stroke="#0A5C4F"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Three Feature Micro-Pills (OPD, General Medicine, Patient Guidance) */}
            <div className="grid grid-cols-3 gap-1.5 min-[360px]:gap-2 sm:gap-3 pt-1 w-full max-w-md lg:max-w-none">
              {/* OPD Consultation */}
              <div className="min-w-0 flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 rounded-2xl bg-white/95 sm:bg-[#F4FAF7] border border-[#E2ECE9] shadow-xs">
                <div className="w-6 h-6 min-[360px]:w-6.5 min-[360px]:h-6.5 sm:w-7 sm:h-7 rounded-full bg-[#E8F5F1] text-[#0A5C4F] flex items-center justify-center shrink-0 border border-[#C2EADB]">
                  <Stethoscope className="w-3.5 h-3.5" aria-hidden="true" />
                </div>
                <div className="text-left leading-tight min-w-0">
                  <span className="block text-[11px] sm:text-xs font-bold text-[#122421] truncate">OPD</span>
                  <span className="block text-[9px] sm:text-[11px] text-[#6B7F7B] truncate">Consultation</span>
                </div>
              </div>

              {/* General Medicine */}
              <div className="min-w-0 flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 rounded-2xl bg-white/95 sm:bg-[#F4FAF7] border border-[#E2ECE9] shadow-xs">
                <div className="w-6 h-6 min-[360px]:w-6.5 min-[360px]:h-6.5 sm:w-7 sm:h-7 rounded-full bg-[#E8F5F1] text-[#0A5C4F] flex items-center justify-center shrink-0 border border-[#C2EADB]">
                  <PlusCircle className="w-3.5 h-3.5" aria-hidden="true" />
                </div>
                <div className="text-left leading-tight min-w-0">
                  <span className="block text-[11px] sm:text-xs font-bold text-[#122421] truncate">General</span>
                  <span className="block text-[9px] sm:text-[11px] text-[#6B7F7B] truncate">Medicine</span>
                </div>
              </div>

              {/* Patient Guidance */}
              <div className="min-w-0 flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 rounded-2xl bg-white/95 sm:bg-[#F4FAF7] border border-[#E2ECE9] shadow-xs">
                <div className="w-6 h-6 min-[360px]:w-6.5 min-[360px]:h-6.5 sm:w-7 sm:h-7 rounded-full bg-[#E8F5F1] text-[#0A5C4F] flex items-center justify-center shrink-0 border border-[#C2EADB]">
                  <Users className="w-3.5 h-3.5" aria-hidden="true" />
                </div>
                <div className="text-left leading-tight min-w-0">
                  <span className="block text-[11px] sm:text-xs font-bold text-[#122421] truncate">Patient</span>
                  <span className="block text-[9px] sm:text-[11px] text-[#6B7F7B] truncate">Guidance</span>
                </div>
              </div>
            </div>

            {/* Actions: Call Hospital & Get Directions */}
            <div className="flex items-center gap-2.5 sm:gap-3.5 pt-1 w-full max-w-md">
              <Button
                href={phoneHref}
                variant="primary"
                size="md"
                className="flex-1 sm:flex-initial sm:px-6 sm:py-3.5 text-xs sm:text-base font-bold whitespace-nowrap"
                icon={<Phone className="w-4 h-4 text-white shrink-0" aria-hidden="true" />}
              >
                Call Hospital
              </Button>

              <Button
                href={hospitalConfig.contact.mapsUrl.value}
                variant="secondary"
                size="md"
                className="flex-1 sm:flex-initial sm:px-6 sm:py-3.5 text-xs sm:text-base font-bold whitespace-nowrap"
                external
                icon={<MapPin className="w-4 h-4 text-[#0A5C4F] shrink-0" aria-hidden="true" />}
              >
                Get Directions
              </Button>
            </div>

            {/* Desktop Floating Location Landmark Card (Directly below actions, over waves) */}
            <div className="hidden lg:block pt-1">
              <a
                href={hospitalConfig.contact.mapsUrl.value}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-between gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-2xl bg-white/95 backdrop-blur-sm border border-[#EAF2EF] shadow-lg shadow-[#0A5C4F]/5 hover:shadow-xl hover:border-[#C2EADB] transition-all max-w-[360px] xl:max-w-[400px] w-full"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-[#E8F5F1] text-[#0A5C4F] flex items-center justify-center shrink-0 group-hover:bg-[#0A5C4F] group-hover:text-white transition-colors">
                    <MapPin className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div className="text-left min-w-0">
                    <span className="font-sans font-bold text-xs sm:text-sm text-[#122421] block leading-snug truncate">
                      {hospitalConfig.location.cardTitle}
                    </span>
                    <span className="text-[11px] sm:text-xs text-[#6B7F7B] block truncate">
                      {hospitalConfig.location.cardSubtext}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-[#0A5C4F] shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
              </a>
            </div>

          </div>

          {/* Desktop grid spacer for right columns */}
          <div className="hidden lg:block lg:col-span-6 xl:col-span-7 pointer-events-none" aria-hidden="true" />

        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* 5. MOBILE / TABLET PHOTOGRAPH COMPOSITION (< lg)              */}
      {/* ------------------------------------------------------------- */}
      <div className="lg:hidden block w-full relative mt-3 sm:mt-6 z-10">
        
        {/* Soft pale-mint wave crest rising on the right behind the photo */}
        <div
          className="absolute -top-7 sm:-top-9 -right-1 w-48 sm:w-64 h-32 pointer-events-none select-none z-0"
          aria-hidden="true"
        >
          <svg viewBox="0 0 200 120" fill="none" className="w-full h-full">
            <path
              d="M 0 105 C 55 75, 120 45, 200 12 L 200 120 L 0 120 Z"
              fill="#E4F5EE"
              opacity="0.9"
            />
          </svg>
        </div>

        {/* Soft mint accent wave behind top boundary */}
        <div
          className="absolute inset-0 bg-[#E8F5F1]/80 [clip-path:url(#hero-mobile-curve)] -translate-y-1.5 opacity-80 z-0"
          aria-hidden="true"
        />

        {/* Clipped Real Hospital Photograph */}
        <div className="relative w-full h-[380px] min-[400px]:h-[420px] sm:h-[480px] [clip-path:url(#hero-mobile-curve)] z-10 bg-[#F4FAF7]">
          
          {/* Top stroke framing the mobile organic wave curve */}
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="absolute inset-0 w-full h-full pointer-events-none z-20"
            aria-hidden="true"
          >
            <path
              d="M 0 18 C 18 8, 42 22, 68 10 C 82 4, 94 5, 100 12"
              fill="none"
              stroke="#E2F6EE"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
            <path
              d="M 0 18 C 18 8, 42 22, 68 10 C 82 4, 94 5, 100 12"
              fill="none"
              stroke="#BCE7D7"
              strokeWidth="1.2"
              opacity="0.8"
              strokeLinecap="round"
            />
          </svg>

          <Image
            src={hospitalConfig.imagery.exterior.src}
            alt={hospitalConfig.imagery.exterior.alt}
            fill
            priority
            sizes="100vw"
            className="w-full h-full object-cover object-[55%_35%]"
          />

          {/* Ambient vignette and bottom shadow for text contrast */}
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-80"
            aria-hidden="true"
          />

          {/* Mobile Bottom Mint Wave Corner Accents */}
          <div className="pointer-events-none absolute -bottom-2 -left-2 w-32 h-24 z-10" aria-hidden="true">
            <svg viewBox="0 0 120 90" fill="none" className="w-full h-full">
              <path d="M 0 90 C 20 50, 70 60, 120 90 Z" fill="#D0EFE3" opacity="0.6" />
              <path d="M 0 90 C 30 70, 60 75, 90 90 Z" fill="#B6E5D4" opacity="0.7" />
            </svg>
          </div>

          {/* Mobile Bottom-Left Corner Foliage Accent */}
          <div className="pointer-events-none absolute -bottom-4 -left-4 w-28 h-24 z-20 opacity-80 blur-[0.8px]" aria-hidden="true">
            <MobileBottomFoliage className="w-full h-full" />
          </div>

          {/* Mobile Bottom-Right Corner Foliage Accent */}
          <div className="pointer-events-none absolute -bottom-4 -right-4 w-28 h-24 z-20 opacity-80 blur-[0.8px]" aria-hidden="true">
            <MobileBottomRightFoliage className="w-full h-full" />
          </div>

          {/* Floating Location Landmark Card hovering over the bottom of the photo */}
          <div className="absolute left-3 right-3 min-[360px]:left-4 min-[360px]:right-4 sm:left-6 sm:right-6 bottom-3.5 sm:bottom-5 z-20">
            <a
              href={hospitalConfig.contact.mapsUrl.value}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-2.5 min-[360px]:gap-3 p-3 sm:p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-[#EAF2EF] shadow-xl hover:border-[#C2EADB] transition-all w-full"
            >
              <div className="flex items-center gap-2.5 min-[360px]:gap-3 min-w-0">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#E8F5F1] text-[#0A5C4F] flex items-center justify-center shrink-0 group-hover:bg-[#0A5C4F] group-hover:text-white transition-colors">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
                </div>
                <div className="text-left min-w-0">
                  <span className="font-sans font-bold text-xs sm:text-sm text-[#122421] block leading-snug truncate">
                    {hospitalConfig.location.cardTitle}
                  </span>
                  <span className="text-[10px] min-[360px]:text-[11px] sm:text-xs text-[#6B7F7B] block truncate">
                    {hospitalConfig.location.cardSubtext}
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#0A5C4F] shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
