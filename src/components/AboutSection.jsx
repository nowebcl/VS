import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const sliderImages = [
  '/_sample/home_carousel/image_01.jpg',
  '/2.jpeg'
];

export default function AboutSection() {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <li className="page-about" id="page-about">
      <div className="main">
        {/* Section Main Header */}
        <h2 className="underline">
          <span>{t.about.title}</span>
          <span></span>
        </h2>

        {/* Row 1: Company Profile & Global Vision (50/50 Layout) */}
        <div className="layout-p-50x50 clear-fix">
          {/* Left Column: Image Slider + Commitment Card */}
          <div className="column-left">
            <div className="nivo-slider-box clear-fix">
              <div
                className="nivo-slider"
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  width: '100%',
                  aspectRatio: '4 / 3',
                  minHeight: '260px',
                  borderRadius: '2px',
                  backgroundColor: '#e8edf3',
                  boxShadow: '0 4px 16px rgba(0, 33, 78, 0.08)'
                }}
              >
                {sliderImages.map((img, idx) => (
                  <div
                    key={idx}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      transition: 'opacity 0.6s ease-in-out',
                      opacity: idx === currentSlide ? 1 : 0,
                      pointerEvents: idx === currentSlide ? 'auto' : 'none',
                      zIndex: idx === currentSlide ? 2 : 1
                    }}
                  >
                    <img
                      src={img}
                      alt={`Slide ${idx + 1}`}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center top',
                        display: 'block'
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* Slider pagination */}
              <div className="nivo-controlNav pagination" style={{ marginTop: '14px', width: '100%' }}>
                {sliderImages.map((_, idx) => (
                  <a
                    key={idx}
                    href={`#about-slide-${idx}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentSlide(idx);
                    }}
                    className={idx === currentSlide ? 'active' : ''}
                    style={{
                      width: '46%',
                      marginRight: idx === 0 ? '4%' : '0%',
                      cursor: 'pointer'
                    }}
                  >
                    {idx + 1}
                  </a>
                ))}
              </div>
            </div>

            {/* Our Commitment Highlight Card */}
            <div
              style={{
                marginTop: '28px',
                padding: '24px',
                backgroundColor: '#F7F7F2',
                borderLeft: '4px solid #00214E',
                borderTop: '1px solid #E6E6DF',
                borderRight: '1px solid #E6E6DF',
                borderBottom: '1px solid #E6E6DF'
              }}
            >
              <h4 style={{ margin: '0 0 4px 0', color: '#00214E', fontSize: '16px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.8px' }}>
                {t.about.commitment.title}
              </h4>
              <span className="occupation-name" style={{ display: 'block', marginBottom: '12px' }}>
                {t.about.commitment.subtitle}
              </span>
              <p style={{ margin: '0 0 10px 0', fontSize: '13.5px', lineHeight: '1.65', color: '#4A5568' }}>
                {t.about.commitment.p1}
              </p>
              <p style={{ margin: '0', fontSize: '13.5px', lineHeight: '1.65', color: '#4A5568' }}>
                {t.about.commitment.p2}
              </p>
            </div>
          </div>

          {/* Right Column: Company Overview & Background */}
          <div className="column-right">
            <h3>{t.about.companyName}</h3>
            <span className="occupation-name">{t.about.tagline}</span>

            <p className="padding-top-20" style={{ fontSize: '14.5px', lineHeight: '1.7', color: '#334155' }}>
              {t.about.overview.p1}
            </p>

            <p className="padding-top-15" style={{ fontSize: '14px', lineHeight: '1.7', color: '#475569' }}>
              {t.about.overview.p2}
            </p>

            <p className="padding-top-15 padding-bottom-20" style={{ fontSize: '14px', lineHeight: '1.7', color: '#475569' }}>
              {t.about.overview.p3}
            </p>

            {/* Global Vision Section */}
            <div style={{ borderTop: '1px solid #E6E6DF', paddingTop: '20px', marginTop: '10px' }}>
              <h4 style={{ margin: '0 0 10px 0', color: '#00214E', fontSize: '16px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.8px' }}>
                {t.about.globalVision.title}
              </h4>
              <p style={{ margin: '0 0 10px 0', fontSize: '14px', lineHeight: '1.65', color: '#475569' }}>
                {t.about.globalVision.p1}
              </p>
              <p style={{ margin: '0 0 10px 0', fontSize: '14px', lineHeight: '1.65', color: '#475569' }}>
                {t.about.globalVision.p2}
              </p>
              <p style={{ margin: '0', fontSize: '14px', lineHeight: '1.65', color: '#00214E', fontWeight: '600' }}>
                {t.about.globalVision.p3}
              </p>
            </div>
          </div>
        </div>

        {/* Spacing Divider */}
        <div style={{ height: '40px' }}></div>

        {/* Row 2: Our Approach (Left) & Looking Ahead (Right) (50/50 Layout) */}
        <div className="layout-p-50x50 clear-fix">
          {/* Left Column: Our Approach & 7 Centered Points */}
          <div className="column-left">
            <h3 className="underline">
              <span>{t.about.approach.title}</span>
              <span></span>
            </h3>

            <p className="padding-top-15" style={{ fontSize: '14.5px', lineHeight: '1.7', color: '#334155', marginBottom: '12px' }}>
              {t.about.approach.p1}
            </p>

            <p style={{ fontSize: '14px', lineHeight: '1.65', color: '#475569', marginBottom: '18px' }}>
              {t.about.approach.p2}
            </p>

            <span className="occupation-name" style={{ display: 'block', marginBottom: '14px', fontSize: '12.5px', letterSpacing: '1px' }}>
              {t.about.approach.bulletsTitle}
            </span>

            <ul className="list list-1">
              {t.about.approach.bullets.map((bullet, bIdx) => (
                <li key={bIdx}>
                  <div style={{ fontSize: '14px', color: '#1E293B', fontWeight: '600' }}>
                    {bullet}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Looking Ahead & Principle Quote Card */}
          <div className="column-right">
            <h3 className="underline">
              <span>{t.about.lookingAhead.title}</span>
              <span></span>
            </h3>

            <p className="padding-top-15" style={{ fontSize: '14.5px', lineHeight: '1.7', color: '#334155', marginBottom: '20px' }}>
              {t.about.lookingAhead.p1}
            </p>

            {/* Principle Card */}
            <div
              style={{
                background: '#F7F7F2',
                border: '1px solid #E6E6DF',
                borderLeft: '4px solid #00214E',
                padding: '28px 24px',
                boxShadow: '0 4px 14px rgba(0, 33, 78, 0.04)'
              }}
            >
              <div style={{ fontSize: '10.5px', fontWeight: '800', letterSpacing: '2px', color: '#828D99', textTransform: 'uppercase', marginBottom: '12px' }}>
                {t.about.lookingAhead.principleTitle}
              </div>
              <blockquote
                style={{
                  fontFamily: "'Droid Serif', Georgia, serif",
                  fontStyle: 'italic',
                  fontSize: '17px',
                  lineHeight: '1.6',
                  color: '#00214E',
                  margin: '0 0 18px 0',
                  padding: '0'
                }}
              >
                “{t.about.lookingAhead.quote}”
              </blockquote>
              <div style={{ borderTop: '1px solid #E2E8F0', paddingTop: '14px' }}>
                <div style={{ fontWeight: '700', fontSize: '13.5px', color: '#00214E', letterSpacing: '0.5px' }}>
                  {t.about.lookingAhead.signOffCompany}
                </div>
                <div style={{ fontSize: '11px', color: '#828D99', letterSpacing: '1px', textTransform: 'uppercase', marginTop: '4px' }}>
                  {t.about.lookingAhead.signOffMotto}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features on background with image (Parallax) */}
      <div className="section-background section-background-1 section-parallax" style={{ marginTop: '60px' }}>
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
