import React from 'react';
import {
  Sparkles,
  PenTool,
  Layers,
  Package,
  BookOpen,
  Disc,
  Share2,
  ArrowRight,
  MessageCircle,
  Check,
} from 'lucide-react';
import { motion } from 'motion/react';
import { SERVICES_LIST, ServiceItem } from '../data/servicesData.ts';
import { getWhatsAppUrl } from '../config/brandConfig.ts';

interface ServicesProps {
  onRequestService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onRequestService }) => {
  const getIcon = (name: ServiceItem['iconName']) => {
    switch (name) {
      case 'Sparkles':
        return <Sparkles className="w-5 h-5" />;
      case 'PenTool':
        return <PenTool className="w-5 h-5" />;
      case 'Layers':
        return <Layers className="w-5 h-5" />;
      case 'Package':
        return <Package className="w-5 h-5" />;
      case 'BookOpen':
        return <BookOpen className="w-5 h-5" />;
      case 'Disc':
        return <Disc className="w-5 h-5" />;
      case 'Share2':
        return <Share2 className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section id="services" className="py-16 sm:py-20 bg-slate-50/90 dark:bg-[#03051A] border-t border-slate-200 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading with High Contrast Typography */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-10 sm:mb-12"
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wide uppercase text-[#1119A8] dark:text-blue-300 mb-2">
              <span className="w-2.5 h-0.5 bg-[#1119A8] dark:bg-blue-300" />
              <span>Specialized Capabilities</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#080B63] dark:text-white font-display tracking-tight">
              Design Solutions Tailored to Your Needs
            </h2>
            <p className="mt-2.5 sm:mt-3 text-sm sm:text-base text-slate-800 dark:text-slate-100 font-medium leading-relaxed">
              Explore our seven core graphic design services. Every deliverable is prepared with precision for commercial print, packaging production, or digital dominance.
            </p>
          </div>

          <div className="text-xs text-slate-700 dark:text-slate-200 font-bold flex items-center gap-2">
            <span>7 Core Disciplines</span>
            <span aria-hidden="true" className="text-slate-400">·</span>
            <span>Vector & Print Ready</span>
          </div>
        </motion.div>

        {/* 7 Services Grid with High-Contrast Light & Dark Mode Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {SERVICES_LIST.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ y: -4 }}
              className={`bg-white dark:bg-[#0B0F38] rounded-2xl p-5 sm:p-7 border border-slate-300/80 dark:border-white/20 shadow-sm hover:shadow-xl hover:border-[#1119A8] dark:hover:border-blue-400 transition-all duration-300 flex flex-col justify-between group ${
                idx === 0 ? 'lg:col-span-2 bg-gradient-to-br from-white via-white to-blue-50/50 dark:from-[#0B0F38] dark:to-[#121852]' : ''
              }`}
            >
              <div>
                {/* Header Row: Icon, Service Number & Tagline kicker */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#080B63]/10 dark:bg-white/15 text-[#080B63] dark:text-blue-200 flex items-center justify-center group-hover:bg-[#080B63] dark:group-hover:bg-[#1119A8] group-hover:text-white transition-colors duration-200">
                    {getIcon(service.iconName)}
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono font-bold">
                    <span className="text-slate-600 dark:text-slate-300">{service.badge}</span>
                    <span className="text-slate-400">·</span>
                    <span className="text-[#1119A8] dark:text-blue-300 font-extrabold">{service.number}</span>
                  </div>
                </div>

                {/* Service Title - Pure Bold Navy in Light, Crisp White in Dark */}
                <h3 className="text-lg sm:text-xl font-bold text-[#080B63] dark:text-white mb-1.5 font-display group-hover:text-[#1119A8] dark:group-hover:text-blue-300 transition-colors">
                  {service.title}
                </h3>

                {/* Service Tagline - High Contrast Accent */}
                <p className="text-xs sm:text-sm font-bold text-[#1119A8] dark:text-blue-300 mb-3">
                  {service.tagline}
                </p>

                {/* Description - High Contrast Body Text in Both Themes */}
                <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-100 font-normal leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Deliverables Bullet List with Crisp Readable Typography */}
                <div className="pt-4 border-t border-slate-200 dark:border-white/15 mb-6">
                  <p className="text-[11px] sm:text-xs uppercase font-extrabold text-slate-900 dark:text-white tracking-wider mb-2.5">
                    Key Deliverables
                  </p>
                  <ul className="space-y-1.5">
                    {service.deliverables.map((item) => (
                      <li key={item} className="text-xs text-slate-900 dark:text-slate-100 font-medium flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#1119A8] dark:text-blue-300 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons: Request Service (takes to contact form) + WhatsApp */}
              <div className="pt-4 border-t border-slate-200 dark:border-white/15 flex items-center gap-2.5">
                <button
                  onClick={() => onRequestService(service.title)}
                  className="flex-1 min-h-[44px] py-2.5 px-3.5 bg-[#080B63] dark:bg-[#1119A8] hover:bg-[#1119A8] dark:hover:bg-[#2E3AFF] active:scale-95 text-white text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 shadow-xs cursor-pointer"
                >
                  <span>Request This Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={getWhatsAppUrl(service.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Inquire about ${service.title} on WhatsApp`}
                  title="Inquire instantly on WhatsApp"
                  className="min-h-[44px] min-w-[44px] p-2.5 bg-emerald-50 dark:bg-emerald-950/60 hover:bg-emerald-100 dark:hover:bg-emerald-900/70 text-emerald-900 dark:text-emerald-200 border border-emerald-400 dark:border-emerald-600 rounded-lg transition-colors flex items-center justify-center shrink-0"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366] fill-[#25D366]" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
