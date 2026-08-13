import React, { useState } from 'react';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { sponsorTiers, sponsorshipPackages } from '../data/sponsors';
import { CheckCircle2, Handshake, ShieldCheck, Send } from 'lucide-react';

export const Sponsors = () => {
  const [formData, setFormData] = useState({ company: '', contactName: '', email: '', phone: '', package: 'Adopt a Rural Van' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="bg-warm-base py-12">
      <section className="bg-gradient-soft-tint py-12 sm:py-16 border-b border-warm-border/50">
        <Container>
          <SectionHeading
            badge="Institutional Partnerships"
            title="Our Corporate CSR Sponsors & Partners"
            subtitle="Collaborating with forward-thinking foundations and corporate brands to scale physical healthcare & tele-counseling."
            align="center"
          />
        </Container>
      </section>

      {/* Sponsor Tier Grids */}
      <section className="py-16 bg-white border-b border-warm-border/60">
        <Container>
          <div className="space-y-12">
            {sponsorTiers.map((tier, idx) => (
              <div key={idx} className="space-y-4">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-bold text-warm-charcoal">{tier.tierName}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold border ${tier.badgeColor}`}>
                    Verified Partners
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {tier.sponsors.map((sp, sIdx) => (
                    <Card key={sIdx} variant="tint" padding="normal" className="flex flex-col justify-between">
                      <span className="font-extrabold text-lg text-warm-charcoal tracking-wide">{sp.logoText}</span>
                      <p className="text-xs font-semibold text-warm-charcoal mt-2">{sp.name}</p>
                      <span className="text-[11px] text-warm-muted mt-1 block">{sp.contribution}</span>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Sponsorship Packages & Contact Form */}
      <section className="py-16 sm:py-24 bg-warm-base">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Packages */}
            <div className="lg:col-span-7 space-y-6">
              <h3 className="text-2xl font-bold text-warm-charcoal">CSR Sponsorship Models</h3>

              <div className="space-y-6">
                {sponsorshipPackages.map((pkg, idx) => (
                  <Card key={idx} variant="default" padding="normal" className="space-y-3">
                    <div className="flex justify-between items-start">
                      <h4 className="font-bold text-lg text-warm-charcoal">{pkg.title}</h4>
                      <span className="text-lg font-extrabold text-brand-teal">{pkg.amount}</span>
                    </div>
                    <ul className="space-y-1.5 text-xs text-warm-muted">
                      {pkg.benefits.map((b, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                ))}
              </div>
            </div>

            {/* Corporate Contact Form */}
            <div className="lg:col-span-5">
              <Card variant="tint" padding="spacious" className="space-y-4">
                <h3 className="text-xl font-bold text-warm-charcoal">Become a CSR Partner</h3>
                <p className="text-xs text-warm-muted leading-relaxed">
                  Fill out your corporate details below. Our CSR Director will share our audited financial pitch deck within 24 hours.
                </p>

                {submitted ? (
                  <div className="p-4 bg-emerald-50 text-emerald-800 rounded-xl text-xs font-semibold text-center space-y-2">
                    <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                    <p>Thank you! Your partnership inquiry has been dispatched to our CSR board.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3 text-xs">
                    <div>
                      <label className="block font-bold text-warm-charcoal mb-1">Company / Foundation Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl border border-warm-border text-sm focus:outline-none focus:border-brand-teal"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-warm-charcoal mb-1">Contact Person Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.contactName}
                        onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl border border-warm-border text-sm focus:outline-none focus:border-brand-teal"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block font-bold text-warm-charcoal mb-1">Work Email *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-3 py-2 rounded-xl border border-warm-border text-sm focus:outline-none focus:border-brand-teal"
                        />
                      </div>
                      <div>
                        <label className="block font-bold text-warm-charcoal mb-1">Mobile Phone *</label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-3 py-2 rounded-xl border border-warm-border text-sm focus:outline-none focus:border-brand-teal"
                        />
                      </div>
                    </div>
                    <Button type="submit" variant="coral" size="md" icon={Send} className="w-full justify-center mt-2">
                      Submit Partnership Inquiry
                    </Button>
                  </form>
                )}
              </Card>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default Sponsors;
