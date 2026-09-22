'use client';

import React, { useState } from 'react';
import { 
  Building2, 
  Landmark, 
  Flame, 
  Stethoscope, 
  Hotel, 
  GraduationCap, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { INDUSTRIES, IndustrySolution } from '@/lib/data';

interface IndustryShowcaseProps {
  onOpenConsultation: () => void;
}

export function IndustryShowcase({ onOpenConsultation }: IndustryShowcaseProps) {
  const [selectedIndustry, setSelectedIndustry] = useState<IndustrySolution>(INDUSTRIES[0]);

  const getIndustryIcon = (iconName: string, className = "w-5 h-5") => {
    switch (iconName) {
      case 'Landmark': return <Landmark className={className} />;
      case 'Flame': return <Flame className={className} />;
      case 'Building2': return <Building2 className={className} />;
      case 'Stethoscope': return <Stethoscope className={className} />;
      case 'Hotel': return <Hotel className={className} />;
      case 'GraduationCap': return <GraduationCap className={className} />;
      default: return <Building2 className={className} />;
    }
  };

  return (
    <section id="industries" className="py-20 bg-slate-950 text-white border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Sector-Specific IT Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Tailored Solutions for Strategic UAE Industries
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Every sector has unique regulatory mandates, latency constraints, and operational realities. Explore our specialized domain architectures.
          </p>
        </div>

        {/* Industry Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-10">
          {INDUSTRIES.map((ind) => {
            const isSelected = selectedIndustry.id === ind.id;
            return (
              <button
                key={ind.id}
                type="button"
                onClick={() => setSelectedIndustry(ind)}
                className={`p-3.5 rounded-xl border text-left transition-all flex flex-col justify-between space-y-2 ${
                  isSelected
                    ? 'bg-slate-900 border-cyan-500 text-white shadow-lg shadow-cyan-500/10 ring-1 ring-cyan-500/50'
                    : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                <div className={`p-2 rounded-lg inline-block w-fit ${
                  isSelected ? 'bg-cyan-500 text-slate-950' : 'bg-slate-900 text-cyan-400'
                }`}>
                  {getIndustryIcon(ind.icon)}
                </div>
                <div className="text-xs font-bold line-clamp-1">{ind.name}</div>
              </button>
            );
          })}
        </div>

        {/* Selected Industry Detail Card */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left 7 cols: Profile & Challenges Solved */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                  {selectedIndustry.tagline}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  {selectedIndustry.name}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {selectedIndustry.description}
                </p>
              </div>

              {/* Specific Challenges Solved */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Operational Challenges Solved:
                </h4>
                <div className="space-y-2">
                  {selectedIndustry.challengesSolved.map((challenge, cIdx) => (
                    <div key={cIdx} className="p-3 bg-slate-950 rounded-xl border border-slate-800/80 flex items-start space-x-2.5">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-200 font-medium">{challenge}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right 5 cols: Key Solutions & Compliance Badges */}
            <div className="lg:col-span-5 space-y-6">
              {/* Proven Impact Highlight */}
              <div className="p-4 bg-gradient-to-r from-cyan-950/60 to-blue-950/60 border border-cyan-500/30 rounded-2xl space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400">
                  Verified Industry Impact:
                </span>
                <div className="text-lg font-bold text-white">
                  {selectedIndustry.impactMetric}
                </div>
              </div>

              {/* Key Solutions Checklist */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Engineered Deployments:
                </h4>
                <div className="space-y-2">
                  {selectedIndustry.keySolutions.map((sol, sIdx) => (
                    <div key={sIdx} className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs text-slate-300 font-medium">
                      {sol}
                    </div>
                  ))}
                </div>
              </div>

              {/* Compliance Badges */}
              <div className="space-y-2">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  Mandatory Compliance Adherence:
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedIndustry.compliance.map((comp, compIdx) => (
                    <span
                      key={compIdx}
                      className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-700 text-xs text-cyan-300 font-semibold"
                    >
                      {comp}
                    </span>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={onOpenConsultation}
                className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs sm:text-sm rounded-xl shadow-lg shadow-cyan-500/20 transition-all flex items-center justify-center space-x-2"
              >
                <span>Request {selectedIndustry.name.split('&')[0]} Architecture</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
