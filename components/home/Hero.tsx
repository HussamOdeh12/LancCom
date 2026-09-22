'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Building2, 
  ArrowRight, 
  Layers, 
  CheckCircle2, 
  MapPin,
  Calendar,
  Users,
  Award
} from 'lucide-react';
import { COMPANY_INFO } from '@/lib/data';
import { useLanguage } from '@/context/LanguageContext';

export function Hero() {
  const { strings, language, isRTL } = useLanguage();

  return (
    <section className="relative bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white pt-10 pb-16 lg:pt-16 lg:pb-24 overflow-hidden border-b border-slate-200 dark:border-slate-900 text-start">
      {/* Subtle Background Architectural Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b08_1px,transparent_1px),linear-gradient(to_bottom,#1e293b08_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
      <div className="absolute top-0 end-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 start-10 w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Location Badge */}
        <div className="flex justify-center lg:justify-start mb-6">
          <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-cyan-500/30 text-cyan-800 dark:text-cyan-300 text-xs font-semibold shadow-xs dark:shadow-inner">
            <MapPin className="w-3.5 h-3.5 text-cyan-700 dark:text-cyan-400 shrink-0" />
            <span>{strings.hero.locationBadge}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Start Column: Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-start">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.25]">
              {strings.hero.headlinePart1}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-700 via-sky-700 to-blue-700 dark:from-cyan-400 dark:via-sky-300 dark:to-blue-500">
                {strings.hero.headlineAccent}
              </span>{' '}
              {strings.hero.headlinePart2}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed mx-auto lg:mx-0">
              {strings.hero.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-7 py-3.5 bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black text-sm rounded-xl shadow-lg shadow-cyan-500/20 dark:shadow-xl dark:shadow-cyan-500/25 transition-[transform,box-shadow,background-image] hover:scale-[1.02] active:scale-98 flex items-center justify-center space-x-2 rtl:space-x-reverse"
              >
                <span>{strings.hero.contactUs}</span>
                <ArrowRight className={`w-4 h-4 shrink-0 ${isRTL ? 'rotate-180' : ''}`} />
              </Link>

              <Link
                href="/services"
                className="w-full sm:w-auto px-6 py-3.5 bg-white dark:bg-slate-900/90 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 hover:text-cyan-700 dark:hover:text-cyan-300 font-bold text-sm rounded-xl border border-slate-300 dark:border-slate-700/80 shadow-xs transition-colors flex items-center justify-center space-x-2 rtl:space-x-reverse"
              >
                <Layers className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                <span>{strings.hero.exploreServices}</span>
              </Link>
            </div>

            {/* Key Value Pillars */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 border-t border-slate-200 dark:border-slate-800/80 text-start">
              <div className="p-3 bg-white dark:bg-slate-900/40 rounded-xl border border-slate-200 dark:border-slate-800/60 flex items-start space-x-2.5 rtl:space-x-reverse shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-700 dark:text-slate-300 font-medium">
                  {language === 'ar' ? 'تأسست في أبوظبي عام 2007' : 'Established in Abu Dhabi since 2007'}
                </span>
              </div>
              <div className="p-3 bg-white dark:bg-slate-900/40 rounded-xl border border-slate-200 dark:border-slate-800/60 flex items-start space-x-2.5 rtl:space-x-reverse shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-700 dark:text-slate-300 font-medium">
                  {language === 'ar' ? 'ملكية وطنية 100% وإدارة إماراتية' : '100% UAE Owned & Nationally Managed'}
                </span>
              </div>
              <div className="p-3 bg-white dark:bg-slate-900/40 rounded-xl border border-slate-200 dark:border-slate-800/60 flex items-start space-x-2.5 rtl:space-x-reverse shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-700 dark:text-slate-300 font-medium">
                  {language === 'ar' ? 'أكثر من 19 عاماً من الخبرة المتخصصة' : '19+ Years of Solutions Delivery'}
                </span>
              </div>
              <div className="p-3 bg-white dark:bg-slate-900/40 rounded-xl border border-slate-200 dark:border-slate-800/60 flex items-start space-x-2.5 rtl:space-x-reverse shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-700 dark:text-slate-300 font-medium">
                  {language === 'ar' ? 'مستشارون استراتيجيون وحلول متكاملة' : 'Strategic Consultants & Integrated Systems'}
                </span>
              </div>
            </div>
          </div>

          {/* End Column: Company Profile Fact Card */}
          <div className="lg:col-span-5 text-start">
            <div className="relative bg-white dark:bg-slate-900/95 border border-slate-200 dark:border-slate-700/80 rounded-2xl shadow-xl dark:shadow-2xl p-6 backdrop-blur-xl overflow-hidden space-y-5">
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center space-x-2.5 rtl:space-x-reverse">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse shrink-0"></div>
                  <div className="text-start">
                    <div className="text-xs font-bold text-slate-900 dark:text-white tracking-wide">
                      {COMPANY_INFO.name}
                    </div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400">
                      {COMPANY_INFO.tradeName}
                    </div>
                  </div>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 bg-cyan-100 dark:bg-cyan-950/80 border border-cyan-200 dark:border-cyan-800/50 text-cyan-800 dark:text-cyan-300 rounded font-semibold shrink-0">
                  Abu Dhabi, UAE
                </span>
              </div>

              {/* Factual Highlights */}
              <div className="space-y-2.5">
                <div className="p-3 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 text-xs flex items-center justify-between">
                  <div className="flex items-center space-x-2 rtl:space-x-reverse text-slate-600 dark:text-slate-300">
                    <Calendar className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                    <span>{language === 'ar' ? 'تاريخ التأسيس' : 'Establishment Date'}</span>
                  </div>
                  <span className="text-slate-900 dark:text-white font-bold font-mono">09 May 2007</span>
                </div>

                <div className="p-3 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 text-xs flex items-center justify-between">
                  <div className="flex items-center space-x-2 rtl:space-x-reverse text-slate-600 dark:text-slate-300">
                    <Building2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                    <span>{language === 'ar' ? 'الشكل القانوني والملكية' : 'Legal Form & Ownership'}</span>
                  </div>
                  <span className="text-cyan-700 dark:text-cyan-400 font-medium">{COMPANY_INFO.ownership}</span>
                </div>

                <div className="p-3 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 text-xs flex items-center justify-between">
                  <div className="flex items-center space-x-2 rtl:space-x-reverse text-slate-600 dark:text-slate-300">
                    <Users className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />
                    <span>{language === 'ar' ? 'الكوادر المنشورة' : 'Deployed Technical Staff'}</span>
                  </div>
                  <span className="text-teal-700 dark:text-teal-400 font-medium">{COMPANY_INFO.deployedStaff}</span>
                </div>

                <div className="p-3 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 text-xs flex items-center justify-between">
                  <div className="flex items-center space-x-2 rtl:space-x-reverse text-slate-600 dark:text-slate-300">
                    <Award className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
                    <span>{language === 'ar' ? 'الأنشطة المرخصة' : 'Licensed Activities'}</span>
                  </div>
                  <span className="text-amber-700 dark:text-amber-400 font-medium">6 Economic Activities</span>
                </div>
              </div>

              {/* Location Strip */}
              <div className="p-3.5 bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-500/20 rounded-xl text-xs space-y-1">
                <div className="text-cyan-800 dark:text-cyan-300 font-bold flex items-center space-x-1.5 rtl:space-x-reverse">
                  <MapPin className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 shrink-0" />
                  <span>{COMPANY_INFO.headquarters.fullAddress}</span>
                </div>
                <div className="text-slate-600 dark:text-slate-400 text-[11px]">
                  {language === 'ar' 
                    ? 'رخصة أبوظبي الاقتصادية رقم: CN-1006129' 
                    : 'Abu Dhabi Economic Licence No: CN-1006129'}
                </div>
              </div>

              {/* Contact Button */}
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="w-full py-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-bold text-xs rounded-xl border border-slate-300 dark:border-slate-700 transition-colors flex items-center justify-center space-x-2 rtl:space-x-reverse shadow-xs"
                >
                  <span>{language === 'ar' ? 'تواصل مع مكتبنا بأبوظبي' : 'Contact Our Abu Dhabi Office'}</span>
                  <ArrowRight className={`w-3.5 h-3.5 shrink-0 ${isRTL ? 'rotate-180' : ''}`} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
