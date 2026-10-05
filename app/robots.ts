import type { MetadataRoute } from "next";
import { urlSito } from "@/lib/site";

/**
 * robots.txt: il sito è pubblico e indicizzabile; dichiara la posizione
 * della mappa del sito (sitemap.xml).
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: new URL("/sitemap.xml", urlSito).toString(),
    host: urlSito,
  };
}