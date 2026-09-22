'use client';

import React from 'react';
import Link from 'next/link';
import { TopBar } from '@/components/layout/TopBar';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { 
  ShieldCheck, 
  Lock, 
  Database, 
  Cookie, 
  Mail, 
  Phone, 
  Building, 
  FileText,
  CheckCircle2
} from 'lucide-react';
import { COMPANY_INFO } from '@/lib/data';
import { useLanguage } from '@/context/LanguageContext';

export function PrivacyClient() {
  const { language, isRTL } = useLanguage();

  const breadcrumbItems = [
    { label: language === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy' }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col selection:bg-cyan-500 selection:text-slate-950">
      <TopBar />
      <Navbar />

      <main id="main-content" className="flex-1 text-start">
        {/* Page Hero */}
        <section className="py-14 sm:py-18 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
            <Breadcrumb items={breadcrumbItems} />

            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950 border border-cyan-200 dark:border-cyan-500/30 text-cyan-700 dark:text-cyan-400 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                <span>{language === 'ar' ? 'الوثائق القانونية' : 'Legal & Compliance'}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
                {language === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}
              </h1>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                {language === 'ar'
                  ? 'بيان شفاف يوضح الممارسات الفعلية لجمع واستخدام البيانات عبر الموقع التعريفي لشركة لاند كوم لحلول تقنية المعلومات بأبوظبي.'
                  : 'A transparent statement describing the actual data practices and local browser storage used on the LandCom Information Technology Solutions Provider website.'}
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 sm:py-20 bg-white dark:bg-slate-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            {/* Overview Card */}
            <div className="p-6 sm:p-8 bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-3xl space-y-4 shadow-sm dark:shadow-xl">
              <div className="flex items-center space-x-3 rtl:space-x-reverse text-cyan-700 dark:text-cyan-400">
                <Building className="w-5 h-5 shrink-0" />
                <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                  {language === 'ar' ? '1. نبذة عامة والجهة المشغلة' : '1. Overview & Operating Entity'}
                </h2>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {language === 'ar'
                  ? 'يتم تشغيل هذا الموقع الإلكتروني (landcom.ae) بواسطة مؤسسة لاند كوم لحلول تقنية المعلومات (LandCom Information Technology Solutions Provider)، وهي منشأة وطنية مملوكة ومُدارة بنسبة 100% في دولة الإمارات العربية المتحدة، ومسجلة في إمارة أبوظبي بموجب الرخصة الاقتصادية رقم CN-1006129.'
                  : 'This website (landcom.ae) is operated by LandCom Information Technology Solutions Provider, a 100% UAE-owned and managed establishment registered in the Emirate of Abu Dhabi under Commercial Licence No. CN-1006129.'}
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {language === 'ar'
                  ? 'يعمل الموقع كمنصة تعريفية وتواصلية للمؤسسة لعرض خدماتها التقنية المعتمدة ومشاريعها الموثقة وتسهيل التواصل التجاري المباشر مع المؤسسات والعملاء.'
                  : 'The website serves as an informational corporate presence to present our documented IT services, confirmed corporate credentials, and facilitate direct business inquiries.'}
              </p>
            </div>

            {/* Information & Mailto Architecture */}
            <div className="p-6 sm:p-8 bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-3xl space-y-4 shadow-sm dark:shadow-xl">
              <div className="flex items-center space-x-3 rtl:space-x-reverse text-cyan-700 dark:text-cyan-400">
                <FileText className="w-5 h-5 shrink-0" />
                <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                  {language === 'ar' ? '2. آلية التواصل والبيانات' : '2. Communication & Email Architecture'}
                </h2>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {language === 'ar'
                  ? 'لا يقوم الموقع بجمع أو حفظ أي بيانات شخصية عبر خوادم خلفية أو قواعد بيانات. نموذج التواصل على الموقع يعمل كأداة لإعداد رسالة بريد إلكتروني (mailto link) تفتح تطبيق البريد الإلكتروني الخاص بالمستخدم مباشرة مع تعبئة تفاصيل الاستفسار.'
                  : 'This website does not transmit or store form submissions through a server backend or database. The contact form functions entirely client-side to prepare a mailto link that opens your local email application with the inquiry details formatted for direct sending.'}
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {language === 'ar'
                  ? 'عند إرسال الرسالة، يتم التواصل مباشرة عبر بروتوكولات البريد الإلكتروني القياسية بين المستخدم وعنوان البريد الرسمي لشركة لاند كوم (Info@landcom.ae).'
                  : 'When an email is sent, communication takes place directly via standard email protocols between the sender and LandCom’s official email address (Info@landcom.ae).'}
              </p>
            </div>

            {/* Local Storage & Preferences */}
            <div className="p-6 sm:p-8 bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-3xl space-y-4 shadow-sm dark:shadow-xl">
              <div className="flex items-center space-x-3 rtl:space-x-reverse text-cyan-700 dark:text-cyan-400">
                <Cookie className="w-5 h-5 shrink-0" />
                <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                  {language === 'ar' ? '3. التخزين المحلي وتفضيلات التصفح' : '3. Browser Local Storage & Preferences'}
                </h2>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {language === 'ar'
                  ? 'لا يستخدم هذا الموقع ملفات تعريف الارتباط الإعلانية أو التتبعية. نستخدم فقط ميزة التخزين المحلي في المتصفح (localStorage) لحفظ التفضيلات الضرورية لتجربة المستخدم:'
                  : 'This website does not deploy advertising or tracking cookies. Standard browser local storage (localStorage) is used solely to remember essential visitor preferences:'}
              </p>
              <div className="p-4 bg-white dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 text-xs font-mono space-y-3 shadow-xs">
                <div className="space-y-1">
                  <div className="text-cyan-700 dark:text-cyan-300 font-bold">• Key: landcom_language_pref</div>
                  <div className="text-slate-600 dark:text-slate-400 ps-3">Purpose: {language === 'ar' ? "حفظ خيار اللغة المحددة ('en' أو 'ar')" : "Stores the selected language preference ('en' or 'ar')"}</div>
                </div>
                <div className="space-y-1">
                  <div className="text-cyan-700 dark:text-cyan-300 font-bold">• Key: landcom_theme_pref</div>
                  <div className="text-slate-600 dark:text-slate-400 ps-3">Purpose: {language === 'ar' ? "حفظ خيار المظهر المحدد ('dark' أو 'light')" : "Stores the selected theme preference ('dark' or 'light')"}</div>
                </div>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {language === 'ar'
                  ? 'يمكنك مسح التخزين المحلي في أي وقت من خلال إعدادات المتصفح الخاص بك دون التأثير على وظائف تصفح الموقع.'
                  : 'You may clear your browser’s local storage at any time via your browser settings.'}
              </p>
            </div>

            {/* Third-Party Tracking & Analytics */}
            <div className="p-6 sm:p-8 bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-3xl space-y-4 shadow-sm dark:shadow-xl">
              <div className="flex items-center space-x-3 rtl:space-x-reverse text-cyan-700 dark:text-cyan-400">
                <Lock className="w-5 h-5 shrink-0" />
                <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                  {language === 'ar' ? '4. انعدام أدوات التتبع الخارجية' : '4. No Third-Party Tracking or Advertising'}
                </h2>
              </div>
              <div className="flex items-start space-x-3 rtl:space-x-reverse">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {language === 'ar'
                      ? 'لا يحتوي هذا الموقع على أي برمجيات تتبع خارجي، أو شبكات إعلانية، أو بيكسلات تتبع، أو أدوات مراقبة سلوك المستخدم.'
                      : 'This website contains no third-party tracking pixels, marketing trackers, behavioral monitoring scripts, or advertising networks.'}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {language === 'ar'
                      ? 'لا نقوم ببيع أو تأجير أو مشاركة أي بيانات تواصل مع أطراف ثالثة لأغراض تسويقية.'
                      : 'We do not sell, rent, or trade contact information with any external commercial third parties.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Security in Transit */}
            <div className="p-6 sm:p-8 bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-3xl space-y-4 shadow-sm dark:shadow-xl">
              <div className="flex items-center space-x-3 rtl:space-x-reverse text-cyan-700 dark:text-cyan-400">
                <Database className="w-5 h-5 shrink-0" />
                <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                  {language === 'ar' ? '5. أمان التصفح' : '5. Browsing Security'}
                </h2>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {language === 'ar'
                  ? 'يتم تأمين تصفح الموقع بالكامل عبر بروتوكول التشفير القياسي HTTPS لضمان سرية وسلامة تصفح الصفحات.'
                  : 'All web traffic across landcom.ae is delivered using standard TLS/HTTPS encryption in transit.'}
              </p>
            </div>

            {/* Contact Information for Privacy Inquiries */}
            <div className="p-6 sm:p-8 bg-slate-50 dark:bg-slate-900/90 border border-cyan-200 dark:border-cyan-500/30 rounded-3xl space-y-4 shadow-sm dark:shadow-xl">
              <div className="flex items-center space-x-3 rtl:space-x-reverse text-cyan-700 dark:text-cyan-400">
                <Mail className="w-5 h-5 shrink-0" />
                <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                  {language === 'ar' ? '6. التواصل بشأن الخصوصية' : '6. Contact for Privacy Inquiries'}
                </h2>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {language === 'ar'
                  ? 'لأي استفسارات تتعلق بسياسة الخصوصية أو البيانات، يرجى التواصل مباشرة مع مكتبنا الرئيسي في أبوظبي:'
                  : 'For any inquiries regarding this Privacy Policy or data handling, please contact our Abu Dhabi headquarters:'}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs">
                <div className="p-3.5 bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1 shadow-xs">
                  <div className="text-slate-500 dark:text-slate-400 font-bold">{language === 'ar' ? 'البريد الإلكتروني الرسمي:' : 'Official Email:'}</div>
                  <a href={`mailto:${COMPANY_INFO.contact.primaryEmail}`} className="text-cyan-700 dark:text-cyan-300 font-mono hover:underline block">
                    {COMPANY_INFO.contact.primaryEmail}
                  </a>
                </div>
                <div className="p-3.5 bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1 shadow-xs">
                  <div className="text-slate-500 dark:text-slate-400 font-bold">{language === 'ar' ? 'هاتف المكتب:' : 'Office Telephone:'}</div>
                  <a href={`tel:${COMPANY_INFO.contact.telephone.replace(/\s+/g, '')}`} className="text-cyan-700 dark:text-cyan-300 font-mono hover:underline block" dir="ltr">
                    {COMPANY_INFO.contact.telephone}
                  </a>
                </div>
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 pt-2">
                {language === 'ar'
                  ? 'العنوان: جزيرة أبوظبي، طريق المرور، الطابق 3، مكتب 37–38، ص.ب 58571، أبوظبي، دولة الإمارات العربية المتحدة.'
                  : 'Address: Abu Dhabi Island, Muroor Road, Floor 3, Office 37–38, P.O. Box 58571, Abu Dhabi, UAE.'}
              </div>
            </div>

            {/* Back link */}
            <div className="pt-4 text-center">
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 rtl:space-x-reverse px-6 py-3 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-800 hover:border-cyan-500/40 text-slate-900 dark:text-cyan-300 rounded-xl text-xs font-bold transition-all shadow-xs"
              >
                <span>{language === 'ar' ? 'الانتقال إلى صفحة التواصل' : 'Go to Contact Page'}</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
