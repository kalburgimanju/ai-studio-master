import React, { useState } from 'react';
import { 
  BrainCircuit, 
  MapPin, 
  Phone, 
  Mail, 
  ArrowRight, 
  Check, 
  Linkedin, 
  Twitter, 
  Github, 
  Youtube,
  ShieldCheck
} from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setIsSubscribed(true);
    }
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-xs">
      {/* Top Newsletter & Briefing Banner */}
      <div className="border-b border-slate-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 bg-slate-900/60 p-6 sm:p-8 rounded-2xl border border-slate-800">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">
                Subscribe to Sovereign AI & GenAI Research Insights
              </h3>
              <p className="text-slate-400 text-xs max-w-xl">
                Monthly technical teardowns on LLM fine-tuning, vector embeddings benchmarking, vLLM optimization, and enterprise agent architecture.
              </p>
            </div>

            <div className="w-full lg:w-auto">
              {isSubscribed ? (
                <div className="flex items-center gap-2 text-emerald-400 bg-emerald-500/10 px-4 py-2.5 rounded-xl border border-emerald-500/30 font-medium">
                  <Check className="w-4 h-4" />
                  <span>Subscribed to IITech Technical Digest!</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex gap-2 w-full sm:w-auto">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter corporate email..."
                    className="bg-slate-950 border border-slate-700/80 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-400 min-w-[240px]"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold rounded-xl text-xs cursor-pointer transition-colors shrink-0"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-500 via-indigo-600 to-amber-500 p-[2px]">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <BrainCircuit className="w-5 h-5 text-sky-400" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white tracking-tight">
                  India Innovation Tech
                </span>
                <span className="text-[10px] font-mono text-slate-400 uppercase">
                  formerly AInventions Tech
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Shaping Tomorrow's Intelligence with Cutting-edge AI Solutions. 
              Engineering custom foundation models, low-latency vector embeddings, and autonomous multi-agent systems for enterprises globally.
            </p>

            <div className="space-y-1.5 text-xs text-slate-400 pt-2 font-mono">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <span>Bengaluru Innovation Hub, KA 560103, India</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                <span>30 N. Gould St., Ste R, Sheridan, WY 82801, USA</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                <span>{COMPANY_INFO.email}</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-3">
              <a href="#" className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors">
                <Github className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              AI Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#services" className="hover:text-white transition-colors">Generative AI Development</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Custom LLM Fine-Tuning</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Adaptive AI & Agents</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Embeddings as a Service</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">OpenAI & Open-Source API</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">MLOps & Sovereign Infra</a></li>
            </ul>
          </div>

          {/* Col 3: Products & Industries */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              Products & Sectors
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#products" className="hover:text-white transition-colors">BharatTutor Live (AI Tutor)</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">FinCognition RAG Engine</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">AgentPulse Autonomous</a></li>
              <li><a href="#industries" className="hover:text-white transition-colors">FinTech & Banking</a></li>
              <li><a href="#industries" className="hover:text-white transition-colors">Healthcare & Diagnostics</a></li>
              <li><a href="#industries" className="hover:text-white transition-colors">GovTech & Public AI</a></li>
            </ul>
          </div>

          {/* Col 4: Company & Compliance */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              Company & Legal
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#about" className="hover:text-white transition-colors">About India Innovation Tech</a></li>
              <li><a href="#interactive-lab" className="hover:text-white transition-colors">Interactive AI Lab</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Technical FAQs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Zero-Retention Security Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} India Innovation Technologies Private Limited (formerly AInventions Technologies). All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              SOC-2 Type II & ISO 27001 Certified
            </span>
            <span>•</span>
            <span>Sheridan, WY & Bengaluru, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
