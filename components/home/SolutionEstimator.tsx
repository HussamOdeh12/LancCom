'use client';

import React, { useState } from 'react';
import { 
  Calculator, 
  Server, 
  ShieldCheck, 
  Cable, 
  Cloud, 
  Wifi, 
  Headset, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  Sparkles,
  FileSpreadsheet
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface SolutionEstimatorProps {
  onOpenConsultation: (serviceId?: string) => void;
}

export function SolutionEstimator({ onOpenConsultation }: SolutionEstimatorProps) {
  const { strings, language, isRTL } = useLanguage();
  const [scale, setScale] = useState<'small' | 'medium' | 'enterprise' | 'campus'>('enterprise');
  const [industry, setIndustry] = useState<string>('corporate');
  const [selectedNeeds, setSelectedNeeds] = useState<string[]>([
    'cabling',
    'cybersecurity',
    'networking',
    'amc'
  ]);

  const toggleNeed = (id: string) => {
    if (selectedNeeds.includes(id)) {
      if (selectedNeeds.length > 1) {
        setSelectedNeeds(selectedNeeds.filter(n => n !== id));
      }
    } else {
      setSelectedNeeds([...selectedNeeds, id]);
    }
  };

  const calculateEstimate = () => {
    if (language === 'ar') {
      let baseTime = '3 - 5 أسابيع';
      let hardwareNodes = 'بنية Dell / Fortinet HA Core عالية التوافر';
      let cablingDrops = '150 - 300 نقطة Cat6A معتمدة ومختبرة';
      let compliance = 'متوافق مع معايير NESA و ISO 27001 للأمن السيبراني';

      if (scale === 'small') {
        baseTime = '1 - 2 أسابيع';
        hardwareNodes = 'جدار ناري موحد NGFW + محولات PoE ذكية';
        cablingDrops = '25 - 75 نقطة شبكة Cat6A';
        compliance = 'المعايير المعتمدة للمؤسسات التجارية في الإمارات';
      } else if (scale === 'medium') {
        baseTime = '2 - 4 أسابيع';
        hardwareNodes = 'جدران نارية مكررة + محولات 10G Core Switches';
        cablingDrops = '80 - 200 نقطة Cat6A + خطوط OM4 Fiber';
        compliance = 'معايير NESA و SIRA المعتمدة';
      } else if (scale === 'campus') {
        baseTime = '6 - 12 أسبوعاً (مشروع متكامل على مراحل)';
        hardwareNodes = 'عقد Nutanix HCI + شبكة 100G Spine-Leaf + SOC';
        cablingDrops = '500+ نقطة شبكة + عمود فقري ألياف OS2 مكرر';
        compliance = 'معايير الجهات الحكومية / ADDA / مركز المتابعة والتحكم MCC';
      }

      return {
        timeline: baseTime,
        hardware: hardwareNodes,
        cabling: cablingDrops,
        compliance,
        selectedCount: selectedNeeds.length
      };
    }

    let baseTime = '3 - 5 Weeks';
    let hardwareNodes = 'Tier-1 Dell / Fortinet HA Core';
    let cablingDrops = '150 - 300 Certified Cat6A Drops';
    let compliance = 'NESA Information Assurance & ISO 27001 Ready';

    if (scale === 'small') {
      baseTime = '1 - 2 Weeks';
      hardwareNodes = 'Unified NGFW + PoE Access Fabric';
      cablingDrops = '25 - 75 Certified Cat6A Drops';
      compliance = 'Standard UAE Business Baseline';
    } else if (scale === 'medium') {
      baseTime = '2 - 4 Weeks';
      hardwareNodes = 'Redundant Edge Firewalls + 10G Core Switches';
      cablingDrops = '80 - 200 Cat6A Drops + OM4 Risers';
      compliance = 'NESA & SIRA Security Baseline';
    } else if (scale === 'campus') {
      baseTime = '6 - 12 Weeks (Phased Turnkey)';
      hardwareNodes = 'Nutanix HCI Multi-Node + 100G Spine-Leaf + AI SOC';
      cablingDrops = '500+ Drops + Redundant OS2 Fiber Backbone';
      compliance = 'Full Government / ADDA / MCC Certification';
    }

    return {
      timeline: baseTime,
      hardware: hardwareNodes,
      cabling: cablingDrops,
      compliance,
      selectedCount: selectedNeeds.length
    };
  };

  const estimate = calculateEstimate();

  const scaleOptions = [
    { id: 'small', label: language === 'ar' ? 'مكتب / فرع' : 'Office Branch', sub: language === 'ar' ? 'أقل من 30 مستخدماً' : '< 30 Users' },
    { id: 'medium', label: language === 'ar' ? 'منشأة متوسطة' : 'Mid Facility', sub: language === 'ar' ? '30 – 100 مستخدم' : '30 – 100 Users' },
    { id: 'enterprise', label: language === 'ar' ? 'مقر مؤسسي' : 'Enterprise HQ', sub: language === 'ar' ? '100 – 400 مستخدم' : '100 – 400 Users' },
    { id: 'campus', label: language === 'ar' ? 'مجمع / برج' : 'Campus / Tower', sub: language === 'ar' ? '500+ مستخدم / مركز بيانات' : '500+ Users / DC' },
  ];

  const modulesList = [
    { id: 'cabling', title: language === 'ar' ? 'التمديدات الهيكلية (Cat6A / ألياف ضوئية)' : 'Structured Cabling (Cat6A / Fiber)', icon: <Cable className="w-4 h-4 text-teal-400" /> },
    { id: 'cybersecurity', title: language === 'ar' ? 'جدران نارية Fortinet / Palo Alto ومركز SOC' : 'Fortinet / Palo Alto Firewalls & SOC', icon: <ShieldCheck className="w-4 h-4 text-blue-400" /> },
    { id: 'networking', title: language === 'ar' ? 'شبكات Wi-Fi 6/7 ومحولات التوزيع الرئيسية' : 'High-Density Wi-Fi 6/7 & Core Switches', icon: <Wifi className="w-4 h-4 text-indigo-400" /> },
    { id: 'cloud', title: language === 'ar' ? 'السحابة الهجينة وحلول Veeam للتعافي من الكوارث' : 'Hybrid Cloud & Veeam Disaster Recovery', icon: <Cloud className="w-4 h-4 text-sky-400" /> },
    { id: 'servers', title: language === 'ar' ? 'خوادم Dell / HPE وتخزين SAN عالي السرعة' : 'Dell / HPE Servers & SAN Storage', icon: <Server className="w-4 h-4 text-cyan-400" /> },
    { id: 'amc', title: language === 'ar' ? 'عقود الصيانة السنوية (AMC) وإدارة مركز 24/7' : '24/7 SLA Annual Maintenance (AMC)', icon: <Headset className="w-4 h-4 text-emerald-400" /> },
  ];

  return (
    <section id="estimator" className="py-20 bg-slate-900 text-white relative text-start">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-3 py-1 rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5 shrink-0" />
            <span>{language === 'ar' ? 'حاسبة النطاق التفاعلية' : 'Interactive Scope Calculator'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            {language === 'ar' ? 'حاسبة تقدير نطاق البنية التحتية والأنظمة التقنية' : 'IT Infrastructure & Systems Scope Estimator'}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {language === 'ar' 
              ? 'حدد مواصفات منشأتكم لمعاينة مكونات البنية التحتية المقترحة، والجداول الزمنية للتسليم، والتوافق مع المعايير التنظيمية بدولة الإمارات.'
              : 'Customize your facility parameters to preview recommended architecture components, delivery timelines, and regulatory alignment.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left 7 cols: Interactive Controls */}
          <div className="lg:col-span-7 bg-slate-950/80 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 text-start">
            {/* Step 1: Scale Selection */}
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                {language === 'ar' ? '١. حدد حجم المنشأة أو المؤسسة:' : '1. Select Organization / Facility Scale:'}
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {scaleOptions.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setScale(item.id as any)}
                    className={`p-3 rounded-xl border text-center transition-all ${
                      scale === item.id
                        ? 'bg-cyan-500/10 border-cyan-500 text-cyan-300 shadow-md shadow-cyan-500/10'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-white'
                    }`}
                  >
                    <div className="text-xs font-bold">{item.label}</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">{item.sub}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Industry Context */}
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                {language === 'ar' ? '٢. القطاع المهني:' : '2. Industry Focus:'}
              </label>
              <select
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-cyan-500"
              >
                <option value="corporate">{language === 'ar' ? 'الشركات والمؤسسات التجارية' : 'Commercial Corporate & Enterprise'}</option>
                <option value="government">{language === 'ar' ? 'الجهات الحكومية وشبه الحكومية' : 'Government & Semi-Government Entity'}</option>
                <option value="oilgas">{language === 'ar' ? 'الطاقة والنفط والغاز والمناطق الصناعية' : 'Energy, Oil & Gas / Industrial'}</option>
                <option value="healthcare">{language === 'ar' ? 'الرعاية الصحية والمستشفيات (معايير ADHICS)' : 'Healthcare & Medical Centers (ADHICS)'}</option>
                <option value="hospitality">{language === 'ar' ? 'الضيافة والعقارات (معايير SIRA / MCC)' : 'Real Estate & Hospitality (MCC / SIRA)'}</option>
                <option value="education">{language === 'ar' ? 'التعليم والجامعات والمجمعات الأكاديمية' : 'Education & Academic Campus'}</option>
              </select>
            </div>

            {/* Step 3: Required Solution Modules */}
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                {language === 'ar' ? '٣. اختر وحدات البنية التحتية المطلوبة:' : '3. Choose Required Infrastructure Modules:'}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {modulesList.map((mod) => {
                  const isChecked = selectedNeeds.includes(mod.id);
                  return (
                    <button
                      key={mod.id}
                      type="button"
                      onClick={() => toggleNeed(mod.id)}
                      className={`p-3 rounded-xl border text-start flex items-center justify-between transition-all ${
                        isChecked
                          ? 'bg-slate-900 border-cyan-500 text-white'
                          : 'bg-slate-900/50 border-slate-800 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center space-x-2.5 rtl:space-x-reverse">
                        <div className="p-1.5 rounded-lg bg-slate-950 border border-slate-800 shrink-0">
                          {mod.icon}
                        </div>
                        <span className="text-xs font-semibold">{mod.title}</span>
                      </div>
                      <div className={`w-4 h-4 rounded flex items-center justify-center border shrink-0 ${
                        isChecked ? 'bg-cyan-500 border-cyan-500 text-slate-950' : 'border-slate-700'
                      }`}>
                        {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right 5 cols: Live Scope Estimation Output */}
          <div className="lg:col-span-5 bg-gradient-to-b from-slate-950 to-slate-900 border border-cyan-500/30 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl text-start">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <Sparkles className="w-5 h-5 text-cyan-400 shrink-0" />
                <span className="text-sm font-bold text-white">
                  {language === 'ar' ? 'المخطط الهندسي التقديري' : 'Estimated Architecture Blueprint'}
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 border border-cyan-800 text-cyan-300 font-bold">
                {estimate.selectedCount} {language === 'ar' ? 'وحدات محددة' : 'Modules Selected'}
              </span>
            </div>

            <div className="space-y-4 text-xs">
              <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-1 text-start">
                <span className="text-[10px] text-slate-500 uppercase font-bold">
                  {language === 'ar' ? 'الخوادم والبنية الأساسية المقترحة:' : 'Recommended Compute & Edge:'}
                </span>
                <div className="font-semibold text-cyan-300">{estimate.hardware}</div>
              </div>

              <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-1 text-start">
                <span className="text-[10px] text-slate-500 uppercase font-bold">
                  {language === 'ar' ? 'نطاق التمديدات والكابلات:' : 'Structured Cabling Scope:'}
                </span>
                <div className="font-semibold text-slate-200">{estimate.cabling}</div>
              </div>

              <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-1 text-start">
                <div className="flex items-center space-x-1.5 rtl:space-x-reverse text-emerald-400 font-bold">
                  <Clock className="w-3.5 h-3.5 shrink-0" />
                  <span>{language === 'ar' ? 'الجدول الزمني المقترح للتنفيذ:' : 'Turnkey Deployment Timeline:'}</span>
                </div>
                <div className="font-semibold text-white">{estimate.timeline}</div>
              </div>

              <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-1 text-start">
                <span className="text-[10px] text-slate-500 uppercase font-bold">
                  {language === 'ar' ? 'المعايير واللوائح التنظيمية:' : 'Regulatory Standards:'}
                </span>
                <div className="font-medium text-slate-300">{estimate.compliance}</div>
              </div>
            </div>

            <div className="pt-2 text-start">
              <button
                type="button"
                onClick={() => onOpenConsultation()}
                className="w-full py-3.5 bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs sm:text-sm rounded-xl shadow-xl shadow-cyan-500/20 transition-all flex items-center justify-center space-x-2 rtl:space-x-reverse"
              >
                <FileSpreadsheet className="w-4 h-4 shrink-0" />
                <span>{language === 'ar' ? 'طلب جدول الكميات والأسعار (BOQ)' : 'Request Custom BOQ & Pricing'}</span>
                <ArrowRight className={`w-4 h-4 shrink-0 ${isRTL ? 'rotate-180' : ''}`} />
              </button>
              <p className="text-[10px] text-center text-slate-500 mt-2">
                {language === 'ar' 
                  ? 'يشمل المعاينة الميدانية المجانية والتصميم الهندسي الأولي في أبوظبي.'
                  : 'Includes free on-site survey and preliminary engineering design in Abu Dhabi.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
