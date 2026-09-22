'use client';

import React from 'react';
import Link from 'next/link';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Printer,
  ShieldCheck, 
  ArrowUp, 
  ChevronRight, 
} from 'lucide-react';
import { COMPANY_INFO, CORE_SERVICES } from '@/lib/data';
import { useLanguage } from '@/context/LanguageContext';

export function Footer() {
  const { strings, language, isRTL } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { href: '/', label: strings.nav.home },
    { href: '/about', label: strings.nav.about },
    { href: '/services', label: strings.nav.services },
    { href: '/experience', label: strings.nav.experience },
    { href: '/credentials', label: strings.nav.credentials },
    { href: '/contact', label: strings.nav.contact },
  ];

  return (
    <footer className="bg-slate-100 dark:bg-slate-950 text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800/80 pt-16 pb-12 relative overflow-hidden text-start transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Callout Banner */}
        <div className="bg-gradient-to-r from-slate-200 via-slate-100 to-cyan-100/60 dark:from-slate-900 dark:via-slate-900/90 dark:to-cyan-950/60 border border-slate-300 dark:border-slate-800 rounded-2xl p-8 mb-16 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-lg dark:shadow-2xl">
          <div className="space-y-2 text-center lg:text-start">
            <span className="text-xs font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-widest flex items-center justify-center lg:justify-start space-x-2 rtl:space-x-reverse">
              <ShieldCheck className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
              <span>{COMPANY_INFO.name}</span>
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              {language === 'ar' 
                ? 'هل ترغب بمناقشة متطلبات مشروعكم في أبوظبي؟'
                : 'Looking to Discuss Your Business IT Requirements in Abu Dhabi?'}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 max-w-2xl">
              {language === 'ar'
                ? 'تواصل مع مستشارينا في أبوظبي لمناقشة أنظمة المؤسسات، التطبيقات الذكية، الشبكات، والخدمات المدارة.'
                : 'Connect with our team in Abu Dhabi to discuss ERP systems, mobility applications, IT infrastructure, and managed services.'}
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
            <Link
              href="/contact"
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm rounded-xl shadow-md hover:shadow-lg shadow-cyan-500/20 transition-all active:scale-98"
            >
              {strings.nav.contactCta}
            </Link>
            <a
              href={`tel:${COMPANY_INFO.contact.telephone.replace(/\s+/g, '')}`}
              className="px-5 py-3 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-semibold text-sm rounded-xl border border-slate-300 dark:border-slate-700 transition-colors flex items-center space-x-2 rtl:space-x-reverse shadow-sm"
              dir="ltr"
            >
              <Phone className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
              <span>{COMPANY_INFO.contact.telephone}</span>
            </a>
          </div>
        </div>

        {/* 4-Column Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14 text-start">
          {/* Col 1: Brand Profile */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 p-0.5 shadow-md shadow-cyan-500/20 shrink-0">
                <div className="w-full h-full bg-slate-950 rounded-[9px] flex items-center justify-center">
                  <span className="text-cyan-400 font-black text-lg" dir="ltr">L</span>
                  <span className="text-white font-bold text-xs" dir="ltr">.IT</span>
                </div>
              </div>
              <div>
                <span className="text-base font-extrabold text-slate-900 dark:text-white tracking-tight" dir="ltr">
                  LAND<span className="text-cyan-600 dark:text-cyan-400">.</span>COM
                </span>
                <span className="block text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                  {COMPANY_INFO.shortName}
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {strings.footer.description}
            </p>

            <div className="text-xs text-cyan-700 dark:text-cyan-300 font-medium pt-1">
              {COMPANY_INFO.ownership} • {COMPANY_INFO.legalForm}
            </div>
          </div>

          {/* Col 2: Eight Core Services */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-400">
              {strings.footer.servicesTitle}
            </h4>
            <ul className="space-y-2.5 text-sm">
              {CORE_SERVICES.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="hover:text-cyan-600 dark:hover:text-cyan-400 text-slate-700 dark:text-slate-400 transition-colors flex items-center space-x-1.5 rtl:space-x-reverse group"
                  >
                    <ChevronRight className={`w-3.5 h-3.5 text-slate-400 dark:text-slate-600 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-all shrink-0 ${isRTL ? 'rotate-180 group-hover:-translate-x-0.5' : 'group-hover:translate-x-0.5'}`} />
                    <span>{language === 'ar' ? s.titleAr : s.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-400">
              {strings.footer.quickLinks}
            </h4>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-cyan-600 dark:hover:text-cyan-400 text-slate-700 dark:text-slate-400 transition-colors flex items-center space-x-1.5 rtl:space-x-reverse group"
                  >
                    <ChevronRight className={`w-3.5 h-3.5 text-slate-400 dark:text-slate-600 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-all shrink-0 ${isRTL ? 'rotate-180 group-hover:-translate-x-0.5' : 'group-hover:translate-x-0.5'}`} />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Abu Dhabi Headquarters & Official Details */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-400">
              {strings.footer.contactTitle}
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2.5 rtl:space-x-reverse">
                <MapPin className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0 mt-1" />
                <span className="text-slate-700 dark:text-slate-300 text-xs leading-relaxed">
                  {COMPANY_INFO.headquarters.fullAddress}
                </span>
              </div>
              <div className="flex items-center space-x-2.5 rtl:space-x-reverse">
                <Phone className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                <a 
                  href={`tel:${COMPANY_INFO.contact.telephone.replace(/\s+/g, '')}`} 
                  className="text-slate-800 dark:text-slate-200 text-xs hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors font-medium font-mono"
                  dir="ltr"
                >
                  {COMPANY_INFO.contact.telephone}
                </a>
              </div>
              <div className="flex items-center space-x-2.5 rtl:space-x-reverse">
                <Printer className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                <span className="text-slate-700 dark:text-slate-300 text-xs font-mono" dir="ltr">
                  Fax: {COMPANY_INFO.contact.fax}
                </span>
              </div>
              <div className="flex items-center space-x-2.5 rtl:space-x-reverse">
                <Mail className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.contact.primaryEmail}`} className="text-slate-800 dark:text-slate-200 text-xs hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors font-mono">
                  {COMPANY_INFO.contact.primaryEmail}
                </a>
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 pt-1">
                <span>P.O. Box: {COMPANY_INFO.headquarters.poBox}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span>
              &copy; {new Date().getFullYear()} {COMPANY_INFO.name}. {strings.footer.rights}
            </span>
            <span className="hidden sm:inline text-slate-300 dark:text-slate-800">|</span>
            <span className="text-cyan-700 dark:text-cyan-400 font-mono">
              {strings.footer.licenceNotice}
            </span>
          </div>

          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <Link href="/privacy" className="hover:text-slate-900 dark:hover:text-slate-400 transition-colors">
              {strings.footer.privacy}
            </Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-slate-900 dark:hover:text-slate-400 transition-colors">
              {strings.footer.terms}
            </Link>
            <span>•</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg border border-slate-200 dark:border-slate-800 transition-colors shadow-sm"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
