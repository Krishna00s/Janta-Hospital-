/**
 * Doctors Data Architecture — Janta Hospital, Lohardaga
 *
 * Mandatory Truth-in-Advertising Rules:
 * - Specific doctors and roles provided by hospital administration.
 * - Dr. Parwej Alam (Consulting Physician) appears first.
 * - The 24/7 label describes hospital physician coverage, not a guarantee that
 *   either doctor is individually onsite around the clock.
 * - On-call specialists (General Surgery, Neurosurgery, Anaesthesia) are contacted
 *   according to clinical necessity and actual availability; they are not permanently onsite.
 * - Portrait image paths support independent replacement when official photos are provided.
 */

export type DoctorCategory =
  | "General Physicians"
  | "General Surgery"
  | "Neurosurgery"
  | "Anaesthesia";

export type AvailabilityType =
  | "24/7 Hospital Coverage"
  | "On-call Specialist";

export interface Doctor {
  id: string;
  name: string;
  initials: string;
  role: string;
  specialty: string;
  category: DoctorCategory;
  portrait: string | null;
  portraitAlt: string;
  portraitFocalPoint?: string;
  availabilityType: AvailabilityType;
  dutyHours: string;
  availabilityDetails: string;
  displayOrder: number;
  status: "verified" | "pending";
  bioEnglish?: string;
  bioHindi?: string;
  keySpecialties?: string[];
  serviceSlugs?: string[];
  faqs?: Array<{ question: string; answer: string }>;
}

export interface DepartmentGroup {
  id: string;
  category: DoctorCategory;
  titleHindi: string;
  badge: string;
  description: string;
  disclaimer: string;
  doctors: Doctor[];
}

export interface DoctorsSectionConfig {
  eyebrow: string;
  title: string;
  subtitle: string;
  physicianCoverageNotice: {
    highlight: string;
    description: string;
  };
  onCallSpecialistsNotice: {
    highlight: string;
    description: string;
  };
  receptionInquiry: {
    phoneFormatted: string;
    phoneValue: string;
    helperText: string;
  };
  doctors: Doctor[];
}

