import type { ReactNode } from "react";

type PageHeroProps = {
  etichetta: string;
  titolo: string;
  introduzione: string;
  children?: ReactNode;
};

/** Intestazione delle pagine interne: stessa gerarchia visiva della home. */
export function PageHero({
  etichetta,
  titolo,
  introduzione,
  children,
}: PageHeroProps) {
  return (
    <section className="border-b border-grafite-200 bg-avorio-50">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-verde-800">
          {etichetta}
        </p>
        <h1 className="mt-5 max-w-4xl text-4xl leading-[1.1] sm:text-5xl">
          {titolo}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-grafite-700">
          {introduzione}
        </p>
        {children ? <div className="mt-9">{children}</div> : null}
      </div>
    </section>
  );
}

type SectionProps = {
  id?: string;
  /** Sfondo della fascia: avorio (predefinito), grafite o verde tenue. */
  variante?: "chiaro" | "scuro" | "verde";
  children: ReactNode;
  /** Riduce lo spazio verticale quando le sezioni sono consecutive. */
  compatta?: boolean;
};

const sfondi: Record<NonNullable<SectionProps["variante"]>, string> = {
  chiaro: "bg-avorio-50",
  scuro: "bg-grafite-950 text-grafite-200",
  verde: "bg-verde-100",
};

/** Fascia di pagina con larghezza contenuta e ritmo verticale costante. */
export function Section({
  id,
  variante = "chiaro",
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
  /** Su sfondo scuro i colori dei testi cambiano per restare leggibili. */
  tono?: "chiaro" | "scuro";
};

export function SectionHeader({
  etichetta,
  titolo,
  introduzione,
  tono = "chiaro",
}: SectionHeaderProps) {
  const scuro = tono === "scuro";

  return (
    <div className="max-w-3xl">
      {etichetta ? (
        <p
          className={[
            "text-xs font-semibold uppercase tracking-[0.2em]",
            scuro ? "text-lime-400" : "text-verde-800",
          ].join(" ")}
        >
          {etichetta}
        </p>
      ) : null}
      <h2
        className={[
          "mt-3 text-3xl leading-tight sm:text-4xl",
          scuro ? "text-avorio-50" : "",
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
            scuro ? "text-grafite-200" : "text-grafite-700",
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

/** Riquadro sobrio: bordo sottile, nessuna ombra. */
export function Card({ titolo, numero, children }: CardProps) {
  return (
    <div className="border border-grafite-200 bg-avorio-50 p-6">
      {numero ? (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-grafite-500">
          {numero}
        </p>
      ) : null}
      <h3 className="mt-2 text-xl">{titolo}</h3>
      <p className="mt-3 text-sm leading-relaxed text-grafite-700">
        {children}
      </p>
    </div>
  );
}
