'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Database,
  Smartphone,
  Network,
  ShieldCheck,
  Navigation,
  Radio,
  Globe,
  Headset,
  ChevronDown, 
  Menu, 
  X, 
  ArrowRight
} from 'lucide-react';
import { CORE_SERVICES } from '@/lib/data';
import { useLanguage } from '@/context/LanguageContext';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

const SERVICE_ICON_MAP: Record<string, React.ReactNode> = {
  'erp-system': <Database className="w-4 h-4 text-cyan-500 dark:text-cyan-400 shrink-0" />,
  'mobility-solutions': <Smartphone className="w-4 h-4 text-blue-500 dark:text-blue-400 shrink-0" />,
  'it-resources-networking': <Network className="w-4 h-4 text-teal-500 dark:text-teal-400 shrink-0" />,
  'security-solutions': <ShieldCheck className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0" />,
  'tracking-systems': <Navigation className="w-4 h-4 text-sky-500 dark:text-sky-400 shrink-0" />,
  'rfid-solutions': <Radio className="w-4 h-4 text-indigo-500 dark:text-indigo-400 shrink-0" />,
  'ecommerce-web': <Globe className="w-4 h-4 text-amber-500 dark:text-amber-400 shrink-0" />,
  'it-managed-services': <Headset className="w-4 h-4 text-purple-500 dark:text-purple-400 shrink-0" />,
};