export const allDoctors: Doctor[] = [
  // 1. General Physicians (24/7 Hospital Coverage)
  {
    id: "dr-parwej-alam",
    name: "Dr. Parwej Alam",
    initials: "PA",
    role: "Consulting Physician",
    specialty: "General Medicine / Physician",
    category: "General Physicians",
    portrait: null,
    portraitAlt: "Dr. Parwej Alam - Consulting Physician at Janta Hospital Lohardaga",
    availabilityType: "24/7 Hospital Coverage",
    dutyHours: "Daily OPD & 24/7 Hospital Coverage",
    availabilityDetails:
      "24/7 Hospital Physician Coverage • Daily OPD Consultations • दैनिक OPD परामर्श",
    displayOrder: 1,
    status: "verified",
    bioEnglish:
      "Dr. Parwej Alam is a Consulting Physician at Janta Hospital, Lohardaga. With deep clinical dedication to patient well-being, he provides evidence-based primary care, routine consultations, and preventative guidance for families in Lohardaga and neighbouring rural communities. He conducts the hospital's daily outpatient clinics, patient guidance protocols, and regular medical consultations.",
    bioHindi:
      "डॉ. परवेज़ आलम जनता हॉस्पिटल के मुख्य कंसल्टिंग फिजिशियन हैं। वे लोहरदगा में दैनिक OPD में बुखार, बीपी, शुगर और सामान्य स्वास्थ्य समस्याओं की नियमित जाँच व परामर्श देते हैं।",
    keySpecialties: [
      "Primary Healthcare & General Medicine Consultation",
      "Diagnosis & Treatment of Typhoid, Malaria & Seasonal Fevers",
      "Type-2 Diabetes & Hypertension (Blood Pressure) Management",
      "Gastroenteritis, Abdominal Pain & Dehydration Care",
      "Preventative Health Counseling, Nutrition & Geriatric Care",
    ],
    serviceSlugs: ["general-medicine", "pharmacy"],
    faqs: [
      {
        question: "How can I consult Dr. Parwej Alam at Janta Hospital?",
        answer:
          "Dr. Parwej Alam conducts daily OPD consultations at the hospital. Patients can register directly at the Ground Floor Reception desk to receive an OPD token. Please call +91 9341900715 to confirm today's OPD timings — दैनिक OPD परामर्श के लिए रिसेप्शन पर संपर्क करें।",
      },
      {
        question: "Does Dr. Parwej Alam provide chronic disease follow-ups?",
        answer:
          "Yes. Patients with ongoing conditions such as diabetes, high blood pressure, and chronic cough can attend regular follow-up consultations and prescription reviews during daily OPD hours — ब्लड प्रेशर व शुगर के नियमित फॉलो-अप उपलब्ध हैं।",
      },
    ],
  },
  {
    id: "dr-rahbar-bharti",
    name: "Dr. Rahbar Bharti",
    initials: "RB",
    role: "General Physician",
    specialty: "General Medicine / Physician",
    category: "General Physicians",
    portrait: null,
    portraitAlt: "Dr. Rahbar Bharti - General Physician at Janta Hospital Lohardaga",
    availabilityType: "24/7 Hospital Coverage",
    dutyHours: "Daily OPD & Regular Hospital Duty",
    availabilityDetails:
      "Daily OPD Consultations & 24/7 Hospital Coverage • दैनिक OPD व ड्यूटी कवरेज",
    displayOrder: 2,
    status: "verified",
    bioEnglish:
      "Dr. Rahbar Bharti is a General Physician at Janta Hospital, Lohardaga. He plays an essential role in daily outpatient care and 24/7 emergency medical coverage. His practice focuses on early diagnosis of viral and bacterial infections, vital stabilization, and prompt medical intervention for acute community health concerns.",
    bioHindi:
      "डॉ. रहबर भारती जनता हॉस्पिटल में जनरल फिजिशियन के रूप में कार्यरत हैं। वे दैनिक OPD और आपातकालीन ड्यूटी में मौसमी बीमारियों, बुखार और प्राथमिक उपचार की सेवाएँ देते हैं।",
    keySpecialties: [
      "General Outpatient Examination & Clinical Diagnosis",
      "Seasonal Viral Illnesses, Influenza, Cough & Cold Treatment",
      "Vitals Monitoring, Blood Pressure & Blood Sugar Screening",
      "Emergency First-Aid Support & Rapid Patient Stabilization",
    ],
    serviceSlugs: ["general-medicine", "pharmacy"],
    faqs: [
      {
        question: "What are Dr. Rahbar Bharti's consultation timings?",
        answer:
          "Dr. Rahbar Bharti attends patients according to the hospital's daily OPD and clinical duty schedule. Walk-in consultation tokens are issued at the Ground Floor Reception (+91 9341900715).",
      },
    ],
  },

  // 2. General Surgery (On-call) — 3 Separate Surgeons
  {
    id: "dr-sushil-singh",
    name: "Dr. Sushil Singh",
    initials: "SS",
    role: "Consultant General Surgeon",
    specialty: "General Surgery",
    category: "General Surgery",
    portrait: null,
    portraitAlt: "Dr. Sushil Singh - Consultant General Surgeon (On-call) at Janta Hospital Lohardaga",
    availabilityType: "On-call Specialist",
    dutyHours: "On-call Specialist",
    availabilityDetails:
      "On-call Specialist • Available Upon Clinical Confirmation • ऑन-कॉल सर्जन",
    displayOrder: 3,
    status: "verified",
    bioEnglish:
      "Dr. Sushil Singh is a Consultant General Surgeon on the on-call specialist panel at Janta Hospital, Lohardaga. He brings seasoned clinical surgical expertise to patient evaluations, pre-operative planning, and procedural consultations for conditions including hernia, hydrocele, appendicitis, and soft tissue swellings.",
    bioHindi:
      "डॉ. सुशील सिंह जनता हॉस्पिटल के ऑन-कॉल कंसल्टेंट जनरल सर्जन हैं। वे हर्निया, हाइड्रोसील, अपेंडिक्स और सामान्य सर्जिकल रोगों के क्लिनिकल मूल्यांकन व परामर्श के लिए उपलब्ध रहते हैं।",
    keySpecialties: [
      "General Surgical Evaluation & Clinical Consultation",
      "Inguinal & Umbilical Hernia and Hydrocele Assessment",
      "Appendicitis Clinical Review & Treatment Planning",
      "Minor Surgical Procedures, Sterile Wound Care & Suturing",
    ],
    serviceSlugs: ["general-surgery", "laparoscopic-surgery"],
    faqs: [
      {
        question: "How can I schedule a consultation with Dr. Sushil Singh?",
        answer:
          "Dr. Sushil Singh attends patients on an on-call basis. Following preliminary evaluation and medical record review, appointments are arranged through the hospital reception desk at +91 9341900715.",
      },
    ],
  },
  {
    id: "dr-chandan-kumar",
    name: "Dr. Chandan Kumar",
    initials: "CK",
    role: "Consultant General Surgeon",
    specialty: "General Surgery",
    category: "General Surgery",
    portrait: null,
    portraitAlt: "Dr. Chandan Kumar - Consultant General Surgeon (On-call) at Janta Hospital Lohardaga",
    availabilityType: "On-call Specialist",
    dutyHours: "On-call Specialist",
    availabilityDetails:
      "On-call Specialist • Available Upon Clinical Confirmation • ऑन-कॉल सर्जन",
    displayOrder: 4,
    status: "verified",
    bioEnglish:
      "Dr. Chandan Kumar is a Consultant General Surgeon consulting at Janta Hospital on an on-call basis. He specializes in clinical surgical examinations, management of benign cysts and swellings, abscess incision and drainage, and emergency sterile wound management.",
    bioHindi:
      "डॉ. चंदन कुमार जनता हॉस्पिटल के ऑन-कॉल कंसल्टेंट जनरल सर्जन हैं। वे सामान्य सर्जिकल समस्याओं, सिस्ट, फोड़ा और घाव सिलाई के लिए विशेषज्ञ परामर्श प्रदान करते हैं।",
    keySpecialties: [
      "Clinical Surgical Examination & Second Opinions",
      "Sebaceous Cyst, Lipoma & Soft-Tissue Mass Evaluation",
      "Abscess Drainage, Sterile Dressing & Trauma Suturing",
      "Pre-Operative Fitness Checks & Surgical Counseling",
    ],
    serviceSlugs: ["general-surgery", "laparoscopic-surgery"],
    faqs: [
      {
        question: "What medical reports should I bring for a surgical consultation?",
        answer:
          "Please bring all recent diagnostic reports, including ultrasound scans, complete blood counts, and prior treatment records, to assist Dr. Chandan Kumar with accurate clinical assessment.",
      },
    ],
  },
  {
    id: "dr-shalini-ekka",
    name: "Dr. Shalini Ekka",
    initials: "SE",
    role: "Consultant General Surgeon",
    specialty: "General Surgery",
    category: "General Surgery",
    portrait: null,
    portraitAlt: "Dr. Shalini Ekka - Consultant General Surgeon (On-call) at Janta Hospital Lohardaga",
    availabilityType: "On-call Specialist",
    dutyHours: "On-call Specialist",
    availabilityDetails:
      "On-call Specialist • Available Upon Clinical Confirmation • ऑन-कॉल सर्जन",
    displayOrder: 5,
    status: "verified",
    bioEnglish:
      "Dr. Shalini Ekka is a Consultant General Surgeon on the specialist surgical panel at Janta Hospital, Lohardaga. She provides comprehensive surgical consultations, abdominal clinical reviews, minor surgical procedures, and post-operative recovery guidance for patients.",
    bioHindi:
      "डॉ. शालिनी एक्का जनता हॉस्पिटल के ऑन-कॉल कंसल्टेंट जनरल सर्जन पैनल की सदस्य हैं। वे सामान्य सर्जिकल समस्याओं और महिलाओं के सर्जिकल परामर्श में अपनी सेवाएँ देती हैं।",
    keySpecialties: [
      "General Surgical Consultation & Comprehensive Exam",
      "Abdominal Pain Evaluation & Clinical Triage",
      "Minor Surgical Procedures & Sterile Wound Management",
      "Post-Procedure Care, Recovery & Dressing Supervision",
    ],
    serviceSlugs: ["general-surgery", "laparoscopic-surgery"],
    faqs: [
      {
        question: "How do I confirm Dr. Shalini Ekka's availability?",
        answer:
          "Please contact our hospital reception desk at +91 9341900715 to confirm Dr. Shalini Ekka's next scheduled on-call session and reserve an appointment.",
      },
    ],
  },

  // 3. Neurosurgery (On-call)
  {
    id: "dr-deepak-kumar",
    name: "Dr. Deepak Kumar",
    initials: "DK",
    role: "Consultant Neurosurgeon",
    specialty: "Neurosurgery",
    category: "Neurosurgery",
    portrait: null,
    portraitAlt: "Dr. Deepak Kumar - Consultant Neurosurgeon (On-call) at Janta Hospital Lohardaga",
    availabilityType: "On-call Specialist",
    dutyHours: "On-call Specialist",
    availabilityDetails:
      "On-call Specialist • Pre-Scheduled Clinical Consultation • ऑन-कॉल न्यूरोसर्जन",
    displayOrder: 6,
    status: "verified",
    bioEnglish:
      "Dr. Deepak Kumar is an on-call Consultant Neurosurgeon consulting at Janta Hospital, Lohardaga. Following immediate emergency stabilization by the on-site duty team, he provides specialized neurological assessment for head injuries, spinal pain, cervical spondylosis, sciatica, and nerve compression disorders.",
    bioHindi:
      "डॉ. दीपक कुमार जनता हॉस्पिटल के ऑन-कॉल कंसल्टेंट न्यूरोसर्जन हैं। वे सिर की चोट, रीढ़ की हड्डी, साइटिका और नसों के दबाव में प्राथमिक उपचार के बाद विशेषज्ञ परामर्श देते हैं।",
    keySpecialties: [
      "Closed Head Injury & Concussion Neurological Assessment",
      "Spine Disorders, Lower Back Pain & Sciatica Evaluation",
      "Cervical Spondylosis, Numbness & Nerve Compression Care",
      "Critical Neuro-Trauma Triage & Tertiary Referral Guidance",
    ],
    serviceSlugs: ["neurosurgery"],
    faqs: [
      {
        question: "When should a patient seek neurological consultation?",
        answer:
          "In acute head trauma or loss of consciousness, bring the patient immediately to our 24/7 emergency unit for initial stabilization. For chronic spinal or nerve pain, schedule a consultation with Dr. Deepak Kumar via reception (+91 9341900715).",
      },
    ],
  },

  // 4. Anaesthesia (On-call)
  {
    id: "dr-ravi-ranjan",
    name: "Dr. Ravi Ranjan",
    initials: "RR",
    role: "Consultant Anaesthesiologist",
    specialty: "Anaesthesia",
    category: "Anaesthesia",
    portrait: null,
    portraitAlt: "Dr. Ravi Ranjan - Consultant Anaesthesiologist (On-call) at Janta Hospital Lohardaga",
    availabilityType: "On-call Specialist",
    dutyHours: "On-call Specialist",
    availabilityDetails:
      "On-call Specialist • Pre-Operative Assessment (PAC) • ऑन-कॉल एनेस्थीसिया",
    displayOrder: 7,
    status: "verified",
    bioEnglish:
      "Dr. Ravi Ranjan is a Consultant Anaesthesiologist on the on-call medical team at Janta Hospital, Lohardaga. He oversees pre-anaesthetic clinical checkups (PAC), vital signs monitoring during procedures, safe regional and local anaesthesia delivery, and post-procedure pain relief.",
    bioHindi:
      "डॉ. रवि रंजन जनता हॉस्पिटल के ऑन-कॉल कंसल्टेंट एनेस्थीसियोलॉजिस्ट हैं। वे सर्जरी से पहले फिटनेस जाँच (PAC), प्रक्रिया के दौरान सुरक्षा और दर्द निवारण की देखरेख करते हैं।",
    keySpecialties: [
      "Pre-Anaesthetic Clinical Evaluation & Fitness (PAC)",
      "Continuous Intra-Operative Blood Pressure, Pulse & Oxygen Monitoring",
      "Safe Local, Regional & Infiltration Anaesthesia Protocols",
      "Post-Operative Acute Pain Relief & Patient Recovery Care",
    ],
    serviceSlugs: ["general-surgery", "laparoscopic-surgery"],
    faqs: [
      {
        question: "What is the role of an anaesthesiologist before surgery?",
        answer:
          "The anaesthesiologist evaluates patient physical fitness, reviews medical history, administers appropriate pain-relief protocols, and continuously monitors vital functions throughout any surgical procedure.",
      },
    ],
  },
];

