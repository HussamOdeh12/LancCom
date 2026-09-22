import React from 'react';
import Link from 'next/link';
import { Home, ArrowLeft, Layers } from 'lucide-react';
import { TopBar } from '@/components/layout/TopBar';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export const metadata = {
  title: '404 - Page Not Found | LAND.COM Information Technology',
  description: 'The requested page could not be found on LandCom Information Technology portal.',
  robots: {
    index: false,
    follow: false,
  }
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-cyan-500 selection:text-slate-950">
      <TopBar />
      <Navbar />

      <main id="main-content" className="flex-1 flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl w-full text-center space-y-6">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 font-mono text-3xl font-black">
            404
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Page Not Found
          </h1>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-md mx-auto">
            The page you are looking for does not exist or has been moved. Explore our core solutions or return to the main portal.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
            <Link
              href="/"
              className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm rounded-xl transition-all flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/20"
            >
              <Home className="w-4 h-4 shrink-0" />
              <span>Return Home</span>
            </Link>

            <Link
              href="/services"
              className="w-full sm:w-auto px-6 py-3 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white font-medium text-sm rounded-xl border border-slate-800 transition-colors flex items-center justify-center space-x-2"
            >
              <Layers className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Explore Services</span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
