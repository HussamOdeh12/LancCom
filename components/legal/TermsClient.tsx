'use client';

import React from 'react';
import Link from 'next/link';
import { TopBar } from '@/components/layout/TopBar';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { 
  FileText, 
  Scale, 
  ShieldCheck, 
  AlertCircle, 
  Building, 
  CheckCircle2, 
  Mail, 
  Phone 
} from 'lucide-react';
import { COMPANY_INFO } from '@/lib/data';
import { useLanguage } from '@/context/LanguageContext';

export function TermsClient() {
  const { language, isRTL } = useLanguage();

  const breadcrumbItems = [
    { label: language === 'ar' ? 'شروط الاستخدام' : 'Terms of Use' }
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
                <Scale className="w-3.5 h-3.5 shrink-0" />
                <span>{language === 'ar' ? 'الوثائق القانونية' : 'Legal & Terms'}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                {language === 'ar' ? 'شروط الاستخدام' : 'Terms of Use'}
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                {language === 'ar'
                  ? 'الشروط والأحكام المنظمة لتصفح واستخدام الموقع الإلكتروني لمؤسسة لاند كوم لحلول تقنية المعلومات بأبوظبي.'
                  : 'Terms and conditions governing the access and informational use of the LandCom Information Technology Solutions Provider website.'}
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 sm:py-20 bg-slate-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            {/* 1. Acceptance */}
            <div className="p-6 sm:p-8 bg-slate-900/90 border border-slate-800 rounded-3xl space-y-4 shadow-xl">
              <div className="flex items-center space-x-3 rtl:space-x-reverse text-cyan-400">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <h2 className="text-lg font-bold text-white">
                  {language === 'ar' ? '1. الموافقة على الشروط' : '1. Acceptance of Terms'}
                </h2>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                {language === 'ar'
                  ? 'من خلال الوصول إلى هذا الموقع الإلكتروني (landcom.ae) وتصفحه، فإنك تقر وتوافق على الالتزام بشروط الاستخدام الواردة هنا وكافة القوانين واللوائح المعمول بها في إمارة أبوظبي ودولة الإمارات العربية المتحدة.'
                  : 'By accessing and browsing this website (landcom.ae), you acknowledge and agree to be bound by these Terms of Use and all applicable laws and regulations in the Emirate of Abu Dhabi and the United Arab Emirates.'}
              </p>
            </div>

            {/* 2. Informational Purpose */}
            <div className="p-6 sm:p-8 bg-slate-900/90 border border-slate-800 rounded-3xl space-y-4 shadow-xl">
              <div className="flex items-center space-x-3 rtl:space-x-reverse text-cyan-400">
                <Building className="w-5 h-5 shrink-0" />
                <h2 className="text-lg font-bold text-white">
                  {language === 'ar' ? '2. الغرض من الموقع والصفة التعريفية' : '2. Informational Scope of Website'}
                </h2>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                {language === 'ar'
                  ? 'تم إنشاء هذا الموقع لتقديم معلومات عامة وموثقة حول شركة لاند كوم، وتاريخ تأسيسها في أبوظبي عام 2007، وخدماتها التقنية الثمانية المعتمدة، وسجل إنجازاتها ومشاريعها الموثقة مع الجهات والمؤسسات.'
                  : 'This website is established to provide general, verified information concerning LandCom, its founding in Abu Dhabi in 2007, its eight official service lines, and its documented project experience across public and private sectors.'}
              </p>
            </div>

            {/* 3. No Binding Offer */}
            <div className="p-6 sm:p-8 bg-slate-900/90 border border-slate-800 rounded-3xl space-y-4 shadow-xl">
              <div className="flex items-center space-x-3 rtl:space-x-reverse text-cyan-400">
                <AlertCircle className="w-5 h-5 shrink-0" />
                <h2 className="text-lg font-bold text-white">
                  {language === 'ar' ? '3. طبيعة المعلومات المعروضة' : '3. Informational Nature of Content'}
                </h2>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                {language === 'ar'
                  ? 'المحتوى والمعلومات المعروضة على هذا الموقع هي لأغراض تعريفية واستطلاعية عامة، ولا تشكل عرضاً تعاقدياً ملزماً. يتم الاتفاق على تفاصيل المشاريع ونطاق الخدمات مباشرة مع لاند كوم.'
                  : 'The content presented on this website is for general informational purposes only and does not constitute a binding commercial offer. Specific project requirements and service scopes are agreed upon directly with LandCom.'}
              </p>
            </div>

            {/* 4. Intellectual Property */}
            <div className="p-6 sm:p-8 bg-slate-900/90 border border-slate-800 rounded-3xl space-y-4 shadow-xl">
              <div className="flex items-center space-x-3 rtl:space-x-reverse text-cyan-400">
                <ShieldCheck className="w-5 h-5 shrink-0" />
                <h2 className="text-lg font-bold text-white">
                  {language === 'ar' ? '4. حقوق الملكية الفكرية' : '4. Intellectual Property'}
                </h2>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                {language === 'ar'
                  ? 'كافة النصوص والشعارات والتصاميم المنشورة على هذا الموقع هي ملك لمؤسسة لاند كوم لحلول تقنية المعلومات أو الجهات المعنية بها، وتخضع للحماية القانونية المقررة.'
                  : 'All text, trademarks, and design elements published on this website are the property of LandCom Information Technology Solutions Provider or their respective owners, and are protected under applicable laws.'}
              </p>
            </div>

            {/* 5. Acceptable Use */}
            <div className="p-6 sm:p-8 bg-slate-900/90 border border-slate-800 rounded-3xl space-y-4 shadow-xl">
              <div className="flex items-center space-x-3 rtl:space-x-reverse text-cyan-400">
                <FileText className="w-5 h-5 shrink-0" />
                <h2 className="text-lg font-bold text-white">
                  {language === 'ar' ? '5. الاستخدام المقبول' : '5. Acceptable Use'}
                </h2>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                {language === 'ar'
                  ? 'يلتزم المستخدم باستخدام الموقع للأغراض المشروعة والامتناع عن أي إجراءات قد تعطل عمل الموقع أو تؤثر على أمانه.'
                  : 'Users agree to use this website in a lawful manner and refrain from any activity that disrupts website availability, accessibility, or security.'}
              </p>
            </div>

            {/* 6. Entity & Jurisdiction */}
            <div className="p-6 sm:p-8 bg-slate-900/90 border border-cyan-500/30 rounded-3xl space-y-4 shadow-xl">
              <div className="flex items-center space-x-3 rtl:space-x-reverse text-cyan-400">
                <Building className="w-5 h-5 shrink-0" />
                <h2 className="text-lg font-bold text-white">
                  {language === 'ar' ? '6. المنشأة وبيانات الترخيص' : '6. Operating Entity & Licencing'}
                </h2>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                {language === 'ar'
                  ? 'مؤسسة لاند كوم لحلول تقنية المعلومات، مسجلة ومرخصة رسمياً في إمارة أبوظبي بدولة الإمارات العربية المتحدة بموجب الرخصة الاقتصادية رقم CN-1006129.'
                  : 'LandCom Information Technology Solutions Provider is an establishment registered and licensed in the Emirate of Abu Dhabi, United Arab Emirates, under Commercial Licence No. CN-1006129.'}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs">
                <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                  <div className="text-slate-400 font-bold">{language === 'ar' ? 'البريد الرسمي:' : 'Official Email:'}</div>
                  <a href={`mailto:${COMPANY_INFO.contact.primaryEmail}`} className="text-cyan-300 font-mono hover:underline block">
                    {COMPANY_INFO.contact.primaryEmail}
                  </a>
                </div>
                <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                  <div className="text-slate-400 font-bold">{language === 'ar' ? 'الهاتف:' : 'Telephone:'}</div>
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
                <span>{language === 'ar' ? 'تواصل مع لاند كوم' : 'Contact LandCom'}</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
