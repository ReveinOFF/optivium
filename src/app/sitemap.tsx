import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: process.env.SITE_URL as string,
      lastModified: new Date(),
      priority: 1,
    },
    { url: `${process.env.SITE_URL}/about`, lastModified: new Date() },
    { url: `${process.env.SITE_URL}/contacts`, lastModified: new Date() },
    { url: `${process.env.SITE_URL}/terms`, lastModified: new Date() },
    { url: `${process.env.SITE_URL}/services`, lastModified: new Date() },
    { url: `${process.env.SITE_URL}/cooperation`, lastModified: new Date() },
  ];
}
