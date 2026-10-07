import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaLink } from "@/components/cta-link";
import { Card, Chiusura, Section, SectionHeader } from "@/components/section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "Consulenza energetica per imprese · Bologna | EnerVilla · Deep Energy",
  },
  description:
    "Affianco CEO, CFO e responsabili tecnici nelle decisioni su approvvigionamento elettrico e gas, contratti, rischio energetico ed efficienza industriale.",
  alternates: {
    canonical: "/",
  },
};

const posizionamento = [
  { titolo: "Bologna", dettaglio: "Base operativa" },
  { titolo: "Italia", dettaglio: "Operatività nazionale" },
  { titolo: "Industria", dettaglio: "Imprese e siti produttivi" },
];

/**
 * Indicatori di contesto, non risultati aziendali né dati live.
 * Le finestre temporali e le fonti sono esplicitate nelle rispettive card.
 */
const segnaliMercato = [
  {
    valore: "≈5×",
    titolo: "Oscillazioni giornaliere",
    testo:
      "Nel 2025 le variazioni giornaliere dei prezzi wholesale elettrici sono state circa cinque volte quelle del 2020.",
    periodo: "Mercato elettrico UE · 2025 vs 2020",
    fonte: "ACER · Monitoring Report 2026",
    url: "https://www.acer.europa.eu/news/expanding-eu-energy-market-integration-key-global-competitiveness-and-decarbonisation",
  },
  {
    valore: "≈1,5×",
    titolo: "Prezzo industriale UE / USA",
    testo:
      "Nel primo semestre 2025, il prezzo finale medio dell'elettricità per l'industria UE era circa una volta e mezzo quello statunitense.",
    periodo: "Prezzi industriali · 1° semestre 2025",
    fonte: "ACER · Monitoring Report 2026",
    url: "https://www.acer.europa.eu/news/expanding-eu-energy-market-integration-key-global-competitiveness-and-decarbonisation",
  },
  {
    valore: "11%",
    titolo: "Risparmio energetico osservato",
    testo:
      "Media dei primi anni in oltre 300 casi di energy management analizzati in 40 Paesi. È un benchmark di letteratura, non una previsione per il singolo sito.",
    periodo: "Casi studio · primi anni di attuazione",
    fonte: "IEA · Industrial energy management, 2025",
    url: "https://www.iea.org/commentaries/industrial-facilities-could-save-billions-by-implementing-energy-management",
  },
  {
    valore: "−55%",
    titolo: "Obiettivo climatico UE al 2030",
    testo:
      "Riduzione netta delle emissioni UE rispetto al 1990. Gli obblighi e i percorsi delle singole imprese dipendono da settore e normativa applicabile.",
    periodo: "Obiettivo UE · 2030 vs 1990",
    fonte: "Commissione europea · obiettivo climatico UE",
    url: "https://energy.ec.europa.eu/topics/energy-efficiency/energy-efficiency-targets-directive-and-rules/energy-efficiency-directive_en",
  },
];

const variabiliCosto = [
  {
    titolo: "Formula economica",
    testo:
      "Indice, spread, corrispettivi e componenti di rete: il confronto è utile solo quando perimetro e unità di misura coincidono.",
  },
  {
    titolo: "Profilo del carico",
    testo:
      "Volumi, fasce orarie e stagionalità descrivono quando l'impresa consuma, non soltanto quanto consuma in un anno.",
  },
  {
    titolo: "Esposizione e orizzonte",
    testo:
      "Tempi di acquisto, quota esposta e aggiornamento del prezzo definiscono il rapporto tra flessibilità e rischio di mercato.",
  },
  {
    titolo: "Obblighi contrattuali",
    testo:
      "Durata, rinnovi, tolleranze, garanzie e condizioni di uscita possono modificare il costo effettivo e i margini di manovra.",
  },
];

