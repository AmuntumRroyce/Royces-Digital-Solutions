import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';

export const WhatsAppButton = () => {
  const phoneNumber = "237651094432";
  const displayPhone = "+237 651 094 432";
  const defaultMessage = encodeURIComponent("Hello Amuntum Royce, I am interested in building a digital solution with Royce Digital Solutions. I would like to discuss my project.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 group">
      {/* Tooltip on hover */}
      <div className="hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity duration-200 px-3 py-1.5 rounded-xl bg-slate-900/90 text-white text-xs font-semibold shadow-lg border border-white/10 backdrop-blur-md pointer-events-none">
        Chat with Amuntum Royce ({displayPhone})
      </div>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Amuntum Royce on WhatsApp"
        className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs shadow-xl shadow-emerald-500/30 hover:scale-105 active:scale-95 transition-all duration-200"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="hidden sm:inline">WhatsApp Royce</span>
        <span className="flex h-2 w-2 rounded-full bg-white animate-pulse" />
      </a>
    </div>
  );
};
