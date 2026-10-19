import { markets } from '../data/markets';
import DiscoveryField from './DiscoveryField';
import React, { useEffect, useRef, useState } from 'react';
import { damageOptions, inputClass } from './LeadCaptureForm';
import { LEAD_FORM_NAME, submitLead, THANK_YOU_URL, trackLead } from '../lib/lead-submission';

export default function LeadForm() {
  const [step, setStep] = useState(1);
  const [fields, setFields] = useState({ damage_type: '', loss_date: '', property_type: 'residential', state: '', zip_code: '', first_name: '', last_name: '', phone: '', email: '', preferred_language: 'en', discovery_source: '', 'bot-field': '' });
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  const pending = useRef(false);
  const heading = useRef<HTMLHeadingElement>(null);
  const previousStep = useRef(step);
  useEffect(() => {
    if (previousStep.current !== step) heading.current?.focus();
    previousStep.current = step;
  }, [step]);
  const update = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => setFields(previous => ({ ...previous, [event.target.name]: event.target.value }));
  async function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending.current) return;
    if (step < 3) { setStep(step + 1); return; }
    pending.current = true; setSending(true); setError('');
    const lead = { ...fields, lead_type: 'claim_review', full_name: `${fields.first_name} ${fields.last_name}`.trim() };
    try {
      await submitLead(lead);
      await trackLead(lead);
      window.location.assign(THANK_YOU_URL);
    } catch {
      setError('We could not confirm your request. Your details are still here. Please try again, or call (305) 804-5489.');
    } finally { pending.current = false; setSending(false); }
  }
  return <div className="bg-white rounded-3xl p-6 md:p-10 shadow-xl border border-slate-200">
    <p className="text-sm text-slate-600 font-bold mb-3" aria-live="polite">Step {step} of 3 · {['Your damage', 'Your property', 'Your contact details'][step - 1]}</p>
    <div role="progressbar" aria-label="Claim review progress" aria-valuenow={step} aria-valuemin={1} aria-valuemax={3} className="h-2 rounded-full bg-slate-100 mb-8 overflow-hidden"><div className="h-full bg-[#00808C] transition-all" style={{ width: `${step / 3 * 100}%` }} /></div>
    <h2 ref={heading} tabIndex={-1} className="text-2xl md:text-3xl font-bold mb-6 focus:outline-none">{['Tell us about the damage', 'Where is the property?', 'How can we reach you?'][step - 1]}</h2>
    <noscript><style>{'#review-steps { display: none; }'}</style><p>The step-by-step form needs JavaScript. <a className="underline" href="/contact/">Use our contact form</a> or call <a href="tel:+13058045489">(305) 804-5489</a>.</p></noscript>
    <form id="review-steps" name={LEAD_FORM_NAME} action={THANK_YOU_URL} method="POST" onSubmit={handleSubmit} className="space-y-5" aria-busy={sending}>
      <input type="hidden" name="form-name" value={LEAD_FORM_NAME} />
      <input type="hidden" name="technical_source" value="unavailable" />
      <div hidden><label>Leave this field empty<input name="bot-field" value={fields['bot-field']} onChange={update} tabIndex={-1} autoComplete="off" /></label></div>
      {step === 1 && <>
        <label className="form-label" htmlFor="review-damage">Primary damage type<select id="review-damage" name="damage_type" value={fields.damage_type} onChange={update} required className={inputClass}><option value="" disabled>Select damage type</option>{damageOptions.map(([value, label]) => <option value={value} key={value}>{label}</option>)}</select></label>
        <label className="form-label" htmlFor="review-date">Approximate date of loss (optional)<input id="review-date" name="loss_date" type="date" value={fields.loss_date} onChange={update} className={inputClass} /></label>
      </>}
      {step === 2 && <>
        <fieldset><legend className="font-bold text-slate-700 mb-2">Property category</legend><div className="grid grid-cols-2 gap-3">{['residential', 'commercial'].map(type => <label key={type} className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer ${fields.property_type === type ? 'border-[#00808C] bg-teal-50 text-[#006775]' : 'border-slate-200 text-slate-700'}`}><input type="radio" name="property_type" value={type} checked={fields.property_type === type} onChange={update} className="accent-[#00808C]" />{type === 'residential' ? 'Residential' : 'Commercial'}</label>)}</div></fieldset>
        <label className="form-label" htmlFor="review-state">Property state<select id="review-state" name="state" value={fields.state} onChange={update} required className={inputClass}><option value="" disabled>Select your state</option>{markets.map(market => <option key={market.code} value={market.code}>{market.name}</option>)}</select></label>
        <label className="form-label" htmlFor="review-zip">Property ZIP code<input id="review-zip" name="zip_code" inputMode="numeric" autoComplete="postal-code" pattern="[0-9]{5}(-[0-9]{4})?" title="Enter a 5-digit ZIP code, optionally followed by a 4-digit extension." maxLength={10} value={fields.zip_code} onChange={update} required className={inputClass} /></label>
      </>}
      {step === 3 && <>
        <div className="grid sm:grid-cols-2 gap-4"><label className="form-label" htmlFor="review-first">First name<input id="review-first" name="first_name" autoComplete="given-name" required maxLength={60} value={fields.first_name} onChange={update} className={inputClass} /></label><label className="form-label" htmlFor="review-last">Last name<input id="review-last" name="last_name" autoComplete="family-name" required maxLength={60} value={fields.last_name} onChange={update} className={inputClass} /></label></div>
        <label className="form-label" htmlFor="review-phone">Phone number<input id="review-phone" name="phone" type="tel" autoComplete="tel" required minLength={7} maxLength={30} value={fields.phone} onChange={update} className={inputClass} /></label>
        <label className="form-label" htmlFor="review-email">Email address (optional)<input id="review-email" name="email" type="email" autoComplete="email" maxLength={254} value={fields.email} onChange={update} className={inputClass} /></label>
        <label className="form-label" htmlFor="review-language">Preferred language<select id="review-language" name="preferred_language" value={fields.preferred_language} onChange={update} className={inputClass}><option value="en">English</option><option value="es">Español</option></select></label>
        <DiscoveryField value={fields.discovery_source} onChange={update} />
        <p className="text-sm text-slate-600">We will contact you about your request. <a className="underline" href="/privacy-policy/">Read our Privacy Policy</a>.</p>
      </>}
      {error && <p role="alert" className="bg-red-50 text-red-800 p-4 rounded-xl">{error} <a className="underline" href="tel:+13058045489">Call us</a></p>}
      <div className="flex flex-col-reverse sm:flex-row gap-3 pt-4">{step > 1 && <button type="button" disabled={sending} className="btn-secondary" onClick={() => setStep(step - 1)}>Back</button>}<button type="submit" disabled={sending} className="btn-accent flex-1 disabled:opacity-60 disabled:cursor-wait">{sending ? 'Sending your request…' : step === 3 ? 'Request a free claim review →' : 'Next step →'}</button></div>
    </form>
  </div>;
}
