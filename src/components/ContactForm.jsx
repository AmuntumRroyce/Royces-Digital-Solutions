import React, { useState } from 'react';
import { api } from '../services/api';
import { CheckCircle2, Loader2, Send, ShieldCheck, MessageCircle } from 'lucide-react';

export const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submissionError, setSubmissionError] = useState('');
  const [emailWarning, setEmailWarning] = useState('');
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
    setSubmissionError('');
    setEmailWarning('');

    const leadPayload = {
      ...formData,
      services,
      budget,
      status: 'new',
      timestamp: new Date().toISOString(),
      location: 'Cameroon / Global',
    };

    try {
      await api.submitLead(leadPayload);
      setSubmitted(true);
    } catch (err) {
      if (err.leadReceived) {
        setEmailWarning('Your inquiry was received, but the email notification could not be sent. Please contact us directly if you need confirmation.');
        setSubmitted(true);
      } else {
        setSubmissionError(err.message || 'We could not submit your inquiry. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    const whatsappText = encodeURIComponent(
      `Hello Amuntum Royce, I just submitted an inquiry on your website.\n\nName: ${formData.fullName}\nEmail: ${formData.workEmail}\nProject: ${formData.message || 'Digital Project'}\nBudget: ${budget}`
    );

    return (
      <div className="glass-card rounded-2xl p-8 sm:p-12 text-center animate-fadeIn">
        <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8 text-emerald-500" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
          {emailWarning ? 'Inquiry Received' : 'Inquiry Successfully Submitted!'}
        </h3>
        <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm max-w-md mx-auto leading-relaxed">
          Thank you, <span className="font-semibold text-primary">{formData.fullName || 'Partner'}</span>. Your inquiry was received.
        </p>
        {emailWarning ? (
          <p role="alert" className="mt-3 text-sm text-amber-700 dark:text-amber-400">{emailWarning}</p>
        ) : (
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            A confirmation email was accepted for delivery to <strong>{formData.workEmail}</strong>. Please check your spam folder if it is not in your inbox.
          </p>
        )}

        {/* 20% Discount Confirmation */}
        <div className="my-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 max-w-sm mx-auto text-xs text-emerald-600 dark:text-emerald-400 font-bold">
          🎉 20% First-Time Client Discount Applied to Your Project
        </div>

        {/* WhatsApp Fast-Track Button */}
        <div className="space-y-3 max-w-sm mx-auto">
          <a
            href={`https://wa.me/237651094432?text=${whatsappText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25 transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Fast-Track on WhatsApp (+237 651 094 432)</span>
          </a>

          <button
            onClick={() => {
              setSubmitted(false);
              setEmailWarning('');
              setFormData({ fullName: '', workEmail: '', phone: '', company: '', message: '' });
            }}
            className="w-full py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold hover:bg-slate-200 transition-colors"
          >
            Submit Another Request
          </button>
        </div>
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
        <div className="grid grid-cols-2 gap-2.5">
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
            placeholder="e.g. Mary Jean"
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
            placeholder="maryjean@gmail.com"
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

      {submissionError && (
        <p role="alert" className="mb-4 text-sm text-red-600 dark:text-red-400">
          {submissionError}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-primary to-accent hover:opacity-95 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 transition-all disabled:opacity-50"
      >
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Submitting Inquiry...</span>
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
