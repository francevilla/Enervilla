import type { Metadata } from "next";
import Image from "next/image";
import { CtaLink } from "@/components/cta-link";
import { Card, Chiusura, Section, SectionHeader } from "@/components/section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "Consulenza energetica per imprese · Bologna · Italia",
  },
  description:
    "Aggrego i fabbisogni delle imprese, le metto in relazione con i produttori e seguo i passaggi necessari all'approvvigionamento e alla consegna dell'energia. Per il gas opero sul PSV per conto dei clienti.",
  alternates: {
    canonical: "/",
  },
};

const posizionamento = [
  { titolo: "Bologna", dettaglio: "Base operativa" },
  { titolo: "Operatività nazionale", dettaglio: "Imprese in tutta Italia" },
  {
    titolo: "Consulenza per imprese",
    dettaglio: "Siti produttivi e forniture industriali",
  },
];

const variabiliCosto = [
  {
    titolo: "Struttura del contratto",
    testo:
      "Durata, indicizzazione, clausole di rinnovo e condizioni di uscita pesano sul costo reale della fornitura, non solo sul prezzo del mese.",
  },
  {
    titolo: "Profilo di consumo",
    testo:
      "Due imprese con lo stesso volume annuo possono avere profili orari molto diversi, e il profilo cambia il valore economico della fornitura.",
  },
  {
    titolo: "Struttura dell'approvvigionamento",
    testo:
      "Chi fornisce il volume, con quale orizzonte temporale e con quali strumenti è parte della decisione, non un dettaglio tecnico.",
  },
  {
    titolo: "Condizioni economiche",
    testo:
      "Il prezzo unitario è una delle voci in gioco: va letto insieme agli oneri, ai corrispettivi e agli obblighi previsti dal contratto.",
  },
];

