'use client';

import React, { useState } from 'react';
import { 
  Building, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  FileSpreadsheet, 
  Sparkles
} from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '@/lib/data';
import { useLanguage } from '@/context/LanguageContext';

export function ConsultationSection() {
  const { strings, language, isRTL } = useLanguage();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    service: 'it-infrastructure',
    timeline: 'Within 30 Days',
    message: '',
    ndaRequired: true,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [refCode, setRefCode] = useState('LCOM-RFP-849201');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const code = `LCOM-RFP-${Math.floor(100000 + Math.random() * 900000)}`;
    setTimeout(() => {
      setRefCode(code);
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 bg-slate-950 text-white border-t border-slate-900 relative text-start">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-3 py-1 rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider">
            <Send className="w-3.5 h-3.5 shrink-0" />
            <span>{strings.consultation.sectionTag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            {strings.consultation.sectionTitle}
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            {strings.consultation.sectionDesc}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Start 5 cols: Abu Dhabi Headquarters Info & Direct Channels */}
          <div className="lg:col-span-5 space-y-6 text-start">
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl text-start">
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                  <Building className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{strings.consultation.hqTitle}</h3>
                  <div className="text-xs text-cyan-400 font-medium">{strings.consultation.hqSubtitle}</div>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start space-x-3 rtl:space-x-reverse p-3 bg-slate-950 rounded-xl border border-slate-800/80 text-start">
                  <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white">{strings.consultation.physicalLocation}</div>
                    <div className="text-slate-300 text-xs mt-0.5">{COMPANY_INFO.headquarters.address}</div>
                    <div className="text-[10px] text-slate-500 font-mono mt-1" dir="ltr">GPS: {COMPANY_INFO.headquarters.coords}</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3 rtl:space-x-reverse p-3 bg-slate-950 rounded-xl border border-slate-800/80 text-start">
                  <Phone className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white">{strings.consultation.directTelephone}</div>
                    <a 
                      href={`tel:${COMPANY_INFO.contact.phone.replace(/\s+/g, '')}`} 
                      className="text-cyan-300 font-mono text-xs hover:underline block mt-0.5"
                      dir="ltr"
                    >
                      {COMPANY_INFO.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3 rtl:space-x-reverse p-3 bg-slate-950 rounded-xl border border-slate-800/80 text-start">
                  <Mail className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white">{strings.consultation.tendersRfp}</div>
                    <a href={`mailto:${COMPANY_INFO.contact.salesEmail}`} className="text-cyan-300 font-mono text-xs hover:underline block mt-0.5">
                      {COMPANY_INFO.contact.salesEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3 rtl:space-x-reverse p-3 bg-slate-950 rounded-xl border border-slate-800/80 text-start">
                  <Clock className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white">{strings.consultation.operatingHours}</div>
                    <div className="text-slate-300 text-xs mt-0.5">{COMPANY_INFO.contact.hours}</div>
                  </div>
                </div>
              </div>

              {/* 24/7 Hotline Badge */}
              <div className="p-4 bg-gradient-to-r from-emerald-950/40 to-cyan-950/40 border border-emerald-500/30 rounded-2xl flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-white flex items-center space-x-1.5 rtl:space-x-reverse">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
                    <span>{strings.consultation.criticalDispatch}</span>
                  </div>
                  <div className="text-[11px] text-slate-300 font-mono mt-0.5" dir="ltr">
                    {COMPANY_INFO.contact.mobile}
                  </div>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 uppercase">
                  {strings.consultation.activeStatus}
                </span>
              </div>
            </div>
          </div>

          {/* End 7 cols: Interactive RFP Submission Form */}
          <div className="lg:col-span-7 bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl text-start">
            {isSuccess ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in duration-200">
                <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto text-emerald-400">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">{strings.consultation.successTitle}</h3>
                <p className="text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
                  {language === 'ar' 
                    ? <>شكراً لك، <strong className="text-white">{formData.fullName}</strong>. تم تسجيل تفاصيل مشروعكم لـ <strong className="text-cyan-400">{formData.company}</strong> في نظام الدعم الهندسي بأبوظبي.</>
                    : <>Thank you, <strong className="text-white">{formData.fullName}</strong>. Your technical brief for <strong className="text-cyan-400">{formData.company}</strong> has been logged in our Abu Dhabi engineering dispatch queue.</>}
                </p>
                <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 max-w-md mx-auto text-xs text-slate-400 space-y-1 text-start">
                  <div><strong>{strings.consultation.refCode}:</strong> <span dir="ltr">{refCode}</span></div>
                  <div><strong>{strings.consultation.responseWindow}</strong></div>
                  <div><strong>{strings.consultation.assignedTeam}</strong></div>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setIsSuccess(false);
                    setFormData({
                      fullName: '',
                      email: '',
                      phone: '',
                      company: '',
                      service: 'it-infrastructure',
                      timeline: 'Within 30 Days',
                      message: '',
                      ndaRequired: true,
                    });
                  }}
                  className="mt-4 px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-xl border border-slate-700 transition-colors"
                >
                  {strings.consultation.submitAnother}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-start">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <h3 className="text-lg font-bold text-white">
                    {strings.consultation.formTitle}
                  </h3>
                  <span className="text-[11px] text-cyan-400 font-semibold flex items-center space-x-1 rtl:space-x-reverse">
                    <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                    <span>{strings.consultation.confidentialNda}</span>
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      {strings.consultation.fullName} <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      placeholder={language === 'ar' ? "مثال: م. طارق النعيمي" : "e.g. Eng. Tariq Al Nuaimi"}
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                    />
                  </div>

                  {/* Corporate Email */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      {strings.consultation.corporateEmail} <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="name@organization.ae"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      {strings.consultation.mobileNumber} <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="+971 50 000 0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                      dir="ltr"
                    />
                  </div>

                  {/* Organization */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      {strings.consultation.organization} <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      placeholder={language === 'ar' ? "اسم المؤسسة أو الشركة" : "Company Name"}
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                </div>

                {/* Service Selection & Timeline */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      {strings.consultation.targetSolution} <span className="text-cyan-400">*</span>
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500"
                    >
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.id}>{s.title}</option>
                      ))}
                      <option value="amc-all">{language === 'ar' ? 'عقود الصيانة السنوية (AMC) وإدارة مركز NOC' : '24/7 Managed NOC & Annual Maintenance (AMC)'}</option>
                      <option value="turnkey-all">{language === 'ar' ? 'حلول البنية التحتية المتكاملة والمناقصات' : 'Comprehensive Turnkey IT Infrastructure'}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      {strings.consultation.expectedTimeline}
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500"
                    >
                      <option value="Immediate (< 2 Weeks)">{language === 'ar' ? 'فوري (خلال أسبوعين)' : 'Immediate (< 2 Weeks)'}</option>
                      <option value="Within 30 Days">{language === 'ar' ? 'خلال 30 يوماً' : 'Within 30 Days'}</option>
                      <option value="1 - 3 Months">{language === 'ar' ? '1 – 3 أشهر' : '1 – 3 Months'}</option>
                      <option value="Budgeting / Next Quarter">{language === 'ar' ? 'مناقصة / الربع القادم' : 'Tendering / Next Quarter'}</option>
                    </select>
                  </div>
                </div>

                {/* Project Message / Requirements */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    {strings.consultation.projectDetails}
                  </label>
                  <textarea
                    rows={3}
                    placeholder={strings.consultation.projectDetailsPlaceholder}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                  ></textarea>
                </div>

                {/* NDA & Submit */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <label className="flex items-center space-x-2 rtl:space-x-reverse text-xs text-slate-300 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.ndaRequired}
                      onChange={(e) => setFormData({ ...formData, ndaRequired: e.target.checked })}
                      className="rounded bg-slate-950 border-slate-700 text-cyan-500 focus:ring-cyan-500"
                    />
                    <span>{strings.consultation.ndaCheckbox}</span>
                  </label>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-7 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs sm:text-sm rounded-xl shadow-lg shadow-cyan-500/20 transition-all flex items-center justify-center space-x-2 rtl:space-x-reverse disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></span>
                        <span>{strings.consultation.submittingBtn}</span>
                      </>
                    ) : (
                      <>
                        <Send className={`w-4 h-4 shrink-0 ${isRTL ? 'rotate-180' : ''}`} />
                        <span>{strings.consultation.submitBtn}</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
