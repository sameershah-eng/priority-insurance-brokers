/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useLenis } from './hooks/useLenis';
import { QuoteModalProvider } from './context/QuoteModalContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { EnquiryModal } from './components/EnquiryModal';
import { SearchModal } from './components/SearchModal';
import { PageTransition } from './components/motion/PageTransition';

// Pages
import { HomePage } from './pages/HomePage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { BlogIndexPage } from './pages/BlogIndexPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { ContactPage } from './pages/ContactPage';
import { HandoffPage } from './pages/HandoffPage';
import { NotFoundPage } from './pages/NotFoundPage';

// Scroll to top on route navigation
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

function MainApp() {
  // Initialize Lenis smooth scroll
  useLenis();

  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#0E1B2C] selection:bg-[#EE7625]/20 selection:text-[#0E1B2C]">
      {/* Skip to Content for WCAG keyboard accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#EE7625] focus:text-white focus:rounded-md focus:shadow-lg focus:font-bold text-xs"
      >
        Skip to main content
      </a>

      {/* Global Scroll Manager */}
      <ScrollToTop />

      {/* Global Header */}
      <Header onOpenSearch={() => setSearchOpen(true)} />

      {/* Main Content Area with Page Transition */}
      <main id="main-content" className="flex-1 w-full">
        <PageTransition>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services/:slug" element={<ServiceDetailPage />} />
            <Route path="/blog" element={<BlogIndexPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/handoff" element={<HandoffPage />} />
            <Route path="*" element={<NotFoundPage onOpenSearch={() => setSearchOpen(true)} />} />
          </Routes>
        </PageTransition>
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Global Modal dialogs */}
      <EnquiryModal />
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  );
}

export default function App() {
  return (
    <QuoteModalProvider>
      <BrowserRouter>
        <MainApp />
      </BrowserRouter>
    </QuoteModalProvider>
  );
}
