import React from 'react';
import { ContactForm } from '../components/ContactForm';
import { GlassCard } from '../components/GlassCard';
import { Clock, ShieldCheck, Mail, MapPin, Calendar, CheckCircle2, Phone, MessageCircle, Tag } from 'lucide-react';

export const ContactPage = () => {
  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Page Title */}
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-bold mb-3">
          <Tag className="w-3.5 h-3.5" />
          <span>20% First-Time Client Discount Currently Active</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
          Let’s Build Something Powerful.
        </h1>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          Based in <strong>Bamenda, Cameroon</strong>, serving businesses and ambitious entrepreneurs across Cameroon, Africa, and internationally.
        </p>
      </div>

      {/* Dual Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Column: Direct Connection & Guarantees */}
        <div className="lg:col-span-5 space-y-6">
          <GlassCard className="p-6 sm:p-8 space-y-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Direct Access to Amuntum Royce Afegnui
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500 shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                    Fast 4-Hour Response Guarantee
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                    Every inquiry is reviewed directly by Amuntum Royce Afegnui, with an initial architectural roadmap sent straight to your inbox.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                    Mobile Money & Direct Line
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                    MTN MoMo transfers & official business calls: <strong className="text-slate-900 dark:text-white font-mono">+237 651 094 432</strong>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                    Transparent Scoping & 20% Off
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                    Clear sprint deliverables in FCFA and USD with a 20% discount applied to your inaugural project.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-200 dark:border-white/5 space-y-3 text-xs text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href="mailto:amuntumroyce@gmail.com" className="hover:text-primary font-medium">amuntumroyce@gmail.com</a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>Commercial Ave, Bamenda, North West Region, Cameroon</span>
              </div>
            </div>
          </GlassCard>

          {/* Quick WhatsApp Card */}
          <GlassCard className="p-6 text-center bg-gradient-to-tr from-emerald-500/10 via-primary/10 to-accent/10 border-emerald-500/30">
            <MessageCircle className="w-8 h-8 text-emerald-500 mx-auto mb-3" />
            <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1">
              Prefer an Instant WhatsApp Chat?
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 mb-4">
              Connect directly with Amuntum Royce on WhatsApp at <b>+237 651 094 432</b> to discuss requirements in real-time.
            </p>
            <a
              href="https://wa.me/237651094432?text=Hello%20Amuntum%20Royce,%20I%20would%20like%20to%20discuss%20a%20digital%20project%20and%20claim%20my%2020%25%20first-time%20discount."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold shadow-lg shadow-emerald-500/25 transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Open WhatsApp Chat (+237 651 094 432)</span>
            </a>
          </GlassCard>
        </div>

        {/* Right Column: Lead Form Connected to Firebase & Backend */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>

      </div>

    </div>
  );
};
