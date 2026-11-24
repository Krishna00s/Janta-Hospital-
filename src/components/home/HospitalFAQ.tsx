import { HelpCircle, ChevronDown, Phone, MessageSquare } from "lucide-react";
import { Badge } from "@/components/shared/Badge";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { generalFaqs } from "@/content/faqs";
import { primaryPhone, primaryPhoneHref, whatsappHref } from "@/content/hospital";
import { generateFaqJsonLd } from "@/lib/schema";

export function HospitalFAQ() {
  const faqJsonLd = generateFaqJsonLd(
    generalFaqs.map((f) => ({
      question: `${f.question} (${f.hindiQuestion})`,
      answer: f.answer,
    }))
  );

  return (
    <section
      id="faqs"
      aria-labelledby="faq-heading"
      className="relative w-full py-12 sm:py-16 lg:py-20 bg-[#F7FBF9] text-[#122421] border-t border-[#E2F0EA] overflow-hidden"
    >
      {/* Inject FAQPage Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal direction="heading" className="max-w-2xl mb-8 sm:mb-12">
          <Badge variant="mint" dot className="mb-2.5 sm:mb-3">
            PATIENT QUESTIONS &amp; INFORMATION
          </Badge>
          <h2
            id="faq-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-[#122421] leading-snug"
          >
            <span>मरीज़ों के</span>{" "}
            <span className="font-serif italic font-normal text-[#0A5C4F]">
              ज़रूरी सवाल
            </span>{" "}
            <span>और उनके जवाब</span>
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-[#38534C] font-normal leading-relaxed">
            Lohardaga में Janta Hospital आने से पहले location, doctor availability, emergency helpline और OPD से जुड़े सामान्य सवालों के प्रामाणिक उत्तर।
          </p>
        </ScrollReveal>

        {/* 2-Column Responsive FAQ Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5">
          {generalFaqs.map((faq, index) => (
            <ScrollReveal
              key={faq.id}
              direction="card"
              delay={index * 50}
              className="h-full"
            >
              <details
                className="group p-5 sm:p-6 rounded-2xl bg-white border border-[#D5EAE0] hover:border-[#98CEB7] transition-all shadow-2xs open:shadow-xs open:border-[#0A5C4F]/40"
              >
                <summary className="flex items-start justify-between gap-3 cursor-pointer list-none select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A5C4F] rounded-lg">
                  <div className="space-y-1 pr-2">
                    <h3 className="text-base sm:text-lg font-semibold text-[#122421] group-hover:text-[#0A5C4F] transition-colors leading-snug">
                      {faq.question}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-[#0A5C4F]">
                      {faq.hindiQuestion}
                    </p>
                  </div>
                  <span className="shrink-0 p-1.5 rounded-full bg-[#E8F5F0] text-[#0A5C4F] group-hover:bg-[#0A5C4F] group-hover:text-white transition-all group-open:rotate-180">
                    <ChevronDown className="w-4 h-4" aria-hidden="true" />
                  </span>
                </summary>
                <div className="mt-3.5 pt-3.5 border-t border-[#EEF7F3] text-sm text-[#2E4540] leading-relaxed font-normal">
                  {faq.answer}
                </div>
              </details>
            </ScrollReveal>
          ))}
        </div>

        {/* Still Have Questions? Compact Assist Bar */}
        <ScrollReveal
          direction="card"
          delay={300}
          className="mt-8 sm:mt-10 p-5 sm:p-6 rounded-2xl bg-[#E8F5F0] border border-[#BBDDCE] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#0A5C4F] text-white flex items-center justify-center shrink-0">
              <HelpCircle className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-semibold text-[#122421]">
                कोई और सवाल है या Doctor से मिलना चाहते हैं?
              </h4>
              <p className="text-xs sm:text-sm text-[#38534C]">
                Hospital Reception पर सीधे बात करें या WhatsApp पर मैसेज भेजें।
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2.5 shrink-0 w-full sm:w-auto justify-center">
            <a
              href={primaryPhoneHref}
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-[#0A5C4F] text-white hover:bg-[#08483E] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A5C4F]"
            >
              <Phone className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{primaryPhone}</span>
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-white border border-[#BBDDCE] text-[#0A5C4F] hover:bg-[#F2FBF7] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A5C4F]"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#16A34A]" aria-hidden="true" />
              <span>WhatsApp</span>
            </a>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
