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
 * Regola di gerarchia (tema "DarkVilla"): la variante "solida" è sempre la
 * CTA primaria della schermata — lime brillante su fondo scuro; avorio su
 * fascia chiara. La variante "contorno" segnala azioni secondarie e non
 * compete con la primaria.
 */
export function CtaLink({
  href,
  children,
  variante = "solida",
  suFondoScuro = false,
}: CtaLinkProps) {
  const base =
    "inline-flex items-center gap-3 px-5 py-3 text-sm font-medium transition-colors";

  // suFondoScuro è mantenuto per retro-compatibilità: nel tema attuale
  // il default è già pensato per i fondi scuri.
  void suFondoScuro;

  const stile =
    variante === "solida"
      ? "bg-lime-400 text-grafite-950 hover:bg-verde-300"
      : "border border-grafite-700 text-avorio-50 hover:border-lime-400 hover:text-lime-400";

  return (
    <Link href={href} className={`${base} ${stile}`}>
      <span>{children}</span>
      <span aria-hidden="true">→</span>
    </Link>
  );
}
