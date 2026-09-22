'use client';

import React from 'react';
import Link from 'next/link';
import { TopBar } from '@/components/layout/TopBar';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { 
  Database, 
  Smartphone, 
  Network, 
  ShieldCheck, 
  Navigation, 
  Radio, 
  Globe, 
  Headset, 
  ArrowRight, 
  CheckCircle2,
  Briefcase,
  Layers
} from 'lucide-react';
import { CORE_SERVICES, DOCUMENTED_EXPERIENCE } from '@/lib/data';
import { useLanguage } from '@/context/LanguageContext';

export function ServicesClient() {
  const { strings, language, isRTL } = useLanguage();

  const getServiceIcon = (id: string, className = "w-6 h-6") => {
    switch (id) {
      case 'erp-system': return <Database className={className} />;
      case 'mobility-solutions': return <Smartphone className={className} />;
      case 'it-resources-networking': return <Network className={className} />;
      case 'security-solutions': return <ShieldCheck className={className} />;
      case 'tracking-systems': return <Navigation className={className} />;
      case 'rfid-solutions': return <Radio className={className} />;
      case 'ecommerce-web': return <Globe className={className} />;
      case 'it-managed-services': return <Headset className={className} />;
      default: return <Database className={className} />;
    }
  };

  const breadcrumbItems = [
    { label: language === 'ar' ? 'الخدمات والحلول' : 'Services & Solutions' }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col selection:bg-cyan-500 selection:text-slate-950">
      <TopBar />
      <Navbar />

      <main id="main-content" className="flex-1 text-start">
        {/* 1. Page Hero */}
        <section className="py-14 sm:py-18 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
            <Breadcrumb items={breadcrumbItems} />

            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950 border border-cyan-200 dark:border-cyan-500/30 text-cyan-700 dark:text-cyan-400 text-xs font-bold uppercase tracking-wider">
                <Layers className="w-3.5 h-3.5 shrink-0" />
                <span>{strings.services.sectionTag}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
                {language === 'ar' ? 'خدمات وحلول تقنية المعلومات' : 'IT Services & Business Solutions'}
              </h1>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                {language === 'ar'
                  ? 'منظومة متكاملة من ثمانية مجالات تقنية متخصصة طورتها لاند كوم لتلبية متطلبات المؤسسات والهيئات في أبوظبي ودولة الإمارات.'
                  : 'Eight specialized technical solution disciplines developed and implemented by LandCom to support institutional workflows in Abu Dhabi and the UAE.'}
              </p>
            </div>
          </div>
        </section>

        {/* 2. Strategic Consulting Overview */}
        <section className="py-10 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-6 sm:p-8 bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-3xl grid grid-cols-1 md:grid-cols-12 gap-6 items-center shadow-sm">
              <div className="md:col-span-8 space-y-2">
                <span className="text-xs font-bold text-cyan-700 dark:text-cyan-400 uppercase tracking-wider">
                  {language === 'ar' ? 'استشارات تقنية استراتيجية' : 'Strategic Technical Consulting'}
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  {language === 'ar' ? 'حلول مخصصة تلائم طبيعة أعمالكم' : 'Tailored Systems Designed for Your Workflows'}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {language === 'ar'
                    ? 'نعمل كمستشارين استراتيجيين يدرسون احتياجات وتحديات كل مؤسسة لتقديم حلول متكاملة في البرمجيات المؤسسية، الشبكات، الأمن، والخدمات المدارة.'
                    : 'We operate as strategic consultants who analyze client challenges and engineer cohesive software, infrastructure, security, and managed services that align with institutional goals.'}
                </p>
              </div>
              <div className="md:col-span-4 flex justify-start md:justify-end">
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md flex items-center space-x-2 rtl:space-x-reverse"
                >
                  <span>{strings.nav.contactCta}</span>
                  <ArrowRight className={`w-4 h-4 shrink-0 ${isRTL ? 'rotate-180' : ''}`} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 3. The 8 Core Services Grid */}
        <section className="py-16 bg-white dark:bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-400">
                {strings.services.allServices}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                {language === 'ar' ? 'دليل الخدمات والحلول المعتمدة' : 'Official Services Directory'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                {language === 'ar'
                  ? 'استعرض تفاصيل ومخرجات النطاقات التقنية الثمانية الرسمية لشركة لاند كوم.'
                  : 'Explore the full scope, technical methodology, and documented experience for each of our eight core disciplines.'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {CORE_SERVICES.map((srv, index) => (
                <div
                  key={srv.id}
                  className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 hover:bg-white dark:hover:bg-slate-900 transition-all duration-200 flex flex-col justify-between group shadow-sm hover:shadow-md"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="p-3 rounded-2xl bg-cyan-100 dark:bg-cyan-950 border border-cyan-200 dark:border-cyan-500/30 text-cyan-700 dark:text-cyan-400 group-hover:scale-105 transition-transform">
                        {getServiceIcon(srv.id, "w-6 h-6")}
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-400 dark:text-slate-500">
                        0{index + 1}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-cyan-700 dark:group-hover:text-cyan-300 transition-colors">
                        {language === 'ar' ? srv.titleAr : srv.title}
                      </h3>
                      <p className="text-xs text-cyan-700 dark:text-cyan-400/90 font-medium mt-1 mb-2">
                        {language === 'ar' ? srv.taglineAr : srv.tagline}
                      </p>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                        {language === 'ar' ? srv.descriptionAr : srv.description}
                      </p>
                    </div>

                    {/* Features Preview */}
                    <div className="pt-2 space-y-1.5 border-t border-slate-200 dark:border-slate-800/60">
                      {(language === 'ar' ? srv.featuresAr : srv.features).slice(0, 2).map((feat, idx) => (
                        <div key={idx} className="flex items-start space-x-1.5 rtl:space-x-reverse text-[11px] text-slate-600 dark:text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-5 mt-4 border-t border-slate-200 dark:border-slate-800">
                    <Link
                      href={`/services/${srv.slug}`}
                      className="w-full py-2.5 px-4 bg-white dark:bg-slate-800 hover:bg-cyan-500 hover:text-slate-950 text-slate-800 dark:text-slate-200 font-bold text-xs rounded-xl transition-all flex items-center justify-between group/link border border-slate-200 dark:border-transparent shadow-xs"
                    >
                      <span>{language === 'ar' ? 'عرض تفاصيل الخدمة' : 'View Service Details'}</span>
                      <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isRTL ? 'rotate-180 group-hover/link:-translate-x-1' : 'group-hover/link:translate-x-1'}`} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Documented Projects Strip */}
        <section className="py-16 bg-slate-50 dark:bg-slate-900 border-t border-b border-slate-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div className="space-y-2 max-w-2xl">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-400">
                  {strings.experience.sectionTag}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                  {language === 'ar' ? 'سجل الخبرات والمشاريع الموثقة' : 'Documented Projects & Client Deployments'}
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                  {language === 'ar'
                    ? 'خبرات معتمدة تم تنفيذها لصالح جهات حكومية ومؤسسات وطنية كبرى في دولة الإمارات.'
                    : 'Verified technical implementations delivered for government authorities and institutional clients across the UAE.'}
                </p>
              </div>

              <Link
                href="/experience"
                className="inline-flex items-center space-x-1.5 rtl:space-x-reverse text-xs font-bold text-cyan-700 dark:text-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors shrink-0"
              >
                <span>{language === 'ar' ? 'عرض جميع المشاريع الموثقة' : 'View All Documented Projects'}</span>
                <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {DOCUMENTED_EXPERIENCE.map((exp) => (
                <div
                  key={exp.id}
                  className="p-5 bg-white dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3 text-start shadow-sm"
                >
                  <div className="flex items-center justify-between text-xs text-cyan-700 dark:text-cyan-400">
                    <span className="font-semibold">{language === 'ar' ? exp.locationAr : exp.location}</span>
                    <Briefcase className="w-4 h-4 text-cyan-600 dark:text-cyan-400/70" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    {language === 'ar' ? exp.organizationAr : exp.organization}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {language === 'ar' ? exp.scopeAr : exp.scope}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Corporate Contact CTA */}
        <section className="py-16 bg-white dark:bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-slate-100 dark:bg-gradient-to-r dark:from-slate-900 dark:via-slate-900/90 dark:to-cyan-950/50 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-start shadow-lg dark:shadow-2xl">
              <div className="space-y-3 max-w-2xl">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  {language === 'ar' ? 'هل ترغب في استشارة تقنية مخصصة؟' : 'Need a Customized Technical Consultation?'}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {language === 'ar'
                    ? 'تواصل مع فريقنا في أبوظبي لمناقشة نطاق مشروعكم وتصميم الحلول المناسبة لمتطلبات مؤسستكم.'
                    : 'Connect with our engineering team in Abu Dhabi to assess your organizational workflows and implement tailored solutions.'}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
                <Link
                  href="/about"
                  className="w-full sm:w-auto px-6 py-3.5 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-bold text-xs sm:text-sm rounded-xl transition-all border border-slate-300 dark:border-slate-700 text-center shadow-sm"
                >
                  {strings.nav.about}
                </Link>
                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black text-xs sm:text-sm rounded-xl transition-all shadow-md flex items-center justify-center space-x-2 rtl:space-x-reverse"
                >
                  <span>{strings.nav.contactCta}</span>
                  <ArrowRight className={`w-4 h-4 shrink-0 ${isRTL ? 'rotate-180' : ''}`} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
