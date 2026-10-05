# Relazione di consulenza sul sito — tre punti di vista

**Oggetto:** sito "Consulenza energetica per imprese" (Next.js 16, App Router, Tailwind CSS 4)
**Data:** 5 ottobre 2026
**Metodo:** revisione diretta del codice in `/workspace` (tutte le pagine, i componenti, la configurazione, la documentazione di progetto). I log di sviluppo presenti nel repo (`check-dev.log`) mostrano tutte le route rispondere `200`. Le verifiche dinamiche (build/lighthouse) non sono state ri-eseguite qui: sono indicate come azioni di validazione.

---

## 1. Senior Developer Advisor — stato tecnico

### Cosa funziona bene

- **Architettura pulita e coerente con il brief.** Next.js 16 + TypeScript strict, Tailwind 4 con token di design centralizzati in `app/globals.css`, nessun database, nessun CMS, nessuna dipendenza da servizi terzi (font di sistema, immagine OG generata via codice). Per un sito vetrina statico è la scelta giusta: minima superficie d'attacco, costi nulli, hosting banale.
- **Single source of truth reale.** `lib/site.ts` definisce menu, footer, tappe del flusso e dati strutturati: aggiungere una pagina significa toccare un solo punto, e sitemap/robots/menu si aggiornano di conseguenza. È esattamente quanto dichiarato nel brief.
- **Idratazione minima.** L'unico componente `"use client"` è `site-header.tsx` (toggle menu mobile). Tutto il resto è server-rendered/statico: payload JS ridotto, ottimo per performance e Core Web Vitals.
- **TypeScript rigoroso.** Nessun `any`, tipi propri per `VoceMenu`, `TappaFlusso`, props dei componenti; `strict: true` in `tsconfig.json`.
- **SEO tecnica ben impostata.** Metadata per pagina con canonical, `metadataBase` da `NEXT_PUBLIC_SITE_URL`, JSON-LD `ProfessionalService` senza dati inventati, sitemap/robots dinamici, `themeColor`, icona SVG, 404 guidata.
- **Documentazione di progetto esemplare.** `PROJECT_BRIEF.md`, `README.md` e soprattutto `docs/informazioni-da-confermare.md`: raro vedere un tracciamento così esplicito dei contenuti mancanti e delle regole editoriali.

### Problemi e rischi (in ordine di priorità)

1. **Blocco legale/pubblicazione: nessun recapito e nessun dato societario.** Non esiste alcuna via di contatto (niente `mailto:`, niente telefono) né P.IVA/ragione sociale nel footer. Il sito oggi è tecnicamente pubblicabile ma commercialmente sterile e, in Italia, incompleto per un'attività professionale (obblighi informativi, GDPR, cookie policy se si inseriranno analytics). È il gap più grave, ma è un gap *di contenuto*, non di codice: la struttura per accoglierlo c'è già.
2. **`.env.example` promesso ma assente.** README e PROJECT_BRIEF citano `.env.example`; il file non esiste nel repo (`git ls-files` lo conferma). Va creato (`NEXT_PUBLIC_SITE_URL=https://dominio.it`) o i documenti corretti. Incoerenza doc/codice da chiudere subito.
3. **File temporanei versionati.** `check-dev.log` e `check-dev-err.log` sono nella working tree/root del repo: artefatti di debug che non dovrebbero essere committati. Da rimuovere e aggiungere a `.gitignore`.
4. **`sitemap.ts`: `lastModified` falso.** `new Date()` all'ogni build dichiara ai crawler una modifica mai avvenuta. Meglio una data costante nota (es. commit date o una `export const ultimaModifica`). Prassi SEO corretta, un riga di codice.
5. **Open Graph/Twitter card incompleti.** In `layout.tsx` mancano `openGraph.images` (l'immagine esiste come `opengraph-image.tsx`, ma conviene dichiararla anche esplicitamente), `openGraph.url` per le pagine interne e `twitter:card = summary_large_image`. Costo basso, beneficio sulla condivisione.
6. **Header sticky senza active-state.** Il menu non segnala la pagina corrente. Con `usePathname()` (già client component) sono ~5 righe. Migliora orientamento utente e accessibilità.
7. **Mobile menu: dettagli di robustezza.** Nessun chiusura su `Escape` e su resize verso desktop,nessun focus-trap. Non bloccante, ma da sistemare quando si tocca il componente.
8. **Contrasto lime su verde chiaro da verificare.** `SectionHeader tono="scuro"` usa `text-lime-400` su fondo grafite (ok), ma l'etichetta verde-800 su avorio e gli stati hover lime vanno misurati con tool WCAG (target ≥ 4.5:1 per testo piccolo). Il brief dichiara "contrasto verificato": serve l'evidenza (screenshot Lighthouse axe o WebAIM).
9. **Nessuna pipeline di verifica.** Nel repo non c'è CI (lint/tsc/build automatici) né test. Per un sito statico i test unitari sono eccessivi, ma una GitHub Action `lint → tsc --noEmit → build → (opzionale) LHCI` sui push è un investimento minimo che protegge dalle regressioni — soprattutto quando il sito passerà da "bozza curata" a "asset aziendale".
10. **Piccole cose:** `"use client"` sull'header è giustificato ma il backdrop-blur su header sticky può costare in pittura su dispositivi modesti (valutare `bg-avorio-50` pieno); `next.config.ts` vuoto (va bene, ma documentare l'intenzionalità); nessun `security headers` — irrilevante se static export su CDN, utile se servito da Node.

