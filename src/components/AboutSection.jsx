import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function AboutSection({ onExploreFull }) {
  const { t, lang } = useLanguage();

  const handleCtaClick = (e) => {
    e.preventDefault();
    if (onExploreFull) {
      onExploreFull();
    } else {
      window.location.hash = '#/about';
    }
  };

  return (
    <li className="page-about" id="page-about">
      <div className="main">
        {/* Section Header (Singular) */}
        <h2 className="underline">
          <span>{t.about.title}</span>
          <span></span>
        </h2>

        {/* 50x50 Layout */}
        <div className="layout-p-50x50 clear-fix about-layout-container">
          {/* Left Column: Corporate Terminal & Tanker Infrastructure Frame */}
          <div className="column-left">
            <div className="image about-executive-image">
              <img
                src="/image/corporate_tanker_terminal.jpg"
                alt="VS International Group LLC - Maritime Logistics & Terminal Infrastructure"
                className="about-portrait-img"
              />
              <div className="image-description">
                <h5>VS INTERNATIONAL GROUP LLC</h5>
                <span className="team-position">{t.about.imageCaption || (lang === 'es' ? 'Infraestructura de Almacenamiento & Logística Marítima' : 'Storage Infrastructure & Maritime Logistics')}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Corporate Information & Core Pillars */}
          <div className="column-right">
            <h3>{t.about.companyName}</h3>
            <span className="occupation-name">{t.about.tagline}</span>

            <p className="padding-top-20" style={{ fontSize: '15px', lineHeight: '1.75', color: '#2C343D' }}>
              {t.about.overview.p1}
            </p>

            <p className="padding-top-15" style={{ fontSize: '14.5px', lineHeight: '1.7', color: '#555E68' }}>
              {t.about.overview.p2}
            </p>

            {/* Strategic Callout Box */}
            <div className="about-strategic-callout">
              <h4>{t.about.callout.title}</h4>
              <p>{t.about.callout.text}</p>
            </div>

            {/* Core Capabilities List using authentic template bullet list */}
            <ul className="list list-1 clear-fix about-core-capabilities">
              {t.about.capabilities.map((cap, idx) => (
                <li key={idx}>
                  <div>{cap}</div>
                </li>
              ))}
            </ul>

            {/* Corporate CTA Button */}
            <div className="about-cta-wrapper">
              <a href="#/about" onClick={handleCtaClick} className="about-cta-btn">
                <span>{t.about.ctaButton}</span>
                <span className="about-cta-arrow">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Features on background with image (Parallax) */}
      <div className="section-background section-background-1 section-parallax about-parallax-section">
        <div className="main">
          <div className="carousel">
            <div className="carousel-content">
              <ul className="feature-list feature-list-style-2 feature-list-icon-large feature-list-icon-top clear-fix layout-p-25x25x25x25 about-feature-list">
                {t.about.pillars.map((item, index) => {
                  const colClasses = [
                    'column-left',
                    'column-center-left',
                    'column-center-right',
                    'column-right'
                  ];
                  return (
                    <li key={index} className={colClasses[index]}>
                      <span className={`icon ${item.icon}`}></span>
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
