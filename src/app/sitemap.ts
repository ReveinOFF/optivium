import { LOCALES } from "@/utils/constants";
import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date().toISOString().split("T")[0];

  const pages = ["", "about", "contacts", "terms", "services", "cooperation"];

  const urls: MetadataRoute.Sitemap = [];

  LOCALES.forEach((locale) => {
    pages.forEach((page) => {
      urls.push({
        url: `${process.env.SITE_URL}/${locale.code}${page ? "/" + page : ""}`,
        lastModified: today,
        changeFrequency: "yearly",
        priority: page === "" ? 0.9 : 0.8,
      });
    });
  });

  return urls;
}
