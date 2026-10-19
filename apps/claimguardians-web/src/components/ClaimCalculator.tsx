import { useId, useState } from 'react';
import { damageOptions } from './LeadCaptureForm';
const documents: Record<string, string> = {
  water: 'Photos of the leak and affected areas, plumbing reports, and drying or mitigation invoices.',
  hurricane: 'Photos taken safely after the storm, the date of damage, and temporary repair receipts.',
  roof: 'Photos taken safely from the ground, inspection reports, and repair estimates. Do not climb a damaged roof.',
  fire: 'Photos taken after the property is cleared for access, incident reports, and an inventory of damaged belongings.',
  mold: 'Moisture reports, professional assessments, and documentation of the original water damage.',
  denied: 'Your denial letter or settlement explanation, the policy, and evidence supporting the damage.',
  other: 'Your policy, dated photos, repair estimates, and any correspondence with your insurer.',
};
export default function ClaimCalculator() {
  const id = useId();
  const [damage, setDamage] = useState('water');
  return <div className="claim-preparation">
    <h3>Prepare for your claim review</h3>
    <p>A useful review starts with your policy and evidence of damage. Choose a damage type to see what to gather.</p>
    <label htmlFor={id}>Damage type</label>
    <select id={id} value={damage} onChange={event => setDamage(event.target.value)}>{damageOptions.map(([value, label]) => <option key={value} value={value}>{label}</option>)}</select>
    <div aria-live="polite"><p>{documents[damage]}</p></div>
    <p>You can request a review even if you do not have every document. Coverage and any recovery depend on your policy and the documented loss.</p>
    <a href="/free-claim-review/" className="design-button">Request a free claim review <span aria-hidden="true">→</span></a>
  </div>;
}
