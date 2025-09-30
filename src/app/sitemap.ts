import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date().toISOString().split("T")[0];

  return [
    {
      url: process.env.SITE_URL as string,
      lastModified: today,
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${process.env.SITE_URL}/about`,
      lastModified: today,
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${process.env.SITE_URL}/contacts`,
      lastModified: today,
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${process.env.SITE_URL}/terms`,
      lastModified: today,
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${process.env.SITE_URL}/services`,
      lastModified: today,
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${process.env.SITE_URL}/cooperation`,
      lastModified: today,
      changeFrequency: "yearly",
      priority: 0.8,
    },
  ];
}
