# Consulenza energetica per imprese

Sito professionale per un consulente energetico con base a **Bologna** e
**operatività nazionale**, rivolto alle **imprese**: acquisto aggregato di
energia elettrica, approvvigionamento gas sul PSV, contrattualistica, diagnosi
ed efficienza energetica.

Il sito è statico e non contiene dati aziendali inventati. I benchmark
macroeconomici sono esterni, datati, collegati alle fonti e non sono risultati
garantiti per i clienti. Recapiti, dati legali e informazioni professionali
vengono inseriti solo dopo conferma (vedi
[`docs/informazioni-da-confermare.md`](docs/informazioni-da-confermare.md)).

## Pagine

| Percorso            | Contenuto                                                              |
| ------------------- | ---------------------------------------------------------------------- |
| `/`                 | Posizionamento, metodo di lavoro, sintesi delle aree di attività       |
| `/acquisto-aggregato` | Acquisto aggregato di energia elettrica, dai consumi alla consegna     |
| `/gas-psv`          | Approvvigionamento gas con operatività sul PSV                         |
| `/energia-come-servizio` | Energia come servizio (EaaS): definizione, contratti, perimetro     |
| `/servizi`          | Contrattualistica, diagnosi energetiche, efficienza energetica         |
| `/chi-sono`          | Profilo professionale, aree di competenza, regole di lavoro            |
| `/contatti`          | Primo confronto, informazioni utili e recapiti se confermati            |

## Come eseguire il progetto

Serve **Node.js 20 o superiore**.

```bash
npm install                 # installa le dipendenze (una sola volta)
npm run dev                 # avvio in sviluppo: http://localhost:3000
cp .env.example .env.local  # opzionale: imposta NEXT_PUBLIC_SITE_URL col dominio pubblico
```

Altri comandi utili:

```bash
npm run build     # build di produzione
npm start         # avvio della build di produzione
npm run lint      # controllo ESLint
npx tsc --noEmit  # controllo dei tipi TypeScript
```

## Struttura dei file

```
app/
  layout.tsx            struttura comune (header, footer, metadati, dati strutturati)
  page.tsx              pagina iniziale
  acquisto-aggregato/    pagina acquisto aggregato
  energia-come-servizio/ pagina energia come servizio (EaaS)
  gas-psv/              pagina gas al PSV
  servizi/              pagina servizi
  chi-sono/             pagina profilo
  not-found.tsx         pagina 404 con collegamenti alle pagine reali
  sitemap.ts            mappa del sito (sitemap.xml)
  robots.ts             regole per i motori di ricerca (robots.txt)
  opengraph-image.tsx   anteprima social 1200×630 generata col codice
  icon.svg              icona del sito nella palette grafite/verde/champagne
  globals.css           palette, tipografia e stili di base
components/
  site-header.tsx       intestazione con menu (unico componente interattivo)
  site-footer.tsx       footer con collegamenti alle pagine reali
  section.tsx           sezioni, intestazioni di sezione, schede, testata pagina
  flow-diagram.tsx      grafica astratta consumi → aggregazione → produttori → consegna
  cta-link.tsx          pulsante-collegamento
lib/
  site.ts               navigazione, URL pubblico e dati strutturati condivisi
docs/
  informazioni-da-confermare.md   elenco di ciò che manca prima della pubblicazione
.env.example            modello per NEXT_PUBLIC_SITE_URL (dominio pubblico)
PROJECT_BRIEF.md        obiettivi, regole editoriali e scelte di design
```

## Scelte tecniche

- **Next.js 16** con App Router e **TypeScript**.
- **Tailwind CSS 4**, con i token di design (colori e tipografia) in
  `app/globals.css`.
- **Nessun font esterno**: si usano famiglie di sistema, così il sito non
  dipende da servizi di terze parti.
- **Nessun servizio di analisi, nessun cookie, nessun modulo** di contatto
  attivo: le chiamate all'azione portano solo a pagine reali del sito.

## Documentazione

- [`PROJECT_BRIEF.md`](PROJECT_BRIEF.md) — obiettivi, pubblico, regole
  editoriali, design e stato del progetto.
- [`docs/informazioni-da-confermare.md`](docs/informazioni-da-confermare.md) —
  dati e documenti mancanti, da confermare prima della pubblicazione.
- [`docs/brief-direzione-creativa-c-level.md`](docs/brief-direzione-creativa-c-level.md) —
  sitemap, wireframe, copy, fonti e sistema visivo aggiornati.
