/**
 * Emergency Care Content Architecture — Janta Hospital, Lohardaga
 *
 * Dedicated data structure for the /emergency route.
 *
 * Truth-in-Advertising Rules:
 * - Direct emergency telephone: tel:+919308348606
 * - General enquiries & WhatsApp: +91 9341900715
 * - Verified capabilities: 24/7 duty doctor presence, primary stabilization,
 *   oxygen support, nebulization, emergency injections, wound dressing/suturing.
 * - Life-threatening guidance: Direct recommendation to dial 112 (National Emergency Helpline)
 *   for severe highway trauma or when immediate government ambulance is required.
 * - What to bring: Clear note to bring previous prescription / ID / Ayushman card if handy,
 *   but NEVER DELAY reaching the hospital to gather documents in an acute emergency.
 * - Transparent referral: Active coordination with tertiary multi-specialty / ICU hospitals in Ranchi.
 */

export interface EmergencyFeature {
  title: string;
  hindiTitle: string;
  description: string;
  icon: string;
  badge: string;
}

export interface EmergencyFAQ {
  question: string;
  answer: string;
}

export interface WhatToBringItem {
  item: string;
  importance: "recommended" | "optional";
  note: string;
}

export const emergencyConfig = {
  eyebrow: "24/7 EMERGENCY MEDICAL CARE • LOHARDAGA",
  title: "24/7 Emergency Care",
  italicTitle: "Lohardaga",
  subtitle:
    "Round-the-clock emergency medical response in Powergunj, Lohardaga. On-duty resident doctors and trained nursing staff are ready 24 hours a day, 7 days a week for immediate primary stabilization — अचानक तबीयत खराब होने या चोट लगने पर बिना किसी पूर्व सूचना के सीधे अस्पताल आएँ।",
  phoneFormatted: "+91 93083 48606",
  phoneValue: "+919308348606",
  phoneHref: "tel:+919308348606",
  generalPhoneFormatted: "+91 93419 00715",
  generalPhoneHref: "tel:+919341900715",
  whatsappHref: "https://wa.me/919341900715",
  nationalEmergencyNumber: "112",
  nationalEmergencyHref: "tel:112",

  criticalNotice: {
    title: "Critical Emergency Helpline",
    description:
      "If the patient is unconscious, experiencing acute chest pain, uncontrolled bleeding, severe difficulty breathing, or involved in a serious road collision, call our Emergency Helpline (+91 9308348606) or dial 112 immediately — गंभीर आपातकाल में सीधे हमारे इमरजेंसी नंबर या 112 पर कॉल करें।",
  },

  verifiedCapabilities: [
    {
      title: "24/7 Duty Doctor On-Site",
      hindiTitle: "24/7 Resident Doctor",
      description:
        "Resident duty doctors are on-site 24 hours a day, day and night, to provide immediate clinical triage, initial evaluation, and primary resuscitation upon arrival — अस्पताल में 24 घंटे ड्यूटी डॉक्टर तुरंत प्राथमिक जाँच व उपचार के लिए उपस्थित रहते हैं।",
      icon: "stethoscope",
      badge: "24/7 Onsite",
    },
    {
      title: "Oxygen & Nebulization Support",
      hindiTitle: "Oxygen & Nebulization",
      description:
        "Dedicated medical oxygen cylinders, regulators, and clinical nebulizers are maintained for acute asthma exacerbations, respiratory distress, and desaturation episodes — साँस में तकलीफ़ या ऑक्सीजन घटने पर तुरंत ऑक्सीजन व नेबुलाइज़र सहायता उपलब्ध है।",
      icon: "wind",
      badge: "Immediate Care",
    },
    {
      title: "Emergency Injections & IV Fluids",
      hindiTitle: "Emergency Injections & IV",
      description:
        "Rapid intravenous fluid resuscitation (Normal Saline, RL, DNS) and emergency injectable medications for acute gastroenteritis, dehydration, pain crisis, or allergic reactions — गंभीर उल्टी-दस्त, डिहाइड्रेशन या दर्द में तुरंत आईवी ड्रिप व आवश्यक इंजेक्शन की व्यवस्था है।",
      icon: "activity",
      badge: "On-Premises",
    },
    {
      title: "Wound Dressing & Sterile Suturing",
      hindiTitle: "Wound Dressing & Suturing",
      description:
        "Sterile antiseptic cleansing, pressure bandaging, and primary wound suturing for lacerations, cuts, road accident abrasions, and soft-tissue trauma — चोट लगने या कटने पर घाव की एंटीसेप्टिक सफ़ाई, पट्टी और टाँके लगाने की सुविधा उपलब्ध है।",
      icon: "shield-check",
      badge: "Minor Procedures",
    },
    {
      title: "On-Premises 24/7 Pharmacy",
      hindiTitle: "24/7 Onsite Pharmacy",
      description:
        "Essential emergency pharmaceuticals, Tetanus Toxoid (TT), IV fluids, and sterile dressing materials are immediately available round the clock at our ground-floor dispensary — इमरजेंसी दवाएँ, टेटनस इंजेक्शन और ड्रेसिंग सामग्री 24 घंटे ग्राउंड फ्लोर पर उपलब्ध रहती हैं।",
      icon: "pill",
      badge: "24/7 Open",
    },
    {
      title: "Ranchi Tertiary Referral Guidance",
      hindiTitle: "Tertiary Referral Coordination",
      description:
        "For critical trauma requiring advanced ICU ventilator support, neurosurgery, or specialized cardiac care, our doctors stabilize the patient and guide families to tertiary hospitals in Ranchi — गंभीर मरीजों को प्राथमिक उपचार देकर राँची के बड़े अस्पतालों के लिए सुरक्षित मार्गदर्शन दिया जाता है।",
      icon: "compass",
      badge: "Referral Support",
    },
  ] as EmergencyFeature[],

  whatToBring: [
    {
      item: "Previous Medical Records & Prescriptions (If readily accessible)",
      importance: "recommended",
      note: "If handy, bring previous prescription slips, discharge summaries, or daily medications to help doctors understand the medical history — यदि आसानी से उपलब्ध हो तो पुरानी पर्ची व दवाएँ साथ लाएँ।",
    },
    {
      item: "Government Photo ID (Aadhaar Card)",
      importance: "optional",
      note: "Helpful for rapid patient registration and emergency record logging at the reception desk — मरीज के नाम व विवरण के त्वरित रिकॉर्ड में सहायक है।",
    },
    {
      item: "Ayushman Bharat / Insurance Card (If applicable)",
      importance: "optional",
      note: "Helpful for verification if documentation is needed for ongoing care or referral — यदि लागू हो, ताकि भविष्य की प्रक्रियाओं में सहायता मिल सके।",
    },
  ] as WhatToBringItem[],

  whatToBringWarning:
    "Important Notice: In an acute, life-threatening emergency, DO NOT waste critical minutes searching for documents or previous reports at home. Bring the patient to the hospital immediately; documentation can always be arranged later — आपातकाल में कागज़ात ढूंढने में समय न गँवाएँ; मरीज को तुरंत अस्पताल लाएँ।",

  doctorCoverageDistinction: {
    heading: "Doctor Coverage: Resident Doctors vs On-Call Specialists",
    residentCoverage:
      "Resident medical officers (duty doctors) are present on-site 24 hours a day, 7 days a week, to handle immediate emergency triage, vital stabilization, and primary treatment — रेजिडेंट ड्यूटी डॉक्टर्स 24 घंटे अस्पताल में मौजूद रहते हैं और तुरंत प्राथमिक जाँच संभालते हैं।",
    specialistCoverage:
      "Visiting specialists (General Surgeons, Orthopaedic specialists, Neurosurgeons) visit on an on-call basis. They are contacted and mobilized based on clinical assessment and emergency necessity — विशेषज्ञ सर्जन ऑन-कॉल जुड़े हैं और आवश्यकता अनुसार बुलाए जाते हैं।",
  },

  faqs: [
    {
      question: "Is it necessary to call ahead before bringing an emergency patient?",
      answer:
        "No prior call is required; our emergency entrance is open 24/7. However, if you can call our Emergency Helpline at +91 9308348606 while on the way, our medical team will prepare the emergency bed and supplies in advance — फोन करना अनिवार्य नहीं है, सीधे आ सकते हैं; फोन करने से टीम पहले से तैयार रहती है।",
    },
    {
      question: "Which telephone numbers should I dial for emergency medical help?",
      answer:
        "For immediate medical emergencies, call our direct Emergency Helpline: +91 9308348606. For general inquiries, routine OPD timings, and pharmacy stock, call Reception at +91 9341900715 — इमरजेंसी के लिए +91 9308348606 और सामान्य जानकारी के लिए +91 9341900715 पर कॉल करें।",
    },
    {
      question: "What is the hospital's clinical policy for critical or life-threatening cases?",
      answer:
        "Our resident doctors immediately initiate vital support (airway, breathing, circulation, oxygen, IV access, and splints). Once stabilized, if intensive ICU care or specialized surgical intervention is required, we coordinate transfer guidance with tertiary referral hospitals in Ranchi — मरीज को तुरंत प्राथमिक स्थिरीकरण दिया जाता है और जटिल मामलों में राँची रेफरल मार्गदर्शन दिया जाता है।",
    },
    {
      question: "Is the hospital pharmacy open during late night emergencies?",
      answer:
        "Yes, our on-site pharmacy counter is located in the front veranda on the ground floor and operates 24 hours a day, 365 days a year, ensuring all emergency injectables and supplies are instantly accessible — हाँ, दवा काउंटर 24 घंटे खुला रहता है और सभी जरूरी दवाएँ तुरंत मिल जाती हैं।",
    },
  ],
};
