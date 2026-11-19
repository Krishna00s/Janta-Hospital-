/**
 * Doctors Data Architecture — Janta Hospital, Lohardaga
 *
 * Mandatory Truth-in-Advertising Rules:
 * - Do not invent doctor names, registration numbers, degrees, or individual claims.
 * - Real doctor profiles and authentic portraits are populated upon official verification.
 * - Round-the-clock doctor coverage is provided via rotating duty medical officers:
 *   individual duty hours and specialist OPD hours are displayed separately.
 */

export interface Doctor {
  id: string;
  name: string;
  qualifications: string;
  specialty: string;
  portrait: string | null;
  dutyHours: string;
  availabilityDetails: string;
  displayOrder: number;
  status: "verified" | "placeholder";
}

export interface DoctorsSectionConfig {
  eyebrow: string;
  title: string;
  subtitle: string;
  roundTheClockNotice: {
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

export const doctorsData: DoctorsSectionConfig = {
  eyebrow: "OUR DOCTORS",
  title: "हमारे Doctors",
  subtitle:
    "लोहरदगा में आपकी देखभाल के लिए समर्पित अनुभवी Doctors और Medical Staff।",
  roundTheClockNotice: {
    highlight: "Medical assistance available 24/7",
    description:
      "Hospital में 24 घंटे Duty Doctors मौजूद रहते हैं ताकि emergency में तुरंत मदद मिल सके। Specialists और OPD Doctors के मिलने का समय नीचे दिया गया है।",
  },
  receptionInquiry: {
    phoneFormatted: "+91 96938 21174",
    phoneValue: "+919693821174",
    helperText:
      "Doctors के मिलने का समय और Token रोज़ सुबह Reception Desk पर तय होते हैं। आने से पहले Phone करके ज़रूर पता कर लें।",
  },
  doctors: [
    {
      id: "doc-gen-medicine",
      name: "Consulting Physician",
      qualifications: "MBBS / MD (Internal Medicine) — Roster अनुसार",
      specialty: "General Medicine (सामान्य रोग)",
      portrait: "/illustrations/doctor-physician.svg",
      dutyHours: "सुबह और शाम OPD",
      availabilityDetails: "सोमवार से शनिवार • सुबह 9:00 – 1:00 बजे और शाम 5:00 – 8:00 बजे",
      displayOrder: 1,
      status: "placeholder",
    },
    {
      id: "doc-duty-emergency",
      name: "Resident Medical Officer (Duty Roster)",
      qualifications: "Registered Medical Practitioner (RMO Rotation)",
      specialty: "24 घंटे Emergency & Acute Care",
      portrait: "/illustrations/doctor-emergency-rmo.svg",
      dutyHours: "24 घंटे Rotating Duty",
      availabilityDetails: "Hospital में 24 घंटे लगातार Emergency Coverage",
      displayOrder: 2,
      status: "placeholder",
    },
    {
      id: "doc-visiting-specialist",
      name: "Visiting Specialist Consultant",
      qualifications: "Specialist Consultant (Post-Graduate Degree)",
      specialty: "Specialist Doctor (तय दिनों पर)",
      portrait: "/illustrations/doctor-specialist.svg",
      dutyHours: "हफ़्ते के तय दिन",
      availabilityDetails: "तय दिनों पर OPD • आने से पहले Reception से Token लेना ज़रूरी",
      displayOrder: 3,
      status: "placeholder",
    },
  ],
};
