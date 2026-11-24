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
  draftHeadline: "आपकी सेहत, हमारी ज़िम्मेदारी।",

  // Factual Short Intro in accessible Hindi/English
  shortIntro:
    "Lohardaga के Palmerganj में 24 घंटे Emergency सेवा, अनुभवी Doctors और सभी ज़रूरी दवाएँ एक ही जगह।",

  // Contact Information
  // Primary Hospital Line (+91 93419 00715): General Enquiries, Reception, OPD, Doctor Availability, WhatsApp
  // Secondary & Emergency Line (+91 93083 48606): 24/7 Emergency Care, Urgent Triage, Acute Medical Response
  contact: {
    primary: {
      value: "+919341900715",
      rawDigits: "9341900715",
      formatted: "+91 93419 00715",
      href: "tel:+919341900715",
      label: "Hospital Enquiries",
      status: "verified" as const,
      source: "Official hospital administration confirmed primary contact line",
    },
    emergency: {
      value: "+919308348606",
      rawDigits: "9308348606",
      formatted: "+91 93083 48606",
      href: "tel:+919308348606",
      label: "Emergency Contact",
      status: "verified" as const,
      source: "Official 24-hour acute and emergency response line",
    },
    phone: {
      value: "+919341900715",
      rawDigits: "9341900715",
      formatted: "+91 93419 00715",
      href: "tel:+919341900715",
      display: "अभी Call करें",
      emergencyFormatted: "+91 93083 48606",
      emergencyValue: "+919308348606",
      emergencyHref: "tel:+919308348606",
      alternatePhones: ["8340678334", "8825389125"],
      status: "verified" as const,
      source: "Hospital administration confirmed primary contact line",
    },
    mapsUrl: {
      value:
        process.env.NEXT_PUBLIC_HOSPITAL_MAPS_URL ||
        "https://www.google.com/maps/search/?api=1&query=Janta+Hospital,+Behind+Head+Post+Office,+Palmerganj,+Lohardaga,+Jharkhand+835302",
      status: "verified" as const,
    },
    whatsapp: {
      value: "9341900715",
      formatted: "+91 93419 00715",
      link: "https://wa.me/919341900715",
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
    cardTitle: "बस स्टैंड के पास, Palmerganj",
    cardSubtext: "लोहरदगा, झारखंड – 835302",
    fullAddress: "Palmerganj, Behind Head Post Office, Lohardaga, Jharkhand – 835302",
    directionsNote:
      "Palmerganj में Head Post Office के ठीक पीछे, Lohardaga Main Bus Stand से केवल 5 मिनट की पैदल दूरी पर।",
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
      src: "/images/janta-hospital-night-exterior.webp",
      fallbackSrc: "/images/janta-hospital-night-exterior.png",
      alt: "Nighttime illuminated facade and entrance of Janta Hospital Lohardaga with active 24-hour reception and pharmacy",
      width: 1536,
      height: 1024,
    },
    gallery: {
      entrance: {
        src: "/images/gallery-entrance.webp",
        alt: "Ground-floor reception entryway and patient ramp at Janta Hospital, Lohardaga",
        caption: "Main Veranda & Reception Entry",
        tag: "Ground Floor Access",
      },
      staircase: {
        src: "/images/gallery-staircase.webp",
        alt: "Hospital staircase and clinical consultation corridor access at Janta Hospital",
        caption: "Clinical Corridor & Floor Access",
        tag: "Hospital Facility",
      },
      signboard: {
        src: "/images/gallery-signboard.webp",
        alt: "Official hospital signboard displaying doctor timings and verified registrations",
        caption: "Official Signboard & Timings",
        tag: "Verified Information",
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
      title: "24/7 Emergency Care",
      shortDescription:
        "अचानक तबीयत खराब होने, चोट या दर्द में तुरंत प्राथमिक इलाज और emergency support।",
      status: "verified" as const,
      badge: "24/7 Emergency",
      icon: "activity",
      actionText: "Emergency Call",
      actionHref: "tel:+919308348606",
    },
    {
      id: "opd-consultations",
      title: "OPD Consultation",
      shortDescription:
        "बुखार, सर्दी, पेट दर्द और सामान्य बीमारियों के लिए रोज़ाना सुबह-शाम Doctor से सलाह।",
      status: "verified" as const,
      badge: "Daily OPD",
      icon: "stethoscope",
      actionText: "OPD Timing देखें",
      actionHref: "tel:+919341900715",
    },
    {
      id: "general-medicine",
      title: "General Medicine",
      shortDescription:
        "बीमारियों की सही जाँच, प्राथमिक उपचार और BP / Sugar की नियमित देखभाल।",
      status: "verified" as const,
      badge: "Primary Care",
      icon: "heart-pulse",
      actionText: "जानकारी लें",
      actionHref: "tel:+919341900715",
    },
    {
      id: "pharmacy-counter",
      title: "Hospital Pharmacy",
      shortDescription:
        "Doctor द्वारा लिखी गई सभी ज़रूरी medicines सीधे front porch pharmacy counter पर उपलब्ध।",
      status: "verified" as const,
      badge: "Pharmacy",
      icon: "pill",
      actionText: "दवा काउंटर",
      actionHref: "#location",
    },
    {
      id: "minor-procedures",
      title: "Dressing & Injection",
      shortDescription:
        "घाव की antiseptic dressing, पट्टी बदलना, injection और routine checkup।",
      status: "verified" as const,
      badge: "Dressing",
      icon: "band-aid",
      actionText: "सीधे मिलें",
      actionHref: "tel:+919341900715",
    },
    {
      id: "patient-guidance",
      title: "मरीज़ों की मदद और मार्गदर्शन",
      shortDescription:
        "Doctor का समय, Token और ज़रूरत पड़ने पर Ranchi के बड़े अस्पतालों के लिए सही सलाह।",
      status: "verified" as const,
      badge: "मरीज़ों की मदद",
      icon: "compass",
      actionText: "बात करें",
      actionHref: "tel:+919341900715",
    },
  ],

  // Medical Team & Availability Configuration
  medicalTeam: {
    title: "हमारे Doctors",
    subtitle:
      "Lohardaga में आपकी सेहत की देखभाल के लिए समर्पित अनुभवी Doctors और Staff।",
    verificationNotice:
      "Doctors के मिलने का समय और Token रोज़ सुबह Reception Desk पर तय होते हैं। आने से पहले Phone करके ज़रूर पता कर लें।",
    consultationPhone: "+91 93419 00715",
    departments: [
      {
        role: "General Medicine & OPD",
        availability: "सुबह और शाम OPD",
        scope: "बुखार, सर्दी, कमज़ोरी और सामान्य बीमारियों की जाँच और इलाज।",
      },
      {
        role: "24-Hour Emergency Medical Officer",
        availability: "24 घंटे Duty पर",
        scope: "अचानक चोट या आपातकालीन स्थिति में तुरंत प्राथमिक देखभाल।",
      },
      {
        role: "Visiting Specialists",
        availability: "तय दिनों पर",
        scope: "विशेषज्ञ Doctors से सलाह — पहले Token लेना ज़रूरी।",
      },
    ],
  },

  // Hospital Facilities Walkthrough
  facilities: [
    {
      id: "fac-entrance",
      title: "आसान Ground-Floor प्रवेश",
      description:
        "मरीज़ों के लिए आसान सीढ़ियाँ, रैंप और बैठने की साफ़-सुथरी जगह।",
      highlight: "Ground Floor",
    },
    {
      id: "fac-emergency",
      title: "24 घंटे Emergency वार्ड",
      description:
        "ऑक्सीजन, प्राथमिक जाँच और तुरंत इलाज के लिए हमेशा तैयार व्यवस्था।",
      highlight: "24 घंटे चालू",
    },
    {
      id: "fac-pharmacy",
      title: "Hospital में दवा की दुकान",
      description:
        "Doctor को दिखाने के तुरंत बाद यहीं से सभी ज़रूरी दवाएँ मिल जाती हैं।",
      highlight: "दवा काउंटर",
    },
    {
      id: "fac-consultation",
      title: "साफ़-सुथरे OPD कमरे",
      description:
        "मरीज़ों की सुविधा और एकांत के लिए साफ़ और हवादार कमरे।",
      highlight: "साफ़ और सुरक्षित",
    },
    {
      id: "fac-location",
      title: "Lohardaga के मुख्य केंद्र में",
      description:
        "Palmerganj में Head Post Office के पीछे और Main Bus Stand के पास।",
      highlight: "Palmerganj",
    },
  ],
};

// ============================================================================
// Centralized Communication Routing Constants (Direct single source of truth)
// ============================================================================
export const primaryPhone = hospitalConfig.contact.primary.formatted; // "+91 93419 00715"
export const primaryPhoneHref = hospitalConfig.contact.primary.href; // "tel:+919341900715"
export const emergencyPhone = hospitalConfig.contact.emergency.formatted; // "+91 93083 48606"
export const emergencyPhoneHref = hospitalConfig.contact.emergency.href; // "tel:+919308348606"
export const whatsappNumber = hospitalConfig.contact.whatsapp.value; // "9341900715"
export const whatsappHref = hospitalConfig.contact.whatsapp.link; // "https://wa.me/919341900715"
