
import React from 'react';

interface NetworkMapProps {
  onContact?: () => void;
}

const NetworkMap: React.FC<NetworkMapProps> = ({ onContact }) => {
  return (
    <div className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold text-[#001f3f] mb-4 tracking-tight">Our Large Network Brings Agents Closer to You</h2>
        <div className="relative h-[500px] w-full mt-12 rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-white group">
          {/* Animated Background SVG Map */}
          <div className="absolute inset-0 opacity-40 grayscale group-hover:grayscale-0 transition-all duration-1000">
             <img 
               src="https://upload.wikimedia.org/wikipedia/commons/3/32/Blank_US_Map.svg" 
               alt="US Map" 
               className="w-full h-full object-cover scale-110"
             />
          </div>
          
          {/* Floating Agent Bubbles */}
          <div className="absolute inset-0 z-10">
            {Array.from({length: 15}).map((_, i) => (
              <div 
                key={i}
                className="absolute bg-blue-500/30 rounded-full animate-pulse backdrop-blur-sm border border-blue-400/50"
                style={{
                  width: `${Math.random() * 60 + 20}px`,
                  height: `${Math.random() * 60 + 20}px`,
                  left: `${Math.random() * 80 + 10}%`,
                  top: `${Math.random() * 80 + 10}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${Math.random() * 3 + 2}s`
                }}
              />
            ))}
          </div>

          {/* Overlay Card */}
          <div className="absolute bottom-10 left-10 z-20 glass p-8 rounded-2xl max-w-sm text-left shadow-xl transform transition-all hover:-translate-y-2">
            <h3 className="text-xl font-bold text-slate-800 mb-2">We have agents all over the country ready to help you.</h3>
            <button 
              onClick={onContact}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-all shadow-lg shadow-blue-200"
            >
              Contact Shomari
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NetworkMap;
