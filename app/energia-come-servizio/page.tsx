import type { Metadata } from "next";
import { CtaLink } from "@/components/cta-link";
import {
  Card,
  PageHero,
  PassiVerticali,
  Section,
  SectionHeader,
} from "@/components/section";

export const metadata: Metadata = {
  title: "Energia come servizio (Energy as a Service): definizione e contratti",
  description:
    "Che cosa è l'Energy as a Service (EaaS): il modello in cui l'energia arriva con i servizi annessi. Definizioni, forme contrattuali, rischi e perimetro del lavoro di consulenza.",
  alternates: {
    canonical: "/energia-come-servizio",
  },
};

const definizioni = [
  {
    termine: "EaaS",
    definizione:
      "Energy as a Service: modello di business in cui chi fornisce energia non si limita al volume, ma offre anche i servizi annessi alla sua gestione.",
  },
  {
    termine: "ESCo",
    definizione:
      "Energy Service Company: il soggetto che eroga i servizi energetici. La Commissione europea usa questa definizione per le imprese del settore.",
  },
  {
    termine: "Servizi annessi",
    definizione:
      "Consulenza, installazione dei sistemi, software di monitoraggio, controllo dei consumi: tutto ciò che accompagna la semplice fornitura.",
  },
];

const treFamiglie = [
  {
    titolo: "Consulenza energetica",
    numero: "Famiglia 01",
    testo:
      "Previsioni sui prezzi, lettura degli storici di consumo, analisi dei sistemi esistenti per individuare margini di ottimizzazione. In genere non ha un modello di ricavo diretto: orienta le scelte successive.",
  },
  {
    titolo: "Impianti e asset",
    numero: "Famiglia 02",
    testo:
      "Installazione di sistemi on-site o off-site: produzione da fonti rinnovabili, accumulo, misura intelligente. Il margine sta sull'installazione o sul finanziamento del progetto.",
  },
  {
    titolo: "Gestione dell'energia",
    numero: "Famiglia 03",
    testo:
      "Monitoraggio, controllo da remoto, ottimizzazione dei carichi. È la parte che opera nel tempo, e quella su cui si costruiscono i contratti.",
  },
];

const contratti = [
  {
    titolo: "Abbonamento",
    sintesi:
      "Tariffa fissa periodica: chi eroga il servizio si assume i rischi di prezzo e di quantità.",
    punti: [
      "Il cliente paga una quota prevedibile; il fornitore gestisce il rischio di mercato",
      "Il risultato dipende molto dalla qualità delle analisi preliminari sui consumi",
      "Da verificare: cosa succede quando i consumi reali si discostano dal profilo atteso",
    ],
  },
  {
    titolo: "Contratto a prestazione",
    sintesi:
      "La remunerazione è legata ai risultati ottenuti, con due varianti da distinguere con attenzione.",
    punti: [
      "Condivisione dei risparmi: i benefici sono ripartiti secondo una percentuale prefissata",
      "Risparmio garantito: al cliente è assicurata una quota minima di risparmio",
      "Il risparmio futuro può finanziare l'intervento odierno: la forma va letta come un finanziamento",
    ],
  },
];

const verificaPrima = [
  {
    titolo: "Baseline dei consumi",
    testo:
      "Ogni promessa di risparmio parte da un riferimento di consumo. Se la baseline non è documentata sito per sito, il confronto finale non regge.",
  },
  {
    titolo: "Perimetro dei servizi",
    testo:
      "Cosa è compreso e cosa è escluso: installazione, manutenzione, monitoraggio, titoli ambientali. Le esclusioni non dichiarate diventano costi successivi.",
  },
  {
    titolo: "Chi porta quale rischio",
    testo:
      "Rischio di prezzo, di quantità, tecnologico, di performance. Un contratto EaaS serio assegna ciascun rischio a una parte precisa.",
  },
  {
    titolo: "Uscita e continuità",
    testo:
      "Durata, condizioni di recesso, destino degli impianti e dei dati alla fine del rapporto. Sono clausole che decidono il valore reale dell'operazione.",
  },
];

const percheAdesso = [
  "Costi di installazione ancora significativi per rinnovabili e accumuli: modelli che li distribuiscono nel tempo allargano il numero di progetti sostenibili.",
  "Maturità delle tecnologie di misura e monitoraggio: senza dati orari verificabili nessun contratto a prestazione è controllabile.",
  "Obiettivi di decarbonizzazione ed elettrificazione: per le imprese non è una scelta di immagine, è una variabile di costo strutturale.",
];

