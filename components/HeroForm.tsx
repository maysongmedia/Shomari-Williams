
import React from 'react';
import { QuoteFormData, FormStep } from '../types';
import { ChevronRight, ArrowLeft, Send } from 'lucide-react';

const HeroForm: React.FC = () => {
  const [step, setStep] = React.useState<FormStep>(1);
  const [formData, setFormData] = React.useState<QuoteFormData>({
    zipCode: '',
    county: '',
    age: '',
    gender: '',
    coverageAmount: '250000',
    name: '',
    email: '',
    phone: '',
  });

  const nextStep = () => setStep(prev => Math.min(prev + 1, 4) as FormStep);
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1) as FormStep);

  const renderStep = () => {
    switch(step) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-800">Let's start with your location</h3>
            <p className="text-slate-500 text-sm">Policies vary by zip code. This helps us find the right coverage near you.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase text-slate-400">Zip Code *</label>
                <input 
                  type="text" 
                  placeholder="78701"
                  className="w-full p-4 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  value={formData.zipCode}
                  onChange={e => setFormData({...formData, zipCode: e.target.value})}
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase text-slate-400">County</label>
                <select 
                  className="w-full p-4 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white transition-all"
                  value={formData.county}
                  onChange={e => setFormData({...formData, county: e.target.value})}
                >
                  <option value="">Select One</option>
                  <option value="travis">Travis</option>
                  <option value="williamson">Williamson</option>
                  <option value="hays">Hays</option>
                </select>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-800">About You</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase text-slate-400">Age *</label>
                <input 
                  type="number" 
                  placeholder="35"
                  className="w-full p-4 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  value={formData.age}
                  onChange={e => setFormData({...formData, age: e.target.value})}
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase text-slate-400">Gender *</label>
                <div className="flex gap-2">
                  <button 
                    onClick={() => setFormData({...formData, gender: 'male'})}
                    className={`flex-1 p-4 rounded-lg border transition-all ${formData.gender === 'male' ? 'bg-blue-600 border-blue-600 text-white font-bold' : 'border-slate-200 hover:border-blue-400'}`}
                  >
                    Male
                  </button>
                  <button 
                    onClick={() => setFormData({...formData, gender: 'female'})}
                    className={`flex-1 p-4 rounded-lg border transition-all ${formData.gender === 'female' ? 'bg-blue-600 border-blue-600 text-white font-bold' : 'border-slate-200 hover:border-blue-400'}`}
                  >
                    Female
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-800">Coverage Goal</h3>
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase text-slate-400">Target Coverage Amount</label>
              <input 
                type="range" 
                min="50000" 
                max="2000000" 
                step="50000"
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                value={formData.coverageAmount}
                onChange={e => setFormData({...formData, coverageAmount: e.target.value})}
              />
              <div className="flex justify-between text-lg font-black text-blue-600 mt-2">
                <span>$50k</span>
                <span className="text-2xl">${Number(formData.coverageAmount).toLocaleString()}</span>
                <span>$2M+</span>
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-800">Final Step</h3>
            <div className="space-y-4">
              <input 
                type="text" 
                placeholder="Full Name"
                className="w-full p-4 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
              />
              <input 
                type="email" 
                placeholder="Email Address"
                className="w-full p-4 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
              />
              <input 
                type="tel" 
                placeholder="Phone Number"
                className="w-full p-4 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                value={formData.phone}
                onChange={e => setFormData({...formData, phone: e.target.value})}
              />
            </div>
          </div>
        );
    }
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-2xl border border-slate-100 max-w-xl w-full mx-auto relative overflow-hidden group">
      {/* Dynamic Background Element */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-50 rounded-full blur-3xl opacity-50 transition-all group-hover:bg-blue-100 group-hover:scale-125"></div>
      
      <div className="relative z-10">
        {/* Progress Bar */}
        <div className="flex gap-2 mb-8">
          {[1, 2, 3, 4].map((s) => (
            <div 
              key={s} 
              className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${step >= s ? 'bg-blue-600' : 'bg-slate-100'}`}
            />
          ))}
        </div>

        {renderStep()}

        <div className="flex items-center justify-between mt-10">
          {step > 1 ? (
            <button 
              onClick={prevStep}
              className="flex items-center gap-2 text-slate-500 font-bold hover:text-blue-600 transition-colors"
            >
              <ArrowLeft size={18} />
              Back
            </button>
          ) : <div />}
          
          <button 
            onClick={step === 4 ? () => alert("Quote request sent!") : nextStep}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-xl transition-all flex items-center gap-2 shadow-lg shadow-blue-200"
          >
            {step === 4 ? 'Get Free Quote' : 'Continue'}
            {step === 4 ? <Send size={18} /> : <ChevronRight size={18} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroForm;
