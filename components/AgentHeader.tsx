
import React from 'react';
import { Mail, Phone, ChevronRight } from 'lucide-react';

interface AgentHeaderProps {
  onGetSynced?: () => void;
}

const AgentHeader: React.FC<AgentHeaderProps> = ({ onGetSynced }) => {
  return (
    <div className="bg-[#1e293b] text-white py-3 px-4 md:px-8 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full border-2 border-blue-500 overflow-hidden shrink-0">
            <img 
              src="https://picsum.photos/seed/shomari/100/100" 
              alt="Shomari Williams" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="font-bold text-lg leading-tight">Shomari Williams</h2>
              <span className="text-[10px] bg-blue-600 px-1.5 py-0.5 rounded uppercase tracking-wider font-semibold">Agent</span>
            </div>
            <p className="text-xs text-slate-400">NPN: 21334380 • Family First Life • Austin, TX</p>
            <button className="text-blue-400 text-[10px] uppercase font-bold tracking-widest flex items-center mt-0.5 hover:text-blue-300 transition-colors">
              View More <ChevronRight size={10} className="ml-0.5" />
            </button>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6">
          <a href="mailto:secureyour@lifepolicywithshomari.com" className="flex items-center gap-2 text-xs text-slate-300 hover:text-white transition-colors">
            <Mail size={14} className="text-blue-500" />
            <span className="hidden sm:inline">secureyour@lifepolicywithshomari.com</span>
          </a>
          <a href="tel:7372597704" className="flex items-center gap-2 text-xs text-slate-300 hover:text-white transition-colors">
            <Phone size={14} className="text-blue-500" />
            <span>(737) 259-7704</span>
          </a>
          <button 
            onClick={onGetSynced}
            className="bg-[#2563eb] hover:bg-blue-700 text-white text-xs font-bold py-2 px-6 rounded transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-blue-900/20 uppercase tracking-widest"
          >
            Get Synced
          </button>
        </div>
      </div>
    </div>
  );
};

export default AgentHeader;
