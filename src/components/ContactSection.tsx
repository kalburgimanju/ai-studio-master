import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  Building2, 
  Clock, 
  Lock
} from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '../data/content';

interface ContactSectionProps {
  initialServiceId?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialServiceId }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    company: '',
    phone: '',
    serviceId: initialServiceId || 'genai-development',
    timeline: '1-3 months',
    budget: '$25,000 - $50,000',
    message: '',
    needsNDA: true
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.workEmail.trim() || !formData.company.trim()) {
      setErrorMsg('Please complete all required fields.');
      return;
    }

    setErrorMsg('');
    setIsSubmitting(true);

    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative bg-slate-950/80 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Contacts & Locations */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-xs font-semibold text-sky-400 mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Enterprise Consultation</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Let's Build Your Sovereign AI Future
              </h2>
              <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
                Connect with India Innovation Tech's research scientists and systems architects for technical feasibility evaluation, architecture blueprints, or proof-of-concept scoping.
              </p>
            </div>

            {/* Direct Cards */}
            <div className="space-y-4 pt-2">
              {/* Bengaluru Tech Campus */}
              <div className="p-5 rounded-xl bg-slate-900/70 border border-slate-800">
                <div className="flex items-center gap-2 text-xs font-mono text-sky-400 font-bold mb-1">
                  <MapPin className="w-4 h-4 text-sky-400" />
                  <span>India Headquarters (Bengaluru)</span>
                </div>
                <p className="text-xs text-slate-300 mb-2">
                  {COMPANY_INFO.addressIndia}
                </p>
                <div className="flex flex-col gap-1 text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-slate-500" />
                    <span>{COMPANY_INFO.phoneIndia}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-slate-500" />
                    <span>{COMPANY_INFO.email}</span>
                  </div>
                </div>
              </div>

              {/* Sheridan US Office */}
              <div className="p-5 rounded-xl bg-slate-900/70 border border-slate-800">
                <div className="flex items-center gap-2 text-xs font-mono text-indigo-400 font-bold mb-1">
                  <Building2 className="w-4 h-4 text-indigo-400" />
                  <span>United States Office (Formerly AInventions Tech HQ)</span>
                </div>
                <p className="text-xs text-slate-300 mb-2">
                  {COMPANY_INFO.addressUS}
                </p>
                <div className="flex flex-col gap-1 text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-slate-500" />
                    <span>{COMPANY_INFO.phoneUS}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-slate-500" />
                    <span>{COMPANY_INFO.salesEmail}</span>
                  </div>
                </div>
              </div>

              {/* SLA Response Guarantee */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-400 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-emerald-400" />
                  <span>Guaranteed Technical Response within 4 business hours</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Booking Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-2xl relative">
              
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Inquiry Received Successfully</h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold text-white">{formData.fullName}</span> from <span className="text-sky-400">{formData.company}</span>. 
                    An enterprise AI Solutions Architect has been assigned to review your scope and will connect via <span className="font-mono text-white">{formData.workEmail}</span>.
                  </p>
                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 text-xs text-slate-400 font-mono inline-block">
                    Reference ID: IIT-{Math.floor(100000 + Math.random() * 900000)} | Mutual NDA: {formData.needsNDA ? 'Attached' : 'Standard'}
                  </div>
                  <div>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          fullName: '',
                          workEmail: '',
                          company: '',
                          phone: '',
                          serviceId: 'genai-development',
                          timeline: '1-3 months',
                          budget: '$25,000 - $50,000',
                          message: '',
                          needsNDA: true
                        });
                      }}
                      className="px-5 py-2 text-xs font-semibold text-sky-400 hover:text-white underline cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-slate-800 pb-3">
                    <h3 className="text-xl font-bold text-white">Schedule AI Discovery & Technical Scoping</h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Fill out your project specifications for an initial architecture recommendation.
                    </p>
                  </div>

                  {errorMsg && (
                    <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Full Name <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Dr. Vikram Rao"
                        className="w-full bg-slate-950 border border-slate-700/80 rounded-lg px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Corporate Work Email <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.workEmail}
                        onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                        placeholder="v.rao@enterprise.com"
                        className="w-full bg-slate-950 border border-slate-700/80 rounded-lg px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Company / Organization <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Global Financial Technologies Ltd"
                        className="w-full bg-slate-950 border border-slate-700/80 rounded-lg px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Direct Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98801 23456"
                        className="w-full bg-slate-950 border border-slate-700/80 rounded-lg px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Primary AI Capability Required
                      </label>
                      <select
                        value={formData.serviceId}
                        onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-700/80 rounded-lg px-3.5 py-2 text-xs text-slate-200 focus:outline-none focus:border-sky-400"
                      >
                        {SERVICES.map((s) => (
                          <option key={s.id} value={s.id}>
                            {s.title}
                          </option>
                        ))}
                        <option value="bharat-tutor">BharatTutor Live Educational Platform</option>
                        <option value="sovereign-cluster">Sovereign On-Prem GPU Cluster</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Target Timeline
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-700/80 rounded-lg px-3.5 py-2 text-xs text-slate-200 focus:outline-none focus:border-sky-400"
                      >
                        <option value="Immediate (< 1 month)">Immediate POC (&lt; 1 month)</option>
                        <option value="1-3 months">1 - 3 months</option>
                        <option value="3-6 months">3 - 6 months</option>
                        <option value="Enterprise Strategy">Long-Term Enterprise Strategy</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Project Objective / Architectural Requirements
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your current data pipelines, latency targets, compliance requirements, or existing foundation model experiments..."
                      className="w-full bg-slate-950 border border-slate-700/80 rounded-lg p-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-400"
                    />
                  </div>

                  {/* NDA Checkbox */}
                  <div className="flex items-center gap-2 pt-1">
                    <input
                      type="checkbox"
                      id="needsNDA"
                      checked={formData.needsNDA}
                      onChange={(e) => setFormData({ ...formData, needsNDA: e.target.checked })}
                      className="accent-sky-400 rounded w-4 h-4 cursor-pointer"
                    />
                    <label htmlFor="needsNDA" className="text-xs text-slate-300 flex items-center gap-1.5 cursor-pointer select-none">
                      <Lock className="w-3.5 h-3.5 text-sky-400" />
                      <span>Require standard Mutual Non-Disclosure Agreement (NDA) before detailed discovery call</span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 bg-gradient-to-r from-sky-400 via-sky-300 to-indigo-300 hover:from-sky-300 hover:to-indigo-200 text-slate-950 font-bold rounded-xl text-xs sm:text-sm shadow-xl shadow-sky-500/20 flex items-center justify-center gap-2 cursor-pointer transition-all disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <span>Validating & Dispatching Scope...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Schedule Technical AI Discovery</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
