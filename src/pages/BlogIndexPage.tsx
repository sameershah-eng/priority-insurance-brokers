import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, BookOpen, Clock, Calendar, ChevronRight } from 'lucide-react';
import { BLOG_POSTS, BlogPost } from '../data/blogPosts';
import { Breadcrumbs } from '../components/Breadcrumbs';

export function BlogIndexPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const postsPerPage = 6;

  const categories = ['All', 'High-Risk Trades', 'Plant & Equipment', 'Civil & Earthmoving', 'Commercial Strategy', 'Fleet & Haulage'];

  const filteredPosts = selectedCategory === 'All'
    ? BLOG_POSTS
    : BLOG_POSTS.filter(p => p.category === selectedCategory);

  const featuredPost = BLOG_POSTS.find(p => p.featured) || BLOG_POSTS[0];
  const regularPosts = filteredPosts.filter(p => p.slug !== featuredPost.slug);

  const totalPages = Math.ceil(regularPosts.length / postsPerPage) || 1;
  const paginatedPosts = regularPosts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage);

  return (
    <div className="w-full pt-28 lg:pt-32 pb-24 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <Breadcrumbs items={[{ label: 'Insights & Resources' }]} />

        {/* Header */}
        <div className="mt-6 mb-10 space-y-4">
          <span className="text-[11px] font-bold tracking-[0.16em] text-[#5B6676] uppercase block">
            01 / Practical Commercial Advice
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0E1B2C] tracking-tight">
            Insights, risk reviews & broker advice.
          </h1>
          <p className="text-sm sm:text-base text-[#5B6676] max-w-2xl leading-relaxed">
            Preserving existing WordPress URL structures (/blog/:slug). Straightforward analysis of contract deeds, exclusion clauses, plant hire liabilities and Australian commercial insurance market trends.
          </p>
        </div>

        {/* Featured Post Card */}
        {featuredPost && selectedCategory === 'All' && (
          <div className="mb-14">
            <Link
              to={`/blog/${featuredPost.slug}`}
              className="group block bg-white rounded-2xl p-6 sm:p-10 border border-[#0E1B2C]/10 shadow-xs hover:shadow-md transition-all hover:-translate-y-0.5"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex items-center gap-3 text-xs text-[#5B6676]">
                    <span className="font-bold text-[#EE7625] uppercase tracking-wider text-[11px]">
                      Featured Analysis
                    </span>
                    <span>·</span>
                    <span>{featuredPost.category}</span>
                    <span>·</span>
                    <span className="font-mono">{featuredPost.readTime}</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold text-[#0E1B2C] group-hover:text-[#EE7625] transition-colors leading-tight">
                    {featuredPost.title}
                  </h2>

                  <p className="text-sm text-[#5B6676] leading-relaxed line-clamp-3">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center gap-3 pt-2">
                    <img
                      src={featuredPost.author.avatar}
                      alt={featuredPost.author.name}
                      className="w-9 h-9 rounded-full object-cover border border-[#0E1B2C]/10"
                    />
                    <div className="text-xs">
                      <span className="font-bold text-[#0E1B2C] block">{featuredPost.author.name}</span>
                      <span className="text-[#5B6676]">{featuredPost.publishedDate}</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-4 flex items-center justify-end">
                  <div className="w-full h-48 lg:h-56 rounded-xl bg-gradient-to-br from-[#102A3D] to-[#0A1C2A] p-6 text-white flex flex-col justify-between">
                    <div className="text-xs text-amber-300 font-mono">
                      WordPress Permanent URL: /blog/{featuredPost.slug}
                    </div>
                    <div>
                      <span className="text-xs text-slate-300 block mb-1">Steadfast Network Review</span>
                      <span className="text-sm font-bold flex items-center gap-1.5 text-white group-hover:text-[#EE7625] transition-colors">
                        Read full breakdown <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Category Filter Buttons (Functional Segmented Tabs) */}
        <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setCurrentPage(1);
              }}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-[#102A3D] text-white shadow-xs'
                  : 'bg-white border border-[#0E1B2C]/10 text-[#5B6676] hover:text-[#0E1B2C] hover:bg-[#F2F0EB]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid of Posts with AnimatePresence */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory + currentPage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {paginatedPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group bg-white rounded-xl p-6 border border-[#0E1B2C]/08 shadow-xs hover:shadow-lg transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between card-hover-border"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-[#5B6676]">
                    <span className="font-semibold text-[#0E1B2C]">{post.category}</span>
                    <span className="font-mono text-[11px]">{post.readTime}</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#0E1B2C] group-hover:text-[#EE7625] transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#5B6676] line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-[#0E1B2C]/06 flex items-center justify-between text-xs text-[#5B6676]">
                  <span>{post.publishedDate}</span>
                  <span className="font-bold text-[#0E1B2C] group-hover:text-[#EE7625] inline-flex items-center gap-1 transition-colors">
                    Read article <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex items-center justify-center gap-2">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentPage(idx + 1)}
                className={`w-9 h-9 rounded-lg text-xs font-bold transition-colors ${
                  currentPage === idx + 1
                    ? 'bg-[#EE7625] text-white'
                    : 'bg-white border border-[#0E1B2C]/10 text-[#0E1B2C] hover:bg-[#F2F0EB]'
                }`}
              >
                {idx + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
