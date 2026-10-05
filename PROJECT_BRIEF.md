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
- risultare sobrio, credibile e professionale, senza toni pubblicitari;
- **non contenere dati inventati**: nessun numero, prezzo, percentuale di
  risparmio, logo, nome di cliente o riferimento normativo non verificato.

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

La navigazione è definita in un unico punto (`lib/site.ts`): se una pagina non
esiste, il collegamento non esiste.

## 4. Regole editoriali (vincolanti)

1. **Nessun dato non verificato.** Niente volumi, risparmi, prezzi o elenchi di
   clienti se non forniti dal titolare e documentabili.
2. **Linguaggio concreto e sobrio**, in italiano. Frasi brevi, nessun
   superlativo.
3. **Distinguere sempre** fra: fatti documentati, ipotesi dichiarate e
   valutazioni.
4. **Perimetro esplicito.** Ogni sezione dice anche cosa non è compreso.
5. **Nessun modulo o pulsante inattivo.** Le chiamate all'azione portano solo a
   pagine reali del sito.
6. **Recapiti assenti finché non confermati** (vedi
   `docs/informazioni-da-confermare.md`).

## 5. Scelte di design

- **Palette:** grafite (base e testi), avorio (sfondi), verde profondo
  (struttura e bordi), **lime** come unico accento e con uso parsimonioso.
- **Tipografia:** serif di sistema per i titoli, sans di sistema per i testi.
  Nessun font scaricato dalla rete: il sito non dipende da servizi esterni.
- **Impianto visivo:** bordi sottili e superfici piatte, nessuna ombra, nessuna
  animazione decorativa.
- **Grafica astratta** del flusso di approvvigionamento (consumi → aggregazione →
  produttori → consegna) realizzata **solo con CSS**, senza immagini.
- **Accessibilità:** struttura semantica (heading, liste, `dl`), link "salta al
  contenuto", stati di focus visibili, contrasto verificato sui fondi scuri.
- **Anteprima social e SEO essenziale:** immagine di condivisione generata col
  codice (`app/opengraph-image.tsx`), sitemap e robots basati sul dominio
  impostato con `NEXT_PUBLIC_SITE_URL`, URL canonici, dati strutturati
  essenziali, colori del tema del browser, icona del sito in palette, pagina
  404 guidata alle pagine reali.

## 6. Tecnologia

- **Next.js 16** (App Router) con **TypeScript**.
- **Tailwind CSS 4** con i token di design definiti in `app/globals.css`.
- **ESLint** con `eslint-config-next`.
- Nessun database, nessuna autenticazione, nessun servizio di analisi,
  nessun CMS: solo pagine statiche.

Struttura del progetto:

```
app/            pagine e layout (App Router)
components/     componenti riutilizzabili (header, footer, sezioni, grafica)
lib/            dati condivisi (navigazione, tappe del flusso, URL pubblico,
             dati strutturati)
docs/           note di progetto e informazioni da confermare
.env.example    modello per NEXT_PUBLIC_SITE_URL (dominio pubblico)
```

## 7. Comandi

```bash
npm run dev     # anteprima locale su http://localhost:3000
npm run build   # build di produzione
npm run lint    # controllo ESLint
npx tsc --noEmit  # controllo dei tipi
```

## 8. Da completare prima della pubblicazione

- Recapiti, dati fiscali e note legali (informativa privacy, cookie policy).
- Foto del professionista e verifica di eventuali riferimenti normativi, da
  citare solo se confermati.
- Casi seguiti o referenze, solo se autorizzati per iscritto.