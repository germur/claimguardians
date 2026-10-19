import { useEffect, useRef, useState } from 'react';
import LeadCaptureForm, { damageOptions } from './LeadCaptureForm';
export default function EligibilityTest() {
  const [status, setStatus] = useState('');
  const [damage, setDamage] = useState('');
  const step = !status ? 1 : !damage ? 2 : 3;
  const heading = useRef<HTMLHeadingElement>(null);
  const previousStep = useRef(step);
  useEffect(() => {
    if (previousStep.current !== step) heading.current?.focus();
    previousStep.current = step;
  }, [step]);
  return <div className="max-w-xl mx-auto rounded-3xl p-6 md:p-10 bg-white border border-slate-200 shadow-xl">
    <p className="text-sm text-slate-600 mb-4" aria-live="polite">Step {step} of 3</p>
    <h3 ref={heading} tabIndex={-1} className="text-2xl font-bold mb-6 focus:outline-none">{step === 1 ? 'What is your claim status?' : step === 2 ? 'What type of damage occurred?' : 'Request a free expert review'}</h3>
    {step === 1 && <div className="grid gap-3">{[['not_filed', 'I have not filed yet'], ['underpaid', 'Filed, but underpaid'], ['denied', 'Denied']].map(([value, label]) => <button type="button" key={value} onClick={() => setStatus(value)} className="btn-secondary justify-start">{label}</button>)}</div>}
    {step === 2 && <div className="grid sm:grid-cols-2 gap-3">{damageOptions.map(([value, label]) => <button type="button" key={value} onClick={() => setDamage(value)} className="btn-secondary">{label}</button>)}</div>}
    {step === 3 && <LeadCaptureForm leadType="service_review" claimStatus={status} damageType={damage} />}
    {step > 1 && <button type="button" className="mt-6 underline text-[#006775] min-h-12" onClick={() => damage ? setDamage('') : setStatus('')}>Change {damage ? 'damage type' : 'claim status'}</button>}
    <noscript><p><a className="underline" href="/contact/">Use our contact form</a> to request a review.</p></noscript>
  </div>;
}
