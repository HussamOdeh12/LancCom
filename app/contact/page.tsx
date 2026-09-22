'use client';

import React, { useState } from 'react';
import { TopBar } from '@/components/layout/TopBar';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ContactSection } from '@/components/home/ContactSection';
import { SearchModal } from '@/components/modals/SearchModal';
import { Send } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function ContactPage() {
  const { strings } = useLanguage();
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-cyan-500 selection:text-slate-950">
      <TopBar />
      <Navbar onOpenSearch={() => setIsSearchModalOpen(true)} />

      <main className="flex-1 text-start">
        {/* Page Hero */}
        <section className="py-16 sm:py-20 bg-slate-900 border-b border-slate-800 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-3 py-1 rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider">
                <Send className="w-3.5 h-3.5 shrink-0" />
                <span>{strings.contact.sectionTag}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                {strings.contact.sectionTitle}
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                {strings.contact.sectionDesc}
              </p>
            </div>
          </div>
        </section>

        {/* Full Contact Form & HQ Section */}
        <ContactSection />
      </main>

      <Footer />

      <SearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
      />
    </div>
  );
}
