'use client';

import React, { useState } from 'react';
import { 
  Layers, 
  ShieldAlert, 
  Server, 
  Building, 
  CheckCircle2, 
  ArrowRight, 
  ExternalLink,
  Cpu,
  Lock,
  Wifi,
  FileText
} from 'lucide-react';
import { ARCHITECTURES, ArchitectureBlueprint } from '@/lib/data';

interface ArchitectureExplorerProps {
  onOpenConsultation: () => void;
}

export function ArchitectureExplorer({ onOpenConsultation }: ArchitectureExplorerProps) {
  const [selectedArch, setSelectedArch] = useState<ArchitectureBlueprint>(ARCHITECTURES[0]);

  return (
    <section id="architectures" className="py-20 bg-slate-950 text-white border-y border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5" />
              <span>Enterprise Reference Blueprints</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Interactive Systems Architecture Explorer
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              Explore battle-tested system blueprints designed to meet strict UAE regulatory, performance, and multi-tenant security demands.
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-xs text-slate-500 hidden sm:inline">Select Architecture:</span>
            <div className="flex flex-wrap gap-2">
              {ARCHITECTURES.map((arch) => (
                <button
                  key={arch.id}
                  type="button"
                  onClick={() => setSelectedArch(arch)}
                  className={`px-3.5 py-2 text-xs font-bold rounded-xl transition-all ${
                    selectedArch.id === arch.id
                      ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/30'
                      : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  {arch.id === 'zero-trust-security' && 'Zero-Trust SOC'}
                  {arch.id === 'hybrid-cloud-dc' && 'Hybrid Cloud DC'}
                  {arch.id === 'smart-campus-elv' && 'Campus ELV & BMS'}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Blueprint Viewer Card */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl space-y-8">
          {/* Blueprint Title & Description Banner */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between pb-6 border-b border-slate-800 gap-4">
            <div>
              <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                {selectedArch.subtitle}
              </div>
              <h3 className="text-2xl font-bold text-white mt-1">
                {selectedArch.title}
              </h3>
            </div>
            <div className="px-3.5 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs font-medium text-slate-300 flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
              <span>Regulatory Alignment: <strong>{selectedArch.complianceAlignment}</strong></span>
            </div>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed max-w-4xl">
            {selectedArch.description}
          </p>

          {/* 3-Tier Layer Topology */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {selectedArch.layers.map((layer, idx) => (
              <div
                key={idx}
                className="bg-slate-950 rounded-2xl p-6 border border-slate-800 flex flex-col justify-between relative overflow-hidden group hover:border-cyan-500/40 transition-colors"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-900 text-cyan-400 border border-slate-800 uppercase tracking-wider">
                      Tier 0{idx + 1}
                    </span>
                    <span className="text-xs text-slate-500 font-mono">Layer {idx + 1}</span>
                  </div>

                  <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {layer.name}
                  </h4>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {layer.description}
                  </p>
                </div>

                <div className="pt-5 mt-4 border-t border-slate-900 space-y-2">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                    Core Components:
                  </span>
                  <div className="space-y-1.5">
                    {layer.components.map((comp, cIdx) => (
                      <div key={cIdx} className="text-xs text-slate-300 flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0"></span>
                        <span className="font-medium">{comp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Value Outcomes & Action Bar */}
          <div className="p-6 bg-slate-950 rounded-2xl border border-slate-800/90 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="space-y-2 w-full lg:w-auto">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Measurable Business Outcomes:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {selectedArch.benefits.map((benefit, bIdx) => (
                  <div key={bIdx} className="flex items-start space-x-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={onOpenConsultation}
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs sm:text-sm rounded-xl shadow-lg shadow-cyan-500/20 shrink-0 transition-all flex items-center space-x-2"
            >
              <span>Deploy This Architecture</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
