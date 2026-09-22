'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { Search, X, ArrowRight, Database, Building2, Award } from 'lucide-react';
import { CORE_SERVICES, DOCUMENTED_EXPERIENCE, LICENSED_ACTIVITIES } from '@/lib/data';
import { useLanguage } from '@/context/LanguageContext';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
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
        services: CORE_SERVICES.slice(0, 4),
        experience: DOCUMENTED_EXPERIENCE.slice(0, 3),
        activities: LICENSED_ACTIVITIES.slice(0, 3),
        isFiltered: false
      };
    }

    const q = query.toLowerCase();
    const matchedServices = CORE_SERVICES.filter(s => 
      s.title.toLowerCase().includes(q) ||
      s.tagline.toLowerCase().includes(q) ||
      s.description.toLowerCase().includes(q) ||
      s.features.some(f => f.toLowerCase().includes(q))
    );

    const matchedExperience = DOCUMENTED_EXPERIENCE.filter(exp =>
      exp.organization.toLowerCase().includes(q) ||
      exp.scope.toLowerCase().includes(q) ||
      exp.location.toLowerCase().includes(q)
    );

    const matchedActivities = LICENSED_ACTIVITIES.filter(act =>
      act.title.toLowerCase().includes(q) ||
      act.titleAr.includes(q)
    );

    return {
      services: matchedServices,
      experience: matchedExperience,
      activities: matchedActivities,
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
        {/* Search Input Bar */}
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
              {language === 'ar' ? 'الخدمات والبيانات المتاحة' : 'Featured Services & Official Records'}
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
                  <Link
                    key={srv.id}
                    href={`/services#${srv.id}`}
                    onClick={onClose}
                    className="flex items-start justify-between p-3 rounded-xl hover:bg-slate-800/80 transition-colors group border border-transparent hover:border-slate-700 text-start"
                  >
                    <div className="flex items-start space-x-3 rtl:space-x-reverse">
                      <div className="p-2 rounded-lg bg-cyan-950/60 border border-cyan-500/20 text-cyan-400 mt-0.5 group-hover:scale-105 transition-transform shrink-0">
                        <Database className="w-4 h-4" />
                      </div>
                      <div className="text-start">
                        <h4 className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                          {srv.title}
                        </h4>
                        <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">
                          {srv.tagline}
                        </p>
                      </div>
                    </div>
                    <ArrowRight className={`w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-all mt-1 shrink-0 ${isRTL ? 'rotate-180' : ''}`} />
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Documented Experience Group */}
          {searchResults.experience.length > 0 && (
            <div className="space-y-2 text-start">
              <div className="text-[11px] font-bold text-blue-400 uppercase tracking-wider px-2">
                {strings.nav.experience} ({searchResults.experience.length})
              </div>
              <div className="space-y-1">
                {searchResults.experience.map((exp) => (
                  <Link
                    key={exp.id}
                    href="/experience"
                    onClick={onClose}
                    className="flex items-start justify-between p-3 rounded-xl hover:bg-slate-800/80 transition-colors group border border-transparent hover:border-slate-700 text-start"
                  >
                    <div className="flex items-start space-x-3 rtl:space-x-reverse">
                      <div className="p-2 rounded-lg bg-blue-950/60 border border-blue-500/20 text-blue-400 mt-0.5 shrink-0">
                        <Building2 className="w-4 h-4" />
                      </div>
                      <div className="text-start">
                        <h4 className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors">
                          {exp.organization}
                        </h4>
                        <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">
                          {exp.scope}
                        </p>
                      </div>
                    </div>
                    <span className="text-[10px] text-slate-400 bg-slate-950 border border-slate-800 px-2 py-0.5 rounded shrink-0">
                      {exp.location}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Licensed Activities Group */}
          {searchResults.activities.length > 0 && (
            <div className="space-y-2 text-start">
              <div className="text-[11px] font-bold text-amber-400 uppercase tracking-wider px-2">
                {strings.credentials.activitiesTitle} ({searchResults.activities.length})
              </div>
              <div className="space-y-1">
                {searchResults.activities.map((act) => (
                  <Link
                    key={act.id}
                    href="/credentials"
                    onClick={onClose}
                    className="flex items-start justify-between p-3 rounded-xl hover:bg-slate-800/80 transition-colors group border border-transparent hover:border-slate-700 text-start"
                  >
                    <div className="flex items-start space-x-3 rtl:space-x-reverse">
                      <div className="p-2 rounded-lg bg-amber-950/60 border border-amber-500/20 text-amber-400 mt-0.5 shrink-0">
                        <Award className="w-4 h-4" />
                      </div>
                      <div className="text-start">
                        <h4 className="text-sm font-semibold text-white group-hover:text-amber-300 transition-colors">
                          {language === 'ar' ? act.titleAr : act.title}
                        </h4>
                        <p className="text-[11px] text-slate-400 mt-0.5">
                          Abu Dhabi Economic Licence Activity #{act.id}
                        </p>
                      </div>
                    </div>
                    <span className="text-[10px] text-slate-400 bg-slate-950 border border-slate-800 px-2 py-0.5 rounded shrink-0">
                      CN-1006129
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {searchResults.services.length === 0 && searchResults.experience.length === 0 && searchResults.activities.length === 0 && (
            <div className="py-12 text-center text-slate-400 text-sm">
              {language === 'ar' ? 'لم يتم العثور على نتائج مطابقة' : 'No matching results found.'}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
