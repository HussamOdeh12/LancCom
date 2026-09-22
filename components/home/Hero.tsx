'use client';

import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  ArrowRight, 
  Server, 
  Activity, 
  CheckCircle2, 
  Cpu, 
  Lock, 
  Wifi, 
  ChevronRight, 
  Calculator
} from 'lucide-react';
import { COMPANY_INFO, PARTNERS } from '@/lib/data';
import { useLanguage } from '@/context/LanguageContext';

interface HeroProps {
  onOpenConsultation: (serviceId?: string) => void;
}

export function Hero({ onOpenConsultation }: HeroProps) {
  const { strings, language, isRTL } = useLanguage();
  const [activeTelemetryTab, setActiveTelemetryTab] = useState<'network' | 'security' | 'cloud'>('network');
  const [latency, setLatency] = useState(1.8);

  useEffect(() => {
    const interval = setInterval(() => {
      setLatency(prev => +(1.4 + Math.random() * 0.8).toFixed(1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-slate-950 text-white pt-10 pb-20 lg:pt-16 lg:pb-28 overflow-hidden border-b border-slate-900 text-start">
      {/* Background Architectural Grid & Radial Lighting */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
      <div className="absolute top-0 end-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 start-10 w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top UAE Accreditation & NESA Compliance Pill */}
        <div className="flex justify-center lg:justify-start mb-6">
          <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-300 text-xs font-semibold shadow-inner">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping shrink-0"></span>
            <span>{strings.hero.accreditationPill}</span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400">{strings.hero.alignedBadge}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Start Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-start">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.25]">
              {strings.hero.headlinePart1}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">
                {strings.hero.headlineAccent}
              </span>{' '}
              {strings.hero.headlinePart2}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mx-auto lg:mx-0">
              {strings.hero.description}
            </p>

            {/* CTAs with Logical Spacing */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                type="button"
                onClick={() => onOpenConsultation()}
                className="w-full sm:w-auto px-7 py-3.5 bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black text-sm rounded-xl shadow-xl shadow-cyan-500/25 transition-all hover:scale-[1.02] active:scale-98 flex items-center justify-center space-x-2 rtl:space-x-reverse"
              >
                <span>{strings.hero.requestProposal}</span>
                <ArrowRight className={`w-4 h-4 shrink-0 ${isRTL ? 'rotate-180' : ''}`} />
              </button>

              <a
                href="#estimator"
                className="w-full sm:w-auto px-6 py-3.5 bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-cyan-300 font-bold text-sm rounded-xl border border-slate-700/80 transition-all flex items-center justify-center space-x-2 rtl:space-x-reverse"
              >
                <Calculator className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{strings.hero.estimatorBtn}</span>
              </a>
            </div>

            {/* Quick Trust Highlights with Logical Text Alignment */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-slate-800/80 text-start">
              {COMPANY_INFO.metrics.map((m, idx) => (
                <div key={idx} className="p-3 bg-slate-900/40 rounded-xl border border-slate-800/60 text-start">
                  <div className="text-xl sm:text-2xl font-black text-cyan-400 tracking-tight" dir="ltr">
                    {m.value}
                  </div>
                  <div className="text-[11px] font-semibold text-slate-300 mt-0.5 line-clamp-1">
                    {language === 'ar' ? (idx === 0 ? 'نسبة توافر الخدمة' : idx === 1 ? 'مشاريع منفذة بالإمارات' : idx === 2 ? 'زمن الاستجابة الميداني' : 'شهادات مهندسي الموقع') : m.label}
                  </div>
                  <div className="text-[10px] text-slate-500">
                    {language === 'ar' ? (idx === 0 ? 'مضمونة باتفاقية SLA' : idx === 1 ? 'جهات حكومية وخاصة' : idx === 2 ? 'طوارئ أبوظبي' : 'Cisco, Fortinet, Dell') : m.highlight}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* End Column: Interactive UAE Enterprise Operations & Telemetry Center */}
          <div className="lg:col-span-5 text-start">
            <div className="relative bg-slate-900/95 border border-slate-700/80 rounded-2xl shadow-2xl p-6 backdrop-blur-xl overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center space-x-2.5 rtl:space-x-reverse">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse shrink-0"></div>
                  <div className="text-start">
                    <div className="text-xs font-bold text-white tracking-wide">
                      {strings.hero.telemetryTitle}
                    </div>
                    <div className="text-[10px] text-slate-400">
                      {strings.hero.telemetrySubtitle}
                    </div>
                  </div>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 bg-cyan-950/80 border border-cyan-800/50 text-cyan-300 rounded font-semibold shrink-0">
                  {language === 'ar' ? 'عقدة أبوظبي' : 'UAE North Node'}
                </span>
              </div>

              {/* Telemetry Switcher Tabs */}
              <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-950 rounded-xl my-4 border border-slate-800">
                <button
                  type="button"
                  onClick={() => setActiveTelemetryTab('network')}
                  className={`py-1.5 text-xs font-semibold rounded-lg transition-all ${
                    activeTelemetryTab === 'network'
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {strings.hero.tabs.network}
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTelemetryTab('security')}
                  className={`py-1.5 text-xs font-semibold rounded-lg transition-all ${
                    activeTelemetryTab === 'security'
                      ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30 shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {strings.hero.tabs.security}
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTelemetryTab('cloud')}
                  className={`py-1.5 text-xs font-semibold rounded-lg transition-all ${
                    activeTelemetryTab === 'cloud'
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {strings.hero.tabs.cloud}
                </button>
              </div>

              {/* Dynamic Telemetry Display */}
              <div className="space-y-3.5 text-start">
                {activeTelemetryTab === 'network' && (
                  <>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-start">
                        <div className="text-[10px] text-slate-400 flex items-center justify-between">
                          <span>{strings.hero.metrics.sdwanLatency}</span>
                          <Activity className="w-3 h-3 text-cyan-400 shrink-0" />
                        </div>
                        <div className="text-xl font-mono font-bold text-cyan-400 mt-1" dir="ltr">
                          {latency} ms
                        </div>
                        <div className="text-[10px] text-emerald-400 mt-0.5">
                          {language === 'ar' ? 'ألياف ضوئية فائقة السرعة بأبوظبي' : 'Ultra-Low Abu Dhabi Fiber'}
                        </div>
                      </div>

                      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-start">
                        <div className="text-[10px] text-slate-400 flex items-center justify-between">
                          <span>{language === 'ar' ? 'التحويل التلقائي للشبكة' : 'Dual WAN Failover'}</span>
                          <Wifi className="w-3 h-3 text-emerald-400 shrink-0" />
                        </div>
                        <div className="text-xl font-mono font-bold text-emerald-400 mt-1">
                          Active-Active
                        </div>
                        <div className="text-[10px] text-slate-400 mt-0.5">
                          {language === 'ar' ? 'ازدواجية مسار Etisalat & du' : 'Etisalat & du Redundancy'}
                        </div>
                      </div>
                    </div>

                    <div className="p-3 bg-slate-950/70 rounded-xl border border-slate-800 text-xs space-y-2 text-start">
                      <div className="flex items-center justify-between text-slate-300 font-medium">
                        <span>{language === 'ar' ? 'شبكة التحويل المؤسسية' : 'Enterprise Switching Backbone'}</span>
                        <span className="text-cyan-400 font-mono" dir="ltr">100 Gbps Core</span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <div className="w-4/5 h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
                      </div>
                      <div className="flex items-center justify-between text-[11px] text-slate-400">
                        <span>{language === 'ar' ? 'ضمان انعدام فقدان الحزم' : 'Zero Packet Loss SLA'}</span>
                        <span className="text-emerald-400" dir="ltr">99.999% Guaranteed</span>
                      </div>
                    </div>
                  </>
                )}

                {activeTelemetryTab === 'security' && (
                  <>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-start">
                        <div className="text-[10px] text-slate-400 flex items-center justify-between">
                          <span>{language === 'ar' ? 'درع الحماية' : 'Threat Shield'}</span>
                          <Lock className="w-3 h-3 text-blue-400 shrink-0" />
                        </div>
                        <div className="text-xl font-mono font-bold text-blue-400 mt-1">
                          Zero-Trust
                        </div>
                        <div className="text-[10px] text-emerald-400 mt-0.5">
                          {language === 'ar' ? 'التقسيم الشبكي الدقيق نشط' : 'Microsegmentation Active'}
                        </div>
                      </div>

                      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-start">
                        <div className="text-[10px] text-slate-400 flex items-center justify-between">
                          <span>{language === 'ar' ? 'جاهزية تدقيق NESA' : 'NESA Audit Ready'}</span>
                          <CheckCircle2 className="w-3 h-3 text-cyan-400 shrink-0" />
                        </div>
                        <div className="text-xl font-mono font-bold text-white mt-1" dir="ltr">
                          100% Score
                        </div>
                        <div className="text-[10px] text-cyan-400 mt-0.5">
                          {language === 'ar' ? 'المعيار الاتحادي الإماراتي' : 'UAE Federal Benchmark'}
                        </div>
                      </div>
                    </div>

                    <div className="p-3 bg-slate-950/70 rounded-xl border border-slate-800 text-xs space-y-1.5 text-start">
                      <div className="flex items-center justify-between text-slate-300 font-medium">
                        <span>{language === 'ar' ? 'حماية الذكاء الاصطناعي NGFW' : 'NGFW AI Threat Prevention'}</span>
                        <span className="text-emerald-400">{language === 'ar' ? 'متزامن' : 'Synchronized'}</span>
                      </div>
                      <p className="text-[11px] text-slate-400">
                        {language === 'ar' 
                          ? 'مراقبة أمنية مباشرة 24/7 من مركز عمليات الأمن مع عزل تلقائي لبرمجيات الفدية والهجمات السيبرانية.'
                          : '24/7 Real-Time SOC telemetry with automated isolate-and-quarantine for malware and ransomware payloads.'}
                      </p>
                    </div>
                  </>
                )}

                {activeTelemetryTab === 'cloud' && (
                  <>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-start">
                        <div className="text-[10px] text-slate-400 flex items-center justify-between">
                          <span>{language === 'ar' ? 'سيادة البيانات' : 'Data Sovereignty'}</span>
                          <Server className="w-3 h-3 text-emerald-400 shrink-0" />
                        </div>
                        <div className="text-xl font-mono font-bold text-emerald-400 mt-1">
                          {language === 'ar' ? 'داخل الدولة' : 'UAE In-Country'}
                        </div>
                        <div className="text-[10px] text-slate-400 mt-0.5">
                          {language === 'ar' ? 'حظر خروج البيانات خارج الحدود' : 'Zero Out-of-Border Route'}
                        </div>
                      </div>

                      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-start">
                        <div className="text-[10px] text-slate-400 flex items-center justify-between">
                          <span>{language === 'ar' ? 'زمن التعافي من الكوارث (RTO)' : 'Disaster Recovery RTO'}</span>
                          <Cpu className="w-3 h-3 text-sky-400 shrink-0" />
                        </div>
                        <div className="text-xl font-mono font-bold text-sky-400 mt-1" dir="ltr">
                          &lt; 15 Mins
                        </div>
                        <div className="text-[10px] text-emerald-400 mt-0.5">
                          {language === 'ar' ? 'تحويل تشغيلي تلقائي' : 'Automated Failover'}
                        </div>
                      </div>
                    </div>

                    <div className="p-3 bg-slate-950/70 rounded-xl border border-slate-800 text-xs space-y-1.5 text-start">
                      <div className="flex items-center justify-between text-slate-300 font-medium">
                        <span>{language === 'ar' ? 'سحابة Nutanix & Azure المعتمدة' : 'Nutanix & Azure Landing Zone'}</span>
                        <span className="text-cyan-400">{language === 'ar' ? 'معتمد' : 'Certified'}</span>
                      </div>
                      <p className="text-[11px] text-slate-400">
                        {language === 'ar'
                          ? 'نسخ متطابق فوري مع خزائن غير قابلة للتعديل للحماية من برمجيات الفدية لقواعد البيانات الحيوية.'
                          : 'Continuous snapshot replication with immutable ransomware vaults for mission-critical databases.'}
                      </p>
                    </div>
                  </>
                )}
              </div>

              {/* Direct Quick Action in Hero Card with Logical Spacing */}
              <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-400">
                  {language === 'ar' ? 'هل تحتاج إلى زيارة هندسية ميدانية؟' : 'Need on-site engineering dispatch?'}
                </span>
                <button
                  type="button"
                  onClick={() => onOpenConsultation()}
                  className="text-cyan-400 hover:text-cyan-300 font-bold flex items-center space-x-1 rtl:space-x-reverse"
                >
                  <span>{language === 'ar' ? 'حجز مسح ميداني' : 'Book Site Survey'}</span>
                  <ChevronRight className={`w-3.5 h-3.5 shrink-0 ${isRTL ? 'rotate-180' : ''}`} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Strategic Global Technology Partners Strip */}
        <div className="mt-16 pt-8 border-t border-slate-800/80 text-center">
          <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">
            {strings.partners.sectionTitle}
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 items-center">
            {PARTNERS.slice(0, 6).map((partner, index) => (
              <div
                key={index}
                className="p-3 rounded-xl bg-slate-900/50 border border-slate-800/80 hover:border-cyan-500/40 hover:bg-slate-900 text-center transition-all group"
              >
                <div className="text-xs font-bold text-slate-200 group-hover:text-cyan-400 transition-colors">
                  {partner.name}
                </div>
                <div className="text-[10px] text-slate-400 line-clamp-1 mt-0.5">
                  {partner.category}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
