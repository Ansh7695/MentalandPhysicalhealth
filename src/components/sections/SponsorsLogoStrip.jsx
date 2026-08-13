import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../ui/Container';
import { sponsorTiers } from '../../data/sponsors';

export const SponsorsLogoStrip = () => {
  const allSponsors = sponsorTiers.flatMap((t) => t.sponsors);

  return (
    <section className="py-12 bg-white border-b border-warm-border/50">
      <Container>
        <div className="text-center mb-8">
          <span className="text-xs font-extrabold uppercase tracking-widest text-warm-muted">
            Backed by Trusted CSR Foundations & Healthcare Partners
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center">
          {allSponsors.slice(0, 5).map((sponsor, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-warm-base/60 border border-warm-border/50 flex flex-col items-center justify-center text-center hover:border-brand-teal/30 transition-all group min-h-[90px]"
            >
              <span className="font-extrabold text-sm text-warm-charcoal tracking-wide group-hover:text-brand-teal transition-colors">
                {sponsor.logoText}
              </span>
              <span className="text-[10px] text-warm-muted mt-1 line-clamp-1">
                {sponsor.contribution}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          <Link
            to="/sponsors"
            className="text-xs font-bold text-brand-teal hover:underline tracking-wide"
          >
            Become a Corporate Partner / CSR Sponsor →
          </Link>
        </div>
      </Container>
    </section>
  );
};
