/**
 * Valori controllati condivisi fra il modulo e l'invio a Web3Forms.
 * Le fasce energetiche sono orientative: non costituiscono una soglia di
 * accesso ai servizi né una valutazione automatica dell'impresa.
 */
export const leadRoleOptions = [
  { value: "direction", label: "Direzione / proprietà" },
  { value: "finance", label: "Amministrazione / finanza" },
  { value: "technical", label: "Energia / ufficio tecnico" },
  { value: "operations", label: "Operations / stabilimento" },
  { value: "procurement", label: "Acquisti" },
  { value: "other", label: "Altro referente" },
] as const;

export const leadSectorOptions = [
  { value: "manufacturing", label: "Manifattura / industria" },
  { value: "food", label: "Agroalimentare" },
  { value: "logistics", label: "Logistica / trasporti" },
  { value: "retail", label: "Commercio / retail" },
  { value: "hospitality", label: "Ricettività / hospitality" },
  { value: "other", label: "Altro settore" },
] as const;

export const leadInterestOptions = [
  { value: "electricity", label: "Acquisto elettrico aggregato" },
  { value: "gas", label: "Gas al PSV" },
  { value: "contracts", label: "Contratti e rischio" },
  { value: "efficiency", label: "Efficienza energetica" },
  { value: "eaas", label: "Energia come servizio" },
] as const;

export const leadSiteCountOptions = [
  { value: "1", label: "1 sito" },
  { value: "2-5", label: "2–5 siti" },
  { value: "6-10", label: "6–10 siti" },
  { value: "11+", label: "Più di 10 siti" },
  { value: "unknown", label: "Da definire" },
] as const;

export const leadTimelineOptions = [
  { value: "0-3-months", label: "Entro 3 mesi" },
  { value: "3-6-months", label: "Tra 3 e 6 mesi" },
  { value: "6+-months", label: "Oltre 6 mesi" },
  { value: "exploratory", label: "Sto raccogliendo informazioni" },
] as const;

export const leadElectricityBandOptions = [
  { value: "under-1-gwh", label: "Meno di 1 GWh/anno" },
  { value: "1-5-gwh", label: "Da 1 a 5 GWh/anno" },
  { value: "5-20-gwh", label: "Da 5 a 20 GWh/anno" },
  { value: "over-20-gwh", label: "Oltre 20 GWh/anno" },
] as const;

export const leadGasBandOptions = [
  { value: "under-100k-smc", label: "Meno di 100.000 Smc/anno" },
  { value: "100k-500k-smc", label: "Da 100.000 a 500.000 Smc/anno" },
  { value: "500k-2m-smc", label: "Da 500.000 a 2 milioni Smc/anno" },
  { value: "over-2m-smc", label: "Oltre 2 milioni Smc/anno" },
] as const;
