import { Metadata } from "next";
import Image from "next/image";
import {
  Phone,
  MessageSquare,
  MapPin,
  Clock,
  Navigation,
  ShieldCheck,
  Building,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/shared/PageHero";
import { GoogleMapPreview } from "@/components/home/GoogleMapPreview";
import { ContactCTA } from "@/components/shared/ContactCTA";
import { Container } from "@/components/shared/Container";
import { BotanicalSideClimber } from "@/components/ui/BotanicalDecorations";
import { hospitalConfig } from "@/content/hospital";

export const metadata: Metadata = {
  title: "Contact & Directions | 24-Hour Emergency Line | Janta Hospital",
  description:
    "Contact Janta Hospital in Palmerganj, Lohardaga, Jharkhand. 24-hour emergency hotline +91 96938 21174, WhatsApp assistance, Google Maps directions, and visiting hours.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact & Directions | Janta Hospital Lohardaga",
    description:
      "Find Janta Hospital behind Head Post Office in Palmerganj, Lohardaga. 24/7 emergency hotline, alternate duty numbers, and interactive Google Maps.",
    url: "https://jantahospital.in/contact",
  },
};

export default function ContactPage() {
  const primaryPhoneHref = `tel:${hospitalConfig.contact.phone.value}`;

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Page Hero */}
        <PageHero
          breadcrumbs={[{ label: "पता और Contact" }]}
          eyebrow="CONTACT & DIRECTIONS"
          title="पता और"
          italicWord="Contact"
          description="Lohardaga के Palmerganj में Head Post Office के पीछे। Emergency में तुरंत आएँ या Phone पर संपर्क करें।"
          action={
            <a
              href={primaryPhoneHref}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0A5C4F] text-white font-bold text-xs sm:text-sm hover:bg-[#07463C] transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A5C4F]"
            >
              <Phone className="w-4 h-4 text-white" aria-hidden="true" />
              <span>Emergency Call ({hospitalConfig.contact.phone.formatted})</span>
            </a>
          }
        />

        {/* Section A: Primary Contact Cards */}
        <section className="relative py-10 sm:py-16 bg-white overflow-hidden" aria-labelledby="contact-options-heading">
          {/* Soft asymmetric botanical curve near contact information */}
          <BotanicalSideClimber side="right" />
          <Container className="relative z-10">
            <h2 id="contact-options-heading" className="sr-only">
              Direct Contact & Emergency Options
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-start">
              
              {/* Card 1: 24/7 Primary Emergency Hotline */}
              <div className="bg-[#EBF5F1] rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-[#A9DCCB] shadow-xs flex flex-col justify-between space-y-5">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="w-10 h-10 rounded-xl bg-[#0A5C4F] text-white flex items-center justify-center">
                      <Phone className="w-5 h-5 text-[#7CE4C9]" aria-hidden="true" />
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#0A5C4F] text-white text-[11px] font-bold uppercase tracking-wider">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#7CE4C9] animate-pulse" />
                      24 / 7 Active
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-extrabold text-[#122421] tracking-tight">
                    Emergency Helpline
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475B57] mt-1.5 leading-relaxed">
                    24 घंटे सीधे Duty Staff और Doctor से तुरंत बातचीत।
                  </p>

                  <div className="mt-4 pt-3 border-t border-[#CCE6DC]">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#0A5C4F] block mb-1">
                      Hospital का मुख्य नंबर:
                    </span>
                    <a
                      href={primaryPhoneHref}
                      className="font-sans font-extrabold text-xl sm:text-2xl text-[#0A5C4F] hover:text-[#07463C] transition-colors"
                    >
                      {hospitalConfig.contact.phone.formatted}
                    </a>
                  </div>
                </div>

                <a
                  href={primaryPhoneHref}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#0A5C4F] text-white font-bold text-xs sm:text-sm hover:bg-[#07463C] transition-colors shadow-xs"
                >
                  <Phone className="w-4 h-4 text-white" aria-hidden="true" />
                  <span>Emergency Call करें</span>
                </a>
              </div>

              {/* Card 2: WhatsApp Inquiries */}
              <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-[#D8ECE2] shadow-xs flex flex-col justify-between space-y-5">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="w-10 h-10 rounded-xl bg-[#E8F5F1] text-[#0A5C4F] flex items-center justify-center">
                      <MessageSquare className="w-5 h-5 text-[#0A5C4F]" aria-hidden="true" />
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-[#E8F5F1] text-[#0A5C4F] text-[11px] font-bold uppercase tracking-wider">
                      Quick Message
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-extrabold text-[#122421] tracking-tight">
                    WhatsApp पर पूछें
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475B57] mt-1.5 leading-relaxed">
                    Doctor के समय, Token या दवा की जानकारी के लिए WhatsApp पर Message भेजें।
                  </p>

                  <div className="mt-4 pt-3 border-t border-[#EAEFEA]">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#3B524E] block mb-1">
                      WhatsApp नंबर:
                    </span>
                    <span className="font-mono font-bold text-lg text-[#122421]">
                      +91 {hospitalConfig.contact.whatsapp.value}
                    </span>
                  </div>
                </div>

                <a
                  href={hospitalConfig.contact.whatsapp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#E8F5F1] text-[#0A5C4F] font-bold text-xs sm:text-sm hover:bg-[#0A5C4F] hover:text-white transition-all border border-[#A9DCCB]"
                >
                  <MessageSquare className="w-4 h-4" aria-hidden="true" />
                  <span>WhatsApp पर Chat करें</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </div>

              {/* Card 3: Alternate Signboard Duty Lines */}
              <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-[#D8ECE2] shadow-xs flex flex-col justify-between space-y-5">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="w-10 h-10 rounded-xl bg-gray-100 text-gray-700 flex items-center justify-center">
                      <ShieldCheck className="w-5 h-5 text-[#0A5C4F]" aria-hidden="true" />
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-gray-100 text-gray-700 text-[11px] font-bold uppercase tracking-wider">
                      ड्यूटी नंबर
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-extrabold text-[#122421] tracking-tight">
                    अन्य संपर्क नंबर
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475B57] mt-1.5 leading-relaxed">
                    Emergency या ड्यूटी पर बात करने के अन्य नंबर।
                  </p>

                  <div className="mt-4 pt-3 border-t border-[#EAEFEA] space-y-2">
                    {hospitalConfig.contact.phone.alternatePhones.map((ph) => (
                      <div key={ph} className="flex items-center justify-between">
                        <span className="text-xs text-[#526964]">ड्यूटी नंबर:</span>
                        <a
                          href={`tel:+91${ph}`}
                          className="font-mono text-xs font-bold text-[#0A5C4F] hover:underline"
                        >
                          +91 {ph}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 text-center text-[11px] text-[#3B524E]">
                  <span>मुख्य नंबर व्यस्त होने पर इन नंबरों पर Call करें</span>
                </div>
              </div>

            </div>
          </Container>
        </section>

        {/* Section B: Physical Address & Real Google Maps Card */}
        <section className="py-10 sm:py-16 bg-[#F8FAF9] border-y border-[#E5EFEA]">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* Left Column: Full Address & Transit Instructions */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#0A5C4F]">
                    Directions & Landmark
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#122421] tracking-tight mt-1 leading-tight">
                    <span>Hospital कैसे </span>
                    <span className="font-serif italic font-normal text-[#0A5C4F]">
                      पहुँचें?
                    </span>
                  </h2>
                </div>

                {/* Address Card */}
                <div className="p-5 bg-white rounded-2xl border border-[#D5E5DE] shadow-2xs space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#0A5C4F] uppercase tracking-wider">
                    <MapPin className="w-4 h-4" aria-hidden="true" />
                    <span>Hospital का पता</span>
                  </div>
                  <p className="text-sm font-extrabold text-[#122421] leading-snug">
                    {hospitalConfig.location.fullAddress}
                  </p>
                  <p className="text-xs text-[#475B57] pt-1">
                    Head Post Office के ठीक पीछे, Palmerganj, Lohardaga, Jharkhand – 835302
                  </p>
                </div>

                {/* Transit Details */}
                <div className="space-y-3">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#3B524E]">
                    रास्ता और पहचान (Landmarks)
                  </h3>

                  <div className="flex items-start gap-3 p-3.5 bg-white rounded-xl border border-[#E0EFE8]">
                    <Navigation className="w-4 h-4 text-[#0A5C4F] shrink-0 mt-0.5" aria-hidden="true" />
                    <div className="text-xs leading-relaxed text-[#475B57]">
                      <strong className="text-[#122421] block mb-0.5">Lohardaga Main Bus Stand से</strong>
                      बस स्टैंड से केवल 3 से 5 मिनट की पैदल दूरी। Palmerganj मुख्य डाकघर की तरफ आएँ।
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 bg-white rounded-xl border border-[#E0EFE8]">
                    <Building className="w-4 h-4 text-[#0A5C4F] shrink-0 mt-0.5" aria-hidden="true" />
                    <div className="text-xs leading-relaxed text-[#475B57]">
                      <strong className="text-[#122421] block mb-0.5">Head Post Office Landmark</strong>
                      लोहरदगा मुख्य डाकघर के ठीक पीछे वाली गली में। सामने 24 घंटे का Signboard दिखाई देगा।
                    </div>
                  </div>
                </div>

                {/* 24/7 Telephone Assistance Supporting Illustration Card */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#D5E5DE] shadow-2xs flex items-center gap-4">
                  <div className="relative w-20 h-20 rounded-xl bg-[#EDF7F3] border border-[#D5EAE0] overflow-hidden shrink-0">
                    <Image
                      src="/illustrations/contact-helpdesk-assistance.svg"
                      alt="24/7 Reception helpdesk and patient guidance illustration"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm text-[#122421]">24 घंटे सहायता डेस्क</h4>
                    <p className="text-xs text-[#475B57] mt-0.5 leading-relaxed">
                      रास्ता पूछने या आपातकालीन सहायता के लिए किसी भी समय Reception Desk पर फ़ोन करें।
                    </p>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={hospitalConfig.contact.mapsUrl.value}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#0A5C4F] text-white font-bold text-xs sm:text-sm hover:bg-[#07463C] transition-colors shadow-sm"
                  >
                    <Navigation className="w-4 h-4" aria-hidden="true" />
                    <span>Google Maps में रास्ता देखें</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#7CE4C9]" aria-hidden="true" />
                  </a>
                </div>
              </div>

              {/* Right Column: Google Maps Interactive Card */}
              <div className="lg:col-span-7">
                <GoogleMapPreview mapsUrl={hospitalConfig.contact.mapsUrl.value} />
              </div>

            </div>
          </Container>
        </section>

        {/* Section C: Operating & Consultation Hours */}
        <section className="py-10 sm:py-16 bg-white">
          <Container>
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <span className="text-xs font-bold uppercase tracking-widest text-[#0A5C4F]">
                  Hospital Timings
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#122421] tracking-tight mt-1 leading-tight">
                  <span>Hospital खुलने का </span>
                  <span className="font-serif italic font-normal text-[#0A5C4F]">
                    समय।
                  </span>
                </h2>
              </div>

              <div className="rounded-2xl border border-[#D5E5DE] overflow-hidden divide-y divide-[#EBF2EE]">
                <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-[#FCFDFD]">
                  <div>
                    <span className="text-xs font-bold uppercase text-[#0A5C4F] block">
                      Emergency सेवा
                    </span>
                    <span className="text-xs text-[#526964]">
                      अचानक बीमारी, चोट या आपातकाल के लिए
                    </span>
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-[#0A5C4F] inline-flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#0A5C4F] animate-pulse" />
                    24 घंटे खुला (हर दिन)
                  </span>
                </div>

                <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-white">
                  <div>
                    <span className="text-xs font-bold uppercase text-[#122421] block">
                      सुबह की OPD (Doctor से मिलें)
                    </span>
                    <span className="text-xs text-[#526964]">
                      सामान्य बीमारियों की जाँच, फॉलो-अप और BP/Sugar जाँच
                    </span>
                  </div>
                  <span className="text-xs sm:text-sm text-[#122421] font-semibold">
                    सोम – शनि: सुबह 9:00 – दोपहर 1:00
                  </span>
                </div>

                <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-[#FCFDFD]">
                  <div>
                    <span className="text-xs font-bold uppercase text-[#122421] block">
                      शाम की OPD
                    </span>
                    <span className="text-xs text-[#526964]">
                      कामकाजी लोगों और परिवारों के लिए शाम की OPD
                    </span>
                  </div>
                  <span className="text-xs sm:text-sm text-[#122421] font-semibold">
                    सोम – शनि: शाम 5:00 – रात 8:00
                  </span>
                </div>

                <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-white">
                  <div>
                    <span className="text-xs font-bold uppercase text-[#122421] block">
                      दवा की दुकान (Pharmacy Counter)
                    </span>
                    <span className="text-xs text-[#526964]">
                      Hospital परिसर में लिखी गई दवाएँ और सर्जिकल सामान
                    </span>
                  </div>
                  <span className="text-xs sm:text-sm text-[#122421] font-semibold">
                    Hospital समय में उपलब्ध
                  </span>
                </div>
              </div>

            </div>
          </Container>
        </section>

        {/* Pre-Footer Call to Action */}
        <ContactCTA />
      </main>

      <Footer />
    </div>
  );
}
