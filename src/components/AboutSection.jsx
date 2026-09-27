import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function AboutSection({ onExploreFull }) {
  const { t } = useLanguage();

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
        {/* Section Main Header */}
        <h2 className="underline">
          <span>{t.about.title}</span>
          <span></span>
        </h2>

        {/* Executive Summary 50/50 Layout - Perfectly Balanced */}
        <div className="layout-p-50x50 clear-fix" style={{ alignItems: 'center' }}>
          {/* Left Column: Full Pristine Executive Portrait */}
          <div className="column-left">
            <div
              style={{
                position: 'relative',
                overflow: 'hidden',
                width: '100%',
                aspectRatio: '3 / 4',
                borderRadius: '2px',
                backgroundColor: '#e8edf3',
                boxShadow: '0 8px 24px rgba(0, 33, 78, 0.1)',
                border: '1px solid #E6E6DF'
              }}
            >
              <img
                src="/_sample/home_carousel/image_01.jpg"
                alt="VS International Group LLC Executive Leadership"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  display: 'block'
                }}
              />

              {/* Discreet Executive Badge */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(to top, rgba(0, 33, 78, 0.94) 0%, rgba(0, 33, 78, 0.65) 65%, transparent 100%)',
                  padding: '24px 20px 16px 20px',
                  color: '#FFFFFF'
                }}
              >
                <div style={{ fontSize: '16px', fontWeight: '700', letterSpacing: '0.5px' }}>
                  {t.about.officerName || 'Raquel Cantero'}
                </div>
                <div style={{ fontSize: '11px', color: '#CBD5E1', letterSpacing: '1px', textTransform: 'uppercase', marginTop: '2px' }}>
                  {t.about.officerRole || 'Chief Executive Officer (C.E.O.)'}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Executive Summary + Value Proposition + CTA */}
          <div className="column-right">
            <h3>{t.about.companyName}</h3>
            <span className="occupation-name" style={{ color: '#828D99', letterSpacing: '0.8px' }}>
              {t.about.tagline}
            </span>

            <p className="padding-top-20" style={{ fontSize: '14.5px', lineHeight: '1.75', color: '#1E293B', fontWeight: '500' }}>
              {t.about.overview.p1}
            </p>

            <p className="padding-top-10" style={{ fontSize: '14px', lineHeight: '1.7', color: '#475569' }}>
              {t.about.overview.p2}
            </p>

            {/* Strategic Callout Card */}
            <div
              style={{
                marginTop: '18px',
                padding: '16px 18px',
                backgroundColor: '#F7F7F2',
                border: '1px solid #E6E6DF',
                borderLeft: '4px solid #00214E',
                borderRadius: '2px'
              }}
            >
              <h4 style={{ margin: '0 0 6px 0', color: '#00214E', fontSize: '13.5px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.6px' }}>
                {t.about.callout.title}
              </h4>
              <p style={{ margin: 0, fontSize: '13px', lineHeight: '1.6', color: '#4A5568' }}>
                {t.about.callout.text}
              </p>
            </div>

            {/* 4 Core Pillars / Badges Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '8px',
                marginTop: '16px'
              }}
            >
              {t.about.capabilities.map((cap, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '8px 12px',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #E2E8F0',
                    borderLeft: '3px solid #00214E',
                    borderRadius: '2px'
                  }}
                >
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '16px',
                      height: '16px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(0, 33, 78, 0.08)',
                      marginRight: '8px',
                      flexShrink: 0
                    }}
                  >
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#00214E" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span style={{ fontSize: '12px', fontWeight: '600', color: '#1E293B', letterSpacing: '0.2px' }}>
                    {cap}
                  </span>
                </div>
              ))}
            </div>

            {/* Call To Action Button to Dedicated Page */}
            <div style={{ marginTop: '24px' }}>
              <a
                href="#/about"
                onClick={handleCtaClick}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '13px 26px',
                  backgroundColor: '#00214E',
                  color: '#FFFFFF',
                  fontSize: '12.5px',
                  fontWeight: '700',
                  letterSpacing: '0.8px',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  borderRadius: '2px',
                  boxShadow: '0 4px 14px rgba(0, 33, 78, 0.18)',
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#0A3570';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                  e.currentTarget.style.boxShadow = '0 6px 18px rgba(0, 33, 78, 0.25)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#00214E';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 14px rgba(0, 33, 78, 0.18)';
                }}
              >
                <span>{t.about.ctaButton}</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Features on background with image (Parallax) */}
      <div className="section-background section-background-1 section-parallax" style={{ marginTop: '64px' }}>
        <div className="main">
          <div className="carousel">
            <div className="carousel-content">
              <ul className="feature-list feature-list-style-2 feature-list-icon-large feature-list-icon-top clear-fix layout-p-25x25x25x25">
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
