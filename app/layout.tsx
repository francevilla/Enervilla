import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { datiStrutturati, urlSito } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(urlSito),
  title: {
    default: "EnerVilla · Deep Energy — Consulenza energetica per imprese | Bologna · Italia",
    template: "%s | EnerVilla · Deep Energy",
  },
  description:
    "Consulenza energetica per imprese: approvvigionamento elettrico aggregato, gas al PSV, contratti, rischio energetico ed efficienza. Base a Bologna, operatività nazionale.",
  applicationName: "EnerVilla · Deep Energy",
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
    siteName: "EnerVilla · Deep Energy",
    title: "Consulenza energetica per imprese · Bologna | EnerVilla · Deep Energy",
    description:
      "Affianco CEO, CFO e responsabili tecnici nelle decisioni su approvvigionamento elettrico e gas, contratti, rischio energetico ed efficienza industriale.",
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
    title: "Consulenza energetica per imprese · Bologna | EnerVilla · Deep Energy",
    description:
      "Approvvigionamento elettrico aggregato, gas al PSV, contrattualistica, rischio energetico ed efficienza industriale.",
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
 * Colore del tema del browser: il sito è a tema scuro fisso, quindi un unico
 * valore uguale al fondo pagina (grafite-950, #060e19 calcolato dal token).
 */
export const viewport: Viewport = {
  themeColor: "#060e19",
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
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-champagne-400 focus:px-4 focus:py-2 focus:text-grafite-950"
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

