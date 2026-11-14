import React from 'react';
import { GlassCard } from '../components/GlassCard';
import { ArrowRight, Play, Sparkles, CheckCircle2, Cpu, Globe, Smartphone, Layers, ShieldCheck, Zap, TrendingUp, Star, MapPin } from 'lucide-react';

export const HomePage = ({ setRoute }) => {
  const technologies = [
    { name: 'React 19 / Next.js', tag: 'Web Engine', latency: 'Sub-second' },
    { name: 'Flutter & Dart', tag: 'Mobile App', latency: '60fps Native' },
    { name: 'MTN & Orange Money', tag: 'Payments', latency: 'Instant MoMo API' },
    { name: 'Firebase & PostgreSQL', tag: 'Cloud DB', latency: 'Royces-Digital-Solutions' },
    { name: 'Node.js & Python', tag: 'Backend API', latency: '12ms Response' },
    { name: 'AI Workflows & LLMs', tag: 'Automation', latency: 'Intelligent CRM' },
  ];

  const featuredProjects = [
    {
      title: 'Grassfield Agri-Logistics Platform',
      category: 'Web Application & MoMo',
      impact: '4x Supply Chain Turnaround',
      desc: 'Digital marketplace connecting agricultural producers in North West & West Cameroon to wholesalers, featuring automated MTN MoMo and Orange Money escrow checkout.',
      tags: ['Next.js', 'Firebase', 'MTN MoMo API', 'Tailwind'],
    },
    {
      title: 'Aura Medical Triage Mobile App',
      category: 'Mobile App (Flutter)',
      impact: '68% Faster Consultation Prep',
      desc: 'Bilingual diagnostic assistant engineered for clinics and hospitals across Central Africa, equipped with offline patient syncing and SMS notifications.',
      tags: ['Flutter', 'Node.js', 'Firebase', 'Dart'],
    },
    {
      title: 'Kinetix Global Brand & Web Portal',
      category: 'Flagship Web & Branding',
      impact: '+$14M Capital Raised',
      desc: 'High-performance interactive portal with custom 3D web graphics, Apple-grade design tokens, and international multi-currency billing.',
      tags: ['React', 'Framer Motion', 'Tailwind', 'Stripe'],
    },
  ];

  return (
    <div className="space-y-24 sm:space-y-32">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center pt-24 pb-12 overflow-hidden">
        {/* Ambient Gradient Glows */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-gradient-to-tr from-primary/20 via-accent/15 to-transparent blur-[140px] pointer-events-none rounded-full" />
        
        <div className="relative max-w-5xl mx-auto text-center px-4 sm:px-6">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900/90 border border-slate-200 dark:border-white/10 backdrop-blur-md mb-8 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-800 dark:text-slate-200">
              Modern Digital Agency • Bamenda, Cameroon & Worldwide
            </span>
            <Sparkles className="w-3.5 h-3.5 text-primary dark:text-accent" />
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.08]">
            Turning Ideas Into Powerful{' '}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Digital Solutions
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Websites, Applications, Branding, Automation, and AI Solutions for Businesses Ready to Grow.
          </p>

          <p className="mt-3 text-xs sm:text-sm font-medium text-primary dark:text-accent-glow">
            Directly Engineered & Supervised by Amuntum Royce Afegnui
          </p>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setRoute('contact')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary hover:bg-primary-hover text-white font-semibold text-base shadow-lg shadow-blue-600/30 hover:-translate-y-0.5 transition-all"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => setRoute('pricing')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-900/70 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-medium text-base border border-slate-200 dark:border-white/10 backdrop-blur-md transition-all"
            >
              <Play className="w-4 h-4 fill-current text-accent" />
              <span>Review Honest Pricing</span>
            </button>
          </div>

          {/* Trust Badges */}
          <div className="mt-14 pt-8 border-t border-slate-200 dark:border-white/5 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-1.5">
              <span className="text-amber-400">★★★★★</span>
              <span className="text-slate-800 dark:text-slate-200 font-semibold">5.0 Star Feedback</span>
            </div>
            <span>•</span>
            <div>MTN MoMo & Orange Money Integrated</div>
            <span>•</span>
            <div>Guaranteed Sub-Second Performance</div>
          </div>

        </div>
      </section>

      {/* 2. SERVICES BENTO GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-2">
              Capabilities & Offerings
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
              Engineered for Cameroon, Built for the World
            </h2>
          </div>
          <button
            onClick={() => setRoute('services')}
            className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-hover"
          >
            <span>View All 6 Core Services</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <GlassCard className="md:col-span-2 group">
            <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-6">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
              High-Speed Web Applications & E-Commerce
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
              Modern websites, dynamic client portals, and e-commerce stores with automated Mobile Money (MTN MoMo & Orange Money) and international card checkout.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">Next.js 15</span>
              <span className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">MTN MoMo API</span>
              <span className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">Firebase Database</span>
            </div>
          </GlassCard>

          <GlassCard className="group">
            <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-6">
              <Smartphone className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              Mobile App Development
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
              Fluid, 60fps native iOS and Android apps powered by Flutter with offline caching and SMS/Push notifications.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">Flutter</span>
              <span className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">Android & iOS</span>
            </div>
          </GlassCard>

          <GlassCard className="group">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 mb-6">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              Automation & AI Workflows
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
              Custom AI chatbots, automated inventory updates, invoice parsers, and WhatsApp client follow-ups that save hundreds of manual hours.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">Gemini AI</span>
              <span className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">WhatsApp Automation</span>
            </div>
          </GlassCard>

          <GlassCard className="md:col-span-2 group">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-500 mb-6">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
              Branding Systems & Logo Identity
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
              Complete visual identity packages: vector logos, business cards, letterheads, social media kits, and brand guidelines ready for commercial registration.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">Figma Tokens</span>
              <span className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">Vector Logo Suite</span>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* 3. FEATURED PROJECTS SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-accent block mb-2">
            Selected Works
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            High Impact Delivered In Production
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, idx) => (
            <GlassCard key={idx} className="flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    {project.category}
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-accent/15 text-accent dark:text-accent-glow">
                    {project.impact}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                  {project.desc}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((t, i) => (
                    <span key={i} className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400">
                      {t}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => setRoute('portfolio')}
                  className="w-full py-2.5 rounded-xl border border-slate-200 dark:border-white/10 hover:border-primary text-slate-800 dark:text-slate-200 text-xs font-semibold hover:text-primary transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Read Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* 4. TECHNOLOGIES STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GlassCard className="text-center py-12">
          <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-2">
            The Royce Technology Stack
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-8">
            Engineered with Fast, Modern & Stable Frameworks
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {technologies.map((tech, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/5 text-left"
              >
                <span className="text-[10px] font-semibold uppercase text-accent block">
                  {tech.tag}
                </span>
                <span className="text-sm font-bold text-slate-900 dark:text-white block mt-1">
                  {tech.name}
                </span>
                <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 block mt-2">
                  {tech.latency}
                </span>
              </div>
            ))}
          </div>
        </GlassCard>
      </section>

      {/* 5. CALL TO ACTION */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-12">
        <div className="relative rounded-3xl p-10 sm:p-16 overflow-hidden bg-gradient-to-r from-primary to-accent text-white text-center shadow-2xl">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight max-w-2xl mx-auto leading-tight">
            Ready to Build Your Project with Amuntum Royce?
          </h2>
          <p className="mt-4 text-white/90 text-base sm:text-lg max-w-xl mx-auto">
            Book an initial consultation or submit your project brief. We provide clear deliverables and pricing in FCFA or USD within 24 hours.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setRoute('contact')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900 text-white font-bold text-sm shadow-xl hover:bg-slate-800 transition-all"
            >
              Request Free Consultation
            </button>
            <button
              onClick={() => setRoute('pricing')}
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-white/20 backdrop-blur-md text-white font-semibold text-sm hover:bg-white/30 transition-all border border-white/20"
            >
              Review Packages & Pricing
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
