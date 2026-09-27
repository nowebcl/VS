import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function HeaderHero() {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const videoRefs = useRef([]);

  const slides = [
    {
      video: '/HERO1.mp4',
      title: t.hero.slide1Title,
      subtitle: t.hero.slide1Subtitle
    },
    {
      video: '/hero2.mp4',
      title: t.hero.slide2Title,
      subtitle: t.hero.slide2Subtitle
    }
  ];

  // Auto-advance slides every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [slides.length]);

  // Ensure active slide video plays and resets, while inactive video pauses
  useEffect(() => {
    videoRefs.current.forEach((videoEl, index) => {
      if (videoEl) {
        if (index === currentSlide) {
          videoEl.currentTime = 0;
          const playPromise = videoEl.play();
          if (playPromise !== undefined) {
            playPromise.catch(() => {});
          }
        } else {
          videoEl.pause();
        }
      }
    });
  }, [currentSlide]);

  return (
    <div className="home-carousel-box" style={{ height: 'auto', minHeight: '650px', position: 'relative', overflow: 'hidden' }}>
      {/* Bar with logo and social icons */}
      <div className="home-carousel-bar">
        <div className="main clear-fix">
          {/* Brand: Logo + White Text Below */}
          <a
            href="#home"
            className="float-left hero-brand-lockup"
            style={{
              textDecoration: 'none',
              display: 'inline-flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <img
              src="/image/logo.png"
              alt="VS International Group"
              style={{
                maxHeight: '70px',
                maxWidth: '240px',
                width: 'auto',
                height: 'auto',
                objectFit: 'contain',
                filter: 'drop-shadow(0 2px 10px rgba(0, 0, 0, 0.75))',
                display: 'block'
              }}
            />
            <span className="hero-brand-subtitle">
              VS INTERNATIONAL GROUP LLC
            </span>
          </a>

          {/* Social icon list - Only LinkedIn */}
          <ul className="social-list social-list-style-3 float-right">
            <li>
              <a
                href="https://www.linkedin.com/in/raquel-cantero-184641158"
                target="_blank"
                rel="noopener noreferrer"
                className="social-list-linkedin"
                title="LinkedIn"
              />
            </li>
          </ul>
        </div>
      </div>

      {/* Carousel with video backgrounds */}
      <ul className="home-carousel update-carousel-disable" style={{ position: 'relative', overflow: 'hidden', margin: 0, padding: 0 }}>
        {slides.map((slide, index) => (
          <li
            key={index}
            style={{
              display: index === currentSlide ? 'block' : 'none',
              transition: 'opacity 0.8s ease-in-out',
              opacity: index === currentSlide ? 1 : 0,
              position: 'relative'
            }}
          >
            <div style={{ position: 'relative', minHeight: '650px', overflow: 'hidden' }}>
              {/* Video Element */}
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                src={slide.video}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                style={{
                  width: '100%',
                  height: '100%',
                  minHeight: '650px',
                  maxHeight: '850px',
                  objectFit: 'cover',
                  display: 'block',
                  filter: 'brightness(0.82) contrast(1.08)'
                }}
              />

              {/* Uniform, Seamless Full-Hero Dark Navy Filter Overlay */}
              <div
                className="hero-video-overlay"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  width: '100%',
                  height: '100%',
                  background: 'rgba(0, 26, 61, 0.62)',
                  pointerEvents: 'none',
                  zIndex: 1
                }}
              />

              {/* Title & Subtitle Box */}
              <div className="home-carousel-title-box" style={{ zIndex: 2 }}>
                <div className="main">
                  <a href="#about">
                    <span>
                      <span>
                        {typeof slide.title === 'string' && slide.title.includes('\n')
                          ? slide.title.split('\n').map((line, idx) => (
                              <React.Fragment key={idx}>
                                {line}
                                {idx < slide.title.split('\n').length - 1 && <br />}
                              </React.Fragment>
                            ))
                          : slide.title}
                      </span>
                      <span>
                        {typeof slide.subtitle === 'string' && slide.subtitle.includes('\n')
                          ? slide.subtitle.split('\n').map((line, idx) => (
                              <React.Fragment key={idx}>
                                {idx === 0 ? (
                                  <span style={{ display: 'block', fontStyle: 'italic', fontWeight: '500', fontSize: '1.12em', letterSpacing: '0.4px', marginBottom: '8px' }}>
                                    {line}
                                  </span>
                                ) : (
                                  <span style={{ display: 'block', fontSize: '0.88em', opacity: 0.92, lineHeight: 1.45, fontStyle: 'italic' }}>
                                    {line}
                                  </span>
                                )}
                              </React.Fragment>
                            ))
                          : slide.subtitle}
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {/* Pagination */}
      <div className="home-carousel-pagination" style={{ zIndex: 3 }}>
        <div className="main">
          <div className="pagination">
            {slides.map((_, index) => (
              <a
                key={index}
                href={`#slide-${index}`}
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentSlide(index);
                }}
                className={index === currentSlide ? 'selected' : ''}
                style={{
                  width: '48%',
                  marginRight: index === 0 ? '4%' : '0%',
                  cursor: 'pointer'
                }}
              >
                {index + 1}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
