import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function CommoditiesDivisionsSection() {
  const { t, lang } = useLanguage();
  const [activeDivision, setActiveDivision] = useState(null);

  const divisionIcons = {
    energy: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
        <path d="M12 2C12 2 8 7 8 12C8 15 10 17 10 17C10 17 9 14.5 11 12C13 9.5 14.5 8 14.5 8C14.5 8 14 11 15.5 13C17 15 18 17 18 19C18 23 15 25 12 25C7.5 25 4 21.5 4 17C4 10.5 9.5 5.5 12 2Z" />
      </svg>
    ),
    metals: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
        <path d="M4 19L7 8H17L20 19H4ZM12 4L15 7H9L12 4Z" />
      </svg>
    ),
    agriculture: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
        <path d="M12 2C8 6 6 11 6 16C6 19.3 8.7 22 12 22C15.3 22 18 19.3 18 16C18 11 16 6 12 2ZM12 20C9.8 20 8 18.2 8 16C8 12.5 9.5 8.5 12 5.5C14.5 8.5 16 12.5 16 16C16 18.2 14.2 20 12 20Z" />
      </svg>
    ),
    financial: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
        <path d="M12 2L2 7L12 12L22 7L12 2ZM2 17L12 22L22 17V15L12 20L2 15V17ZM2 12L12 17L22 12V10L12 15L2 10V12Z" />
      </svg>
    )
  };

  const divisions = t.commodities?.divisions || [];

  return (
    <li className="page-commodities" id="page-commodities">
      <div className="main">
        {/* Underline Section Title */}
        <h2 className="underline">
          <span>{t.commodities.title}</span>
          <span />
        </h2>

        {/* Section Subheader */}
        <p className="subheader commodities-lead">
          {t.commodities.subtitle}
        </p>

        {/* Main Grid: Visual Quadrant Showcase + 4 Executive Division Cards */}
        <div className="commodities-showcase-container">
          {/* Left / Top Showcase: COMODITY.png with luxury frame and sector badges */}
          <div className="commodities-visual-card">
            <div className="commodities-image-wrapper">
              <img
                src="/COMODITY.png"
                alt={t.commodities.imageAlt}
                className="commodities-quadrant-img"
              />

              {/* Quadrant Badge Overlays matching image sectors */}
              <div className="quadrant-badge badge-metals">
                <span className="badge-dot" style={{ backgroundColor: '#eab308' }} />
                <span>{lang === 'es' ? 'Metales' : 'Metals'}</span>
              </div>

              <div className="quadrant-badge badge-agriculture">
                <span className="badge-dot" style={{ backgroundColor: '#22c55e' }} />
                <span>{lang === 'es' ? 'Agricultura' : 'Agriculture'}</span>
              </div>

              <div className="quadrant-badge badge-energy">
                <span className="badge-dot" style={{ backgroundColor: '#0284c7' }} />
                <span>{lang === 'es' ? 'Energía' : 'Energy'}</span>
              </div>

              <div className="quadrant-badge badge-financial">
                <span className="badge-dot" style={{ backgroundColor: '#8b5cf6' }} />
                <span>{lang === 'es' ? 'Trade Finance' : 'Financial'}</span>
              </div>
            </div>

            <div className="commodities-caption-bar">
              <span className="caption-tag">{t.commodities.badgeSector}</span>
              <span className="caption-sub">
                {lang === 'es'
                  ? 'Abastecimiento físico global, almacenamiento portuario y mitigación de riesgo de capital'
                  : 'Physical global origination, strategic storage terminals, and structured liquidity'}
              </span>
            </div>
          </div>

          {/* Right / Grid of 4 Corporate Division Cards */}
          <div className="commodities-cards-grid">
            {divisions.map((div) => {
              const isSelected = activeDivision === div.id;
              return (
                <div
                  key={div.id}
                  className={`commodity-division-card ${isSelected ? 'is-selected' : ''}`}
                  onMouseEnter={() => setActiveDivision(div.id)}
                  onMouseLeave={() => setActiveDivision(null)}
                >
                  <div className="card-header-row">
                    <div className={`card-icon-pill icon-${div.id}`}>
                      {divisionIcons[div.id]}
                    </div>
                    <span className="division-badge">{div.badge}</span>
                  </div>

                  <h3 className="division-title">{div.title}</h3>
                  <p className="division-desc">{div.desc}</p>

                  {/* Product Tag Pills */}
                  <div className="division-products-pills">
                    {div.products.map((item, pIdx) => (
                      <span key={pIdx} className="product-chip">
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* Action Link */}
                  <div className="division-action-wrapper">
                    <a
                      href={div.actionLink}
                      className="division-action-link"
                      onClick={(e) => {
                        if (div.actionLink.startsWith('#')) {
                          e.preventDefault();
                          const target = document.querySelector(div.actionLink);
                          if (target) {
                            const navOffset = 75;
                            const elementPosition = target.getBoundingClientRect().top + window.scrollY;
                            window.scrollTo({
                              top: elementPosition - navOffset,
                              behavior: 'smooth'
                            });
                          }
                        }
                      }}
                    >
                      {div.actionText}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </li>
  );
}
