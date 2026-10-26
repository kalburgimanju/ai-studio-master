import { ServiceItem, ProductItem, IndustryItem, TechItem, TestimonialItem, FAQItem } from '../types';

export const COMPANY_INFO = {
  name: 'India Innovation Tech',
  shortName: 'IITech',
  legalName: 'India Innovation Technologies Private Limited',
  domain: 'indiainnovationtech.com',
  tagline: "Shaping Tomorrow's Intelligence with Cutting-edge AI Solutions",
  subTagline: "Enterprise Generative AI, Custom LLM Engineering & Sovereign Deep-Tech Innovation",
  heroDescription: "India Innovation Tech engineers custom Generative AI solutions, proprietary Large Language Models (LLMs), high-throughput vector embeddings, and autonomous agentic workflows designed to empower enterprises across India and global markets.",
  email: 'contact@indiainnovationtech.com',
  salesEmail: 'enterprise@indiainnovationtech.com',
  careersEmail: 'careers@indiainnovationtech.com',
  phoneIndia: '+91 (80) 4920-8800',
  phoneUS: '+1 (307) 545-3541',
  addressIndia: 'India Innovation Tech Park, Outer Ring Road, Bellandur, Bengaluru, Karnataka 560103, India',
  addressUS: '30 N. Gould St., Ste R, Sheridan, WY 82801, United States',
  stats: [
    { label: 'Enterprise AI Systems Deployed', value: '180+' },
    { label: 'Embedding Lookups Processed / Day', value: '55M+' },
    { label: 'Average Client Cost Reduction', value: '62%' },
    { label: 'Model Uptime & SLA Guarantee', value: '99.95%' },
  ]
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'genai-development',
    title: 'Generative AI & LLM Development',
    subtitle: 'Tailor-Made Sovereign & Enterprise Foundation Models',
    description: 'We develop purpose-built Large Language Models and Generative AI systems trained on proprietary enterprise datasets with custom tokenizers, instruction tuning (RLHF/DPO), and domain-specific knowledge.',
    category: 'development',
    icon: 'Sparkles',
    tags: ['Custom LLMs', 'RLHF / DPO', 'Domain Adaptation', 'Multimodal GenAI', 'Indic Languages'],
    capabilities: [
      'Custom LLM architecture design and pre-training/fine-tuning (7B to 70B+ parameters)',
      'Domain adaptation for Finance, Legal, Healthcare, Manufacturing, and Telecom',
      'Multilingual & Indic language synthesis (Hindi, Tamil, Telugu, Kannada, Marathi, Bengali, etc.)',
      'Parameter-Efficient Fine-Tuning (LoRA, QLoRA, DoRA) on private enterprise datasets',
      'Reinforcement Learning from Human Feedback (RLHF) and Direct Preference Optimization (DPO)'
    ],
    deliverables: [
      'Quantized deployment weights (GGUF, AWQ, GPTQ, TensorRT-LLM)',
      'Private API Gateway with authentication & rate-limiting',
      'Custom evaluation benchmark suite for hallucination testing',
      'Full intellectual property ownership & source code release'
    ],
    caseSnippet: 'Built custom 13B financial advisory model reducing analysts draft time by 74% with zero hallucinations on audit reports.'
  },
  {
    id: 'adaptive-ai',
    title: 'Adaptive AI & Autonomous Agents',
    subtitle: 'Self-Optimizing Systems That Evolve With Real-Time Data',
    description: 'Design and deploy resilient autonomous AI agents capable of planning, invoking enterprise tools, executing multi-step business logic, and continuously learning from live operational feedback loops.',
    category: 'development',
    icon: 'BrainCircuit',
    tags: ['Multi-Agent Systems', 'Tool Calling', 'Self-Healing Workflows', 'Dynamic Feedback'],
    capabilities: [
      'Orchestrated multi-agent swarms with hierarchical planning and delegation',
      'Dynamic tool invocation (SQL querying, ERP updates, email drafting, API executions)',
      'Continuous learning loops with real-time feedback alignment without catastrophic forgetting',
      'Autonomous customer support and operations triage agents with human-in-the-loop fallback'
    ],
    deliverables: [
      'Agentic workflow execution runtime with state checkpointing',
      'Visual control panel for monitoring agent decision trails',
      'Enterprise role-based permissions and access guardrails'
    ],
    caseSnippet: 'Automated 80,000 monthly insurance pre-authorizations with 99.2% adherence to strict regulatory rules.'
  },
  {
    id: 'embeddings-service',
    title: 'Embeddings as a Service & Enterprise RAG',
    subtitle: 'High-Throughput Semantic Vectorization & Sub-10ms Retrieval',
    description: 'Turn massive multi-modal unstructured data (PDFs, call audio, database records, codebases) into ultra-dense semantic vector representations powered by custom embedding architectures and hybrid search.',
    category: 'development',
    icon: 'Layers',
    tags: ['Vector Search', 'Hybrid BM25 + Dense', 'Graph RAG', 'Low-Latency Embeddings'],
    capabilities: [
      'Custom domain-trained embedding models with superior semantic cluster separation',
      'Scalable vector indexing pipeline supporting 100M+ high-dimensional vectors',
      'Advanced hybrid RAG combining lexical search, vector similarity, and Knowledge Graphs',
      'Real-time semantic deduplication and anomaly clustering across enterprise data streams'
    ],
    deliverables: [
      'Dedicated vector microservice with gRPC and REST endpoints',
      'Document ingestion and chunking parser for OCR, tabular data, and complex PDFs',
      'Live semantic cache delivering 95% latency reduction on repetitive queries'
    ],
    caseSnippet: 'Indexed 12M legal contracts with sub-15ms semantic search latency and 98.7% retrieval accuracy.'
  },
  {
    id: 'transformer-media',
    title: 'Transformer Models & Stable Diffusion',
    subtitle: 'High-Fidelity Visual, Audio, and Multimodal Synthesis',
    description: 'Harness the creative power of next-generation diffusion models and multimodal transformers customized for marketing collateral, industrial product design, dynamic video generation, and voice synthesis.',
    category: 'development',
    icon: 'Cpu',
    tags: ['Stable Diffusion XL', 'Multimodal Vision', 'Voice Synthesis', 'Synthetic Data'],
    capabilities: [
      'Custom checkpoint fine-tuning (LoRA / DreamBooth) on corporate brand guidelines',
      'High-throughput image and creative media generation pipelines',
      'Naturalistic speech synthesis and multilingual real-time voice translation',
      'Synthetic dataset generation for training computer vision models where real data is scarce'
    ],
    deliverables: [
      'Brand-consistent generation studio UI for marketing & product teams',
      'Scalable batch rendering API with automated watermarking and safety guardrails',
      'Audio cloning and real-time interactive voice pipeline'
    ],
    caseSnippet: 'Generated 400,000 localized e-commerce catalog visual assets with 85% reduction in production time.'
  },
  {
    id: 'enterprise-integration',
    title: 'Generative AI Integration & API Middleware',
    subtitle: 'Seamless Infusion into Legacy Systems & Modern Clouds',
    description: 'Bridge cutting-edge foundation models (Google Gemini, OpenAI, Claude, Llama 3) into your existing enterprise software stack—SAP, Salesforce, Oracle, Microsoft 365, and internal microservices.',
    category: 'integration',
    icon: 'Workflow',
    tags: ['API Middleware', 'OpenAI Integration', 'Gemini Enterprise', 'Legacy Modernization'],
    capabilities: [
      'Secure reverse-proxy with enterprise token tracking, prompt caching, and cost capping',
      'Zero-data-retention compliance architecture protecting confidential IP',
      'Automated fallback cascades across multiple AI providers for 100% uptime',
      'Context-aware enterprise search bar integration for intranet and knowledge bases'
    ],
    deliverables: [
      'Production-ready SDKs and microservice adapters in Node.js, Python, and Java',
      'Usage analytics dashboard with department-level quota allocation',
      'Automated semantic prompt caching reducing API token costs by up to 55%'
    ],
    caseSnippet: 'Integrated AI assistant into a 25,000-seat core banking intranet with strict zero-leakage compliance.'
  },
  {
    id: 'mlops-infrastructure',
    title: 'MLOps, Sovereign AI & Security Guardrails',
    subtitle: 'Enterprise-Grade Governance, Observability & Air-Gapped Clusters',
    description: 'End-to-end operationalization of machine learning lifecycles. We configure private GPU clusters, sovereign on-premise inference, automated red-teaming, and continuous drift monitoring.',
    category: 'infrastructure',
    icon: 'ShieldCheck',
    tags: ['Sovereign AI', 'vLLM / TensorRT', 'Air-Gapped Clusters', 'Guardrails & Red-Teaming'],
    capabilities: [
      'On-premise sovereign AI deployment on private NVIDIA H100 / A100 / GH200 hardware',
      'Inference optimization with vLLM, TensorRT-LLM, and speculative decoding (3x throughput)',
      'Automated red-teaming pipelines preventing prompt injection, jailbreaks, and PII leaks',
      'Continuous drift detection, latency telemetry, and automated model re-alignment'
    ],
    deliverables: [
      'Infrastructure-as-Code (Terraform / Kubernetes Helm) deployment manifests',
      'Llama-Guard / NeMo-Guardrails safety layer integrated at the network perimeter',
      '24/7 SLA monitoring and model performance degradation alerts'
    ],
    caseSnippet: 'Provisioned on-premise sovereign LLM cluster for a defense manufacturing partner with air-gapped security.'
  }
];

