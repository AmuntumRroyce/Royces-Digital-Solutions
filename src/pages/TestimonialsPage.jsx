import React from 'react';
import { GlassCard } from '../components/GlassCard';
import { Star, Play, CheckCircle2, Quote, ArrowRight } from 'lucide-react';

export const TestimonialsPage = ({ setRoute }) => {
  const reviews = [
    {
      author: 'Marcus Vance',
      role: 'CTO, Nexus Global FinTech (London)',
      quote: 'Royce Digital Solutions did in 6 weeks what our previous agency couldn’t deliver in 8 months. Our product velocity tripled and our platform handles 10x traffic with zero downtime.',
      rating: 5,
      impact: '10x Traffic Handled With Zero Downtime',
      badge: 'Institutional FinTech',
    },
    {
      author: 'Dr. Sarah Lindqvist',
      role: 'VP Product, Aura Health (Zurich)',
      quote: 'The attention to UX micro-interactions and strict medical data privacy was astounding. The clinicians in our beta trial couldn’t believe how fluid and intuitive the mobile workflow felt.',
      rating: 5,
      impact: '72% Reduction in Clinical Paperwork',
      badge: 'Healthcare & AI',
    },
    {
      author: 'Matteo Rossi',
      role: 'Managing Director, Veloce Luxury Goods (Milan)',
      quote: 'Our conversion rates jumped by 140% in the first quarter after launching the new headless 3D web experience. Royce operates at a completely different tier of visual polish.',
      rating: 5,
      impact: '+$14M Additional Online Revenue',
      badge: 'Luxury E-Commerce',
    },
    {
      author: 'Harrison Reed',
      role: 'Founder & CEO, Stratum Supply Chain (New York)',
      quote: 'The automated LLM agents and invoice extraction pipelines they architected save our operations team more than 8,000 manual hours every single month.',
      rating: 5,
      impact: '8,400 Hours Saved Per Month',
      badge: 'Enterprise Automation',
    },
    {
      author: 'Chloe Dupont',
      role: 'Chief Marketing Officer, Kinetix Robotics (Paris)',
      quote: 'Every VC partner who reviewed our Series A deck commented on the quality and authority of our brand system. We closed our $14M round three weeks ahead of schedule.',
      rating: 5,
      impact: 'Oversubscribed $14M Series A',
      badge: 'Robotics & Hardware',
    },
    {
      author: 'Liam O’Connor',
      role: 'Head of Infrastructure, Solstice Media (Dublin)',
      quote: 'Migrating to their containerized cloud architecture dropped our AWS bill by 64% while giving us instant horizontal autoscaling during live televised events.',
      rating: 5,
      impact: '64% Reduction in Cloud Bill',
      badge: 'Cloud & DevOps',
    },
  ];

  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Header */}
      <div className="max-w-3xl">
        <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-3">
          Social Proof & Validation
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
          Trusted by Leaders in Fast-Growth Industries.
        </h1>
        <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          Read candid reviews and quantifiable outcomes from founders, CTOs, and product directors who build with Royce Digital Solutions.
        </p>
      </div>

      {/* Aggregate Score Bar */}
      <GlassCard className="p-6 sm:p-8 flex flex-wrap items-center justify-around gap-6 text-center">
        <div>
          <span className="text-3xl font-extrabold text-slate-900 dark:text-white font-mono block">4.98 / 5.0</span>
          <div className="flex items-center justify-center gap-1 text-amber-400 my-1">
            {'★★★★★'}
          </div>
          <span className="text-xs text-slate-500 font-semibold uppercase">Clutch Global Rating</span>
        </div>
        <div className="h-10 w-px bg-slate-200 dark:bg-white/10 hidden sm:block" />
        <div>
          <span className="text-3xl font-extrabold text-accent font-mono block">100%</span>
          <span className="text-xs text-slate-500 font-semibold uppercase block mt-2">Verified Job Success Score</span>
        </div>
        <div className="h-10 w-px bg-slate-200 dark:bg-white/10 hidden sm:block" />
        <div>
          <span className="text-3xl font-extrabold text-emerald-500 font-mono block">+94</span>
          <span className="text-xs text-slate-500 font-semibold uppercase block mt-2">Net Promoter Score (NPS)</span>
        </div>
      </GlassCard>

      {/* Testimonials Masonry Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((rev, idx) => (
          <GlassCard key={idx} className="flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                  {rev.badge}
                </span>
                <div className="flex text-amber-400 text-xs">
                  {'★'.repeat(rev.rating)}
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-accent/10 border border-accent/20 text-accent dark:text-accent-glow text-xs font-semibold mb-4">
                {rev.impact}
              </div>

              <blockquote className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-6 italic">
                "{rev.quote}"
              </blockquote>
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-white/5 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-primary/20 text-primary font-bold flex items-center justify-center text-xs">
                {rev.author[0]}
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900 dark:text-white">{rev.author}</h4>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">{rev.role}</p>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>

    </div>
  );
};
