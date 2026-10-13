import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight,
  ShieldCheck,
  Check,
  Plus,
  Minus,
  PhoneCall,
  ChevronRight,
  Sparkles,
  Building2,
  HardHat,
  Truck,
  Flame,
  FileCheck2,
  Users
} from 'lucide-react';
import { COMPANY } from '../data/company';
import { SERVICES } from '../data/services';
import { CASE_STUDIES } from '../data/caseStudies';
import { useQuoteModal } from '../context/QuoteModalContext';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/motion/FadeIn';
import { HeadlineReveal } from '../components/motion/HeadlineReveal';
import { MagneticButton } from '../components/motion/MagneticButton';
import { StatCounter } from '../components/motion/StatCounter';

export function HomePage() {
  const { openQuoteModal } = useQuoteModal();

  // Industry tabs state
  const [activeIndustryTab, setActiveIndustryTab] = useState<'mining' | 'construction' | 'commercial'>('mining');

  // Case study active tab
  const [activeCaseTab, setActiveCaseTab] = useState(0);

  // FAQ accordion state
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const homeFaqs = [
    {
      q: "Can you help with complex or hard-to-place risks?",
      a: "Yes. Many of our clients come to us after standard direct insurers or online algorithms declined their risk or imposed onerous exclusions. As part of the Steadfast network, we access underwriting agencies and Lloyd's syndicates that manually assess high-risk trades, hazardous materials, and complex contracts on their true merit."
    },
    {
      q: "Can you review my existing business insurance before renewal?",
      a: "Absolutely. We routinely conduct comprehensive policy audits. We check your declared turnover, occupation descriptions, height and depth limits, subcontractor clauses, and PDS endorsements to expose silent gaps or verify whether your current premium is competitive."
    },
    {
      q: "Do you support businesses outside Brisbane?",
      a: "Yes. While our primary advisory office is located in South Brisbane, we manage commercial programs for mining contractors, earthmovers, demolition companies, and transport fleets across Queensland, New South Wales, Victoria, Western Australia, and the Northern Territory."
    },
    {
      q: "How quickly can you arrange a quote and certificate of currency?",
      a: "For straightforward commercial packages, quotes can be provided within 24 to 48 hours. For high-risk operations (such as demolition or underground mining), we work expeditiously to prepare underwriter submissions and often turn certificates around within 48 to 72 hours once operational data is confirmed."
    },
    {
      q: "What happens if I need to make a claim?",
      a: "You deal directly with Daniel and our Brisbane claims team—not an overseas call centre or a robot. We step in immediately to appoint assessors, manage insurer paperwork, challenge unjust sub-limits, and advocate forcefully for your business until payment is made."
    }
  ];

  const industryCardsData = {
    mining: [
      {
        num: "01",
        title: "Mining contractors",
        desc: "Mine-site services, shutdowns, maintenance and demanding operational risks across open-cut and underground pits.",
        slug: "mining-contractors"
      },
      {
        num: "02",
        title: "Earthmoving & civil",
        desc: "Contractors, excavators and civil teams working with heavy mobile plant, trenching and underground utility interfaces.",
        slug: "earthmoving-civil"
      },
      {
        num: "03",
        title: "Plant & dry hire",
        desc: "Cover considerations for owned machinery, dry hire agreements, theft by conversion, and cross-hiring arrangements.",
        slug: "plant-dry-hire"
      }
    ],
    construction: [
      {
        num: "01",
        title: "Demolition contractors",
        desc: "Full structural demolition, mechanical deconstructions, licensed asbestos removal and commercial internal strip-outs.",
        slug: "demolition-contractors"
      },
      {
        num: "02",
        title: "Commercial builders & trades",
        desc: "Contract works, structural alterations, tier-1 subcontractor indemnity deeds and statutory compliance.",
        slug: "public-liability"
      },
      {
        num: "03",
        title: "Directional drilling & trenching",
        desc: "Dial-Before-You-Dig procedures, service strikes, vibration damage and public liability protections.",
        slug: "earthmoving-civil"
      }
    ],
    commercial: [
      {
        num: "01",
        title: "Commercial motor & fleet",
        desc: "Heavy haulage, rigid tippers, service utes and company vehicle fleets with fast downtime claims response.",
        slug: "commercial-motor-fleet"
      },
      {
        num: "02",
        title: "Public & products liability",
        desc: "Broadform liability up to $50M+ covering third-party bodily injury and property loss on major commercial sites.",
        slug: "public-liability"
      },
      {
        num: "03",
        title: "Management liability & cyber",
        desc: "Statutory fines, director defense costs, invoice interception fraud and executive liabilities.",
        slug: "demolition-contractors"
      }
    ]
  };

  return (
    <div className="w-full">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-[#FAF9F6]">
        {/* Slow-moving soft gradient mesh blobs */}
        <div className="absolute top-12 left-1/4 w-96 h-96 rounded-full bg-gradient-to-tr from-teal-200/30 via-blue-200/20 to-transparent blur-3xl pointer-events-none animate-mesh-slow" />
        <div className="absolute top-24 right-10 w-80 h-80 rounded-full bg-gradient-to-br from-amber-200/25 to-orange-200/20 blur-3xl pointer-events-none animate-mesh-slow" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Proposition Copy */}
            <div className="lg:col-span-7 space-y-6">
              {/* Eyebrow */}
              <FadeIn delay={0.05} yOffset={12}>
                <div className="inline-flex items-center gap-2">
                  <span className="text-[11px] font-bold tracking-[0.16em] text-[#5B6676] uppercase">
                    Business insurance for the real world
                  </span>
                </div>
              </FadeIn>

              {/* Headline with Word Slide-up Reveal */}
              <div className="space-y-1">
                <HeadlineReveal
                  as="h1"
                  text="Your business moves fast."
                  delay={0.12}
                  className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0E1B2C] tracking-tight leading-[1.08] block"
                />
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0E1B2C] tracking-tight leading-[1.08] block">
                  Your insurance should{' '}
                  <span className="font-serif-accent font-normal italic text-[#EE7625]">
                    keep up.
                  </span>
                </h1>
              </div>

              {/* Supporting Line */}
              <FadeIn delay={0.3} yOffset={16}>
                <p className="text-base sm:text-lg text-[#5B6676] max-w-xl leading-relaxed">
                  Specialist commercial insurance for established businesses, complex operations and the people building Australia.
                </p>
              </FadeIn>

              {/* CTA Row with Magnetic Button */}
              <FadeIn delay={0.4} yOffset={16}>
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <MagneticButton
                    onClick={() => openQuoteModal()}
                    className="px-6 py-3.5 bg-gradient-to-r from-[#EE7625] to-[#F97362] hover:from-[#D96216] hover:to-[#EE7625] text-white rounded-lg font-bold text-sm flex items-center justify-center gap-2 shadow-sm transition-all hover:shadow hover:-translate-y-0.5"
                  >
                    <span>Get my business covered</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </MagneticButton>

                  <a
                    href="#industries"
                    className="px-6 py-3.5 bg-white border border-[#0E1B2C]/15 hover:border-[#0E1B2C]/30 text-[#0E1B2C] rounded-lg font-semibold text-sm flex items-center justify-center gap-2 transition-all hover:bg-[#F2F0EB]"
                  >
                    Explore your industry
                  </a>
                </div>
              </FadeIn>

              {/* 3 Trust Ticks */}
              <FadeIn delay={0.5} yOffset={16}>
                <div className="pt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-semibold text-[#0E1B2C]">
                  <div className="flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Real broker advice</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Complex risks understood</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Claims support</span>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right Column: Hero Visual Asset with Clip-Path Reveal + Floating Card */}
            <div className="lg:col-span-5 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#0E1B2C]/10 aspect-4/3 lg:aspect-5/4 group"
              >
                <img
                  src="/src/assets/images/hero_broker_site_1791913660706.jpg"
                  alt="Priority Insurance Broker consulting with project manager on Australian worksite"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="eager"
                  width={800}
                  height={640}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E1B2C]/70 via-transparent to-black/10" />

                {/* Bottom Left Badge in Photo */}
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-white">
                  <div>
                    <span className="text-[10px] tracking-widest uppercase font-bold text-amber-300 block">
                      Priority Insurance
                    </span>
                    <span className="text-xs font-medium text-slate-200">
                      Mining · Construction · Commercial
                    </span>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-xs font-bold font-serif-accent italic text-amber-300">
                    P.
                  </div>
                </div>
              </motion.div>

              {/* Floating "Real People In Your Corner" Card with Gentle Float Animation */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="absolute -top-4 -right-4 sm:-right-6 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-xl border border-[#0E1B2C]/10 max-w-[240px] hidden sm:block animate-float"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="text-[11px] font-bold text-[#0E1B2C] tracking-wide">
                    Real people. In your corner.
                  </span>
                </div>
                <p className="text-[11px] text-[#5B6676] leading-tight">
                  Meet Daniel and the Priority broker team in South Brisbane.
                </p>
                <Link
                  to="/contact"
                  className="mt-2 text-[11px] font-bold text-[#EE7625] hover:text-[#D96216] inline-flex items-center gap-1 group/link"
                >
                  <span>Speak with a broker</span>
                  <span className="group-hover/link:translate-x-1 transition-transform">&rarr;</span>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST STRIP (4 credentials with dividers) */}
      <section className="bg-white border-y border-[#0E1B2C]/08 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#0E1B2C]/08">
            <div className="p-4 sm:px-6 first:pl-0">
              <h4 className="text-sm font-bold text-[#0E1B2C]">Specialist advice</h4>
              <p className="text-xs text-[#5B6676] mt-0.5">Backed by a wider network</p>
            </div>
            <div className="p-4 sm:px-6">
              <h4 className="text-sm font-bold text-[#0E1B2C]">Steadfast network</h4>
              <p className="text-xs text-[#5B6676] mt-0.5">Through Community Broker Network</p>
            </div>
            <div className="p-4 sm:px-6">
              <h4 className="text-sm font-bold text-[#0E1B2C]">Award-winning</h4>
              <p className="text-xs text-[#5B6676] mt-0.5">Recognised for broking & service</p>
            </div>
            <div className="p-4 sm:px-6 last:pr-0">
              <h4 className="text-sm font-bold text-[#0E1B2C]">Australia-wide</h4>
              <p className="text-xs text-[#5B6676] mt-0.5">Brisbane people. National reach.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INDUSTRIES / SERVICES TABBED SECTION */}
      <section id="industries" className="py-20 lg:py-28 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-[11px] font-bold tracking-[0.16em] text-[#5B6676] uppercase block mb-2">
                01 / We understand your world
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0E1B2C] tracking-tight">
                Complex work.<br />Clear insurance advice.
              </h2>
            </div>
            <p className="text-sm text-[#5B6676] max-w-md leading-relaxed">
              From high-risk demolition and mine sites to growing commercial fleets, we help explain your risk to the right insurance markets.
            </p>
          </div>

          {/* Animated Filter Tabs */}
          <div className="flex items-center gap-2 border-b border-[#0E1B2C]/10 mb-8 overflow-x-auto pb-px">
            <button
              onClick={() => setActiveIndustryTab('mining')}
              className={`relative pb-3 px-3 text-xs sm:text-sm font-bold transition-colors whitespace-nowrap ${
                activeIndustryTab === 'mining' ? 'text-[#0E1B2C]' : 'text-[#5B6676] hover:text-[#0E1B2C]'
              }`}
            >
              Mining & resources
              {activeIndustryTab === 'mining' && (
                <motion.div
                  layoutId="tabUnderline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#EE7625]"
                />
              )}
            </button>

            <button
              onClick={() => setActiveIndustryTab('construction')}
              className={`relative pb-3 px-3 text-xs sm:text-sm font-bold transition-colors whitespace-nowrap ${
                activeIndustryTab === 'construction' ? 'text-[#0E1B2C]' : 'text-[#5B6676] hover:text-[#0E1B2C]'
              }`}
            >
              Construction & trades
              {activeIndustryTab === 'construction' && (
                <motion.div
                  layoutId="tabUnderline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#EE7625]"
                />
              )}
            </button>

            <button
              onClick={() => setActiveIndustryTab('commercial')}
              className={`relative pb-3 px-3 text-xs sm:text-sm font-bold transition-colors whitespace-nowrap ${
                activeIndustryTab === 'commercial' ? 'text-[#0E1B2C]' : 'text-[#5B6676] hover:text-[#0E1B2C]'
              }`}
            >
              Commercial & specialist
              {activeIndustryTab === 'commercial' && (
                <motion.div
                  layoutId="tabUnderline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#EE7625]"
                />
              )}
            </button>
          </div>

          {/* Cards Grid with AnimatePresence */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndustryTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {industryCardsData[activeIndustryTab].map((card) => (
                <div
                  key={card.num + card.title}
                  className="bg-white rounded-xl p-7 border border-[#0E1B2C]/08 shadow-xs hover:shadow-lg transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group card-hover-border"
                >
                  <div>
                    <div className="flex items-center justify-between text-[#5B6676] text-xs font-bold tracking-wider mb-4">
                      <span>{card.num} / YOUR INDUSTRY</span>
                      <span className="text-[#EE7625] opacity-0 group-hover:opacity-100 transition-opacity">
                        Priority Focus
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-[#0E1B2C] mb-3 group-hover:text-[#EE7625] transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5B6676] leading-relaxed">
                      {card.desc}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#0E1B2C]/06">
                    <Link
                      to={`/services/${card.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0E1B2C] group-hover:text-[#EE7625] transition-colors"
                    >
                      <span>Explore cover options</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Bottom Prompt Link */}
          <div className="mt-10 p-5 rounded-xl bg-[#F2F0EB] border border-[#0E1B2C]/06 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <span className="text-xs sm:text-sm text-[#0E1B2C] font-semibold">
              Unusual activities? Previous claims? A contract with strict new requirements?
            </span>
            <button
              onClick={() => openQuoteModal()}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#EE7625] hover:text-[#D96216] transition-colors shrink-0"
            >
              <span>Talk it through with a broker</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* 4. CLIENT OUTCOME / CASE STUDY PANEL */}
      <section className="py-20 lg:py-28 bg-white border-t border-[#0E1B2C]/08">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
            {/* Left Header & Tabs (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[11px] font-bold tracking-[0.16em] text-[#5B6676] uppercase block">
                02 / The difference advice makes
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0E1B2C] tracking-tight">
                Insurance matters most when business gets real.
              </h2>
              <p className="text-sm text-[#5B6676] leading-relaxed">
                Two client outcomes published by Priority. Practical examples of what thoughtful broking and claims support can mean.
              </p>

              {/* Tabs */}
              <div className="space-y-2 pt-2">
                {CASE_STUDIES.map((study, idx) => (
                  <button
                    key={study.id}
                    onClick={() => setActiveCaseTab(idx)}
                    className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between ${
                      activeCaseTab === idx
                        ? 'bg-[#FAF9F6] border-[#0E1B2C]/20 shadow-xs'
                        : 'border-[#0E1B2C]/06 hover:border-[#0E1B2C]/15 bg-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold text-[#EE7625]">
                        {study.tabNumber}
                      </span>
                      <span className="text-sm font-bold text-[#0E1B2C]">
                        {study.tabTitle}
                      </span>
                    </div>
                    <ChevronRight
                      className={`w-4 h-4 text-[#5B6676] transition-transform ${
                        activeCaseTab === idx ? 'rotate-90 text-[#EE7625]' : ''
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Right Active Case Outcome Card (7 cols) */}
            <div className="lg:col-span-7 bg-[#FAF9F6] rounded-2xl p-6 sm:p-10 border border-[#0E1B2C]/10 shadow-sm relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCaseTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="space-y-6"
                >
                  <div>
                    <span className="text-[11px] font-mono font-semibold tracking-wider uppercase text-[#0F766E] block mb-2">
                      {CASE_STUDIES[activeCaseTab].category}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#0E1B2C] tracking-tight">
                      {CASE_STUDIES[activeCaseTab].headline}
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-[#5B6676] leading-relaxed">
                    {CASE_STUDIES[activeCaseTab].story}
                  </p>

                  {/* Big Animated Stats Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-[#0E1B2C]/10">
                    {CASE_STUDIES[activeCaseTab].metrics.map((m, i) => (
                      <div key={i} className="space-y-1">
                        <div className="text-3xl sm:text-4xl font-extrabold text-[#0E1B2C] tracking-tight font-mono-data">
                          <StatCounter value={m.value} />
                        </div>
                        <div className="text-xs text-[#5B6676] font-medium leading-snug">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Disclaimer */}
                  <p className="text-[11px] text-[#8A96A6] pt-4 border-t border-[#0E1B2C]/06">
                    {CASE_STUDIES[activeCaseTab].disclaimer}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* 5. COVER THAT WORKS TOGETHER (Layers) */}
      <section className="py-20 lg:py-28 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-[11px] font-bold tracking-[0.16em] text-[#5B6676] uppercase block mb-2">
                03 / Cover that works together
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0E1B2C] tracking-tight">
                Your business has layers.<br />Your cover should too.
              </h2>
            </div>
            <p className="text-sm text-[#5B6676] max-w-md leading-relaxed">
              We help you understand the policies that may be relevant, how they fit together, and where exclusions or gaps could exist.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {SERVICES.slice(0, 6).map((srv) => (
              <Link
                key={srv.id}
                to={`/services/${srv.slug}`}
                className="bg-white rounded-xl p-6 border border-[#0E1B2C]/08 hover:border-[#0E1B2C]/20 transition-all hover:shadow-xs flex items-start justify-between gap-4 group"
              >
                <div>
                  <h3 className="text-base font-bold text-[#0E1B2C] group-hover:text-[#EE7625] transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5B6676] mt-1.5 leading-relaxed">
                    {srv.shortDescription}
                  </p>
                </div>
                <div className="mt-1 p-1 rounded-md bg-[#FAF9F6] text-[#5B6676] group-hover:text-[#EE7625] group-hover:translate-x-0.5 transition-all shrink-0">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-[#0E1B2C]/08 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#5B6676]">
            <span>Cover is subject to policy terms, limits, exclusions and insurer acceptance. We explain the options before you decide.</span>
            <button
              onClick={() => openQuoteModal()}
              className="text-[#0E1B2C] font-bold hover:text-[#EE7625] transition-colors inline-flex items-center gap-1"
            >
              Help me find the right cover &rarr;
            </button>
          </div>
        </div>
      </section>

      {/* 6. HOW WE WORK (Dark Navy Band with Gradient Glow) */}
      <section className="py-20 lg:py-28 bg-[#102A3D] text-white relative overflow-hidden">
        {/* Ambient Teal / Ocean Glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[11px] font-bold tracking-[0.16em] text-teal-300 uppercase block">
                04 / The Priority Approach
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                A broker who sees the business behind the policy.
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                New contracts, growing teams, extra plant and changing operations all affect risk. We help your insurance keep pace.
              </p>

              <button
                type="button"
                onClick={() => openQuoteModal()}
                className="px-6 py-3.5 bg-[#EE7625] hover:bg-[#D96216] text-white rounded-lg font-bold text-sm inline-flex items-center gap-2 transition-all shadow-md"
              >
                <span>Let's talk about your business</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all">
                <div className="text-teal-400 font-mono text-xs font-bold mb-1">01</div>
                <h3 className="text-lg font-bold text-white mb-2">We get into the detail.</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  We take time to understand your activities, contracts and priorities so the risk can be presented properly to insurers.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all">
                <div className="text-teal-400 font-mono text-xs font-bold mb-1">02</div>
                <h3 className="text-lg font-bold text-white mb-2">We explain the trade-offs.</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Price matters. So do the occupation description, excesses, conditions and exclusions. You should understand what you're choosing.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all">
                <div className="text-teal-400 font-mono text-xs font-bold mb-1">03</div>
                <h3 className="text-lg font-bold text-white mb-2">We stay involved.</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Support with changes, renewals and claims, with a dedicated broker to speak to as your business develops.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. PEOPLE BEHIND YOUR POLICY (Team Feature) */}
      <section className="py-20 lg:py-28 bg-white border-b border-[#0E1B2C]/08">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Director Portrait */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#0E1B2C]/10 aspect-square max-w-md mx-auto">
                <img
                  src="/src/assets/images/broker_director_1791913660480.jpg"
                  alt="Daniel Ufer, Managing Director of Priority Insurance Brokers"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={600}
                  height={600}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E1B2C]/80 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <h4 className="text-lg font-bold">{COMPANY.director.name}</h4>
                  <p className="text-xs text-slate-300">
                    {COMPANY.director.title} · Authorised Representative {COMPANY.director.carNumber}
                  </p>
                </div>
              </div>
            </div>

            {/* Content & Credentials */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-[11px] font-bold tracking-[0.16em] text-[#5B6676] uppercase block">
                05 / People you can speak to
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0E1B2C] tracking-tight">
                Commercial expertise.<br />A personal connection.
              </h2>
              <p className="text-sm sm:text-base text-[#5B6676] leading-relaxed">
                Priority is a Brisbane-based commercial insurance brokerage supporting businesses across Australia. Daniel and the team work with trades, construction, mining and more complex operations.
              </p>

              {/* High impact quote box */}
              <div className="p-6 bg-[#FAF9F6] rounded-xl border-l-2 border-[#EE7625] space-y-3">
                <p className="text-base sm:text-lg font-bold text-[#0E1B2C] leading-snug">
                  "Your business is our priority. At quote time. At renewal. And when you need to claim."
                </p>
                <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-[#5B6676]">
                  <span className="px-2 py-1 bg-white rounded border border-[#0E1B2C]/08">Diploma of Insurance Broking</span>
                  <span className="px-2 py-1 bg-white rounded border border-[#0E1B2C]/08">Qualified Practising Insurance Broker</span>
                </div>
              </div>

              <div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#EE7625] hover:text-[#D96216] transition-colors"
                >
                  <span>Meet the Priority team in South Brisbane</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CLEAR PATH TO YOUR NEXT DECISION (3 Steps) */}
      <section className="py-20 bg-[#FAF9F6] border-b border-[#0E1B2C]/08">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12">
            <div>
              <span className="text-[11px] font-bold tracking-[0.16em] text-[#5B6676] uppercase block mb-1">
                06 / Simple Process
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0E1B2C]">
                A clear path to your next decision.
              </h2>
            </div>
            <button
              onClick={() => openQuoteModal()}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#EE7625] hover:text-[#D96216] transition-colors shrink-0"
            >
              <span>Start a conversation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-7 rounded-xl border border-[#0E1B2C]/08 shadow-xs space-y-3">
              <span className="font-mono text-xs font-bold text-[#EE7625]">01 /</span>
              <h3 className="text-base font-bold text-[#0E1B2C]">Tell us about your business.</h3>
              <p className="text-xs sm:text-sm text-[#5B6676] leading-relaxed">
                Share what you do, what has changed and when you need cover. We identify the information insurers will need.
              </p>
            </div>

            <div className="bg-white p-7 rounded-xl border border-[#0E1B2C]/08 shadow-xs space-y-3">
              <span className="font-mono text-xs font-bold text-[#0F766E]">02 /</span>
              <h3 className="text-base font-bold text-[#0E1B2C]">Understand your options.</h3>
              <p className="text-xs sm:text-sm text-[#5B6676] leading-relaxed">
                We approach suitable markets and explain the available terms, conditions, excess structures and costs.
              </p>
            </div>

            <div className="bg-white p-7 rounded-xl border border-[#0E1B2C]/08 shadow-xs space-y-3">
              <span className="font-mono text-xs font-bold text-[#1D4ED8]">03 /</span>
              <h3 className="text-base font-bold text-[#0E1B2C]">Move forward with support.</h3>
              <p className="text-xs sm:text-sm text-[#5B6676] leading-relaxed">
                Decide with clear advice, then speak with your broker about changes, renewals and claims when they happen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FAQ ACCORDION (5 accessible items) */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-[11px] font-bold tracking-[0.16em] text-[#5B6676] uppercase block">
                07 / A little clarity
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0E1B2C] tracking-tight">
                Good questions.<br />Straight answers.
              </h2>
              <p className="text-sm text-[#5B6676] leading-relaxed">
                Insurance can be complex. Your next step doesn't have to be.
              </p>
              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#EE7625] hover:text-[#D96216]"
                >
                  Ask us directly &rarr;
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 divide-y divide-[#0E1B2C]/08 border-t border-b border-[#0E1B2C]/08">
              {homeFaqs.map((faq, idx) => (
                <div key={idx} className="py-4">
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between text-left gap-4 py-2 text-sm sm:text-base font-bold text-[#0E1B2C] hover:text-[#EE7625] transition-colors"
                    aria-expanded={openFaq === idx}
                  >
                    <span>{faq.q}</span>
                    <span className="text-[#EE7625] shrink-0 font-light text-xl">
                      {openFaq === idx ? '−' : '+'}
                    </span>
                  </button>

                  <AnimatePresence>
                    {openFaq === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <p className="text-xs sm:text-sm text-[#5B6676] pt-2 pb-4 leading-relaxed">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 10. FINAL CTA BAND */}
      <section className="bg-gradient-to-r from-[#EE7625] to-[#F97362] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
                Let's make your business our next priority.
              </h2>
              <p className="text-xs sm:text-sm text-white/90 max-w-xl">
                New cover, an upcoming renewal or a more complicated risk? Start with a conversation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => openQuoteModal()}
                className="px-6 py-3.5 bg-[#102A3D] hover:bg-[#0E1B2C] text-white rounded-lg font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <span>Get my quote started</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <a
                href={`tel:${COMPANY.phoneRaw}`}
                className="px-5 py-3.5 bg-white/15 hover:bg-white/25 text-white rounded-lg font-bold text-xs sm:text-sm flex items-center justify-center gap-2 backdrop-blur-xs transition-colors"
              >
                <PhoneCall className="w-4 h-4" />
                <span>{COMPANY.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
