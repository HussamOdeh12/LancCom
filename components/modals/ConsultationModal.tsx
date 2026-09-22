'use client';

import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Send, Building, User, Mail, Phone, ArrowRight } from 'lucide-react';
import { SERVICES } from '@/lib/data';
import { useLanguage } from '@/context/LanguageContext';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export function ConsultationModal({ isOpen, onClose, defaultService }: ConsultationModalProps) {
  const { strings, language, isRTL } = useLanguage();
  const [selectedService, setSelectedService] = useState<string>('all');
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    phone: '',
    companyName: '',
    timeline: 'Within 30 Days',
    budgetRange: 'Enterprise Scope (Custom BOQ)',
    projectScope: '',
    emirate: 'Abu Dhabi',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const currentService = defaultService || selectedService;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setSelectedService('all');
    setFormData({
      fullName: '',
      workEmail: '',
      phone: '',
      companyName: '',
      timeline: 'Within 30 Days',
      budgetRange: 'Enterprise Scope (Custom BOQ)',
      projectScope: '',
      emirate: 'Abu Dhabi',
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col text-slate-100 text-start"
        role="dialog"
        aria-modal="true"
        aria-labelledby="consultation-modal-title"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-800 bg-slate-950/50">
          <div>
            <span className="text-xs font-semibold tracking-wider text-cyan-400 uppercase">
              {language === 'ar' ? 'طلب استشارة هندسية ومناقصات (RFP)' : 'Official Technical Consultation & RFP'}
            </span>
            <h2 id="consultation-modal-title" className="text-xl font-bold text-white mt-0.5">
              {language === 'ar' ? 'طلب عرض حلول تكنولوجيا المعلومات المؤسسية' : 'Request Enterprise IT Solution Proposal'}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500"
            aria-label={strings.common.close}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto flex-1 text-start">
          {isSubmitted ? (
            <div className="py-10 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto text-emerald-400">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white">
                {language === 'ar' ? 'تم استلام طلب الاستشارة بنجاح' : 'Consultation Request Received'}
              </h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                {language === 'ar' 
                  ? <>شكراً لك، <strong className="text-white">{formData.fullName}</strong>. سيقوم مهندس الحلول الرئيسي بأبوظبي بمراجعة متطلباتكم والتواصل معكم خلال <strong className="text-cyan-400">ساعتي عمل</strong>.</>
                  : <>Thank you, <strong className="text-white">{formData.fullName}</strong>. A dedicated LandCom Principal Solution Architect in Abu Dhabi will review your specifications and contact you within <strong className="text-cyan-400">2 business hours</strong>.</>}
              </p>
              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 text-start max-w-md mx-auto text-xs space-y-1.5 text-slate-400">
                <div><span className="text-slate-500">{language === 'ar' ? 'مجال الخدمة:' : 'Service Category:'}</span> <span className="text-white font-medium capitalize">{currentService.replace('-', ' ')}</span></div>
                <div><span className="text-slate-500">{language === 'ar' ? 'المؤسسة / الشركة:' : 'Company / Organization:'}</span> <span className="text-white font-medium">{formData.companyName}</span></div>
                <div><span className="text-slate-500">{language === 'ar' ? 'الموقع:' : 'Location:'}</span> <span className="text-white font-medium">{formData.emirate}, UAE</span></div>
                <div><span className="text-slate-500">{language === 'ar' ? 'التواصل المباشر:' : 'Direct Contact:'}</span> <span className="text-white font-medium">{formData.workEmail} ({formData.phone})</span></div>
              </div>
              <button
                type="button"
                onClick={handleReset}
                className="mt-6 px-6 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm rounded-lg transition-colors inline-flex items-center space-x-2 rtl:space-x-reverse"
              >
                <span>{language === 'ar' ? 'تم' : 'Done'}</span>
                <ArrowRight className={`w-4 h-4 shrink-0 ${isRTL ? 'rotate-180' : ''}`} />
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-start">
              <p className="text-xs text-slate-400">
                {language === 'ar' 
                  ? 'تواصل مباشرة مع مهندسينا المعتمدين في أبوظبي لتصميم شبكات المؤسسات، وتدقيق الأمن السيبراني، وجداول كميات كابلات التيار الخفيف، وعقود الصيانة السنوية (AMC).'
                  : 'Connect directly with certified engineers in Abu Dhabi for enterprise network design, cybersecurity posture assessments, structured cabling BOQs, or Annual Maintenance Contracts (AMC).'}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    {strings.consultation.fullName} <span className="text-cyan-400">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-500 absolute start-3 top-3" />
                    <input
                      required
                      type="text"
                      placeholder={language === 'ar' ? "مثال: م. خالد المنصوري" : "e.g. Eng. Khalid Al Mansoori"}
                      value={formData.fullName}
                      onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700/80 rounded-lg ps-9 pe-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                    />
                  </div>
                </div>

                {/* Work Email */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    {strings.consultation.corporateEmail} <span className="text-cyan-400">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-500 absolute start-3 top-3" />
                    <input
                      required
                      type="email"
                      placeholder="name@company.ae"
                      value={formData.workEmail}
                      onChange={e => setFormData({ ...formData, workEmail: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700/80 rounded-lg ps-9 pe-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    {strings.consultation.mobileNumber} <span className="text-cyan-400">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-500 absolute start-3 top-3" />
                    <input
                      required
                      type="tel"
                      placeholder="+971 50 123 4567"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700/80 rounded-lg ps-9 pe-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                      dir="ltr"
                    />
                  </div>
                </div>

                {/* Company Name */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    {strings.consultation.organization} <span className="text-cyan-400">*</span>
                  </label>
                  <div className="relative">
                    <Building className="w-4 h-4 text-slate-500 absolute start-3 top-3" />
                    <input
                      required
                      type="text"
                      placeholder={language === 'ar' ? "اسم المؤسسة أو الجهة الحكومية" : "Company or Government Entity"}
                      value={formData.companyName}
                      onChange={e => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700/80 rounded-lg ps-9 pe-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                    />
                  </div>
                </div>
              </div>

              {/* Service Category & Emirate */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    {strings.consultation.targetSolution} <span className="text-cyan-400">*</span>
                  </label>
                  <select
                    value={currentService}
                    onChange={e => setSelectedService(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700/80 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                  >
                    <option value="all">{language === 'ar' ? 'بنية تحتية متكاملة للمؤسسات' : 'Comprehensive Turnkey IT Infrastructure'}</option>
                    {SERVICES.map(s => (
                      <option key={s.id} value={s.id}>{s.title}</option>
                    ))}
                    <option value="annual-maintenance">{language === 'ar' ? 'عقود الصيانة السنوية (AMC) 24/7' : '24/7 Annual Maintenance Contract (AMC)'}</option>
                    <option value="audit">{language === 'ar' ? 'تدقيق الأمن السيبراني ومعايير NESA' : 'Cybersecurity Audit & UAE NESA Compliance'}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    {language === 'ar' ? 'الإمارة / موقع المشروع' : 'Project Location / Emirate'}
                  </label>
                  <select
                    value={formData.emirate}
                    onChange={e => setFormData({ ...formData, emirate: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700/80 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                  >
                    <option value="Abu Dhabi">{language === 'ar' ? 'أبوظبي (المدينة والمناطق الصناعية)' : 'Abu Dhabi (Main City & Industrial)'}</option>
                    <option value="Al Ain">{language === 'ar' ? 'منطقة العين' : 'Al Ain Region'}</option>
                    <option value="Al Dhafra">{language === 'ar' ? 'منطقة الظفرة / المنطقة الغربية' : 'Al Dhafra / Western Region'}</option>
                    <option value="Dubai">{language === 'ar' ? 'دبي' : 'Dubai'}</option>
                    <option value="Sharjah & Northern Emirates">{language === 'ar' ? 'الشارقة والإمارات الشمالية' : 'Sharjah & Northern Emirates'}</option>
                  </select>
                </div>
              </div>

              {/* Timeline & Project Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    {strings.consultation.expectedTimeline}
                  </label>
                  <select
                    value={formData.timeline}
                    onChange={e => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700/80 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                  >
                    <option value="Immediate (< 2 Weeks)">{language === 'ar' ? 'فوري (أقل من أسبوعين)' : 'Immediate (< 2 Weeks)'}</option>
                    <option value="Within 30 Days">{language === 'ar' ? 'خلال 30 يوماً' : 'Within 30 Days'}</option>
                    <option value="1 - 3 Months">{language === 'ar' ? '1 – 3 أشهر' : '1 – 3 Months (Standard Project)'}</option>
                    <option value="RFP / Tendering Phase">{language === 'ar' ? 'مرحلة المناقصات والعطاءات' : 'RFP / Tendering Stage'}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    {language === 'ar' ? 'نطاق وحجم المشروع التقديري' : 'Estimated Scale / Scope'}
                  </label>
                  <select
                    value={formData.budgetRange}
                    onChange={e => setFormData({ ...formData, budgetRange: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700/80 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                  >
                    <option value="Small Office (< 25 Users)">{language === 'ar' ? 'مكتب / فرع صغير (< 25 مستخدم)' : 'Small to Mid Facility (< 25 Users / Drops)'}</option>
                    <option value="Enterprise Scope (Custom BOQ)">{language === 'ar' ? 'مؤسسة / مواقع متعددة (> 50 مستخدم)' : 'Enterprise Branch / Multi-Site (> 50 Users)'}</option>
                    <option value="Campus / Full Commercial Tower">{language === 'ar' ? 'مجمع / برج تجاري كامل / مركز بيانات' : 'Campus / Commercial Tower / Data Center'}</option>
                    <option value="Ongoing 24/7 SLA Support">{language === 'ar' ? 'عقد صيانة وإدارة سنوي 24/7 (AMC)' : 'Ongoing 24/7 SLA Support (AMC)'}</option>
                  </select>
                </div>
              </div>

              {/* Project Scope Description */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  {strings.consultation.projectDetails}
                </label>
                <textarea
                  rows={3}
                  placeholder={strings.consultation.projectDetailsPlaceholder}
                  value={formData.projectScope}
                  onChange={e => setFormData({ ...formData, projectScope: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-700/80 rounded-lg p-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                ></textarea>
              </div>

              {/* Footer Actions with Logical Flex & Spacing */}
              <div className="pt-2 flex items-center justify-between border-t border-slate-800">
                <div className="text-[11px] text-slate-400">
                  <span>{strings.consultation.confidentialNda}</span>
                </div>
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white rounded-lg transition-colors"
                  >
                    {strings.common.close}
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-5 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs rounded-lg transition-all shadow-lg shadow-cyan-500/20 flex items-center space-x-2 rtl:space-x-reverse disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-3.5 h-3.5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></span>
                        <span>{strings.consultation.submittingBtn}</span>
                      </>
                    ) : (
                      <>
                        <Send className={`w-3.5 h-3.5 shrink-0 ${isRTL ? 'rotate-180' : ''}`} />
                        <span>{strings.consultation.submitBtn}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
