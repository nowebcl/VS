import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { lang, toggleLang, t } = useLanguage();

  const footerLinks = [
    { label: t.nav.about, targetId: 'page-about' },
    { label: t.nav.divisions, targetId: 'page-services' },
    { label: t.nav.terminals, targetId: 'page-portfolio' },
    { label: t.nav.leadership, targetId: 'page-team' },
    { label: t.nav.intelligence, targetId: 'page-blog' },
    { label: t.nav.tradeFinance, targetId: 'page-pricing-plans' },
    { label: t.nav.contact, targetId: 'page-contact' }
  ];

  const scrollTo = (targetId) => {
    if (targetId === 'page-home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(targetId);
    if (!el) return;
    const offset = el.getBoundingClientRect().top + window.scrollY - 98;
    window.scrollTo({ top: offset, behavior: 'smooth' });
  };

  return (
    <div className="footer">
      <div className="main">
        {/* Layout 33x66% */}
        <div className="layout-p-33x66 clear-fix">
          {/* Left column: copyright */}
          <div className="column-left">
            &copy; 2026{' '}
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollTo('page-home'); }}>
              VS INTERNATIONAL GROUP LLC
            </a>
            . {lang === 'es' ? 'Todos los derechos reservados.' : 'All Rights Reserved.'}
          </div>

          {/* Right column: menu */}
          <div className="column-right">
            <ul className="footer-menu list-0">
              {footerLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={`#${link.targetId}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(link.targetId);
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
