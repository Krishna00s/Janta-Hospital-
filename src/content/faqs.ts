export interface FAQItem {
  question: string;
  answer: string;
  category: "visit" | "appointment" | "emergency";
}

export const generalFaqs: FAQItem[] = [
  {
    question: "Where is Janta Hospital located in Lohardaga?",
    answer: "The hospital is situated in Lohardaga, Jharkhand, conveniently accessible near the main bus station and Powerganj area.",
    category: "visit",
  },
  {
    question: "Do I need an appointment before visiting the OPD?",
    answer: "Walk-in consultations are typically welcomed for OPD visits. However, patients are encouraged to call reception in advance to confirm daily doctor availability and consulting hours.",
    category: "appointment",
  },
  {
    question: "What documents should I bring for a doctor consultation?",
    answer: "Please bring any previous medical prescriptions, lab reports, discharge summaries, and a valid photo ID to assist the doctor with your medical history.",
    category: "visit",
  },
];
