import type { Metadata } from "next";
import { CtaLink } from "@/components/cta-link";
import { Card, PageHero, Section, SectionHeader } from "@/components/section";

export const metadata: Metadata = {
  title: "Approvvigionamento gas e operatività sul PSV",
  description:
    "Come viene impostato l'approvvigionamento del gas per le imprese con operatività sul PSV: analisi del profilo di consumo, scelte di copertura e gestione del rischio.",
  alternates: {
    canonical: "/gas-psv",
  },
};

const puntiChiave = [
  {
    titolo: "Il PSV in breve",
    testo:
      "È il punto di scambio virtuale dove il gas viene negoziato all'ingrosso in Italia. Le condizioni economiche della fornitura vengono costruite a partire da quel riferimento.",
  },
  {
    titolo: "Perché riguarda le imprese",
    testo:
      "Per chi consuma gas in modo significativo, il modo in cui il volume viene coperto incide sulla struttura dell'approvvigionamento, non solo sul prezzo di un singolo mese.",
  },
  {
    titolo: "Il ruolo del consulente",
    testo:
      "Posso operare sul PSV per conto dei clienti: impostare le scelte di approvvigionamento, seguirne l'esecuzione e mantenere il presidio nel tempo.",
  },
];

const fasiGas = [
  {
    titolo: "Analisi del profilo di consumo",
    numero: "Fase 01",
    testo:
      "Quanto gas serve, in quali mesi e con quale variabilità: il profilo è la base di qualsiasi scelta di copertura.",
  },
  {
    titolo: "Definizione della strategia",
    numero: "Fase 02",
    testo:
      "Si stabilisce insieme al cliente quanta parte del fabbisogno coprire e con quale orizzonte temporale, in coerenza con il proprio margine di rischio.",
  },
  {
    titolo: "Operatività sul PSV",
    numero: "Fase 03",
    testo:
      "Le scelte concordate vengono eseguite sul mercato, monitorando l'andamento e adattando le decisioni quando le condizioni cambiano.",
  },
  {
    titolo: "Consegna e verifica",
    numero: "Fase 04",
    testo:
      "Il gas acquistato deve arrivare ai siti: seguo i passaggi necessari e il confronto tra quanto pianificato e quanto effettivamente consumato.",
  },
];

const vocabolario = [
  {
    termine: "PSV",
    definizione:
      "Punto di scambio virtuale: il riferimento di mercato dove il gas viene negoziato all'ingrosso in Italia.",
  },
  {
    termine: "Profilo di consumo",
    definizione:
      "La distribuzione del consumo nell'anno e nelle giornate, non solo il volume totale.",
  },
  {
    termine: "Orizzonte di copertura",
    definizione:
      "Il periodo su cui si decide di gestire il volume: più breve o più lungo, con conseguenze diverse sul rischio.",
  },
  {
    termine: "Consegna",
    definizione:
      "L'insieme dei passaggi tecnici e amministrativi che rendono operativa la fornitura sui siti.",
  },
];

export default function GasPsvPage() {
  return (
    <>
      <PageHero
        etichetta="Gas · Operatività sul PSV"
        titolo="Il gas si gestisce seguendo il mercato, con regole chiare."
        introduzione="Per le imprese che consumano gas posso operare sul PSV per conto del cliente. È un lavoro fatto di scelte: quanto coprire, con quale orizzonte, con quale margine di rischio e con quali verifiche nel tempo."
      >
        <CtaLink href="/acquisto-diretto" variante="contorno">
          Vedi anche l&apos;acquisto aggregato di energia elettrica
        </CtaLink>
      </PageHero>

      <Section>
        <SectionHeader
          etichetta="Il contesto"
          titolo="Che cosa significa operare sul PSV."
          introduzione="Il gas che alimenta i siti di un'impresa ha alle spalle un mercato all'ingrosso. Il PSV è il punto di riferimento di quel mercato: conoscerlo permette di decidere in modo consapevole invece di subire le condizioni."
        />

        <div className="mt-12 grid gap-px overflow-hidden border border-grafite-200 md:grid-cols-3">
          {puntiChiave.map((punto) => (
            <div key={punto.titolo} className="bg-avorio-50 p-6 sm:p-8">
              <h3 className="text-xl">{punto.titolo}</h3>
              <p className="mt-3 text-sm leading-relaxed text-grafite-700">
                {punto.testo}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section variante="verde">
        <SectionHeader
          etichetta="Come si svolge"
          titolo="Quattro fasi concordate con il cliente."
        />
        <ol className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {fasiGas.map((fase) => (
            <li key={fase.titolo}>
              <Card titolo={fase.titolo} numero={fase.numero}>
                {fase.testo}
              </Card>
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeader
            etichetta="Rischio e trasparenza"
            titolo="Nessuna promessa di prezzo, solo scelte spiegate."
            introduzione="Lavorare sul PSV non significa azzerare il rischio: significa decidere con cognizione di causa e con una strategia condivisa."
          />
          <div className="space-y-4 text-sm leading-relaxed text-grafite-700">
            <p className="border-l-2 border-grafite-300 pl-4">
              Il risultato dipende dal momento in cui si decide, dall&apos;orizzonte
              scelto e dalla situazione del mercato, che non è prevedibile.
            </p>
            <p className="border-l-2 border-grafite-300 pl-4">
              Non presento il servizio come la scelta più conveniente in
              assoluto: la valutazione va fatta sul profilo di consumo e sugli
              obiettivi dell&apos;impresa.
            </p>
            <p className="border-l-2 border-grafite-300 pl-4">
              Le decisioni vengono documentate, così che si sappia sempre da
              dove parte una scelta e perché è stata presa.
            </p>
          </div>
        </div>
      </Section>

      <Section variante="scuro" compatta>
        <SectionHeader
          tono="scuro"
          etichetta="Vocabolario"
          titolo="Le parole che servono per decidere."
        />
        <dl className="mt-10 grid gap-px overflow-hidden border border-grafite-800 sm:grid-cols-2">
          {vocabolario.map((voce) => (
            <div key={voce.termine} className="bg-grafite-900 p-6">
              <dt className="font-display text-lg text-avorio-50">
                {voce.termine}
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-grafite-300">
                {voce.definizione}
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section variante="verde" compatta>
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <h2 className="max-w-xl text-3xl">
            Il contratto va letto insieme al percorso di approvvigionamento.
          </h2>
          <div className="flex flex-wrap gap-3">
            <CtaLink href="/servizi">Servizi alle imprese</CtaLink>
            <CtaLink href="/acquisto-diretto" variante="contorno">
              Acquisto aggregato
            </CtaLink>
          </div>
        </div>
      </Section>
    </>
  );
}