### Valutazione complessiva (dev)

**8/10 come ingegneria del software; 4/10 come prodotto pronto alla pubblicazione.** Il codice è ordinato, sobrio, appropriato al problema e senza debiti strutturali. Ciò che manca non è tecnica ma completamento: recapiti, dati legali, dominio, CI. Nessuna riscrittura necessaria; tutti gli interventi sopra sono incrementali (ore, non giorni).

---

## 2. Senior Marketing Advisor — posizionamento e conversione

### Cosa funziona bene

- **Posizionamento differenziante e credibile.** "Referente tecnico stabile, non venditore di forniture" è un territorio competitivo reale: il mercato B2B energia è saturo di broker aggressivi con promesse di risparmio. La rinuncia programmatica a numeri, percentuali e loghi clienti è contro-intuitiva ma coerente col target (responsabili tecnici/amministrativi di imprese multi-sito, molto immuni alla pubblicità).
- **Copy maturo.** Tono assertivo senza superlativi ("Porto le imprese più vicine al mercato dell'energia"), frasi brevi, vocabolario spiegato (PSV, profilo di consumo, orizzonte di copertura). Le sezioni "Cosa non troverai scritto" e "Che cosa resta fuori dal lavoro" sono manovre di trust-building rare e efficaci nel B2B industriale.
- **Struttura informativa corretta:** home (problema → metodo → aree), due pagine di servizio approfondite, pagina servizi trasversale, chi-sono come prova di autorevolezza. Cross-linking tra pagine di percorso (elettrico ↔ gas ↔ servizi) ben fatto.
- **SEO on-page di base solida** (title template, description per pagina, canonical, JSON-LD, keywords pertinenti).

### Lacune critiche

