import React, { useState, useEffect } from 'react';
import { GlassCard } from '../components/GlassCard';
import { api } from '../services/api';
import { 
  TrendingUp, Users, DollarSign, Activity, 
  Search, Filter, Download, ArrowUpRight, 
  CheckCircle2, Clock, ShieldAlert, Sparkles, RefreshCw, Mail
} from 'lucide-react';

export const AdminDashboardPage = () => {
  const [stats, setStats] = useState({
    pipelineValue: '18,500,000 FCFA',
    pipelineGrowth: '+24.5%',
    activeLeadsCount: 16,
    activeProjectsCount: 8,
    realizedRevenue: '6,200,000 FCFA',
    targetRevenue: '10,000,000 FCFA',
  });

  const [leads, setLeads] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    setLoading(true);
    try {
      const statsData = await api.getAdminStats();
      const leadsData = await api.getLeads();
      if (statsData) setStats(statsData);
      if (leadsData) setLeads(leadsData);
    } catch (err) {
      console.error('Error fetching admin data:', err);
    } finally {
      setLoading(false);
    }
  };

  const filteredLeads = leads.filter(l => 
    (l.name || l.fullName || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
    (l.company || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
    (l.service || (Array.isArray(l.services) ? l.services.join(' ') : '') || '').toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      
      {/* Dashboard Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-white/5">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-mono uppercase text-slate-500 tracking-wider">
              Royce Internal Control Tower • Bamenda, Cameroon
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
            Executive Portal — Amuntum Royce Afegnui
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Database: Cloud Firestore <code className="text-primary font-mono font-bold">Royces-Digital-Solutions</code> • amuntumroyce@gmail.com
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={loadDashboardData}
            className="p-2.5 rounded-xl border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-semibold flex items-center gap-1.5 transition-colors"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
            <span>Sync Live Leads</span>
          </button>
          <button
            onClick={() => alert('Exporting all leads and client invoices to CSV...')}
            className="px-4 py-2.5 rounded-xl bg-primary text-white text-xs font-semibold hover:bg-primary-hover flex items-center gap-1.5 shadow-sm"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export Pipeline</span>
          </button>
        </div>
      </div>

      {/* KPI Summary Bento */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <GlassCard className="p-6">
          <div className="flex items-center justify-between text-slate-500 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider">Pipeline Value</span>
            <DollarSign className="w-4 h-4 text-emerald-500" />
          </div>
          <div className="text-2xl font-extrabold font-mono text-slate-900 dark:text-white">
            {stats.pipelineValue || '18,500,000 FCFA'}
          </div>
          <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-500 mt-2">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>{stats.pipelineGrowth || '+24.5%'} this month</span>
          </div>
        </GlassCard>

        <GlassCard className="p-6">
          <div className="flex items-center justify-between text-slate-500 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider">Active Client Inquiries</span>
            <Users className="w-4 h-4 text-primary" />
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold font-mono text-slate-900 dark:text-white">
            {stats.activeLeadsCount || 16}
          </div>
          <div className="text-[11px] text-slate-500 mt-2 flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-amber-500" />
            <span>3 new briefs awaiting review</span>
          </div>
        </GlassCard>

        <GlassCard className="p-6">
          <div className="flex items-center justify-between text-slate-500 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider">Active Sprints</span>
            <Activity className="w-4 h-4 text-accent" />
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold font-mono text-slate-900 dark:text-white">
            {stats.activeProjectsCount || 8}
          </div>
          <div className="text-[11px] text-emerald-500 font-semibold mt-2 flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>100% on delivery schedule</span>
          </div>
        </GlassCard>

        <GlassCard className="p-6">
          <div className="flex items-center justify-between text-slate-500 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider">Realized Revenue</span>
            <Sparkles className="w-4 h-4 text-purple-500" />
          </div>
          <div className="text-2xl font-extrabold font-mono text-slate-900 dark:text-white">
            {stats.realizedRevenue || '6,200,000 FCFA'}
          </div>
          <div className="text-[11px] text-slate-500 mt-2">
            Monthly Target: <span className="font-mono font-semibold">{stats.targetRevenue || '10M FCFA'}</span>
          </div>
        </GlassCard>

      </div>

      {/* CRM Pipeline & Leads Management Table */}
      <GlassCard className="p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Lead Intake & Client CRM
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Synced with Cloud Firestore collection <code className="font-mono text-primary font-bold">/leads</code>.
            </p>
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search leads, companies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-white/10 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-200 dark:border-white/10 text-slate-400 font-semibold uppercase tracking-wider">
                <th className="pb-3 pl-2">Client / Email</th>
                <th className="pb-3">Company</th>
                <th className="pb-3">Requested Scope</th>
                <th className="pb-3">Budget</th>
                <th className="pb-3">Status</th>
                <th className="pb-3 text-right pr-2">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-white/5">
              {filteredLeads.map((lead, idx) => {
                const name = lead.name || lead.fullName || 'Client';
                const email = lead.email || lead.workEmail || 'No email';
                const company = lead.company || 'Direct';
                const service = lead.service || (Array.isArray(lead.services) ? lead.services.join(', ') : 'Digital Solution');
                const budget = lead.budget || 'Custom';
                const status = lead.status || 'New';

                return (
                  <tr key={lead.id || idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                    <td className="py-4 pl-2">
                      <span className="font-bold text-slate-900 dark:text-white block">{name}</span>
                      <span className="text-slate-500 text-[11px]">{email}</span>
                    </td>
                    <td className="py-4 font-semibold text-slate-800 dark:text-slate-200">
                      {company}
                    </td>
                    <td className="py-4">
                      <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium">
                        {service}
                      </span>
                    </td>
                    <td className="py-4 font-mono font-bold text-accent dark:text-accent-glow">
                      {budget}
                    </td>
                    <td className="py-4">
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                        status === 'Contract Signed'
                          ? 'bg-emerald-500/15 text-emerald-500'
                          : status === 'Proposal Sent'
                          ? 'bg-primary/15 text-primary'
                          : status === 'Intro Call Booked'
                          ? 'bg-accent/15 text-accent'
                          : 'bg-amber-500/15 text-amber-500'
                      }`}>
                        {status}
                      </span>
                    </td>
                    <td className="py-4 text-right pr-2">
                      <button 
                        onClick={() => alert(`Opening email client to reply to ${name} (${email}) with pre-filled proposal template.`)}
                        className="p-1.5 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 hover:text-primary transition-colors"
                        title="Send Proposal"
                      >
                        <Mail className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </GlassCard>

      {/* Email Messaging Suite Quick Reference */}
      <GlassCard className="p-6">
        <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
          Automated Client Email Engine & Notification Suite
        </h3>
        <p className="text-xs text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
          Integrated in <code className="font-mono text-primary">/backend/services/emailService.js</code>. Automatically dispatches branded HTML emails with your signature:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/5">
            <span className="font-bold text-emerald-500 block mb-1">1. Inbound Lead Receipt</span>
            <span className="text-slate-500">Sent to client immediately upon form submission, confirming 4-hr turnaround from Amuntum Royce Afegnui.</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/5">
            <span className="font-bold text-primary block mb-1">2. Admin Alert</span>
            <span className="text-slate-500">Instant notification dispatched to <b>amuntumroyce@gmail.com</b> with client brief, WhatsApp & budget.</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/5">
            <span className="font-bold text-accent block mb-1">3. Proposal & Invoicing</span>
            <span className="text-slate-500">Dual FCFA and USD invoice template with MTN Mobile Money, Orange Money & Wire instructions.</span>
          </div>
        </div>
      </GlassCard>

    </div>
  );
};
