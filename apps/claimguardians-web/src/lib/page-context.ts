const citySlugs = ['miami', 'fort-lauderdale', 'west-palm-beach', 'boca-raton', 'orlando', 'kissimmee', 'daytona-beach', 'lakeland', 'tampa', 'fort-myers', 'cape-coral', 'naples', 'jacksonville', 'los-angeles', 'san-francisco', 'san-diego', 'sacramento'];
const ncSlugs = ['charlotte', 'raleigh', 'wilmington', 'asheville', 'fayetteville', 'jacksonville-nc', 'denied-insurance-claim-nc'];
const serviceSlugs = ['water-damage', 'hurricane-damage', 'roof-damage', 'fire-damage', 'mold-claims', 'denied-claims'];
const publicPaths = new Set(['/', '/contact/', '/company/', '/free-claim-review/', '/service-areas/', '/service-areas/north-carolina/', '/resources/', '/resources/claim-review-guide/', '/es/guia-reclamacion/', '/services/', '/privacy-policy/', '/terms-of-service/', ...citySlugs.map(s => `/service-areas/${s}/`), ...ncSlugs.map(s => `/service-areas/north-carolina/${s}/`), ...serviceSlugs.map(s => `/services/${s}/`)]);
export function safePagePath(value: unknown): string {
  return typeof value === 'string' && publicPaths.has(value) ? value : value === 'unavailable' ? 'unavailable' : 'other';
}
/** Only known public page paths. Never retain query strings, hashes or arbitrary URLs. */
export function getPageContext(): { landing_page: string; form_page: string } {
  if (typeof location === 'undefined') return { landing_page: 'unavailable', form_page: 'unavailable' };
  const current = safePagePath(location.pathname);
  try {
    const key = 'cg-landing-page-v1';
    const stored = sessionStorage.getItem(key);
    const landing = stored ? safePagePath(stored) : current;
    if (!stored || landing !== stored) sessionStorage.setItem(key, landing);
    return { landing_page: landing, form_page: current };
  } catch { return { landing_page: current, form_page: current }; }
}
