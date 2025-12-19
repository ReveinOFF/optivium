"use server";

import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import HomeClient from "./home.client";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations("Main");

  return {
    title: t("meta.title"),
    description: t("meta.description"),

    openGraph: {
      title: t("meta.title"),
      description: t("meta.description"),
      type: "website",
      url: `${process.env.SITE_URL}/en`,
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
      canonical: `${process.env.SITE_URL}/${locale}`,
      languages: {
        "x-default": `${process.env.SITE_URL}/en`,
        uk: `${process.env.SITE_URL}/uk`,
        ru: `${process.env.SITE_URL}/ru`,
        pl: `${process.env.SITE_URL}/pl`,
        en: `${process.env.SITE_URL}/en`,
      },
    },
  };
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("Main");

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url: `${process.env.SITE_URL}/${locale}`,
    name: t("meta.title"),
    description: t("meta.description"),
    inLanguage: locale,
  };

  return (
    <>
      <HomeClient />;
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
    </>
  );
}
