import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../i18n/translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      const saved = localStorage.getItem('vsi_lang_v2');
      return saved === 'es' ? 'es' : 'en'; // Default to English
    } catch {
      return 'en';
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('vsi_lang_v2', lang);
      document.documentElement.lang = lang;
    } catch {}
  }, [lang]);

  const toggleLang = () => {
    setLang((prev) => (prev === 'en' ? 'es' : 'en'));
  };

  const t = translations[lang] || translations.en;

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
