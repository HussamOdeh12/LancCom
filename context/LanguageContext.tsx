'use client';

import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';
import { Language, Direction, Translations, translations } from '@/lib/translations';

interface LanguageContextType {
  language: Language;
  dir: Direction;
  isRTL: boolean;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (path: string, fallback?: string) => string;
  strings: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'landcom_language_pref';

function getInitialLanguage(): Language {
  if (typeof window === 'undefined') return 'en';
  try {
    const savedLang = localStorage.getItem(STORAGE_KEY) as Language | null;
    if (savedLang === 'en' || savedLang === 'ar') {
      return savedLang;
    }
    const browserLang = navigator.language?.slice(0, 2);
    if (browserLang === 'ar') {
      return 'ar';
    }
  } catch {
    // ignore
  }
  return 'en';
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  const dir: Direction = useMemo(() => (language === 'ar' ? 'rtl' : 'ltr'), [language]);
  const isRTL = dir === 'rtl';

  // Synchronize document attributes on change
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const root = document.documentElement;
      root.setAttribute('dir', dir);
      root.setAttribute('lang', language);
      if (isRTL) {
        root.classList.add('rtl');
        root.classList.remove('ltr');
      } else {
        root.classList.add('ltr');
        root.classList.remove('rtl');
      }
    }
  }, [dir, language, isRTL]);

  const setLanguage = useCallback((newLang: Language) => {
    setLanguageState(newLang);
    try {
      localStorage.setItem(STORAGE_KEY, newLang);
    } catch {
      // ignore storage error
    }
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguageState((prev) => {
      const next: Language = prev === 'en' ? 'ar' : 'en';
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        // ignore
      }
      return next;
    });
  }, []);

  // Nested translation resolver
  const t = useCallback(
    (path: string, fallback?: string): string => {
      const currentDict = translations[language] || translations.en;
      const keys = path.split('.');
      let current: any = currentDict;

      for (const k of keys) {
        if (current && typeof current === 'object' && k in current) {
          current = current[k];
        } else {
          return fallback || path;
        }
      }

      return typeof current === 'string' ? current : fallback || path;
    },
    [language]
  );

  const strings = useMemo(() => translations[language] || translations.en, [language]);

  const contextValue = useMemo(
    () => ({
      language,
      dir,
      isRTL,
      setLanguage,
      toggleLanguage,
      t,
      strings,
    }),
    [language, dir, isRTL, setLanguage, toggleLanguage, t, strings]
  );

  return (
    <LanguageContext.Provider value={contextValue}>
      <div dir={dir} lang={language} className="w-full">
        {children}
      </div>
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
