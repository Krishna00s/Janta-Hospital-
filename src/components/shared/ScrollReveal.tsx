"use client";

import { useEffect, useRef, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number; // Milliseconds stagger delay
  threshold?: number;
  direction?: "heading" | "card" | "up" | "fade";
}

/**
 * ScrollReveal Component
 * Progressive editorial entrance animation using IntersectionObserver.
 *
 * Guarantees:
 * - Server HTML and static export output contains zero initial opacity overrides (100% SEO/No-JS safe).
 * - Elements visible on mount (above the fold) are immediately disconnected without ever being hidden.
 * - Elements strictly below the fold are silently armed with .reveal-pending (instant 0-transition offscreen positioning).
 * - When entering the viewport, .is-revealed triggers a visible, dignified upward rise and fade-in (32–38px, 700–750ms).
 * - Stagger delays are handled directly by CSS transitionDelay for silky compositor scheduling.
 * - Respects prefers-reduced-motion: reduce by skipping observation.
 * - Zero layout shifts (CLS = 0) via compositor-only transform and opacity.
 */
export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  threshold = 0.05,
  direction = "up",
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

    let armed = false;

    // Use IntersectionObserver with conservative bottom rootMargin so it triggers smoothly right as it appears
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (armed) {
            // Apply delay via CSS transition-delay so compositor handles stagger
            if (delay > 0) {
              currentElem.style.transitionDelay = `${delay}ms`;
            }
            currentElem.classList.add("is-revealed");

            const handleTransitionEnd = (e: TransitionEvent) => {
              if (
                e.target === currentElem &&
                (e.propertyName === "transform" || e.propertyName === "opacity")
              ) {
                currentElem.style.willChange = "auto";
                currentElem.style.transitionDelay = "";
                currentElem.removeEventListener("transitionend", handleTransitionEnd);
              }
            };
            currentElem.addEventListener("transitionend", handleTransitionEnd);
          }
          // Once visible on load or revealed on scroll, disconnect observer
          observer.disconnect();
        } else if (!armed) {
          // Element is strictly offscreen below the fold: arm it with progressive reveal
          armed = true;
          currentElem.classList.add("reveal-pending");
          if (direction === "card") {
            currentElem.classList.add("reveal-card");
          } else if (direction === "heading") {
            currentElem.classList.add("reveal-heading");
          }
        }
      },
      {
        threshold: threshold ?? 0.05,
        rootMargin: "0px 0px -15px 0px",
      }
    );

    observer.observe(currentElem);

    return () => {
      observer.disconnect();
    };
  }, [delay, threshold, direction]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}
