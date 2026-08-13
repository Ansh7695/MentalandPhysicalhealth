import React from 'react';
import { Heart, PhoneCall, ShieldCheck, Activity, Brain } from 'lucide-react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { AccentBadge } from '../ui/AccentBadge';
import { ImagePlaceholder } from '../ui/ImagePlaceholder';
import { orgInfo } from '../../data/orgInfo';

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-tint/60 via-warm-base to-warm-base pt-12 sm:pt-16 pb-16 sm:pb-24 border-b border-warm-border/50">
      {/* Soft Blurred Organic Background Blobs (Non-retail, Calm Editorial) */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-brand-teal/8 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-brand-sage/12 blur-3xl pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Single Clear Hook & Primary Call to Action */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <AccentBadge variant="teal" className="mb-4 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Verified Health & Mental Wellness NGO
            </AccentBadge>

            {/* Single Emotional Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-warm-charcoal tracking-tight leading-[1.15] mb-6">
              Healing <span className="text-brand-teal">Bodies</span>, Restoring <span className="text-brand-sage-dark">Minds</span> across Rural & Urban India.
            </h1>

            {/* Plain-Language Donor & Care Description */}
            <p className="text-lg sm:text-xl text-warm-muted leading-relaxed font-normal mb-8 max-w-2xl">
              Every day, thousands face physical illness and hidden emotional distress without access to healthcare. Your support powers rural mobile medical clinics and provides free, 24/7 tele-counseling for anyone in need.
            </p>

            {/* CTAs: ONE Primary Donate CTA (Coral) + Secondary Help/Volunteer CTA */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <Button
                to="/donate"
                variant="coral"
                size="lg"
                icon={Heart}
                className="w-full sm:w-auto text-center"
              >
                Donate Now — 50% 80G Tax Benefit
              </Button>

              <Button
                to="/contact"
                variant="outline"
                size="lg"
                icon={PhoneCall}
                className="w-full sm:w-auto text-center border-brand-teal/30 hover:border-brand-teal text-brand-teal-dark"
              >
                Need Help? Call Helpline
              </Button>
            </div>

            {/* Trust Micro-Badges */}
            <div className="mt-10 pt-6 border-t border-warm-border/70 flex flex-wrap items-center gap-6 text-xs font-semibold text-warm-muted">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-brand-teal" />
                <span>12A & 80G Tax Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-emerald-600" />
                <span>148,500+ Lives Touched</span>
              </div>
              <div className="flex items-center gap-2">
                <Brain className="w-4 h-4 text-brand-sage-dark" />
                <span>24/7 Free Helpline</span>
              </div>
            </div>
          </div>

          {/* Right Column: Photo-Led Placeholder Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none space-y-4">
              <ImagePlaceholder
                caption="Field Mobile Health Camp Photo — pending"
                aspectRatio="aspect-[4/3]"
                badge="Field Operations • Maharashtra"
                iconType="camera"
                className="shadow-soft"
              />

              {/* Floating Stat Micro Card */}
              <div className="bg-white p-4 rounded-2xl shadow-soft border border-warm-border flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-coral-light flex items-center justify-center text-coral-accent font-bold text-sm">
                    82%
                  </div>
                  <div>
                    <div className="text-xs font-bold text-warm-charcoal">Direct Impact Ratio</div>
                    <div className="text-[11px] text-warm-muted">Audited Funds to Healthcare</div>
                  </div>
                </div>
                <span className="text-[11px] font-semibold text-brand-teal bg-brand-tint px-2.5 py-1 rounded-full">
                  KPMG Audited
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
