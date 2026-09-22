'use client';

import React from 'react';
import { 
  Building2, 
  Calendar, 
  Award, 
  Users, 
  ShieldCheck, 
  FileCheck,
  CheckCircle2
} from 'lucide-react';
import { COMPANY_INFO, LICENSED_ACTIVITIES, COMPANY_CREDENTIALS } from '@/lib/data';
import { useLanguage } from '@/context/LanguageContext';

export function CompanyCredentials() {
  const { strings, language } = useLanguage();

  return (
    <section id="credentials" className="py-16 bg-white dark:bg-slate-950 text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-900 relative text-start">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950 border border-cyan-200 dark:border-cyan-500/30 text-cyan-700 dark:text-cyan-400 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
            <span>{strings.credentials.sectionTag}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            {strings.credentials.sectionTitle}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            {strings.credentials.sectionDesc}
          </p>
        </div>

        {/* 4 Core Metric Badges */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {COMPANY_CREDENTIALS.map((cred, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors duration-200 text-start shadow-xs"
            >
              <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-500">
                {cred.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mt-1">
                {language === 'ar' ? cred.labelAr : cred.label}
              </div>
              <div className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                {language === 'ar' ? cred.descriptionAr : cred.description}
              </div>
            </div>
          ))}
        </div>

        {/* Official Economic License Card & Six Licensed Activities */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* License Specification Card */}
          <div className="lg:col-span-6 bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 space-y-5 text-start shadow-xs">
            <div className="flex items-center space-x-3 rtl:space-x-reverse pb-4 border-b border-slate-200 dark:border-slate-800">
              <div className="p-2.5 rounded-xl bg-cyan-100 dark:bg-cyan-950 border border-cyan-200 dark:border-cyan-500/30 text-cyan-700 dark:text-cyan-400">
                <FileCheck className="w-5 h-5" />
              </div>
              <div className="text-start">
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {strings.credentials.licenseDetails}
                </h3>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  {COMPANY_INFO.license.authority}
                </span>
              </div>
            </div>

            <div className="space-y-2.5 text-xs">
              <div className="p-3 bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800/80 flex items-center justify-between shadow-xs">
                <span className="text-slate-500 dark:text-slate-400">{strings.credentials.licenceNo}</span>
                <span className="text-slate-900 dark:text-white font-mono font-bold">{COMPANY_INFO.license.licenseNumber}</span>
              </div>
              <div className="p-3 bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800/80 flex items-center justify-between shadow-xs">
                <span className="text-slate-500 dark:text-slate-400">{strings.credentials.unifiedRegNo}</span>
                <span className="text-slate-900 dark:text-white font-mono font-medium">{COMPANY_INFO.license.unifiedRegistrationNumber}</span>
              </div>
              <div className="p-3 bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800/80 flex items-center justify-between shadow-xs">
                <span className="text-slate-500 dark:text-slate-400">{strings.credentials.unifiedLicNo}</span>
                <span className="text-slate-900 dark:text-white font-mono font-medium">{COMPANY_INFO.license.unifiedLicenseNumber}</span>
              </div>
              <div className="p-3 bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800/80 flex items-center justify-between shadow-xs">
                <span className="text-slate-500 dark:text-slate-400">{strings.credentials.membershipNo}</span>
                <span className="text-slate-900 dark:text-white font-mono font-medium">{COMPANY_INFO.license.adcciMembership}</span>
              </div>
              <div className="p-3 bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800/80 flex items-center justify-between shadow-xs">
                <span className="text-slate-500 dark:text-slate-400">{strings.credentials.legalForm}</span>
                <span className="text-cyan-700 dark:text-cyan-300 font-medium">{COMPANY_INFO.license.legalForm}</span>
              </div>
              <div className="p-3 bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800/80 flex items-center justify-between shadow-xs">
                <span className="text-slate-500 dark:text-slate-400">{strings.credentials.issueDate} / {strings.credentials.expiryDate}</span>
                <span className="text-slate-700 dark:text-slate-300 font-mono">
                  {COMPANY_INFO.license.issueDate} – {COMPANY_INFO.license.expiryDate}
                </span>
              </div>
            </div>
          </div>

          {/* Six Licensed Activities */}
          <div className="lg:col-span-6 bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 space-y-5 text-start shadow-xs">
            <div className="flex items-center space-x-3 rtl:space-x-reverse pb-4 border-b border-slate-200 dark:border-slate-800">
              <div className="p-2.5 rounded-xl bg-blue-100 dark:bg-blue-950 border border-blue-200 dark:border-blue-500/30 text-blue-700 dark:text-blue-400">
                <Award className="w-5 h-5" />
              </div>
              <div className="text-start">
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {strings.credentials.activitiesTitle}
                </h3>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  {strings.credentials.activitiesDesc}
                </span>
              </div>
            </div>

            <div className="space-y-2.5">
              {LICENSED_ACTIVITIES.map((act) => (
                <div
                  key={act.id}
                  className="p-3 bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800/80 flex items-start space-x-3 rtl:space-x-reverse shadow-xs"
                >
                  <span className="w-5 h-5 rounded-full bg-slate-100 dark:bg-slate-900 text-cyan-700 dark:text-cyan-400 border border-slate-200 dark:border-slate-800 text-xs font-mono font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {act.id}
                  </span>
                  <div className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-medium">
                    {language === 'ar' ? act.titleAr : act.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
