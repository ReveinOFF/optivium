"use server";

import { getTranslations } from "next-intl/server";
import CooperationClient from "./cooperation.client";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations("Cooperation");

  return {
    title: t("meta.title"),
    description: t("meta.description"),

    openGraph: {
      title: t("meta.title"),
      description: t("meta.description"),
      type: "website",
      url: `${process.env.SITE_URL}/${locale}/cooperation`,
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
      canonical: `${process.env.SITE_URL}/${locale}/cooperation`,
      languages: {
        "x-default": `${process.env.SITE_URL}/en/cooperation`,
        uk: `${process.env.SITE_URL}/uk/cooperation`,
        ru: `${process.env.SITE_URL}/ru/cooperation`,
        pl: `${process.env.SITE_URL}/pl/cooperation`,
        en: `${process.env.SITE_URL}/en/cooperation`,
      },
    },
  };
}

export default async function Cooperation({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("Cooperation");

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
          name: "Cooperation",
          item: `${process.env.SITE_URL}/${locale}/cooperation`,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      url: `${process.env.SITE_URL}/${locale}/cooperation`,
      name: t("meta.title"),
      description: t("meta.description"),
      inLanguage: locale,
    },
  ];

  return (
    <>
      <CooperationClient />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
    </>
  );
}
