"use server";

import { getUserLocale } from "@/services/locale";
import ContactsClient from "./contacts.client";

export default async function Contacts() {
  const lang = await getUserLocale();

  return <ContactsClient lang={lang} />;
}
