"use server";

import { getUserLocale } from "@/services/locale";
import HeaderClient from "./header.client";

export default async function Header() {
  const lang = await getUserLocale();

  return <HeaderClient lang={lang} />;
}
