import React, { useState } from 'react';
import { 
  Sparkles, 
  BrainCircuit, 
  Layers, 
  Cpu, 
  Workflow, 
  ShieldCheck, 
  ArrowUpRight, 
  CheckCircle2, 
  ChevronRight, 
  Code2, 
  Server,
  Zap,
  X
} from 'lucide-react';
import { SERVICES } from '../data/content';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectServiceForConsult: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForConsult }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'development' | 'integration' | 'infrastructure'>('all');
  const [selectedServiceModal, setSelectedServiceModal] = useState<ServiceItem | null>(null);

  const filteredServices = activeCategory === 'all' 
    ? SERVICES 
    : SERVICES.filter(s => s.category === activeCategory);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-sky-400" />;
      case 'BrainCircuit': return <BrainCircuit className="w-6 h-6 text-amber-400" />;
      case 'Layers': return <Layers className="w-6 h-6 text-indigo-400" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-rose-400" />;
      case 'Workflow': return <Workflow className="w-6 h-6 text-emerald-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-teal-400" />;
      default: return <Sparkles className="w-6 h-6 text-sky-400" />;
    }
  };

  return (
    <section id="services" className="py-20 md:py-32 relative bg-slate-950/70 border-t border-slate-900">
      {/* Decorative gradients */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-sky-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-indigo-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-xs font-semibold text-sky-400 mb-3">
              <Zap className="w-3.5 h-3.5" />
              <span>Full-Lifecycle AI Engineering</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Enterprise AI Solutions & Development Services
            </h2>
            <p className="mt-3 text-slate-400 text-base">
              From custom LLM pre-training and vector embeddings to sovereign MLOps and autonomous agents, 
              India Innovation Tech builds production-grade AI designed for enterprise reliability.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="mt-6 md:mt-0 flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Services' },
              { id: 'development', label: 'GenAI Development' },
              { id: 'integration', label: 'Enterprise Integration' },
              { id: 'infrastructure', label: 'MLOps & Sovereign Infra' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as any)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activeCategory === tab.id
                    ? 'bg-sky-500 text-slate-950 shadow-md shadow-sky-500/20'
                    : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group relative rounded-2xl bg-slate-900/60 border border-slate-800/90 hover:border-sky-500/40 p-6 transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/10 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                {/* Header & Icon */}
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 group-hover:border-slate-700 transition-colors">
                    {getServiceIcon(service.icon)}
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-800/60 text-slate-400 uppercase tracking-wider border border-slate-700/50">
                    {service.category}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs font-mono text-sky-400/90 mt-1 mb-3">
                  {service.subtitle}
                </p>

                {/* Description */}
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {service.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-800/60 text-slate-300 border border-slate-700/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Key Capability Bullet Points */}
                <div className="space-y-2 mb-6 pt-3 border-t border-slate-800/60">
                  {service.capabilities.slice(0, 3).map((cap, cIdx) => (
                    <div key={cIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="line-clamp-2">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedServiceModal(service)}
                  className="text-xs font-semibold text-slate-300 hover:text-white inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>Technical Blueprint</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-sky-400" />
                </button>

                <button
                  onClick={() => onSelectServiceForConsult(service.id)}
                  className="px-3 py-1.5 rounded-lg bg-sky-500/10 hover:bg-sky-500/20 text-sky-300 hover:text-sky-200 border border-sky-500/30 text-xs font-semibold inline-flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <span>Consult</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Technical Blueprint Modal */}
      {selectedServiceModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden p-6 max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                  {getServiceIcon(selectedServiceModal.icon)}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{selectedServiceModal.title}</h3>
                  <p className="text-xs font-mono text-sky-400">{selectedServiceModal.subtitle}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedServiceModal(null)}
                className="p-1 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="py-4 space-y-5">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">Service Overview</h4>
                <p className="text-sm text-slate-300 leading-relaxed">{selectedServiceModal.description}</p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">Core Engineering Capabilities</h4>
                <div className="space-y-2">
                  {selectedServiceModal.capabilities.map((cap, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-200 bg-slate-950/60 p-2 rounded-lg border border-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">Client Deliverables</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedServiceModal.deliverables.map((deliv, idx) => (
                    <div key={idx} className="text-xs text-slate-300 bg-slate-800/40 p-2.5 rounded-lg border border-slate-700/60 flex items-center gap-2">
                      <Server className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Proven Case Snippet */}
              <div className="p-3.5 rounded-xl bg-gradient-to-r from-sky-950/40 to-indigo-950/40 border border-sky-500/20 text-xs">
                <span className="font-semibold text-sky-300">Proven Benchmark: </span>
                <span className="text-slate-300">{selectedServiceModal.caseSnippet}</span>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-end gap-3">
              <button
                onClick={() => setSelectedServiceModal(null)}
                className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const serviceId = selectedServiceModal.id;
                  setSelectedServiceModal(null);
                  onSelectServiceForConsult(serviceId);
                }}
                className="px-4 py-2 text-xs font-semibold text-slate-950 bg-sky-400 hover:bg-sky-300 rounded-lg shadow-md cursor-pointer inline-flex items-center gap-1.5"
              >
                <span>Request Custom Scoping</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
