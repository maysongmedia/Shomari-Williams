
import React from 'react';
import { Menu, X, Shield } from 'lucide-react';

interface NavbarProps {
  currentView: 'home' | 'products';
  onNavigate: (view: 'home' | 'products', sectionId?: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleNav = (view: 'home' | 'products', sectionId?: string) => {
    onNavigate(view, sectionId);
    setIsOpen(false);
  };

  return (
    <nav className="bg-white sticky top-0 z-50 border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex justify-between h-20">
          <button 
            onClick={() => handleNav('home')}
            className="flex items-center gap-2 group transition-all"
          >
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform">
              <Shield size={24} />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[#0056d2] font-black text-2xl tracking-tighter leading-none italic">INTEGRITY</span>
              <span className="text-[10px] text-slate-400 font-bold tracking-[0.2em] -mt-1 uppercase">My Personal Coverage</span>
            </div>
          </button>
          
          <div className="hidden md:flex items-center space-x-10">
            <button 
              onClick={() => handleNav('home')}
              className={`font-bold transition-all ${currentView === 'home' ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'}`}
            >
              Home
            </button>
            <button 
              onClick={() => handleNav('products')}
              className={`font-bold transition-all relative ${currentView === 'products' ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'}`}
            >
              Products
              {currentView === 'products' && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 rounded-full" />
              )}
            </button>
            <button 
              onClick={() => handleNav('home', 'learning')}
              className="text-slate-600 hover:text-blue-600 font-bold transition-colors"
            >
              Learning Center
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-black py-2.5 px-8 rounded-lg transition-all shadow-md hover:shadow-lg uppercase tracking-widest text-[10px]">
              Sign In
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 py-6 px-6 space-y-4 shadow-xl animate-in slide-in-from-top-4 duration-300">
          <button 
            onClick={() => handleNav('home')}
            className={`block w-full text-left font-black italic tracking-tighter text-xl py-2 ${currentView === 'home' ? 'text-blue-600' : 'text-slate-800'}`}
          >
            Home
          </button>
          <button 
            onClick={() => handleNav('products')}
            className={`block w-full text-left font-black italic tracking-tighter text-xl py-2 ${currentView === 'products' ? 'text-blue-600' : 'text-slate-800'}`}
          >
            Products
          </button>
          <button 
            onClick={() => handleNav('home', 'learning')}
            className="block w-full text-left font-black italic tracking-tighter text-xl py-2 text-slate-800"
          >
            Learning Center
          </button>
          <div className="pt-4">
            <button className="w-full bg-blue-600 text-white font-black py-4 rounded-xl shadow-lg shadow-blue-200 uppercase tracking-widest text-xs">
              Sign In
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
