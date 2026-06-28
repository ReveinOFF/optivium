"use server";

import ContactsClient from "./contacts.client";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";
import { getBaseStructuredData } from "../layout";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations("Contacts");

  return {
    title: t("meta.title"),
    description: t("meta.description"),

    openGraph: {
      title: t("meta.title"),
      description: t("meta.description"),
      type: "website",
      url: `${process.env.SITE_URL}/${locale}/contacts`,
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
      canonical: `${process.env.SITE_URL}/${locale}/contacts`,
      languages: {
        "x-default": `${process.env.SITE_URL}/en/contacts`,
        uk: `${process.env.SITE_URL}/uk/contacts`,
        ru: `${process.env.SITE_URL}/ru/contacts`,
        pl: `${process.env.SITE_URL}/pl/contacts`,
        en: `${process.env.SITE_URL}/en/contacts`,
      },
    },
  };
}

export default async function Contacts({
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const t = await getTranslations("Contacts");

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
            name: "Contacts",
            item: `${process.env.SITE_URL}/${locale}/contacts`,
          },
        ],
      },
      {
        "@type": "WebPage",
        url: `${process.env.SITE_URL}/${locale}/contacts`,
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
      <ContactsClient lang={locale} />
    </>
  );
}
