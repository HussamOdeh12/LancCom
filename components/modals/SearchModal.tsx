'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { Search, X, Server, ArrowRight } from 'lucide-react';
import { SERVICES, INDUSTRIES, ARCHITECTURES } from '@/lib/data';
import { useLanguage } from '@/context/LanguageContext';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectService?: (id: string) => void;
}

export function SearchModal({ isOpen, onClose, onSelectService }: SearchModalProps) {
  const { strings, language, isRTL } = useLanguage();
  const [query, setQuery] = useState('');

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

  const searchResults = useMemo(() => {
    if (!query.trim()) {
      return {
        services: SERVICES.slice(0, 3),
        industries: INDUSTRIES.slice(0, 2),
        architectures: ARCHITECTURES.slice(0, 2),
        isFiltered: false
      };
    }

    const q = query.toLowerCase();
    const matchedServices = SERVICES.filter(s => 
      s.title.toLowerCase().includes(q) ||
      s.shortDesc.toLowerCase().includes(q) ||
      s.features.some(f => f.toLowerCase().includes(q)) ||
      s.technologies.some(t => t.toLowerCase().includes(q))
    );

    const matchedIndustries = INDUSTRIES.filter(i =>
      i.name.toLowerCase().includes(q) ||
      i.description.toLowerCase().includes(q) ||
      i.tagline.toLowerCase().includes(q)
    );

    const matchedArchitectures = ARCHITECTURES.filter(a =>
      a.title.toLowerCase().includes(q) ||
      a.description.toLowerCase().includes(q) ||
      a.benefits.some(b => b.toLowerCase().includes(q))
    );

    return {
      services: matchedServices,
      industries: matchedIndustries,
      architectures: matchedArchitectures,
      isFiltered: true
    };
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-150 text-start">
      <div 
        className="relative w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col text-slate-100 max-h-[80vh] text-start"
        role="dialog"
        aria-modal="true"
        aria-label={strings.nav.searchAria}
      >
        {/* Search Input Bar with Logical Spacing */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-800 bg-slate-950">
          <Search className="w-5 h-5 text-cyan-400 me-3 shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder={strings.nav.searchPlaceholder}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent border-none text-white placeholder-slate-500 focus:outline-none text-sm sm:text-base text-start"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-slate-400 hover:text-white me-2"
              aria-label="Clear query"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2 py-1 bg-slate-800 hover:bg-slate-700 text-xs text-slate-300 rounded-md font-mono shrink-0"
          >
            ESC
          </button>
        </div>

        {/* Results List */}
        <div className="p-4 overflow-y-auto space-y-5 text-start">
          {!searchResults.isFiltered && (
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-2">
              {language === 'ar' ? 'أبرز الحلول والمواضيع الشائعة' : 'Popular Enterprise Topics'}
            </div>
          )}

          {/* Services Group */}
          {searchResults.services.length > 0 && (
            <div className="space-y-2 text-start">
              <div className="text-[11px] font-bold text-cyan-400 uppercase tracking-wider px-2">
                {strings.nav.services} ({searchResults.services.length})
              </div>
              <div className="space-y-1">
                {searchResults.services.map((srv) => (
                  <a
                    key={srv.id}
                    href={`#${srv.id}`}
                    onClick={() => {
                      onClose();
                      if (onSelectService) onSelectService(srv.id);
                    }}
                    className="flex items-start justify-between p-3 rounded-xl hover:bg-slate-800/80 transition-colors group border border-transparent hover:border-slate-700 text-start"
                  >
                    <div className="flex items-start space-x-3 rtl:space-x-reverse">
                      <div className="p-2 rounded-lg bg-cyan-950/60 border border-cyan-500/20 text-cyan-400 mt-0.5 group-hover:scale-105 transition-transform shrink-0">
                        <Server className="w-4 h-4" />
                      </div>
                      <div className="text-start">
                        <h4 className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                          {srv.title}
                        </h4>
                        <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">
                          {srv.shortDesc}
                        </p>
                        <div className="flex flex-wrap gap-1 mt-1.5">
                          {srv.technologies.slice(0, 3).map((tech, idx) => (
                            <span key={idx} className="text-[10px] px-1.5 py-0.5 bg-slate-950 text-slate-300 rounded border border-slate-800">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <ArrowRight className={`w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-all mt-1 shrink-0 ${isRTL ? 'rotate-180' : ''}`} />
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Industry Solutions Group */}
          {searchResults.industries.length > 0 && (
            <div className="space-y-2 text-start">
              <div className="text-[11px] font-bold text-blue-400 uppercase tracking-wider px-2">
                {strings.nav.industries} ({searchResults.industries.length})
              </div>
              <div className="space-y-1">
                {searchResults.industries.map((ind) => (
                  <a
                    key={ind.id}
                    href="#industries"
                    onClick={onClose}
                    className="flex items-start justify-between p-3 rounded-xl hover:bg-slate-800/80 transition-colors group border border-transparent hover:border-slate-700 text-start"
                  >
                    <div className="text-start">
                      <h4 className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors">
                        {ind.name}
                      </h4>
                      <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">
                        {ind.tagline}
                      </p>
                    </div>
                    <span className="text-[11px] text-cyan-400 bg-cyan-950/40 border border-cyan-800/40 px-2 py-0.5 rounded shrink-0">
                      {ind.compliance[0] || 'UAE Standard'}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Architecture Blueprints */}
          {searchResults.architectures.length > 0 && (
            <div className="space-y-2 text-start">
              <div className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider px-2">
                {strings.nav.architectures} ({searchResults.architectures.length})
              </div>
              <div className="space-y-1">
                {searchResults.architectures.map((arch) => (
                  <a
                    key={arch.id}
                    href="#architectures"
                    onClick={onClose}
                    className="flex items-start justify-between p-3 rounded-xl hover:bg-slate-800/80 transition-colors group border border-transparent hover:border-slate-700 text-start"
                  >
                    <div className="text-start">
                      <h4 className="text-sm font-semibold text-white group-hover:text-emerald-300 transition-colors">
                        {arch.title}
                      </h4>
                      <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">
                        {arch.subtitle}
                      </p>
                    </div>
                    <span className="text-[10px] text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-2 py-0.5 rounded shrink-0">
                      Validated Architecture
                    </span>
                  </a>
                ))}
              </div>
            </div>
          )}

          {searchResults.isFiltered &&
            searchResults.services.length === 0 &&
            searchResults.industries.length === 0 &&
            searchResults.architectures.length === 0 && (
              <div className="text-center py-10 text-slate-400 space-y-2">
                <p className="text-sm">
                  {language === 'ar' ? `لم يتم العثور على نتائج مطابقة لـ "${query}"` : `No exact matches found for "${query}"`}
                </p>
                <p className="text-xs text-slate-500">
                  {language === 'ar'
                    ? 'جرب البحث عن: كابلات، أمن سيبراني، خوادم، SIRA CCTV، أو سحابة.'
                    : 'Try searching for keywords like cabling, cybersecurity, Fortinet, SIRA CCTV, or Azure.'}
                </p>
              </div>
            )}
        </div>

        {/* Modal Footer */}
        <div className="p-3 bg-slate-950/70 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span>{language === 'ar' ? 'مزود حلول وتكامل الأنظمة بأبوظبي' : 'Official Abu Dhabi IT Systems Integrator'}</span>
          <span className="text-[11px] text-cyan-400 font-medium font-mono" dir="ltr">https://landcom.ae</span>
        </div>
      </div>
    </div>
  );
}
