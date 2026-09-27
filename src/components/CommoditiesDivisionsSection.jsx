import React from 'react';
import { useLanguage } from '../context/LanguageContext';

// Monochromatic, architectural SVG icons matching the site's corporate aesthetic
const EnergyIcon = ({ size = 20 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2.5C12 2.5 6 9.5 6 15a6 6 0 0 0 12 0c0-5.5-6-12.5-6-12.5z" />
    <path d="M12 18a3 3 0 0 0 3-3c0-1.5-1.5-3-3-4-1.5 1-3 2.5-3 4a3 3 0 0 0 3 3z" fill="currentColor" fillOpacity="0.25" />
  </svg>
);

const MetalsIcon = ({ size = 20 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 18l4.5-8h9L21 18H3z" />
    <path d="M7.5 10L10 5h4l2.5 5" />
    <line x1="12" y1="5" x2="12" y2="18" />
  </svg>
);

const AgricultureIcon = ({ size = 20 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22V6" />
    <path d="M12 2C9.5 4.5 9.5 7 12 9.5C14.5 7 14.5 4.5 12 2Z" fill="currentColor" fillOpacity="0.25" />
    <path d="M12 9.5C8 9.5 6 12 8 15C10 15 12 13 12 9.5Z" />
    <path d="M12 9.5C16 9.5 18 12 16 15C14 15 12 13 12 9.5Z" />
    <path d="M12 14.5C8 14.5 6 17 8 20C10 20 12 18 12 14.5Z" />
    <path d="M12 14.5C16 14.5 18 17 16 20C14 20 12 18 12 14.5Z" />
  </svg>
);

const FinancialIcon = ({ size = 20 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L4 5.5v6c0 5 3.4 9.3 8 10.5 4.6-1.2 8-5.5 8-10.5v-6L12 2z" />
    <path d="M8 14l3-3 2.5 2L16 9.5" />
    <polyline points="13.5 9.5 16 9.5 16 12" />
  </svg>
);

export default function CommoditiesDivisionsSection() {
  const { t, lang } = useLanguage();

  const getDivisionIcon = (id) => {
    switch (id) {
      case 'energy':
        return <EnergyIcon size={20} />;
      case 'metals':
        return <MetalsIcon size={20} />;
      case 'agriculture':
        return <AgricultureIcon size={20} />;
      case 'financial':
        return <FinancialIcon size={20} />;
      default:
        return null;
    }
  };

  const divisions = t.commodities?.divisions || [];

  return (
    <li className="page-commodities" id="page-commodities">
      <div className="main">
        {/* Section Header */}
        <div className="section-title-logo-box">
          <img
            src="/logoblanco.png"
            alt="VS International Group"
            className="section-title-logo"
            style={{ height: '32px', maxHeight: '32px', width: 'auto', maxWidth: '70px', objectFit: 'contain', display: 'inline-block' }}
          />
        </div>
        <h2 className="underline">
          <span>{t.commodities.title}</span>
          <span />
        </h2>

        {/* Subheader */}
        {t.commodities.subtitle && (
          <p className="subheader padding-bottom-30">
            {t.commodities.subtitle}
          </p>
        )}

        {/* 1. TOP: Architectural Image Frame */}
        <div className="commodities-hero-visual-box">
          <div className="commodities-image-wrapper">
            <img
              src="/COMODITY.png"
              alt={t.commodities.imageAlt}
              className="commodities-quadrant-img"
            />
          </div>

          {/* Classic Corporate Caption Bar */}
          <div className="commodities-caption-bar clear-fix">
            <div className="caption-text-left">
              <span className="caption-tag">{t.commodities.badgeSector}</span>
              <span className="caption-sub">
                {lang === 'es'
                  ? 'Abastecimiento físico global, almacenamiento portuario y mitigación de riesgo de capital'
                  : 'Physical global origination, strategic storage terminals, and structured liquidity'}
              </span>
            </div>
            <div className="caption-divisions-right">
              <span>01. {lang === 'es' ? 'ENERGÍA' : 'ENERGY'}</span>
              <span className="sep">•</span>
              <span>02. {lang === 'es' ? 'METALES' : 'METALS'}</span>
              <span className="sep">•</span>
              <span>03. {lang === 'es' ? 'AGRICULTURA' : 'AGRICULTURE'}</span>
              <span className="sep">•</span>
              <span>04. {lang === 'es' ? 'TRADE FINANCE' : 'FINANCIAL'}</span>
            </div>
          </div>
        </div>

        {/* 2. BOTTOM: 4 Structured Institutional Cards Matching Original Template */}
        <ul className="clear-fix commodities-division-list layout-p-25x25x25x25">
          {divisions.map((div, index) => {
            const colClass =
              index === 0
                ? 'column-left'
                : index === 1
                ? 'column-center-left'
                : index === 2
                ? 'column-center-right'
                : 'column-right';

            return (
              <li key={div.id} className={colClass}>
                <div className="commodities-card-wrap">
                  {/* Card Header with Monochromatic Icon Box & Category Label */}
                  <div className="card-top-row">
                    <div className="commodities-icon-box">
                      {getDivisionIcon(div.id)}
                    </div>
                    <span className="division-category-label">{div.badge}</span>
                  </div>

                  {/* Division Title */}
                  <h4 className="division-card-title">{div.title}</h4>

                  {/* Division Description */}
                  <p className="division-card-desc">{div.desc}</p>

                  {/* Physical Specifications List */}
                  <ul className="commodities-spec-list">
                    {div.products.map((item, pIdx) => (
                      <li key={pIdx}>
                        <span className="spec-indicator" />
                        <span className="spec-name">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Signature Action Button */}
                  <a
                    href={div.actionLink}
                    className="commodities-action-btn"
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
              </li>
            );
          })}
        </ul>
      </div>
    </li>
  );
}
