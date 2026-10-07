"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  marchio,
  menuPrincipale,
  percorsoContatti,
  recapiti,
  site,
} from "@/lib/site";

/** Classe del collegamento di navigazione, con stato attivo sulla pagina corrente. */
function classeVoce(percorso: string, attivo: boolean) {
  return [
    "flex min-h-[44px] items-center border-b-2 px-3 py-2 text-sm transition-colors",
    attivo
      ? "border-champagne-400 font-semibold text-avorio-50"
      : "border-transparent text-grafite-300 hover:border-champagne-400/60 hover:text-avorio-50",
  ].join(" ");
}

/**
 * Intestazione del sito con navigazione desktop e menu a comparsa su mobile.
 * È l'unico componente interattivo: serve al toggle del menu mobile e a
 * segnalare la pagina corrente nel menu (stato attivo).
 * La navigazione completa appare da `lg` in su: sotto quella soglia le sei
 * voci non entrano in una riga e si usa il menu a comparsa.
 */
export function SiteHeader() {
  const [menuAperto, setMenuAperto] = useState(false);
  const pathname = usePathname();
  const pulsanteRiferimento = useRef<HTMLButtonElement>(null);
  const menuRiferimento = useRef<HTMLElement>(null);

  /** Percorso normalizzato senza slash finale, per il confronto nel menu. */
  const percorsoCorrente =
    pathname !== "/" && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;

  // Menu aperto: blocco dello scorrimento della pagina, focus sulla prima
  // voce, chiusura con Escape (con ripristino del focus sul pulsante) e
  // contenimento del Tab dentro il pannello.
  useEffect(() => {
    if (!menuAperto) return;
    document.body.style.overflow = "hidden";
    menuRiferimento.current?.querySelector("a")?.focus();
    const suTasto = (evento: KeyboardEvent) => {
      if (evento.key === "Escape") {
        setMenuAperto(false);
        pulsanteRiferimento.current?.focus();
        return;
      }
      if (evento.key !== "Tab") return;
      const voci = Array.from(
        menuRiferimento.current?.querySelectorAll("a") ?? []
      );
      if (voci.length === 0) return;
      const prima = voci[0];
      const ultima = voci[voci.length - 1];
      if (evento.shiftKey && document.activeElement === prima) {
        evento.preventDefault();
        ultima.focus();
      } else if (!evento.shiftKey && document.activeElement === ultima) {
        evento.preventDefault();
        prima.focus();
      }
    };
    window.addEventListener("keydown", suTasto);
    return () => {
      window.removeEventListener("keydown", suTasto);
      document.body.style.overflow = "";
    };
  }, [menuAperto]);

  // Se la schermata torna desktop, il menu mobile non ha più ragione di restare aperto.
  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    const suCambio = (evento: MediaQueryListEvent) => {
      if (evento.matches) setMenuAperto(false);
    };
    media.addEventListener("change", suCambio);
    return () => media.removeEventListener("change", suCambio);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-grafite-800 bg-grafite-950/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-4 sm:gap-6 sm:px-8">
        {/*
          Lockup ibrido ufficiale in stile V5 (tavola docs/marchio-varianti.html):
          serif editoriale, descrittore in champagne. Niente quadrato (era lo
          stile V1) e niente maiuscoletto: la V5 è puramente tipografica, in
          linea con la direzione C-Level / Quiet Luxury.
        */}
        <Link
          href="/"
          className="group flex min-h-[44px] items-center whitespace-nowrap font-display text-base text-avorio-50 sm:text-xl"
          aria-label="Torna alla home"
        >
          <span>
            {marchio.nome}{" "}
            <span aria-hidden="true" className="text-grafite-300">
              ·
            </span>{" "}
            <span className="text-champagne-400 transition-colors group-hover:text-champagne-300">
              {marchio.descrittore}
            </span>
          </span>
        </Link>

        <nav aria-label="Navigazione principale" className="hidden lg:block">
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
                    ? "ml-2 flex min-h-[44px] items-center bg-champagne-400 px-4 py-2 text-sm font-medium text-grafite-950 transition-colors hover:bg-champagne-300"
                    : "ml-2 flex min-h-[44px] items-center border border-grafite-700 px-4 py-2 text-sm font-medium text-avorio-50 transition-colors hover:border-champagne-400 hover:text-champagne-400"
                }
              >
                Contatti
              </Link>
            </li>
            {recapiti.email ? (
              <li>
                <a
                  href={`mailto:${recapiti.email}`}
                  className="ml-2 hidden min-h-[44px] items-center border border-grafite-700 px-4 py-2 text-sm font-medium text-avorio-50 transition-colors hover:border-champagne-400 hover:text-champagne-400 xl:flex"
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
          className="flex min-h-[44px] shrink-0 items-center gap-2 border border-grafite-700 px-3 py-2 text-xs font-medium uppercase tracking-[0.12em] text-avorio-50 lg:hidden"
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
          ref={menuRiferimento}
          id="menu-mobile"
          aria-label="Navigazione principale"
          className="border-t border-grafite-800 bg-grafite-950 lg:hidden"
        >
          <ul className="mx-auto max-w-6xl divide-y divide-grafite-800 px-5 sm:px-8">
            <li>
              <Link
                href="/"
                onClick={() => setMenuAperto(false)}
                className={
                  percorsoCorrente === "/"
                    ? "flex min-h-[44px] items-center border-l-2 border-champagne-400 py-3 pl-3 text-sm font-semibold text-avorio-50"
                    : "flex min-h-[44px] items-center border-l-2 border-transparent py-3 pl-3 text-sm text-grafite-300"
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
                      ? "flex min-h-[44px] items-center border-l-2 border-champagne-400 py-3 pl-3 text-sm font-semibold text-avorio-50"
                      : "flex min-h-[44px] items-center border-l-2 border-transparent py-3 pl-3 text-sm text-grafite-300"
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
                    ? "flex min-h-[44px] items-center border-l-2 border-champagne-400 py-3 pl-3 text-sm font-semibold text-avorio-50"
                    : "flex min-h-[44px] items-center border-l-2 border-transparent py-3 pl-3 text-sm text-grafite-300"
                }
                aria-current={
                  percorsoCorrente === percorsoContatti ? "page" : undefined
                }
              >
                Contatti
              </Link>
            </li>
          </ul>
          <p className="mx-auto max-w-6xl px-5 pb-4 pt-3 text-xs uppercase tracking-[0.12em] text-grafite-300 sm:px-8">
            {site.posizionamento}
          </p>
        </nav>
      ) : null}
    </header>
  );
}
