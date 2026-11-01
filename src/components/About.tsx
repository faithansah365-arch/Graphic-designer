import React from 'react';
import { Target, Compass, Palette, ShieldCheck, ArrowRight } from 'lucide-react';
import { BRAND_CONFIG } from '../config/brandConfig.ts';

interface AboutProps {
  onExploreServices: () => void;
}

export const About: React.FC<AboutProps> = ({ onExploreServices }) => {
  const pillars = [
    {
      icon: Target,
      title: 'Strategic Clarity',
      description:
        'Every line, color choice, and font hierarchy is chosen with intent. We dive deep into your goals to make sure the visual output speaks directly to your audience.',
    },
    {
      icon: Compass,
      title: 'Versatility Across Mediums',
      description:
        'From high-resolution CMYK print press standards with bleed marks to responsive RGB social graphics and digital covers, assets are engineered for flawless reproduction.',
    },
    {
      icon: Palette,
      title: 'Distinctive Aesthetic Discipline',
      description:
        'We avoid cookie-cutter templates. Your project receives custom geometric layouts, balanced typography, and thoughtful color schemes tailored exclusively for you.',
    },
    {
      icon: ShieldCheck,
      title: 'Complete Asset Ownership',
      description:
        'Upon project completion, you receive full commercial usage rights and organized industry-standard source files (AI, EPS, PDF, SVG, high-res PNG/JPG).',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wide uppercase text-[#1119A8] mb-2">
            <span className="w-2.5 h-0.5 bg-[#1119A8]" />
            <span>Our Purpose & Commitment</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#080B63] font-display tracking-tight text-balance mb-6">
            {BRAND_CONFIG.aboutHeading}
          </h2>

          <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed">
            <p>
              In a crowded world, design is how businesses and creators capture attention, build trust, and inspire action.
              Our mission is to help individuals, growing enterprises, and established organizations communicate with clarity,
              confidence, and visual distinction.
            </p>
            <p className="text-slate-600 text-sm sm:text-base">
              Whether you are launching a new venture, revamping an established identity, or launching a promotional campaign,
              we believe that great design is not just decorative—it is a functional business asset that drives genuine results.
            </p>
          </div>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="bg-[#F7F7FA] rounded-xl p-6 border border-slate-200/80 hover:border-[#1119A8]/40 hover:bg-white hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-[#080B63] group-hover:bg-[#080B63] group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400">0{idx + 1}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#080B63] mb-2">{pillar.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{pillar.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to action strip inside About */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#080B63] to-[#1119A8] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-md">
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-wider text-blue-200 font-bold mb-1">Tailored Visual Solutions</p>
            <h3 className="text-xl sm:text-2xl font-bold font-display">Ready to discuss your next creative project?</h3>
            <p className="text-sm text-blue-100 mt-1">
              Explore our comprehensive services or get in touch for an instant consultation.
            </p>
          </div>
          <button
            onClick={onExploreServices}
            className="px-5 py-3 bg-white text-[#080B63] hover:bg-slate-100 active:scale-95 font-bold text-sm rounded-xl shadow-xs transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer shrink-0"
          >
            <span>Explore Services</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
