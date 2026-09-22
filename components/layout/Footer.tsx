'use client';

import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck, 
  ArrowUp, 
  ChevronRight, 
  Award,
} from 'lucide-react';
import { COMPANY_INFO, SERVICES, INDUSTRIES } from '@/lib/data';
import { useLanguage } from '@/context/LanguageContext';

interface FooterProps {
  onOpenConsultation: () => void;
}

export function Footer({ onOpenConsultation }: FooterProps) {
  const { strings, language, isRTL } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Arabic translations for industry titles
  const industryTitleMapAr: Record<string, string> = {
    'gov-defense': 'الجهات الحكومية والسيادية',
    'energy-oil-gas': 'قطاع الطاقة والنفط والغاز',
    'banking-financial': 'القطاع المصرفي والمالي',
    'healthcare': 'الرعاية الصحية والمستشفيات',
    'hospitality-realestate': 'الضيافة والعقارات الفاخرة',
    'education': 'التعليم والجامعات الذكية',
  };

  const serviceTitleMapAr: Record<string, string> = {
    'it-infrastructure': 'البنية التحتية والخوادم',
    'cybersecurity-soc': 'الأمن السيبراني وعمليات SOC',
    'cloud-datacenter': 'السحابة ومراكز البيانات',
    'elv-structured-cabling': 'كابلات التيار الخفيف (ELV)',
    'networking-sdwan': 'شبكات SD-WAN الذكية',
    'managed-it-services': 'الخدمات المدارة ومركز NOC',
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800/80 pt-16 pb-12 relative overflow-hidden text-start">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 start-1/4 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 end-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Callout Banner with Logical Flex & Spacing */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-900/90 to-cyan-950/60 border border-slate-800 rounded-2xl p-8 mb-16 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-center lg:text-start">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest flex items-center justify-center lg:justify-start space-x-2 rtl:space-x-reverse">
              <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>{strings.hero.accreditationPill}</span>
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {language === 'ar' 
                ? 'جاهز لتطوير وحماية البنية التحتية لتكنولوجيا المعلومات في مؤسستك؟'
                : 'Ready to Upgrade or Secure Your Organization\'s IT Infrastructure?'}
            </h3>
            <p className="text-sm text-slate-300 max-w-2xl">
              {language === 'ar'
                ? 'تواصل مع فريقنا الهندسي بأبوظبي للمسوحات الميدانية، والمناقصات، وجداول الكميات (BOQ)، وعقود الصيانة المدارة على مدار الساعة 24/7.'
                : 'Connect with our Abu Dhabi engineering team for on-site discovery surveys, RFPs, structured cabling BOQs, and 24/7 SLA maintenance.'}
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
            <button
              type="button"
              onClick={onOpenConsultation}
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm rounded-xl shadow-lg shadow-cyan-500/20 transition-all active:scale-98"
            >
              {strings.hero.requestProposal}
            </button>
            <a
              href={`tel:${COMPANY_INFO.contact.phone.replace(/\s+/g, '')}`}
              className="px-5 py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm rounded-xl border border-slate-700 transition-colors flex items-center space-x-2 rtl:space-x-reverse"
            >
              <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>{language === 'ar' ? 'الاتصال بمقر أبوظبي' : 'Call Abu Dhabi HQ'}</span>
            </a>
          </div>
        </div>

        {/* 5-Column Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14 text-start">
          {/* Col 1 & 2: Brand Profile & Certifications */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 p-0.5 shadow-md shadow-cyan-500/20 shrink-0">
                <div className="w-full h-full bg-slate-950 rounded-[9px] flex items-center justify-center">
                  <span className="text-cyan-400 font-black text-lg" dir="ltr">L</span>
                  <span className="text-white font-bold text-xs" dir="ltr">.IT</span>
                </div>
              </div>
              <div>
                <span className="text-base font-extrabold text-white tracking-tight" dir="ltr">
                  LAND<span className="text-cyan-400">.</span>COM
                </span>
                <span className="block text-[11px] text-slate-400 font-medium">
                  {language === 'ar' ? 'مزود حلول تكنولوجيا المعلومات ذ.م.م' : 'IT Solutions Provider LLC'}
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              {strings.footer.companyDesc}
            </p>

            {/* Certifications Badge Row */}
            <div className="grid grid-cols-2 gap-2 pt-2">
              {COMPANY_INFO.certifications.map((c, idx) => (
                <div key={idx} className="p-2.5 rounded-lg bg-slate-900 border border-slate-800/80 flex items-start space-x-2 rtl:space-x-reverse">
                  <Award className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div className="text-start">
                    <div className="text-xs font-bold text-slate-200">{c.title}</div>
                    <div className="text-[10px] text-slate-400">{c.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Col 3: Services & Solutions */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400">
              {strings.footer.solutionPillars}
            </h4>
            <ul className="space-y-2.5 text-sm">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="hover:text-cyan-400 transition-colors flex items-center space-x-1.5 rtl:space-x-reverse group"
                  >
                    <ChevronRight className={`w-3.5 h-3.5 text-slate-600 group-hover:text-cyan-400 transition-all shrink-0 ${isRTL ? 'rotate-180 group-hover:-translate-x-0.5' : 'group-hover:translate-x-0.5'}`} />
                    <span>{language === 'ar' ? (serviceTitleMapAr[s.id] || s.title) : s.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Industries */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400">
              {strings.nav.industries}
            </h4>
            <ul className="space-y-2.5 text-sm">
              {INDUSTRIES.map((ind) => (
                <li key={ind.id}>
                  <a
                    href="#industries"
                    className="hover:text-cyan-400 transition-colors flex items-center space-x-1.5 rtl:space-x-reverse group"
                  >
                    <ChevronRight className={`w-3.5 h-3.5 text-slate-600 group-hover:text-cyan-400 transition-all shrink-0 ${isRTL ? 'rotate-180 group-hover:-translate-x-0.5' : 'group-hover:translate-x-0.5'}`} />
                    <span>{language === 'ar' ? (industryTitleMapAr[ind.id] || ind.name) : ind.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: UAE Headquarters & Contact */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400">
              {strings.footer.headquarters}
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2.5 rtl:space-x-reverse">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-1" />
                <span className="text-slate-300 text-xs leading-relaxed">
                  {COMPANY_INFO.headquarters.address}
                </span>
              </div>
              <div className="flex items-center space-x-2.5 rtl:space-x-reverse">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <a 
                  href={`tel:${COMPANY_INFO.contact.phone.replace(/\s+/g, '')}`} 
                  className="text-slate-200 text-xs hover:text-cyan-400 transition-colors font-medium font-mono"
                  dir="ltr"
                >
                  {COMPANY_INFO.contact.phone}
                </a>
              </div>
              <div className="flex items-center space-x-2.5 rtl:space-x-reverse">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.contact.email}`} className="text-slate-200 text-xs hover:text-cyan-400 transition-colors font-mono">
                  {COMPANY_INFO.contact.email}
                </a>
              </div>
              <div className="flex items-start space-x-2.5 rtl:space-x-reverse">
                <Clock className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span className="text-slate-400 text-[11px]">
                  {strings.topbar.hours}
                </span>
              </div>
            </div>

            <div className="p-3 bg-slate-900/90 rounded-xl border border-slate-800 text-xs space-y-1">
              <div className="text-slate-300 font-semibold flex items-center space-x-1.5 rtl:space-x-reverse">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>{language === 'ar' ? 'طوارئ مركز العمليات (NOC):' : 'NOC Emergency Dispatch:'}</span>
              </div>
              <div className="text-cyan-300 font-mono text-[11px]" dir="ltr">
                {COMPANY_INFO.contact.mobile}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal, Copyright & Back to Top */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span>
              &copy; {new Date().getFullYear()} {COMPANY_INFO.name}. {strings.footer.allRightsReserved}
            </span>
            <span className="hidden sm:inline text-slate-800">|</span>
            <span className="text-slate-400">
              {language === 'ar' ? 'مرخص رسمياً في أبوظبي، الإمارات العربية المتحدة' : 'Registered in Abu Dhabi, United Arab Emirates'}
            </span>
          </div>

          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 border border-slate-800 transition-colors flex items-center space-x-1.5 rtl:space-x-reverse focus:outline-none"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="text-[11px] font-medium">{language === 'ar' ? 'للأعلى' : 'Top'}</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
