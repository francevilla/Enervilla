import type { Metadata } from "next";
import Link from "next/link";
import { CtaLink } from "@/components/cta-link";
import {
  Chiusura,
  PageHero,
  Section,
  SectionHeader,
} from "@/components/section";
import { recapiti } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contatti",
  description:
    "Avvia un confronto su approvvigionamento elettrico e gas, contratti, profili di consumo o progetti di efficienza industriale. Perimetro, dati e scadenze sono il punto di partenza.",
  alternates: {
    canonical: "/contatti",
  },
};

const informazioniUtili = [
  {
    titolo: "Perimetro dei siti",
    testo:
      "Quanti stabilimenti sono coinvolti e quali POD elettrici o PDR gas rientrano nella valutazione.",
  },
  {
    titolo: "Consumi disponibili",
    testo:
      "Volumi annui o mensili, profili orari se disponibili, bollette recenti e principali stagionalità produttive.",
  },
  {
    titolo: "Contratti e scadenze",
    testo:
      "Fornitore, formula di prezzo, durata e finestre di rinnovo. Anche una sola scadenza può definire il calendario delle opzioni.",
  },
  {
    titolo: "Decisione da prendere",
    testo:
      "Rinegoziare, acquistare, leggere un'esposizione, ridurre i consumi o valutare un modello di servizio: una domanda circoscritta orienta l'analisi.",
  },
];

export default function ContattiPage() {
  const nessunRecapito =
    !recapiti.email && !recapiti.telefono && !recapiti.linkedin;

  return (
    <>
      <PageHero
        etichetta="Contatti · Primo confronto"
        titolo="Una valutazione utile comincia da un perimetro chiaro."
        introduzione="Se stai valutando una fornitura, rivedendo un contratto o impostando un percorso di efficienza, il primo passaggio è mettere a fuoco siti, consumi, scadenze e vincoli produttivi. Non serve una presentazione: bastano i dati disponibili e la decisione da prendere."
      >
        {recapiti.email ? (
          <CtaLink href={`mailto:${recapiti.email}`}>
            Scrivi a {recapiti.email}
          </CtaLink>
        ) : null}
      </PageHero>

      {nessunRecapito ? (
        <Section variante="superficie">
          <div className="border border-grafite-700 bg-grafite-900 p-6 sm:p-8">
            <p className="technical-label text-xs uppercase text-champagne-400">
              Canale diretto
            </p>
            <h2 className="mt-4 text-2xl text-avorio-50">
              Recapiti in fase di conferma.
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-grafite-200">
              Email, telefono e profili professionali verranno pubblicati solo
              dopo la conferma del titolare. Non utilizziamo moduli dimostrativi
              o recapiti provvisori. Nel frattempo, le pagine di servizio
              chiariscono il perimetro delle attività e i passaggi previsti.
            </p>
          </div>
        </Section>
      ) : (
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
                    className="break-all font-medium text-verde-300 underline underline-offset-4 hover:text-champagne-400"
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
                    className="font-medium text-verde-300 underline underline-offset-4 hover:text-champagne-400"
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
                    className="font-medium text-verde-300 underline underline-offset-4 hover:text-champagne-400"
                  >
                    Profilo professionale
                  </a>
                </dd>
              </div>
            ) : null}
          </dl>
        </Section>
      )}

      <Section id="primo-confronto">
        <SectionHeader
          etichetta="Preparare il confronto"
          titolo="Poche informazioni, ma quelle giuste."
          introduzione="Un primo esame può partire dai documenti già disponibili. L'obiettivo non è formulare un'offerta al buio: è capire il perimetro, i tempi e la domanda tecnica o economica da risolvere."
        />

        <ol className="mt-10 grid gap-px overflow-hidden border border-grafite-700 sm:grid-cols-2">
          {informazioniUtili.map((voce, indice) => (
            <li
              key={voce.titolo}
              className="bg-grafite-900 p-6 sm:p-8"
            >
              <p className="technical-label text-xs text-champagne-400">
                PASSAGGIO / {String(indice + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 text-xl text-avorio-50">{voce.titolo}</h3>
              <p className="mt-3 text-sm leading-relaxed text-grafite-200">
                {voce.testo}
              </p>
            </li>
          ))}
        </ol>

        <p className="mt-7 max-w-3xl border-l border-champagne-400/70 pl-4 text-sm leading-relaxed text-grafite-300">
          Per tutelare i dati commerciali, non inviare bollette o documenti
          riservati attraverso canali non concordati. L&apos;informativa privacy
          e i riferimenti legali devono essere pubblicati prima di raccogliere
          dati personali tramite il sito.
        </p>
      </Section>

      <Section variante="chiaro" compatta>
        <Chiusura
          tono="chiaro"
          titolo="Prima del contatto, inquadra la decisione."
          testo="Elettricità, gas, contratto o efficienza: ogni percorso ha una pagina dedicata con perimetro, passaggi e limiti esplicitati."
          primaria={{
            href: "/acquisto-aggregato",
            etichetta: "Approfondisci l'approvvigionamento",
          }}
          secondari={[
            { href: "/gas-psv", etichetta: "Gas al PSV" },
            { href: "/servizi", etichetta: "Servizi alle imprese" },
            { href: "/energia-come-servizio", etichetta: "Energia come servizio" },
            { href: "/chi-sono", etichetta: "Profilo professionale" },
          ]}
        />
      </Section>

      <Section compatta>
        <p className="max-w-3xl text-sm leading-relaxed text-grafite-300">
          {recapiti.email ? (
            <>
              Per un primo confronto puoi scrivere a{" "}
              <a
                href={`mailto:${recapiti.email}`}
                className="text-avorio-100 underline underline-offset-4 hover:text-champagne-400"
              >
                {recapiti.email}
              </a>
              .
            </>
          ) : (
            <>
              Per il quadro dei servizi consulta le pagine su{" "}
              <Link
                href="/acquisto-aggregato"
                className="text-avorio-100 underline underline-offset-4 hover:text-champagne-400"
              >
                acquisto aggregato
              </Link>
              ,{" "}
              <Link
                href="/gas-psv"
                className="text-avorio-100 underline underline-offset-4 hover:text-champagne-400"
              >
                gas al PSV
              </Link>{" "}
              e{" "}
              <Link
                href="/servizi"
                className="text-avorio-100 underline underline-offset-4 hover:text-champagne-400"
              >
                servizi alle imprese
              </Link>
              .
            </>
          )}
        </p>
      </Section>
    </>
  );
}
