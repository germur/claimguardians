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

export function sendAnalyticsEvent(name: 'generate_lead' | 'contact_click', params: Record<string, string>): void {
  const analytics = window as Window & { gtag?: (...args: unknown[]) => void };
  try { analytics.gtag?.('event', name, params); }
  catch { /* Measurement must never interrupt contact or confirmation. */ }
}

export function measureLead(fields: Record<string, string>): void {
  const leadTypes = ['general', 'claim_review', 'contact', 'nc_general', 'denied_claim_review', 'service_review'];
  sendAnalyticsEvent('generate_lead', {
    lead_type: leadTypes.includes(fields.lead_type) ? fields.lead_type : 'general',
    preferred_language: fields.preferred_language === 'es' ? 'es' : 'en',
    technical_source: getTechnicalSource(),
    declared_source: discoveryOptions.some(([value]) => value === fields.discovery_source) ? fields.discovery_source : 'not_provided',
  });
}