export const departmentGroups: DepartmentGroup[] = [
  {
    id: "general-physicians",
    category: "General Physicians",
    titleHindi: "General Physicians & Primary Care",
    badge: "24/7 Hospital Coverage",
    description:
      "Comprehensive outpatient consultations and 24/7 on-site physician coverage in Powergunj, Lohardaga for routine and acute healthcare needs — दैनिक OPD व 24 घंटे प्राथमिक चिकित्सा",
    disclaimer:
      "The 24/7 label represents continuous hospital duty physician presence. Individual doctor OPD hours are coordinated through reception.",
    doctors: allDoctors.filter((d) => d.category === "General Physicians"),
  },
  {
    id: "general-surgery",
    category: "General Surgery",
    titleHindi: "General Surgery (On-call Specialists)",
    badge: "3 Surgeons • On-call",
    description:
      "Consultant surgical assessments, minor procedures, wound care, hernia, and appendicitis consultation with on-call surgeons — सामान्य सर्जरी व ऑन-कॉल सर्जन परामर्श",
    disclaimer:
      "Surgeons are on-call specialists attending the hospital upon clinical necessity and advance reception confirmation.",
    doctors: allDoctors.filter((d) => d.category === "General Surgery"),
  },
  {
    id: "neurosurgery",
    category: "Neurosurgery",
    titleHindi: "Neurosurgery & Spine (On-call)",
    badge: "On-call Specialist",
    description:
      "Specialist neurological assessments for closed head injuries, spinal pain, and nerve compression following initial emergency stabilization — सिर की चोट व न्यूरोलॉजिकल परामर्श",
    disclaimer:
      "The consultant neurosurgeon is available on-call following case review and preliminary clinical triage.",
    doctors: allDoctors.filter((d) => d.category === "Neurosurgery"),
  },
  {
    id: "anaesthesia",
    category: "Anaesthesia",
    titleHindi: "Anaesthesia (On-call)",
    badge: "On-call Specialist",
    description:
      "Pre-operative anaesthetic evaluations (PAC), safe anaesthesia delivery, and post-procedure pain management — प्री-एनेस्थीसिया जाँच व सुरक्षित प्रबंधन",
    disclaimer:
      "Anaesthesia specialists attend on-call in coordination with the primary surgeon and hospital clinical team.",
    doctors: allDoctors.filter((d) => d.category === "Anaesthesia"),
  },
];

