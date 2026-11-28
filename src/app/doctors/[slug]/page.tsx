import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { DoctorDetailView } from "@/components/doctors/DoctorDetailView";
import { allDoctors, getDoctorById, getAllDoctorIds } from "@/content/doctors";
import { getCanonicalUrl, siteConfig } from "@/config/site";
import { generateBreadcrumbJsonLd, generateDoctorDetailJsonLd } from "@/lib/schema";

interface DoctorPageProps {
  params: Promise<{ slug: string }>;
}

export const dynamic = "force-static";

export async function generateStaticParams() {
  return getAllDoctorIds().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: DoctorPageProps): Promise<Metadata> {
  const { slug } = await params;
  const doctor = getDoctorById(slug);

  if (!doctor) {
    return {
      title: "Doctor Not Found | Janta Hospital",
    };
  }

  const canonicalUrl = getCanonicalUrl(`/doctors/${doctor.id}`);
  const title = `${doctor.name} - ${doctor.role} | Janta Hospital Lohardaga`;
  const description = `Consult ${doctor.name} (${doctor.role}) at Janta Hospital Powergunj, Lohardaga. Specialty: ${doctor.specialty}. ${doctor.availabilityDetails}.`;

  return {
    title: {
      absolute: title,
    },
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "profile",
      images: [
        {
          url: siteConfig.defaultOgImage.url,
          width: siteConfig.defaultOgImage.width,
          height: siteConfig.defaultOgImage.height,
          alt: doctor.portraitAlt,
        },
      ],
    },
    twitter: {
      card: "summary",
      title,
      description,
      images: [siteConfig.defaultOgImage.url],
    },
  };
}

export default async function DoctorDetailPage({ params }: DoctorPageProps) {
  const { slug } = await params;
  const doctor = getDoctorById(slug);

  if (!doctor) {
    notFound();
  }

  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: "Doctors", path: "/doctors" },
    { name: doctor.name, path: `/doctors/${doctor.id}` },
  ]);

  const doctorJsonLd = generateDoctorDetailJsonLd(doctor);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(doctorJsonLd) }}
      />
      <Header />
      <main className="flex-1">
        <DoctorDetailView doctor={doctor} />
      </main>
      <Footer />
    </>
  );
}
