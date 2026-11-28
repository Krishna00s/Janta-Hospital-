import { MetadataRoute } from "next";
import { getCanonicalUrl } from "@/config/site";
import { serviceDetailsList } from "@/content/servicePages";
import { allDoctors } from "@/content/doctors";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  // Production release timestamp for verified content revision
  const lastModified = new Date("2026-11-27T00:00:00.000Z");

  const coreRoutes: MetadataRoute.Sitemap = [
    {
      url: getCanonicalUrl("/"),
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: getCanonicalUrl("/emergency"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.95,
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
    {
      url: getCanonicalUrl("/privacy-policy"),
      lastModified,
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];

  const leadershipRoutes: MetadataRoute.Sitemap = [
    {
      url: getCanonicalUrl("/leadership/jiyaul-ansari"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = serviceDetailsList.map((svc) => ({
    url: getCanonicalUrl(`/services/${svc.slug}`),
    lastModified,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const doctorRoutes: MetadataRoute.Sitemap = allDoctors.map((doc) => ({
    url: getCanonicalUrl(`/doctors/${doc.id}`),
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...coreRoutes, ...leadershipRoutes, ...serviceRoutes, ...doctorRoutes];
}
