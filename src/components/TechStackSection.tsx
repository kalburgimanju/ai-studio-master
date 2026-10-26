import React, { useState } from 'react';
import { 
  Cpu, 
  Database, 
  Layers, 
  Server, 
  Sparkles, 
  Check, 
  ExternalLink 
} from 'lucide-react';
import { TECH_STACK } from '../data/content';

export const TechStackSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'models' | 'vector' | 'frameworks' | 'compute'>('all');

  const filteredTech = activeTab === 'all' 
    ? TECH_STACK 
    : TECH_STACK.filter(t => t.category === activeTab);

  return (
    <section id="tech-stack" className="py-20 md:py-32 relative bg-slate-950/70 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-semibold text-amber-400 mb-3">
              <Cpu className="w-3.5 h-3.5" />
              <span>Production-Grade Architecture</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Enterprise AI Technology Stack
            </h2>
            <p className="mt-3 text-slate-400 text-sm sm:text-base">
              We leverage modern state-of-the-art foundation weights, high-throughput vector indices, and low-latency inference runtimes.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="mt-6 md:mt-0 flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Technologies' },
              { id: 'models', label: 'Foundation Models' },
              { id: 'vector', label: 'Vector & Storage' },
              { id: 'frameworks', label: 'Frameworks & Runtimes' },
              { id: 'compute', label: 'Compute & Sovereign Infra' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/20'
                    : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredTech.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/90 hover:border-slate-700 hover:bg-slate-900/90 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between mb-2">
                  <span className="text-sm font-bold text-white tracking-tight">{item.name}</span>
                  {item.badge && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-sky-500/10 text-sky-400 border border-sky-500/20">
                      {item.badge}
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                <span>{item.category}</span>
                <span className="text-emerald-400">● Optimized</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
