import React from 'react';
import { Heart, PhoneCall, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

export const FinalCTABanner = () => {
  return (
    <section className="py-20 sm:py-28 bg-gradient-teal-sage text-white relative overflow-hidden shadow-2xl border-t border-brand-teal-dark/40">
      {/* Dynamic Background Pattern */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#fff_1.5px,transparent_1.5px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-emerald-400/20 blur-3xl pointer-events-none" />

      <Container className="relative z-10 text-center max-w-4xl">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-extrabold uppercase tracking-widest mb-6 shadow-sm border border-white/25">
          <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
          <span>Make a Direct Impact Today</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-6 drop-shadow-md">
          Your Generosity Saves Lives & Restores Peace of Mind
        </h2>

        <p className="text-white/95 text-base sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10 font-medium">
          Whether you donate ₹500 for a rural mother's medical kit or ₹1,500 for a student's tele-counseling sessions, every rupee translates directly into care.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button
            to="/donate"
            variant="coral"
            size="lg"
            icon={Heart}
            className="shadow-2xl text-lg px-9 py-4 hover:scale-105 transition-transform"
          >
            Donate Now — 50% Tax Benefit
          </Button>

          <Button
            to="/get-involved/volunteer"
            variant="outline"
            size="lg"
            className="bg-white/15 text-white border-white/40 hover:bg-white hover:text-brand-teal-dark text-lg px-8 py-4 backdrop-blur-md font-semibold"
          >
            Join as a Volunteer
          </Button>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-white/90 font-medium">
          <span className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-300" /> 100% Secure Gateway
          </span>
          <span className="hidden sm:inline">•</span>
          <span className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-300" /> 80G Receipt Emailed Instantly
          </span>
          <span className="hidden sm:inline">•</span>
          <span>FCRA Approved NGO</span>
        </div>
      </Container>
    </section>
  );
};

export default FinalCTABanner;
