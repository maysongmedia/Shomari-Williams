
import React from 'react';

const partners = [
  { name: 'Mutual of Omaha', color: '#d32f2f' },
  { name: 'Humana', color: '#689f38' },
  { name: 'Aetna', color: '#7b1fa2' },
  { name: 'Wellcare', color: '#00796b' },
  { name: 'Transamerica', color: '#1976d2' },
  { name: 'Americo', color: '#f57c00' },
];

const LogoSlider: React.FC = () => {
  return (
    <div className="bg-white py-12 border-y border-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-slate-400 font-bold uppercase text-xs tracking-widest mb-10">We Work with Leading Insurance Companies</p>
        <div className="flex overflow-hidden group">
          <div className="flex space-x-16 animate-infinite-scroll group-hover:[animation-play-state:paused] whitespace-nowrap py-4">
            {[...partners, ...partners].map((partner, i) => (
              <div key={i} className="flex items-center space-x-2 grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100 cursor-default">
                <div className="w-8 h-8 rounded-full" style={{ backgroundColor: partner.color }} />
                <span className="text-2xl font-black italic tracking-tighter" style={{ color: partner.color }}>{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 40s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default LogoSlider;
