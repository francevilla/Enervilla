"use client";

import Link from "next/link";
import { useState } from "react";
import { menuPrincipale, site } from "@/lib/site";

/**
 * Intestazione del sito con navigazione desktop e menu a comparsa su mobile.
 * È l'unico componente interattivo: serve solo ad aprire e chiudere il menu
 * quando lo schermo è piccolo.
 */
export function SiteHeader() {
  const [menuAperto, setMenuAperto] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-grafite-200 bg-avorio-50/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4 sm:px-8">
        <Link
          href="/"
          className="group flex items-baseline gap-2 text-grafite-950"
          aria-label="Torna alla home"
        >
          <span className="block h-3 w-3 translate-y-[-1px] bg-verde-800 transition-colors group-hover:bg-lime-400" />
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
                  className="block border-b-2 border-transparent px-3 py-2 text-sm text-grafite-800 transition-colors hover:border-verde-700 hover:text-grafite-950"
                >
                  {voce.etichetta}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          onClick={() => setMenuAperto((aperto) => !aperto)}
          aria-expanded={menuAperto}
          aria-controls="menu-mobile"
          className="flex items-center gap-2 border border-grafite-300 px-3 py-2 text-xs font-medium uppercase tracking-[0.12em] text-grafite-900 md:hidden"
        >
          <span aria-hidden="true" className="flex flex-col gap-[3px]">
            <span className="block h-px w-4 bg-grafite-900" />
            <span className="block h-px w-4 bg-grafite-900" />
            <span className="block h-px w-4 bg-grafite-900" />
          </span>
          {menuAperto ? "Chiudi" : "Menu"}
        </button>
      </div>

      {menuAperto ? (
        <nav
          id="menu-mobile"
          aria-label="Navigazione principale"
          className="border-t border-grafite-200 bg-avorio-100 md:hidden"
        >
          <ul className="mx-auto max-w-6xl divide-y divide-grafite-200 px-5 sm:px-8">
            <li>
              <Link
                href="/"
                onClick={() => setMenuAperto(false)}
                className="block py-3 text-sm text-grafite-800"
              >
                Home
              </Link>
            </li>
            {menuPrincipale.map((voce) => (
              <li key={voce.href}>
                <Link
                  href={voce.href}
                  onClick={() => setMenuAperto(false)}
                  className="block py-3 text-sm text-grafite-800"
                >
                  {voce.etichetta}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mx-auto max-w-6xl px-5 pb-4 pt-3 text-xs uppercase tracking-[0.12em] text-grafite-500 sm:px-8">
            {site.posizionamento}
          </p>
        </nav>
      ) : null}
    </header>
  );
}
