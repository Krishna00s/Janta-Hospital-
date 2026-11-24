import { MetadataRoute } from "next";
import { getSiteUrl, isIndexingAllowed } from "@/config/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = getSiteUrl();
  const allowIndexing = isIndexingAllowed();

  if (!allowIndexing) {
    // When indexing is disabled:
    // Allow crawling so search engines can fetch and discover the `noindex, nofollow` meta directive.
    // Omit the sitemap directive so preview/unindexed environments do not submit URL manifests.
    return {
      rules: {
        userAgent: "*",
        allow: "/",
      },
    };
  }

  // When indexing is explicitly enabled:
  // Emit standard production indexing crawl rules and canonical sitemap reference.
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
