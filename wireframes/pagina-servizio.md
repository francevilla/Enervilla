# Wireframe — Pagine di servizio (template condiviso)

Le pagine `/acquisto-aggregato`, `/gas-psv`, `/energia-come-servizio`,
`/servizi` condividono lo stesso scheletro. Un solo wireframe per tutti e
quattro i servizi: cambia il contenuto, non l'impianto.

```
┌──────────────────────────────────────────────────────────────┐
│ HEADER                                                       │
├──────────────────────────────────────────────────────────────┤
│ PAGE HERO (banda alta, fondo avorio, bordo inferiore)        │
│  eyebrow: ETICHETTA AREA                                     │
│  H1 grande serif                                             │
│  paragrafo introduzione                                      │
│  [orientamento: ← Home · ↑ Area correlata]                   │
├──────────────────────────────────────────────────────────────┤
│ SEZ. A — CONTESTO/DEFINIZIONE                                │
│  H2 + testo corridoio (max-width lettura) + eventuale box    │
├──────────────────────────────────────────────────────────────┤
│ SEZ. B — COME FUNZIONA                                       │
│  H2 + elenco numerato o step verticali con bordo sx          │
├──────────────────────────────────────────────────────────────┤
│ SEZ. C — PERIMETRO (split 50/50)                             │
│  ┌────────────────────┐  ┌────────────────────┐              │
│  │ COSA INCLUDE ≡     │  │ COSA NON INCLUDE ≡ │              │
│  └────────────────────┘  └────────────────────┘              │
├──────────────────────────────────────────────────────────────┤
│ SEZ. D — RISCHI/NOTA ONESTA (box colorato, 1 paragrafo)      │
├──────────────────────────────────────────────────────────────┤
│ SEZ. E — CORRELATI                                           │
│  H2 + 2–3 card/link verso altre pagine reali                 │
├──────────────────────────────────────────────────────────────┤
│ CTA FINALE (banda verde o scura compatta)                    │
│  H2 breve + (CTA primaria → /contatti) + link contorno       │
├──────────────────────────────────────────────────────────────┤
│ FOOTER                                                       │
└──────────────────────────────────────────────────────────────┘
```

## Prompt rigenerabile (bareminimum.design / Gemini)

> Wireframe a fedeltà bassissima per una pagina di servizio di un consulente
> energetico: hero con eyebrow, titolo serif grande, introduzione e riga di
> orientamento; a seguire cinque sezioni in colonna singola centrata:
> definizione, "come funziona" come elenco numerato verticale, perimetro in
> due colonne affiancate (include / non include), box nota sui rischi,
> riepilogo di 3 schede collegate; chiusura con banda CTA piena e pulsante
> verso i contatti. Editoriale, bordi sottili, niente ombre né foto.

## Note di implementazione (dal design plan)

- Larghezza lettura dei testi: `max-w-3xl`; le griglie possono salire a
  `max-w-6xl`.
- Le due colonne del perimetro usano lo stesso dispositivo visivo (elenco con
  bordo sinistro) per rafforzare il confronto "include / non include".
- Nessuna sezione resta senza via d'uscita: ogni pagina termina con CTA verso
  `/contatti` e link verso le pagine correlate (cross-linking completo già in
  essere, verificato con grep degli href).