1. **Conversion funnel inesistente — è il problema n.1.** Il sito non ha *alcuna* azione finale: nessun contatto, nessun modulo, nessun "richiedi una prima analisi", nemmeno un indirizzo email. Tutte le CTA portano ad altre pagine informative: il visitatore convinto non ha modo di trasformarsi in lead. Un sito consulenziale B2B senza via di contatto è un biglietto da visita stampato e mai distribuito. Azione: pagina `/contatti` (o blocco persistente in header/footer) con email, telefono, e — quando confermati — form semplice o almeno "scrivici descrivendo i siti e i consumi".
2. **Assenza di proof (prove).** Regola editoriale lodevole, ma il brief stesso prevede di inserire referenze *appena autorizzate*: oggi "oltre vent'anni" (peraltro da confermare) è l'unica claim. Senza almeno: nome e volto del consulente, foto, LinkedIn, settori/fasce di consumo seguiti (anche anonimi: "ho seguito forniture per cementifici e ceramiche" se vero e documentabile), la credibilità promessa resta asserita, non dimostrata. Priorità massima post-contenuti.
3. **Brand debole.** Package name "enervilla" suggerisce un marchio esistente, ma il sito usa solo la generica "Consulenza energetica per imprese"; header recita "Energia per imprese". Risultato: zero memorabilità, zero ricerca di brand, difficolta nei backlink. Decisione richiesta: nominare il brand (persona o studio) e adottarlo ovunque (title, logo, dominio, mail, JSON-LD `legalName`).
4. **Local SEO sprecata.** "Bologna · operatività nazionale" è nel copy ma non esiste una landing locale, né Google Business Profile, né `areaServed` valorizzata oltre il JSON-LD. Per un consulente, la provincia/emilia-romagna search ("consulente energia industriale bologna") è traffico warm a costo zero.
5. **Nessuna misurazione.** Nessun analytics (scelta dichiarata). Accettabile per etica/privacy, ma allora servono almeno proxy manuali ("come ci hai conosciuto?" nel contatto) o una soluzione privacy-first (Plausible/Matomo self-hosted) per capire se il sito genera valore. Decidere consapevolmente, non per inerzia.
6. **Manca un asset "lead magnet" coerente col metodo.** Esempio perfetto per questo posizionamento: un PDF "Checklist: cosa verificare prima di firmare un contratto di fornitura" (metodo, non promesse) da offrire in cambio di email. Sarebbe l'unico modulo lecito nel quadro editoriale attuale.
7. **Micro-copy da rivedere:** "Acquisto aggregato" è gergo di settore — il buyer potrebbe cercare "acquisto gruppo energia", "consulenza mercato libero". Validare il lessico con 5-10 interviste al target prima di investire in advertising/contenuti.

### Valutazione complessiva (marketing)

**7/10 come messaggio, 2/10 come macchina di acquisizione.** Il posizionamento è forte e distintivo, il copy fa della sobrietà un argomento di vendita. Ma oggi il sito non può convertire nulla: senza contatti, senza identità personale, senza misura, è un esercizio stilistico eccellente. I primi due interventi (via di contatto + identità/proof) spostano più valore di qualunque altra ottimizzazione.

---

## 3. Senior Web Designer Advisor — UX, UI, accessibilità

### Cosa funziona bene

- **Sistema visivo disciplinato.** Palette a 4 famiglie (grafite/avorio/verde/lime) con uso parsimonioso dell'accento — il lime appare quasi solo su CTA e micro-dettagli, esattamente come dichiarato. Bordi sottili, superfici piatte, zero ombre, zero animazioni decorative: coerenza totale col concept "editoriale/sobrio". Rare are site that stick to their own art direction this consistently.
- **Tipografia efficace.** Display serif di sistema (Iowan/Palatino/Georgia) per i titoli + sans system per il corpo: gerarchia chiara, metriche leggibili, `text-wrap: balance/pretty` usato correttamente. Scelta zero-network intelligente.
- **Layout solido.** Grid a `max-w-6xl`, ritmo verticale costante (`Section` con varianti chiaro/scuro/verde), alternative rhythm tra fasce chiare/scure che guida la lettura della home senza monotonia.
- **Accessibilità strutturale buona:** skip-link, `lang="it"`, heading gerarchici, liste semantiche, `dl/dt/dd` per glossario e posizionamento, `figure/figcaption`, focus-visible globale con outline 2px, `aria-expanded/aria-controls` sul menu, `prefers-reduced-motion` rispettato. Base sopra la media.
- **FlowDiagram CSS-only:** astrazione del flusso consumi→consegna realizzata con markup semantico (`ol`), decorazioni `aria-hidden`. Soluzione elegante che evita immagini esterne.

### Critiche e miglioramenti

