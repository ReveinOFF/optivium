"use server";

import { getUserLocale } from "@/services/locale";
import ContactsClient from "./contacts.client";
import { getTranslations } from "next-intl/server";
import { headers } from "next/headers";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Contacts");
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

export default async function Contacts() {
  const lang = await getUserLocale();

  return <ContactsClient lang={lang} />;
}
