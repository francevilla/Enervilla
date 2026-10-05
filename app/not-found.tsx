import Link from "next/link";
import { CtaLink } from "@/components/cta-link";
import { Section, SectionHeader } from "@/components/section";
import { collegamentiFooter } from "@/lib/site";

/**
 * Pagina per gli indirizzi non esistenti.
 * Next.js la serve con codice 404 e aggiunge da sé "noindex".
 */
export default function NotFound() {
  return (
    <Section>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-lime-400">
        Errore 404
      </p>
      <SectionHeader
        titolo="Questa pagina non esiste."
        introduzione="L'indirizzo richiesto non corrisponde a nessuna pagina del sito. Può capitare se il collegamento è vecchio o se c'è un errore di battitura."
      />

      <div className="mt-10">
        <CtaLink href="/">Torna alla pagina iniziale</CtaLink>
      </div>

      <nav aria-label="Pagine del sito" className="mt-14 border-t border-grafite-700 pt-8">
        <h2 className="text-lg text-avorio-50">Pagine disponibili</h2>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {collegamentiFooter.map((voce) => (
            <li key={voce.href}>
              <Link
                href={voce.href}
                className="block border border-grafite-700 bg-grafite-900 px-4 py-3 text-sm text-grafite-200 transition-colors hover:border-lime-400 hover:text-avorio-50"
              >
                {voce.etichetta}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </Section>
  );
}