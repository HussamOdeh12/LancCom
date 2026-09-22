'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Database,
  Smartphone,
  Network,
  ShieldCheck,
  Navigation,
  Radio,
  Globe,
  Headset,
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  Layers
} from 'lucide-react';
import { CORE_SERVICES, ServiceItem } from '@/lib/data';
import { useLanguage } from '@/context/LanguageContext';

export function CoreServices() {
  const { strings, language, isRTL } = useLanguage();
  const [selectedService, setSelectedService] = useState<ServiceItem>(CORE_SERVICES[0]);

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
      default: return <Layers className={className} />;
    }
  };

  return (
    <section id="services" className="py-20 bg-slate-900 text-white relative text-start">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-3 py-1 rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 shrink-0" />
            <span>{strings.services.sectionTag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            {strings.services.sectionTitle}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {strings.services.sectionDesc}
          </p>
        </div>

        {/* 8 Core Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {CORE_SERVICES.map((srv, idx) => {
            const isSelected = selectedService.id === srv.id;
            return (
              <div
                key={srv.id}
                id={srv.id}
                onClick={() => setSelectedService(srv)}
                className={`cursor-pointer rounded-2xl p-5 sm:p-6 transition-all duration-300 flex flex-col justify-between border relative group text-start ${
                  isSelected
                    ? 'bg-slate-950 border-cyan-500 shadow-xl shadow-cyan-500/15 ring-1 ring-cyan-500/40'
                    : 'bg-slate-950/70 hover:bg-slate-950 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl transition-all ${
                      isSelected
                        ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/30'
                        : 'bg-slate-900 border border-slate-800 text-cyan-400 group-hover:border-cyan-500/30 group-hover:scale-105'
                    }`}>
                      {getServiceIcon(srv.id)}
                    </div>
                    <span className="text-[11px] font-mono font-bold text-slate-500">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-1.5 group-hover:text-cyan-300 transition-colors">
                    {srv.title}
                  </h3>

                  <p className="text-xs text-cyan-300/90 font-medium mb-3">
                    {srv.tagline}
                  </p>

                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-3 mb-4">
                    {srv.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="text-[11px] font-semibold text-slate-300 group-hover:text-cyan-400 transition-colors">
                    {language === 'ar' ? 'استعراض النطاق' : 'View Scope'}
                  </span>
                  <ArrowRight className={`w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 transition-transform ${isRTL ? 'rotate-180' : ''}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Service Detail Panel */}
        <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden text-start">
          <div className="absolute top-0 end-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Start: Overview & Scope Details */}
            <div className="lg:col-span-8 space-y-5">
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <div className="p-3 bg-cyan-500/10 border border-cyan-500/30 rounded-xl text-cyan-400 shrink-0">
                  {getServiceIcon(selectedService.id, "w-6 h-6")}
                </div>
                <div>
                  <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                    {strings.services.scopeTitle}
                  </span>
                  <h3 className="text-2xl font-bold text-white">
                    {selectedService.title}
                  </h3>
                </div>
              </div>

              <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-800">
                <div className="text-xs font-bold text-cyan-300 mb-1">
                  {selectedService.tagline}
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {selectedService.description}
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  {language === 'ar' ? 'عناصر ومخرجات الخدمة:' : 'Service Implementation Elements:'}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedService.features.map((feat, idx) => (
                    <div key={idx} className="p-3 bg-slate-900 rounded-xl border border-slate-800/80 flex items-start space-x-2.5 rtl:space-x-reverse">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-200 font-medium">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* End: Action Box */}
            <div className="lg:col-span-4 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-5 text-start">
              <div className="space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-cyan-950 text-cyan-300 border border-cyan-800/40">
                  {language === 'ar' ? 'أبوظبي، الإمارات' : 'Abu Dhabi, UAE'}
                </span>
                <h4 className="text-lg font-bold text-white pt-2">
                  {language === 'ar' ? 'طلب مناقشة هذا النطاق' : 'Discuss This Service Scope'}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {language === 'ar'
                    ? 'تواصل مع مستشارينا في أبوظبي لمناقشة متطلبات مؤسستكم وتوفير الحلول المناسبة.'
                    : 'Connect with our Abu Dhabi technical consultants to evaluate your requirements and implement tailored solutions.'}
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <Link
                  href={`/services/${selectedService.slug}`}
                  className="w-full py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs sm:text-sm rounded-xl transition-all shadow-lg shadow-cyan-500/20 flex items-center justify-center space-x-2 rtl:space-x-reverse"
                >
                  <span>{language === 'ar' ? 'صفحة تفاصيل الخدمة' : 'View Full Service Page'}</span>
                  <ArrowRight className={`w-4 h-4 shrink-0 ${isRTL ? 'rotate-180' : ''}`} />
                </Link>
                <Link
                  href="/contact"
                  className="w-full py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs sm:text-sm rounded-xl transition-all border border-slate-700 flex items-center justify-center space-x-2 rtl:space-x-reverse"
                >
                  <span>{strings.nav.contactCta}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
