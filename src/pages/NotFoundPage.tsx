import { Link } from 'react-router-dom';
import { ArrowLeft, Home, Search, PhoneCall } from 'lucide-react';
import { COMPANY } from '../data/company';

interface NotFoundPageProps {
  onOpenSearch: () => void;
}

export function NotFoundPage({ onOpenSearch }: NotFoundPageProps) {
  return (
    <div className="w-full min-h-[70vh] flex items-center justify-center pt-32 pb-24 px-4 bg-[#FAF9F6]">
      <div className="max-w-xl mx-auto text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-[#102A3D] text-[#EE7625] flex items-center justify-center mx-auto text-2xl font-bold font-mono">
          404
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#EE7625]">
            Page Not Found
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0E1B2C] tracking-tight">
            We couldn't locate that page.
          </h1>
          <p className="text-sm text-[#5B6676] max-w-md mx-auto leading-relaxed">
            The link you followed may have changed during our corporate WordPress redesign, or the address might be mistyped.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            to="/"
            className="w-full sm:w-auto px-5 py-3 bg-[#EE7625] hover:bg-[#D96216] text-white rounded-lg text-xs font-bold inline-flex items-center justify-center gap-2 transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <button
            onClick={onOpenSearch}
            className="w-full sm:w-auto px-5 py-3 bg-white border border-[#0E1B2C]/15 hover:border-[#0E1B2C]/30 text-[#0E1B2C] rounded-lg text-xs font-semibold inline-flex items-center justify-center gap-2 transition-colors"
          >
            <Search className="w-4 h-4 text-[#EE7625]" />
            <span>Search all pages (⌘K)</span>
          </button>
        </div>

        <div className="pt-8 border-t border-[#0E1B2C]/08 text-xs text-[#5B6676]">
          <span>Need immediate assistance? Call our Brisbane desk directly on </span>
          <a href={`tel:${COMPANY.phoneRaw}`} className="font-bold text-[#0E1B2C] hover:text-[#EE7625]">
            {COMPANY.phone}
          </a>
        </div>
      </div>
    </div>
  );
}
