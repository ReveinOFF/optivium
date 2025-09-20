import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { headers } from "next/headers";
import Link from "next/link";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("NotFound");
  const pathname = (await headers()).get("x-pathname") as string;

  return {
    title: t("meta.title"),
    description: t("meta.description"),

    openGraph: {
      title: t("meta.title"),
      description: t("meta.description"),
      type: "website",
      url: process.env.SITE_URL + pathname,
    },

    twitter: {
      title: t("meta.title"),
      description: t("meta.description"),
      card: "summary",
    },

    robots: {
      index: false,
      follow: false,
    },

    alternates: {
      canonical: process.env.SITE_URL + pathname,
    },
  };
}

export default async function NotFound() {
  const t = await getTranslations("NotFound");

  return (
    <>
      <h1 className="text-9xl font-[Exo_2] text-center mt-5">404</h1>
      <p className="text-2xl text-center text-white opacity-70">
        {t("content")}
      </p>
      <div className="flex mt-10">
        <Link
          href="#contacts"
          className="px-6 py-3 rounded-xl border border-[#9ADE20] hover:bg-green-900 font-semibold text-center mx-auto"
        >
          {t("button")}
        </Link>
      </div>
    </>
  );
}
