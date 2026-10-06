import type { Metadata } from "next";
import Link from "next/link";
import { CtaLink } from "@/components/cta-link";
import { Chiusura, PageHero, Section } from "@/components/section";
import { recapiti, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contatti",
  description:
    "Come contattare la consulenza energetica per imprese con base a Bologna: cosa scrivere nella prima richiesta, quali informazioni servono per un primo confronto su elettricità, gas al PSV, contratti ed efficienza.",
  alternates: {
    canonical: "/contatti",
  },
};

/** Cosa serve davvero per impostare un primo confronto serio. */
const informazioniUtili = [
  {
    titolo: "I siti e i punti di prelievo",
    testo:
      "Numero dei siti produttivi e dei POD (e dei PDR, se c'è gas): è il dato che definisce subito se esiste un perimetro aggregabile.",
  },
  {
    titolo: "Volumi e consumi indicativi",
    testo:
      "Anche solo un ordine di grandezza annuo in MWh o Smc, oppure le ultime bollette: serve a capire il profilo, non a fare preventivi.",
  },
  {
    titolo: "Contratti attuali e scadenze",
    testo:
      "Fornitore, tipo di offerta, data di scadenza o di rinnovo automatico: determina i tempi reali di qualsiasi azione.",
  },
  {
    titolo: "Il motivo della richiesta",
    testo:
      "Una domanda concreta — prezzo, clausole, continuità di servizio, diagnosi — aiuta a rispondere nel merito fin dalla prima risposta.",
  },
];

export default function ContattiPage() {
  const nessunRecapito =
    !recapiti.email && !recapiti.telefono && !recapiti.linkedin;

  return (
    <>
      <PageHero
        etichetta="Contatti"
        titolo="Scrivimi quando hai una domanda concreta."
        introduzione="Non ci sono moduli da compilare né campagne da seguire. Se l'impresa acquista energia per più siti, gestisce gas, o vuole leggere meglio i contratti in essere, il modo più efficace è descrivere la situazione: si parte dai dati, non dalle promesse."
      >
        {recapiti.email ? (
          <CtaLink href={`mailto:${recapiti.email}`}>
            Scrivi a {recapiti.email}
          </CtaLink>
        ) : null}
      </PageHero>

      {/* Stato attuale: recapiti non ancora pubblicati (nessun dato inventato). */}
      {nessunRecapito ? (
        <Section variante="superficie">
          <div className="border border-verde-600 bg-grafite-900 p-6 sm:p-8">
            <h2 className="text-2xl text-avorio-50">
              Recapiti in fase di pubblicazione
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-grafite-200">
              Gli indirizzi di contatto di {site.nome.toLowerCase()} non sono
              ancora pubblicati su questo sito: verranno inseriti appena il
              titolare li conferma ufficialmente, insieme ai riferimenti fiscali
              e all&apos;informativa privacy. Nel frattempo le pagine del sito
              descrivono metodo e aree di lavoro:{" "}
              <Link
                href="/acquisto-aggregato"
                className="font-medium text-verde-300 underline underline-offset-4 hover:text-lime-400"
              >
                acquisto aggregato
              </Link>
              ,{" "}
              <Link
                href="/gas-psv"
                className="font-medium text-verde-300 underline underline-offset-4 hover:text-lime-400"
              >
                gas al PSV
              </Link>{" "}
              e{" "}
              <Link
                href="/servizi"
                className="font-medium text-verde-300 underline underline-offset-4 hover:text-lime-400"
              >
                servizi
              </Link>{" "}
              rispondono già alle domande tecniche più frequenti.
            </p>
          </div>
        </Section>
      ) : (
        /* Blocco recapiti: appare automaticamente quando i dati sono confermati. */
        <Section variante="superficie">
          <dl className="grid gap-px overflow-hidden border border-grafite-700 sm:grid-cols-3">
            {recapiti.email ? (
              <div className="bg-grafite-900 p-6">
                <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-grafite-300">
                  Email
                </dt>
                <dd className="mt-3">
                  <a
                    href={`mailto:${recapiti.email}`}
                    className="font-medium break-all text-verde-300 underline underline-offset-4 hover:text-lime-400"
                  >
                    {recapiti.email}
                  </a>
                </dd>
              </div>
            ) : null}
            {recapiti.telefono ? (
              <div className="bg-grafite-900 p-6">
                <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-grafite-300">
                  Telefono
                </dt>
                <dd className="mt-3">
                  <a
                    href={`tel:${recapiti.telefono.replace(/[^+\d]/g, "")}`}
                    className="font-medium text-verde-300 underline underline-offset-4 hover:text-lime-400"
                  >
                    {recapiti.telefono}
                  </a>
                </dd>
              </div>
            ) : null}
            {recapiti.linkedin ? (
              <div className="bg-grafite-900 p-6">
                <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-grafite-300">
                  LinkedIn
                </dt>
                <dd className="mt-3">
                  <a
                    href={recapiti.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-verde-300 underline underline-offset-4 hover:text-lime-400"
                  >
                    Profilo professionale
                  </a>
                </dd>
              </div>
            ) : null}
          </dl>
        </Section>
      )}

      {/* Come scrivere una richiesta utile. */}
      <Section>
        <div className="max-w-3xl">
          <h2 className="text-3xl text-avorio-50 sm:text-4xl">
            Cosa serve per il primo confronto.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-grafite-200 sm:text-lg">
            Una richiesta ben impostata vale più di qualunque modulo: queste
            sono le informazioni che permettono di capire subito se e come si
            può lavorare.
          </p>
        </div>

        <ul className="mt-12 grid gap-px overflow-hidden border border-grafite-700 md:grid-cols-2">
          {informazioniUtili.map((voce) => (
            <li key={voce.titolo} className="bg-grafite-900 p-6 sm:p-8">
              <h3 className="text-xl text-avorio-50">{voce.titolo}</h3>
              <p className="mt-3 text-sm leading-relaxed text-grafite-200">
                {voce.testo}
              </p>
            </li>
          ))}
        </ul>

        <p className="mt-8 max-w-3xl text-sm leading-relaxed text-grafite-300">
          Le informazioni inviate servono solo a valutare la richiesta e non
          vengono condivise con terzi. L&apos;informativa privacy completa sarà
          pubblicata insieme ai recapiti ufficiali.
        </p>
      </Section>

      {/* Chiusura: ritorno ai percorsi di lavoro. */}
      <Section variante="superficie" compatta>
        <Chiusura
          titolo="Prima di scrivere, forse la tua risposta è già in una pagina."
          primaria={{ href: "/acquisto-aggregato", etichetta: "Acquisto aggregato" }}
          secondari={[
            { href: "/gas-psv", etichetta: "Gas al PSV" },
            { href: "/energia-come-servizio", etichetta: "Energia come servizio" },
            { href: "/chi-sono", etichetta: "Chi sono" },
          ]}
        />
      </Section>
    </>
  );
}
