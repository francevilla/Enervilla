import Link from "next/link";
import {
  collegamentiFooter,
  marchio,
  percorsoContatti,
  recapiti,
  site,
} from "@/lib/site";
import { getLeadPrivacyPolicyUrl } from "@/lib/lead-config";

/** Footer essenziale: posizionamento e collegamenti alle pagine reali. */
export function SiteFooter() {
  const anno = new Date().getFullYear();
  const privacyUrl = getLeadPrivacyPolicyUrl();

  return (
    <footer className="mt-24 border-t border-grafite-800 bg-grafite-950 text-grafite-200">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="font-display text-2xl text-avorio-50">
            {marchio.nome}{" "}
            <span className="text-grafite-300">· {marchio.descrittore}</span>
          </p>
          <p className="mt-2 text-xs uppercase tracking-[0.18em] text-grafite-300">
            {marchio.payoff}
          </p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-grafite-300">
            Aggregazione dei fabbisogni, relazione con i produttori,
            contrattualistica, diagnosi ed efficienza energetica. Gas gestito
            sul PSV per conto dei clienti.
          </p>
          <p className="mt-6 text-xs uppercase tracking-[0.18em] text-grafite-300">
            {site.posizionamento}
          </p>
          {recapiti.email ? (
            <p className="mt-4 text-sm">
              <a
                href={`mailto:${recapiti.email}`}
                className="text-avorio-100 underline-offset-4 hover:text-champagne-400 hover:underline"
              >
                {recapiti.email}
              </a>
            </p>
          ) : null}
          {recapiti.telefono ? (
            <p className="mt-2 text-sm">
              <a
                href={`tel:${recapiti.telefono.replace(/[^+\d]/g, "")}`}
                className="text-avorio-100 underline-offset-4 hover:text-champagne-400 hover:underline"
              >
                {recapiti.telefono}
              </a>
            </p>
          ) : null}
          {recapiti.linkedin ? (
            <p className="mt-2 text-sm">
              <a
                href={recapiti.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-avorio-100 underline-offset-4 hover:text-champagne-400 hover:underline"
              >
                LinkedIn
              </a>
            </p>
          ) : null}
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
                  className={
                    voce.href === percorsoContatti
                      ? "text-sm font-semibold text-avorio-50 underline-offset-4 hover:text-champagne-400 hover:underline"
                      : "text-sm text-avorio-100 underline-offset-4 hover:text-champagne-400 hover:underline"
                  }
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
            © {anno} {marchio.lockup}. {site.posizionamento}.
          </p>
          <p className="flex flex-wrap gap-x-2 gap-y-1">
            {privacyUrl ? (
              <a
                href={privacyUrl}
                className="underline underline-offset-4 hover:text-champagne-400"
              >
                Informativa privacy
              </a>
            ) : (
              <span>Informativa privacy da configurare</span>
            )}
            <span aria-hidden="true">·</span>
            <span>Riferimenti legali da completare prima della pubblicazione.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
