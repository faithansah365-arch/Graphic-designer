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
    <section id="services" className="py-20 bg-[#F7F7FA] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wide uppercase text-[#1119A8] mb-2">
              <span className="w-2.5 h-0.5 bg-[#1119A8]" />
              <span>Specialized Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#080B63] font-display tracking-tight">
              Design Solutions Tailored to Your Needs
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Explore our seven core graphic design services. Every deliverable is prepared with precision for commercial print, packaging production, or digital dominance.
            </p>
          </div>

          <div className="text-xs text-slate-500 font-semibold flex items-center gap-2">
            <span>7 Core Disciplines</span>
            <span aria-hidden="true">·</span>
            <span>Vector & Print Ready</span>
          </div>
        </div>

        {/* 7 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_LIST.map((service, idx) => (
            <div
              key={service.id}
              className={`bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-[#1119A8]/40 transition-all duration-300 flex flex-col justify-between group ${
                idx === 0 ? 'lg:col-span-2 bg-gradient-to-br from-white via-white to-blue-50/40' : ''
              }`}
            >
              <div>
                {/* Header Row: Icon, Service Number & Tagline kicker */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#080B63]/5 text-[#080B63] flex items-center justify-center group-hover:bg-[#080B63] group-hover:text-white transition-colors duration-200">
                    {getIcon(service.iconName)}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-400 font-mono font-bold">
                    <span>{service.badge}</span>
                    <span>·</span>
                    <span className="text-[#1119A8] font-bold">{service.number}</span>
                  </div>
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-bold text-[#080B63] mb-1.5 font-display group-hover:text-[#1119A8] transition-colors">
                  {service.title}
                </h3>

                {/* Service Tagline */}
                <p className="text-sm font-semibold text-[#1119A8] mb-3">
                  {service.tagline}
                </p>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Deliverables Bullet List */}
                <div className="pt-4 border-t border-slate-100 mb-6">
                  <p className="text-xs uppercase font-bold text-slate-500 tracking-wider mb-2.5">
                    Key Deliverables
                  </p>
                  <ul className="space-y-1.5">
                    {service.deliverables.map((item) => (
                      <li key={item} className="text-xs text-slate-700 flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#1119A8] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons: Request Service (takes to contact form) + WhatsApp */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-2">
                <button
                  onClick={() => onRequestService(service.title)}
                  className="flex-1 py-2.5 px-3.5 bg-[#080B63] hover:bg-[#1119A8] active:scale-95 text-white text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 shadow-xs cursor-pointer"
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
                  className="p-2.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 rounded-lg transition-colors flex items-center justify-center shrink-0"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366] fill-[#25D366]" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
