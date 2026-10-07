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

---

## 6. Revisione design — ottobre 2026 (audit web-design-engineer)

**Chiarimento fondativo.** "DarkVilla" è il tema scuro + il cognome del titolare
(Villa): nessun riferimento a edifici. Il file `DarkVilla.jpg` è il ritratto
del titolare, non una villa notturna. Tutte le note precedenti su "villa al
buio / finestra accesa / bagliore caldo / analisi cromatica dei pixel"
descrivevano un'immagine inesistente e sono state rimosse dal codice e dai
documenti. L'alt-text dell'hero che descriveva architettura residenziale era
falso ed è stato corretto.

### Interventi

| # | Criticità | Fix |
|---|---|---|
| 1 | Ritratto usato come sfondo full-bleed con testo sopra, nascosto su mobile, alt falso | Hero ristrutturato: testo + ritratto panoramico mostrato intero in cornice con didascalia neutra ("Il consulente", nessun nome pubblicato); intro ridotta a ~30 parole, 2 CTA |
| 2 | CTA secondarie invisibili sulle fasce chiare (testo avorio su avorio, hover lime su avorio 1,25:1); prop `suFondoScuro` morta | `CtaLink` con `tono="scuro"\|"chiaro"`: solida chiara = verde-800 pieno, contorno chiara = testo grafite-900; prop morta rimossa |
| 3 | Chiusure con 4-5 bottoni identici in competizione | Nuovo componente `Chiusura` (una primaria + link testuali "Altre pagine"), usato in tutte le 7 pagine |
| 4 | Tre nomi diversi (header, title, package) | Segnaposto unico `marchio` in `lib/site.ts`, usato da header e anteprime social |
| 5 | Tunnel scuro in home (§5→§7 identiche) | Ritmo: servizi e metodo su `superficie`, EaaS come inserto chiaro compatto; ritocchi analoghi in `/chi-sono`, `/acquisto-aggregato`, `/contatti`, `/energia-come-servizio` |
| 6 | H2/corpo a 2× (sotto soglia squint-test 2,5×) | H2 a 36/48px (2,25× su mobile per titoli lunghi, 2,67× da `sm` in su) |
| 7 | FlowDiagram: 4 nodi lime identici + barre decorative senza significato | Nodi verdi con meta in lime, didascalia quieta, barre rimosse; diagramma solo in `/acquisto-aggregato` |
| 8 | Menu mobile senza scroll-lock né focus-trap, target < 44px | Blocco scorrimento, focus iniziale, contenimento Tab, Escape con ripristino focus, `min-h-[44px]` su tutti gli interattivi |
| 9 | Nav desktop a rischio wrap a 768-900px | Breakpoint `md` → `lg` per nav completa/hamburger |
| 10 | Favicon cliché (barre crescenti) + angoli arrotondati vs sito sharp | Nuovo segno 2×2 "una finestra accesa", angoli netti, hex dai token |
| 11 | `themeColor` e hex OG non allineati ai token | `#060e19` ovunque; OG con hex calcolati + `marchio` |
| 12 | `/chi-sono` citava un percorso repo interno (`docs/...`) | Frase rimossa (il visitatore non ha il repo) |
| 13 | `/contatti` con `<a>` interni (full reload) | Sostituiti con `Link` |
| 14 | Bordi `grafite-200` invisibili su avorio (Card/PassiVerticali chiari) | Bordi chiari a `grafite-500` (4,25:1, ok per non-testo) |
| 15 | `background-attachment: fixed` scattoso su iOS | `scroll` sotto 768px |
| 16 | Asset duplicati (2× ~392 KB) + file junk | Un solo `darkvilla-hero.jpg` compresso a ~40 KB; duplicati e `publics` rimossi |

### Contrasti misurati (oklch → sRGB, WCAG)

| Coppia | Rapporto | Esito |
|---|---|---|
| grafite-300 su grafite-900 (testi piccoli su scuro) | 6,48:1 | ✅ AA |
| grafite-500 su grafite-900 (vecchi testi piccoli) | 3,57:1 | ❌ → migrati a grafite-300 |
| lime-400 su grafite-950 (eyebrow, testo bottone: grafite-950 su lime) | 13,61:1 | ✅ |
| verde-300 su grafite-900 (link) | 11,44:1 | ✅ |
| avorio-50 su verde-800 (nuova solida chiara) | 9,63:1 | ✅ |
| grafite-900 su avorio-50 (nuova contorno chiara) | 15,19:1 | ✅ |
| verde-800 su avorio-50 (eyebrow chiare, numeri) | 9,63:1 | ✅ |
| lime-400 su avorio-50 (vecchia hover/CTA su chiaro) | 1,25:1 | ❌ → vietato, vedi fix #2 |
| grafite-500 su avorio-50 (bordi chiari, soglia non-testo 3:1) | 4,25:1 | ✅ |

Regola conseguente (già nei commenti di `globals.css`): su scuro il testo
piccolo parte da grafite-300; grafite-500 solo per bordi su chiaro.

---

## 7. Pagina EaaS evidence-based — ottobre 2026

Le affermazioni tecniche di `/energia-come-servizio` sono state ricondotte a
fonti pubbliche verificate (ricerca web ott-2026), elencate in pagina nella
sezione "Fonti":

