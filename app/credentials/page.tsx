'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { TopBar } from '@/components/layout/TopBar';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SearchModal } from '@/components/modals/SearchModal';
import { 
  ShieldCheck, 
  Award, 
  FileCheck, 
  Building2, 
  CheckCircle2, 
  ArrowRight,
  Calendar,
  Users,
  MapPin
} from 'lucide-react';
import { COMPANY_INFO, LICENSED_ACTIVITIES, COMPANY_CREDENTIALS } from '@/lib/data';
import { useLanguage } from '@/context/LanguageContext';

export default function CredentialsPage() {
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
                <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                <span>{strings.credentials.sectionTag}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                {strings.credentials.sectionTitle}
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                {strings.credentials.sectionDesc}
              </p>
            </div>
          </div>
        </section>

        {/* Corporate Legal & Registration Section */}
        <section className="py-16 bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            {/* 4 Metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {COMPANY_CREDENTIALS.map((cred, idx) => (
                <div
                  key={idx}
                  className="p-5 sm:p-6 rounded-2xl bg-slate-900/80 border border-slate-800 text-start"
                >
                  <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                    {cred.value}
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-white mt-1">
                    {language === 'ar' ? cred.labelAr : cred.label}
                  </div>
                  <div className="text-[11px] sm:text-xs text-slate-400 mt-1 leading-relaxed">
                    {language === 'ar' ? cred.descriptionAr : cred.description}
                  </div>
                </div>
              ))}
            </div>

            {/* License & Activities Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Official License Details */}
              <div className="lg:col-span-6 bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
                <div className="flex items-center space-x-3 rtl:space-x-reverse pb-4 border-b border-slate-800">
                  <div className="p-2.5 rounded-xl bg-cyan-950 border border-cyan-500/30 text-cyan-400">
                    <FileCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-white">
                      {strings.credentials.licenseDetails}
                    </h2>
                    <span className="text-xs text-slate-400">
                      {COMPANY_INFO.license.authority}
                    </span>
                  </div>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between">
                    <span className="text-slate-400">{strings.credentials.legalForm}</span>
                    <span className="text-cyan-300 font-medium">{COMPANY_INFO.license.legalForm}</span>
                  </div>
                  <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between">
                    <span className="text-slate-400">{strings.credentials.licenceNo}</span>
                    <span className="text-white font-mono font-bold">{COMPANY_INFO.license.licenseNumber}</span>
                  </div>
                  <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between">
                    <span className="text-slate-400">{strings.credentials.unifiedRegNo}</span>
                    <span className="text-white font-mono font-medium">{COMPANY_INFO.license.unifiedRegistrationNumber}</span>
                  </div>
                  <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between">
                    <span className="text-slate-400">{strings.credentials.unifiedLicNo}</span>
                    <span className="text-white font-mono font-medium">{COMPANY_INFO.license.unifiedLicenseNumber}</span>
                  </div>
                  <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between">
                    <span className="text-slate-400">{strings.credentials.membershipNo}</span>
                    <span className="text-white font-mono font-medium">{COMPANY_INFO.license.adcciMembership}</span>
                  </div>
                  <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between">
                    <span className="text-slate-400">{strings.credentials.issueDate}</span>
                    <span className="text-slate-300 font-mono">{COMPANY_INFO.license.issueDate}</span>
                  </div>
                  <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between">
                    <span className="text-slate-400">{strings.credentials.expiryDate}</span>
                    <span className="text-slate-300 font-mono">{COMPANY_INFO.license.expiryDate}</span>
                  </div>
                </div>
              </div>

              {/* 6 Licensed Activities */}
              <div className="lg:col-span-6 bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
                <div className="flex items-center space-x-3 rtl:space-x-reverse pb-4 border-b border-slate-800">
                  <div className="p-2.5 rounded-xl bg-blue-950 border border-blue-500/30 text-blue-400">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-white">
                      {strings.credentials.activitiesTitle}
                    </h2>
                    <span className="text-xs text-slate-400">
                      {strings.credentials.activitiesDesc}
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  {LICENSED_ACTIVITIES.map((act) => (
                    <div
                      key={act.id}
                      className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 flex items-start space-x-3 rtl:space-x-reverse"
                    >
                      <span className="w-6 h-6 rounded-full bg-slate-900 text-cyan-400 border border-slate-800 text-xs font-mono font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {act.id}
                      </span>
                      <div className="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed">
                        {language === 'ar' ? act.titleAr : act.title}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Contact Callout */}
            <div className="p-8 bg-slate-900 border border-slate-800 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 text-start">
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-white">
                  {language === 'ar' ? 'تواصل مع مكتبنا الرئيسي في أبوظبي' : 'Connect with Our Abu Dhabi Headquarters'}
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
