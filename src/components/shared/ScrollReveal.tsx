"use client";

import { useEffect, useRef, ReactNode, CSSProperties } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number; // Milliseconds stagger delay
  threshold?: number;
  direction?: "heading" | "card" | "up" | "fade";
  style?: CSSProperties;
}

/**
 * ScrollReveal Component
 * Progressive entrance animation using IntersectionObserver.
 *
 * Guarantees:
 * - Server HTML and static export output contains zero initial opacity overrides (100% SEO/No-JS safe).
 * - Elements visible on mount (above the fold) are immediately disconnected without ever being hidden or flashing.
 * - Elements strictly below the fold are silently armed with .reveal-pending while offscreen (instant 0-transition offscreen positioning).
 * - When entering the viewport on scroll, .is-revealed triggers a smooth, graceful upward rise (translateY 24px -> 0) and fade-in (opacity 0 -> 1) over 650ms.
 * - Stagger delays are handled directly via CSS transitionDelay for silky compositor scheduling.
 * - Respects prefers-reduced-motion: reduce by skipping observation and leaving elements fully visible.
 * - Zero layout shifts (CLS = 0) via compositor-only transform and opacity.
 */
export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  threshold = 0.05,
  direction = "card",
  style,
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentElem = elementRef.current;
    if (!currentElem || typeof window === "undefined") return;

    // In reduced motion, skip entrance transforms and opacity shifts completely
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    // Fallback if browser lacks IntersectionObserver support
    if (typeof IntersectionObserver === "undefined") {
      return;
    }

    // Immediate check: If element is already in the viewport or above the scroll position on mount, never arm or hide it
    const initialRect = currentElem.getBoundingClientRect();
    if (initialRect.top < window.innerHeight) {
      return;
    }

    let armed = false;

    // IntersectionObserver configured for both mobile and desktop viewports
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (armed) {
            // Apply delay via CSS transition-delay so compositor handles stagger
            if (delay > 0) {
              currentElem.style.setProperty("transition-delay", `${delay}ms`, "important");
            }
            currentElem.classList.add("is-revealed");

            const handleTransitionEnd = (e: TransitionEvent) => {
              if (
                e.target === currentElem &&
                (e.propertyName === "transform" || e.propertyName === "opacity")
              ) {
                currentElem.style.willChange = "auto";
                currentElem.style.removeProperty("transition-delay");
                currentElem.removeEventListener("transitionend", handleTransitionEnd);
              }
            };
            currentElem.addEventListener("transitionend", handleTransitionEnd);

            // Safety timeout to ensure inline styles are cleaned up even if transitionend is skipped
            setTimeout(() => {
              currentElem.style.willChange = "auto";
              currentElem.style.removeProperty("transition-delay");
            }, (delay || 0) + 750);
          }
          // Once visible on load or revealed on scroll, disconnect observer
          observer.disconnect();
        } else if (!armed) {
          // Element is strictly offscreen below the fold: arm it with progressive reveal
          armed = true;
          currentElem.classList.add("reveal-pending");
          if (direction === "card" || direction === "up") {
            currentElem.classList.add("reveal-card");
          } else if (direction === "heading") {
            currentElem.classList.add("reveal-heading");
          } else if (direction === "fade") {
            currentElem.classList.add("reveal-fade");
          }
        }
      },
      {
        threshold: threshold ?? 0.05,
        rootMargin: "0px 0px -20px 0px",
      }
    );

    observer.observe(currentElem);

    return () => {
      observer.disconnect();
    };
  }, [delay, threshold, direction]);

  return (
    <div ref={elementRef} className={className} style={style}>
      {children}
    </div>
  );
}
