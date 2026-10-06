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

1. ~~Scelta variante~~ — FATTO 06/10/2026: lockup ibrido «EnerVilla · Deep Energy» (vedi §10).
2. Verifica anteriorità marchio (UIBM/EUIPO) con professionista.
3. Registrazione `enervilla.it` (+ `.com` difensivo) o del dominio scelto.
4. Applicazione al sito + favicon definitiva + aggiornamento docs.

---

## 9. Deep-dive: "Deep Energy" (ottobre 2026)

Su proposta del titolare ("mi piace EnerVilla, ma pensavo anche a qualcosa
come Deep Energy"), analisi dedicata con gli stessi criteri del §2.

### 9.1 I meriti veri (steelman)

- **Profondità come promessa**: analisi a fondo di dati, contratti e mercato —
  coerente con "dati prima delle opinioni" e col metodo in 4 fasi.
- **Risonanza settoriale**: in finanza e mercati *"deep market"* indica un
  mercato liquido e profondo — eco felice per aggregazione e operatività PSV.
- Breve (4 sillabe), moderno, internazionale; `deepenergy.it` non risolve
  (probabilmente libero, verifica DNS 06/10/2026).

### 9.2 I cinque problemi (evidence-based)

1. **Affollamento nel settore**: almeno 5 omonimi "Deep Energy" già attivi
   nell'energia worldwide — Deep Energy Capital (geotermia, Londra,
   deepenergy.capital), DEEP Energy Specialists (oil & gas, Texas),
   Deep Energy Development (oil & gas, Nigeria), Deep Energy Technologies
   (e-frac, USA), Deep Energy Sdn Bhd (offshore, Malesia). Rischio
   confusione e passaparola disperso.
2. **SEO impraticabile**: "deep energy" è anche termine generico di settore
   (es. *deep energy renovation* in ambito UE): un sito nuovo competerebbe
   con un termine, non con dei concorrenti.
3. **Marchio debole**: due parole generiche inglesi (qualità + campo
   merceologico) = alto rischio di rifiuto EUIPO per difetto di carattere
   distintivo/descrittività (art. 7 Reg. 2017/1001; cfr. caso "BioMarkt",
   Trib. UE T-641/21). Un nome coniato come EnerVilla è registrabile,
   un descrittivo va solo difeso a fatica.
4. **Fluency per il pubblico italiano**: Alter & Oppenheimer (2006, PNAS)
   mostrano che i nomi facili da pronunciare ottengono più fiducia e
   preferenza. "Deep" per un decisore italiano si legge "dip" ma si scrive
   con due "e" ("deep con due e", a ogni telefonata): frizione di
   dettatura e digitazione. EnerVilla si legge come si scrive.
5. **Ownability dimezzata**: `deepenergy.com` e `deep-energy.com` risultano
   occupati (solo `.it` libero); la rete semantica di "deep" mescola
   accezioni negative (deep web, deepfake, deep state) a quelle positive
   (deep dive) — rumore connotativo su un brand della fiducia.

### 9.3 Punteggio comparativo

| Candidato | C1 | C2 | C3 | C4 | C5 | C6 | **Tot.** |
|---|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| A. EnerVilla | 4 | 5 | 5 | 5 | 4 | 4 | **27** |
| **F. Deep Energy** | 3 | 3 | 1 | 4 | 1 | 3 | **15** |

### 9.4 Come tenere l'evocatività senza pagarne i costi

1. **Nome del metodo (consigliato)**: "Il metodo Deep Energy" dentro il
   brand EnerVilla — dati → analisi → opzioni → decisione. Tutta
   l'evocatività, zero fabbisogno di marchio/dominio/SEO.
2. **Nome di prodotto**: "Deep Energy Audit" / "Deep Energy Report" per
   un'offerta/prodotto specifico.
3. **Ibrido (se piace come brand)**: "EnerVilla · Deep Energy" — la
   distintività la porta EnerVilla, Deep Energy fa da descrittore.
4. **Sconsigliati**: masterbrand puro "Deep Energy"; "Energia Profonda"
   (poetico, inadatto al B2B industriale); "Deep Energia" (ibrido che
   somma i difetti di entrambi).

### 9.4 Verdetto

Deep Energy come masterbrand: **15/30 contro 27/30 di EnerVilla**. L'idea è
buona come *contenuto* (metodo/prodotto), debole come *contenitore*
(marchio). Vedi variante visiva V5 in `docs/marchio-varianti.html`.

---

## 10. Decisione (06/10/2026)

Il titolare adotta il **lockup ibrido "EnerVilla · Deep Energy"** come marchio
ufficiale: masterbrand coniato (A) + descrittore evocativo (F), payoff
"Consulenza energetica per imprese". Applicato a header, footer, titoli,
anteprime social e dati strutturati. Restano: verifica anteriorità UIBM/EUIPO
con professionista e registrazione domini (`enervilla.it` + `.com` difensivo).
