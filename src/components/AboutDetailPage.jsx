import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function AboutDetailPage({ onBack }) {
  const { t, lang, toggleLang } = useLanguage();
  const data = t.aboutFull;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="about-detail-page" style={{ backgroundColor: '#FFFFFF', minHeight: '100vh', color: '#1E293B', fontFamily: "'Open Sans', sans-serif" }}>
      {/* Top Corporate Navigation Bar */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          backgroundColor: '#00214E',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 4px 20px rgba(0, 33, 78, 0.15)'
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '14px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          {/* Logo */}
          <a
            href="#page-home"
            onClick={(e) => {
              e.preventDefault();
              if (onBack) onBack();
              else window.location.hash = '#page-home';
            }}
            style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}
          >
            <img
              src="/image/logo.png"
              alt="VS International Group"
              style={{ maxHeight: '48px', width: 'auto', objectFit: 'contain' }}
            />
          </a>

          {/* Action Links & Lang Switcher */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <button
              onClick={() => {
                if (onBack) onBack();
                else window.location.hash = '#page-about';
              }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '9px 18px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                color: '#FFFFFF',
                fontSize: '13px',
                fontWeight: '600',
                letterSpacing: '0.6px',
                cursor: 'pointer',
                borderRadius: '2px',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)')}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              <span>{data.backButton}</span>
            </button>

            <button
              onClick={toggleLang}
              style={{
                backgroundColor: 'transparent',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                color: '#FFFFFF',
                padding: '6px 14px',
                fontSize: '12px',
                fontWeight: '700',
                cursor: 'pointer',
                borderRadius: '2px',
                letterSpacing: '1px'
              }}
            >
              <span style={{ color: lang === 'en' ? '#FFFFFF' : 'rgba(255, 255, 255, 0.5)' }}>EN</span>
              <span style={{ margin: '0 4px', color: 'rgba(255, 255, 255, 0.4)' }}>/</span>
              <span style={{ color: lang === 'es' ? '#FFFFFF' : 'rgba(255, 255, 255, 0.5)' }}>ES</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 24px 100px 24px' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span
            style={{
              display: 'inline-block',
              fontSize: '11px',
              fontWeight: '800',
              letterSpacing: '2.5px',
              color: '#828D99',
              textTransform: 'uppercase',
              marginBottom: '10px'
            }}
          >
            VS International Group LLC
          </span>
          <h1
            style={{
              fontSize: 'clamp(28px, 3.5vw, 42px)',
              fontWeight: '300',
              color: '#00214E',
              margin: '0 0 12px 0',
              letterSpacing: '1px',
              textTransform: 'uppercase'
            }}
          >
            {data.title}
          </h1>
          <div style={{ width: '60px', height: '3px', backgroundColor: '#00214E', margin: '0 auto 16px auto' }}></div>
          <p
            style={{
              fontFamily: "'Droid Serif', Georgia, serif",
              fontStyle: 'italic',
              fontSize: '18px',
              color: '#4A5568',
              margin: '0'
            }}
          >
            {data.subtitle}
          </p>
        </div>

        {/* Section 1: Executive Overview (Image + Lead Text) */}
        <section
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(320px, 460px) 1fr',
            gap: '48px',
            alignItems: 'start',
            marginBottom: '72px'
          }}
          className="about-detail-grid-responsive"
        >
          {/* Executive Portrait (Complete, Uncropped 3:4) */}
          <div
            style={{
              position: 'relative',
              borderRadius: '2px',
              overflow: 'hidden',
              boxShadow: '0 12px 36px rgba(0, 33, 78, 0.12)',
              border: '1px solid #E6E6DF',
              backgroundColor: '#e8edf3'
            }}
          >
            <div style={{ aspectRatio: '3 / 4', width: '100%', overflow: 'hidden' }}>
              <img
                src="/_sample/home_carousel/image_01.jpg"
                alt="Raquel Cantero - Executive Leadership"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  display: 'block'
                }}
              />
            </div>
            {/* Executive Badge */}
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(to top, rgba(0, 33, 78, 0.95) 0%, rgba(0, 33, 78, 0.7) 65%, transparent 100%)',
                padding: '28px 22px 18px 22px',
                color: '#FFFFFF'
              }}
            >
              <div style={{ fontSize: '17px', fontWeight: '700', letterSpacing: '0.5px' }}>
                {t.about.officerName || 'Raquel Cantero'}
              </div>
              <div style={{ fontSize: '11.5px', color: '#D1D5DB', letterSpacing: '1px', textTransform: 'uppercase', marginTop: '3px' }}>
                {t.about.officerRole || 'Chief Executive Officer (C.E.O.)'}
              </div>
            </div>
          </div>

          {/* Lead Copy */}
          <div>
            <div
              style={{
                fontSize: '17.5px',
                lineHeight: '1.7',
                color: '#00214E',
                fontWeight: '600',
                marginBottom: '20px',
                paddingBottom: '20px',
                borderBottom: '2px solid #E6E6DF'
              }}
            >
              {data.intro.lead}
            </div>

            <p style={{ fontSize: '15px', lineHeight: '1.75', color: '#334155', marginBottom: '20px' }}>
              {data.intro.p1}
            </p>

            <div
              style={{
                padding: '18px 22px',
                backgroundColor: '#F7F7F2',
                borderLeft: '4px solid #00214E',
                marginBottom: '20px',
                fontSize: '16px',
                fontWeight: '700',
                color: '#00214E'
              }}
            >
              {data.intro.highlight}
            </div>

            <p style={{ fontSize: '15px', lineHeight: '1.75', color: '#475569', margin: '0' }}>
              {data.intro.p2}
            </p>
          </div>
        </section>

        {/* Section 2: Transaction Platform */}
        <section
          style={{
            backgroundColor: '#F7F7F2',
            border: '1px solid #E6E6DF',
            borderLeft: '5px solid #00214E',
            padding: '42px 38px',
            marginBottom: '64px',
            boxShadow: '0 4px 18px rgba(0, 33, 78, 0.04)'
          }}
        >
          <div style={{ maxWidth: '850px', marginBottom: '28px' }}>
            <span style={{ fontSize: '11px', fontWeight: '800', letterSpacing: '2px', color: '#828D99', textTransform: 'uppercase' }}>
              Corporate Positioning
            </span>
            <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#00214E', margin: '6px 0 16px 0', letterSpacing: '0.5px' }}>
              {data.platform.title}
            </h2>
            <p style={{ fontSize: '15px', lineHeight: '1.7', color: '#1E293B', fontWeight: '600', marginBottom: '10px' }}>
              {data.platform.lead}
            </p>
            <p style={{ fontSize: '14.5px', lineHeight: '1.7', color: '#4A5568', margin: '0' }}>
              {data.platform.p1}
            </p>
          </div>

          <div style={{ borderTop: '1px solid #E2E8F0', paddingTop: '28px' }}>
            <h4 style={{ fontSize: '13.5px', fontWeight: '800', letterSpacing: '1px', textTransform: 'uppercase', color: '#00214E', marginBottom: '16px' }}>
              {data.platform.roleTitle}
            </h4>

            {/* 8 Roles in Responsive 2-Column Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '10px' }}>
              {data.platform.roles.map((role, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '12px 16px',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #E6E6DF',
                    borderLeft: '3px solid #00214E',
                    borderRadius: '2px'
                  }}
                >
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(0, 33, 78, 0.08)',
                      marginRight: '12px',
                      flexShrink: 0
                    }}
                  >
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#00214E" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span style={{ fontSize: '13.5px', fontWeight: '600', color: '#1E293B', letterSpacing: '0.2px' }}>
                    {role}
                  </span>
                </div>
              ))}
            </div>

            {/* Objective statement */}
            <div
              style={{
                marginTop: '28px',
                padding: '20px 24px',
                backgroundColor: '#FFFFFF',
                border: '1px solid #E2E8F0',
                textAlign: 'center'
              }}
            >
              <span style={{ fontSize: '11px', fontWeight: '800', letterSpacing: '1.5px', color: '#828D99', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>
                Primary Corporate Objective
              </span>
              <div
                style={{
                  fontFamily: "'Droid Serif', Georgia, serif",
                  fontStyle: 'italic',
                  fontSize: '18px',
                  color: '#00214E',
                  fontWeight: '600'
                }}
              >
                “{data.platform.objective}”
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Core Markets (Energy & Petroleum Products) */}
        <section
          style={{
            backgroundColor: '#00214E',
            color: '#FFFFFF',
            borderRadius: '2px',
            padding: '48px 40px',
            marginBottom: '64px',
            boxShadow: '0 8px 28px rgba(0, 33, 78, 0.18)'
          }}
        >
          <span style={{ fontSize: '11px', fontWeight: '800', letterSpacing: '2.5px', color: 'rgba(255, 255, 255, 0.65)', textTransform: 'uppercase' }}>
            Trading Focus
          </span>
          <h2 style={{ fontSize: '26px', fontWeight: '700', color: '#FFFFFF', margin: '8px 0 16px 0', letterSpacing: '0.8px' }}>
            {data.markets.title}
          </h2>
          <p style={{ fontSize: '15px', lineHeight: '1.75', color: '#CBD5E1', maxWidth: '820px', marginBottom: '28px' }}>
            {data.markets.lead}
          </p>

          {/* Product Badges */}
          <div style={{ marginBottom: '28px' }}>
            <div style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', color: '#94A3B8', marginBottom: '14px' }}>
              {data.markets.productsTitle}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {data.markets.products.map((prod, pIdx) => (
                <div
                  key={pIdx}
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.25)',
                    padding: '10px 20px',
                    borderRadius: '2px',
                    fontSize: '13.5px',
                    fontWeight: '700',
                    letterSpacing: '0.6px',
                    color: '#FFFFFF'
                  }}
                >
                  {prod}
                </div>
              ))}
            </div>
          </div>

          <p style={{ fontSize: '13.5px', lineHeight: '1.65', color: '#94A3B8', margin: '0', borderTop: '1px solid rgba(255, 255, 255, 0.15)', paddingTop: '20px' }}>
            {data.markets.footerText}
          </p>
        </section>

        {/* Section 4: The VSIG Difference (4 Luxury Cards) */}
        <section style={{ marginBottom: '64px' }}>
          <div style={{ textAlign: 'center', marginBottom: '38px' }}>
            <span style={{ fontSize: '11px', fontWeight: '800', letterSpacing: '2.5px', color: '#828D99', textTransform: 'uppercase' }}>
              Competitive Edge
            </span>
            <h2 style={{ fontSize: '26px', fontWeight: '700', color: '#00214E', margin: '6px 0 0 0', letterSpacing: '0.8px' }}>
              {data.difference.title}
            </h2>
            <div style={{ width: '40px', height: '2px', backgroundColor: '#00214E', margin: '12px auto 0 auto' }}></div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {data.difference.items.map((item, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#F7F7F2',
                  border: '1px solid #E6E6DF',
                  borderLeft: '4px solid #00214E',
                  padding: '28px 24px',
                  boxShadow: '0 4px 14px rgba(0, 33, 78, 0.04)'
                }}
              >
                <div style={{ fontSize: '11px', fontWeight: '800', color: '#828D99', letterSpacing: '1.5px', marginBottom: '8px' }}>
                  0{idx + 1}
                </div>
                <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#00214E', margin: '0 0 14px 0', letterSpacing: '0.4px', textTransform: 'uppercase' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '14px', lineHeight: '1.7', color: '#4A5568', margin: '0' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Principles */}
        <section style={{ marginBottom: '64px' }}>
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <span style={{ fontSize: '11px', fontWeight: '800', letterSpacing: '2.5px', color: '#828D99', textTransform: 'uppercase' }}>
              Core Philosophy
            </span>
            <h2 style={{ fontSize: '26px', fontWeight: '700', color: '#00214E', margin: '6px 0 0 0', letterSpacing: '0.8px' }}>
              {data.principles.title}
            </h2>
            <div style={{ width: '40px', height: '2px', backgroundColor: '#00214E', margin: '12px auto 0 auto' }}></div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {data.principles.list.map((principle, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  padding: '16px 20px',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E6E6DF',
                  borderLeft: '4px solid #00214E',
                  gap: '16px'
                }}
              >
                <span style={{ fontSize: '14.5px', fontWeight: '800', color: '#00214E', minWidth: '130px', letterSpacing: '0.5px' }}>
                  {principle.name}.
                </span>
                <span style={{ fontSize: '14px', color: '#475569', lineHeight: '1.6' }}>
                  {principle.text}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: Our Vision & Operational Mantra */}
        <section
          style={{
            backgroundColor: '#F7F7F2',
            border: '1px solid #E6E6DF',
            padding: '46px 40px',
            marginBottom: '64px',
            textAlign: 'center'
          }}
        >
          <span style={{ fontSize: '11px', fontWeight: '800', letterSpacing: '2.5px', color: '#828D99', textTransform: 'uppercase' }}>
            Future Horizon
          </span>
          <h2 style={{ fontSize: '26px', fontWeight: '700', color: '#00214E', margin: '6px 0 16px 0' }}>
            {data.vision.title}
          </h2>
          <p style={{ fontSize: '16px', lineHeight: '1.7', color: '#334155', maxWidth: '820px', margin: '0 auto 28px auto' }}>
            {data.vision.lead}
          </p>

          <div style={{ maxWidth: '640px', margin: '0 auto 36px auto' }}>
            <span style={{ fontSize: '12px', fontWeight: '800', letterSpacing: '1.5px', color: '#828D99', textTransform: 'uppercase', display: 'block', marginBottom: '16px' }}>
              {data.vision.sublead}
            </span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {data.vision.steps.map((step, sIdx) => (
                <div
                  key={sIdx}
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #E2E8F0',
                    padding: '12px 18px',
                    fontSize: '14.5px',
                    fontWeight: '700',
                    color: '#00214E',
                    letterSpacing: '0.4px',
                    borderRadius: '2px'
                  }}
                >
                  {step}
                </div>
              ))}
            </div>
          </div>

          <div style={{ borderTop: '1px solid #E2E8F0', paddingTop: '28px' }}>
            <div style={{ fontSize: '16px', fontWeight: '800', color: '#00214E', letterSpacing: '1px' }}>
              {data.vision.company}
            </div>
            <div
              style={{
                fontFamily: "'Droid Serif', Georgia, serif",
                fontStyle: 'italic',
                fontSize: '14px',
                color: '#64748B',
                marginTop: '6px'
              }}
            >
              {data.vision.tagline}
            </div>
          </div>
        </section>

        {/* Section 7: Action Callout Bottom Bar */}
        <section
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px',
            padding: '32px 36px',
            backgroundColor: '#00214E',
            color: '#FFFFFF',
            borderRadius: '2px',
            boxShadow: '0 8px 30px rgba(0, 33, 78, 0.2)'
          }}
        >
          <div>
            <h3 style={{ fontSize: '20px', fontWeight: '700', margin: '0 0 6px 0', color: '#FFFFFF' }}>
              VS International Group LLC
            </h3>
            <p style={{ margin: '0', fontSize: '13.5px', color: '#CBD5E1' }}>
              Structured Commodities Trading & Commercial Solutions Desk
            </p>
          </div>

          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <a
              href="#page-contact"
              onClick={(e) => {
                if (onBack) onBack();
                window.location.hash = '#page-contact';
              }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 24px',
                backgroundColor: '#FFFFFF',
                color: '#00214E',
                fontSize: '13px',
                fontWeight: '700',
                letterSpacing: '0.8px',
                textTransform: 'uppercase',
                textDecoration: 'none',
                borderRadius: '2px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
              }}
            >
              <span>{data.ctaContact}</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>

            <button
              onClick={() => {
                if (onBack) onBack();
                else window.location.hash = '#page-about';
              }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 22px',
                backgroundColor: 'transparent',
                border: '1px solid rgba(255, 255, 255, 0.4)',
                color: '#FFFFFF',
                fontSize: '13px',
                fontWeight: '600',
                letterSpacing: '0.6px',
                cursor: 'pointer',
                borderRadius: '2px'
              }}
            >
              <span>{data.backButton}</span>
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
