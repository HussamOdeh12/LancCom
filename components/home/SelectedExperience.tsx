'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Building2, 
  MapPin, 
  CheckCircle2, 
  Briefcase, 
  ArrowRight,
  Sparkles 
} from 'lucide-react';
import { DOCUMENTED_EXPERIENCE } from '@/lib/data';
import { useLanguage } from '@/context/LanguageContext';

export function SelectedExperience() {
  const { strings, language, isRTL } = useLanguage();

  return (
    <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white relative text-start border-b border-slate-200 dark:border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950 border border-cyan-200 dark:border-cyan-500/30 text-cyan-700 dark:text-cyan-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 shrink-0" />
            <span>{strings.experience.sectionTag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            {strings.experience.sectionTitle}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {strings.experience.sectionDesc}
          </p>
        </div>

        {/* 6 Documented Organizations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {DOCUMENTED_EXPERIENCE.map((item, idx) => (
            <div
              key={item.id}
              className="bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between text-start group shadow-sm hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-cyan-600 dark:text-cyan-400 group-hover:border-cyan-500/30 transition-all">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono font-bold text-slate-400 dark:text-slate-500">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                  {item.organization}
                </h3>

                <div className="p-3 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200/80 dark:border-slate-800/80 text-xs space-y-1 mt-3">
                  <div className="text-[10px] uppercase font-bold tracking-wider text-slate-500 dark:text-slate-400">
                    {strings.experience.scopeOfWork}:
                  </div>
                  <div className="text-slate-700 dark:text-slate-200 font-medium leading-relaxed">
                    {item.scope}
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <div className="flex items-center space-x-1.5 rtl:space-x-reverse">
                  <MapPin className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 shrink-0" />
                  <span>{item.location}</span>
                </div>
                <div className="flex items-center space-x-1 text-emerald-600 dark:text-emerald-400 text-[11px] font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span>{language === 'ar' ? 'موثق رسمياً' : 'Documented'}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Experience Link */}
        <div className="text-center pt-2">
          <Link
            href="/experience"
            className="inline-flex items-center space-x-2 rtl:space-x-reverse px-6 py-3 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-white font-bold text-xs rounded-xl border border-slate-300 dark:border-slate-700 shadow-sm transition-colors"
          >
            <span>{language === 'ar' ? 'استعراض صفحة الخبرات والمشاريع' : 'View Experience Page'}</span>
            <ArrowRight className={`w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0 ${isRTL ? 'rotate-180' : ''}`} />
          </Link>
        </div>
      </div>
    </section>
  );
}
