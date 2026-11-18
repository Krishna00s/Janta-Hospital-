export interface Department {
  slug: string;
  name: string;
  shortDesc: string;
  description: string;
  services: string[];
  status: "verified" | "pending";
}

export const departments: Department[] = [
  {
    slug: "general-medicine",
    name: "General Medicine",
    shortDesc: "Comprehensive primary healthcare, routine diagnoses, fever management, and lifestyle health guidance.",
    description: "The General Medicine department provides comprehensive diagnostic consultations, primary health assessments, chronic condition monitoring, and preventative wellness counseling for adult and elderly patients.",
    services: [
      "Outpatient diagnostic consultations",
      "Routine fever & infection care",
      "Blood pressure & diabetic monitoring",
      "Preventive health assessments",
    ],
    status: "pending",
  },
  {
    slug: "pediatrics",
    name: "Pediatrics & Child Health",
    shortDesc: "Compassionate clinical attention for infants, children, and young adolescents.",
    description: "Dedicated outpatient consultations addressing routine pediatric illnesses, nutrition, seasonal health issues, and developmental monitoring for growing children.",
    services: [
      "Child healthcare consultation",
      "Pediatric nutrition guidance",
      "Seasonal illness treatment",
      "Growth & development screening",
    ],
    status: "pending",
  },
  {
    slug: "obstetrics-gynecology",
    name: "Obstetrics & Gynecology",
    shortDesc: "Compassionate women's health consultation and prenatal guidance.",
    description: "Personalized care catering to women at every life stage, encompassing reproductive health consultations, antenatal guidance, and preventative screening.",
    services: [
      "Women's general health consultation",
      "Antenatal checkup guidance",
      "Maternal nutrition advisory",
      "Postnatal wellness follow-up",
    ],
    status: "pending",
  },
];
