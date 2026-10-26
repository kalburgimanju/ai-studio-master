import React, { useState } from 'react';
import { 
  Sparkles, 
  Cpu, 
  Layers, 
  BrainCircuit, 
  Bot, 
  Eye, 
  Zap, 
  ShieldCheck, 
  Activity, 
  Maximize2,
  X,
  Play
} from 'lucide-react';

import neuralAiCoreImg from '../assets/images/neural_ai_core_1793018526542.jpg';
import bharatTutorImg from '../assets/images/bharat_tutor_ai_1793018548551.jpg';
import agentSwarmImg from '../assets/images/agent_swarm_orbit_1793018564612.jpg';
import vectorMeshImg from '../assets/images/vector_mesh_rag_1793018580180.jpg';

interface AnimatedShowcaseProps {
  onOpenConsultation: (service?: string) => void;
}

export const AnimatedShowcase: React.FC<AnimatedShowcaseProps> = ({ onOpenConsultation }) => {
  const [selectedImageModal, setSelectedImageModal] = useState<{
    title: string;
    tagline: string;
    image: string;
    category: string;
    metrics: { label: string; value: string }[];
    description: string;
    specs: string[];
  } | null>(null);

  const [activeFilter, setActiveFilter] = useState<'all' | 'models' | 'rag' | 'agents' | 'education'>('all');

  const galleryItems = [
    {
      id: 'neural-core',
      title: 'Sovereign Neural Core & LLM Matrix',
      tagline: 'Custom FP8 Foundation Model Weights & PagedAttention Cluster',
      image: neuralAiCoreImg,
      category: 'models',
      badge: 'Core Architecture',
      metrics: [
        { label: 'Generation Velocity', value: '128 tok/s' },
        { label: 'Latency', value: '84 ms' },
        { label: 'Quantization', value: 'FP8 AWQ' },
        { label: 'Egress Privacy', value: '100% Air-Gapped' }
      ],
      description: 'The computational nucleus of India Innovation Tech. Engineered for private GPU clusters, proprietary enterprise fine-tuning, and zero data leakage.',
      specs: [
        'Supports 7B to 405B parameter models with dynamic speculative decoding',
        'Direct hardware acceleration across NVIDIA H100 SXM5 and GH200 clusters',
        'Bilingual Indic tokenizer optimized for Hindi, Tamil, Telugu, and Kannada',
        'Llama-Guard security layer integrated at the model inference perimeter'
      ]
    },
    {
      id: 'bharat-tutor',
      title: 'BharatTutor Live Holographic Classroom',
      tagline: 'Real-Time Interactive AI Education & Multimodal Reasoning',
      image: bharatTutorImg,
      category: 'education',
      badge: 'Interactive Flagship',
      metrics: [
        { label: 'Voice Latency', value: '< 280ms' },
        { label: 'Languages', value: '14+ Indic & Global' },
        { label: 'Step Precision', value: '99.1%' },
        { label: 'Streaming', value: 'Duplex WebSockets' }
      ],
      description: 'Evolved from AInventions Tech’s AI Tutor Live into an enterprise-scale holographic learning companion that solves math, science, and coding problems on a live digital chalkboard.',
      specs: [
        'Duplex low-latency audio stream with emotional cadence and natural pauses',
        'Automated real-time LaTeX and geometric chalkboard rendering',
        'Bilingual code-switching (Hinglish/Tanglish/Bengali-English)',
        'Personalized adaptive difficulty curve calibrated to individual student comprehension'
      ]
    },
    {
      id: 'vector-mesh',
      title: 'VectorMesh 3D Embeddings & Graph RAG',
      tagline: 'High-Dimensional Latent Semantic Space & Sub-10ms Retrieval',
      image: vectorMeshImg,
      category: 'rag',
      badge: 'Data Intelligence',
      metrics: [
        { label: 'Embeddings / Day', value: '55M+' },
        { label: 'Search Latency', value: '11 ms p99' },
        { label: 'Vector Dim', value: '1536-D' },
        { label: 'Document Index', value: '12M+ Records' }
      ],
      description: 'High-throughput enterprise embeddings microservice transforming unstructured corporate documents, balance sheets, and audio into rich semantic vector clouds with hybrid graph retrieval.',
      specs: [
        'Dense 1536-D vector projections coupled with sparse BM25 lexical indexing',
        'Graph RAG relationship mapping for deep entity discovery across corporate filings',
        'Deterministic coordinate citations mapping exact bounding boxes in PDFs',
        'Scalable clustering supported across Qdrant, Pinecone, and pgvector'
      ]
    },
    {
      id: 'agent-swarm',
      title: 'AgentPulse Autonomous Swarm Network',
      tagline: 'Distributed Multi-Agent Hierarchical Workflow Constellation',
      image: agentSwarmImg,
      category: 'agents',
      badge: 'Agentic Automation',
      metrics: [
        { label: 'Task Success', value: '97.8%' },
        { label: 'Hours Saved', value: '1,400/mo' },
        { label: 'Tool Integrations', value: '150+' },
        { label: 'Self-Healing', value: 'Automated' }
      ],
      description: 'Self-coordinating neural agents that autonomously decompose complex goals, invoke internal databases, trigger APIs, write code, and deliver finalized enterprise artifacts.',
      specs: [
        'Hierarchical supervisor architecture with specialized worker agent nodes',
        'Real-time tool calling with sandbox code execution and database verification',
        'Automated reflection cycles that self-correct errors before returning results',
        'Human-in-the-loop escalation guardrails for high-risk transactional steps'
      ]
    }
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section id="animated-showcase" className="py-20 md:py-32 relative bg-slate-950 border-t border-slate-900 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[300px] bg-sky-500/10 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[300px] bg-indigo-500/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-xs font-semibold text-sky-400 mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Visual Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Animated Deep-Tech AI Architecture Gallery
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Explore live animated visualizations of India Innovation Tech's core infrastructure: from sovereign foundation cores and real-time interactive tutors to high-dimensional vector spaces and autonomous agent swarms.
          </p>

          {/* Filter Bar */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {[
              { id: 'all', label: 'All Systems' },
              { id: 'models', label: 'Neural Core & Models' },
              { id: 'education', label: 'BharatTutor Hologram' },
              { id: 'rag', label: 'VectorMesh RAG' },
              { id: 'agents', label: 'Autonomous Agent Swarm' }
            ].map(f => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id as any)}
                className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activeFilter === f.id
                    ? 'bg-sky-400 text-slate-950 shadow-md shadow-sky-500/20'
                    : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* 2x2 Grid of Animated Visual Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-slate-900/60 border border-slate-800/90 overflow-hidden hover:border-sky-500/40 transition-all duration-300 group shadow-xl hover:shadow-2xl hover:shadow-sky-500/10 flex flex-col justify-between"
            >
              {/* Animated Image Container */}
              <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Animated Laser Scanline Effect */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  <div className="w-full h-1 bg-gradient-to-r from-transparent via-sky-400 to-transparent shadow-[0_0_15px_#38bdf8] animate-scanline" />
                </div>

                {/* Subtle vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />

                {/* Top Badge */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <div className="px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-sky-500/40 text-[10px] font-mono text-sky-300 flex items-center gap-1.5 shadow-md">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span>{item.badge}</span>
                  </div>
                </div>

                {/* Top Right Zoom Button */}
                <button
                  onClick={() => setSelectedImageModal(item)}
                  className="absolute top-3 right-3 p-2 rounded-lg bg-slate-950/80 backdrop-blur-md border border-slate-700/80 text-slate-300 hover:text-white hover:border-sky-400 transition-colors cursor-pointer"
                  title="Expand visual details"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>

                {/* Bottom Bar overlay with telemetry */}
                <div className="absolute bottom-3 inset-x-3 flex items-center justify-between text-[11px] font-mono">
                  <div className="px-2.5 py-1 rounded-lg bg-slate-950/80 backdrop-blur-md border border-slate-700/80 text-slate-200">
                    STATUS: <span className="text-emerald-400 font-bold">OPERATIONAL</span>
                  </div>
                  <div className="px-2.5 py-1 rounded-lg bg-sky-500/20 backdrop-blur-md border border-sky-400/40 text-sky-300">
                    IITech Neural V3
                  </div>
                </div>
              </div>

              {/* Card Content & Telemetry */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs font-mono text-sky-400/90 mt-0.5">
                    {item.tagline}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>

                {/* Metric Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
                  {item.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="bg-slate-950/80 p-2.5 rounded-lg border border-slate-800 text-center">
                      <div className="text-xs sm:text-sm font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-400">
                        {m.value}
                      </div>
                      <div className="text-[10px] text-slate-400 font-mono mt-0.5">{m.label}</div>
                    </div>
                  ))}
                </div>

                {/* Card Action Buttons */}
                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedImageModal(item)}
                    className="text-xs font-semibold text-slate-300 hover:text-white inline-flex items-center gap-1 cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5 text-sky-400" />
                    <span>View Architecture Specs</span>
                  </button>

                  <button
                    onClick={() => onOpenConsultation(item.id)}
                    className="px-3.5 py-1.5 rounded-lg bg-sky-500/10 hover:bg-sky-500/20 text-sky-300 hover:text-sky-200 border border-sky-500/30 text-xs font-semibold cursor-pointer transition-colors"
                  >
                    Deploy System →
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Expanded Lightbox Modal */}
      {selectedImageModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden max-h-[92vh] overflow-y-auto">
            {/* Header */}
            <div className="p-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between sticky top-0 z-10">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <h3 className="text-base font-bold text-white">{selectedImageModal.title}</h3>
              </div>
              <button
                onClick={() => setSelectedImageModal(null)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6">
              {/* Full animated image */}
              <div className="relative rounded-xl overflow-hidden border border-slate-700 aspect-video bg-black">
                <img
                  src={selectedImageModal.image}
                  alt={selectedImageModal.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  <div className="w-full h-1 bg-gradient-to-r from-transparent via-sky-400 to-transparent shadow-[0_0_15px_#38bdf8] animate-scanline" />
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1">Architecture Summary</h4>
                <p className="text-sm text-slate-200 leading-relaxed">{selectedImageModal.description}</p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">Technical Specifications</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedImageModal.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-300 flex items-start gap-2">
                      <Zap className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                <button
                  onClick={() => setSelectedImageModal(null)}
                  className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const sid = selectedImageModal.title;
                    setSelectedImageModal(null);
                    onOpenConsultation(sid);
                  }}
                  className="px-5 py-2.5 rounded-xl bg-sky-400 hover:bg-sky-300 text-slate-950 font-bold text-xs shadow-lg shadow-sky-500/20 cursor-pointer"
                >
                  Request Technical Proof of Concept
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
