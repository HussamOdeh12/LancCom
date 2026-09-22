'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Building2, 
  MapPin, 
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Users,
  Compass
} from 'lucide-react';
import { COMPANY_INFO } from '@/lib/data';
import { useLanguage } from '@/context/LanguageContext';

export function AboutOverview() {
  const { strings, language, isRTL } = useLanguage();

  return (
    <section className="py-20 bg-slate-900 text-white relative text-start">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Start Column: Description & Strategic Model */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-3 py-1 rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 shrink-0" />
              <span>{strings.aboutSection.sectionTag}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
              {strings.aboutSection.sectionTitle}
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {strings.aboutSection.paragraph1}
            </p>

            <p className="text-sm text-slate-400 leading-relaxed">
              {strings.aboutSection.paragraph2}
            </p>

            {/* Value bullets */}
            <div className="space-y-2.5 pt-2">
              <div className="flex items-start space-x-2.5 rtl:space-x-reverse text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{strings.aboutSection.points.consultants}</span>
              </div>
              <div className="flex items-start space-x-2.5 rtl:space-x-reverse text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{strings.aboutSection.points.experience}</span>
              </div>
              <div className="flex items-start space-x-2.5 rtl:space-x-reverse text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{strings.aboutSection.points.presence}</span>
              </div>
            </div>

            <div className="pt-3">
              <Link
                href="/about"
                className="inline-flex items-center space-x-2 rtl:space-x-reverse px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-xl border border-slate-700 transition-colors"
              >
                <span>{strings.aboutSection.readMore}</span>
                <ArrowRight className={`w-4 h-4 text-cyan-400 shrink-0 ${isRTL ? 'rotate-180' : ''}`} />
              </Link>
            </div>
          </div>

          {/* End Column: Cards */}
          <div className="lg:col-span-6 space-y-4">
            <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-6 space-y-3 text-start">
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">
                  {language === 'ar' ? 'نموذج الاستشارات الاستراتيجية' : 'Strategic Consultation Model'}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {language === 'ar'
                  ? 'العمل كمستشارين استراتيجيين يفهمون بدقة متطلبات العميل ويقدمون حلولاً متكاملة ومصممة خصيصاً لتحديات الأعمال.'
                  : 'Operating as strategic consultants who thoroughly understand organizational needs and deliver integrated, purpose-built business systems.'}
              </p>
            </div>

            <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-6 space-y-3 text-start">
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">
                  {language === 'ar' ? 'ملكية وإدارة وطنية إماراتية' : '100% UAE National Ownership'}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {language === 'ar'
                  ? 'منشأة وطنية بالكامل بإدارة كفاءات إماراتية متمرسة، مع أكثر من 19 عاماً من التطوير والتنفيذ لحلول الأعمال في أبوظبي.'
                  : 'A 100% UAE-owned establishment led by UAE national management with over 19 years of continuous business solutions delivery.'}
              </p>
            </div>

            <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl flex items-center space-x-3 rtl:space-x-reverse text-start">
              <MapPin className="w-5 h-5 text-cyan-400 shrink-0" />
              <div className="text-xs text-slate-300">
                <strong className="text-white">
                  {language === 'ar' ? 'المقر الرئيسي:' : 'Headquarters:'}
                </strong>{' '}
                {COMPANY_INFO.headquarters.fullAddress}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
