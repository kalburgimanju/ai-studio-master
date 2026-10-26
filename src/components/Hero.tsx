import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Cpu, 
  Terminal, 
  CheckCircle2, 
  ShieldCheck, 
  Layers, 
  Zap, 
  Activity, 
  Database,
  Search,
  Play
} from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface HeroProps {
  onOpenConsultation: () => void;
  onExploreLab: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation, onExploreLab }) => {
  const [activeTab, setActiveTab] = useState<'rag' | 'embeddings' | 'cluster'>('rag');
  const [selectedPromptIndex, setSelectedPromptIndex] = useState(0);
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulatedTokens, setSimulatedTokens] = useState<string>('');

  const samplePrompts = [
    {
      query: "Analyze 2026 Reserve Bank regulatory compliance for cross-border payments.",
      vectorScore: "0.964 Cosine Match",
      latency: "118 ms",
      chunks: ["RBI Master Direction 2026 Section 4(b)", "Cross-Border Settlement Protocol v3"],
      answer: "Under RBI Master Direction 2026, foreign exchange aggregators must enforce real-time localized ledger settlement with 256-bit cryptographic verification. No PII data can be stored outside Indian sovereign cloud data centers."
    },
    {
      query: "Solve differential equation dy/dx + 2y = e^(-x) with initial condition y(0)=1 in bilingual Hindi-English.",
      vectorScore: "0.982 Cosine Match",
      latency: "94 ms",
      chunks: ["BharatTutor Math Engine - Linear First Order DE", "Standard Integrating Factor e^(2x)"],
      answer: "Integrating Factor IF = e^(∫2 dx) = e^(2x). Dono sides multiply karne par: d/dx(y * e^(2x)) = e^x. Integrating: y * e^(2x) = e^x + C. At x=0, y=1: 1 = 1 + C => C=0. Final solution: y = e^(-x)."
    },
    {
      query: "Orchestrate multi-agent autonomous triage for 45,000 healthcare claims.",
      vectorScore: "0.951 Cosine Match",
      latency: "142 ms",
      chunks: ["AgentPulse Policy Validation Graph", "ICD-11 Diagnostic Semantic Index"],
      answer: "AgentPulse decomposes claims into 3 parallel sub-tasks: (1) ICD-11 coding consistency check, (2) Prior-authorization policy matrix lookup, (3) Fraud anomaly vector detection. 94.2% automatically approved in 4.2 seconds."
    }
  ];

  const handleRunSimulation = (index: number) => {
    setSelectedPromptIndex(index);
    setIsSimulating(true);
    setSimulatedTokens('');

    const targetAnswer = samplePrompts[index].answer;
    let currentIdx = 0;
    const interval = setInterval(() => {
      if (currentIdx < targetAnswer.length) {
        currentIdx += 4;
        setSimulatedTokens(targetAnswer.slice(0, currentIdx));
      } else {
        clearInterval(interval);
        setIsSimulating(false);
      }
    }, 20);
  };

  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden bg-grid-pattern">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-sky-600/15 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-indigo-600/15 blur-[100px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[250px] bg-amber-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline and Positioning */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-xs font-semibold text-sky-400 mb-6 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Sovereign Deep-Tech • Enterprise Generative AI</span>
              <span className="text-slate-500">|</span>
              <span className="text-slate-400">Formerly AInventions Tech</span>
            </div>

            {/* Main Tagline & Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Shaping Tomorrow's <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-300 to-amber-300">
                Intelligence
              </span> with <br />
              Cutting-edge AI Solutions.
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              <span className="font-semibold text-white">India Innovation Tech</span> delivers enterprise-grade 
              Generative AI, custom Large Language Model (LLM) fine-tuning, high-throughput vector embeddings, 
              and autonomous multi-agent systems designed for mission-critical scale, sovereign compliance, and zero data leakage.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap gap-4 items-center">
              <button
                onClick={onOpenConsultation}
                className="px-6 py-3.5 text-sm sm:text-base font-bold text-slate-950 bg-gradient-to-r from-sky-400 via-sky-300 to-indigo-300 hover:from-sky-300 hover:to-indigo-200 rounded-xl shadow-xl shadow-sky-500/25 transition-all duration-200 inline-flex items-center gap-2.5 cursor-pointer transform hover:-translate-y-0.5"
              >
                <span>Schedule AI Discovery Call</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreLab}
                className="px-6 py-3.5 text-sm sm:text-base font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/80 hover:border-slate-600 rounded-xl transition-all duration-200 inline-flex items-center gap-2 cursor-pointer"
              >
                <Cpu className="w-4 h-4 text-sky-400" />
                <span>Launch Interactive AI Lab</span>
              </button>
            </div>

            {/* Key Trust Signals */}
            <div className="mt-10 pt-8 border-t border-slate-800/80 w-full grid grid-cols-2 sm:grid-cols-4 gap-4">
              {COMPANY_INFO.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300">
                    {stat.value}
                  </span>
                  <span className="text-xs text-slate-400 mt-1 font-medium leading-tight">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Interactive Neural Console */}
          <div className="lg:col-span-5 w-full">
            <div className="relative rounded-2xl bg-slate-950/90 border border-slate-800 shadow-2xl shadow-sky-950/40 overflow-hidden">
              {/* Window Header */}
              <div className="px-4 py-3 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-sky-400" />
                    IITech Neural Console v3.8
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  <Activity className="w-3 h-3" />
                  <span>LIVE INFERENCE</span>
                </div>
              </div>

              {/* Console Tabs */}
              <div className="grid grid-cols-3 bg-slate-900/40 border-b border-slate-800 text-xs font-medium">
                <button
                  onClick={() => setActiveTab('rag')}
                  className={`py-2.5 px-3 text-center transition-colors cursor-pointer border-b-2 flex items-center justify-center gap-1.5 ${
                    activeTab === 'rag' 
                      ? 'border-sky-400 text-sky-300 bg-slate-900/60 font-semibold' 
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Search className="w-3.5 h-3.5" />
                  <span>Vector RAG</span>
                </button>
                <button
                  onClick={() => setActiveTab('embeddings')}
                  className={`py-2.5 px-3 text-center transition-colors cursor-pointer border-b-2 flex items-center justify-center gap-1.5 ${
                    activeTab === 'embeddings' 
                      ? 'border-indigo-400 text-indigo-300 bg-slate-900/60 font-semibold' 
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>Embeddings</span>
                </button>
                <button
                  onClick={() => setActiveTab('cluster')}
                  className={`py-2.5 px-3 text-center transition-colors cursor-pointer border-b-2 flex items-center justify-center gap-1.5 ${
                    activeTab === 'cluster' 
                      ? 'border-amber-400 text-amber-300 bg-slate-900/60 font-semibold' 
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Cpu className="w-3.5 h-3.5" />
                  <span>Sovereign GPU</span>
                </button>
              </div>

              {/* Tab Content: Vector RAG Simulator */}
              {activeTab === 'rag' && (
                <div className="p-4 space-y-4">
                  <div className="text-xs text-slate-400 font-medium">
                    Select an enterprise sample query to simulate real-time semantic retrieval:
                  </div>

                  {/* Sample Query Selectors */}
                  <div className="space-y-2">
                    {samplePrompts.map((p, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleRunSimulation(idx)}
                        className={`w-full text-left p-2.5 rounded-lg border text-xs transition-all cursor-pointer flex items-center justify-between ${
                          selectedPromptIndex === idx
                            ? 'bg-sky-950/40 border-sky-500/50 text-sky-200 shadow-sm'
                            : 'bg-slate-900/40 border-slate-800 text-slate-300 hover:border-slate-700'
                        }`}
                      >
                        <span className="line-clamp-1">{p.query}</span>
                        <Play className={`w-3.5 h-3.5 shrink-0 ml-2 ${selectedPromptIndex === idx ? 'text-sky-400 fill-sky-400' : 'text-slate-500'}`} />
                      </button>
                    ))}
                  </div>

                  {/* Telemetry Metrics Bar */}
                  <div className="grid grid-cols-2 gap-2 bg-slate-900/80 p-2.5 rounded-lg border border-slate-800 font-mono text-[11px]">
                    <div className="flex items-center justify-between text-slate-400">
                      <span>Vector Match:</span>
                      <span className="text-emerald-400 font-semibold">{samplePrompts[selectedPromptIndex].vectorScore}</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-400">
                      <span>Latency:</span>
                      <span className="text-sky-400 font-semibold">{samplePrompts[selectedPromptIndex].latency}</span>
                    </div>
                  </div>

                  {/* Chunks retrieved */}
                  <div className="text-[11px] text-slate-400 font-mono">
                    <span className="text-slate-500">Source Citations: </span>
                    {samplePrompts[selectedPromptIndex].chunks.map((c, i) => (
                      <span key={i} className="inline-block bg-slate-800 text-slate-300 px-2 py-0.5 rounded text-[10px] mr-1.5 mt-1 border border-slate-700">
                        📄 {c}
                      </span>
                    ))}
                  </div>

                  {/* Output Display */}
                  <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800/80 min-h-[120px] font-sans text-xs leading-relaxed text-slate-200">
                    <div className="flex items-center gap-1.5 text-[10px] uppercase font-mono tracking-wider text-sky-400 mb-2">
                      <Sparkles className="w-3 h-3" />
                      <span>Synthesized Output</span>
                      {isSimulating && <span className="animate-pulse">● Generating...</span>}
                    </div>
                    <p className="text-slate-300">
                      {isSimulating ? simulatedTokens : samplePrompts[selectedPromptIndex].answer}
                    </p>
                  </div>
                </div>
              )}

              {/* Tab Content: Embeddings Explorer */}
              {activeTab === 'embeddings' && (
                <div className="p-4 space-y-4">
                  <div className="text-xs text-slate-300">
                    High-dimensional 1536-D Vector Embedding distance comparison between enterprise concepts:
                  </div>

                  <div className="space-y-3 font-mono text-xs">
                    <div className="p-3 bg-slate-900/60 rounded-lg border border-slate-800">
                      <div className="flex justify-between text-slate-400 mb-1">
                        <span>"Autonomous Agent" ↔ "Tool Calling Workflow"</span>
                        <span className="text-emerald-400 font-bold">0.941</span>
                      </div>
                      <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-emerald-400 h-full rounded-full" style={{ width: '94.1%' }} />
                      </div>
                    </div>

                    <div className="p-3 bg-slate-900/60 rounded-lg border border-slate-800">
                      <div className="flex justify-between text-slate-400 mb-1">
                        <span>"Enterprise RAG" ↔ "Vector Database Hybrid Search"</span>
                        <span className="text-sky-400 font-bold">0.968</span>
                      </div>
                      <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-sky-400 h-full rounded-full" style={{ width: '96.8%' }} />
                      </div>
                    </div>

                    <div className="p-3 bg-slate-900/60 rounded-lg border border-slate-800">
                      <div className="flex justify-between text-slate-400 mb-1">
                        <span>"Sovereign LLM" ↔ "Air-Gapped Private Weights"</span>
                        <span className="text-amber-400 font-bold">0.912</span>
                      </div>
                      <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-amber-400 h-full rounded-full" style={{ width: '91.2%' }} />
                      </div>
                    </div>
                  </div>

                  <div className="p-3 bg-sky-950/20 border border-sky-500/20 rounded-lg text-xs text-sky-300 flex items-center justify-between">
                    <span>Embeddings throughput: <strong>24,000 vectors/sec</strong></span>
                    <button 
                      onClick={onExploreLab}
                      className="text-sky-400 underline font-semibold text-[11px] cursor-pointer"
                    >
                      Open Full Matrix →
                    </button>
                  </div>
                </div>
              )}

              {/* Tab Content: Sovereign GPU Cluster */}
              {activeTab === 'cluster' && (
                <div className="p-4 space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between p-2.5 bg-slate-900/70 border border-slate-800 rounded-lg">
                    <span className="text-slate-400">Cluster Architecture:</span>
                    <span className="text-slate-200 font-semibold">8x NVIDIA H100 SXM5 80GB</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 bg-slate-900/70 border border-slate-800 rounded-lg">
                    <span className="text-slate-400">Inference Engine:</span>
                    <span className="text-emerald-400 font-semibold">vLLM PagedAttention v0.6</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 bg-slate-900/70 border border-slate-800 rounded-lg">
                    <span className="text-slate-400">Data Egress / Leakage:</span>
                    <span className="text-sky-400 font-semibold">0.00% (Air-Gapped Private VPC)</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 bg-slate-900/70 border border-slate-800 rounded-lg">
                    <span className="text-slate-400">Quantization Precision:</span>
                    <span className="text-amber-400 font-semibold">FP8 / AWQ Lossless</span>
                  </div>

                  <div className="pt-2 text-[11px] text-slate-400 text-center">
                    India Innovation Tech guarantees zero third-party telemetry and on-premise execution sovereignty.
                  </div>
                </div>
              )}

              {/* Footer bar */}
              <div className="px-4 py-2.5 bg-slate-900/80 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  ISO 27001 & SOC-2 Compliant
                </span>
                <span className="text-slate-500 font-mono">Status: Nominal</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
