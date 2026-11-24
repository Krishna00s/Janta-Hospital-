/**
 * Patient-Focused Frequently Asked Questions (FAQ) Architecture
 *
 * Truth-in-Advertising:
 * All responses are strictly verified against approved hospital operations,
 * verified contact numbers, and verified physical location.
 */

export interface FAQItem {
  id: string;
  question: string;
  hindiQuestion: string;
  answer: string;
  category: "visit" | "emergency" | "doctors" | "services";
}

export const generalFaqs: FAQItem[] = [
  {
    id: "faq-location",
    question: "Where is Janta Hospital located in Lohardaga?",
    hindiQuestion: "जनता हॉस्पिटल लोहरदगा में कहाँ स्थित है?",
    answer:
      "Janta Hospital is located at Palmerganj, Behind Head Post Office, Lohardaga, Jharkhand – 835302. It is conveniently situated within 5 minutes walking distance from the Lohardaga Main Bus Stand with direct patient vehicle access.",
    category: "visit",
  },
  {
    id: "faq-contact",
    question: "What is Janta Hospital's contact number for general enquiries?",
    hindiQuestion: "जनता हॉस्पिटल का फोन नंबर और पूछताछ का तरीका क्या है?",
    answer:
      "For general hospital enquiries, OPD timings, and doctor availability, call our reception desk at +91 9341900715. You can also message our official hospital WhatsApp line at +91 9341900715.",
    category: "visit",
  },
  {
    id: "faq-emergency",
    question: "How do I contact Janta Hospital during a medical emergency?",
    hindiQuestion: "आपातकालीन स्थिति में हॉस्पिटल से कैसे संपर्क करें?",
    answer:
      "For acute medical emergencies, immediately call our 24/7 dedicated emergency line at +91 9308348606. Our emergency observation, acute triage, and wound care desk operate round the clock, 365 days a year.",
    category: "emergency",
  },
  {
    id: "faq-doctors",
    question: "Which doctors and specialists consult at Janta Hospital?",
    hindiQuestion: "हॉस्पिटल में कौन-से डॉक्टर और विशेषज्ञ उपलब्ध हैं?",
    answer:
      "Janta Hospital features resident general physicians (Dr. Parwej Alam and Dr. Rahbar Bharti) for routine medicine, alongside consulting on-call specialists in General Surgery, Orthopaedic Surgery, Laparoscopic Surgery, Neurosurgery, and Anaesthesia.",
    category: "doctors",
  },
  {
    id: "faq-timings",
    question: "How can I confirm doctor consultation timings before visiting?",
    hindiQuestion: "डॉक्टर से मिलने का समय और उपलब्धता कैसे पता करें?",
    answer:
      "Walk-in consultations are accommodated for general OPD. However, visiting surgical specialists attend on specific days and hours. Patients and families are encouraged to call reception at +91 9341900715 before travelling to confirm the daily doctor schedule.",
    category: "doctors",
  },
  {
    id: "faq-pharmacy",
    question: "Does Janta Hospital have an on-site medicine shop / pharmacy?",
    hindiQuestion: "क्या हॉस्पिटल परिसर में दवा की दुकान उपलब्ध है?",
    answer:
      "Yes. Janta Hospital operates an on-site medicine dispensary counter on the ground floor, dispensing essential prescribed medicines, dressing supplies, and surgical items for outpatients and emergency arrivals.",
    category: "services",
  },
];
