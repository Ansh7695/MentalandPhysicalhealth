import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ArrowRight, Star, Users, MessageCircleHeart, Play } from 'lucide-react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

export const Hero = () => {
  return (
    <section className="relative min-h-[580px] lg:min-h-[640px] flex flex-col justify-between overflow-hidden text-white bg-slate-900">
      {/* Full-Bleed Video Background Container with Poster Fallback & Video Placeholder Badge */}
      <div className="absolute inset-0 z-0">
        {/* Background Video Element (Autoplay, Muted, Loop, Cover) */}
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1920&q=80"
          className="w-full h-full object-cover filter brightness-[0.7]"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-doctor-talking-to-a-patient-42834-large.mp4" type="video/mp4" />
        </video>

        {/* Clear Video Placeholder Overlay Badge */}
        <div className="absolute top-4 right-4 z-20 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[11px] font-semibold text-white/90 flex items-center gap-1.5">
          <Play className="w-3 h-3 text-brand-teal fill-brand-teal" />
          <span>Hero video — pending final footage</span>
        </div>

        {/* Dark Gradient Overlay for optimal white typography legibility */}
        <div
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.30) 50%, rgba(0,0,0,0.50) 100%)',
          }}
        />
      </div>

      {/* Hero Content Container */}
      <Container className="relative z-20 pt-16 sm:pt-24 pb-12 flex-1 flex flex-col justify-center">
        <div className="max-w-3xl space-y-6">
          {/* Main Emotional Headline (Max 2 lines, Bold, White) */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] drop-shadow-md">
            Healing Bodies, Restoring Minds across Rural & Urban India.
          </h1>

          {/* Subtext (1-2 lines, lighter weight, directly under headline) */}
          <p className="text-base sm:text-xl text-white/90 font-normal leading-relaxed max-w-2xl drop-shadow-sm">
            Powers rural mobile health clinics and provides free, 24/7 tele-counseling for every family facing physical illness or hidden emotional distress.
          </p>

          {/* Two CTA Buttons Side-by-Side: Primary Solid Coral + Secondary Solid White */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            {/* Primary CTA: Solid Coral Accent */}
            <Button
              to="/donate"
              variant="coral"
              size="lg"
              icon={Heart}
              className="w-full sm:w-auto text-center font-bold px-7 py-4 shadow-xl"
            >
              Donate Now — 50% 80G Tax Benefit
            </Button>

            {/* Secondary CTA: Solid White Button */}
            <Link
              to="/programs"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white text-warm-charcoal font-bold text-sm hover:bg-warm-base transition-all duration-200 shadow-lg"
            >
              <span>View Our Programs</span>
              <ArrowRight className="w-4 h-4 text-brand-teal" />
            </Link>
          </div>

          {/* Small Trust Line Under Buttons */}
          <p className="text-xs text-white/75 font-medium tracking-wide">
            Trusted by 148,000+ families, certified doctors, and volunteers across India.
          </p>
        </div>
      </Container>

      {/* Bottom Trust Badges Row (Sitting directly on the video with minimal treatment) */}
      <div className="relative z-20 border-t border-white/15 bg-black/40 backdrop-blur-sm py-4">
        <Container>
          <div className="flex flex-wrap items-center justify-between gap-6 text-xs sm:text-sm font-semibold text-white/90">
            {/* Badge 1: Google Reviews Rating */}
            <div className="flex items-center gap-2">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span><strong>4.9 Rating</strong> on Google Reviews • Neelima Charitable Trust</span>
            </div>

            {/* Badge 2: Key Impact Stat */}
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-brand-teal-light" />
              <span><strong>500+ Families</strong> Supported Daily</span>
            </div>

            {/* Badge 3: Community Link */}
            <Link
              to="/stories"
              className="flex items-center gap-1.5 text-brand-teal-light hover:text-white font-bold transition-colors group"
            >
              <MessageCircleHeart className="w-4 h-4 text-coral-accent" />
              <span>Hear from our community</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Hero;
