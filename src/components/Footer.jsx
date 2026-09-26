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
                title="noweb.dev en Instagram"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="13"
                  height="13"
                  fill="currentColor"
                  className="noweb-ig-icon"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
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
