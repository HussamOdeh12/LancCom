'use client';

import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { useLanguage } from '@/context/LanguageContext';

interface ThemeToggleProps {
  variant?: 'navbar' | 'mobile';
  className?: string;
}

export function ThemeToggle({ variant = 'navbar', className = '' }: ThemeToggleProps) {
  const { theme, setTheme, toggleTheme, isDark } = useTheme();
  const { language } = useLanguage();

  if (variant === 'mobile') {
    return (
      <div className={`p-3 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 ${className}`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            {isDark ? (
              <Moon className="w-4 h-4 text-cyan-400 shrink-0" />
            ) : (
              <Sun className="w-4 h-4 text-amber-500 shrink-0" />
            )}
            <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
              {language === 'ar' ? 'مظهر الموقع' : 'Appearance'}
            </span>
          </div>

          {/* Segmented Control for Mobile Drawer */}
          <div
            className="flex items-center p-1 rounded-lg bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800"
            role="group"
            aria-label={language === 'ar' ? 'اختيار المظهر' : 'Theme selection'}
          >
            <button
              type="button"
              onClick={() => setTheme('light')}
              className={`flex items-center space-x-1.5 rtl:space-x-reverse px-2.5 py-1.5 rounded-md text-xs font-bold transition-all ${
                !isDark
                  ? 'bg-amber-500 text-slate-950 shadow-sm'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
              aria-pressed={!isDark}
            >
              <Sun className="w-3.5 h-3.5" />
              <span>{language === 'ar' ? 'فاتح' : 'Light'}</span>
            </button>
            <button
              type="button"
              onClick={() => setTheme('dark')}
              className={`flex items-center space-x-1.5 rtl:space-x-reverse px-2.5 py-1.5 rounded-md text-xs font-bold transition-all ${
                isDark
                  ? 'bg-cyan-500 text-slate-950 shadow-sm'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
              aria-pressed={isDark}
            >
              <Moon className="w-3.5 h-3.5" />
              <span>{language === 'ar' ? 'داكن' : 'Dark'}</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Desktop Navbar button
  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`inline-flex items-center justify-center p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-900 border border-slate-200 dark:border-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 shrink-0 ${className}`}
      aria-label={
        isDark
          ? language === 'ar'
            ? 'التبديل إلى الوضع الفاتح'
            : 'Switch to Light Mode'
          : language === 'ar'
          ? 'التبديل إلى الوضع الداكن'
          : 'Switch to Dark Mode'
      }
      title={
        isDark
          ? language === 'ar'
            ? 'الوضع الفاتح'
            : 'Light Mode'
          : language === 'ar'
          ? 'الوضع الداكن'
          : 'Dark Mode'
      }
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-amber-400" />
      ) : (
        <Moon className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
      )}
    </button>
  );
}
