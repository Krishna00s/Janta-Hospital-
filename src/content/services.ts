/**
 * Services Data Architecture — Janta Hospital, Lohardaga
 *
 * Truth-in-Advertising Rules:
 * - Only services verified via physical building signage, on-site photography,
 *   or hospital administration confirmation are marked as 'verified'.
 * - Unverified or planned specialist services are marked as 'pending'.
 * - Do not invent diagnostic equipment (e.g. MRI, CT) or surgical theaters.
 */

export interface HospitalService {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  category: "Emergency" | "Outpatient" | "Pharmacy" | "Clinical Support";
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
  status: "verified" | "pending";
  verificationSource: string;
}

export const servicesData: HospitalService[] = [
  {
    id: "emergency-care",
    name: "24 घंटे Emergency इलाज",
    shortDescription:
      "अचानक तबीयत बिगड़ने, चोट या दर्द में तुरंत प्राथमिक इलाज और देखभाल।",
    fullDescription:
      "Janta Hospital में Palmerganj, Lohardaga में 24 घंटे Emergency सेवा उपलब्ध है। Duty Doctors और Staff द्वारा तुरंत प्राथमिक जाँच, ऑक्सीजन, injection और आपातकालीन देखभाल की जाती है।",
    category: "Emergency",
    badge: "24 घंटे Emergency",
    iconName: "activity",
    availability: "24 घंटे उपलब्ध • सातों दिन",
    image: {
      src: "/illustrations/service-emergency-24h.svg",
      alt: "24-Hour emergency care and clinical response medical illustration",
      width: 500,
      height: 350,
    },
    keyFeatures: [
      "पहुँचते ही तुरंत प्राथमिक देखभाल",
      "ऑक्सीजन और नेबुलाइज़र की सुविधा",
      "Emergency Injection और दवा",
      "सीधी Emergency Helpline सेवा",
    ],
    actionLabel: "Emergency Call करें",
    actionHref: "tel:+919693821174",
    isEmergency: true,
    status: "verified",
    verificationSource: "24-Hour medical emergency service confirmed by hospital administration",
  },
  {
    id: "opd-consultations",
    name: "Doctor से मिलें (OPD)",
    shortDescription:
      "बुखार, सर्दी, पेट दर्द और सामान्य बीमारियों के लिए रोज़ाना सुबह-शाम Doctor से सलाह।",
    fullDescription:
      "Hospital के Ground Floor पर रोज़ाना OPD चलती है। यहाँ अनुभवी Doctors द्वारा सामान्य बीमारियों की जाँच, Blood Pressure और Sugar की जाँच और सही इलाज की सलाह दी जाती है।",
    category: "Outpatient",
    badge: "रोज़ाना सुबह और शाम",
    iconName: "stethoscope",
    availability: "सोमवार से शनिवार • सुबह 9:00 - 1:00 और शाम 5:00 - 8:00",
    image: {
      src: "/illustrations/service-opd-consultation.svg",
      alt: "Outpatient medical consultation and doctor examination illustration",
      width: 500,
      height: 350,
    },
    keyFeatures: [
      "अनुभवी Doctor द्वारा व्यक्तिगत जाँच",
      "बुखार, सर्दी, खाँसी और इन्फेक्शन का इलाज",
      "BP और Diabetic की नियमित जाँच",
      "दवा और परहेज़ की सही जानकारी",
    ],
    actionLabel: "OPD का समय जानें",
    actionHref: "tel:+919693821174",
    isEmergency: false,
    status: "verified",
    verificationSource: "Ground-floor clinical reception confirmed on premises",
  },
  {
    id: "pharmacy-counter",
    name: "Hospital में दवा की दुकान (Pharmacy)",
    shortDescription:
      "लिखी गई सभी ज़रूरी दवाएँ, पट्टियाँ और प्राथमिक चिकित्सा सामग्री सीधे Hospital में उपलब्ध।",
    fullDescription:
      "Hospital के अंदर ही दवा का Counter बना है। Doctor को दिखाने के तुरंत बाद मरीज़ों और परिजनों को लिखी गई दवाएँ और सर्जिकल सामान आसानी से मिल जाता है।",
    category: "Pharmacy",
    badge: "Hospital में उपलब्ध",
    iconName: "pill",
    availability: "Hospital खुलने के समय उपलब्ध",
    image: {
      src: "/illustrations/service-pharmacy-counter.svg",
      alt: "On-site dispensary and pharmacy counter illustration",
      width: 500,
      height: 350,
    },
    keyFeatures: [
      "Doctor द्वारा लिखी गई सभी दवाएँ",
      "मरहम, पट्टी और First Aid का सामान",
      "Emergency दवाएँ हमेशा उपलब्ध",
      "Ground Floor पर सीधे पहुँच",
    ],
    actionLabel: "दवा के बारे में पूछें",
    actionHref: "tel:+919693821174",
    isEmergency: false,
    status: "verified",
    verificationSource: "On-site pharmacy confirmed on premises",
  },
  {
    id: "clinical-procedures",
    name: "मरहम-पट्टी और Injection",
    shortDescription:
      "घाव की साफ़-सफ़ाई, पट्टी बदलना, injection और प्राथमिक नर्सिंग सेवाएँ।",
    fullDescription:
      "हमारे यहाँ साफ़-सफ़ाई के साथ घाव की ड्रेसिंग, पट्टी बदलना, Tetanus और Doctor द्वारा लिखे गए Injection लगाने की सुविधा उपलब्ध है।",
    category: "Clinical Support",
    badge: "मरहम-पट्टी",
    iconName: "shield-check",
    availability: "रोज़ाना Hospital समय में उपलब्ध",
    image: {
      src: "/illustrations/service-procedures-dressing.svg",
      alt: "Clinical procedures, dressings, and injection care illustration",
      width: 500,
      height: 350,
    },
    keyFeatures: [
      "साफ़-सुथरे तरीके से घाव की ड्रेसिंग",
      "Intramuscular & Intravenous Injection",
      "BP, Pulse और Oxygen की जाँच",
      "चोट और खरोंच का तुरंत प्राथमिक उपचार",
    ],
    actionLabel: "Nursing Desk से पूछें",
    actionHref: "tel:+919693821174",
    isEmergency: false,
    status: "verified",
    verificationSource: "Confirmed clinical support room on premises",
  },
  {
    id: "patient-guidance",
    name: "मरीज़ों की मदद और मार्गदर्शन",
    shortDescription:
      "Doctor का समय, Token और ज़रूरत पड़ने पर Ranchi के बड़े अस्पतालों के लिए सही सलाह।",
    fullDescription:
      "हमारे Reception Staff मरीज़ों को टोकन लेने, Doctor के समय, दवा लेने के तरीके और गंभीर स्थिति में Ranchi के बड़े अस्पतालों में जाने के लिए सही मार्गदर्शन प्रदान करते हैं।",
    category: "Clinical Support",
    badge: "मरीज़ों की मदद",
    iconName: "compass",
    availability: "Reception Desk पर रोज़ाना",
    image: {
      src: "/illustrations/service-general-checkup.svg",
      alt: "Patient guidance, vitals checkup and health monitoring illustration",
      width: 500,
      height: 350,
    },
    keyFeatures: [
      "OPD Token में पूरी मदद",
      "दवा और जाँच की साफ़ समझ",
      "ज़रूरत पड़ने पर Ranchi के लिए रेफरल सलाह",
      "सही और पारदर्शी जानकारी",
    ],
    actionLabel: "Reception से बात करें",
    actionHref: "tel:+919693821174",
    isEmergency: false,
    status: "verified",
    verificationSource: "Reception desk verified on premises",
  },
];
