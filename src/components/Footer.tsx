import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Mail,
  MapPin,
  Phone,
  CheckCircle2,
  Linkedin,
  Facebook,
  Instagram,
  Youtube
} from 'lucide-react';
import { COMPANY } from '../data/company';

export function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [newsletterError, setNewsletterError] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newsletterEmail)) {
      setNewsletterStatus('error');
      setNewsletterError('Please enter a valid email address');
      return;
    }
    setNewsletterStatus('success');
    setNewsletterError('');
    setNewsletterEmail('');
  };

  return (
    <footer className="bg-[#FAF9F6] border-t border-[#0E1B2C]/10 text-[#0E1B2C] pt-16 pb-24 lg:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 4 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#0E1B2C]/10">
          {/* Col 1: Brand & Socials (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#102A3D] text-white flex items-center justify-center font-bold text-sm">
                <span className="text-amber-400 font-serif-accent italic text-base">P</span>
                <span className="text-[#EE7625]">.</span>
              </div>
              <div className="flex flex-col">
                <span className="text-base font-extrabold tracking-tight text-[#0E1B2C] leading-none">
                  PRIORITY
                </span>
                <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#5B6676] leading-tight">
                  INSURANCE BROKERS
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-[#5B6676] max-w-sm leading-relaxed">
              Specialist commercial insurance advice for complex businesses, heavy contractors, and growing operations across Australia.
            </p>

            {/* Newsletter input */}
            <div className="pt-2">
              <span className="text-[11px] font-bold tracking-wider uppercase text-[#0E1B2C] block mb-2">
                Industry Risk Bulletin
              </span>
              {newsletterStatus === 'success' ? (
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-2 rounded-lg border border-emerald-200">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Subscribed. You'll receive our quarterly insurance case reviews.</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <input
                      type="email"
                      value={newsletterEmail}
                      onChange={(e) => {
                        setNewsletterEmail(e.target.value);
                        if (newsletterStatus === 'error') setNewsletterStatus('idle');
                      }}
                      placeholder="Enter work email for updates"
                      className="w-full text-xs px-3 py-2 rounded-lg border border-[#0E1B2C]/15 bg-white text-[#0E1B2C] focus:border-[#EE7625] focus:outline-hidden"
                    />
                    <button
                      type="submit"
                      className="px-3 py-2 bg-[#102A3D] hover:bg-[#0E1B2C] text-white rounded-lg text-xs font-semibold shrink-0 transition-colors"
                      aria-label="Subscribe to bulletin"
                    >
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  {newsletterStatus === 'error' && (
                    <p className="text-[11px] text-red-600 font-medium">{newsletterError}</p>
                  )}
                </form>
              )}
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={COMPANY.socials[0].url}
                target="_blank"
                rel="noreferrer noopener"
                className="w-8 h-8 rounded-lg bg-[#F2F0EB] hover:bg-[#E5E3DC] text-[#0E1B2C] flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={COMPANY.socials[1].url}
                target="_blank"
                rel="noreferrer noopener"
                className="w-8 h-8 rounded-lg bg-[#F2F0EB] hover:bg-[#E5E3DC] text-[#0E1B2C] flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={COMPANY.socials[2].url}
                target="_blank"
                rel="noreferrer noopener"
                className="w-8 h-8 rounded-lg bg-[#F2F0EB] hover:bg-[#E5E3DC] text-[#0E1B2C] flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={COMPANY.socials[3].url}
                target="_blank"
                rel="noreferrer noopener"
                className="w-8 h-8 rounded-lg bg-[#F2F0EB] hover:bg-[#E5E3DC] text-[#0E1B2C] flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Services Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-bold tracking-[0.14em] text-[#0E1B2C] uppercase block mb-3">
              Specialist Covers
            </span>
            <ul className="space-y-2 text-xs text-[#5B6676]">
              <li>
                <Link to="/services/demolition-contractors" className="hover:text-[#EE7625] transition-colors">
                  Demolition contractor insurance
                </Link>
              </li>
              <li>
                <Link to="/services/mining-contractors" className="hover:text-[#EE7625] transition-colors">
                  Mining contractor insurance
                </Link>
              </li>
              <li>
                <Link to="/services/earthmoving-civil" className="hover:text-[#EE7625] transition-colors">
                  Earthmoving & civil plant
                </Link>
              </li>
              <li>
                <Link to="/services/plant-dry-hire" className="hover:text-[#EE7625] transition-colors">
                  Plant & dry hire cover
                </Link>
              </li>
              <li>
                <Link to="/services/public-liability" className="hover:text-[#EE7625] transition-colors">
                  Broadform public liability ($20M+)
                </Link>
              </li>
              <li>
                <Link to="/services/commercial-motor-fleet" className="hover:text-[#EE7625] transition-colors">
                  Commercial motor & fleet
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Company & Pitch (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-xs font-bold tracking-[0.14em] text-[#0E1B2C] uppercase block mb-3">
              Explore
            </span>
            <ul className="space-y-2 text-xs text-[#5B6676]">
              <li>
                <Link to="/" className="hover:text-[#EE7625] transition-colors">
                  Homepage overview
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-[#EE7625] transition-colors">
                  Insights & resources
                </Link>
              </li>
              <li>
                <Link to="/handoff" className="hover:text-[#EE7625] transition-colors font-medium text-amber-700">
                  Client handoff specs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#EE7625] transition-colors">
                  About Priority team
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#EE7625] transition-colors">
                  Financial Services Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Speak with Priority (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-bold tracking-[0.14em] text-[#0E1B2C] uppercase block mb-3">
              Speak with Priority
            </span>
            <div className="space-y-3 text-xs text-[#5B6676]">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#EE7625] shrink-0 mt-0.5" />
                <div>
                  <a href={`tel:${COMPANY.phoneRaw}`} className="font-bold text-[#0E1B2C] hover:text-[#EE7625] transition-colors text-sm">
                    {COMPANY.phone}
                  </a>
                  <p className="text-[11px] text-[#5B6676]">Mon-Fri 8:00 AM – 5:30 PM AEST</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <a href={`mailto:${COMPANY.email}`} className="text-[#0E1B2C] hover:text-[#EE7625] transition-colors">
                  {COMPANY.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#8A96A6] shrink-0 mt-0.5" />
                <address className="not-italic leading-relaxed">
                  {COMPANY.address.line1}<br />
                  {COMPANY.address.line2} {COMPANY.address.state} {COMPANY.address.postcode}
                </address>
              </div>

              <div className="pt-1">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#EE7625] hover:text-[#D96216] transition-colors"
                >
                  <span>Contact Brisbane desk</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Regulatory Notice */}
        <div className="pt-8 pb-6 border-b border-[#0E1B2C]/08 space-y-2 text-[11px] text-[#5B6676] leading-relaxed">
          <p>
            {COMPANY.name} is a trading name of {COMPANY.tradingName}, ABN {COMPANY.abn}, Corporate Authorised Representative {COMPANY.car} of {COMPANY.brokerNetwork}, AFSL {COMPANY.afsl}.
          </p>
          <p>
            General information only. Consider your circumstances and relevant policy documents before deciding. Cover is subject to the insurer, policy terms, conditions, limits and exclusions. Historical client outcomes are specific to those clients and do not guarantee future results.
          </p>
        </div>

        {/* Copyright & Sub-links */}
        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#5B6676]">
          <span>© 2026 {COMPANY.name} · Homepage concept</span>
          <div className="flex items-center flex-wrap gap-4 text-[11px]">
            <Link to="/contact" className="hover:text-[#0E1B2C] transition-colors">Privacy Policy</Link>
            <span>·</span>
            <Link to="/contact" className="hover:text-[#0E1B2C] transition-colors">Financial Services Guide</Link>
            <span>·</span>
            <Link to="/contact" className="hover:text-[#0E1B2C] transition-colors">Complaints Process</Link>
            <span>·</span>
            <Link to="/handoff" className="hover:text-[#EE7625] transition-colors font-medium">Pitch Handoff Specs</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
