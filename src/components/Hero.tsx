import React, { useState, useRef } from 'react';
import {
  ArrowRight,
  MessageCircle,
  Sparkles,
  CheckCircle2,
  Layers,
  Upload,
  Image as ImageIcon,
  RotateCcw,
  X,
  AlertTriangle,
} from 'lucide-react';
import { BRAND_CONFIG, getWhatsAppUrl } from '../config/brandConfig.ts';

interface HeroProps {
  onGetStarted: () => void;
  onViewServices: () => void;
}

const DEFAULT_STUDIO_IMAGE = '/src/assets/images/hero_graphic_design_studio_1793561909068.jpg';

export const Hero: React.FC<HeroProps> = ({ onGetStarted, onViewServices }) => {
  const [heroImage, setHeroImage] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('custom_hero_image');
      if (saved && saved.startsWith('data:image/')) return saved;
    }
    return BRAND_CONFIG.heroImageUrl;
  });

  const [showUploaderModal, setShowUploaderModal] = useState(false);
  const [customUrlInput, setCustomUrlInput] = useState('');
  const [imgLoadError, setImgLoadError] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('custom_hero_image') : null;
    if (!saved || !saved.startsWith('data:image/')) {
      setHeroImage(BRAND_CONFIG.heroImageUrl);
    }
  }, []);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        setHeroImage(result);
        setImgLoadError(false);
        try {
          localStorage.setItem('custom_hero_image', result);
        } catch (err) {
          console.warn('LocalStorage limit for custom image:', err);
        }
        setShowUploaderModal(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleApplyUrl = (e: React.FormEvent) => {
    e.preventDefault();
    if (customUrlInput.trim()) {
      let finalUrl = customUrlInput.trim();
      // Handle Imgur album URL by converting to direct image link if needed
      if (finalUrl.includes('imgur.com/a/')) {
        const id = finalUrl.split('imgur.com/a/')[1].split('/')[0].split('?')[0];
        finalUrl = `https://i.imgur.com/${id}.png`;
      }
      setHeroImage(finalUrl);
      setImgLoadError(false);
      try {
        localStorage.setItem('custom_hero_image', finalUrl);
      } catch (err) {
        console.warn('LocalStorage error:', err);
      }
      setCustomUrlInput('');
      setShowUploaderModal(false);
    }
  };

  const handleResetToDefault = () => {
    localStorage.removeItem('custom_hero_image');
    setHeroImage(DEFAULT_STUDIO_IMAGE);
    setImgLoadError(false);
    setShowUploaderModal(false);
  };

  return (
    <section id="home" className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden bg-gradient-to-b from-[#F7F7FA] via-white to-white">
      {/* Subtle geometric background accents */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-[#1119A8]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 -ml-20 w-80 h-80 rounded-full bg-[#7027A5]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Split Grid: Left Copy & CTAs, Right Visual Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Subtle editorial kicker without pills */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wide uppercase text-[#1119A8] mb-3">
              <span className="w-2.5 h-0.5 bg-[#1119A8]" />
              <span>Full-Service Graphic Design & Branding</span>
              <span className="text-[#080B63]/30">·</span>
              <span className="text-[#7027A5]">Direct Client Collaboration</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold text-[#080B63] font-display leading-[1.12] tracking-tight text-balance mb-4">
              {BRAND_CONFIG.mainHeadline}
            </h1>

            {/* Supporting Headline */}
            <p className="text-lg sm:text-xl font-bold text-[#1119A8] tracking-tight mb-4">
              {BRAND_CONFIG.supportingHeadline}
            </p>

            {/* Business Description */}
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl mb-8">
              {BRAND_CONFIG.businessDescription}
            </p>

            {/* Three Working Action Buttons: Get Started, View Services, WhatsApp */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 mb-8">
              {/* 1. Get Started */}
              <button
                onClick={onGetStarted}
                className="px-6 py-3.5 text-sm sm:text-base font-bold text-white bg-[#080B63] hover:bg-[#1119A8] active:scale-95 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-2 group cursor-pointer"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* 2. View Our Services */}
              <button
                onClick={onViewServices}
                className="px-5 py-3.5 text-sm sm:text-base font-bold text-[#080B63] bg-white hover:bg-slate-50 border border-[#080B63]/20 active:scale-95 rounded-xl transition-all flex items-center gap-2 cursor-pointer shadow-xs"
              >
                <Layers className="w-4 h-4 text-[#1119A8]" />
                <span>View Our Services</span>
              </button>

              {/* 3. WhatsApp Direct Contact Button */}
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 text-sm sm:text-base font-bold text-emerald-900 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 active:scale-95 rounded-xl transition-all inline-flex items-center gap-2.5 shadow-xs"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366] fill-[#25D366]" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Quick trust cues (clean unboxed text with typographic bullet) */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm text-slate-600 font-medium pt-3 border-t border-slate-200/80">
              <span className="flex items-center gap-1.5 text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-[#1119A8]" /> Print & Digital Ready
              </span>
              <span className="text-slate-300">/</span>
              <span className="flex items-center gap-1.5 text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-[#1119A8]" /> Vector Source Files Included
              </span>
              <span className="text-slate-300">/</span>
              <span className="flex items-center gap-1.5 text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-[#1119A8]" /> Fast Response via WhatsApp
              </span>
            </div>
          </div>

          {/* Right Column: Visual Container (High-fidelity flyer or studio showcase) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Studio photo frame */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group">
                <img
                  src={heroImage}
                  alt="Professional Graphic Designer Promotional Flyer & Visual Showcase"
                  referrerPolicy="no-referrer"
                  className="w-full h-80 sm:h-96 lg:h-[460px] object-cover sm:object-contain bg-slate-900 group-hover:scale-102 transition-transform duration-700"
                  onLoad={(e) => {
                    const img = e.currentTarget;
                    // Check if Imgur served the 336x478 regional restriction placeholder
                    if (img.naturalWidth === 336 && img.naturalHeight === 478) {
                      setImgLoadError(true);
                      img.src = DEFAULT_STUDIO_IMAGE;
                    } else {
                      setImgLoadError(false);
                    }
                  }}
                  onError={(e) => {
                    setImgLoadError(true);
                    e.currentTarget.src = DEFAULT_STUDIO_IMAGE;
                  }}
                />

                {/* Floating "Change Flyer" button overlay */}
                <div className="absolute top-3 right-3 z-20">
                  <button
                    onClick={() => setShowUploaderModal(true)}
                    className="px-3 py-1.5 bg-white/95 hover:bg-white text-[#080B63] rounded-lg text-xs font-bold shadow-md flex items-center gap-1.5 backdrop-blur-md transition-all cursor-pointer hover:shadow-lg active:scale-95"
                    title="Change or upload your flyer image"
                  >
                    <Upload className="w-3.5 h-3.5 text-[#1119A8]" />
                    <span>Change Flyer</span>
                  </button>
                </div>

                {/* If Imgur regional block or hotlink blocked notification */}
                {imgLoadError && (
                  <div className="absolute top-12 right-3 left-3 bg-amber-500/95 text-white px-3 py-2 rounded-lg text-xs font-medium backdrop-blur-md shadow-md z-20 flex items-center justify-between gap-2">
                    <span className="flex items-center gap-1.5">
                      <AlertTriangle className="w-4 h-4 shrink-0" />
                      <span>Imgur blocked external hotlinking. Click "Change Flyer" to upload directly.</span>
                    </span>
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="underline font-bold whitespace-nowrap cursor-pointer hover:text-white"
                    >
                      Upload File Now
                    </button>
                  </div>
                )}

                {/* Gradient scrim at base */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080B63]/85 via-transparent to-transparent pointer-events-none" />

                {/* Floating caption at bottom of photo */}
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white z-10">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-blue-200 font-semibold">Visual Showcase</p>
                      <p className="text-base sm:text-lg font-bold leading-tight">Brand Identity & Promotional Design</p>
                    </div>
                    {/* Brand color swatches */}
                    <div className="flex items-center gap-1 bg-white/20 backdrop-blur-md px-2.5 py-1.5 rounded-lg border border-white/20">
                      <span className="w-3.5 h-3.5 rounded-full bg-[#080B63] border border-white/50" title="Deep Navy #080B63" />
                      <span className="w-3.5 h-3.5 rounded-full bg-[#1119A8] border border-white/50" title="Royal Blue #1119A8" />
                      <span className="w-3.5 h-3.5 rounded-full bg-[#7027A5] border border-white/50" title="Accent Purple #7027A5" />
                      <span className="w-3.5 h-3.5 rounded-full bg-[#FFFFFF] border border-slate-300" title="Pure White #FFFFFF" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating creative badge */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-white p-3.5 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3 z-10">
                <div className="w-10 h-10 rounded-lg bg-[#080B63] text-white flex items-center justify-center font-bold">
                  <Sparkles className="w-5 h-5 text-amber-300" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Bespoke Solutions</p>
                  <p className="text-sm font-bold text-[#080B63]">Tailored To Your Brand</p>
                </div>
              </div>

              {/* Floating WhatsApp indicator badge */}
              <div className="absolute -bottom-4 -right-3 sm:-right-5 bg-white p-3 rounded-xl shadow-xl border border-slate-100 flex items-center gap-2.5 z-10">
                <div className="w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 fill-white" />
                </div>
                <div>
                  <p className="text-[11px] text-slate-500 leading-none">Instant Quotes</p>
                  <p className="text-xs font-bold text-slate-900 leading-tight mt-0.5">{BRAND_CONFIG.phoneDisplay}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal: Change Flyer Image Dialog */}
        {showUploaderModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs"
            onClick={() => setShowUploaderModal(false)}
          >
            <div
              className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
                <div className="flex items-center gap-2">
                  <ImageIcon className="w-5 h-5 text-[#1119A8]" />
                  <h3 className="font-bold text-[#080B63] text-lg">Update Hero Flyer Image</h3>
                </div>
                <button
                  onClick={() => setShowUploaderModal(false)}
                  className="p-1 text-slate-400 hover:text-slate-700 rounded-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Notice regarding Imgur */}
              <div className="p-3.5 bg-blue-50 border border-blue-200 rounded-xl text-xs text-blue-900 mb-5 leading-relaxed">
                <strong>Why Imgur links fail:</strong> Imgur often returns a <em>"Content not viewable in your region"</em> or <em>403 Forbidden</em> placeholder on third-party websites due to strict hotlinking restrictions.
                <br />
                <strong>Recommended solution:</strong> Select your flyer file directly from your computer or phone below for crystal-clear resolution that never breaks!
              </div>

              {/* Option 1: Upload from Device */}
              <div className="mb-5">
                <label className="block text-xs font-bold uppercase text-slate-700 mb-2">
                  Option 1: Upload Flyer File from Device (Recommended)
                </label>
                <input
                  type="file"
                  ref={fileInputRef}
                  accept="image/png,image/jpeg,image/webp,image/jpg"
                  onChange={handleFileUpload}
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full py-4 px-4 border-2 border-dashed border-[#1119A8]/30 hover:border-[#1119A8] bg-[#F7F7FA] hover:bg-blue-50/50 rounded-xl flex flex-col items-center justify-center gap-2 transition-colors cursor-pointer group"
                >
                  <div className="w-10 h-10 rounded-full bg-[#1119A8]/10 text-[#1119A8] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Upload className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-bold text-[#080B63]">Choose flyer from your computer or phone</span>
                  <span className="text-xs text-slate-500">Supports PNG, JPG, JPEG, WEBP</span>
                </button>
              </div>

              {/* Option 2: Direct Image URL */}
              <form onSubmit={handleApplyUrl} className="mb-5">
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                  Option 2: Direct Image URL
                </label>
                <div className="flex gap-2">
                  <input
                    type="url"
                    value={customUrlInput}
                    onChange={(e) => setCustomUrlInput(e.target.value)}
                    placeholder="https://.../my-flyer.png"
                    className="flex-1 px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1119A8]"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#080B63] hover:bg-[#1119A8] text-white text-xs font-bold rounded-lg transition-colors cursor-pointer"
                  >
                    Apply URL
                  </button>
                </div>
              </form>

              {/* Option 3: Reset */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <button
                  type="button"
                  onClick={handleResetToDefault}
                  className="text-xs text-slate-500 hover:text-slate-800 flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset to Studio Showcase photo</span>
                </button>
                <button
                  type="button"
                  onClick={() => setShowUploaderModal(false)}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 4-Item Full-Width Capability Strip Below Split */}
        <div className="mt-16 pt-8 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex flex-col">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#1119A8]">Core Principle</span>
            <span className="text-base sm:text-lg font-bold text-[#080B63] mt-0.5">Strategic Branding</span>
            <span className="text-xs text-slate-500 mt-1">Identities crafted with meaning, intention, and longevity</span>
          </div>

          <div className="flex flex-col">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#1119A8]">Quality Standard</span>
            <span className="text-base sm:text-lg font-bold text-[#080B63] mt-0.5">Print & Digital Mastery</span>
            <span className="text-xs text-slate-500 mt-1">CMYK color profiles, bleeds, dielines, and web RGB</span>
          </div>

          <div className="flex flex-col">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#1119A8]">File Formats</span>
            <span className="text-base sm:text-lg font-bold text-[#080B63] mt-0.5">Complete Vectors</span>
            <span className="text-xs text-slate-500 mt-1">Scalable AI, SVG, EPS, PDF, and high-res PNG/JPG exports</span>
          </div>

          <div className="flex flex-col">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#1119A8]">Direct Support</span>
            <span className="text-base sm:text-lg font-bold text-[#080B63] mt-0.5">Prompt WhatsApp</span>
            <span className="text-xs text-slate-500 mt-1">Direct designer-to-client communication without gatekeepers</span>
          </div>
        </div>
      </div>
    </section>
  );
};
