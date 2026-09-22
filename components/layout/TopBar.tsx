'use client';

import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/data';
import { useLanguage } from '@/context/LanguageContext';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';

interface TopBarProps {
  onOpenConsultation?: () => void;
}

export function TopBar({ onOpenConsultation }: TopBarProps) {
  const { strings, language } = useLanguage();

  return (
    <div className="bg-slate-950 text-slate-300 text-xs border-b border-slate-800/80 hidden md:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex items-center justify-between">
          {/* Start: Location & Contact with Logical Spacing */}
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <div className="flex items-center space-x-1.5 rtl:space-x-reverse text-slate-300 hover:text-cyan-400 transition-colors">
              <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span>{strings.topbar.location}</span>
            </div>
            <div className="flex items-center space-x-1.5 rtl:space-x-reverse text-slate-300 hover:text-cyan-400 transition-colors">
              <Clock className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span>{strings.topbar.hours}</span>
            </div>
          </div>

          {/* End: Direct Phone, Support, NOC Status & Language Switcher */}
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <a
              href={`tel:${COMPANY_INFO.contact.phone.replace(/\s+/g, '')}`}
              className="flex items-center space-x-1.5 rtl:space-x-reverse text-slate-300 hover:text-cyan-400 transition-colors font-mono"
              dir="ltr"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span className="font-semibold text-white">{COMPANY_INFO.contact.phone}</span>
            </a>
            <span className="text-slate-700">|</span>
            <a
              href={`mailto:${COMPANY_INFO.contact.email}`}
              className="flex items-center space-x-1.5 rtl:space-x-reverse text-slate-300 hover:text-cyan-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span className="font-mono">{COMPANY_INFO.contact.email}</span>
            </a>
            <span className="text-slate-700">|</span>
            <div className="flex items-center space-x-1.5 rtl:space-x-reverse px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-[11px] font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>{strings.topbar.supportNoc}</span>
            </div>
            <span className="text-slate-700">|</span>
            {/* Topbar Language Switcher */}
            <LanguageSwitcher variant="topbar" />
          </div>
        </div>
      </div>
    </div>
  );
}
