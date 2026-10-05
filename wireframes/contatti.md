# Wireframe — Pagina Contatti

```
┌──────────────────────────────────────────────────────────────┐
│ HEADER                                                       │
├──────────────────────────────────────────────────────────────┤
│ PAGE HERO                                                    │
│  eyebrow: CONTATTI                                           │
│  H1: "Parliamo di cosa serve davvero."                       │
│  paragrafo: cosa succede dopo il primo contatto              │
├──────────────────────────────────────────────────────────────┤
│ SEZ. A — RECAPITI (stato attuale: dati non confermati)       │
│  ┌──────────────────────────────────────────────┐            │
│  │ BOX STATO: "Recapiti in fase di conferma"    │            │
│  │ quando email/telefono/linkedin esistono →    │            │
│  │ ┌──────────┐ ┌──────────┐ ┌──────────┐      │            │
│  │ │ ✉ email  │ │ ☎ tel.   │ │ in LinkedIn │   │            │
│  │ └──────────┘ └──────────┘ └──────────┘      │            │
│  └──────────────────────────────────────────────┘            │
├──────────────────────────────────────────────────────────────┤
│ SEZ. B — COME AVVIARE UN CONFRONTO (max-w-3xl)               │
│  ≡ 4 passi: porta i dati → definiamo il perimetro →          │
│     analisi → restituzione scritta                           │
├──────────────────────────────────────────────────────────────┤
│ SEZ. C — COSA PORTARE (checklist in box verde tenue)         │
│  ☐ consumi per POD/PDR ☐ contratti attivi ☐ vincoli siti     │
├──────────────────────────────────────────────────────────────┤
│ SEZ. D — Pagine da leggere prima (link reali, non CTA false) │
│  [acquisto-aggregato] [gas-psv] [energia-come-servizio]      │
├──────────────────────────────────────────────────────────────┤
│ FOOTER                                                       │
└──────────────────────────────────────────────────────────────┘
```

## Prompt rigenerabile

> Wireframe fedeltà bassissima, pagina contatti di un sito di consulenza B2B
> senza modulo: hero con titolo serif; blocco recapiti che mostra card vuote
> con stato "in conferma"; elenco "come funziona il primo confronto" in 4
> passi; box checklist "cosa portare"; fila di 3 card-link alle pagine di
> servizio. Bordi sottili, niente form finti, niente ombre.

## Note dal design plan

- **Nessun modulo inattivo** (regola 5 del brief): se non c'è un backend, non
  c'è `<form>`; le uniche azioni reali sono `mailto:`/`tel:` quando i dati
  saranno confermati da `lib/site.ts` (`recapiti`).
- La pagina deve restare onesta anche nello stato "dati non confermati": il
  box di stato spiega perché i recapiti mancano, invece di simulare presenza.
