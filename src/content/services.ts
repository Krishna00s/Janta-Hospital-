/**
 * Services Data Architecture — Janta Hospital, Lohardaga
 *
 * Truth-in-Advertising Rules:
 * - Only services verified via physical building signage, on-site photography,
 *   or hospital administration confirmation are marked as 'verified'.
 * - Surgical and specialist categories were submitted by the hospital representative;
 *   exact capabilities, theatre equipment, and procedure schedules are marked
 *   as 'pending_confirmation' until formally ratified by hospital management.
 * - Do not invent diagnostic equipment (e.g. MRI, CT) or intensive care units.
 * - Do not claim guaranteed emergency operations onsite.
 */

export type ServiceCategory =
  | "Emergency"
  | "Surgical Services"
  | "Outpatient"
  | "Pharmacy"
  | "Clinical Support";

export interface HospitalService {
  id: string;
  name: string;
  hindiName?: string;
  shortDescription: string;
  fullDescription: string;
  category: ServiceCategory;
  badge: string;
  iconName: string;
  availability: string;
  image?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  keyFeatures: string[];
  actionLabel: string;
  actionHref: string;
  isEmergency: boolean;
  isSurgical?: boolean;
  status: "verified" | "pending_confirmation";
  verificationSource: string;
}

export const servicesData: HospitalService[] = [
  // 1. Emergency Treatment
  {
    id: "emergency-care",
    name: "24/7 Emergency Care",
    hindiName: "24/7 Emergency Medical Care",
    shortDescription:
      "Round-the-clock primary trauma care, rapid stabilization, medical oxygen, emergency injections, and duty doctor response in Lohardaga.",
    fullDescription:
      "Janta Hospital provides 24-hour emergency medical care in Powergunj, Lohardaga. Our resident duty doctors and nursing staff provide immediate clinical assessment, oxygen therapy, emergency injections, IV fluids, and primary stabilization — अस्पताल में 24 घंटे ड्यूटी डॉक्टर, ऑक्सीजन और जीवनरक्षक दवाओं की त्वरित प्राथमिक व्यवस्था उपलब्ध है।",
    category: "Emergency",
    badge: "24/7 Emergency",
    iconName: "activity",
    availability: "Available 24/7 • 365 Days",
    image: {
      src: "/images/gallery-entrance.webp",
      alt: "24-Hour emergency care and entrance access at Janta Hospital Lohardaga",
      width: 1200,
      height: 800,
    },
    keyFeatures: [
      "Immediate triage and vital sign stabilization upon hospital arrival",
      "Dedicated medical oxygen support and clinical nebulization setup",
      "Emergency injections, IV fluids, and essential life-saving medications",
      "24-hour on-duty resident physician and medical staff presence",
    ],
    actionLabel: "Emergency Call",
    actionHref: "tel:+919308348606",
    isEmergency: true,
    isSurgical: false,
    status: "verified",
    verificationSource:
      "24-Hour medical emergency service confirmed by hospital administration on premises",
  },

  // 2. General Surgery
  {
    id: "general-surgery",
    name: "General Surgery",
    hindiName: "General Surgery Consultation",
    shortDescription:
      "On-call specialist surgical consultations for hernia, appendicitis, hydrocele, sebaceous cysts, abscess drainage, and minor surgical care.",
    fullDescription:
      "Consultant general surgeons (Dr. Sushil Singh, Dr. Chandan Kumar, Dr. Shalini Ekka) are available on-call for clinical evaluation and surgical opinions. Minor procedures like wound suturing and abscess drainage are performed on-site — अनुभवी ऑन-कॉल सर्जनों द्वारा हर्निया, अपेंडिक्स, सिस्ट व फोड़ा समस्याओं में क्लिनिकल परामर्श दिया जाता है।",
    category: "Surgical Services",
    badge: "3 On-call Surgeons",
    iconName: "stethoscope",
    availability: "On-call Specialists • Upon Case Confirmation",
    image: {
      src: "/images/services/service-general-surgery.webp",
      alt: "Representative surgical theater and sterile procedure equipment for General Surgery",
      width: 800,
      height: 533,
    },
    keyFeatures: [
      "Specialist clinical consultations by experienced on-call general surgeons",
      "Evaluation and management planning for Hernia, Hydrocele, and Cysts",
      "Minor outpatient procedures: sterile suturing, abscess incision & drainage",
      "Structured tertiary referral guidance for major or critical surgical cases",
    ],
    actionLabel: "Check Availability",
    actionHref: "tel:+919341900715",
    isEmergency: false,
    isSurgical: true,
    status: "pending_confirmation",
    verificationSource:
      "Specialty submitted by hospital representative; individual procedure scheduling pending management confirmation",
  },

  // 3. Orthopaedic Surgery
  {
    id: "orthopaedic-surgery",
    name: "Orthopaedic Surgery",
    hindiName: "Orthopaedic & Bone Care Consultation",
    shortDescription:
      "Primary splinting and fracture stabilization, plus on-call specialist consultations for bone injuries, joint pain, and osteoarthritis.",
    fullDescription:
      "Immediate trauma care for accidental falls and road collisions with protective splinting and plaster stabilization, along with on-call orthopaedic specialist consultations for chronic joint and bone disorders — फ्रैक्चर व मोच में तुरंत प्राथमिक प्लास्टर/स्प्लिंट और जोड़ों के दर्द में विशेषज्ञ सलाह उपलब्ध है।",
    category: "Surgical Services",
    badge: "On-call Specialist",
    iconName: "shield-check",
    availability: "On-call Specialist • 24/7 Primary Splinting",
    image: {
      src: "/images/services/service-orthopaedic.webp",
      alt: "Representative orthopaedic bone and joint clinical examination",
      width: 800,
      height: 533,
    },
    keyFeatures: [
      "Immediate emergency splinting and plaster stabilization for acute fractures",
      "Clinical evaluation of knee osteoarthritis, back pain, and joint stiffness",
      "Medication management and lifestyle guidance for bone health and osteoporosis",
      "Emergency triage and tertiary referral coordination for severe trauma cases",
    ],
    actionLabel: "Check Availability",
    actionHref: "tel:+919341900715",
    isEmergency: false,
    isSurgical: true,
    status: "pending_confirmation",
    verificationSource:
      "Specialty submitted by hospital representative; specific surgical procedures pending management confirmation",
  },

  // 4. Laparoscopic Surgery
  {
    id: "laparoscopic-surgery",
    name: "Laparoscopic Surgery",
    hindiName: "Laparoscopic Surgery Consultation",
    shortDescription:
      "Minimally invasive keyhole surgical consultations for gallbladder stones, hernia, and appendix, offering faster post-operative recovery.",
    fullDescription:
      "Visiting consultant surgeons provide pre-operative clinical workups, ultrasound report reviews, and surgical feasibility advice for minimally invasive laparoscopic procedures — दूरबीन विधि द्वारा कम चीरा व कम दर्द में गॉलब्लैडर स्टोन, अपेंडिक्स व हर्निया के लिए सर्जन परामर्श।",
    category: "Surgical Services",
    badge: "Minimally Invasive",
    iconName: "stethoscope",
    availability: "On-call Panel • Pre-scheduled via Reception",
    image: {
      src: "/images/services/service-laparoscopic.webp",
      alt: "Representative laparoscopic and minimally invasive surgical equipment",
      width: 800,
      height: 533,
    },
    keyFeatures: [
      "Keyhole surgical evaluations for Gallbladder Stones and Appendicitis",
      "Expert surgical opinions on open versus laparoscopic hernia repair",
      "Pre-operative clinical fitness checks and ultrasound report assessments",
      "Clear guidance on post-procedure recovery timelines and wound precautions",
    ],
    actionLabel: "Check Availability",
    actionHref: "tel:+919341900715",
    isEmergency: false,
    isSurgical: true,
    status: "pending_confirmation",
    verificationSource:
      "Specialty submitted by hospital representative; laparoscopic theatre schedules pending management confirmation",
  },

  // 5. Neurosurgery
  {
    id: "neurosurgery",
    name: "Neurosurgery & Spine",
    hindiName: "Neurosurgery & Spine Consultation",
    shortDescription:
      "Primary vital stabilization for head trauma, and on-call neurosurgical consultations for sciatica, nerve pain, and spinal disc disorders.",
    fullDescription:
      "Rapid primary neurological stabilization (GCS triage, oxygen, anti-edema support) for head injuries, combined with on-call specialist consultations by Neurosurgeon Dr. Deepak Kumar for chronic nerve and spine conditions — हेड इंजरी का तुरंत प्राथमिक स्थिरीकरण और डॉ. दीपक कुमार द्वारा नसों व स्पाइन का परामर्श।",
    category: "Surgical Services",
    badge: "Consultant Neurosurgeon",
    iconName: "stethoscope",
    availability: "On-call Specialist • 24/7 Primary Head Injury Triage",
    image: {
      src: "/images/services/service-neurosurgery.webp",
      alt: "Representative neurosurgical and neurological assessment setup",
      width: 800,
      height: 533,
    },
    keyFeatures: [
      "Immediate GCS scoring, pupil checks, and primary head injury triage",
      "Vital life-support measures: oxygen therapy, anti-edema IV medications",
      "Consultant neurosurgical evaluations for sciatica and spinal disc disorders",
      "Rapid tertiary transfer coordination to Ranchi for emergency surgical cases",
    ],
    actionLabel: "Check Availability",
    actionHref: "tel:+919341900715",
    isEmergency: true,
    isSurgical: true,
    status: "pending_confirmation",
    verificationSource:
      "Specialty submitted by hospital representative; neurosurgery theatre access pending management confirmation",
  },

  // 6. Hospital Pharmacy
  {
    id: "pharmacy",
    name: "24/7 Hospital Pharmacy",
    hindiName: "24/7 Hospital Pharmacy & Dispensary",
    shortDescription:
      "On-site round-the-clock medicine counter providing essential prescribed drugs, emergency injections, and wound dressing supplies.",
    fullDescription:
      "Conveniently situated in the front veranda on the ground floor, our hospital dispensary operates 24 hours a day, 7 days a week, stocking genuine medicines, emergency injections, IV fluids, and first-aid supplies — अस्पताल के ग्राउंड फ्लोर पर 24 घंटे दवा काउंटर खुला रहता है ताकि सभी जरूरी दवाएँ तुरंत मिल सकें।",
    category: "Pharmacy",
    badge: "24/7 Onsite",
    iconName: "pill",
    availability: "Open 24 Hours • 7 Days a Week",
    image: {
      src: "/images/gallery-pharmacy.webp",
      alt: "24-Hour medicine dispensary counter at Janta Hospital Lohardaga",
      width: 1200,
      height: 800,
    },
    keyFeatures: [
      "Essential prescription medicines, antibiotics, and analgesics",
      "Emergency injections, Tetanus Toxoid (TT), and IV fluid formulations",
      "Sterile gauze, bandages, antiseptic Betadine, and wound dressing kits",
      "Round-the-clock telephone inquiry support via hospital reception desk",
    ],
    actionLabel: "Contact Pharmacy",
    actionHref: "tel:+919341900715",
    isEmergency: false,
    isSurgical: false,
    status: "verified",
    verificationSource:
      "24-Hour pharmacy physically verified and confirmed by hospital administration on premises",
  },
];

