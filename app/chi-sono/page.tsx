import type { Metadata } from "next";
import Link from "next/link";
import { CtaLink } from "@/components/cta-link";
import { PageHero, Section, SectionHeader } from "@/components/section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Chi sono e come lavoro",
  description:
    "Profilo professionale di un consulente energetico per imprese con base a Bologna: aggregazione dei fabbisogni, rapporto con i produttori, contrattualistica, diagnosi ed efficienza.",
  alternates: {
    canonical: "/chi-sono",
  },
};

const areeCompetenza = [
  "Aggregazione dei fabbisogni energetici di più imprese e costruzione del perimetro di acquisto",
  "Rapporto con i produttori: confronto delle proposte, trattativa e verifica delle condizioni",
  "Approvvigionamento del gas con operatività sul PSV per conto dei clienti",
  "Contrattualistica energetica: struttura, clausole, scadenze e condizioni di uscita",
  "Diagnosi energetiche e analisi dei consumi per sito e per vettore",
  "Supporto sui percorsi di efficienza energetica e verifica dei risultati",
];

export default function ChiSonoPage() {
  return (
    <>
      <PageHero
        etichetta="Chi sono"
        titolo="Un referente tecnico, non un intermediario di passaggio."
        introduzione="Lavoro da oltre vent'anni nella consulenza energetica per le imprese. Mi occupo di come l'energia viene acquistata, contrattualizzata e consegnata, con un rapporto diretto con i produttori e con i siti dei clienti."
      >
        <p className="text-xs uppercase tracking-[0.18em] text-grafite-500">
          {site.posizionamento}
        </p>
      </PageHero>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <SectionHeader
              etichetta="Il lavoro"
              titolo="Mettere le imprese in condizione di decidere."
              introduzione="Il mio lavoro non è vendere energia: è mettere l'impresa nella condizione di capire cosa sta comprando, quali alternative esistono e quali conseguenze comportano."
            />
            <div className="mt-8 space-y-4 text-base leading-relaxed text-grafite-200">
              <p>
                Aggrego i fabbisogni di più imprese per costruire perimetri di
                acquisto trattabili con i produttori. Nel tempo ho seguito
                forniture con strutture e condizioni diverse, che hanno un
                impatto diretto sul costo reale dell&apos;energia.
              </p>
              <p>
                Sul gas opero sul PSV per conto dei clienti, impostando le
                scelte di approvvigionamento insieme all&apos;impresa. Sugli
                aspetti tecnici mi occupo di diagnosi ed efficienza energetica,
                collegando i consumi reali alle decisioni contrattuali.
              </p>
              <p>
                Mantengo un numero contenuto di incarichi: seguire le forniture
                richiede presenza, lettura dei dati e continuità nel tempo.
              </p>
            </div>
          </div>
          <aside className="border border-grafite-700 bg-grafite-900 p-6 sm:p-8">
            <h2 className="text-lg">Aree di competenza</h2>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-grafite-200">
              {areeCompetenza.map((area) => (
                <li key={area} className="border-l-2 border-verde-700 pl-4">
                  {area}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </Section>

      <Section>
        <SectionHeader
          etichetta="Come lavoro"
          titolo="Tre regole che tengo presenti."
        />
        <div className="mt-12 grid gap-px overflow-hidden border border-grafite-800 md:grid-cols-3">
          <div className="border-b border-grafite-800 bg-grafite-900 p-6 sm:p-8 md:border-b-0 md:border-r">
            <h3 className="text-xl text-avorio-50">Dati prima delle opinioni</h3>
            <p className="mt-3 text-sm leading-relaxed text-grafite-300">
              Le valutazioni partono dai consumi e dai contratti reali, non da
              scenari generici.
            </p>
          </div>
          <div className="border-b border-grafite-800 bg-grafite-900 p-6 sm:p-8 md:border-b-0 md:border-r">
            <h3 className="text-xl text-avorio-50">
              Decisione all&apos;impresa
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-grafite-300">
              Presento le opzioni con vantaggi e limiti; la scelta resta di chi
              firma il contratto.
            </p>
          </div>
          <div className="bg-grafite-900 p-6 sm:p-8">
            <h3 className="text-xl text-avorio-50">Continuità</h3>
            <p className="mt-3 text-sm leading-relaxed text-grafite-300">
              Una fornitura si gestisce nel tempo: scadenze, consumi e condizioni
              di mercato cambiano.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div className="border border-verde-600 bg-grafite-900 p-6 sm:p-8">
            <h2 className="text-2xl text-avorio-50">Informazioni in corso di completamento</h2>
            <p className="mt-4 text-sm leading-relaxed text-grafite-200">
              Questo sito non riporta ancora riferimenti fiscali, curriculum
              dettagliato, casi seguiti e note legali. Sono informazioni che
              devono arrivare dal titolare del sito: finché non sono disponibili
              preferisco lasciare il sito senza, invece di inserire dati non
              verificati. I recapiti ufficiali verranno pubblicati nella pagina{" "}
              <Link
                href="/contatti"
                className="font-medium text-verde-300 underline underline-offset-4 hover:text-lime-400"
              >
                Contatti
              </Link>{" "}
              appena confermati.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-grafite-200">
              L&apos;elenco puntuale di ciò che manca è nel documento
              docs/informazioni-da-confermare.md incluso nel progetto.
            </p>
          </div>
          <div>
            <SectionHeader
              etichetta="Trasparenza"
              titolo="Nessun numero inventato."
              introduzione="Non trovi in questa pagina percentuali di risparmio, volumi gestiti, numero di clienti o nomi di aziende: non sono dati verificabili da chi legge e, se non documentati, non hanno valore."
            />
          </div>
        </div>
      </Section>

      <Section variante="chiaro" compatta>
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <h2 className="max-w-xl text-3xl text-grafite-950">
            I percorsi di lavoro in dettaglio.
          </h2>
          <div className="flex flex-wrap gap-3">
            <CtaLink href="/contatti">Richiedi un primo confronto</CtaLink>
            <CtaLink href="/acquisto-aggregato" variante="contorno">
              Acquisto aggregato
            </CtaLink>
            <CtaLink href="/gas-psv" variante="contorno">
              Gas al PSV
            </CtaLink>
            <CtaLink href="/energia-come-servizio" variante="contorno">
              Energia come servizio
            </CtaLink>
            <CtaLink href="/servizi" variante="contorno">
              Servizi
            </CtaLink>
          </div>
        </div>
      </Section>
    </>
  );
}

