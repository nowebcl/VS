import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function AboutDetailPage({ onBack }) {
  const { t, lang, toggleLang } = useLanguage();
  const data = t.aboutFull;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleBack = (e) => {
    e.preventDefault();
    if (onBack) onBack();
    else window.location.hash = '#page-home';
  };

  const handleContact = (e) => {
    e.preventDefault();
    if (onBack) onBack();
    window.location.hash = '#page-contact';
  };

  return (
    <div className="about-detail-view">
      {/* Top Corporate Navigation Bar (Matching Main Site) */}
      <header className="about-detail-header">
        <div className="about-detail-header-inner">
          {/* Brand Lockup: Logo with Subtle Thinner Typography Below */}
          <a
            href="#page-home"
            onClick={handleBack}
            className="about-detail-brand"
            title="VS International Group LLC"
          >
            <img
              src="/image/logo.png"
              alt="VS International Group"
              className="about-detail-logo-img"
            />
            <span className="about-detail-brand-text">
              VS INTERNATIONAL GROUP LLC
            </span>
          </a>

          {/* Action Links & Language Switcher */}
          <div className="about-detail-header-actions">
            <button
              onClick={handleBack}
              className="about-detail-back-btn"
              title={data.backButton}
              aria-label={data.backButton}
            >
              <svg
                className="about-detail-back-icon"
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
            </button>

            <button
              onClick={toggleLang}
              className="about-detail-lang-btn"
              title={lang === 'en' ? 'Cambiar a Español' : 'Switch to English'}
              aria-label="Language selector"
            >
              <span className={lang === 'en' ? 'lang-active' : 'lang-inactive'}>EN</span>
              <span className="lang-divider">/</span>
              <span className={lang === 'es' ? 'lang-active' : 'lang-inactive'}>ES</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Corporate Content */}
      <main className="about-detail-main">
        {/* Section Header with Authentic Underline */}
        <div className="about-detail-title-box">
          <span className="about-detail-kicker">
            VS International Group LLC
          </span>
          <h1 className="about-detail-title underline">
            <span>{data.title}</span>
            <span></span>
          </h1>
          <p className="subheader about-detail-subtitle">
            {data.subtitle}
          </p>
        </div>

        {/* Section 1: Executive Overview (Portrait + Institutional Copy) */}
        <section className="about-detail-section about-detail-overview">
          {/* Corporate Infrastructure Frame */}
          <div className="about-detail-portrait-col">
            <div className="image about-executive-image">
              <img
                src="/image/corporate_tanker_terminal.jpg"
                alt="VS International Group LLC - Maritime Logistics & Terminal Infrastructure"
                className="about-detail-portrait-img"
              />
              <div className="image-description">
                <h5>VS INTERNATIONAL GROUP LLC</h5>
                <span className="team-position">{lang === 'es' ? 'Infraestructura de Terminales & Logística Marítima' : 'Terminal Storage Infrastructure & Maritime Logistics'}</span>
              </div>
            </div>
          </div>

          {/* Lead Copy */}
          <div className="about-detail-lead-col">
            <div className="about-lead-statement">
              {data.intro.lead}
            </div>

            <p className="about-body-text">
              {data.intro.p1}
            </p>

            <div className="about-highlight-callout">
              {data.intro.highlight}
            </div>

            <p className="about-body-text">
              {data.intro.p2}
            </p>
          </div>
        </section>

        {/* Section 2: Transaction Platform */}
        <section className="about-detail-section about-platform-card">
          <div className="about-platform-header">
            <span className="about-section-tag">
              Posicionamiento Corporativo
            </span>
            <h3 className="about-section-h3">
              {data.platform.title}
            </h3>
            <p className="about-lead-bold">
              {data.platform.lead}
            </p>
            <p className="about-body-text">
              {data.platform.p1}
            </p>
          </div>

          <div className="about-roles-container">
            <h4 className="about-roles-title">
              {data.platform.roleTitle}
            </h4>

            {/* Roles list using authentic template bullet list */}
            <ul className="list list-1 clear-fix about-roles-list">
              {data.platform.roles.map((role, idx) => (
                <li key={idx}>
                  <div>{role}</div>
                </li>
              ))}
            </ul>

            {/* Objective statement */}
            <div className="about-objective-quote">
              <span className="about-objective-tag">
                Objetivo Corporativo Principal
              </span>
              <div className="about-objective-text">
                “{data.platform.objective}”
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Strategic Markets (Energy & Petroleum Products) */}
        <section className="about-detail-section about-markets-banner">
          <span className="about-markets-tag">
            Trading Focus
          </span>
          <h3 className="about-markets-h3">
            {data.markets.title}
          </h3>
          <p className="about-markets-lead">
            {data.markets.lead}
          </p>

          <div className="about-products-wrapper">
            <div className="about-products-label">
              {data.markets.productsTitle}
            </div>
            <div className="about-products-grid">
              {data.markets.products.map((prod, pIdx) => (
                <div key={pIdx} className="about-product-badge">
                  {prod}
                </div>
              ))}
            </div>
          </div>

          <p className="about-markets-footer">
            {data.markets.footerText}
          </p>
        </section>

        {/* Section 4: The VSIG Difference */}
        <section className="about-detail-section about-difference-section">
          <div className="about-subheading-box">
            <span className="about-section-tag">
              Ventaja Competitiva
            </span>
            <h3 className="about-section-h3 underline">
              <span>{data.difference.title}</span>
              <span></span>
            </h3>
          </div>

          <div className="about-difference-grid">
            {data.difference.items.map((item, idx) => (
              <div key={idx} className="about-diff-card">
                <div className="about-diff-index">0{idx + 1}</div>
                <h4 className="about-diff-title">{item.title}</h4>
                <p className="about-diff-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Corporate Principles */}
        <section className="about-detail-section about-principles-section">
          <div className="about-subheading-box">
            <span className="about-section-tag">
              Filosofía Operativa
            </span>
            <h3 className="about-section-h3 underline">
              <span>{data.principles.title}</span>
              <span></span>
            </h3>
          </div>

          <div className="about-principles-list">
            {data.principles.list.map((principle, idx) => (
              <div key={idx} className="about-principle-item">
                <span className="about-principle-name">{principle.name}.</span>
                <span className="about-principle-text">{principle.text}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: Corporate Vision & Execution Steps */}
        <section className="about-detail-section about-vision-section">
          <span className="about-section-tag">
            Horizonte Estratégico
          </span>
          <h3 className="about-section-h3">
            {data.vision.title}
          </h3>
          <p className="about-vision-lead">
            {data.vision.lead}
          </p>

          <div className="about-vision-steps-box">
            <span className="about-vision-sublead">
              {data.vision.sublead}
            </span>
            <div className="about-vision-steps-grid">
              {data.vision.steps.map((step, sIdx) => (
                <div key={sIdx} className="about-vision-step-item">
                  <span className="step-num">{sIdx + 1}</span>
                  <span className="step-label">{step}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="about-vision-footer">
            <div className="about-vision-company">{data.vision.company}</div>
            <div className="about-vision-tagline">{data.vision.tagline}</div>
          </div>
        </section>

        {/* Section 7: Action Callout Bottom Bar */}
        <section className="about-detail-section about-cta-bottom-bar">
          <div className="about-cta-info">
            <h4 className="about-cta-company">VS International Group LLC</h4>
            <p className="about-cta-desk">Structured Commodities Trading & Commercial Solutions Desk</p>
          </div>

          <div className="about-cta-buttons">
            <a href="#page-contact" onClick={handleContact} className="about-cta-contact-btn">
              <span>{data.ctaContact}</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>

            <button onClick={handleBack} className="about-cta-back-btn">
              <span>{data.backButton}</span>
            </button>
          </div>
        </section>
      </main>

      {/* Corporate Dedicated Footer */}
      <footer className="about-detail-footer">
        <div className="about-detail-footer-inner">
          <div className="about-detail-footer-copy">
            &copy; 2026 VS INTERNATIONAL GROUP LLC. {lang === 'es' ? 'Todos los derechos reservados.' : 'All Rights Reserved.'}
          </div>
          <div className="about-detail-footer-dev">
            <span>{lang === 'es' ? 'Desarrollado por ' : 'Developed by '}</span>
            <a href="https://www.instagram.com/noweb.dev/" target="_blank" rel="noopener noreferrer" className="noweb-signature-link">noweb.dev</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
