import type { MetadataRoute } from "next";
import {
  collegamentiFooter,
  percorsoContatti,
  ultimaModificaContenuti,
  urlSito,
} from "@/lib/site";

/**
 * Mappa del sito (sitemap.xml) costruita dai percorsi reali del progetto.
 * Aggiungendo una pagina in lib/site.ts, finisce automaticamente qui.
 * `lastModified` è la data dell'ultima modifica reale dei contenuti: non va
 * rimessa a ogni build, perché i crawler leggerebbero aggiornamenti falsi.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const percorsi = [
    ...new Set(["/", ...collegamentiFooter.map((voce) => voce.href)]),
  ];

  return percorsi.map((percorso) => ({
    url: new URL(percorso, urlSito).toString(),
    lastModified: ultimaModificaContenuti,
    changeFrequency: percorso === "/" ? "monthly" : "yearly",
    priority:
      percorso === "/" ? 1 : percorso === percorsoContatti ? 0.9 : 0.8,
  }));
}
