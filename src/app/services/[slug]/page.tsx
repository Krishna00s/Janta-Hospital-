import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServiceDetailView } from "@/components/services/ServiceDetailView";
import {
  serviceDetailsList,
  getServiceBySlug,
  getAllServiceSlugs,
} from "@/content/servicePages";
import { getCanonicalUrl, getSiteUrl, siteConfig } from "@/config/site";
import { generateBreadcrumbJsonLd, generateServiceDetailJsonLd } from "@/lib/schema";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export const dynamic = "force-static";

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found | Janta Hospital",
    };
  }

  const canonicalUrl = getCanonicalUrl(`/services/${service.slug}`);

  return {
    title: {
      absolute: service.metaTitle,
    },
    description: service.metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: canonicalUrl,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: [
        {
          url: `${getSiteUrl()}${service.image.src}`,
          width: service.image.width,
          height: service.image.height,
          alt: service.image.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: service.metaTitle,
      description: service.metaDescription,
      images: [`${getSiteUrl()}${service.image.src}`],
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: "Services", path: "/services" },
    { name: service.name, path: `/services/${service.slug}` },
  ]);

  const serviceJsonLd = generateServiceDetailJsonLd(service);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Header />
      <main className="flex-1">
        <ServiceDetailView service={service} />
      </main>
      <Footer />
    </>
  );
}
