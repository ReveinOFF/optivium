"use server";

import { getTranslations } from "next-intl/server";
import AboutUsClient from "./about.client";
import { Metadata } from "next";
import { getBaseStructuredData } from "../layout";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations("AboutUs");

  return {
    title: t("meta.title"),
    description: t("meta.description"),

    openGraph: {
      title: t("meta.title"),
      description: t("meta.description"),
      type: "website",
      url: `${process.env.SITE_URL}/${locale}/about`,
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
      canonical: `${process.env.SITE_URL}/${locale}/about`,
      languages: {
        "x-default": `${process.env.SITE_URL}/en/about`,
        uk: `${process.env.SITE_URL}/uk/about`,
        ru: `${process.env.SITE_URL}/ru/about`,
        pl: `${process.env.SITE_URL}/pl/about`,
        en: `${process.env.SITE_URL}/en/about`,
      },
    },
  };
}

export default async function AboutUs({
  params,
}: Readonly<{
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const t = await getTranslations("AboutUs");

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      ...getBaseStructuredData(locale, t("meta.description")),
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Optivium",
            item: process.env.SITE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Home",
            item: `${process.env.SITE_URL}/${locale}`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "About",
            item: `${process.env.SITE_URL}/${locale}/about`,
          },
        ],
      },
      {
        "@type": "WebPage",
        url: `${process.env.SITE_URL}/${locale}/about`,
        name: t("meta.title"),
        description: t("meta.description"),
        inLanguage: locale,
        isPartOf: {
          "@type": "WebSite",
          url: process.env.SITE_URL,
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <AboutUsClient />
    </>
  );
}
