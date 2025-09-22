"use client";

import { setUserLocale } from "@/services/locale";
import { LOCALES } from "@/utils/constants";
import { useTransition } from "react";

export default function useLang() {
  const [isPending, startTransition] = useTransition();

  function changeLang(code: string) {
    const found = LOCALES.find((l) => l.code === code);
    if (!found) return;

    startTransition(() => {
      setUserLocale(found.code);
    });
  }

  return { isPending, changeLang };
}
