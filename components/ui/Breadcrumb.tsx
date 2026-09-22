'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumb({ items, className = '' }: BreadcrumbProps) {
  const { isRTL, language } = useLanguage();

  return (
    <nav aria-label="Breadcrumb" className={`py-2 ${className}`}>
      <ol className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs text-slate-600 dark:text-slate-400">
        <li className="flex items-center">
          <Link
            href="/"
            className="flex items-center space-x-1 rtl:space-x-reverse text-slate-600 hover:text-cyan-700 dark:text-slate-400 dark:hover:text-cyan-400 transition-colors"
          >
            <Home className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
            <span className="sr-only">{language === 'ar' ? 'الرئيسية' : 'Home'}</span>
            <span className="hidden sm:inline">{language === 'ar' ? 'الرئيسية' : 'Home'}</span>
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center space-x-1.5 sm:space-x-2 rtl:space-x-reverse">
              <ChevronRight
                className={`w-3.5 h-3.5 text-slate-400 dark:text-slate-600 shrink-0 ${isRTL ? 'rotate-180' : ''}`}
                aria-hidden="true"
              />
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="hover:text-cyan-700 dark:hover:text-cyan-400 transition-colors text-slate-600 dark:text-slate-400 font-medium"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className="text-cyan-700 dark:text-cyan-300 font-semibold truncate max-w-[200px] sm:max-w-none"
                  aria-current={isLast ? 'page' : undefined}
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
