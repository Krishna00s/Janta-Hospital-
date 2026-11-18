import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/home/Hero";
import { HospitalGallery } from "@/components/home/HospitalGallery";
import { MedicalServices } from "@/components/home/MedicalServices";
import { MedicalTeam } from "@/components/home/MedicalTeam";
import { Facilities } from "@/components/home/Facilities";
import { LocationContact } from "@/components/home/LocationContact";
import { Footer } from "@/components/layout/Footer";
import { homepageSections } from "@/config/homepage";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1">
        {homepageSections.hero && <Hero />}
        {homepageSections.hospitalGallery && <HospitalGallery />}
        {homepageSections.services && <MedicalServices />}
        {homepageSections.medicalTeam && <MedicalTeam />}
        {homepageSections.facilities && <Facilities />}
        {homepageSections.location && <LocationContact />}
      </main>
      <Footer />
    </div>
  );
}
