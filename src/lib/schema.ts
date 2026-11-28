import { hospitalConfig } from "@/content/hospital";
import { allDoctors } from "@/content/doctors";
import { servicesData } from "@/content/services";
import { getSiteUrl, getCanonicalUrl, siteConfig } from "@/config/site";

/**
 * Root Schema: Hospital entity graph linking Hospital, Organization, and WebSite.
 * Injected in root layout head for global indexing.
 */
export function generateHospitalJsonLd() {
  const siteUrl = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Hospital",
        "@id": `${siteUrl}/#hospital`,
        name: siteConfig.name,
        legalName: siteConfig.legalName,
        alternateName: [
          siteConfig.alternateName,
          siteConfig.hindiName,
          "Janta Hospital Powergunj",
        ],
        description: siteConfig.description,
        url: siteUrl,
        logo: `${siteUrl}/favicon.ico`,
        image: [
          `${siteUrl}/images/janta-hospital-night-exterior.webp`,
          `${siteUrl}/images/gallery-entrance.webp`,
          `${siteUrl}/images/gallery-signboard.webp`,
        ],
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
        hasMap: hospitalConfig.contact.mapsUrl.value,
        sameAs: [
          "https://maps.app.goo.gl/VETU3wJP8DgVGKbp7?g_st=aw",
        ],
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
          streetAddress: siteConfig.address.street,
          addressLocality: siteConfig.address.city,
          addressRegion: siteConfig.address.state,
          postalCode: siteConfig.address.postalCode,
          addressCountry: siteConfig.address.country,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: siteConfig.geo.latitude,
          longitude: siteConfig.geo.longitude,
        },
        medicalSpecialty: [
          "EmergencyMedicine",
          "GeneralPractice",
          "Surgery",
          "Orthopedics",
          "Neurosurgery",
          "Anesthesia",
        ],
        department: [
          {
            "@type": "MedicalOrganization",
            name: "24-Hour Emergency Care",
            description:
              "Round-the-clock emergency medical assistance, first-aid support, and duty doctor coverage in Lohardaga.",
            telephone: hospitalConfig.contact.emergency.value,
          },
          {
            "@type": "MedicalOrganization",
            name: "General Outpatient Department (OPD)",
            description:
              "Daily outpatient consultations with general physicians for seasonal illnesses and routine clinical checkups in Lohardaga.",
            telephone: hospitalConfig.contact.primary.value,
          },
          {
            "@type": "Pharmacy",
            "@id": `${siteUrl}/#pharmacy`,
            name: "Janta Hospital Medicine Dispensary",
            description:
              "On-site 24/7 medicine dispensary counter located on the ground floor front porch, providing essential prescribed medicines and dressing supplies for outpatients and emergency arrivals. Enquiries handled by hospital reception at +91 9341900715.",
            url: `${siteUrl}/#location`,
            image: `${siteUrl}/images/gallery-pharmacy.webp`,
            telephone: hospitalConfig.contact.primary.value,
            address: {
              "@type": "PostalAddress",
              streetAddress: siteConfig.address.street,
              addressLocality: siteConfig.address.city,
              addressRegion: siteConfig.address.state,
              postalCode: siteConfig.address.postalCode,
              addressCountry: siteConfig.address.country,
            },
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
            parentOrganization: {
              "@id": `${siteUrl}/#hospital`,
            },
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: siteConfig.name,
        description: siteConfig.description,
        publisher: {
          "@id": `${siteUrl}/#hospital`,
        },
        inLanguage: ["hi", "en"],
      },
    ],
  };
}

/**
 * Standard BreadcrumbList JSON-LD generator for internal routes.
 */
export function generateBreadcrumbJsonLd(
  items: Array<{ name: string; path: string }>
) {
  const siteUrl = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: item.name,
        item: getCanonicalUrl(item.path),
      })),
    ],
  };
}

