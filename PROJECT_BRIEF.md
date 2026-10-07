# PROJECT BRIEF — Sito di consulenza energetica per imprese

Documento di riferimento del progetto. Descrive obiettivi, struttura e regole
editoriali. Va aggiornato quando cambiano contenuti o tecnologia.

---

## 1. Obiettivo del sito

Sito personale/professionale di un consulente energetico senior con base a
**Bologna** e **operatività nazionale**, rivolto alle **imprese** (non ai
privati).

Il sito deve:

- spiegare con chiarezza di cosa si occupa il consulente;
- presentare i tre ambiti di lavoro: **acquisto aggregato di energia
  elettrica**, **approvvigionamento gas sul PSV**, **contrattualistica,
  diagnosi ed efficienza energetica**;
- raccogliere richieste B2B qualificate con un modulo in home e in `/contatti`;
- risultare sobrio, credibile e professionale, senza toni pubblicitari;
- **non contenere dati inventati**: nessun risultato, prezzo, percentuale di
  risparmio, logo o nome cliente attribuito al consulente senza prova. Sono
  ammessi riferimenti macroeconomici esterni se fonte, periodo, campione e
  limiti sono espliciti; non vanno presentati come risultati garantiti o dati
  live.

## 2. Pubblico di riferimento

- Imprese con più siti produttivi e consumi elettrici e/o gas rilevanti.
- Responsabili tecnici, amministrativi o di stabilimento che devono decidere su
  contratti di fornitura e interventi di efficienza.
- Contatti che cercano un referente tecnico stabile, non un venditore di
  forniture.

## 3. Struttura informativa

| Percorso             | Contenuto principale                                                     |
| -------------------- | ------------------------------------------------------------------------ |
| `/`                  | Posizionamento, metodo, sintesi delle aree di lavoro                        |
| `/acquisto-aggregato` | Acquisto aggregato di energia elettrica: dal consumo alla consegna         |
| `/gas-psv`           | Gas al PSV: profilo di consumo, scelte di copertura, gestione del rischio  |
| `/energia-come-servizio` | Energia come servizio (EaaS): definizione, contratti, perimetro del ruolo |
| `/servizi`           | Contrattualistica, diagnosi energetiche, efficienza energetica             |
| `/chi-sono`          | Profilo professionale, aree di competenza, regole di lavoro                |
| `/contatti`          | Modulo B2B qualificante e primo inquadramento                                |

La navigazione è definita in un unico punto (`lib/site.ts`): se una pagina non
esiste, il collegamento non esiste.

## 4. Regole editoriali (vincolanti)

1. **Nessun dato non verificato.** Niente risultati, volumi, risparmi, prezzi
   o referenze attribuiti all'attività senza documentazione. I benchmark di
   mercato esterni devono avere fonte, data, perimetro e disclaimer; mai
   trasformarli in promesse o in un feed real-time.
2. **Linguaggio concreto e sobrio**, in italiano. Frasi brevi, nessun
   superlativo.
3. **Distinguere sempre** fra: fatti documentati, ipotesi dichiarate e
   valutazioni.
4. **Perimetro esplicito.** Ogni sezione dice anche cosa non è compreso.
5. **Nessun invio simulato.** Il modulo B2B usa l'API Web3Forms dal browser e
   conferma l'invio solo dopo risposta positiva del servizio. Rimane disattivato
   finché access key e informativa privacy non sono configurate.
6. **Recapiti assenti finché non confermati** (vedi
   `docs/informazioni-da-confermare.md`).

## 5. Scelte di design

- **Tema "DarkVilla · Quiet Engineering":** blu-notte/antracite desaturato,
  avorio, verde profondo per struttura e superfici chiare, champagne satinato
  come accento singolo. Un bagliore champagne radiale si muove lentamente sul
  fondo (54 secondi, contrasto basso); non ci sono gradienti vistosi o ombre.
- **Tipografia:** serif editoriale di sistema per i titoli, sans-serif tecnica
  per il corpo e monospace per indici, misure e metadati. Nessun font esterno.
- **Composizione:** hero asimmetrico, griglia di servizi 7/5 con un pilastro
  dominante e due complementari, reticolo tecnico tenue, bordi sottili e
  superfici piatte.
- **Micro-interazioni:** lievi transizioni su focus/hover e reveal basato su
  scroll timeline CSS; contenuti sempre leggibili se l'effetto non è supportato.
  `prefers-reduced-motion` disattiva animazioni, transizioni e scroll dolce.
- **Fotografia:** ritratto professionale confermato in `public/darkvilla-hero.jpg`,
  inserito in una cornice separata dal testo (nessuna scritta sovrapposta).
- **Gerarchia delle CTA:** una sola primaria per schermata (champagne su scuro,
  verde-800 su fascia chiara); le chiusure usano `Chiusura` (una primaria e
  link testuali). Il form è disattivato solo finché mancano la key Web3Forms o
  l'informativa; non mostra mai un invio simulato.
- **Marchio ufficiale:** lockup "EnerVilla · Deep Energy" e payoff
  "Consulenza energetica per imprese", centralizzati in `lib/site.ts`.
- **Metriche e accessibilità:** ogni benchmark macroeconomico è collegato alla
  fonte e presenta periodo/perimetro; nessun numero è attribuito a EnerVilla.
  Markup semantico, skip link, focus visibile, target ≥ 44px, menu mobile con
  contenimento del focus e rispetto delle preferenze di movimento ridotto.
- **SEO essenziale:** OG generata dal codice, sitemap, robots, canonical e dati
  strutturati; dominio configurato con `NEXT_PUBLIC_SITE_URL`.

## 6. Tecnologia

- **Next.js 16** (App Router) con **TypeScript**.
- **Tailwind CSS 4** con i token di design definiti in `app/globals.css`.
- **ESLint** con `eslint-config-next`.
- Nessun database, autenticazione, analytics o CMS. Il modulo invia i dati a
  Web3Forms dal browser; il sito non conserva lead. In assenza di access key o
  informativa privacy il form resta disattivato.

Struttura del progetto:

```
app/            pagine e layout (App Router)
components/     header, footer, sezioni, grafica e modulo lead B2B
lib/            navigazione, dati condivisi, opzioni e configurazione del form
docs/           note di progetto, privacy e configurazione Web3Forms
.env.example    modello per dominio, Web3Forms e URL informativa privacy
```

## 7. Comandi

```bash
npm run dev     # anteprima locale su http://localhost:3000
npm run build   # build di produzione
npm run lint    # controllo ESLint
npx tsc --noEmit  # controllo dei tipi
```

## 8. Da completare prima della pubblicazione

- Completare e verificare l'informativa privacy; creare il form Web3Forms,
  verificare l'email e configurare `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` prima di
  attivare la raccolta lead. Guida: `docs/lead-capture.md`.
- Recapiti, dati fiscali e ulteriori note legali.
- Aggiornamento periodico dei dati di mercato e verifica delle fonti prima di
  ogni revisione dei benchmark statici; non esiste un collegamento a un feed live.
- Casi seguiti o referenze, solo se autorizzati per iscritto.