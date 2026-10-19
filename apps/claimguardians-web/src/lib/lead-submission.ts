export const LEAD_FORM_NAME = 'claim-review';
export const THANK_YOU_URL = '/free-claim-review/thank-you/';
export type LeadFields = Record<string, string>;

/** Registered by Netlify from public/__forms.html at deploy time. */
export async function submitLead(fields: LeadFields): Promise<void> {
  if (fields['bot-field']) throw new Error('Please leave the extra field empty.');
  const response = await fetch('/__forms.html', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ ...fields, 'form-name': LEAD_FORM_NAME }).toString(),
    signal: AbortSignal.timeout(20000),
  });
  const text = await response.text();
  // An unprocessed static blueprint is not a receipt (e.g. Forms is disabled).
  if (!response.ok || text.includes('data-form-blueprint')) {
    throw new Error('Your request could not be confirmed. Please try again or call (305) 804-5489.');
  }
}

/** Explicit allowlist: never send contact details or claim descriptions. */
export function trackLead(fields: LeadFields): void {
  const analytics = window as Window & { dataLayer?: Record<string, string>[] };
  try {
    analytics.dataLayer?.push({ event: 'generate_lead', lead_type: fields.lead_type || 'general', preferred_language: fields.preferred_language || 'en' });
  } catch { /* Analytics must never prevent the confirmation page. */ }
}
