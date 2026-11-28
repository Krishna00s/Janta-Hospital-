"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, MapPin, Menu, X, ArrowRight, Navigation } from "lucide-react";
import {
  hospitalConfig,
  primaryPhone,
  primaryPhoneHref,
  emergencyPhone,
  emergencyPhoneHref,
} from "@/content/hospital";
import { Button } from "@/components/shared/Button";

// Custom Emerald Medical Cross Emblem matching the brand identity
function MedicalCrossIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M8.5 3C8.5 2.17157 9.17157 1.5 10 1.5H14C14.8284 1.5 15.5 2.17157 15.5 3V8.5H21C21.8284 8.5 22.5 9.17157 22.5 10V14C22.5 14.8284 21.8284 15.5 21 15.5H15.5V21C15.5 21.8284 14.8284 22.5 14 22.5H10C9.17157 22.5 8.5 21.8284 8.5 21V15.5H3C2.17157 15.5 1.5 14.8284 1.5 14V10C1.5 9.17157 2.17157 8.5 3 8.5H8.5V3Z"
        fill="#0A5C4F"
      />
    </svg>
  );
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const navLinks = [
    { label: "Home", href: "/", subtitle: "24/7 Care & OPD" },
    { label: "Services", href: "/services", subtitle: "Emergency, OPD & Pharmacy" },
    { label: "Doctors", href: "/doctors", subtitle: "Duty & OPD Timing" },
    { label: "About", href: "/about", subtitle: "Hospital & Facilities" },
    { label: "Gallery", href: "/gallery", subtitle: "Facilities Guide" },
    { label: "Contact", href: "/contact", subtitle: "Helpline & Directions" },
  ];

  const handleToggle = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const closeMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  // Prevent background scrolling when mobile navigation is open, restore when closed
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape" && mobileMenuOpen) {
        closeMenu();
        menuButtonRef.current?.focus();
      }
    }

    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);

      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen, closeMenu]);

  const phoneHref = `tel:${hospitalConfig.contact.phone.value}`;

  return (
    <>
      <header
        className={`sticky top-0 z-[60] border-b border-[#EAF2EF] transition-colors w-full ${
          mobileMenuOpen ? "bg-white" : "bg-white/95 backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 lg:h-[4.25rem] flex items-center justify-between">
          
          {/* Brand Wordmark & Emerald Medical Cross Emblem */}
          <Link
            href="/"
            prefetch={false}
            onClick={closeMenu}
            className="group flex items-center gap-2.5 sm:gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A5C4F] rounded-lg p-1 -m-1 shrink-0"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <MedicalCrossIcon className="w-7 h-7 sm:w-8 sm:h-8" />
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-bold text-base sm:text-xl lg:text-[1.35rem] tracking-tight text-[#122421] group-hover:text-[#0A5C4F] transition-colors leading-tight">
                {hospitalConfig.name.value}
              </span>
              <span className="text-xs font-medium tracking-widest text-[#3B524E] uppercase leading-none mt-0.5">
                {hospitalConfig.locationName}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation (lg+) */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-6 xl:gap-7 text-sm font-sans font-semibold text-[#3B524E]"
          >
            {navLinks.map((link) => {
              const isCurrent = link.href === "/" ? pathname === "/" : pathname?.startsWith(link.href);
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  prefetch={false}
                  aria-current={isCurrent ? "page" : undefined}
                  className={`relative py-1 transition-colors hover:text-[#0A5C4F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A5C4F] rounded px-1 -mx-1 ${
                    isCurrent
                      ? "text-[#0A5C4F] font-bold after:absolute after:-bottom-1.5 after:left-0 after:right-0 after:h-0.5 after:bg-[#0A5C4F] after:rounded-full"
                      : "text-[#3B524E]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Action Buttons (lg+) */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              href={primaryPhoneHref}
              variant="emergency"
              size="md"
              icon={<Phone className="w-4 h-4 text-white" aria-hidden="true" />}
            >
              Call Now
            </Button>

            <Button
              href={hospitalConfig.contact.mapsUrl.value}
              variant="primary"
              size="md"
              external
              icon={<MapPin className="w-4 h-4" aria-hidden="true" />}
            >
              Get Directions
            </Button>
          </div>

          {/* Mobile & Tablet Call Button + Hamburger/Close Toggle Button (< lg) */}
          <div className="flex items-center lg:hidden gap-2.5 sm:gap-3">
            <a
              href={primaryPhoneHref}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0A5C4F] text-white flex items-center justify-center shadow-xs hover:bg-[#07463C] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A5C4F]"
              aria-label={`Call Hospital at ${primaryPhone}`}
            >
              <Phone className="w-4 h-4 text-white" aria-hidden="true" />
            </a>

            <button
              id="mobile-menu-toggle-btn"
              ref={menuButtonRef}
              type="button"
              onClick={handleToggle}
              className={`p-2 rounded-xl transition-colors min-w-[42px] min-h-[42px] sm:min-w-[44px] sm:min-h-[44px] flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A5C4F] ${
                mobileMenuOpen
                  ? "bg-[#E8F5F1] text-[#0A5C4F]"
                  : "text-[#122421] hover:bg-[#F0F6F3] hover:text-[#0A5C4F]"
              }`}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-dialog"
            >
              <Menu
                id="mobile-menu-icon"
                className={`w-6 h-6 ${mobileMenuOpen ? "hidden" : "block"}`}
                aria-hidden="true"
              />
              <X
                id="mobile-close-icon"
                className={`w-6 h-6 ${mobileMenuOpen ? "block" : "hidden"}`}
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </header>

      {/* Full-Viewport Clean Mobile Navigation Overlay beneath the fixed header */}
      <div
        id="mobile-navigation-dialog"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
        data-open={mobileMenuOpen ? "true" : "false"}
        className={`fixed inset-x-0 bottom-0 top-14 sm:top-16 z-50 bg-[#F7FAF8] flex-col justify-between overflow-y-auto lg:hidden border-t border-[#DDECE4] ${
          mobileMenuOpen ? "flex" : "hidden"
        }`}
      >
        <div className="w-full max-w-lg mx-auto px-4 sm:px-6 py-4 sm:py-6 flex flex-col justify-between min-h-full space-y-6">
          
          {/* Navigation Links */}
          <nav className="flex flex-col space-y-2" aria-label="Mobile Navigation Links">
            {navLinks.map((link) => {
              const isCurrent = link.href === "/" ? pathname === "/" : pathname?.startsWith(link.href);
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  prefetch={false}
                  onClick={closeMenu}
                  aria-current={isCurrent ? "page" : undefined}
                  className={`group flex items-center justify-between p-3.5 sm:p-4 rounded-2xl transition-all min-h-[52px] border ${
                    isCurrent
                      ? "bg-[#0A5C4F] text-white border-[#0A5C4F] shadow-xs font-bold"
                      : "bg-white text-[#122421] border-[#E2ECE7] hover:border-[#A9DCCB] hover:bg-[#EDF7F3]"
                  }`}
                >
                  <div className="flex flex-col">
                    <span
                      className={`text-base sm:text-lg font-semibold tracking-tight ${
                        isCurrent ? "text-white" : "text-[#122421] group-hover:text-[#0A5C4F]"
                      }`}
                    >
                      {link.label}
                    </span>
                    <span
                      className={`text-xs sm:text-sm font-semibold ${
                        isCurrent ? "text-emerald-100" : "text-[#2E4540]"
                      }`}
                    >
                      {link.subtitle}
                    </span>
                  </div>

                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                      isCurrent
                        ? "bg-white/20 text-white"
                        : "bg-[#F0F6F3] text-[#0A5C4F] group-hover:bg-[#0A5C4F] group-hover:text-white transition-colors"
                    }`}
                  >
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Primary Actions: Prominent Call & Google Maps */}
          <div className="pt-2 space-y-3">
            {/* 24-Hour Emergency Line Card */}
            <a
              href={emergencyPhoneHref}
              onClick={closeMenu}
              className="w-full flex items-center justify-between p-4 rounded-2xl bg-[#0A5C4F] text-white shadow-sm hover:bg-[#074B40] transition-all min-h-[56px] border border-[#167868] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 text-white flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-white animate-call-ring" aria-hidden="true" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="px-2 py-0.5 rounded-full bg-[#F9EDEE] text-[#A63F45] text-xs font-bold uppercase tracking-wider">
                      24/7 Emergency
                    </span>
                  </div>
                  <span className="text-base sm:text-lg font-mono font-bold tracking-tight block mt-0.5 text-[#FAFCFA]">
                    {emergencyPhone}
                  </span>
                </div>
              </div>

              <span className="px-3.5 py-1.5 rounded-full bg-white text-[#0A5C4F] text-xs sm:text-sm font-bold shrink-0 shadow-sm">
                Emergency Call
              </span>
            </a>

            {/* Dedicated Emergency Care Page Action */}
            <Link
              href="/emergency"
              onClick={closeMenu}
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#F9EDEE] text-[#A63F45] hover:bg-[#F2DDE0] font-semibold text-xs sm:text-sm border border-[#ECCDD0] transition-colors"
            >
              <span>View Emergency Care Services</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#A63F45]" aria-hidden="true" />
            </Link>

            {/* Google Maps Directions Card */}
            <a
              href={hospitalConfig.contact.mapsUrl.value}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-white text-[#122421] border border-[#D5E5DE] hover:bg-[#F2F8F5] transition-all min-h-[48px]"
            >
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#0A5C4F] shrink-0" aria-hidden="true" />
                <span className="text-xs sm:text-sm font-bold text-[#122421]">
                  Get Directions (Google Maps)
                </span>
              </div>
              <Navigation className="w-4 h-4 text-[#0A5C4F] shrink-0" aria-hidden="true" />
            </a>

            {/* Hospital Landmark & Location Context */}
            <div className="text-center pt-1 pb-2">
              <span className="text-xs sm:text-sm text-[#3B524E] font-semibold block">
                Main Road, near Head Post Office, Powergunj, Lohardaga
              </span>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
