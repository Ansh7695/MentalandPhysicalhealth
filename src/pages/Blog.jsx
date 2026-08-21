import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Tabs } from '../components/ui/Tabs';
import { ImagePlaceholder } from '../components/ui/ImagePlaceholder';
import { blogPosts } from '../data/blogPosts';
import { Search, Clock, ArrowRight, BookOpen, Sparkles } from 'lucide-react';
import clsx from 'clsx';

export const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCat = activeCategory === 'all' || post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <main className="bg-warm-base py-12">
      {/* Hero Banner & Search Filter */}
      <section className="bg-gradient-soft-tint py-12 sm:py-16 border-b border-warm-border/50">
        <Container>
          <SectionHeading
            badge="Health & Mind Publications"
            title="Articles, Clinical Insights & Beneficiary Voices"
            subtitle="Read insights from our clinical psychologists, medical directors, and field outreach teams."
            align="center"
          />

          {/* Search & Category Filter */}
          <div className="max-w-3xl mx-auto space-y-4 mt-6">
            <div className="relative">
              <Search className="w-5 h-5 absolute left-4 top-3.5 text-warm-muted" />
              <input
                type="text"
                placeholder="Search articles by title or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-2xl border border-warm-border text-sm focus:outline-none focus:border-brand-teal shadow-sm bg-white"
              />
            </div>

            <div className="flex justify-center">
              <Tabs
                tabs={[
                  { id: 'all', label: 'All Categories' },
                  { id: 'Mental Health', label: 'Mental Health' },
                  { id: 'Physical Health', label: 'Physical Health' },
                  { id: 'Community Stories', label: 'Community Stories' },
                  { id: 'Announcements', label: 'Announcements' },
                ]}
                activeTab={activeCategory}
                onChange={setActiveCategory}
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Articles Bento Grid Section */}
      <section className="py-16 bg-white">
        <Container>
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16 text-warm-muted">
              No articles found matching your search. Try resetting filters.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 auto-rows-[minmax(280px,auto)]">
              {filteredPosts.map((post, idx) => {
                // Bento Layout Logic:
                // idx 0 -> Featured Large Hero Card (2 cols, 2 rows)
                // idx 1 -> Vertical Card (1 col)
                // idx 2 -> Compact Card (1 col)
                // idx 3 -> Wide Horizontal Card (2 cols)
                const isFeaturedHero = idx === 0;
                const isWideHorizontal = idx === 3;

                return (
                  <div
                    key={post.id}
                    className={clsx(
                      'group relative rounded-3xl overflow-hidden border border-warm-border/80 shadow-soft hover:shadow-2xl hover:border-brand-teal/50 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between bg-white',
                      isFeaturedHero && 'md:col-span-2 md:row-span-2 bg-gradient-to-br from-brand-teal-dark via-slate-900 to-warm-charcoal text-white',
                      isWideHorizontal && 'md:col-span-2 bg-gradient-to-r from-brand-tint/40 via-white to-white border-brand-teal/20',
                      !isFeaturedHero && !isWideHorizontal && 'col-span-1'
                    )}
                  >
                    {/* Featured Hero Card Special Dark Styling */}
                    {isFeaturedHero ? (
                      <div className="p-8 sm:p-10 flex flex-col justify-between h-full relative z-10 space-y-6">
                        <div className="flex items-center justify-between">
                          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-400/20 text-emerald-300 border border-emerald-400/30 text-xs font-bold uppercase tracking-wider">
                            <Sparkles className="w-3.5 h-3.5" />
                            Featured Edition • {post.category}
                          </span>
                          <span className="text-xs text-white/70 flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" /> {post.readTime}
                          </span>
                        </div>

                        <div className="space-y-4 my-auto">
                          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight group-hover:text-emerald-300 transition-colors">
                            {post.title}
                          </h2>
                          <p className="text-sm sm:text-base text-white/85 leading-relaxed line-clamp-3">
                            {post.excerpt}
                          </p>
                        </div>

                        <div className="pt-6 border-t border-white/20 flex items-center justify-between text-xs text-white/80">
                          <div>
                            <span className="font-bold block text-white">{post.author}</span>
                            <span className="text-[11px] text-white/60">{post.date}</span>
                          </div>
                          <Link
                            to={`/blog/${post.slug}`}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-warm-charcoal font-bold text-xs hover:bg-emerald-300 hover:text-warm-charcoal transition-all shadow-md"
                          >
                            <span>Read Full Feature</span>
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    ) : isWideHorizontal ? (
                      /* Wide Horizontal Bento Card */
                      <div className="p-8 flex flex-col md:flex-row justify-between items-stretch gap-6 h-full">
                        <div className="md:w-2/5 flex-shrink-0 overflow-hidden rounded-2xl border border-brand-teal/20">
                          <ImagePlaceholder
                            caption={`${post.title.substring(0, 20)}...`}
                            aspectRatio="aspect-video"
                            badge={post.category}
                            iconType="camera"
                            className="h-full"
                          />
                        </div>
                        <div className="md:w-3/5 flex flex-col justify-between space-y-4">
                          <div>
                            <div className="flex items-center justify-between text-xs text-warm-muted mb-2">
                              <span className="px-2.5 py-0.5 rounded-full bg-brand-tint text-brand-teal font-bold">
                                {post.category}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="w-3.5 h-3.5" /> {post.readTime}
                              </span>
                            </div>
                            <h3 className="text-xl font-bold text-warm-charcoal group-hover:text-brand-teal transition-colors mb-2">
                              {post.title}
                            </h3>
                            <p className="text-xs text-warm-muted leading-relaxed line-clamp-2">
                              {post.excerpt}
                            </p>
                          </div>
                          <div className="pt-4 border-t border-warm-border/60 flex items-center justify-between text-xs">
                            <span className="text-warm-muted">{post.date}</span>
                            <Link
                              to={`/blog/${post.slug}`}
                              className="font-bold text-brand-teal hover:underline flex items-center gap-1"
                            >
                              <span>Read Article</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    ) : (
                      /* Standard Bento Card */
                      <div className="flex flex-col justify-between h-full p-6 space-y-4">
                        <div>
                          <ImagePlaceholder
                            caption={`${post.title.substring(0, 20)}...`}
                            aspectRatio="aspect-[16/9]"
                            badge={post.category}
                            iconType="camera"
                            className="mb-4"
                          />
                          <div className="flex items-center justify-between text-xs text-warm-muted mb-2">
                            <span className="px-2.5 py-0.5 rounded-full bg-brand-tint text-brand-teal font-bold">
                              {post.category}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3.5 h-3.5" /> {post.readTime}
                            </span>
                          </div>
                          <h3 className="text-lg font-bold text-warm-charcoal group-hover:text-brand-teal transition-colors mb-2 line-clamp-2">
                            {post.title}
                          </h3>
                          <p className="text-xs text-warm-muted leading-relaxed line-clamp-3">
                            {post.excerpt}
                          </p>
                        </div>

                        <div className="pt-4 border-t border-warm-border/60 flex items-center justify-between text-xs text-warm-muted">
                          <span>{post.date}</span>
                          <Link
                            to={`/blog/${post.slug}`}
                            className="font-bold text-brand-teal group-hover:text-brand-teal-dark flex items-center gap-1"
                          >
                            <span>Read</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </Container>
      </section>
    </main>
  );
};

export default Blog;
