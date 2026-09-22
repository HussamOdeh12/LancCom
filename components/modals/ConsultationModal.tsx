'use client';

import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Send, Building, User, Mail, Phone, ArrowRight } from 'lucide-react';
import { CORE_SERVICES, COMPANY_INFO } from '@/lib/data';
import { useLanguage } from '@/context/LanguageContext';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export function ConsultationModal({ isOpen, onClose, defaultService = 'erp-system' }: ConsultationModalProps) {
  const { strings, language, isRTL } = useLanguage();
  const [selectedService, setSelectedService] = useState<string>(defaultService);
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    phone: '',
    companyName: '',
    projectScope: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
    }, 1000);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setSelectedService('erp-system');
    setFormData({
      fullName: '',
      workEmail: '',
      phone: '',
      companyName: '',
      projectScope: '',
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
              {COMPANY_INFO.name}
            </span>
            <h2 id="consultation-modal-title" className="text-xl font-bold text-white mt-0.5">
              {strings.contact.formTitle}
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
                {strings.contact.successTitle}
              </h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                {strings.contact.successDesc}
              </p>
              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 text-start max-w-md mx-auto text-xs space-y-1.5 text-slate-400">
                <div><span className="text-slate-500">{strings.contact.fullName}:</span> <span className="text-white font-medium">{formData.fullName} ({formData.phone})</span></div>
                <div><span className="text-slate-500">{strings.contact.organization}:</span> <span className="text-white font-medium">{formData.companyName}</span></div>
                <div><span className="text-slate-500">{strings.contact.selectedService}:</span> <span className="text-cyan-400 font-medium capitalize">{selectedService.replace('-', ' ')}</span></div>
              </div>
              <button
                type="button"
                onClick={handleReset}
                className="mt-6 px-6 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm rounded-lg transition-colors inline-flex items-center space-x-2 rtl:space-x-reverse"
              >
                <span>{language === 'ar' ? 'إغلاق' : 'Close'}</span>
                <ArrowRight className={`w-4 h-4 shrink-0 ${isRTL ? 'rotate-180' : ''}`} />
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-start">
              <p className="text-xs text-slate-400">
                {strings.contact.formDesc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    {strings.contact.fullName} <span className="text-cyan-400">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-500 absolute start-3 top-3" />
                    <input
                      required
                      type="text"
                      placeholder={language === 'ar' ? "الاسم الكامل" : "Full Name"}
                      value={formData.fullName}
                      onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700/80 rounded-lg ps-9 pe-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                </div>

                {/* Work Email */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    {strings.contact.emailAddress} <span className="text-cyan-400">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-500 absolute start-3 top-3" />
                    <input
                      required
                      type="email"
                      placeholder="name@company.ae"
                      value={formData.workEmail}
                      onChange={e => setFormData({ ...formData, workEmail: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700/80 rounded-lg ps-9 pe-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 font-mono"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    {strings.contact.phoneNum}
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-500 absolute start-3 top-3" />
                    <input
                      type="tel"
                      placeholder="+971 50 123 4567"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700/80 rounded-lg ps-9 pe-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 font-mono"
                      dir="ltr"
                    />
                  </div>
                </div>

                {/* Company Name */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    {strings.contact.organization}
                  </label>
                  <div className="relative">
                    <Building className="w-4 h-4 text-slate-500 absolute start-3 top-3" />
                    <input
                      type="text"
                      placeholder={language === 'ar' ? "اسم المؤسسة" : "Organization"}
                      value={formData.companyName}
                      onChange={e => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700/80 rounded-lg ps-9 pe-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  {strings.contact.selectedService} <span className="text-cyan-400">*</span>
                </label>
                <select
                  value={selectedService}
                  onChange={e => setSelectedService(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700/80 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-500"
                >
                  {CORE_SERVICES.map(s => (
                    <option key={s.id} value={s.id}>
                      {s.title} — {s.tagline}
                    </option>
                  ))}
                </select>
              </div>

              {/* Project Scope / Message */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  {strings.contact.message} <span className="text-cyan-400">*</span>
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder={strings.contact.messagePlaceholder}
                  value={formData.projectScope}
                  onChange={e => setFormData({ ...formData, projectScope: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-700/80 rounded-lg p-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black text-sm rounded-xl shadow-xl shadow-cyan-500/20 transition-all flex items-center justify-center space-x-2 rtl:space-x-reverse disabled:opacity-50"
                >
                  <span>{isSubmitting ? strings.contact.submitting : strings.contact.submit}</span>
                  <Send className="w-4 h-4 shrink-0" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
