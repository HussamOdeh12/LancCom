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
  ShieldCheck,
  Award,
  Users,
  Compass,
  Calendar,
  FileCheck
} from 'lucide-react';
import { COMPANY_INFO, LICENSED_ACTIVITIES, COMPANY_CREDENTIALS } from '@/lib/data';
import { useLanguage } from '@/context/LanguageContext';

export default function AboutPage() {
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
                <Building2 className="w-3.5 h-3.5 shrink-0" />
                <span>{strings.aboutSection.sectionTag}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                {strings.aboutSection.sectionTitle}
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                {strings.aboutSection.paragraph1}
              </p>
            </div>
          </div>
        </section>

        {/* Corporate Profile & Credentials */}
        <section className="py-16 bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Column: Strategic Consultation & Overview */}
              <div className="lg:col-span-7 space-y-6 text-start">
                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  {language === 'ar' ? 'نبذة عن الشركة ومسيرتها في أبوظبي' : 'Company Background & Abu Dhabi Commitment'}
                </h2>
                
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {strings.aboutSection.paragraph1}
                </p>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {strings.aboutSection.paragraph2}
                </p>

                {/* Key Strategic Pillars */}
                <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800 space-y-4">
                  <h3 className="text-base font-bold text-white flex items-center space-x-2 rtl:space-x-reverse">
                    <Compass className="w-5 h-5 text-cyan-400 shrink-0" />
                    <span>{language === 'ar' ? 'نموذج العمل الاستشاري' : 'Strategic Consulting Model'}</span>
                  </h3>
                  <div className="space-y-3 text-xs sm:text-sm text-slate-300">
                    <div className="flex items-start space-x-2.5 rtl:space-x-reverse">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{strings.aboutSection.points.consultants}</span>
                    </div>
                    <div className="flex items-start space-x-2.5 rtl:space-x-reverse">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{strings.aboutSection.points.experience}</span>
                    </div>
                    <div className="flex items-start space-x-2.5 rtl:space-x-reverse">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{strings.aboutSection.points.presence}</span>
                    </div>
                  </div>
                </div>

                {/* Commercial Registration Details */}
                <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800 space-y-4">
                  <h3 className="text-base font-bold text-white flex items-center space-x-2 rtl:space-x-reverse">
                    <FileCheck className="w-5 h-5 text-cyan-400 shrink-0" />
                    <span>{strings.credentials.licenseDetails}</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div>
                      <span className="text-slate-400 block">{strings.credentials.legalForm}:</span>
                      <strong className="text-white">{COMPANY_INFO.license.legalForm}</strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block">{strings.credentials.licenceNo}:</span>
                      <strong className="text-white font-mono">{COMPANY_INFO.license.licenseNumber}</strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block">{strings.credentials.unifiedRegNo}:</span>
                      <strong className="text-white font-mono">{COMPANY_INFO.license.unifiedRegistrationNumber}</strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block">{strings.credentials.membershipNo}:</span>
                      <strong className="text-white font-mono">{COMPANY_INFO.license.adcciMembership}</strong>
                    </div>
                    <div className="sm:col-span-2">
                      <span className="text-slate-400 block">{strings.contact.address}:</span>
                      <strong className="text-white">{COMPANY_INFO.headquarters.fullAddress}</strong>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Key Metrics & 6 Licensed Activities */}
              <div className="lg:col-span-5 space-y-6">
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
                  <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white">
                        {language === 'ar' ? 'الملكية والإدارة الوطنية' : 'UAE National Ownership'}
                      </h3>
                      <span className="text-xs text-cyan-400 font-medium">{COMPANY_INFO.ownership}</span>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {language === 'ar'
                      ? 'منشأة وطنية بنسبة 100%، تحت إدارة كفاءات إماراتية مع فريق تقني متخصص يضم أكثر من 32 كادراً في أبوظبي.'
                      : '100% UAE-owned establishment with top management led by UAE nationals and an agile technical team of 32+ IT staff deployed in key projects.'}
                  </p>
                </div>

                {/* 6 Licensed Activities */}
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-3">
                  <div className="flex items-center space-x-2.5 rtl:space-x-reverse pb-2 border-b border-slate-800">
                    <Award className="w-5 h-5 text-amber-400 shrink-0" />
                    <h3 className="text-sm font-bold text-white">
                      {strings.credentials.activitiesTitle}
                    </h3>
                  </div>
                  <div className="space-y-2">
                    {LICENSED_ACTIVITIES.map(act => (
                      <div key={act.id} className="p-2.5 bg-slate-950 rounded-xl border border-slate-800 text-xs text-slate-200">
                        {language === 'ar' ? act.titleAr : act.title}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact CTA */}
                <div className="p-6 bg-gradient-to-r from-cyan-950/40 to-blue-950/40 border border-cyan-500/20 rounded-2xl space-y-3 text-start">
                  <h4 className="text-sm font-bold text-cyan-300">
                    {strings.contact.hqTitle}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {COMPANY_INFO.headquarters.fullAddress} • Tel: {COMPANY_INFO.contact.telephone}
                  </p>
                  <Link
                    href="/contact"
                    className="w-full py-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs rounded-xl transition-all shadow-md flex items-center justify-center space-x-2 rtl:space-x-reverse"
                  >
                    <span>{strings.nav.contactCta}</span>
                    <ArrowRight className={`w-3.5 h-3.5 shrink-0 ${isRTL ? 'rotate-180' : ''}`} />
                  </Link>
                </div>
              </div>
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
