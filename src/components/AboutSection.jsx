import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const sliderImages = [
  '/_sample/home_carousel/image_01.jpg',
  '/_sample/nivo_slider/image_02.jpg'
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
        {/* Header */}
        <h2 className="underline">
          <span>{t.about.title}</span>
          <span></span>
        </h2>

        {/* Layout 50x50% */}
        <div className="layout-p-50x50 clear-fix">
          {/* Left column */}
          <div className="column-left">
            {/* Slider */}
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
                  backgroundColor: '#e8edf3'
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
          </div>

          {/* Right column */}
          <div className="column-right">
            <h3>{t.about.officerName}</h3>
            <span className="occupation-name">{t.about.officerRole}</span>

            <p className="padding-top-30 padding-bottom-30">
              {t.about.description}
            </p>

            <ul className="list list-1">
              {t.about.bullets.map((bullet, bIdx) => (
                <li key={bIdx}><div>{bullet}</div></li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Features on background with image (Parallax) */}
      <div className="section-background section-background-1 section-parallax">
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