export default function EnergiaComeServizioPage() {
  return (
    <>
      <PageHero
        etichetta="Energy as a Service · EaaS"
        titolo="L'energia come servizio: cosa significa davvero, e cosa controllare prima di firmare."
        introduzione="Nel modello Energy as a Service non si acquista soltanto un volume di energia: si acquista un pacchetto di servizi — consulenza, impianti, monitoraggio — legato da un contratto. Il vantaggio dipende tutto da come quel contratto è scritto."
      >
        <div className="flex flex-wrap gap-3">
          <CtaLink href="/contatti">Richiedi un primo confronto</CtaLink>
          <CtaLink href="/servizi" variante="contorno">
            Contrattualistica energetica
          </CtaLink>
          <CtaLink href="/acquisto-aggregato" variante="contorno">
            Acquisto aggregato
          </CtaLink>
        </div>
      </PageHero>

      <Section>
        <SectionHeader
          etichetta="Definizione"
          titolo="Non una fornitura più cara di servizi: un modo diverso di comprare energia."
          introduzione="L'Irena, agenzia internazionale per le energie rinnovabili, descrive l'EaaS come il modello più innovativo tra quelli emersi nel settore, con vantaggi possibili in tutti i segmenti: industriale, commerciale e consumer. La definizione conta poco, però, se poi non la si traduce in clausole."
        />
        <div className="mt-12 grid gap-px overflow-hidden border border-grafite-700 md:grid-cols-3">
          {definizioni.map((voce) => (
            <div key={voce.termine} className="bg-grafite-900 p-6 sm:p-8">
              <h3 className="font-display text-xl text-avorio-50">{voce.termine}</h3>
              <p className="mt-3 text-sm leading-relaxed text-grafite-200">
                {voce.definizione}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section variante="superficie">
        <SectionHeader
          etichetta="Come funziona"
          titolo="Tre famiglie di servizi, tre economie diverse."
          introduzione="Capire a quale famiglia appartiene l'offerta che si ha davanti cambia il modo di valutarla: ogni famiglia genera il proprio margine in modo diverso."
        />
        <ol className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {treFamiglie.map((famiglia) => (
            <li key={famiglia.titolo}>
              <Card titolo={famiglia.titolo} numero={famiglia.numero}>
                {famiglia.testo}
              </Card>
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <SectionHeader
          etichetta="Forme contrattuali"
          titolo="Abbonamento o contratto a prestazione: sono due rischi diversi."
          introduzione="Sono le due strutture con cui l'EaaS viene tipicamente erogato. Vengono spesso presentate come equivalenti; non lo sono."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {contratti.map((forma) => (
            <article
              key={forma.titolo}
              className="border border-grafite-700 bg-grafite-900 p-6 sm:p-8"
            >
              <h3 className="text-2xl text-avorio-50">{forma.titolo}</h3>
              <p className="mt-3 text-sm leading-relaxed text-grafite-200">
                {forma.sintesi}
              </p>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-grafite-200">
                {forma.punti.map((punto) => (
                  <li key={punto} className="border-l-2 border-verde-600 pl-4">
                    {punto}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section variante="scuro">
        <SectionHeader
          tono="scuro"
          etichetta="Prima di firmare"
          titolo="Quattro verifiche che separano un buon affare da un vincolo costoso."
          introduzione="Un contratto EaaS può essere ottimo o molto oneroso: la differenza sta quasi tutta nelle premesse, non nel canone."
        />
        <div className="mt-4 max-w-3xl">
          <PassiVerticali
            etichetta="Le quattro verifiche prima della firma"
            passi={verificaPrima}
          />
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeader
            etichetta="Perché ora"
            titolo="Tre condizioni che rendono l'EaaS praticabile oggi."
          />
          <ul className="space-y-4 text-sm leading-relaxed text-grafite-200">
            {percheAdesso.map((voce) => (
              <li key={voce} className="border-l-2 border-grafite-700 pl-4">
                {voce}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section variante="superficie">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeader
            etichetta="Il mio ruolo"
            titolo="Faccio la parte di analisi e contrattualistica. Non vendo l'impianto."
            introduzione="L'EaaS vive di rapporti continuativi: perché funzionino, il perimetro deve essere esplicito fin dall'inizio. È il lavoro che so fare, ed è quello che faccio."
          />
          <div className="space-y-4 text-sm leading-relaxed text-grafite-200">
            <p className="border-l-2 border-verde-600 pl-4">
              Cosa posso fare: leggere e confrontare le offerte EaaS, impostare
              la baseline dei consumi, definire insieme all&apos;impresa il
              perimetro accettabile di servizi e rischi, presidiare il contratto
              nel tempo con gli stessi metodi usati per la fornitura elettrica e
              per il gas.
            </p>
            <p className="border-l-2 border-verde-600 pl-4">
              Cosa non faccio: non eseguo direttamente gli interventi sugli
              impianti e non fornisco consulenza legale o fiscale. Su un
              contratto EaaS queste competenze servono: vanno coinvolte, non
              improvvisate.
            </p>
            <p className="border-l-2 border-verde-600 pl-4">
              Come si collega agli altri percorsi: l&apos;acquisto aggregato e
              l&apos;operatività sul PSV riguardano la fornitura; l&apos;EaaS
              riguarda ciò che ci si costruisce sopra. Le quattro verifiche qui
              accanto valgono in entrambi i casi.
            </p>
            <div>
              <CtaLink href="/servizi" variante="contorno" suFondoScuro>
                Come lavoro su contratti, diagnosi ed efficienza
              </CtaLink>
            </div>
          </div>
        </div>
      </Section>

      <Section variante="superficie" compatta>
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <h2 className="max-w-xl text-3xl text-avorio-50">
            Hai un&apos;offerta EaaS davanti? Partiamo dalle clausole.
          </h2>
          <div className="flex flex-wrap gap-3">
            <CtaLink href="/contatti">Richiedi un primo confronto</CtaLink>
            <CtaLink href="/servizi" variante="contorno">
              Servizi alle imprese
            </CtaLink>
            <CtaLink href="/gas-psv" variante="contorno">
              Gas al PSV
            </CtaLink>
          </div>
        </div>
      </Section>
    </>
  );
}
