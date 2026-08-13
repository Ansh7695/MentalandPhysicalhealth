import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { ImagePlaceholder } from '../ui/ImagePlaceholder';
import { blogPosts } from '../../data/blogPosts';

export const BlogPreview = () => {
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-16 sm:py-24 bg-warm-base">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeading
            badge="Health & Wellness Insights"
            title="Latest Articles & Community News"
            subtitle="Expert advice on mental resilience, physical preventive care, and beneficiary stories."
            align="left"
            className="mb-0 max-w-2xl"
          />
          <Button
            to="/blog"
            variant="outline"
            size="md"
            icon={ArrowRight}
            iconPosition="right"
            className="mt-6 md:mt-0 self-start md:self-auto border-brand-teal/40 text-brand-teal-dark hover:bg-brand-teal hover:text-white"
          >
            View All Articles
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestPosts.map((post) => (
            <Card key={post.id} variant="default" padding="none" className="flex flex-col justify-between group">
              <div>
                <ImagePlaceholder
                  caption={`${post.title.substring(0, 30)}... Featured Photo`}
                  aspectRatio="aspect-[16/9]"
                  badge={post.category}
                  iconType="camera"
                />

                <div className="p-6">
                  <div className="flex items-center justify-between text-xs text-warm-muted mb-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-brand-tint text-brand-teal font-semibold">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-warm-charcoal group-hover:text-brand-teal transition-colors line-clamp-2 mb-2">
                    {post.title}
                  </h3>

                  <p className="text-warm-muted text-sm leading-relaxed line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-warm-border/40 mt-auto flex items-center justify-between text-xs text-warm-muted">
                <span>By {post.author.split(',')[0]}</span>
                <Link
                  to={`/blog/${post.slug}`}
                  className="font-bold text-brand-teal group-hover:text-brand-teal-dark flex items-center gap-1"
                >
                  <span>Read Post</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};
