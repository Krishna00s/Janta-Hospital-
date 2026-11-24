import { hospitalConfig } from "@/content/hospital";

export function generateHospitalJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Hospital",
    name: hospitalConfig.name.value,
    alternateName: "Janta Hospital Lohardaga",
    description:
      "Janta Hospital provides 24-hour emergency medical care, general outpatient consultations (OPD), and an on-site medicine dispensary in Palmerganj, Lohardaga, Jharkhand.",
    url: "https://jantahospital.in",
    telephone: hospitalConfig.contact.primary.value,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: hospitalConfig.contact.primary.value,
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["Hindi", "English"],
      },
      {
        "@type": "ContactPoint",
        telephone: hospitalConfig.contact.emergency.value,
        contactType: "emergency",
        areaServed: "IN",
        availableLanguage: ["Hindi", "English"],
      },
    ],
    image: "https://jantahospital.in/images/janta-hospital-night-exterior.webp",
    hasMap: hospitalConfig.contact.mapsUrl.value,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: hospitalConfig.location.fullAddress,
      addressLocality: hospitalConfig.location.town,
      addressRegion: hospitalConfig.location.state,
      postalCode: hospitalConfig.location.pin,
      addressCountry: hospitalConfig.location.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 23.435,
      longitude: 84.68,
    },
    department: [
      {
        "@type": "MedicalOrganization",
        name: "24-Hour Emergency & Acute Care",
        description: "Immediate vital triage, emergency observation, and acute medical support.",
      },
      {
        "@type": "MedicalOrganization",
        name: "General Outpatient Consultation (OPD)",
        description: "Daily general clinical consultations and physician assessments.",
      },
      {
        "@type": "Pharmacy",
        name: "On-Site Medicine Dispensary",
        description: "Prescription medication dispensing and surgical supply counter.",
      },
    ],
  };
}
