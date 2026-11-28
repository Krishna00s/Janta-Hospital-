import { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Lock, ExternalLink, Phone, MapPin, AlertCircle, FileText } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/shared/Container";
import { PageHero } from "@/components/shared/PageHero";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { ConsentManagerControl } from "@/components/analytics/ConsentManagerControl";
import { hospitalConfig, primaryPhone, primaryPhoneHref } from "@/content/hospital";
import { getCanonicalUrl, getSiteUrl, siteConfig } from "@/config/site";
import { generateBreadcrumbJsonLd, generatePrivacyPolicyJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: {
    absolute: "Privacy Policy | Janta Hospital Lohardaga",
  },
  description:
    "Read the Privacy Policy for Janta Hospital Lohardaga website. Learn how your data is handled on our public informational website.",
  alternates: {
    canonical: getCanonicalUrl("/privacy-policy"),
  },
  openGraph: {
    title: "Privacy Policy | Janta Hospital Lohardaga",
    description:
      "Privacy Policy for Janta Hospital Lohardaga website. Transparent details on website operation, privacy-first analytics and communication channels.",
    url: getCanonicalUrl("/privacy-policy"),
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy | Janta Hospital Lohardaga",
    description:
      "Privacy Policy for Janta Hospital Lohardaga website. Information on data practices and privacy.",
  },
};

