import React, { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, Clock, Calendar, Share2, Check, PhoneCall } from 'lucide-react';
import { BLOG_POSTS } from '../data/blogPosts';
import { COMPANY } from '../data/company';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { useQuoteModal } from '../context/QuoteModalContext';

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const { openQuoteModal } = useQuoteModal();

  const [copiedLink, setCopiedLink] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);

  const post = BLOG_POSTS.find(p => p.slug === slug);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setReadingProgress(Math.min(100, Math.max(0, progress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = BLOG_POSTS.filter(p => p.slug !== post.slug).slice(0, 3);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="w-full pt-28 lg:pt-32 pb-24 bg-[#FAF9F6]">
      {/* Reading Progress Bar pinned at top */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-transparent z-50">
        <div
          className="h-full bg-gradient-to-r from-[#0F766E] via-[#1D4ED8] to-[#EE7625] transition-all duration-150"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: 'Insights', path: '/blog' },
            { label: post.title }
          ]}
        />

        {/* Back Link */}
        <div className="mt-4 mb-6">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#5B6676] hover:text-[#0E1B2C] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to all articles
          </Link>
        </div>

        {/* Article Header */}
        <div className="max-w-3xl mx-auto space-y-4 mb-10">
          <div className="flex items-center gap-2 text-xs text-[#5B6676]">
            <span className="font-bold text-[#EE7625] uppercase tracking-wider text-[11px]">
              {post.category}
            </span>
            <span>·</span>
            <span className="font-mono">{post.readTime}</span>
            <span>·</span>
            <span>{post.publishedDate}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0E1B2C] tracking-tight leading-tight">
            {post.title}
          </h1>

          <p className="text-base sm:text-lg text-[#5B6676] leading-relaxed">
            {post.excerpt}
          </p>

          {/* Author Block & Share */}
          <div className="pt-4 border-t border-[#0E1B2C]/08 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-10 h-10 rounded-full object-cover border border-[#0E1B2C]/10"
              />
              <div>
                <span className="text-xs font-bold text-[#0E1B2C] block">
                  {post.author.name}
                </span>
                <span className="text-[11px] text-[#5B6676]">
                  {post.author.role} · Priority Insurance Brokers
                </span>
              </div>
            </div>

            <button
              onClick={handleCopyLink}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#0E1B2C]/10 bg-white hover:bg-[#F2F0EB] text-xs font-semibold text-[#0E1B2C] transition-colors"
              aria-label="Share article"
            >
              {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copiedLink ? 'Link copied' : 'Share'}</span>
            </button>
          </div>
        </div>

        {/* Main Content Layout (Table of Contents + Article Body) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto">
          {/* Table of Contents Sticky Sidebar */}
          <aside className="lg:col-span-4 hidden lg:block">
            <div className="sticky top-28 bg-white p-6 rounded-xl border border-[#0E1B2C]/08 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0E1B2C] block">
                Table of Contents
              </span>
              <nav className="space-y-2 text-xs text-[#5B6676]">
                {post.tableOfContents.map((item, idx) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="block hover:text-[#EE7625] transition-colors py-1 border-l-2 border-transparent hover:border-[#EE7625] pl-2.5"
                  >
                    {idx + 1}. {item.title}
                  </a>
                ))}
              </nav>

              <div className="pt-4 border-t border-[#0E1B2C]/08">
                <span className="text-[11px] text-[#8A96A6] block mb-2">Need advice on this topic?</span>
                <button
                  type="button"
                  onClick={() => openQuoteModal({ service: post.title })}
                  className="w-full py-2.5 px-3 bg-[#EE7625] hover:bg-[#D96216] text-white rounded-lg text-xs font-bold transition-colors"
                >
                  Consult a broker
                </button>
              </div>
            </div>
          </aside>

          {/* Body Content */}
          <article className="lg:col-span-8 bg-white rounded-2xl p-6 sm:p-10 border border-[#0E1B2C]/08 shadow-xs space-y-8">
            {post.content.map((sec, idx) => {
              const tocItem = post.tableOfContents[idx];
              return (
                <section key={idx} id={tocItem?.id} className="space-y-3">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#0E1B2C] tracking-tight">
                    {sec.sectionHeading}
                  </h2>
                  {sec.paragraphs.map((p, pIdx) => (
                    <p key={pIdx} className="text-sm sm:text-base text-[#5B6676] leading-relaxed">
                      {p}
                    </p>
                  ))}
                </section>
              );
            })}

            {/* Tags */}
            <div className="pt-6 border-t border-[#0E1B2C]/08 flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-[#0E1B2C] mr-1">Topics:</span>
              {post.tags.map((t) => (
                <span
                  key={t}
                  className="text-xs text-[#5B6676] bg-[#FAF9F6] border border-[#0E1B2C]/08 px-2.5 py-1 rounded"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Author Attribution Card */}
            <div className="p-6 bg-[#FAF9F6] rounded-xl border border-[#0E1B2C]/08 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <img
                src={COMPANY.director.bio ? post.author.avatar : ''}
                alt={post.author.name}
                className="w-14 h-14 rounded-full object-cover border border-[#0E1B2C]/15 shrink-0"
              />
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-[#0E1B2C]">About the author: {post.author.name}</h4>
                <p className="text-xs text-[#5B6676] leading-relaxed">
                  {COMPANY.director.bio}
                </p>
              </div>
            </div>
          </article>
        </div>

        {/* Related Posts */}
        <div className="mt-20 pt-12 border-t border-[#0E1B2C]/08">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-[#0E1B2C]">
              Related Commercial Insights
            </h3>
            <Link
              to="/blog"
              className="text-xs font-bold text-[#EE7625] hover:text-[#D96216] inline-flex items-center gap-1"
            >
              View all resources &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((r) => (
              <Link
                key={r.slug}
                to={`/blog/${r.slug}`}
                className="group bg-white rounded-xl p-6 border border-[#0E1B2C]/08 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] font-bold text-[#EE7625] uppercase tracking-wider block mb-2">
                    {r.category}
                  </span>
                  <h4 className="text-sm font-bold text-[#0E1B2C] group-hover:text-[#EE7625] transition-colors line-clamp-2">
                    {r.title}
                  </h4>
                  <p className="text-xs text-[#5B6676] mt-2 line-clamp-2 leading-relaxed">
                    {r.excerpt}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-[#0E1B2C]/06 text-[11px] text-[#5B6676] flex items-center justify-between">
                  <span>{r.publishedDate}</span>
                  <span className="font-mono">{r.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