export const emergencyServices = servicesData.filter((s) => s.isEmergency);
export const surgicalServices = servicesData.filter((s) => s.isSurgical);
export const generalServices = servicesData.filter(
  (s) => !s.isEmergency && !s.isSurgical
);

export const servicesSectionConfig = {
  eyebrow: "OUR MEDICAL & SURGICAL SERVICES",
  title: "Comprehensive Healthcare in Lohardaga",
  subtitle:
    "Janta Hospital provides 24-hour emergency care, outpatient clinical consultations, an on-site 24/7 pharmacy, and visiting specialist surgical opinions across Lohardaga — 24 घंटे आपातकालीन सेवा, विशेषज्ञ परामर्श और अस्पताल फार्मेसी सुविधा।",
  emergencyNotice: {
    highlight: "24/7 Emergency Care",
    description:
      "Duty doctors and trained nursing staff are available round the clock for acute medical conditions, acute fevers, sudden injuries, and emergency stabilization.",
  },
  generalOpdNotice: {
    highlight: "Daily General OPD",
    description:
      "Consult experienced resident physicians daily for fevers, respiratory infections, blood pressure, diabetes, and routine preventative health evaluations.",
  },
  surgicalNotice: {
    highlight: "On-Call Surgical Specialists",
    description:
      "Specialist general surgeons, orthopaedic surgeons, and neurosurgeons visit on-call. Please confirm schedules and doctor availability with reception.",
  },
  receptionInquiry: {
    phoneFormatted: "+91 93419 00715",
    phoneValue: "+919341900715",
    helperText: "Contact hospital reception for doctor schedules and OPD inquiry",
  },
  services: servicesData,
};
