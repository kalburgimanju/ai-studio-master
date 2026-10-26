import React from 'react';
import { 
  Landmark, 
  Stethoscope, 
  GraduationCap, 
  ShoppingBag, 
  Factory, 
  Building2, 
  ArrowRight,
  TrendingUp,
  ShieldCheck
} from 'lucide-react';
import { INDUSTRIES } from '../data/content';

interface IndustriesSectionProps {
  onOpenConsultation: (service?: string) => void;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({ onOpenConsultation }) => {
  const getIndustryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Landmark': return <Landmark className="w-6 h-6 text-sky-400" />;
      case 'Stethoscope': return <Stethoscope className="w-6 h-6 text-emerald-400" />;
      case 'GraduationCap': return <GraduationCap className="w-6 h-6 text-amber-400" />;
      case 'ShoppingBag': return <ShoppingBag className="w-6 h-6 text-rose-400" />;
      case 'Factory': return <Factory className="w-6 h-6 text-indigo-400" />;
      case 'Building2': return <Building2 className="w-6 h-6 text-teal-400" />;
      default: return <Landmark className="w-6 h-6 text-sky-400" />;
    }
  };

  return (
    <section id="industries" className="py-20 md:py-32 relative bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-xs font-semibold text-sky-400 mb-3">
            <Building2 className="w-3.5 h-3.5" />
            <span>Vertical AI Specialization</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Tailored Industry AI Solutions
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Every sector requires specialized tokenizers, domain ontologies, and regulatory compliance. 
            India Innovation Tech delivers vertical-specific deep-tech models pre-aligned with your operational realities.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES.map((ind) => (
            <div
              key={ind.id}
              className="rounded-2xl bg-slate-900/50 border border-slate-800 p-6 flex flex-col justify-between hover:border-slate-700 hover:bg-slate-900/80 transition-all duration-300 group"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 group-hover:border-slate-700">
                    {getIndustryIcon(ind.icon)}
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                    {ind.name}
                  </h3>
                </div>

                {/* Challenge & Solution */}
                <div className="space-y-3 mb-5">
                  <div className="p-3 bg-slate-950/70 rounded-xl border border-slate-800/80 text-xs">
                    <span className="font-mono text-rose-400 uppercase tracking-wider block mb-1">Challenge:</span>
                    <span className="text-slate-300">{ind.painPoint}</span>
                  </div>

                  <div className="p-3 bg-slate-950/70 rounded-xl border border-slate-800/80 text-xs">
                    <span className="font-mono text-sky-400 uppercase tracking-wider block mb-1">IITech AI Solution:</span>
                    <span className="text-slate-200">{ind.solution}</span>
                  </div>
                </div>

                {/* Use Cases */}
                <div className="space-y-1.5 mb-5">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-1">
                    Key Implementations:
                  </div>
                  {ind.useCases.map((uc, uIdx) => (
                    <div key={uIdx} className="text-xs text-slate-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
                      <span>{uc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Impact Metric & CTA */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
                  <TrendingUp className="w-4 h-4" />
                  <span>{ind.impactMetric}</span>
                </div>
                <button
                  onClick={() => onOpenConsultation(ind.id)}
                  className="text-xs font-semibold text-slate-400 group-hover:text-sky-300 inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>Explore</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