export default function PrivacyPolicyPage() {
  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: "Privacy Policy", path: "/privacy-policy" },
  ]);

  const privacyJsonLd = generatePrivacyPolicyJsonLd();

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(privacyJsonLd) }}
      />
      <Header />

      <main className="flex-1">
        {/* Page Hero */}
        <PageHero
          breadcrumbs={[{ label: "Privacy Policy" }]}
          eyebrow="LEGAL &amp; TRANSPARENCY"
          title="Privacy"
          italicWord="Policy"
          description="Official privacy policy and data governance practices for the Janta Hospital Lohardaga website — our transparent commitment to your privacy — आपकी निजता और डेटा सुरक्षा के प्रति हमारी प्रतिबद्धता।"
        />

        {/* Content Section */}
        <section className="py-12 sm:py-16 bg-white">
          <Container>
            <div className="max-w-3xl mx-auto space-y-10 text-sm sm:text-base text-[#2E4540] leading-relaxed">
              
              {/* Important Summary Banner */}
              <div className="p-5 sm:p-6 rounded-3xl bg-[#F4FAF7] border-2 border-[#B7D8CA] space-y-3">
                <div className="flex items-center gap-2.5 text-[#0A5C4F]">
                  <ShieldCheck className="w-5 h-5 text-[#0A5C4F]" aria-hidden="true" />
                  <h2 className="font-semibold text-base sm:text-lg text-[#122421]">
                    Key Privacy &amp; Data Summary
                  </h2>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-[#2E4540]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#0A5C4F] font-bold">•</span>
                    <span>
                      This website is a <strong>public informational portal</strong>. We do not collect, request, or store personal medical records, confidential health histories, or online patient accounts — यह एक सार्वजनिक सूचनात्मक वेबसाइट है।
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0A5C4F] font-bold">•</span>
                    <span>
                      We never sell, rent, or trade visitor data to advertisers, brokers, or commercial third parties — हम किसी तीसरे पक्ष को डेटा नहीं बेचते हैं।
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0A5C4F] font-bold">•</span>
                    <span>
                      For website performance, we use privacy-friendly Cloudflare Web Analytics, which does not set tracking cookies or track individual browsing histories.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Section 1 */}
              <div className="space-y-3">
                <h3 className="text-xl sm:text-2xl font-semibold text-[#122421] tracking-tight">
                  1. Purpose of Website &amp; Data Scope
                </h3>
                <p>
                  The official website of Janta Hospital (<code>{getSiteUrl()}</code>) is published to provide residents of Lohardaga, Jharkhand, and surrounding areas with accurate, verified information regarding 24/7 emergency care, OPD timings, doctor availability, hospital location, and telephone contact channels.
                </p>
                <p>
                  The website does not require visitor login, passwords, payment credentials, or personal health records — वेबसाइट पर किसी प्रकार का लॉगिन या संवेदनशील स्वास्थ्य डेटा दर्ज नहीं कराया जाता।
                </p>
              </div>

              {/* Section 2 */}
              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-semibold text-[#122421] tracking-tight">
                  2. Cookies &amp; Website Analytics Policy
                </h3>
                <p>
                  To monitor technical site reliability, evaluate page loading speeds, and verify that emergency contact actions function properly across mobile devices, our website utilizes privacy-conscious analytics:
                </p>

                {/* Sub-section A: Cloudflare Web Analytics */}
                <div className="p-4 sm:p-5 rounded-2xl bg-[#FCFDFD] border border-[#D2E6DC] text-xs sm:text-sm space-y-2">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#0A5C4F]" aria-hidden="true" />
                    <strong className="text-[#122421] text-sm">A. Cloudflare Web Analytics (Always Active):</strong>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-[#475B57] pl-1">
                    <li>Does not set client-side tracking cookies or collect personal identifiers.</li>
                    <li>Does not track IP addresses, individual visitor identities, or browsing histories.</li>
                    <li>Measures aggregate technical metrics such as page load speed, country of origin, and screen dimensions.</li>
                  </ul>
                  <p className="text-[#0A5C4F] text-xs font-medium pt-1">
                    (Cloudflare एनालिटिक्स केवल वेबसाइट की लोडिंग स्पीड और तकनीकी कार्यक्षमता देखता है, यह कोई व्यक्तिगत डेटा ट्रैक नहीं करता।)
                  </p>
                </div>

                {/* Sub-section B: Privacy-Conscious Google Analytics 4 */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#B7D8CA] text-xs sm:text-sm space-y-3">
                  <div className="flex items-center gap-2">
                    <Lock className="w-4 h-4 text-[#0A5C4F]" aria-hidden="true" />
                    <strong className="text-[#122421] text-sm">
                      B. Google Analytics 4 (GA4 — Privacy Controls):
                    </strong>
                  </div>
                  <p className="text-[#2E4540] leading-relaxed">
                    As a healthcare information portal, patient privacy is paramount. In accordance with strict healthcare data governance guidelines, the following privacy safeguards are configured: मरीजों की गोपनीयता हमारी सर्वोच्च प्राथमिकता है। वेबसाइट पर कोई भी संवेदनशील स्वास्थ्य डेटा या मरीज की बीमारी से जुड़ी जानकारी एकत्र नहीं की जाती।
                  </p>
                  
                  <ul className="list-disc list-inside space-y-1.5 text-[#475B57] pl-1">
                    <li>
                      <strong className="text-[#122421]">Consent-Gated Loading:</strong> Analytics scripts are completely disabled by default until explicit visitor consent is granted via the consent banner.
                    </li>
                    <li>
                      <strong className="text-[#122421]">Advertising &amp; Remarketing Prohibited:</strong> Google Signals, ad personalization, and remarketing audiences are permanently disabled at code level.
                    </li>
                    <li>
                      <strong className="text-[#122421]">Restricted Data Processing (RDP) &amp; IP Anonymization:</strong> IP addresses are automatically anonymized, and Restricted Data Processing is enforced.
                    </li>
                    <li>
                      <strong className="text-[#122421]">Prohibition of Sensitive Health Data (URL Sanitization):</strong> Specific medical conditions, treatment URLs, or doctor profile queries are sanitized into generic path events to prevent inferring medical interests.
                    </li>
                    <li>
                      <strong className="text-[#122421]">Contact Interaction Logging:</strong> Clicks on telephone, WhatsApp, or Google Maps links record only the generic communication channel (e.g. &apos;phone&apos;, &apos;emergency_phone&apos;). Personal telephone numbers or messages are never recorded.
                    </li>
                    <li>
                      <strong className="text-[#122421]">Production Domain Restriction:</strong> Analytics tracking operates exclusively on the verified production domain (<code>https://jantahospitallohardaga.in</code>).
                    </li>
                  </ul>

                  {/* Interactive Consent Manager Control */}
                  <div className="pt-2">
                    <ConsentManagerControl />
                  </div>
                </div>
              </div>

              {/* Section 3 */}
              <div className="space-y-3">
                <h3 className="text-xl sm:text-2xl font-semibold text-[#122421] tracking-tight">
                  3. Third-Party Services &amp; External Links
                </h3>
                <p>
                  For patient convenience, our website provides direct links to communication and navigation services:
                </p>
                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-white border border-[#D2E6DC] space-y-1">
                    <span className="font-semibold text-[#122421] block">
                      Telephone Calling Links:
                    </span>
                    <p className="text-xs sm:text-sm text-[#475B57]">
                      Clicking telephone links initiates your device dialer. Voice calls are handled directly by your telecommunications network provider — कॉल लिंक पर क्लिक करने से आपके फोन का डायलर खुलता है।
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-[#D2E6DC] space-y-1">
                    <span className="font-semibold text-[#122421] block">
                      WhatsApp Messaging Links:
                    </span>
                    <p className="text-xs sm:text-sm text-[#475B57]">
                      Opening WhatsApp redirects to the official application under WhatsApp&apos;s end-to-end encryption and terms of service — व्हाट्सएप संदेश एंड-टू-एंड एन्क्रिप्टेड और सुरक्षित रहते हैं।
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-[#D2E6DC] space-y-1">
                    <span className="font-semibold text-[#122421] block">
                      Google Maps Directions:
                    </span>
                    <p className="text-xs sm:text-sm text-[#475B57]">
                      Direction links launch Google Maps under Google&apos;s standard terms and privacy policy to guide visitors to our facility — गूगल मैप्स लिंक अस्पताल तक पहुँचने का सही रास्ता दिखाता है।
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 4 */}
              <div className="space-y-3">
                <h3 className="text-xl sm:text-2xl font-semibold text-[#122421] tracking-tight">
                  4. On-Premises Patient Medical Record Confidentiality
                </h3>
                <p>
                  When patients consult physicians in person at Janta Hospital, all physical OPD prescription slips, clinical diagnostic files, and billing documentation are maintained under strict physical and administrative hospital confidentiality. Physical patient records are never shared online or exposed via this website — अस्पताल के सभी मेडिकल रिकॉर्ड पूर्णतः गोपनीय व सुरक्षित रखे जाते हैं।
                </p>
              </div>

              {/* Section 5: Contact & Inquiries */}
              <div className="space-y-3 pt-2">
                <h3 className="text-xl sm:text-2xl font-semibold text-[#122421] tracking-tight">
                  5. Privacy Inquiries &amp; Contact Details
                </h3>
                <p>
                  For inquiries or questions regarding our website privacy practices, please contact the hospital administration: वेबसाइट गोपनीयता अथवा डेटा संबंधी किसी भी प्रश्न के लिए आप सीधे अस्पताल प्रशासन से संपर्क कर सकते हैं।
                </p>
                <div className="p-5 rounded-2xl bg-[#F4FAF7] border border-[#B7D8CA] text-xs sm:text-sm space-y-2">
                  <div className="flex items-center gap-2 font-bold text-[#122421]">
                    <MapPin className="w-4 h-4 text-[#0A5C4F]" aria-hidden="true" />
                    <span>Janta Hospital, Lohardaga</span>
                  </div>
                  <p className="text-[#475B57]">
                    Address: Main Road, near Head Post Office, Powergunj, Lohardaga, Jharkhand – 835302, India
                  </p>
                  <p className="text-[#475B57]">
                    Telephone: <a href={primaryPhoneHref} className="text-[#0A5C4F] font-semibold hover:underline">{primaryPhone}</a>
                  </p>
                </div>
              </div>

              {/* Management Note Flag */}
              <div className="p-4 rounded-xl bg-[#FAFCFA] border border-[#D2E6DC] text-xs text-[#475B57] flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-[#0A5C4F] shrink-0 mt-0.5" aria-hidden="true" />
                <span>
                  <strong>Notice:</strong> This privacy policy governs the public informational website. Clinical operations and hospital administrative protocols are governed by Janta Hospital management.
                </span>
              </div>

            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
