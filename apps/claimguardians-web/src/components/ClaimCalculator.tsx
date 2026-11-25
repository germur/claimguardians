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
const stages = [
  { value: 'new', label: 'I am preparing to report damage', records: 'Keep your policy, the date you first noticed the damage, the rooms affected and any temporary repair receipts. Ask the insurer how to report the loss.' },
  { value: 'open', label: 'I already have an open claim', records: 'Have your claim number, inspection date, insurer estimate and any requests for documents ready for follow-up.' },
  { value: 'decision', label: 'I received a decision or payment', records: 'Keep the insurer’s written decision, the cited policy provision and the payment breakdown. Flag each repair item or finding you want explained.' },
];
export default function ClaimCalculator() {
  const id = useId();
  const [damage, setDamage] = useState('water');
  const [stage, setStage] = useState('');
  const stageRecords = stages.find(option => option.value === stage)?.records;
  return <div className="claim-preparation">
    <h3>Prepare for your claim review</h3>
    <p>A useful review starts with your policy and evidence of damage. Choose a damage type and where you are in the claim process to see what to gather.</p>
    <label htmlFor={id}>Damage type</label>
    <select id={id} value={damage} onChange={event => setDamage(event.target.value)}>{damageOptions.map(([value, label]) => <option key={value} value={value}>{label}</option>)}</select>
    <label htmlFor={`${id}-stage`}>Claim stage</label>
    <select id={`${id}-stage`} value={stage} onChange={event => setStage(event.target.value)}>
      <option value="">Choose a claim stage</option>
      {stages.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
    </select>
    <div aria-live="polite">
      <p>{documents[damage]}</p>
      {stageRecords && <p>{stageRecords}</p>}
    </div>
    <p>You can request a review even if you do not have every document. Coverage and any recovery depend on your policy and the documented loss.</p>
    <a href="/free-claim-review/" className="design-button">Request a free claim review <span aria-hidden="true">→</span></a>
  </div>;
}
