import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function EnergyProductsSection() {
  const { t, lang } = useLanguage();
  const cards = t.energyProducts?.cards || [];

  return (
    <li className="page-energy-products" id="page-energy-products">
      <div className="main">
        {/* Section Header */}
        <div className="section-title-logo-box">
          <img src="/logoblanco.png" alt="VS International Group" className="section-title-logo" />
        </div>
        <h2 className="underline">
          <span>{t.energyProducts.title}</span>
          <span />
        </h2>

        <p className="subheader energy-lead" style={{ color: '#475569', fontSize: '15px', lineHeight: '1.65', marginBottom: '32px' }}>
          {t.energyProducts.subtitle}
        </p>

        {/* Master 50x50 Layout */}
        <div className="energy-products-container">
          {/* Left Column: High-Impact Refinery Image */}
          <div className="energy-hero-column">
            <div className="energy-hero-image-box">
              <img
                src="/image/energy_products.jpg"
                alt={t.energyProducts.imageAlt}
                className="energy-hero-img"
              />
              <div
                className="energy-hero-gradient-overlay"
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0, 33, 78, 0.95) 0%, rgba(0, 33, 78, 0.65) 50%, rgba(0, 33, 78, 0.25) 100%)'
                }}
              />
              <div
                className="energy-hero-text-content"
                style={{
                  position: 'absolute',
                  bottom: '28px',
                  left: '28px',
                  right: '28px',
                  zIndex: 2
                }}
              >
                <span
                  style={{
                    display: 'inline-block',
                    fontSize: '11px',
                    fontWeight: '800',
                    letterSpacing: '2px',
                    color: '#94A3B8',
                    textTransform: 'uppercase',
                    marginBottom: '8px'
                  }}
                >
                  VS International Group LLC
                </span>
                <h3
                  style={{
                    fontSize: '28px',
                    fontWeight: '700',
                    color: '#FFFFFF',
                    margin: '0 0 10px 0',
                    letterSpacing: '0.8px',
                    textTransform: 'uppercase',
                    lineHeight: '1.2'
                  }}
                >
                  {lang === 'es' ? 'Productos de Energía' : 'Our Energy Products'}
                </h3>
                <span
                  style={{
                    display: 'inline-block',
                    fontSize: '11.5px',
                    fontWeight: '600',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    color: '#E2E8F0',
                    background: 'rgba(255, 255, 255, 0.12)',
                    border: '1px solid rgba(255, 255, 255, 0.25)',
                    padding: '5px 12px',
                    borderRadius: '2px'
                  }}
                >
                  {lang === 'es'
                    ? 'Refinería, Terminales & Trading Global'
                    : 'Refinery, Terminals & Global Trading'}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: 5 Exact Product Category Cards (Corporate, Zero Toy Icons, 100% Brand Consistency) */}
          <div className="energy-cards-column" style={{ display: 'flex', flexDirection: 'column', gap: '10px', justifyContent: 'space-between' }}>
            {cards.map((card, idx) => (
              <div
                key={card.id}
                className="energy-product-row-card"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '14px 20px',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E6E6DF',
                  borderLeft: '4px solid #00214E',
                  borderRadius: '2px',
                  boxShadow: '0 2px 6px rgba(0, 33, 78, 0.03)',
                  transition: 'all 0.2s ease',
                  gap: '16px'
                }}
              >
                {/* Clean Corporate Index Marker */}
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '2px',
                    backgroundColor: '#F7F7F2',
                    border: '1px solid #E6E6DF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '11px',
                    fontWeight: '800',
                    color: '#00214E',
                    letterSpacing: '0.5px',
                    flexShrink: 0
                  }}
                >
                  0{idx + 1}
                </div>

                {/* Category Title */}
                <div style={{ width: '190px', flexShrink: 0 }}>
                  <h4
                    style={{
                      margin: 0,
                      fontSize: '14.5px',
                      fontWeight: '700',
                      color: '#00214E',
                      letterSpacing: '0.4px',
                      textTransform: 'uppercase'
                    }}
                  >
                    {lang === 'es' ? card.name : card.nameOriginal || card.name}
                  </h4>
                </div>

                {/* Divider Line */}
                <div style={{ width: '1px', height: '24px', backgroundColor: '#E2E8F0', flexShrink: 0 }} />

                {/* Product Specifications */}
                <div style={{ flexGrow: 1 }}>
                  <p
                    style={{
                      margin: 0,
                      fontSize: '13.5px',
                      color: '#334155',
                      lineHeight: '1.45',
                      fontWeight: '500'
                    }}
                  >
                    {card.products}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Trading Specs Strip - Clean Corporate Navy */}
        <div
          className="energy-specs-strip"
          style={{
            marginTop: '32px',
            backgroundColor: '#00214E',
            color: '#FFFFFF',
            borderRadius: '2px',
            padding: '18px 28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
            gap: '16px',
            boxShadow: '0 4px 16px rgba(0, 33, 78, 0.12)'
          }}
        >
          <div className="spec-item" style={{ textAlign: 'center' }}>
            <span style={{ display: 'block', fontSize: '10.5px', fontWeight: '800', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '3px' }}>
              {lang === 'es' ? 'Certificación de Calidad:' : 'Quality Testing:'}
            </span>
            <span style={{ fontSize: '13.5px', fontWeight: '700', color: '#FFFFFF', letterSpacing: '0.4px' }}>
              SGS / Saybolt / Inspectorate
            </span>
          </div>

          <div style={{ width: '1px', height: '28px', backgroundColor: 'rgba(255, 255, 255, 0.15)' }} />

          <div className="spec-item" style={{ textAlign: 'center' }}>
            <span style={{ display: 'block', fontSize: '10.5px', fontWeight: '800', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '3px' }}>
              {lang === 'es' ? 'Incoterms Habituales:' : 'Standard Incoterms:'}
            </span>
            <span style={{ fontSize: '13.5px', fontWeight: '700', color: '#FFFFFF', letterSpacing: '0.4px' }}>
              FOB / CIF / TTT / TTO
            </span>
          </div>

          <div style={{ width: '1px', height: '28px', backgroundColor: 'rgba(255, 255, 255, 0.15)' }} />

          <div className="spec-item" style={{ textAlign: 'center' }}>
            <span style={{ display: 'block', fontSize: '10.5px', fontWeight: '800', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '3px' }}>
              {lang === 'es' ? 'Entrega & Almacenamiento:' : 'Delivery & Terminals:'}
            </span>
            <span style={{ fontSize: '13.5px', fontWeight: '700', color: '#FFFFFF', letterSpacing: '0.4px' }}>
              Houston • Rotterdam • Fujairah • Singapore
            </span>
          </div>
        </div>
      </div>
    </li>
  );
}
