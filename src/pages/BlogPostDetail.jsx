import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container } from '../components/ui/Container';
import { Card } from '../components/ui/Card';
import { AccentBadge } from '../components/ui/AccentBadge';
import { Button } from '../components/ui/Button';
import { ImagePlaceholder } from '../components/ui/ImagePlaceholder';
import { blogPosts } from '../data/blogPosts';
import { ArrowLeft, Clock, Calendar, Share2, Heart, CheckCircle2 } from 'lucide-react';

export const BlogPostDetail = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug) || blogPosts[0];
  const relatedPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 2);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({ title: post.title, url: window.location.href });
    } else {
      alert("Article link copied to clipboard!");
    }
  };

  return (
    <main className="bg-warm-base py-12">
      {/* Back Button */}
      <Container className="mb-6">
        <Link to="/blog" className="inline-flex items-center gap-2 text-xs font-bold text-brand-teal hover:underline">
          <ArrowLeft className="w-4 h-4" /> Back to Articles
        </Link>
      </Container>

      <article>
        {/* Article Header */}
        <section className="bg-white py-12 sm:py-16 border-y border-warm-border/50">
          <Container size="narrow">
            <AccentBadge variant="teal" className="mb-4">
              {post.category}
            </AccentBadge>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-warm-charcoal tracking-tight leading-tight mb-6">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-warm-border/60 text-xs text-warm-muted mb-8">
              <div>
                <span className="font-bold text-warm-charcoal block">{post.author}</span>
                <div className="flex items-center gap-3 mt-1">
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
                </div>
              </div>

              <Button variant="outline" size="sm" icon={Share2} onClick={handleShare}>
                Share Post
              </Button>
            </div>

            {/* Post Header Image Placeholder */}
            <ImagePlaceholder
              caption={`${post.title} Cover Photo — pending`}
              aspectRatio="aspect-video"
              badge={post.category}
              iconType="camera"
              className="shadow-soft"
            />
          </Container>
        </section>

        {/* Article Body - Max Width 680px for optimal readability */}
        <section className="py-16 bg-warm-base">
          <Container size="prose">
            <div className="space-y-6 text-warm-charcoal text-base sm:text-lg leading-relaxed">
              {post.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}

              {/* Takeaway Box */}
              {post.takeaway && (
                <div className="my-8 p-6 bg-brand-tint/60 border-l-4 border-brand-teal rounded-r-2xl text-sm leading-relaxed text-brand-teal-dark font-medium">
                  <span className="font-bold block mb-1 uppercase tracking-wider text-xs">Key Takeaway</span>
                  {post.takeaway}
                </div>
              )}
            </div>

            {/* In-Article Donate Banner */}
            <div className="mt-12 p-8 bg-coral-light/60 border border-coral-accent/30 rounded-3xl text-center space-y-4">
              <h3 className="text-xl font-bold text-warm-charcoal">Help Us Continue Publishing & Serving</h3>
              <p className="text-xs text-warm-muted max-w-md mx-auto">
                Your ₹1,500 contribution funds 3 tele-counseling sessions for individuals in emotional distress.
              </p>
              <Button to="/donate" variant="coral" size="md" icon={Heart} className="mx-auto">
                Donate Now — 50% 80G Tax Benefit
              </Button>
            </div>
          </Container>
        </section>
      </article>

      {/* Related Posts */}
      <section className="py-16 bg-white border-t border-warm-border/50">
        <Container>
          <h3 className="text-2xl font-bold text-warm-charcoal mb-8">Related Articles</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {relatedPosts.map((rel) => (
              <Card key={rel.id} variant="default" padding="normal">
                <ImagePlaceholder
                  caption={`${rel.title.substring(0, 20)}... Photo`}
                  aspectRatio="aspect-[16/9]"
                  iconType="camera"
                  className="mb-3"
                />
                <span className="text-xs font-bold text-brand-teal">{rel.category}</span>
                <h4 className="text-lg font-bold text-warm-charcoal mt-1 mb-2">{rel.title}</h4>
                <p className="text-xs text-warm-muted line-clamp-2 mb-4">{rel.excerpt}</p>
                <Link to={`/blog/${rel.slug}`} className="text-xs font-bold text-brand-teal hover:underline">
                  Read Article →
                </Link>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
};

export default BlogPostDetail;
