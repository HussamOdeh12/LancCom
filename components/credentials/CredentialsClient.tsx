'use client';

import React from 'react';
import Link from 'next/link';
import { TopBar } from '@/components/layout/TopBar';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { 
  ShieldCheck, 
  FileText, 
  CheckCircle2, 
  Building2, 
  Calendar, 
  MapPin, 
  Phone, 
  ArrowRight, 
  Award,
  Layers,
  Info,
  Clock,
  Briefcase
} from 'lucide-react';
import { COMPANY_INFO, LICENSED_ACTIVITIES } from '@/lib/data';
import { useLanguage } from '@/context/LanguageContext';

export function CredentialsClient() {
  const { strings, language, isRTL } = useLanguage();

  const breadcrumbItems = [
    { label: language === 'ar' ? 'البيانات والاعتمادات الرسمية' : 'Credentials' }
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
                <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                <span>{strings.credentials.sectionTag}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
                {strings.credentials.sectionTitle}
              </h1>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                {strings.credentials.sectionDesc}
              </p>
            </div>
          </div>
        </section>

        {/* 2. Official Licence Information Card */}
        <section className="py-16 bg-white dark:bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="max-w-3xl space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-400">
                {language === 'ar' ? 'التسجيل الاقتصادي' : 'Official Registration'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                {strings.credentials.licenseDetails}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                {language === 'ar'
                  ? 'بيانات الترخيص التجاري الصادر عن دائرة التنمية الاقتصادية في أبوظبي:'
                  : 'Official commercial licence information registered with the Abu Dhabi Department of Economic Development:'}
              </p>
            </div>

            {/* Licence Details Bento / Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 1: Licence Number */}
              <div className="bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 space-y-2 relative overflow-hidden shadow-sm">
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <span className="font-semibold uppercase tracking-wider">{strings.credentials.licenceNo}</span>
                  <FileText className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                </div>
                <div className="text-lg sm:text-xl font-bold font-mono text-cyan-700 dark:text-cyan-300" dir="ltr">
                  {COMPANY_INFO.license.licenseNumber}
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  {language === 'ar' ? 'دائرة التنمية الاقتصادية - أبوظبي' : 'Abu Dhabi DED Registration'}
                </p>
              </div>

              {/* Card 2: Unified Registration No. */}
              <div className="bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 space-y-2 shadow-sm">
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <span className="font-semibold uppercase tracking-wider">{strings.credentials.unifiedRegNo}</span>
                  <Building2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                </div>
                <div className="text-base sm:text-lg font-bold font-mono text-slate-900 dark:text-white" dir="ltr">
                  {COMPANY_INFO.license.unifiedRegistrationNumber}
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  {language === 'ar' ? 'الرقم الموحد للمنشأة' : 'Unified Registration Number'}
                </p>
              </div>

              {/* Card 3: Unified Licence No. */}
              <div className="bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 space-y-2 shadow-sm">
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <span className="font-semibold uppercase tracking-wider">{strings.credentials.unifiedLicNo}</span>
                  <FileText className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                </div>
                <div className="text-base sm:text-lg font-bold font-mono text-slate-900 dark:text-white" dir="ltr">
                  {COMPANY_INFO.license.unifiedLicenseNumber}
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  {language === 'ar' ? 'رقم الرخصة الموحد' : 'Unified Licence Number'}
                </p>
              </div>

              {/* Card 4: ADCCI Membership */}
              <div className="bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 space-y-2 shadow-sm">
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <span className="font-semibold uppercase tracking-wider">{strings.credentials.membershipNo}</span>
                  <Award className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                </div>
                <div className="text-lg sm:text-xl font-bold font-mono text-slate-900 dark:text-white" dir="ltr">
                  {COMPANY_INFO.license.adcciMembership}
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  {language === 'ar' ? 'غرفة تجارة وصناعة أبوظبي' : 'Abu Dhabi Chamber of Commerce'}
                </p>
              </div>

              {/* Card 5: Legal Form */}
              <div className="bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 space-y-2 shadow-sm">
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <span className="font-semibold uppercase tracking-wider">{strings.credentials.legalForm}</span>
                  <Building2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                </div>
                <div className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  {language === 'ar' ? 'مؤسسة فردية' : COMPANY_INFO.legalForm}
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  {language === 'ar' ? 'الشكل القانوني: مؤسسة' : 'Legal Form: Establishment'}
                </p>
              </div>

              {/* Card 6: Established Date */}
              <div className="bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 space-y-2 shadow-sm">
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <span className="font-semibold uppercase tracking-wider">{strings.credentials.establishedDate}</span>
                  <Clock className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                </div>
                <div className="text-base sm:text-lg font-bold text-slate-900 dark:text-white font-mono" dir="ltr">
                  {COMPANY_INFO.license.establishmentDate}
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  {language === 'ar' ? 'تاريخ التأسيس: 09 مايو 2007' : 'Established: 09 May 2007'}
                </p>
              </div>

              {/* Card 7: Issue Date */}
              <div className="bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 space-y-2 shadow-sm">
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <span className="font-semibold uppercase tracking-wider">{strings.credentials.issueDate}</span>
                  <Calendar className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                </div>
                <div className="text-base sm:text-lg font-bold text-slate-900 dark:text-white font-mono" dir="ltr">
                  {COMPANY_INFO.license.issueDate}
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  {language === 'ar' ? 'تاريخ الإصدار: 27 نوفمبر 2025' : 'Issued: 27 November 2025'}
                </p>
              </div>

              {/* Card 8: Expiry Date */}
              <div className="bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 space-y-2 shadow-sm">
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <span className="font-semibold uppercase tracking-wider">{strings.credentials.expiryDate}</span>
                  <Calendar className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                </div>
                <div className="text-base sm:text-lg font-bold text-cyan-700 dark:text-cyan-300 font-mono" dir="ltr">
                  {COMPANY_INFO.license.expiryDate}
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  {language === 'ar' ? 'تاريخ الانتهاء: 26 نوفمبر 2026' : 'Expiry: 26 November 2026'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Six Documented Licensed Activities Section */}
        <section className="py-16 bg-slate-50 dark:bg-slate-900 border-t border-b border-slate-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="max-w-3xl space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-400">
                {language === 'ar' ? 'الأنشطة الاقتصادية المعتمدة' : 'Official Scope of Licence'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                {strings.credentials.activitiesTitle}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                {strings.credentials.activitiesDesc}
              </p>
            </div>

            {/* 6 Licensed Activities Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {LICENSED_ACTIVITIES.map((act) => (
                <div
                  key={act.id}
                  id={`licensed-activity-${act.id}`}
                  className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 rounded-3xl p-6 space-y-4 flex flex-col justify-between transition-all shadow-sm hover:shadow-md"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded bg-cyan-100 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800/50">
                        0{act.id}
                      </span>
                      <ShieldCheck className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                      {language === 'ar' ? act.titleAr : act.title}
                    </h3>
                  </div>

                  <div className="pt-3 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                    <span className="text-[11px] font-mono text-cyan-700 dark:text-cyan-400">
                      {COMPANY_INFO.license.licenseNumber}
                    </span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400">
                      {language === 'ar' ? 'نشاط مرخص رسمياً' : 'Authorized Activity'}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Clarification Box: Licensed Activities vs. Core Services */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 flex items-start space-x-4 rtl:space-x-reverse shadow-sm">
              <div className="p-2.5 rounded-xl bg-cyan-100 dark:bg-cyan-950 border border-cyan-200 dark:border-cyan-500/30 text-cyan-700 dark:text-cyan-400 shrink-0 mt-0.5">
                <Info className="w-5 h-5" />
              </div>
              <div className="space-y-1.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                <h4 className="font-bold text-slate-900 dark:text-white">
                  {language === 'ar' ? 'توضيح بخصوص الأنشطة المرخصة والخدمات التشغيلية' : 'Licensing Framework & Service Portfolio Distinction'}
                </h4>
                <p>
                  {language === 'ar'
                    ? 'تمثل هذه الأنشطة الستة التصنيف الرسمي للأنشطة الاقتصادية المعتمدة لشركة لاند كوم لدى دائرة التنمية الاقتصادية في أبوظبي. لتقديم متطلبات المشاريع بشكل منظم، تقدم لاند كوم حلولها عبر 8 خدمات أساسية متخصصة.'
                    : 'The six activities listed above represent the official economic classifications authorized under LandCom’s Abu Dhabi Economic Licence (CN-1006129). LandCom structures and delivers its technical capabilities through eight specialized core service domains.'}
                </p>
                <div className="pt-2">
                  <Link
                    href="/services"
                    className="inline-flex items-center space-x-1.5 rtl:space-x-reverse text-cyan-700 dark:text-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-300 font-bold text-xs group"
                  >
                    <span>{language === 'ar' ? 'استعراض الخدمات الثمانية الأساسية' : 'Explore the Eight Core Services'}</span>
                    <ArrowRight className={`w-3.5 h-3.5 shrink-0 ${isRTL ? 'rotate-180' : ''}`} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Corporate Governance & Key Facts */}
        <section className="py-16 bg-white dark:bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="max-w-3xl space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-400">
                {language === 'ar' ? 'المعلومات المؤسسية' : 'Corporate Profile'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                {strings.credentials.corporateFacts}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Fact 1: 100% UAE Ownership */}
              <div className="bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 space-y-3 shadow-sm">
                <div className="w-10 h-10 rounded-2xl bg-cyan-100 dark:bg-cyan-950 border border-cyan-200 dark:border-cyan-500/30 flex items-center justify-center text-cyan-700 dark:text-cyan-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {language === 'ar' ? 'ملكية وإدارة وطنية 100%' : '100% UAE Nationally Owned'}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {language === 'ar'
                    ? 'منشأة وطنية تأسست وتدار بإشراف كوادر وطنية إماراتية، مكرسة لتنفيذ مشاريع تقنية عالية الجودة للمؤسسات والشركات.'
                    : 'LandCom is a 100% UAE-owned establishment with top executive management led by UAE nationals in Abu Dhabi.'}
                </p>
              </div>

              {/* Fact 2: Continuous Heritage */}
              <div className="bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 space-y-3 shadow-sm">
                <div className="w-10 h-10 rounded-2xl bg-cyan-100 dark:bg-cyan-950 border border-cyan-200 dark:border-cyan-500/30 flex items-center justify-center text-cyan-700 dark:text-cyan-400">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {language === 'ar' ? 'تأسست في عام 2007' : 'Established in 2007'}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {language === 'ar'
                    ? 'سجل متواصل يمتد لأكثر من 19 عاماً في تطوير وتنفيذ حلول الأعمال وأنظمة تقنية المعلومات في إمارة أبوظبي.'
                    : 'Over 19 years of continuous operational heritage delivering enterprise software and infrastructure solutions.'}
                </p>
              </div>

              {/* Fact 3: Permanent Abu Dhabi Headquarters */}
              <div className="bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 space-y-3 shadow-sm">
                <div className="w-10 h-10 rounded-2xl bg-cyan-100 dark:bg-cyan-950 border border-cyan-200 dark:border-cyan-500/30 flex items-center justify-center text-cyan-700 dark:text-cyan-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {language === 'ar' ? 'مقر دائم في جزيرة أبوظبي' : 'Abu Dhabi Island Headquarters'}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {language === 'ar'
                    ? COMPANY_INFO.headquarters.fullAddressAr
                    : COMPANY_INFO.headquarters.fullAddress}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Navigation & Contact CTA */}
        <section className="py-16 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-start shadow-md dark:shadow-2xl">
              <div className="space-y-3 max-w-2xl">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  {language === 'ar' ? 'طلب مستندات الترخيص أو مناقشة التعاقد' : 'Inquire About Licensing or Official Procurement Requirements'}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {language === 'ar'
                    ? 'يمكنكم التواصل مباشرة مع فريقنا في أبوظبي لطلب بيانات التسجيل الرسمي واستعراض نطاق الخدمات والحلول.'
                    : 'Contact our Abu Dhabi headquarters to request registration details or discuss technical procurement scopes.'}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
                <Link
                  href="/experience"
                  className="w-full sm:w-auto px-6 py-3.5 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-bold text-xs sm:text-sm rounded-xl transition-all border border-slate-300 dark:border-slate-700 text-center shadow-sm"
                >
                  {strings.experience.sectionTitle}
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
