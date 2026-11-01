import React from 'react';
import {
  ArrowRight,
  MessageCircle,
  CheckCircle2,
  Layers,
} from 'lucide-react';
import { motion } from 'motion/react';
import { BRAND_CONFIG, getWhatsAppUrl } from '../config/brandConfig.ts';

interface HeroProps {
  onGetStarted: () => void;
  onViewServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onGetStarted, onViewServices }) => {
  return (
    <section
      id="home"
      className="relative pt-24 pb-14 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24 overflow-hidden bg-gradient-to-b from-[#F7F7FA] via-white to-white dark:from-[#040620] dark:via-[#06082C] dark:to-[#040620] transition-colors duration-300"
    >
      {/* Subtle geometric background accents */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-[#1119A8]/5 dark:bg-[#2E3AFF]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 -ml-20 w-60 sm:w-80 h-60 sm:h-80 rounded-full bg-[#7027A5]/5 dark:bg-[#7027A5]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Split Grid: Left Copy & CTAs, Right Visual Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Headlines & Actions */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center text-left"
          >
            {/* Subtle editorial kicker without pills */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-bold tracking-wide uppercase text-[#1119A8] dark:text-blue-400 mb-3">
              <span className="w-2.5 h-0.5 bg-[#1119A8] dark:bg-blue-400" />
              <span>Full-Service Graphic Design & Branding</span>
              <span className="text-[#080B63]/30 dark:text-white/20">·</span>
              <span className="text-[#7027A5] dark:text-purple-400">Direct Client Collaboration</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-extrabold text-[#080B63] dark:text-white font-display leading-[1.12] tracking-tight text-balance mb-4">
              {BRAND_CONFIG.mainHeadline}
            </h1>

            {/* Supporting Headline */}
            <p className="text-base sm:text-lg md:text-xl font-bold text-[#1119A8] dark:text-blue-300 tracking-tight mb-4">
              {BRAND_CONFIG.supportingHeadline}
            </p>

            {/* Business Description */}
            <p className="text-sm sm:text-base md:text-lg text-slate-700 dark:text-slate-300 leading-relaxed max-w-2xl mb-8">
              {BRAND_CONFIG.businessDescription}
            </p>

            {/* Three Working Action Buttons: Get Started, View Services, WhatsApp */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-3.5 mb-8">
              {/* 1. Get Started */}
              <button
                onClick={onGetStarted}
                className="min-h-[46px] px-6 py-3 text-sm sm:text-base font-bold text-white bg-[#080B63] dark:bg-[#1119A8] hover:bg-[#1119A8] dark:hover:bg-[#2E3AFF] active:scale-95 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* 2. View Our Services */}
              <button
                onClick={onViewServices}
                className="min-h-[46px] px-5 py-3 text-sm sm:text-base font-bold text-[#080B63] dark:text-slate-200 bg-white dark:bg-white/5 hover:bg-slate-50 dark:hover:bg-white/10 border border-[#080B63]/20 dark:border-white/15 active:scale-95 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <Layers className="w-4 h-4 text-[#1119A8] dark:text-blue-400" />
                <span>View Our Services</span>
              </button>

              {/* 3. WhatsApp Direct Contact Button */}
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[46px] px-5 py-3 text-sm sm:text-base font-bold text-emerald-900 dark:text-emerald-200 bg-emerald-50 dark:bg-emerald-950/40 hover:bg-emerald-100 dark:hover:bg-emerald-900/50 border border-emerald-300 dark:border-emerald-700/60 active:scale-95 rounded-xl transition-all inline-flex items-center justify-center gap-2.5 shadow-xs"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366] fill-[#25D366]" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Quick trust cues (clean unboxed text with typographic bullet) */}
            <div className="flex flex-wrap items-center gap-x-3.5 gap-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium pt-3 border-t border-slate-200/80 dark:border-white/10">
              <span className="flex items-center gap-1.5 text-slate-800 dark:text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#1119A8] dark:text-blue-400 shrink-0" /> Print & Digital Ready
              </span>
              <span className="text-slate-300 dark:text-white/20">/</span>
              <span className="flex items-center gap-1.5 text-slate-800 dark:text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#1119A8] dark:text-blue-400 shrink-0" /> Vector Source Files
              </span>
              <span className="text-slate-300 dark:text-white/20">/</span>
              <span className="flex items-center gap-1.5 text-slate-800 dark:text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#1119A8] dark:text-blue-400 shrink-0" /> Fast Response via WhatsApp
              </span>
            </div>
          </motion.div>

          {/* Right Column: Visual Container (Clean Graphic Design Studio Showcase) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Studio / Flyer photo frame */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-white/10 bg-slate-900 group">
                <img
                  src="https://i.imgur.com/McYYkFC.jpg"
                  alt="Professional Graphic Designer Promotional Flyer & Visual Showcase"
                  referrerPolicy="no-referrer"
                  className="w-full h-80 sm:h-96 lg:h-[450px] object-cover sm:object-contain bg-slate-900 group-hover:scale-102 transition-transform duration-700"
                  onError={(e) => {
                    // Fallback to local studio showcase photo if external link is blocked
                    e.currentTarget.src = '/src/assets/images/hero_graphic_design_studio_1793561909068.jpg';
                  }}
                />

                {/* Gradient scrim at base */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080B63]/90 via-transparent to-transparent pointer-events-none" />

                {/* Floating caption at bottom of photo */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 text-white z-10">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-[11px] sm:text-xs uppercase tracking-wider text-blue-200 font-semibold">Visual Showcase</p>
                      <p className="text-sm sm:text-base font-bold leading-tight">Brand Identity & Promotional Flyer</p>
                    </div>
                    {/* Brand color swatches */}
                    <div className="flex items-center gap-1 bg-white/20 backdrop-blur-md px-2 py-1 sm:px-2.5 sm:py-1.5 rounded-lg border border-white/20 shrink-0">
                      <span className="w-3 h-3 rounded-full bg-[#080B63] border border-white/50" title="Deep Navy #080B63" />
                      <span className="w-3 h-3 rounded-full bg-[#1119A8] border border-white/50" title="Royal Blue #1119A8" />
                      <span className="w-3 h-3 rounded-full bg-[#7027A5] border border-white/50" title="Accent Purple #7027A5" />
                      <span className="w-3 h-3 rounded-full bg-[#FFFFFF] border border-slate-300" title="Pure White #FFFFFF" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 4-Item Full-Width Capability Strip Below Split */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-slate-200 dark:border-white/10 grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          <div className="flex flex-col">
            <span className="text-[11px] sm:text-xs uppercase tracking-wider font-semibold text-[#1119A8] dark:text-blue-400">Core Principle</span>
            <span className="text-sm sm:text-base lg:text-lg font-bold text-[#080B63] dark:text-white mt-0.5">Strategic Branding</span>
            <span className="text-xs text-slate-500 dark:text-slate-400 mt-1">Identities crafted with meaning, intention, and longevity</span>
          </div>

          <div className="flex flex-col">
            <span className="text-[11px] sm:text-xs uppercase tracking-wider font-semibold text-[#1119A8] dark:text-blue-400">Quality Standard</span>
            <span className="text-sm sm:text-base lg:text-lg font-bold text-[#080B63] dark:text-white mt-0.5">Print & Digital Mastery</span>
            <span className="text-xs text-slate-500 dark:text-slate-400 mt-1">CMYK color profiles, bleeds, dielines, and web RGB</span>
          </div>

          <div className="flex flex-col">
            <span className="text-[11px] sm:text-xs uppercase tracking-wider font-semibold text-[#1119A8] dark:text-blue-400">File Formats</span>
            <span className="text-sm sm:text-base lg:text-lg font-bold text-[#080B63] dark:text-white mt-0.5">Complete Vectors</span>
            <span className="text-xs text-slate-500 dark:text-slate-400 mt-1">Scalable AI, SVG, EPS, PDF, and high-res PNG/JPG exports</span>
          </div>

          <div className="flex flex-col">
            <span className="text-[11px] sm:text-xs uppercase tracking-wider font-semibold text-[#1119A8] dark:text-blue-400">Direct Support</span>
            <span className="text-sm sm:text-base lg:text-lg font-bold text-[#080B63] dark:text-white mt-0.5">Prompt WhatsApp</span>
            <span className="text-xs text-slate-500 dark:text-slate-400 mt-1">Direct designer-to-client communication without gatekeepers</span>
          </div>
        </div>
      </div>
    </section>
  );
};
