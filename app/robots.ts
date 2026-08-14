import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

/* The live robots.txt is served but empty. This one points at the sitemap and
   stays open to the AI answer engines that increasingly do the first read. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
