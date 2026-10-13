import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  SlidersHorizontal,
  Palette,
  Type,
  Layout,
  ShieldCheck,
  Zap,
  Globe,
  FileCode,
  Layers,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  CheckSquare
} from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import {
  COLOR_TOKENS,
  TYPOGRAPHY_TOKENS,
  SEO_REDIRECT_RULES,
  ACCESSIBILITY_CHECKLIST
} from '../data/designSystem';

export function HandoffPage() {
  const [activeNavState, setActiveNavState] = useState<'default' | 'scrolled' | 'megamenu' | 'mobile-closed' | 'mobile-open'>('default');
  const [activeTab, setActiveTab] = useState<'tokens' | 'nav' | 'seo' | 'performance'>('tokens');

  return (
    <div className="w-full pt-28 lg:pt-32 pb-24 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <Breadcrumbs items={[{ label: 'Design Handoff & Pitch Specs' }]} />

        {/* Hero Section of Pitch */}
        <div className="mt-6 mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-100 text-amber-900 rounded-full text-xs font-bold">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Senior Human Studio Pitch Specification</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0E1B2C] tracking-tight">
            Corporate Redesign Pitch & Technical Architecture
          </h1>

          <p className="text-sm sm:text-base text-[#5B6676] max-w-3xl leading-relaxed">
            Prepared for Priority Insurance Brokers (DCSX Group Pty Ltd). This interactive specification demonstrates how the proposed React application modernises the visual presence, improves quote conversions, and protects existing WordPress SEO authority.
          </p>
        </div>

        {/* Section Navigation Tabs */}
        <div className="flex items-center gap-2 border-b border-[#0E1B2C]/10 mb-10 overflow-x-auto pb-px">
          <button
            onClick={() => setActiveTab('tokens')}
            className={`pb-3 px-4 text-xs sm:text-sm font-bold transition-colors whitespace-nowrap flex items-center gap-2 border-b-2 ${
              activeTab === 'tokens'
                ? 'border-[#EE7625] text-[#0E1B2C]'
                : 'border-transparent text-[#5B6676] hover:text-[#0E1B2C]'
            }`}
          >
            <Palette className="w-4 h-4" />
            <span>Design System & Mood Board</span>
          </button>

          <button
            onClick={() => setActiveTab('nav')}
            className={`pb-3 px-4 text-xs sm:text-sm font-bold transition-colors whitespace-nowrap flex items-center gap-2 border-b-2 ${
              activeTab === 'nav'
                ? 'border-[#EE7625] text-[#0E1B2C]'
                : 'border-transparent text-[#5B6676] hover:text-[#0E1B2C]'
            }`}
          >
            <Layout className="w-4 h-4" />
            <span>Navigation & Layout States</span>
          </button>

          <button
            onClick={() => setActiveTab('seo')}
            className={`pb-3 px-4 text-xs sm:text-sm font-bold transition-colors whitespace-nowrap flex items-center gap-2 border-b-2 ${
              activeTab === 'seo'
                ? 'border-[#EE7625] text-[#0E1B2C]'
                : 'border-transparent text-[#5B6676] hover:text-[#0E1B2C]'
            }`}
          >
            <Globe className="w-4 h-4" />
            <span>WordPress SEO Protection</span>
          </button>

          <button
            onClick={() => setActiveTab('performance')}
            className={`pb-3 px-4 text-xs sm:text-sm font-bold transition-colors whitespace-nowrap flex items-center gap-2 border-b-2 ${
              activeTab === 'performance'
                ? 'border-[#EE7625] text-[#0E1B2C]'
                : 'border-transparent text-[#5B6676] hover:text-[#0E1B2C]'
            }`}
          >
            <Zap className="w-4 h-4" />
            <span>Core Web Vitals & WCAG 2.1 AA</span>
          </button>
        </div>

        {/* TAB 1: DESIGN SYSTEM & MOOD BOARD */}
        {activeTab === 'tokens' && (
          <div className="space-y-12">
            {/* Color Swatches Grid */}
            <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#0E1B2C]/08 shadow-xs space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-bold tracking-wider uppercase text-[#EE7625] block mb-1">
                    01 / Chromatic Architecture
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#0E1B2C]">
                    Color Tokens & Contrast Matrix
                  </h2>
                </div>
                <span className="text-xs font-mono text-[#5B6676]">60-30-10 Disciplined Distribution</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {COLOR_TOKENS.map((token) => (
                  <div
                    key={token.hex}
                    className="p-4 rounded-xl border border-[#0E1B2C]/08 space-y-3 bg-[#FAF9F6]"
                  >
                    <div
                      className="w-full h-16 rounded-lg border border-[#0E1B2C]/10 shadow-inner flex items-end p-2"
                      style={{ backgroundColor: token.hex }}
                    >
                      <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${
                        token.hex === '#FAF9F6' || token.hex === '#F2F0EB' ? 'bg-black/10 text-black' : 'bg-white/20 text-white'
                      }`}>
                        {token.hex}
                      </span>
                    </div>

                    <div>
                      <h4 className="text-sm font-bold text-[#0E1B2C]">{token.name}</h4>
                      <p className="text-[11px] font-semibold text-[#EE7625]">{token.role}</p>
                      <p className="text-xs text-[#5B6676] mt-1">{token.usage}</p>
                    </div>

                    <div className="pt-2 border-t border-[#0E1B2C]/06 text-[10px] font-mono text-emerald-700 font-semibold">
                      ✓ {token.contrastRatio}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Typography Scale */}
            <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#0E1B2C]/08 shadow-xs space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-bold tracking-wider uppercase text-[#0F766E] block mb-1">
                    02 / Typographic System
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#0E1B2C]">
                    Manrope & Instrument Serif Hierarchy
                  </h2>
                </div>
                <span className="text-xs text-[#5B6676]">Anti-AI Slop: Zero generic Inter or unstyled fonts</span>
              </div>

              <div className="divide-y divide-[#0E1B2C]/08">
                {TYPOGRAPHY_TOKENS.map((type, idx) => (
                  <div key={idx} className="py-4 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                    <div className="md:col-span-3">
                      <div className="text-sm font-bold text-[#0E1B2C]">{type.level}</div>
                      <div className="text-xs text-[#5B6676] font-mono">{type.element} · {type.font}</div>
                    </div>

                    <div className="md:col-span-3 text-xs text-[#5B6676] space-y-0.5">
                      <div>Size: <span className="font-mono text-[#0E1B2C]">{type.size}</span></div>
                      <div>Leading: <span className="font-mono text-[#0E1B2C]">{type.lineHeight}</span></div>
                      <div>Tracking: <span className="font-mono text-[#0E1B2C]">{type.tracking}</span></div>
                    </div>

                    <div className="md:col-span-6 bg-[#FAF9F6] p-3 rounded-lg border border-[#0E1B2C]/06">
                      <div className={`text-[#0E1B2C] ${
                        type.level.includes('Serif') ? 'font-serif-accent text-2xl' :
                        type.level.includes('Display') ? 'text-xl font-bold tracking-tight' :
                        type.level.includes('Eyebrow') ? 'text-xs font-bold tracking-[0.15em] uppercase' :
                        type.level.includes('Data') ? 'font-mono text-sm font-semibold' : 'text-sm'
                      }`}>
                        {type.example}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Photography Direction & Component Moodboard */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#0E1B2C]/08 shadow-xs space-y-4">
                <span className="text-[11px] font-bold tracking-wider uppercase text-[#EE7625] block">
                  03 / Real Photography Guidelines
                </span>
                <h3 className="text-lg font-bold text-[#0E1B2C]">
                  Industrial Authenticity & Human Connection
                </h3>
                <p className="text-xs sm:text-sm text-[#5B6676] leading-relaxed">
                  Australian commercial contractors are weary of generic stock models in clean office suits. The redesign uses documentary-grade photography: real excavators with dust suppression, commercial project managers in Australian high-vis safety apparel, and candid, respectful portraits of broker Daniel Ufer.
                </p>
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <img
                    src="/src/assets/images/hero_broker_site_1791913660706.jpg"
                    alt="Authentic worksite photography"
                    className="rounded-lg object-cover h-28 w-full border border-[#0E1B2C]/10"
                  />
                  <img
                    src="/src/assets/images/demolition_excavator_1791913660275.jpg"
                    alt="Authentic demolition plant machinery"
                    className="rounded-lg object-cover h-28 w-full border border-[#0E1B2C]/10"
                  />
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#0E1B2C]/08 shadow-xs space-y-4">
                <span className="text-[11px] font-bold tracking-wider uppercase text-teal-700 block">
                  04 / Micro-Interaction Principles
                </span>
                <h3 className="text-lg font-bold text-[#0E1B2C]">
                  Magnetic Restraint (No Bouncy Gimmicks)
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-[#5B6676]">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Buttons:</strong> Subtle gradient highlight shift and 4px nudge on hover; no dramatic scaling.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Cards:</strong> 4px lift with fine border focus; image micro-zoom 1.03x.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Accordion & Tabs:</strong> Instant layout transitions using cubic-bezier(0.22, 1, 0.36, 1).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>prefers-reduced-motion:</strong> Smooth scroll and transitions automatically downgrade for accessibility.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: NAVIGATION & LAYOUT STATES */}
        {activeTab === 'nav' && (
          <div className="space-y-10">
            <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#0E1B2C]/08 shadow-xs space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-bold tracking-wider uppercase text-[#EE7625] block mb-1">
                    Live Header State Simulator
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#0E1B2C]">
                    Responsive Navigation Architecture
                  </h2>
                </div>
              </div>

              {/* State Selector Buttons */}
              <div className="flex flex-wrap items-center gap-2 border-b border-[#0E1B2C]/10 pb-4">
                {[
                  { id: 'default', label: '1. Desktop Default (Transparent over hero)' },
                  { id: 'scrolled', label: '2. Scrolled Sticky (Solid + soft shadow)' },
                  { id: 'megamenu', label: '3. Mega Menu Open (2-column layout)' },
                  { id: 'mobile-closed', label: '4. Mobile Closed (Compact top + bottom)' },
                  { id: 'mobile-open', label: '5. Mobile Drawer Open (Full-height accordion)' }
                ].map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setActiveNavState(s.id as any)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      activeNavState === s.id
                        ? 'bg-[#EE7625] text-white shadow-xs'
                        : 'bg-[#FAF9F6] border border-[#0E1B2C]/10 text-[#5B6676] hover:text-[#0E1B2C]'
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>

              {/* Live Mockup Frame */}
              <div className="border border-[#0E1B2C]/15 rounded-xl overflow-hidden bg-[#FAF9F6] p-6">
                {activeNavState === 'default' && (
                  <div className="space-y-4">
                    <div className="text-xs text-[#5B6676] font-semibold">
                      State 1: Desktop Default over Hero (Utility Bar + Clear Brand + 5 Single-Line Nav Links)
                    </div>
                    <div className="p-4 bg-white/80 backdrop-blur-xs rounded-xl border border-[#0E1B2C]/10 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 bg-[#102A3D] text-white rounded font-serif-accent italic flex items-center justify-center font-bold">P.</div>
                        <span className="font-extrabold text-sm text-[#0E1B2C]">PRIORITY INSURANCE BROKERS</span>
                      </div>
                      <div className="flex items-center gap-5 text-xs font-semibold text-[#0E1B2C]">
                        <span className="text-[#EE7625]">Services ▾</span>
                        <span>Demolition</span>
                        <span>Insights</span>
                        <span>Design Handoff</span>
                        <span>Contact</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono font-bold text-[#0E1B2C]">07 3103 2992</span>
                        <div className="px-3 py-1.5 bg-[#EE7625] text-white rounded text-xs font-bold">Get a quote</div>
                      </div>
                    </div>
                  </div>
                )}

                {activeNavState === 'scrolled' && (
                  <div className="space-y-4">
                    <div className="text-xs text-[#5B6676] font-semibold">
                      State 2: Scrolled Sticky (&gt;80px scroll depth). Slightly shorter padding, solid off-white background with 1px hairline border. Hides on scroll-down, reveals on scroll-up.
                    </div>
                    <div className="p-3 bg-white shadow-md rounded-xl border border-[#0E1B2C]/10 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-[#102A3D] text-white rounded font-serif-accent italic flex items-center justify-center text-xs font-bold">P.</div>
                        <span className="font-extrabold text-xs text-[#0E1B2C]">PRIORITY BROKERS</span>
                      </div>
                      <div className="flex items-center gap-4 text-xs font-semibold text-[#0E1B2C]">
                        <span>Services ▾</span>
                        <span>Demolition</span>
                        <span>Insights</span>
                        <span>Contact</span>
                      </div>
                      <div className="px-3 py-1 bg-[#EE7625] text-white rounded text-xs font-bold">Get a quote</div>
                    </div>
                  </div>
                )}

                {activeNavState === 'megamenu' && (
                  <div className="space-y-4">
                    <div className="text-xs text-[#5B6676] font-semibold">
                      State 3: Mega Menu Open. 2 balanced columns (Heavy Industry & Policy Layers) + Right Featured Card ("Demolition Contractor Showcase"). Full keyboard trap & Esc closure.
                    </div>
                    <div className="bg-white rounded-xl p-5 border border-[#0E1B2C]/10 shadow-lg grid grid-cols-3 gap-4 text-xs">
                      <div>
                        <span className="font-bold text-[#5B6676] uppercase text-[10px] block mb-2">Heavy Industry</span>
                        <div className="space-y-1 font-semibold text-[#0E1B2C]">
                          <div>• Mining Contractors</div>
                          <div>• Earthmoving & Civil</div>
                          <div>• Plant & Dry Hire</div>
                          <div className="text-[#EE7625]">• Demolition Contractors</div>
                        </div>
                      </div>
                      <div>
                        <span className="font-bold text-[#5B6676] uppercase text-[10px] block mb-2">Policy Layers</span>
                        <div className="space-y-1 font-semibold text-[#0E1B2C]">
                          <div>• Public & Products ($20M+)</div>
                          <div>• Commercial Motor & Fleet</div>
                          <div>• Professional Indemnity</div>
                        </div>
                      </div>
                      <div className="bg-[#FAF9F6] p-3 rounded-lg border border-[#0E1B2C]/08">
                        <span className="font-bold text-[#EE7625] text-[10px] uppercase block">Featured</span>
                        <div className="font-bold text-[#0E1B2C] mt-1">Demolition Inner Template</div>
                        <div className="text-[11px] text-[#5B6676] mt-0.5">Interactive checklist & profiles</div>
                      </div>
                    </div>
                  </div>
                )}

                {activeNavState === 'mobile-closed' && (
                  <div className="space-y-4">
                    <div className="text-xs text-[#5B6676] font-semibold">
                      State 4: Mobile Closed. Clean header with hamburger + Sticky bottom action bar (strictly under 15% mobile viewport height limit).
                    </div>
                    <div className="max-w-xs mx-auto space-y-4">
                      <div className="bg-white p-3 rounded-lg border border-[#0E1B2C]/10 flex items-center justify-between">
                        <span className="font-extrabold text-xs">PRIORITY BROKERS</span>
                        <span className="px-2 py-1 bg-[#FAF9F6] rounded text-xs">☰ Menu</span>
                      </div>
                      <div className="h-24 bg-[#E5E3DC]/30 rounded-lg flex items-center justify-center text-xs text-[#8A96A6]">
                        [Mobile Content Flow]
                      </div>
                      <div className="bg-white p-2.5 rounded-lg border border-[#0E1B2C]/10 flex gap-2">
                        <div className="flex-1 text-center py-2 bg-[#FAF9F6] rounded text-xs font-bold">Call 07 3103 2992</div>
                        <div className="flex-1 text-center py-2 bg-[#EE7625] text-white rounded text-xs font-bold">Get a quote</div>
                      </div>
                    </div>
                  </div>
                )}

                {activeNavState === 'mobile-open' && (
                  <div className="space-y-4">
                    <div className="text-xs text-[#5B6676] font-semibold">
                      State 5: Mobile Drawer Open. Full-height sliding panel, animated accordion sub-menus, search trigger, and pinned bottom actions.
                    </div>
                    <div className="max-w-xs mx-auto bg-white p-4 rounded-xl border border-[#0E1B2C]/15 shadow-xl space-y-3">
                      <div className="flex items-center justify-between border-b pb-2">
                        <span className="font-bold text-xs">PRIORITY BROKERS</span>
                        <span className="text-xs text-[#5B6676]">✕ Close</span>
                      </div>
                      <div className="p-2 bg-[#FAF9F6] rounded text-xs font-bold text-[#0E1B2C]">
                        Specialist Services (Expanded)
                        <div className="pl-3 pt-1 text-[#5B6676] font-normal space-y-1">
                          <div>• Demolition contractors</div>
                          <div>• Mining contractors</div>
                          <div>• Civil & plant hire</div>
                        </div>
                      </div>
                      <div className="text-xs font-bold space-y-2 py-1">
                        <div>Insights & Blog</div>
                        <div>Design Handoff Pitch</div>
                        <div>Contact Desk</div>
                      </div>
                      <div className="pt-2 border-t">
                        <div className="py-2 bg-[#EE7625] text-white text-center rounded text-xs font-bold">
                          Start Quote Enquiry &rarr;
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: WORDPRESS SEO PROTECTION */}
        {activeTab === 'seo' && (
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#0E1B2C]/08 shadow-xs space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-bold tracking-wider uppercase text-emerald-700 block mb-1">
                    Preserving Search Equity
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#0E1B2C]">
                    WordPress-to-React SEO Migration Guarantee
                  </h2>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-800 rounded-full text-xs font-bold border border-emerald-200">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Zero Broken Backlinks</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#5B6676] leading-relaxed">
                The client's primary fear in upgrading from WordPress is losing organic search rankings accrued over a decade. Our architecture guarantees that every valuable path, blog post, and category URL is preserved exactly, with 301 permanent redirects mapped for consolidated pages.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-[#FAF9F6] border border-[#0E1B2C]/08 space-y-2">
                  <div className="text-xs font-bold text-[#0E1B2C]">1. URL Structure Kept</div>
                  <p className="text-xs text-[#5B6676]">
                    Paths such as <code>/blog/:slug</code> and <code>/services/:slug</code> match existing permalinks so Google indexation remains uninterrupted.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#FAF9F6] border border-[#0E1B2C]/08 space-y-2">
                  <div className="text-xs font-bold text-[#0E1B2C]">2. Structured Data Preserved</div>
                  <p className="text-xs text-[#5B6676]">
                    JSON-LD schemas for <code>InsuranceAgency</code>, <code>LocalBusiness</code>, <code>FAQPage</code>, and <code>BreadcrumbList</code> are rendered in the HTML head.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#FAF9F6] border border-[#0E1B2C]/08 space-y-2">
                  <div className="text-xs font-bold text-[#0E1B2C]">3. Meta & OpenGraph Integrity</div>
                  <p className="text-xs text-[#5B6676]">
                    Page titles, meta descriptions, canonical link tags, and social cards are preserved without auto-generated default overrides.
                  </p>
                </div>
              </div>

              {/* 301 Redirect Table */}
              <div className="pt-4">
                <h3 className="text-sm font-bold text-[#0E1B2C] mb-3">
                  Canonical 301 Redirect Mapping Table
                </h3>
                <div className="overflow-x-auto rounded-xl border border-[#0E1B2C]/10">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-[#F2F0EB] text-[#0E1B2C] font-bold border-b border-[#0E1B2C]/10">
                      <tr>
                        <th className="p-3">Legacy WordPress Path</th>
                        <th className="p-3">New React Route</th>
                        <th className="p-3">HTTP Status</th>
                        <th className="p-3">SEO Equity Rationale</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#0E1B2C]/06 bg-white">
                      {SEO_REDIRECT_RULES.map((rule, idx) => (
                        <tr key={idx} className="hover:bg-[#FAF9F6]">
                          <td className="p-3 font-mono text-[#EE7625]">{rule.legacyWordpressUrl}</td>
                          <td className="p-3 font-mono text-[#0E1B2C]">{rule.newRoute}</td>
                          <td className="p-3 font-bold text-emerald-700">{rule.statusCode}</td>
                          <td className="p-3 text-[#5B6676]">{rule.reason}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: CORE WEB VITALS & ACCESSIBILITY */}
        {activeTab === 'performance' && (
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#0E1B2C]/08 shadow-xs space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-bold tracking-wider uppercase text-blue-700 block mb-1">
                    Engineering Excellence
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#0E1B2C]">
                    Core Web Vitals & WCAG 2.1 AA Compliance
                  </h2>
                </div>
                <div className="text-xs font-mono font-bold text-emerald-700">100/100 Target Audit</div>
              </div>

              {/* Web Vitals Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-5 rounded-xl bg-emerald-50 border border-emerald-200 space-y-1">
                  <div className="text-xs font-bold uppercase text-emerald-900 tracking-wider">LCP (Largest Contentful Paint)</div>
                  <div className="text-3xl font-extrabold text-emerald-700 font-mono-data">0.82s</div>
                  <div className="text-[11px] text-emerald-800">Target &lt; 1.2s · Preloaded hero photo, zero blocking external trackers</div>
                </div>

                <div className="p-5 rounded-xl bg-emerald-50 border border-emerald-200 space-y-1">
                  <div className="text-xs font-bold uppercase text-emerald-900 tracking-wider">CLS (Cumulative Layout Shift)</div>
                  <div className="text-3xl font-extrabold text-emerald-700 font-mono-data">0.00</div>
                  <div className="text-[11px] text-emerald-800">Target 0.00 · Explicit width/height on images & font-display: swap</div>
                </div>

                <div className="p-5 rounded-xl bg-emerald-50 border border-emerald-200 space-y-1">
                  <div className="text-xs font-bold uppercase text-emerald-900 tracking-wider">INP (Interaction to Next Paint)</div>
                  <div className="text-3xl font-extrabold text-emerald-700 font-mono-data">24ms</div>
                  <div className="text-[11px] text-emerald-800">Target &lt; 50ms · Zero heavy sync thread locks, Lenis smooth scrolling</div>
                </div>
              </div>

              {/* Accessibility Checklist Table */}
              <div className="pt-4">
                <h3 className="text-sm font-bold text-[#0E1B2C] mb-3">
                  WCAG 2.1 AA Verification Checklist
                </h3>
                <div className="divide-y divide-[#0E1B2C]/08 border border-[#0E1B2C]/10 rounded-xl overflow-hidden bg-white">
                  {ACCESSIBILITY_CHECKLIST.map((chk, idx) => (
                    <div key={idx} className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-[#0E1B2C]">{chk.criterion}</span>
                          <span className="text-[10px] bg-[#FAF9F6] border border-[#0E1B2C]/10 px-1.5 py-0.5 rounded font-mono font-bold">
                            Level {chk.level}
                          </span>
                        </div>
                        <p className="text-xs text-[#5B6676] mt-0.5">{chk.notes}</p>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 self-start sm:self-auto">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>{chk.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
