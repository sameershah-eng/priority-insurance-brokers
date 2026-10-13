import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight,
  Check,
  CheckSquare,
  Square,
  Download,
  PhoneCall,
  ShieldAlert,
  ChevronDown,
  Sparkles,
  FileText
} from 'lucide-react';
import { SERVICES } from '../data/services';
import { COMPANY } from '../data/company';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { useQuoteModal } from '../context/QuoteModalContext';
import { FadeIn } from '../components/motion/FadeIn';
import { HeadlineReveal } from '../components/motion/HeadlineReveal';
import { MagneticButton } from '../components/motion/MagneticButton';

export function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { openQuoteModal } = useQuoteModal();

  // Find service
  const service = SERVICES.find(s => s.slug === slug) || SERVICES[0];

  if (!service) {
    return <Navigate to="/services/demolition-contractors" replace />;
  }

  // Work Profile tab state
  const [activeProfileTab, setActiveProfileTab] = useState(0);

  // Risk factors accordion
  const [openRiskFactor, setOpenRiskFactor] = useState<number | null>(0);

  // Quote Checklist interactive checks (0 to 6)
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const [checklistDownloaded, setChecklistDownloaded] = useState(false);

  // FAQ accordion
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleChecklist = (id: string) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const checkedCount = Object.values(checkedItems).filter(Boolean).length;
  const totalCount = service.quoteChecklist.length;

  const handleDownloadChecklist = () => {
    setChecklistDownloaded(true);
    // Simulate generation of text summary
    const checklistText = `PRIORITY INSURANCE BROKERS - QUOTE PREPARATION CHECKLIST
Service: ${service.title}
Items Prepared (${checkedCount}/${totalCount}):
${service.quoteChecklist.map((item, i) => `${i + 1}. [${checkedItems[item.id] ? 'X' : ' '}] ${item.title}: ${item.description}`).join('\n')}

Contact: 07 3103 2992 | quotes@priorityib.com.au
AFSL 233750`;

    const blob = new Blob([checklistText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${service.slug}-quote-checklist.txt`;
    a.click();
    URL.revokeObjectURL(url);
    setTimeout(() => setChecklistDownloaded(false), 3000);
  };

  return (
    <div className="w-full pt-28 lg:pt-32">
      {/* 1. HERO SECTION */}
      <section className="bg-[#FAF9F6] border-b border-[#0E1B2C]/08 pb-16 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <Breadcrumbs
            items={[
              { label: 'Services', path: '/#industries' },
              { label: service.title }
            ]}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center mt-6">
            {/* Copy Column */}
            <div className="lg:col-span-7 space-y-5">
              <FadeIn delay={0.05} yOffset={12}>
                <span className="text-[11px] font-bold tracking-[0.16em] text-[#5B6676] uppercase block">
                  Specialist Commercial Insurance
                </span>
              </FadeIn>

              <div className="space-y-1">
                <HeadlineReveal
                  as="h1"
                  text={`${service.title} insurance.`}
                  delay={0.12}
                  className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0E1B2C] tracking-tight leading-[1.12] block"
                />
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0E1B2C] tracking-tight leading-[1.12] block">
                  <span className="font-serif-accent font-normal italic text-[#EE7625]">
                    Built around your work.
                  </span>
                </h1>
              </div>

              <FadeIn delay={0.25} yOffset={16}>
                <p className="text-base sm:text-lg text-[#5B6676] max-w-xl leading-relaxed">
                  {service.heroSubheadline}
                </p>
              </FadeIn>

              {/* Action Buttons */}
              <FadeIn delay={0.35} yOffset={16}>
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <MagneticButton
                    onClick={() => openQuoteModal({ industry: service.title })}
                    className="px-6 py-3.5 bg-[#EE7625] hover:bg-[#D96216] text-white rounded-lg font-bold text-sm flex items-center justify-center gap-2 shadow-sm transition-all"
                  >
                    <span>Get my {service.title.toLowerCase()} quote</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </MagneticButton>

                  <a
                    href={`tel:${COMPANY.phoneRaw}`}
                    className="px-6 py-3.5 bg-white border border-[#0E1B2C]/15 hover:border-[#0E1B2C]/30 text-[#0E1B2C] rounded-lg font-semibold text-sm flex items-center justify-center gap-2 transition-all hover:bg-[#F2F0EB]"
                  >
                    <PhoneCall className="w-4 h-4 text-[#EE7625]" />
                    <span>Speak with a broker</span>
                  </a>
                </div>
              </FadeIn>

              {/* Trust badges */}
              <FadeIn delay={0.45} yOffset={16}>
                <div className="pt-3 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-semibold text-[#0E1B2C]">
                  <div className="flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{service.title} risks understood</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Asbestos considered separately</span>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Visual Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#0E1B2C]/10 aspect-4/3 lg:aspect-5/4">
                <img
                  src={service.heroImage}
                  alt={`${service.title} operational site in Australia`}
                  className="w-full h-full object-cover"
                  loading="eager"
                  width={800}
                  height={640}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E1B2C]/80 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-amber-300 block">
                      Big work. Important details.
                    </span>
                    <span className="text-xs text-slate-200">
                      Your business is our priority.
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center font-bold font-serif-accent text-amber-300 italic">
                    P.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE SCOPE CHANGES THE RISK (Work Profiles Tabs) */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <span className="text-[11px] font-bold tracking-[0.16em] text-[#5B6676] uppercase block mb-2">
                01 / The scope changes the risk
              </span>
              <h2 className="text-3xl font-extrabold text-[#0E1B2C] tracking-tight">
                Your work needs the right description.
              </h2>
            </div>
            <p className="text-sm text-[#5B6676] max-w-md leading-relaxed">
              Full structural demolition, partial removal and soft strip-outs raise different questions. Select your work profile to see what we would discuss.
            </p>
          </div>

          {/* Profile Tabs */}
          <div className="flex items-center gap-2 border-b border-[#0E1B2C]/10 mb-8 overflow-x-auto pb-px">
            {service.workProfiles.map((profile, idx) => (
              <button
                key={profile.id}
                onClick={() => setActiveProfileTab(idx)}
                className={`relative pb-3 px-3 text-xs sm:text-sm font-bold transition-colors whitespace-nowrap ${
                  activeProfileTab === idx ? 'text-[#0E1B2C]' : 'text-[#5B6676] hover:text-[#0E1B2C]'
                }`}
              >
                {profile.name}
                {activeProfileTab === idx && (
                  <motion.div
                    layoutId="profileUnderline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#EE7625]"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Profile Content Card */}
          <div className="bg-[#FAF9F6] rounded-2xl p-6 sm:p-10 border border-[#0E1B2C]/10 shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5 space-y-4">
                <span className="font-mono text-xs font-bold text-[#EE7625] uppercase tracking-wider block">
                  0{activeProfileTab + 1} / WORK PROFILE
                </span>
                <h3 className="text-2xl font-bold text-[#0E1B2C]">
                  {service.workProfiles[activeProfileTab]?.name}
                </h3>
                <p className="text-sm text-[#5B6676] leading-relaxed">
                  {service.workProfiles[activeProfileTab]?.description}
                </p>

                <div className="pt-2">
                  <button
                    onClick={() => openQuoteModal({
                      industry: service.title,
                      service: service.workProfiles[activeProfileTab]?.name
                    })}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#EE7625] hover:text-[#D96216] transition-colors"
                  >
                    <span>Discuss this work with Priority</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-7 bg-white rounded-xl p-6 border border-[#0E1B2C]/08 space-y-3">
                <h4 className="text-xs font-bold tracking-wider uppercase text-[#0E1B2C]">
                  Key questions for your broker
                </h4>
                <ul className="space-y-2.5 text-xs sm:text-sm text-[#5B6676]">
                  {service.workProfiles[activeProfileTab]?.keyQuestions.map((q, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="text-[#EE7625] font-bold text-base leading-none">↗</span>
                      <span>{q}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-[11px] text-[#8A96A6] pt-3 border-t border-[#0E1B2C]/06">
                  Discussion prompts only. These profiles do not confirm cover or insurer acceptance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. READ BEYOND THE CERTIFICATE (Fine Print & Risk Factors) */}
      <section className="py-16 lg:py-24 bg-[#FAF9F6] border-t border-[#0E1B2C]/08">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
            <div className="lg:col-span-5 space-y-5">
              <span className="text-[11px] font-bold tracking-[0.16em] text-[#5B6676] uppercase block">
                02 / Read beyond the certificate
              </span>
              <h2 className="text-3xl font-extrabold text-[#0E1B2C] tracking-tight">
                The details that can change your cover.
              </h2>
              <p className="text-sm text-[#5B6676] leading-relaxed">
                A certificate of currency identifies a policy exists. The occupation description, wording and endorsements explain the true scope of cover.
              </p>

              <button
                type="button"
                onClick={() => openQuoteModal({ industry: service.title })}
                className="px-5 py-3 bg-[#EE7625] hover:bg-[#D96216] text-white rounded-lg font-bold text-xs inline-flex items-center gap-2 transition-all"
              >
                <span>Review my {service.title.toLowerCase()} cover</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Accordions */}
            <div className="lg:col-span-7 bg-white rounded-xl border border-[#0E1B2C]/08 divide-y divide-[#0E1B2C]/08 overflow-hidden">
              {service.keyRiskFactors.map((rf, idx) => (
                <div key={idx} className="p-5">
                  <button
                    onClick={() => setOpenRiskFactor(openRiskFactor === idx ? null : idx)}
                    className="w-full flex items-center justify-between text-left gap-4 text-sm sm:text-base font-bold text-[#0E1B2C] hover:text-[#EE7625] transition-colors"
                  >
                    <span>{rf.title}</span>
                    <span className="text-[#EE7625] text-lg font-mono">
                      {openRiskFactor === idx ? '−' : '+'}
                    </span>
                  </button>

                  <AnimatePresence>
                    {openRiskFactor === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="text-xs sm:text-sm text-[#5B6676] pt-2 leading-relaxed">
                          {rf.description}
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

      {/* 4. AN INSURANCE PROGRAM, NOT A SINGLE LABEL (6 Layers) */}
      <section className="py-16 lg:py-24 bg-white border-t border-[#0E1B2C]/08">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-[11px] font-bold tracking-[0.16em] text-[#5B6676] uppercase block mb-2">
                03 / An insurance program, not a single label
              </span>
              <h2 className="text-3xl font-extrabold text-[#0E1B2C] tracking-tight">
                Cover considered across your operation.
              </h2>
            </div>
            <p className="text-sm text-[#5B6676] max-w-md leading-relaxed">
              Liability, equipment and vehicle exposures do different jobs. We help you understand the policies relevant to your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.policyLayers.map((layer, idx) => (
              <div
                key={idx}
                className="bg-[#FAF9F6] p-6 rounded-xl border border-[#0E1B2C]/08 flex flex-col justify-between hover:border-[#0E1B2C]/20 transition-all hover:-translate-y-0.5"
              >
                <div>
                  <h3 className="text-base font-bold text-[#0E1B2C] mb-2">
                    {layer.title}
                  </h3>
                  <p className="text-xs text-[#5B6676] mb-3 leading-relaxed">
                    {layer.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-[#0E1B2C]/06 text-[11px] text-[#5B6676]">
                  {layer.details}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-[#0E1B2C]/08 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#5B6676]">
            <span>Cover depends on the insurer, your disclosed activities and policy terms.</span>
            <button
              onClick={() => openQuoteModal({ industry: service.title })}
              className="text-[#0E1B2C] font-bold hover:text-[#EE7625] transition-colors inline-flex items-center gap-1"
            >
              Let's review the whole business &rarr;
            </button>
          </div>
        </div>
      </section>

      {/* 5. A CLIENT'S EXPERIENCE (Antonio Lara Demolition Review) */}
      {service.clientReview && (
        <section className="py-16 bg-[#FAF9F6] border-y border-[#0E1B2C]/08">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-8 sm:p-12 border border-[#0E1B2C]/08 shadow-sm space-y-6">
              <div className="flex items-center justify-between border-b border-[#0E1B2C]/08 pb-4">
                <div>
                  <span className="text-[11px] font-bold tracking-[0.16em] text-[#EE7625] uppercase block">
                    A Client's Experience
                  </span>
                  <span className="text-xs text-[#5B6676] font-semibold">
                    {service.clientReview.author} · {service.clientReview.role}
                  </span>
                </div>
                <div className="font-serif-accent text-3xl italic text-[#EE7625]">“</div>
              </div>

              <blockquote className="text-base sm:text-xl font-medium text-[#0E1B2C] leading-relaxed italic">
                "{service.clientReview.quote}"
              </blockquote>

              <p className="text-[11px] text-[#8A96A6] pt-2">
                {service.clientReview.context} This individual outcome is not a promise of availability, timing or cover for another business.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* 6. PREPARE ONCE. START CLEARLY. (Interactive Checklist) */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
            {/* Left Column: Counter & Download CTA */}
            <div className="lg:col-span-5 space-y-5">
              <span className="text-[11px] font-bold tracking-[0.16em] text-[#5B6676] uppercase block">
                04 / Prepare once. Start clearly.
              </span>
              <h2 className="text-3xl font-extrabold text-[#0E1B2C] tracking-tight">
                A better quote starts with the right detail.
              </h2>
              <p className="text-sm text-[#5B6676] leading-relaxed">
                Have these details ready for your broker. Tick what you've gathered and download the list for your team.
              </p>

              {/* Live Counter Display */}
              <div className="p-5 rounded-xl bg-[#FAF9F6] border border-[#0E1B2C]/10 flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold font-mono-data text-[#0E1B2C]">
                    {checkedCount} / {totalCount}
                  </div>
                  <div className="text-xs text-[#5B6676]">details marked ready</div>
                </div>

                <button
                  type="button"
                  onClick={handleDownloadChecklist}
                  className="px-4 py-2.5 bg-[#102A3D] hover:bg-[#0E1B2C] text-white rounded-lg text-xs font-semibold inline-flex items-center gap-1.5 transition-colors"
                >
                  <Download className="w-3.5 h-3.5 text-[#EE7625]" />
                  <span>{checklistDownloaded ? 'Downloaded!' : 'Download checklist'}</span>
                </button>
              </div>
            </div>

            {/* Right Column: 6 Interactive Checkbox Cards with Motion Feedback */}
            <div className="lg:col-span-7 space-y-3">
              {service.quoteChecklist.map((item) => {
                const isChecked = !!checkedItems[item.id];
                return (
                  <motion.button
                    key={item.id}
                    type="button"
                    whileHover={{ x: 3 }}
                    whileTap={{ scale: 0.985 }}
                    onClick={() => toggleChecklist(item.id)}
                    className={`w-full text-left p-4 rounded-xl border transition-all flex items-start gap-3.5 ${
                      isChecked
                        ? 'bg-[#FAF9F6] border-[#EE7625]/40 shadow-xs'
                        : 'bg-white border-[#0E1B2C]/08 hover:border-[#0E1B2C]/15 hover:shadow-xs'
                    }`}
                  >
                    <motion.div
                      animate={{ scale: isChecked ? [1, 1.2, 1] : 1 }}
                      transition={{ duration: 0.25 }}
                      className="mt-0.5 text-[#EE7625] shrink-0"
                    >
                      {isChecked ? (
                        <CheckSquare className="w-5 h-5 text-[#EE7625]" />
                      ) : (
                        <Square className="w-5 h-5 text-[#8A96A6]" />
                      )}
                    </motion.div>
                    <div>
                      <h4 className={`text-sm font-bold ${isChecked ? 'text-[#0E1B2C]' : 'text-[#0E1B2C]'}`}>
                        {item.title}
                      </h4>
                      <p className="text-xs text-[#5B6676] mt-0.5 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 7. WHEN THE USUAL MARKETS SAY NO (3 steps dark banner) */}
      <section className="py-16 lg:py-24 bg-[#102A3D] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
            <div className="lg:col-span-5 space-y-5">
              <span className="text-[11px] font-bold tracking-[0.16em] text-teal-300 uppercase block">
                05 / When the usual markets say no
              </span>
              <h2 className="text-3xl font-extrabold text-white tracking-tight leading-tight">
                A complex risk deserves a closer look.
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Priority describes experience with contractors whose activities need specialist market assessment. A decline is a reason to review the details and available options.
              </p>
              <button
                type="button"
                onClick={() => openQuoteModal({ industry: service.title })}
                className="px-5 py-3 bg-[#EE7625] hover:bg-[#D96216] text-white rounded-lg font-bold text-xs inline-flex items-center gap-2 transition-all shadow-md"
              >
                <span>Discuss my {service.title.toLowerCase()} business</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <div className="p-5 rounded-xl bg-white/5 border border-white/10">
                <span className="text-teal-400 font-mono text-xs font-bold">01</span>
                <h3 className="text-base font-bold text-white mb-1">Describe the risk properly.</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  We consider the work profile, contracts, subcontractors and relevant operating controls.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white/5 border border-white/10">
                <span className="text-teal-400 font-mono text-xs font-bold">02</span>
                <h3 className="text-base font-bold text-white mb-1">Approach suitable markets.</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Available terms depend on appetite and the full risk information. We help explain the options and important conditions.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white/5 border border-white/10">
                <span className="text-teal-400 font-mono text-xs font-bold">03</span>
                <h3 className="text-base font-bold text-white mb-1">Stay involved after placement.</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  A broker to speak to about new work, changed activities, renewals and claims.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ ACCORDION */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-[11px] font-bold tracking-[0.16em] text-[#5B6676] uppercase block">
                06 / {service.title} Explained
              </span>
              <h2 className="text-3xl font-extrabold text-[#0E1B2C] tracking-tight">
                Answers before you commit.
              </h2>
              <p className="text-sm text-[#5B6676] leading-relaxed">
                The right questions now can help you understand your cover before the next project begins.
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => openQuoteModal({ industry: service.title })}
                  className="text-xs font-bold text-[#EE7625] hover:text-[#D96216] inline-flex items-center gap-1"
                >
                  Ask a broker directly &rarr;
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 divide-y divide-[#0E1B2C]/08 border-t border-b border-[#0E1B2C]/08">
              {service.faqs.map((faq, idx) => (
                <div key={idx} className="py-4">
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between text-left gap-4 py-1 text-sm sm:text-base font-bold text-[#0E1B2C] hover:text-[#EE7625] transition-colors"
                  >
                    <span>{faq.question}</span>
                    <span className="text-[#EE7625] text-lg font-mono">
                      {openFaq === idx ? '−' : '+'}
                    </span>
                  </button>

                  <AnimatePresence>
                    {openFaq === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="text-xs sm:text-sm text-[#5B6676] pt-2 pb-3 leading-relaxed">
                          {faq.answer}
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

      {/* 9. FINAL CTA STRIP */}
      <section className="bg-gradient-to-r from-[#EE7625] to-[#F97362] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Big projects start with the right conversation.
              </h2>
              <p className="text-xs sm:text-sm text-white/90 max-w-xl">
                New work, an upcoming renewal or a policy that no longer fits? Let's talk {service.title.toLowerCase()}.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => openQuoteModal({ industry: service.title })}
                className="px-6 py-3.5 bg-[#102A3D] hover:bg-[#0E1B2C] text-white rounded-lg font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <span>Start my {service.title.toLowerCase()} quote</span>
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
