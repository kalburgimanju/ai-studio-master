/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { InteractiveAILab } from './components/InteractiveAILab';
import { ProductsAndCaseStudies } from './components/ProductsAndCaseStudies';
import { AnimatedShowcase } from './components/AnimatedShowcase';
import { IndustriesSection } from './components/IndustriesSection';
import { TechStackSection } from './components/TechStackSection';
import { AboutSection } from './components/AboutSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';

export default function App() {
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [selectedServiceForConsult, setSelectedServiceForConsult] = useState<string | undefined>(undefined);

  const handleOpenConsultation = (serviceId?: string) => {
    setSelectedServiceForConsult(serviceId);
    setIsConsultationModalOpen(true);
  };

  const handleNavigateToLab = () => {
    const el = document.getElementById('interactive-lab');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#050711] text-slate-100 selection:bg-sky-500 selection:text-slate-950 font-sans">
      {/* Navigation Header */}
      <Navbar
        onOpenConsultation={handleOpenConsultation}
        onNavigateLab={handleNavigateToLab}
      />

      {/* Hero Section */}
      <main>
        <Hero
          onOpenConsultation={() => handleOpenConsultation()}
          onExploreLab={handleNavigateToLab}
        />

        {/* Core AI Services (GenAI, LLMs, Embeddings, Adaptive AI) */}
        <ServicesSection
          onSelectServiceForConsult={(serviceId) => handleOpenConsultation(serviceId)}
        />

        {/* Interactive Deep-Tech Sandbox & ROI Estimator */}
        <InteractiveAILab
          onOpenConsultation={() => handleOpenConsultation('rag-embeddings')}
        />

        {/* Proprietary Platforms & Case Studies (Featuring BharatTutor Live / AI Tutor Live) */}
        <ProductsAndCaseStudies
          onOpenConsultation={() => handleOpenConsultation('bharat-tutor-live')}
        />

        {/* Animated Deep-Tech AI Architecture Gallery */}
        <AnimatedShowcase
          onOpenConsultation={(service) => handleOpenConsultation(service)}
        />

        {/* Vertical Industry Solutions */}
        <IndustriesSection
          onOpenConsultation={(indId) => handleOpenConsultation(indId)}
        />

        {/* Enterprise Tech Stack Matrix */}
        <TechStackSection />

        {/* Company Story & Evolution (From AInventions Tech to India Innovation Tech) */}
        <AboutSection
          onOpenConsultation={() => handleOpenConsultation()}
        />

        {/* Verified Enterprise Testimonials */}
        <TestimonialsSection />

        {/* FAQs */}
        <FAQSection
          onOpenConsultation={() => handleOpenConsultation()}
        />

        {/* Contact & Technical Scoping */}
        <ContactSection
          initialServiceId={selectedServiceForConsult}
        />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Interactive Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
        defaultServiceId={selectedServiceForConsult}
      />
    </div>
  );
}
