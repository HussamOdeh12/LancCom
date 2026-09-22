'use client';

import React, { useState, useEffect } from 'react';
import { 
  Server, 
  ShieldCheck, 
  Cloud, 
  Cable, 
  Network, 
  Headset, 
  ChevronDown, 
  Search, 
  Menu, 
  X, 
  ArrowRight, 
  Sparkles,
  Layers,
  Building2,
  FileCheck
} from 'lucide-react';
import { SERVICES, COMPANY_INFO } from '@/lib/data';
import { useLanguage } from '@/context/LanguageContext';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';

interface NavbarProps {
  onOpenConsultation: (serviceId?: string) => void;
  onOpenSearch: () => void;
}

export function Navbar({ onOpenConsultation, onOpenSearch }: NavbarProps) {
  const { strings, language, isRTL } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const serviceIconMap: Record<string, React.ReactNode> = {
    'it-infrastructure': <Server className="w-4 h-4 text-cyan-400 shrink-0" />,
    'cybersecurity-soc': <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />,
    'cloud-datacenter': <Cloud className="w-4 h-4 text-sky-400 shrink-0" />,
    'elv-structured-cabling': <Cable className="w-4 h-4 text-teal-400 shrink-0" />,
    'networking-sdwan': <Network className="w-4 h-4 text-indigo-400 shrink-0" />,
    'managed-it-services': <Headset className="w-4 h-4 text-cyan-300 shrink-0" />,
  };

  // Arabic translations for service titles in menu
  const serviceTitleMapAr: Record<string, string> = {
    'it-infrastructure': 'البنية التحتية والخوادم المؤسسية',
    'cybersecurity-soc': 'الأمن السيبراني ومركز عمليات SOC',
    'cloud-datacenter': 'مراكز البيانات والسحابة الهجينة',
    'elv-structured-cabling': 'كابلات التيار الخفيف (ELV) والشبكات',
    'networking-sdwan': 'شبكات المؤسسات وتقنية SD-WAN',
    'managed-it-services': 'الخدمات المدارة ومركز NOC على مدار 24/7',
  };

  const serviceDescMapAr: Record<string, string> = {
    'it-infrastructure': 'أنظمة HCI ومصفوفات SAN وحلول النسخ الاحتياطي غير القابل للتعديل',
    'cybersecurity-soc': 'أمن الثقة الصفرية واكتشاف التهديدات المتقدمة EDR/SIEM',
    'cloud-datacenter': 'سحابة هجينة سيادية متوافقة مع متطلبات استضافة البيانات بالإمارات',
    'elv-structured-cabling': 'تمديدات ألياف ونحاس فئة Cat6A/Cat7 بضمان مصنعي 25 عاماً',
    'networking-sdwan': 'شبكات ذكية متعددة المواقع مع توجيه حركة المرور المشفر',
    'managed-it-services': 'إدارة شاملة ومراقبة استباقية مع استجابة ميدانية فورية بأبوظبي',
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/95 backdrop-blur-md border-b border-slate-800/90 shadow-xl shadow-black/20'
          : 'bg-slate-950/80 backdrop-blur-sm border-b border-slate-800/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo with Logical Start Alignment */}
          <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse group focus:outline-none shrink-0">
            {/* High-tech Geometric Monogram */}
            <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-900 p-0.5 shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-400/40 transition-all duration-300">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#00E5FF_1px,transparent_1px)] [background-size:6px_6px] opacity-25"></div>
                <div className="relative flex items-center justify-center" dir="ltr">
                  <span className="text-cyan-400 font-black text-xl tracking-tighter">L</span>
                  <span className="text-blue-400 font-bold text-lg -ml-0.5">.</span>
                  <span className="text-white font-extrabold text-xs">IT</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col text-start">
              <div className="flex items-baseline space-x-1.5 rtl:space-x-reverse">
                <span className="text-lg font-black tracking-tight text-white group-hover:text-cyan-400 transition-colors" dir="ltr">
                  LAND<span className="text-cyan-400">.</span>COM
                </span>
                <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest hidden sm:inline-block">
                  {language === 'ar' ? 'للحلول' : 'Solutions'}
                </span>
              </div>
              <span className="text-[10px] text-cyan-300 font-medium tracking-wide">
                {strings.nav.tagline}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links with Logical Spacing */}
          <nav className="hidden lg:flex items-center space-x-1 rtl:space-x-reverse" aria-label="Main Navigation">
            <a
              href="#"
              className="px-3.5 py-2 text-sm font-medium text-slate-200 hover:text-cyan-400 hover:bg-slate-900/60 rounded-lg transition-colors"
            >
              {strings.nav.home}
            </a>

            {/* Services Mega Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                type="button"
                className="flex items-center space-x-1 rtl:space-x-reverse px-3.5 py-2 text-sm font-medium text-slate-200 hover:text-cyan-400 hover:bg-slate-900/60 rounded-lg transition-colors focus:outline-none"
                aria-expanded={servicesDropdownOpen}
              >
                <span>{strings.nav.services}</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-cyan-400' : 'text-slate-400'}`} />
              </button>

              {servicesDropdownOpen && (
                <div className="absolute top-full start-0 w-[580px] bg-slate-900/98 backdrop-blur-xl border border-slate-700/80 rounded-2xl shadow-2xl p-4 mt-1 grid grid-cols-2 gap-2 animate-in fade-in slide-in-from-top-2 duration-150 z-50 text-start">
                  {SERVICES.map((srv) => (
                    <a
                      key={srv.id}
                      href={`#${srv.id}`}
                      onClick={() => setServicesDropdownOpen(false)}
                      className="flex items-start space-x-3 rtl:space-x-reverse p-2.5 rounded-xl hover:bg-slate-800/90 transition-colors group border border-transparent hover:border-slate-700/60"
                    >
                      <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-cyan-400 mt-0.5 group-hover:scale-105 group-hover:border-cyan-500/30 transition-all shrink-0">
                        {serviceIconMap[srv.id]}
                      </div>
                      <div className="text-start">
                        <div className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {language === 'ar' ? (serviceTitleMapAr[srv.id] || srv.title) : srv.title}
                        </div>
                        <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                          {language === 'ar' ? (serviceDescMapAr[srv.id] || srv.shortDesc) : srv.shortDesc}
                        </p>
                      </div>
                    </a>
                  ))}

                  <div className="col-span-2 pt-2 mt-1 border-t border-slate-800/80 flex items-center justify-between text-[11px] px-2 text-slate-400">
                    <span className="flex items-center space-x-1 rtl:space-x-reverse text-cyan-400 font-medium">
                      <Sparkles className="w-3 h-3 shrink-0" />
                      <span>{strings.nav.nesaSiraBadge}</span>
                    </span>
                    <button
                      type="button"
                      onClick={() => {
                        setServicesDropdownOpen(false);
                        onOpenConsultation();
                      }}
                      className="text-white hover:text-cyan-300 font-semibold flex items-center space-x-1 rtl:space-x-reverse"
                    >
                      <span>{strings.nav.requestCustomBoq}</span>
                      <ArrowRight className={`w-3 h-3 ${isRTL ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
                </div>
              )}
            </div>

            <a
              href="#architectures"
              className="px-3.5 py-2 text-sm font-medium text-slate-200 hover:text-cyan-400 hover:bg-slate-900/60 rounded-lg transition-colors"
            >
              {strings.nav.architectures}
            </a>

            <a
              href="#industries"
              className="px-3.5 py-2 text-sm font-medium text-slate-200 hover:text-cyan-400 hover:bg-slate-900/60 rounded-lg transition-colors"
            >
              {strings.nav.industries}
            </a>

            <a
              href="#case-studies"
              className="px-3.5 py-2 text-sm font-medium text-slate-200 hover:text-cyan-400 hover:bg-slate-900/60 rounded-lg transition-colors"
            >
              {strings.nav.caseStudies}
            </a>

            <a
              href="#estimator"
              className="px-3.5 py-2 text-sm font-medium text-slate-200 hover:text-cyan-400 hover:bg-slate-900/60 rounded-lg transition-colors flex items-center space-x-1.5 rtl:space-x-reverse"
            >
              <span>{strings.nav.estimator}</span>
              <span className="text-[9px] font-bold px-1.5 py-0.2 bg-cyan-950 border border-cyan-500/40 text-cyan-300 rounded uppercase">
                {language === 'ar' ? 'أداة' : 'Tool'}
              </span>
            </a>

            <a
              href="#contact"
              className="px-3.5 py-2 text-sm font-medium text-slate-200 hover:text-cyan-400 hover:bg-slate-900/60 rounded-lg transition-colors"
            >
              {strings.nav.contact}
            </a>
          </nav>

          {/* Right Action Group with Language Switcher */}
          <div className="flex items-center space-x-2.5 rtl:space-x-reverse">
            {/* Search Trigger */}
            <button
              type="button"
              onClick={onOpenSearch}
              className="p-2.5 rounded-xl text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500"
              aria-label={strings.nav.searchAria}
              title={strings.nav.searchPlaceholder}
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Language Switcher in Navbar */}
            <LanguageSwitcher variant="navbar" className="hidden sm:inline-flex" />

            {/* Primary CTA: Consultation / RFP Button */}
            <button
              type="button"
              onClick={() => onOpenConsultation()}
              className="hidden sm:inline-flex items-center space-x-2 rtl:space-x-reverse px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs sm:text-sm tracking-wide transition-all shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/30 active:scale-98 shrink-0"
            >
              <span>{strings.nav.requestConsultation}</span>
              <ArrowRight className={`w-4 h-4 shrink-0 ${isRTL ? 'rotate-180' : ''}`} />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-300 hover:text-white bg-slate-900 border border-slate-800 lg:hidden focus:outline-none"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950 border-b border-slate-800 px-4 pt-3 pb-6 space-y-4 animate-in slide-in-from-top duration-200 text-start">
          {/* Mobile Language Switcher */}
          <LanguageSwitcher variant="mobile" />

          <div className="space-y-1">
            <a
              href="#"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-white hover:bg-slate-900 rounded-lg"
            >
              {strings.nav.home}
            </a>
            
            <div className="py-2 border-y border-slate-800/80 my-2 space-y-1">
              <div className="px-3 text-xs font-semibold uppercase tracking-wider text-cyan-400">
                {strings.nav.services}
              </div>
              {SERVICES.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center space-x-2 rtl:space-x-reverse px-3 py-2 text-xs text-slate-300 hover:text-cyan-300 hover:bg-slate-900 rounded-lg"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0"></span>
                  <span>{language === 'ar' ? (serviceTitleMapAr[s.id] || s.title) : s.title}</span>
                </a>
              ))}
            </div>

            <a
              href="#architectures"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-white hover:bg-slate-900 rounded-lg"
            >
              {strings.nav.architectures}
            </a>

            <a
              href="#industries"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-white hover:bg-slate-900 rounded-lg"
            >
              {strings.nav.industries}
            </a>

            <a
              href="#case-studies"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-white hover:bg-slate-900 rounded-lg"
            >
              {strings.nav.caseStudies}
            </a>

            <a
              href="#estimator"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-cyan-300 hover:bg-slate-900 rounded-lg"
            >
              {strings.nav.estimator}
            </a>

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-white hover:bg-slate-900 rounded-lg"
            >
              {strings.nav.contact}
            </a>
          </div>

          <div className="pt-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-sm rounded-xl flex items-center justify-center space-x-2 rtl:space-x-reverse shadow-lg shadow-cyan-500/20"
            >
              <span>{strings.nav.requestConsultation}</span>
              <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
