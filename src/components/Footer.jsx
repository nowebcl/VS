import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { lang, toggleLang, t } = useLanguage();

  const footerLinks = [
    { label: t.nav.about, targetId: 'page-about' },
    { label: t.commodities?.title || 'Commodities', targetId: 'page-commodities' },
    { label: t.energyProducts?.title || 'Energy Products', targetId: 'page-energy-products' },
    { label: t.nav.divisions, targetId: 'page-services' },
    { label: t.nav.terminals, targetId: 'page-portfolio' },
    { label: t.nav.leadership, targetId: 'page-team' },
    { label: t.nav.intelligence, targetId: 'page-blog' },
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
          {/* Left column: copyright & developer signature */}
          <div className="column-left footer-credits-box">
            <div className="footer-copyright-text">
              &copy; 2026{' '}
              <a href="#home" onClick={(e) => { e.preventDefault(); scrollTo('page-home'); }}>
                VS INTERNATIONAL GROUP LLC
              </a>
              . {lang === 'es' ? 'Todos los derechos reservados.' : 'All Rights Reserved.'}
            </div>
            <div className="footer-signature-text">
              <span>{t.footer?.developedBy || 'Desarrollado por'}{' '}</span>
              <a
                href="https://www.instagram.com/noweb.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="noweb-signature-link"
              >
                noweb.dev
              </a>
            </div>
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
