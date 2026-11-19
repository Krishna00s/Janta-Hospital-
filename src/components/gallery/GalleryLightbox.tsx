"use client";

import { useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GalleryItem } from "@/content/gallery";

interface GalleryLightboxProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onSelectIndex: (index: number) => void;
}

export function GalleryLightbox({
  items,
  currentIndex,
  onClose,
  onSelectIndex,
}: GalleryLightboxProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  const isOpen = currentIndex !== null && currentIndex >= 0 && currentIndex < items.length;
  const currentItem = isOpen ? items[currentIndex] : null;

  const handlePrev = useCallback(() => {
    if (currentIndex === null) return;
    const nextIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
    onSelectIndex(nextIndex);
  }, [currentIndex, items.length, onSelectIndex]);

  const handleNext = useCallback(() => {
    if (currentIndex === null) return;
    const nextIndex = currentIndex === items.length - 1 ? 0 : currentIndex + 1;
    onSelectIndex(nextIndex);
  }, [currentIndex, items.length, onSelectIndex]);

  // Keyboard and focus management
  useEffect(() => {
    if (!isOpen) return;

    previousActiveElement.current = document.activeElement as HTMLElement;
    closeButtonRef.current?.focus();

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        handlePrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
      previousActiveElement.current?.focus();
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  if (!isOpen || !currentItem) {
    return null;
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Viewing ${currentItem.title}`}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-6 lg:p-8 animate-fade-in"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      {/* Lightbox Inner Container */}
      <div className="relative w-full max-w-5xl bg-[#0C1F1B] rounded-2xl sm:rounded-3xl border border-[#1E453D] overflow-hidden shadow-2xl flex flex-col max-h-[92vh]">
        
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-[#183B33] bg-[#091815]">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-0.5 rounded-full bg-[#0A5C4F] text-[#7CE4C9] text-xs font-bold uppercase tracking-wider">
              {currentItem.category}
            </span>
            <span className="text-xs text-[#80C8B5] font-mono">
              तस्वीर {currentIndex + 1} / {items.length}
            </span>
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="w-11 h-11 rounded-full bg-[#183B33] text-white hover:bg-[#235247] transition-colors flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7CE4C9]"
            aria-label="Close image lightbox"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {/* Center Image Stage with Navigation Arrows */}
        <div className="relative flex-1 min-h-[300px] sm:min-h-[420px] max-h-[60vh] sm:max-h-[68vh] bg-black/40 flex items-center justify-center p-2 sm:p-4 overflow-hidden">
          <Image
            src={currentItem.src}
            alt={currentItem.alt}
            width={currentItem.width}
            height={currentItem.height}
            priority
            className="max-h-[58vh] sm:max-h-[65vh] w-auto max-w-full object-contain rounded-lg"
          />

          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={handlePrev}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-[#0A5C4F] text-white backdrop-blur-xs flex items-center justify-center transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7CE4C9]"
            aria-label="Previous photograph"
          >
            <ChevronLeft className="w-6 h-6" aria-hidden="true" />
          </button>

          {/* Right Arrow Button */}
          <button
            type="button"
            onClick={handleNext}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-[#0A5C4F] text-white backdrop-blur-xs flex items-center justify-center transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7CE4C9]"
            aria-label="Next photograph"
          >
            <ChevronRight className="w-6 h-6" aria-hidden="true" />
          </button>
        </div>

        {/* Bottom Caption & Description */}
        <div className="px-5 sm:px-8 py-4 sm:py-5 bg-[#091815] border-t border-[#183B33] text-white">
          <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
            {currentItem.title}
          </h3>
          <p className="text-xs sm:text-sm text-[#A5D8CA] mt-1 leading-relaxed">
            {currentItem.description}
          </p>
        </div>

      </div>
    </div>
  );
}
