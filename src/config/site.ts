import type { Metadata } from "next";

/**
 * Centralized Canonical Domain & Production SEO Architecture
 *
 * Configurable at build time via NEXT_PUBLIC_SITE_URL.
 * Supports Cloudflare Pages, Vercel, and custom domain deployment workflows.
 */

export const DEFAULT_SITE_URL = "https://jantahospitallohardaga.in";

/**
 * Resolves the canonical base site URL without trailing slash.
 * Priority:
 * 1. NEXT_PUBLIC_SITE_URL (custom canonical domain or environment override)
 * 2. CF_PAGES_URL (automatic system environment variable provided in Cloudflare Pages build environment)
 * 3. DEFAULT_SITE_URL fallback (https://jantahospitallohardaga.in)
 */
export function getSiteUrl(): string {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.CF_PAGES_URL;
  if (envUrl && envUrl.trim() !== "") {
    return envUrl.trim().replace(/\/+$/, "");
  }
  return DEFAULT_SITE_URL;
}

/**
 * Checks whether search engine indexing is permitted.
 * Defaults strictly to false unless NEXT_PUBLIC_ALLOW_INDEXING is explicitly set to "true".
 * Protection is explicit and does not depend solely on the Git branch or NODE_ENV.
 */
export function isIndexingAllowed(): boolean {
  return process.env.NEXT_PUBLIC_ALLOW_INDEXING === "true";
}

/**
 * Checks whether the current build represents a non-production or non-indexed deployment.
 * Backward-compatible helper that delegates to isIndexingAllowed().
 */
export function isPreviewDeployment(): boolean {
  return !isIndexingAllowed();
}

/**
 * Generates the robots metadata configuration for Next.js based on indexing permissions.
 *
 * - When indexing is disabled (default):
 *   Emits noindex, nofollow directives.
 * - When indexing is enabled (NEXT_PUBLIC_ALLOW_INDEXING=true):
 *   Emits index, follow directives with Googlebot snippet/preview settings.
 */
export function getRobotsConfig(): Metadata["robots"] {
  if (!isIndexingAllowed()) {
    return {
      index: false,
      follow: false,
      nocache: true,
      googleBot: {
        index: false,
        follow: false,
        noimageindex: true,
      },
    };
  }

  return {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  };
}

/**
 * Generates canonical absolute URLs adhering to strict single-URL routing (no trailing slashes).
 */
export function getCanonicalUrl(path: string = "/"): string {
  const siteUrl = getSiteUrl();
  const cleanPath = path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
  return `${siteUrl}${cleanPath}`;
}

/**
 * Core site-wide constants for SEO, Open Graph, and Structured Data.
 */
export const siteConfig = {
  name: "Janta Hospital",
  legalName: "Janta Hospital",
  alternateName: "Janta Hospital Lohardaga",
  hindiName: "जनता हॉस्पिटल लोहरदगा",
  description:
    "Official website for Janta Hospital in Powergunj, Lohardaga, Jharkhand. Providing 24-hour emergency medical care, general physician outpatient consultations (OPD), and 24/7 on-site medicine dispensary counter.",
  locale: "en_IN",
  alternateLocales: ["hi_IN"],
  defaultOgImage: {
    url: "/images/og-image.jpg",
    width: 1200,
    height: 630,
    alt: "Illuminated nighttime facade and entrance of Janta Hospital in Powergunj, Lohardaga",
    type: "image/jpeg",
  },
  themeColor: "#0A5C4F",
  contact: {
    primaryPhone: "+919341900715",
    primaryPhoneDisplay: "+91 93419 00715",
    emergencyPhone: "+919308348606",
    emergencyPhoneDisplay: "+91 93083 48606",
    whatsappNumber: "9341900715",
  },
  address: {
    street: "Main Road, near Head Post Office, Powergunj",
    locality: "Powergunj",
    city: "Lohardaga",
    state: "Jharkhand",
    postalCode: "835302",
    country: "IN",
    landmark: "near Head Post Office / Near Lohardaga Main Bus Stand",
  },
  geo: {
    // Exact Google Maps listing coordinates for Janta Hospital, Powergunj, Lohardaga
    latitude: 23.4437601,
    longitude: 84.6887953,
  },
} as const;
