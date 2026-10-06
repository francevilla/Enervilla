# Wireframe — Pagina Home

Fedeltà: **bassissima** (wireframe, non mockup). Solo struttura e gerarchia.
Legenda: `[ ]` riquadro/bordo, `≡` elenco, `→` direzione del flusso visivo.

```
┌──────────────────────────────────────────────────────────────┐
│ HEADER  ▪ WORDMARK          [nav] [nav] [nav] [nav] (CONTATTI)│
├──────────────────────────────────────────────────────────────┤
│ HERO (rev. ott-2026: testo + ritratto, niente split)           │
│  eyebrow: ETICHETTA POSIZIONAMENTO (maiuscole, piccolo)      │
│  H1 (enorme, serif, max 4 righe)                             │
│  paragrafo introduttivo (≤ 40 parole)                        │
│  (CTA primaria)(CTA secondaria) — max 2                      │
│  ┌────────────────────────────────────────────────────────┐  │
│  │ RITRATTO panoramico intero, in cornice con didascalia  │  │
│  │ (mai ritagli sul volto, mai testo sopra la foto)       │  │
│  └────────────────────────────────────────────────────────┘  │
├══════════════════════════════════════════════════════════════┣
│ FASCIA SCURA (banda piena, 3 colonne separate da bordi)      │
│  ┌──────────┬──────────────┬──────────────────┐              │
│  │ Bologna  │ Operatività  │ Consulenza       │              │
│  │ sottot.  │ nazionale    │ per imprese      │              │
│  └──────────┴──────────────┴──────────────────┘              │
├──────────────────────────────────────────────────────────────┤
│ SEZ. "IL PUNTO DI PARTENZA"                                  │
│  etichetta / H2 / intro                                      │
│  ┌─────────────┬─────────────┐                               │
│  │ 01 Contratto│ 02 Profilo  │   griglia 2×2, celle con      │
│  ├─────────────┼─────────────┤   bordo, numeri grandi        │
│  │ 03 Approvv. │ 04 Economic.│                               │
│  └─────────────┴─────────────┘                               │
│  nota a piè di sezione (una frase)                           │
├──────────────────────────────────────────────────────────────┤
│ SEZ. VERDE CHIARA "ACQUISTO AGGREGATO"                       │
│  etichetta / H2 / intro                                      │
│  ┌────────┐┌────────┐┌────────┐┌────────┐                    │
│  │ PASS.01││ PASS.02││ PASS.03││ PASS.04│   4 card in fila   │
│  └────────┘└────────┘└────────┘└────────┘                    │
│  (CTA contorno → pagina dedicata)                            │
├──────────────────────────────────────────────────────────────┤
│ SEZ. GAS PSV — split asimmetrico                             │
│  ┌──────────────────────────┐  ┌──────────────────────┐      │
│  │ etichetta/H2/intro       │  │ BOX VOCABOLARIO      │      │
│  │ ≡ 3 punti con bordo sx   │  │ dl: termine + def    │      │
│  │ (CTA contorno)           │  │ ×3 voci              │      │
│  └──────────────────────────┘  └──────────────────────┘      │
├──────────────────────────────────────────────────────────────┤
│ SEZ. "ENERGIA COME SERVIZIO"                                 │
│  etichetta / H2 / intro                                      │
│  ≡ 3 punti con bordo sx                                      │
│  (CTA contorno → pagina dedicata)                            │
├══════════════════════════════════════════════════════════════┣
│ FASCIA SCURA "AREE DI LAVORO"                                │
│  etichetta lime / H2 chiaro                                  │
│  ┌──────────────┬──────────────┬──────────────┐              │
│  │Contrattual.  │Diagnosi      │Efficienza    │              │
│  └──────────────┴──────────────┴──────────────┘              │
│  (CTA primaria lime)(CTA contorno)                           │
├──────────────────────────────────────────────────────────────┤
│ SEZ. METODO                                                  │
│  etichetta / H2 / intro                                      │
│  ┌────────┐┌────────┐┌────────┐┌────────┐                    │
│  │ FASE01 ││ FASE02 ││ FASE03 ││ FASE04 │                    │
│  └────────┘└────────┘└────────┘└────────┘                    │
├──────────────────────────────────────────────────────────────┤
│ SEZ. VERDE CHIARA "DA DOVE SI PARTE"                         │
│  ┌────────────────────────┐   ┌───────────────────────┐      │
│  │ H2 + paragrafo         │   │ COLONNA CTA:         │      │
│  │                        │   │ (primaria)           │      │
│  │                        │   │ (contorno)(contorno) │      │
│  │                        │   │ (contorno)(contorno) │      │
│  └────────────────────────┘   └───────────────────────┘      │
├══════════════════════════════════════════════════════════════┣
│ FOOTER SCURO                                                 │
│  nome attività + descrizione | nav pagine                    │
│  ── copyright + nota legale provvisoria ──                   │
└──────────────────────────────────────────────────────────────┘
```

## Prompt rigenerabile (bareminimum.design / Gemini)

> Wireframe a fedeltà bassissima, monocromatico, solo box e placeholder di
> testo, per la home di un consulente energetico B2B italiano. Struttura in 9
> blocchi verticali: hero split (titolo serif grande + CTA a sinistra, figura
> a flusso verticale 4 nodi a destra); banda scura a 3 colonne; griglia 2×2 di
> variabili numerate; sezione verde chiara con 4 card orizzontali; sezione
> split 60/40 con elenco a bordo sinistro e box vocabolario; sezione elenco 3
> punti; banda scura 3 colonne con 2 CTA; griglia 4 card metodo; chiusura
> split con colonna CTA impilate; footer scuro 2 colonne. Stile editoriale
> sobrio, bordi sottili, niente ombre, niente immagini.

## Note di implementazione (dal design plan)

- Il ritmo si ottiene alternando fondi (rev. ott-2026): scuro (hero) →
  superficie (posizionamento) → scuro (punto di partenza) → chiaro (acquisto)
  → scuro (gas) → superficie (servizi) → chiaro compatto (EaaS) → superficie
  (metodo) → chiaro (chiusura). Mai più di due sezioni scure consecutive con
  lo stesso pattern.
- Una sola CTA "solida" per schermata; le chiusure usano `Chiusura` (primaria
  + link testuali), mai file di bottoni.
- La figura di flusso è CSS-only (`FlowDiagram`) e vive solo in
  `/acquisto-aggregato`; in home l'unica figura è il ritratto.
