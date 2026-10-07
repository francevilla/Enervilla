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
La home e `/contatti` includono un modulo B2B per raccogliere richieste
qualificate tramite Web3Forms. L'invio resta disattivato finché non sono
configurati la chiave Web3Forms e l'informativa privacy; il sito non conserva i
lead in un database proprio.

## Pagine

| Percorso            | Contenuto                                                              |
| ------------------- | ---------------------------------------------------------------------- |
| `/`                 | Posizionamento, metodo di lavoro, sintesi delle aree di attività       |
| `/acquisto-aggregato` | Acquisto aggregato di energia elettrica, dai consumi alla consegna     |
| `/gas-psv`          | Approvvigionamento gas con operatività sul PSV                         |
| `/energia-come-servizio` | Energia come servizio (EaaS): definizione, contratti, perimetro     |
| `/servizi`          | Contrattualistica, diagnosi energetiche, efficienza energetica         |
| `/chi-sono`          | Profilo professionale, aree di competenza, regole di lavoro            |
| `/contatti`          | Modulo B2B qualificante, primo inquadramento e approfondimenti          |

## Come eseguire il progetto

Serve **Node.js 20 o superiore**.

```bash
npm install                 # installa le dipendenze (una sola volta)
npm run dev                 # avvio in sviluppo: http://localhost:3000
cp .env.example .env.local  # configura dominio, Web3Forms e informativa prima di raccogliere lead
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
  site-header.tsx       intestazione con navigazione responsive
  site-footer.tsx       footer con collegamenti e informativa se configurata
  section.tsx           sezioni, intestazioni, schede e testata pagina
  flow-diagram.tsx      grafica consumi → aggregazione → produttori → consegna
  cta-link.tsx          pulsante-collegamento
  lead-capture-form.tsx modulo B2B qualificante, stati di invio e anti-spam esca
lib/
  site.ts               navigazione, URL pubblico e dati strutturati condivisi
  lead-capture.ts       opzioni ammesse e tipi del modulo
  lead-config.ts        access key Web3Forms e gating privacy del modulo
docs/
  informazioni-da-confermare.md   elenco di ciò che manca prima della pubblicazione
  lead-capture.md                 configurazione e schema di inoltro dei lead
.env.example            modello per dominio, Web3Forms e informativa privacy
PROJECT_BRIEF.md        obiettivi, regole editoriali e scelte di design
```

## Scelte tecniche

- **Next.js 16** con App Router e **TypeScript**.
- **Tailwind CSS 4**, con i token di design (colori e tipografia) in
  `app/globals.css`.
- **Nessun font esterno**: si usano famiglie di sistema, così il sito non
  dipende da servizi di terze parti.
- **Nessun analytics o cookie di tracciamento.** Il modulo invia i dati a
  Web3Forms dal browser e non li salva su un database del sito. L'access key è
  pubblica per design; senza key e informativa privacy, l'invio resta disattivato.
- Le fasce di consumo sono orientative; nessun lead scoring automatico e
  nessun upload di bollette o documenti.

## Documentazione

- [`PROJECT_BRIEF.md`](PROJECT_BRIEF.md) — obiettivi, pubblico, regole
  editoriali, design e stato del progetto.
- [`docs/informazioni-da-confermare.md`](docs/informazioni-da-confermare.md) —
  dati e documenti mancanti, da confermare prima della pubblicazione.
- [`docs/lead-capture.md`](docs/lead-capture.md) — setup Web3Forms, campi
  raccolti, limiti del piano e verifiche prima del go-live.
- [`docs/brief-direzione-creativa-c-level.md`](docs/brief-direzione-creativa-c-level.md) —
  sitemap, wireframe, copy, fonti e sistema visivo aggiornati.