export const doctorsData: DoctorsSectionConfig = {
  eyebrow: "OUR DOCTORS & CLINICAL TEAM",
  title: "Our Doctors & Specialists",
  subtitle:
    "Dedicated medical practitioners providing 24/7 hospital physician coverage, daily OPD consultations, and on-call surgical expertise in Lohardaga.",
  physicianCoverageNotice: {
    highlight: "24/7 Hospital Physician Coverage",
    description:
      "Janta Hospital maintains continuous 24/7 on-site physician and Resident Medical Officer (RMO) coverage to provide immediate first-aid, triage, and patient stabilization at all hours.",
  },
  onCallSpecialistsNotice: {
    highlight: "On-call Specialist Network",
    description:
      "Specialists in General Surgery, Neurosurgery, and Anaesthesia attend on-call based on clinical necessity and advance scheduling via the hospital reception desk.",
  },
  receptionInquiry: {
    phoneFormatted: "+91 93419 00715",
    phoneValue: "+919341900715",
    helperText:
      "Doctor consultation schedules, OPD tokens, and on-call specialist appointments are managed daily at the Ground Floor Reception. Please call to confirm today's schedule.",
  },
  doctors: allDoctors,
};

export function getDoctorById(id: string): Doctor | undefined {
  return allDoctors.find((d) => d.id === id);
}

export function getAllDoctorIds(): string[] {
  return allDoctors.map((d) => d.id);
}

