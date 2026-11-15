/**
 * Centralized API service for communicating with the Node.js / Express backend
 * or directly with Firebase when serverless.
 */

const API_BASE = `${(import.meta.env.VITE_API_URL || '').replace(/\/+$/, '')}/api`;

export const api = {
  // Wait for the backend response so the form can report the actual submission result.
  submitLead: async (leadData) => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000);

    try {
      const res = await fetch(`${API_BASE}/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(leadData),
        signal: controller.signal,
      });

      let result;
      try {
        result = await res.json();
      } catch {
        throw new Error('The inquiry server returned an invalid response. Check the backend URL configuration.');
      }
      if (!res.ok) {
        const error = new Error(result.message || result.error || `Request failed (${res.status})`);
        error.leadReceived = result.leadReceived === true;
        throw error;
      }

      return result;
    } catch (err) {
      if (err.name === 'AbortError') {
        throw new Error('The server took too long to respond. Please try again.');
      }
      throw err;
    } finally {
      clearTimeout(timeoutId);
    }
  },

  // Fetch admin stats for Dashboard
  getAdminStats: async () => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 1500);

    try {
      const res = await fetch(`${API_BASE}/admin/stats`, { signal: controller.signal });
      clearTimeout(timeoutId);
      if (!res.ok) throw new Error('API offline');
      return await res.json();
    } catch (err) {
      clearTimeout(timeoutId);
      return {
        pipelineValue: '18,500,000 FCFA',
        pipelineGrowth: '+24.5%',
        activeLeadsCount: 16,
        activeProjectsCount: 8,
        realizedRevenue: '6,200,000 FCFA',
        targetRevenue: '10,000,000 FCFA',
      };
    }
  },

  // Fetch leads pipeline for Dashboard Kanban / Table
  getLeads: async () => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 1500);

    try {
      const res = await fetch(`${API_BASE}/leads`, { signal: controller.signal });
      clearTimeout(timeoutId);
      if (!res.ok) throw new Error('API offline');
      return await res.json();
    } catch (err) {
      clearTimeout(timeoutId);
      
      // Check cached leads first
      try {
        const cached = JSON.parse(localStorage.getItem('royce_cached_leads') || '[]');
        if (cached.length > 0) return cached;
      } catch (e) {}

      return [
        { id: 'LD-201', name: 'Nkemasong Brenda', company: 'Limbe Agro Ventures', email: 'brenda@limbeagro.cm', service: 'Web Applications & MoMo', budget: '450k - 850k FCFA', status: 'Proposal Sent', date: 'Just now' },
        { id: 'LD-202', name: 'Fru Emmanuel', company: 'Grassfield Logistics', email: 'fru@grassfield.cm', service: 'Mobile Apps (iOS/Android)', budget: '1.2M - 2.5M FCFA', status: 'Intro Call Booked', date: '2 hours ago' },
        { id: 'LD-203', name: 'Tchouassi Alain', company: 'Douala FinTech Hub', email: 'alain@doualafin.cm', service: 'Cloud Solutions & DevOps', budget: '2.5M+ FCFA', status: 'New Inquiry', date: 'Yesterday' },
        { id: 'LD-204', name: 'Alexander Wright', company: 'Apex Global UK', email: 'a.wright@apexbio.io', service: 'Website Development', budget: '250k - 500k FCFA ($500)', status: 'Contract Signed', date: '3 days ago' },
      ];
    }
  }
};
