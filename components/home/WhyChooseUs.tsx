'use client';

import React from 'react';
import { 
  ShieldCheck, 
  MapPin, 
  Award, 
  Clock, 
  Cpu, 
  FileCheck2, 
  CheckCircle2, 
  ArrowRight,
  Headset,
  Sparkles
} from 'lucide-react';
import { COMPANY_INFO } from '@/lib/data';

interface WhyChooseUsProps {
  onOpenConsultation: () => void;
}

export function WhyChooseUs({ onOpenConsultation }: WhyChooseUsProps) {
  const pillars = [
    {
      icon: <MapPin className="w-6 h-6 text-cyan-400" />,
      title: 'Local Abu Dhabi HQ & Rapid On-Site SLA',
      desc: 'Strategically headquartered in Abu Dhabi with local warehouse stock, certified engineers on standby, and guaranteed 2-hour on-site emergency dispatch across the Emirate.',
    },
    {
      icon: <Award className="w-6 h-6 text-blue-400" />,
      title: 'Vendor-Certified Systems Engineers',
      desc: 'Our technical team holds elite certifications across Cisco, Microsoft Azure, Fortinet NSE, Dell Technologies, VMware, and CommScope Systimax installations.',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
      title: 'Strict UAE Regulatory & Cyber Compliance',
      desc: 'Architectures engineered specifically to adhere to UAE NESA Information Assurance, Abu Dhabi Digital Authority (ADDA), SIRA/MCC surveillance, and in-country data residency.',
    },
    {
      icon: <FileCheck2 className="w-6 h-6 text-teal-400" />,
      title: '25-Year Structured Cabling Warranty',
      desc: 'Authorized partner for CommScope Systimax and Schneider Electric, delivering 100% Fluke/OTDR certified physical infrastructure with 25-year manufacturer-backed warranties.',
    },
    {
      icon: <Cpu className="w-6 h-6 text-indigo-400" />,
      title: 'Full Turnkey End-to-End Delivery',
      desc: 'From initial site surveys and BOQ estimation to procurement, racking, configuration, user training, and civil security sign-off — one accountable partner.',
    },
    {
      icon: <Headset className="w-6 h-6 text-cyan-300" />,
      title: '24/7/365 Dedicated Enterprise NOC',
      desc: 'Round-the-clock proactive monitoring, automated patch management, and tailored Annual Maintenance Contracts (AMC) safeguarding your mission-critical operations.',
    },
  ];

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The LandCom Enterprise Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Why UAE Government & Corporate Leaders Choose LandCom
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            We combine world-class engineering standards with deep regional expertise, delivering resilient IT infrastructure backed by guaranteed SLAs and local accountability.
          </p>
        </div>

        {/* 6 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-slate-950/80 border border-slate-800/80 hover:border-cyan-500/40 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/5 group flex flex-col justify-between"
            >
              <div>
                <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 inline-block mb-4 group-hover:scale-105 group-hover:border-cyan-500/30 transition-all">
                  {pillar.icon}
                </div>
                <h3 className="text-base font-bold text-white mb-2.5 group-hover:text-cyan-300 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-900/80 flex items-center text-[11px] font-semibold text-cyan-400">
                <CheckCircle2 className="w-3.5 h-3.5 mr-1.5 text-cyan-400" />
                <span>Verified SLA Standard</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust Metric Bar */}
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">ISO 9001:2015 & ISO 27001:2022 Certified Delivery</div>
              <div className="text-xs text-slate-400">Audited quality management and information security frameworks across all UAE operations.</div>
            </div>
          </div>

          <button
            type="button"
            onClick={onOpenConsultation}
            className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-xl border border-slate-700 transition-colors flex items-center space-x-2 shrink-0"
          >
            <span>Speak with a Principal Architect</span>
            <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
          </button>
        </div>
      </div>
    </section>
  );
}
