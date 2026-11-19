import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/home/Hero";
import { HospitalGallery } from "@/components/home/HospitalGallery";
import { MedicalServices } from "@/components/home/MedicalServices";
import { MeetOurDoctors } from "@/components/home/MeetOurDoctors";
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
        href="/images/janta-hospital-night-exterior-mobile.webp"
        imageSrcSet="/images/janta-hospital-night-exterior-mobile-sm.webp 480w, /images/janta-hospital-night-exterior-mobile.webp 800w, /images/janta-hospital-night-exterior.webp 1536w"
        imageSizes="(max-width: 1023px) 100vw, 60vw"
        type="image/webp"
        fetchPriority="high"
      />
      <Header />
      <main className="flex-1">
        {homepageSections.hero && <Hero />}
        {homepageSections.hospitalGallery && <HospitalGallery />}
        {homepageSections.services && <MedicalServices />}
        {homepageSections.doctors && <MeetOurDoctors />}
        {homepageSections.location && <LocationContact />}
      </main>
      <Footer />
    </div>
  );
}
