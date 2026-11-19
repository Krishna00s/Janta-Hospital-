import Image from "next/image";
import { Phone, ArrowUpRight, Clock, ShieldCheck, MapPin } from "lucide-react";
import { hospitalConfig } from "@/content/hospital";
import { Badge } from "@/components/shared/Badge";
import { ServicesToDoctorsWave } from "@/components/ui/SectionWaves";
import { BotanicalBranchingTendril } from "@/components/ui/BotanicalDecorations";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

export function MedicalServices() {
  const { contact, imagery } = hospitalConfig;
  const phoneHref = `tel:${contact.phone.value}`;

  return (
    <section
      id="departments"
      aria-labelledby="services-heading"
      className="relative w-full pt-10 sm:pt-14 lg:pt-16 pb-0 bg-white text-[#122421] overflow-hidden"
    >
      {/* Abstract Organic Botanical Tendril Branching behind service cards */}
      <BotanicalBranchingTendril />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 pb-8 sm:pb-12">
        
        {/* Compact Editorial Heading with Scroll Entrance */}
        <ScrollReveal direction="heading" className="max-w-xl mb-6 sm:mb-8">
          <Badge variant="mint" dot className="mb-2 sm:mb-3">
            SERVICES
          </Badge>
          <h2
            id="services-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#122421] leading-tight"
          >
            इलाज और सुविधाएँ
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#475B57]">
            Lohardaga में आपके और आपके परिवार के लिए ज़रूरी स्वास्थ्य सुविधाएँ।
          </p>
        </ScrollReveal>

        {/* Varied Image-Led Service Tiles Grid with Lift Interaction & Progressive Entrance */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-stretch">
          
          {/* Tile 1: 24-Hour Emergency Care (Emphasized Primary Card - Spans 7 cols on lg) */}
          <ScrollReveal direction="card" delay={0} className="lg:col-span-7 flex">
            <div className="group relative rounded-3xl p-5 sm:p-7 bg-gradient-to-br from-[#0A5C4F] to-[#074B40] text-white shadow-md overflow-hidden flex flex-col justify-between min-h-[250px] sm:min-h-[300px] w-full card-hover-lift">
              
              {/* Background Clean Medical Illustration Accent */}
              <div className="pointer-events-none absolute -right-6 -bottom-6 w-56 sm:w-72 h-44 sm:h-56 opacity-25 overflow-hidden">
                <Image
                  src="/illustrations/service-emergency-24h.svg"
                  alt="24 Hour emergency medical illustration"
                  fill
                  className="object-contain object-right-bottom"
                />
              </div>

              <div>
                <div className="flex items-center justify-between gap-3 mb-4 sm:mb-5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold tracking-wider text-emerald-200 border border-white/20">
                    <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                    24 घंटे Emergency
                  </span>
                  <span className="text-[11px] font-semibold text-emerald-200/80 uppercase tracking-widest">
                    Emergency Hotline
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold font-sans text-white leading-tight">
                  24 घंटे Emergency इलाज
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-emerald-100/90 mt-1.5 font-normal max-w-xl">
                  अचानक तबीयत बिगड़ने, चोट या दर्द में तुरंत प्राथमिक इलाज और आपातकालीन देखभाल।
                </p>
              </div>

              <div className="pt-4 mt-3 border-t border-white/15 flex flex-wrap items-center justify-between gap-3 relative z-10">
                <a
                  href={phoneHref}
                  className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white text-[#0A5C4F] font-bold text-xs sm:text-sm hover:bg-emerald-50 transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <Phone className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Emergency Call करें ({contact.phone.formatted})</span>
                </a>

                <span className="text-xs text-emerald-200/80 font-medium">
                  सीधी बात • तुरंत मदद
                </span>
              </div>
            </div>
          </ScrollReveal>

          {/* Tile 2: Outpatient (OPD) Consultations (Spans 5 cols on lg - Clean Medical Illustration) */}
          <ScrollReveal direction="card" delay={100} className="lg:col-span-5 flex">
            <div className="group relative rounded-3xl overflow-hidden shadow-xs border border-[#E2ECE9] bg-white flex flex-col justify-between min-h-[250px] sm:min-h-[300px] w-full card-hover-lift">
              {/* Illustration Top Panel */}
              <div className="relative w-full h-44 sm:h-48 bg-[#EDF7F3] border-b border-[#E2EDE8] overflow-hidden">
                <Image
                  src="/illustrations/service-opd-consultation.svg"
                  alt="OPD consultation medical illustration at Janta Hospital"
                  fill
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-white/95 backdrop-blur-md text-[10px] font-bold text-[#0A5C4F] uppercase tracking-wider border border-[#CDEAE0] shadow-2xs">
                  Daily OPD
                </span>
              </div>

              {/* Card Content */}
              <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold font-sans text-[#122421] group-hover:text-[#0A5C4F] transition-colors">
                    Doctor से मिलें (OPD)
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475B57] mt-1 leading-relaxed">
                    बुखार, सर्दी, पेट दर्द और सामान्य बीमारियों के लिए Doctor से सलाह।
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-[#EEF3F0] flex items-center justify-between">
                  <a
                    href={phoneHref}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0A5C4F] hover:underline"
                  >
                    <span>OPD का समय जानें</span>
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                  <span className="text-[11px] font-semibold text-[#6B7F7B]">Ground Floor</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Tile 3: On-Site Pharmacy (Spans 5 cols on lg - Clean Medical Illustration) */}
          <ScrollReveal direction="card" delay={140} className="lg:col-span-5 flex">
            <div className="group relative rounded-3xl overflow-hidden shadow-xs border border-[#E2ECE9] bg-white flex flex-col justify-between min-h-[250px] sm:min-h-[290px] w-full card-hover-lift">
              {/* Illustration Top Panel */}
              <div className="relative w-full h-40 sm:h-44 bg-[#EDF7F3] border-b border-[#E2EDE8] overflow-hidden">
                <Image
                  src="/illustrations/service-pharmacy-counter.svg"
                  alt="On-site pharmacy counter medical illustration at Janta Hospital"
                  fill
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-white/95 backdrop-blur-md text-[10px] font-bold text-[#0A5C4F] uppercase tracking-wider border border-[#CDEAE0] shadow-2xs">
                  Front Porch
                </span>
              </div>

              {/* Card Content */}
              <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold font-sans text-[#122421] group-hover:text-[#0A5C4F] transition-colors">
                    Hospital में दवा की दुकान
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475B57] mt-1 leading-relaxed">
                    लिखी गई सभी ज़रूरी दवाएँ और पट्टियाँ सीधे front porch counter पर उपलब्ध।
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-[#EEF3F0] flex items-center justify-between">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0A5C4F] hover:underline"
                  >
                    <span>दवा के बारे में पूछें</span>
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                  <span className="text-[11px] font-semibold text-[#6B7F7B]">दवाई / Counter</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Tile 4: Dressings & Minor Procedures (Spans 7 cols on lg - Illustrated Clinical) */}
          <ScrollReveal direction="card" delay={180} className="lg:col-span-7 flex">
            <div className="group relative rounded-3xl p-5 sm:p-7 border border-[#EAF2EF] bg-white hover:border-[#C2EADB] shadow-xs transition-all flex flex-col md:flex-row items-center justify-between gap-5 min-h-[220px] sm:min-h-[260px] w-full card-hover-lift overflow-hidden">
              <div className="flex-1 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-2 mb-2.5">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#E8F5F1] text-[10px] font-bold text-[#0A5C4F]">
                      <ShieldCheck className="w-3 h-3" aria-hidden="true" />
                      मरहम-पट्टी
                    </span>
                    <span className="text-[10px] text-[#6B7F7B] font-medium">साफ़ और सुरक्षित</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold font-sans text-[#122421] group-hover:text-[#0A5C4F] transition-colors">
                    मरहम-पट्टी और Injection
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475B57] mt-1.5 leading-relaxed">
                    घाव की सफ़ाई, पट्टी बदलना, injection और BP / Sugar की नियमित जाँच।
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#EEF3F0] flex flex-wrap items-center justify-between gap-3">
                  <a
                    href={phoneHref}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0A5C4F] hover:text-[#074B40] transition-colors"
                  >
                    <span>Reception से बात करें</span>
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>

                  <span className="inline-flex items-center gap-1 text-[11px] text-[#6B7F7B]">
                    <MapPin className="w-3.5 h-3.5 text-[#0A5C4F]" aria-hidden="true" />
                    Palmerganj, Lohardaga
                  </span>
                </div>
              </div>

              {/* Side Vector Graphic */}
              <div className="relative w-36 sm:w-44 h-32 sm:h-36 rounded-2xl bg-[#EDF7F3] border border-[#D5EAE0] overflow-hidden shrink-0 hidden sm:block">
                <Image
                  src="/illustrations/service-procedures-dressing.svg"
                  alt="Dressing and clinical procedures medical illustration"
                  fill
                  className="object-cover p-1 group-hover:scale-104 transition-transform duration-500"
                />
              </div>
            </div>
          </ScrollReveal>

        </div>

      </div>

      {/* Services → Doctors Expressive Sage & Mint Wave Transition */}
      <ServicesToDoctorsWave />
    </section>
  );
}
