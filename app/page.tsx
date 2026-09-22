import React from 'react';
import { TopBar } from '@/components/layout/TopBar';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/home/Hero';
import { CompanyCredentials } from '@/components/home/CompanyCredentials';
import { AboutOverview } from '@/components/home/AboutOverview';
import { CoreServices } from '@/components/home/CoreServices';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { SelectedExperience } from '@/components/home/SelectedExperience';
import { ContactSection } from '@/components/home/ContactSection';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-cyan-500 selection:text-slate-950">
      {/* Skip to Main Content Accessibility Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-cyan-400 focus:text-slate-950 focus:font-bold focus:rounded-lg"
      >
        Skip to main content
      </a>

      {/* Global Top Bar */}
      <TopBar />

      {/* Main Navigation Header */}
      <Navbar />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Official Registration & Credentials */}
        <CompanyCredentials />

        {/* 3. Corporate Overview / About */}
        <AboutOverview />

        {/* 4. 8 Core IT Services */}
        <CoreServices />

        {/* 5. Why LandCom */}
        <WhyChooseUs />

        {/* 6. Documented Experience & Clients */}
        <SelectedExperience />

        {/* 7. Abu Dhabi Contact & Inquiry */}
        <ContactSection />
      </main>

      {/* Global Enterprise Footer */}
      <Footer />
    </div>
  );
}

