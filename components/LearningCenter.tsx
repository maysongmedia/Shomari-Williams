
import React from 'react';
import { Lock, ArrowRight, Filter, Search } from 'lucide-react';
import { LearningItem } from '../types';

const items: LearningItem[] = [
  {
    id: '1',
    title: 'Is Life Insurance Worth It?',
    description: 'Whether you have kids, a spouse, or even if...',
    category: ['Final Expense', 'Life Insurance'],
    image: 'https://picsum.photos/seed/lif1/400/250'
  },
  {
    id: '2',
    title: 'The Ins And Outs Of Giving Your Life Insurance Money To Charity',
    description: 'Your life insurance policy can impact far...',
    category: ['Financial Planning', 'Life Insurance'],
    image: 'https://picsum.photos/seed/lif2/400/250'
  },
  {
    id: '3',
    title: 'Life Insurance Planning Worksheet',
    description: 'A comprehensive guide to calculating your need...',
    category: ['Planning', 'Premium'],
    image: 'https://picsum.photos/seed/lif3/400/250',
    isPremium: true
  },
  {
    id: '4',
    title: 'What Is Indexed Universal Life Insurance?',
    description: 'Life insurance serves to help people...',
    category: ['IUL', 'Coverage'],
    image: 'https://picsum.photos/seed/lif4/400/250'
  },
  {
    id: '5',
    title: '6 Benefits Of Life Insurance',
    description: 'Life insurance is like a safety net for your...',
    category: ['Benefits', 'Legacy'],
    image: 'https://picsum.photos/seed/lif5/400/250'
  },
  {
    id: '6',
    title: 'The Different Types Of Life Insurance',
    description: 'Explore the nuances between Term, Whole, and IUL...',
    category: ['Education', 'Basics'],
    image: 'https://picsum.photos/seed/lif6/400/250'
  }
];

const LearningCenter: React.FC = () => {
  return (
    <section id="learning" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-16">
          <h2 className="text-5xl font-black text-slate-900 tracking-tight mb-4 italic">Learning Center</h2>
          <p className="text-slate-500 max-w-2xl text-lg">Life insurance can be stressful! But we have resources available to help you navigate and find the best coverage for you here in our Learning Center.</p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          <div className="flex items-center space-x-8 border-b border-slate-100 overflow-x-auto w-full md:w-auto">
            {['All', 'Articles', 'Videos', 'Infographics', 'Guides'].map((cat, i) => (
              <button key={cat} className={`pb-4 text-sm font-bold tracking-tight px-2 whitespace-nowrap transition-colors ${i === 0 ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-400 hover:text-slate-600'}`}>
                {cat}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input type="text" placeholder="Search..." className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <button className="flex items-center gap-2 px-4 py-2.5 border border-slate-200 rounded-lg text-slate-600 font-bold hover:bg-slate-50">
              <Filter size={18} />
              Filters
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <div key={item.id} className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
              <div className="relative aspect-video overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                {item.isPremium && (
                  <div className="absolute inset-0 bg-blue-600/80 backdrop-blur-sm flex flex-col items-center justify-center text-white p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Lock size={32} className="mb-2" />
                    <span className="font-black text-xl italic uppercase tracking-tighter">Premium Content</span>
                    <button className="mt-4 bg-white text-blue-600 font-bold py-2 px-6 rounded-lg text-sm">Unlock Now</button>
                  </div>
                )}
                <div className="absolute top-4 left-4 flex gap-2">
                  {item.category.map(cat => (
                    <span key={cat} className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-blue-600 shadow-sm">{cat}</span>
                  ))}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight">{item.title}</h3>
                <p className="text-slate-500 text-sm mb-6 line-clamp-2">{item.description}</p>
                <button className="flex items-center gap-2 text-blue-600 font-bold text-sm hover:gap-3 transition-all">
                  Read More
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningCenter;
