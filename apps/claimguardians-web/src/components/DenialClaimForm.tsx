import React from 'react';

const inputClass = "w-full px-5 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-red-700 focus:ring-4 focus:ring-red-700/10 outline-none transition-all text-slate-900 font-bold min-h-[56px]";
const labelClass = "block text-sm font-bold text-slate-700 ml-1";

export default function DenialClaimForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    const status = (form.elements.namedItem('claim_status') as HTMLSelectElement)?.value;
    const lang = (form.elements.namedItem('preferred_language') as HTMLSelectElement)?.value;
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'lead_submit',
        lead_type: 'denied_claim_review',
        claim_status: status,
        preferred_language: lang,
      });
    }
  };

  return (
    <form
      className="space-y-6 max-w-4xl mx-auto"
      action="/free-claim-review/thank-you"
      method="POST"
      onSubmit={handleSubmit}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className={labelClass} htmlFor="fullName">Full name</label>
          <input className={inputClass} type="text" id="fullName" name="full_name" placeholder="John Smith" required />
        </div>
        <div className="space-y-2">
          <label className={labelClass} htmlFor="phone">Phone number</label>
          <input className={inputClass} type="tel" id="phone" name="phone" placeholder="(555) 123-4567" required />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className={labelClass} htmlFor="claimStatus">Claim status</label>
          <select className={inputClass + " cursor-pointer"} id="claimStatus" name="claim_status" required defaultValue="">
            <option value="" disabled>Select status...</option>
            <option value="denied">Fully denied</option>
            <option value="underpaid">Underpaid (lowball offer)</option>
            <option value="delayed">Delayed / no response</option>
            <option value="not_filed">Not yet filed</option>
          </select>
        </div>
        <div className="space-y-2">
          <label className={labelClass} htmlFor="damageType">Damage type</label>
          <select className={inputClass + " cursor-pointer"} id="damageType" name="damage_type" required defaultValue="">
            <option value="" disabled>Select damage type...</option>
            <option value="hurricane">Hurricane / storm (incl. Helene)</option>
            <option value="water">Water / leak</option>
            <option value="roof">Roof</option>
            <option value="fire">Fire / smoke</option>
            <option value="mold">Mold</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className={labelClass} htmlFor="lang">Preferred language</label>
          <select className={inputClass + " cursor-pointer"} id="lang" name="preferred_language" required defaultValue="en">
            <option value="en">English</option>
            <option value="es">Español</option>
          </select>
        </div>
      </div>
      <div className="space-y-2">
        <label className={labelClass} htmlFor="desc">What happened? (optional)</label>
        <textarea className={inputClass + " resize-none"} id="desc" name="description" rows={4} placeholder="Briefly describe your situation - when was the damage, what did the insurance company say..." />
      </div>
      <button
        type="submit"
        className="w-full px-10 py-5 bg-red-700 hover:bg-red-800 text-white font-black text-xl rounded-2xl shadow-[0_20px_40px_-10px_rgba(185,28,28,0.4)] hover:shadow-[0_25px_50px_-10px_rgba(185,28,28,0.6)] transition-all transform hover:-translate-y-1 active:scale-95 min-h-[64px]"
      >
        Get my free claim appeal review &rarr;
      </button>
      <p className="text-center text-sm text-slate-400 font-semibold">No upfront cost. No obligation. We fight for you or you pay nothing.</p>
    </form>
  );
}
