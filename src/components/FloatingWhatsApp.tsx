import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { getWhatsAppUrl, BRAND_CONFIG } from '../config/brandConfig.ts';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-40 flex items-center gap-2.5 sm:gap-3">
      {/* Friendly Tooltip / Chat Prompt (Dismissible) */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.95 }}
            className="hidden sm:flex items-center gap-2 bg-white dark:bg-[#0B0F3E] px-3.5 py-2 rounded-xl shadow-xl border border-slate-200 dark:border-white/10 text-xs text-slate-800 dark:text-slate-200"
          >
            <span>Need a quick quote? <strong>Chat on WhatsApp</strong></span>
            <button
              onClick={() => setShowTooltip(false)}
              aria-label="Dismiss chat tip"
              className="text-slate-400 hover:text-slate-600 dark:hover:text-white p-0.5 ml-1 cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <motion.a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat directly on WhatsApp"
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.92 }}
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-2xl hover:shadow-emerald-500/30 transition-shadow relative group"
      >
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-white" />

        {/* Pulse ripple effect */}
        <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none opacity-40" />

        {/* Floating badge label on hover (desktop) */}
        <span className="absolute right-full mr-3 bg-[#080B63] dark:bg-[#1119A8] text-white text-[11px] font-bold px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-md hidden sm:block">
          WhatsApp: {BRAND_CONFIG.phoneDisplay}
        </span>
      </motion.a>
    </div>
  );
};
