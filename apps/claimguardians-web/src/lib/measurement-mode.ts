/** Explicit staff opt-out; never infer internal visitors from their country or city. */
export function isInternalVisit(): boolean {
  if (typeof window === 'undefined') return false;
  if ((window as Window & { cgInternalTraffic?: boolean }).cgInternalTraffic) return true;
  try {
    const choice = new URLSearchParams(window.location.search).get('cg_internal');
    if (choice === '0') return false;
    if (choice === '1') return true;
    return window.localStorage.getItem('cg-internal-traffic-v1') === '1';
  } catch { return false; }
}
