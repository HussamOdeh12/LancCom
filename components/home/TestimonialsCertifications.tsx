'use client';

import React from 'react';
import { 
  Award, 
  ShieldCheck, 
  CheckCircle2, 
  Quote, 
  Star,
  FileCheck,
  Lock,
  Building
} from 'lucide-react';
import { COMPANY_INFO } from '@/lib/data';

export function TestimonialsCertifications() {
  const testimonials = [
    {
      quote: "LandCom transformed our enterprise infrastructure with a flawless Nutanix and Fortinet zero-trust deployment. Their Abu Dhabi engineering team was on-site, responsive, and completed the migration ahead of our deadline with zero business interruption.",
      author: "Eng. Humaid Al Suwaidi",
      role: "Chief Information Officer (CIO)",
      organization: "Abu Dhabi Infrastructure Authority",
      sector: "Government & Utilities"
    },
    {
      quote: "Managing the ELV and high-density network cabling for our 40-floor commercial tower was complex. LandCom delivered 3,500+ CommScope certified drops and secured first-pass Abu Dhabi MCC / SIRA approval without delay.",
      author: "Tariq Mansoor",
      role: "VP of Project Development",
      organization: "Apex Real Estate Holdings",
      sector: "Commercial Real Estate"
    },
    {
      quote: "Their 24/7 Managed NOC and Annual Maintenance Contract gives us complete peace of mind. We have experienced 99.99% uptime across all our branch offices in the UAE, with proactive issue resolution before our branches ever feel an impact.",
      author: "Sarah Al Nuaimi",
      role: "Head of IT Operations",
      organization: "Emirates Premier Financial Group",
      sector: "Banking & Finance"
    }
  ];

  return (
    <section className="py-20 bg-slate-950 text-white border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Compliance & Verified Trust</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Certified Quality & Proven UAE Client Satisfaction
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Delivering according to audited global quality standards and strict UAE regulatory frameworks.
          </p>
        </div>

        {/* 4 Official Certification & Compliance Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {COMPANY_INFO.certifications.map((c, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 text-center space-y-3 hover:border-cyan-500/40 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mx-auto">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">{c.title}</h3>
                <p className="text-xs text-slate-400 mt-1">{c.desc}</p>
              </div>
              <div className="text-[10px] font-semibold text-emerald-400 uppercase tracking-wider">
                Audited & Certified
              </div>
            </div>
          ))}
        </div>

        {/* Client Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 flex flex-col justify-between space-y-6 relative group hover:border-slate-700 transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-1 text-cyan-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-cyan-400 text-cyan-400" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-slate-700" />
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80">
                <div className="text-sm font-bold text-white">{t.author}</div>
                <div className="text-xs text-cyan-400 font-medium">{t.role}</div>
                <div className="text-[11px] text-slate-400 mt-0.5">{t.organization} • {t.sector}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
