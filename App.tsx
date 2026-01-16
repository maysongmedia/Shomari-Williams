
import React, { useState, useEffect } from 'react';
import AgentHeader from './components/AgentHeader';
import Navbar from './components/Navbar';
import HeroForm from './components/HeroForm';
import LogoSlider from './components/LogoSlider';
import NetworkMap from './components/NetworkMap';
import LearningCenter from './components/LearningCenter';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Products from './components/Products';
import { CheckCircle2, UserCheck, Zap, ShieldCheck } from 'lucide-react';

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'products'>('home');

  // Helper to change view and scroll to top
  const navigateTo = (newView: 'home' | 'products', sectionId?: string) => {
    setView(newView);
    if (sectionId) {
      // Small timeout to allow the view to switch before attempting to scroll to an element
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white font-['Inter']">
      <AgentHeader onGetSynced={() => navigateTo('home', 'quote-form')} />
      <Navbar currentView={view} onNavigate={navigateTo} />
      
      <main className="transition-opacity duration-500">
        {view === 'home' ? (
          <div className="animate-in fade-in duration-700">
            {/* Hero Section */}
            <section className="relative pt-12 pb-32 overflow-hidden bg-gradient-to-b from-blue-50/50 to-white">
              <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-200/20 rounded-full blur-3xl -mr-96 -mt-96 animate-pulse" />
              <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-200/10 rounded-full blur-3xl -ml-72 -mb-72" />
              
              <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  
                  <div className="lg:col-span-5 space-y-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-slate-100 animate-bounce">
                      <Zap size={16} className="text-blue-600 fill-blue-600" />
                      <span className="text-xs font-black uppercase tracking-widest text-blue-600">Quick Quote Engine</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-[#001f3f] leading-[0.95] tracking-tighter italic">
                      Find The Right <br />
                      <span className="text-blue-600 not-italic">Coverage</span> <br />
                      For You
                    </h1>
                    <p className="text-xl text-slate-500 max-w-lg leading-relaxed font-medium">
                      Insurance can be confusing. But with our online resources and national network of licensed insurance agents we can make it straightforward.
                    </p>
                    
                    <div className="flex flex-wrap gap-4 pt-4">
                      <div className="flex items-center gap-3 glass py-3 px-6 rounded-2xl shadow-sm border-white/50">
                        <UserCheck className="text-blue-600" size={24} />
                        <div>
                          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Licensed Agent</p>
                          <p className="text-sm font-bold text-slate-800">Shomari Williams</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 glass py-3 px-6 rounded-2xl shadow-sm border-white/50">
                        <ShieldCheck className="text-blue-600" size={24} />
                        <div>
                          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Verified Broker</p>
                          <p className="text-sm font-bold text-slate-800">Family First Life</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-7 relative" id="quote-form">
                     <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[2.5rem] blur-2xl opacity-5 transition duration-1000"></div>
                     
                     <div className="relative flex flex-col md:flex-row gap-6 items-start lg:items-center">
                       <div className="hidden md:block w-1/2 aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl relative transform -rotate-2 hover:rotate-0 transition-all duration-700 hover:scale-105 z-0 group">
                          <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-transparent transition-colors duration-500"></div>
                          <img 
                            src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80&w=800" 
                            alt="Grandfather and child" 
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute bottom-6 left-6 right-6 p-4 glass rounded-xl text-xs font-bold text-slate-800 tracking-tight">
                            "Securing a future for those who matter most."
                          </div>
                       </div>
                       <div className="w-full md:w-2/3 md:-ml-24 relative z-10">
                          <HeroForm />
                       </div>
                     </div>
                  </div>
                </div>
              </div>
            </section>

            <LogoSlider />

            {/* Resource Highlights */}
            <section className="py-32 bg-white relative">
              <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                  <div className="relative">
                    <div className="w-full aspect-square bg-slate-50 rounded-[3rem] overflow-hidden relative shadow-2xl border border-slate-100 group">
                      <img 
                        src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80&w=1200" 
                        alt="Grandfather laughing with grandchild" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                      
                      <div className="absolute bottom-12 left-12 right-12 text-white">
                        <div className="inline-block px-3 py-1 bg-blue-600 text-[10px] font-black uppercase tracking-widest rounded-md mb-4 shadow-xl">Secure Their Future</div>
                        <h3 className="text-4xl font-black italic tracking-tighter mb-2 leading-none">Family First <br/>Protection</h3>
                        <p className="text-blue-50 font-medium text-sm opacity-90 max-w-xs">Why millions trust our network for comprehensive life coverage and final expense planning.</p>
                      </div>
                    </div>
                    <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-60"></div>
                    <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-blue-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                  </div>
                  
                  <div className="space-y-12">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 mb-2">
                         <div className="w-8 h-px bg-blue-600"></div>
                         <span className="text-xs font-black text-blue-600 uppercase tracking-[0.3em]">Integrity Advantage</span>
                      </div>
                      <h2 className="text-5xl font-extrabold text-[#001f3f] tracking-tight italic leading-[1.1]">Your One-Stop <br/>Insurance Resource</h2>
                      <p className="text-slate-500 text-lg font-medium leading-relaxed">We simplify the complex world of insurance with tools that prioritize your family's needs above all else.</p>
                    </div>

                    <div className="space-y-8">
                      {[
                        { title: "Selection", desc: "Get access to plans and coverage from companies you know and trust." },
                        { title: "Convenience", desc: "Shop, compare and enroll or apply for coverage online or by phone, with professional guidance." },
                        { title: "Simplicity", desc: "Learn about your options and find coverage that's right for you, all in one place." }
                      ].map((item, idx) => (
                        <div key={idx} className="flex gap-6 group">
                          <div className="shrink-0 w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-[#001f3f] group-hover:text-white transition-all duration-300 shadow-sm border border-blue-100">
                            <CheckCircle2 size={24} />
                          </div>
                          <div>
                            <h4 className="text-xl font-black text-slate-800 italic">{item.title}</h4>
                            <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <NetworkMap onContact={() => navigateTo('home', 'quote-form')} />

            {/* Feature Grid */}
            <section className="py-32 bg-[#eef6ff]">
              <div className="max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-4xl font-black text-[#001f3f] mb-4 italic uppercase tracking-tighter">Help You Find Coverage That Fits Your Needs</h2>
                <p className="text-slate-500 max-w-2xl mx-auto mb-16 text-lg">Insurance doesn’t have to be confusing. We’re here to help you get coverage with the benefits you deserve and feel more confident about the choices you make.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                  {[
                    { icon: "✚", title: "Learn about your insurance options", desc: "Understand the different types of plans available.", action: () => navigateTo('home', 'learning') },
                    { icon: "📋", title: "Choose the type of product you want", desc: "Filter by coverage amount, term length, or cash value features.", action: () => navigateTo('products') },
                    { icon: "🔍", title: "Review coverage with licensed agents", desc: "Connect with Shomari for a professional policy audit.", action: () => navigateTo('home', 'quote-form') }
                  ].map((feature, i) => (
                    <button 
                      key={i} 
                      onClick={feature.action}
                      className="bg-white p-12 rounded-3xl shadow-xl hover:shadow-2xl transition-all border border-blue-100/50 flex flex-col items-center group text-center"
                    >
                      <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center text-4xl mb-8 group-hover:scale-110 transition-transform">{feature.icon}</div>
                      <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                      <p className="text-slate-500 text-sm">{feature.desc}</p>
                    </button>
                  ))}
                </div>
              </div>
            </section>

            <LearningCenter />
            <FAQ />
          </div>
        ) : (
          <div className="animate-in slide-in-from-right-10 fade-in duration-500">
            <Products onGetQuote={() => navigateTo('home', 'quote-form')} />
          </div>
        )}
      </main>

      {/* Final CTA */}
      <section className="py-24 bg-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl font-black text-white italic tracking-tighter mb-8">Ready to Find Your Coverage?</h2>
          <div className="glass p-12 rounded-[2.5rem] bg-white/10 backdrop-blur-xl border-white/20">
             <p className="text-blue-100 font-bold uppercase tracking-[0.2em] text-sm mb-6">Find Coverage</p>
             <p className="text-white text-xl mb-10 font-medium">View coverage options and costs available to you by starting your quote today.</p>
             <button 
                onClick={() => navigateTo('home', 'quote-form')}
                className="bg-white text-blue-600 hover:bg-blue-50 font-black text-xl py-5 px-16 rounded-2xl transition-all shadow-2xl uppercase tracking-tighter italic"
              >
               Start Here
             </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default App;