const fasiMetodo = [
  {
    titolo: "Baseline",
    numero: "01 · DATI",
    testo:
      "Consumi, siti, POD e PDR, contratti e scadenze diventano un quadro leggibile e condiviso.",
  },
  {
    titolo: "Esposizione",
    numero: "02 · RISCHIO",
    testo:
      "Separiamo le componenti di prezzo, i vincoli operativi e ciò che l'impresa può — o non può — modificare.",
  },
  {
    titolo: "Scenari",
    numero: "03 · OPZIONI",
    testo:
      "Le alternative vengono confrontate su ipotesi esplicite: costo, orizzonte, flessibilità e impatto produttivo.",
  },
  {
    titolo: "Decisione",
    numero: "04 · CONTROLLO",
    testo:
      "Il management sceglie con i trade-off in chiaro. I risultati si verificano rispetto alla baseline concordata.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="hero-engineering border-b border-grafite-800">
        <div className="hero-content mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-champagne-400">
              {site.etichetta}
            </p>
            <p className="hero-code mt-8 text-[0.68rem] uppercase text-grafite-300">
              Strategia energetica / 01—03
            </p>
            <h1 className="mt-5 max-w-3xl text-4xl leading-[1.06] text-avorio-50 sm:text-5xl lg:text-[4.25rem]">
              Il costo dell&apos;energia si governa a monte.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-grafite-200 sm:text-lg">
              Affianco CEO, CFO e responsabili tecnici nella lettura di
              approvvigionamenti, contratti e consumi. Dati, profili, condizioni
              e rischi entrano nello stesso quadro decisionale.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CtaLink href="/contatti">Apri un confronto</CtaLink>
              <CtaLink href="#valore" variante="contorno">
                Leggi il quadro di mercato
              </CtaLink>
            </div>
            <p className="mt-7 max-w-xl border-l border-champagne-400/70 pl-4 text-sm leading-relaxed text-grafite-300">
              Dalla fornitura elettrica e gas alla valutazione degli interventi
              di efficienza: una prospettiva tecnica, con attenzione alla
              stabilità economica e alla decarbonizzazione.
            </p>
          </div>

          <div className="lg:pl-2">
            <figure className="hero-portrait-frame">
              <Image
                src="/darkvilla-hero.jpg"
                alt="Ritratto del consulente energetico"
                width={1584}
                height={672}
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <figcaption>
                <span>EnerVilla · Deep Energy</span>
                <span>Bologna / Italia</span>
              </figcaption>
            </figure>
            <ol className="hero-sequence mt-3" aria-label="Sequenza di lavoro">
              <li>01 · Profili</li>
              <li>02 · Rischi</li>
              <li>03 · Decisioni</li>
            </ol>
          </div>
        </div>
      </section>

      <Section variante="superficie" compatta>
        <dl className="grid gap-px overflow-hidden border border-grafite-800 sm:grid-cols-3">
          {posizionamento.map((voce) => (
            <div
              key={voce.titolo}
              className="border-b border-grafite-800 bg-grafite-900 p-5 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0 sm:p-6"
            >
              <dt className="font-display text-xl text-avorio-50">
                {voce.titolo}
              </dt>
              <dd className="mt-2 text-sm text-grafite-300">{voce.dettaglio}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section id="valore">
        <div className="grid gap-7 lg:grid-cols-[1fr_0.72fr] lg:items-end">
          <SectionHeader
            etichetta="Valore quantificabile · riferimenti di mercato"
            titolo="La qualità della decisione comincia dalla qualità dei dati."
            introduzione="Quattro riferimenti esterni aiutano a leggere il contesto di approvvigionamento, competitività, efficienza e transizione industriale. Non sono risultati attribuiti a EnerVilla né previsioni per una singola impresa."
          />
          <p className="technical-label border-l border-champagne-400/70 pl-4 text-[0.66rem] uppercase leading-relaxed text-grafite-300 lg:justify-self-end">
            Rilevazioni pubblicate 2025—2026
            <br />
            Ultimo aggiornamento: 07.10.2026
          </p>
        </div>

        <div className="market-grid mt-10">
          {segnaliMercato.map((segnale, indice) => (
            <article className="market-card scroll-lift" key={segnale.titolo}>
              <div className="flex items-start justify-between gap-3">
                <p className="market-card__value">{segnale.valore}</p>
                <span className="technical-label pt-1 text-[0.62rem] text-grafite-300">
                  REF / {String(indice + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-5 text-xl text-avorio-50">{segnale.titolo}</h3>
              <p className="mt-3 text-sm leading-relaxed text-grafite-200">
                {segnale.testo}
              </p>
              <p className="technical-label mt-5 text-[0.61rem] uppercase leading-relaxed text-grafite-300">
                {segnale.periodo}
              </p>
              <a
                className="market-card__source mt-3"
                href={segnale.url}
                target="_blank"
                rel="noreferrer noopener"
              >
                Fonte: {segnale.fonte}
                <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>

        <p className="mt-6 max-w-4xl text-xs leading-relaxed text-grafite-300">
          La Direttiva europea sull&apos;efficienza energetica fissa inoltre un
          obiettivo UE di riduzione del consumo finale di almeno l&apos;11,7% al
          2030 rispetto alle proiezioni 2020. È un obiettivo di sistema, non
          automaticamente il target di una singola impresa. I dati qui sopra
          sono una fotografia documentata, non un feed di prezzi in tempo reale;
          i risultati economici si stimano soltanto sulla baseline e sui
          contratti di ciascuna azienda. {" "}
          <a
            href="https://energy.ec.europa.eu/topics/energy-efficiency/energy-efficiency-targets-directive-and-rules/energy-efficiency-targets_en"
            target="_blank"
            rel="noreferrer noopener"
            className="text-avorio-100 underline underline-offset-4 hover:text-champagne-400"
          >
            Fonte: Commissione europea, obiettivi di efficienza energetica
          </a>
          .
        </p>
      </Section>

      <Section id="servizi" variante="superficie">
        <SectionHeader
          etichetta="Tre aree, un solo perimetro decisionale"
          titolo="Dall&apos;acquisto alla performance degli impianti."
          introduzione="Le attività si articolano in tre pilastri: approvvigionamento, governo contrattuale del rischio e riduzione strutturale dei consumi. Il perimetro viene definito insieme all&apos;impresa."
        />

        <div className="service-grid mt-12">
          <article className="service-card service-card--supply scroll-lift">
            <p className="service-card__index">01 / APPROVVIGIONAMENTO</p>
            <h3 className="mt-7 max-w-xl text-3xl leading-tight text-avorio-50 sm:text-4xl">
              Energia acquistata secondo il profilo reale dei siti.
            </h3>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-grafite-200 sm:text-base">
              Aggregazione dei fabbisogni elettrici e operatività sul PSV per il
              gas. Volumi, profili e tempi di acquisto vengono letti prima di
              confrontare le condizioni di fornitura.
            </p>
            <div className="service-card__tags mt-7">
              <span>Elettricità aggregata</span>
              <span>Gas al PSV</span>
            </div>
            <div className="mt-auto flex flex-wrap gap-x-7 gap-y-2 pt-8">
              <Link className="service-card__link" href="/acquisto-aggregato">
                Acquisto elettrico <span className="service-card__arrow" aria-hidden="true">→</span>
              </Link>
              <Link className="service-card__link" href="/gas-psv">
                Gas al PSV <span className="service-card__arrow" aria-hidden="true">→</span>
              </Link>
            </div>
          </article>

          <article className="service-card service-card--contracts scroll-lift">
            <p className="service-card__index">02 / CONTRATTI E RISCHIO</p>
            <h3 className="mt-5 text-2xl leading-tight text-avorio-50">
              Condizioni leggibili prima della firma.
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-grafite-200">
              Indicizzazioni, scadenze, rinnovi, tolleranze e clausole di uscita
              diventano elementi confrontabili. L&apos;attenzione è sul costo
              complessivo e sull&apos;esposizione, non sul solo prezzo unitario.
            </p>
            <div className="mt-auto pt-6">
              <Link className="service-card__link" href="/servizi">
                Analisi contrattuale <span className="service-card__arrow" aria-hidden="true">→</span>
              </Link>
            </div>
          </article>

          <article className="service-card service-card--performance scroll-lift">
            <p className="service-card__index">03 / EFFICIENZA E DECARBONIZZAZIONE</p>
            <h3 className="mt-5 text-2xl leading-tight text-avorio-50">
              Consumi misurati. Interventi prioritizzati.
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-grafite-200">
              Dalla diagnosi alle ipotesi di intervento, con una baseline chiara
              e indicatori coerenti con la produzione. I percorsi EaaS vengono
              valutati in base a perimetro, responsabilità e verifica dei
              risultati.
            </p>
            <div className="mt-auto flex flex-wrap gap-x-7 gap-y-2 pt-6">
              <Link className="service-card__link" href="/servizi">
                Efficienza energetica <span className="service-card__arrow" aria-hidden="true">→</span>
              </Link>
              <Link className="service-card__link" href="/energia-come-servizio">
                Energia come servizio <span className="service-card__arrow" aria-hidden="true">→</span>
              </Link>
            </div>
          </article>
        </div>
      </Section>

      <Section id="lettura">
        <SectionHeader
          etichetta="Lettura del costo e del rischio"
          titolo="Il prezzo è una variabile. Il contratto è il sistema."
          introduzione="Confrontare offerte significa normalizzare perimetro, profilo e condizioni. Quattro piani di lettura aiutano CFO, Operations e funzione energia a decidere sulla stessa base."
        />

        <div className="mt-10 grid gap-px overflow-hidden border border-grafite-700 sm:grid-cols-2">
          {variabiliCosto.map((voce, indice) => (
            <article
              className="scroll-lift bg-grafite-900 p-6 sm:p-8"
              key={voce.titolo}
            >
              <p className="technical-label text-xs text-champagne-400">
                DIMENSIONE / {String(indice + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 text-2xl text-avorio-50">{voce.titolo}</h3>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-grafite-200">
                {voce.testo}
              </p>
            </article>
          ))}
        </div>
        <p className="mt-7 max-w-3xl text-sm leading-relaxed text-grafite-300">
          L&apos;analisi non elimina la volatilità e non sostituisce le decisioni
          del management. Rende esplicite le alternative, le ipotesi e i rischi
          assunti dall&apos;impresa; quando i dati lo consentono, riporta la spesa
          anche al costo energetico per unità prodotta.
        </p>
      </Section>

      <Section id="metodo" variante="superficie">
        <SectionHeader
          etichetta="Metodo di lavoro"
          titolo="Quattro passaggi, una decisione tracciabile."
          introduzione="Dal dato di partenza alla verifica: ogni fase produce un output che può essere discusso con amministrazione, direzione e responsabili di stabilimento."
        />

        <ol className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {fasiMetodo.map((fase) => (
            <li className="scroll-lift" key={fase.numero}>
              <Card titolo={fase.titolo} numero={fase.numero}>
                {fase.testo}
              </Card>
            </li>
          ))}
        </ol>
      </Section>

      <Section variante="chiaro" compatta>
        <Chiusura
          tono="chiaro"
          titolo="Una valutazione utile comincia da un perimetro misurabile."
          testo="Per il primo confronto sono sufficienti i siti coinvolti, i consumi disponibili, le scadenze contrattuali e la decisione da prendere. Il quadro si costruisce sui dati dell'impresa, non su percentuali preconfezionate."
          primaria={{ href: "/contatti", etichetta: "Definisci il perimetro" }}
          secondari={[
            { href: "/acquisto-aggregato", etichetta: "Elettricità aggregata" },
            { href: "/gas-psv", etichetta: "Gas al PSV" },
            { href: "/servizi", etichetta: "Servizi alle imprese" },
            { href: "/chi-sono", etichetta: "Profilo professionale" },
          ]}
        />
      </Section>
    </>
  );
}
