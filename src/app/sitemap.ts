import { LOCALES } from "@/utils/constants";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "about", "contacts", "terms", "services", "cooperation"];

  const urls: MetadataRoute.Sitemap = [];

  LOCALES.forEach((locale) => {
    pages.forEach((page) => {
      urls.push({
        url: `${process.env.SITE_URL}/${locale.code}${page ? "/" + page : ""}`,
      });
    });
  });

  return urls;
}
