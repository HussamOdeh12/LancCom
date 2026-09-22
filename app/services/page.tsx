'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { TopBar } from '@/components/layout/TopBar';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SearchModal } from '@/components/modals/SearchModal';
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

export default function ServicesPage() {
  const { strings, language, isRTL } = useLanguage();
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

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
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-cyan-500 selection:text-slate-950">
      <TopBar />
      <Navbar onOpenSearch={() => setIsSearchModalOpen(true)} />

      <main className="flex-1 text-start">
        {/* Page Hero */}
        <section className="py-16 sm:py-20 bg-slate-900 border-b border-slate-800 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-3 py-1 rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 shrink-0" />
                <span>{strings.services.sectionTag}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                {strings.services.sectionTitle}
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                {strings.services.sectionDesc}
              </p>
            </div>
          </div>
        </section>

        {/* 8 Core Services Deep Dive Cards */}
        <section className="py-16 bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            {CORE_SERVICES.map((srv, idx) => (
              <div 
                key={srv.id}
                id={srv.id}
                className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-8 space-y-5">
                    <div className="flex items-center space-x-3 rtl:space-x-reverse">
                      <div className="p-3 bg-cyan-500/10 border border-cyan-500/30 rounded-xl text-cyan-400 shrink-0">
                        {getServiceIcon(srv.id)}
                      </div>
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 px-2 py-0.5 rounded bg-cyan-950 border border-cyan-800/50 font-mono">
                          0{idx + 1} • LandCom Core Service
                        </span>
                        <h2 className="text-2xl font-bold text-white mt-1">
                          {srv.title}
                        </h2>
                      </div>
                    </div>

                    <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 text-cyan-300 text-xs font-semibold">
                      {srv.tagline}
                    </div>

                    <p className="text-sm text-slate-300 leading-relaxed">
                      {srv.description}
                    </p>

                    <div className="space-y-3 pt-2">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        {language === 'ar' ? 'عناصر ومخرجات النطاق الفني:' : 'Service Scope Elements:'}
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {srv.features.map((feat, fIdx) => (
                          <div key={fIdx} className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex items-start space-x-2.5 rtl:space-x-reverse">
                            <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                            <span className="text-xs text-slate-200">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-4 bg-slate-950/80 border border-slate-800 rounded-2xl p-6 space-y-6 text-start">
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                        {language === 'ar' ? 'الاستشارات والتنفيذ:' : 'Consultation & Delivery:'}
                      </h3>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {language === 'ar'
                          ? 'يقوم مهندسونا ومستشارونا في أبوظبي بتحليل الاحتياجات وتصميم وتنفيذ الحل بما يتوافق مع أعلى المعايير.'
                          : 'Our Abu Dhabi technical consultants analyze requirements and deliver integrated, scalable solutions.'}
                      </p>
                    </div>

                    <div className="pt-2">
                      <Link
                        href="/contact"
                        className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black text-xs sm:text-sm rounded-xl transition-all shadow-md flex items-center justify-center space-x-2 rtl:space-x-reverse"
                      >
                        <span>{language === 'ar' ? 'طلب مناقشة هذا النطاق' : 'Inquire About This Service'}</span>
                        <ArrowRight className={`w-4 h-4 shrink-0 ${isRTL ? 'rotate-180' : ''}`} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />

      <SearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
      />
    </div>
  );
}
