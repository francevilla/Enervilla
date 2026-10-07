"use client";

import { useState, type FormEvent } from "react";
import {
  leadElectricityBandOptions,
  leadGasBandOptions,
  leadInterestOptions,
  leadRoleOptions,
  leadSectorOptions,
  leadSiteCountOptions,
  leadTimelineOptions,
} from "@/lib/lead-capture";

type LeadCaptureFormProps = {
  attiva: boolean;
  privacyUrl: string | null;
  accessKey: string | null;
  idPrefix?: string;
};

type StatoInvio = "idle" | "sending" | "success" | "error";

type Opzione = { value: string; label: string };

function prefissoUtm(parametri: URLSearchParams, nome: string) {
  return (parametri.get(nome) ?? "").slice(0, 120);
}

function valoreTesto(dati: FormData, nome: string) {
  const value = dati.get(nome);
  return typeof value === "string" ? value.trim() : "";
}

function etichettaOpzione(opzioni: readonly Opzione[], value: string) {
  return opzioni.find((opzione) => opzione.value === value)?.label ?? "";
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export function LeadCaptureForm({
  attiva,
  privacyUrl,
  accessKey,
  idPrefix = "richiesta",
}: LeadCaptureFormProps) {
  const [stato, setStato] = useState<StatoInvio>("idle");
  const [messaggio, setMessaggio] = useState("");
  const [erroreAmbiti, setErroreAmbiti] = useState(false);

  async function inviaRichiesta(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    if (!attiva || !accessKey || stato === "sending") return;

    const form = evento.currentTarget;
    const dati = new FormData(form);
    const interessi = dati.getAll("interests").map(String);

    if (interessi.length === 0) {
      setErroreAmbiti(true);
      setStato("error");
      setMessaggio("Seleziona almeno un ambito su cui desideri un confronto.");
      form.querySelector<HTMLInputElement>('input[name="interests"]')?.focus();
      return;
    }

    setErroreAmbiti(false);
    setStato("sending");
    setMessaggio("");

    const website = valoreTesto(dati, "website");
    if (website) {
      // Campo esca: non inoltrare bot che lo compilano, senza rivelare il filtro.
      form.reset();
      setStato("success");
      setMessaggio("Richiesta ricevuta. Grazie per aver condiviso il contesto.");
      return;
    }

    const nome = valoreTesto(dati, "fullName");
    const email = valoreTesto(dati, "businessEmail");
    const azienda = valoreTesto(dati, "company");
    const ruolo = valoreTesto(dati, "role");
    const settore = valoreTesto(dati, "sector");
    const siti = valoreTesto(dati, "siteCount");
    const elettricita = valoreTesto(dati, "electricityBand");
    const gas = valoreTesto(dati, "gasBand");
    const orizzonte = valoreTesto(dati, "decisionHorizon");
    const nota = valoreTesto(dati, "message");
    const parametri = new URLSearchParams(window.location.search);
    const aziendaPerOggetto = azienda.replace(/[\r\n]+/g, " ").slice(0, 80);

    // Web3Forms accetta campi personalizzati e li inoltra nell'email di notifica.
    // L'access key è pubblica per design; non è un token di accesso al CRM.
    const payload = {
      access_key: accessKey,
      from_name: "EnerVilla · Richiesta B2B",
      subject: `Nuova richiesta dal sito · ${aziendaPerOggetto}`,
      name: nome,
      email,
      company: azienda,
      role: etichettaOpzione(leadRoleOptions, ruolo),
      sector: etichettaOpzione(leadSectorOptions, settore) || "Non indicato",
      sites_involved: etichettaOpzione(leadSiteCountOptions, siti),
      areas_of_interest: interessi
        .map((valore) => etichettaOpzione(leadInterestOptions, valore))
        .join(", "),
      electricity_consumption: etichettaOpzione(
        leadElectricityBandOptions,
        elettricita,
      ) || "Non indicato",
      gas_consumption: etichettaOpzione(leadGasBandOptions, gas) || "Non indicato",
      decision_horizon: etichettaOpzione(leadTimelineOptions, orizzonte),
      message: nota,
      privacy_notice_url: privacyUrl ?? "",
      privacy_acknowledged: dati.get("privacyAcknowledged") === "on" ? "Sì" : "No",
      page_path: window.location.pathname,
      utm_source: prefissoUtm(parametri, "utm_source"),
      utm_medium: prefissoUtm(parametri, "utm_medium"),
      utm_campaign: prefissoUtm(parametri, "utm_campaign"),
      botcheck: "",
    };

    try {
      const risposta = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      const esito: unknown = await risposta.json().catch(() => null);

      if (!risposta.ok || !isRecord(esito) || esito.success !== true) {
        setMessaggio(
          risposta.status === 429
            ? "Il servizio ha raggiunto il limite temporaneo di invii. Riprova più tardi."
            : "Non è stato possibile inviare la richiesta. Controlla i dati e riprova più tardi.",
        );
        setStato("error");
        return;
      }

      form.reset();
      setStato("success");
      setMessaggio(
        "Richiesta inviata. I dati sono stati trasmessi al servizio di raccolta e al recapito configurato.",
      );
    } catch {
      setStato("error");
      setMessaggio(
        "Connessione non disponibile. La richiesta non è stata inviata: verifica la rete e riprova.",
      );
    }
  }

  const statoId = `${idPrefix}-stato`;
  const ambitiHintId = `${idPrefix}-ambiti-hint`;
  const ambitiErrorId = `${idPrefix}-ambiti-error`;

  return (
    <div className="lead-form-panel">
      <div className="lead-form__heading">
        <div>
          <p className="technical-label text-[0.64rem] uppercase text-champagne-400">
            Brief iniziale / 01
          </p>
          <h3 className="mt-3 text-2xl text-avorio-50 sm:text-3xl">
            Il profilo dell&apos;impresa
          </h3>
        </div>
        <span
          className={`lead-form__availability ${attiva ? "is-active" : "is-pending"}`}
        >
          <span aria-hidden="true" />
          {attiva ? "Invio online" : "In attivazione"}
        </span>
      </div>

      {!attiva ? (
        <p className="lead-form__notice" role="status">
          Il modulo non è ancora disponibile. Prima della raccolta online vanno
          configurate l&apos;access key Web3Forms e l&apos;informativa privacy.
        </p>
      ) : null}

      <form className="lead-form" onSubmit={inviaRichiesta}>
        <fieldset className="lead-form__fieldset">
          <legend className="lead-form__legend">
            <span>01</span> Referente e azienda
          </legend>
          <div className="lead-form__grid lead-form__grid--two">
            <div className="lead-form__field">
              <label htmlFor={`${idPrefix}-nome`}>
                Nome e cognome <span aria-hidden="true">*</span>
              </label>
              <input
                id={`${idPrefix}-nome`}
                name="fullName"
                type="text"
                autoComplete="name"
                maxLength={120}
                placeholder="Nome Cognome"
                required
              />
            </div>
            <div className="lead-form__field">
              <label htmlFor={`${idPrefix}-email`}>
                Email di lavoro <span aria-hidden="true">*</span>
              </label>
              <input
                id={`${idPrefix}-email`}
                name="businessEmail"
                type="email"
                autoComplete="email"
                maxLength={254}
                placeholder="nome@azienda.it"
                required
              />
            </div>
            <div className="lead-form__field">
              <label htmlFor={`${idPrefix}-azienda`}>
                Azienda <span aria-hidden="true">*</span>
              </label>
              <input
                id={`${idPrefix}-azienda`}
                name="company"
                type="text"
                autoComplete="organization"
                maxLength={160}
                placeholder="Ragione sociale o gruppo"
                required
              />
            </div>
            <div className="lead-form__field">
              <label htmlFor={`${idPrefix}-ruolo`}>
                Il tuo ruolo <span aria-hidden="true">*</span>
              </label>
              <select id={`${idPrefix}-ruolo`} name="role" required defaultValue="">
                <option value="" disabled>
                  Seleziona un ruolo
                </option>
                {leadRoleOptions.map((voce) => (
                  <option key={voce.value} value={voce.value}>
                    {voce.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="lead-form__field">
              <label htmlFor={`${idPrefix}-settore`}>Settore</label>
              <select id={`${idPrefix}-settore`} name="sector" defaultValue="">
                <option value="">Seleziona (facoltativo)</option>
                {leadSectorOptions.map((voce) => (
                  <option key={voce.value} value={voce.value}>
                    {voce.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="lead-form__field">
              <label htmlFor={`${idPrefix}-siti`}>
                Siti coinvolti <span aria-hidden="true">*</span>
              </label>
              <select id={`${idPrefix}-siti`} name="siteCount" required defaultValue="">
                <option value="" disabled>
                  Seleziona una fascia
                </option>
                {leadSiteCountOptions.map((voce) => (
                  <option key={voce.value} value={voce.value}>
                    {voce.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </fieldset>

        <fieldset className="lead-form__fieldset">
          <legend className="lead-form__legend">
            <span>02</span> Esigenza e perimetro energetico
          </legend>
          <div className="lead-form__field">
            <div className="lead-form__label-row">
              <span id={ambitiHintId}>Su cosa vuoi un confronto?</span>
              <span className="lead-form__optional">Seleziona almeno un ambito</span>
            </div>
            <div
              className="lead-form__choices"
              role="group"
              aria-labelledby={ambitiHintId}
              aria-describedby={erroreAmbiti ? ambitiErrorId : undefined}
            >
              {leadInterestOptions.map((voce) => (
                <label className="lead-form__choice" key={voce.value}>
                  <input
                    type="checkbox"
                    name="interests"
                    value={voce.value}
                    aria-describedby={ambitiHintId}
                    onChange={() => {
                      if (erroreAmbiti) setErroreAmbiti(false);
                    }}
                  />
                  <span>{voce.label}</span>
                </label>
              ))}
            </div>
            {erroreAmbiti ? (
              <p className="lead-form__field-error" id={ambitiErrorId}>
                Seleziona almeno un ambito.
              </p>
            ) : null}
          </div>

          <p className="lead-form__helper">
            Le fasce di consumo sono indicative e non rappresentano una soglia
            di accesso ai servizi.
          </p>
          <div className="lead-form__grid lead-form__grid--two lead-form__consumption">
            <div className="lead-form__field">
              <label htmlFor={`${idPrefix}-elettricita`}>
                Elettricità · consumo annuo
              </label>
              <select
                id={`${idPrefix}-elettricita`}
                name="electricityBand"
                defaultValue=""
              >
                <option value="">Dato non disponibile / preferisco non indicarlo</option>
                {leadElectricityBandOptions.map((voce) => (
                  <option key={voce.value} value={voce.value}>
                    {voce.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="lead-form__field">
              <label htmlFor={`${idPrefix}-gas`}>Gas · consumo annuo</label>
              <select id={`${idPrefix}-gas`} name="gasBand" defaultValue="">
                <option value="">Dato non disponibile / preferisco non indicarlo</option>
                {leadGasBandOptions.map((voce) => (
                  <option key={voce.value} value={voce.value}>
                    {voce.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="lead-form__field lead-form__field--full">
              <label htmlFor={`${idPrefix}-tempi`}>
                Orizzonte della decisione <span aria-hidden="true">*</span>
              </label>
              <select
                id={`${idPrefix}-tempi`}
                name="decisionHorizon"
                required
                defaultValue=""
              >
                <option value="" disabled>
                  Seleziona un orizzonte
                </option>
                {leadTimelineOptions.map((voce) => (
                  <option key={voce.value} value={voce.value}>
                    {voce.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="lead-form__field lead-form__message-field">
            <label htmlFor={`${idPrefix}-messaggio`}>
              Qual è la decisione da prendere? <span className="lead-form__optional">Facoltativo</span>
            </label>
            <textarea
              id={`${idPrefix}-messaggio`}
              name="message"
              rows={4}
              maxLength={800}
              placeholder="Ad esempio: confrontare le condizioni in scadenza o definire un quadro dei consumi."
            />
            <p className="lead-form__helper">
              Non inserire dati di fornitura identificativi, bollette o
              informazioni riservate. Potrai condividere documenti in un
              secondo momento, su un canale concordato.
            </p>
          </div>
        </fieldset>

        {privacyUrl ? (
          <div className="lead-form__privacy">
            <input
              id={`${idPrefix}-privacy`}
              name="privacyAcknowledged"
              type="checkbox"
              required
            />
            <label htmlFor={`${idPrefix}-privacy`}>
              Ho letto l&apos;
              <a href={privacyUrl} target="_blank" rel="noopener noreferrer">
                informativa privacy
              </a>
              . Inviando la richiesta chiedo di essere ricontattato in merito.
            </label>
          </div>
        ) : null}

        {/* Campo esca anti-spam: non visibile né raggiungibile da tastiera. */}
        <div className="lead-form__trap" aria-hidden="true">
          <label htmlFor={`${idPrefix}-website`}>Sito web</label>
          <input
            id={`${idPrefix}-website`}
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div className="lead-form__submit-row">
          <button
            className="lead-form__submit"
            type="submit"
            disabled={!attiva || stato === "sending"}
            aria-describedby={!attiva ? `${idPrefix}-non-attivo` : undefined}
            aria-busy={stato === "sending"}
          >
            <span>{stato === "sending" ? "Invio in corso…" : "Invia richiesta"}</span>
            {stato !== "sending" ? <span aria-hidden="true">→</span> : null}
          </button>
          <span className="lead-form__required-note">
            * Campi obbligatori
          </span>
        </div>
        {!attiva ? (
          <p className="sr-only" id={`${idPrefix}-non-attivo`}>
            Il modulo sarà attivato quando saranno configurati il canale di
            destinazione e l&apos;informativa privacy.
          </p>
        ) : null}

        <div
          className={`lead-form__feedback${stato === "error" ? " is-error" : ""}${stato === "success" ? " is-success" : ""}`}
          id={statoId}
          role={stato === "error" ? "alert" : "status"}
          aria-live={stato === "error" ? "assertive" : "polite"}
          aria-atomic="true"
        >
          {messaggio}
        </div>

        <p className="lead-form__privacy-footnote">
          Nessun caricamento di file e nessuna iscrizione a comunicazioni
          promozionali.
        </p>
      </form>
    </div>
  );
}
