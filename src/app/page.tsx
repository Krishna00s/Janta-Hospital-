import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/home/Hero";
import { EmergencyQuickHelp } from "@/components/home/EmergencyQuickHelp";
import { MedicalServices } from "@/components/home/MedicalServices";
import { MeetOurDoctors } from "@/components/home/MeetOurDoctors";
import { AboutHospital } from "@/components/home/AboutHospital";
import { LocationContact } from "@/components/home/LocationContact";
import { Footer } from "@/components/layout/Footer";
import { homepageSections } from "@/config/homepage";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* High-Priority LCP Hero Image Preload specifically for Homepage */}
      <link
        rel="preload"
        as="image"
        href="/images/janta-hospital-night-exterior-mobile-sm.avif"
        imageSrcSet="/images/janta-hospital-night-exterior-mobile-sm.avif 480w, /images/janta-hospital-night-exterior-mobile.avif 800w"
        imageSizes="(max-width: 640px) 100vw, 800px"
        type="image/avif"
        fetchPriority="high"
      />
      <Header />
      <main className="flex-1">
        {homepageSections.hero && <Hero />}
        {homepageSections.emergencyHelp && <EmergencyQuickHelp />}
        {homepageSections.services && <MedicalServices />}
        {homepageSections.doctors && <MeetOurDoctors />}
        {homepageSections.aboutHospital && <AboutHospital />}
        {homepageSections.location && <LocationContact />}
      </main>
      <Footer />
    </div>
  );
}
