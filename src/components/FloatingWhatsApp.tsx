import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { getWhatsAppUrl, BRAND_CONFIG } from '../config/brandConfig.ts';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Friendly Tooltip / Chat Prompt (Dismissible) */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white px-3.5 py-2 rounded-xl shadow-xl border border-slate-200 text-xs text-slate-800 animate-fade-in">
          <span>Need a design quote? <strong>Chat on WhatsApp</strong></span>
          <button
            onClick={() => setShowTooltip(false)}
            aria-label="Dismiss chat tip"
            className="text-slate-400 hover:text-slate-600 p-0.5 ml-1 cursor-pointer"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat directly on WhatsApp"
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] active:scale-90 text-white flex items-center justify-center shadow-2xl hover:shadow-emerald-500/30 transition-all duration-300 relative group"
      >
        <MessageCircle className="w-7 h-7 fill-white" />

        {/* Pulse ripple effect */}
        <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none opacity-40" />

        {/* Floating badge label on hover */}
        <span className="absolute right-full mr-3 bg-[#080B63] text-white text-[11px] font-bold px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-md">
          WhatsApp: {BRAND_CONFIG.phoneDisplay}
        </span>
      </a>
    </div>
  );
};
