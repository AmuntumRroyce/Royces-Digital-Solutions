import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Sparkles, MessageCircle, ArrowRight } from 'lucide-react';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { PricingPage } from './pages/PricingPage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { BlogPage } from './pages/BlogPage';
import { ContactPage } from './pages/ContactPage';
import { AdminDashboardPage } from './pages/AdminDashboardPage';

export function App() {
  const [currentRoute, setCurrentRoute] = useState('home');
  const [theme, setTheme] = useState('dark');

  // Initialize theme from system or localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('royce_theme') || 'dark';
    setTheme(savedTheme);
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('royce_theme', newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  // Render active page view
  const renderPage = () => {
    switch (currentRoute) {
      case 'home':
        return <HomePage setRoute={setCurrentRoute} />;
      case 'about':
        return <AboutPage setRoute={setCurrentRoute} />;
      case 'services':
        return <ServicesPage setRoute={setCurrentRoute} />;
      case 'portfolio':
        return <PortfolioPage setRoute={setCurrentRoute} />;
      case 'pricing':
        return <PricingPage setRoute={setCurrentRoute} />;
      case 'testimonials':
        return <TestimonialsPage setRoute={setCurrentRoute} />;
      case 'blog':
        return <BlogPage setRoute={setCurrentRoute} />;
      case 'contact':
        return <ContactPage />;
      case 'admin':
        return <AdminDashboardPage />;
      default:
        return <HomePage setRoute={setCurrentRoute} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-canvas-light dark:bg-canvas-dark text-slate-900 dark:text-slate-100 transition-colors duration-300">
      
      {/* 20% FIRST TIME DISCOUNT & WHATSAPP ANNOUNCEMENT BANNER */}
      <div className="bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-gradient text-white text-xs font-semibold py-2 px-4 text-center flex flex-wrap items-center justify-center gap-x-4 gap-y-1 z-50">
        <div className="flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5" />
          <span>🎉 <strong>20% First-Time Client Discount</strong> Active on All Packages!</span>
        </div>
        <span className="hidden sm:inline opacity-60">•</span>
        <div className="flex items-center gap-1.5">
          <MessageCircle className="w-3.5 h-3.5 text-emerald-200" />
          <span>MTN MoMo & Direct WhatsApp:</span>
          <a
            href="https://wa.me/237651094432?text=Hello%20Amuntum%20Royce,%20I'd%20like%20to%20claim%20my%2020%25%20first-time%20discount%20for%20my%20project."
            target="_blank"
            rel="noreferrer"
            className="underline font-bold hover:text-emerald-100 transition-colors"
          >
            +237 651 094 432
          </a>
        </div>
        <button
          onClick={() => {
            setCurrentRoute('pricing');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="ml-2 px-2 py-0.5 rounded bg-black/20 hover:bg-black/30 text-[10px] uppercase font-bold tracking-wider inline-flex items-center gap-1 transition-colors"
        >
          <span>Claim 20% Off</span>
          <ArrowRight className="w-2.5 h-2.5" />
        </button>
      </div>

      <Navbar
        currentRoute={currentRoute}
        setRoute={setCurrentRoute}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      
      <main className="flex-1">
        {renderPage()}
      </main>

      <Footer setRoute={setCurrentRoute} />

      {/* FLOATING WHATSAPP CLICK-TO-CHAT BUTTON */}
      <WhatsAppButton />
    </div>
  );
}

export default App;
