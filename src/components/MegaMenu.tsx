import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ShieldCheck, ChevronRight } from 'lucide-react';
import { SERVICES } from '../data/services';

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectService?: () => void;
}

export function MegaMenu({ isOpen, onClose, onSelectService }: MegaMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  // Close on Escape or click outside
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  const industryServices = SERVICES.filter(s => s.category === 'industry');
  const coverageServices = SERVICES.filter(s => s.category === 'coverage');

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={menuRef}
          initial={{ opacity: 0, y: 12, scale: 0.985 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 8, scale: 0.985 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="absolute top-full left-1/2 -translate-x-1/2 w-screen max-w-5xl mt-2 px-4 z-40"
        >
          <div className="bg-white rounded-xl shadow-2xl border border-[#0E1B2C]/10 overflow-hidden p-6 sm:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Column 1: Heavy Industries */}
              <div className="lg:col-span-5 space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-[#0E1B2C]/08">
                  <span className="text-[11px] font-bold tracking-[0.14em] text-[#5B6676] uppercase">
                    Heavy Industry & High Risk
                  </span>
                  <span className="text-[11px] text-[#EE7625] font-semibold">Specialist Markets</span>
                </div>
                <div className="space-y-1">
                  {industryServices.map((service, i) => (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.04 * i, duration: 0.25 }}
                    >
                      <Link
                        to={`/services/${service.slug}`}
                        onClick={() => {
                          onClose();
                          onSelectService?.();
                        }}
                        className="group flex items-start gap-3 p-2.5 rounded-lg hover:bg-[#FAF9F6] transition-colors"
                      >
                        <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#0E1B2C]/20 group-hover:bg-[#EE7625] transition-colors" />
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="text-sm font-semibold text-[#0E1B2C] group-hover:text-[#EE7625] transition-colors">
                              {service.title}
                            </span>
                            <ChevronRight className="w-3.5 h-3.5 text-[#5B6676] opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
                          </div>
                          <p className="text-xs text-[#5B6676] line-clamp-1 mt-0.5">
                            {service.shortDescription}
                          </p>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Column 2: Core Policies */}
              <div className="lg:col-span-4 space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-[#0E1B2C]/08">
                  <span className="text-[11px] font-bold tracking-[0.14em] text-[#5B6676] uppercase">
                    Commercial Policy Layers
                  </span>
                  <span className="text-[11px] text-[#0F766E] font-semibold">Broadform Wordings</span>
                </div>
                <div className="space-y-1">
                  {coverageServices.map((service, i) => (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.12 + 0.04 * i, duration: 0.25 }}
                    >
                      <Link
                        to={`/services/${service.slug}`}
                        onClick={() => {
                          onClose();
                          onSelectService?.();
                        }}
                        className="group flex items-start gap-3 p-2.5 rounded-lg hover:bg-[#FAF9F6] transition-colors"
                      >
                        <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#0E1B2C]/20 group-hover:bg-[#0F766E] transition-colors" />
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="text-sm font-semibold text-[#0E1B2C] group-hover:text-[#0F766E] transition-colors">
                              {service.title}
                            </span>
                            <ChevronRight className="w-3.5 h-3.5 text-[#5B6676] opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
                          </div>
                          <p className="text-xs text-[#5B6676] line-clamp-1 mt-0.5">
                            {service.shortDescription}
                          </p>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Column 3: Featured Callout Panel */}
              <div className="lg:col-span-3 bg-[#FAF9F6] rounded-xl p-5 border border-[#0E1B2C]/08 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2 text-[#EE7625]">
                    <ShieldCheck className="w-4 h-4" />
                    <span className="text-[11px] font-bold tracking-wider uppercase">Sample Inner Page</span>
                  </div>
                  <h4 className="text-sm font-bold text-[#0E1B2C]">
                    Demolition Contractor Showcase
                  </h4>
                  <p className="text-xs text-[#5B6676] mt-1.5 leading-relaxed">
                    Explore the full redesigned service template with interactive work profiles, 6-item risk checklist, and real client review.
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#0E1B2C]/08">
                  <Link
                    to="/services/demolition-contractors"
                    onClick={() => {
                      onClose();
                      onSelectService?.();
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#EE7625] hover:text-[#D96216] transition-colors"
                  >
                    View Demolition Page
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Bottom Strip */}
            <div className="mt-6 pt-4 border-t border-[#0E1B2C]/08 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-[#5B6676] gap-2">
              <span>Looking for an unusual or hard-to-place commercial risk?</span>
              <Link
                to="/contact"
                onClick={onClose}
                className="text-[#0E1B2C] font-semibold hover:text-[#EE7625] transition-colors inline-flex items-center gap-1"
              >
                Book a direct broker assessment &rarr;
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
