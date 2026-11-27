/**
 * Doctors Data Architecture — Janta Hospital, Lohardaga
 *
 * Mandatory Truth-in-Advertising Rules:
 * - Specific doctors and roles provided by hospital administration.
 * - Dr. Parwej Alam (Hospital Director & Consulting Physician) appears first.
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
  availabilityType: AvailabilityType;
  dutyHours: string;
  availabilityDetails: string;
  isOwner?: boolean;
  displayOrder: number;
  status: "verified" | "pending";
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
    role: "Hospital Director & Consulting Physician",
    specialty: "General Medicine / Physician",
    category: "General Physicians",
    portrait: null,
    portraitAlt: "Dr. Parwej Alam - Hospital Director & Consulting Physician at Janta Hospital Lohardaga",
    availabilityType: "24/7 Hospital Coverage",
    dutyHours: "Daily OPD & 24/7 Hospital Coverage",
    availabilityDetails:
      "हॉस्पिटल में 24 घंटे फिजिशियन व ड्यूटी डॉक्टर कवरेज • दैनिक OPD परामर्श",
    isOwner: true,
    displayOrder: 1,
    status: "verified",
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
      "दैनिक OPD परामर्श व 24/7 हॉस्पिटल ड्यूटी कवरेज",
    isOwner: false,
    displayOrder: 2,
    status: "verified",
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
      "ऑन-कॉल विशेषज्ञ • क्लिनिकल आवश्यकता व पुष्टि अनुसार",
    isOwner: false,
    displayOrder: 3,
    status: "verified",
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
      "ऑन-कॉल विशेषज्ञ • क्लिनिकल आवश्यकता व पुष्टि अनुसार",
    isOwner: false,
    displayOrder: 4,
    status: "verified",
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
      "ऑन-कॉल विशेषज्ञ • क्लिनिकल आवश्यकता व पुष्टि अनुसार",
    isOwner: false,
    displayOrder: 5,
    status: "verified",
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
      "ऑन-कॉल न्यूरोसर्जन • पूर्व परामर्श एवं केस पुष्टि अनुसार",
    isOwner: false,
    displayOrder: 6,
    status: "verified",
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
      "ऑन-कॉल विशेषज्ञ • सर्जिकल प्रक्रिया व प्री-एनेस्थीसिया अनुसार",
    isOwner: false,
    displayOrder: 7,
    status: "verified",
  },
];

export const departmentGroups: DepartmentGroup[] = [
  {
    id: "general-physicians",
    category: "General Physicians",
    titleHindi: "सामान्य फिजिशियन एवं प्राथमिक चिकित्सा",
    badge: "24/7 Hospital Coverage",
    description:
      "Powergunj, Lohardaga में 24 घंटे फिजिशियन व ड्यूटी डॉक्टर कवरेज और दैनिक सुबह-शाम OPD परामर्श।",
    disclaimer:
      "24/7 लेबल हॉस्पिटल में फिजिशियन व ड्यूटी मेडिकल टीम की सतत उपस्थिति को दर्शाता है। व्यक्तिगत डॉक्टर की वर्तमान उपस्थिति रिसेप्शन से पता करें।",
    doctors: allDoctors.filter((d) => d.category === "General Physicians"),
  },
  {
    id: "general-surgery",
    category: "General Surgery",
    titleHindi: "सामान्य सर्जरी विशेषज्ञ (On-call)",
    badge: "3 Surgeons • On-call",
    description:
      "सामान्य सर्जिकल परामर्श, प्राथमिक सर्जिकल असेसमेंट एवं ऑन-कॉल सर्जन उपलब्धता।",
    disclaimer:
      "सर्जन स्थायी रूप से ऑनसाइट नहीं रहते; उन्हें क्लिनिकल आवश्यकता एवं रिसेप्शन पुष्टि के आधार पर बुलाया जाता है।",
    doctors: allDoctors.filter((d) => d.category === "General Surgery"),
  },
  {
    id: "neurosurgery",
    category: "Neurosurgery",
    titleHindi: "न्यूरोसर्जरी विशेषज्ञ (On-call)",
    badge: "On-call Specialist",
    description:
      "न्यूरोलॉजिकल असेसमेंट, सिर की चोट व नसों की समस्याओं के लिए विशेषज्ञ ऑन-कॉल परामर्श।",
    disclaimer:
      "न्यूरोसर्जन पूर्व निर्धारण व क्लिनिकल केस की पुष्टि पर अस्पताल में उपलब्ध होते हैं।",
    doctors: allDoctors.filter((d) => d.category === "Neurosurgery"),
  },
  {
    id: "anaesthesia",
    category: "Anaesthesia",
    titleHindi: "एनेस्थीसिया विशेषज्ञ (On-call)",
    badge: "On-call Specialist",
    description:
      "सर्जिकल प्रक्रियाओं के लिए प्री-एनेस्थेटिक इवैल्यूएशन एवं सुरक्षित एनेस्थीसिया प्रबंधन।",
    disclaimer:
      "एनेस्थीसिया विशेषज्ञ सर्जिकल केस व डॉक्टर टीम के समन्वय के आधार पर ऑन-कॉल उपस्थित होते हैं।",
    doctors: allDoctors.filter((d) => d.category === "Anaesthesia"),
  },
];

export const doctorsData: DoctorsSectionConfig = {
  eyebrow: "OUR DOCTORS & CLINICAL TEAM",
  title: "हमारे Doctors",
  subtitle:
    "Powergunj, Lohardaga में 24 घंटे फिजिशियन कवरेज और ऑन-कॉल विशेषज्ञ सर्जिकल टीम।",
  physicianCoverageNotice: {
    highlight: "24/7 Hospital Physician Coverage",
    description:
      "Hospital में 24 घंटे फिजिशियन व ड्यूटी डॉक्टर्स (RMO) की कवरेज उपलब्ध रहती है ताकि आपातकालीन स्थिति में तुरंत प्राथमिक चिकित्सा मिल सके। यह लेबल हॉस्पिटल की सतत मेडिकल व्यवस्था को दर्शाता है।",
  },
  onCallSpecialistsNotice: {
    highlight: "On-call Specialist Network",
    description:
      "General Surgery, Neurosurgery और Anaesthesia के विशेषज्ञ ऑन-कॉल उपलब्ध होते हैं। इन्हें मरीज़ की क्लिनिकल स्थिति एवं रिसेप्शन पुष्टि के आधार पर अस्पताल बुलाया जाता है।",
  },
  receptionInquiry: {
    phoneFormatted: "+91 93419 00715",
    phoneValue: "+919341900715",
    helperText:
      "Doctors के मिलने का समय, टोकन और ऑन-कॉल विशेषज्ञ की उपलब्धता रोज़ाना Ground Floor Reception पर तय होती है। आने से पहले कॉल करके पुष्टि कर लें।",
  },
  doctors: allDoctors,
};
