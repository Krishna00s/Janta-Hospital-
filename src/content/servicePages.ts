/**
 * Service Pages Data Architecture — Janta Hospital, Lohardaga
 *
 * Dedicated data structures for standalone service routes:
 * - /services/general-medicine
 * - /services/general-surgery
 * - /services/orthopaedic-surgery
 * - /services/laparoscopic-surgery
 * - /services/neurosurgery
 * - /services/pharmacy
 *
 * Truth-in-Advertising Rules:
 * - Clear distinction between verified on-site capabilities (24/7 duty doctor, OPD, on-site pharmacy,
 *   primary stabilization, oxygen, injections, wound dressing) and on-call specialist consultations.
 * - No fabrication of unavailable tertiary equipment (e.g. MRI, cardiac cath lab, in-house ICU).
 * - Clear guidance on referral support to tertiary hospitals in Ranchi when advanced care is needed.
 */

export interface ServiceStep {
  step: number;
  title: string;
  hindiTitle: string;
  description: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceDetail {
  slug: string;
  name: string;
  hindiName: string;
  category: "General Medicine" | "Surgical Services" | "Emergency" | "Pharmacy";
  badge: string;
  metaTitle: string;
  metaDescription: string;
  shortDescription: string;
  introHindi: string;
  detailedOverview: string;
  availability: string;
  availabilityHindi: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  scopeOfService: {
    title: string;
    items: string[];
  };
  whatToExpect: ServiceStep[];
  doctorIds: string[];
  faqs: ServiceFAQ[];
  isEmergency: boolean;
  isSurgical: boolean;
  actionLabel: string;
  actionPhone: string;
  actionType: "primary" | "emergency";
  referralNote?: string;
}

export const serviceDetailsList: ServiceDetail[] = [
  // 1. General Medicine / OPD
  {
    slug: "general-medicine",
    name: "General Medicine & Daily OPD",
    hindiName: "General Medicine & Daily OPD Consultation",
    category: "General Medicine",
    badge: "Daily OPD • 24/7 Coverage",
    metaTitle: "General Physician in Lohardaga | OPD Consultation | Janta Hospital",
    metaDescription:
      "Consult experienced General Physicians in Lohardaga at Janta Hospital. Daily OPD consultations for fever, viral illnesses, blood pressure, sugar testing and 24/7 emergency doctor coverage.",
    shortDescription:
      "Daily outpatient consultations for acute fevers, respiratory infections, blood pressure, diabetes, and general health concerns with 24/7 resident duty doctor support.",
    introHindi:
      "The General Medicine Department at Janta Hospital provides clinical outpatient consultations, diagnostic evaluations, and routine medical care for patients and families across Lohardaga and neighbouring communities — लोहरदगा में अनुभवी डॉक्टर्स द्वारा रोज़ाना OPD परामर्श, आवश्यक प्राथमिक जाँच व स्वास्थ्य सलाह उपलब्ध है।",
    detailedOverview:
      "Our clinical team manages common illnesses including acute fevers (Typhoid, Malaria, Dengue), seasonal viral infections, gastrointestinal issues, and chronic health conditions such as hypertension and diabetes. Supported by an on-site 24/7 pharmacy and dedicated resident duty doctors, patients receive immediate triage, accurate prescriptions, and structured recovery guidance — अस्पताल में 24 घंटे ड्यूटी डॉक्टर की उपस्थिति से किसी भी समय प्राथमिक स्वास्थ्य परामर्श और आवश्यक दवा सहायता मिलती है।",
    availability: "Daily General OPD Consultation • Confirm daily timings via Reception (+91 9341900715) • 24/7 Emergency Duty Doctor",
    availabilityHindi: "Daily OPD Consultation • Confirm via Reception (+91 9341900715) • 24/7 Duty Doctor",
    image: {
      src: "/images/gallery-staircase.webp",
      alt: "General medicine outpatient consultation clinic at Janta Hospital Lohardaga",
      width: 1200,
      height: 800,
    },
    scopeOfService: {
      title: "Clinical Scope & Conditions Treated",
      items: [
        "Diagnosis and management of acute fevers (Typhoid, Malaria, Seasonal Viral Fevers / मौसमी बुखार)",
        "Respiratory infections, acute cough, cold, bronchitis, and mild breathing discomfort",
        "Hypertension (High Blood Pressure) and Diabetes (Blood Glucose) monitoring & routine care",
        "Acute gastroenteritis, food poisoning, abdominal discomfort, and IV fluid hydration",
        "Evaluation of general weakness, nutritional anaemia, and fatigue management",
        "Preventative healthcare counseling and safe medication management for chronic illnesses",
      ],
    },
    whatToExpect: [
      {
        step: 1,
        title: "Registration & Token",
        hindiTitle: "Registration & Token",
        description:
          "Visit the Ground Floor reception counter to register and receive your consultation token — ग्राउंड फ्लोर रिसेप्शन से अपनी ओपीडी पर्ची और परामर्श टोकन प्राप्त करें।",
      },
      {
        step: 2,
        title: "Clinical Examination",
        hindiTitle: "Clinical Examination",
        description:
          "The consulting physician reviews your medical history, symptoms, and checks vital signs including blood pressure and pulse — डॉक्टर द्वारा शारीरिक परीक्षण व आवश्यक वाइटल्स की जाँच की जाती है।",
      },
      {
        step: 3,
        title: "Medication & Pharmacy",
        hindiTitle: "Medication & Pharmacy",
        description:
          "Collect your prescribed medicines and supplies directly from the on-site 24/7 pharmacy counter on the ground floor — अस्पताल के ग्राउंड फ्लोर दवा काउंटर से पर्चे की दवाएँ प्राप्त करें।",
      },
      {
        step: 4,
        title: "Follow-up & Guidance",
        hindiTitle: "Follow-up & Guidance",
        description:
          "Receive dietary advice, lifestyle instructions, and clear guidance on when to return for a follow-up assessment — दवा के नियम, खान-पान का परहेज़ और फॉलो-अप का समय समझ लें।",
      },
    ],
    doctorIds: ["dr-parwej-alam", "dr-rahbar-bharti"],
    faqs: [
      {
        question: "What are the OPD consultation hours at Janta Hospital?",
        answer:
          "General OPD consultations run daily from Monday through Saturday. Please call Reception at +91 9341900715 to confirm today's OPD timings and doctor availability. 24/7 emergency care and resident duty doctors are always available — दैनिक OPD परामर्श उपलब्ध है। आज के समय व टोकन के लिए रिसेप्शन पर संपर्क करें।",
      },
      {
        question: "Is prior appointment booking mandatory for general physician consultation?",
        answer:
          "Prior appointment is not strictly mandatory; walk-in patients can register directly at the reception counter. Calling +91 9341900715 before visiting is recommended to verify current queue status — सीधे रिसेप्शन से टोकन ले सकते हैं; वर्तमान स्थिति जानने के लिए पहले कॉल कर सकते हैं।",
      },
      {
        question: "Are blood pressure and blood glucose checks available on-site?",
        answer:
          "Yes, vital sign monitoring, blood pressure measurements, and random blood sugar tests are routinely performed during OPD hours — हाँ, वाइटल्स, ब्लड प्रेशर एवं ब्लड शुगर की त्वरित जाँच की व्यवस्था उपलब्ध है।",
      },
    ],
    isEmergency: false,
    isSurgical: false,
    actionLabel: "Check OPD Timing",
    actionPhone: "+919341900715",
    actionType: "primary",
    referralNote:
      "For patients presenting with critical medical emergencies requiring intensive care (ICU) or advanced ventilator support, our medical team provides prompt primary stabilization and coordinates seamless referral guidance to tertiary hospitals in Ranchi — गंभीर स्थिति में मरीज को स्थिर कर राँची के उच्च चिकित्सा केंद्र के लिए त्वरित रेफरल मार्गदर्शन दिया जाता है।",
  },

  // 2. General Surgery
  {
    slug: "general-surgery",
    name: "General Surgery Consultation",
    hindiName: "General Surgery Consultation",
    category: "Surgical Services",
    badge: "3 On-call Surgeons",
    metaTitle: "General Surgeon in Lohardaga | Surgical Consultation | Janta Hospital",
    metaDescription:
      "Consult experienced General Surgeons in Lohardaga at Janta Hospital. On-call surgical specialists for hernia, appendix, hydrocele, cysts, wound care and pre-operative clinical evaluation.",
    shortDescription:
      "On-call specialist surgical consultations for hernia, hydrocele, appendicitis, sebaceous cysts, abscess drainage, and minor surgical procedures in Lohardaga.",
    introHindi:
      "Janta Hospital provides specialized General Surgery consultations through an experienced panel of on-call surgeons for patients in Lohardaga — सामान्य सर्जिकल समस्याओं के क्लिनिकल मूल्यांकन एवं परामर्श हेतु ऑन-कॉल जनरल सर्जन उपलब्ध हैं।",
    detailedOverview:
      "Our surgical panel includes three visiting consultant general surgeons: Dr. Sushil Singh, Dr. Chandan Kumar, and Dr. Shalini Ekka. We offer clinical evaluations for abdominal pain, suspected appendicitis, hernias, hydroceles, lumps, and soft tissue infections. Minor procedures including wound debridement, sterile suturing, and abscess drainage are performed on-site under local anaesthesia with strict hygiene protocols — ऑन-कॉल सर्जनों द्वारा केस की समीक्षा कर उचित चिकित्सीय परामर्श व माइनर प्रोसीजर किए जाते हैं।",
    availability: "On-call Specialist Panel • Upon Case Review & Confirmation",
    availabilityHindi: "On-call Specialist Panel • Upon Case Review & Confirmation",
    image: {
      src: "/images/services/service-general-surgery.webp",
      alt: "General surgery consultation and clinical examination at Janta Hospital Lohardaga",
      width: 800,
      height: 533,
    },
    scopeOfService: {
      title: "Clinical Scope & Surgical Consultations",
      items: [
        "Clinical evaluation and surgical planning for Inguinal, Umbilical, and Incisional Hernias — हर्निया परामर्श",
        "Diagnosis and management guidance for acute and subacute Appendicitis — अपेंडिक्स लक्षण",
        "Assessment of Hydrocele, testicular swellings, and scrotal conditions",
        "Clinical examination of Sebaceous Cysts, Lipomas, and benign soft-tissue swellings",
        "Incision and drainage (I&D) for acute skin abscesses, boils, and infected wounds — फोड़ा चीरा व सफ़ाई",
        "Sterile primary suturing, laceration repair, and advanced wound dressing for trauma injuries",
      ],
    },
    whatToExpect: [
      {
        step: 1,
        title: "Reception Inquiry",
        hindiTitle: "Reception Inquiry",
        description:
          "Contact our reception desk at +91 9341900715 to check the visiting schedule and availability of our on-call general surgeons — रिसेप्शन पर कॉल करके ऑन-कॉल सर्जन की आगामी उपलब्धता व समय की जानकारी लें।",
      },
      {
        step: 2,
        title: "Clinical Evaluation",
        hindiTitle: "Clinical Evaluation",
        description:
          "The surgeon conducts a thorough physical examination, reviews prior ultrasound or pathology reports, and determines the clinical need for intervention — सर्जन द्वारा शारीरिक जाँच व पिछली रिपोर्टों की समीक्षा की जाती है।",
      },
      {
        step: 3,
        title: "Procedure Planning",
        hindiTitle: "Procedure Planning",
        description:
          "If a minor procedure or surgical repair is indicated, the surgeon explains the procedure, preparation steps, and recovery timeline clearly — प्रक्रिया, सावधानियाँ और आवश्यक व्यवस्था के बारे में स्पष्ट रूप से बताया जाता है।",
      },
      {
        step: 4,
        title: "Post-Procedure Dressing",
        hindiTitle: "Post-Procedure Dressing",
        description:
          "For minor procedures, routine sterile dressing changes, suture removal schedules, and wound care instructions are managed on-site — माइनर प्रोसीजर के बाद ड्रेसिंग रूम में नियमित पट्टी बदलने व दवाओं के निर्देश दिए जाते हैं।",
      },
    ],
    doctorIds: ["dr-sushil-singh", "dr-chandan-kumar", "dr-shalini-ekka"],
    faqs: [
      {
        question: "Is advance confirmation required to consult a general surgeon?",
        answer:
          "Yes, general surgeons visit on an on-call basis. We strongly recommend contacting reception at +91 9341900715 in advance to confirm current availability and visiting timings — सर्जन ऑन-कॉल उपलब्ध रहते हैं; आने से पहले रिसेप्शन पर कॉल करके समय की पुष्टि अवश्य कर लें।",
      },
      {
        question: "Can minor surgical procedures like suturing and cyst removal be done here?",
        answer:
          "Yes, primary surgical procedures such as wound suturing, sterile dressing, abscess drainage, and minor cyst excisions are performed in our clinical procedure room — हाँ, प्राथमिक सर्जिकल प्रोसीजर, घाव सिलाई, ड्रेसिंग एवं फोड़ा सफ़ाई अस्पताल में की जाती है।",
      },
      {
        question: "Does the hospital assist with referrals for complex major surgeries?",
        answer:
          "Yes. If a case requires tertiary surgical infrastructure or an advanced surgical ICU, our surgical consultants provide clear transfer coordination and guidance to major tertiary hospitals in Ranchi — जटिल मामलों में राँची के उच्च चिकित्सा केंद्रों के लिए स्पष्ट मार्गदर्शन दिया जाता है।",
      },
    ],
    isEmergency: false,
    isSurgical: true,
    actionLabel: "Check Availability",
    actionPhone: "+919341900715",
    actionType: "primary",
    referralNote:
      "Patient safety is our primary focus. Complex major surgical cases requiring specialized tertiary surgical infrastructure or intensive care monitoring are evaluated and coordinated with advanced tertiary hospitals in Ranchi — जटिल सर्जिकल मामलों में राँची के उच्च केंद्रों के साथ समन्वय एवं रेफरल सहायता प्रदान की जाती है।",
  },

  // 3. Orthopaedic Surgery
  {
    slug: "orthopaedic-surgery",
    name: "Orthopaedic & Bone Care",
    hindiName: "Orthopaedic & Bone Care Consultation",
    category: "Surgical Services",
    badge: "Bone & Joint Care",
    metaTitle: "Orthopaedic Doctor in Lohardaga | Bone & Joint Care | Janta Hospital",
    metaDescription:
      "Orthopaedic and bone care consultation in Lohardaga at Janta Hospital. Primary fracture stabilization, plaster, splinting, joint pain and arthritis evaluation.",
    shortDescription:
      "Emergency splinting, primary plaster stabilization, and clinical consultation for bone fractures, sprains, joint pain, and degenerative arthritis in Lohardaga.",
    introHindi:
      "Janta Hospital provides dedicated bone, joint, and trauma care services, focusing on emergency limb stabilization, primary splinting, and clinical orthopaedic consultations — अचानक चोट लगने या फ्रैक्चर के मामलों में त्वरित प्राथमिक स्थिरीकरण, प्लास्टर व स्प्लिंटिंग की व्यवस्था उपलब्ध है।",
    detailedOverview:
      "For road traffic accidents, accidental falls, and sports injuries, our 24/7 emergency medical team immediately immobilizes injured limbs, applies protective splints, and administers analgesics to alleviate acute pain. Visiting orthopaedic specialists provide comprehensive clinical evaluations for bone fractures, ligament tears, chronic knee osteoarthritis, and spinal disc discomfort. (24 घंटे ड्यूटी डॉक्टर की सहायता से प्राथमिक फ्रैक्चर स्थिरीकरण व ऑन-कॉल ऑर्थोपेडिक विशेषज्ञ परामर्श उपलब्ध है।)",
    availability: "On-call Specialist & 24/7 Primary Fracture First-Aid",
    availabilityHindi: "On-call Specialist & 24/7 Primary Fracture First-Aid",
    image: {
      src: "/images/services/service-orthopaedic.webp",
      alt: "Orthopaedic bone examination and fracture splinting care at Janta Hospital Lohardaga",
      width: 800,
      height: 533,
    },
    scopeOfService: {
      title: "Clinical Scope & Orthopaedic Care",
      items: [
        "Immediate emergency splinting and limb immobilization for suspected fractures — फ्रैक्चर प्राथमिक स्प्लिंटिंग",
        "Primary management of acute ligament sprains, muscle tears, and soft tissue joint swelling",
        "Clinical diagnosis and medical management of knee, hip, and shoulder joint pain — जोड़ों का दर्द",
        "Degenerative osteoarthritis, osteoporosis, and age-related bone density care guidance",
        "Application, maintenance, and safe removal of plaster casts and rigid immobilization splints",
        "Triage, stabilization, and tertiary referral coordination for severe compound or pelvic trauma",
      ],
    },
    whatToExpect: [
      {
        step: 1,
        title: "Immediate Stabilization",
        hindiTitle: "Immediate Stabilization",
        description:
          "Patients arriving with acute limb trauma or suspected fractures are promptly given pain relief and stabilized using protective splints — चोट या फ्रैक्चर में दर्द निवारक व स्प्लिंट लगाकर प्रभावित अंग को सुरक्षित किया जाता है।",
      },
      {
        step: 2,
        title: "Clinical Assessment",
        hindiTitle: "Clinical Assessment",
        description:
          "The medical team examines the injury site, checks neurovascular status, and recommends appropriate X-ray imaging to evaluate bone alignment — क्लिनिकल जाँच के आधार पर आवश्यक एक्स-रे करवाने की सलाह दी जाती है।",
      },
      {
        step: 3,
        title: "Plaster or Conservative Care",
        hindiTitle: "Plaster or Conservative Care",
        description:
          "Depending on the fracture configuration, temporary or definitive plaster is applied alongside supportive medication and limb elevation instructions — फ्रैक्चर अनुसार प्लास्टर बांधा जाता है अथवा दवा व आराम का निर्देश दिया जाता है।",
      },
      {
        step: 4,
        title: "Recovery & Follow-up",
        hindiTitle: "Recovery & Follow-up",
        description:
          "Patients receive scheduled appointments for cast evaluation, follow-up radiographs, and gradual joint mobilization exercises — निर्धारित समय बाद प्लास्टर की जाँच, एक्स-रे दोबारा देखने व गतिविधि का मार्गदर्शन किया जाता है।",
      },
    ],
    doctorIds: [],
    faqs: [
      {
        question: "Is emergency first aid available for sudden fractures and bone injuries?",
        answer:
          "Yes. Janta Hospital provides 24/7 emergency medical coverage where resident duty doctors immediately apply splints, administer pain relief, and stabilize injured limbs — हाँ, 24 घंटे ड्यूटी डॉक्टर उपस्थित रहते हैं जो घायल अंग को तुरंत स्थिर कर प्राथमिक उपचार देते हैं।",
      },
      {
        question: "Do you offer treatment for chronic joint pain and knee arthritis?",
        answer:
          "Yes, we provide clinical evaluations, pain management regimens, and lifestyle modifications for chronic knee osteoarthritis, back pain, and joint stiffness — हाँ, जोड़ों के दर्द, घुटनों की समस्या व आर्थराइटिस के लिए नियमित दवा व परामर्श उपलब्ध है।",
      },
      {
        question: "What happens if a complex surgical fracture repair is needed?",
        answer:
          "For severe compound fractures, intra-articular injuries, or cases requiring open reduction and internal fixation (ORIF), our team provides primary stabilization and guides families to advanced trauma centers in Ranchi — जटिल सर्जरी की आवश्यकता होने पर उच्च ऑर्थोपेडिक केंद्रों के लिए स्पष्ट मार्गदर्शन दिया जाता है।",
      },
    ],
    isEmergency: false,
    isSurgical: true,
    actionLabel: "Check Availability",
    actionPhone: "+919341900715",
    actionType: "primary",
    referralNote:
      "Severe polytrauma cases involving open fractures or unstable pelvic injuries are stabilized immediately with splints, fluid resuscitation, and emergency dressings before coordinated transfer to specialized tertiary trauma centers — गंभीर ओपन फ्रैक्चर में प्राथमिक स्थिरीकरण के तुरंत बाद मरीज को उच्च ट्रामा सेंटर रेफर किया जाता है।",
  },

  // 4. Laparoscopic Surgery
  {
    slug: "laparoscopic-surgery",
    name: "Laparoscopic Surgery Consultation",
    hindiName: "Laparoscopic Surgery Consultation",
    category: "Surgical Services",
    badge: "Minimally Invasive",
    metaTitle: "Laparoscopic Surgery in Lohardaga | Minimally Invasive Care | Janta Hospital",
    metaDescription:
      "Consult on-call laparoscopic surgeons in Lohardaga at Janta Hospital. Minimally invasive surgical consultation for gallbladder stones, appendix and hernia.",
    shortDescription:
      "Minimally invasive keyhole surgical consultations for gallbladder stones, appendicitis, and abdominal hernias offering reduced discomfort and faster post-operative recovery.",
    introHindi:
      "Modern laparoscopic (keyhole) surgical consultations offer minimal incision sizes, reduced discomfort, and accelerated recovery times for eligible surgical patients — दूरबीन विधि द्वारा कम चीरा, कम दर्द और तेजी से स्वस्थ होने के लिए विशेषज्ञ सर्जन परामर्श उपलब्ध है।",
    detailedOverview:
      "Compared to conventional open surgery, laparoscopic procedures minimize surgical tissue trauma and shorten hospital stays. At Janta Hospital, our panel of visiting consultant surgeons conducts detailed pre-operative assessments, reviews abdominal ultrasound reports, and advises patients on the suitability of laparoscopic intervention for gallstones, recurrent appendiceal inflammation, and abdominal wall hernias — ऑन-कॉल सर्जनों द्वारा मरीज की फिटनेस, अल्ट्रासाउंड रिपोर्ट और केस की उपयुक्तता का विश्लेषण कर परामर्श दिया जाता है।",
    availability: "On-call Surgical Consultation • Pre-scheduled via Reception",
    availabilityHindi: "On-call Surgical Consultation • Pre-scheduled via Reception",
    image: {
      src: "/images/services/service-laparoscopic.webp",
      alt: "Laparoscopic surgical instrumentation and consultation at Janta Hospital Lohardaga",
      width: 800,
      height: 533,
    },
    scopeOfService: {
      title: "Clinical Scope & Laparoscopic Guidance",
      items: [
        "Clinical evaluation and surgical counseling for Gallbladder Stones (Cholelithiasis / पित्त की थैली की पथरी)",
        "Diagnostic assessment of acute and recurrent Appendicitis for keyhole surgical feasibility",
        "Expert surgical opinions on Laparoscopic Hernia Repair (TEP/TAPP) versus open techniques",
        "Comprehensive pre-operative clinical workup, fitness evaluation, and routine anaesthetic clearance review",
        "Structured post-procedure wound care, dietary progression guidelines, and safe convalescence advice",
      ],
    },
    whatToExpect: [
      {
        step: 1,
        title: "Report Review",
        hindiTitle: "Report Review",
        description:
          "The on-call laparoscopic surgeon reviews prior abdominal ultrasounds, blood investigations, and clinical records — मरीज की पूर्व अल्ट्रासाउंड व जांच रिपोर्टों की ऑन-कॉल सर्जन द्वारा गहन समीक्षा की जाती है।",
      },
      {
        step: 2,
        title: "Clinical Suitability",
        hindiTitle: "Clinical Suitability",
        description:
          "The surgeon assesses the patient's age, medical history, and clinical state to determine suitability for minimally invasive intervention — उम्र, फिटनेस और बीमारी की स्थिति के आधार पर दूरबीन विधि की उपयुक्तता तय की जाती है।",
      },
      {
        step: 3,
        title: "Procedure Briefing",
        hindiTitle: "Procedure Briefing",
        description:
          "Patients and family members receive a clear explanation of operative steps, expected recovery duration, and necessary precautions — मरीज व परिजनों को प्रक्रिया, रिकवरी समय और सावधानियों की पारदर्शी जानकारी दी जाती है।",
      },
      {
        step: 4,
        title: "Follow-up Planning",
        hindiTitle: "Follow-up Planning",
        description:
          "A structured schedule is established for operative booking, post-procedure wound inspection, and routine activity resumption — निर्धारित योजना अनुसार सर्जरी समय, ओटी व्यवस्था अथवा आवश्यक होने पर सलाह दी जाती है।",
      },
    ],
    doctorIds: ["dr-sushil-singh", "dr-chandan-kumar", "dr-shalini-ekka"],
    faqs: [
      {
        question: "What are the primary clinical advantages of laparoscopic surgery?",
        answer:
          "Laparoscopic surgery uses small keyhole incisions, resulting in significantly less post-operative pain, minimal scarring, lower wound infection risk, and faster return to normal daily work — इसमें केवल छोटे छिद्रों द्वारा ऑपरेशन होता है, जिससे दर्द कम होता है और मरीज जल्दी सामान्य दिनचर्या में लौट सकता है।",
      },
      {
        question: "Can I get a consultation for gallbladder stones with an existing ultrasound report?",
        answer:
          "Yes. Bring your abdominal ultrasound and recent blood reports to the consultation; our surgeons will evaluate the size and position of stones and discuss surgical indications clearly — हाँ, अल्ट्रासाउंड रिपोर्ट लेकर आने पर सर्जन द्वारा पथरी की स्थिति और ऑपरेशन की आवश्यकता पर स्पष्ट सलाह दी जाती है।",
      },
      {
        question: "What records should I bring for a surgical consultation?",
        answer:
          "Please bring all previous ultrasound films, prescription slips, blood test reports, and a list of regular medications you are currently taking — मरीज की पुरानी अल्ट्रासाउंड रिपोर्ट, खून की जांच और नियमित दवाओं की सूची साथ लाएँ।",
      },
    ],
    isEmergency: false,
    isSurgical: true,
    actionLabel: "Check Availability",
    actionPhone: "+919341900715",
    actionType: "primary",
    referralNote:
      "All surgical decisions follow rigorous clinical protocols. Complex cases involving severe anatomical distortion, severe co-morbidities, or requiring high-dependency post-operative units are coordinated with advanced surgical facilities in Ranchi — किसी भी जटिल मामले में मरीज की स्थिति की समग्र समीक्षा के पश्चात ही उचित केंद्र हेतु निर्णय लिया जाता है।",
  },

  // 5. Neurosurgery
  {
    slug: "neurosurgery",
    name: "Neurosurgery & Spine Consultation",
    hindiName: "Neurosurgery & Spine Consultation",
    category: "Surgical Services",
    badge: "Consultant Neurosurgeon",
    metaTitle: "Neurosurgeon in Lohardaga | Head Injury & Spine Care | Janta Hospital",
    metaDescription:
      "Consult on-call Neurosurgeon Dr. Deepak Kumar in Lohardaga at Janta Hospital. Primary stabilization for head injuries, nerve pain and spine consultation.",
    shortDescription:
      "Primary trauma stabilization for acute head injuries, plus on-call specialist consultations for spinal disc problems, sciatica, and nerve compression in Lohardaga.",
    introHindi:
      "Head injuries and neurological emergencies demand immediate medical attention. Janta Hospital delivers rapid primary stabilization for head trauma alongside on-call neurosurgical consultations — हेड इंजरी का तुरंत प्राथमिक स्थिरीकरण और ऑन-कॉल न्यूरोसर्जन डॉ. दीपक कुमार द्वारा विशेषज्ञ परामर्श उपलब्ध है।",
    detailedOverview:
      "In acute neuro-trauma, early triage and stabilization within the golden hour save lives. Our emergency team provides neurological vitals monitoring (GCS scoring), high-flow oxygen, anti-edema measures, and sterile wound care. Consultant Neurosurgeon Dr. Deepak Kumar is on call to review clinical history and neurological signs for patients presenting with chronic sciatica, cervical spondylosis, back pain, or spinal disc disease — आपातकालीन टीम द्वारा तुरंत वाइटल्स मॉनिटरिंग व स्थिरीकरण किया जाता है, जिसके बाद ऑन-कॉल न्यूरोसर्जन द्वारा केस असेसमेंट किया जाता है।",
    availability: "On-call Neurosurgeon Dr. Deepak Kumar • 24/7 Primary Head Injury Triage",
    availabilityHindi: "On-call Neurosurgeon Dr. Deepak Kumar • 24/7 Primary Head Injury Triage",
    image: {
      src: "/images/services/service-neurosurgery.webp",
      alt: "Neurosurgical clinical assessment and head injury care at Janta Hospital Lohardaga",
      width: 800,
      height: 533,
    },
    scopeOfService: {
      title: "Clinical Scope & Neurological Support",
      items: [
        "Immediate emergency triage and primary stabilization for acute head injuries and concussions — सिर की चोट में स्थिरीकरण",
        "Clinical evaluation of persistent severe headaches, post-traumatic vomiting, vertigo, and altered consciousness",
        "Specialist consultation for lumbar disc prolapse, Sciatica, and spinal nerve compression — रीढ़ की हड्डी व नसों का दर्द",
        "Clinical examination for chronic numbness, tingling sensations, and limb motor weakness",
        "Emergency referral coordination with tertiary neurosurgical centers in Ranchi for surgical intracranial lesions",
      ],
    },
    whatToExpect: [
      {
        step: 1,
        title: "Immediate Triage",
        hindiTitle: "Immediate Triage",
        description:
          "Head injury patients undergo immediate Glasgow Coma Scale (GCS) assessment, pupil reactivity testing, and vital sign monitoring — हेड इंजरी में GCS, पल्स, बीपी व पुतलियों की जाँच तुरंत की जाती है।",
      },
      {
        step: 2,
        title: "Vital Support",
        hindiTitle: "Vital Support",
        description:
          "High-flow oxygen, anti-edema medications, intravenous fluids, and sterile wound dressings are administered without delay — मरीज को तुरंत ऑक्सीजन, जरूरी दवा व घाव ड्रेसिंग देकर स्थिर किया जाता है।",
      },
      {
        step: 3,
        title: "Specialist Review",
        hindiTitle: "Specialist Review",
        description:
          "Visiting Neurosurgeon Dr. Deepak Kumar reviews neurological symptoms, clinical history, and advises on diagnostic imaging — ऑन-कॉल न्यूरोसर्जन द्वारा केस इतिहास व लक्षणों की समीक्षा कर चिकित्सीय दिशा तय की जाती है।",
      },
      {
        step: 4,
        title: "Emergency Transport if Needed",
        hindiTitle: "Emergency Transport if Needed",
        description:
          "If intracranial hemorrhage or surgical intervention is diagnosed, rapid referral with life-support transport to Ranchi is facilitated — यदि सर्जरी की आवश्यकता हो, तो मरीज को तुरंत उच्च न्यूरो सेंटर भेजा जाता है।",
      },
    ],
    doctorIds: ["dr-deepak-kumar"],
    faqs: [
      {
        question: "Can an acute head injury patient be brought directly to Janta Hospital?",
        answer:
          "Yes. Bring the patient immediately to our emergency entrance. Our 24/7 resident duty team provides prompt oxygen support, wound dressing, anti-edema care, and vital stabilization crucial for patient safety — हाँ, तुरंत लाएँ; हमारी 24 घंटे की ड्यूटी टीम प्राथमिक ऑक्सीजन और स्थिरीकरण तुरंत प्रदान करती है।",
      },
      {
        question: "When is the consultant neurosurgeon available for consultation?",
        answer:
          "Consultant Neurosurgeon Dr. Deepak Kumar is associated on an on-call basis. Please contact reception at +91 9341900715 to schedule a consultation or confirm his next visiting clinic — डॉ. दीपक कुमार ऑन-कॉल उपलब्ध हैं; रिसेप्शन पर समय की पुष्टि कर परामर्श तय किया जाता है।",
      },
      {
        question: "Are consultations provided for chronic sciatica and neck or back pain?",
        answer:
          "Yes, we provide clinical evaluations and conservative medical management for chronic sciatica, cervical spondylosis, and spinal disc disorders — हाँ, साइटिका, सर्वाइकल और नसों के पुराने दर्द में क्लिनिकल परीक्षण व दवा परामर्श उपलब्ध है।",
      },
    ],
    isEmergency: true,
    isSurgical: true,
    actionLabel: "Check Availability",
    actionPhone: "+919341900715",
    actionType: "primary",
    referralNote:
      "Janta Hospital does not operate an in-house CT scan or neuro-intensive care unit (Neuro-ICU). In acute head trauma, once primary vital stabilization is achieved, patients requiring emergency neurosurgical intervention are transferred without delay to advanced tertiary neurosurgical centers in Ranchi — हेड इंजरी में प्राथमिक स्थिरीकरण के उपरांत जटिल मरीजों को बिना समय गंवाए राँची के उच्च न्यूरो सेंटरों के लिए रेफर किया जाता है।",
  },

  // 6. Hospital Pharmacy
  {
    slug: "pharmacy",
    name: "24/7 Hospital Pharmacy",
    hindiName: "24/7 Hospital Pharmacy & Dispensary",
    category: "Pharmacy",
    badge: "24/7 On-site Dispensary",
    metaTitle: "24 Hour Hospital Pharmacy in Lohardaga | Janta Hospital",
    metaDescription:
      "24/7 on-site medicine dispensary at Janta Hospital, Lohardaga. Essential prescribed medicines, emergency injections, surgical dressings and first-aid supplies available round the clock.",
    shortDescription:
      "Round-the-clock on-site dispensary supplying prescribed medicines, emergency injections, sterile dressings, and vital healthcare supplies on the hospital ground floor.",
    introHindi:
      "Located in the front veranda on the ground floor of Janta Hospital, our 24-hour pharmacy ensures patients and caregivers have immediate, continuous access to prescribed medications without leaving hospital premises — अस्पताल के मुख्य प्रवेश द्वार पर स्थित दवा काउंटर 24 घंटे खुला रहता है ताकि मरीजों को दवा के लिए बाहर न भटकना पड़े।",
    detailedOverview:
      "The on-site pharmacy stocks a comprehensive inventory of essential prescription drugs, antibiotics, analgesics, emergency intravenous fluids (Normal Saline, Ringer's Lactate, DNS), nebulization respules, sterile gauze, bandages, and surgical consumables. Our reception desk is available 24/7 to assist with pharmacy inquiries and stock confirmation — फार्मेसी में जीवनरक्षक दवाएँ, एंटीबायोटिक्स, सेलाइन, नेबुलाइज़र सामग्री और ड्रेसिंग का पर्याप्त स्टॉक हमेशा उपलब्ध रहता है।",
    availability: "Open 24 Hours • 7 Days a Week (Ground Floor Front Veranda)",
    availabilityHindi: "Open 24 Hours • 7 Days a Week (Ground Floor)",
    image: {
      src: "/images/gallery-pharmacy.webp",
      alt: "24-Hour on-site medicine dispensary counter at Janta Hospital Lohardaga front veranda",
      width: 1200,
      height: 800,
    },
    scopeOfService: {
      title: "Dispensary Inventory & Medical Supplies",
      items: [
        "Doctor-prescribed authentic branded and generic pharmaceuticals across all therapeutic categories",
        "Emergency injections including Tetanus Toxoid (TT), analgesics, antiemetics, and broad-spectrum antibiotics",
        "Intravenous (IV) infusion fluids (Normal Saline, RL, DNS) and sterile infusion sets",
        "Nebulization respules, bronchodilators, oxygen delivery masks, and cannulas",
        "Sterile gauze rolls, surgical cotton, antiseptic Betadine lotions, bandages, and burn dressings",
        "Routine diagnostic supplies: digital thermometers, BP cuffs, and blood glucose testing strips",
      ],
    },
    whatToExpect: [
      {
        step: 1,
        title: "Present Prescription",
        hindiTitle: "Present Prescription",
        description:
          "Present your valid doctor prescription or emergency medication requirement at the ground floor counter — डॉक्टर द्वारा लिखा गया हालिया पर्चा ग्राउंड फ्लोर दवा काउंटर पर दिखाएँ।",
      },
      {
        step: 2,
        title: "Verification & Dispensing",
        hindiTitle: "Verification & Dispensing",
        description:
          "Our pharmacy staff checks dosage, expiry dates, and prepares the items accurately under strict dispensary standards — स्टाफ द्वारा दवा की खुराक और एक्सपायरी डेट की जाँच कर दवाएँ तैयार की जाती हैं।",
      },
      {
        step: 3,
        title: "Dosage Explanation",
        hindiTitle: "Dosage Explanation",
        description:
          "Clear spoken instructions are provided regarding when and how to take each medication (before or after meals, timing, and storage) — दवा को कब और कैसे लेना है, स्टाफ द्वारा स्पष्ट रूप से समझाया जाता है।",
      },
      {
        step: 4,
        title: "Clear Itemized Bill",
        hindiTitle: "Clear Itemized Bill",
        description:
          "An itemized printed receipt is provided for every purchase for complete transparency and future medical reference — हर खरीद पर स्पष्ट बिलिंग व रसीद प्रदान की जाती है ताकि पूरा रिकॉर्ड रहे।",
      },
    ],
    doctorIds: ["dr-parwej-alam", "dr-rahbar-bharti"],
    faqs: [
      {
        question: "Is the hospital pharmacy open late at night and on Sundays?",
        answer:
          "Yes, the pharmacy operates 24 hours a day, 7 days a week, including nights, Sundays, and public holidays, ensuring medicines are always available for emergency cases — हाँ, हमारी फार्मेसी 24 घंटे सातों दिन खुली रहती है; रात में भी इमरजेंसी दवाएँ तुरंत मिलती हैं।",
      },
      {
        question: "Can I verify medicine availability by telephone before visiting?",
        answer:
          "Yes, you can call the hospital reception at +91 9341900715 round the clock to inquire about the availability of specific medications or surgical supplies — आप रिसेप्शन नंबर +91 9341900715 पर कॉल करके किसी विशिष्ट दवा की उपलब्धता जान सकते हैं।",
      },
      {
        question: "Does the pharmacy dispense medicines against external doctor prescriptions?",
        answer:
          "Yes, valid prescriptions issued by registered medical practitioners from any recognized clinic or hospital are accepted — हाँ, किसी भी वैध डॉक्टर के अधिकृत पर्चे पर आवश्यक दवाएँ प्रदान की जाती हैं।",
      },
    ],
    isEmergency: false,
    isSurgical: false,
    actionLabel: "Contact Pharmacy",
    actionPhone: "+919341900715",
    actionType: "primary",
  },
];

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return serviceDetailsList.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return serviceDetailsList.map((s) => s.slug);
}
