import Link from "next/link";
import type { ReactNode } from "react";

type CtaLinkProps = {
  href: string;
  children: ReactNode;
  variante?: "solida" | "contorno";
  /**
   * Tono del fondo che ospita la CTA: "scuro" (default) sui fondi grafite,
   * "chiaro" dentro le fasce avorio. Ogni combinazione è verificata per
   * contrasto WCAG AA (vedi docs/design-plan.md §6): testo grafite-950 su
   * lime-400 (13,6:1), avorio-50 su verde-800 (9,6:1), grafite-900 su
   * avorio-50 (15,2:1).
   */
  tono?: "scuro" | "chiaro";
};

const stili = {
  solida: {
    scuro: "bg-lime-400 text-grafite-950 hover:bg-verde-300",
    chiaro: "bg-verde-800 text-avorio-50 hover:bg-verde-700",
  },
  contorno: {
    scuro:
      "border border-grafite-700 text-avorio-50 hover:border-lime-400 hover:text-lime-400",
    chiaro:
      "border border-grafite-500 text-grafite-900 hover:border-verde-800 hover:text-verde-800",
  },
} as const;

/**
 * Pulsante-collegamento verso una pagina reale del sito.
 * Regola di gerarchia: la variante "solida" è sempre l'unica CTA primaria
 * della schermata — lime brillante su fondo scuro, verde-800 pieno su fascia
 * chiara. La variante "contorno" segnala azioni secondarie e non compete
 * con la primaria. Nelle chiusure di pagina preferire il componente
 * Chiusura (una primaria + link testuali) alle file di bottoni.
 */
export function CtaLink({
  href,
  children,
  variante = "solida",
  tono = "scuro",
}: CtaLinkProps) {
  const base =
    "inline-flex min-h-[44px] items-center gap-3 px-5 py-3 text-sm font-medium transition-colors";

  return (
    <Link href={href} className={`${base} ${stili[variante][tono]}`}>
      <span>{children}</span>
      <span aria-hidden="true">→</span>
    </Link>
  );
}
