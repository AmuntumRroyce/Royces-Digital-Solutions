import React, { useState } from 'react';
import { GlassCard } from '../components/GlassCard';
import { ArrowUpRight, CheckCircle2, Filter, Layers, ExternalLink, X } from 'lucide-react';

export const PortfolioPage = ({ setRoute }) => {
  const [filter, setFilter] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Nexus Institutional FinTech Exchange',
      category: 'Web Applications',
      client: 'Nexus Global (London)',
      impact: '+340% Transaction Velocity',
      summary: 'Re-engineered high-volume institutional asset platform processing $2.8B in monthly transaction volume with sub-100ms trade execution.',
      fullDescription: 'The client faced severe latency spikes and database lockouts during high-volatility market events. Royce Digital Solutions redesigned the trading portal from the ground up utilizing React 19, Go microservices, and memory-cached Redis order books.',
      results: [
        'Sub-100ms order routing across 14 liquidity hubs',
        '340% increase in daily active institutional traders',
        'Zero downtime across 18 consecutive months',
      ],
      tags: ['Next.js', 'Go', 'GCP', 'PostgreSQL', 'WebSockets'],
    },
    {
      id: 2,
      title: 'Aura Health AI Assistant',
      category: 'Mobile Apps',
      client: 'Aura Medical Technologies (Zurich)',
      impact: '72% Reduced Triage Overhead',
      summary: 'HIPAA-compliant diagnostic intelligence system serving 45,000 clinicians across Europe with automated clinical report summaries.',
      fullDescription: 'Clinicians were spending up to 3 hours per shift manually transcribing patient consultations. We built a cross-platform Flutter application with on-device speech processing and serverless LLM extraction.',
      results: [
        'Adopted by 18 hospital networks in DACH region',
        '100% HIPAA and GDPR compliance verified',
        'Average consultation paperwork time dropped from 18 min to 3.5 min',
      ],
      tags: ['Flutter', 'Python', 'FastAPI', 'Firebase', 'Gemini API'],
    },
    {
      id: 3,
      title: 'Veloce Luxury E-Commerce Engine',
      category: 'Web Applications',
      client: 'Veloce Group (Milan)',
      impact: '$42M Annual Online GMV',
      summary: 'Headless e-commerce platform with real-time 3D spatial customizer and sub-second global page transitions.',
      fullDescription: 'Traditional monolithic storefronts resulted in high bounce rates on mobile. We implemented a headless Shopify Plus architecture paired with Next.js Edge functions and WebGL 3D model rendering.',
      results: [
        'Conversion rate increased from 1.4% to 3.9%',
        'Lighthouse performance score achieved 99/100',
        'Average cart value grew by 38% due to 3D customizer',
      ],
      tags: ['Next.js', 'Tailwind', 'Shopify Plus', 'Three.js'],
    },
    {
      id: 4,
      title: 'Stratum Autonomous Supply Chain',
      category: 'AI & Automation',
      client: 'Stratum Logistics (New York)',
      impact: '8,400 Monthly Hours Saved',
      summary: 'End-to-end intelligent logistics pipeline parsing commercial freight bills of lading and predicting customs bottlenecks.',
      fullDescription: 'Freight operators had to manually review thousands of international bills of lading. Royce Digital Solutions deployed automated OCR models and event-driven validation workers.',
      results: [
        '99.2% OCR extraction accuracy on unstructured invoices',
        'Automated 92% of standard customs filings',
        '$1.2M annual operational cost reduction',
      ],
      tags: ['Python', 'LangChain', 'Docker', 'Google Cloud Run'],
    },
    {
      id: 5,
      title: 'Kinetix Spatial Identity & Design System',
      category: 'Branding',
      client: 'Kinetix Robotics (San Francisco)',
      impact: '$14.2M Series A Raised',
      summary: 'Complete brand positioning, 3D asset library, and responsive design token system for an autonomous robotics hardware scale-up.',
      fullDescription: 'Kinetix needed an authoritative visual identity to present to institutional venture capitalists. We delivered comprehensive Figma tokens, 3D animated hero assets, and pitch decks.',
      results: [
        'Oversubscribed $14.2M Series A funding round',
        'Featured across TechCrunch, Wired, and Bloomberg',
        'Unified 4 internal software products under one design token system',
      ],
      tags: ['Brand Identity', 'Figma Tokens', 'Spline 3D', 'Design System'],
    },
    {
      id: 6,
      title: 'Solstice Cloud Infrastructure Migration',
      category: 'Web Applications',
      client: 'Solstice Media (London)',
      impact: '64% Reduction in AWS Hosting Bills',
      summary: 'Multi-region Kubernetes deployment handling 180M monthly requests with automated elasticity and zero-trust IAM.',
      fullDescription: 'Legacy monolithic servers were causing astronomical monthly cloud bills and failing under viral traffic spikes. We transitioned their fleet to containerized Terraform infrastructure.',
      results: [
        'Cloud infrastructure spend dropped from $48k/mo to $17k/mo',
        'Automatic scaling from 4 to 120 pods in under 45 seconds',
        'Zero downtime during global sporting events',
      ],
      tags: ['AWS', 'Kubernetes', 'Terraform', 'Datadog', 'Go'],
    },
  ];

  const categories = ['All', 'Web Applications', 'Mobile Apps', 'AI & Automation', 'Branding'];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Page Header */}
      <div className="max-w-3xl">
        <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-3">
          Case Studies & Results
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
          Proof in Production.
        </h1>
        <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          Explore how our engineering and design partnerships have created enterprise value, tripled conversions, and eliminated technical debt.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl glass-nav w-fit">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              filter === cat
                ? 'bg-primary text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <GlassCard key={project.id} className="flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  {project.client}
                </span>
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-accent/15 text-accent dark:text-accent-glow">
                  {project.impact}
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                {project.summary}
              </p>
            </div>

            <div>
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.tags.map((t, idx) => (
                  <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                    {t}
                  </span>
                ))}
              </div>

              <button
                onClick={() => setActiveModalProject(project)}
                className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-700/80 text-slate-800 dark:text-slate-200 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>Read Technical Blueprint</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Case Study Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="glass-card max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-3xl p-6 sm:p-10 shadow-2xl relative bg-white dark:bg-slate-900">
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-6 right-6 p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-bold uppercase tracking-wider text-accent block mb-2">
              {activeModalProject.category} • {activeModalProject.client}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-4">
              {activeModalProject.title}
            </h2>

            <div className="p-4 rounded-xl bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6">
              Verified Metric: {activeModalProject.impact}
            </div>

            <div className="space-y-6 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-2">
                  The Architectural Challenge & Solution
                </h4>
                <p>{activeModalProject.fullDescription}</p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-2">
                  Measurable Results
                </h4>
                <ul className="space-y-2">
                  {activeModalProject.results.map((res, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{res}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-2">
                  Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.tags.map((t, idx) => (
                    <span key={idx} className="text-xs font-mono px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 font-semibold">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-white/10 flex gap-3">
              <button
                onClick={() => {
                  setActiveModalProject(null);
                  setRoute('contact');
                }}
                className="flex-1 py-3 rounded-xl bg-primary hover:bg-primary-hover text-white text-xs font-semibold text-center"
              >
                Inquire About Similar Architecture
              </button>
              <button
                onClick={() => setActiveModalProject(null)}
                className="px-6 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