const metodo = [
  {
    titolo: "Dati",
    numero: "Fase 01",
    testo:
      "Raccolta di consumi, forniture attive, contratti in essere e vincoli dei siti. È la base di tutto il lavoro successivo.",
  },
  {
    titolo: "Analisi",
    numero: "Fase 02",
    testo:
      "Lettura dei profili e della struttura contrattuale: cosa si sta pagando davvero e con quali margini di intervento.",
  },
  {
    titolo: "Opzioni",
    numero: "Fase 03",
    testo:
      "Costruzione delle alternative possibili, ognuna con vantaggi, limiti e condizioni da rispettare.",
  },
  {
    titolo: "Decisione",
    numero: "Fase 04",
    testo:
      "L'impresa sceglie con le informazioni in mano. Poi seguo i passaggi operativi fino alla consegna.",
  },
];
export default function HomePage() {
  return (
    <>
      {/* 1. Hero: posizionamento + ritratto del titolare.
          La foto panoramica (1584×672) è mostrata intera dentro una cornice,
          senza ritagli sul volto e senza testo sovrapposto. */}
      <section className="border-b border-grafite-800">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-lime-400">
            {site.etichetta}
          </p>
          <h1 className="mt-6 max-w-4xl text-4xl leading-[1.08] text-avorio-50 sm:text-5xl lg:text-6xl">
            Porto le imprese più vicine al mercato dell&apos;energia.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-grafite-200">
            Aggrego i fabbisogni delle imprese e li metto in relazione con i
            produttori, seguendo l&apos;approvvigionamento fino alla consegna.
            Per il gas opero sul PSV; seguo anche contratti, diagnosi ed
            efficienza energetica.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <CtaLink href="/contatti">Richiedi un primo confronto</CtaLink>
            <CtaLink href="/acquisto-aggregato" variante="contorno">
              Scopri l&apos;acquisto aggregato
            </CtaLink>
          </div>
          <figure className="mt-14 border border-grafite-700 bg-grafite-900 p-3 sm:p-4">
            <Image
              src="/darkvilla-hero.jpg"
              alt="Ritratto del consulente energetico"
              width={1584}
              height={672}
              priority
              sizes="100vw"
              className="h-auto w-full"
            />
            <figcaption className="flex flex-wrap items-baseline justify-between gap-2 px-1 pb-1 pt-3 text-xs uppercase tracking-[0.18em] text-grafite-300">
              <span>Il consulente</span>
              <span>{site.posizionamento}</span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* 2. Fascia di posizionamento, senza numeri inventati */}
      <Section variante="superficie" compatta>
        <dl className="grid gap-px overflow-hidden border border-grafite-800 sm:grid-cols-3">
          {posizionamento.map((voce) => (
            <div
              key={voce.titolo}
              className="border-b border-grafite-800 bg-grafite-900 p-6 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0"
            >
              <dt className="font-display text-xl text-avorio-50">
                {voce.titolo}
              </dt>
              <dd className="mt-2 text-sm text-grafite-300">{voce.dettaglio}</dd>
            </div>
          ))}
        </dl>
      </Section>
      {/* 3. Perché non basta guardare il prezzo unitario */}
      <Section>
        <SectionHeader
          etichetta="Il punto di partenza"
          titolo="Il prezzo unitario non racconta tutta la fornitura."
          introduzione="Guardare soltanto il prezzo al megawattora porta a confrontare offerte che non sono confrontabili. Per capire cosa si sta firmando servono quattro elementi letti insieme."
        />

        <div className="mt-12 grid gap-px overflow-hidden border border-grafite-700 md:grid-cols-2">
          {variabiliCosto.map((voce, indice) => (
            <div key={voce.titolo} className="bg-grafite-900 p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-grafite-300">
                {String(indice + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 text-xl text-avorio-50">{voce.titolo}</h3>
              <p className="mt-3 text-sm leading-relaxed text-grafite-200">
                {voce.testo}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-8 max-w-3xl text-sm leading-relaxed text-grafite-200">
          Non lavoro su promesse di risultato: lavoro sulla lettura corretta
          della fornitura, sul confronto tra alternative possibili e sulla
          chiarezza di quello che viene firmato.
        </p>
      </Section>

      {/* 4. Acquisto elettrico aggregato in quattro passaggi */}
      <Section variante="chiaro">
        <SectionHeader
          tono="chiaro"
          etichetta="Acquisto aggregato"
          titolo="Dai consumi reali a un acquisto trattato insieme."
          introduzione="Fabbisogni piccoli e separati difficilmente ottengono condizioni interessanti. Riuniti, diventano un perimetro che i produttori valutano."
        />

        <ol className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <li>
            <Card tono="chiaro" titolo="Analisi dei consumi" numero="Passaggio 01">
              Raccolta e lettura dei dati di consumo dei siti: volumi, profili
              orari, stagionalità e vincoli tecnici.
            </Card>
          </li>
          <li>
            <Card tono="chiaro" titolo="Aggregazione dei fabbisogni" numero="Passaggio 02">
              I consumi di più imprese vengono riuniti in un unico perimetro di
              acquisto, con regole chiare su volumi e durata.
            </Card>
          </li>
          <li>
            <Card tono="chiaro" titolo="Confronto e trattativa" numero="Passaggio 03">
              Confronto tra le proposte dei produttori e trattativa sulle
              condizioni, con attenzione alla struttura del contratto.
            </Card>
          </li>
          <li>
            <Card tono="chiaro" titolo="Passaggi di consegna" numero="Passaggio 04">
              Coordinamento delle attività necessarie perché l&apos;energia
              elettrica arrivi ai siti nei tempi previsti.
            </Card>
          </li>
        </ol>

        <div className="mt-10">
          <CtaLink href="/acquisto-aggregato" tono="chiaro">
            Come funziona l&apos;acquisto aggregato
          </CtaLink>
        </div>
      </Section>


      {/* 5. Gas al PSV */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_0.85fr]">
          <div>
            <SectionHeader
              etichetta="Gas"
              titolo="Approvvigionamento del gas con operatività sul PSV."
              introduzione="Per le imprese che consumano gas posso operare sul PSV per conto del cliente: il punto di scambio virtuale dove il gas viene negoziato prima di arrivare al contatore."
            />
            <ul className="mt-8 space-y-4 text-sm leading-relaxed text-grafite-200">
              <li className="border-l-2 border-verde-600 pl-4">
                La gestione sul PSV riguarda volume e tempi, con riferimento
                alle quotazioni di mercato.
              </li>
              <li className="border-l-2 border-verde-600 pl-4">
                Il risultato dipende dal profilo di consumo, dall&apos;orizzonte
                scelto e dalla situazione di mercato nel momento in cui si
                decide.
              </li>
              <li className="border-l-2 border-verde-600 pl-4">
                È un&apos;attività con una componente di rischio: va impostata
                insieme al cliente e in modo trasparente, non presentata come
                una garanzia di prezzo.
              </li>
            </ul>
            <div className="mt-8">
              <CtaLink href="/gas-psv" variante="contorno">
                Come viene impostato il servizio gas
              </CtaLink>
            </div>
          </div>

          <aside className="border border-grafite-700 bg-grafite-900 p-6 sm:p-8">
            <h3 className="text-lg text-avorio-50">Vocabolario essenziale</h3>
            <dl className="mt-5 space-y-4 text-sm leading-relaxed text-grafite-200">
              <div>
                <dt className="font-semibold text-avorio-100">PSV</dt>
                <dd>
                  Punto di scambio virtuale: il riferimento dove il gas viene
                  negoziato sul mercato all&apos;ingrosso italiano.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-avorio-100">
                  Profilo di consumo
                </dt>
                <dd>
                  Come il consumo si distribuisce nell&apos;anno e nelle ore,
                  non solo quanto è grande in totale.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-avorio-100">Consegna</dt>
                <dd>
                  L&apos;insieme dei passaggi tecnici e amministrativi che
                  rendono operativa la fornitura sui siti.
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </Section>

      {/* 6. Servizi alle imprese */}
      <Section variante="superficie">
        <SectionHeader
          etichetta="Aree di lavoro"
          titolo="Contrattualistica, diagnosi, efficienza."
        />
        <div className="mt-12 grid gap-px overflow-hidden border border-grafite-800 md:grid-cols-3">
          <div className="border-b border-grafite-800 bg-grafite-900 p-6 sm:p-8 md:border-b-0 md:border-r">
            <h3 className="text-xl text-avorio-50">Contrattualistica</h3>
            <p className="mt-3 text-sm leading-relaxed text-grafite-300">
              Analisi e gestione dei contratti di fornitura: struttura,
              clausole, durata, condizioni di uscita e coerenza con il profilo
              di consumo dei siti.
            </p>
          </div>
          <div className="border-b border-grafite-800 bg-grafite-900 p-6 sm:p-8 md:border-b-0 md:border-r">
            <h3 className="text-xl text-avorio-50">Diagnosi energetiche</h3>
            <p className="mt-3 text-sm leading-relaxed text-grafite-300">
              Lettura sistematica dei consumi e degli impianti, per capire dove
              si concentra l&apos;energia e quali interventi conviene valutare.
            </p>
          </div>
          <div className="bg-grafite-900 p-6 sm:p-8">
            <h3 className="text-xl text-avorio-50">Efficienza energetica</h3>
            <p className="mt-3 text-sm leading-relaxed text-grafite-300">
              Supporto sulle iniziative di efficienza: priorità, coerenza con
              l&apos;attività produttiva e verifica dei risultati nel tempo.
            </p>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <CtaLink href="/servizi">
            Vai ai servizi
          </CtaLink>
          <CtaLink href="/energia-come-servizio" variante="contorno">
            Energia come servizio (EaaS)
          </CtaLink>
        </div>
      </Section>

      {/* 6b. Energia come servizio (EaaS): inserto chiaro per spezzare la
          sequenza scura e segnalare un tema distinto, con pagina dedicata. */}
      <Section variante="chiaro" compatta>
        <SectionHeader
          tono="chiaro"
          etichetta="Energy as a Service"
          titolo="Quando l'offerta non è più solo un volume: i servizi dentro il contratto."
          introduzione="Nell'EaaS l'impresa non compra soltanto energia: compra consulenza, impianti, monitoraggio, in cambio di un canone o di una quota dei risparmi. Il modello è solido quando il contratto lo è: prima di firmare servono baseline documentata, perimetro esplicito e rischi assegnati."
        />
        <ul className="mt-8 space-y-4 text-sm leading-relaxed text-grafite-700">
          <li className="border-l-2 border-verde-700 pl-4">
            Tre strutture tipiche — abbonamento, contratto a prestazione,
            fornitura gestita — spostano rischi e pagamenti in modo diverso
            tra le parti.
          </li>
          <li className="border-l-2 border-verde-700 pl-4">
            Il valore dipende da quattro verifiche preliminari: baseline dei
            consumi, perimetro dei servizi, allocazione dei rischi, condizioni
            di uscita.
          </li>
          <li className="border-l-2 border-verde-700 pl-4">
            Il mio ruolo su questi percorsi è la parte di analisi e
            contrattualistica, non la vendita di impianti: gli interventi
            tecnici restano a chi li esegue.
          </li>
        </ul>
        <div className="mt-8">
          <CtaLink
            href="/energia-come-servizio"
            variante="contorno"
            tono="chiaro"
          >
            Che cosa è l&apos;energia come servizio
          </CtaLink>
        </div>
      </Section>

      {/* 7. Metodo di lavoro */}
      <Section variante="superficie">
        <SectionHeader
          etichetta="Metodo"
          titolo="Dati, analisi, opzioni, decisione."
          introduzione="Quattro fasi verificabili, senza scorciatoie: prima si raccolgono e si leggono i dati, poi si costruiscono le alternative, infine decide l'impresa."
        />

        <ol className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {metodo.map((fase) => (
            <li key={fase.titolo}>
              <Card titolo={fase.titolo} numero={fase.numero}>
                {fase.testo}
              </Card>
            </li>
          ))}
        </ol>
      </Section>

      {/* 8. Chiusura verso pagine reali */}
      <Section variante="chiaro" compatta>
        <Chiusura
          tono="chiaro"
          titolo="Da dove si parte, in pratica."
          testo="Se l'impresa acquista energia elettrica per più siti, il punto di partenza è l'acquisto aggregato. Se il consumo è prevalentemente gas, il punto di partenza è il PSV. Per ogni area di lavoro c'è una pagina con quello che comprende."
          primaria={{ href: "/contatti", etichetta: "Richiedi un primo confronto" }}
          secondari={[
            { href: "/acquisto-aggregato", etichetta: "Acquisto aggregato" },
            { href: "/gas-psv", etichetta: "Gas al PSV" },
            { href: "/energia-come-servizio", etichetta: "Energia come servizio" },
            { href: "/servizi", etichetta: "Servizi alle imprese" },
          ]}
        />
      </Section>
    </>
  );
}

