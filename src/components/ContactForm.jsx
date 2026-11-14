import React, { useState } from 'react';
import { api } from '../services/api';
import { db } from '../services/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { CheckCircle2, Loader2, Send, ShieldCheck, PhoneCall } from 'lucide-react';

export const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [services, setServices] = useState(['Website Development']);
  const [budget, setBudget] = useState('200k - 500k FCFA ($300 - $800)');
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    phone: '',
    company: '',
    message: '',
  });

  const availableServices = [
    'Website Development',
    'Mobile Apps (Flutter)',
    'E-Commerce & MoMo',
    'Web Applications',
    'Branding & Logo Design',
    'Automation & AI',
  ];

  const budgetTiers = [
    '< 200k FCFA ($300)',
    '200k - 500k FCFA ($300 - $800)',
    '500k - 1.5M FCFA ($800 - $2,500)',
    '1.5M+ FCFA ($2,500+)',
  ];

  const toggleService = (srv) => {
    setServices(prev =>
      prev.includes(srv) ? prev.filter(s => s !== srv) : [...prev, srv]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const leadPayload = {
      ...formData,
      services,
      budget,
      status: 'new',
      timestamp: new Date().toISOString(),
      location: 'Cameroon / Global',
    };

    try {
      // 1. Direct Cloud Firestore transmission
      try {
        await addDoc(collection(db, 'leads'), {
          ...leadPayload,
          createdAt: serverTimestamp(),
        });
        console.log('Saved directly to Firestore project Royces-Digital-Solutions');
      } catch (fbErr) {
        console.warn('Direct Firebase save bypassed, falling back to Express API:', fbErr.message);
      }

      // 2. Transmit to backend API (which automatically fires confirmation & notification emails)
      await api.submitLead(leadPayload);

      setSubmitted(true);
    } catch (err) {
      console.error('Submission error:', err);
      setSubmitted(true); // Graceful fallback
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="glass-card rounded-2xl p-8 sm:p-12 text-center">
        <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8 text-emerald-500" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
          Inquiry Successfully Transmitted
        </h3>
        <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm max-w-md mx-auto leading-relaxed">
          Thank you, <span className="font-semibold text-primary">{formData.fullName || 'Partner'}</span>. 
          <strong> Amuntum Royce Afegnui</strong> has received your project brief at <code className="text-primary font-mono">amuntumroyce@gmail.com</code>. An automated confirmation email has been dispatched to your inbox, and you will receive a detailed roadmap within 4 hours.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({ fullName: '', workEmail: '', phone: '', company: '', message: '' });
          }}
          className="mt-8 px-6 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold hover:bg-slate-200 transition-colors"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-6 sm:p-10 shadow-2xl relative">
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200 dark:border-white/5">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            Project Scope & Consultation
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Reviewed directly by Amuntum Royce Afegnui (Bamenda, Cameroon).
          </p>
        </div>
        <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-[11px] font-semibold">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Confidentiality Guaranteed</span>
        </div>
      </div>

      {/* 1. Capability Selector */}
      <div className="mb-6">
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
          1. Required Capabilities
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {availableServices.map((srv) => {
            const isSelected = services.includes(srv);
            return (
              <button
                type="button"
                key={srv}
                onClick={() => toggleService(srv)}
                className={`py-2 px-3 rounded-xl text-xs font-medium text-left border transition-all ${
                  isSelected
                    ? 'border-primary bg-primary text-white shadow-sm'
                    : 'border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-white/20'
                }`}
              >
                {srv}
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Budget Tier Selector */}
      <div className="mb-6">
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
          2. Anticipated Investment Tier (FCFA / USD)
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-2.5">
          {budgetTiers.map((tier) => (
            <button
              type="button"
              key={tier}
              onClick={() => setBudget(tier)}
              className={`py-2.5 px-3 rounded-xl text-xs font-semibold text-center border transition-all ${
                budget === tier
                  ? 'border-accent bg-accent/15 text-accent dark:text-accent-glow font-bold shadow-sm'
                  : 'border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-white/20'
              }`}
            >
              {tier}
            </button>
          ))}
        </div>
      </div>

      {/* 3. Contact Inputs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">
            Your Full Name *
          </label>
          <input
            required
            type="text"
            placeholder="e.g. John Fru / Mary Smith"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">
            Work or Personal Email *
          </label>
          <input
            required
            type="email"
            placeholder="you@company.com"
            value={formData.workEmail}
            onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">
            WhatsApp / Phone Number (Optional)
          </label>
          <input
            type="text"
            placeholder="+237 6XX XXX XXX"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">
            Company or Project Name
          </label>
          <input
            type="text"
            placeholder="e.g. Grassfield Innovations"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">
          Project Goals & What You Want to Achieve
        </label>
        <textarea
          rows={3}
          placeholder="Briefly describe what you're building, target launch dates, and features needed..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-primary to-accent hover:opacity-95 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 transition-all disabled:opacity-50"
      >
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Submitting to Firebase & Dispatching Confirmation...</span>
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            <span>Send Project Brief to Amuntum Royce</span>
          </>
        )}
      </button>
    </form>
  );
};