export const FLAGSHIP_PRODUCTS: ProductItem[] = [
  {
    id: 'bharat-tutor-live',
    name: 'BharatTutor Live',
    tagline: 'Real-Time Interactive AI Teaching & Sovereign Education Platform',
    description: 'Evolving from our acclaimed AI Tutor Live product, BharatTutor Live is an ultra-low latency interactive tutoring platform powered by fine-tuned educational LLMs, step-by-step reasoning, voice synthesis, and real-time whiteboard problem solving in 12+ languages.',
    metrics: [
      { label: 'Voice Response Latency', value: '< 280ms' },
      { label: 'Supported Languages', value: '14+' },
      { label: 'Student Retention Boost', value: '3.4x' },
      { label: 'Step-by-step Math Accuracy', value: '99.1%' }
    ],
    keyFeatures: [
      'Adaptive voice & vision multi-modal tutoring with live chalkboard interaction',
      'Curriculum alignment for CBSE, ICSE, Cambridge, IIT-JEE, and Medical entrances',
      'Personalized pacing engine adjusting complexity dynamically to the student',
      'Bilingual code-switching (Hinglish, Tanglish, and pure regional languages)'
    ],
    demoType: 'tutor',
    badge: 'Flagship Platform'
  },
  {
    id: 'fincognition-rag',
    name: 'FinCognition RAG',
    tagline: 'Autonomous Financial Document Intelligence & Regulatory Audit',
    description: 'High-precision hybrid retrieval system built for wealth managers, NBFCs, and commercial banks to digest 10,000-page balance sheets, statutory filings, and loan collateral in seconds with deterministic audit trails.',
    metrics: [
      { label: 'Audit Precision', value: '99.4%' },
      { label: 'Parsing Speed', value: '500 pgs/min' },
      { label: 'False Positive Reduction', value: '88%' },
      { label: 'Compliance Audit Ready', value: 'SEBI / RBI' }
    ],
    keyFeatures: [
      'Complex tabular and footnotes extraction with spatial bounding-box verification',
      'Deterministic citations linking every generated insight directly to source coordinates',
      'Regulatory compliance checks against latest Reserve Bank & SEBI circulars',
      'Granular row-level enterprise permissioning and encrypted vector partitions'
    ],
    demoType: 'rag',
    badge: 'FinTech Breakthrough'
  },
  {
    id: 'agentpulse-core',
    name: 'AgentPulse Enterprise',
    tagline: 'Autonomous Multi-Agent Workflow Orchestrator',
    description: 'A distributed agent runtime that autonomously decomposes complex enterprise objectives into collaborative sub-tasks, queries databases, writes code, reviews results, and triggers downstream actions.',
    metrics: [
      { label: 'Task Completion Rate', value: '97.8%' },
      { label: 'Manual Hours Saved', value: '1,400/mo' },
      { label: 'API Integrations', value: '150+' },
      { label: 'Self-Healing Retry', value: 'Automated' }
    ],
    keyFeatures: [
      'Self-healing execution graph with automated reflection and step backtrack',
      'Pre-built integrations for SAP, Salesforce, Jira, Snowflake, and PostgreSQL',
      'Human-in-the-loop escalation checkpoints for sensitive transactional thresholds',
      'Full audit log of agent reasoning chains (Thought -> Action -> Observation)'
    ],
    demoType: 'agent',
    badge: 'Enterprise Automation'
  }
];

