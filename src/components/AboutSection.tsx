import React from 'react';
import { 
  Building2, 
  Globe2, 
  ShieldCheck, 
  Award, 
  MapPin, 
  CheckCircle2, 
  Users, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface AboutSectionProps {
  onOpenConsultation: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section id="about" className="py-20 md:py-32 relative bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-xs font-semibold text-sky-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Our Heritage & Vision</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Pioneering Sovereign AI & Deep-Tech Innovation for India and the World
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Born from the foundational AI engineering of <strong className="text-white">AInventions Technologies</strong> (Sheridan, Wyoming), 
              <strong className="text-sky-400"> India Innovation Tech</strong> represents our elevated enterprise mission: to architect sovereign, 
              mathematically rigorous, and production-grade Generative AI systems that eliminate reliance on opaque black-box APIs.
            </p>

            <p className="text-slate-400 text-sm leading-relaxed">
              With our central engineering headquarters in Bengaluru's Silicon Valley and global offices in the United States, 
              we build foundation models, agent swarms, and vector RAG meshes for enterprise banks, healthcare networks, higher education institutions, 
              and government organizations.
            </p>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                { title: "Zero Data Leakage Guarantee", desc: "Air-gapped on-premise or private VPC deployments. Zero training on client IP." },
                { title: "Full Weight Ownership", desc: "You own all fine-tuned checkpoints, LoRA adapters, and dataset pipelines." },
                { title: "Bilingual Indic Fluency", desc: "Native tokenizers optimized for Hindi, Tamil, Telugu, Kannada, Bengali, and Marathi." },
                { title: "Sub-300ms Turnaround", desc: "vLLM and TensorRT-LLM runtimes tuned for real-time duplex conversational systems." }
              ].map((pillar, idx) => (
                <div key={idx} className="p-3.5 bg-slate-900/60 rounded-xl border border-slate-800">
                  <div className="flex items-center gap-2 text-xs font-bold text-white mb-1">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{pillar.title}</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed pl-6">{pillar.desc}</p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenConsultation}
                className="px-6 py-3 text-xs sm:text-sm font-bold text-slate-950 bg-sky-400 hover:bg-sky-300 rounded-xl shadow-lg shadow-sky-500/20 inline-flex items-center gap-2 cursor-pointer transition-all"
              >
                <span>Partner With India Innovation Tech</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Global Presence & Offices */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Bengaluru India Office */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full blur-2xl pointer-events-none" />
              <div className="flex items-center gap-2 text-xs font-mono text-sky-400 uppercase tracking-wider mb-2 font-semibold">
                <MapPin className="w-4 h-4 text-sky-400" />
                <span>India Tech Headquarters</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Bengaluru Innovation Campus</h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                {COMPANY_INFO.addressIndia}
              </p>
              <div className="flex items-center justify-between text-xs font-mono pt-3 border-t border-slate-800 text-slate-400">
                <span>Phone: {COMPANY_INFO.phoneIndia}</span>
                <span className="text-emerald-400">● Core R&D Hub</span>
              </div>
            </div>

            {/* Sheridan USA Global Branch */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />
              <div className="flex items-center gap-2 text-xs font-mono text-indigo-400 uppercase tracking-wider mb-2 font-semibold">
                <Globe2 className="w-4 h-4 text-indigo-400" />
                <span>United States Global Office</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Sheridan Research Center</h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                {COMPANY_INFO.addressUS}
              </p>
              <div className="flex items-center justify-between text-xs font-mono pt-3 border-t border-slate-800 text-slate-400">
                <span>Phone: {COMPANY_INFO.phoneUS}</span>
                <span className="text-indigo-400">● US & EMEA Desk</span>
              </div>
            </div>

            {/* Certifications Badge */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <span>ISO 27001 • SOC-2 Type II • HIPAA Ready</span>
              </div>
              <span className="text-slate-500 font-mono text-[11px]">CERTIFIED</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
