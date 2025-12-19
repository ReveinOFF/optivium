"use server";

import { getTranslations } from "next-intl/server";
import ServicesClient from "./services.client";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations("Services");

  return {
    title: t("meta.title"),
    description: t("meta.description"),

    openGraph: {
      title: t("meta.title"),
      description: t("meta.description"),
      type: "website",
      url: `${process.env.SITE_URL}/${locale}/services`,
    },

    twitter: {
      title: t("meta.title"),
      description: t("meta.description"),
      card: "summary",
    },

    robots: {
      index: true,
      follow: true,
    },

    alternates: {
      canonical: `${process.env.SITE_URL}/${locale}/services`,
      languages: {
        "x-default": `${process.env.SITE_URL}/en/services`,
        uk: `${process.env.SITE_URL}/uk/services`,
        ru: `${process.env.SITE_URL}/ru/services`,
        pl: `${process.env.SITE_URL}/pl/services`,
        en: `${process.env.SITE_URL}/en/services`,
      },
    },
  };
}

export default async function Services({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("Services");

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Optivium",
          item: `${process.env.SITE_URL}/${locale}`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: `${process.env.SITE_URL}/${locale}/services`,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      url: `${process.env.SITE_URL}/${locale}/services`,
      name: t("meta.title"),
      description: t("meta.description"),
      inLanguage: locale,
    },
  ];

  return (
    <>
      <ServicesClient />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
    </>
  );
}
