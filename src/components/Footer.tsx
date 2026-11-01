import React from 'react';
import {
  MessageCircle,
  Phone,
  Mail,
  ArrowUp,
  Instagram,
  Linkedin,
  Facebook,
  Twitter,
  Globe,
} from 'lucide-react';
import { BRAND_CONFIG, getWhatsAppUrl } from '../config/brandConfig.ts';
import { SERVICES_LIST } from '../data/servicesData.ts';

interface FooterProps {
  onSelectService: (serviceTitle: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectService }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getSocialIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'instagram':
        return <Instagram className="w-4 h-4" />;
      case 'linkedin':
        return <Linkedin className="w-4 h-4" />;
      case 'facebook':
        return <Facebook className="w-4 h-4" />;
      case 'x (twitter)':
      case 'twitter':
      case 'x':
        return <Twitter className="w-4 h-4" />;
      default:
        return <Globe className="w-4 h-4" />;
    }
  };

  return (
    <footer className="bg-[#080B63] text-white border-t border-[#1119A8]/40 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Column 1: Brand & Description (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-[#1119A8] text-white font-extrabold flex items-center justify-center text-lg shadow-sm">
                G
              </div>
              <span className="text-xl font-extrabold font-display tracking-tight text-white">
                {BRAND_CONFIG.businessName}
              </span>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              {BRAND_CONFIG.businessDescription}
            </p>

            {/* Direct Contact Links */}
            <div className="pt-2 space-y-2 text-xs">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-emerald-300 hover:text-emerald-200 font-semibold transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp: {BRAND_CONFIG.phoneDisplay}</span>
              </a>

              <a
                href={`tel:${BRAND_CONFIG.phoneRaw}`}
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-blue-300" />
                <span>Phone: {BRAND_CONFIG.phoneDisplay}</span>
              </a>

              <a
                href={`mailto:${BRAND_CONFIG.ownerEmail}`}
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-blue-300" />
                <span>{BRAND_CONFIG.ownerEmail}</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-200">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <a href="#home" className="hover:text-white hover:underline transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white hover:underline transition-colors">
                  About the Studio
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white hover:underline transition-colors">
                  Design Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white hover:underline transition-colors">
                  Portfolio & Showcases
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white hover:underline transition-colors">
                  Contact & Get a Quote
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: 7 Graphic Design Services (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-200">
              Our Services
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-xs text-slate-300">
              {SERVICES_LIST.map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => {
                      onSelectService(service.title);
                      const el = document.getElementById('contact');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="hover:text-white hover:underline text-left transition-colors cursor-pointer"
                  >
                    {service.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Social Links & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          {/* Social Links */}
          <div className="flex items-center gap-3">
            <span className="text-slate-400 font-semibold mr-1">Follow:</span>
            {BRAND_CONFIG.socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-[#1119A8] hover:text-white flex items-center justify-center transition-colors text-slate-300"
                title={`${social.name}: ${social.handle}`}
              >
                {getSocialIcon(social.name)}
              </a>
            ))}
          </div>

          {/* Copyright & Back to Top */}
          <div className="flex items-center gap-4">
            <p>
              © {new Date().getFullYear()} {BRAND_CONFIG.businessName}. All rights reserved.
            </p>
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="p-2 rounded-lg bg-white/5 hover:bg-[#1119A8] text-slate-300 hover:text-white transition-colors cursor-pointer"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
