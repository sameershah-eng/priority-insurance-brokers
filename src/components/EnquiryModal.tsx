import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, ArrowLeft, CheckCircle2, ShieldCheck, PhoneCall } from 'lucide-react';
import { useQuoteModal } from '../context/QuoteModalContext';
import { COMPANY } from '../data/company';

interface EnquiryFormProps {
  inline?: boolean;
}

export function EnquiryModal({ inline = false }: EnquiryFormProps) {
  const { isOpen, prefill, closeQuoteModal } = useQuoteModal();

  const [step, setStep] = useState<1 | 2>(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form State
  const [industry, setIndustry] = useState('');
  const [helpType, setHelpType] = useState('');
  const [timeline, setTimeline] = useState('Just exploring options');
  const [name, setName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');

  // Validation errors
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Sync prefill values
  useEffect(() => {
    if (prefill.industry) setIndustry(prefill.industry);
    if (prefill.service) setHelpType(prefill.service);
  }, [prefill]);

  // Reset form when opened or closed
  useEffect(() => {
    if (!isOpen && !inline) {
      setTimeout(() => {
        setStep(1);
        setIsSubmitted(false);
        setErrors({});
      }, 300);
    }
  }, [isOpen, inline]);

  // Escape key handler for modal
  useEffect(() => {
    if (inline || !isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeQuoteModal();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [inline, isOpen, closeQuoteModal]);

  // Step 1 Validation
  const handleNextStep = () => {
    const newErrors: Record<string, string> = {};
    if (!industry) newErrors.industry = 'Please select your industry or trade';
    if (!helpType) newErrors.helpType = 'Please select what you need help with';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setStep(2);
  };

  // Step 2 Submission & Validation
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    if (!name.trim()) newErrors.name = 'Please enter your contact name';
    if (!businessName.trim()) newErrors.businessName = 'Please enter your business or trading name';
    if (!phone.trim()) {
      newErrors.phone = 'Please enter your contact number';
    } else if (!/^[0-9+\s()-]{8,15}$/.test(phone.trim())) {
      newErrors.phone = 'Please enter a valid Australian phone number';
    }
    if (!email.trim()) {
      newErrors.email = 'Please enter your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitted(true);
  };

  const formContent = (
    <div className="bg-white rounded-xl border border-[#0E1B2C]/10 shadow-xl overflow-hidden max-w-xl w-full mx-auto">
      {/* Header Bar */}
      <div className="px-6 sm:px-8 pt-7 pb-5 border-b border-[#0E1B2C]/08 flex items-start justify-between bg-[#FAF9F6]">
        <div>
          <span className="text-[11px] font-bold tracking-[0.14em] text-[#EE7625] uppercase block mb-1">
            Speak with a Priority Broker
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-[#0E1B2C] tracking-tight">
            {isSubmitted ? "Conversation request received" : "Let's understand your business."}
          </h3>
          <p className="text-xs sm:text-sm text-[#5B6676] mt-1">
            {isSubmitted
              ? "A qualified commercial broker will review your activities and follow up."
              : "A few details to start the conversation."}
          </p>
        </div>
        {!inline && (
          <button
            onClick={closeQuoteModal}
            className="p-2 text-[#5B6676] hover:text-[#0E1B2C] hover:bg-black/5 rounded-lg transition-colors -mr-2 -mt-2"
            aria-label="Close quote modal"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Progress Line */}
      {!isSubmitted && (
        <div className="h-1 w-full bg-[#FAF9F6]">
          <div
            className="h-full bg-gradient-to-r from-[#0F766E] via-[#1D4ED8] to-[#EE7625] transition-all duration-300"
            style={{ width: step === 1 ? '50%' : '100%' }}
          />
        </div>
      )}

      {/* Body */}
      <div className="p-6 sm:p-8">
        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="py-4 text-center space-y-5"
          >
            <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h4 className="text-lg font-bold text-[#0E1B2C]">
                Thank you, {name || 'there'}.
              </h4>
              <p className="text-sm text-[#5B6676] max-w-md mx-auto leading-relaxed">
                We've noted your enquiry for <strong className="text-[#0E1B2C]">{industry || 'your business'}</strong> ({businessName}). One of our senior brokers will review the risk profile and contact you on <strong className="text-[#0E1B2C]">{phone}</strong>.
              </p>
            </div>

            <div className="p-4 bg-[#FAF9F6] rounded-lg border border-[#0E1B2C]/08 text-left space-y-2 text-xs text-[#5B6676]">
              <div className="flex items-center justify-between border-b border-[#0E1B2C]/06 pb-2">
                <span>Selected Focus:</span>
                <span className="font-semibold text-[#0E1B2C]">{industry}</span>
              </div>
              <div className="flex items-center justify-between border-b border-[#0E1B2C]/06 pb-2">
                <span>Required Assistance:</span>
                <span className="font-semibold text-[#0E1B2C]">{helpType}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Urgency Timeline:</span>
                <span className="font-semibold text-[#0E1B2C]">{timeline}</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={`tel:${COMPANY.phoneRaw}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#102A3D] text-white rounded-lg text-sm font-semibold hover:bg-[#0E1B2C] transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-[#EE7625]" />
                Call {COMPANY.phone} directly
              </a>
              {!inline && (
                <button
                  type="button"
                  onClick={closeQuoteModal}
                  className="w-full sm:w-auto px-5 py-2.5 bg-[#F2F0EB] text-[#0E1B2C] rounded-lg text-sm font-medium hover:bg-[#E5E3DC] transition-colors"
                >
                  Close window
                </button>
              )}
            </div>
          </motion.div>
        ) : step === 1 ? (
          <div className="space-y-5">
            {/* Field: Industry */}
            <div>
              <label htmlFor="modal-industry" className="block text-xs font-bold text-[#0E1B2C] uppercase tracking-wider mb-2">
                What best describes your business?
              </label>
              <select
                id="modal-industry"
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                className={`w-full px-3.5 py-2.5 bg-[#FAF9F6] border rounded-lg text-sm text-[#0E1B2C] focus:bg-white transition-all ${
                  errors.industry ? 'border-red-500 ring-1 ring-red-500' : 'border-[#0E1B2C]/15 focus:border-[#EE7625]'
                }`}
              >
                <option value="">Choose your industry</option>
                <option value="Demolition contractors">Demolition contractors (Structural, partial & strip-out)</option>
                <option value="Mining contractors">Mining contractors & site maintenance</option>
                <option value="Earthmoving & civil">Earthmoving & civil infrastructure</option>
                <option value="Plant & dry hire">Plant & dry hire operations</option>
                <option value="Commercial trades & construction">Commercial trades & builders</option>
                <option value="Transport & commercial fleet">Transport, haulage & commercial fleet</option>
                <option value="Professional & consulting">Engineering, consulting & professional services</option>
                <option value="Other commercial business">Other established commercial business</option>
              </select>
              {errors.industry && (
                <p className="text-xs text-red-600 mt-1 font-medium">{errors.industry}</p>
              )}
            </div>

            {/* Field: Help Type */}
            <div>
              <label htmlFor="modal-helptype" className="block text-xs font-bold text-[#0E1B2C] uppercase tracking-wider mb-2">
                What would you like help with?
              </label>
              <select
                id="modal-helptype"
                value={helpType}
                onChange={(e) => setHelpType(e.target.value)}
                className={`w-full px-3.5 py-2.5 bg-[#FAF9F6] border rounded-lg text-sm text-[#0E1B2C] focus:bg-white transition-all ${
                  errors.helpType ? 'border-red-500 ring-1 ring-red-500' : 'border-[#0E1B2C]/15 focus:border-[#EE7625]'
                }`}
              >
                <option value="">Choose an option</option>
                <option value="Comprehensive policy review">Review my existing commercial insurance</option>
                <option value="New contract or licence requirement">A new contract or licence requires specific cover</option>
                <option value="Declined or non-renewed by current insurer">Hard-to-place risk / previous insurer decline</option>
                <option value="Upcoming policy renewal">Upcoming policy renewal needing competitive terms</option>
                <option value="Adding plant, equipment or fleet">Adding machinery, excavators or commercial vehicles</option>
              </select>
              {errors.helpType && (
                <p className="text-xs text-red-600 mt-1 font-medium">{errors.helpType}</p>
              )}
            </div>

            {/* Field: Timeline */}
            <div>
              <label htmlFor="modal-timeline" className="block text-xs font-bold text-[#0E1B2C] uppercase tracking-wider mb-2">
                When do you need cover?
              </label>
              <select
                id="modal-timeline"
                value={timeline}
                onChange={(e) => setTimeline(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-[#FAF9F6] border border-[#0E1B2C]/15 rounded-lg text-sm text-[#0E1B2C] focus:bg-white focus:border-[#EE7625] transition-all"
              >
                <option value="Just exploring options">Just exploring options</option>
                <option value="Urgently (within 48 hours)">Urgently (within 48 hours)</option>
                <option value="Within 2 weeks">Within 2 weeks</option>
                <option value="In 1 to 2 months">In 1 to 2 months</option>
              </select>
            </div>

            <button
              type="button"
              onClick={handleNextStep}
              className="w-full py-3 px-4 bg-[#EE7625] hover:bg-[#D96216] text-white rounded-lg font-semibold text-sm flex items-center justify-center gap-2 transition-all shadow-sm hover:shadow"
            >
              Continue
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="inline-flex items-center gap-1.5 text-xs text-[#5B6676] hover:text-[#0E1B2C] font-semibold transition-colors mb-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to business details
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="form-name" className="block text-xs font-bold text-[#0E1B2C] uppercase tracking-wider mb-1.5">
                  Your name *
                </label>
                <input
                  id="form-name"
                  type="text"
                  placeholder="e.g. Daniel Miller"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`w-full px-3.5 py-2 bg-[#FAF9F6] border rounded-lg text-sm text-[#0E1B2C] focus:bg-white transition-all ${
                    errors.name ? 'border-red-500 ring-1 ring-red-500' : 'border-[#0E1B2C]/15 focus:border-[#EE7625]'
                  }`}
                />
                {errors.name && (
                  <p className="text-xs text-red-600 mt-1 font-medium">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="form-bname" className="block text-xs font-bold text-[#0E1B2C] uppercase tracking-wider mb-1.5">
                  Business name *
                </label>
                <input
                  id="form-bname"
                  type="text"
                  placeholder="e.g. Apex Civil Pty Ltd"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  className={`w-full px-3.5 py-2 bg-[#FAF9F6] border rounded-lg text-sm text-[#0E1B2C] focus:bg-white transition-all ${
                    errors.businessName ? 'border-red-500 ring-1 ring-red-500' : 'border-[#0E1B2C]/15 focus:border-[#EE7625]'
                  }`}
                />
                {errors.businessName && (
                  <p className="text-xs text-red-600 mt-1 font-medium">{errors.businessName}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="form-phone" className="block text-xs font-bold text-[#0E1B2C] uppercase tracking-wider mb-1.5">
                  Phone number *
                </label>
                <input
                  id="form-phone"
                  type="tel"
                  placeholder="e.g. 0412 345 678"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className={`w-full px-3.5 py-2 bg-[#FAF9F6] border rounded-lg text-sm text-[#0E1B2C] focus:bg-white transition-all ${
                    errors.phone ? 'border-red-500 ring-1 ring-red-500' : 'border-[#0E1B2C]/15 focus:border-[#EE7625]'
                  }`}
                />
                {errors.phone && (
                  <p className="text-xs text-red-600 mt-1 font-medium">{errors.phone}</p>
                )}
              </div>

              <div>
                <label htmlFor="form-email" className="block text-xs font-bold text-[#0E1B2C] uppercase tracking-wider mb-1.5">
                  Email address *
                </label>
                <input
                  id="form-email"
                  type="email"
                  placeholder="e.g. contact@apexcivil.com.au"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full px-3.5 py-2 bg-[#FAF9F6] border rounded-lg text-sm text-[#0E1B2C] focus:bg-white transition-all ${
                    errors.email ? 'border-red-500 ring-1 ring-red-500' : 'border-[#0E1B2C]/15 focus:border-[#EE7625]'
                  }`}
                />
                {errors.email && (
                  <p className="text-xs text-red-600 mt-1 font-medium">{errors.email}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="form-notes" className="block text-xs font-bold text-[#0E1B2C] uppercase tracking-wider mb-1.5">
                Anything you'd like us to know? <span className="text-[#5B6676] font-normal lowercase">(optional)</span>
              </label>
              <textarea
                id="form-notes"
                rows={2}
                placeholder="Your activities, site requirements, renewal date or current issues..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-3.5 py-2 bg-[#FAF9F6] border border-[#0E1B2C]/15 rounded-lg text-sm text-[#0E1B2C] focus:bg-white focus:border-[#EE7625] transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 bg-[#EE7625] hover:bg-[#D96216] text-white rounded-lg font-semibold text-sm flex items-center justify-center gap-2 transition-all shadow-sm hover:shadow"
            >
              Request a callback
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}

        <div className="mt-5 pt-4 border-t border-[#0E1B2C]/08 flex items-center justify-between text-[11px] text-[#5B6676]">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
            Design preview: this form demonstrates the enquiry journey.
          </span>
          <span className="hidden sm:inline">AFSL 233750</span>
        </div>
      </div>
    </div>
  );

  if (inline) {
    return formContent;
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeQuoteModal}
            className="fixed inset-0 bg-[#0E1B2C]/60 backdrop-blur-xs"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative z-10 w-full max-w-xl"
            role="dialog"
            aria-modal="true"
          >
            {formContent}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
