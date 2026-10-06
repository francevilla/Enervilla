import { tappaDettagli } from "@/lib/site";

/** Colore dei nodi: le tappe intermedie in verde, la meta (consegna) in lime. */
const coloriNodi = [
  "bg-verde-600",
  "bg-verde-600",
  "bg-verde-600",
  "bg-lime-400",
];

/**
 * Visualizzazione astratta del flusso di approvvigionamento:
 * consumi → aggregazione → produttori → consegna.
 * Realizzata solo con CSS: nessuna immagine, nessuna animazione decorativa.
 * Usata solo nella pagina /acquisto-aggregato (in home il contenuto è già
 * raccontato dalle card dei quattro passaggi).
 */
export function FlowDiagram() {
  return (
    <figure className="border border-grafite-700 bg-grafite-900 p-6 sm:p-8">
      <figcaption className="text-xs font-semibold uppercase tracking-[0.18em] text-grafite-300">
        Flusso di approvvigionamento elettrico
      </figcaption>

      <ol className="mt-8">
        {tappaDettagli.map((tappa, indice) => (
          <li
            key={tappa.titolo}
            className="relative border-l border-grafite-700 pb-7 pl-6 last:pb-0"
          >
            <span
              aria-hidden="true"
              className={`absolute left-[-4px] top-[6px] block h-2 w-2 rounded-full ${coloriNodi[indice]}`}
            />
            <span className="block text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-grafite-300">
              {String(indice + 1).padStart(2, "0")}
            </span>
            <span className="mt-1 block font-display text-lg text-avorio-50">
              {tappa.titolo}
            </span>
            <span className="mt-1 block text-sm leading-relaxed text-grafite-200">
              {tappa.descrizione}
            </span>
          </li>
        ))}
      </ol>
    </figure>
  );
}
