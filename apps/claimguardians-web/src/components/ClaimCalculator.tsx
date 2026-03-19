import React, { useState } from 'react';

const ClaimCalculator: React.FC = () => {
  const [damageType, setDamageType] = useState('Water');
  const [initialOffer, setInitialOffer] = useState<string>('');
  const [result, setResult] = useState<{ min: number; max: number } | null>(null);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(value);
  };

  const calculateTotal = (e: React.FormEvent) => {
    e.preventDefault();
    const offerValue = parseFloat(initialOffer.replace(/[^0-9.]/g, ''));
    if (isNaN(offerValue)) return;

    const min = offerValue * 1.5;
    const max = offerValue * 3.2;

    setResult({ min, max });

    // Analytics: Trigger calculator_used event
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'calculator_used',
        damage_type: damageType,
        initial_offer: offerValue,
        projected_min: min,
        projected_max: max,
      });
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-[#082142] rounded-3xl p-8 md:p-12 shadow-2xl border border-white/5 ring-1 ring-white/10">
      <div className="text-center mb-10">
        <h3 className="text-2xl md:text-3xl font-black text-white mb-4">Claim Value Estimator</h3>
        <p className="text-slate-400 font-medium">See how much more you could recover with a Public Adjuster.</p>
      </div>

      <form onSubmit={calculateTotal} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <label className="block text-sm font-black text-slate-300 uppercase tracking-widest ml-1">Damage Type</label>
            <select
              value={damageType}
              onChange={(e) => setDamageType(e.target.value)}
              className="w-full px-6 py-4 bg-white/5 border-2 border-white/10 rounded-2xl focus:border-[#00B5A6] outline-none text-white font-bold transition-all min-h-[56px] appearance-none"
            >
              <option value="Water" className="bg-[#082142]">💧 Water Damage</option>
              <option value="Hurricane" className="bg-[#082142]">🌪️ Hurricane / Wind</option>
              <option value="Roof" className="bg-[#082142]">🏠 Roof Damage</option>
              <option value="Fire" className="bg-[#082142]">🔥 Fire / Smoke</option>
              <option value="Mold" className="bg-[#082142]">🦠 Mold Growth</option>
            </select>
          </div>

          <div className="space-y-3">
            <label className="block text-sm font-black text-slate-300 uppercase tracking-widest ml-1">Current Offer ($)</label>
            <input
              type="number"
              value={initialOffer}
              onChange={(e) => setInitialOffer(e.target.value)}
              placeholder="e.g. 15000"
              className="w-full px-6 py-4 bg-white/5 border-2 border-white/10 rounded-2xl focus:border-[#00B5A6] outline-none text-white font-bold transition-all min-h-[56px]"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-5 bg-[#00B5A6] hover:bg-[#00808C] text-[#082142] font-black text-xl rounded-2xl shadow-[0_10px_30px_-10px_rgba(0,181,166,0.5)] transform hover:-translate-y-1 transition-all duration-300 active:scale-95 min-h-[64px]"
        >
          Calculate My True Claim Value
        </button>
      </form>

      {result && (
        <div className="mt-12 p-8 bg-white/5 rounded-2xl border border-white/10 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <p className="text-slate-400 font-bold uppercase tracking-widest text-sm mb-4 text-center">Estimated Recovery Range</p>
          <div className="text-center">
             <p className="text-3xl md:text-4xl font-black text-white mb-8">
               {formatCurrency(result.min)} — {formatCurrency(result.max)}
             </p>
             <a href="/free-claim-review" className="inline-block px-10 py-5 bg-white text-[#082142] font-black text-lg rounded-xl hover:bg-[#E2E8F0] transition-all transform hover:scale-105 shadow-xl">
               Get Your Free Property Inspection
             </a>
          </div>
        </div>
      )}

      <div className="mt-8 text-center">
        <p className="text-[10px] md:text-xs text-slate-500 font-medium leading-relaxed max-w-md mx-auto">
          Disclaimer: This is an estimate based on historical public adjuster data in Florida, not a guarantee of payout. Final settlement depends on policy limits and documented damage.
        </p>
      </div>
    </div>
  );
};

export default ClaimCalculator;
