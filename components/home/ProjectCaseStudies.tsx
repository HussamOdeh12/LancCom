'use client';

import React, { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Server,
  Layers
} from 'lucide-react';
import { CASE_STUDIES, CaseStudy } from '@/lib/data';

interface ProjectCaseStudiesProps {
  onOpenConsultation: () => void;
}

export function ProjectCaseStudies({ onOpenConsultation }: ProjectCaseStudiesProps) {
  const [selectedCase, setSelectedCase] = useState<CaseStudy>(CASE_STUDIES[0]);

  return (
    <section id="case-studies" className="py-20 bg-slate-950 text-white border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Proven UAE Enterprise Delivery</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Featured Enterprise Implementations & Case Studies
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Real-world results delivered for Abu Dhabi government entities, premier commercial towers, and multi-branch financial organizations.
          </p>
        </div>

        {/* 3 Case Study Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {CASE_STUDIES.map((c) => {
            const isSelected = selectedCase.id === c.id;
            return (
              <div
                key={c.id}
                onClick={() => setSelectedCase(c)}
                className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between border ${
                  isSelected
                    ? 'bg-slate-900 border-cyan-500 shadow-xl shadow-cyan-500/10 ring-1 ring-cyan-500/40'
                    : 'bg-slate-950/70 hover:bg-slate-900 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-cyan-950 border border-cyan-800/60 text-cyan-300">
                      {c.industry}
                    </span>
                    <div className="flex items-center space-x-1 text-xs text-slate-400">
                      <MapPin className="w-3 h-3 text-cyan-400" />
                      <span>{c.location}</span>
                    </div>
                  </div>

                  <div className="text-xs text-slate-400 font-medium">{c.clientType}</div>

                  <h3 className="text-base font-bold text-white leading-snug">
                    {c.title}
                  </h3>

                  <p className="text-xs text-slate-400 line-clamp-2">
                    {c.challenge}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="text-[11px] font-semibold text-cyan-400">View Full Impact</span>
                  <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Breakdown for Selected Case Study */}
        <div className="bg-slate-900/95 border border-slate-800 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl space-y-6">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between pb-6 border-b border-slate-800 gap-4">
            <div>
              <div className="flex items-center space-x-2 text-xs font-bold text-cyan-400 uppercase tracking-wider">
                <span>{selectedCase.clientType}</span>
                <span>•</span>
                <span>{selectedCase.location}</span>
              </div>
              <h3 className="text-2xl font-bold text-white mt-1">
                {selectedCase.title}
              </h3>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {selectedCase.techStack.map((tech, idx) => (
                <span key={idx} className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-xs font-semibold text-slate-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Operational Challenge:
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-950 p-4 rounded-xl border border-slate-800">
                {selectedCase.challenge}
              </p>

              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider pt-2">
                LandCom Engineered Solution:
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-950 p-4 rounded-xl border border-slate-800">
                {selectedCase.solution}
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Verified Measurable Outcomes:
              </h4>
              <div className="space-y-2.5">
                {selectedCase.results.map((res, rIdx) => (
                  <div key={rIdx} className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 flex items-start space-x-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-200 font-medium">{res}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between border-t border-slate-800 gap-4">
            <span className="text-xs text-slate-400">
              Need a similar architecture designed for your organization?
            </span>
            <button
              type="button"
              onClick={onOpenConsultation}
              className="px-6 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs sm:text-sm rounded-xl transition-all shadow-lg shadow-cyan-500/20 flex items-center space-x-2"
            >
              <span>Schedule Architecture Review</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
