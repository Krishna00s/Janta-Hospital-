import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Janta Hospital Lohardaga",
    short_name: "Janta Hospital",
    description:
      "Official website of Janta Hospital in Powergunj, Lohardaga, Jharkhand. 24-hour emergency care, consultations, and 24/7 on-site pharmacy.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0A5C4F",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
