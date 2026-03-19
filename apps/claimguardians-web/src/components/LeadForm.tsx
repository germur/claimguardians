import React, { useState } from 'react';

const LeadForm = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 3;

  const nextStep = () => setStep((s) => Math.min(s + 1, totalSteps));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  const progressStyle = {
    width: `${(step / totalSteps) * 100}%`,
  };

  return (
    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-100 relative overflow-hidden ring-1 ring-slate-200">
      {/* Progress Bar */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-slate-100">
        <div 
          className="h-full bg-gradient-to-r from-[#00808C] to-[#00B5A6] transition-all duration-500 ease-out" 
          style={progressStyle}
        ></div>
      </div>

      <div className="flex justify-between items-center mb-10">
        <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Step {step} of {totalSteps}</span>
        <div className="flex gap-1.5">
          {[1, 2, 3].map((s) => (
            <div 
              key={s} 
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${s <= step ? 'bg-[#00808C]' : 'bg-slate-200'}`}
            ></div>
          ))}
        </div>
      </div>

      <form onSubmit={(e) => { e.preventDefault(); if(step < totalSteps) nextStep(); else alert('Lead Submitted! (Logic Pending)'); }} className="space-y-8">
        
        {/* Step 1: The Loss */}
        {step === 1 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
            <div>
              <h2 className="text-3xl font-extrabold text-[#082142] mb-2 tracking-tight">Tell us about the damage.</h2>
              <p className="text-slate-500 text-lg font-medium">What happened to your property?</p>
            </div>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="damageType" className="block text-sm font-bold text-slate-700 ml-1">Primary Damage Type</label>
                <select 
                  id="damageType" 
                  required 
                  className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-[#00808C] focus:ring-4 focus:ring-[#00808C]/10 outline-none transition-all text-slate-900 font-bold min-h-[56px] cursor-pointer"
                >
                  <option value="" disabled selected>Select damage type...</option>
                  <option value="water">💧 Water Leak / Pipe Burst</option>
                  <option value="hurricane">🌪️ Hurricane / Storm</option>
                  <option value="roof">🏠 Roof Damage</option>
                  <option value="fire">🔥 Fire / Smoke</option>
                  <option value="mold">🦠 Mold / Health Risk</option>
                  <option value="denied">⚖️ Denied / Underpaid Claim</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="lossDate" className="block text-sm font-bold text-slate-700 ml-1">Approximate Date of Loss</label>
                <input 
                  type="date" 
                  id="lossDate"
                  required
                  className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-[#00808C] focus:ring-4 focus:ring-[#00808C]/10 outline-none transition-all text-slate-900 font-bold min-h-[56px]"
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 2: The Property */}
        {step === 2 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
            <div>
              <h2 className="text-3xl font-extrabold text-[#082142] mb-2 tracking-tight">Property Location.</h2>
              <p className="text-slate-500 text-lg font-medium">Where is your property located?</p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="propertyType" className="block text-sm font-bold text-slate-700 ml-1">Property Category</label>
                <div className="grid grid-cols-2 gap-3">
                  <button 
                    type="button" 
                    className="flex flex-col items-center justify-center p-4 border-2 border-[#00808C]/20 bg-[#00808C]/5 rounded-2xl text-[#00808C] font-bold hover:bg-[#00808C]/10 transition-colors ring-1 ring-inset ring-[#00808C]/10 min-h-[100px]"
                  >
                    <span className="text-2xl mb-1">🏠</span>
                    <span>Residential</span>
                  </button>
                  <button 
                    type="button" 
                    className="flex flex-col items-center justify-center p-4 border-2 border-slate-100 bg-slate-50 rounded-2xl text-slate-400 font-bold hover:border-slate-200 transition-colors min-h-[100px]"
                  >
                    <span className="text-2xl mb-1">🏢</span>
                    <span>Commercial</span>
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="zipCode" className="block text-sm font-bold text-slate-700 ml-1">Florida Zip Code</label>
                <input 
                  type="text" 
                  id="zipCode" 
                  required
                  placeholder="e.g. 33101"
                  className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-[#00808C] focus:ring-4 focus:ring-[#00808C]/10 outline-none transition-all text-slate-900 font-bold min-h-[56px]"
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 3: The Contact */}
        {step === 3 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
            <div>
              <h2 className="text-3xl font-extrabold text-[#082142] mb-2 tracking-tight">Final Details.</h2>
              <p className="text-slate-500 text-lg font-medium">How should we reach you?</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="firstName" className="block text-sm font-bold text-slate-700 ml-1">First Name</label>
                <input type="text" id="firstName" required className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-[#00808C] outline-none text-slate-900 font-bold min-h-[56px]" />
              </div>
              <div className="space-y-2">
                <label htmlFor="lastName" className="block text-sm font-bold text-slate-700 ml-1">Last Name</label>
                <input type="text" id="lastName" required className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-[#00808C] outline-none text-slate-900 font-bold min-h-[56px]" />
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-bold text-slate-700 ml-1">Email Address</label>
                <input type="email" id="email" required className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-[#00808C] outline-none text-slate-900 font-bold min-h-[56px]" />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" class="block text-sm font-bold text-slate-700 ml-1">Mobile Phone Number</label>
                <input type="tel" id="phone" required className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-[#00808C] outline-none text-slate-900 font-bold min-h-[56px]" />
              </div>
            </div>
          </div>
        )}

        <div className="pt-8 border-t border-slate-100 flex gap-4">
          {step > 1 && (
            <button 
              type="button" 
              onClick={prevStep}
              className="px-8 py-5 border-2 border-slate-200 text-slate-400 font-bold rounded-2xl hover:bg-slate-50 transition-all min-h-[56px]"
            >
              Back
            </button>
          )}
          <button 
            type="submit"
            className="flex-1 px-10 py-5 bg-[#00808C] hover:bg-[#002D51] text-white font-black text-xl rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,128,140,0.4)] hover:shadow-[0_25px_50px_-10px_rgba(0,128,140,0.6)] transition-all transform hover:-translate-y-1 active:scale-95 min-h-[64px]"
          >
            {step === totalSteps ? 'Claim My Settlement →' : 'Next Step →'}
          </button>
        </div>

        {step === 3 && (
          <p className="text-center text-xs text-slate-400 font-medium">
            By clicking "Claim My Settlement," you agree to our Privacy Policy. <br/>
            No upfront fees. We only win if you win.
          </p>
        )}
      </form>
    </div>
  );
};

export default LeadForm;
