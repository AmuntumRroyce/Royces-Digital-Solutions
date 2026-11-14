import React, { useState } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { Menu, X, ArrowUpRight, ShieldCheck, Sparkles } from 'lucide-react';

export const Navbar = ({ currentRoute, setRoute, theme, toggleTheme }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' },
    { id: 'admin', label: 'Dashboard', badge: 'SaaS' },
  ];

  const handleNav = (id) => {
    setRoute(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-4 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand Monogram & Name */}
        <button
          onClick={() => handleNav('home')}
          className="flex items-center gap-3 group text-left focus:outline-none"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-accent flex items-center justify-center shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
            <span className="font-extrabold text-white text-lg tracking-tighter">R</span>
          </div>
          <div>
            <span className="text-base font-bold tracking-tight text-slate-900 dark:text-white block group-hover:text-primary transition-colors">
              Royce Digital
            </span>
            <span className="text-[10px] tracking-wider uppercase font-semibold text-slate-500 dark:text-slate-400 block -mt-1">
              Solutions
            </span>
          </div>
        </button>

        {/* Center Floating Glass Capsule Navigation (Desktop) */}
        <nav className="hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full glass-nav shadow-glass-light dark:shadow-glass-dark">
          {navLinks.map((link) => {
            const isActive = currentRoute === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className={`relative px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                  isActive
                    ? 'text-white bg-primary shadow-sm'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
                }`}
              >
                {link.label}
                {link.badge && (
                  <span className="ml-1.5 px-1.5 py-0.2 text-[9px] font-bold rounded-full bg-accent/20 text-accent">
                    {link.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Action Utilities */}
        <div className="hidden lg:flex items-center gap-3">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          
          <button
            onClick={() => handleNav('contact')}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-primary hover:bg-primary-hover shadow-md shadow-blue-600/20 hover:shadow-blue-600/35 hover:-translate-y-0.5 transition-all"
          >
            <span>Book Strategy Call</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Menu & Theme Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 p-4 rounded-2xl glass-nav shadow-2xl border border-slate-200 dark:border-white/10 flex flex-col gap-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium text-left ${
                currentRoute === link.id
                  ? 'bg-primary text-white'
                  : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/50'
              }`}
            >
              <span>{link.label}</span>
              {link.badge && (
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-accent/20 text-accent font-bold">
                  {link.badge}
                </span>
              )}
            </button>
          ))}
          <button
            onClick={() => handleNav('contact')}
            className="mt-2 w-full py-3 rounded-xl bg-primary text-white text-xs font-semibold text-center"
          >
            Start Your Project
          </button>
        </div>
      )}
    </header>
  );
};
