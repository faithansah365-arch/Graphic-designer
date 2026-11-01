import React from 'react';
import { Target, Compass, Palette, ShieldCheck, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
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
    <section id="about" className="py-16 sm:py-20 bg-white dark:bg-[#040620] border-t border-slate-100 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wide uppercase text-[#1119A8] dark:text-blue-400 mb-2">
            <span className="w-2.5 h-0.5 bg-[#1119A8] dark:bg-blue-400" />
            <span>Our Purpose & Commitment</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#080B63] dark:text-white font-display tracking-tight text-balance mb-5 sm:mb-6">
            {BRAND_CONFIG.aboutHeading}
          </h2>

          <div className="space-y-3.5 sm:space-y-4 text-sm sm:text-base md:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
            <p>
              In a crowded world, design is how businesses and creators capture attention, build trust, and inspire action.
              Our mission is to help individuals, growing enterprises, and established organizations communicate with clarity,
              confidence, and visual distinction.
            </p>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm md:text-base">
              Whether you are launching a new venture, revamping an established identity, or launching a promotional campaign,
              we believe that great design is not just decorative—it is a functional business asset that drives genuine results.
            </p>
          </div>
        </motion.div>

        {/* 4 Core Pillars Grid */}
        <div className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ y: -4 }}
                className="bg-[#F7F7FA] dark:bg-[#070A2D] rounded-xl p-5 sm:p-6 border border-slate-200/80 dark:border-white/10 hover:border-[#1119A8]/40 dark:hover:border-blue-500/40 hover:bg-white dark:hover:bg-[#0B0F3E] hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 sm:mb-5">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-white dark:bg-white/10 border border-slate-200 dark:border-white/10 flex items-center justify-center text-[#080B63] dark:text-blue-300 group-hover:bg-[#080B63] dark:group-hover:bg-[#1119A8] group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400 dark:text-slate-500">0{idx + 1}</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#080B63] dark:text-white mb-2">{pillar.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{pillar.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to action strip inside About */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 sm:mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#080B63] via-[#0B0F75] to-[#1119A8] dark:from-[#080B4A] dark:to-[#1119A8] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 sm:gap-6 shadow-md"
        >
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-wider text-blue-200 font-bold mb-1">Tailored Visual Solutions</p>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold font-display">Ready to discuss your next creative project?</h3>
            <p className="text-xs sm:text-sm text-blue-100 mt-1">
              Explore our comprehensive services or get in touch for an instant consultation.
            </p>
          </div>
          <button
            onClick={onExploreServices}
            className="w-full sm:w-auto min-h-[44px] px-5 py-2.5 sm:py-3 bg-white text-[#080B63] hover:bg-slate-100 active:scale-95 font-bold text-xs sm:text-sm rounded-xl shadow-xs transition-all flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer shrink-0"
          >
            <span>Explore Services</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
