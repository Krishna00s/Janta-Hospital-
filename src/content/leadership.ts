/**
 * Hospital Leadership Data Architecture — Janta Hospital, Lohardaga
 *
 * Mandatory Truth-in-Advertising Rules:
 * - Jiyaul Ansari is the Hospital Director (executive & administrative management).
 * - He is not a medical doctor; never prefix his name with "Dr." or classify him as a physician.
 * - Dr. Parwej Alam is the Consulting Physician (clinical care).
 * - Factual, concise, and professional without invented qualifications or unverified claims.
 */

export interface LeadershipMember {
  id: string;
  slug: string;
  name: string;
  initials: string;
  designation: string;
  role: string;
  badge: string;
  portrait: string | null;
  portraitAlt: string;
  portraitFocalPoint?: string;
  administrativeSummary: string;
  hindiSummary: string;
  introduction: string;
  administrativeOverview: Array<{
    title: string;
    description: string;
  }>;
  keyPillars: Array<{
    title: string;
    description: string;
  }>;
  receptionContact: {
    label: string;
    phoneFormatted: string;
    phoneValue: string;
    helperText: string;
  };
}

export const hospitalDirector: LeadershipMember = {
  id: "jiyaul-ansari",
  slug: "jiyaul-ansari",
  name: "Jiyaul Ansari",
  initials: "JA",
  designation: "Hospital Director",
  role: "Hospital Director",
  badge: "Hospital Leadership",
  portrait: null,
  portraitAlt: "Jiyaul Ansari - Hospital Director at Janta Hospital Lohardaga",
  administrativeSummary:
    "Oversees administrative operations, facility management, and general hospital coordination at Janta Hospital, Lohardaga.",
  hindiSummary:
    "जनता हॉस्पिटल में प्रशासनिक व्यवस्था, अस्पताल परिसर और मरीज़ों की सामान्य सुविधाओं की देखरेख।",
  introduction:
    "Jiyaul Ansari serves as the Hospital Director of Janta Hospital in Powergunj, Lohardaga. In this administrative role, he oversees daily facility operations, administrative staff, and hospital premises to maintain a clean, organized, and accessible healthcare environment for patients and visiting families.",
  administrativeOverview: [
    {
      title: "Hospital Administration",
      description:
        "Managing day-to-day administrative functions, non-clinical staff coordination, and daily operational support.",
    },
    {
      title: "Facility Management",
      description:
        "Ensuring clean, maintained hospital premises, functional utility systems, and organized patient care areas.",
    },
    {
      title: "Reception & Visitor Assistance",
      description:
        "Coordinating ground-floor reception services, patient inquiry assistance, and visitor guidance.",
    },
  ],
  keyPillars: [
    {
      title: "Dependable Facilities",
      description:
        "Maintaining clean, well-functioning hospital premises for all patients and visiting families in Lohardaga.",
    },
    {
      title: "Reception Coordination",
      description:
        "Supporting responsive front-desk assistance and clear direction for outpatients and emergency arrivals.",
    },
    {
      title: "Clinical Support",
      description:
        "Working alongside Consulting Physician Dr. Parwej Alam and the medical team to support essential hospital operations.",
    },
  ],
  receptionContact: {
    label: "Hospital Reception & Administrative Enquiries",
    phoneFormatted: "+91 93419 00715",
    phoneValue: "+919341900715",
    helperText: "Daily 24/7 hospital reception desk • Main Road, Powergunj, Lohardaga",
  },
};
