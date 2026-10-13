import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  Phone,
  ChevronDown,
  Menu,
  X,
  Search,
  ArrowRight,
  ShieldAlert,
  SlidersHorizontal
} from 'lucide-react';
import { COMPANY } from '../data/company';
import { SERVICES } from '../data/services';
import { useScrollDirection } from '../hooks/useScrollDirection';
import { useQuoteModal } from '../context/QuoteModalContext';
import { MegaMenu } from './MegaMenu';
import { MagneticButton } from './motion/MagneticButton';

interface HeaderProps {
  onOpenSearch: () => void;
}

export function Header({ onOpenSearch }: HeaderProps) {
  const { isScrolled, isVisible } = useScrollDirection();
  const { openQuoteModal } = useQuoteModal();
  const location = useLocation();

  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [mobileServicesExpanded, setMobileServicesExpanded] = useState(false);

  // Close menus on route change
  useEffect(() => {
    setMegaMenuOpen(false);
    setMobileDrawerOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileDrawerOpen]);

  return (
    <>
      {/* Top Utility Bar (Static at very top of document) */}
      <div className="bg-[#102A3D] text-[#FAF9F6] text-[11px] sm:text-xs py-2 px-4 sm:px-8 border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3 text-slate-300">
            <span>Brisbane based. Supporting businesses Australia-wide.</span>
            <span className="opacity-40">|</span>
            <span className="text-white/90">Commercial insurance. Personal service.</span>
          </div>

          <div className="flex items-center gap-5">
            <Link
              to="/handoff"
              className="inline-flex items-center gap-1.5 text-amber-300 hover:text-white transition-colors font-medium"
            >
              <SlidersHorizontal className="w-3 h-3" />
              <span>Client Handoff Pitch</span>
            </Link>
            <span className="opacity-30">|</span>
            <a
              href={`tel:${COMPANY.phoneRaw}`}
              className="inline-flex items-center gap-1.5 font-bold text-white hover:text-[#EE7625] transition-colors"
            >
              <Phone className="w-3 h-3 text-[#EE7625]" />
              <span>{COMPANY.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`fixed top-0 md:top-[33px] left-0 right-0 z-40 transition-all duration-300 ${
          isVisible ? 'translate-y-0' : '-translate-y-full md:-translate-y-full'
        } ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-[#0E1B2C]/08 py-3'
            : 'bg-[#FAF9F6]/90 backdrop-blur-xs py-4.5 border-b border-[#0E1B2C]/06'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Zone 1: Brand Wordmark */}
            <Link
              to="/"
              className="flex items-center gap-3 shrink-0 focus-visible:outline-hidden"
              aria-label="Priority Insurance Brokers Homepage"
            >
              {/* Distinctive Graphic Monogram */}
              <div className="w-8 h-8 rounded-lg bg-[#102A3D] flex items-center justify-center text-white font-bold text-sm shadow-xs border border-white/10">
                <span className="text-amber-400 font-serif-accent italic text-base">P</span>
                <span className="text-xs text-[#EE7625]">.</span>
              </div>
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-extrabold tracking-tight text-[#0E1B2C] leading-none">
                  PRIORITY
                </span>
                <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#5B6676] leading-tight">
                  INSURANCE BROKERS
                </span>
              </div>
            </Link>

            {/* Zone 2: Desktop Navigation Links (Clean 4-5 single line links) */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-[#0E1B2C]">
              {/* Services with MegaMenu */}
              <div
                className="relative"
                onMouseEnter={() => setMegaMenuOpen(true)}
                onMouseLeave={() => setMegaMenuOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setMegaMenuOpen(!megaMenuOpen)}
                  className={`inline-flex items-center gap-1 py-1 transition-colors ${
                    megaMenuOpen ? 'text-[#EE7625]' : 'hover:text-[#EE7625]'
                  }`}
                  aria-expanded={megaMenuOpen}
                  aria-haspopup="true"
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      megaMenuOpen ? 'rotate-180 text-[#EE7625]' : 'text-[#5B6676]'
                    }`}
                  />
                </button>

                <MegaMenu
                  isOpen={megaMenuOpen}
                  onClose={() => setMegaMenuOpen(false)}
                />
              </div>

              <Link
                to="/services/demolition-contractors"
                className={`transition-colors whitespace-nowrap ${
                  location.pathname === '/services/demolition-contractors'
                    ? 'text-[#EE7625]'
                    : 'hover:text-[#EE7625]'
                }`}
              >
                Demolition
              </Link>

              <Link
                to="/blog"
                className={`transition-colors whitespace-nowrap ${
                  location.pathname.startsWith('/blog') ? 'text-[#EE7625]' : 'hover:text-[#EE7625]'
                }`}
              >
                Insights
              </Link>

              <Link
                to="/handoff"
                className={`transition-colors whitespace-nowrap ${
                  location.pathname === '/handoff' ? 'text-[#EE7625]' : 'hover:text-[#EE7625]'
                }`}
              >
                Design Handoff
              </Link>

              <Link
                to="/contact"
                className={`transition-colors whitespace-nowrap ${
                  location.pathname === '/contact' ? 'text-[#EE7625]' : 'hover:text-[#EE7625]'
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Zone 3: Actions (Search, Phone & Primary Quote CTA) */}
            <div className="flex items-center gap-2.5 sm:gap-4 shrink-0">
              {/* Search trigger */}
              <button
                type="button"
                onClick={onOpenSearch}
                className="p-2 text-[#5B6676] hover:text-[#0E1B2C] hover:bg-black/5 rounded-lg transition-colors flex items-center gap-1.5 text-xs font-medium"
                aria-label="Open search"
                title="Search (Cmd+K)"
              >
                <Search className="w-4 h-4" />
                <span className="hidden xl:inline text-[#8A96A6] font-mono text-[11px] bg-black/5 px-1.5 py-0.5 rounded">
                  ⌘K
                </span>
              </button>

              {/* Direct phone number */}
              <a
                href={`tel:${COMPANY.phoneRaw}`}
                className="hidden md:inline-flex items-center gap-1.5 text-xs font-bold text-[#0E1B2C] hover:text-[#EE7625] transition-colors py-2 px-2.5 rounded-lg hover:bg-black/5"
              >
                <Phone className="w-3.5 h-3.5 text-[#EE7625]" />
                <span>{COMPANY.phone}</span>
              </a>

              {/* Primary Quote CTA Button with Magnetic Pull */}
              <div className="hidden sm:block">
                <MagneticButton
                  onClick={() => openQuoteModal()}
                  className="inline-flex items-center gap-2 px-4.5 py-2.5 rounded-lg text-xs font-bold text-white bg-[#EE7625] hover:bg-[#D96216] transition-all shadow-xs hover:shadow"
                >
                  <span>Get a quote</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </MagneticButton>
              </div>

              {/* Mobile Menu Hamburger */}
              <button
                type="button"
                onClick={() => setMobileDrawerOpen(!mobileDrawerOpen)}
                className="lg:hidden p-2 text-[#0E1B2C] hover:bg-black/5 rounded-lg transition-colors"
                aria-label={mobileDrawerOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileDrawerOpen}
              >
                {mobileDrawerOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (Accessible, full-height) */}
      <AnimatePresence>
        {mobileDrawerOpen && (
          <div className="fixed inset-0 z-50 lg:hidden flex">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileDrawerOpen(false)}
              className="fixed inset-0 bg-[#0E1B2C]/50 backdrop-blur-xs"
            />

            {/* Slide-in Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              className="relative ml-auto w-full max-w-sm bg-white h-full shadow-2xl flex flex-col justify-between overflow-y-auto"
            >
              {/* Drawer Top */}
              <div className="p-5 border-b border-[#0E1B2C]/08 flex items-center justify-between bg-[#FAF9F6]">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded bg-[#102A3D] text-white flex items-center justify-center font-bold text-xs">
                    <span className="text-amber-400 font-serif-accent italic">P</span>
                    <span className="text-[#EE7625]">.</span>
                  </div>
                  <span className="font-extrabold text-sm text-[#0E1B2C] tracking-tight">
                    PRIORITY BROKERS
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileDrawerOpen(false)}
                  className="p-1.5 text-[#5B6676] hover:text-[#0E1B2C] rounded-lg"
                  aria-label="Close mobile menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Navigation Links */}
              <div className="p-5 space-y-4 flex-1">
                {/* Search Bar in Drawer */}
                <button
                  type="button"
                  onClick={() => {
                    setMobileDrawerOpen(false);
                    onOpenSearch();
                  }}
                  className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-lg bg-[#FAF9F6] border border-[#0E1B2C]/08 text-xs text-[#5B6676]"
                >
                  <Search className="w-4 h-4 text-[#EE7625]" />
                  <span>Search services, articles & guides...</span>
                </button>

                {/* Services Accordion */}
                <div className="border border-[#0E1B2C]/08 rounded-lg overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setMobileServicesExpanded(!mobileServicesExpanded)}
                    className="w-full flex items-center justify-between p-3.5 bg-[#FAF9F6] text-left text-sm font-bold text-[#0E1B2C]"
                  >
                    <span>Specialist Services</span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#5B6676] transition-transform ${
                        mobileServicesExpanded ? 'rotate-180 text-[#EE7625]' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {mobileServicesExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="p-2 space-y-1 bg-white border-t border-[#0E1B2C]/08"
                      >
                        {SERVICES.map((s) => (
                          <Link
                            key={s.id}
                            to={`/services/${s.slug}`}
                            onClick={() => setMobileDrawerOpen(false)}
                            className="block px-3 py-2 text-xs font-semibold text-[#0E1B2C] hover:text-[#EE7625] hover:bg-[#FAF9F6] rounded-md transition-colors"
                          >
                            {s.title}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="space-y-1 font-semibold text-sm text-[#0E1B2C]">
                  <Link
                    to="/"
                    onClick={() => setMobileDrawerOpen(false)}
                    className="block px-3 py-2.5 rounded-lg hover:bg-[#FAF9F6] transition-colors"
                  >
                    Homepage
                  </Link>
                  <Link
                    to="/blog"
                    onClick={() => setMobileDrawerOpen(false)}
                    className="block px-3 py-2.5 rounded-lg hover:bg-[#FAF9F6] transition-colors"
                  >
                    Insights & Case Studies
                  </Link>
                  <Link
                    to="/handoff"
                    onClick={() => setMobileDrawerOpen(false)}
                    className="flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-[#FAF9F6] text-amber-700 transition-colors"
                  >
                    <span>Design Handoff Pitch</span>
                    <span className="text-[10px] bg-amber-100 px-2 py-0.5 rounded font-bold">Client Review</span>
                  </Link>
                  <Link
                    to="/contact"
                    onClick={() => setMobileDrawerOpen(false)}
                    className="block px-3 py-2.5 rounded-lg hover:bg-[#FAF9F6] transition-colors"
                  >
                    Contact Brisbane Desk
                  </Link>
                </div>
              </div>

              {/* Drawer Bottom Actions */}
              <div className="p-5 border-t border-[#0E1B2C]/08 bg-[#FAF9F6] space-y-3">
                <a
                  href={`tel:${COMPANY.phoneRaw}`}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-white border border-[#0E1B2C]/10 text-xs font-bold text-[#0E1B2C]"
                >
                  <Phone className="w-4 h-4 text-[#EE7625]" />
                  Call {COMPANY.phone}
                </a>

                <button
                  type="button"
                  onClick={() => {
                    setMobileDrawerOpen(false);
                    openQuoteModal();
                  }}
                  className="w-full py-3 px-4 rounded-lg bg-[#EE7625] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Start Quote Enquiry</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <p className="text-[11px] text-[#5B6676] text-center">
                  DCSX Group Pty Ltd · AFSL 233750
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Sticky Mobile Bottom Bar (Max 60px height to respect 15% mobile viewport guideline) */}
      <div className="fixed bottom-0 left-0 right-0 z-30 lg:hidden bg-white/95 backdrop-blur-md border-t border-[#0E1B2C]/10 px-4 py-2.5 flex items-center justify-between gap-3 shadow-lg">
        <a
          href={`tel:${COMPANY.phoneRaw}`}
          className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-3 bg-[#FAF9F6] border border-[#0E1B2C]/15 rounded-lg text-xs font-bold text-[#0E1B2C]"
        >
          <Phone className="w-3.5 h-3.5 text-[#EE7625]" />
          <span>Call 07 3103 2992</span>
        </a>

        <button
          type="button"
          onClick={() => openQuoteModal()}
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 bg-[#EE7625] text-white rounded-lg text-xs font-bold shadow-xs"
        >
          <span>Get a quote</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </>
  );
}
