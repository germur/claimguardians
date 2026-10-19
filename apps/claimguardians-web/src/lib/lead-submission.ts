import { getTechnicalSource, measureLead, queueLeadMeasurement } from './analytics.ts';
import { getPageContext } from './page-context.ts';
export const LEAD_FORM_NAME = 'claim-review';
export const THANK_YOU_URL = '/free-claim-review/thank-you/';
export type LeadFields = Record<string, string>;

/** Registered by Netlify from public/__forms.html at deploy time. */
export async function submitLead(fields: LeadFields): Promise<void> {
  if (fields['bot-field']) throw new Error('Please leave the extra field empty.');
  const response = await fetch('/__forms.html', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ ...fields, ...getPageContext(), technical_source: getTechnicalSource(), 'form-name': LEAD_FORM_NAME }).toString(),
    signal: AbortSignal.timeout(20000),
  });
  const text = await response.text();
  // An unprocessed static blueprint is not a receipt (e.g. Forms is disabled).
  if (!response.ok || text.includes('data-form-blueprint')) {
    throw new Error('Your request could not be confirmed. Please try again or call (305) 804-5489.');
  }
}

/** Send the confirmed conversion through the installed Google tag. */
export function trackLead(fields: LeadFields): Promise<void> {
  // Dispatch on the confirmation page so navigation cannot discard a queued batch.
  if (queueLeadMeasurement(fields)) return Promise.resolve();
  return new Promise(resolve => {
    // Allow the tag to dispatch before navigation, with a bounded fallback if blocked.
    const timer = setTimeout(resolve, 2200);
    measureLead(fields, () => { clearTimeout(timer); resolve(); });
  });
}
