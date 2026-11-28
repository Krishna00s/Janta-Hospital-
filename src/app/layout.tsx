import type { Metadata, Viewport } from "next";
import { Manrope, Newsreader, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";
import { generateHospitalJsonLd } from "@/lib/schema";
import { ScrollManager } from "@/components/shared/ScrollManager";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { ConsentBanner } from "@/components/analytics/ConsentBanner";
import { getSiteUrl, getCanonicalUrl, siteConfig, getRobotsConfig } from "@/config/site";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["italic"],
  display: "swap",
});

const notoDevanagari = Noto_Sans_Devanagari({
  variable: "--font-devanagari",
  subsets: ["devanagari"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0A5C4F",
  width: "device-width",
  initialScale: 1,
};

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: "%s | Janta Hospital Lohardaga",
    default: "Janta Hospital Lohardaga | Hospital in Lohardaga, Jharkhand",
  },
  description:
    "Janta Hospital is a trusted hospital in Lohardaga, Jharkhand providing 24-hour emergency care, general physician OPD consultations, and specialist doctor enquiries near Head Post Office.",
  alternates: {
    canonical: getCanonicalUrl("/"),
  },
  openGraph: {
    title: "Janta Hospital Lohardaga | Hospital in Lohardaga, Jharkhand",
    description:
      "Janta Hospital is a trusted hospital in Lohardaga, Jharkhand providing 24-hour emergency care, general physician OPD consultations, and specialist doctor enquiries near Head Post Office.",
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    alternateLocale: [...siteConfig.alternateLocales],
    url: getCanonicalUrl("/"),
    type: "website",
    images: [
      {
        url: siteConfig.defaultOgImage.url,
        width: siteConfig.defaultOgImage.width,
        height: siteConfig.defaultOgImage.height,
        alt: siteConfig.defaultOgImage.alt,
        type: siteConfig.defaultOgImage.type,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Janta Hospital Lohardaga | Hospital in Lohardaga, Jharkhand",
    description:
      "Janta Hospital is a trusted hospital in Lohardaga, Jharkhand providing 24-hour emergency care, general physician OPD consultations, and specialist doctor enquiries near Head Post Office.",
    images: [siteConfig.defaultOgImage.url],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  robots: getRobotsConfig(),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = generateHospitalJsonLd();

  return (
    <html
      lang="hi"
      className={`${manrope.variable} ${newsreader.variable} ${notoDevanagari.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Consent Mode v2 Default Initialization (Default Denied) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                'ad_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied',
                'analytics_storage': 'denied'
              });
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-white text-[#122421] flex flex-col font-sans selection:bg-[#E8F5F1] selection:text-[#0A5C4F] overflow-x-hidden">
        <ScrollManager />
        <GoogleAnalytics />
        {children}
        <ConsentBanner />
      </body>
    </html>
  );
}
