import React, { useState } from 'react';
import { Mail, CheckCircle2, ArrowRight } from 'lucide-react';
import { Container } from '../ui/Container';

export const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-16 bg-brand-tint/60 border-y border-warm-border/50">
      <Container size="narrow">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-warm-border shadow-lift text-center">
          <div className="w-12 h-12 rounded-2xl bg-brand-tint flex items-center justify-center text-brand-teal mx-auto mb-4">
            <Mail className="w-6 h-6" />
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-warm-charcoal mb-2">
            Receive Our Monthly Impact Triage Report
          </h2>

          <p className="text-warm-muted text-sm sm:text-base leading-relaxed max-w-lg mx-auto mb-6">
            Join 12,000+ donors receiving quarterly audited financial summaries, field stories, and mental health resources directly in their inbox.
          </p>

          {submitted ? (
            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-emerald-800 text-sm font-semibold flex items-center justify-center gap-2 max-w-md mx-auto">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>Thank you! You are now subscribed to Aura Foundation field reports.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-xl border border-warm-border text-warm-charcoal text-sm focus:outline-none focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-brand-teal text-white font-bold text-sm hover:bg-brand-teal-dark transition-colors inline-flex items-center justify-center gap-2 shadow-soft"
              >
                <span>Subscribe</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}

          <span className="text-[11px] text-warm-muted block mt-4">
            We respect your privacy. Zero spam. Unsubscribe with 1-click anytime.
          </span>
        </div>
      </Container>
    </section>
  );
};
