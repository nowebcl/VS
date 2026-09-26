import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

// Sophisticated corporate SVG icons for the 4 commodity divisions
const EnergyIcon = ({ size = 22, color = 'currentColor' }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
    <path
      d="M12 2.5C12 2.5 6.5 9.5 6.5 15C6.5 18.0376 8.96243 20.5 12 20.5C15.0376 20.5 17.5 18.0376 17.5 15C17.5 9.5 12 2.5 12 2.5Z"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill={color}
      fillOpacity="0.2"
    />
    <path
      d="M12 18.5C10.6193 18.5 9.5 17.3807 9.5 16C9.5 14.2 11.2 12 12 11C12.8 12 14.5 14.2 14.5 16C14.5 17.3807 13.3807 18.5 12 18.5Z"
      fill={color}
    />
  </svg>
);

const MetalsIcon = ({ size = 22, color = 'currentColor' }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
    <path
      d="M3 17.5L6.5 11.5H17.5L21 17.5H3Z"
      stroke={color}
      strokeWidth="1.8"
      strokeLinejoin="round"
      fill={color}
      fillOpacity="0.2"
    />
    <path d="M5.5 17.5L8.5 12.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    <path d="M18.5 17.5L15.5 12.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    <path
      d="M6.5 11.5L8.5 6.5H15.5L17.5 11.5"
      stroke={color}
      strokeWidth="1.8"
      strokeLinejoin="round"
      fill={color}
      fillOpacity="0.35"
    />
    <path d="M9.5 6.5L8.5 11.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    <path d="M14.5 6.5L15.5 11.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const AgricultureIcon = ({ size = 22, color = 'currentColor' }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
    <path d="M12 22V5" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    <path d="M12 2C10.5 3.5 10.5 5 12 6.5C13.5 5 13.5 3.5 12 2Z" fill={color} stroke={color} strokeWidth="1.2" />
    <path d="M12 6.5C9.5 6.5 8 8 9.5 10C11 10 12 8.5 12 6.5Z" fill={color} fillOpacity="0.3" stroke={color} strokeWidth="1.4" />
    <path d="M12 6.5C14.5 6.5 16 8 14.5 10C13 10 12 8.5 12 6.5Z" fill={color} fillOpacity="0.3" stroke={color} strokeWidth="1.4" />
    <path d="M12 10C9.5 10 8 11.5 9.5 13.5C11 13.5 12 12 12 10Z" fill={color} fillOpacity="0.3" stroke={color} strokeWidth="1.4" />
    <path d="M12 10C14.5 10 16 11.5 14.5 13.5C13 13.5 12 12 12 10Z" fill={color} fillOpacity="0.3" stroke={color} strokeWidth="1.4" />
    <path d="M12 13.5C9.5 13.5 8 15 9.5 17C11 17 12 15.5 12 13.5Z" fill={color} fillOpacity="0.3" stroke={color} strokeWidth="1.4" />
    <path d="M12 13.5C14.5 13.5 16 15 14.5 17C13 17 12 15.5 12 13.5Z" fill={color} fillOpacity="0.3" stroke={color} strokeWidth="1.4" />
  </svg>
);

const FinancialIcon = ({ size = 22, color = 'currentColor' }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
    <path
      d="M12 2L4 5.5V11.5C4 16.5 7.4 20.8 12 22C16.6 20.8 20 16.5 20 11.5V5.5L12 2Z"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill={color}
      fillOpacity="0.15"
    />
    <path d="M8 14.5L11 11.5L13.5 13.5L16 10" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14.5 10H16V11.5" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="8" cy="14.5" r="1.2" fill={color} />
    <circle cx="11" cy="11.5" r="1.2" fill={color} />
    <circle cx="13.5" cy="13.5" r="1.2" fill={color} />
    <circle cx="16" cy="10" r="1.2" fill={color} />
  </svg>
);

export default function CommoditiesDivisionsSection() {
  const { t, lang } = useLanguage();
  const [activeDivision, setActiveDivision] = useState(null);

  const getDivisionIcon = (id, size = 24) => {
    switch (id) {
      case 'energy':
        return <EnergyIcon size={size} color="#0284C7" />;
      case 'metals':
        return <MetalsIcon size={size} color="#D97706" />;
      case 'agriculture':
        return <AgricultureIcon size={size} color="#16A34A" />;
      case 'financial':
        return <FinancialIcon size={size} color="#7C3AED" />;
      default:
        return null;
    }
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

        {/* 1. TOP: FULL-WIDTH PANORAMIC IMAGE SHOWCASE */}
        <div className="commodities-hero-visual-box">
          <div className="commodities-image-wrapper">
            <img
              src="/COMODITY.png"
              alt={t.commodities.imageAlt}
              className="commodities-quadrant-img"
            />

            {/* Subtle dark gradient overlay for badge readability */}
            <div className="commodities-overlay-vignette" />

            {/* Quadrant Badge Overlays matching image sectors with REAL SVG icons */}
            <div
              className={`quadrant-badge badge-metals ${activeDivision === 'metals' ? 'is-badge-active' : ''}`}
              onMouseEnter={() => setActiveDivision('metals')}
              onMouseLeave={() => setActiveDivision(null)}
            >
              <MetalsIcon size={18} color="#F59E0B" />
              <span>{lang === 'es' ? 'Metales' : 'Metals'}</span>
            </div>

            <div
              className={`quadrant-badge badge-agriculture ${activeDivision === 'agriculture' ? 'is-badge-active' : ''}`}
              onMouseEnter={() => setActiveDivision('agriculture')}
              onMouseLeave={() => setActiveDivision(null)}
            >
              <AgricultureIcon size={18} color="#22C55E" />
              <span>{lang === 'es' ? 'Agricultura' : 'Agriculture'}</span>
            </div>

            <div
              className={`quadrant-badge badge-energy ${activeDivision === 'energy' ? 'is-badge-active' : ''}`}
              onMouseEnter={() => setActiveDivision('energy')}
              onMouseLeave={() => setActiveDivision(null)}
            >
              <EnergyIcon size={18} color="#38BDF8" />
              <span>{lang === 'es' ? 'Energía' : 'Energy'}</span>
            </div>

            <div
              className={`quadrant-badge badge-financial ${activeDivision === 'financial' ? 'is-badge-active' : ''}`}
              onMouseEnter={() => setActiveDivision('financial')}
              onMouseLeave={() => setActiveDivision(null)}
            >
              <FinancialIcon size={18} color="#A78BFA" />
              <span>{lang === 'es' ? 'Trade Finance' : 'Financial'}</span>
            </div>
          </div>

          {/* Panoramic Caption Bar */}
          <div className="commodities-caption-bar">
            <div className="caption-text-left">
              <span className="caption-tag">{t.commodities.badgeSector}</span>
              <span className="caption-sub">
                {lang === 'es'
                  ? 'Abastecimiento físico global, almacenamiento portuario y mitigación de riesgo de capital en 4 divisiones estratégicas'
                  : 'Physical global origination, strategic storage terminals, and structured liquidity across four core divisions'}
              </span>
            </div>
            <div className="caption-pills-right">
              <span
                className={`cap-pill ${activeDivision === 'energy' ? 'active-pill' : ''}`}
                onMouseEnter={() => setActiveDivision('energy')}
                onMouseLeave={() => setActiveDivision(null)}
              >
                <EnergyIcon size={16} color="#38BDF8" />
                <span>{lang === 'es' ? 'Energía' : 'Energy'}</span>
              </span>
              <span
                className={`cap-pill ${activeDivision === 'metals' ? 'active-pill' : ''}`}
                onMouseEnter={() => setActiveDivision('metals')}
                onMouseLeave={() => setActiveDivision(null)}
              >
                <MetalsIcon size={16} color="#F59E0B" />
                <span>{lang === 'es' ? 'Metales' : 'Metals'}</span>
              </span>
              <span
                className={`cap-pill ${activeDivision === 'agriculture' ? 'active-pill' : ''}`}
                onMouseEnter={() => setActiveDivision('agriculture')}
                onMouseLeave={() => setActiveDivision(null)}
              >
                <AgricultureIcon size={16} color="#22C55E" />
                <span>{lang === 'es' ? 'Agricultura' : 'Agriculture'}</span>
              </span>
              <span
                className={`cap-pill ${activeDivision === 'financial' ? 'active-pill' : ''}`}
                onMouseEnter={() => setActiveDivision('financial')}
                onMouseLeave={() => setActiveDivision(null)}
              >
                <FinancialIcon size={16} color="#A78BFA" />
                <span>{lang === 'es' ? 'Finanzas' : 'Financial'}</span>
              </span>
            </div>
          </div>
        </div>

        {/* 2. BOTTOM: 4 MODERN CARDS USING ALL THE HORIZONTAL SPACE */}
        <div className="commodities-cards-row">
          {divisions.map((div) => {
            const isSelected = activeDivision === div.id;
            return (
              <div
                key={div.id}
                className={`commodity-division-card card-${div.id} ${isSelected ? 'is-selected' : ''}`}
                onMouseEnter={() => setActiveDivision(div.id)}
                onMouseLeave={() => setActiveDivision(null)}
              >
                {/* Top Colored Accent Stripe */}
                <div className={`card-top-accent accent-${div.id}`} />

                {/* Card Header */}
                <div className="card-header-row">
                  <div className={`card-icon-pill icon-${div.id}`}>
                    {getDivisionIcon(div.id, 24)}
                  </div>
                  <span className="division-badge">{div.badge}</span>
                </div>

                {/* Division Title & Description */}
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

                {/* Modern Full-Width Action Button */}
                <div className="division-action-wrapper">
                  <a
                    href={div.actionLink}
                    className="division-action-btn"
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
                    <span>{div.actionText}</span>
                    <svg viewBox="0 0 20 20" width="16" height="16" fill="currentColor" className="btn-arrow">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </li>
  );
}
