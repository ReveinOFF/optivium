"use server";

import { getTranslations } from "next-intl/server";
import ServicesClient from "./services.client";
import { Metadata } from "next";
import { headers } from "next/headers";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Services");
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

    alternates: {
      canonical: process.env.SITE_URL + pathname,
    },
  };
}

export default async function Services() {
  return <ServicesClient />;
}
