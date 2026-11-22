"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * ScrollManager Component
 *
 * Governs all cross-route and in-page scroll interactions:
 * 1. Immediate Scroll Reset on Cross-Route Navigation:
 *    Ensures destination pages open directly at the top (scrollY: 0) with zero
 *    animated scroll movement from the prior page's scroll position.
 * 2. Scoped Smooth Scrolling for Intentional In-Page Anchors:
 *    Allows anchor links (e.g. href="#contact") to scroll smoothly into view
 *    without applying global scroll-behavior: smooth to the root HTML element.
 * 3. Same-Route Navigation:
 *    When clicking a link to the currently active route (e.g. clicking "Services"
 *    while already on /services), smoothly returns to the top if scrolled down.
 * 4. Respects prefers-reduced-motion:
 *    Immediately jumps (behavior: 'auto') when reduced motion is preferred.
 */
export function ScrollManager() {
  const pathname = usePathname();

  // Instant scroll reset upon route change
  useEffect(() => {
    if (typeof window === "undefined") return;

    // If navigation does not target an in-page hash, reset scroll position immediately
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  // Global delegation for in-page anchors and same-route interactions
  useEffect(() => {
    if (typeof window === "undefined") return;

    function handleClick(e: MouseEvent) {
      // Find closest anchor tag
      const anchor = (e.target as HTMLElement).closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      // Skip external protocols
      if (
        href.startsWith("http://") ||
        href.startsWith("https://") ||
        href.startsWith("tel:") ||
        href.startsWith("mailto:")
      ) {
        return;
      }

      const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const smoothBehavior: ScrollBehavior = isReduced ? "auto" : "smooth";

      // Case 1: Pure in-page anchor links (e.g. href="#contact", href="#departments")
      if (href.startsWith("#")) {
        if (href === "#" || href === "#top") {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: smoothBehavior });
          return;
        }

        const targetId = href.slice(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({ behavior: smoothBehavior });
          history.pushState(null, "", href);
        }
        return;
      }

      // Case 2: Same-route link clicks
      try {
        const url = new URL(href, window.location.origin);
        if (url.origin === window.location.origin && url.pathname === window.location.pathname) {
          // If link has a hash targeting an element on this same page
          if (url.hash) {
            const targetId = url.hash.slice(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
              e.preventDefault();
              targetElement.scrollIntoView({ behavior: smoothBehavior });
              history.pushState(null, "", url.hash);
            }
          } else {
            // Same route without hash: smoothly return to top if scrolled down
            if (window.scrollY > 0) {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: smoothBehavior });
            }
          }
        }
      } catch {
        // Ignore invalid URLs
      }
    }

    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return null;
}
