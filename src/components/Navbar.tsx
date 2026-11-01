import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';
import { BRAND_CONFIG, getWhatsAppUrl } from '../config/brandConfig.ts';

interface NavbarProps {
  onNavigateToContact: (serviceId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigateToContact }) => {
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-[#080B63]/10 py-3.5'
          : 'bg-white border-b border-[#080B63]/5 py-4.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar Contract: Zone 1 (Wordmark) — Zone 2 (Nav links) — Zone 3 (Primary Action) */}
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#home"
            className="flex items-center gap-2 group whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#1119A8]"
          >
            <div className="w-9 h-9 rounded-lg bg-[#080B63] flex items-center justify-center text-white font-bold text-lg shadow-sm group-hover:bg-[#1119A8] transition-colors">
              G
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold tracking-tight text-[#080B63] text-lg sm:text-xl font-display leading-tight group-hover:text-[#1119A8] transition-colors">
                {BRAND_CONFIG.businessName}
              </span>
              <span className="text-[10px] tracking-wider uppercase font-semibold text-[#1119A8]">
                Visual Studio
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links (Clean single-line text links) */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-[#151515]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="whitespace-nowrap shrink-0 hover:text-[#1119A8] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#1119A8] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 Primary Action + Mobile Hamburger */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Quick WhatsApp direct link (desktop) */}
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Direct WhatsApp Contact"
              className="hidden lg:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#080B63] hover:text-[#1119A8] transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span className="whitespace-nowrap">{BRAND_CONFIG.phoneDisplay}</span>
            </a>

            {/* Primary Action Button */}
            <button
              onClick={() => onNavigateToContact()}
              className="px-4 py-2 text-xs sm:text-sm font-bold text-white bg-[#080B63] hover:bg-[#1119A8] active:scale-95 rounded-lg shadow-xs hover:shadow-md transition-all whitespace-nowrap shrink-0 flex items-center gap-1.5"
            >
              <span>Get a Quote</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="md:hidden p-2 text-[#080B63] hover:bg-slate-100 rounded-lg transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-6 py-5 shadow-lg">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-[#151515] hover:text-[#1119A8] py-2 border-b border-slate-100"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigateToContact();
                }}
                className="w-full text-center py-2.5 px-4 bg-[#080B63] hover:bg-[#1119A8] text-white font-bold rounded-lg text-sm shadow-xs transition-colors"
              >
                Request a Design Quote
              </button>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 py-2 px-4 bg-emerald-50 text-emerald-800 font-bold rounded-lg text-sm border border-emerald-200 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                WhatsApp: {BRAND_CONFIG.phoneDisplay}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
