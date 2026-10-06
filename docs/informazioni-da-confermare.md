# Informazioni da confermare prima della pubblicazione

Questo file raccoglie tutto ciò che **non è stato inserito nel sito** perché non
disponibile o non verificabile. Serve a distinguere in modo netto tra contenuti
pronti e contenuti in attesa di conferma da parte del titolare.

Regola di lavoro: nulla di quanto segue va pubblicato finché non arriva una
conferma esplicita. In assenza di conferma, le sezioni restano come sono: prive
di recapiti, numeri e riferimenti legali.

---

## 1. Identità e recapiti (priorità alta)

| Voce                                     | Stato      | Note |
| ---------------------------------------- | ---------- | ---- |
| Nome e cognome del professionista        | mancante   | Il sito usa la dicitura descrittiva "Consulenza energetica per imprese" |
| Ragione sociale / forma giuridica        | mancante   | Da indicare solo se esercita come società |
| Partita IVA e codice fiscale             | mancante   | Necessari nel footer per l'attività professionale |
| Sede legale e indirizzo completo         | mancante   | Ora compare solo "Bologna" come città base |
| Telefono                                 | mancante   | |
| Indirizzo email professionale            | mancante   | |
| Profilo LinkedIn o altri canali          | mancante   | |
| Orari o modalità di contatto             | mancante   | |

## 2. Dati professionali da documentare

| Voce                                             | Stato    | Note |
| ------------------------------------------------ | -------- | ---- |
| Anni di esperienza (oggi scritto "oltre vent'anni") | da confermare | Verificare il numero esatto o mantenere la formula generica |
| Titolo di studio e iscrizioni ad albi/elenchi     | mancante | Da inserire solo se pertinente e documentabile |
| Certificazioni (es. EGE, ESCo, altre)             | mancante | Richiedono riferimento all'ente e anno |
| Percorso professionale (tappe sintetiche)         | mancante | Nessun datore di lavoro va citato senza autorizzazione |
| Consulenza tecnica di parte (CTU/CTP)             | da confermare | Da citare solo se realmente svolta |
| Formazione svolta come docente                    | mancante | Solo con dati verificabili |

## 3. Struttura contrattuale e operativa (da definire)

Da confermare con il titolare prima di pubblicare qualunque dettaglio su:

- **Acquisto aggregato:** chi sono i produttori con cui si opera, come viene
  costruito il perimetro di acquisto, quali regole valgono tra le imprese
  aggregate, chi firma i contratti e con quale durata.
- **Gas al PSV:** modalità di operatività per conto dei clienti, strumenti
  utilizzati, limiti di mandato, coperture assicurative o abilitazioni
  richieste, tempi di esecuzione.
- **Contrattualistica:** se l'attività è di sola analisi o comprende anche
  assistenza nella trattativa e nella firma.
- **Diagnosi energetiche:** se vengono svolte secondo una norma specifica (da
  citare solo con riferimento verificato) e con quale livello di dettaglio.
- **Efficienza energetica:** quali tipologie di intervento vengono seguite e con
  quali figure tecniche esterne si collabora.
- **Energia come servizio (EaaS):** se il consulente ha già seguito pratiche su
  offerte EaaS o contratti a prestazione (da citare solo con esperienza reale);
  per ora la pagina descrive il modello e il perimetro del ruolo, senza
  dichiarare esperienze non verificate. Aggiornamento ott-2026: le affermazioni tecniche della pagina sono ricondotte a 7 fonti pubbliche verificate (IRENA, IEA, Banca Mondiale, JRC, EVO/IPMVP, Transparense/EED, DPR 412/1993), elencate in pagina.
- **Modalità di incarico e compensi:** non presenti nel sito, da decidere se
  pubblicare o tenere fuori sito.

## 4. Documenti legali (obbligatori se il sito è online)

| Documento                                  | Stato    | Note |
| ------------------------------------------ | -------- | ---- |
| Informativa privacy (GDPR)                 | mancante | Necessaria anche con soli dati inviati per email |
| Cookie policy                              | mancante | Al momento il sito non usa cookie |
| Note legali / condizioni d'uso             | mancante | Da collegare nel footer |
| Consensi e registro dei trattamenti        | mancante | Da predisporre prima della pubblicazione |

## 5. Elementi visivi e materiali

| Elemento                                   | Stato    | Note |
| ------------------------------------------ | -------- | ---- |
| Foto professionale (ritratto del titolare) | **caricata e in uso** | `public/darkvilla-hero.jpg` (1584×672, ~40 KB), mostrata intera nell'hero della home con didascalia neutra (nessun nome pubblicato). Consenso esplicito del titolare alla pubblicazione online confermato il 06/10/2026. |
| Anteprima social (1200×630)                | completata | Generata col codice in `app/opengraph-image.tsx` (nessuna foto, palette grafite/avorio/verde/lime, flusso consumi → consegna) |
| Riferimento visivo `docs/DarkVilla.jpg`    | **archivio** | Copia originale del ritratto (qualità piena); la copia servita è `public/darkvilla-hero.jpg` (compressa, ~40 KB). Nota: "DarkVilla" è il nome del tema scuro + il cognome del titolare (Villa), nessun riferimento a edifici. Le vecchie note su "villa notturna / finestra accesa / bagliore caldo" descrivevano un'immagine inesistente e sono state rimosse ovunque. |
| Logo o marchio | **adottato 06/10/2026** | Lockup ibrido ufficiale «EnerVilla · Deep Energy» in `lib/site.ts` (`marchio`: nome + descrittore + lockup + payoff). Restano: verifica anteriorità UIBM/EUIPO con professionista; registrazione enervilla.it (+ .com difensivo) |
| Casi seguiti / referenze                    | assenti  | Solo con autorizzazione scritta dei clienti |
| Loghi di produttori o partner              | assenti  | Da inserire solo con autorizzazione |

## 6. Aspetti SEO e contenuti futuri

- **Dominio definitivo** da mettere in `.env.local` (`NEXT_PUBLIC_SITE_URL`), usato
  per metadati assoluti, anteprime sui social, sitemap e robots.
- **Anteprima social, mappa del sito, robots e pagina 404** già implementati;
  da ricontrollare quando il dominio definitivo è noto.
- **Google Business Profile** e altri canali: da valutare.
- **FAQ pubblica**: possibile, ma solo con risposte verificate.
- **Contenuti editoriali** (es. spiegazioni sul mercato energetico): da
  pianificare solo con dati aggiornati e fonti citate.

---

## Come procedere

1. Compilare la sezione 1 con i recapiti desiderati.
2. Decidere quali dati della sezione 2 pubblicare.
3. Definire la sezione 3 prima di scrivere qualunque dettaglio operativo.
4. Preparare i documenti della sezione 4 con un consulente.
5. Fornire i materiali visivi della sezione 5.
6. Solo a quel punto aggiornare le pagine interessate.