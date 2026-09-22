'use client';

import React from 'react';
import Link from 'next/link';
import { 
  MapPin, 
  Users, 
  Zap, 
  Building2, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight
} from 'lucide-react';
import { WHY_LANDCOM, COMPANY_INFO } from '@/lib/data';
import { useLanguage } from '@/context/LanguageContext';

export function WhyChooseUs() {
  const { strings, language, isRTL } = useLanguage();

  const getWhyIcon = (id: string) => {
    switch (id) {
      case 'why-abudhabi': return <MapPin className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />;
      case 'why-team': return <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />;
      case 'why-agile': return <Zap className="w-6 h-6 text-amber-600 dark:text-amber-400" />;
      case 'why-gov': return <Building2 className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case 'why-innovation': return <Sparkles className="w-6 h-6 text-purple-600 dark:text-purple-400" />;
      default: return <Sparkles className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />;
    }
  };

  return (
    <section className="py-20 bg-white dark:bg-slate-900 text-slate-900 dark:text-white relative overflow-hidden text-start border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950 border border-cyan-200 dark:border-cyan-500/30 text-cyan-700 dark:text-cyan-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 shrink-0" />
            <span>{strings.whyLandcom.sectionTag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            {strings.whyLandcom.sectionTitle}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {strings.whyLandcom.sectionDesc}
          </p>
        </div>

        {/* 5 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {WHY_LANDCOM.map((item, idx) => (
            <div
              key={item.id}
              className={`bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800/80 hover:border-cyan-500/40 rounded-2xl p-6 transition-[border-color,box-shadow] duration-200 hover:shadow-lg dark:hover:shadow-xl shadow-xs group flex flex-col justify-between text-start ${
                idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 inline-block mb-4 group-hover:scale-105 group-hover:border-cyan-500/30 transition-[transform,border-color] duration-200 shadow-xs">
                  {getWhyIcon(item.id)}
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2.5 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                  {language === 'ar' ? item.titleAr : item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {language === 'ar' ? item.descriptionAr : item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Location & Contact Callout Bar */}
        <div className="bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6 text-start shadow-xs">
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <div className="w-12 h-12 rounded-xl bg-cyan-100 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900 dark:text-white">
                {language === 'ar' ? 'مقرنا الرئيسي في أبوظبي لخدمة مختلف الجهات في الإمارات' : 'Abu Dhabi Headquarters Supporting Entities Across the UAE'}
              </div>
              <div className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                {COMPANY_INFO.headquarters.fullAddress} • Tel: {COMPANY_INFO.contact.telephone}
              </div>
            </div>
          </div>

          <Link
            href="/contact"
            className="px-5 py-2.5 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-bold text-xs rounded-xl border border-slate-300 dark:border-slate-700 shadow-xs transition-colors flex items-center space-x-2 rtl:space-x-reverse shrink-0"
          >
            <span>{strings.nav.contactCta}</span>
            <ArrowRight className={`w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 shrink-0 ${isRTL ? 'rotate-180' : ''}`} />
          </Link>
        </div>
      </div>
    </section>
  );
}
