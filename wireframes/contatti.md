# Wireframe — Richiesta di primo confronto

La pagina `/contatti` e la home condividono il form B2B qualificante. La
raccolta resta disattivata finché non sono configurati access key Web3Forms e
informativa privacy completa.

```
┌──────────────────────────────────────────────────────────────────────┐
│ HEADER                                                               │
├──────────────────────────────────────────────────────────────────────┤
│ HERO                                                                 │
│  eyebrow: RICHIESTA · PRIMO INQUADRAMENTO                            │
│  H1: "Un confronto utile parte dal profilo dell'impresa."             │
│  CTA: Compila il profilo aziendale                                   │
├──────────────────────────────────────────────────────────────────────┤
│ FORM / DUE COLONNE                                                   │
│  ASIDE: cosa serve e come usare il form                              │
│    01 profilo  →  02 priorità  →  03 primo inquadramento             │
│    Nota: niente POD/PDR, bollette o allegati                          │
│                                                                      │
│  PANEL: Brief iniziale / 01                                          │
│    01 Referente e azienda                                            │
│      Nome, email di lavoro, azienda, ruolo, settore, siti            │
│    02 Esigenza e perimetro energetico                                │
│      Interessi (multi-selezione), consumi elettricità/gas opzionali,  │
│      orizzonte della decisione, nota facoltativa                     │
│    informativa privacy + richiesta di ricontatto                     │
│    [Invia richiesta]                                                  │
│    stato visibile se access key Web3Forms/privacy non sono configurate│
├──────────────────────────────────────────────────────────────────────┤
│ DOPO L'INVIO                                                        │
│  01 Perimetro  ·  02 Inquadramento  ·  03 Documenti su canale concordato│
├──────────────────────────────────────────────────────────────────────┤
│ APPROFONDIMENTI: acquisto aggregato · gas · servizi · EaaS           │
├──────────────────────────────────────────────────────────────────────┤
│ FOOTER + informativa privacy se configurata                          │
└──────────────────────────────────────────────────────────────────────┘
```

## Principi

- Campi B2B per capire ruolo, azienda, scala indicativa, esigenza e tempi.
- Fasce di consumo opzionali e orientative; nessuna soglia di ammissione né
  lead scoring automatico.
- Nessun allegato, dato POD/PDR o dato di fornitura identificativo nel primo
  invio; niente newsletter o consenso marketing.
- Errori, invio in corso, conferma e canale non configurato hanno stati chiari e
  annunciati alle tecnologie assistive.
- Nessun messaggio di successo finché Web3Forms non risponde con `success: true`.
- La pagina resta onesta in staging: il pulsante è disattivato se access key e
  informativa non sono pronti.

Per il contratto API, l'elenco dei valori e il go-live vedere
[`docs/lead-capture.md`](../docs/lead-capture.md).
