import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Menu, 
  X, 
  ChevronRight, 
  Cpu, 
  BrainCircuit, 
  Layers, 
  ShieldCheck, 
  Bot, 
  PhoneCall,
  ExternalLink,
  ChevronDown
} from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface NavbarProps {
  onOpenConsultation: (defaultService?: string) => void;
  onNavigateLab: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation, onNavigateLab }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-sky-900/90 via-indigo-950 to-slate-950 border-b border-sky-500/20 text-xs py-2 px-4 text-center text-slate-300">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 flex-wrap">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-sky-500/10 text-sky-400 font-semibold border border-sky-500/30">
            <Sparkles className="w-3 h-3" /> New Release
          </span>
          <span>India Innovation Tech introduces BharatTutor Live v2 & High-Speed Vector RAG Mesh for Enterprise.</span>
          <button 
            onClick={() => onOpenConsultation('genai-development')}
            className="text-sky-400 font-medium hover:underline inline-flex items-center gap-1 ml-1 cursor-pointer"
          >
            Request Briefing <ChevronRight className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Main Navigation */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-xl shadow-black/40 py-3' 
          : 'bg-transparent border-b border-slate-800/40 py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 via-indigo-600 to-amber-500 p-[2px] transition-transform duration-300 group-hover:scale-105 shadow-md shadow-sky-500/20">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <BrainCircuit className="w-5 h-5 text-sky-400 transition-colors group-hover:text-amber-400" />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-xl font-extrabold tracking-tight text-white group-hover:text-sky-300 transition-colors">
                    India Innovation
                  </span>
                  <span className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">
                    Tech
                  </span>
                </div>
                <span className="text-[10px] tracking-wider uppercase text-slate-400 font-mono">
                  formerly AInventions Tech
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1">
              {/* Services Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsServicesDropdownOpen(true)}
                onMouseLeave={() => setIsServicesDropdownOpen(false)}
              >
                <a 
                  href="#services"
                  className="px-3.5 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-lg hover:bg-slate-800/50 transition-colors inline-flex items-center gap-1"
                >
                  Services
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
                </a>

                {isServicesDropdownOpen && (
                  <div className="absolute top-full left-0 w-80 p-2 bg-slate-900/95 backdrop-blur-xl border border-slate-800 rounded-xl shadow-2xl shadow-black/60 animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="px-3 py-2 text-[11px] font-semibold uppercase tracking-wider text-slate-400 border-b border-slate-800 mb-1">
                      Enterprise AI Capabilities
                    </div>
                    <a href="#services" className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-800/60 transition-colors group">
                      <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400 group-hover:bg-sky-500/20">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-slate-200 group-hover:text-sky-300">Generative AI & LLMs</div>
                        <div className="text-xs text-slate-400">Custom pre-training & fine-tuning</div>
                      </div>
                    </a>
                    <a href="#services" className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-800/60 transition-colors group">
                      <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500/20">
                        <Layers className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-slate-200 group-hover:text-indigo-300">Embeddings as a Service</div>
                        <div className="text-xs text-slate-400">High-throughput vector search & RAG</div>
                      </div>
                    </a>
                    <a href="#services" className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-800/60 transition-colors group">
                      <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 group-hover:bg-amber-500/20">
                        <BrainCircuit className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-slate-200 group-hover:text-amber-300">Adaptive AI & Agents</div>
                        <div className="text-xs text-slate-400">Autonomous workflow orchestration</div>
                      </div>
                    </a>
                    <a href="#services" className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-800/60 transition-colors group">
                      <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500/20">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-slate-200 group-hover:text-emerald-300">MLOps & Sovereign AI</div>
                        <div className="text-xs text-slate-400">On-premise air-gapped clusters</div>
                      </div>
                    </a>
                  </div>
                )}
              </div>

              <a 
                href="#products" 
                className="px-3.5 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-lg hover:bg-slate-800/50 transition-colors"
              >
                Products & Cases
              </a>
              <a 
                href="#industries" 
                className="px-3.5 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-lg hover:bg-slate-800/50 transition-colors"
              >
                Industries
              </a>
              <a 
                href="#tech-stack" 
                className="px-3.5 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-lg hover:bg-slate-800/50 transition-colors"
              >
                Tech Stack
              </a>
              <button 
                onClick={onNavigateLab}
                className="px-3.5 py-2 text-sm font-medium text-sky-400 hover:text-sky-300 rounded-lg hover:bg-sky-500/10 transition-colors inline-flex items-center gap-1.5 cursor-pointer"
              >
                <Cpu className="w-4 h-4" />
                Interactive Lab
              </button>
              <a 
                href="#about" 
                className="px-3.5 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-lg hover:bg-slate-800/50 transition-colors"
              >
                About
              </a>
              <a 
                href="#faq" 
                className="px-3.5 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-lg hover:bg-slate-800/50 transition-colors"
              >
                FAQ
              </a>
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <a 
                href="tel:+918049208800"
                className="text-xs font-mono text-slate-400 hover:text-slate-200 px-3 py-2 rounded-lg border border-slate-800 hover:border-slate-700 transition-colors inline-flex items-center gap-1.5"
              >
                <PhoneCall className="w-3.5 h-3.5 text-sky-400" />
                +91 (80) 4920-8800
              </a>
              <button 
                onClick={() => onOpenConsultation()}
                className="px-4 py-2 text-sm font-semibold text-slate-950 bg-gradient-to-r from-sky-400 via-sky-300 to-indigo-300 hover:from-sky-300 hover:to-indigo-200 rounded-lg shadow-lg shadow-sky-500/20 hover:shadow-sky-500/30 transition-all duration-200 inline-flex items-center gap-2 cursor-pointer active:scale-95"
              >
                <span>Book Consultation</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="lg:hidden flex items-center gap-2">
              <button 
                onClick={() => onOpenConsultation()}
                className="px-3 py-1.5 text-xs font-semibold text-slate-950 bg-sky-400 rounded-md"
              >
                Consult
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-slate-400 hover:text-white rounded-lg border border-slate-800 bg-slate-900/60"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-slate-950/98 border-b border-slate-800 px-4 pt-3 pb-6 animate-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col space-y-2">
              <a 
                href="#services" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-slate-200 hover:bg-slate-900 text-sm font-medium flex items-center justify-between"
              >
                <span>Services</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </a>
              <a 
                href="#products" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-slate-200 hover:bg-slate-900 text-sm font-medium flex items-center justify-between"
              >
                <span>Products & Case Studies (BharatTutor)</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </a>
              <a 
                href="#industries" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-slate-200 hover:bg-slate-900 text-sm font-medium flex items-center justify-between"
              >
                <span>Industries</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </a>
              <button 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onNavigateLab();
                }}
                className="px-3 py-2.5 rounded-lg text-sky-400 hover:bg-sky-500/10 text-sm font-medium flex items-center justify-between text-left"
              >
                <span>Interactive AI Lab & ROI Tool</span>
                <Cpu className="w-4 h-4 text-sky-400" />
              </button>
              <a 
                href="#tech-stack" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-slate-200 hover:bg-slate-900 text-sm font-medium flex items-center justify-between"
              >
                <span>Tech Stack</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </a>
              <a 
                href="#about" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-slate-200 hover:bg-slate-900 text-sm font-medium flex items-center justify-between"
              >
                <span>About India Innovation Tech</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </a>
              <a 
                href="#faq" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-slate-200 hover:bg-slate-900 text-sm font-medium flex items-center justify-between"
              >
                <span>FAQ</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </a>
              
              <div className="pt-4 border-t border-slate-800 flex flex-col gap-2.5">
                <div className="text-xs text-slate-400">
                  Direct Line: <span className="text-slate-200 font-mono">+91 (80) 4920-8800</span>
                </div>
                <button 
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenConsultation();
                  }}
                  className="w-full py-3 text-center text-sm font-semibold text-slate-950 bg-sky-400 hover:bg-sky-300 rounded-lg shadow-lg"
                >
                  Schedule AI Consultation
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
