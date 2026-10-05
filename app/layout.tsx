import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { datiStrutturati, urlSito } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(urlSito),
  title: {
    default: "Consulenza energetica per imprese | Bologna · Italia",
    template: "%s | Consulenza energetica per imprese",
  },
  description:
    "Aggregazione dei fabbisogni energetici delle imprese, relazione diretta con i produttori, contrattualistica, diagnosi energetiche ed efficienza. Base a Bologna, operatività nazionale.",
  applicationName: "Consulenza energetica per imprese",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "consulenza energetica imprese",
    "contrattualistica energetica",
    "acquisto aggregato energia",
    "diagnosi energetiche",
    "efficienza energetica",
    "PSV gas",
    "Bologna",
  ],
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: urlSito,
    siteName: "Consulenza energetica per imprese",
    title: "Consulenza energetica per imprese | Bologna · Italia",
    description:
      "Aggrego i fabbisogni delle imprese, le metto in relazione con i produttori e seguo i passaggi necessari all'approvvigionamento e alla consegna dell'energia.",
    // L'immagine è generata da app/opengraph-image.tsx; dichiararla qui rende
    // l'anteprima affidabile anche su piattaforme che leggono solo i tag OG.
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Anteprima del sito: consulenza energetica per imprese, flusso dai consumi alla consegna.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Consulenza energetica per imprese | Bologna · Italia",
    description:
      "Aggregazione dei fabbisogni, relazione con i produttori, contrattualistica, diagnosi ed efficienza energetica. Gas gestito sul PSV.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  category: "business",
};

/**
 * Colori del tema del browser: avorio per lo schema chiaro, grafite per
 * quello scuro. Coerenti con la palette definita in app/globals.css.
 */
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f2ed" },
    { media: "(prefers-color-scheme: dark)", color: "#0e1217" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="it" className="h-full">
      <body className="flex min-h-full flex-col antialiased">
        {/*
          Dati strutturati per i motori di ricerca (JSON-LD).
          Solo informazioni verificate: nessun contatto, recapito o dato
          fiscale inventato (vedi docs/informazioni-da-confermare.md).
        */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({ ...datiStrutturati, url: urlSito }),
          }}
        />
        <a
          href="#contenuto"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-grafite-950 focus:px-4 focus:py-2 focus:text-avorio-50"
        >
          Vai al contenuto principale
        </a>
        <SiteHeader />
        <main id="contenuto" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}

