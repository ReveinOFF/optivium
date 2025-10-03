"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { LOCALES } from "@/utils/constants";

export default function useLang() {
  const router = useRouter();
  const pathname = usePathname();

  function changeLang(code: string) {
    const found = LOCALES.find((l) => l.code === code);
    if (!found) return;

    router.push(pathname, { locale: code });
  }

  return { changeLang };
}
