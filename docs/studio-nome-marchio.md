# Studio sul nome e sul marchio — ottobre 2026

## 1. Contesto e vincoli

- Attività: consulente energetico per imprese (B2B industriale), base Bologna,
  operatività nazionale. Posizionamento: "referente tecnico stabile, non
  venditore di forniture".
- Il sito oggi non ha un marchio: usa la dicitura descrittiva "Consulenza
  energetica per imprese" e il segnaposto "Energia per imprese" (`marchio` in
  `lib/site.ts`). Il package npm si chiama `enervilla`.
- Il titolare si chiama Villa di cognome (nome di battesimo non ancora
  pubblicato): il cognome è spendibile nel marchio.
- Vincoli: sobrietà B2B (niente nomi playful), brevità, dominio `.it`
  registrabile, marchio difendibile, coerenza col tema visivo DarkVilla
  (scuro + lime, serif/sans di sistema, niente font esterni).

## 2. Metodo: i criteri di un buon nome B2B

Criteri adottati (sintesi della letteratura di naming B2B:
memorabilità, distintività, scalabilità, ownability; vedi WANT Branding,
"The Art and Strategy of B2B Naming", 2025):

| # | Criterio | Domanda |
|---|---|---|
| C1 | Strategico | Rafforza il posizionamento (tecnico, stabile, vicino al mercato)? |
| C2 | Memorabile | Breve, facile da pronunciare, ricordare e digitare? |
| C3 | Distintivo | Si distingue dai concorrenti ed è SEO-friendly (ricerca di brand)? |
| C4 | Scalabile | Regge negli anni, su servizi futuri e oltre Bologna? |
| C5 | Ownable | Dominio libero, marchio registrabile, nessuna omonimia pesante? |
| C6 | Sobrio | Tono adatto a responsabili tecnici/amministrativi industriali? |

Punteggi 1–5 per criterio (5 = ottimo).

## 3. Domini verificati il 06/10/2026

Verifica DNS (se non risolve è *probabilmente* libero; la conferma spetta al
registrar in fase di registrazione):

| Dominio | Stato |
|---|---|
| `enervilla.it` / `enervilla.com` | non risolvono → probabilmente liberi |
| `villaenergia.it` / `villa-energia.it` | non risolvono → probabilmente liberi |
| `energiavilla.it` | non risolve → probabilmente libero |
| `studiovilla.it`, `villaconsulting.it` | occupati |

## 4. Candidati

Tutti con payoff "Consulenza energetica per imprese" (mantenuto per SEO e
chiarezza finché il marchio non è noto).

### A. EnerVilla — compound dal cognome (già nel package name)
Marchio coniato: energia + Villa. Breve (4 sillabe), unico nelle ricerche,
dominio `.it` + `.com` liberi. Richiede il payoff accanto finché non è noto.
Lockup naturale nel tema DarkVilla.

### B. Villa Energia — cognome + settore
Chiaro al primo ascolto, personale, autorevole. Meno distintivo di A
("Villa" è un cognome diffuso, "energia" è generica): la coppia resta
comunque ricercabile e il dominio è libero.

### C. Studio Villa Energia — forma "studio"
Comunica struttura e continuità ("studio" = punto di riferimento stabile).
Più lungo, `studiovilla.it` occupato (servirebbe `studiovillaenergia.it`,
da verificare), "studio" può evocare studi legali/commercialisti.

### D. Villa Energy Consulting — inglese
Taglio internazionale, ma in un mercato B2B italiano tradizionale l'inglese
aggiunge distanza senza aggiungere distintività; `villaconsulting.it`
occupato; tre parole difficili da dettare al telefono.

### E. Descrittivo puro (status quo) — nessun marchio
Ottimo per SEO ("consulenza energetica imprese"), ma non è un marchio: non
memorabile, non registrabile, non cercabile come brand, zero passaparola.

### Variante B2 (quando il nome di battesimo sarà pubblico)
"Nome Villa — Energia per imprese": firma personale piena, massima fiducia
B2B (il cliente compra la persona). Da valutare dopo la pubblicazione
dell'identità completa.

## 5. Matrice di valutazione

| Candidato | C1 strat. | C2 memor. | C3 distint. | C4 scala | C5 ownable | C6 sobrio | **Tot.** |
|---|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| **A. EnerVilla** | 4 | 5 | 5 | 5 | 4* | 4 | **27** |
| B. Villa Energia | 5 | 4 | 3 | 4 | 4* | 5 | 25 |
| C. Studio Villa Energia | 4 | 3 | 3 | 3 | 3* | 4 | 20 |
| D. Villa Energy Consulting | 3 | 3 | 2 | 4 | 2 | 3 | 17 |
| E. Descrittivo (status quo) | 5 | 2 | 1 | 2 | 1 | 5 | 16 |

\* Ownability: domini verificati via DNS (vedi §3); la verifica di
registrabilità del marchio (UIBM/EUIPO, anteriorità) spetta a un
professionista prima dell'adozione definitiva.

## 6. Raccomandazione

1. **Prima scelta: A. EnerVilla** — "EnerVilla · Consulenza energetica per
   imprese". È l'unico candidato che costruisce un brand (breve, unico,
   dettabile, dominio libero, coerente col tema DarkVilla) senza rinunciare
   alla chiarezza, grazie al payoff. Il package name lo anticipa già.
2. **Fallback: B. Villa Energia** — se si preferisce la massima chiarezza
   immediata e il peso del cognome per esteso.
3. **Da scartare ora**: D (inglese posticcio + dominio occupato) ed E
   (restare senza marchio condanna il sito all'invisibilità di brand).

Le 4 varianti visive (lockup header, favicon, note d'uso) sono nella tavola
`docs/marchio-varianti.html` (apribile nel browser, solo CSS + font di
sistema, stessi token del sito).

## 7. Architettura del marchio (quando scelto)

- Marchio + payoff sempre insieme per i primi 12–24 mesi (header, footer,
  OG, preventivi): "EnerVilla — Consulenza energetica per imprese".
- Applicazione tecnica (30 minuti): `marchio` in `lib/site.ts`, title SEO,
  `opengraph-image.tsx`, `icon.svg`, didascalia ritratto.
- Email e dominio coerenti (`nome@enervilla.it`) appena registrati.

## 8. Prossimi passi

1. Il titolare sceglie una variante (A–D) o chiede nuove direzioni.
2. Verifica anteriorità marchio (UIBM/EUIPO) con professionista.
3. Registrazione `enervilla.it` (+ `.com` difensivo) o del dominio scelto.
4. Applicazione al sito + favicon definitiva + aggiornamento docs.