export const INDUSTRIES: IndustryItem[] = [
  {
    id: 'fintech',
    name: 'FinTech & Banking',
    icon: 'Landmark',
    painPoint: 'Tedious loan underwriting, manual KYC verification, and delayed fraud detection costing millions in losses.',
    solution: 'Deploy fine-tuned financial LLMs and sub-millisecond fraud pattern embeddings that process unstructured customer profiles instantly.',
    useCases: ['Automated credit appraisal memo generation', 'Real-time AML & fraud vector anomaly detection', 'Conversational multilingual banking advisors'],
    impactMetric: '70% reduction in loan approval turnaround time'
  },
  {
    id: 'healthcare',
    name: 'Healthcare & Life Sciences',
    icon: 'Stethoscope',
    painPoint: 'Doctor burnout from clinical paperwork, delayed diagnostics, and fragmented medical records.',
    solution: 'HIPAA and ISO-compliant medical LLMs for real-time consultation transcription, clinical notes summarization, and diagnostic triaging.',
    useCases: ['Ambient clinical scribe & prescription synthesis', 'Biomedical literature & clinical trial RAG search', 'Patient intake multilingual triage bots'],
    impactMetric: '2.5 hours saved per physician daily on paperwork'
  },
  {
    id: 'edtech',
    name: 'EdTech & Higher Education',
    icon: 'GraduationCap',
    painPoint: 'One-size-fits-all digital courses suffering from 85%+ dropout rates due to lack of personalized mentoring.',
    solution: 'BharatTutor Live multi-modal AI agents offering 1-on-1 personalized interactive voice tutoring and dynamic problem solving.',
    useCases: ['Live interactive AI classrooms', 'Automated essay & coding homework evaluation', 'Real-time doubt resolution in regional vernaculars'],
    impactMetric: '42% improvement in student test comprehension scores'
  },
  {
    id: 'retail',
    name: 'Retail & E-Commerce',
    icon: 'ShoppingBag',
    painPoint: 'Keyword search failures, high cart abandonment, and static product recommendations.',
    solution: 'Multimodal vector search, conversational shopping stylists, and dynamic catalog generation with Stable Diffusion.',
    useCases: ['Visual image-to-product search with vector embeddings', 'Conversational product recommendation concierge', 'Automated marketing copy & banner generation'],
    impactMetric: '31% uplift in conversion rate from semantic search'
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing & Industry 4.0',
    icon: 'Factory',
    painPoint: 'Unplanned machinery downtime, siloed IoT sensor telemetry, and complex maintenance manuals.',
    solution: 'Adaptive AI agents parsing real-time sensor streams and technician assistant RAG retrieving exact repair procedures.',
    useCases: ['Predictive equipment failure warning system', 'Interactive technician repair manual assistant', 'Automated visual defect classification'],
    impactMetric: '48% reduction in unplanned assembly line downtime'
  },
  {
    id: 'govtech',
    name: 'Public Sector & GovTech',
    icon: 'Building2',
    painPoint: 'Citizens struggling to navigate complex government welfare schemes, language barriers, and documentation backlogs.',
    solution: 'Sovereign Indic AI models operating in 22 official languages providing transparent citizen grievance redressing and scheme eligibility.',
    useCases: ['Multilingual citizen welfare scheme navigation', 'Statutory document digitization & verification', 'Public grievance automated sorting & routing'],
    impactMetric: '85% faster resolution of public citizen inquiries'
  }
];

