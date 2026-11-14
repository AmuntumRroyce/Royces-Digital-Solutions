import React, { useState } from 'react';
import { GlassCard } from '../components/GlassCard';
import { Globe, Smartphone, Code, Palette, Cpu, Cloud, CheckCircle2, ArrowRight, Clock, Layers } from 'lucide-react';

export const ServicesPage = ({ setRoute }) => {
  const [selectedService, setSelectedService] = useState('web-dev');

  const services = [
    {
      id: 'web-dev',
      title: 'Website Development',
      icon: Globe,
      color: 'text-primary',
      badge: 'Core Competency',
      timeline: '2 - 4 Weeks',
      summary: 'High-converting flagship corporate portals, product launch engines, and editorial platforms engineered for sub-second page loads and 100/100 Core Web Vitals.',
      deliverables: [
        'SSR & Static Site Generation with Next.js 15 / Astro',
        'Headless CMS (Sanity, Strapi, Contentful) integration',
        'Framer Motion smooth scroll & interactive 3D interactions',
        'Full internationalization (i18n) & enterprise technical SEO',
        'Automated CI/CD deployment pipelines on Vercel Edge',
      ],
      stack: ['Next.js', 'React 19', 'Tailwind CSS', 'TypeScript', 'Vercel'],
    },
    {
      id: 'mobile-apps',
      title: 'Mobile Apps (iOS & Android)',
      icon: Smartphone,
      color: 'text-accent',
      badge: 'Native Experience',
      timeline: '4 - 8 Weeks',
      summary: 'Cross-platform and native mobile applications with 60fps animations, offline-first synchronization, secure biometric authentication, and Apple/Google Pay.',
      deliverables: [
        'Single-codebase deployment for iOS and Android via Flutter',
        'Biometric authentication (FaceID, Fingerprint)',
        'Offline caching with SQLite and encrypted local storage',
        'Push notification pipelines with Firebase Cloud Messaging',
        'App Store and Google Play compliance & release management',
      ],
      stack: ['Flutter', 'Dart', 'Swift', 'Kotlin', 'Firebase FCM'],
    },
    {
      id: 'web-apps',
      title: 'Web Applications & SaaS',
      icon: Code,
      color: 'text-purple-500',
      badge: 'Enterprise Architecture',
      timeline: '6 - 12 Weeks',
      summary: 'Full-stack SaaS platforms, multi-tenant B2B portals, and complex operational dashboards equipped with real-time WebSockets and Stripe billing engines.',
      deliverables: [
        'Multi-tenant database schema & role-based access control (RBAC)',
        'Stripe Checkout & subscription tier billing management',
        'Real-time collaborative data sync via WebSockets',
        'Dynamic interactive data visualization with D3 and Canvas',
        'Comprehensive RESTful and GraphQL API documentation',
      ],
      stack: ['React', 'Node.js', 'Go', 'PostgreSQL', 'Redis', 'Docker'],
    },
    {
      id: 'branding',
      title: 'Branding & Logo Design',
      icon: Palette,
      color: 'text-rose-500',
      badge: 'Visual Identity',
      timeline: '2 - 3 Weeks',
      summary: 'Comprehensive visual identity systems from logo suites and color harmonies to complete Figma design token libraries tailored for seamless developer handoff.',
      deliverables: [
        'Primary, secondary, and responsive icon vector logo suite',
        'Comprehensive 80+ page brand guidelines documentation',
        'Custom typography pairing & licensed web font packages',
        'Production-ready Figma token system (Colors, Spacing, Grids)',
        '3D brand assets & motion graphics templates',
      ],
      stack: ['Figma Tokens', 'Spline 3D', 'Illustrator', 'After Effects'],
    },
    {
      id: 'automation',
      title: 'Automation & AI Solutions',
      icon: Cpu,
      color: 'text-emerald-500',
      badge: 'Operational Leverage',
      timeline: '2 - 5 Weeks',
      summary: 'Eliminate manual bottlenecks with custom AI agents, automated CRM synchronization, intelligent PDF document parsers, and automated notification engines.',
      deliverables: [
        'Fine-tuned LLM agents using OpenAI and Gemini APIs',
        'Automated CRM & ERP event pipelines (HubSpot, Salesforce)',
        'Intelligent OCR extraction for invoices and documents',
        'Event-driven serverless background workers',
        'Full error recovery & audit logging pipelines',
      ],
      stack: ['Python', 'LangChain', 'Gemini API', 'Temporal', 'n8n'],
    },
    {
      id: 'cloud',
      title: 'Cloud Solutions & DevOps',
      icon: Cloud,
      color: 'text-sky-500',
      badge: 'High Reliability',
      timeline: '3 - 6 Weeks',
      summary: 'Resilient, self-healing cloud infrastructure configured through code with automated zero-downtime deployments, SOC2 compliance, and 24/7 telemetry.',
      deliverables: [
        'Infrastructure as Code (IaC) via Terraform & OpenTofu',
        'Kubernetes container orchestration on GCP and AWS',
        'Zero-trust security policies and IAM hardening',
        'Automated blue-green and canary deployment pipelines',
        'Real-time metrics, tracing, and alerts with Datadog & Prometheus',
      ],
      stack: ['Google Cloud', 'AWS', 'Terraform', 'Kubernetes', 'Docker'],
    },
  ];

  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Page Title */}
      <div className="max-w-3xl">
        <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-3">
          Our Specializations
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
          Comprehensive Digital Engineering.
        </h1>
        <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          From early-stage MVPs to global enterprise infrastructure, our six pillars deliver uncompromising quality at every layer of the digital stack.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((srv) => {
          const Icon = srv.icon;
          return (
            <GlassCard key={srv.id} className="flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800/80 flex items-center justify-center ${srv.color} border border-slate-200 dark:border-white/5`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                    {srv.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {srv.title}
                </h3>
                
                <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mb-4 font-mono">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Timeline: {srv.timeline}</span>
                </div>

                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                  {srv.summary}
                </p>

                <div className="mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-3">
                    Deliverables:
                  </h4>
                  <ul className="space-y-2">
                    {srv.deliverables.map((d, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <div className="pt-4 border-t border-slate-200 dark:border-white/5 mb-6">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                    Primary Tech Stack
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {srv.stack.map((stk, idx) => (
                      <span key={idx} className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                        {stk}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setRoute('contact')}
                  className="w-full py-3 rounded-xl bg-primary hover:bg-primary-hover text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-md shadow-blue-500/20"
                >
                  <span>Inquire for {srv.title.split(' ')[0]}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </GlassCard>
          );
        })}
      </div>

    </div>
  );
};
