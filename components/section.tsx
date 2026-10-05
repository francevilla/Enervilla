import Link from "next/link";
import type { ReactNode } from "react";

type PageHeroProps = {
  etichetta: string;
  titolo: string;
  introduzione: string;
  children?: ReactNode;
};

/** Intestazione delle pagine interne: eredita il fondo scuro della pagina,
 *  con bordo superiore che separa dall'header (tema "DarkVilla"). */
export function PageHero({
  etichetta,
  titolo,
  introduzione,
  children,
}: PageHeroProps) {
  return (
    <section className="border-b border-grafite-800">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
        {/* Orientamento: sempre una via d'uscita verso la home. */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-grafite-500 transition-colors hover:text-lime-400"
        >
          <span aria-hidden="true">←</span> Home
        </Link>
        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-lime-400">
          {etichetta}
        </p>
        <h1 className="mt-5 max-w-4xl text-4xl leading-[1.1] text-avorio-50 sm:text-5xl">
          {titolo}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-grafite-200">
          {introduzione}
        </p>
        {children ? <div className="mt-9">{children}</div> : null}
      </div>
    </section>
  );
}

type SectionProps = {
  id?: string;
  /** Sfondo della fascia: scuro (predefinito), avorio o superficie elevata. */
  variante?: "scuro" | "chiaro" | "superficie";
  children: ReactNode;
  /** Riduce lo spazio verticale quando le sezioni sono consecutive. */
  compatta?: boolean;
};

const sfondi: Record<NonNullable<SectionProps["variante"]>, string> = {
  scuro: "bg-transparent text-grafite-200",
  chiaro: "fascia-chiara bg-avorio-50 text-grafite-700",
  superficie: "bg-grafite-900 text-grafite-200",
};

/** Fascia di pagina con larghezza contenuta e ritmo verticale costante.
 *  Tema "DarkVilla": il default è scuro (sfondo della pagina); le varianti
 *  chiare sono eccezioni volute per creare contrasto a blocchi pieni. */
export function Section({
  id,
  variante = "scuro",
  compatta = false,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={[
        sfondi[variante],
        compatta ? "py-12 sm:py-16" : "py-16 sm:py-24",
      ].join(" ")}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">{children}</div>
    </section>
  );
}

type SectionHeaderProps = {
  etichetta?: string;
  titolo: string;
  introduzione?: string;
  /** Tema "DarkVilla": il default è su fondo scuro (titolo avorio, etichetta
   *  lime). Passare tono="chiaro" solo dentro le fasce sopravvissute chiare,
   *  dove valgono i colori del tema originale avorio/grafite. */
  tono?: "scuro" | "chiaro";
};

export function SectionHeader({
  etichetta,
  titolo,
  introduzione,
  tono = "scuro",
}: SectionHeaderProps) {
  const suChiaro = tono === "chiaro";

  return (
    <div className="max-w-3xl">
      {etichetta ? (
        <p
          className={[
            "text-xs font-semibold uppercase tracking-[0.2em]",
            suChiaro ? "text-verde-800" : "text-lime-400",
          ].join(" ")}
        >
          {etichetta}
        </p>
      ) : null}
      <h2
        className={[
          "mt-3 text-3xl leading-tight sm:text-4xl",
          suChiaro ? "" : "text-avorio-50",
        ]
          .join(" ")
          .trim()}
      >
        {titolo}
      </h2>
      {introduzione ? (
        <p
          className={[
            "mt-5 text-base leading-relaxed sm:text-lg",
            suChiaro ? "text-grafite-700" : "text-grafite-200",
          ].join(" ")}
        >
          {introduzione}
        </p>
      ) : null}
    </div>
  );
}

type CardProps = {
  titolo: string;
  children: ReactNode;
  /** Mostra il numero in alto, usato negli elenchi numerati. */
  numero?: string;
};

type CardTono = "scuro" | "chiaro";

const cardNumeri: Record<CardTono, string> = {
  scuro: "text-grafite-500",
  chiaro: "text-grafite-500",
};
const cardTitoli: Record<CardTono, string> = {
  scuro: "text-avorio-50",
  chiaro: "text-grafite-900",
};
const cardTesti: Record<CardTono, string> = {
  scuro: "text-grafite-200",
  chiaro: "text-grafite-700",
};

/** Riquadro sobrio: bordo sottile su superficie elevata, nessuna ombra.
 *  tono="chiaro" per l'uso dentro le fasce sopravvissute avorio del tema. */
export function Card({
  titolo,
  numero,
  tono = "scuro",
  children,
}: CardProps & { tono?: CardTono }) {
  return (
    <div
      className={
        tono === "chiaro"
          ? "border border-grafite-200 bg-avorio-50 p-6"
          : "border border-grafite-700 bg-grafite-900 p-6"
      }
    >
      {numero ? (
        <p
          className={`text-xs font-semibold uppercase tracking-[0.2em] ${cardNumeri[tono]}`}
        >
          {numero}
        </p>
      ) : null}
      <h3 className={`mt-2 text-xl ${cardTitoli[tono]}`}>{titolo}</h3>
      <p className={`mt-3 text-sm leading-relaxed ${cardTesti[tono]}`}>
        {children}
      </p>
    </div>
  );
}

type PassiVerticaliProps = {
  /** Titolo accessibile dell'elenco (per lettori schermici). */
  etichetta: string;
  passi: { titolo: string; testo: string }[];
};

/**
 * Guida verticale per le pagine lunghe: linea continua con tacche numerate.
 * Dispositivo di orientamento richiesto dal piano di design (dà senso di
 * progresso e struttura nelle sezioni "come funziona").
 * tono="chiaro" per l'uso dentro le fasce sopravvissute avorio del tema.
 */
export function PassiVerticali({
  etichetta,
  passi,
  tono = "scuro",
}: PassiVerticaliProps & { tono?: CardTono }) {
  const suChiaro = tono === "chiaro";
  return (
    <ol className="mt-10" aria-label={etichetta}>
      {passi.map((passo, indice) => (
        <li
          key={passo.titolo}
          className={`relative border-l pb-8 pl-6 last:pb-0 sm:pl-8 ${
            suChiaro ? "border-grafite-200" : "border-grafite-700"
          }`}
        >
          <span
            aria-hidden="true"
            className={`absolute left-[-9px] top-0 flex h-[18px] w-[18px] items-center justify-center rounded-full border text-[0.6rem] font-semibold ${
              suChiaro
                ? "border-verde-700 bg-avorio-50 text-verde-800"
                : "border-verde-600 bg-grafite-900 text-verde-300"
            }`}
          >
            {String(indice + 1).padStart(2, "0")}
          </span>
          <h3 className={`text-lg ${suChiaro ? "text-grafite-900" : "text-avorio-50"}`}>
            {passo.titolo}
          </h3>
          <p
            className={`mt-2 max-w-2xl text-sm leading-relaxed ${
              suChiaro ? "text-grafite-700" : "text-grafite-200"
            }`}
          >
            {passo.testo}
          </p>
        </li>
      ))}
    </ol>
  );
}