1. **Ritmo verticale uniforme = monotonia lunga.** Home con 8 sezioni a densità simile: tutto "medio", niente che respiri. Un designer senior introdurrebbe 1-2 momenti di pausa (una sezione a campitura piena con una sola frase grande, es. la claim di posizionamento) per creare memoria visiva. Oggi la home è *corretta* ma poco *desiderabile* da scorrere.
2. **Hero senza volto.** In un sito personale/professionale il primo schermo non mostra persona, luogo o oggetto concreto: solo testo + diagramma. Appena arriva la foto confermata, integrarla in hero o in una fascia dedicata cambia radicalmente la percezione di affidabilità. (Nota: la foto è giustamente in attesa di conferma — ma il layout va preparato per accoglierla.)
3. **Active navigation state mancante** (lato dev l'ha già notato): lato UX è orientamento — l'utente non sa dove si trova. Fix economico con `usePathname()`.
4. **Gerarchia dei bottoni ambigua.** `CtaLink` "solida" su fondo chiaro è grafite-950 (cioè il colore del *testo*), mentre il lime è riservato ai fondi scuri: su molte pagine la CTA primaria sembra secondaria. Consigliato definire una regola unica: primaria = lime (con testo grafite, contrasto ok) o verde-800 pieno; contorno = neutra. Oggi il sistema è bello ma non comunica "dove clicco".
5. **Contrasto da certificare, non dichiarare.** Etichette uppercase `text-xs tracking-[0.2em]` in grafite-500 su avorio (~3.4:1 stimato) sono borderline per testo piccolo; idem grafite-300 su grafite-900. Serve una passata con axe/contrast tool e eventuale salto di tonalità. Il brief dice "contrasto verificato": produrre l'evidenza.
6. **Mobile: menu come unica interazione, ma sticky header + backdrop-blur su iOS può sfarfallare**; inoltre il pannello mobile non chiude su Escape/resize. Piccoli attriti, facili da eliminare.
7. **Nessuna affordance di progresso/orientamento nelle pagine lunghe** (gas-psv, acquisto-diretto): un mini-index ancorato o semplicemente ancore interne con `id` sulle sezioni aiuterebbero i decisori che tornano sul sito più volte.
8. **Icona/marchio:** il segno astratto (barre crescente) è generico e non protetto; quando arriverà il nome definitivo, serve un wordmark, non solo un quadratino verde nell'header.

### Valutazione complessiva (design)

**8/10 come sistema, 6/10 come esperienza.** Il design system è maturo, coerente, accessibile nella struttura — superiore a gran parte dei siti professionali italiani. Le debolezze sono di *regia* (ritmo, gerarchia delle CTA, assenza del volto) e di rifinitura (stati attivi, contrasti da misurare). Nessun intervento richiede riprogettazione: sono aggiustamenti di un impianto già buono.

---

## Sintesi incrociata e piano d'azione consigliato

| Priorità | Azione | Owner | Sforzo |
|---|---|---|---|
| P0 | Recapiti + pagina contatti (sblocca qualsiasi conversione) | Titolare → dev/design | ore |
| P0 | Dati legali: P.IVA, ragione sociale, privacy, cookie policy | Titolare + consulente | giorni |
| P1 | Identità: nome, brand, foto, LinkedIn coerenti ovunque | Titolare → design | giorni |
| P1 | `.env.example`, rimozione log dal repo, `lastModified` sitemap | dev | <1h |
| P1 | Active-state menu + chiusura Escape + regola CTA primaria | dev/design | mezza giornata |
| P2 | OG images/twitter card espliciti, dominio + verifica Search Console | dev/marketing | mezza giornata |
| P2 | Certificazione contrasto WCAG (report allegato al brief) | design | mezza giornata |
| P3 | CI lint+tsc+build (+Lighthouse opzionale) | dev | mezza giornata |
| P3 | Lead magnet PDF "checklist contratto" + analytics privacy-first | marketing | 1-2 giorni |
| P3 | Local SEO (GBP Bologna, landing "consulente energia industriale Emilia-Romagna") | marketing | 1 giorno |

**Giudizio complessivo:** progetto tecnicamente sano, editorialmente raro per disciplina, commercialmente ancora muto. La distanza tra "sito bellissimo" e "sito che porta incarichi" si copre con i quattro blocchi P0-P1, non con altre ottimizzazioni del codice o del design.
