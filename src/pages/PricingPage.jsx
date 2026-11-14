import React, { useState } from 'react';
import { GlassCard } from '../components/GlassCard';
import { Check, ArrowRight, Calculator, Smartphone, Globe, CreditCard, ShieldCheck, Sparkles, MessageCircle, Tag } from 'lucide-react';

export const PricingPage = ({ setRoute }) => {
  const [currency, setCurrency] = useState('FCFA'); // 'FCFA' (Cameroon) or 'USD' (International)
  const [applyFirstTimeDiscount, setApplyFirstTimeDiscount] = useState(true);

  // Interactive Estimator State
  const [platformType, setPlatformType] = useState('starter');
  const [hasMobileMoney, setHasMobileMoney] = useState(true);
  const [hasMobileApp, setHasMobileApp] = useState(false);

  const calculateEstimate = () => {
    let baseFCFA = 175000;
    if (platformType === 'ecommerce') baseFCFA = 480000;
    if (platformType === 'custom_saas') baseFCFA = 950000;
    if (hasMobileMoney && platformType === 'starter') baseFCFA += 65000;
    if (hasMobileApp) baseFCFA += 850000;

    if (applyFirstTimeDiscount) {
      baseFCFA = Math.round(baseFCFA * 0.8); // 20% discount
    }

    if (currency === 'USD') {
      return `~$${Math.round(baseFCFA / 610).toLocaleString()} USD`;
    }
    return `${baseFCFA.toLocaleString()} FCFA`;
  };

  const plans = [
    {
      name: 'Starter Launch',
      tagline: 'Ideal for Cameroonian SMEs, clinics, schools, and professionals establishing an authoritative online presence.',
      originalPriceFCFA: '175,000 FCFA',
      discountedPriceFCFA: '140,000 FCFA',
      originalPriceUSD: '$290 USD',
      discountedPriceUSD: '$230 USD',
      period: 'complete package',
      highlight: false,
      badge: '20% OFF FIRST PROJECT',
      features: [
        'Custom High-Converting Responsive Website',
        'Direct WhatsApp Click-to-Chat (+237 651 094 432)',
        'Domain Name (.cm / .com) & Cloud Hosting Setup',
        'Google My Business & Local SEO Optimization',
        'Up to 5 Professional Branded Email Addresses',
        'Mobile & Tablet Responsive (Fast on 3G/4G Networks)',
        '30 Days Free Maintenance & Updates by Royce',
      ],
      cta: 'Claim 20% Off Starter',
    },
    {
      name: 'Business Growth & E-Commerce',
      tagline: 'Engineered for businesses ready to sell products and collect payments automatically across Cameroon & diaspora.',
      originalPriceFCFA: '480,000 FCFA',
      discountedPriceFCFA: '384,000 FCFA',
      originalPriceUSD: '$790 USD',
      discountedPriceUSD: '$630 USD',
      period: 'complete system',
      highlight: true,
      badge: 'MOST POPULAR • 20% OFF',
      features: [
        'Full Dynamic Web Application or Online Store',
        'MTN Mobile Money & Orange Money Automated Checkout',
        'International Visa / Mastercard Online Payments',
        'Admin Dashboard for Orders, Stock & Customers',
        'Automated SMS & Email Order Alerts to You & Clients',
        'Fast Sub-Second Load Speeds via Global CDN',
        'Bi-Weekly Sprint Demos with Amuntum Royce Afegnui',
        '60 Days Priority Warranty & Staff Training',
      ],
      cta: 'Claim 20% Off Growth Engine',
    },
    {
      name: 'Enterprise & Mobile App',
      tagline: 'For institutions, FinTechs, and scaling brands requiring custom Android/iOS apps and AI automation.',
      originalPriceFCFA: '1,450,000 FCFA',
      discountedPriceFCFA: '1,160,000 FCFA',
      originalPriceUSD: '$2,380 USD',
      discountedPriceUSD: '$1,900 USD',
      period: 'starting estimate',
      highlight: false,
      badge: 'ENTERPRISE SPRINT • 20% OFF',
      features: [
        'Custom Native Mobile App (iOS & Android via Flutter)',
        'Enterprise Backend (Firebase / Node.js / PostgreSQL)',
        'Custom AI Agents & Automated Customer Support',
        'Multi-Branch Multi-User Role Permissions (RBAC)',
        'Google Play Store & Apple App Store Publishing',
        'Offline-First Data Sync (Works Without Constant Internet)',
        'Dedicated 24/7 Priority SLA & Direct Technical Support',
      ],
      cta: 'Claim 20% Off Enterprise',
    },
  ];

  const paymentOptions = [
    { 
      title: 'MTN Mobile Money (MoMo)', 
      tag: 'Local Instant', 
      number: '+237 651 094 432',
      account: 'Amuntum Royce Afegnui',
      desc: 'Send payment directly via Mobile Money dial code or MoMo app with instant confirmation.' 
    },
    { 
      title: 'Orange Money (OM)', 
      tag: 'Local Instant', 
      number: '+237 651 094 432',
      account: 'Amuntum Royce Afegnui',
      desc: 'Instant Cameroonian Orange Money transfer supported.' 
    },
    { 
      title: 'UBA & Cameroonian Banks', 
      tag: 'Direct Wire', 
      number: 'UBA Commercial Bank Cameroon',
      account: 'Official Invoice Reference',
      desc: 'Official bank wire invoice with complete commercial documentation.' 
    },
    { 
      title: 'Visa / Mastercard & PayPal', 
      tag: 'International', 
      number: 'Stripe Online Checkout',
      account: 'Diaspora & Worldwide',
      desc: 'Secure checkout for European, UK, US, and global clients.' 
    },
  ];

  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        
        {/* 20% Discount Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-bold mb-4 animate-bounce">
          <Tag className="w-3.5 h-3.5" />
          <span>SPECIAL OFFER: 20% FIRST-TIME CLIENT DISCOUNT APPLIED</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
          World-Class Engineering. Honest African Pricing.
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
          Tailored to empower Cameroonian enterprises and startups first, while remaining competitive for our international partners worldwide.
        </p>

        {/* Currency Switcher & Discount Toggle */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <div className="inline-flex items-center p-1.5 rounded-2xl glass-nav">
            <button
              onClick={() => setCurrency('FCFA')}
              className={`px-5 py-2 rounded-xl text-xs font-bold transition-all ${
                currency === 'FCFA'
                  ? 'bg-primary text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              🇨🇲 Central Africa (FCFA / XAF)
            </button>
            <button
              onClick={() => setCurrency('USD')}
              className={`px-5 py-2 rounded-xl text-xs font-bold transition-all ${
                currency === 'USD'
                  ? 'bg-primary text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              🌍 International (USD $)
            </button>
          </div>

          <button
            onClick={() => setApplyFirstTimeDiscount(!applyFirstTimeDiscount)}
            className={`px-4 py-2.5 rounded-2xl text-xs font-bold border transition-all flex items-center gap-1.5 ${
              applyFirstTimeDiscount
                ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-600 dark:text-emerald-400'
                : 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-white/10 text-slate-500'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>20% First-Time Discount: {applyFirstTimeDiscount ? 'ACTIVE' : 'OFF'}</span>
          </button>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        {plans.map((plan, idx) => {
          const original = currency === 'FCFA' ? plan.originalPriceFCFA : plan.originalPriceUSD;
          const discounted = currency === 'FCFA' ? plan.discountedPriceFCFA : plan.discountedPriceUSD;
          const currentPrice = applyFirstTimeDiscount ? discounted : original;

          return (
            <GlassCard
              key={idx}
              glow={plan.highlight}
              className={`flex flex-col justify-between relative ${
                plan.highlight ? 'ring-2 ring-accent' : ''
              }`}
            >
              {plan.badge && (
                <div className="absolute top-0 right-8 -translate-y-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-emerald-500 to-accent text-slate-950 font-black text-[10px] uppercase tracking-wider shadow-md">
                  {plan.badge}
                </div>
              )}

              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
                  {plan.tagline}
                </p>

                <div className="mb-6 pb-6 border-b border-slate-200 dark:border-white/5">
                  {applyFirstTimeDiscount && (
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm line-through text-slate-400 font-mono font-medium">
                        {original}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-[10px] font-extrabold uppercase">
                        Save 20%
                      </span>
                    </div>
                  )}
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-mono">
                      {currentPrice}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      /{plan.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-300">
                      <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2">
                <button
                  onClick={() => setRoute('contact')}
                  className={`w-full py-3.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                    plan.highlight
                      ? 'bg-primary hover:bg-primary-hover text-white shadow-lg shadow-blue-500/25'
                      : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-800 dark:text-slate-200'
                  }`}
                >
                  <span>{plan.cta}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <a
                  href={`https://wa.me/237651094432?text=${encodeURIComponent(`Hello Amuntum Royce, I want to claim the 20% discount on the ${plan.name} package.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 rounded-xl border border-emerald-500/30 hover:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Book via WhatsApp (+237 651 094 432)</span>
                </a>
              </div>
            </GlassCard>
          );
        })}
      </div>

      {/* Local Payment Details with Phone Number */}
      <div>
        <div className="text-center max-w-xl mx-auto mb-8">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
            Accepted Local & Global Payment Channels
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            MTN Mobile Money transfers accepted directly to official business number.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {paymentOptions.map((opt, i) => (
            <GlassCard key={i} className="p-5 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-accent block mb-1">{opt.tag}</span>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">{opt.title}</h4>
                <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800/80 font-mono text-xs font-bold text-primary dark:text-accent mb-2">
                  {opt.number}
                </div>
                <div className="text-[11px] text-slate-500 mb-2 font-medium">Account: {opt.account}</div>
                <p className="text-xs text-slate-500 dark:text-slate-400">{opt.desc}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* Interactive Project Cost Estimator */}
      <GlassCard className="max-w-4xl mx-auto p-8 sm:p-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
            <Calculator className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Instant Scope Estimator (with 20% Discount)
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Customize parameters to see your live estimated investment.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div>
            <label className="block text-xs font-bold uppercase text-slate-500 mb-2">Platform Scope</label>
            <select
              value={platformType}
              onChange={(e) => setPlatformType(e.target.value)}
              className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-white/10 text-xs font-medium text-slate-900 dark:text-white"
            >
              <option value="starter">Company Website (175k FCFA base)</option>
              <option value="ecommerce">E-Commerce & MoMo Store (480k FCFA base)</option>
              <option value="custom_saas">Custom Web Portal / SaaS (950k FCFA base)</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-slate-500 mb-2">MoMo & Orange Money</label>
            <select
              value={hasMobileMoney ? 'yes' : 'no'}
              onChange={(e) => setHasMobileMoney(e.target.value === 'yes')}
              className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-white/10 text-xs font-medium text-slate-900 dark:text-white"
            >
              <option value="yes">Include MoMo & Orange Money API (+65,000 FCFA)</option>
              <option value="no">Standard Invoicing Only</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-slate-500 mb-2">Native Mobile App (Flutter)</label>
            <select
              value={hasMobileApp ? 'yes' : 'no'}
              onChange={(e) => setHasMobileApp(e.target.value === 'yes')}
              className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-white/10 text-xs font-medium text-slate-900 dark:text-white"
            >
              <option value="no">Web Version Only</option>
              <option value="yes">Add iOS & Android App (+850,000 FCFA)</option>
            </select>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs uppercase font-semibold text-slate-500">Calculated Scope</span>
              {applyFirstTimeDiscount && (
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold">
                  20% OFF FIRST PROJECT APPLIED
                </span>
              )}
            </div>
            <span className="text-3xl font-extrabold font-mono text-primary">
              {calculateEstimate()}
            </span>
            <span className="text-xs text-slate-400 block mt-0.5">Average delivery timeline: 2 to 4 weeks</span>
          </div>
          <div className="flex gap-2 w-full sm:w-auto">
            <button
              onClick={() => setRoute('contact')}
              className="flex-1 sm:flex-none px-6 py-3 rounded-xl bg-primary text-white text-xs font-semibold hover:bg-primary-hover shadow-md transition-all text-center"
            >
              Lock In 20% Discount
            </button>
            <a
              href={`https://wa.me/237651094432?text=${encodeURIComponent(`Hello Amuntum Royce, I calculated an estimate of ${calculateEstimate()} for my project and would like to claim the 20% discount.`)}`}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center transition-colors"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
            </a>
          </div>
        </div>
      </GlassCard>

    </div>
  );
};
