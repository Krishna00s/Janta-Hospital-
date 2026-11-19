"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, MapPin, Menu, X, ArrowUpRight } from "lucide-react";
import { hospitalConfig } from "@/content/hospital";
import { Button } from "@/components/shared/Button";

// Custom Emerald Medical Cross Emblem matching the approved reference
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
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "हमारा Hospital", href: "/about" },
    { label: "इलाज और सुविधाएँ", href: "/services" },
    { label: "हमारे Doctors", href: "/doctors" },
    { label: "तस्वीरें", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ];

  // Close drawer on Escape key and manage body scroll
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      closeButtonRef.current?.focus();
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const phoneHref = `tel:${hospitalConfig.contact.phone.value}`;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#EAF2EF] transition-colors w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 lg:h-[4.25rem] flex items-center justify-between">
        
        {/* Brand Wordmark & Emerald Medical Cross Emblem */}
        <Link
          href="/"
          prefetch={false}
          className="group flex items-center gap-2.5 sm:gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A5C4F] rounded-lg p-1 -m-1 shrink-0"
        >
          <div className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
            <MedicalCrossIcon className="w-7 h-7 sm:w-8 sm:h-8" />
          </div>
          <div className="flex flex-col">
            <span className="font-sans font-extrabold text-base sm:text-xl lg:text-[1.35rem] tracking-tight text-[#122421] group-hover:text-[#0A5C4F] transition-colors leading-tight">
              {hospitalConfig.name.value}
            </span>
            <span className="text-[9px] sm:text-[10px] font-bold tracking-widest text-[#475B57] uppercase leading-none">
              {hospitalConfig.locationName}
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main Navigation"
          className="hidden lg:flex items-center gap-7 text-sm font-sans font-medium text-[#475B57]"
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
                    ? "text-[#0A5C4F] font-semibold after:absolute after:-bottom-1.5 after:left-0 after:right-0 after:h-0.5 after:bg-[#0A5C4F] after:rounded-full"
                    : "text-[#475B57]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <Button
            href={phoneHref}
            variant="secondary"
            size="md"
            icon={<Phone className="w-4 h-4 text-[#0A5C4F]" aria-hidden="true" />}
          >
            अभी Call करें
          </Button>

          <Button
            href={hospitalConfig.contact.mapsUrl.value}
            variant="primary"
            size="md"
            external
            icon={<MapPin className="w-4 h-4" aria-hidden="true" />}
          >
            रास्ता देखें
          </Button>
        </div>

        {/* Mobile Call Button & Hamburger Menu */}
        <div className="flex items-center sm:hidden gap-3">
          <a
            href={phoneHref}
            className="w-10 h-10 rounded-full bg-[#0A5C4F] text-white flex items-center justify-center shadow-sm hover:bg-[#074B40] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A5C4F]"
            aria-label={`Call Hospital at ${hospitalConfig.contact.phone.formatted}`}
          >
            <Phone className="w-4 h-4 text-white" aria-hidden="true" />
          </a>

          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="p-1.5 text-[#122421] hover:text-[#0A5C4F] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A5C4F] rounded-lg"
            aria-label="Open navigation menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-dialog"
          >
            <Menu className="w-6 h-6" aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Accessible Mobile Drawer Modal */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-dialog"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="fixed inset-0 z-50 flex flex-col justify-end bg-black/50 backdrop-blur-sm sm:hidden"
        >
          <div className="bg-white text-[#122421] border-t border-[#EAF2EF] rounded-t-3xl p-6 shadow-2xl flex flex-col max-h-[85vh] overflow-y-auto">
            {/* Drawer Header */}
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <div className="flex items-center gap-2.5">
                <MedicalCrossIcon className="w-7 h-7" />
                <div>
                  <span className="font-sans font-bold text-base text-[#122421] block">
                    {hospitalConfig.name.value}
                  </span>
                  <span className="text-[10px] text-[#6B7F7B] font-semibold tracking-wider block">
                    {hospitalConfig.locationName}
                  </span>
                </div>
              </div>

              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  menuButtonRef.current?.focus();
                }}
                className="p-2.5 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 min-w-[44px] min-h-[44px] flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A5C4F]"
                aria-label="Close navigation menu"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col py-6 space-y-1.5" aria-label="Mobile menu links">
              {navLinks.map((link) => {
                const isCurrent = link.href === "/" ? pathname === "/" : pathname?.startsWith(link.href);
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    prefetch={false}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-base font-medium py-3 px-3.5 rounded-xl transition-colors min-h-[44px] flex items-center justify-between ${
                      isCurrent
                        ? "bg-[#E8F5F1] text-[#0A5C4F] font-semibold"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-4 h-4 text-gray-400" aria-hidden="true" />
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Actions */}
            <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
              <Button
                href={phoneHref}
                onClick={() => setMobileMenuOpen(false)}
                variant="secondary"
                size="lg"
                className="w-full"
                icon={<Phone className="w-4 h-4" aria-hidden="true" />}
              >
                अभी Call करें ({hospitalConfig.contact.phone.formatted})
              </Button>

              <Button
                href={hospitalConfig.contact.mapsUrl.value}
                onClick={() => setMobileMenuOpen(false)}
                variant="primary"
                size="lg"
                external
                className="w-full"
                icon={<MapPin className="w-4 h-4" aria-hidden="true" />}
              >
                रास्ता देखें
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
