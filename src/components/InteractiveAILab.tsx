import React, { useState } from 'react';
import { 
  Cpu, 
  Search, 
  Layers, 
  Calculator, 
  Sparkles, 
  Play, 
  RefreshCw, 
  Check, 
  ArrowRight,
  TrendingDown,
  Clock,
  Shield,
  FileText
} from 'lucide-react';

interface InteractiveAILabProps {
  onOpenConsultation: () => void;
}

export const InteractiveAILab: React.FC<InteractiveAILabProps> = ({ onOpenConsultation }) => {
  const [activeTab, setActiveTab] = useState<'rag' | 'embeddings' | 'roi'>('rag');

  // RAG Simulator State
  const [customQuery, setCustomQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [simulatedResult, setSimulatedResult] = useState<{
    query: string;
    cosineScore: number;
    latency: number;
    tokensPerSec: number;
    retrievedSource: string;
    synthesizedText: string;
  } | null>({
    query: "How does India Innovation Tech guarantee zero data leakage for corporate LLM deployments?",
    cosineScore: 0.978,
    latency: 114,
    tokensPerSec: 135,
    retrievedSource: "IITech Sovereign Security Whitepaper 2026, Section 2.1 (Air-Gapped VPC)",
    synthesizedText: "All models are deployed either on-premise within your own firewall or in isolated single-tenant VPCs with egress filtering. No telemetry, prompt tokens, or response weights are logged or transmitted to third-party public APIs."
  });

  // 2D Embeddings Explorer State
  const embeddingNodes = [
    { id: '1', name: 'Custom LLM (70B)', x: 25, y: 30, category: 'models' },
    { id: '2', name: 'RLHF & DPO Tuning', x: 35, y: 22, category: 'models' },
    { id: '3', name: 'Vector Database (Qdrant)', x: 75, y: 70, category: 'vector' },
    { id: '4', name: 'Hybrid Sparse/Dense RAG', x: 68, y: 62, category: 'vector' },
    { id: '5', name: 'Autonomous Agent Swarm', x: 45, y: 65, category: 'agents' },
    { id: '6', name: 'Tool Calling & Action Trees', x: 42, y: 78, category: 'agents' },
    { id: '7', name: 'BharatTutor Live Audio Engine', x: 20, y: 75, category: 'products' },
    { id: '8', name: 'vLLM PagedAttention GPU', x: 70, y: 30, category: 'infra' },
  ];
  const [selectedNodeA, setSelectedNodeA] = useState<string>('1');
  const [selectedNodeB, setSelectedNodeB] = useState<string>('2');

  // ROI Calculator State
  const [monthlyTokensMillions, setMonthlyTokensMillions] = useState<number>(50); // 50M tokens
  const [solutionType, setSolutionType] = useState<'rag' | 'finetune' | 'agents'>('finetune');
  const [deploymentModel, setDeploymentModel] = useState<'cloud' | 'hybrid' | 'onprem'>('hybrid');

  // Handle RAG search
  const handleExecuteRAG = (preset?: string) => {
    const q = preset || customQuery.trim() || "Evaluate enterprise embeddings throughput for multi-tenant SaaS";
    setIsSearching(true);

    setTimeout(() => {
      setSimulatedResult({
        query: q,
        cosineScore: +(0.92 + Math.random() * 0.07).toFixed(3),
        latency: Math.floor(90 + Math.random() * 45),
        tokensPerSec: Math.floor(120 + Math.random() * 30),
        retrievedSource: `IITech Knowledge Mesh (${q.slice(0, 24)}... chunk #04)`,
        synthesizedText: `Processed across 1536-D semantic vectors. The vector index identified matching knowledge documents with strict relevance. Autonomous synthesis completed with zero data exposure.`
      });
      setIsSearching(false);
    }, 450);
  };

  // Embeddings similarity calculation
  const nodeA = embeddingNodes.find(n => n.id === selectedNodeA)!;
  const nodeB = embeddingNodes.find(n => n.id === selectedNodeB)!;
  const distance = Math.hypot(nodeA.x - nodeB.x, nodeA.y - nodeB.y);
  const similarityScore = Math.max(0.4, (1 - distance / 100)).toFixed(3);

  // ROI calculation formulas
  const baseCloudCost = monthlyTokensMillions * 140; // $140 per 1M tokens with typical proprietary frontier API
  const iitechCost = solutionType === 'finetune' 
    ? (monthlyTokensMillions * 38) + 1200 
    : solutionType === 'rag' 
      ? (monthlyTokensMillions * 45) + 800
      : (monthlyTokensMillions * 55) + 1500;
  
  const monthlySavingsUSD = Math.max(1000, Math.round(baseCloudCost - iitechCost));
  const annualSavingsUSD = monthlySavingsUSD * 12;
  const annualSavingsINR = (annualSavingsUSD * 86 / 100000).toFixed(1); // Lakhs INR
  const hoursSavedPerMonth = Math.round(monthlyTokensMillions * 14.5);
  const paybackMonths = (2.2 + (solutionType === 'finetune' ? 0.6 : 0)).toFixed(1);

  return (
    <section id="interactive-lab" className="py-20 md:py-32 relative bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-400 mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Interactive Technology Sandbox</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            India Innovation Tech Interactive AI Lab
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Test-drive our core enterprise capabilities: run live vector RAG simulations, explore high-dimensional semantic spaces, and calculate tangible ROI for your enterprise AI deployment.
          </p>

          {/* Sub Navigation Tabs */}
          <div className="mt-8 inline-flex p-1.5 rounded-xl bg-slate-900 border border-slate-800 shadow-inner">
            <button
              onClick={() => setActiveTab('rag')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'rag'
                  ? 'bg-sky-500 text-slate-950 shadow-md shadow-sky-500/25'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Search className="w-3.5 h-3.5" />
              <span>Vector RAG Sandbox</span>
            </button>
            <button
              onClick={() => setActiveTab('embeddings')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'embeddings'
                  ? 'bg-indigo-500 text-white shadow-md shadow-indigo-500/25'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Semantic Vector Space</span>
            </button>
            <button
              onClick={() => setActiveTab('roi')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'roi'
                  ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/25'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Calculator className="w-3.5 h-3.5" />
              <span>Enterprise ROI Calculator</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Vector RAG Sandbox */}
        {activeTab === 'rag' && (
          <div className="bg-slate-900/60 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-2xl backdrop-blur-md">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Controls */}
              <div className="lg:col-span-6 space-y-4">
                <div className="text-sm font-semibold text-white flex items-center justify-between">
                  <span>Input Enterprise Prompt / Query:</span>
                  <span className="text-xs font-mono text-sky-400">Embedding: 1536-D Dense + BM25</span>
                </div>

                <div className="relative">
                  <textarea
                    rows={3}
                    value={customQuery}
                    onChange={(e) => setCustomQuery(e.target.value)}
                    placeholder="E.g., Compare on-premise fine-tuned Llama 3.3 vs proprietary API costs for healthcare triage..."
                    className="w-full bg-slate-950 border border-slate-700/80 rounded-xl p-3.5 text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all font-sans"
                  />
                  <button
                    onClick={() => handleExecuteRAG()}
                    disabled={isSearching}
                    className="mt-2 w-full py-2.5 px-4 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold rounded-lg text-xs inline-flex items-center justify-center gap-2 cursor-pointer transition-all shadow-md shadow-sky-500/20 disabled:opacity-50"
                  >
                    {isSearching ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Play className="w-4 h-4" />}
                    <span>{isSearching ? 'Embedding & Retrieving...' : 'Execute Vector RAG Query'}</span>
                  </button>
                </div>

                {/* Preset Chips */}
                <div>
                  <div className="text-xs font-mono text-slate-400 mb-2">Or select enterprise presets:</div>
                  <div className="flex flex-col gap-2">
                    {[
                      "Extract statutory risk factors from SEBI annual equity reports.",
                      "Solve bilingual Indian curriculum physics question via BharatTutor Live.",
                      "Evaluate multi-agent failover topology for automated payment reconciliation."
                    ].map((preset, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setCustomQuery(preset);
                          handleExecuteRAG(preset);
                        }}
                        className="text-left text-xs p-2.5 rounded-lg bg-slate-950/70 border border-slate-800 text-slate-300 hover:text-white hover:border-sky-500/40 transition-colors cursor-pointer"
                      >
                        🔹 {preset}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Output Panel */}
              <div className="lg:col-span-6 bg-slate-950 rounded-xl border border-slate-800 p-5 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                    Live RAG Execution Metrics
                  </span>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    STATUS: OK
                  </span>
                </div>

                {simulatedResult && (
                  <>
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div className="bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
                        <div className="text-[10px] text-slate-400 font-mono">Cosine Match</div>
                        <div className="text-base font-extrabold text-emerald-400">{simulatedResult.cosineScore}</div>
                      </div>
                      <div className="bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
                        <div className="text-[10px] text-slate-400 font-mono">End-to-End Latency</div>
                        <div className="text-base font-extrabold text-sky-400">{simulatedResult.latency} ms</div>
                      </div>
                      <div className="bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
                        <div className="text-[10px] text-slate-400 font-mono">Inference Speed</div>
                        <div className="text-base font-extrabold text-indigo-400">{simulatedResult.tokensPerSec} tok/s</div>
                      </div>
                    </div>

                    <div className="bg-slate-900/40 p-3 rounded-lg border border-slate-800/80">
                      <div className="text-[10px] font-mono text-slate-400 mb-1">Retrieved Knowledge Chunk:</div>
                      <div className="text-xs font-mono text-sky-300">📄 {simulatedResult.retrievedSource}</div>
                    </div>

                    <div className="bg-slate-900/80 p-4 rounded-lg border border-slate-800">
                      <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-1">
                        Synthesized Response:
                      </div>
                      <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                        {simulatedResult.synthesizedText}
                      </p>
                    </div>
                  </>
                )}
              </div>

            </div>
          </div>
        )}

        {/* Tab 2: 2D Semantic Vector Space */}
        {activeTab === 'embeddings' && (
          <div className="bg-slate-900/60 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* 2D Visual Map */}
              <div className="lg:col-span-7 bg-slate-950 rounded-xl border border-slate-800 p-4 relative h-80 sm:h-96 overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-30" />
                <div className="absolute top-2 left-3 text-[10px] font-mono text-slate-500">
                  DIMENSION 1 (t-SNE / PCA Projection)
                </div>

                {/* Nodes rendered on map */}
                {embeddingNodes.map((node) => {
                  const isNodeA = node.id === selectedNodeA;
                  const isNodeB = node.id === selectedNodeB;
                  const isSelected = isNodeA || isNodeB;

                  return (
                    <div
                      key={node.id}
                      onClick={() => {
                        if (!isNodeA) setSelectedNodeB(node.id);
                      }}
                      style={{ left: `${node.x}%`, top: `${node.y}%` }}
                      className={`absolute -translate-x-1/2 -translate-y-1/2 p-2 rounded-xl border text-[11px] font-mono cursor-pointer transition-all duration-300 z-10 flex items-center gap-1.5 select-none ${
                        isNodeA 
                          ? 'bg-sky-500 text-slate-950 font-bold border-sky-400 shadow-lg shadow-sky-500/40 scale-110'
                          : isNodeB 
                            ? 'bg-amber-400 text-slate-950 font-bold border-amber-300 shadow-lg shadow-amber-400/40 scale-110'
                            : 'bg-slate-900/90 text-slate-300 border-slate-700/80 hover:border-slate-500 hover:scale-105'
                      }`}
                    >
                      <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-black' : 'bg-sky-400'}`} />
                      <span>{node.name}</span>
                    </div>
                  );
                })}
              </div>

              {/* Similarity Telemetry */}
              <div className="lg:col-span-5 space-y-5">
                <div className="text-sm font-semibold text-white">Semantic Cosine Distance Calculator</div>
                <p className="text-xs text-slate-400">
                  Our Embeddings as a Service projects complex enterprise concepts into high-dimensional vector spaces where semantic distance dictates exact relevance.
                </p>

                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3 bg-slate-950 rounded-lg border border-slate-800">
                    <span className="text-slate-400 block mb-1">Target Concept A:</span>
                    <select
                      value={selectedNodeA}
                      onChange={(e) => setSelectedNodeA(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 rounded p-1.5 text-sky-400 font-semibold"
                    >
                      {embeddingNodes.map(n => (
                        <option key={n.id} value={n.id}>{n.name}</option>
                      ))}
                    </select>
                  </div>

                  <div className="p-3 bg-slate-950 rounded-lg border border-slate-800">
                    <span className="text-slate-400 block mb-1">Target Concept B:</span>
                    <select
                      value={selectedNodeB}
                      onChange={(e) => setSelectedNodeB(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 rounded p-1.5 text-amber-400 font-semibold"
                    >
                      {embeddingNodes.map(n => (
                        <option key={n.id} value={n.id}>{n.name}</option>
                      ))}
                    </select>
                  </div>

                  <div className="p-4 bg-gradient-to-br from-slate-900 to-indigo-950/40 rounded-xl border border-indigo-500/30">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-slate-300 font-sans text-xs">Calculated Cosine Similarity:</span>
                      <span className="text-xl font-extrabold text-emerald-400 font-mono">{similarityScore}</span>
                    </div>
                    <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-sky-400 to-emerald-400 h-full rounded-full transition-all duration-300" 
                        style={{ width: `${Math.round(parseFloat(similarityScore) * 100)}%` }} 
                      />
                    </div>
                  </div>
                </div>

                <button
                  onClick={onOpenConsultation}
                  className="w-full py-2.5 text-xs font-bold text-slate-950 bg-sky-400 hover:bg-sky-300 rounded-lg cursor-pointer transition-colors shadow-md"
                >
                  Deploy Custom Embeddings API →
                </button>
              </div>

            </div>
          </div>
        )}

        {/* Tab 3: Enterprise ROI & Cost Calculator */}
        {activeTab === 'roi' && (
          <div className="bg-slate-900/60 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Inputs */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-200 mb-2">
                    <span>Monthly Enterprise Token Volume:</span>
                    <span className="text-sky-400 font-mono text-sm">{monthlyTokensMillions} Million Tokens</span>
                  </div>
                  <input
                    type="range"
                    min={5}
                    max={250}
                    step={5}
                    value={monthlyTokensMillions}
                    onChange={(e) => setMonthlyTokensMillions(Number(e.target.value))}
                    className="w-full accent-sky-400 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                    <span>5M (Mid-Market)</span>
                    <span>100M (Large Enterprise)</span>
                    <span>250M+ (Banking Scale)</span>
                  </div>
                </div>

                <div>
                  <div className="text-xs font-semibold text-slate-200 mb-2">Solution Architecture:</div>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'rag', label: 'Enterprise RAG Mesh' },
                      { id: 'finetune', label: 'Fine-Tuned LLM (70B)' },
                      { id: 'agents', label: 'Multi-Agent Swarm' }
                    ].map((s) => (
                      <button
                        key={s.id}
                        onClick={() => setSolutionType(s.id as any)}
                        className={`p-2.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer text-center ${
                          solutionType === s.id
                            ? 'bg-sky-500 text-slate-950 border-sky-400'
                            : 'bg-slate-950 text-slate-300 border-slate-800 hover:border-slate-700'
                        }`}
                      >
                        {s.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-xs font-semibold text-slate-200 mb-2">Hosting Preference:</div>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'cloud', label: 'Private Cloud VPC' },
                      { id: 'hybrid', label: 'Hybrid Mesh' },
                      { id: 'onprem', label: 'Air-Gapped On-Prem' }
                    ].map((d) => (
                      <button
                        key={d.id}
                        onClick={() => setDeploymentModel(d.id as any)}
                        className={`p-2 rounded-lg text-xs font-semibold border transition-all cursor-pointer text-center ${
                          deploymentModel === d.id
                            ? 'bg-indigo-500 text-white border-indigo-400'
                            : 'bg-slate-950 text-slate-300 border-slate-800 hover:border-slate-700'
                        }`}
                      >
                        {d.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Output Results Card */}
              <div className="lg:col-span-6 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950/60 rounded-xl border border-slate-800 p-6 space-y-5">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Estimated Financial & Operational ROI
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800">
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
                      <TrendingDown className="w-4 h-4 text-emerald-400" />
                      <span>Annual Cost Savings</span>
                    </div>
                    <div className="text-2xl font-extrabold text-emerald-400">
                      ₹{annualSavingsINR} Lakhs
                    </div>
                    <div className="text-[11px] text-slate-500 font-mono mt-0.5">
                      (~${annualSavingsUSD.toLocaleString()} USD/yr)
                    </div>
                  </div>

                  <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800">
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
                      <Clock className="w-4 h-4 text-sky-400" />
                      <span>Human Triage Hours Saved</span>
                    </div>
                    <div className="text-2xl font-extrabold text-sky-400">
                      {hoursSavedPerMonth.toLocaleString()} hrs
                    </div>
                    <div className="text-[11px] text-slate-500 font-mono mt-0.5">
                      per month across teams
                    </div>
                  </div>
                </div>

                <div className="p-3.5 bg-slate-900/90 rounded-lg border border-slate-800 text-xs flex items-center justify-between">
                  <span className="text-slate-300">Expected ROI Payback Horizon:</span>
                  <span className="text-amber-400 font-bold font-mono text-sm">{paybackMonths} Months</span>
                </div>

                <button
                  onClick={onOpenConsultation}
                  className="w-full py-3 text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-300 hover:from-emerald-300 rounded-xl shadow-lg shadow-emerald-500/20 cursor-pointer inline-flex items-center justify-center gap-2"
                >
                  <span>Request Custom Enterprise Financial Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
