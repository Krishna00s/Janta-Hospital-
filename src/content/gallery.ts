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
    title: "24 घंटे Emergency Care",
    caption: "आपातकालीन जाँच, ऑक्सीजन और लगातार ड्यूटी डॉक्टर",
    description:
      "Palmerganj में 24 घंटे चालू इमरजेंसी प्राथमिक उपचार — रात हो या दिन, अचानक तबीयत बिगड़ने पर तुरंत देखभाल।",
    src: "/illustrations/facility-emergency-care.svg",
    alt: "24-Hour emergency care station and patient vital signs monitor illustration",
    category: "Emergency",
    badge: "24 घंटे चालू",
    width: 500,
    height: 350,
    aspectRatio: "landscape",
    status: "verified",
    featuredOnHome: true,
  },
  {
    id: "clinical-ward",
    title: "मरीज़ देखभाल और वार्ड व्यवस्था",
    caption: "साफ़-सुथरे बिस्तर, ड्रिप स्टैंड और शांत वातावरण में प्राथमिक देखभाल",
    description:
      "मरीज़ों की निरंतर देखभाल और प्राथमिक ऑब्जर्वेशन का साफ़ और सुरक्षित वार्ड।",
    src: "/illustrations/facility-clinical-ward.svg",
    alt: "Clinical observation ward and inpatient setup illustration at Janta Hospital",
    category: "Clinical Care",
    badge: "वार्ड",
    width: 500,
    height: 350,
    aspectRatio: "landscape",
    status: "verified",
    featuredOnHome: true,
  },
  {
    id: "opd-consultation",
    title: "Doctor से मिलना (OPD Clinic)",
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
    title: "Hospital में दवा की दुकान (Dispensary)",
    caption: "जाँच के तुरंत बाद दवा और सर्जिकल सामान लेने की सुविधा",
    description:
      "Hospital में स्थित दवाई काउंटर जहाँ से डॉक्टर द्वारा लिखी गई सभी ज़रूरी दवाइयाँ और पट्टियाँ आसानी से मिल जाती हैं।",
    src: "/illustrations/facility-pharmacy-dispensary.svg",
    alt: "On-site medicine dispensary counter illustration at Janta Hospital",
    category: "Dispensary",
    badge: "दवा काउंटर",
    width: 500,
    height: 350,
    aspectRatio: "landscape",
    status: "verified",
    featuredOnHome: true,
  },
  {
    id: "minor-procedures",
    title: "मरहम-पट्टी और क्लीनिकल प्रक्रिया कक्ष",
    caption: "साफ़-सफ़ाई के साथ घाव की ड्रेसिंग, पट्टी बदलना और सुरक्षित इंजेक्शन",
    description:
      "घाव की साफ़-सफ़ाई, मरहम-पट्टी और प्रशिक्षित स्टाफ द्वारा इंजेक्शन लगाने का साफ़-सुथरा कमरा।",
    src: "/illustrations/service-procedures-dressing.svg",
    alt: "Clinical procedures, sterile dressing, and injection care illustration",
    category: "Clinical Care",
    badge: "ड्रेसिंग रूम",
    width: 500,
    height: 350,
    aspectRatio: "landscape",
    status: "verified",
    featuredOnHome: false,
  },
  {
    id: "reception-entrance",
    title: "Reception डेस्क और पूछताछ काउंटर",
    caption: "Ground Floor पर पर्ची, टोकन और डॉक्टर से मिलने की सीधी जानकारी",
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