export const TECH_STACK: TechItem[] = [
  { name: 'Google Gemini 2.5 Flash & Pro', category: 'models', description: 'Multimodal 1M+ token context reasoning and high-speed enterprise inference', badge: 'Tier 1' },
  { name: 'OpenAI GPT-4o & o3', category: 'models', description: 'Advanced reasoning, code generation, and complex workflow execution' },
  { name: 'Llama 3.3 70B & 405B', category: 'models', description: 'Open-weights sovereign fine-tuning for air-gapped on-premise clusters' },
  { name: 'Mistral Large & Codestral', category: 'models', description: 'High-efficiency instruction following and specialized code generation' },
  { name: 'Indic-LLM & Bhashini', category: 'models', description: 'Specialized tokenizers for regional Indian vernaculars with cultural fluency' },
  { name: 'Stable Diffusion XL & Flux', category: 'models', description: 'Photorealistic image synthesis, brand styling LoRAs, and creative generation' },
  
  { name: 'Qdrant & Pinecone', category: 'vector', description: 'High-dimensional vector storage with sub-10ms filter searches' },
  { name: 'Milvus & pgvector', category: 'vector', description: 'Enterprise-scale distributed vector databases handling billions of vectors' },
  { name: 'Weaviate & Chroma', category: 'vector', description: 'Semantic vector indexes with integrated graph and hybrid capabilities' },
  
  { name: 'LangChain & LlamaIndex', category: 'frameworks', description: 'Robust RAG pipelines, data connectors, and agent abstraction layers' },
  { name: 'vLLM & TensorRT-LLM', category: 'frameworks', description: 'High-throughput PagedAttention inference engines maximizing GPU utilization' },
  { name: 'PyTorch & Hugging Face', category: 'frameworks', description: 'Core deep learning research, model weights, and PEFT fine-tuning pipelines' },
  { name: 'DeepSpeed & Megatron', category: 'frameworks', description: 'Distributed training frameworks for sovereign multi-node foundation models' },

  { name: 'NVIDIA H100 & GH200 Grace Hopper', category: 'compute', description: 'Ultra-fast tensor core compute clusters for training and low-latency inference' },
  { name: 'Google Cloud Vertex AI', category: 'compute', description: 'Scalable cloud infrastructure with enterprise governance and security' },
  { name: 'AWS Bedrock & SageMaker', category: 'compute', description: 'Enterprise managed endpoints with VPC peering and IAM isolation' },
  { name: 'Air-Gapped Sovereign On-Prem', category: 'compute', description: 'Zero external internet dependency for high-security defense and banking' },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: '1',
    quote: "India Innovation Tech (IITech) completely transformed our customer underwriting pipeline. Their custom LLM and vector RAG architecture parsed complex balance sheets with 99.4% precision. We saw an immediate 65% drop in turnaround time.",
    author: "Rajeshwar Sen",
    title: "Chief Technology Officer",
    company: "Apex Global FinTech",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80",
    verified: true,
    rating: 5
  },
  {
    id: '2',
    quote: "Transitioning to India Innovation Tech's BharatTutor Live was the best decision for our e-learning platform. The real-time interactive voice latency is under 300ms, and students in tier-2 and tier-3 cities love the natural Hinglish code-switching.",
    author: "Ananya Deshmukh",
    title: "VP of Product & AI",
    company: "VidyaEdu Interactive",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=160&q=80",
    verified: true,
    rating: 5
  },
  {
    id: '3',
    quote: "Their team's deep expertise in MLOps and private GPU cluster configuration helped us deploy an air-gapped sovereign model. Zero data leaks, blazing fast vLLM throughput, and impeccable engineering rigor.",
    author: "Marcus Vance",
    title: "Head of Infrastructure & AI",
    company: "Krypton Global Enterprises (Sheridan, WY)",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80",
    verified: true,
    rating: 5
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "How does India Innovation Tech protect proprietary enterprise data?",
    answer: "We uphold a zero-data-retention and zero-training guarantee. All fine-tuned models, vector indexes, and weights are your exclusive intellectual property. We provide air-gapped on-premise deployments or single-tenant private cloud VPCs where data never leaves your perimeter.",
    category: "Security"
  },
  {
    question: "What is the relationship between AInventions Technologies and India Innovation Tech?",
    answer: "India Innovation Tech is the evolved, enterprise-scale sovereign deep-tech brand born from AInventions Technologies. While expanding operations from Sheridan, Wyoming to India's Silicon Valley in Bengaluru, we carry forward our proprietary IP—including AI Tutor Live (now BharatTutor Live), Embeddings as a Service, and custom LLM engineering—with expanded capacity for global and domestic enterprises.",
    category: "Company"
  },
  {
    question: "When should an enterprise choose custom LLM fine-tuning versus RAG?",
    answer: "Retrieval-Augmented Generation (RAG) is ideal for rapidly changing external facts, policies, and document search without model re-training. Fine-tuning or custom pre-training is essential when you need a model to adopt a specific tone, master rare industry jargon, perform complex multi-step reasoning, or execute strict formatting rules with zero prompt overhead. In most enterprise deployments, we architect a hybrid solution.",
    category: "Technical"
  },
  {
    question: "Can your models run on our internal on-premise hardware?",
    answer: "Yes. We specialize in quantizing and packaging foundation models (via vLLM, TensorRT-LLM, and AWQ) to execute seamlessly on your on-premise NVIDIA GPU infrastructure (A100, H100, L40S) in completely offline or air-gapped environments.",
    category: "Infrastructure"
  },
  {
    question: "What is the typical timeline to launch an enterprise AI solution?",
    answer: "Our proven engineering cycle delivers a production-ready proof of concept within 2 to 3 weeks. Full enterprise integration, security audits, red-teaming, and scale deployment to production typically take 6 to 10 weeks depending on data readiness and customization requirements.",
    category: "Delivery"
  },
  {
    question: "How does BharatTutor Live achieve real-time latency?",
    answer: "BharatTutor Live utilizes a streaming duplex WebSocket architecture, custom lightweight acoustic models, and speculative token prediction. This achieves human-like turn-taking conversational latency of under 300ms across mobile and desktop connections.",
    category: "Products"
  }
];
