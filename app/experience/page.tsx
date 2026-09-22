'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { TopBar } from '@/components/layout/TopBar';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SearchModal } from '@/components/modals/SearchModal';
import { 
  Building2, 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  Briefcase,
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { DOCUMENTED_EXPERIENCE, COMPANY_INFO } from '@/lib/data';
import { useLanguage } from '@/context/LanguageContext';

export default function ExperiencePage() {
  const { strings, language, isRTL } = useLanguage();
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

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

        {/* 6 Documented Clients & Project Scope Grid */}
        <section className="py-16 bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {DOCUMENTED_EXPERIENCE.map((exp, idx) => (
                <div 
                  key={exp.id}
                  className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800/50">
                        0{idx + 1}
                      </span>
                      <div className="flex items-center space-x-1.5 rtl:space-x-reverse text-xs text-slate-400">
                        <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <div className="p-3 bg-slate-950 rounded-2xl border border-slate-800 flex items-center space-x-3 rtl:space-x-reverse">
                      <div className="p-2.5 rounded-xl bg-cyan-950/60 border border-cyan-500/20 text-cyan-400 shrink-0">
                        <Building2 className="w-5 h-5" />
                      </div>
                      <h2 className="text-base font-bold text-white leading-snug">
                        {exp.organization}
                      </h2>
                    </div>

                    <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800/80 space-y-2">
                      <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
                        {strings.experience.scopeOfWork}:
                      </div>
                      <p className="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed">
                        {exp.scope}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                    <div className="flex items-center space-x-1.5 rtl:space-x-reverse text-emerald-400 font-medium">
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      <span>{language === 'ar' ? 'سجل مشاريع موثق' : 'Official Documented Experience'}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Contact Callout */}
            <div className="p-8 bg-slate-900 border border-slate-800 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 text-start">
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-white">
                  {language === 'ar' ? 'هل تود مناقشة حلول تكنولوجيا المعلومات لمؤسستكم؟' : 'Ready to Discuss Technical Requirements for Your Organization?'}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400">
                  {COMPANY_INFO.headquarters.fullAddress} • Tel: {COMPANY_INFO.contact.telephone}
                </p>
              </div>

              <Link
                href="/contact"
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black text-xs sm:text-sm rounded-xl transition-all shadow-md flex items-center space-x-2 rtl:space-x-reverse shrink-0"
              >
                <span>{strings.nav.contactCta}</span>
                <ArrowRight className={`w-4 h-4 shrink-0 ${isRTL ? 'rotate-180' : ''}`} />
              </Link>
            </div>
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
