import React from 'react';
import { motion } from 'motion/react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Car,
  Train,
  ExternalLink,
  ShieldCheck,
  Building2
} from 'lucide-react';
import { COMPANY } from '../data/company';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { EnquiryModal } from '../components/EnquiryModal';

export function ContactPage() {
  return (
    <div className="w-full pt-28 lg:pt-32 pb-24 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <Breadcrumbs items={[{ label: 'Contact' }]} />

        {/* Header */}
        <div className="mt-6 mb-12 space-y-4">
          <span className="text-[11px] font-bold tracking-[0.16em] text-[#5B6676] uppercase block">
            01 / Direct Broker Access
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0E1B2C] tracking-tight">
            Speak with our commercial broker desk.
          </h1>
          <p className="text-sm sm:text-base text-[#5B6676] max-w-2xl leading-relaxed">
            Based in South Brisbane and working with high-risk trades, heavy contractors and transport fleets across Australia. No call centres, no delays.
          </p>
        </div>

        {/* 2-Column Layout: Office Info & Map on Left, Inline Enquiry Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact Details & Office (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Quick Contact Box */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#0E1B2C]/08 shadow-xs space-y-6">
              <h2 className="text-xl font-bold text-[#0E1B2C]">
                Brisbane Head Office
              </h2>

              <div className="space-y-4 text-xs sm:text-sm text-[#5B6676]">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#FAF9F6] border border-[#0E1B2C]/08 text-[#EE7625] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase font-bold text-[#0E1B2C] block">Direct Phone</span>
                    <a href={`tel:${COMPANY.phoneRaw}`} className="text-[#0E1B2C] font-bold text-base hover:text-[#EE7625] transition-colors">
                      {COMPANY.phone}
                    </a>
                    <p className="text-xs text-[#5B6676] mt-0.5">National toll-free routing for interstate clients</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#FAF9F6] border border-[#0E1B2C]/08 text-teal-600 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase font-bold text-[#0E1B2C] block">Quote Submissions</span>
                    <a href={`mailto:${COMPANY.email}`} className="text-[#0E1B2C] font-semibold hover:text-[#EE7625] transition-colors">
                      {COMPANY.email}
                    </a>
                    <p className="text-xs text-[#5B6676] mt-0.5">Send policy schedules & tender specifications</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#FAF9F6] border border-[#0E1B2C]/08 text-[#8A96A6] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase font-bold text-[#0E1B2C] block">Physical Office</span>
                    <address className="not-italic leading-relaxed text-[#0E1B2C]">
                      {COMPANY.address.line1}<br />
                      {COMPANY.address.line2}, {COMPANY.address.city} {COMPANY.address.state} {COMPANY.address.postcode}
                    </address>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#FAF9F6] border border-[#0E1B2C]/08 text-[#8A96A6] shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase font-bold text-[#0E1B2C] block">Operating Hours</span>
                    <span className="text-[#0E1B2C]">{COMPANY.officeHours}</span>
                    <p className="text-xs text-[#5B6676] mt-0.5">Emergency claims advocate on call 24/7</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder Card */}
            <div className="bg-white rounded-2xl p-6 border border-[#0E1B2C]/08 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#0E1B2C] uppercase tracking-wider">
                  Location & Transit
                </span>
                <a
                  href="https://maps.google.com/?q=154+Melbourne+Street+South+Brisbane+QLD+4101"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#EE7625] hover:text-[#D96216] inline-flex items-center gap-1"
                >
                  <span>Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Styled Vector Map Canvas */}
              <div className="w-full h-44 rounded-xl bg-[#E5E3DC] border border-[#0E1B2C]/10 relative overflow-hidden flex items-center justify-center">
                {/* Visual streets pattern */}
                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#0E1B2C_1px,transparent_1px)] [background-size:16px_16px]" />
                <div className="absolute top-1/2 left-0 right-0 h-4 bg-white/70 -translate-y-2 transform -rotate-6" />
                <div className="absolute top-0 bottom-0 left-1/3 w-5 bg-white/70 transform rotate-12" />

                {/* Pin */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="p-2 bg-[#EE7625] text-white rounded-full shadow-lg animate-bounce">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div className="bg-white px-2 py-0.5 rounded shadow text-[10px] font-bold text-[#0E1B2C] mt-1 border border-[#0E1B2C]/10">
                    Priority HQ · South Brisbane
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs text-[#5B6676] pt-1">
                <div className="flex items-center gap-2">
                  <Train className="w-3.5 h-3.5 text-[#EE7625]" />
                  <span>250m to South Brisbane Station</span>
                </div>
                <div className="flex items-center gap-2">
                  <Car className="w-3.5 h-3.5 text-teal-600" />
                  <span>Visitor parking on basement level</span>
                </div>
              </div>
            </div>

            {/* Authorised Representative Disclosure */}
            <div className="p-5 rounded-xl bg-[#F2F0EB] border border-[#0E1B2C]/08 space-y-2 text-xs text-[#5B6676]">
              <div className="flex items-center gap-2 text-[#0E1B2C] font-bold">
                <ShieldCheck className="w-4 h-4 text-teal-700" />
                <span>Regulatory Credentials</span>
              </div>
              <p className="leading-relaxed">
                Priority Insurance Brokers is a trading name of DCSX Group Pty Ltd (ABN 95 655 563 616), CAR 1295220 of Community Broker Network Pty Ltd (AFSL 233750). Daniel Ufer: CAR 1295221.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Inline Enquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <EnquiryModal inline={true} />
          </div>
        </div>
      </div>
    </div>
  );
}
