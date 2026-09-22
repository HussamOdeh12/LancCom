'use client';

import React, { useState } from 'react';
import { TopBar } from '@/components/layout/TopBar';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/home/Hero';
import { CoreServices } from '@/components/home/CoreServices';
import { ArchitectureExplorer } from '@/components/home/ArchitectureExplorer';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { IndustryShowcase } from '@/components/home/IndustryShowcase';
import { SolutionEstimator } from '@/components/home/SolutionEstimator';
import { ProjectCaseStudies } from '@/components/home/ProjectCaseStudies';
import { TechnologyPartners } from '@/components/home/TechnologyPartners';
import { TestimonialsCertifications } from '@/components/home/TestimonialsCertifications';
import { FaqSection } from '@/components/home/FaqSection';
import { ConsultationSection } from '@/components/home/ConsultationSection';
import { ConsultationModal } from '@/components/modals/ConsultationModal';
import { SearchModal } from '@/components/modals/SearchModal';

export default function HomePage() {
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<string | undefined>(undefined);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  const handleOpenConsultation = (serviceId?: string) => {
    setSelectedServiceForModal(serviceId);
    setIsConsultationModalOpen(true);
  };

  const handleCloseConsultation = () => {
    setIsConsultationModalOpen(false);
    setSelectedServiceForModal(undefined);
  };

  const handleOpenSearch = () => {
    setIsSearchModalOpen(true);
  };

  const handleCloseSearch = () => {
    setIsSearchModalOpen(false);
  };

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
      <TopBar onOpenConsultation={() => handleOpenConsultation()} />

      {/* Main Navigation Header */}
      <Navbar
        onOpenConsultation={handleOpenConsultation}
        onOpenSearch={handleOpenSearch}
      />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1">
        {/* Hero Section with Live Telemetry & Partner Marquee */}
        <Hero onOpenConsultation={handleOpenConsultation} />

        {/* 6 Core Solutions & Deep Architectural Breakdown */}
        <CoreServices onOpenConsultation={handleOpenConsultation} />

        {/* Interactive Systems Architecture Blueprint Explorer */}
        <ArchitectureExplorer onOpenConsultation={() => handleOpenConsultation()} />

        {/* Strategic Value Proposition & Why LandCom */}
        <WhyChooseUs onOpenConsultation={() => handleOpenConsultation()} />

        {/* Strategic Industry Verticals Showcase */}
        <IndustryShowcase onOpenConsultation={() => handleOpenConsultation()} />

        {/* Interactive Scope & BOQ Estimator Tool */}
        <SolutionEstimator onOpenConsultation={handleOpenConsultation} />

        {/* Featured Case Studies & UAE Enterprise Deliveries */}
        <ProjectCaseStudies onOpenConsultation={() => handleOpenConsultation()} />

        {/* Global OEM Technology Vendor Ecosystem */}
        <TechnologyPartners />

        {/* ISO Certifications, Regulatory Alignment & Client Testimonials */}
        <TestimonialsCertifications />

        {/* Frequently Asked Questions */}
        <FaqSection />

        {/* High-Conversion Consultation & Abu Dhabi Headquarters Section */}
        <ConsultationSection />
      </main>

      {/* Global Enterprise Footer */}
      <Footer onOpenConsultation={() => handleOpenConsultation()} />

      {/* Interactive Modals */}
      <ConsultationModal
        isOpen={isConsultationModalOpen}
        onClose={handleCloseConsultation}
        defaultService={selectedServiceForModal}
      />

      <SearchModal
        isOpen={isSearchModalOpen}
        onClose={handleCloseSearch}
        onSelectService={(id) => {
          const el = document.getElementById(id);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      />
    </div>
  );
}
