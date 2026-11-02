import React, { useState } from 'react';
import {
  PORTFOLIO_PROJECTS,
  PORTFOLIO_CATEGORIES,
  PortfolioProject,
} from '../data/portfolioData.ts';
import {
  Maximize2,
  X,
  ArrowRight,
  MessageCircle,
  ExternalLink,
  Layers,
  Sparkles,
  FolderOpen,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BRAND_CONFIG, getWhatsAppUrl } from '../config/brandConfig.ts';

interface PortfolioProps {
  onRequestProjectService: (serviceTitle: string) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onRequestProjectService }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  const filteredProjects =
    activeCategory === 'All'
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.category === activeCategory);

  const handleOpenLightbox = (project: PortfolioProject) => {
    setSelectedProject(project);
  };

  const handleCloseLightbox = () => {
    setSelectedProject(null);
  };

  return (
    <section id="portfolio" className="py-16 sm:py-20 bg-white dark:bg-[#040620] border-t border-slate-200/80 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Direct Google Drive Portfolio Link */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-10"
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wide uppercase text-[#1119A8] dark:text-blue-400 mb-2">
              <span className="w-2.5 h-0.5 bg-[#1119A8] dark:bg-blue-400" />
              <span>Design Showcase & Portfolio</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#080B63] dark:text-white font-display tracking-tight">
              Selected Works & Creative Direction
            </h2>
            <p className="mt-2.5 sm:mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              Explore our curated selection of flagship projects across branding, vector logos, promotional flyers, packaging labels, and music artwork.
            </p>
          </div>

          {/* Prominent Header Action: Google Drive Link */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={BRAND_CONFIG.portfolioDriveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Full Portfolio on Google Drive"
              className="min-h-[44px] px-4 py-2.5 bg-[#080B63] dark:bg-[#1119A8] hover:bg-[#1119A8] dark:hover:bg-[#2E3AFF] active:scale-95 text-white rounded-xl text-xs sm:text-sm font-bold shadow-sm hover:shadow-md transition-all inline-flex items-center gap-2 cursor-pointer group"
            >
              <FolderOpen className="w-4 h-4 text-amber-300 group-hover:scale-110 transition-transform" />
              <span>View Full Google Drive Portfolio</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>
        </motion.div>

        {/* Category Filter Bar (Functional Interactive Tabs) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
          {PORTFOLIO_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`min-h-[40px] px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-[#080B63] dark:bg-[#1119A8] text-white shadow-sm'
                    : 'bg-[#F7F7FA] dark:bg-[#070A2D] text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 border border-slate-200/60 dark:border-white/10'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Portfolio Gallery Grid - Maximum 6 Curated Flagship Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredProjects.slice(0, 6).map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ y: -4 }}
              onClick={() => handleOpenLightbox(project)}
              className="group bg-white dark:bg-[#0B0F38] rounded-2xl overflow-hidden border border-slate-300/80 dark:border-white/20 hover:border-[#1119A8] dark:hover:border-blue-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              {/* Image / Graphic Visual Area */}
              <div className="relative aspect-[4/3] bg-slate-900 overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      if (e.currentTarget.src.includes('imgur.com')) {
                        e.currentTarget.src = '/src/assets/images/portfolio_flyer_event_1793561907200.jpg';
                      }
                    }}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#080B63] to-[#1119A8] text-white relative">
                    <div className="w-14 sm:w-16 h-14 sm:h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-3 shadow-inner">
                      {project.category === 'Logos' && (
                        <div className="text-2xl font-black tracking-tighter text-amber-300 font-display">
                          A<span className="text-white">V</span>
                        </div>
                      )}
                      {project.category === 'Brochures' && <Layers className="w-7 sm:w-8 h-7 sm:h-8 text-blue-200" />}
                      {project.category === 'Social Media' && <Sparkles className="w-7 sm:w-8 h-7 sm:h-8 text-purple-200" />}
                    </div>
                    <span className="text-xs uppercase tracking-wider text-blue-200 font-bold">
                      {project.projectType}
                    </span>
                    <span className="text-sm sm:text-base font-bold text-white mt-1 max-w-[200px]">
                      {project.title}
                    </span>
                    <span className="text-[11px] text-white/70 mt-1">
                      {project.dimensions}
                    </span>
                  </div>
                )}

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-[#080B63]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                  <div className="px-3.5 py-2 bg-white text-[#080B63] rounded-lg text-xs font-bold shadow-md flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Expand Details</span>
                  </div>
                </div>

                {/* Top Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-md text-[11px] font-extrabold text-[#080B63] dark:text-blue-300 shadow-xs border dark:border-white/20">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-4 sm:p-5 flex flex-col justify-between flex-grow">
                <div>
                  <div className="text-xs text-[#1119A8] dark:text-blue-300 font-bold mb-1">
                    {project.clientType}
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-[#080B63] dark:text-white group-hover:text-[#1119A8] dark:group-hover:text-blue-300 transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-800 dark:text-slate-200 font-normal line-clamp-2 mt-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Bottom Card Footer */}
                <div className="mt-4 pt-3 border-t border-slate-200/80 dark:border-white/10 flex items-center justify-between text-xs text-[#1119A8] dark:text-blue-400 font-bold">
                  <span>View Project Specs</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Highly Visible Google Drive Full Portfolio Banner Card Below Selected Works */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 sm:mt-12 rounded-2xl bg-gradient-to-br from-[#080B63] via-[#0B0F75] to-[#1119A8] dark:from-[#0B0F3E] dark:via-[#101654] dark:to-[#172075] p-6 sm:p-8 md:p-9 text-white shadow-xl border border-white/10 relative overflow-hidden"
        >
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-blue-400/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-white/15 backdrop-blur-md text-amber-300 text-xs font-bold uppercase tracking-wider mb-2.5">
                <FolderOpen className="w-4 h-4" />
                <span>Complete Design Archive</span>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold font-display leading-tight">
                Looking for more of our work?
              </h3>
              <p className="mt-2 text-sm sm:text-base text-blue-100 dark:text-slate-300 leading-relaxed">
                Explore our full archive of client projects, concert flyers, brand identity manuals, vector logos, and packaging concepts inside our official Google Drive folder.
              </p>
            </div>

            <div className="w-full lg:w-auto shrink-0">
              <a
                href={BRAND_CONFIG.portfolioDriveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full lg:w-auto min-h-[48px] px-6 py-3.5 bg-white text-[#080B63] hover:bg-slate-100 active:scale-95 text-sm sm:text-base font-extrabold rounded-xl shadow-lg transition-all inline-flex items-center justify-center gap-2.5 cursor-pointer group"
              >
                <FolderOpen className="w-5 h-5 text-[#1119A8] group-hover:scale-110 transition-transform" />
                <span>Open Google Drive Portfolio</span>
                <ExternalLink className="w-4 h-4 text-[#1119A8]" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Lightbox / Expanded Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-xs"
              onClick={handleCloseLightbox}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="bg-white dark:bg-[#070A2D] rounded-2xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200 dark:border-white/10"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Top Bar */}
                <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-100 dark:border-white/10 sticky top-0 bg-white dark:bg-[#070A2D] z-10">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-[#1119A8] dark:text-blue-400 uppercase tracking-wider">
                      {selectedProject.category}
                    </span>
                    <span className="text-slate-300 dark:text-white/20">·</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">{selectedProject.projectType}</span>
                  </div>
                  <button
                    onClick={handleCloseLightbox}
                    className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
                    aria-label="Close modal"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Project Image Preview in Modal */}
                <div className="bg-slate-900 relative">
                  {selectedProject.image ? (
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      referrerPolicy="no-referrer"
                      className="w-full max-h-[380px] sm:max-h-[420px] object-contain mx-auto"
                      onError={(e) => {
                        if (e.currentTarget.src.includes('imgur.com')) {
                          e.currentTarget.src = '/src/assets/images/portfolio_flyer_event_1793561907200.jpg';
                        }
                      }}
                    />
                  ) : (
                    <div className="py-14 sm:py-16 px-6 text-center bg-gradient-to-br from-[#080B63] to-[#1119A8] text-white">
                      <p className="text-xs uppercase tracking-widest text-blue-200 font-bold">Vector Presentation</p>
                      <h3 className="text-xl sm:text-2xl font-bold mt-1">{selectedProject.title}</h3>
                      <p className="text-xs text-blue-100 mt-2">{selectedProject.highlightText}</p>
                    </div>
                  )}
                </div>

                {/* Modal Body */}
                <div className="p-5 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#080B63] dark:text-white font-display mb-2">
                    {selectedProject.title}
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-4">
                    Sector: {selectedProject.clientType} · Specs: {selectedProject.dimensions}
                  </p>

                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                    {selectedProject.description}
                  </p>

                  {/* Deliverables & Tools Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-[#F7F7FA] dark:bg-[#0B0F3E] border border-slate-200 dark:border-white/10 mb-6 text-xs">
                    <div>
                      <span className="font-bold text-[#080B63] dark:text-blue-300 block mb-2 uppercase tracking-wide">
                        Deliverables Included:
                      </span>
                      <ul className="space-y-1 text-slate-600 dark:text-slate-400">
                        {selectedProject.deliverables.map((d) => (
                          <li key={d}>• {d}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <span className="font-bold text-[#080B63] dark:text-blue-300 block mb-2 uppercase tracking-wide">
                        Software & Production:
                      </span>
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {selectedProject.tools.map((t) => (
                          <span key={t} className="px-2 py-0.5 bg-white dark:bg-white/10 border border-slate-200 dark:border-white/10 rounded text-slate-700 dark:text-slate-300">
                            {t}
                          </span>
                        ))}
                      </div>
                      <span className="font-bold text-[#080B63] dark:text-blue-300 block mb-1 uppercase tracking-wide">
                        Key Highlight:
                      </span>
                      <span className="text-slate-600 dark:text-slate-400">{selectedProject.highlightText}</span>
                    </div>
                  </div>

                  {/* Action Buttons in Modal */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4 border-t border-slate-100 dark:border-white/10">
                    <button
                      onClick={() => {
                        handleCloseLightbox();
                        onRequestProjectService(selectedProject.category);
                      }}
                      className="flex-1 min-h-[44px] py-3 px-4 bg-[#080B63] dark:bg-[#1119A8] hover:bg-[#1119A8] dark:hover:bg-[#2E3AFF] active:scale-95 text-white font-bold text-xs sm:text-sm rounded-xl transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                    >
                      <span>Request Similar Project</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <a
                      href={BRAND_CONFIG.portfolioDriveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-h-[44px] py-3 px-4 bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/15 text-slate-800 dark:text-white font-bold text-xs sm:text-sm rounded-xl transition-colors inline-flex items-center justify-center gap-2"
                    >
                      <FolderOpen className="w-4 h-4 text-amber-500" />
                      <span>Drive Archive</span>
                    </a>

                    <a
                      href={getWhatsAppUrl(selectedProject.category, `Project reference: ${selectedProject.title}`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-h-[44px] py-3 px-4 bg-emerald-50 dark:bg-emerald-950/40 hover:bg-emerald-100 dark:hover:bg-emerald-900/50 text-emerald-900 dark:text-emerald-200 border border-emerald-300 dark:border-emerald-700/60 font-bold text-xs sm:text-sm rounded-xl transition-colors inline-flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4 text-[#25D366] fill-[#25D366]" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
