import type { Metadata } from "next";
import { CtaLink } from "@/components/cta-link";
import { FlowDiagram } from "@/components/flow-diagram";
import {
  Chiusura,
  PageHero,
  PassiVerticali,
  Section,
  SectionHeader,
} from "@/components/section";

export const metadata: Metadata = {
  title: "Acquisto aggregato di energia elettrica",
  description:
    "Come funziona l'aggregazione dei fabbisogni elettrici di più imprese, il confronto e la trattativa con i produttori e il coordinamento dei passaggi di consegna.",
  alternates: {
    canonical: "/acquisto-aggregato",
  },
};

const quattroPassaggi = [
  {
    titolo: "Analisi dei consumi",
    numero: "Passaggio 01",
    testo:
      "Si parte dai dati reali dei siti: volumi, profili orari, stagionalità, contemporaneità dei carichi e vincoli produttivi.",
  },
  {
    titolo: "Aggregazione dei fabbisogni",
    numero: "Passaggio 02",
    testo:
      "I fabbisogni di più imprese vengono riuniti in un unico perimetro di acquisto, con regole condivise su volumi, durata e responsabilità.",
  },
  {
    titolo: "Confronto e trattativa con i produttori",
    numero: "Passaggio 03",
    testo:
      "Le proposte vengono confrontate tra loro e discusse con i produttori, valutando struttura contrattuale e condizioni economiche nel loro insieme.",
  },
  {
    titolo: "Coordinamento dei passaggi di consegna",
    numero: "Passaggio 04",
    testo:
      "Seguo le attività necessarie perché la fornitura diventi operativa sui siti, dal punto di prelievo fino ai tempi previsti dal contratto.",
  },
];

const datiRichiesti = [
  "Elenco dei siti e dei punti di prelievo interessati",
  "Storico dei consumi, con dettaglio mensile e profili orari quando disponibili",
  "Contratti di fornitura in essere e relative scadenze",
  "Eventuali vincoli tecnici o produttivi che condizionano i consumi",
];

const attivitaGestite = [
  "Composizione del perimetro di acquisto e verifica della coerenza dei volumi",
  "Confronto tra le condizioni proposte e redazione di un quadro leggibile delle differenze",
  "Trattativa sulle condizioni e sulle clausole rilevanti",
  "Coordinamento delle attività operative necessarie alla consegna",
];

export default function AcquistoDirettoPage() {
  return (
    <>
      <PageHero
        etichetta="Acquisto aggregato · Energia elettrica"
        titolo="Aggregare i consumi per trattare insieme."
        introduzione="Quando i fabbisogni restano separati, ogni impresa si presenta sul mercato da sola. Aggregandoli, il perimetro diventa più solido e la trattativa con i produttori può affrontare anche la struttura del contratto, non solo il prezzo."
      >
        <div className="flex flex-wrap gap-3">
          <CtaLink href="/contatti">Richiedi un primo confronto</CtaLink>
          <CtaLink href="/gas-psv" variante="contorno">
            Vedi anche il percorso gas al PSV
          </CtaLink>
        </div>
      </PageHero>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <SectionHeader
              etichetta="Perché aggregare"
              titolo="Un fabbisogno isolato si tratta con difficoltà. Più fabbisogni insieme cambiano la conversazione."
              introduzione="Riunire i consumi non significa perdere autonomia: significa presentarsi al produttore con un perimetro più definito e con una struttura negoziale in grado di discutere anche le condizioni, oltre al prezzo."
            />
            <p className="mt-6 text-sm leading-relaxed text-grafite-200">
              L&apos;aggregazione richiede metodo: i volumi vanno verificati, i
              profili di consumo confrontabili e le regole del perimetro
              esplicite fin dall&apos;inizio. È il lavoro che precede la
              trattativa e che ne determina la solidità.
            </p>
          </div>
          <FlowDiagram />
        </div>
      </Section>

      <Section variante="chiaro">
        <SectionHeader
          tono="chiaro"
          etichetta="Come si svolge"
          titolo="Quattro passaggi, in quest'ordine."
          introduzione="L'ordine non è negoziabile: senza dati verificati la trattativa discute di ipotesi. Ogni passaggio produce il materiale per il successivo."
        />
        <div className="mt-4 max-w-3xl">
          <PassiVerticali
            tono="chiaro"
            etichetta="I quattro passaggi dell'acquisto aggregato"
            passi={quattroPassaggi}
          />
        </div>
      </Section>

      <Section variante="superficie">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="border border-grafite-700 bg-grafite-900 p-6 sm:p-8">
            <h2 className="text-2xl text-avorio-50">Cosa serve dall&apos;impresa</h2>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-grafite-200">
              {datiRichiesti.map((voce) => (
                <li key={voce} className="border-l-2 border-grafite-700 pl-4">
                  {voce}
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-grafite-700 bg-grafite-900 p-6 sm:p-8">
            <h2 className="text-2xl text-avorio-50">Cosa gestisco io</h2>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-grafite-200">
              {attivitaGestite.map((voce) => (
                <li key={voce} className="border-l-2 border-verde-700 pl-4">
                  {voce}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeader
          etichetta="Trasparenza"
          titolo="Cosa non troverai scritto in questa pagina."
          introduzione="Questo sito descrive il lavoro, non anticipa risultati. Non ci sono percentuali di risparmio, prezzi di esempio, garanzie di convenienza o elenchi di clienti: sono informazioni da documentare caso per caso."
        />
        <p className="mt-6 max-w-3xl text-sm leading-relaxed text-grafite-200">
          Il valore economico di una fornitura dipende da fattori che cambiano
          nel tempo e da scelte che spettano all&apos;impresa. Per questo qui
          trovi il metodo e il perimetro delle attività, non promesse.
        </p>
      </Section>

      <Section variante="chiaro" compatta>
        <Chiusura
          tono="chiaro"
          titolo="Il percorso gas segue una logica diversa."
          primaria={{ href: "/contatti", etichetta: "Richiedi un primo confronto" }}
          secondari={[
            { href: "/gas-psv", etichetta: "Gas al PSV" },
            { href: "/energia-come-servizio", etichetta: "Energia come servizio" },
            { href: "/servizi", etichetta: "Servizi alle imprese" },
          ]}
        />
      </Section>
    </>
  );
}

