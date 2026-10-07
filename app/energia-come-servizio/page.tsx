import type { Metadata } from "next";
import { CtaLink } from "@/components/cta-link";
import {
  Card,
  Chiusura,
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
      "Energy Service Company: il nome d'uso comune per chi eroga servizi energetici. La direttiva UE sull'efficienza energetica parla di «energy service provider» (chi fornisce servizi energetici presso il cliente finale); ESCO è il termine equivalente usato nella pratica.",
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
  {
    titolo: "Fornitura gestita",
    sintesi:
      "Si paga l'energia utile o il comfort (calore, luce, freddo), non il chilowattora: chi eroga investe, gestisce gli impianti e si assume il rischio tecnico.",
    punti: [
      "Il cliente paga un corrispettivo legato al servizio ricevuto, con costi prevedibili nel tempo",
      "La Banca Mondiale la indica come il modello di gestione energetica più diffuso in Unione europea",
      "In Italia questa logica è quella del «contratto servizio energia» (DPR 412/1993)",
    ],
  },
];

const verificaPrima = [
  {
    titolo: "Baseline dei consumi",
    testo:
      "Ogni promessa di risparmio parte da un riferimento di consumo documentato sito per sito. Il riferimento internazionale per misurarlo è il protocollo IPMVP: Risparmi = (Energia baseline − Energia rilevata) ± Aggiustamenti.",
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
  "Un mercato dei servizi energetici in crescita: il Centro comune di ricerca della Commissione europea rilevava nel 2019 un mercato stabile o in crescita in quasi tutti gli Stati membri, con l'Italia tra i paesi più dinamici (survey 2018-19).",
];

const fonti = [
  {
    titolo: "Innovation landscape brief: Energy as a Service",
    fonte: "IRENA · 2020",
    url: "https://www.irena.org/-/media/Files/IRENA/Agency/Publication/2020/Jul/IRENA_Energy-as-a-Service_2020.pdf",
    rilevanza:
      "Definizione del modello EaaS e classificazione in tre famiglie: consulenza, impianti, gestione.",
  },
  {
    titolo: "Energy Service Companies: ESCO contracts",
    fonte: "IEA",
    url: "https://www.iea.org/reports/energy-service-companies-escos-2/esco-contracts",
    rilevanza:
      "I due modelli di energy performance contract: condivisione dei risparmi e risparmio garantito.",
  },
  {
    titolo: "What is EPC",
    fonte: "Transparense (progetto europeo)",
    url: "https://www.transparense.eu/eu/epc-qa/what-is-epc/",
    rilevanza:
      "Definizioni della direttiva UE sull'efficienza energetica: energy performance contracting ed energy service provider.",
  },
  {
    titolo: "Le società di servizi energetici e i loro modelli di business",
    fonte: "Banca Mondiale",
    url: "https://documents1.worldbank.org/curated/en/709221467753465653/pdf/103932-REVISED-LW54-fin-logo-OKR.pdf",
    rilevanza:
      "Terzo modello oltre ai due EPC: gestione energetica esternalizzata, la più diffusa in Unione europea.",
  },
  {
    titolo: "International Performance Measurement and Verification Protocol (IPMVP)",
    fonte: "EVO — Efficiency Valuation Organization",
    url: "https://evo-world.org/",
    rilevanza:
      "Il protocollo internazionale per misurare e verificare i risparmi: baseline, periodo di riferimento, aggiustamenti.",
  },
  {
    titolo: "Energy Service Market in the EU — Status review and recommendations 2019",
    fonte: "JRC, Commissione europea",
    url: "https://publications.jrc.ec.europa.eu/repository/bitstream/JRC118815/jrc118815.pdf",
    rilevanza:
      "Mercato dei servizi energetici stabile o in crescita in quasi tutti gli Stati membri, Italia tra i più dinamici.",
  },
  {
    titolo: "DPR 26 agosto 1993, n. 412 (testo coordinato)",
    fonte: "Normativa italiana, via ISPRA",
    url: "https://www.isprambiente.gov.it/contentfiles/00005500/5556-d.p.r.26agosto1993n.412.pdf",
    rilevanza: "Definizione italiana di «contratto servizio energia».",
  },
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
          introduzione="L'Irena (agenzia internazionale per le energie rinnovabili) dedica all'EaaS uno dei suoi brief sulle innovazioni del settore elettrico: un modello nato da digitalizzazione e decentralizzazione, che sposta il valore dalla vendita di chilowattora alla fornitura di servizi. La definizione conta poco, però, se poi non la si traduce in clausole."
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
          introduzione="La classificazione in tre famiglie è quella di IRENA (2020). Capire a quale famiglia appartiene l'offerta che si ha davanti cambia il modo di valutarla, perché ognuna genera il proprio margine in modo diverso."
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
          titolo="Abbonamento, prestazione o fornitura gestita: tre rischi diversi."
          introduzione="Sono le tre strutture con cui questi servizi vengono tipicamente erogati: canone fisso, remunerazione legata ai risultati, pagamento dell'energia utile. Vengono spesso presentate come equivalenti; non lo sono."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
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
            titolo="Quattro condizioni che rendono l'EaaS praticabile oggi."
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
              <CtaLink href="/servizi" variante="contorno">
                Come lavoro su contratti, diagnosi ed efficienza
              </CtaLink>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeader
          etichetta="Fonti"
          titolo="Da dove vengono queste informazioni."
          introduzione="Ogni affermazione tecnica di questa pagina è riconducibile a una fonte pubblica e verificabile. I documenti restano la lettura consigliata prima di valutare un'offerta."
        />
        <ul className="mt-12 space-y-4">
          {fonti.map((voce) => (
            <li
              key={voce.url}
              className="border border-grafite-700 bg-grafite-900 p-6"
            >
              <a
                href={voce.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-verde-300 underline underline-offset-4 hover:text-champagne-400"
              >
                {voce.titolo}
                <span aria-hidden="true"> ↗</span>
              </a>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-grafite-300">
                {voce.fonte}
              </p>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-grafite-200">
                {voce.rilevanza}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section compatta>
        <Chiusura
          titolo="Hai un'offerta EaaS davanti? Partiamo dalle clausole."
          primaria={{ href: "/contatti", etichetta: "Richiedi un primo confronto" }}
          secondari={[
            { href: "/servizi", etichetta: "Servizi alle imprese" },
            { href: "/gas-psv", etichetta: "Gas al PSV" },
          ]}
        />
      </Section>
    </>
  );
}
