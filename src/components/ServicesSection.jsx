import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function ServicesSection() {
  const { t } = useLanguage();
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState({ stat1: 0, stat2: 0, stat3: 0 });
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Animate counters
          const duration = 1500;
          const startTime = performance.now();

          const updateCounters = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            setCounts({
              stat1: Math.floor(progress * 100),
              stat2: Math.floor(progress * 100),
              stat3: Math.floor(progress * 100)
            });

            if (progress < 1) {
              requestAnimationFrame(updateCounters);
            }
          };

          requestAnimationFrame(updateCounters);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const leftItems = t.services.items.slice(0, 3);
  const rightItems = t.services.items.slice(3, 6);

  return (
    <li className="page-services" id="page-services">
      <div className="main">
        {/* Header */}
        <div className="section-title-logo-box">
          <img src="/logoblanco.png" alt="VS International Group" className="section-title-logo" />
        </div>
        <h2 className="underline">
          <span>{t.services.title}</span>
          <span></span>
        </h2>

        {/* Layout 50x50% */}
        <div className="layout-p-50x50 clear-fix">
          {/* Left column */}
          <div className="column-left">
            <p className="subheader padding-bottom-30">
              {t.services.subheaderLeft}
            </p>

            {/* Features list */}
            <ul className="feature-list feature-list-style-1 feature-list-icon-medium feature-list-icon-left clear-fix layout-p-100">
              {leftItems.map((item, idx) => (
                <li key={idx} className="column-left">
                  <span className={`icon ${item.icon}`}></span>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Right column */}
          <div className="column-right">
            <p className="subheader padding-bottom-30">
              {t.services.subheaderRight}
            </p>

            {/* Features list */}
            <ul className="feature-list feature-list-style-1 feature-list-icon-medium feature-list-icon-left clear-fix layout-p-100">
              {rightItems.map((item, idx) => (
                <li key={idx} className="column-left">
                  <span className={`icon ${item.icon}`}></span>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Info list + progress bars (Parallax) */}
      <div className="section-background section-background-2 section-parallax" ref={statsRef}>
        <div className="main">
          <div className="carousel">
            <div className="carousel-content">
              <ul className="info-list layout-p-33x33x33 clear-fix">
                {/* Entry #1 */}
                <li className="column-left stats-info-card">
                  <h2 className="counter value-100">
                    <span>{counts.stat1}</span>
                    <span>%</span>
                  </h2>
                  <h4>{t.services.stats[0].title}</h4>
                  <p>{t.services.stats[0].desc}</p>
                  <span className="progress-bar">
                    <span
                      style={{
                        width: hasAnimated ? '100%' : '0%',
                        transition: 'width 1.5s ease-out',
                        display: 'block'
                      }}
                    />
                    <span />
                  </span>
                </li>

                {/* Entry #2 */}
                <li className="column-center stats-info-card">
                  <h2 className="counter value-100">
                    <span>{counts.stat2}</span>
                    <span>%</span>
                  </h2>
                  <h4>{t.services.stats[1].title}</h4>
                  <p>{t.services.stats[1].desc}</p>
                  <span className="progress-bar">
                    <span
                      style={{
                        width: hasAnimated ? '100%' : '0%',
                        transition: 'width 1.5s ease-out',
                        display: 'block'
                      }}
                    />
                    <span />
                  </span>
                </li>

                {/* Entry #3 */}
                <li className="column-right stats-info-card">
                  <h2 className="counter value-100">
                    <span>{counts.stat3}</span>
                    <span>%</span>
                  </h2>
                  <h4>{t.services.stats[2].title}</h4>
                  <p>{t.services.stats[2].desc}</p>
                  <span className="progress-bar">
                    <span
                      style={{
                        width: hasAnimated ? '100%' : '0%',
                        transition: 'width 1.5s ease-out',
                        display: 'block'
                      }}
                    />
                    <span />
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
