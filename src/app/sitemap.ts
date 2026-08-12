import type { MetadataRoute } from "next";

import { articles } from "@/content/journal";
import { site } from "@/content/site";
import { treatments } from "@/content/treatments";

/** Static routes with a rough priority ordering. */
const staticRoutes: { path: string; priority: number }[] = [
  { path: "/", priority: 1 },
  { path: "/treatments", priority: 0.9 },
  { path: "/retreats", priority: 0.9 },
  { path: "/journal", priority: 0.8 },
  { path: "/about", priority: 0.7 },
  { path: "/contact", priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    ...staticRoutes.map((route) => ({
      url: `${site.url}${route.path === "/" ? "" : route.path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: route.priority,
    })),
    ...treatments.map((treatment) => ({
      url: `${site.url}/treatments/${treatment.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...articles.map((article) => ({
      url: `${site.url}/journal/${article.slug}`,
      lastModified: new Date(`${article.date}T00:00:00Z`),
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ];
}
