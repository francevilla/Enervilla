"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { menuPrincipale, percorsoContatti, recapiti, site } from "@/lib/site";

/** Classe del collegamento di navigazione, con stato attivo sulla pagina corrente. */
function classeVoce(percorso: string, attivo: boolean) {
  return [
    "block border-b-2 px-3 py-2 text-sm transition-colors",
    attivo
      ? "border-lime-400 font-semibold text-avorio-50"
      : "border-transparent text-grafite-300 hover:border-lime-400/60 hover:text-avorio-50",
  ].join(" ");
}

/**
 * Intestazione del sito con navigazione desktop e menu a comparsa su mobile.
 * È l'unico componente interattivo: serve al toggle del menu mobile e a
 * segnalare la pagina corrente nel menu (stato attivo).
 */
export function SiteHeader() {
  const [menuAperto, setMenuAperto] = useState(false);
  const pathname = usePathname();
  const pulsanteRiferimento = useRef<HTMLButtonElement>(null);

  /** Percorso normalizzato senza slash finale, per il confronto nel menu. */
  const percorsoCorrente =
    pathname !== "/" && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;

  // Chiusura del menu con il tasto Escape, riattivando il pulsante del menu.
  useEffect(() => {
    if (!menuAperto) return;
    const suEscape = (evento: KeyboardEvent) => {
      if (evento.key === "Escape") {
        setMenuAperto(false);
        pulsanteRiferimento.current?.focus();
      }
    };
    window.addEventListener("keydown", suEscape);
    return () => window.removeEventListener("keydown", suEscape);
  }, [menuAperto]);

  // Se la schermata torna desktop, il menu mobile non ha più ragione di restare aperto.
  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    const suCambio = (evento: MediaQueryListEvent) => {
      if (evento.matches) setMenuAperto(false);
    };
    media.addEventListener("change", suCambio);
    return () => media.removeEventListener("change", suCambio);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-grafite-800 bg-grafite-950/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4 sm:px-8">
        <Link
          href="/"
          className="group flex items-baseline gap-2 text-avorio-50"
          aria-label="Torna alla home"
        >
          <span className="block h-3 w-3 translate-y-[-1px] bg-lime-400 transition-colors group-hover:bg-verde-300" />
          <span className="text-sm font-semibold uppercase tracking-[0.16em]">
            Energia
          </span>
          <span className="hidden text-sm uppercase tracking-[0.16em] text-grafite-500 sm:inline">
            per imprese
          </span>
        </Link>

        <nav aria-label="Navigazione principale" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {menuPrincipale.map((voce) => (
              <li key={voce.href}>
                <Link
                  href={voce.href}
                  aria-current={
                    percorsoCorrente === voce.href ? "page" : undefined
                  }
                  className={classeVoce(
                    voce.href,
                    percorsoCorrente === voce.href
                  )}
                >
                  {voce.etichetta}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href={percorsoContatti}
                aria-current={
                  percorsoCorrente === percorsoContatti ? "page" : undefined
                }
                className={
                  percorsoCorrente === percorsoContatti
                    ? "ml-2 bg-lime-400 px-4 py-2 text-sm font-medium text-grafite-950 transition-colors hover:bg-verde-300"
                    : "ml-2 border border-grafite-700 px-4 py-2 text-sm font-medium text-avorio-50 transition-colors hover:border-lime-400 hover:text-lime-400"
                }
              >
                Contatti
              </Link>
            </li>
            {recapiti.email ? (
              <li>
                <a
                  href={`mailto:${recapiti.email}`}
                  className="ml-2 hidden border border-grafite-700 px-4 py-2 text-sm font-medium text-avorio-50 transition-colors hover:border-lime-400 hover:text-lime-400 lg:inline-block"
                >
                  {recapiti.email}
                </a>
              </li>
            ) : null}
          </ul>
        </nav>

        <button
          ref={pulsanteRiferimento}
          type="button"
          onClick={() => setMenuAperto((aperto) => !aperto)}
          aria-expanded={menuAperto}
          aria-controls="menu-mobile"
          className="flex items-center gap-2 border border-grafite-700 px-3 py-2 text-xs font-medium uppercase tracking-[0.12em] text-avorio-50 md:hidden"
        >
          <span aria-hidden="true" className="flex flex-col gap-[3px]">
            <span className="block h-px w-4 bg-avorio-50" />
            <span className="block h-px w-4 bg-avorio-50" />
            <span className="block h-px w-4 bg-avorio-50" />
          </span>
          {menuAperto ? "Chiudi" : "Menu"}
        </button>
      </div>

      {menuAperto ? (
        <nav
          id="menu-mobile"
          aria-label="Navigazione principale"
          className="border-t border-grafite-800 bg-grafite-950 md:hidden"
        >
          <ul className="mx-auto max-w-6xl divide-y divide-grafite-800 px-5 sm:px-8">
            <li>
              <Link
                href="/"
                onClick={() => setMenuAperto(false)}
                className={
                  percorsoCorrente === "/"
                    ? "block border-l-2 border-lime-400 py-3 pl-3 text-sm font-semibold text-avorio-50"
                    : "block border-l-2 border-transparent py-3 pl-3 text-sm text-grafite-300"
                }
                aria-current={percorsoCorrente === "/" ? "page" : undefined}
              >
                Home
              </Link>
            </li>
            {menuPrincipale.map((voce) => (
              <li key={voce.href}>
                <Link
                  href={voce.href}
                  onClick={() => setMenuAperto(false)}
                  className={
                    percorsoCorrente === voce.href
                      ? "block border-l-2 border-lime-400 py-3 pl-3 text-sm font-semibold text-avorio-50"
                      : "block border-l-2 border-transparent py-3 pl-3 text-sm text-grafite-300"
                  }
                  aria-current={
                    percorsoCorrente === voce.href ? "page" : undefined
                  }
                >
                  {voce.etichetta}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href={percorsoContatti}
                onClick={() => setMenuAperto(false)}
                className={
                  percorsoCorrente === percorsoContatti
                    ? "block border-l-2 border-lime-400 py-3 pl-3 text-sm font-semibold text-avorio-50"
                    : "block border-l-2 border-transparent py-3 pl-3 text-sm text-grafite-300"
                }
                aria-current={
                  percorsoCorrente === percorsoContatti ? "page" : undefined
                }
              >
                Contatti
              </Link>
            </li>
          </ul>
          <p className="mx-auto max-w-6xl px-5 pb-4 pt-3 text-xs uppercase tracking-[0.12em] text-grafite-500 sm:px-8">
            {site.posizionamento}
          </p>
        </nav>
      ) : null}
    </header>
  );
}
