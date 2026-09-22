'use client';

import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/data';
import { useLanguage } from '@/context/LanguageContext';

export function TopBar() {
  const { strings } = useLanguage();

  return (
    <div className="bg-slate-100 dark:bg-slate-950 text-slate-600 dark:text-slate-300 text-xs border-b border-slate-200 dark:border-slate-800/80 hidden md:block transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex items-center justify-between">
          {/* Factual Location & National Ownership */}
          <div className="flex items-center space-x-2 rtl:space-x-reverse text-slate-600 dark:text-slate-300">
            <MapPin className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 shrink-0" />
            <span>{strings.topbar.location}</span>
            <span className="text-slate-300 dark:text-slate-700">•</span>
            <span className="text-cyan-700 dark:text-cyan-400/90 font-medium">{COMPANY_INFO.ownership}</span>
          </div>

          {/* Direct Abu Dhabi Contact Channels */}
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <a
              href={`tel:${COMPANY_INFO.contact.telephone.replace(/\s+/g, '')}`}
              className="flex items-center space-x-1.5 rtl:space-x-reverse text-slate-600 hover:text-cyan-600 dark:text-slate-300 dark:hover:text-cyan-400 transition-colors font-mono"
              dir="ltr"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 shrink-0" />
              <span className="font-semibold text-slate-900 dark:text-white">{COMPANY_INFO.contact.telephone}</span>
            </a>
            <span className="text-slate-300 dark:text-slate-700">|</span>
            <a
              href={`mailto:${COMPANY_INFO.contact.primaryEmail}`}
              className="flex items-center space-x-1.5 rtl:space-x-reverse text-slate-600 hover:text-cyan-600 dark:text-slate-300 dark:hover:text-cyan-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 shrink-0" />
              <span className="font-mono">{COMPANY_INFO.contact.primaryEmail}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