/**
 * Doctor / Physician entity schemas for /doctors.
 * Uses Schema.org Person with worksFor association to Janta Hospital,
 * accurately representing doctors without implying fabricated independent medical practices.
 */
export function generateDoctorsJsonLd() {
  const siteUrl = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "@id": `${siteUrl}/doctors#webpage`,
    url: `${siteUrl}/doctors`,
    name: "Doctors in Lohardaga | Janta Hospital",
    description:
      "Medical officers, general physicians, and on-call surgical specialists consulting at Janta Hospital, Lohardaga.",
    about: allDoctors.map((doc) => ({
      "@type": "Person",
      "@id": `${siteUrl}/doctors/${doc.id}#person`,
      name: doc.name,
      jobTitle: doc.role,
      worksFor: {
        "@type": "Hospital",
        "@id": `${siteUrl}/#hospital`,
        name: "Janta Hospital",
      },
    })),
  };
}

/**
 * Service entity schemas for /services.
 * Uses valid Schema.org Service type with healthcare categorization.
 */
export function generateServicesJsonLd() {
  const siteUrl = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "@id": `${siteUrl}/services#webpage`,
    url: `${siteUrl}/services`,
    name: "Hospital Services in Lohardaga | Janta Hospital",
    description:
      "Explore emergency care, OPD consultations, surgical service enquiries, pharmacy and other healthcare services at Janta Hospital, Lohardaga.",
    about: servicesData.map((svc) => ({
      "@type": "Service",
      name: svc.name,
      description: svc.shortDescription,
      serviceType: svc.name,
      category: "Healthcare",
      provider: {
        "@type": "Hospital",
        "@id": `${siteUrl}/#hospital`,
        name: "Janta Hospital",
      },
    })),
  };
}

/**
 * AboutPage schema for /about.
 */
export function generateAboutPageJsonLd() {
  const siteUrl = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${siteUrl}/about#webpage`,
    url: `${siteUrl}/about`,
    name: "About Janta Hospital | Lohardaga, Jharkhand",
    description:
      "Learn about Janta Hospital, its medical team, healthcare services and patient-focused approach in Lohardaga, Jharkhand.",
    mainEntity: {
      "@id": `${siteUrl}/#hospital`,
    },
  };
}

/**
 * ContactPage schema for /contact.
 */
export function generateContactPageJsonLd() {
  const siteUrl = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${siteUrl}/contact#webpage`,
    url: `${siteUrl}/contact`,
    name: "Janta Hospital Lohardaga | Contact & Directions",
    description:
      "Contact Janta Hospital Lohardaga at +91 9341900715. Emergency contact: +91 9308348606. Find our hospital address and Google Maps directions.",
    mainEntity: {
      "@id": `${siteUrl}/#hospital`,
    },
  };
}

/**
 * FAQPage schema for patient questions.
 */
export function generateFaqJsonLd(
  faqs: Array<{ question: string; answer: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * Dedicated Emergency Page Schema
 */
export function generateEmergencyJsonLd() {
  const siteUrl = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "@id": `${siteUrl}/emergency#webpage`,
    url: `${siteUrl}/emergency`,
    name: "24/7 Emergency Medical Care in Lohardaga | Janta Hospital",
    description:
      "Round-the-clock emergency medical services, immediate primary stabilization, oxygen, duty doctor coverage, and trauma first aid at Janta Hospital, Lohardaga.",
    about: {
      "@type": "MedicalOrganization",
      "@id": `${siteUrl}/#emergency-department`,
      name: "Janta Hospital 24-Hour Emergency Care",
      telephone: hospitalConfig.contact.emergency.value,
      url: `${siteUrl}/emergency`,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.address.street,
        addressLocality: siteConfig.address.city,
        addressRegion: siteConfig.address.state,
        postalCode: siteConfig.address.postalCode,
        addressCountry: siteConfig.address.country,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: siteConfig.geo.latitude,
        longitude: siteConfig.geo.longitude,
      },
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
      parentOrganization: {
        "@id": `${siteUrl}/#hospital`,
      },
    },
  };
}

