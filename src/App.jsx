import React from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import HeaderHero from './components/HeaderHero';
import NavigationBar from './components/NavigationBar';
import AboutSection from './components/AboutSection';
import CommoditiesDivisionsSection from './components/CommoditiesDivisionsSection';
import EnergyProductsSection from './components/EnergyProductsSection';
import ServicesSection from './components/ServicesSection';
import PortfolioSection from './components/PortfolioSection';
import TeamSection from './components/TeamSection';
import BlogSection from './components/BlogSection';
import PricingSection from './components/PricingSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

import AboutDetailPage from './components/AboutDetailPage';

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
  const [isAboutFull, setIsAboutFull] = React.useState(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      const path = window.location.pathname;
      return hash === '#/about' || hash === '#about-details' || hash === '#about-full' || path === '/about';
    }
    return false;
  });

  React.useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      const path = window.location.pathname;
      const match = hash === '#/about' || hash === '#about-details' || hash === '#about-full' || path === '/about';
      setIsAboutFull(match);
      if (match) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('popstate', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handleHashChange);
    };
  }, []);

  const navigateToHome = () => {
    setIsAboutFull(false);
    window.location.hash = '#page-about';
    setTimeout(() => {
      const el = document.getElementById('page-about');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 60);
  };

  const navigateToAboutFull = () => {
    setIsAboutFull(true);
    window.location.hash = '#/about';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isAboutFull) {
    return (
      <div className="atrium-app">
        <AboutDetailPage onBack={navigateToHome} />
        <Footer />
        <MinimalLangButton />
      </div>
    );
  }

  return (
    <div className="atrium-app">
      <ul className="page-list" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {/* Home Page */}
        <li className="page-home" id="page-home">
          <HeaderHero />
          <NavigationBar />
        </li>

        {/* About Page */}
        <AboutSection onExploreFull={navigateToAboutFull} />

        {/* Commodities Divisions Page */}
        <CommoditiesDivisionsSection />

        {/* Energy Products Page */}
        <EnergyProductsSection />

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
