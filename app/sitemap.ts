import type { MetadataRoute } from "next";
import { menuPrincipale, urlSito } from "@/lib/site";

/**
 * Mappa del sito (sitemap.xml) costruita dai percorsi reali del progetto.
 * Aggiungendo una pagina in lib/site.ts, finisce automaticamente qui.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const percorsi = ["/", ...menuPrincipale.map((voce) => voce.href)];

  return percorsi.map((percorso) => ({
    url: new URL(percorso, urlSito).toString(),
    lastModified: new Date(),
    changeFrequency: percorso === "/" ? "monthly" : "yearly",
    priority: percorso === "/" ? 1 : 0.8,
  }));
}