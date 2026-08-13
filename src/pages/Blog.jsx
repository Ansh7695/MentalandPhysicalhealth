import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';
import { Tabs } from '../components/ui/Tabs';
import { ImagePlaceholder } from '../components/ui/ImagePlaceholder';
import { blogPosts } from '../data/blogPosts';
import { Search, Clock, ArrowRight } from 'lucide-react';

export const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCat = activeCategory === 'all' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <main className="bg-warm-base py-12">
      <section className="bg-gradient-soft-tint py-12 sm:py-16 border-b border-warm-border/50">
        <Container>
          <SectionHeading
            badge="Health & Wellness Publications"
            title="Articles, Clinical Advice & Community Stories"
            subtitle="Read insights from our clinical psychologists, medical directors, and beneficiary stories."
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

      {/* Articles Grid with Photo Placeholders */}
      <section className="py-16 bg-white">
        <Container>
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12 text-warm-muted">
              No articles found matching your search. Try resetting filters.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Card key={post.id} variant="default" padding="none" className="flex flex-col justify-between group">
                  <div>
                    <ImagePlaceholder
                      caption={`${post.title.substring(0, 25)}... Photo`}
                      aspectRatio="aspect-[16/9]"
                      badge={post.category}
                      iconType="camera"
                    />

                    <div className="p-6">
                      <div className="flex items-center justify-between text-xs text-warm-muted mb-3">
                        <span className="px-2.5 py-0.5 rounded-full bg-brand-tint text-brand-teal font-bold">
                          {post.category}
                        </span>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-warm-charcoal group-hover:text-brand-teal transition-colors mb-2 line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="text-warm-muted text-xs leading-relaxed line-clamp-3 mb-4">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0 border-t border-warm-border/40 mt-auto flex items-center justify-between text-xs text-warm-muted">
                    <span>{post.date}</span>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="font-bold text-brand-teal group-hover:text-brand-teal-dark flex items-center gap-1"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </Container>
      </section>
    </main>
  );
};

export default Blog;
