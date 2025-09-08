import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: process.env.SITE_URL as string,
      lastModified: new Date(),
      priority: 1,
    },
    { url: `${process.env.SITE_URL}/not-found`, lastModified: new Date() },
  ];
}
