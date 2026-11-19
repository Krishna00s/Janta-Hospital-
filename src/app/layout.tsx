import type { Metadata, Viewport } from "next";
import { Manrope, Newsreader, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";
import { generateHospitalJsonLd } from "@/lib/schema";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const notoDevanagari = Noto_Sans_Devanagari({
  variable: "--font-devanagari",
  subsets: ["devanagari"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0A5C4F",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    template: "%s | Janta Hospital Lohardaga",
    default: "Janta Hospital, Lohardaga | 24-Hour Healthcare & Clinical Services",
  },
  description:
    "Official website for Janta Hospital in Palmerganj, Lohardaga, Jharkhand. Providing 24-hour emergency care, outpatient consultations, and patient-first medicine.",
  metadataBase: new URL("https://jantahospital.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Janta Hospital, Lohardaga | Care, closer to home.",
    description:
      "24-hour emergency medical care, outpatient consultations, and patient-first healthcare in Palmerganj, Lohardaga, Jharkhand.",
    siteName: "Janta Hospital",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
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
      className={`${manrope.variable} ${newsreader.variable} ${notoDevanagari.variable} scroll-smooth antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-white text-[#122421] flex flex-col font-sans selection:bg-[#E8F5F1] selection:text-[#0A5C4F] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
