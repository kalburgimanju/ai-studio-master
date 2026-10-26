import React, { useState } from 'react';
import { 
  GraduationCap, 
  Volume2, 
  VolumeX, 
  Play, 
  Sparkles, 
  FileText, 
  CheckCircle2, 
  ArrowRight, 
  Bot, 
  Cpu, 
  ShieldCheck, 
  RotateCcw,
  Languages
} from 'lucide-react';
import { FLAGSHIP_PRODUCTS } from '../data/content';
import bharatTutorImg from '../assets/images/bharat_tutor_ai_1793018548551.jpg';
import vectorMeshImg from '../assets/images/vector_mesh_rag_1793018580180.jpg';
import agentSwarmImg from '../assets/images/agent_swarm_orbit_1793018564612.jpg';

interface ProductsProps {
  onOpenConsultation: () => void;
}

export const ProductsAndCaseStudies: React.FC<ProductsProps> = ({ onOpenConsultation }) => {
  const [selectedProduct, setSelectedProduct] = useState(FLAGSHIP_PRODUCTS[0]);
  const [productViewMode, setProductViewMode] = useState<'visual' | 'simulator'>('visual');
  
  // Interactive BharatTutor Live State
  const [tutorLanguage, setTutorLanguage] = useState<'hinglish' | 'english' | 'regional'>('hinglish');
  const [tutorSubject, setTutorSubject] = useState<'math' | 'physics' | 'code'>('math');
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const tutorSessions = {
    math: {
      question: "Prove why (a + b)² = a² + 2ab + b² using geometric intuition.",
      audioTranscript: tutorLanguage === 'hinglish' 
        ? "Dekho beta, geometric visual socho. Ek square lo jiska side length (a + b) hai. Total area (a+b)² hota hai. Ab is square ko 4 parts mein divide karo: ek a² ka square, ek b² ka square, aur do rectangles jinka area a*b hai! Dono add karne par: a² + 2ab + b²!"
        : "Visualize a large square with side length (a + b). The total area is (a + b)². Now divide this square into four sub-regions: one square of area a², one square of area b², and two symmetric rectangles each of area a × b. Summing them yields a² + 2ab + b².",
      steps: [
        "Step 1: Construct a square with side length (a + b)",
        "Step 2: Total geometric area = (a + b) × (a + b)",
        "Step 3: Partition sides into lengths 'a' and 'b'",
        "Step 4: Sub-regions = Square(a²) + Square(b²) + 2 × Rectangles(a × b)",
        "Step 5: Hence, (a + b)² = a² + 2ab + b² [Q.E.D.]"
      ]
    },
    physics: {
      question: "Explain escape velocity from Earth's gravitational field.",
      audioTranscript: tutorLanguage === 'hinglish'
        ? "Escape velocity wo minimum speed hai jisse agar kisi object ko vertically launch karein to wo Earth ke gravitational pull se hamesha ke liye nikal jaye. Kinetic Energy = Potential Energy: 1/2 m v² = G M m / R. Solve karne par v = √(2GM/R) = 11.2 km/sec!"
        : "Escape velocity is the minimum launch speed required for a projectile to overcome gravitational binding energy without additional propulsion. Setting kinetic energy equal to gravitational potential energy yields v = √(2GM/R), approximately 11.2 km/s on Earth.",
      steps: [
        "Step 1: Conservation of mechanical energy at r = R and r = ∞",
        "Step 2: Initial Energy = 1/2 m v² - G M m / R",
        "Step 3: At boundary limit r -> ∞, potential & kinetic energy -> 0",
        "Step 4: 1/2 m v² = G M m / R  =>  v = √(2GM/R)",
        "Step 5: For Earth: v_escape ≈ 11.2 km/s"
      ]
    },
    code: {
      question: "Write an optimal O(1) space two-pointer palindrome check in Python.",
      audioTranscript: tutorLanguage === 'hinglish'
        ? "Two pointer technique use karenge. Left pointer start pe rakho, right pointer end pe. Jab tak left < right, dono characters compare karo. Agar match na ho to turant False return karo, otherwise dono ko converge karo. Space complexity O(1)!"
        : "We initialize two pointers at the boundary indices 0 and len(s) - 1. In a single while-loop, we compare symmetric elements and increment/decrement pointers inward. Time complexity is O(N) and auxiliary space is strictly O(1).",
      steps: [
        "Step 1: def is_palindrome(s: str) -> bool:",
        "Step 2:     left, right = 0, len(s) - 1",
        "Step 3:     while left < right:",
        "Step 4:         if s[left] != s[right]: return False",
        "Step 5:         left += 1; right -= 1",
        "Step 6:     return True"
      ]
    }
  };

  const currentSession = tutorSessions[tutorSubject];

  const handleToggleAudio = () => {
    setIsAudioPlaying(!isAudioPlaying);
  };

  return (
    <section id="products" className="py-20 md:py-32 relative bg-slate-950/80 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Proprietary Platforms & Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Flagship Enterprise AI Products
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Engineered by India Innovation Tech: battle-tested AI platforms deployed across education, high-stakes finance, and mission-critical workflows.
          </p>

          {/* Product Selector Buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {FLAGSHIP_PRODUCTS.map((prod) => (
              <button
                key={prod.id}
                onClick={() => setSelectedProduct(prod)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                  selectedProduct.id === prod.id
                    ? 'bg-gradient-to-r from-sky-400 to-indigo-400 text-slate-950 font-bold shadow-lg shadow-sky-500/20 scale-105'
                    : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                <span>{prod.name}</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-950/40 text-slate-300 font-mono">
                  {prod.badge}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Selected Product Spotlight Card */}
        <div className="rounded-2xl bg-slate-900/70 border border-slate-800 p-6 sm:p-10 shadow-2xl backdrop-blur-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Product Info & Metrics */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-sky-400 font-bold">
                  {selectedProduct.badge}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                  {selectedProduct.name}
                </h3>
                <p className="text-sm font-mono text-slate-300 mt-1">
                  {selectedProduct.tagline}
                </p>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed">
                {selectedProduct.description}
              </p>

              {/* Quantified Metrics Grid */}
              <div className="grid grid-cols-2 gap-3">
                {selectedProduct.metrics.map((m, idx) => (
                  <div key={idx} className="bg-slate-950/80 p-3 rounded-xl border border-slate-800">
                    <div className="text-xl sm:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-400">
                      {m.value}
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5 font-medium">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Key Features List */}
              <div className="space-y-2">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Key Capabilities:
                </div>
                {selectedProduct.keyFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto px-6 py-3 text-xs sm:text-sm font-bold text-slate-950 bg-sky-400 hover:bg-sky-300 rounded-xl shadow-lg shadow-sky-500/20 inline-flex items-center justify-center gap-2 cursor-pointer transition-all"
              >
                <span>Request Enterprise Licensing / Deployment</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Right Column: Interactive Live Preview (BharatTutor Live Simulator) */}
            <div className="lg:col-span-6 bg-slate-950 rounded-2xl border border-slate-800 p-5 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-mono text-slate-300 font-semibold truncate">
                    {selectedProduct.name}
                  </span>
                </div>
                <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-lg border border-slate-800 shrink-0">
                  <button
                    onClick={() => setProductViewMode('visual')}
                    className={`px-2.5 py-1 rounded text-[11px] font-semibold cursor-pointer transition-colors ${
                      productViewMode === 'visual' ? 'bg-sky-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Animated Visual
                  </button>
                  <button
                    onClick={() => setProductViewMode('simulator')}
                    className={`px-2.5 py-1 rounded text-[11px] font-semibold cursor-pointer transition-colors ${
                      productViewMode === 'simulator' ? 'bg-sky-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Live Simulator
                  </button>
                </div>
              </div>

              {/* View Mode 1: Animated Visual Hologram */}
              {productViewMode === 'visual' ? (
                <div className="py-4 space-y-3">
                  <div className="relative rounded-xl overflow-hidden border border-sky-500/30 group bg-slate-950 aspect-video flex items-center justify-center">
                    <img
                      src={
                        selectedProduct.id === 'bharat-tutor-live'
                          ? bharatTutorImg
                          : selectedProduct.id === 'fincognition-rag'
                            ? vectorMeshImg
                            : agentSwarmImg
                      }
                      alt={selectedProduct.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Animated Laser Scanline Effect */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                      <div className="w-full h-1 bg-gradient-to-r from-transparent via-sky-400 to-transparent shadow-[0_0_15px_#38bdf8] animate-scanline" />
                    </div>

                    {/* Radial Vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />

                    {/* Floating HUD Badges */}
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <div className="px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-sky-500/40 text-[10px] font-mono text-sky-300 flex items-center gap-1.5 shadow-md">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                        <span>{selectedProduct.badge}</span>
                      </div>
                    </div>

                    <div className="absolute bottom-3 inset-x-3 flex items-center justify-between text-[11px] font-mono">
                      <div className="px-2.5 py-1 rounded-lg bg-slate-950/80 backdrop-blur-md border border-slate-700 text-slate-300">
                        {selectedProduct.id === 'bharat-tutor-live' && 'Duplex Voice < 280ms'}
                        {selectedProduct.id === 'fincognition-rag' && 'Vector RAG 1536-D'}
                        {selectedProduct.id === 'agentpulse-core' && 'Hierarchical Agent Swarm'}
                      </div>
                      <button
                        onClick={() => setProductViewMode('simulator')}
                        className="px-2.5 py-1 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold flex items-center gap-1 shadow-md cursor-pointer"
                      >
                        <span>Test Simulator →</span>
                      </button>
                    </div>
                  </div>

                  {/* Micro metric bar */}
                  <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                    <div className="p-2.5 bg-slate-900/80 rounded-lg border border-slate-800 flex justify-between items-center">
                      <span className="text-slate-400">Architecture:</span>
                      <span className="text-sky-300 font-semibold">{selectedProduct.badge}</span>
                    </div>
                    <div className="p-2.5 bg-slate-900/80 rounded-lg border border-slate-800 flex justify-between items-center">
                      <span className="text-slate-400">Status:</span>
                      <span className="text-emerald-400 font-semibold">Active Production</span>
                    </div>
                  </div>
                </div>
              ) : (
                /* View Mode 2: Live Simulator */
                selectedProduct.id === 'bharat-tutor-live' ? (
                  <div className="py-4 space-y-4">
                    {/* Classroom Controls */}
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex gap-1 bg-slate-900 p-1 rounded-lg border border-slate-800 text-xs">
                        {(['math', 'physics', 'code'] as const).map(subj => (
                          <button
                            key={subj}
                            onClick={() => {
                              setTutorSubject(subj);
                              setCurrentStepIndex(0);
                            }}
                            className={`px-3 py-1 rounded text-xs capitalize cursor-pointer font-medium ${
                              tutorSubject === subj ? 'bg-sky-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                            }`}
                          >
                            {subj}
                          </button>
                        ))}
                      </div>

                      <div className="flex gap-1 bg-slate-900 p-1 rounded-lg border border-slate-800 text-xs">
                        {(['hinglish', 'english'] as const).map(lang => (
                          <button
                            key={lang}
                            onClick={() => setTutorLanguage(lang)}
                            className={`px-2.5 py-1 rounded text-xs capitalize cursor-pointer font-medium ${
                              tutorLanguage === lang ? 'bg-indigo-500 text-white font-bold' : 'text-slate-400 hover:text-white'
                            }`}
                          >
                            {lang}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Student Question Prompt */}
                    <div className="p-3 bg-slate-900/70 rounded-xl border border-slate-800">
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                        Student Query:
                      </span>
                      <p className="text-xs font-semibold text-white">
                        "{currentSession.question}"
                      </p>
                    </div>

                    {/* AI Whiteboard / Blackboard */}
                    <div className="bg-slate-900/90 rounded-xl border border-slate-800 p-4 font-mono text-xs space-y-2 min-h-[160px]">
                      <div className="flex items-center justify-between text-[11px] text-emerald-400 pb-2 border-b border-slate-800">
                        <span>Live Step-by-Step Chalkboard</span>
                        <span>Progress: {currentStepIndex + 1}/{currentSession.steps.length}</span>
                      </div>

                      <div className="space-y-1.5 pt-2">
                        {currentSession.steps.slice(0, currentStepIndex + 1).map((step, idx) => (
                          <div key={idx} className="text-slate-200 animate-in fade-in duration-200 flex items-start gap-2">
                            <span className="text-sky-400">▶</span>
                            <span>{step}</span>
                          </div>
                        ))}
                      </div>

                      {currentStepIndex < currentSession.steps.length - 1 && (
                        <button
                          onClick={() => setCurrentStepIndex(prev => prev + 1)}
                          className="mt-3 text-[11px] text-sky-400 hover:text-sky-300 font-sans font-semibold underline cursor-pointer"
                        >
                          + Reveal Next Step Explanation
                        </button>
                      )}
                    </div>

                    {/* Interactive Voice Synthesis Player */}
                    <div className="p-3.5 bg-gradient-to-r from-sky-950/40 to-indigo-950/40 rounded-xl border border-sky-500/20 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={handleToggleAudio}
                          className={`w-9 h-9 rounded-full flex items-center justify-center cursor-pointer transition-all ${
                            isAudioPlaying ? 'bg-emerald-400 text-slate-950' : 'bg-sky-500 text-slate-950 hover:bg-sky-400'
                          }`}
                        >
                          {isAudioPlaying ? <Volume2 className="w-5 h-5 animate-bounce" /> : <Play className="w-4 h-4 fill-slate-950 ml-0.5" />}
                        </button>
                        <div>
                          <div className="text-xs font-bold text-white flex items-center gap-1.5">
                            <span>BharatTutor Neural Audio Stream</span>
                            {isAudioPlaying && <span className="text-[10px] text-emerald-400 font-mono">(Playing)</span>}
                          </div>
                          <div className="text-[11px] text-slate-400 line-clamp-1 max-w-xs">
                            {currentSession.audioTranscript}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Alternate preview for FinCognition or AgentPulse */
                  <div className="py-6 space-y-4 font-mono text-xs">
                    <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 space-y-2">
                      <div className="flex justify-between text-slate-400">
                        <span>Target File:</span>
                        <span className="text-slate-200">FY26_Audited_Annual_Report_Full.pdf</span>
                      </div>
                      <div className="flex justify-between text-slate-400">
                        <span>Total Pages Parsed:</span>
                        <span className="text-sky-400 font-semibold">1,248 Pages in 2.4 sec</span>
                      </div>
                      <div className="flex justify-between text-slate-400">
                        <span>SEBI / RBI Flagged Anomalies:</span>
                        <span className="text-emerald-400 font-semibold">0 Critical Risks Found</span>
                      </div>
                    </div>

                    <div className="p-3.5 bg-slate-900/60 rounded-xl border border-slate-800 text-slate-300 text-xs">
                      "All debt covenant thresholds checked against Schedule III guidelines. Zero discrepancies detected across consolidated subsidiary balance sheets."
                    </div>
                  </div>
                )
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
