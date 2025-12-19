"use server";

import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations("Terms");

  return {
    title: t("meta.title"),
    description: t("meta.description"),

    openGraph: {
      title: t("meta.title"),
      description: t("meta.description"),
      type: "website",
      url: `${process.env.SITE_URL}/${locale}/terms`,
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
      canonical: `${process.env.SITE_URL}/${locale}/terms`,
      languages: {
        "x-default": `${process.env.SITE_URL}/en/terms`,
        uk: `${process.env.SITE_URL}/uk/terms`,
        ru: `${process.env.SITE_URL}/ru/terms`,
        pl: `${process.env.SITE_URL}/pl/terms`,
        en: `${process.env.SITE_URL}/en/terms`,
      },
    },
  };
}

export default async function TermsPolicy({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("Terms");

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
          name: "Terms",
          item: `${process.env.SITE_URL}/${locale}/terms`,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      url: `${process.env.SITE_URL}/${locale}/terms`,
      name: t("meta.title"),
      description: t("meta.description"),
      inLanguage: locale,
    },
  ];

  return (
    <>
      <section className="bg-[#031827] text-center py-4 rounded-br-3xl rounded-bl-3xl mx-2.5">
        <div className="container grid gap-2">
          <h1 className="title">{t("terms_title")}</h1>
          <p className="content max-w-[700px] mx-auto">{t("terms_desc")}</p>
          <p className="mb-4 italic text-sm desc text-right max-sm:text-center">
            {t("terms_date")}
          </p>
        </div>
      </section>

      <section className="py-10 max-w-4xl container">
        <h2 className="text-3xl font-bold mb-6 text-[#9ADE20]">
          {t("terms_1_1")}
        </h2>
        <p className="content">{t("terms_1_2")}</p>
      </section>

      <section className="py-10 max-w-4xl container">
        <h2 className="text-3xl font-bold mb-6 text-[#9ADE20]">
          {t("terms_2_1")}
        </h2>
        <p className="content">{t("terms_2_2")}</p>
        <p className="content mt-2">{t("terms_2_3")}</p>
      </section>

      <section className="py-10 max-w-4xl container">
        <h2 className="text-3xl font-bold mb-6 text-[#9ADE20]">
          {t("terms_3_1")}
        </h2>
        <p className="content">{t("terms_3_2")}</p>
      </section>

      <section className="py-10 max-w-4xl container">
        <h2 className="text-3xl font-bold mb-6 text-[#9ADE20]">
          {t("terms_4_1")}
        </h2>
        <p className="content">{t("terms_4_2")}</p>
      </section>

      <section className="py-10 max-w-4xl container">
        <h2 className="text-3xl font-bold mb-6 text-[#9ADE20]">
          {t("terms_5_1")}
        </h2>
        <p className="content">{t("terms_5_2")}</p>
        <p className="content mt-2">{t("terms_5_3")}</p>
        <p className="content mt-2">{t("terms_5_4")}</p>
      </section>

      <section className="py-10 max-w-4xl container">
        <h2 className="text-3xl font-bold mb-6 text-[#9ADE20]">
          {t("terms_6_1")}
        </h2>
        <p className="content">{t("terms_6_2")}</p>
        <ul className="list">
          <li>
            <Link
              href="mailto:info@optivium.eu"
              className="underline hover:text-[#9ADE20]"
            >
              info@optivium.eu
            </Link>
          </li>
        </ul>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
    </>
  );
}
