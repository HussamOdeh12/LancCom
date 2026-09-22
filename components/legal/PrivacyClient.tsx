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
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-cyan-500 selection:text-slate-950">
      <TopBar />
      <Navbar />

      <main id="main-content" className="flex-1 text-start">
        {/* Page Hero */}
        <section className="py-14 sm:py-18 bg-slate-900 border-b border-slate-800 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
            <Breadcrumb items={breadcrumbItems} />

            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-3 py-1 rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                <span>{language === 'ar' ? 'الوثائق القانونية' : 'Legal & Compliance'}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                {language === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                {language === 'ar'
                  ? 'بيان شفاف يوضح الممارسات الفعلية لجمع واستخدام البيانات عبر الموقع التعريفي لشركة لاند كوم لحلول تقنية المعلومات بأبوظبي.'
                  : 'A transparent statement describing the actual data practices and local browser storage used on the LandCom Information Technology Solutions Provider website.'}
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 sm:py-20 bg-slate-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            {/* Overview Card */}
            <div className="p-6 sm:p-8 bg-slate-900/90 border border-slate-800 rounded-3xl space-y-4 shadow-xl">
              <div className="flex items-center space-x-3 rtl:space-x-reverse text-cyan-400">
                <Building className="w-5 h-5 shrink-0" />
                <h2 className="text-lg font-bold text-white">
                  {language === 'ar' ? '1. نبذة عامة والجهة المشغلة' : '1. Overview & Operating Entity'}
                </h2>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                {language === 'ar'
                  ? 'يتم تشغيل هذا الموقع الإلكتروني (landcom.ae) بواسطة مؤسسة لاند كوم لحلول تقنية المعلومات (LandCom Information Technology Solutions Provider)، وهي منشأة وطنية مملوكة ومُدارة بنسبة 100% في دولة الإمارات العربية المتحدة، ومسجلة في إمارة أبوظبي بموجب الرخصة الاقتصادية رقم CN-1006129.'
                  : 'This website (landcom.ae) is operated by LandCom Information Technology Solutions Provider, a 100% UAE-owned and managed establishment registered in the Emirate of Abu Dhabi under Commercial Licence No. CN-1006129.'}
              </p>
              <p className="text-sm text-slate-300 leading-relaxed">
                {language === 'ar'
                  ? 'يعمل الموقع كمنصة تعريفية وتواصلية للمؤسسة لعرض خدماتها التقنية المعتمدة ومشاريعها الموثقة وتسهيل التواصل التجاري المباشر مع المؤسسات والعملاء.'
                  : 'The website serves as an informational corporate presence to present our documented IT services, confirmed corporate credentials, and facilitate direct business inquiries.'}
              </p>
            </div>

            {/* Information Collected */}
            <div className="p-6 sm:p-8 bg-slate-900/90 border border-slate-800 rounded-3xl space-y-4 shadow-xl">
              <div className="flex items-center space-x-3 rtl:space-x-reverse text-cyan-400">
                <FileText className="w-5 h-5 shrink-0" />
                <h2 className="text-lg font-bold text-white">
                  {language === 'ar' ? '2. البيانات التي يتم جمعها' : '2. Information Collected'}
                </h2>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                {language === 'ar'
                  ? 'لا يقوم الموقع بجمع أي بيانات شخصية دون علم المستخدم أو موافقته الصريحة. تقتصر البيانات المستلمة حصراً على المعلومات التي يقدمها الزائر طواعية عبر نموذج التواصل المباشر:'
                  : 'The website does not collect personal information without the user’s active knowledge. Information collected is strictly limited to data voluntarily provided by visitors via the direct inquiry form:'}
              </p>
              <ul className="space-y-2 text-sm text-slate-300 list-disc list-inside ps-2">
                <li>{language === 'ar' ? 'الاسم الكامل للمتصل' : 'Full Name of the contact person'}</li>
                <li>{language === 'ar' ? 'اسم المؤسسة أو الشركة (اختياري)' : 'Organization or company name (optional)'}</li>
                <li>{language === 'ar' ? 'عنوان البريد الإلكتروني للعمل' : 'Work or business email address'}</li>
                <li>{language === 'ar' ? 'رقم الهاتف للتواصل (اختياري)' : 'Contact telephone number (optional)'}</li>
                <li>{language === 'ar' ? 'مجال الخدمة أو الاستفسار المطلوب' : 'Selected service of interest'}</li>
                <li>{language === 'ar' ? 'نص الرسالة أو متطلبات المشروع' : 'Inquiry message text and project description'}</li>
              </ul>
            </div>

            {/* Local Storage & Cookies */}
            <div className="p-6 sm:p-8 bg-slate-900/90 border border-slate-800 rounded-3xl space-y-4 shadow-xl">
              <div className="flex items-center space-x-3 rtl:space-x-reverse text-cyan-400">
                <Cookie className="w-5 h-5 shrink-0" />
                <h2 className="text-lg font-bold text-white">
                  {language === 'ar' ? '3. التخزين المحلي وتفضيلات التصفح' : '3. Browser Local Storage & Preferences'}
                </h2>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                {language === 'ar'
                  ? 'لا يستخدم هذا الموقع ملفات تعريف الارتباط الإعلانية أو التتبعية. نستخدم فقط ميزة التخزين المحلي في المتصفح (localStorage) لحفظ التفضيلات التشغيلية الضرورية:'
                  : 'This website does not deploy advertising or behavioral tracking cookies. We utilize standard client-side browser local storage (localStorage) solely for essential user experience preferences:'}
              </p>
              <div className="p-4 bg-slate-100 dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 text-xs font-mono space-y-3">
                <div className="space-y-1">
                  <div className="text-cyan-700 dark:text-cyan-300 font-bold">• Key: landcom_language_pref</div>
                  <div className="text-slate-600 dark:text-slate-400 ps-3">Purpose: {language === 'ar' ? 'حفظ لغة العرض وتوجيه النص (عربي / English)' : 'Stores the visitor’s language and layout direction (English / Arabic)'}</div>
                </div>
                <div className="space-y-1">
                  <div className="text-cyan-700 dark:text-cyan-300 font-bold">• Key: landcom_theme_pref</div>
                  <div className="text-slate-600 dark:text-slate-400 ps-3">Purpose: {language === 'ar' ? 'حفظ مظهر الموقع المفضل (الوضع الداكن / الوضع الفاتح)' : 'Stores the visitor’s color theme preference (Light Mode / Dark Mode)'}</div>
                </div>
              </div>
              <p className="text-xs text-slate-400">
                {language === 'ar'
                  ? 'يمكنك مسح التخزين المحلي في أي وقت من خلال إعدادات المتصفح الخاص بك دون التأثير على وظائف تصفح الموقع.'
                  : 'You may clear your browser’s local storage at any time via your browser settings without impacting website accessibility.'}
              </p>
            </div>

            {/* Third-Party Tracking & Analytics */}
            <div className="p-6 sm:p-8 bg-slate-900/90 border border-slate-800 rounded-3xl space-y-4 shadow-xl">
              <div className="flex items-center space-x-3 rtl:space-x-reverse text-cyan-400">
                <Lock className="w-5 h-5 shrink-0" />
                <h2 className="text-lg font-bold text-white">
                  {language === 'ar' ? '4. انعدام أدوات التتبع الخارجية' : '4. No Third-Party Tracking or Advertising'}
                </h2>
              </div>
              <div className="flex items-start space-x-3 rtl:space-x-reverse">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {language === 'ar'
                      ? 'لا يحتوي هذا الموقع على أي برمجيات تتبع خارجي، أو شبكات إعلانية، أو بيكسلات تتبع، أو أدوات مراقبة سلوك المستخدم.'
                      : 'This website contains no third-party tracking pixels, marketing trackers, behavioral monitoring scripts, or advertising networks.'}
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {language === 'ar'
                      ? 'لا نقوم ببيع أو تأجير أو مشاركة أي بيانات تواصل مع أطراف ثالثة لأغراض تسويقية.'
                      : 'We do not sell, rent, or trade contact information with any external commercial third parties.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Purpose & Retention */}
            <div className="p-6 sm:p-8 bg-slate-900/90 border border-slate-800 rounded-3xl space-y-4 shadow-xl">
              <div className="flex items-center space-x-3 rtl:space-x-reverse text-cyan-400">
                <Database className="w-5 h-5 shrink-0" />
                <h2 className="text-lg font-bold text-white">
                  {language === 'ar' ? '5. الغرض من البيانات وأمن النقل' : '5. Data Purpose & Transmission Security'}
                </h2>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                {language === 'ar'
                  ? 'تُستخدم بيانات الاستفسارات حصرياً من قبل الفريق الفني والإداري لشركة لاند كوم للتواصل مع العميل والرد على متطلبات مشروعه التقني وتقديم الاستشارات المطلوبة.'
                  : 'Inquiry details are utilized strictly by LandCom’s authorized technical and administrative personnel to review project scopes, answer technical inquiries, and provide professional IT consultations.'}
              </p>
              <p className="text-sm text-slate-300 leading-relaxed">
                {language === 'ar'
                  ? 'يتم تأمين تصفح الموقع بالكامل عبر بروتوكول التشفير القياسي HTTPS لضمان سرية وسلامة البيانات أثناء النقل.'
                  : 'All web traffic and communications across landcom.ae are protected using standard TLS/HTTPS encryption in transit.'}
              </p>
            </div>

            {/* Contact Information for Privacy Inquiries */}
            <div className="p-6 sm:p-8 bg-slate-900/90 border border-cyan-500/30 rounded-3xl space-y-4 shadow-xl">
              <div className="flex items-center space-x-3 rtl:space-x-reverse text-cyan-400">
                <Mail className="w-5 h-5 shrink-0" />
                <h2 className="text-lg font-bold text-white">
                  {language === 'ar' ? '6. التواصل بشأن الخصوصية' : '6. Contact for Privacy Inquiries'}
                </h2>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                {language === 'ar'
                  ? 'لأي استفسارات تتعلق بسياسة الخصوصية أو البيانات، يرجى التواصل مباشرة مع مكتبنا الرئيسي في أبوظبي:'
                  : 'For any inquiries regarding this Privacy Policy or data handling, please contact our Abu Dhabi headquarters:'}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs">
                <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                  <div className="text-slate-400 font-bold">{language === 'ar' ? 'البريد الإلكتروني الرسمي:' : 'Official Email:'}</div>
                  <a href={`mailto:${COMPANY_INFO.contact.primaryEmail}`} className="text-cyan-300 font-mono hover:underline block">
                    {COMPANY_INFO.contact.primaryEmail}
                  </a>
                </div>
                <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                  <div className="text-slate-400 font-bold">{language === 'ar' ? 'هاتف المكتب:' : 'Office Telephone:'}</div>
                  <a href={`tel:${COMPANY_INFO.contact.telephone.replace(/\s+/g, '')}`} className="text-cyan-300 font-mono hover:underline block" dir="ltr">
                    {COMPANY_INFO.contact.telephone}
                  </a>
                </div>
              </div>
              <div className="text-xs text-slate-400 pt-2">
                {language === 'ar'
                  ? 'العنوان: جزيرة أبوظبي، طريق المرور، الطابق 3، مكتب 37–38، ص.ب 58571، أبوظبي، دولة الإمارات العربية المتحدة.'
                  : 'Address: Abu Dhabi Island, Muroor Road, Floor 3, Office 37–38, P.O. Box 58571, Abu Dhabi, UAE.'}
              </div>
            </div>

            {/* Back link */}
            <div className="pt-4 text-center">
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 rtl:space-x-reverse px-6 py-3 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/40 text-cyan-300 rounded-xl text-xs font-bold transition-all"
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
