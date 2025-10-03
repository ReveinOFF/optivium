"use server";

import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { headers } from "next/headers";
import HomeClient from "./home.client";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Main");
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
      index: true,
      follow: true,
    },
  };
}

export default async function Home() {
  return <HomeClient />;
}
