
import React from 'react';
import { Heart, Umbrella, ShieldCheck, TrendingUp, ArrowRight, Zap } from 'lucide-react';

interface ProductsProps {
  onGetQuote: () => void;
}

const productList = [
  {
    title: "Life Insurance",
    icon: <Heart className="text-pink-500" size={32} />,
    desc: "Comprehensive protection for your family's future. From term to permanent solutions.",
    features: ["Flexible Premiums", "Death Benefit Protection", "Beneficiary Selection"],
    color: "bg-pink-50",
    border: "border-pink-100"
  },
  {
    title: "Final Expense",
    icon: <Umbrella className="text-amber-500" size={32} />,
    desc: "Designed specifically to cover funeral costs and small debts, ensuring no burden on loved ones.",
    features: ["No Medical Exam", "Fixed Premiums", "Quick Approval"],
    color: "bg-amber-50",
    border: "border-amber-100"
  },
  {
    title: "Indexed Universal Life (IUL)",
    icon: <TrendingUp className="text-emerald-500" size={32} />,
    desc: "Combine life insurance protection with the potential for cash value growth linked to market indices.",
    features: ["Growth Potential", "Downside Protection", "Tax-advantaged Cash Value"],
    color: "bg-emerald-50",
    border: "border-emerald-100"
  },
  {
    title: "Medicare Guidance",
    icon: <ShieldCheck className="text-blue-500" size={32} />,
    desc: "Navigating Medicare parts and supplements to find the right health coverage for your retirement.",
    features: ["Part D Coverage", "Advantage Plans", "Supplement Review"],
    color: "bg-blue-50",
    border: "border-blue-100"
  }
];

const Products: React.FC<ProductsProps> = ({ onGetQuote }) => {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-100">
            <Zap size={14} className="text-blue-600 fill-blue-600" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600">Product Portfolio</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-[#001f3f] tracking-tighter italic">
            Coverage Built <br />
            <span className="text-blue-600 not-italic">Around Your Life</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
            We partner with top-rated carriers to bring you a diverse selection of insurance products designed for every stage of your journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {productList.map((product, idx) => (
            <div key={idx} className={`group p-10 rounded-[2.5rem] border ${product.border} ${product.color} transition-all duration-500 hover:shadow-2xl hover:-translate-y-2`}>
              <div className="flex justify-between items-start mb-8">
                <div className="p-4 bg-white rounded-2xl shadow-sm group-hover:scale-110 transition-transform duration-500 border border-slate-50">
                  {product.icon}
                </div>
                <button 
                  onClick={onGetQuote}
                  className="text-slate-400 group-hover:text-blue-600 transition-colors"
                >
                  <ArrowRight size={24} />
                </button>
              </div>
              <h3 className="text-3xl font-black text-[#001f3f] mb-4 italic tracking-tight">{product.title}</h3>
              <p className="text-slate-600 mb-8 font-medium leading-relaxed">{product.desc}</p>
              <div className="space-y-3">
                {product.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm font-bold text-[#001f3f]">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                    {feat}
                  </div>
                ))}
              </div>
              <button 
                onClick={onGetQuote}
                className="mt-10 w-full py-4 bg-white border border-slate-200 rounded-xl font-bold text-slate-800 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-sm"
              >
                Get a Personalized Quote
              </button>
            </div>
          ))}
        </div>

        {/* Comparison Section */}
        <div className="mt-32 p-12 bg-[#001f3f] rounded-[3rem] text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl -mr-48 -mt-48" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-black italic tracking-tighter">Not sure which policy <br />is right for you?</h2>
              <p className="text-blue-200 text-lg leading-relaxed">
                Our expert agents take the guesswork out of insurance. We'll analyze your needs and provide a side-by-side comparison of the best available options in your area.
              </p>
              <button 
                onClick={onGetQuote}
                className="bg-blue-600 hover:bg-blue-700 text-white font-black py-4 px-10 rounded-xl transition-all shadow-xl shadow-blue-900/40 uppercase tracking-widest text-xs"
              >
                Schedule a Consultation
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                <div className="text-3xl font-black mb-1 text-blue-400">01</div>
                <div className="text-xs font-bold uppercase tracking-widest text-blue-300 mb-2">Evaluate</div>
                <p className="text-sm text-slate-300">We assess your family goals and financial standing.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                <div className="text-3xl font-black mb-1 text-blue-400">02</div>
                <div className="text-xs font-bold uppercase tracking-widest text-blue-300 mb-2">Compare</div>
                <p className="text-sm text-slate-300">We source quotes from multiple top-rated carriers.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                <div className="text-3xl font-black mb-1 text-blue-400">03</div>
                <div className="text-xs font-bold uppercase tracking-widest text-blue-300 mb-2">Refine</div>
                <p className="text-sm text-slate-300">We adjust coverage to fit your exact budget.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                <div className="text-3xl font-black mb-1 text-blue-400">04</div>
                <div className="text-xs font-bold uppercase tracking-widest text-blue-300 mb-2">Protect</div>
                <p className="text-sm text-slate-300">Activate your policy and secure your legacy.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
