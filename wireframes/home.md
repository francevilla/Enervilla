# Wireframe — Home C-Level / Quiet Engineering

Fedeltà: **bassa**. Struttura, gerarchia e flusso delle decisioni; non è un mockup. Il contenuto finale e le fonti dei benchmark sono nel documento [`docs/brief-direzione-creativa-c-level.md`](../docs/brief-direzione-creativa-c-level.md).

```text
┌──────────────────────────────────────────────────────────────────────────┐
│ HEADER — EnerVilla · Deep Energy      Elettricità  Gas  Servizi  Profilo │
│                                        [Contatti]                         │
├──────────────────────────────────────────────────────────────────────────┤
│ 01 / HERO — asimmetrico 58 / 42                                           │
│                                                                          │
│ Eyebrow: Consulenza energetica per imprese · Bologna · Italia             │
│ Micro-label tecnica: Strategia energetica / 01—03                        │
│ H1: Il costo dell'energia si governa a monte.                            │
│ Testo: approvvigionamenti, contratti, consumi; dati e rischi in un quadro│
│        decisionale comune.                                               │
│ [Apri un confronto]  [Leggi il quadro di mercato]                        │
│ Nota: stabilità economica e decarbonizzazione                            │
│                                      ┌─────────────────────────────────┐ │
│                                      │ Ritratto del consulente         │ │
│                                      │ in cornice separata             │ │
│                                      └─────────────────────────────────┘ │
│                                      01 Profili / 02 Rischi / 03 Decisioni│
├──────────────────────────────────────────────────────────────────────────┤
│ 02 / POSIZIONAMENTO — tre celle                                          │
│ Bologna: base operativa  | Italia: operatività nazionale | Industria     │
├──────────────────────────────────────────────────────────────────────────┤
│ 03 / VALORE QUANTIFICABILE — fonti esterne e periodo visibili            │
│ Eyebrow / H2 / disclaimer                                                 │
│ ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐ ┌──────────┐│
│ │ ≈5× oscillazioni│ │ ≈1,5× prezzo    │ │ 11% risparmio   │ │ −55%     ││
│ │ elettriche      │ │ industriale UE/ │ │ energetico nei  │ │ target   ││
│ │ fonti ACER      │ │ USA · ACER      │ │ casi IEA        │ │ UE 2030  ││
│ └─────────────────┘ └─────────────────┘ └─────────────────┘ └──────────┘│
│ Nota: benchmark non attribuiti a EnerVilla, non feed live; target UE non │
│       automaticamente applicabili alla singola impresa.                 │
├──────────────────────────────────────────────────────────────────────────┤
│ 04 / SERVIZI — griglia asimmetrica 7 / 5                                 │
│ ┌──────────────────────────────────┐ ┌────────────────────────────────┐│
│ │ 01 APPROVVIGIONAMENTO             │ │ 02 CONTRATTI E RISCHIO        ││
│ │ Elettricità aggregata, gas PSV,   │ ├────────────────────────────────┤│
│ │ volumi, profili e tempi           │ │ 03 EFFICIENZA E DECARBONIZZ.  ││
│ │ link a due pagine dedicate        │ │ EaaS, baseline, verifica       ││
│ └──────────────────────────────────┘ └────────────────────────────────┘│
├──────────────────────────────────────────────────────────────────────────┤
│ 05 / MODELLO DI LETTURA — 2×2                                            │
│ Formula economica | Profilo del carico | Esposizione | Obblighi contratt.│
├──────────────────────────────────────────────────────────────────────────┤
│ 06 / METODO — quattro passaggi numerati                                  │
│ Baseline → Esposizione → Scenari → Decisione e controllo                 │
├──────────────────────────────────────────────────────────────────────────┤
│ 07 / CHIUSURA                                                            │
│ H2 + perimetro concreto + [Definisci il perimetro]                       │
│ Link testuali a elettricità, gas, servizi e profilo                      │
├──────────────────────────────────────────────────────────────────────────┤
│ FOOTER — marchio, payoff, pagine reali, stato legale trasparente          │
└──────────────────────────────────────────────────────────────────────────┘
```

## Note di implementazione

- L'hero mantiene il ritratto distinto dal testo e non copre la fotografia.
- I quattro indicatori sono card con fonte cliccabile, anno/perimetro e caveat; dati statici aggiornati al **7 ottobre 2026**, non un flusso live.
- Le tre aree di servizio hanno rapporti 7/5 su desktop e diventano una colonna su mobile.
- Le transizioni usano CSS; il reveal allo scroll si attiva solo dove `animation-timeline: view()` è supportato, resta leggibile senza supporto e rispetta `prefers-reduced-motion`.
- Tutte le CTA portano a una rotta esistente. Email e telefono compaiono solo se configurati con valori confermati.
