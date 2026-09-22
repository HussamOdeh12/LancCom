'use client';

import React from 'react';
import Link from 'next/link';
import { TopBar } from '@/components/layout/TopBar';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { 
  Building2, 
  MapPin, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Users,
  Compass,
  Target,
  Zap,
  Sparkles
} from 'lucide-react';
import { COMPANY_INFO, WHY_LANDCOM } from '@/lib/data';
import { useLanguage } from '@/context/LanguageContext';

export function AboutClient() {
  const { strings, language, isRTL } = useLanguage();

  const getWhyIcon = (iconName: string) => {
    switch (iconName) {
      case 'MapPin': return <MapPin className="w-5 h-5 text-cyan-600 dark:text-cyan-400 shrink-0" />;
      case 'Users': return <Users className="w-5 h-5 text-cyan-600 dark:text-cyan-400 shrink-0" />;
      case 'Zap': return <Zap className="w-5 h-5 text-cyan-600 dark:text-cyan-400 shrink-0" />;
      case 'Building2': return <Building2 className="w-5 h-5 text-cyan-600 dark:text-cyan-400 shrink-0" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-cyan-600 dark:text-cyan-400 shrink-0" />;
      default: return <CheckCircle2 className="w-5 h-5 text-cyan-600 dark:text-cyan-400 shrink-0" />;
    }
  };

  const breadcrumbItems = [
    { label: language === 'ar' ? 'عن لاند كوم' : 'About LandCom' }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col selection:bg-cyan-500 selection:text-slate-950">
      {/* Schema.org AboutPage Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            name: 'About LandCom Information Technology Solutions Provider',
            url: `${COMPANY_INFO.domain}/about`,
            mainEntity: {
              '@id': 'https://landcom.ae/#organization'
            }
          })
        }}
      />

      <TopBar />
      <Navbar />

      <main id="main-content" className="flex-1 text-start">
        {/* 1. Page Hero */}
        <section className="py-14 sm:py-18 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
            <Breadcrumb items={breadcrumbItems} />

            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950 border border-cyan-200 dark:border-cyan-500/30 text-cyan-700 dark:text-cyan-400 text-xs font-bold uppercase tracking-wider">
                <Building2 className="w-3.5 h-3.5 shrink-0" />
                <span>{strings.aboutSection.sectionTag}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
                {language === 'ar' ? 'عن لاند كوم لتقنية المعلومات' : 'About LandCom Information Technology'}
              </h1>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                {language === 'ar'
                  ? 'مزود حلول تقنية المعلومات في أبوظبي، تأسست عام 2007 لتقديم حلول أعمال واستشارات تقنية متكاملة.'
                  : 'Abu Dhabi-based Information Technology Solutions Provider established in 2007, delivering integrated business software and strategic technical consulting.'}
              </p>
            </div>
          </div>
        </section>

        {/* 2. Key Verified Facts Strip */}
        <section className="py-10 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="text-2xl sm:text-3xl font-black text-cyan-600 dark:text-cyan-400 font-mono">2007</div>
                <div className="text-xs font-bold text-slate-900 dark:text-white mt-1">
                  {language === 'ar' ? 'سنة التأسيس' : 'Established'}
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                  {language === 'ar' ? 'في أبوظبي، الإمارات' : 'in Abu Dhabi, UAE'}
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="text-2xl sm:text-3xl font-black text-cyan-600 dark:text-cyan-400 font-mono">100%</div>
                <div className="text-xs font-bold text-slate-900 dark:text-white mt-1">
                  {language === 'ar' ? 'ملكية وإدارة وطنية' : 'UAE Owned'}
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                  {language === 'ar' ? 'إدارة عليا من مواطني الدولة' : 'National Management'}
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="text-2xl sm:text-3xl font-black text-cyan-600 dark:text-cyan-400 font-mono">19+</div>
                <div className="text-xs font-bold text-slate-900 dark:text-white mt-1">
                  {language === 'ar' ? 'سنوات الخبرة' : 'Years Experience'}
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                  {language === 'ar' ? 'في تطوير حلول الأعمال' : 'Business Solutions'}
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="text-2xl sm:text-3xl font-black text-cyan-600 dark:text-cyan-400 font-mono">32+</div>
                <div className="text-xs font-bold text-slate-900 dark:text-white mt-1">
                  {language === 'ar' ? 'كوادر تقنية منشورة' : 'IT Staff Deployed'}
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                  {language === 'ar' ? 'في مشاريع ومؤسسات رئيسية' : 'in Key Projects'}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Who We Are & Mission */}
        <section className="py-16 bg-white dark:bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Column: Who We Are & Strategic Model */}
              <div className="lg:col-span-7 space-y-8 text-start">
                <div className="space-y-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-400">
                    {language === 'ar' ? 'من نحن' : 'Who We Are'}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                    {language === 'ar' ? 'تطوير وتنفيذ حلول الأعمال المعقدة' : 'Developing Complex Business Solutions in Abu Dhabi'}
                  </h2>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                    {language === 'ar'
                      ? 'تعمل شركة لاند كوم (Land.com Solution Provider) في تطوير وتطبيق حلول الأعمال المعقدة في إمارة أبوظبي منذ تأسيسها في عام 2007. نعمل كمستشارين استراتيجيين نفهم احتياجات عملائنا ونقدم حلولاً تقنية متكاملة تهدف إلى تعزيز الكفاءة والإنتاجية.'
                      : 'Land.com Solution Provider has been developing and implementing complex business solutions in Abu Dhabi since 2007. We operate as strategic consultants who understand client needs and deliver integrated solutions intended to maximize efficiency and operational performance.'}
                  </p>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                    {language === 'ar'
                      ? 'تقود الإدارة العليا للشركة كفاءات وطنية من مواطني دولة الإمارات العربية المتحدة، مع التزام تام بالمعايير المهنية، وتقديم خدمات تقنية استشارية وتنفيذية موثوقة للجهات الحكومية والخاصة.'
                      : 'All top management of LandCom are UAE nationals, upholding high professional standards and providing dependable technical consultation and execution to government and private entities.'}
                  </p>
                </div>

                {/* Mission Statement Box */}
                <div className="p-6 sm:p-8 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl relative overflow-hidden shadow-sm">
                  <div className="flex items-center space-x-3 rtl:space-x-reverse mb-4">
                    <div className="p-2.5 rounded-xl bg-cyan-100 dark:bg-cyan-950 border border-cyan-200 dark:border-cyan-500/30 text-cyan-600 dark:text-cyan-400 shrink-0">
                      <Target className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {language === 'ar' ? 'رسالتنا المؤسسية' : 'Our Mission'}
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base text-slate-800 dark:text-cyan-100 font-medium leading-relaxed italic">
                    &ldquo;{language === 'ar' ? COMPANY_INFO.mission.ar : COMPANY_INFO.mission.en}&rdquo;
                  </p>
                </div>

                {/* Strategic Approach */}
                <div className="p-6 sm:p-8 bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-3xl space-y-4 shadow-sm">
                  <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <div className="p-2.5 rounded-xl bg-blue-100 dark:bg-blue-950 border border-blue-200 dark:border-blue-500/30 text-blue-600 dark:text-blue-400 shrink-0">
                      <Compass className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {language === 'ar' ? 'النهج الاستراتيجي في العمل' : 'Our Strategic Approach'}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {language === 'ar'
                      ? 'بدلاً من تقديم حلول نمطية غير متوافقة، يرتكز نهجنا على دراسة البيئة المؤسسية وتحديات الأعمال لكل جهة، ومن ثم تصميم وتوريد وتنفيذ منظومات برمجية وشبكية وأمنية متناسقة، تضمن استدامة العمليات وسلاسة التطبيق.'
                      : 'Rather than offering generic software packages, our strategic model begins by analyzing institutional operational requirements, then designing, provisioning, and deploying coordinated software, networking, and security architectures that ensure seamless adoption and long-term continuity.'}
                  </p>
                </div>
              </div>

              {/* Right Column: 5 Pillars & UAE Presence */}
              <div className="lg:col-span-5 space-y-6">
                {/* 5 Why LandCom Pillars */}
                <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 space-y-5 text-start shadow-sm">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center space-x-2.5 rtl:space-x-reverse">
                    <ShieldCheck className="w-5 h-5 text-cyan-600 dark:text-cyan-400 shrink-0" />
                    <span>{strings.whyLandcom.sectionTitle}</span>
                  </h3>

                  <div className="space-y-4">
                    {WHY_LANDCOM.map((pillar) => (
                      <div key={pillar.id} className="flex items-start space-x-3 rtl:space-x-reverse p-3 rounded-xl bg-white dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800/80 shadow-sm">
                        <div className="mt-0.5">{getWhyIcon(pillar.icon)}</div>
                        <div className="space-y-0.5">
                          <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                            {language === 'ar' ? pillar.titleAr : pillar.title}
                          </h4>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
                            {language === 'ar' ? pillar.descriptionAr : pillar.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Abu Dhabi Headquarters Card */}
                <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 space-y-4 text-start shadow-sm">
                  <div className="flex items-center space-x-2.5 rtl:space-x-reverse">
                    <MapPin className="w-5 h-5 text-cyan-600 dark:text-cyan-400 shrink-0" />
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                      {language === 'ar' ? 'المقر الرئيسي في أبوظبي' : 'Abu Dhabi Headquarters'}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {language === 'ar' ? COMPANY_INFO.headquarters.fullAddressAr : COMPANY_INFO.headquarters.fullAddress}
                  </p>

                  <div className="pt-2 border-t border-slate-200 dark:border-slate-800 space-y-2 text-xs text-slate-500 dark:text-slate-400 font-mono">
                    <div>Tel: {COMPANY_INFO.contact.telephone}</div>
                    <div>Email: {COMPANY_INFO.contact.primaryEmail}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Credentials & Track Record Overview */}
        <section className="py-16 bg-slate-50 dark:bg-slate-900 border-t border-b border-slate-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="max-w-3xl space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-400">
                {language === 'ar' ? 'الاعتمادات وسجل الخبرات' : 'Credentials & Track Record'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                {language === 'ar' ? 'الترخيص الرسمي وسجل الإنجاز المؤسسي' : 'Official Licensing & Documented Track Record'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                {language === 'ar'
                  ? 'منظومة عمل موثقة وفق رخصة تجارية صادرة عن دائرة التنمية الاقتصادية بأبوظبي وخبرات تشغيلية معتمدة.'
                  : 'Validated business operations under an official Abu Dhabi Economic Licence with documented public and private sector engagements.'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Credentials Box */}
              <div className="p-8 rounded-3xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-6 flex flex-col justify-between shadow-sm">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-100 dark:bg-cyan-950 border border-cyan-200 dark:border-cyan-500/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {strings.credentials.sectionTitle}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {language === 'ar'
                        ? 'رخصة اقتصادية صادرة عن دائرة التنمية الاقتصادية في أبوظبي برقم CN-1006129 مع 6 أنشطة اقتصادية وتقنية معتمدة رسمياً.'
                        : 'Abu Dhabi Economic Licence No. CN-1006129 with six authorized economic and technical activities registered with AD DED.'}
                    </p>
                  </div>
                  <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 font-mono text-xs text-cyan-700 dark:text-cyan-300">
                    Licence: CN-1006129 • ADCCI: 228768
                  </div>
                </div>

                <div>
                  <Link
                    href="/credentials"
                    className="inline-flex items-center space-x-2 rtl:space-x-reverse text-xs sm:text-sm font-bold text-cyan-700 dark:text-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-300 group"
                  >
                    <span>{language === 'ar' ? 'عرض بيانات الترخيص الكاملة' : 'View Full Licensing Details'}</span>
                    <ArrowRight className={`w-4 h-4 shrink-0 transition-transform ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
                  </Link>
                </div>
              </div>

              {/* Experience Box */}
              <div className="p-8 rounded-3xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-6 flex flex-col justify-between shadow-sm">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-100 dark:bg-cyan-950 border border-cyan-200 dark:border-cyan-500/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {strings.experience.sectionTitle}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {language === 'ar'
                        ? 'سجل موثق من المشاريع مع جهات حكومية ومؤسسات إنسانية وبلدية وصحية وشركات كبرى في دولة الإمارات.'
                        : 'Documented engagements spanning federal authorities, humanitarian foundations, municipal bodies, healthcare networks, and corporate enterprises.'}
                    </p>
                  </div>
                  <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300">
                    {language === 'ar' ? '6 مؤسسات موثقة في الملف التعريفي الرسمي' : '6 Verified Organizations Documented'}
                  </div>
                </div>

                <div>
                  <Link
                    href="/experience"
                    className="inline-flex items-center space-x-2 rtl:space-x-reverse text-xs sm:text-sm font-bold text-cyan-700 dark:text-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-300 group"
                  >
                    <span>{language === 'ar' ? 'استعراض سجل الخبرات والمشاريع' : 'Explore Documented Experience'}</span>
                    <ArrowRight className={`w-4 h-4 shrink-0 transition-transform ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Corporate Contact CTA */}
        <section className="py-16 bg-white dark:bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-slate-100 dark:bg-gradient-to-r dark:from-slate-900 dark:via-slate-900/90 dark:to-cyan-950/50 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-start shadow-lg dark:shadow-2xl">
              <div className="space-y-3 max-w-2xl">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  {language === 'ar' ? 'هل تود مناقشة متطلبات تقنية المعلومات لمؤسستكم؟' : 'Ready to Discuss Your Organization’s IT Requirements?'}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {language === 'ar'
                    ? 'تواصل مع مستشارينا في أبوظبي لاستعراض حلول الأعمال والتطبيقات والشبكات المتوافقة مع احتياجاتكم.'
                    : 'Connect with our Abu Dhabi consulting team to evaluate business software, mobility solutions, infrastructure, and managed IT services.'}
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
