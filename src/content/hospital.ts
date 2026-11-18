/**
 * Canonical Hospital Fact Ledger & Configuration
 * Verified against official hospital signboard, building imagery, and confirmed hospital contact.
 */

export interface FactField<T> {
  value: T;
  status: "verified" | "pending";
  notes?: string;
  source?: string;
}

export const hospitalConfig = {
  // Hospital Identity
  name: {
    value: "Janta Hospital",
    status: "verified",
    source: "Official illuminated building signboard, Palmerganj, Lohardaga",
  } as FactField<string>,

  locationName: "LOHARDAGA",
  eyebrow: "JANTA HOSPITAL · LOHARDAGA",
  draftHeadline: "Care, closer to home.",

  // Factual Short Intro
  shortIntro:
    "A community healthcare center serving Lohardaga, Jharkhand with 24-hour emergency medical care, general outpatient consultations, and patient-first clinical guidance.",

  // Contact Information (Official Hospital Line: +91 96938 21174)
  contact: {
    phone: {
      value: "+919693821174",
      rawDigits: "9693821174",
      formatted: "+91 96938 21174",
      display: "Call Hospital",
      alternatePhones: ["9308348608", "8340678334", "8825389125"],
      status: "verified" as const,
      source: "Hospital administration confirmed primary contact line",
    },
    mapsUrl: {
      value:
        process.env.NEXT_PUBLIC_HOSPITAL_MAPS_URL ||
        "https://maps.google.com/?q=Janta+Hospital+Palmerganj+Lohardaga+Jharkhand",
      status: "verified" as const,
    },
    whatsapp: {
      value: "9693821174",
      link: "https://wa.me/919693821174",
      status: "verified" as const,
    },
  },

  // Location Details (Verified from hospital exterior signboard)
  location: {
    town: "Lohardaga",
    district: "Lohardaga",
    state: "Jharkhand",
    pin: "835302",
    country: "India",
    area: "Palmerganj",
    landmark: "Behind Head Post Office / Near Bus Stand",
    cardTitle: "Near Bus Stand / Palmerganj",
    cardSubtext: "Lohardaga, Jharkhand – 835302",
    fullAddress: "Palmerganj, Behind Head Post Office, Lohardaga, Jharkhand – 835302",
    directionsNote:
      "Conveniently situated in Palmerganj, directly behind the Head Post Office and a short walking distance from the Lohardaga Main Bus Stand.",
    status: "verified" as const,
  },

  // Hero Feature Pills (as approved in design references)
  heroFeatures: [
    {
      title: "OPD",
      subtitle: "Consultation",
      icon: "stethoscope",
    },
    {
      title: "General",
      subtitle: "Medicine",
      icon: "plus-circle",
    },
    {
      title: "Patient",
      subtitle: "Guidance",
      icon: "users",
    },
  ],

  // Real Imagery Assets (All derived directly from authorized hospital photography)
  imagery: {
    exterior: {
      src: "/images/janta-hospital-exterior.webp",
      fallbackSrc: "/images/janta-hospital-exterior.png",
      alt: "Janta Hospital modern facility exterior with spiral staircase and illuminated signage in Palmerganj, Lohardaga",
      width: 1672,
      height: 941,
    },
    gallery: {
      entrance: {
        src: "/images/gallery-entrance.webp",
        alt: "Front veranda, reception entryway, and ground-floor access at Janta Hospital, Lohardaga",
        caption: "Main Veranda & Reception Entry",
        tag: "Ground Floor Access",
      },
      staircase: {
        src: "/images/gallery-staircase.webp",
        alt: "Architectural spiral staircase and warm exterior lighting at Janta Hospital",
        caption: "Architectural Spiral Staircase",
        tag: "Facility Architecture",
      },
      signboard: {
        src: "/images/gallery-signboard.webp",
        alt: "Official illuminated Janta Hospital 24-hour medical signboard in Palmerganj, Lohardaga",
        caption: "24-Hour Emergency Medical Signboard",
        tag: "Verified Landmark",
      },
      pharmacy: {
        src: "/images/gallery-pharmacy.webp",
        alt: "On-site medicine dispensary counter at Janta Hospital front porch",
        caption: "On-Site Pharmacy & Medicine Counter",
        tag: "Essential Pharmacy",
      },
    },
  },

  // Operational Services (Verified from hospital physical premises & confirmed facts)
  services: [
    {
      id: "emergency-care",
      title: "24-Hour Emergency Care",
      shortDescription:
        "Round-the-clock urgent clinical attention, vital stabilization, and immediate acute care for residents of Lohardaga.",
      status: "verified" as const,
      badge: "24 / 7 Available",
      icon: "activity",
      actionText: "Emergency Line",
      actionHref: "tel:+919693821174",
    },
    {
      id: "opd-consultations",
      title: "Outpatient (OPD) Consultations",
      shortDescription:
        "Daily clinical consultations covering general illness, follow-ups, and comprehensive medical diagnosis.",
      status: "verified" as const,
      badge: "Daily OPD",
      icon: "stethoscope",
      actionText: "Inquire Timings",
      actionHref: "tel:+919693821174",
    },
    {
      id: "general-medicine",
      title: "General Medicine & Care",
      shortDescription:
        "Diagnosis and evidence-based treatment for acute illnesses, fevers, infections, and chronic lifestyle conditions.",
      status: "verified" as const,
      badge: "Primary Care",
      icon: "heart-pulse",
      actionText: "Consultation Info",
      actionHref: "tel:+919693821174",
    },
    {
      id: "pharmacy-counter",
      title: "On-Site Medicine Counter",
      shortDescription:
        "Front-porch pharmacy counter (दवाई / स्वास्थ्य) providing immediate access to prescribed medications and supplies.",
      status: "verified" as const,
      badge: "On-Premises",
      icon: "pill",
      actionText: "Visit Dispensary",
      actionHref: "#location",
    },
    {
      id: "minor-procedures",
      title: "Clinical Procedures & Dressing",
      shortDescription:
        "Hygienic wound care, sterile dressing, injections, vital monitoring, and routine clinical procedural support.",
      status: "verified" as const,
      badge: "Clinical Support",
      icon: "band-aid",
      actionText: "Direct Assistance",
      actionHref: "tel:+919693821174",
    },
    {
      id: "patient-guidance",
      title: "Patient Guidance & Navigation",
      shortDescription:
        "Friendly, transparent guidance on consultation schedules, prescription follow-up, and regional medical referrals.",
      status: "verified" as const,
      badge: "Patient-First",
      icon: "compass",
      actionText: "Speak with Staff",
      actionHref: "tel:+919693821174",
    },
  ],

  // Medical Team & Roster Configuration
  medicalTeam: {
    title: "Clinical Roster & Consulting Physicians",
    subtitle:
      "Consulting medical officers and visiting physicians serving Lohardaga with patient-first clinical attentiveness.",
    verificationNotice:
      "Doctor rosters, visiting specialist schedules, and morning/evening OPD timings are updated daily at the reception desk. Call directly to confirm doctor availability before visiting.",
    consultationPhone: "+91 96938 21174",
    departments: [
      {
        role: "General Medicine & OPD",
        availability: "Morning & Evening Hours",
        scope: "Comprehensive adult & pediatric general clinical consultations, triage, and ongoing medical management.",
      },
      {
        role: "24-Hour Emergency Medical Officer",
        availability: "24 Hours On-Call",
        scope: "Immediate primary stabilization, acute medical assessment, and trauma evaluation.",
      },
      {
        role: "Visiting Specialists",
        availability: "Scheduled Consultation Days",
        scope: "Specialized clinical consultations coordinated through hospital reception.",
      },
    ],
  },

  // Hospital Facilities Walkthrough
  facilities: [
    {
      id: "fac-entrance",
      title: "Accessible Ground-Floor Entry",
      description:
        "Front porch with clear visual pathways and ground-level reception to facilitate hassle-free entry for walking and assisted patients.",
      highlight: "Step & Veranda Access",
    },
    {
      id: "fac-emergency",
      title: "24-Hour Emergency Response Area",
      description:
        "Dedicated clinical response area equipped for immediate assessment, oxygen support, and primary clinical stabilization.",
      highlight: "24-Hour Active",
    },
    {
      id: "fac-pharmacy",
      title: "Front-Porch Medicine Dispensary",
      description:
        "Immediate on-site availability of essential medications, surgical dressings, and emergency pharmaceutical supplies.",
      highlight: "Immediate Dispensing",
    },
    {
      id: "fac-consultation",
      title: "Clean Outpatient Rooms",
      description:
        "Sanitized clinical consultation chambers designed for patient privacy, careful examination, and doctor-patient dialogue.",
      highlight: "Hygienic & Private",
    },
    {
      id: "fac-location",
      title: "Centrally Situated in Lohardaga",
      description:
        "Located in Palmerganj, directly behind the Head Post Office and near the Bus Stand for rapid local access.",
      highlight: "Heart of Lohardaga",
    },
  ],
};
