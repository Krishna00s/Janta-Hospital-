/**
 * Gallery Data Architecture — Janta Hospital, Lohardaga
 *
 * Patient-Centric Visual Facilities Guide
 * Clean, illustrative guide to medical facilities and patient care flow.
 */

export interface GalleryItem {
  id: string;
  title: string;
  caption: string;
  description: string;
  src: string;
  fallbackSrc?: string;
  alt: string;
  category: "Facilities" | "Reception" | "Dispensary" | "Emergency" | "Clinical Care";
  badge: string;
  width: number;
  height: number;
  aspectRatio: "landscape" | "portrait" | "wide";
  status: "verified";
  featuredOnHome?: boolean;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "about-hospital-care",
    title: "Hospital में मरीज़ों की देखभाल व्यवस्था",
    caption: "Ground Floor से लेकर Doctor परामर्श और दवा तक आसान सुविधा",
    description:
      "Janta Hospital में मरीज़ों और उनके परिवारों के लिए व्यवस्थित और साफ़-सुथरी व्यवस्था — ताकि बिना किसी परेशानी के सही समय पर इलाज मिल सके।",
    src: "/illustrations/about-hospital-care.svg",
    alt: "Patient care and clinical consultation overview illustration at Janta Hospital, Lohardaga",
    category: "Clinical Care",
    badge: "व्यवस्था",
    width: 800,
    height: 533,
    aspectRatio: "wide",
    status: "verified",
    featuredOnHome: true,
  },
  {
    id: "emergency-station",
    title: "24/7 Emergency Care",
    caption: "Emergency जाँच, ऑक्सीजन और 24 घंटे Duty Doctor",
    description:
      "Palmerganj में 24 घंटे emergency प्राथमिक उपचार — रात हो या दिन, अचानक तबीयत बिगड़ने पर तुरंत medical care।",
    src: "/illustrations/facility-emergency-care.svg",
    alt: "24-Hour emergency care station and patient vital signs monitor illustration",
    category: "Emergency",
    badge: "24/7 Emergency",
    width: 500,
    height: 350,
    aspectRatio: "landscape",
    status: "verified",
    featuredOnHome: true,
  },
  {
    id: "clinical-ward",
    title: "Patient Care Ward",
    caption: "साफ़-सुथरे बिस्तर, ड्रिप स्टैंड और शांत वातावरण में primary care",
    description:
      "मरीज़ों की निरंतर देखभाल और primary observation का साफ़ और सुरक्षित ward।",
    src: "/illustrations/facility-clinical-ward.svg",
    alt: "Clinical observation ward and inpatient setup illustration at Janta Hospital",
    category: "Clinical Care",
    badge: "Ward",
    width: 500,
    height: 350,
    aspectRatio: "landscape",
    status: "verified",
    featuredOnHome: true,
  },
  {
    id: "opd-consultation",
    title: "OPD Consultation",
    caption: "रोज़ाना सुबह और शाम Doctor से जाँच और सही इलाज की सलाह",
    description:
      "अनुभवी डॉक्टरों द्वारा सामान्य बीमारियों की ध्यानपूर्वक जाँच, BP व शुगर चेक और सही दवा की सलाह।",
    src: "/illustrations/service-opd-consultation.svg",
    alt: "Outpatient medical consultation and doctor examination illustration",
    category: "Facilities",
    badge: "Daily OPD",
    width: 500,
    height: 350,
    aspectRatio: "landscape",
    status: "verified",
    featuredOnHome: false,
  },
  {
    id: "pharmacy-counter",
    title: "Hospital Pharmacy",
    caption: "Doctor Consultation के तुरंत बाद दवा लेने की सुविधा",
    description:
      "Hospital में front porch पर Pharmacy Counter जहाँ से डॉक्टर द्वारा लिखी गई सभी ज़रूरी medicines आसानी से मिल जाती हैं।",
    src: "/illustrations/facility-pharmacy-dispensary.svg",
    alt: "On-site medicine dispensary counter illustration at Janta Hospital",
    category: "Dispensary",
    badge: "Pharmacy",
    width: 500,
    height: 350,
    aspectRatio: "landscape",
    status: "verified",
    featuredOnHome: true,
  },
  {
    id: "minor-procedures",
    title: "Dressing & Injection Room",
    caption: "घाव की antiseptic dressing, पट्टी बदलना और सुरक्षित injection",
    description:
      "घाव की साफ़-सफ़ाई, Dressing और trained medical staff द्वारा injection लगाने का साफ़-सुथरा कमरा।",
    src: "/illustrations/service-procedures-dressing.svg",
    alt: "Clinical procedures, sterile dressing, and injection care illustration",
    category: "Clinical Care",
    badge: "Dressing",
    width: 500,
    height: 350,
    aspectRatio: "landscape",
    status: "verified",
    featuredOnHome: false,
  },
  {
    id: "reception-entrance",
    title: "Reception Desk",
    caption: "Ground Floor पर पर्ची, टोकन और doctor availability की जानकारी",
    description:
      "Hospital में प्रवेश करते ही Reception डेस्क, जहाँ से मरीज़ों को तुरंत टोकन और सही मार्गदर्शन मिलता है।",
    src: "/illustrations/facility-reception-desk.svg",
    alt: "Ground floor reception entryway and patient inquiry desk illustration at Janta Hospital, Lohardaga",
    category: "Reception",
    badge: "Ground Floor",
    width: 500,
    height: 350,
    aspectRatio: "landscape",
    status: "verified",
    featuredOnHome: true,
  },
];
