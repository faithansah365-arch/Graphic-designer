/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { About } from './components/About.tsx';
import { Services } from './components/Services.tsx';
import { Portfolio } from './components/Portfolio.tsx';
import { Contact } from './components/Contact.tsx';
import { Footer } from './components/Footer.tsx';
import { FloatingWhatsApp } from './components/FloatingWhatsApp.tsx';

export default function App() {
  const [selectedServicePreset, setSelectedServicePreset] = useState<string>('Branding');
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('app_theme');
      if (saved === 'dark' || saved === 'light') return saved;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      localStorage.setItem('app_theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('app_theme', 'light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceAndContact = (serviceTitle: string) => {
    setSelectedServicePreset(serviceTitle);
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#040620] text-[#151515] dark:text-[#F8FAFC] flex flex-col font-sans selection:bg-[#1119A8] selection:text-white transition-colors duration-300">
      {/* Top Navigation with Theme Toggle */}
      <Navbar
        onNavigateToContact={() => scrollToSection('contact')}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* A. Hero Section */}
        <Hero
          onGetStarted={() => scrollToSection('contact')}
          onViewServices={() => scrollToSection('services')}
        />

        {/* B. About Section */}
        <About onExploreServices={() => scrollToSection('services')} />

        {/* C. Services Section (7 Services) */}
        <Services onRequestService={handleSelectServiceAndContact} />

        {/* D. Portfolio / Selected Works */}
        <Portfolio onRequestProjectService={handleSelectServiceAndContact} />

        {/* E. Contact & Get a Quote Section */}
        <Contact
          selectedServicePreset={selectedServicePreset}
          onClearServicePreset={() => setSelectedServicePreset('Branding')}
        />
      </main>

      {/* F. Floating WhatsApp Action */}
      <FloatingWhatsApp />

      {/* G. Footer */}
      <Footer onSelectService={handleSelectServiceAndContact} />
    </div>
  );
}
