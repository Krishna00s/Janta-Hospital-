"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ZoomIn, Phone, ArrowRight, CheckCircle2 } from "lucide-react";
import { galleryItems } from "@/content/gallery";
import { GalleryLightbox } from "@/components/gallery/GalleryLightbox";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import {
  hospitalConfig,
  primaryPhone,
  primaryPhoneHref,
  emergencyPhoneHref,
} from "@/content/hospital";

const categoryTabs = [
  { id: "All", label: "All Facilities" },
  { id: "Emergency", label: "24/7 Emergency" },
  { id: "Facilities", label: "OPD Consultation" },
  { id: "Dispensary", label: "Hospital Pharmacy" },
  { id: "Clinical Care", label: "Ward & Dressing" },
  { id: "Reception", label: "Reception Desk" },
] as const;

type CategoryFilter = (typeof categoryTabs)[number]["id"];

export function GalleryGrid() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const phoneHref = `tel:${hospitalConfig.contact.phone.value}`;

  const handleOpenLightboxById = (id: string) => {
    const index = galleryItems.findIndex((i) => i.id === id);
    if (index !== -1) {
      setLightboxIndex(index);
    }
  };

  const isVisible = (category: string) => {
    if (selectedCategory === "All") return true;
    return selectedCategory === category;
  };

  const getItem = (id: string) => galleryItems.find((i) => i.id === id);

  const heroItem = getItem("about-hospital-care");
  const emergencyItem = getItem("emergency-station");
  const wardItem = getItem("clinical-ward");
  const opdItem = getItem("opd-consultation");
  const pharmacyItem = getItem("pharmacy-counter");
  const dressingItem = getItem("minor-procedures");
  const receptionItem = getItem("reception-entrance");

  return (
    <>
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8 sm:mb-10">
        {categoryTabs.map((tab) => {
          const isActive = selectedCategory === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setSelectedCategory(tab.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all min-h-[40px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A5C4F] ${
                isActive
                  ? "bg-[#0A5C4F] text-white shadow-xs"
                  : "bg-[#F0F5F2] text-[#475B57] hover:bg-[#E2EEE8] hover:text-[#0A5C4F]"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div className="space-y-8 sm:space-y-10">
        {/* Section 1: Wide Featured Patient Care Journey */}
        {(selectedCategory === "All" || selectedCategory === "Clinical Care") && heroItem && (
          <ScrollReveal direction="card">
            <div className="relative rounded-3xl overflow-hidden border border-[#B7D8CA] hover:border-[#8DBDAA] shadow-2xs bg-white card-hover-lift transition-all">
              <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                {/* Photo Canvas with Click-to-Zoom */}
                <div
                  onClick={() => handleOpenLightboxById(heroItem.id)}
                  className="lg:col-span-7 relative min-h-[260px] sm:min-h-[340px] bg-[#0D2420] border-b lg:border-b-0 lg:border-r border-[#D2E6DC] overflow-hidden cursor-pointer group"
                >
                  <Image
                    src={heroItem.src}
                    alt={heroItem.alt}
                    fill
                    priority
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOpenLightboxById(heroItem.id);
                      }}
                      className="opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 px-4 py-2 rounded-full bg-white/95 text-[#0A5C4F] font-medium text-xs shadow-md inline-flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A5C4F]"
                    >
                      <ZoomIn className="w-4 h-4" aria-hidden="true" />
                      <span>तस्वीर देखें</span>
                    </button>
                  </div>
                </div>

                {/* Patient Care Explanatory Guide */}
                <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-5">
                  <div>
                    <span className="text-xs font-medium uppercase tracking-wider text-[#0A5C4F] block mb-1">
                      आसान व्यवस्था
                    </span>
                    <h3 className="text-xl sm:text-2xl font-semibold text-[#122421] tracking-tight leading-tight">
                      Hospital आने पर क्या करें?
                    </h3>
                    <p className="text-sm sm:text-base text-[#2E4540] font-normal mt-2 leading-relaxed">
                      लोहरदगा और आस-पास के परिवारों के लिए सीधी और आसान व्यवस्था — ताकि बिना किसी परेशानी के तुरंत सही डॉक्टर और दवा मिल सके।
                    </p>

                    <div className="space-y-3 pt-4">
                      <div className="flex items-start gap-3 p-3 rounded-2xl bg-[#F4FAF7] border border-[#E0EFE8]">
                        <span className="w-6 h-6 rounded-full bg-[#0A5C4F] text-white font-semibold text-xs flex items-center justify-center shrink-0 mt-0.5">
                          1
                        </span>
                        <div>
                          <strong className="text-xs sm:text-sm font-semibold text-[#122421] block">Ground Floor Reception</strong>
                          <span className="text-xs sm:text-sm text-[#2E4540] font-normal leading-snug block">
                            प्रवेश करते ही पर्ची बनवाएँ और OPD टोकन प्राप्त करें।
                          </span>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-3 rounded-2xl bg-[#F4FAF7] border border-[#E0EFE8]">
                        <span className="w-6 h-6 rounded-full bg-[#0A5C4F] text-white font-semibold text-xs flex items-center justify-center shrink-0 mt-0.5">
                          2
                        </span>
                        <div>
                          <strong className="text-xs sm:text-sm font-semibold text-[#122421] block">OPD Consultation</strong>
                          <span className="text-xs sm:text-sm text-[#2E4540] font-normal leading-snug block">
                            बीमारी के अनुसार सुबह या शाम OPD में डॉक्टर को दिखाएँ।
                          </span>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-3 rounded-2xl bg-[#F4FAF7] border border-[#D2E6DC]">
                        <span className="w-6 h-6 rounded-full bg-[#0A5C4F] text-white font-semibold text-xs flex items-center justify-center shrink-0 mt-0.5">
                          3
                        </span>
                        <div>
                          <strong className="text-xs sm:text-sm font-semibold text-[#122421] block">Hospital Pharmacy &amp; Dressing</strong>
                          <span className="text-xs sm:text-sm text-[#2E4540] font-normal leading-snug block">
                            Hospital के अंदर ही दवा काउंटर और ड्रेसिंग रूम उपलब्ध है।
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-[#EEF3F0] flex items-center justify-between">
                    <a
                      href={primaryPhoneHref}
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#0A5C4F] hover:underline"
                    >
                      <Phone className="w-4 h-4 text-[#0A5C4F]" aria-hidden="true" />
                      <span>Reception से पूछें: {primaryPhone}</span>
                    </a>
                    <span className="text-xs sm:text-sm text-[#3B524E] font-normal">Powergunj</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* Section 2: Asymmetric 2-Column Department Pairs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          {/* Left Column (6 cols): Emergency Care & Inpatient Observation Ward */}
          <div className="lg:col-span-6 flex flex-col gap-6 sm:gap-8">
            {/* 24-Hour Emergency Care Station (Muted Crimson Accent) */}
            {isVisible("Emergency") && emergencyItem && (
              <ScrollReveal direction="card" delay={0}>
                <div className="rounded-3xl border border-[#ECCDD0] hover:border-[#DDA5AB] bg-[#FAFCFA] text-[#122421] shadow-2xs overflow-hidden flex flex-col justify-between card-hover-lift transition-all">
                  <div
                    onClick={() => handleOpenLightboxById(emergencyItem.id)}
                    className="relative w-full h-52 sm:h-60 bg-[#F9EDEE]/40 overflow-hidden cursor-pointer group"
                  >
                    <Image
                      src={emergencyItem.src}
                      alt={emergencyItem.alt}
                      fill
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleOpenLightboxById(emergencyItem.id);
                        }}
                        className="opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 px-4 py-2 rounded-full bg-white text-[#A63F45] font-medium text-xs shadow-md inline-flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A63F45]"
                      >
                        <ZoomIn className="w-4 h-4" aria-hidden="true" />
                        <span>तस्वीर देखें</span>
                      </button>
                    </div>
                  </div>

                  <div className="p-6 sm:p-7 space-y-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-semibold text-[#122421] tracking-tight">
                        24/7 Emergency Care
                      </h3>
                      <p className="text-sm sm:text-base text-[#2E4540] font-normal mt-1.5 leading-relaxed">
                        Powergunj में 24 घंटे आपातकालीन सेवा — अचानक तबीयत खराब होने, सांस में तकलीफ, चोट या तेज दर्द में तुरंत प्राथमिक देखभाल और इलाज।
                      </p>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-[#ECCDD0]/60">
                      <div className="flex items-center gap-2 text-xs sm:text-sm text-[#122421] font-medium">
                        <CheckCircle2 className="w-4 h-4 text-[#A63F45] shrink-0" aria-hidden="true" />
                        <span>Duty Doctors द्वारा 24 घंटे लगातार निगरानी</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs sm:text-sm text-[#122421] font-medium">
                        <CheckCircle2 className="w-4 h-4 text-[#A63F45] shrink-0" aria-hidden="true" />
                        <span>ऑक्सीजन, नेबुलाइज़र और आपातकालीन इंजेक्शन</span>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-[#ECCDD0]/60 flex items-center justify-between">
                      <a
                        href={emergencyPhoneHref}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#A63F45] text-white hover:bg-[#8E3339] font-semibold text-xs sm:text-sm shadow-xs transition-colors"
                      >
                        <Phone className="w-4 h-4 text-white" aria-hidden="true" />
                        <span>Emergency Helpline</span>
                      </a>
                      <span className="text-xs sm:text-sm text-[#A63F45] font-medium">सातों दिन उपलब्ध</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            )}

            {/* Inpatient Observation Ward */}
            {isVisible("Clinical Care") && wardItem && (
              <ScrollReveal direction="card" delay={80}>
                <div className="rounded-3xl border border-[#B7D8CA] hover:border-[#8DBDAA] bg-white shadow-2xs overflow-hidden flex flex-col justify-between card-hover-lift transition-all">
                  <div
                    onClick={() => handleOpenLightboxById(wardItem.id)}
                    className="relative w-full h-48 sm:h-56 bg-[#EDF7F3] border-b border-[#D2E6DC] overflow-hidden cursor-pointer group"
                  >
                    <Image
                      src={wardItem.src}
                      alt={wardItem.alt}
                      fill
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleOpenLightboxById(wardItem.id);
                        }}
                        className="opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 px-4 py-2 rounded-full bg-white/95 text-[#0A5C4F] font-medium text-xs shadow-md inline-flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A5C4F]"
                      >
                        <ZoomIn className="w-4 h-4" aria-hidden="true" />
                        <span>तस्वीर देखें</span>
                      </button>
                    </div>
                  </div>

                  <div className="p-6 sm:p-7 space-y-3">
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-[#122421] tracking-tight">
                        Clinic Floor &amp; Consultation
                      </h3>
                      <p className="text-sm sm:text-base text-[#2E4540] font-normal mt-1.5 leading-relaxed">
                        साफ़-सुथरे परामर्श कक्ष, ड्रेसिंग और शांत वातावरण में प्राथमिक स्वास्थ्य देखभाल। मरीज़ों की निरंतर देखभाल के लिए नर्सिंग स्टाफ उपलब्ध।
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#EEF3F0] flex items-center justify-between text-xs sm:text-sm text-[#2E4540]">
                      <span className="font-medium text-[#0A5C4F]">साफ़ और सुरक्षित वातावरण</span>
                      <span className="font-normal">24 घंटे निगरानी</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            )}
          </div>

          {/* Right Column (6 cols): OPD Consultation Clinic & On-Site Pharmacy */}
          <div className="lg:col-span-6 flex flex-col gap-6 sm:gap-8">
            {/* Outpatient OPD Consultation */}
            {isVisible("Facilities") && opdItem && (
              <ScrollReveal direction="card" delay={0}>
                <div className="rounded-3xl border border-[#B7D8CA] hover:border-[#8DBDAA] bg-white shadow-2xs overflow-hidden flex flex-col justify-between card-hover-lift transition-all">
                  <div
                    onClick={() => handleOpenLightboxById(opdItem.id)}
                    className="relative w-full h-52 sm:h-60 bg-[#EDF7F3] border-b border-[#D2E6DC] overflow-hidden cursor-pointer group"
                  >
                    <Image
                      src={opdItem.src}
                      alt={opdItem.alt}
                      fill
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleOpenLightboxById(opdItem.id);
                        }}
                        className="opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 px-4 py-2 rounded-full bg-white/95 text-[#0A5C4F] font-medium text-xs shadow-md inline-flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A5C4F]"
                      >
                        <ZoomIn className="w-4 h-4" aria-hidden="true" />
                        <span>तस्वीर देखें</span>
                      </button>
                    </div>
                  </div>

                  <div className="p-6 sm:p-7 space-y-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-semibold text-[#122421] tracking-tight">
                        OPD Consultation Clinic
                      </h3>
                      <p className="text-sm sm:text-base text-[#2E4540] font-normal mt-1.5 leading-relaxed">
                        सामान्य बीमारियों, बुखार, सर्दी-खाँसी, शुगर व ब्लड प्रेशर की नियमित जाँच के लिए सुबह व शाम OPD परामर्श उपलब्ध है।
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-[#EEF3F0]">
                      <div className="p-3 rounded-2xl bg-[#F4FAF7] border border-[#D2E6DC]">
                        <span className="text-xs font-semibold text-[#0A5C4F] uppercase tracking-wider block">
                          सुबह का समय
                        </span>
                        <span className="text-xs sm:text-sm font-semibold text-[#122421]">
                          सुबह 9:00 से दोपहर 1:00 बजे
                        </span>
                      </div>

                      <div className="p-3 rounded-2xl bg-[#F4FAF7] border border-[#D2E6DC]">
                        <span className="text-xs font-semibold text-[#0A5C4F] uppercase tracking-wider block">
                          शाम का समय
                        </span>
                        <span className="text-xs sm:text-sm font-semibold text-[#122421]">
                          शाम 5:00 से रात 8:00 बजे
                        </span>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-[#EEF3F0] flex items-center justify-between">
                      <Link
                        href="/doctors"
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#0A5C4F] hover:underline"
                      >
                        <span>Doctors देखें</span>
                        <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                      </Link>
                      <span className="text-xs sm:text-sm text-[#2E4540] font-normal">सोमवार से शनिवार</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            )}

            {/* On-Site Pharmacy Dispensary Counter */}
            {isVisible("Dispensary") && pharmacyItem && (
              <ScrollReveal direction="card" delay={80}>
                <div className="rounded-3xl border border-[#B7D8CA] hover:border-[#8DBDAA] bg-white shadow-2xs overflow-hidden flex flex-col justify-between card-hover-lift transition-all">
                  <div
                    onClick={() => handleOpenLightboxById(pharmacyItem.id)}
                    className="relative w-full h-48 sm:h-56 bg-[#EDF7F3] border-b border-[#D2E6DC] overflow-hidden cursor-pointer group"
                  >
                    <Image
                      src={pharmacyItem.src}
                      alt={pharmacyItem.alt}
                      fill
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleOpenLightboxById(pharmacyItem.id);
                        }}
                        className="opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 px-4 py-2 rounded-full bg-white/95 text-[#0A5C4F] font-medium text-xs shadow-md inline-flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A5C4F]"
                      >
                        <ZoomIn className="w-4 h-4" aria-hidden="true" />
                        <span>तस्वीर देखें</span>
                      </button>
                    </div>
                  </div>

                  <div className="p-6 sm:p-7 space-y-3">
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-[#122421] tracking-tight">
                        Hospital Pharmacy
                      </h3>
                      <p className="text-sm sm:text-base text-[#2E4540] font-normal mt-1.5 leading-relaxed">
                        Doctor को दिखाने के तुरंत बाद सभी ज़रूरी दवाइयाँ और सर्जिकल सामान आसानी से मिल जाते हैं। बाहर भटकने की ज़रूरत नहीं।
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#EEF3F0] flex items-center justify-between text-xs sm:text-sm text-[#2E4540]">
                      <span className="font-medium text-[#0A5C4F]">Ground Floor पर स्थित</span>
                      <span className="font-normal">Emergency दवाएँ उपलब्ध</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            )}
          </div>
        </div>

        {/* Section 3: Supporting Clinical Pair (Dressing Room & Reception) */}
        {(selectedCategory === "All" || selectedCategory === "Clinical Care" || selectedCategory === "Reception") && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch pt-2">
            {/* Minor Procedures & Sterile Dressing Room */}
            {(selectedCategory === "All" || selectedCategory === "Clinical Care") && dressingItem && (
              <ScrollReveal direction="card" delay={0}>
                <div className="rounded-3xl border border-[#B7D8CA] hover:border-[#8DBDAA] bg-white shadow-2xs overflow-hidden flex flex-col justify-between card-hover-lift transition-all">
                  <div
                    onClick={() => handleOpenLightboxById(dressingItem.id)}
                    className="relative w-full h-44 sm:h-52 bg-[#EDF7F3] border-b border-[#D2E6DC] overflow-hidden cursor-pointer group"
                  >
                    <Image
                      src={dressingItem.src}
                      alt={dressingItem.alt}
                      fill
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleOpenLightboxById(dressingItem.id);
                        }}
                        className="opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 px-4 py-2 rounded-full bg-white/95 text-[#0A5C4F] font-medium text-xs shadow-md inline-flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A5C4F]"
                      >
                        <ZoomIn className="w-4 h-4" aria-hidden="true" />
                        <span>तस्वीर देखें</span>
                      </button>
                    </div>
                  </div>

                  <div className="p-5 sm:p-6 space-y-2">
                    <h3 className="text-base sm:text-lg font-semibold text-[#122421] tracking-tight">
                      Dressing &amp; Injection Room
                    </h3>
                    <p className="text-sm sm:text-base text-[#2E4540] font-normal leading-relaxed">
                      घाव की साफ़-सफ़ाई, पट्टी बदलना और प्रशिक्षित नर्सिंग स्टाफ द्वारा सुरक्षित इंजेक्शन लगाने का साफ़-सुथरा कमरा।
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            )}

            {/* Reception Entry & Patient Inquiry Desk */}
            {(selectedCategory === "All" || selectedCategory === "Reception") && receptionItem && (
              <ScrollReveal direction="card" delay={80}>
                <div className="rounded-3xl border border-[#B7D8CA] hover:border-[#8DBDAA] bg-white shadow-2xs overflow-hidden flex flex-col justify-between card-hover-lift transition-all">
                  <div
                    onClick={() => handleOpenLightboxById(receptionItem.id)}
                    className="relative w-full h-44 sm:h-52 bg-[#EDF7F3] border-b border-[#D2E6DC] overflow-hidden cursor-pointer group"
                  >
                    <Image
                      src={receptionItem.src}
                      alt={receptionItem.alt}
                      fill
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleOpenLightboxById(receptionItem.id);
                        }}
                        className="opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 px-4 py-2 rounded-full bg-white/95 text-[#0A5C4F] font-medium text-xs shadow-md inline-flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A5C4F]"
                      >
                        <ZoomIn className="w-4 h-4" aria-hidden="true" />
                        <span>तस्वीर देखें</span>
                      </button>
                    </div>
                  </div>

                  <div className="p-5 sm:p-6 space-y-2">
                    <h3 className="text-base sm:text-lg font-semibold text-[#122421] tracking-tight">
                      Reception Desk &amp; Help Counter
                    </h3>
                    <p className="text-sm sm:text-base text-[#2E4540] font-normal leading-relaxed">
                      Hospital में प्रवेश करते ही Reception डेस्क, जहाँ से मरीज़ों को तुरंत टोकन, पर्ची और डॉक्टर से मिलने की सही जानकारी मिलती है।
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            )}
          </div>
        )}
      </div>

      {/* Accessible Lightbox Modal */}
      <GalleryLightbox
        items={galleryItems}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onSelectIndex={(index) => setLightboxIndex(index)}
      />
    </>
  );
}
