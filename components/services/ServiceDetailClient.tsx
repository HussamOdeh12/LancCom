'use client';

import React from 'react';
import Link from 'next/link';
import { TopBar } from '@/components/layout/TopBar';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { 
  Database, 
  Smartphone, 
  Network, 
  ShieldCheck, 
  Navigation, 
  Radio, 
  Globe, 
  Headset, 
  ArrowRight, 
  CheckCircle2, 
  Building2, 
  MapPin, 
  Briefcase, 
  Compass, 
  Phone,
  Layers,
  ChevronRight
} from 'lucide-react';
import { ServiceItem, CORE_SERVICES, COMPANY_INFO } from '@/lib/data';
import { useLanguage } from '@/context/LanguageContext';

interface ServiceDetailClientProps {
  service: ServiceItem;
}

export function ServiceDetailClient({ service }: ServiceDetailClientProps) {
  const { strings, language, isRTL } = useLanguage();

  const getServiceIcon = (id: string, className = "w-8 h-8") => {
    switch (id) {
      case 'erp-system': return <Database className={className} />;
      case 'mobility-solutions': return <Smartphone className={className} />;
      case 'it-resources-networking': return <Network className={className} />;
      case 'security-solutions': return <ShieldCheck className={className} />;
      case 'tracking-systems': return <Navigation className={className} />;
      case 'rfid-solutions': return <Radio className={className} />;
      case 'ecommerce-web': return <Globe className={className} />;
      case 'it-managed-services': return <Headset className={className} />;
      default: return <Database className={className} />;
    }
  };

  const breadcrumbItems = [
    { label: language === 'ar' ? 'الخدمات' : 'Services', href: '/services' },
    { label: language === 'ar' ? service.titleAr : service.title }
  ];

  const relatedServices = CORE_SERVICES.filter((s) => 
    service.relatedServiceSlugs.includes(s.slug) || service.relatedServiceSlugs.includes(s.id)
  );

  const title = language === 'ar' ? service.titleAr : service.title;
  const tagline = language === 'ar' ? service.taglineAr : service.tagline;
  const description = language === 'ar' ? service.descriptionAr : service.description;
  const overview = language === 'ar' ? service.overviewAr : service.overview;
  const features = language === 'ar' ? service.featuresAr : service.features;
  const approach = language === 'ar' ? service.approachAr : service.approach;

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col selection:bg-cyan-500 selection:text-slate-950">
      {/* JSON-LD Structured Data for Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            '@id': `${COMPANY_INFO.domain}/services/${service.slug}#service`,
            name: service.title,
            description: service.description,
            provider: {
              '@type': 'Organization',
              '@id': 'https://landcom.ae/#organization',
              name: COMPANY_INFO.name,
              url: COMPANY_INFO.domain,
            },
            areaServed: {
              '@type': 'Country',
              name: 'United Arab Emirates'
            },
            serviceType: service.title
          })
        }}
      />

      <TopBar />
      <Navbar />

      <main id="main-content" className="flex-1 text-start">
        {/* 1. Service Hero */}
        <section className="py-14 sm:py-18 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
            <Breadcrumb items={breadcrumbItems} />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950 border border-cyan-200 dark:border-cyan-500/30 text-cyan-700 dark:text-cyan-400 text-xs font-bold uppercase tracking-wider">
                  <Layers className="w-3.5 h-3.5 shrink-0" />
                  <span>{language === 'ar' ? 'نطاق الخدمة المعتمد' : 'Official Service Scope'}</span>
                </div>
                
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
                  {title}
                </h1>
                
                <p className="text-base sm:text-lg text-cyan-700 dark:text-cyan-300/90 font-medium">
                  {tagline}
                </p>

                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                  {description}
                </p>
              </div>

              {/* Service Icon Badge */}
              <div className="lg:col-span-4 flex justify-start lg:justify-end">
                <div className="p-6 rounded-3xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-cyan-600 dark:text-cyan-400 shadow-xl flex items-center space-x-4 rtl:space-x-reverse">
                  <div className="p-4 rounded-2xl bg-cyan-100 dark:bg-cyan-950 border border-cyan-200 dark:border-cyan-500/30">
                    {getServiceIcon(service.id, "w-10 h-10")}
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest block font-mono">
                      LAND.COM / IT
                    </span>
                    <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Abu Dhabi, UAE
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Main Service Content Body */}
        <section className="py-16 bg-white dark:bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Column: Scope, Features, Delivery Approach */}
              <div className="lg:col-span-8 space-y-10 text-start">
                {/* Detailed Overview */}
                <div className="space-y-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-400">
                    {language === 'ar' ? 'نظرة عامة على الخدمة' : 'Service Overview'}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                    {language === 'ar' ? 'تنسيق الحلول التقنية وإدارتها' : 'Integrated Technical Implementation'}
                  </h2>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                    {overview}
                  </p>
                </div>

                {/* Core Scope & Deliverables */}
                <div className="p-6 sm:p-8 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl space-y-5 shadow-sm">
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-cyan-700 dark:text-cyan-400 uppercase tracking-wider">
                      {language === 'ar' ? 'مخرجات النطاق الفني' : 'Deliverables & Capabilities'}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                      {language === 'ar' ? 'عناصر التنفيذ المعتمدة للخدمة' : 'Supported Scope Elements'}
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                    {features.map((feat, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 bg-white dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-start space-x-3 rtl:space-x-reverse shadow-xs"
                      >
                        <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-medium leading-snug">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Strategic Consulting Approach */}
                <div className="p-6 sm:p-8 bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-3xl space-y-4 shadow-sm">
                  <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <div className="p-2.5 rounded-xl bg-cyan-100 dark:bg-cyan-950 border border-cyan-200 dark:border-cyan-500/30 text-cyan-600 dark:text-cyan-400 shrink-0">
                      <Compass className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {language === 'ar' ? 'النهج الاستشاري والتنفيذي' : 'Consulting & Implementation Approach'}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {approach}
                  </p>
                </div>

                {/* Documented Client Reference (if applicable) */}
                {service.documentedExperience && (
                  <div className="p-6 sm:p-8 bg-slate-50 dark:bg-gradient-to-br dark:from-slate-900 dark:to-cyan-950/30 border border-slate-200 dark:border-slate-800 rounded-3xl space-y-4 shadow-sm">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2.5 rtl:space-x-reverse">
                        <Briefcase className="w-5 h-5 text-cyan-600 dark:text-cyan-400 shrink-0" />
                        <span className="text-xs font-bold text-cyan-700 dark:text-cyan-400 uppercase tracking-wider">
                          {language === 'ar' ? 'خبرة موثقة في هذا المجال' : 'Documented Client Reference'}
                        </span>
                      </div>
                      <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                        {language === 'ar' ? service.documentedExperience.locationAr : service.documentedExperience.location}
                      </span>
                    </div>

                    <div className="space-y-1 pt-1">
                      <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                        {language === 'ar' ? service.documentedExperience.organizationAr : service.documentedExperience.organization}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {language === 'ar' ? service.documentedExperience.scopeAr : service.documentedExperience.scope}
                      </p>
                    </div>

                    <div className="pt-2">
                      <Link
                        href="/experience"
                        className="inline-flex items-center space-x-1.5 rtl:space-x-reverse text-xs font-bold text-cyan-700 dark:text-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors"
                      >
                        <span>{language === 'ar' ? 'عرض سجل الخبرات الموثقة' : 'View documented experience'}</span>
                        <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column: Quick Contact, Headquarter info & Related Services */}
              <div className="lg:col-span-4 space-y-6">
                {/* Consultation Card */}
                <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 space-y-5 text-start shadow-sm">
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-cyan-100 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800/40">
                      {language === 'ar' ? 'أبوظبي، الإمارات' : 'Abu Dhabi Office'}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white pt-2">
                      {language === 'ar' ? 'طلب استشارة في هذا النطاق' : 'Request Consultation'}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {language === 'ar'
                        ? 'تواصل مع مهندسينا ومستشارينا في أبوظبي لتقييم متطلبات مؤسستكم وبدء التنفيذ.'
                        : 'Connect with our technical consultants in Abu Dhabi to evaluate your operational scope and technical requirements.'}
                    </p>
                  </div>

                  <div className="space-y-3 pt-2">
                    <Link
                      href="/contact"
                      className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md flex items-center justify-center space-x-2 rtl:space-x-reverse"
                    >
                      <span>{strings.nav.contactCta}</span>
                      <ArrowRight className={`w-4 h-4 shrink-0 ${isRTL ? 'rotate-180' : ''}`} />
                    </Link>

                    <a
                      href={`tel:${COMPANY_INFO.contact.telephone.replace(/\s+/g, '')}`}
                      className="w-full py-2.5 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-semibold text-xs rounded-xl border border-slate-300 dark:border-slate-700 transition-colors flex items-center justify-center space-x-2 rtl:space-x-reverse shadow-xs"
                      dir="ltr"
                    >
                      <Phone className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 shrink-0" />
                      <span>{COMPANY_INFO.contact.telephone}</span>
                    </a>
                  </div>

                  <div className="pt-3 border-t border-slate-200 dark:border-slate-800/80 text-[11px] text-slate-500 dark:text-slate-400">
                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                      <MapPin className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 shrink-0" />
                      <span>{language === 'ar' ? 'المكتب: طريق المرور، أبوظبي' : 'Office: Muroor Road, Abu Dhabi'}</span>
                    </div>
                  </div>
                </div>

                {/* Related Services */}
                {relatedServices.length > 0 && (
                  <div className="bg-slate-50 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 space-y-4 text-start shadow-sm">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-400">
                      {language === 'ar' ? 'خدمات ذات صلة' : 'Related Services'}
                    </h3>

                    <div className="space-y-3">
                      {relatedServices.map((rel) => (
                        <Link
                          key={rel.id}
                          href={`/services/${rel.slug}`}
                          className="p-3.5 bg-white dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 hover:bg-slate-50 dark:hover:bg-slate-900 transition-all flex items-center justify-between group shadow-xs"
                        >
                          <div className="space-y-0.5">
                            <h4 className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-cyan-700 dark:group-hover:text-cyan-300 transition-colors">
                              {language === 'ar' ? rel.titleAr : rel.title}
                            </h4>
                            <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1">
                              {language === 'ar' ? rel.taglineAr : rel.tagline}
                            </p>
                          </div>
                          <ChevronRight className={`w-4 h-4 text-slate-400 dark:text-slate-600 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-all shrink-0 ${isRTL ? 'rotate-180 group-hover:-translate-x-0.5' : 'group-hover:translate-x-0.5'}`} />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* 3. Bottom CTA Section */}
        <section className="py-16 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-start shadow-md dark:shadow-xl">
              <div className="space-y-3 max-w-2xl">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  {language === 'ar' ? `استكشف جميع خدمات وحلول لاند كوم` : `Explore All LandCom Services & Capabilities`}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {language === 'ar'
                    ? 'اطلع على دليل الخدمات الثمانية المعتمدة لشركة لاند كوم لتقنية المعلومات في أبوظبي.'
                    : 'Browse our complete catalog of eight specialized IT disciplines or contact our team for tailored technical proposals.'}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
                <Link
                  href="/services"
                  className="w-full sm:w-auto px-6 py-3.5 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-bold text-xs sm:text-sm rounded-xl transition-all border border-slate-300 dark:border-slate-700 text-center shadow-sm"
                >
                  {strings.services.allServices}
                </Link>
                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black text-xs sm:text-sm rounded-xl transition-all shadow-md flex items-center justify-center space-x-2 rtl:space-x-reverse"
                >
                  <span>{strings.nav.contactCta}</span>
                  <ArrowRight className={`w-4 h-4 shrink-0 ${isRTL ? 'rotate-180' : ''}`} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
