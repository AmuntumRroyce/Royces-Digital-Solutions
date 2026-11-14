import React, { useState } from 'react';
import { GlassCard } from '../components/GlassCard';
import { BookOpen, Clock, ArrowRight, Sparkles, Send } from 'lucide-react';

export const BlogPage = ({ setRoute }) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const articles = [
    {
      id: 1,
      title: 'Architecting Sub-50ms Global SaaS: Why We Switched to Edge Runtimes and Event-Driven Pipelines',
      category: 'Cloud & Architecture',
      readTime: '7 min read',
      date: 'Nov 12, 2026',
      excerpt: 'A deep architectural post-mortem on decomposing monolithic backends into lightweight edge workers, caching at Cloudflare PoPs, and keeping database replicas synchronized.',
    },
    {
      id: 2,
      title: 'The Apple Standard: How We Build Glassmorphism and Micro-Interactions That Don’t Hurt Performance',
      category: 'UI/UX & Design',
      readTime: '5 min read',
      date: 'Nov 04, 2026',
      excerpt: 'Hardware-accelerated CSS backdrops, composited opacity layers, and spring physics mathematics that keep modern web apps running at a locked 60 frames per second.',
    },
    {
      id: 3,
      title: 'Beyond the Wrapper: Building Enterprise-Grade Autonomous AI Workflows with Tool Calling & Guardrails',
      category: 'AI & Automation',
      readTime: '9 min read',
      date: 'Oct 28, 2026',
      excerpt: 'How we design self-healing agent pipelines with semantic schema validation, structured JSON outputs, and comprehensive audit trails for sensitive financial workflows.',
    },
    {
      id: 4,
      title: 'Flutter in 2026: Why Cross-Platform Is Finally Beating Native Swift and Kotlin for High-Growth Startups',
      category: 'Mobile Engineering',
      readTime: '6 min read',
      date: 'Oct 19, 2026',
      excerpt: 'Profiling frame render times, memory allocation, and maintenance overhead across 15 production deployments. When to use Flutter and when native still matters.',
    },
  ];

  const categories = ['All', 'Cloud & Architecture', 'UI/UX & Design', 'AI & Automation', 'Mobile Engineering'];

  const filteredArticles = activeCategory === 'All'
    ? articles
    : articles.filter(a => a.category === activeCategory);

  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Header */}
      <div className="max-w-3xl">
        <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-3">
          Royce Insights & Engineering Teardowns
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
          Battle-Tested Technical Wisdom.
        </h1>
        <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          In-depth explorations on system design, responsive user interfaces, AI agent orchestration, and modern engineering culture.
        </p>
      </div>

      {/* Featured Editorial Article */}
      <GlassCard className="p-8 sm:p-12 relative overflow-hidden group">
        <div className="flex items-center gap-2 text-xs font-semibold text-accent mb-4">
          <Sparkles className="w-4 h-4" />
          <span>FEATURED TECHNICAL DEEP DIVE</span>
          <span>•</span>
          <span>7 min read</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-4 group-hover:text-primary transition-colors">
          Architecting Sub-50ms Global SaaS: Why We Switched to Edge Runtimes and Event-Driven Pipelines
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed mb-6">
          A deep architectural post-mortem on decomposing monolithic backends into lightweight edge workers, caching at Cloudflare PoPs, and keeping database replicas synchronized without race conditions.
        </p>
        <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white text-xs font-semibold hover:bg-primary-hover shadow-md transition-all">
          <span>Read Full Article</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </GlassCard>

      {/* Category Tabs */}
      <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl glass-nav w-fit">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeCategory === cat
                ? 'bg-primary text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Article Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredArticles.map((art) => (
          <GlassCard key={art.id} className="flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-3 font-mono">
                <span>{art.category}</span>
                <span>{art.readTime}</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
                {art.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                {art.excerpt}
              </p>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-white/5 text-xs">
              <span className="text-slate-400">{art.date}</span>
              <span className="font-semibold text-primary group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                Read Breakdown <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Newsletter Card */}
      <GlassCard className="p-8 sm:p-12 text-center max-w-3xl mx-auto">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
          Subscribe to The Royce Engineering Radar
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto mb-6">
          Zero marketing spam. Only high-signal technical teardowns, architecture diagrams, and design tokens sent twice a month.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 max-w-md mx-auto">
          <input
            type="email"
            placeholder="engineer@company.com"
            className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-white/10 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-primary text-white text-xs font-semibold hover:bg-primary-hover flex items-center justify-center gap-1.5 shrink-0">
            <span>Subscribe</span>
            <Send className="w-3.5 h-3.5" />
          </button>
        </div>
      </GlassCard>

    </div>
  );
};
