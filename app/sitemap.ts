import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

/* The audit found no sitemap.xml served at all. One page, but it is served. */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified: new Date("2026-08-14"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
