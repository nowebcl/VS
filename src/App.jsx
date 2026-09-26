import React from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import HeaderHero from './components/HeaderHero';
import NavigationBar from './components/NavigationBar';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import PortfolioSection from './components/PortfolioSection';
import TeamSection from './components/TeamSection';
import BlogSection from './components/BlogSection';
import PricingSection from './components/PricingSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function MinimalLangButton() {
  const { lang, toggleLang } = useLanguage();
  return (
    <button
      onClick={toggleLang}
      className="minimal-lang-button"
      title={lang === 'en' ? 'Cambiar a Español' : 'Switch to English'}
      aria-label="Language switcher"
    >
      <span className={lang === 'en' ? 'active-lang' : 'inactive-lang'}>EN</span>
      <span className="lang-slash">/</span>
      <span className={lang === 'es' ? 'active-lang' : 'inactive-lang'}>ES</span>
    </button>
  );
}

function MainApp() {
  return (
    <div className="atrium-app">
      <ul className="page-list" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {/* Home Page */}
        <li className="page-home" id="page-home">
          <HeaderHero />
          <NavigationBar />
        </li>

        {/* About Page */}
        <AboutSection />

        {/* Services Page */}
        <ServicesSection />

        {/* Portfolio Page */}
        <PortfolioSection />

        {/* Team Page */}
        <TeamSection />

        {/* Blog Page */}
        <BlogSection />

        {/* Pricing Plans Page */}
        <PricingSection />

        {/* Contact Page */}
        <ContactSection />
      </ul>

      {/* Footer */}
      <Footer />

      {/* Minimal Single Language Switcher */}
      <MinimalLangButton />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <MainApp />
    </LanguageProvider>
  );
}
