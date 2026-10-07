import type { Metadata } from "next";
import Link from "next/link";
import { CtaLink } from "@/components/cta-link";
import { LeadCaptureForm } from "@/components/lead-capture-form";
import { PageHero, Section, SectionHeader } from "@/components/section";
import { getLeadCaptureConfig } from "@/lib/lead-config";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Primo confronto",
  description:
    "Racconta il profilo della tua impresa, i siti coinvolti, i consumi indicativi e la decisione energetica da prendere. Una richiesta strutturata per un primo inquadramento.",
  alternates: {
    canonical: "/contatti",
  },
};

const passaggiDopoInvio = [
  {
    numero: "01 / PERIMETRO",
    titolo: "Il contesto viene letto insieme alla richiesta.",
    testo:
      "Ruolo, azienda, siti, ambito e orizzonte aiutano a capire quali informazioni sono già disponibili e quali mancano.",
  },
  {
    numero: "02 / INQUADRAMENTO",
    titolo: "Nessuna offerta automatica.",
    testo:
      "Il modulo non calcola prezzi o risparmi: serve a orientare il primo confronto sui temi pertinenti per l'impresa.",
  },
  {
    numero: "03 / DOCUMENTI",
    titolo: "I file si condividono in un secondo momento.",
    testo:
      "Non caricare bollette, contratti, POD o PDR. Se necessari, i documenti verranno richiesti attraverso un canale concordato.",
  },
];

const pagineServizio = [
  { href: "/acquisto-aggregato", etichetta: "Acquisto elettrico aggregato" },
  { href: "/gas-psv", etichetta: "Gas al PSV" },
  { href: "/servizi", etichetta: "Contratti ed efficienza" },
  { href: "/energia-come-servizio", etichetta: "Energia come servizio" },
];

export default function ContattiPage() {
  const configurazioneLead = getLeadCaptureConfig();

  return (
    <>
      <PageHero
        etichetta="Richiesta · Primo inquadramento"
        titolo="Un confronto utile parte dal profilo dell'impresa."
        introduzione="Indica chi sei, quanti siti sono coinvolti, quali temi vuoi affrontare e in che tempi. Le fasce di consumo sono indicative: bastano i dati che hai già, senza allegare documenti o condividere informazioni riservate."
      >
        <CtaLink href="#richiesta">Compila il profilo aziendale</CtaLink>
      </PageHero>

      <Section id="richiesta" variante="superficie">
        <div className="grid gap-10 xl:grid-cols-[0.76fr_1.24fr] xl:items-start xl:gap-14">
          <div className="xl:sticky xl:top-32">
            <p className="technical-label text-[0.66rem] uppercase text-champagne-400">
              Richiesta strutturata / B2B
            </p>
            <h2 className="mt-5 max-w-xl text-4xl leading-[1.08] text-avorio-50 sm:text-5xl">
              Poche informazioni, quelle che orientano.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-grafite-200">
              Le risposte servono a capire se il tema è approvvigionamento,
              rischio contrattuale o performance energetica e quale perimetro
              considerare nel primo scambio.
            </p>
            <ol className="lead-context__steps">
              <li>
                <span>01</span>
                <div>
                  <h3>Profilo</h3>
                  <p>Ruolo, settore e numero di siti coinvolti.</p>
                </div>
              </li>
              <li>
                <span>02</span>
                <div>
                  <h3>Priorità</h3>
                  <p>Area di interesse, fasce energetiche indicative e tempistica.</p>
                </div>
              </li>
              <li>
                <span>03</span>
                <div>
                  <h3>Primo inquadramento</h3>
                  <p>Nessun calcolo automatico, promessa di risparmio o richiesta di allegati.</p>
                </div>
              </li>
            </ol>
            <p className="mt-7 max-w-xl border-l border-champagne-400/70 pl-4 text-sm leading-relaxed text-grafite-300">
              Le fasce di consumo non sono soglie di accesso. Se non conosci un
              dato, puoi lasciarlo non indicato; il form non richiede POD, PDR
              o documenti di fornitura.
            </p>
          </div>

          <LeadCaptureForm
            attiva={configurazioneLead.attiva}
            privacyUrl={configurazioneLead.privacyUrl}
            accessKey={configurazioneLead.accessKey}
            idPrefix="contatti-lead"
          />
        </div>
      </Section>

      <Section id="dopo-invio">
        <SectionHeader
          etichetta="Dopo l'invio"
          titolo="La richiesta diventa un punto di partenza, non un'offerta al buio."
          introduzione="Le informazioni raccolte sono essenziali per circoscrivere la domanda. Ogni analisi successiva dipende da dati e condizioni effettivamente disponibili."
        />

        <ol className="mt-10 grid gap-px overflow-hidden border border-grafite-700 md:grid-cols-3">
          {passaggiDopoInvio.map((passaggio) => (
            <li className="bg-grafite-900 p-6 sm:p-7" key={passaggio.numero}>
              <p className="technical-label text-[0.63rem] text-champagne-400">
                {passaggio.numero}
              </p>
              <h3 className="mt-4 text-xl text-avorio-50">
                {passaggio.titolo}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-grafite-200">
                {passaggio.testo}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      <Section variante="chiaro" compatta>
        <SectionHeader
          tono="chiaro"
          etichetta="Approfondimenti"
          titolo="Vuoi chiarire il perimetro prima di inviare la richiesta?"
          introduzione="Consulta l'area più vicina alla decisione che stai valutando."
        />
        <nav aria-label="Approfondimenti sui servizi" className="mt-7">
          <ul className="grid gap-3 sm:grid-cols-2">
            {pagineServizio.map((pagina) => (
              <li key={pagina.href}>
                <Link
                  className="flex min-h-[52px] items-center justify-between gap-4 border border-grafite-500 bg-avorio-50 px-4 py-3 text-sm font-medium text-grafite-900 transition-colors hover:border-verde-800 hover:text-verde-800"
                  href={pagina.href}
                >
                  {pagina.etichetta}
                  <span aria-hidden="true">↗</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Section>
    </>
  );
}
