'use client';

import React from 'react';
import Link from 'next/link';
import { TopBar } from '@/components/layout/TopBar';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { 
  Building2, 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  Briefcase,
  Layers,
  ChevronRight,
  Database,
  Smartphone,
  Network,
  ShieldCheck,
  Navigation,
  Radio,
  Globe,
  Headset
} from 'lucide-react';
import { DOCUMENTED_EXPERIENCE, COMPANY_INFO, CORE_SERVICES } from '@/lib/data';
import { useLanguage } from '@/context/LanguageContext';

export function ExperienceClient() {
  const { strings, language, isRTL } = useLanguage();

  const breadcrumbItems = [
    { label: language === 'ar' ? 'سجل الخبرات' : 'Experience' }
  ];

  const getServiceIcon = (slug: string) => {
    switch (slug) {
      case 'erp-systems': return <Database className="w-4 h-4 shrink-0 text-cyan-400" />;
      case 'mobility-solutions': return <Smartphone className="w-4 h-4 shrink-0 text-cyan-400" />;
      case 'it-resources-networking': return <Network className="w-4 h-4 shrink-0 text-cyan-400" />;
      case 'security-solutions': return <ShieldCheck className="w-4 h-4 shrink-0 text-cyan-400" />;
      case 'tracking-systems': return <Navigation className="w-4 h-4 shrink-0 text-cyan-400" />;
      case 'rfid-solutions': return <Radio className="w-4 h-4 shrink-0 text-cyan-400" />;
      case 'ecommerce-web': return <Globe className="w-4 h-4 shrink-0 text-cyan-400" />;
      case 'managed-it-services': return <Headset className="w-4 h-4 shrink-0 text-cyan-400" />;
      default: return <Layers className="w-4 h-4 shrink-0 text-cyan-400" />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-cyan-500 selection:text-slate-950">
      <TopBar />
      <Navbar />

      <main id="main-content" className="flex-1 text-start">
        {/* 1. Page Hero */}
        <section className="py-14 sm:py-18 bg-slate-900 border-b border-slate-800 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
            <Breadcrumb items={breadcrumbItems} />

            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-3 py-1 rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider">
                <Briefcase className="w-3.5 h-3.5 shrink-0" />
                <span>{strings.experience.sectionTag}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                {strings.experience.sectionTitle}
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                {strings.experience.sectionDesc}
              </p>
            </div>
          </div>
        </section>

        {/* 2. Introductory Statement */}
        <section className="py-10 bg-slate-950 border-b border-slate-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800">
              <div className="flex items-start space-x-4 rtl:space-x-reverse">
                <div className="p-3 rounded-2xl bg-cyan-950 border border-cyan-500/30 text-cyan-400 shrink-0 mt-1">
                  <Building2 className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h2 className="text-base sm:text-lg font-bold text-white">
                    {language === 'ar' ? 'سجل الخبرات الموثق رسمياً' : 'Documented Organizational Engagements'}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-4xl">
                    {strings.experience.introStatement}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Six Documented Clients & Project Scope Grid */}
        <section className="py-16 bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="max-w-3xl space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                {strings.experience.sectionTag}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                {strings.experience.supportedOrganizations}
              </h2>
              <p className="text-xs sm:text-sm text-slate-400">
                {language === 'ar'
                  ? 'تفاصيل الجهات والمشاريع ونطاق العمل المعتمد وفقاً للملف التعريفي الرسمي لشركة لاند كوم:'
                  : 'Documented client organizations and confirmed project scopes as published in LandCom’s official company profile:'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {DOCUMENTED_EXPERIENCE.map((exp, idx) => (
                <div 
                  key={exp.id}
                  id={`experience-${exp.id}`}
                  className="bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 rounded-3xl p-6 sm:p-8 space-y-6 flex flex-col justify-between transition-all group"
                >
                  <div className="space-y-5">
                    {/* Header: Number + Verified Badge */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800/50">
                        0{idx + 1}
                      </span>
                      <div className="flex items-center space-x-1.5 rtl:space-x-reverse text-xs text-emerald-400 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                        <span>{strings.experience.verifiedNote}</span>
                      </div>
                    </div>

                    {/* Organization Name */}
                    <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 flex items-start space-x-3.5 rtl:space-x-reverse">
                      <div className="p-2.5 rounded-xl bg-cyan-950/60 border border-cyan-500/20 text-cyan-400 shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                        <Building2 className="w-5 h-5" />
                      </div>
                      <div className="space-y-0.5">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                          {strings.experience.organization}
                        </span>
                        <h3 className="text-base font-bold text-white leading-snug">
                          {language === 'ar' ? exp.organizationAr : exp.organization}
                        </h3>
                      </div>
                    </div>

                    {/* Scope of Work */}
                    <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800/80 space-y-2">
                      <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
                        {strings.experience.scopeOfWork}:
                      </div>
                      <p className="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed">
                        {language === 'ar' ? exp.scopeAr : exp.scope}
                      </p>
                    </div>

                    {/* Related Official Service Link */}
                    {exp.relatedServiceSlug && (
                      <div className="pt-2">
                        <Link
                          href={`/services/${exp.relatedServiceSlug}`}
                          className="p-3 bg-slate-950/60 hover:bg-slate-950 rounded-xl border border-slate-800/80 hover:border-cyan-500/40 flex items-center justify-between text-xs text-slate-300 hover:text-white transition-all group/link"
                        >
                          <div className="flex items-center space-x-2 rtl:space-x-reverse min-w-0">
                            {getServiceIcon(exp.relatedServiceSlug)}
                            <span className="truncate font-semibold text-slate-200 group-hover/link:text-cyan-400 transition-colors">
                              {language === 'ar' ? exp.relatedServiceNameAr : exp.relatedServiceName}
                            </span>
                          </div>
                          <ChevronRight className={`w-4 h-4 text-slate-600 group-hover/link:text-cyan-400 shrink-0 transition-transform ${isRTL ? 'rotate-180 group-hover/link:-translate-x-0.5' : 'group-hover/link:translate-x-0.5'}`} />
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Core Services Exploration */}
        <section className="py-16 bg-slate-900 border-t border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="max-w-3xl space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                {language === 'ar' ? 'الخدمات الأساسية' : 'Core Services'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                {language === 'ar' ? 'استكشف الخدمات والحلول التقنية' : 'Explore LandCom Core Service Lines'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-400">
                {language === 'ar'
                  ? 'تعرف على كافة الحلول والخدمات التقنية الثمانية المعتمدة في الملف التعريفي للشركة:'
                  : 'Review LandCom’s eight documented technical service offerings and implementation scopes:'}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {CORE_SERVICES.map((service) => (
                <Link
                  key={service.id}
                  href={`/services/${service.slug}`}
                  className="p-5 rounded-2xl bg-slate-950 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-950/80 transition-all space-y-3 block text-start group"
                >
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 group-hover:scale-105 transition-transform">
                      {getServiceIcon(service.slug)}
                    </div>
                    <ChevronRight className={`w-4 h-4 text-slate-600 group-hover:text-cyan-400 shrink-0 transition-transform ${isRTL ? 'rotate-180 group-hover:-translate-x-0.5' : 'group-hover:translate-x-0.5'}`} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {language === 'ar' ? service.titleAr : service.title}
                    </h3>
                    <p className="text-[11px] text-slate-400 mt-1 line-clamp-2">
                      {language === 'ar' ? service.taglineAr : service.tagline}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Corporate Contact CTA */}
        <section className="py-16 bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-slate-900 via-slate-900/90 to-cyan-950/50 border border-slate-800 rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-start shadow-2xl">
              <div className="space-y-3 max-w-2xl">
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {language === 'ar' ? 'هل تود مناقشة متطلبات تقنية المعلومات لمؤسستكم؟' : 'Ready to Discuss Your Organization’s IT Requirements?'}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {COMPANY_INFO.headquarters.fullAddress} • Tel: {COMPANY_INFO.contact.telephone}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
                <Link
                  href="/services"
                  className="w-full sm:w-auto px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs sm:text-sm rounded-xl transition-all border border-slate-700 text-center"
                >
                  {strings.services.allServices}
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
