import React from 'react';
import { GlassCard } from '../components/GlassCard';
import { Award, CheckCircle, Shield, Users, Target, ArrowRight, MapPin } from 'lucide-react';

export const AboutPage = ({ setRoute }) => {
  const pillars = [
    { title: 'Obsessive Craftsmanship', desc: 'No recycled, slow WordPress templates. Every system is custom engineered with modern frameworks, high-speed micro-interactions, and pixel-perfect responsive layouts.' },
    { title: 'African Context First, Global Standards Always', desc: 'We engineer solutions optimized for low-bandwidth 3G/4G stability, offline caching, and instant Mobile Money (MTN MoMo & Orange Money) integrations.' },
    { title: 'Honest & Transparent Partnership', desc: 'Direct access to the lead architect. We provide clear milestone breakdowns in FCFA and USD, avoiding inflated overheads.' },
    { title: 'Reliability & Scalability', desc: 'From local Cameroonian SMEs to international platforms, our codebases are built on robust cloud backends (Firebase, Node.js, PostgreSQL) ready for millions of visits.' },
  ];

  const team = [
    { 
      name: 'Amuntum Royce Afegnui', 
      role: 'Founder & Principal Software Architect', 
      location: 'Bamenda, Cameroon',
      bio: 'Visionary engineer & designer leading Royce Digital Solutions. Specializing in high-performance web systems, cross-platform mobile apps (Flutter), and automated AI workflows.' 
    },
    { 
      name: 'Core Engineering Squad', 
      role: 'Frontend, Mobile & Cloud Specialists', 
      location: 'Cameroon & Remote Global',
      bio: 'Passionate software engineers, UI/UX designers, and cloud infrastructure specialists collaborating under the direct technical direction of Amuntum Royce Afegnui.' 
    },
  ];

  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
      
      {/* Hero */}
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-4">
          <MapPin className="w-3.5 h-3.5" />
          <span>Bamenda, Cameroon • Global Delivery</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
          Empowering African Growth Through World-Class Tech.
        </h1>
        <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          Founded in <strong>Bamenda, Cameroon</strong> by <strong>Amuntum Royce Afegnui</strong>, Royce Digital Solutions exists to prove that African businesses and international clients can access Apple-tier design and modern SaaS engineering without paying outrageous Western markups.
        </p>
      </div>

      {/* Metrics Strip */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        <GlassCard className="text-center py-8">
          <span className="text-3xl sm:text-4xl font-extrabold text-primary font-mono block mb-1">100%</span>
          <span className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">Direct Founder Oversight</span>
        </GlassCard>
        <GlassCard className="text-center py-8">
          <span className="text-3xl sm:text-4xl font-extrabold text-accent font-mono block mb-1">99.4%</span>
          <span className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">On-Time Sprint Delivery</span>
        </GlassCard>
        <GlassCard className="text-center py-8">
          <span className="text-3xl sm:text-4xl font-extrabold text-emerald-500 font-mono block mb-1">MoMo / OM</span>
          <span className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">Native Payment Gateways</span>
        </GlassCard>
        <GlassCard className="text-center py-8">
          <span className="text-3xl sm:text-4xl font-extrabold text-purple-500 font-mono block mb-1">Global</span>
          <span className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">Cameroon, Africa & Overseas</span>
        </GlassCard>
      </div>

      {/* Core Pillars */}
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-10">
          The Four Royce Standards
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((item, idx) => (
            <GlassCard key={idx}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">
                  0{idx + 1}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{item.title}</h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed pl-11">
                {item.desc}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* Leadership Profile */}
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-8">
          Leadership & Founder
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {team.map((member, idx) => (
            <GlassCard key={idx} className="p-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-white font-bold text-2xl mb-6 shadow-md shadow-blue-500/25">
                {member.name[0]}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">{member.name}</h3>
              <p className="text-xs font-semibold text-primary dark:text-accent mt-0.5 mb-1">{member.role}</p>
              <p className="text-[11px] font-mono text-slate-400 mb-4">{member.location}</p>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{member.bio}</p>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <GlassCard className="text-center py-12 bg-gradient-to-b from-primary/5 to-transparent">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Ready to build with Amuntum Royce Afegnui?</h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto mb-6">
          Whether you are based in Bamenda, Douala, Yaoundé, or anywhere across the globe, we are ready to accelerate your project.
        </p>
        <button
          onClick={() => setRoute('contact')}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-semibold text-xs shadow-md hover:bg-primary-hover transition-all"
        >
          <span>Discuss Your Project Directly</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </GlassCard>

    </div>
  );
};