/**
 * Dedicated Service Detail Schema
 * Uses valid Schema.org Service structured data with healthcare categorization.
 */
export function generateServiceDetailJsonLd(service: {
  slug: string;
  name: string;
  hindiName?: string;
  metaTitle: string;
  metaDescription: string;
  shortDescription: string;
}) {
  const siteUrl = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "@id": `${siteUrl}/services/${service.slug}#webpage`,
    url: `${siteUrl}/services/${service.slug}`,
    name: service.metaTitle,
    description: service.metaDescription,
    about: {
      "@type": "Service",
      "@id": `${siteUrl}/services/${service.slug}#service`,
      name: service.name,
      alternateName: service.hindiName,
      description: service.shortDescription,
      serviceType: service.name,
      category: "Healthcare",
      provider: {
        "@type": "Hospital",
        "@id": `${siteUrl}/#hospital`,
        name: "Janta Hospital",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Lohardaga",
      },
    },
  };
}

/**
 * Dedicated Doctor Profile Schema
 * Accurately represents the doctor as a Person affiliated with Janta Hospital,
 * avoiding implication of an independent private medical practice.
 */
export function generateDoctorDetailJsonLd(doctor: {
  id: string;
  name: string;
  role: string;
  specialty: string;
}) {
  const siteUrl = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "@id": `${siteUrl}/doctors/${doctor.id}#webpage`,
    url: `${siteUrl}/doctors/${doctor.id}`,
    name: `${doctor.name} - ${doctor.role} | Janta Hospital Lohardaga`,
    description: `Consult ${doctor.name} (${doctor.role}) at Janta Hospital, Powergunj, Lohardaga. Specialty: ${doctor.specialty}.`,
    mainEntity: {
      "@type": "Person",
      "@id": `${siteUrl}/doctors/${doctor.id}#person`,
      name: doctor.name,
      jobTitle: doctor.role,
      description: `${doctor.role} consulting at Janta Hospital, Lohardaga. Specialty: ${doctor.specialty}.`,
      url: `${siteUrl}/doctors/${doctor.id}`,
      worksFor: {
        "@type": "Hospital",
        "@id": `${siteUrl}/#hospital`,
        name: "Janta Hospital",
      },
    },
  };
}

/**
 * Dedicated Director Profile Schema
 * Accurately represents the director as a Person affiliated with Janta Hospital,
 * avoiding any clinical or physician classification.
 */
export function generateDirectorJsonLd(director: {
  slug: string;
  name: string;
  designation: string;
  summary: string;
}) {
  const siteUrl = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${siteUrl}/leadership/${director.slug}#webpage`,
    url: `${siteUrl}/leadership/${director.slug}`,
    name: `${director.name} - ${director.designation} | Janta Hospital Lohardaga`,
    description: `${director.designation} at Janta Hospital, Powergunj, Lohardaga. ${director.summary}`,
    mainEntity: {
      "@type": "Person",
      "@id": `${siteUrl}/leadership/${director.slug}#person`,
      name: director.name,
      jobTitle: director.designation,
      description: `${director.designation} at Janta Hospital, Lohardaga. ${director.summary}`,
      url: `${siteUrl}/leadership/${director.slug}`,
      worksFor: {
        "@type": "Hospital",
        "@id": `${siteUrl}/#hospital`,
        name: "Janta Hospital",
      },
    },
  };
}

/**
 * Privacy Policy Page Schema
 */
export function generatePrivacyPolicyJsonLd() {
  const siteUrl = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteUrl}/privacy-policy#webpage`,
    url: `${siteUrl}/privacy-policy`,
    name: "Privacy Policy | Janta Hospital Lohardaga",
    description:
      "Official privacy policy detailing data practices for the Janta Hospital Lohardaga website.",
    publisher: {
      "@id": `${siteUrl}/#hospital`,
    },
  };
}

