import { Phone, MapPin, ArrowUpRight } from "lucide-react";
import { hospitalConfig } from "@/content/hospital";
import { Button } from "@/components/shared/Button";
import { Badge } from "@/components/shared/Badge";
import { HeroToGalleryWave } from "@/components/ui/SectionWaves";
import { HeroSwellWaves } from "@/components/home/HeroSwellWaves";

// Crisp abstract botanical vine accent for top-left framing (closed irregular Bézier shapes)
function BotanicalOrganicAccentTopLeft({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Broad mint stem expanding and tapering */}
      <path
        d="M -10,-10 C 35,20 80,45 130,55 C 160,60 180,50 190,35 C 175,25 140,30 110,25 C 70,20 30,5 -10,-10 Z"
        fill="#E0F3EC"
        opacity="0.95"
      />
      {/* Sage tendril body */}
      <path
        d="M -10,15 C 25,35 60,65 95,95 C 115,115 135,130 145,150 C 138,155 125,145 110,128 C 80,95 45,60 -10,15 Z"
        fill="#A9DCCB"
        opacity="0.85"
      />
      {/* Fine curling accent flourish */}
      <path
        d="M 90,85 C 110,105 130,118 148,115 C 162,112 170,98 165,85 C 158,74 142,76 138,88 C 135,98 145,104 150,98"
        stroke="#75BCA5"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Subtle desktop organic vine connecting the text column to the photograph
function BotanicalOrganicAccentDesktopRight({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 220 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Pale mint flowing tendril behind curve */}
      <path
        d="M 230,20 C 180,40 130,80 90,130 C 55,175 40,215 50,240 C 60,250 75,230 85,200 C 115,150 160,100 230,60 Z"
        fill="#E0F3EC"
        opacity="0.9"
      />
      {/* Medium sage inner curve */}
      <path
        d="M 230,70 C 190,95 150,135 120,180 C 100,210 95,235 105,250 C 112,255 120,240 128,220 C 148,180 185,135 230,105 Z"
        fill="#A9DCCB"
        opacity="0.8"
      />
      {/* Accent green tip spiral */}
      <path
        d="M 120,180 C 105,202 92,225 80,235 C 68,245 52,242 48,230 C 45,218 55,208 65,212 C 72,215 72,225 66,228"
        stroke="#75BCA5"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Hero() {
  const phoneHref = `tel:${hospitalConfig.contact.phone.value}`;

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative w-full overflow-hidden bg-white text-[#122421] min-h-0 lg:h-[calc(100svh-4.25rem)] lg:min-h-[560px] lg:max-h-[780px] xl:max-h-[840px] lg:flex lg:items-center"
    >
      {/* ------------------------------------------------------------- */}
      {/* 1. CINEMATIC BOTANICAL ORGANIC ACCENTS (Framing)             */}
      {/* ------------------------------------------------------------- */}
      {/* Top-Left Crisp Organic Accent (No blur filters) */}
      <div
        className="pointer-events-none absolute -top-3 -left-3 sm:-top-6 sm:-left-6 w-24 h-24 sm:w-36 sm:h-36 lg:w-48 lg:h-44 z-30 select-none opacity-90"
        aria-hidden="true"
      >
        <BotanicalOrganicAccentTopLeft className="w-full h-full" />
      </div>

      {/* Top-Right & Right-Edge Ambient Botanical Accent (Desktop only) */}
      <div
        className="hidden lg:block pointer-events-none absolute top-0 -right-4 xl:-right-6 w-52 h-56 xl:w-64 xl:h-68 z-30 select-none opacity-90"
        aria-hidden="true"
      >
        <BotanicalOrganicAccentDesktopRight className="w-full h-full" />
      </div>

      {/* ------------------------------------------------------------- */}
      {/* 2. BOTTOM-LEFT DECORATIVE ORGANIC WAVES (PAUSED WHEN OFFSCREEN) */}
      {/* ------------------------------------------------------------- */}
      <HeroSwellWaves />

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
              d="M 0 0.06 
                 C 0.22 0.02, 0.48 0.07, 0.72 0.03 
                 C 0.86 0.01, 0.95 0.02, 1 0.05 
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
            stroke="#E0F3EC"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
          <path
            d="M 14 0 C 5 16, 1 32, 1 46 C 1 64, 7 82, 18 100"
            fill="none"
            stroke="#A9DCCB"
            strokeWidth="1.6"
            opacity="0.9"
            strokeLinecap="round"
          />
        </svg>

        {/* Soft mint glow layer behind the curve */}
        <div
          className="absolute inset-0 bg-[#E0F3EC]/90 [clip-path:url(#hero-organic-curve)] -translate-x-2 opacity-75 z-0"
          aria-hidden="true"
        />

        {/* Real Hospital Exterior Photograph */}
        <div className="relative w-full h-full [clip-path:url(#hero-organic-curve)] z-10 bg-[#0D2420]">
          <picture className="w-full h-full">
            <source
              media="(min-width: 1024px)"
              type="image/avif"
              srcSet="/images/janta-hospital-night-exterior.avif"
            />
            <source
              media="(min-width: 1024px)"
              type="image/webp"
              srcSet="/images/janta-hospital-night-exterior.webp"
            />
            <img
              src="/images/janta-hospital-night-exterior.webp"
              alt={hospitalConfig.imagery.exterior.alt}
              width={1536}
              height={1024}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-[50%_38%] pointer-events-auto"
            />
          </picture>

          {/* Subtle gradient depth vignette */}
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60"
            aria-hidden="true"
          />
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* 4. HERO CONTENT CONTAINER (Desktop Left / Mobile Top)         */}
      {/* ------------------------------------------------------------- */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3 pb-2 sm:pt-5 sm:pb-3 lg:py-6 xl:py-10 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-center">
          
          {/* Left Column: Eyebrow, Headline, Micro-Pills, Actions, Desktop Location Card */}
          <div className="lg:col-span-6 xl:col-span-5 space-y-2.5 sm:space-y-4 lg:space-y-3.5 xl:space-y-5 max-w-lg lg:max-w-none animate-hero-fade-in">
            
            {/* 1. Eyebrow Pill */}
            <div>
              <Badge variant="mint" dot>
                {hospitalConfig.eyebrow}
              </Badge>
            </div>

            {/* 2. Impactful Headline with Newsreader Editorial Serif Italic Accent */}
            <h1
              id="hero-heading"
              className="text-3xl min-[360px]:text-[2.2rem] sm:text-5xl lg:text-[clamp(2.3rem,3.4vw,3.6rem)] xl:text-[clamp(2.7rem,4vw,4.25rem)] font-extrabold tracking-tight text-[#122421] leading-[1.08] sm:leading-[1.05]"
            >
              <span className="font-sans block text-[#122421]">आपकी सेहत, </span>
              <span className="font-serif italic font-normal text-[#0A5C4F] relative inline-block mt-0.5 sm:mt-1">
                हमारी ज़िम्मेदारी।
                {/* Elegant curved underline flourish */}
                <svg
                  className="absolute -bottom-1.5 sm:-bottom-2.5 left-0 w-full h-2.5 sm:h-3.5 text-[#0A5C4F] overflow-visible pointer-events-none"
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

            {/* 3. MOBILE ONLY: Real Hospital Photograph (< lg) */}
            {/* Sits immediately beneath the headline on mobile screens with clean rounded framing */}
            {/* and the floating landmark card over the bottom. */}
            <div className="lg:hidden block w-full relative my-2.5 sm:my-4 z-10">
              
              {/* Soft pale-mint wave crest rising on the right behind the photo */}
              <div
                className="absolute -top-6 sm:-top-8 -right-3 w-44 sm:w-56 h-28 pointer-events-none select-none z-0"
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

              {/* Real Hospital Photograph in Rounded Editorial Frame */}
              <div className="relative w-full h-[220px] min-[360px]:h-[245px] min-[400px]:h-[270px] sm:h-[310px] rounded-3xl overflow-hidden border border-[#D8EFE5] shadow-md z-10 bg-[#0D2420]">
                
                <picture className="w-full h-full">
                  <source
                    media="(max-width: 1023px)"
                    type="image/avif"
                    srcSet="/images/janta-hospital-night-exterior-mobile-sm.avif 480w, /images/janta-hospital-night-exterior-mobile.avif 800w"
                    sizes="(max-width: 640px) 100vw, 800px"
                  />
                  <source
                    media="(max-width: 1023px)"
                    type="image/webp"
                    srcSet="/images/janta-hospital-night-exterior-mobile-sm.webp 480w, /images/janta-hospital-night-exterior-mobile.webp 800w"
                    sizes="(max-width: 640px) 100vw, 800px"
                  />
                  <img
                    src="/images/janta-hospital-night-exterior-mobile.webp"
                    alt={hospitalConfig.imagery.exterior.alt}
                    width={800}
                    height={533}
                    loading="eager"
                    fetchPriority="high"
                    decoding="sync"
                    className="w-full h-full object-cover object-[50%_25%]"
                  />
                </picture>

                {/* Ambient vignette and bottom shadow for text contrast */}
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-80"
                  aria-hidden="true"
                />

                {/* Mobile Bottom Mint Wave Corner Accents */}
                <div className="pointer-events-none absolute -bottom-2 -left-2 w-32 h-24 z-10" aria-hidden="true">
                  <svg viewBox="0 0 120 90" fill="none" className="w-full h-full">
                    <path d="M 0 90 C 20 50, 70 60, 120 90 Z" fill="#E0F3EC" opacity="0.8" />
                    <path d="M 0 90 C 30 70, 60 75, 90 90 Z" fill="#A9DCCB" opacity="0.85" />
                  </svg>
                </div>

                {/* Floating Location Landmark Card hovering over the bottom of the photo */}
                <div className="absolute left-2.5 right-2.5 min-[360px]:left-3.5 min-[360px]:right-3.5 sm:left-6 sm:right-6 bottom-2 min-[360px]:bottom-2.5 sm:bottom-4 z-20">
                  <a
                    href={hospitalConfig.contact.mapsUrl.value}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-2 min-[360px]:gap-2.5 p-2 min-[360px]:p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-white/95 backdrop-blur-md border border-[#EAF2EF] shadow-lg hover:border-[#C2EADB] transition-all w-full"
                  >
                    <div className="flex items-center gap-2 min-[360px]:gap-2.5 min-w-0">
                      <div className="w-7 h-7 min-[360px]:w-8 min-[360px]:h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#E8F5F1] text-[#0A5C4F] flex items-center justify-center shrink-0 group-hover:bg-[#0A5C4F] group-hover:text-white transition-colors">
                        <MapPin className="w-3.5 h-3.5 sm:w-5 sm:h-5" aria-hidden="true" />
                      </div>
                      <div className="text-left min-w-0">
                        <span className="font-sans font-bold text-xs sm:text-sm text-[#122421] block leading-snug truncate">
                          {hospitalConfig.location.cardTitle}
                        </span>
                        <span className="text-xs sm:text-sm text-[#3B524E] font-semibold block truncate">
                          {hospitalConfig.location.cardSubtext}
                        </span>
                      </div>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0A5C4F] shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
                  </a>
                </div>

              </div>
            </div>

            {/* 4. Concise Factual Introduction */}
            <p className="text-sm min-[360px]:text-base sm:text-base lg:text-base xl:text-lg text-[#1F3330] leading-relaxed max-w-md font-semibold">
              Lohardaga के Palmerganj में 24 घंटे Emergency सेवा, अनुभवी Doctors और सभी ज़रूरी दवाएँ एक ही जगह।
            </p>

            {/* 5. Actions: Call Hospital & Get Directions */}
            <div className="flex items-center gap-2 sm:gap-3.5 pt-0.5 sm:pt-1 w-full max-w-md">
              <Button
                href={phoneHref}
                variant="primary"
                size="md"
                className="flex-1 sm:flex-initial px-3 sm:px-6 py-2 sm:py-3 text-xs sm:text-base font-bold whitespace-nowrap"
                icon={<Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white shrink-0" aria-hidden="true" />}
              >
                अभी Call करें
              </Button>

              <Button
                href={hospitalConfig.contact.mapsUrl.value}
                variant="secondary"
                size="md"
                className="flex-1 sm:flex-initial px-3 sm:px-6 py-2 sm:py-3 text-xs sm:text-base font-bold whitespace-nowrap"
                external
                icon={<MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0A5C4F] shrink-0" aria-hidden="true" />}
              >
                रास्ता देखें
              </Button>
            </div>

            {/* 6. Desktop Floating Location Landmark Card (Directly below actions, over waves) */}
            <div className="hidden lg:block pt-0.5 xl:pt-1">
              <a
                href={hospitalConfig.contact.mapsUrl.value}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-between gap-3 sm:gap-4 p-3 sm:p-3.5 rounded-2xl bg-white/95 backdrop-blur-sm border border-[#EAF2EF] shadow-lg shadow-[#0A5C4F]/5 hover:border-[#C2EADB] card-hover-lift max-w-[340px] xl:max-w-[380px] w-full"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 xl:w-10 xl:h-10 rounded-xl bg-[#E8F5F1] text-[#0A5C4F] flex items-center justify-center shrink-0 group-hover:bg-[#0A5C4F] group-hover:text-white transition-colors">
                    <MapPin className="w-4 h-4 xl:w-5 xl:h-5" aria-hidden="true" />
                  </div>
                  <div className="text-left min-w-0">
                    <span className="font-sans font-bold text-sm text-[#122421] block leading-snug truncate">
                      {hospitalConfig.location.cardTitle}
                    </span>
                    <span className="text-xs sm:text-sm text-[#3B524E] font-semibold block truncate">
                      {hospitalConfig.location.cardSubtext}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 xl:w-5 xl:h-5 text-[#0A5C4F] shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
              </a>
            </div>

          </div>

          {/* Desktop grid spacer for right columns */}
          <div className="hidden lg:block lg:col-span-6 xl:col-span-7 pointer-events-none" aria-hidden="true" />

        </div>
      </div>

      {/* 6. Hero → Gallery Seamless Organic Wave Transition */}
      <div className="w-full relative lg:absolute lg:bottom-0 lg:left-0 lg:right-0 z-20 pointer-events-none mt-4 sm:mt-6 lg:mt-0">
        <HeroToGalleryWave />
      </div>
    </section>
  );
}
