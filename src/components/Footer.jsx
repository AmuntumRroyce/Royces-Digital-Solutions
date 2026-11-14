import React from 'react';
import { ArrowUpRight, Github, Twitter, Linkedin, Heart, Shield, MapPin, Mail, MessageCircle, Phone } from 'lucide-react';

export const Footer = ({ setRoute }) => {
  return (
    <footer className="border-t border-slate-200/80 dark:border-white/5 bg-slate-50 dark:bg-slate-950/50 pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-200 dark:border-white/5">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-white font-bold text-sm">
                R
              </div>
              <span className="font-bold text-lg text-slate-900 dark:text-white">
                Royce Digital Solutions
              </span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-sm leading-relaxed">
              Founded & led by <strong>Amuntum Royce Afegnui</strong>. Engineering modern high-speed websites, mobile apps, and automated digital systems for businesses across Cameroon and worldwide.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                All Systems Operational • Direct Architecture from Bamenda, Cameroon
              </span>
            </div>
          </div>

          {/* Column 1: Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-600 dark:text-slate-400">
              <li><button onClick={() => setRoute('home')} className="hover:text-primary transition-colors">Home</button></li>
              <li><button onClick={() => setRoute('about')} className="hover:text-primary transition-colors">About Amuntum Royce</button></li>
              <li><button onClick={() => setRoute('portfolio')} className="hover:text-primary transition-colors">Case Studies</button></li>
              <li><button onClick={() => setRoute('pricing')} className="hover:text-primary transition-colors">Pricing & 20% Discount</button></li>
              <li><button onClick={() => setRoute('testimonials')} className="hover:text-primary transition-colors">Client Reviews</button></li>
            </ul>
          </div>

          {/* Column 2: Capabilities */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200 mb-4">
              Capabilities
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-600 dark:text-slate-400">
              <li><button onClick={() => setRoute('services')} className="hover:text-primary transition-colors">Website Development</button></li>
              <li><button onClick={() => setRoute('services')} className="hover:text-primary transition-colors">Mobile Apps (Flutter)</button></li>
              <li><button onClick={() => setRoute('services')} className="hover:text-primary transition-colors">E-Commerce & MoMo Payments</button></li>
              <li><button onClick={() => setRoute('services')} className="hover:text-primary transition-colors">Brand Identity & Logos</button></li>
              <li><button onClick={() => setRoute('services')} className="hover:text-primary transition-colors">AI & Workflow Automation</button></li>
              <li><button onClick={() => setRoute('services')} className="hover:text-primary transition-colors">Cloud & Firebase Systems</button></li>
            </ul>
          </div>

          {/* Column 3: Contact & Direct Line */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200 mb-4">
              Headquarters & Contact
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-3 flex items-start gap-1.5">
              <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <span>Commercial Ave, Bamenda, Cameroon</span>
            </p>
            <div className="space-y-2 text-xs font-medium text-slate-600 dark:text-slate-400">
              <a
                href="https://wa.me/237651094432?text=Hello%20Amuntum%20Royce,%20I'd%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold hover:underline"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp: +237 651 094 432</span>
              </a>
              <div className="flex items-center gap-1.5">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span>MoMo Transfers: +237 651 094 432</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href="mailto:amuntumroyce@gmail.com" className="hover:underline">amuntumroyce@gmail.com</a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>© {new Date().getFullYear()} Royce Digital Solutions (Amuntum Royce Afegnui). All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button onClick={() => setRoute('admin')} className="hover:text-accent font-semibold transition-colors">
              Agency Admin Portal
            </button>
            <span className="hover:text-slate-700 dark:hover:text-slate-300 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-700 dark:hover:text-slate-300 cursor-pointer">Terms of Service</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
