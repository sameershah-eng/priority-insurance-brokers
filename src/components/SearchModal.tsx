import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Search, X, FileText, Briefcase, ArrowRight } from 'lucide-react';
import { SERVICES } from '../data/services';
import { BLOG_POSTS } from '../data/blogPosts';

interface SearchItem {
  id: string;
  title: string;
  description: string;
  category: string;
  url: string;
  type: 'service' | 'blog' | 'page';
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // Aggregate searchable items
  const allItems: SearchItem[] = [
    // Pages
    { id: 'page-home', title: 'Homepage: Specialist Commercial Insurance', description: 'Overview of commercial insurance services and broker advice across Australia.', category: 'Core Pages', url: '/', type: 'page' },
    { id: 'page-contact', title: 'Contact & Broker Consultation Hub', description: 'Speak with Daniel Ufer and the Brisbane broker advisory team.', category: 'Core Pages', url: '/contact', type: 'page' },
    { id: 'page-handoff', title: 'Design Handoff & Pitch Architecture', description: 'WordPress SEO preservation notes, token specifications and WCAG compliance.', category: 'Core Pages', url: '/handoff', type: 'page' },
    { id: 'page-blog', title: 'Insights & Insurance Resources Index', description: 'Practical industry risk analysis and contractual checklists.', category: 'Core Pages', url: '/blog', type: 'page' },

    // Services
    ...SERVICES.map((s) => ({
      id: `service-${s.id}`,
      title: `${s.title} Insurance`,
      description: s.shortDescription,
      category: s.category === 'industry' ? 'Industry Solutions' : 'Policy Covers',
      url: `/services/${s.slug}`,
      type: 'service' as const
    })),

    // Blog posts
    ...BLOG_POSTS.map((b) => ({
      id: `blog-${b.slug}`,
      title: b.title,
      description: b.excerpt,
      category: `Insight · ${b.category}`,
      url: `/blog/${b.slug}`,
      type: 'blog' as const
    }))
  ];

  const filteredItems = query.trim() === ''
    ? allItems.slice(0, 6)
    : allItems.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
      );

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSelectedIndex(0);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (!isOpen) return;

      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => (prev + 1) % (filteredItems.length || 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => (prev - 1 + filteredItems.length) % (filteredItems.length || 1));
      } else if (e.key === 'Enter' && filteredItems[selectedIndex]) {
        e.preventDefault();
        navigate(filteredItems[selectedIndex].url);
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, filteredItems, selectedIndex, navigate]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#0E1B2C]/50 backdrop-blur-xs"
            aria-hidden="true"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            className="relative z-10 w-full max-w-2xl bg-white rounded-xl shadow-2xl border border-[#0E1B2C]/10 overflow-hidden"
          >
            {/* Search Input Bar */}
            <div className="flex items-center px-4 border-b border-[#0E1B2C]/08 bg-[#FAF9F6]">
              <Search className="w-5 h-5 text-[#5B6676] shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                placeholder="Search services, policies, articles, and advice..."
                className="w-full px-3.5 py-4 bg-transparent text-sm text-[#0E1B2C] placeholder-[#5B6676] focus:outline-hidden"
              />
              <button
                onClick={onClose}
                className="p-1.5 text-[#5B6676] hover:text-[#0E1B2C] rounded-md transition-colors"
                aria-label="Close search"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Results List */}
            <div className="max-h-96 overflow-y-auto p-2 divide-y divide-[#0E1B2C]/04">
              {filteredItems.length === 0 ? (
                <div className="p-8 text-center text-sm text-[#5B6676]">
                  No results found for "{query}". Try searching "Demolition", "Plant hire", or "Checklist".
                </div>
              ) : (
                filteredItems.map((item, idx) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      navigate(item.url);
                      onClose();
                    }}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    className={`w-full text-left p-3 rounded-lg flex items-start justify-between gap-3 transition-colors ${
                      selectedIndex === idx ? 'bg-[#F2F0EB]' : 'hover:bg-[#FAF9F6]'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 p-1.5 rounded-md bg-white border border-[#0E1B2C]/08 text-[#0E1B2C]">
                        {item.type === 'service' ? (
                          <Briefcase className="w-4 h-4 text-[#EE7625]" />
                        ) : (
                          <FileText className="w-4 h-4 text-teal-700" />
                        )}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold text-[#0E1B2C]">
                            {item.title}
                          </span>
                          <span className="text-[11px] text-[#5B6676] font-medium">
                            · {item.category}
                          </span>
                        </div>
                        <p className="text-xs text-[#5B6676] line-clamp-1 mt-0.5">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#5B6676] shrink-0 mt-1 opacity-60" />
                  </button>
                ))
              )}
            </div>

            {/* Footer keyboard hints */}
            <div className="px-4 py-2.5 bg-[#FAF9F6] border-t border-[#0E1B2C]/08 flex items-center justify-between text-[11px] text-[#5B6676]">
              <div className="flex items-center gap-3">
                <span><kbd className="px-1.5 py-0.5 bg-white border border-[#0E1B2C]/10 rounded text-[10px]">↑</kbd> <kbd className="px-1.5 py-0.5 bg-white border border-[#0E1B2C]/10 rounded text-[10px]">↓</kbd> to navigate</span>
                <span><kbd className="px-1.5 py-0.5 bg-white border border-[#0E1B2C]/10 rounded text-[10px]">ESC</kbd> to close</span>
                <span><kbd className="px-1.5 py-0.5 bg-white border border-[#0E1B2C]/10 rounded text-[10px]">↵</kbd> to select</span>
              </div>
              <span className="hidden sm:inline font-mono text-[10px]">Press Cmd+K anytime</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
