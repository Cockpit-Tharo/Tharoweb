import type { MetadataRoute } from "next";
import { getAllSectors } from "@/data/sectors";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://tharo.tech";
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/solutions`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/platform`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/pipo-voice`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const sectors = getAllSectors();
  const sectorRoutes: MetadataRoute.Sitemap = sectors.map((s) => ({
    url: `${baseUrl}/solutions/${s.id}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: s.featuredInNav ? 0.85 : 0.75,
  }));

  return [...staticRoutes, ...sectorRoutes];
}
