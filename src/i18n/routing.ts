import { LOCALES } from "@/utils/constants";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: LOCALES.map((i) => i.code),

  defaultLocale: "en",
});
