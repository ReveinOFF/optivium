"use server";

import HeaderClient from "./header.client";

export default async function Header({ locale }: { locale: string }) {
  return <HeaderClient lang={locale} />;
}
