import Link from "next/link";
import { collegamentiFooter, site } from "@/lib/site";

/** Footer essenziale: posizionamento e collegamenti alle pagine reali. */
export function SiteFooter() {
  const anno = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-grafite-200 bg-grafite-950 text-grafite-200">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="font-display text-2xl text-avorio-50">
            {site.nome}
          </p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-grafite-300">
            Aggregazione dei fabbisogni, relazione con i produttori,
            contrattualistica, diagnosi ed efficienza energetica. Gas gestito
            sul PSV per conto dei clienti.
          </p>
          <p className="mt-6 text-xs uppercase tracking-[0.18em] text-grafite-300">
            {site.posizionamento}
          </p>
        </div>

        <nav aria-label="Collegamenti del footer">
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-grafite-300">
            Pagine
          </h2>
          <ul className="mt-4 space-y-2">
            {collegamentiFooter.map((voce) => (
              <li key={voce.href}>
                <Link
                  href={voce.href}
                  className="text-sm text-avorio-100 underline-offset-4 hover:text-lime-400 hover:underline"
                >
                  {voce.etichetta}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-grafite-800">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-xs text-grafite-300 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © {anno} {site.nome}. {site.posizionamento}.
          </p>
          <p>
            Sito informativo: recapiti, note legali e informativa privacy sono in
            fase di completamento.
          </p>
        </div>
      </div>
    </footer>
  );
}
