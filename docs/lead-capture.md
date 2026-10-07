# Raccolta lead B2B — Web3Forms

La home e `/contatti` usano lo stesso modulo per richieste di primo
inquadramento. Raccoglie un profilo aziendale strutturato; non genera
preventivi, non assegna punteggi automatici e non accetta allegati.

## Configurare Web3Forms

1. Crea un form/account su [Web3Forms](https://web3forms.com/) e verifica
   l'indirizzo email che deve ricevere le richieste.
2. Copia l'**Access Key** generata dal servizio.
3. Pubblica e verifica una informativa privacy completa. Deve indicare il
   titolare, finalità, base giuridica, conservazione, destinatari/fornitori,
   trasferimenti internazionali e modalità per esercitare i diritti. La FAQ di
   Web3Forms dichiara server negli Stati Uniti: verifica i termini e le misure
   di trasferimento applicabili prima del go-live.
4. Imposta nel tuo `.env.local` e nelle variabili d'ambiente del deployment
   **prima della build** (le variabili `NEXT_PUBLIC_` vengono incluse negli
   asset pubblici al build time):

   ```dotenv
   NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=la-tua-access-key
   NEXT_PUBLIC_PRIVACY_POLICY_URL=https://tuodominio.it/privacy
   ```

5. Riavvia in locale o ridistribuisci il sito. Il form mostra **Invio online**
   soltanto quando entrambi i valori sono validi; diversamente il pulsante resta
   disattivato e non viene simulato alcun invio.

La chiave Web3Forms è un identificatore pubblico, non un token per accedere a
dati riservati; la documentazione del servizio dice che può essere presente
nel codice client. In questo progetto viene letta tramite una variabile
`NEXT_PUBLIC_` e inviata dal browser direttamente a
`https://api.web3forms.com/submit`. Questo percorso è adatto al piano gratuito:
Web3Forms raccomanda l'invio dal client e indica che l'invio server-side richiede
un piano a pagamento e l'autorizzazione dell'IP del server
([API reference](https://docs.web3forms.com/getting-started/api-reference),
[FAQ access key](https://docs.web3forms.com/getting-started/faq)). Poiché la
richiesta parte dal browser, Web3Forms riceve anche l'indirizzo IP e i metadati
tecnici di connessione del visitatore.

## Cosa include il piano gratuito

La pagina prezzi Web3Forms indica **250 invii al mese** e **30 giorni** di
cronologia visibile nella dashboard per il piano Free. È quindi un registro
semplice, non un CRM né un archivio operativo a lungo termine. Scarica o
trasferisci i dati prima che escano dalla finestra di cronologia, se devi
conservarli secondo una policy definita. Il piano gratuito elenca un destinatario
per form; controlla i limiti aggiornati prima del go-live
([prezzi ufficiali](https://web3forms.com/pricing)).

Le informazioni di conservazione pubblicate dal servizio non sono del tutto
uniformi: la pagina prezzi mostra 30 giorni di cronologia in dashboard e indica
una retention dei dati più lunga, mentre la FAQ afferma che i form non vengono
conservati dal servizio. La FAQ cita inoltre server nella regione US-East.
Verifica l'informativa e le condizioni aggiornate di Web3Forms prima di
raccogliere dati personali e descrivi correttamente fornitore, trasferimenti e
retention nell'informativa del tuo sito
([FAQ privacy](https://docs.web3forms.com/getting-started/faq)).

## Dati inviati

- nome e cognome, email di lavoro e azienda;
- ruolo e settore (settore facoltativo);
- numero indicativo di siti;
- ambiti d'interesse selezionati;
- fasce annuali orientative per elettricità e gas (facoltative);
- orizzonte decisionale e nota libera facoltativa (massimo 800 caratteri);
- URL della privacy notice, pagina d'invio e UTM source/medium/campaign, se
  presenti nell'URL;
- attestazione di presa visione dell'informativa e richiesta di ricontatto.

Le fasce energetiche sono indicative e non sono soglie di ammissibilità. Non
sono raccolti allegati, POD o PDR; il form avvisa di non inserire informazioni
riservate. Il sito non imposta cookie di tracciamento. Non si richiede un
consenso marketing.

Il browser invia le opzioni come campi descrittivi personalizzati Web3Forms,
insieme ai campi riconosciuti `name`, `email` e `subject`; `email` è il recapito
di risposta (*Reply-To*). Il servizio accetta campi aggiuntivi e li inoltra
nell'email; gli invii vengono inoltre elencati nella dashboard secondo i limiti
del piano. Il messaggio di successo compare solo quando l'API risponde con
`success: true`
([API reference](https://docs.web3forms.com/getting-started/api-reference)).

## Sicurezza e limiti

L'Access Key è pubblica per design. Come per ogni form aperto, una chiave
esposta può essere usata da terzi per tentare invii indesiderati; Web3Forms
segnala filtri anti-spam e captcha, mentre la restrizione per dominio è indicata
come funzione Pro. Il sito aggiunge un campo esca e non invia se viene
compilato; per traffico reale monitora la casella e la dashboard e valuta
hCaptcha o una protezione edge contro abusi. Non usare la chiave come se fosse
una credenziale segreta.

## Verifiche prima della pubblicazione

- informativa pubblica completa e verificata, con Web3Forms e gli eventuali
  trasferimenti extra-SEE dichiarati correttamente;
- access key configurata nell'ambiente del sito, non committata nel repository;
- test con dati fittizi: verificare email di notifica, registrazione in
  dashboard e messaggio di successo;
- definire esportazione e cancellazione dei lead, dato il limite di cronologia
  mostrata dal piano Free;
- se lo spam diventa rilevante, attivare hCaptcha o una protezione edge.
