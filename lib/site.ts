/**
 * Dati condivisi di navigazione e informazioni di base del sito.
 * Un solo posto da aggiornare: così non esistono link vuoti o pagine mancanti.
 */

export const site = {
  /** Nome della professione: nessun nome o cognome inventato. */
  nome: "Consulenza energetica per imprese",
  etichetta: "Consulenza energetica per imprese · Bologna · Italia",
  posizionamento: "Bologna · Operatività nazionale",
} as const;

export type VoceMenu = {
  href: string;
  etichetta: string;
};

export const menuPrincipale: VoceMenu[] = [
  { href: "/acquisto-aggregato", etichetta: "Acquisto aggregato" },
  { href: "/gas-psv", etichetta: "Gas al PSV" },
  { href: "/energia-come-servizio", etichetta: "Energia come servizio" },
  { href: "/servizi", etichetta: "Servizi" },
  { href: "/chi-sono", etichetta: "Chi sono" },
];

/** Percorso della pagina contatti, sempre in fondo al menu e nel footer. */
export const percorsoContatti = "/contatti";

/** Collegamenti usati nel footer: tutte pagine reali del sito. */
export const collegamentiFooter: VoceMenu[] = [
  { href: "/", etichetta: "Home" },
  ...menuPrincipale,
  { href: percorsoContatti, etichetta: "Contatti" },
];

/** Le quattro tappe del flusso di approvvigionamento elettrico aggregato. */
export type TappaFlusso = {
  titolo: string;
  descrizione: string;
};

export const tappaDettagli: TappaFlusso[] = [
  {
    titolo: "Consumi",
    descrizione:
      "Lettura dei dati di consumo reali dei siti coinvolti: profili orari, stagionalità e carichi.",
  },
  {
    titolo: "Aggregazione",
    descrizione:
      "I fabbisogni di più imprese vengono riuniti in un unico perimetro di acquisto, così il volume diventa trattabile.",
  },
  {
    titolo: "Produttori",
    descrizione:
      "Confronto tra le proposte e trattativa con i produttori, valutando struttura contrattuale e condizioni economiche.",
  },
  {
    titolo: "Consegna",
    descrizione:
      "Coordinamento dei passaggi necessari perché l'energia elettrica arrivi ai siti, dal punto di prelievo in poi.",
  },
];

/**
 * Indirizzo pubblico del sito.
 * Si imposta con la variabile d'ambiente NEXT_PUBLIC_SITE_URL quando il
 * dominio definitivo è noto; in locale resta http://localhost:3000.
 * Serve per sitemap, robots.txt e anteprime sui social.
 */
export const urlSito =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

/**
 * Riferimenti di contatto del titolare.
 * Valori null = dato non ancora confermato (vedi
 * docs/informazioni-da-confermare.md): le pagine li omettono senza
 * inventare nulla. Appena il titolare conferma, si compilano qui e
 * compaiono automaticamente nella pagina /contatti.
 */
export type Recapiti = {
  email: string | null;
  telefono: string | null;
  linkedin: string | null;
};

export const recapiti: Recapiti = {
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? null,
  telefono: process.env.NEXT_PUBLIC_CONTACT_PHONE ?? null,
  linkedin: process.env.NEXT_PUBLIC_CONTACT_LINKEDIN ?? null,
};

/**
 * Data dell'ultima modifica reale dei contenuti, usata dalla sitemap.
 * Aggiornarla a mano quando cambiano i testi: evita che il sito dichiari
 * ai crawler una modifica mai avvenuta.
 */
export const ultimaModificaContenuti = new Date("2026-10-06");

/**
 * Dati strutturati (JSON-LD) per i motori di ricerca.
 * Contiene soltanto informazioni verificate: nome dell'attività, descrizione,
 * area servita e città di base. Telefono, email, indirizzo civico e partita IVA
 * sono volutamente assenti finché non vengono confermati
 * (vedi docs/informazioni-da-confermare.md).
 */
export const datiStrutturati = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.nome,
  description:
    "Consulenza energetica per imprese: aggregazione dei fabbisogni, relazione con i produttori, contrattualistica, diagnosi ed efficienza energetica. Approvvigionamento gas con operatività sul PSV e impostazione di percorsi energia come servizio (EaaS).",
  areaServed: {
    "@type": "Country",
    name: "Italia",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bologna",
    addressCountry: "IT",
  },
  knowsAbout: [
    "Acquisto aggregato di energia elettrica",
    "Approvvigionamento gas sul PSV",
    "Energy as a Service (EaaS)",
    "Contrattualistica energetica",
    "Diagnosi energetiche",
    "Efficienza energetica",
  ],
} as const;

