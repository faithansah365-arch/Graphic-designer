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
  Info,
} from 'lucide-react';
import { getWhatsAppUrl } from '../config/brandConfig.ts';

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
    <section id="portfolio" className="py-20 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wide uppercase text-[#1119A8] mb-2">
              <span className="w-2.5 h-0.5 bg-[#1119A8]" />
              <span>Design Showcase & Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#080B63] font-display tracking-tight">
              Selected Works & Creative Direction
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Explore our project showcases across branding, logos, promotional flyers, packaging labels, music artwork, and digital campaigns.
            </p>
          </div>

          {/* Clear label note regarding placeholders/concept templates */}
          <div className="bg-[#F7F7FA] border border-slate-200 p-3.5 rounded-xl text-xs text-slate-600 flex items-start gap-2 max-w-sm">
            <Info className="w-4 h-4 text-[#1119A8] shrink-0 mt-0.5" />
            <span>
              <strong>Showcase Notice:</strong> Features concept templates and creative direction mockups. Easily updated with your own client work.
            </span>
          </div>
        </div>

        {/* Category Filter Bar (Functional Interactive Tabs) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {PORTFOLIO_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-[#080B63] text-white shadow-sm'
                    : 'bg-[#F7F7FA] text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200/60'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Portfolio Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => handleOpenLightbox(project)}
              className="group bg-[#F7F7FA] rounded-2xl overflow-hidden border border-slate-200/80 hover:border-[#1119A8]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
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
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                ) : (
                  /* Custom Vector Graphic Presentation for non-photo items */
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#080B63] to-[#1119A8] text-white relative">
                    <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-3 shadow-inner">
                      {project.category === 'Logos' && (
                        <div className="text-2xl font-black tracking-tighter text-amber-300 font-display">
                          A<span className="text-white">V</span>
                        </div>
                      )}
                      {project.category === 'Brochures' && <Layers className="w-8 h-8 text-blue-200" />}
                      {project.category === 'Social Media' && <Sparkles className="w-8 h-8 text-purple-200" />}
                    </div>
                    <span className="text-xs uppercase tracking-wider text-blue-200 font-bold">
                      {project.projectType}
                    </span>
                    <span className="text-base font-bold text-white mt-1 max-w-[200px]">
                      {project.title}
                    </span>
                    <span className="text-[11px] text-white/70 mt-1">
                      {project.dimensions}
                    </span>
                  </div>
                )}

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-[#080B63]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                  <div className="px-4 py-2 bg-white text-[#080B63] rounded-lg text-xs font-bold shadow-md flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Expand Details</span>
                  </div>
                </div>

                {/* Top Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 bg-white/95 backdrop-blur-md rounded-md text-[11px] font-bold text-[#080B63] shadow-xs">
                    {project.category}
                  </span>
                </div>

                {/* Concept template tag */}
                <div className="absolute top-3 right-3">
                  <span className="px-2 py-0.5 bg-black/60 backdrop-blur-md rounded text-[10px] text-white font-medium">
                    Showcase
                  </span>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-5 flex flex-col justify-between flex-grow">
                <div>
                  <div className="text-xs text-slate-500 font-medium mb-1">
                    {project.clientType}
                  </div>
                  <h3 className="text-base font-bold text-[#080B63] group-hover:text-[#1119A8] transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2 mt-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Bottom Card Footer */}
                <div className="mt-4 pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs text-[#1119A8] font-bold">
                  <span>View Project Specs</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox / Expanded Project Modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs"
            onClick={handleCloseLightbox}
          >
            <div
              className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between p-5 border-b border-slate-100 sticky top-0 bg-white z-10">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-[#1119A8] uppercase tracking-wider">
                    {selectedProject.category}
                  </span>
                  <span className="text-slate-300">·</span>
                  <span className="text-xs text-slate-500">{selectedProject.projectType}</span>
                </div>
                <button
                  onClick={handleCloseLightbox}
                  className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
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
                    className="w-full max-h-[420px] object-contain mx-auto"
                  />
                ) : (
                  <div className="py-16 px-6 text-center bg-gradient-to-br from-[#080B63] to-[#1119A8] text-white">
                    <p className="text-xs uppercase tracking-widest text-blue-200 font-bold">Vector Presentation</p>
                    <h3 className="text-2xl font-bold mt-1">{selectedProject.title}</h3>
                    <p className="text-xs text-blue-100 mt-2">{selectedProject.highlightText}</p>
                  </div>
                )}
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8">
                <h3 className="text-2xl font-extrabold text-[#080B63] font-display mb-2">
                  {selectedProject.title}
                </h3>
                <p className="text-xs font-semibold text-slate-500 mb-4">
                  Sector: {selectedProject.clientType} · Specs: {selectedProject.dimensions}
                </p>

                <p className="text-sm text-slate-700 leading-relaxed mb-6">
                  {selectedProject.description}
                </p>

                {/* Deliverables & Tools Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-[#F7F7FA] border border-slate-200 mb-6 text-xs">
                  <div>
                    <span className="font-bold text-[#080B63] block mb-2 uppercase tracking-wide">
                      Deliverables Included:
                    </span>
                    <ul className="space-y-1 text-slate-600">
                      {selectedProject.deliverables.map((d) => (
                        <li key={d}>• {d}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <span className="font-bold text-[#080B63] block mb-2 uppercase tracking-wide">
                      Software & Production:
                    </span>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {selectedProject.tools.map((t) => (
                        <span key={t} className="px-2 py-0.5 bg-white border border-slate-200 rounded text-slate-700">
                          {t}
                        </span>
                      ))}
                    </div>
                    <span className="font-bold text-[#080B63] block mb-1 uppercase tracking-wide">
                      Key Highlight:
                    </span>
                    <span className="text-slate-600">{selectedProject.highlightText}</span>
                  </div>
                </div>

                {/* Action Buttons in Modal */}
                <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-100">
                  <button
                    onClick={() => {
                      handleCloseLightbox();
                      onRequestProjectService(selectedProject.category);
                    }}
                    className="flex-1 py-3 px-4 bg-[#080B63] hover:bg-[#1119A8] active:scale-95 text-white font-bold text-xs sm:text-sm rounded-xl transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                  >
                    <span>Request Similar Project</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href={getWhatsAppUrl(selectedProject.category, `Project reference: ${selectedProject.title}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-4 bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-300 font-bold text-xs sm:text-sm rounded-xl transition-colors inline-flex items-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 text-[#25D366] fill-[#25D366]" />
                    <span>Inquire on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
