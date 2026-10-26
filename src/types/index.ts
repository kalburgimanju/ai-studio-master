export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: 'development' | 'integration' | 'infrastructure';
  icon: string;
  tags: string[];
  capabilities: string[];
  deliverables: string[];
  caseSnippet: string;
}

export interface ProductItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  metrics: { label: string; value: string }[];
  keyFeatures: string[];
  demoType: 'tutor' | 'rag' | 'agent';
  badge: string;
}

export interface IndustryItem {
  id: string;
  name: string;
  icon: string;
  painPoint: string;
  solution: string;
  useCases: string[];
  impactMetric: string;
}

export interface TechItem {
  name: string;
  category: 'models' | 'vector' | 'frameworks' | 'compute';
  description: string;
  badge?: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  title: string;
  company: string;
  avatar: string;
  verified: boolean;
  rating: number;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}
