import Link from "next/link";
import type { ReactNode } from "react";

type CtaLinkProps = {
  href: string;
  children: ReactNode;
  variante?: "solida" | "contorno";
  /** Versione su fondo scuro. */
  suFondoScuro?: boolean;
};

/**
 * Pulsante-collegamento verso una pagina reale del sito.
 * Regola di gerarchia: la variante "solida" è sempre la CTA primaria della
 * schermata (su fondi chiari: verde profondo; su fondi scuri: lime).
 * La variante "contorno" segnala azioni secondarie e non compete con la primaria.
 */
export function CtaLink({
  href,
  children,
  variante = "solida",
  suFondoScuro = false,
}: CtaLinkProps) {
  const base =
    "inline-flex items-center gap-3 px-5 py-3 text-sm font-medium transition-colors";

  const stile =
    variante === "solida"
      ? suFondoScuro
        ? "bg-lime-400 text-grafite-950 hover:bg-verde-300"
        : "bg-verde-800 text-avorio-50 hover:bg-verde-900"
      : suFondoScuro
        ? "border border-grafite-700 text-avorio-50 hover:border-lime-400 hover:text-lime-400"
        : "border border-grafite-300 text-grafite-900 hover:border-verde-700 hover:text-verde-900";

  return (
    <Link href={href} className={`${base} ${stile}`}>
      <span>{children}</span>
      <span aria-hidden="true">→</span>
    </Link>
  );
}
