/**
 * Services Data Architecture — Janta Hospital, Lohardaga
 *
 * Truth-in-Advertising Rules:
 * - Only services verified via physical building signage, on-site photography,
 *   or hospital administration confirmation are marked as 'verified'.
 * - Surgical and specialist categories were submitted by the hospital representative;
 *   exact capabilities, theatre equipment, and procedure schedules are marked
 *   as 'pending_confirmation' until formally ratified by hospital management.
 * - Do not invent diagnostic equipment (e.g. MRI, CT) or intensive care units.
 * - Do not claim guaranteed emergency operations onsite.
 */

export type ServiceCategory =
  | "Emergency"
  | "Surgical Services"
  | "Outpatient"
  | "Pharmacy"
  | "Clinical Support";

export interface HospitalService {
  id: string;
  name: string;
  hindiName?: string;
  shortDescription: string;
  fullDescription: string;
  category: ServiceCategory;
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
  isSurgical?: boolean;
  status: "verified" | "pending_confirmation";
  verificationSource: string;
}

export const servicesData: HospitalService[] = [
  // 1. Emergency Treatment
  {
    id: "emergency-care",
    name: "24/7 Emergency Care",
    hindiName: "24 घंटे आपातकालीन प्राथमिक उपचार",
    shortDescription:
      "अचानक तबीयत खराब होने, चोट या दर्द में तुरंत प्राथमिक इलाज, स्थिरीकरण और आपातकालीन चिकित्सा सहायता।",
    fullDescription:
      "Janta Hospital Palmerganj, Lohardaga में 24 घंटे Emergency Care उपलब्ध है। Duty Doctor और प्रशिक्षित मेडिकल स्टाफ द्वारा तुरंत प्राथमिक जाँच, ऑक्सीजन, आपातकालीन इंजेक्शन और प्राथमिक उपचार प्रदान किया जाता है।",
    category: "Emergency",
    badge: "24/7 Emergency",
    iconName: "activity",
    availability: "24 घंटे उपलब्ध • सातों दिन",
    image: {
      src: "/images/gallery-entrance.webp",
      alt: "24-Hour emergency care and entrance access at Janta Hospital Lohardaga",
      width: 1200,
      height: 800,
    },
    keyFeatures: [
      "पहुँचते ही तुरंत प्राथमिक देखभाल व स्थिरीकरण",
      "ऑक्सीजन और नेबुलाइज़र की सुविधा",
      "Emergency Injection और आवश्यक जीवनरक्षक दवाएँ",
      "24 घंटे Duty Doctor व मेडिकल स्टाफ सहायता",
    ],
    actionLabel: "Emergency Call करें",
    actionHref: "tel:+919308348606",
    isEmergency: true,
    isSurgical: false,
    status: "verified",
    verificationSource:
      "24-Hour medical emergency service confirmed by hospital administration on premises",
  },

  // 2. Surgical Services (Supplied by hospital representative; availability requires management confirmation)
  {
    id: "general-surgery",
    name: "General Surgery",
    hindiName: "सामान्य सर्जरी एवं परामर्श",
    shortDescription:
      "पेट, हर्निया, अपेंडिक्स, सिस्ट व सामान्य सर्जिकल समस्याओं के लिए ऑन-कॉल विशेषज्ञ सर्जन परामर्श।",
    fullDescription:
      "हॉस्पिटल के ऑन-कॉल जनरल सर्जन (डॉ. सुशील सिंह, डॉ. चंदन कुमार, डॉ. शालिनी एक्का) द्वारा क्लिनिकल असेसमेंट एवं सामान्य सर्जिकल परामर्श। विशिष्ट प्रक्रियाओं और ओटी उपलब्धता की पुष्टि अस्पताल रिसेप्शन से की जाती है।",
    category: "Surgical Services",
    badge: "3 On-call Surgeons",
    iconName: "stethoscope",
    availability: "On-call सर्जन • क्लिनिकल आवश्यकता अनुसार",
    image: {
      src: "/images/services/service-general-surgery.webp",
      alt: "Representative surgical theater and sterile procedure equipment for General Surgery",
      width: 800,
      height: 533,
    },
    keyFeatures: [
      "अनुभवी ऑन-कॉल सर्जनों द्वारा क्लिनिकल परामर्श",
      "हर्निया, हाइड्रोसील, सिस्ट व फोड़ा प्राथमिक परामर्श",
      "माइनर सर्जिकल प्रोसीजर व घाव सिलाई/सफ़ाई",
      "गंभीर स्थिति में उच्च सर्जिकल केंद्र हेतु रेफरल सलाह",
    ],
    actionLabel: "सर्जन उपलब्धता पूछें",
    actionHref: "tel:+919341900715",
    isEmergency: false,
    isSurgical: true,
    status: "pending_confirmation",
    verificationSource:
      "Specialty submitted by hospital representative; individual procedure scheduling pending management confirmation",
  },
  {
    id: "orthopaedic-surgery",
    name: "Orthopaedic Surgery",
    hindiName: "हड्डी, जोड़ एवं फ्रैक्चर परामर्श",
    shortDescription:
      "हड्डी की चोट, फ्रैक्चर, जोड़ों के दर्द और ऑर्थोपेडिक समस्याओं के लिए प्राथमिक स्थिरीकरण व विशेषज्ञ सलाह।",
    fullDescription:
      "हड्डी टूटने, मोच, जोड़ों के दर्द, आर्थराइटिस व लिगामेंट चोटों में प्राथमिक प्लास्टर, स्प्लिंटिंग एवं ऑन-कॉल ऑर्थोपेडिक सर्जन से परामर्श की सुविधा।",
    category: "Surgical Services",
    badge: "On-call Specialist",
    iconName: "shield-check",
    availability: "On-call परामर्श • पूर्व पुष्टि अनुसार",
    image: {
      src: "/images/services/service-orthopaedic.webp",
      alt: "Representative orthopaedic bone and joint clinical examination",
      width: 800,
      height: 533,
    },
    keyFeatures: [
      "फ्रैक्चर व मोच का तुरंत प्राथमिक प्लास्टर/स्प्लिंट",
      "जोड़ों व घुटनों के दर्द का क्लिनिकल असेसमेंट",
      "हड्डी की चोट में दवा व रिकवरी मार्गदर्शन",
      "जटिल ट्रामा केस में विशेषज्ञ समन्वय",
    ],
    actionLabel: "हड्डी रोग परामर्श पूछें",
    actionHref: "tel:+919341900715",
    isEmergency: false,
    isSurgical: true,
    status: "pending_confirmation",
    verificationSource:
      "Specialty submitted by hospital representative; specific surgical procedures pending management confirmation",
  },
  {
    id: "laparoscopic-surgery",
    name: "Laparoscopic Surgery",
    hindiName: "दूरबीन विधि (Laparoscopic) सर्जरी परामर्श",
    shortDescription:
      "न्यूनतम चीरे वाली लेप्रोस्कोपिक प्रक्रियाओं एवं आधुनिक सर्जिकल विकल्पों के लिए सर्जन परामर्श।",
    fullDescription:
      "पित्ताशय की पथरी (Gallbladder Stone), अपेंडिक्स और हर्निया जैसी समस्याओं के लिए लेप्रोस्कोपिक (दूरबीन) विधि द्वारा परामर्श। सर्जन द्वारा केस की उपयुक्तता एवं प्रक्रिया की योजना तय की जाती है।",
    category: "Surgical Services",
    badge: "On-call Specialist",
    iconName: "activity",
    availability: "पूर्व परामर्श एवं सर्जन की उपलब्धता अनुसार",
    image: {
      src: "/images/services/service-laparoscopic.webp",
      alt: "Representative minimally invasive laparoscopic surgical equipment",
      width: 800,
      height: 533,
    },
    keyFeatures: [
      "न्यूनतम चीरे वाली दूरबीन विधि परामर्श",
      "कम दर्द व त्वरित रिकवरी संबंधी मार्गदर्शन",
      "गॉलब्लैडर व अपेंडिक्स क्लिनिकल असेसमेंट",
      "पूर्व जांच व केस उपयुक्तता की समीक्षा",
    ],
    actionLabel: "लेप्रोस्कोपी परामर्श पूछें",
    actionHref: "tel:+919341900715",
    isEmergency: false,
    isSurgical: true,
    status: "pending_confirmation",
    verificationSource:
      "Specialty submitted by hospital representative; theatre equipment and procedure schedules pending management confirmation",
  },
  {
    id: "neurosurgery",
    name: "Neurosurgery",
    hindiName: "न्यूरोसर्जरी एवं न्यूरोलॉजिकल परामर्श",
    shortDescription:
      "सिर की चोट (Head Injury), रीढ़ की हड्डी, नसों के दर्द व न्यूरोलॉजिकल समस्याओं में ऑन-कॉल परामर्श।",
    fullDescription:
      "ऑन-कॉल न्यूरोसर्जन (डॉ. दीपक कुमार) द्वारा सिर की चोट, नसों के दबाव, रीढ़ की हड्डी की समस्याओं और न्यूरोलॉजिकल लक्षणों का प्राथमिक मूल्यांकन एवं विशेषज्ञ मार्गदर्शन।",
    category: "Surgical Services",
    badge: "On-call Neurosurgeon",
    iconName: "stethoscope",
    availability: "On-call न्यूरोसर्जन • केस अनुसार उपलब्ध",
    image: {
      src: "/images/services/service-neurosurgery.webp",
      alt: "Representative neurological scan and brain/spine clinical consultation",
      width: 800,
      height: 533,
    },
    keyFeatures: [
      "हेड इंजरी का तुरंत प्राथमिक स्थिरीकरण",
      "नसों व रीढ़ की हड्डी के दर्द पर विशेषज्ञ राय",
      "न्यूरोलॉजिकल असेसमेंट व दवा परामर्श",
      "क्रिटिकल केस में उच्च स्तरीय न्यूरो सेंटर रेफरल सहायता",
    ],
    actionLabel: "न्यूरोसर्जन उपलब्धता पूछें",
    actionHref: "tel:+919341900715",
    isEmergency: false,
    isSurgical: true,
    status: "pending_confirmation",
    verificationSource:
      "Specialty submitted by hospital representative; on-call consultation supported by Dr. Deepak Kumar",
  },

  // 3. Outpatient & Primary Healthcare (Verified)
  {
    id: "opd-consultations",
    name: "OPD Consultation",
    hindiName: "दैनिक बाह्य रोगी विभाग (OPD)",
    shortDescription:
      "बुखार, सर्दी, पेट दर्द और seasonal diseases के लिए रोज़ाना सुबह-शाम Doctor से सलाह।",
    fullDescription:
      "Hospital के Ground Floor पर रोज़ाना morning व evening OPD चलती है। यहाँ अनुभवी Doctors द्वारा सामान्य बीमारियों की जाँच, Blood Pressure और Sugar testing और सही इलाज की सलाह दी जाती है।",
    category: "Outpatient",
    badge: "Daily OPD",
    iconName: "stethoscope",
    availability: "सोमवार से शनिवार • सुबह 9:00 - 1:00 और शाम 5:00 - 8:00",
    image: {
      src: "/images/gallery-staircase.webp",
      alt: "Outpatient clinical consultation area and floor access at Janta Hospital",
      width: 1200,
      height: 800,
    },
    keyFeatures: [
      "अनुभवी Doctor द्वारा व्यक्तिगत जाँच",
      "बुखार, सर्दी, खाँसी और seasonal diseases का इलाज",
      "BP और Blood Sugar की नियमित जाँच",
      "दवा और परहेज़ की सही जानकारी",
    ],
    actionLabel: "OPD Timing देखें",
    actionHref: "tel:+919341900715",
    isEmergency: false,
    isSurgical: false,
    status: "verified",
    verificationSource: "Ground-floor clinical reception confirmed on premises",
  },

  // 4. Hospital Pharmacy (Verified)
  {
    id: "pharmacy-counter",
    name: "Hospital Pharmacy",
    hindiName: "अस्पताल दवा काउंटर (Dispensary)",
    shortDescription:
      "Doctor द्वारा लिखी गई सभी ज़रूरी दवाएँ, injection और surgical सामान सीधे Hospital Pharmacy पर उपलब्ध।",
    fullDescription:
      "Hospital के अंदर front porch पर दवा का counter बना है। Doctor Consultation के तुरंत बाद मरीज़ों और परिजनों को लिखी गई medicines और first-aid supplies आसानी से मिल जाती हैं।",
    category: "Pharmacy",
    badge: "Hospital Pharmacy",
    iconName: "pill",
    availability: "Hospital खुलने के समय उपलब्ध",
    image: {
      src: "/images/gallery-pharmacy.webp",
      alt: "On-site medicine dispensary counter at Janta Hospital front porch",
      width: 1200,
      height: 800,
    },
    keyFeatures: [
      "Doctor द्वारा लिखी गई सभी दवाएँ",
      "Antiseptic, dressing और First Aid सामग्री",
      "Emergency दवाएँ हमेशा उपलब्ध",
      "Ground Floor front porch पर सीधी पहुँच",
    ],
    actionLabel: "Pharmacy जानकारी लें",
    actionHref: "tel:+919341900715",
    isEmergency: false,
    isSurgical: false,
    status: "verified",
    verificationSource: "On-site pharmacy confirmed on premises",
  },

  // 5. Clinical Support & Dressings (Verified)
  {
    id: "clinical-procedures",
    name: "Dressing & Injection",
    hindiName: "पट्टी, ड्रेसिंग एवं इंजेक्शन कक्ष",
    shortDescription:
      "घाव की antiseptic dressing, पट्टी बदलना, injection और routine checkup।",
    fullDescription:
      "हमारे यहाँ trained medical staff द्वारा साफ़-सुथरे तरीके से घाव की dressing, पट्टी बदलना, Tetanus और Doctor द्वारा prescribed injections लगाने की सुविधा उपलब्ध है।",
    category: "Clinical Support",
    badge: "Dressing Room",
    iconName: "shield-check",
    availability: "रोज़ाना Hospital समय में उपलब्ध",
    image: {
      src: "/images/gallery-signboard.webp",
      alt: "Official hospital signage and clinical procedures at Janta Hospital",
      width: 1200,
      height: 800,
    },
    keyFeatures: [
      "Sterile तरीके से घाव की dressing",
      "Intramuscular & Intravenous Injection",
      "BP, Pulse और Oxygen की जाँच",
      "Minor cuts और चोट का तुरंत first aid",
    ],
    actionLabel: "Dressing Room जानकारी",
    actionHref: "tel:+919341900715",
    isEmergency: false,
    isSurgical: false,
    status: "verified",
    verificationSource: "Confirmed clinical support room on premises",
  },

  // 6. Patient Guidance & Support (Verified)
  {
    id: "patient-guidance",
    name: "मरीज़ों की मदद और मार्गदर्शन",
    hindiName: "Patient Guidance & Referral Support",
    shortDescription:
      "Doctor का समय, Token और ज़रूरत पड़ने पर Ranchi के बड़े अस्पतालों के लिए सही सलाह।",
    fullDescription:
      "हमारे Reception Staff मरीज़ों को टोकन लेने, Doctor के समय, दवा लेने के तरीके और गंभीर स्थिति में Ranchi के बड़े अस्पतालों में जाने के लिए सही मार्गदर्शन प्रदान करते हैं।",
    category: "Clinical Support",
    badge: "मरीज़ों की मदद",
    iconName: "compass",
    availability: "Reception Desk पर रोज़ाना",
    image: {
      src: "/images/janta-hospital-exterior.webp",
      alt: "Janta Hospital facility building and patient guidance center",
      width: 1536,
      height: 1024,
    },
    keyFeatures: [
      "OPD Token में पूरी मदद",
      "दवा और जाँच की साफ़ समझ",
      "ज़रूरत पड़ने पर Ranchi के लिए रेफरल सलाह",
      "सही और पारदर्शी जानकारी",
    ],
    actionLabel: "Reception से बात करें",
    actionHref: "tel:+919341900715",
    isEmergency: false,
    isSurgical: false,
    status: "verified",
    verificationSource: "Reception desk verified on premises",
  },
];

export const emergencyServices = servicesData.filter((s) => s.category === "Emergency");
export const surgicalServices = servicesData.filter((s) => s.category === "Surgical Services");
export const generalServices = servicesData.filter(
  (s) => s.category !== "Emergency" && s.category !== "Surgical Services"
);