- **IRENA (2020)**, *Innovation landscape brief: Energy as a Service* —
  definizione e tre famiglie (consulenza / impianti / gestione). Corretta
  l'attribuzione precedente ("modello più innovativo" non verificata).
- **IEA**, *ESCO contracts* — shared savings vs guaranteed savings.
- **Banca Mondiale** — terzo modello (gestione energetica esternalizzata, il
  più diffuso in UE): la pagina ora descrive tre strutture, non due
  (allineato anche il rimando in home §6b).
- **Transparense (progetto UE)** — definizioni EED di EPC ed *energy service
  provider*; corretta la voce ESCo (termine d'uso equivalente, non termine
  della direttiva).
- **EVO / IPMVP** — equazione dei risparmi nella verifica della baseline.
- **JRC (2019)**, *Energy Service Market in the EU* — mercato stabile o in
  crescita, Italia tra i più dinamici (quarto fattore "perché ora").
- **DPR 412/1993** (testo via ISPRA) — definizione di contratto servizio
  energia (terza struttura contrattuale).

Regola: nuove affermazioni tecniche solo con fonte linkata in pagina.

---

## 8. Lockup ibrido ufficiale — ottobre 2026

Scelta del titolare: marchio **"EnerVilla · Deep Energy"** (studio §9–§10).
`marchio` in `lib/site.ts` ridefinito come `{ nome, descrittore, lockup,
payoff }` e applicato a header (nome sempre, descrittore da `sm` in su),
footer (lockup + payoff), titoli SEO (keyword prima e brand dopo in home;
template `%s | EnerVilla · Deep Energy` nelle interne), `applicationName`,
OG (`siteName`/title) e JSON-LD (`name` = lockup, `alternateName` =
dicitura). Favicon 2×2 invariata.
Restano: verifica UIBM/EUIPO e registrazione domini.

---

## 9. Revisione della direzione creativa — 7 ottobre 2026

La richiesta C-Level/Quiet Luxury aggiorna il sistema visivo e la homepage. Per
palette, animazione, griglia e metriche pubblicate, questa revisione **sostituisce
le scelte precedenti** descritte nei §§2, 5 e 6 (in particolare lime come accento
e assenza di motion). I dettagli e il copy completo sono in
[`docs/brief-direzione-creativa-c-level.md`](brief-direzione-creativa-c-level.md).

- Accento principale aggiornato da lime a champagne (`#d7b174` circa), con
  contrasto misurato di circa 9,6:1 su `grafite-950`.
- Gradiente champagne a bassa opacità, animato in 54 secondi; `prefers-reduced-motion`
  lo disattiva.
- Servizi in griglia asimmetrica 7/5; reveal allo scroll solo dove supportato,
  con contenuto sempre visibile nel fallback.
- Indicatori macroeconomici pubblici pubblicabili solo con fonte, periodo,
  perimetro e disclaimer. Non sono risultati del consulente e non costituiscono
  un feed real-time; vedi la policy delle fonti nel documento creativo.
- La fotografia del titolare resta separata dal testo e non viene coperta da
  sovrapposizioni.

Il resto delle regole di progetto resta valido: nessun recapito, caso cliente,
risparmio aziendale o dato legale viene inventato; le CTA puntano a pagine reali;
le preferenze di accessibilità prevalgono sugli effetti visivi.

---

## 10. Applicazione visiva V5 — ottobre 2026

La V5 pura ("Deep Energy" come masterbrand) resta sconsigliata dallo studio
(15/30 contro 27/30, §9.4: omonimi, SEO, EUIPO, dettatura). Applicato invece
lo **stile visivo V5 al lockup ibrido ufficiale**: serif editoriale di sistema,
"Deep Energy" in champagne, payoff in maiuscoletto grigio — come nella riga
"Lockup ufficiale" di `docs/marchio-varianti.html`. Coerente con la direzione
C-Level / Quiet Luxury (§9): niente maiuscoletto sans, niente quadrato (era lo
stile V1).

| Elemento | Prima (stile V1) | Dopo (stile V5) |
|---|---|---|
| Header | Quadrato champagne + "ENERVILLA" sans maiuscolo (descrittore nascosto su mobile) | Serif "EnerVilla · Deep Energy", descrittore champagne con hover schiarente, sempre intero anche su mobile |
| Footer | Serif con descrittore grigio | Serif con descrittore champagne; payoff maiuscoletto invariato |
| Anteprima social (OG) | Quadrato + lockup maiuscolo grigio | Lockup serif champagne + payoff maiuscoletto |
| Didascalia ritratto (hero) | Testo fisso monocromo | Da `marchio` in `lib/site.ts`, descrittore champagne |
| Favicon | 2×2 con angolo champagne | **Invariata** (geometria): la "DE" in tavola è un'ipotesi puramente comparativa; solo `aria-label` aggiornato al lockup |
| Titoli SEO / JSON-LD | Lockup testuale | Invariati (testo, nessuno stile) |

Nota: la tavola `docs/marchio-varianti.html` mostra ancora l'accento lime
(pre-C-Level); è conservata come documento storico dello studio.
