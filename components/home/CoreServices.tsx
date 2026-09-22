'use client';

import React, { useState } from 'react';
import { 
  Server, 
  ShieldCheck, 
  Cloud, 
  Cable, 
  Network, 
  Headset, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  Clock,
  FileSpreadsheet
} from 'lucide-react';
import { SERVICES, ServiceItem } from '@/lib/data';
import { useLanguage } from '@/context/LanguageContext';

interface CoreServicesProps {
  onOpenConsultation: (serviceId?: string) => void;
}

export function CoreServices({ onOpenConsultation }: CoreServicesProps) {
  const { strings, language, isRTL } = useLanguage();
  const [selectedService, setSelectedService] = useState<ServiceItem>(SERVICES[0]);

  const getServiceIcon = (id: string, className = "w-6 h-6") => {
    switch (id) {
      case 'it-infrastructure': return <Server className={className} />;
      case 'cybersecurity-soc': return <ShieldCheck className={className} />;
      case 'cloud-datacenter': return <Cloud className={className} />;
      case 'elv-structured-cabling': return <Cable className={className} />;
      case 'networking-sdwan': return <Network className={className} />;
      case 'managed-it-services': return <Headset className={className} />;
      default: return <Server className={className} />;
    }
  };

  // Arabic translations mapping
  const serviceTitleMapAr: Record<string, string> = {
    'it-infrastructure': 'البنية التحتية للخوادم ومراكز البيانات',
    'cybersecurity-soc': 'الأمن السيبراني ومركز عمليات SOC',
    'cloud-datacenter': 'السحابة الهجينة واستضافة البيانات',
    'elv-structured-cabling': 'أنظمة التيار الخفيف (ELV) وشبكات الألياف',
    'networking-sdwan': 'شبكات المؤسسات وتوجيه SD-WAN',
    'managed-it-services': 'الخدمات المدارة ومركز NOC على مدار 24/7',
  };

  const serviceCategoryMapAr: Record<string, string> = {
    'Infrastructure': 'البنية التحتية',
    'Cybersecurity': 'الأمن السيبراني',
    'Cloud': 'الحوسبة السحابية',
    'Low Current & Cabling': 'التيار الخفيف والتمديدات',
    'Networking': 'الشبكات والربط',
    'Managed Services': 'الخدمات المدارة',
  };

  const serviceDescMapAr: Record<string, string> = {
    'it-infrastructure': 'تصميم وتوريد خوادم المؤسسات (HCI)، ومصفوفات التخزين SAN، وحلول النسخ الاحتياطي غير القابل للتعديل للحماية من الفدية.',
    'cybersecurity-soc': 'حلول أمن الثقة الصفرية (Zero-Trust)، وجدران الحماية للجيل القادم NGFW، ومراقبة التهديدات والاستجابة EDR/SIEM على مدار الساعة.',
    'cloud-datacenter': 'تصميم وبناء مراكز البيانات الافتراضية، والسحابة السيادية الملتزمة بالتشريعات الإماراتية لاستضافة البيانات.',
    'elv-structured-cabling': 'كابلات نحاسية وألياف ضوئية Cat6A/Cat7، وغرف خوادم، وأنظمة المراقبة والتحكم في الدخول المعتمدة من SIRA/MCC.',
    'networking-sdwan': 'هندسة شبكات المؤسسات SD-WAN، وتوجيه حركة البيانات المشفرة، وأجهزة التوجيه عالية السرعة مع توافر 99.999%.',
    'managed-it-services': 'إدارة البنية التحتية الشاملة، وعقود الصيانة السنوية (AMC)، والدعم الفني الميداني السريع في أبوظبي خلال ساعتين.',
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

        {/* 6 Core Cards Grid with Logical Spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {SERVICES.map((srv) => {
            const isSelected = selectedService.id === srv.id;
            return (
              <div
                key={srv.id}
                id={srv.id}
                onClick={() => setSelectedService(srv)}
                className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between border relative group text-start ${
                  isSelected
                    ? 'bg-gradient-to-b from-slate-950 to-slate-900 border-cyan-500 shadow-xl shadow-cyan-500/10 ring-1 ring-cyan-500/40'
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
                    <span className="text-[10px] font-bold uppercase px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-400">
                      {language === 'ar' ? (serviceCategoryMapAr[srv.category] || srv.category) : srv.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {language === 'ar' ? (serviceTitleMapAr[srv.id] || srv.title) : srv.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {language === 'ar' ? (serviceDescMapAr[srv.id] || srv.shortDesc) : srv.shortDesc}
                  </p>

                  {/* Highlights list */}
                  <div className="space-y-1.5 mb-5">
                    {srv.features.slice(0, 3).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start space-x-2 rtl:space-x-reverse text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {srv.technologies.slice(0, 2).map((tech, tIdx) => (
                      <span key={tIdx} className="text-[10px] font-medium px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenConsultation(srv.id);
                    }}
                    className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center space-x-1 rtl:space-x-reverse transition-transform"
                  >
                    <span>{strings.services.requestBoq}</span>
                    <ArrowRight className={`w-3 h-3 ${isRTL ? 'rotate-180' : ''}`} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Deep Dive Detail Showcase on Selected Service */}
        <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8 lg:p-10 shadow-2xl relative overflow-hidden text-start">
          <div className="absolute top-0 end-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Start: Overview & Scope */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <div className="p-3 bg-cyan-500/10 border border-cyan-500/30 rounded-xl text-cyan-400 shrink-0">
                  {getServiceIcon(selectedService.id, "w-6 h-6")}
                </div>
                <div>
                  <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                    {strings.services.exploreBlueprint}
                  </span>
                  <h3 className="text-2xl font-bold text-white">
                    {language === 'ar' ? (serviceTitleMapAr[selectedService.id] || selectedService.title) : selectedService.title}
                  </h3>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                {language === 'ar' ? (serviceDescMapAr[selectedService.id] || selectedService.fullDesc) : selectedService.fullDesc}
              </p>

              {/* Full Features Breakdown */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  {strings.services.deliverables}:
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

              {/* SLA & Handover Deliverables */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-slate-900/90 rounded-xl border border-slate-800 space-y-1 text-start">
                  <div className="flex items-center space-x-2 rtl:space-x-reverse text-xs font-bold text-emerald-400">
                    <Clock className="w-4 h-4 shrink-0" />
                    <span>{strings.services.slaResponse}</span>
                  </div>
                  <p className="text-xs text-slate-300 font-medium">{selectedService.sla}</p>
                </div>

                <div className="p-4 bg-slate-900/90 rounded-xl border border-slate-800 space-y-1 text-start">
                  <div className="flex items-center space-x-2 rtl:space-x-reverse text-xs font-bold text-cyan-400">
                    <FileSpreadsheet className="w-4 h-4 shrink-0" />
                    <span>{strings.services.deliverables}</span>
                  </div>
                  <div className="text-[11px] text-slate-400 line-clamp-2">
                    {selectedService.deliverables.join(' • ')}
                  </div>
                </div>
              </div>
            </div>

            {/* End: Technical Stack & Consultation CTA */}
            <div className="lg:col-span-5 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-6 text-start">
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                  {strings.services.oemVendors}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedService.technologies.map((tech, idx) => (
                    <div
                      key={idx}
                      className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs font-semibold text-slate-200"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-cyan-950/40 border border-cyan-500/20 rounded-xl space-y-2">
                <div className="text-xs font-bold text-cyan-300">
                  {language === 'ar' ? 'ضمان التسليم المتكامل والامتثال بأبوظبي' : 'Abu Dhabi Turnkey Delivery & Compliance Guarantee'}
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  {language === 'ar'
                    ? 'يتم تنفيذ جميع المشاريع بواسطة مهندسين مقيمين معتمدين وفقاً لمعايير NESA و TDRA و SIRA/MCC، مدعومين بمستودع قطع غيار محلي ودعم NOC طارئ.'
                    : 'Every deployment is executed by certified resident engineers adhering to UAE NESA, TDRA, and SIRA/MCC standards, backed by local spares inventory and emergency NOC support.'}
                </p>
              </div>

              <div className="pt-2 space-y-3">
                <button
                  type="button"
                  onClick={() => onOpenConsultation(selectedService.id)}
                  className="w-full py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs sm:text-sm rounded-xl shadow-lg shadow-cyan-500/20 transition-all flex items-center justify-center space-x-2 rtl:space-x-reverse"
                >
                  <span>
                    {language === 'ar'
                      ? `طلب عرض فني لـ ${serviceTitleMapAr[selectedService.id] || selectedService.title}`
                      : `Request Proposal for ${selectedService.title.split('&')[0]}`}
                  </span>
                  <ArrowRight className={`w-4 h-4 shrink-0 ${isRTL ? 'rotate-180' : ''}`} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
