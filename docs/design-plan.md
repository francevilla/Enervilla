# Design plan — applicato al sito di consulenza energetica

Piano generato dalla fase 5 del workflow (brainstorm strutturato), da usare
come input dell'implementazione (fase 6). Fonte delle conoscenze estetiche:
sintesi operativa del notebook Anthropic *Prompting for Frontend Aesthetics*
(`coding/prompting_for_frontend_aesthetics.ipynb`), adattata ai vincoli del
`PROJECT_BRIEF.md`.

---

## 1. Brainstorm — domande di chiarimento e risposte

| Domanda che porrebbe `/superpowers:brainstorm` | Risposta (ancorata al brief) | Conseguenza sul design |
|---|---|---|
| Qual è l'emozione target? | Fiducia sobria, non eccitazione. Target: responsabili tecnici/amministrativi B2B industriale. | Niente gradienti spettacolari, niente hero "wow"; tipografia editoriale come protagonista. |
| Cosa distingue il sito? | Il tono: perimetri espliciti, "cosa non troverai scritto", nessun dato inventato. | L'onestà diventa dispositivo di design: box stato, checklist, colonne include/non include. |
| Vincoli hard? | Font solo di sistema, zero dipendenze di rete, CSS-only, Tailwind 4, palette fissa grafite/avorio/verde/lime. | L'estetica si costruisce con ritmo, bordi e spaziatura — non con immagini o effetti. |
| Una CTA primaria o più? | Il brief vieta azioni false; il backend non esiste. | `mailto:`/`tel:` reali appena confermati; fino ad allora solo link a pagine vere. |
| Mobile-first o desktop-first? | Utente tipico legge anche da telefono in stabilimento. | Griglie che collassano a colonna singola; menu mobile con Escape/focus già implementati. |

## 2. Principi estetici (distillati dal notebook Anthropic)

Il notebook insegna che l'estetica AI fallisce quando il prompt chiede
"bello/moderno" invece di **vincoli concreti**. Principi tradotti in regole:

1. **Specificità > aggettivi.** Ogni scelta è scritta come regola misurabile
   (es. "etichette eyebrow: 0.7rem, tracking 0.2em, maiuscolo"), non come
   mood ("elegante").
2. **Un accento, usato poco.** Il lime appare solo su: hover wordmark,
   etichette su fondo scuro, CTA primaria su scuro, dettaglio finale del
   FlowDiagram. Max 3 occorrenze per schermata.
3. **Ritmo verticale variabile.** Alterna fondi avorio → grafite → verde
   tenue e compatta/distendi le sezioni: la monotonia era la critica della
   relazione di consulenza (voto web designer 6/10 sull'esperienza).
4. **Gerarchia delle CTA a una sola primaria per schermata.** Verde pieno =
   primaria su fondi chiari; lime = primaria su fondi scuri; contorno = tutto
   il resto. Mai due solidi vicini.
5. **Tipografia come marca.** Serif di sistema per H1–H4 con `text-wrap:
   balance`; sans per corpo; numeri sequenziali (`01 02 03`) come elemento
   grafico ricorrente (metodo, tappe, variabili).
6. **Superfici piatte, bordi sottili.** Zero ombre, zero rounded decorativi;
   la profondità viene dai contrasti di fondo e dalle `gap-px` con bordi.
7. **Nessuna animazione decorativa.** Solo transizioni colore su hover/focus
   (già nei token); `prefers-reduced-motion` rispettato.
8. **Coerenza semantica dei colori:** verde = struttura/navigazione attiva,
   lime = invito all'azione, grafite = testo/autorità, avorio = pagina.

## 3. Sistema a componenti (input della fase di implementazione)

| Componente | Ruolo nel piano | Stato |
|---|---|---|
| `Section` (+variante `compatta`) | Generatore di ritmo verticale | esistente, usato secondo §2.3 |
| `SectionHeader` | Eyebrow + H2 + intro, tono chiaro/scuro | esistente |
| `Card` | Riquadro numerato, nessuna ombra | esistente |
| `CtaLink` | Gerarchia primaria/contorno, variante `suFondoScuro` | esistente, conforme §2.4 |
| `FlowDiagram` | Unica figura del sito, CSS-only | esistente |
| `PageHero` | Intestazioni interne uniformi al wireframe servizio | esistente |
| Active-state nav | Barra verde sulla pagina corrente + `aria-current` | **aggiunto** (P2 relazione) |
| Orientamento pagine servizio | Bordo sinistro continuo con tacche numerate + link Home | **aggiunto** (P3 relazione) |
| Dati di contatto reali | Card email/telefono/LinkedIn da `recapiti`, box stato onesto | **aggiunto** (P0 relazione) |

## 4. Gap analysis → interventi implementati (fase 6)

Dalla relazione consulenze (P0→P3) incrociata con i wireframe:

- [x] **P0 contatti:** header e footer mostrano `mailto:`/`tel:` reali quando
  `NEXT_PUBLIC_CONTACT_EMAIL`/`PHONE` sono impostati; pagina `/contatti`
  mostra card recapiti o un box di stato dichiarato (niente finzione).
- [x] **P2 active-state:** evidenziazione pagina corrente nel menu desktop e
  mobile, con `aria-current="page"`; chiusura menu su Escape con ripristino
  del focus; reset su resize desktop.
- [x] **P3 orientamento:** ogni pagina lunga ha una guida laterale (bordo
  sinistro con tacche) e un rimando a Home; la home chiude il funnel verso
  `/contatti` in modo ripetuto ma mai doppio-solido.
- [x] **Verifica:** lint, `tsc --noEmit`, build di produzione, smoke test dei
  percorsi (200 su tutte le rotte, 404 controllato).

## 5. Fuori scope documentato (per non violare il brief)

- Lead magnet PDF, analytics, local SEO Bologna: richiedono dati/legalità da
  confermare (`docs/informazioni-da-confermare.md`) → non implementati qui.
- Wordmark definitivo: il marchio "enervilla" non è confermato; il segnaposto
  attuale (quadrato verde + "Energia per imprese") resta finché il titolare
  sceglie il nome pubblico.
