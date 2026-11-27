import ReactDOM from "react-dom";
import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/home/Hero";
import { EmergencyQuickHelp } from "@/components/home/EmergencyQuickHelp";
import { MedicalServices } from "@/components/home/MedicalServices";
import { MeetOurDoctors } from "@/components/home/MeetOurDoctors";
import { AboutHospital } from "@/components/home/AboutHospital";
import { HospitalFAQ } from "@/components/home/HospitalFAQ";
import { LocationContact } from "@/components/home/LocationContact";
import { Footer } from "@/components/layout/Footer";
import { homepageSections } from "@/config/homepage";
import { getCanonicalUrl, siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: {
    absolute: "Janta Hospital Lohardaga | Hospital in Lohardaga, Jharkhand",
  },
  description:
    "Janta Hospital is a trusted hospital in Powergunj, Lohardaga, Jharkhand providing 24-hour emergency care, general physician OPD consultations, and specialist doctor enquiries near Head Post Office.",
  alternates: {
    canonical: getCanonicalUrl("/"),
  },
  openGraph: {
    title: "Janta Hospital Lohardaga | Hospital in Lohardaga, Jharkhand",
    description:
      "Janta Hospital is a trusted hospital in Powergunj, Lohardaga, Jharkhand providing 24-hour emergency care, general physician OPD consultations, and specialist doctor enquiries near Head Post Office.",
    url: getCanonicalUrl("/"),
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
    images: [
      {
        url: siteConfig.defaultOgImage.url,
        width: siteConfig.defaultOgImage.width,
        height: siteConfig.defaultOgImage.height,
        alt: siteConfig.defaultOgImage.alt,
        type: siteConfig.defaultOgImage.type,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Janta Hospital Lohardaga | Hospital in Lohardaga, Jharkhand",
    description:
      "Janta Hospital is a trusted hospital in Powergunj, Lohardaga, Jharkhand providing 24-hour emergency care, general physician OPD consultations, and specialist doctor enquiries near Head Post Office.",
    images: [siteConfig.defaultOgImage.url],
  },
};

export default function Home() {
  ReactDOM.preload("/images/janta-hospital-night-exterior-mobile-sm.avif", {
    as: "image",
    type: "image/avif",
    fetchPriority: "high",
    imageSrcSet:
      "/images/janta-hospital-night-exterior-mobile-sm.avif 480w, /images/janta-hospital-night-exterior-mobile.avif 800w",
    imageSizes: "(max-width: 640px) calc(100vw - 32px), 800px",
  });

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1">
        {homepageSections.hero && <Hero />}
        {homepageSections.emergencyHelp && <EmergencyQuickHelp />}
        {homepageSections.services && <MedicalServices />}
        {homepageSections.doctors && <MeetOurDoctors />}
        {homepageSections.aboutHospital && <AboutHospital />}
        {homepageSections.faqs && <HospitalFAQ />}
        {homepageSections.location && <LocationContact />}
      </main>
      <Footer />
    </div>
  );
}
