/**
 * Gallery Data Architecture — Janta Hospital, Lohardaga
 *
 * Patient-Centric Visual Facilities Guide
 * Clean, illustrative guide to medical facilities and clinical access.
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
    title: "Hospital परिसर और मुख्य भवन",
    caption: "Palmerganj में स्थित Janta Hospital का मुख्य भवन एवं परिसर",
    description:
      "Janta Hospital में मरीज़ों और उनके परिवारों के लिए व्यवस्थित और साफ़-सुथरी व्यवस्था — ताकि बिना किसी परेशानी के सही समय पर इलाज मिल सके।",
    src: "/images/janta-hospital-exterior.webp",
    alt: "Exterior facade and building of Janta Hospital in Palmerganj, Lohardaga",
    category: "Clinical Care",
    badge: "Hospital Campus",
    width: 1536,
    height: 1024,
    aspectRatio: "wide",
    status: "verified",
    featuredOnHome: true,
  },
  {
    id: "emergency-station",
    title: "24/7 Emergency Facility",
    caption: "24 घंटे आपातकालीन सेवा, प्राथमिक उपचार एवं ड्यूटी डॉक्टर",
    description:
      "Palmerganj में 24 घंटे emergency प्राथमिक उपचार — रात हो या दिन, अचानक तबीयत बिगड़ने पर तुरंत medical care।",
    src: "/images/janta-hospital-night-exterior.webp",
    alt: "Illuminated nighttime facade and emergency entrance of Janta Hospital Lohardaga",
    category: "Emergency",
    badge: "24/7 Emergency",
    width: 1536,
    height: 1024,
    aspectRatio: "wide",
    status: "verified",
    featuredOnHome: true,
  },
  {
    id: "clinical-ward",
    title: "Hospital सीढ़ियाँ व परामर्श कॉरिडोर",
    caption: "क्लीनिक एवं परामर्श कक्षों तक आसान और सुरक्षित पहुँच",
    description:
      "मरीज़ों की निरंतर देखभाल, परामर्श कक्ष और प्रथम तल तक पहुँचने के लिए साफ़ और सुरक्षित व्यवस्था।",
    src: "/images/gallery-staircase.webp",
    alt: "Staircase and clinical consultation floor access corridor at Janta Hospital",
    category: "Clinical Care",
    badge: "Facility Access",
    width: 1200,
    height: 800,
    aspectRatio: "landscape",
    status: "verified",
    featuredOnHome: true,
  },
  {
    id: "opd-consultation",
    title: "अस्पताल सूचना पट्ट एवं डॉक्टर परामर्श समय",
    caption: "हॉस्पिटल बोर्ड पर डॉक्टर परामर्श समय एवं रजिस्ट्रेशन विवरण",
    description:
      "हॉस्पिटल के आधिकारिक बोर्ड पर अनुभवी डॉक्टरों के परामर्श का समय, निबंधन संख्या एवं स्वास्थ्य सुविधाएँ स्पष्ट रूप से प्रदर्शित हैं।",
    src: "/images/gallery-signboard.webp",
    alt: "Janta Hospital entrance signboard displaying doctor names, timings, and credentials",
    category: "Facilities",
    badge: "Doctor Timings",
    width: 1200,
    height: 800,
    aspectRatio: "landscape",
    status: "verified",
    featuredOnHome: false,
  },
  {
    id: "pharmacy-counter",
    title: "Hospital Pharmacy काउंटर",
    caption: "Doctor Consultation के तुरंत बाद दवा लेने की ऑन-साइट सुविधा",
    description:
      "Hospital में front porch पर Pharmacy Counter जहाँ से डॉक्टर द्वारा लिखी गई सभी ज़रूरी medicines आसानी से मिल जाती हैं।",
    src: "/images/gallery-pharmacy.webp",
    alt: "On-site medicine dispensary counter at Janta Hospital front porch",
    category: "Dispensary",
    badge: "Pharmacy",
    width: 1200,
    height: 800,
    aspectRatio: "landscape",
    status: "verified",
    featuredOnHome: true,
  },
  {
    id: "minor-procedures",
    title: "मुख्य प्रवेश द्वार एवं रैम्प",
    caption: "मरीज़ों के प्रवेश के लिए सुलभ रैम्प एवं प्रवेश द्वार",
    description:
      "वरांडा और मुख्य प्रवेश द्वार पर रैम्प की सुविधा ताकि किसी भी मरीज़ को अंदर लाने में परेशानी न हो।",
    src: "/images/gallery-entrance.webp",
    alt: "Main ground floor entrance veranda and accessible ramp at Janta Hospital",
    category: "Clinical Care",
    badge: "Patient Access",
    width: 1200,
    height: 800,
    aspectRatio: "landscape",
    status: "verified",
    featuredOnHome: false,
  },
  {
    id: "reception-entrance",
    title: "Reception डेस्क एवं प्रवेश द्वार",
    caption: "Ground Floor पर पर्ची, टोकन और doctor availability की जानकारी",
    description:
      "Hospital में प्रवेश करते ही Reception डेस्क, जहाँ से मरीज़ों को तुरंत टोकन और सही मार्गदर्शन मिलता है।",
    src: "/images/gallery-entrance.webp",
    alt: "Ground floor reception entryway and patient inquiry desk at Janta Hospital, Lohardaga",
    category: "Reception",
    badge: "Ground Floor",
    width: 1200,
    height: 800,
    aspectRatio: "landscape",
    status: "verified",
    featuredOnHome: true,
  },
];
