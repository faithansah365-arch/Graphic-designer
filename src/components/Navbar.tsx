import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, MessageCircle, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BRAND_CONFIG, getWhatsAppUrl } from '../config/brandConfig.ts';

interface NavbarProps {
  onNavigateToContact: (serviceId?: string) => void;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onNavigateToContact,
  theme,
  onToggleTheme,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-[#040620]/95 backdrop-blur-md shadow-xs border-b border-[#080B63]/10 dark:border-white/10 py-3'
          : 'bg-white dark:bg-[#040620] border-b border-[#080B63]/5 dark:border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar Contract: Zone 1 (Wordmark) — Zone 2 (Nav links) — Zone 3 (Primary Action) */}
        <div className="flex items-center justify-between gap-6 sm:gap-8">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#1119A8]"
          >
            <div className="w-10 h-10 rounded-lg overflow-hidden bg-[#080B63] dark:bg-[#1119A8] flex items-center justify-center text-white font-bold text-lg shadow-sm border border-[#1119A8]/20 shrink-0">
              <img
                src={BRAND_CONFIG.brandPictureUrl}
                alt={BRAND_CONFIG.businessName}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold tracking-tight text-[#080B63] dark:text-white text-lg sm:text-xl font-display leading-tight group-hover:text-[#1119A8] dark:group-hover:text-blue-300 transition-colors">
                {BRAND_CONFIG.businessName}
              </span>
              <span className="text-[10px] tracking-wider uppercase font-semibold text-[#1119A8] dark:text-blue-300">
                Visual Studio
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links (Clean single-line text links) */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-[#151515] dark:text-slate-200">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="whitespace-nowrap shrink-0 hover:text-[#1119A8] dark:hover:text-blue-300 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#1119A8] dark:after:bg-blue-400 hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Actions (Theme Toggle + WhatsApp direct + Quote CTA + Mobile Hamburger) */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            {/* Dark / Light Mode Toggle Button */}
            <button
              onClick={onToggleTheme}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors cursor-pointer border border-slate-200 dark:border-white/10"
            >
              <AnimatePresence mode="wait" initial={false}>
                {theme === 'light' ? (
                  <motion.div
                    key="moon"
                    initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon className="w-4 h-4 text-[#080B63]" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="sun"
                    initial={{ rotate: 90, opacity: 0, scale: 0.8 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: -90, opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun className="w-4 h-4 text-amber-300" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            {/* Quick WhatsApp direct link (desktop) */}
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Direct WhatsApp Contact"
              className="hidden lg:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#080B63] dark:text-slate-200 hover:text-[#1119A8] dark:hover:text-blue-300 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span className="whitespace-nowrap">{BRAND_CONFIG.phoneDisplay}</span>
            </a>

            {/* Primary Action Button */}
            <button
              onClick={() => onNavigateToContact()}
              className="px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-bold text-white bg-[#080B63] dark:bg-[#1119A8] hover:bg-[#1119A8] dark:hover:bg-[#2E3AFF] active:scale-95 rounded-lg shadow-xs hover:shadow-md transition-all whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer"
            >
              <span>Get a Quote</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="md:hidden p-2 text-[#080B63] dark:text-white hover:bg-slate-100 dark:hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="md:hidden bg-white dark:bg-[#070A2D] border-b border-slate-200 dark:border-white/10 px-6 py-5 shadow-xl overflow-hidden"
          >
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-semibold text-[#151515] dark:text-slate-100 hover:text-[#1119A8] dark:hover:text-blue-300 py-2 border-b border-slate-100 dark:border-white/5"
                >
                  {link.label}
                </a>
              ))}

              <div className="pt-3 flex flex-col gap-2.5">
                {/* Mobile Theme Toggle Button */}
                <button
                  onClick={onToggleTheme}
                  className="w-full py-2.5 px-4 rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 text-slate-800 dark:text-slate-200 font-semibold text-sm flex items-center justify-between"
                >
                  <span>Appearance</span>
                  <span className="flex items-center gap-1.5 text-xs text-[#1119A8] dark:text-amber-300 font-bold">
                    {theme === 'light' ? (
                      <>
                        <Moon className="w-3.5 h-3.5" /> Dark Mode
                      </>
                    ) : (
                      <>
                        <Sun className="w-3.5 h-3.5" /> Light Mode
                      </>
                    )}
                  </span>
                </button>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onNavigateToContact();
                  }}
                  className="w-full text-center py-2.5 px-4 bg-[#080B63] dark:bg-[#1119A8] hover:bg-[#1119A8] text-white font-bold rounded-lg text-sm shadow-xs transition-colors cursor-pointer"
                >
                  Request a Design Quote
                </button>

                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 font-bold rounded-lg text-sm border border-emerald-200 dark:border-emerald-800/50 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  WhatsApp: {BRAND_CONFIG.phoneDisplay}
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