export function Navbar() {
  const { strings, language, isRTL } = useLanguage();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: strings.nav.home },
    { href: '/about', label: strings.nav.about },
    { href: '/services', label: strings.nav.services, hasDropdown: true },
    { href: '/experience', label: strings.nav.experience },
    { href: '/credentials', label: strings.nav.credentials },
    { href: '/contact', label: strings.nav.contact },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-[background-color,border-color,box-shadow] duration-200 ${
        isScrolled
          ? 'bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800/90 shadow-lg dark:shadow-xl dark:shadow-black/20'
          : 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-sm border-b border-slate-200/80 dark:border-slate-800/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse group focus:outline-none shrink-0">
            <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-900 p-0.5 shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-400/40 transition-all duration-300">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center relative overflow-hidden">
                <div className="relative flex items-center justify-center" dir="ltr">
                  <span className="text-cyan-400 font-black text-xl tracking-tighter">L</span>
                  <span className="text-blue-400 font-bold text-lg -ml-0.5">.</span>
                  <span className="text-white font-extrabold text-xs">IT</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col text-start">
              <div className="flex items-baseline space-x-1.5 rtl:space-x-reverse">
                <span className="text-lg font-black tracking-tight text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors" dir="ltr">
                  LAND<span className="text-cyan-500 dark:text-cyan-400">.</span>COM
                </span>
                <span className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest hidden sm:inline-block">
                  {language === 'ar' ? 'حلول تقنية المعلومات' : 'IT Solutions'}
                </span>
              </div>
              <span className="text-[10px] text-cyan-600 dark:text-cyan-300 font-medium tracking-wide">
                {strings.nav.tagline}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 rtl:space-x-reverse" aria-label="Main Navigation">
            {navLinks.map((item) => {
              if (item.hasDropdown) {
                return (
                  <div
                    key={item.href}
                    className="relative"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <Link
                      href={item.href}
                      className={`flex items-center space-x-1 rtl:space-x-reverse px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
                        pathname.startsWith('/services')
                          ? 'text-cyan-600 bg-cyan-50 font-semibold dark:text-cyan-400 dark:bg-slate-900'
                          : 'text-slate-700 hover:text-cyan-600 hover:bg-slate-100 dark:text-slate-200 dark:hover:text-cyan-400 dark:hover:bg-slate-900/60'
                      }`}
                      aria-haspopup="true"
                      aria-expanded={servicesDropdownOpen}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-cyan-500 dark:text-cyan-400' : 'text-slate-400'}`} />
                    </Link>

                    {servicesDropdownOpen && (
                      <div className="absolute top-full start-0 w-[620px] bg-white dark:bg-slate-900/98 backdrop-blur-xl border border-slate-200 dark:border-slate-700/80 rounded-2xl shadow-2xl p-4 mt-1 grid grid-cols-2 gap-2 animate-in fade-in slide-in-from-top-2 duration-150 z-50 text-start">
                        {CORE_SERVICES.map((srv) => (
                          <Link
                            key={srv.id}
                            href={`/services/${srv.slug}`}
                            onClick={() => setServicesDropdownOpen(false)}
                            className="flex items-start space-x-3 rtl:space-x-reverse p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/90 transition-colors group border border-transparent hover:border-slate-200 dark:hover:border-slate-700/60"
                          >
                            <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-cyan-600 dark:text-cyan-400 mt-0.5 group-hover:scale-105 group-hover:border-cyan-500/30 transition-all shrink-0">
                              {SERVICE_ICON_MAP[srv.id]}
                            </div>
                            <div className="text-start">
                              <div className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                                {language === 'ar' ? srv.titleAr : srv.title}
                              </div>
                              <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                                {language === 'ar' ? srv.taglineAr : srv.tagline}
                              </p>
                            </div>
                          </Link>
                        ))}

                        <div className="col-span-2 pt-2 mt-1 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-[11px] px-2 text-slate-500 dark:text-slate-400">
                          <Link
                            href="/services"
                            onClick={() => setServicesDropdownOpen(false)}
                            className="text-cyan-600 dark:text-cyan-400 hover:underline font-semibold"
                          >
                            {language === 'ar' ? 'عرض جميع الخدمات الثمانية' : 'View All Eight Services'}
                          </Link>
                          <Link
                            href="/contact"
                            onClick={() => setServicesDropdownOpen(false)}
                            className="text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-300 font-semibold flex items-center space-x-1 rtl:space-x-reverse"
                          >
                            <span>{strings.nav.contactCta}</span>
                            <ArrowRight className={`w-3 h-3 ${isRTL ? 'rotate-180' : ''}`} />
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isActive
                      ? 'text-cyan-600 bg-cyan-50 font-semibold dark:text-cyan-400 dark:bg-slate-900'
                      : 'text-slate-700 hover:text-cyan-600 hover:bg-slate-100 dark:text-slate-200 dark:hover:text-cyan-400 dark:hover:bg-slate-900/60'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Group */}
          <div className="flex items-center space-x-2.5 rtl:space-x-reverse">
            {/* Exactly ONE Desktop Language Switcher */}
            <LanguageSwitcher variant="navbar" className="hidden lg:inline-flex" />

            {/* Exactly ONE Desktop Theme Toggle */}
            <ThemeToggle variant="navbar" className="hidden lg:inline-flex" />

            {/* Primary Contact Us Button */}
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center space-x-2 rtl:space-x-reverse px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs sm:text-sm tracking-wide transition-all shadow-md hover:shadow-lg shadow-cyan-500/20 active:scale-98 shrink-0"
            >
              <span>{strings.nav.contactCta}</span>
              <ArrowRight className={`w-4 h-4 shrink-0 ${isRTL ? 'rotate-180' : ''}`} />
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-700 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 lg:hidden focus:outline-none focus:ring-2 focus:ring-cyan-500"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 px-4 pt-4 pb-6 space-y-4 animate-in slide-in-from-top duration-200 text-start shadow-xl">
          {/* Exactly ONE Mobile Language & Theme Switcher Pair */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <LanguageSwitcher variant="mobile" />
            <ThemeToggle variant="mobile" />
          </div>

          {/* Navigation Links */}
          <div className="space-y-1">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3.5 py-2.5 text-sm font-medium rounded-xl transition-colors ${
                  pathname === item.href 
                    ? 'text-cyan-600 bg-cyan-50 dark:text-cyan-400 dark:bg-slate-900 font-bold' 
                    : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100 dark:text-slate-200 dark:hover:text-white dark:hover:bg-slate-900/60'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile CTA */}
          <div className="pt-2 border-t border-slate-200 dark:border-slate-800">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-sm rounded-xl flex items-center justify-center space-x-2 rtl:space-x-reverse shadow-lg shadow-cyan-500/20"
            >
              <span>{strings.nav.contactCta}</span>
              <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

