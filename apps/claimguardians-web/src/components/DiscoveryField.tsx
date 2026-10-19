import { useId } from 'react';
import type { ChangeEventHandler } from 'react';
import { discoveryOptions } from '../lib/analytics';

export default function DiscoveryField({ value, onChange }: { value?: string; onChange?: ChangeEventHandler<HTMLSelectElement> }) {
  const id = useId();
  return <label className="form-label" htmlFor={id}>How did you first hear about us? (optional)
    <select id={id} name="discovery_source" value={value} defaultValue={value === undefined ? '' : undefined} onChange={onChange} className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl text-slate-900 min-h-[52px]">
      <option value="">Choose an option</option>{discoveryOptions.map(([key, label]) => <option key={key} value={key}>{label}</option>)}
    </select>
  </label>;
}
