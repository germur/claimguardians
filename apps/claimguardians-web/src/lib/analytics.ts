import { getPageContext, safePagePath } from './page-context.ts';
export const discoveryOptions = [
  ['google_search', 'Google Search'], ['bing_search', 'Bing Search'],
  ['ai_assistant', 'An AI assistant, such as ChatGPT or Perplexity'],
  ['referral', 'Someone recommended you'], ['social', 'Social media'],
  ['returning', 'I already knew the company'], ['other', 'Other'],
] as const;

/** Classification only. Never store or send a raw referrer, query or prompt. */
export function classifyReferrer(referrer: string, ownHost: string): string {
  if (!referrer) return 'direct_or_unavailable';
  try {
    const host = new URL(referrer).hostname.toLowerCase();
    if (host === ownHost) return 'internal';
    const matches = (domain: string) => host === domain || host.endsWith(`.${domain}`);
    if (matches('chatgpt.com') || host === 'chat.openai.com') return 'chatgpt';
    if (matches('perplexity.ai')) return 'perplexity';
    if (host === 'gemini.google.com') return 'gemini';
    if (host === 'copilot.microsoft.com') return 'copilot';
    if (matches('claude.ai')) return 'claude';
    if (matches('google.com')) return 'google';
    if (matches('bing.com')) return 'bing';
    return 'other_referral';
  } catch { return 'unavailable'; }
}

export function getTechnicalSource(): string {
  if (typeof document === 'undefined') return 'unavailable';
  const source = classifyReferrer(document.referrer, location.hostname);
  try {
    const key = 'cg-technical-source-v1';
    const stored = sessionStorage.getItem(key);
    if (source !== 'internal' && source !== 'direct_or_unavailable' && source !== 'unavailable') {
      sessionStorage.setItem(key, source);
      return source;
    }
    if (stored && ['chatgpt', 'perplexity', 'gemini', 'copilot', 'claude', 'google', 'bing', 'other_referral', 'direct_or_unavailable', 'unavailable'].includes(stored)) return stored;
    const initial = source === 'internal' ? 'unavailable' : source;
    sessionStorage.setItem(key, initial);
    return initial;
  } catch { return source === 'internal' ? 'unavailable' : source; }
}

export function sendAnalyticsEvent(name: 'generate_lead' | 'contact_click', params: Record<string, string | number | (() => void)>): void {
  const analytics = window as Window & { gtag?: (...args: unknown[]) => void };
  try { analytics.gtag?.('event', name, params); }
  catch { /* Measurement must never interrupt contact or confirmation. */ }
}

function leadParams(fields: Record<string, string>): Record<string, string> {
  const leadTypes = ['general', 'claim_review', 'contact', 'nc_general', 'denied_claim_review', 'service_review'];
  return {
    ...getPageContext(),
    ...(fields.landing_page ? { landing_page: safePagePath(fields.landing_page) } : {}),
    ...(fields.form_page ? { form_page: safePagePath(fields.form_page) } : {}),
    lead_type: leadTypes.includes(fields.lead_type) ? fields.lead_type : 'general',
    preferred_language: fields.preferred_language === 'es' ? 'es' : 'en',
    technical_source: getTechnicalSource(),
    declared_source: discoveryOptions.some(([value]) => value === fields.discovery_source) ? fields.discovery_source : 'not_provided',
  };
}

const pendingLeadKey = 'cg-confirmed-lead-event-v1';
export function queueLeadMeasurement(fields: Record<string, string>): boolean {
  try {
    sessionStorage.setItem(pendingLeadKey, JSON.stringify({ params: leadParams(fields), time: Date.now() }));
    return true;
  } catch { return false; }
}

export function flushLeadMeasurement(): void {
  try {
    const stored = sessionStorage.getItem(pendingLeadKey);
    if (!stored) return;
    sessionStorage.removeItem(pendingLeadKey);
    const pending = JSON.parse(stored);
    if (!Number.isFinite(pending.time) || Date.now() - pending.time > 300000 || pending.time > Date.now()) return;
    measureLead({ lead_type: pending.params.lead_type, preferred_language: pending.params.preferred_language, discovery_source: pending.params.declared_source, landing_page: pending.params.landing_page, form_page: pending.params.form_page });
  } catch { /* A blocked or malformed storage entry must not affect confirmation. */ }
}

export function measureLead(fields: Record<string, string>, onComplete?: () => void): void {
  sendAnalyticsEvent('generate_lead', { ...leadParams(fields), ...(onComplete ? { event_callback: onComplete, event_timeout: 2000 } : {}) });
}
