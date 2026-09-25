import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function NavigationBar() {
  const { t } = useLanguage();

  const navItems = [
    { id: 'about', label: t.nav.about, targetId: 'page-about' },
    { id: 'services', label: t.nav.divisions, targetId: 'page-services' },
    { id: 'portfolio', label: t.nav.terminals, targetId: 'page-portfolio' },
    { id: 'team', label: t.nav.leadership, targetId: 'page-team' },
    {
      id: 'blog',
      label: t.nav.intelligence,
      targetId: 'page-blog',
      subItems: [
        { label: t.nav.marketOverview, targetId: 'page-blog' },
        { label: t.nav.commodityReports, targetId: 'page-blog' }
      ]
    },
    { id: 'pricing-plans', label: t.nav.tradeFinance, targetId: 'page-pricing-plans' },
    { id: 'contact', label: t.nav.contact, targetId: 'page-contact' }
  ];

  const [isSticky, setIsSticky] = useState(false);
  const [activeItem, setActiveItem] = useState('about');
  const [hoverItem, setHoverItem] = useState(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const menuListRef = useRef(null);
  const itemRefs = useRef({});

  // Handle scroll for sticky navbar and active section detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const navWrapper = document.getElementById('navigation-bar-sticky-wrapper');
      const offsetTop = navWrapper ? navWrapper.offsetTop : 600;

      setIsSticky(scrollY >= offsetTop);

      // Detect current section
      const sections = navItems.map((item) => {
        const el = document.getElementById(item.targetId);
        if (!el) return { id: item.id, top: 0, bottom: 0 };
        const rect = el.getBoundingClientRect();
        return {
          id: item.id,
          top: rect.top,
          bottom: rect.bottom
        };
      });

      const current = sections.find(
        (s) => s.top <= 200 && s.bottom >= 150
      );

      if (current) {
        setActiveItem(current.id);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update sliding indicator position
  useEffect(() => {
    const updateIndicator = () => {
      const targetId = hoverItem || activeItem;
      const targetEl = itemRefs.current[targetId];

      if (targetEl && menuListRef.current) {
        const menuRect = menuListRef.current.getBoundingClientRect();
        const elRect = targetEl.getBoundingClientRect();
        setIndicatorStyle({
          left: elRect.left - menuRect.left,
          width: elRect.width,
          opacity: 1
        });
      }
    };

    updateIndicator();
    window.addEventListener('resize', updateIndicator);
    return () => window.removeEventListener('resize', updateIndicator);
  }, [activeItem, hoverItem, isSticky]);

  const scrollToSection = (targetId) => {
    const el = document.getElementById(targetId);
    if (!el) return;
    const navHeight = 72;
    const elementPosition = el.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - navHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  };

  return (
    <div id="navigation-bar-sticky-wrapper" style={{ minHeight: isSticky ? '85px' : 'auto' }}>
      <div
        id="navigation-bar"
        className={`clear-fix ${isSticky ? 'is-sticky-bar' : ''}`}
      >
        <div className="main clear-fix">
          {/* Logo */}
          <div className="logo">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <img
                src="/image/logo.png"
                alt="VS International Group"
                className="nav-logo-img"
              />
            </a>
          </div>

          {/* Desktop Menu */}
          <div id="menu">
            <div
              id="menu-selected"
              style={{
                left: `${indicatorStyle.left}px`,
                width: `${indicatorStyle.width}px`,
                opacity: indicatorStyle.opacity
              }}
            />
            <ul
              className="sf-menu"
              ref={menuListRef}
              onMouseLeave={() => setHoverItem(null)}
            >
              {navItems.map((item) => (
                <li
                  key={item.id}
                  ref={(el) => (itemRefs.current[item.id] = el)}
                  className={`${activeItem === item.id ? 'menu-selected' : ''}`}
                  onMouseEnter={() => setHoverItem(item.id)}
                >
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.targetId);
                    }}
                  >
                    {item.label}
                    <span />
                  </a>

                  {item.subItems && (
                    <ul>
                      {item.subItems.map((sub, sIdx) => (
                        <li key={sIdx}>
                          <a
                            href={`#${item.id}`}
                            onClick={(e) => {
                              e.preventDefault();
                              scrollToSection(sub.targetId);
                            }}
                          >
                            {sub.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Responsive Select Menu */}
          <div id="menu-responsive" className="clear-fix">
            <select
              value={activeItem}
              onChange={(e) => {
                const selected = navItems.find((i) => i.id === e.target.value);
                if (selected) {
                  scrollToSection(selected.targetId);
                }
              }}
            >
              <option value="about">{t.nav.about}</option>
              <option value="services">{t.nav.divisions}</option>
              <option value="portfolio">{t.nav.terminals}</option>
              <option value="team">{t.nav.leadership}</option>
              <option value="blog">{t.nav.intelligence}</option>
              <option value="blog">- {t.nav.marketOverview}</option>
              <option value="blog">- {t.nav.commodityReports}</option>
              <option value="pricing-plans">{t.nav.tradeFinance}</option>
              <option value="contact">{t.nav.contact}</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
