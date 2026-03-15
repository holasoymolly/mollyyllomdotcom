'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, Language, Translations } from '@/i18n/translations';

interface LanguageContextType {
  lang: Language;
  t: Translations;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'es',
  t: translations.es,
  toggleLang: () => {},
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>('es');

  useEffect(() => {
    const saved = localStorage.getItem('molly-lang') as Language | null;
    if (saved === 'es' || saved === 'en') setLang(saved);
  }, []);

  const toggleLang = () => {
    setLang((prev) => {
      const next = prev === 'es' ? 'en' : 'es';
      localStorage.setItem('molly-lang', next);
      return next;
    });
  };

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
