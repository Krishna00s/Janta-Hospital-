import { MetadataRoute } from "next";
import { getCanonicalUrl } from "@/config/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  // Production release timestamp for verified content revision
  const lastModified = new Date("2026-11-27T00:00:00.000Z");

  return [
    {
      url: getCanonicalUrl("/"),
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: getCanonicalUrl("/services"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: getCanonicalUrl("/doctors"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: getCanonicalUrl("/contact"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: getCanonicalUrl("/about"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: getCanonicalUrl("/gallery"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
