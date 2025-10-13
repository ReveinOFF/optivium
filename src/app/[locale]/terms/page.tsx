"use server";

import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Terms");

  return {
    title: t("meta.title"),
    description: t("meta.description"),

    openGraph: {
      title: t("meta.title"),
      description: t("meta.description"),
      type: "website",
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
  };
}

export default async function TermsPolicy() {
  const t = await getTranslations("Terms");

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
    </>
  );
}
