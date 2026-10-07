/** Configurazione condivisa del modulo lead. La chiave Web3Forms è pubblica
 * per design: il servizio la usa come identificatore del form, non come token
 * di accesso a dati riservati. */
export function getLeadPrivacyPolicyUrl(): string | null {
  const value = process.env.NEXT_PUBLIC_PRIVACY_POLICY_URL?.trim();
  if (!value) return null;

  // Accetta un percorso interno semplice o un URL HTTPS pubblico.
  if (value.startsWith("/") && !value.startsWith("//")) return value;

  try {
    const parsed = new URL(value);
    if (parsed.protocol === "https:" && !parsed.username && !parsed.password) {
      return parsed.toString();
    }
  } catch {
    return null;
  }

  return null;
}

export function getLeadCaptureConfig() {
  const privacyUrl = getLeadPrivacyPolicyUrl();
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim() || null;

  return {
    attiva: Boolean(privacyUrl && accessKey),
    privacyUrl,
    accessKey,
  };
}
