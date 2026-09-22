'use client';

import React from 'react';
import { Languages, Globe, Check } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface LanguageSwitcherProps {
  variant?: 'topbar' | 'navbar' | 'mobile';
  className?: string;
}

export function LanguageSwitcher({ variant = 'navbar', className = '' }: LanguageSwitcherProps) {
  const { language, setLanguage, isRTL, strings } = useLanguage();

  if (variant === 'topbar') {
    return (
      <div className={`inline-flex items-center space-x-1.5 rtl:space-x-reverse text-xs ${className}`}>
        <Globe className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
        <div className="flex items-center bg-slate-900 border border-slate-800 rounded-lg p-0.5">
          <button
            type="button"
            onClick={() => setLanguage('en')}
            className={`px-2 py-0.5 rounded text-[11px] font-semibold transition-all ${
              language === 'en'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
            aria-label="Switch to English"
          >
            EN
          </button>
          <span className="text-slate-700 text-[10px] px-0.5">/</span>
          <button
            type="button"
            onClick={() => setLanguage('ar')}
            className={`px-2 py-0.5 rounded text-[11px] font-semibold transition-all font-sans ${
              language === 'ar'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
            aria-label="التبديل إلى اللغة العربية"
          >
            العربية
          </button>
        </div>
      </div>
    );
  }

  if (variant === 'mobile') {
    return (
      <div className={`flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800 ${className}`}>
        <div className="flex items-center space-x-2.5 rtl:space-x-reverse">
          <Globe className="w-4 h-4 text-cyan-400" />
          <span className="text-xs font-semibold text-white">
            {language === 'ar' ? 'لغة الموقع' : 'Interface Language'}
          </span>
        </div>
        <div className="flex items-center space-x-1 rtl:space-x-reverse">
          <button
            type="button"
            onClick={() => setLanguage('en')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              language === 'en'
                ? 'bg-cyan-500 text-slate-950 shadow-md'
                : 'bg-slate-950 text-slate-400 border border-slate-800 hover:text-white'
            }`}
          >
            English
          </button>
          <button
            type="button"
            onClick={() => setLanguage('ar')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              language === 'ar'
                ? 'bg-cyan-500 text-slate-950 shadow-md'
                : 'bg-slate-950 text-slate-400 border border-slate-800 hover:text-white'
            }`}
          >
            العربية
          </button>
        </div>
      </div>
    );
  }

  // Standard Navbar variant
  return (
    <div className={`relative inline-flex items-center ${className}`}>
      <button
        type="button"
        onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
        className="inline-flex items-center space-x-2 rtl:space-x-reverse px-3 py-2 rounded-xl text-xs font-bold text-slate-300 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/40 transition-all shadow-sm group focus:outline-none focus:ring-2 focus:ring-cyan-500"
        title={language === 'en' ? 'التبديل إلى العربية (Switch to Arabic)' : 'Switch to English'}
        aria-label={language === 'en' ? 'Switch to Arabic' : 'Switch to English'}
      >
        <Globe className="w-3.5 h-3.5 text-cyan-400 group-hover:rotate-45 transition-transform duration-300" />
        <span className="font-semibold text-cyan-300">
          {language === 'en' ? 'العربية' : 'English'}
        </span>
        <span className="text-[9px] px-1.5 py-0.5 rounded bg-cyan-950 border border-cyan-500/30 text-cyan-400 font-mono uppercase">
          {language === 'en' ? 'AR' : 'EN'}
        </span>
      </button>
    </div>
  );
}
