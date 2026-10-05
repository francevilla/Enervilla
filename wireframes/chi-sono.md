# Wireframe — Pagina Chi sono

```
┌──────────────────────────────────────────────────────────────┐
│ HEADER                                                       │
├──────────────────────────────────────────────────────────────┤
│ PAGE HERO                                                    │
│  eyebrow: PROFILO                                            │
│  H1: "Il referente tecnico, non il venditore."               │
│  paragrafo di posizionamento personale                       │
│  [box segnaposto: RITRATTO — in attesa di foto confermata]   │
├──────────────────────────────────────────────────────────────┤
│ SEZ. A — PERCORSO (colonna singola max-w-3xl)                │
│  H2 + testo; nessun datato inventato: solo fasi descritte    │
├──────────────────────────────────────────────────────────────┤
│ SEZ. B — COMPETENZE                                          │
│  ┌──────────┬──────────┬──────────┐                          │
│  │ Acquisto │ Gas/PSV  │ EaaS     │  griglia 3×2 di righe    │
│  ├──────────┼──────────┼──────────┤  sobrie con bordo        │
│  │ Contratti│ Diagnosi │ Efficienz│                          │
│  └──────────┴──────────┴──────────┘                          │
├──────────────────────────────────────────────────────────────┤
│ SEZ. C — REGOLE DI LAVORO                                    │
│  ≡ elenco numerato verticale, una regola per voce            │
├══════════════════════════════════════════════════════════════┣
│ CTA FINALE (banda scura compatta)                            │
│  H2 breve + (CTA primaria lime → /contatti)                  │
│              + link contorno → /servizi                      │
├──────────────────────────────────────────────────────────────┤
│ FOOTER                                                       │
└──────────────────────────────────────────────────────────────┘
```

## Prompt rigenerabile

> Wireframe fedeltà bassissima, pagina "chi sono" di un consulente energetico:
> hero editoriale con titolo serif e box segnaposto ritratto tratteggiato;
> sezione percorso a colonna singola; griglia 3×2 di competenze con celle
> bordate; elenco numerato di regole di lavoro; banda CTA scura finale con un
> pulsante. Sobrio, bordi sottili, nessuna foto reale.

## Note dal design plan

- Il box ritratto è **tratteggiato e dichiarato come segnaposto**: finché la
  foto non è confermata (`docs/informazioni-da-confermare.md`), niente fotoritocco
  o immagini stock (regola: nessun dato/non contenuto inventato).
- Le sei competenze corrispondono alle voci `knowsAbout` dei dati strutturati:
  coerenza fra SEO e pagina visibile.
