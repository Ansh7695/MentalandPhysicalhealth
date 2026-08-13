import React from 'react';
import { Heart, ShieldCheck, MapPin, Calendar } from 'lucide-react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { ProgressBar } from '../ui/StatCounter';
import { AccentBadge } from '../ui/AccentBadge';

export const FeaturedCampaign = () => {
  return (
    <section className="py-16 sm:py-20 bg-warm-base">
      <Container>
        <div className="bg-gradient-to-br from-white via-warm-base to-brand-tint/30 rounded-3xl p-8 sm:p-12 border-2 border-coral-accent/30 shadow-lift relative overflow-hidden">
          {/* Featured Ribbon */}
          <div className="absolute top-0 right-0">
            <span className="inline-block bg-coral-accent text-white text-xs font-bold uppercase tracking-wider px-6 py-2 rounded-bl-2xl shadow-sm">
              Urgent High-Impact Campaign
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <AccentBadge variant="coral" className="mb-3">
                Monsoon Healthcare & Crisis Response
              </AccentBadge>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-warm-charcoal tracking-tight mb-4">
                Mobile Health Van #4 for Palghar Tribal Hamlets
              </h2>

              <p className="text-warm-muted text-base leading-relaxed mb-6">
                Monsoon floods cut off over 40 rural villages from district hospitals. Your contributions will procure, equip, and staff Mobile Medical Clinic Van #4 with a full-time physician, clinical psychologist, and diagnostic lab equipment.
              </p>

              {/* Campaign Progress Bar */}
              <div className="bg-white p-5 rounded-2xl border border-warm-border shadow-soft mb-8">
                <ProgressBar
                  progress={74}
                  label="Campaign Progress"
                  currentAmount="₹18,50,000"
                  goalAmount="₹25,00,000"
                />
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Button
                  to="/donate"
                  variant="coral"
                  size="lg"
                  icon={Heart}
                >
                  Sponsor Mobile Van Care
                </Button>

                <div className="text-xs text-warm-muted font-medium flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Eligible for 50% 80G Tax Benefit</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-white p-6 rounded-2xl border border-warm-border shadow-soft space-y-4 text-sm">
                <h4 className="font-bold text-warm-charcoal text-base border-b border-warm-border pb-3">
                  Campaign Breakdown & Goals
                </h4>
                
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-warm-charcoal block">Location Coverage</span>
                    <span className="text-warm-muted text-xs">42 Tribal Villages in Jawhar & Mokhada Talukas</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-brand-sage-dark flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-warm-charcoal block">Deployment Timeline</span>
                    <span className="text-warm-muted text-xs">Monsoon Triage Season (Immediate Operations)</span>
                  </div>
                </div>

                <div className="p-3 bg-brand-tint/60 rounded-xl text-xs text-brand-teal-dark font-medium leading-relaxed">
                  💡 <strong>Donor Impact:</strong> ₹3,000 sponsors 1 full day of diagnostic testing and medicines for 15 villagers.
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
