import type { Metadata } from "next";
import { CtaLink } from "@/components/cta-link";
import {
  Chiusura,
  PageHero,
  PassiVerticali,
  Section,
  SectionHeader,
} from "@/components/section";

export const metadata: Metadata = {
  title: "Servizi: contrattualistica, diagnosi ed efficienza energetica",
  description:
    "Contrattualistica energetica, diagnosi energetiche ed efficienza: come vengono svolte le attività e che cosa comportano per un'impresa.",
  alternates: {
    canonical: "/servizi",
  },
};

const aree = [
  {
    titolo: "Contrattualistica",
    sintesi:
      "Lettura e gestione del contratto di fornitura, dalla struttura delle clausole alle condizioni di uscita.",
    punti: [
      "Verifica della struttura contrattuale: durata, indicizzazione, rinnovi, penali e condizioni di uscita",
      "Confronto tra condizioni proposte da fornitori diversi, con evidenza delle differenze rilevanti",
      "Coerenza tra il contratto e il profilo di consumo reale dei siti",
      "Presidio delle scadenze e delle finestre utili per intervenire",
    ],
  },
  {
    titolo: "Diagnosi energetiche",
    sintesi:
      "Lettura sistematica di consumi e impianti per capire dove si concentra l'energia e dove ha senso intervenire.",
    punti: [
      "Ricostruzione dei consumi per sito, per vettore energetico e per periodo",
      "Individuazione delle voci che pesano di più sul costo complessivo",
      "Verifica di coerenza tra consumi dichiarati, profili e utilizzo produttivo",
      "Indicazione delle aree su cui concentrare l'analisi di interventi possibili",
    ],
  },
  {
    titolo: "Efficienza energetica",
    sintesi:
      "Supporto sulle iniziative di efficienza, dal confronto delle priorità alla verifica dei risultati.",
    punti: [
      "Confronto tra interventi possibili in base a fattibilità tecnica e compatibilità con la produzione",
      "Definizione delle priorità, distinguendo ciò che è urgente da ciò che può attendere",
      "Accompagnamento nelle fasi di valutazione e impostazione degli interventi",
      "Verifica nel tempo degli effetti sui consumi e sui costi",
    ],
  },
];

const metodo = [
  {
    titolo: "Raccolta dei dati",
    numero: "Passo 01",
    testo:
      "Consumi, contratti, impianti e vincoli produttivi: senza una base documentata l'analisi non regge.",
  },
  {
    titolo: "Analisi",
    numero: "Passo 02",
    testo:
      "Lettura dei dati e ricostruzione del quadro: cosa si sta pagando, dove si consuma, quali margini esistono.",
  },
  {
    titolo: "Restituzione",
    numero: "Passo 03",
    testo:
      "Un documento leggibile che distingue fatti, ipotesi e valutazioni, con le opzioni disponibili.",
  },
  {
    titolo: "Esecuzione",
    numero: "Passo 04",
    testo:
      "Supporto sui passaggi operativi conseguenti, fino alla verifica dei risultati ottenuti.",
  },
];

export default function ServiziPage() {
  return (
    <>
      <PageHero
        etichetta="Servizi alle imprese"
        titolo="Contrattualistica, diagnosi ed efficienza: tre lavori collegati."
        introduzione="Il contratto, i consumi e gli interventi tecnici sono aspetti della stessa fornitura. Trattarli separatamente porta a decisioni scoordinate; leggerli insieme permette di capire dove intervenire per primo."
      >
        <div className="flex flex-wrap gap-3">
          <CtaLink href="/contatti">Richiedi un primo confronto</CtaLink>
          <CtaLink href="/acquisto-aggregato" variante="contorno">
            Acquisto aggregato
          </CtaLink>
          <CtaLink href="/gas-psv" variante="contorno">
            Gas al PSV
          </CtaLink>
        </div>
      </PageHero>

      <Section>
        <SectionHeader
          etichetta="Aree di lavoro"
          titolo="Che cosa comprende ogni area."
          introduzione="Ogni area ha un perimetro definito: sapere cosa è compreso e cosa resta fuori è la condizione per lavorare bene insieme."
        />

        <div className="mt-12 space-y-6">
          {aree.map((area) => (
            <article
              key={area.titolo}
              className="border border-grafite-700 bg-grafite-900 p-6 sm:p-8"
            >
              <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
                <div>
                  <h3 className="text-2xl text-avorio-50">{area.titolo}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-grafite-200">
                    {area.sintesi}
                  </p>
                </div>
                <ul className="space-y-3 text-sm leading-relaxed text-grafite-200">
                  {area.punti.map((punto) => (
                    <li key={punto} className="border-l-2 border-verde-600 pl-4">
                      {punto}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section variante="chiaro">
        <SectionHeader
          tono="chiaro"
          etichetta="Metodo"
          titolo="Come si svolge il lavoro, in quattro passi."
          introduzione="Lo stesso ordine per ogni area di servizio: prima i dati, poi la lettura, poi le alternative, infine la decisione dell'impresa."
        />
        <div className="mt-4 max-w-3xl">
          <PassiVerticali tono="chiaro" etichetta="I quattro passi del metodo" passi={metodo} />
        </div>
      </Section>

      <Section variante="chiaro">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeader
            tono="chiaro"
            etichetta="Oltre la fornitura"
            titolo="Quando l'energia arriva come servizio."
            introduzione="Nelle offerte Energy as a Service il contratto lega volume, impianti e monitoraggio in un unico pacchetto, remunerato con un canone o con una quota dei risparmi. È un terreno dove la lettura contrattuale conta più che altrove."
          />
          <div className="space-y-4 text-sm leading-relaxed text-grafite-700">
            <p className="border-l-2 border-verde-700 pl-4">
              Se stai valutando un&apos;offerta di questo tipo, la pagina
              dedicata spiega il modello, le forme contrattuali e le verifiche
              da fare prima di firmare.
            </p>
            <div>
              <CtaLink
                href="/energia-come-servizio"
                variante="contorno"
                tono="chiaro"
              >
                Energia come servizio (EaaS)
              </CtaLink>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeader
            etichetta="Perimetro"
            titolo="Che cosa resta fuori dal lavoro."
            introduzione="Essere espliciti sui confini evita aspettative sbagliate e rende il rapporto più semplice."
          />
          <ul className="space-y-4 text-sm leading-relaxed text-grafite-200">
            <li className="border-l-2 border-grafite-700 pl-4">
              Non fornisco consulenza legale, fiscale o contabile: quando serve,
              il confronto va fatto con i professionisti che l&apos;impresa ha
              già.
            </li>
            <li className="border-l-2 border-grafite-700 pl-4">
              Non eseguo direttamente gli interventi tecnici sugli impianti: ne
              valuto l&apos;opportunità e ne seguo l&apos;impostazione.
            </li>
            <li className="border-l-2 border-grafite-700 pl-4">
              Non anticipo risultati economici: le stime si fanno sui dati
              dell&apos;impresa, con ipotesi dichiarate e verificabili.
            </li>
          </ul>
        </div>
      </Section>

      <Section variante="chiaro" compatta>
        <Chiusura
          tono="chiaro"
          titolo="Il punto di partenza è sempre la lettura dei dati."
          primaria={{ href: "/contatti", etichetta: "Richiedi un primo confronto" }}
          secondari={[
            { href: "/chi-sono", etichetta: "Chi sono" },
            { href: "/acquisto-aggregato", etichetta: "Acquisto aggregato" },
          ]}
        />
      </Section>
    </>
  );
}

