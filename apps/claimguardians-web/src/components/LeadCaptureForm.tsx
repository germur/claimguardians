import { markets } from '../data/markets';
import DiscoveryField from './DiscoveryField';
import React, { useId, useRef, useState } from 'react';
import { LEAD_FORM_NAME, submitLead, THANK_YOU_URL, trackLead } from '../lib/lead-submission';

export const inputClass = 'w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-[#00808C] focus:ring-4 focus:ring-[#00808C]/10 outline-none text-slate-900 min-h-[52px]';
export const damageOptions = [['water', 'Water / leak'], ['hurricane', 'Hurricane / storm'], ['roof', 'Roof'], ['fire', 'Fire / smoke'], ['mold', 'Mold'], ['denied', 'Denied / underpaid'], ['other', 'Other']];

export default function LeadCaptureForm({ leadType = 'general', state = '', damageType = '', claimStatus = '', denial = false }: {
  leadType?: string; state?: string; damageType?: string; claimStatus?: string; denial?: boolean;
}) {
  const id = useId();
  const pending = useRef(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  async function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending.current) return;
    const fields = Object.fromEntries(new FormData(event.currentTarget)) as Record<string, string>;
    pending.current = true; setSending(true); setError('');
    try {
      await submitLead(fields);
      await trackLead(fields);
      window.location.assign(THANK_YOU_URL);
    } catch {
      setError('We could not confirm your request. Your details are still here. Try again, or call (305) 804-5489.');
    } finally { pending.current = false; setSending(false); }
  }
  return <form name={LEAD_FORM_NAME} method="POST" action={THANK_YOU_URL} onSubmit={handleSubmit} className="space-y-5" aria-busy={sending}>
    <input type="hidden" name="form-name" value={LEAD_FORM_NAME} />
      <input type="hidden" name="technical_source" value="unavailable" />
    <input type="hidden" name="lead_type" value={leadType} />
    <div hidden><label>Leave this field empty<input name="bot-field" tabIndex={-1} autoComplete="off" /></label></div>
    <div className="grid sm:grid-cols-2 gap-5">
      <label className="form-label" htmlFor={`${id}-name`}>Full name<input id={`${id}-name`} name="full_name" autoComplete="name" required maxLength={120} className={inputClass} /></label>
      <label className="form-label" htmlFor={`${id}-phone`}>Phone number<input id={`${id}-phone`} name="phone" type="tel" autoComplete="tel" required minLength={7} maxLength={30} className={inputClass} /></label>
    </div>
    <label className="form-label" htmlFor={`${id}-email`}>Email address (optional)<input id={`${id}-email`} name="email" type="email" autoComplete="email" maxLength={254} className={inputClass} /></label>
    {state ? <input type="hidden" name="state" value={state} /> : <label className="form-label" htmlFor={`${id}-state`}>Property state<select id={`${id}-state`} name="state" defaultValue="" required className={inputClass}><option value="" disabled>Select your state</option>{markets.map(market => <option key={market.code} value={market.code}>{market.name}</option>)}</select></label>}
    {damageType ? <input type="hidden" name="damage_type" value={damageType} /> : <label className="form-label" htmlFor={`${id}-damage`}>Damage type<select id={`${id}-damage`} name="damage_type" required defaultValue="" className={inputClass}><option value="" disabled>Select damage type</option>{damageOptions.map(([value, label]) => <option key={value} value={value}>{label}</option>)}</select></label>}
    {denial ? <label className="form-label" htmlFor={`${id}-status`}>Claim status<select id={`${id}-status`} name="claim_status" required defaultValue="" className={inputClass}><option value="" disabled>Select claim status</option><option value="denied">Denied</option><option value="underpaid">Underpaid</option><option value="delayed">Delayed</option><option value="not_filed">Not yet filed</option></select></label> : <input type="hidden" name="claim_status" value={claimStatus} />}
    <label className="form-label" htmlFor={`${id}-language`}>Preferred language<select id={`${id}-language`} name="preferred_language" defaultValue="en" className={inputClass}><option value="en">English</option><option value="es">Español</option></select></label>
    <label className="form-label" htmlFor={`${id}-description`}>Brief description (optional)<textarea id={`${id}-description`} name="description" rows={3} maxLength={3000} className={inputClass} /></label>
    <DiscoveryField />
    {error && <p role="alert" className="rounded-xl border border-red-200 bg-red-50 p-4 text-red-800">{error} <a href="tel:+13058045489" className="underline font-bold">Call us</a></p>}
    <button type="submit" disabled={sending} className="btn-accent w-full disabled:opacity-60 disabled:cursor-wait">{sending ? 'Sending your request…' : 'Request a free claim review →'}</button>
    <p className="text-sm text-slate-600 leading-relaxed">We will contact you about your request. <a href="/privacy-policy/" className="underline">Read our Privacy Policy</a>. Prefer Spanish? Choose Español above.</p>
    <noscript><p>Submit this form to request a review, or call <a href="tel:+13058045489">(305) 804-5489</a>.</p></noscript>
  </form>;
}
