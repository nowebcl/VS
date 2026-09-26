import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function EnergyProductsSection() {
  const { t, lang } = useLanguage();

  const productIcons = {
    'middle-distillates': (
      <svg
        viewBox="0 0 32 32"
        width="38"
        height="38"
        fill="none"
        className="energy-prod-icon"
      >
        {/* Flame main body */}
        <path
          d="M16 2.5C16 2.5 10 9 10 15.5C10 19.5 12.5 21 12.5 21C12.5 21 11.2 17.5 13.5 14C15.5 11 17.5 9 17.5 9C17.5 9 16.5 13 18.5 15.2C20.5 17.4 22 20 22 23C22 27.5 18.5 30 16 30C10.5 30 6 25.5 6 19.5C6 11.5 13 5.5 16 2.5Z"
          fill="#22c55e"
        />
        {/* Inner flame core */}
        <path
          d="M16 29C13.2 29 11.5 26.8 11.5 24C11.5 21.2 13.2 19 14.2 17.5C15.2 19 16 20.2 16 20.2C16 20.2 17 18.8 17.8 20.2C18.8 21.8 18.8 23.2 18.8 24C18.8 26.8 17.2 29 16 29Z"
          fill="#16a34a"
        />
      </svg>
    ),
    'heavy-fuel': (
      <svg
        viewBox="0 0 32 32"
        width="38"
        height="38"
        fill="none"
        className="energy-prod-icon"
      >
        {/* Chemical flask body */}
        <path
          d="M13 3.5H19M14 3.5V10.5L7.5 24C6.5 26.2 8.1 28.5 10.5 28.5H21.5C23.9 28.5 25.5 26.2 24.5 24L18 10.5V3.5"
          stroke="#84cc16"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Flask liquid fill */}
        <path
          d="M9.6 20.5L22.4 20.5L23.8 23.5C24.3 24.8 23.3 26.5 21.8 26.5H10.2C8.7 26.5 7.7 24.8 8.2 23.5L9.6 20.5Z"
          fill="#84cc16"
        />
        {/* Rising reaction bubbles */}
        <circle cx="13" cy="15.5" r="1.3" fill="#84cc16" />
        <circle cx="18" cy="17" r="1" fill="#84cc16" />
        <circle cx="15" cy="23.5" r="1.2" fill="#ffffff" />
        <circle cx="19" cy="24.5" r="0.9" fill="#ffffff" />
      </svg>
    ),
    'bitumen': (
      <svg
        viewBox="0 0 36 36"
        width="40"
        height="40"
        fill="none"
        className="energy-prod-icon"
      >
        {/* Paver machine cabin */}
        <path d="M8 22H25V14L20 7H14L8 14V22Z" fill="#ea580c" />
        <path d="M14 9.5H19L22.5 14H10.5L14 9.5Z" fill="#ffffff" />
        {/* Track chassis */}
        <rect
          x="5"
          y="23"
          width="26"
          height="6.5"
          rx="3.25"
          stroke="#ea580c"
          strokeWidth="2"
          fill="#fff7ed"
        />
        {/* Track wheels */}
        <circle cx="9" cy="26.25" r="1.3" fill="#ea580c" />
        <circle cx="13.5" cy="26.25" r="1.3" fill="#ea580c" />
        <circle cx="18" cy="26.25" r="1.3" fill="#ea580c" />
        <circle cx="22.5" cy="26.25" r="1.3" fill="#ea580c" />
        <circle cx="27" cy="26.25" r="1.3" fill="#ea580c" />
        {/* Front roller arm / screed */}
        <path
          d="M25 18L31 22V27.5H29"
          stroke="#ea580c"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    'naphtha': (
      <svg
        viewBox="0 0 32 32"
        width="38"
        height="38"
        fill="none"
        className="energy-prod-icon"
      >
        {/* Outer compass ring */}
        <circle cx="16" cy="16" r="10.5" stroke="#d97706" strokeWidth="2" />
        {/* North */}
        <polygon points="16,3 18.5,14 16,16" fill="#d97706" />
        <polygon points="16,3 13.5,14 16,16" fill="#b45309" />
        {/* South */}
        <polygon points="16,29 13.5,18 16,16" fill="#d97706" />
        <polygon points="16,29 18.5,18 16,16" fill="#b45309" />
        {/* East */}
        <polygon points="29,16 18,13.5 16,16" fill="#d97706" />
        <polygon points="29,16 18,18.5 16,16" fill="#b45309" />
        {/* West */}
        <polygon points="3,16 14,18.5 16,16" fill="#d97706" />
        <polygon points="3,16 14,13.5 16,16" fill="#b45309" />
        {/* Center core */}
        <circle
          cx="16"
          cy="16"
          r="2.4"
          fill="#ffffff"
          stroke="#d97706"
          strokeWidth="1.6"
        />
      </svg>
    ),
    'crude-oil': (
      <svg
        viewBox="0 0 32 32"
        width="38"
        height="38"
        fill="none"
        className="energy-prod-icon"
      >
        {/* Center ring */}
        <circle
          cx="16"
          cy="16"
          r="6"
          stroke="#dc2626"
          strokeWidth="2.5"
          fill="#fee2e2"
        />
        {/* 8 radiant sun rays */}
        <line
          x1="16"
          y1="3.5"
          x2="16"
          y2="7.5"
          stroke="#dc2626"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <line
          x1="16"
          y1="24.5"
          x2="16"
          y2="28.5"
          stroke="#dc2626"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <line
          x1="3.5"
          y1="16"
          x2="7.5"
          y2="16"
          stroke="#dc2626"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <line
          x1="24.5"
          y1="16"
          x2="28.5"
          y2="16"
          stroke="#dc2626"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <line
          x1="7.2"
          y1="7.2"
          x2="10"
          y2="10"
          stroke="#dc2626"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <line
          x1="22"
          y1="22"
          x2="24.8"
          y2="24.8"
          stroke="#dc2626"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <line
          x1="7.2"
          y1="24.8"
          x2="10"
          y2="22"
          stroke="#dc2626"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <line
          x1="22"
          y1="10"
          x2="24.8"
          y2="7.2"
          stroke="#dc2626"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    )
  };

  const cards = t.energyProducts?.cards || [];

  return (
    <li className="page-energy-products" id="page-energy-products">
      <div className="main">
        {/* Section Header */}
        <h2 className="underline">
          <span>{t.energyProducts.title}</span>
          <span />
        </h2>

        <p className="subheader energy-lead">
          {t.energyProducts.subtitle}
        </p>

        {/* Master 50x50 Layout matching media_1790452969188.png */}
        <div className="energy-products-container">
          {/* Left Column: High-Impact Refinery Image with "Our Energy Products" overlay */}
          <div className="energy-hero-column">
            <div className="energy-hero-image-box">
              <img
                src="/image/energy_products.jpg"
                alt={t.energyProducts.imageAlt}
                className="energy-hero-img"
              />
              <div className="energy-hero-gradient-overlay" />
              <div className="energy-hero-text-content">
                <h3 className="energy-hero-display-title">
                  Our Energy Products
                </h3>
                <span className="energy-hero-tagline">
                  {lang === 'es'
                    ? 'Refinería, Terminales & Trading Global'
                    : 'Refinery, Terminals & Global Trading'}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: 5 Exact Product Category Cards */}
          <div className="energy-cards-column">
            {cards.map((card) => (
              <div key={card.id} className="energy-product-row-card">
                {/* Icon box */}
                <div className={`energy-icon-holder icon-${card.id}`}>
                  {productIcons[card.id]}
                </div>

                {/* Category Title */}
                <div className="energy-category-title-box">
                  <h4 className="energy-category-title">
                    {lang === 'es' ? card.name : card.nameOriginal || card.name}
                  </h4>
                </div>

                {/* Product Specifications */}
                <div className="energy-products-list-box">
                  <p className="energy-products-list">
                    {card.products}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Trading Specs Strip */}
        <div className="energy-specs-strip">
          <div className="spec-item">
            <span className="spec-label">{lang === 'es' ? 'Certificación de Calidad:' : 'Quality Testing:'}</span>
            <span className="spec-val">SGS / Saybolt / Inspectorate</span>
          </div>
          <div className="spec-divider" />
          <div className="spec-item">
            <span className="spec-label">{lang === 'es' ? 'Incoterms Habituales:' : 'Standard Incoterms:'}</span>
            <span className="spec-val">FOB / CIF / TTT / TTO</span>
          </div>
          <div className="spec-divider" />
          <div className="spec-item">
            <span className="spec-label">{lang === 'es' ? 'Entrega & Almacenamiento:' : 'Delivery & Terminals:'}</span>
            <span className="spec-val">Houston • Rotterdam • Fujairah • Singapore</span>
          </div>
        </div>
      </div>
    </li>
  );
}
