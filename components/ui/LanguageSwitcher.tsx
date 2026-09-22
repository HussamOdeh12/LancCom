'use client';

import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface LanguageSwitcherProps {
  variant?: 'navbar' | 'mobile';
  className?: string;
}

export function LanguageSwitcher({ variant = 'navbar', className = '' }: LanguageSwitcherProps) {
  const { language, setLanguage, toggleLanguage } = useLanguage();

  if (variant === 'mobile') {
    return (
      <div className={`p-3 rounded-xl bg-slate-900 border border-slate-800 ${className}`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <Globe className="w-4 h-4 text-cyan-400 shrink-0" />
            <span className="text-xs font-semibold text-slate-200">
              {language === 'ar' ? 'لغة الموقع' : 'Interface Language'}
            </span>
          </div>

          {/* Segmented Control for Mobile Drawer */}
          <div className="flex items-center p-1 rounded-lg bg-slate-950 border border-slate-800" role="group" aria-label="Language selection">
            <button
              type="button"
              onClick={() => setLanguage('en')}
              className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all ${
                language === 'en'
                  ? 'bg-cyan-500 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
              aria-pressed={language === 'en'}
            >
              English
            </button>
            <button
              type="button"
              onClick={() => setLanguage('ar')}
              className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all ${
                language === 'ar'
                  ? 'bg-cyan-500 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
              aria-pressed={language === 'ar'}
            >
              العربية
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Standard Desktop Navbar variant: single compact, clean toggle button
  return (
    <div className={`relative inline-flex items-center ${className}`}>
      <button
        type="button"
        onClick={toggleLanguage}
        className="inline-flex items-center space-x-2 rtl:space-x-reverse px-3 py-2 rounded-xl text-xs font-bold text-slate-200 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/50 transition-all shadow-sm group focus:outline-none focus:ring-2 focus:ring-cyan-500"
        title={language === 'en' ? 'التبديل إلى اللغة العربية' : 'Switch to English'}
        aria-label={language === 'en' ? 'التبديل إلى اللغة العربية (Switch to Arabic)' : 'Switch to English (التبديل إلى الإنجليزية)'}
      >
        <Globe className="w-3.5 h-3.5 text-cyan-400 group-hover:rotate-45 transition-transform duration-300" />
        <span className="font-semibold text-cyan-300">
          {language === 'en' ? 'العربية' : 'English'}
        </span>
      </button>
    </div>
  );
}

