'use client';

import React, { useState } from 'react';
import { ShieldCheck, Award, Sparkles, CheckCircle2 } from 'lucide-react';
import { PARTNERS } from '@/lib/data';

export function TechnologyPartners() {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const categories = ['all', 'Networking & Security', 'Server, Storage & HCI', 'Cloud & Modern Work', 'Structured Cabling', 'IP CCTV & Surveillance'];

  const filteredPartners = selectedFilter === 'all'
    ? PARTNERS
    : PARTNERS.filter(p => p.category.toLowerCase().includes(selectedFilter.toLowerCase()) || p.category === selectedFilter);

  return (
    <section className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>Global OEM Technology Alliances</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Direct Tier-1 Partnerships & OEM Certifications
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            We partner directly with leading global hardware and cybersecurity leaders to guarantee genuine manufacturer warranties, rapid parts replacement, and direct engineering escalation.
          </p>
        </div>

        {/* Filter Badges */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedFilter(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                selectedFilter === cat
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'bg-slate-950 border border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              {cat === 'all' ? 'All Technology Alliances' : cat}
            </button>
          ))}
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredPartners.map((partner, idx) => (
            <div
              key={idx}
              className="p-5 bg-slate-950/90 border border-slate-800 rounded-2xl flex flex-col justify-between space-y-3 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/5 transition-all group"
            >
              <div>
                <div className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider mb-1">
                  {partner.category}
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {partner.name}
                </h3>
              </div>

              <div className="pt-2 border-t border-slate-900 flex items-center space-x-1.5 text-xs text-slate-300 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span className="text-[11px]">{partner.tier}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
