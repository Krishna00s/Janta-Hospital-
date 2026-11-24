import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Janta Hospital Lohardaga",
    short_name: "Janta Hospital",
    description:
      "Official website of Janta Hospital in Palmerganj, Lohardaga, Jharkhand. 24-hour emergency care, consultations, and pharmacy.",
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
    ],
  };
}
