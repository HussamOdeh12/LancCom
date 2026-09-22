'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { TopBar } from '@/components/layout/TopBar';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { 
  Building, 
  MapPin, 
  Phone, 
  Printer, 
  Mail, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  Globe, 
  ExternalLink,
  Info
} from 'lucide-react';
import { COMPANY_INFO, CORE_SERVICES } from '@/lib/data';
import { useLanguage } from '@/context/LanguageContext';

export function ContactClient() {
  const { strings, language, isRTL } = useLanguage();

  const [formData, setFormData] = useState({
    fullName: '',
    organization: '',
    email: '',
    phone: '',
    service: 'general-enquiry',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const breadcrumbItems = [
    { label: language === 'ar' ? 'تواصل معنا' : 'Contact' }
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    const mailtoUrl = generateMailtoHref();
    if (typeof window !== 'undefined') {
      try {
        window.location.assign(mailtoUrl);
      } catch {
        const link = document.createElement('a');
        link.href = mailtoUrl;
        link.click();
      }
    }
  };

  const getServiceLabel = (serviceId: string) => {
    if (serviceId === 'general-enquiry') {
      return language === 'ar' ? 'استفسار عام' : 'General Enquiry';
    }
    const s = CORE_SERVICES.find((srv) => srv.id === serviceId || srv.slug === serviceId);
    if (!s) return serviceId;
    return language === 'ar' ? s.titleAr : s.title;
  };

  const generateMailtoHref = () => {
    const subject = encodeURIComponent(
      `LandCom Inquiry: ${getServiceLabel(formData.service)} - ${formData.organization || formData.fullName}`
    );
    const body = encodeURIComponent(
      `Full Name: ${formData.fullName}\n` +
      `Organization / Company: ${formData.organization || 'Not provided'}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone || 'Not provided'}\n` +
      `Service of Interest: ${getServiceLabel(formData.service)}\n\n` +
      `Message / Requirements:\n${formData.message}\n`
    );
    return `mailto:${COMPANY_INFO.contact.primaryEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col selection:bg-cyan-500 selection:text-slate-950">
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
                <Send className="w-3.5 h-3.5 shrink-0" />
                <span>{strings.contact.sectionTag}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
                {strings.contact.sectionTitle}
              </h1>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                {strings.contact.sectionDesc}
              </p>
            </div>
          </div>
        </section>

        {/* 2. Main Contact Grid */}
        <section className="py-16 sm:py-20 bg-white dark:bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              
              {/* Left Column (5 Cols): Official Office Details */}
              <div className="lg:col-span-5 space-y-6">
                <div className="bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-lg dark:shadow-2xl">
                  <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <div className="w-10 h-10 rounded-xl bg-cyan-100 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/30 flex items-center justify-center text-cyan-700 dark:text-cyan-400 shrink-0">
                      <Building className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-slate-900 dark:text-white">{strings.contact.hqTitle}</h2>
                      <div className="text-xs text-cyan-700 dark:text-cyan-400 font-medium">
                        {COMPANY_INFO.name}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3.5 text-xs sm:text-sm">
                    {/* Office Address */}
                    <div className="flex items-start space-x-3 rtl:space-x-reverse p-3.5 bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800/80 shadow-xs">
                      <MapPin className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                      <div className="space-y-0.5">
                        <div className="font-bold text-slate-900 dark:text-white">{strings.contact.address}</div>
                        <div className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">
                          {language === 'ar' 
                            ? 'جزيرة أبوظبي، طريق المرور، الطابق 3، مكتب 37–38، أبوظبي، دولة الإمارات العربية المتحدة'
                            : COMPANY_INFO.headquarters.fullAddress}
                        </div>
                      </div>
                    </div>

                    {/* Telephone */}
                    <div className="flex items-start space-x-3 rtl:space-x-reverse p-3.5 bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800/80 shadow-xs">
                      <Phone className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                      <div className="space-y-0.5">
                        <div className="font-bold text-slate-900 dark:text-white">{strings.contact.telephone}</div>
                        <a 
                          href={`tel:${COMPANY_INFO.contact.telephone.replace(/\s+/g, '')}`} 
                          className="text-cyan-700 dark:text-cyan-300 font-mono text-xs hover:underline block"
                          dir="ltr"
                        >
                          {COMPANY_INFO.contact.telephone}
                        </a>
                      </div>
                    </div>

                    {/* Fax */}
                    <div className="flex items-start space-x-3 rtl:space-x-reverse p-3.5 bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800/80 shadow-xs">
                      <Printer className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                      <div className="space-y-0.5">
                        <div className="font-bold text-slate-900 dark:text-white">{strings.contact.fax}</div>
                        <span className="text-slate-600 dark:text-slate-300 font-mono text-xs block" dir="ltr">
                          {COMPANY_INFO.contact.fax}
                        </span>
                      </div>
                    </div>

                    {/* Primary & Additional Emails */}
                    <div className="flex items-start space-x-3 rtl:space-x-reverse p-3.5 bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800/80 shadow-xs">
                      <Mail className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                      <div className="space-y-1.5 w-full">
                        <div className="font-bold text-slate-900 dark:text-white text-xs">{strings.contact.email}</div>
                        <div>
                          <div className="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400">
                            {language === 'ar' ? 'البريد الرسمي الأساسي' : 'Primary Corporate Email'}
                          </div>
                          <a 
                            href={`mailto:${COMPANY_INFO.contact.primaryEmail}`} 
                            className="text-cyan-700 dark:text-cyan-300 font-mono text-xs hover:underline block"
                          >
                            {COMPANY_INFO.contact.primaryEmail}
                          </a>
                        </div>
                        <div className="pt-0.5 border-t border-slate-100 dark:border-slate-900">
                          <div className="text-[10px] uppercase font-bold text-slate-500">
                            {language === 'ar' ? 'بريد إضافي' : 'Additional Email'}
                          </div>
                          <a 
                            href={`mailto:${COMPANY_INFO.contact.additionalEmail}`} 
                            className="text-slate-600 dark:text-slate-400 font-mono text-xs hover:underline block"
                          >
                            {COMPANY_INFO.contact.additionalEmail}
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* P.O. Box & Website */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="p-3.5 bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800/80 shadow-xs">
                        <div className="text-[11px] uppercase font-bold text-slate-500 dark:text-slate-400">{strings.contact.poBox}</div>
                        <div className="text-slate-800 dark:text-slate-200 text-xs mt-0.5 font-mono">
                          {COMPANY_INFO.headquarters.poBox}
                        </div>
                      </div>
                      <div className="p-3.5 bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800/80 shadow-xs">
                        <div className="text-[11px] uppercase font-bold text-slate-500 dark:text-slate-400">
                          {language === 'ar' ? 'الموقع الإلكتروني' : 'Website'}
                        </div>
                        <div className="text-cyan-700 dark:text-cyan-300 text-xs mt-0.5 font-mono">
                          {COMPANY_INFO.contact.website}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Economic Licence Verification Box */}
                  <div className="p-4 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl text-xs space-y-1 shadow-xs">
                    <div className="text-cyan-700 dark:text-cyan-300 font-bold flex items-center space-x-1.5 rtl:space-x-reverse">
                      <ShieldCheck className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                      <span>{language === 'ar' ? 'الرخصة الاقتصادية الصادرة بأبوظبي' : 'Abu Dhabi Economic Licence'}</span>
                    </div>
                    <div className="text-slate-500 dark:text-slate-400 text-[11px] font-mono">
                      Licence No. CN-1006129 • {COMPANY_INFO.legalForm}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column (7 Cols): Inquiry Form */}
              <div className="lg:col-span-7 bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-lg dark:shadow-2xl">
                {isSubmitted ? (
                  <div className="py-8 space-y-6 text-start">
                    <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                        {language === 'ar' ? 'تم تجهيز تفاصيل استفساركم' : 'Inquiry Details Prepared'}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {language === 'ar'
                          ? 'لضمان الاستلام المباشر لدى مكتبنا بأبوظبي، يمكنك إرسال الاستفسار عبر تطبيق البريد الإلكتروني أو التواصل المباشر عبر الهاتف.'
                          : 'To ensure immediate receipt by our Abu Dhabi office, you can transmit this prepared inquiry via your email client or contact us directly by telephone.'}
                      </p>
                    </div>

                    {/* Composed Summary Box */}
                    <div className="p-4 bg-white dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-2 text-xs font-mono text-slate-700 dark:text-slate-300 shadow-xs">
                      <div><span className="text-slate-500">To:</span> {COMPANY_INFO.contact.primaryEmail}</div>
                      <div><span className="text-slate-500">Name:</span> {formData.fullName}</div>
                      {formData.organization && <div><span className="text-slate-500">Company:</span> {formData.organization}</div>}
                      <div><span className="text-slate-500">Service:</span> {getServiceLabel(formData.service)}</div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                      <a
                        href={generateMailtoHref()}
                        className="w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black text-xs sm:text-sm rounded-xl transition-all shadow-md flex items-center justify-center space-x-2 rtl:space-x-reverse"
                      >
                        <span>{language === 'ar' ? 'إرسال عبر البريد الإلكتروني (Info@landcom.ae)' : 'Open in Email Client (Info@landcom.ae)'}</span>
                        <ExternalLink className="w-4 h-4 shrink-0" />
                      </a>
                      <button
                        type="button"
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormData({
                            fullName: '',
                            organization: '',
                            email: '',
                            phone: '',
                            service: 'general-enquiry',
                            message: '',
                          });
                        }}
                        className="w-full sm:w-auto px-5 py-3.5 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-900 dark:text-slate-200 font-bold text-xs sm:text-sm rounded-xl border border-slate-300 dark:border-slate-700 transition-colors shadow-xs"
                      >
                        {language === 'ar' ? 'كتابة استفسار جديد' : 'Compose Another Inquiry'}
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div className="pb-3 border-b border-slate-200 dark:border-slate-800 space-y-1">
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                        {strings.contact.formTitle}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {strings.contact.formDesc}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name (Required) */}
                      <div>
                        <label htmlFor="contact_page_fullname" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                          {strings.contact.fullName} <span className="text-cyan-600 dark:text-cyan-400">*</span>
                        </label>
                        <input
                          id="contact_page_fullname"
                          required
                          type="text"
                          autoComplete="name"
                          placeholder={language === 'ar' ? "الاسم الكامل" : "Your Full Name"}
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className="w-full bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-cyan-500 shadow-xs"
                        />
                      </div>

                      {/* Work Email (Required) */}
                      <div>
                        <label htmlFor="contact_page_email" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                          {strings.contact.emailAddress} <span className="text-cyan-600 dark:text-cyan-400">*</span>
                        </label>
                        <input
                          id="contact_page_email"
                          required
                          type="email"
                          autoComplete="email"
                          placeholder="name@organization.ae"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-cyan-500 font-mono shadow-xs"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Company (Optional) */}
                      <div>
                        <label htmlFor="contact_page_org" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                          {strings.contact.organization} <span className="text-slate-600 dark:text-slate-400 text-[11px]">({language === 'ar' ? 'اختياري' : 'Optional'})</span>
                        </label>
                        <input
                          id="contact_page_org"
                          type="text"
                          autoComplete="organization"
                          placeholder={language === 'ar' ? "اسم المؤسسة / الشركة" : "Company or Entity Name"}
                          value={formData.organization}
                          onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                          className="w-full bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-cyan-500 shadow-xs"
                        />
                      </div>

                      {/* Phone (Optional) */}
                      <div>
                        <label htmlFor="contact_page_phone" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                          {strings.contact.phoneNum} <span className="text-slate-600 dark:text-slate-400 text-[11px]">({language === 'ar' ? 'اختياري' : 'Optional'})</span>
                        </label>
                        <input
                          id="contact_page_phone"
                          type="tel"
                          autoComplete="tel"
                          placeholder="+971 50 000 0000"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-cyan-500 font-mono shadow-xs"
                        />
                      </div>
                    </div>

                    {/* Service of Interest (8 official services + General Enquiry) */}
                    <div>
                      <label htmlFor="contact_page_service" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        {strings.contact.selectedService}
                      </label>
                      <select
                        id="contact_page_service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-cyan-500 shadow-xs"
                      >
                        <option value="general-enquiry">
                          {language === 'ar' ? 'استفسار عام / خدمات عامة' : 'General Enquiry / Corporate Consultation'}
                        </option>
                        {CORE_SERVICES.map((s) => (
                          <option key={s.id} value={s.id}>
                            {language === 'ar' ? `${s.titleAr} (${s.title})` : `${s.title} — ${s.tagline}`}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message (Required) */}
                    <div>
                      <label htmlFor="contact_page_message" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        {strings.contact.message} <span className="text-cyan-600 dark:text-cyan-400">*</span>
                      </label>
                      <textarea
                        id="contact_page_message"
                        required
                        rows={4}
                        placeholder={strings.contact.messagePlaceholder}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-xl p-3.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-cyan-500 shadow-xs"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black text-sm rounded-xl shadow-lg transition-all flex items-center justify-center space-x-2 rtl:space-x-reverse active:scale-98"
                      >
                        <span>{strings.contact.submit}</span>
                        <Send className="w-4 h-4 shrink-0" />
                      </button>
                    </div>

                    <div className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center space-x-1.5 rtl:space-x-reverse pt-1">
                      <Info className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 shrink-0" />
                      <span>
                        {language === 'ar'
                          ? 'تعبئة هذا النموذج تفتح تطبيق البريد الإلكتروني مع تفاصيل الاستفسار المجهزة للإرسال.'
                          : 'Completing this form will open your email application with the enquiry details prepared for sending to LandCom.'}
                      </span>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
