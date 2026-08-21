import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../components/ui/Container';
import { ImagePlaceholder } from '../components/ui/ImagePlaceholder';
import { HeartPulse, Quote, PhoneCall, Mail, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { orgInfo } from '../data/orgInfo';

export const FoundersNote = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <main className="bg-warm-base">
      {/* 1. Dramatic Typography Hero Block */}
      <section className="pt-12 sm:pt-20 pb-16 bg-gradient-to-b from-brand-tint/50 via-warm-base to-warm-base border-b border-warm-border/50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Bold Headline & Intro */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-teal/10 text-brand-teal font-extrabold text-xs tracking-widest uppercase border border-brand-teal/20">
                <span className="w-2 h-2 rounded-full bg-brand-teal animate-ping" />
                Meet The Leadership
              </div>

              <div>
                <span className="block text-xs font-black tracking-widest uppercase text-brand-sage-dark mb-1">
                  MEET
                </span>
                <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-warm-charcoal tracking-tight uppercase leading-none">
                  THE FOUNDER
                </h1>
                <span className="block text-lg sm:text-2xl font-bold text-brand-teal mt-2">
                  Dr. Ananya Deshmukh, MD (Community Medicine), MPH (Harvard)
                </span>
              </div>

              <p className="text-lg sm:text-xl text-warm-muted leading-relaxed font-normal max-w-2xl">
                A public health physician and NIMHANS fellow who spent over 15 years bridging the gap between physical healthcare triage and destigmatized mental health support across rural India.
              </p>
            </div>

            {/* Right Column: Founder Portrait Placeholder */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md">
                <ImagePlaceholder
                  caption="Founder portrait — pending"
                  aspectRatio="aspect-[3/4]"
                  badge="Founder & Director"
                  iconType="user"
                  className="shadow-lift border-2 border-brand-teal/20"
                />
              </div>
            </div>
          </div>

          {/* 2. Three Numbered Role / Identity Tags in a Row */}
          <div className="mt-16 pt-8 border-t border-warm-border/60 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-white border border-warm-border shadow-xs flex items-center gap-4">
              <span className="text-3xl font-black text-brand-teal">01</span>
              <div>
                <strong className="block font-bold text-sm text-warm-charcoal uppercase tracking-wider">FOUNDER</strong>
                <span className="text-xs text-warm-muted">Established Neelima Charitable Trust in 2017</span>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-warm-border shadow-xs flex items-center gap-4">
              <span className="text-3xl font-black text-brand-sage-dark">02</span>
              <div>
                <strong className="block font-bold text-sm text-warm-charcoal uppercase tracking-wider">ADVOCATE</strong>
                <span className="text-xs text-warm-muted">Dismantling mental health stigma</span>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-warm-border shadow-xs flex items-center gap-4">
              <span className="text-3xl font-black text-coral-accent">03</span>
              <div>
                <strong className="block font-bold text-sm text-warm-charcoal uppercase tracking-wider">CAREGIVER</strong>
                <span className="text-xs text-warm-muted">Practicing grassroots clinician</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Process / Discipline Strip: 4-Step Horizontal Timeline */}
      <section className="py-16 sm:py-24 bg-white border-b border-warm-border/60 relative overflow-hidden">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-brand-teal uppercase tracking-widest block mb-2">
              DISCIPLINE & CARE CONTINUUM
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-warm-charcoal tracking-tight">
              Our 4-Step Clinical Triage Protocol
            </h2>
            <p className="text-xs sm:text-sm text-warm-muted mt-2">
              How Dr. Deshmukh's methodology transforms beneficiary health from initial outreach to sustained recovery.
            </p>
          </div>

          <div className="relative">
            {/* Soft decorative background circular logo mark anchor */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border-2 border-brand-teal/10 pointer-events-none flex items-center justify-center">
              <HeartPulse className="w-48 h-48 text-brand-teal/5" />
            </div>

            {/* Connecting Horizontal Thin Line */}
            <div className="hidden lg:block absolute top-10 left-[12%] right-[12%] h-0.5 bg-brand-teal/30 z-0 border-t border-dashed border-brand-teal" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {[
                { num: '01', title: 'Outreach', desc: 'Mobile diagnostic vans visit remote villages.', active: true },
                { num: '02', title: 'Assessment', desc: 'Combined physical checkup & psychological triage.', active: false },
                { num: '03', title: 'Care', desc: 'Free medication, therapy & hospital referrals.', active: false },
                { num: '04', title: 'Follow-up', desc: '12+ months of community peer monitoring.', active: false },
              ].map((step, idx) => (
                <div key={idx} className="bg-warm-base p-6 rounded-2xl border border-warm-border text-center space-y-3 relative group hover:border-brand-teal/50 transition-all shadow-xs">
                  <div
                    className={`w-14 h-14 rounded-full mx-auto flex items-center justify-center font-black text-lg transition-all duration-300 ${
                      step.active
                        ? 'bg-brand-teal text-white shadow-lift ring-4 ring-brand-teal/20'
                        : 'bg-white text-brand-teal border border-brand-teal/30 group-hover:bg-brand-teal group-hover:text-white'
                    }`}
                  >
                    {step.num}
                  </div>
                  <h4 className="font-bold text-lg text-warm-charcoal">{step.title}</h4>
                  <p className="text-xs text-warm-muted leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Bio Narrative & Pull Quote Section */}
      <section className="py-16 sm:py-24 bg-warm-base">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Secondary Photo Placeholder */}
            <div className="lg:col-span-5 space-y-6">
              <ImagePlaceholder
                caption="Founder at field medical camp — pending"
                aspectRatio="aspect-[4/3]"
                badge="Field Operations • Satara"
                iconType="camera"
                className="shadow-soft border border-warm-border"
              />

              <div className="p-6 bg-white rounded-2xl border border-warm-border space-y-3 shadow-xs">
                <span className="text-xs font-bold text-brand-teal uppercase tracking-wider block">Clinical Rigor</span>
                <p className="text-xs text-warm-muted leading-relaxed">
                  "Every program at Neelima Charitable Trust undergoes annual independent KPMG financial audits and NIMHANS peer clinical reviews."
                </p>
                <div className="text-[11px] font-bold text-warm-charcoal pt-2 border-t border-warm-border/50">
                  — Public Health Accountability Standard
                </div>
              </div>
            </div>

            {/* Right Column: Two-Column Narrative Text */}
            <div className="lg:col-span-7 space-y-6">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-warm-charcoal tracking-tight">
                "Why I Left Hospital Wards to Walk Rural Dust Tracks"
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-warm-charcoal leading-relaxed font-normal">
                <div className="space-y-4">
                  <p>
                    When I began my medical career in municipal hospitals, I believed health was simply a matter of prescribing antibiotics and writing iron supplement tablets. But I quickly noticed a recurring pattern.
                  </p>
                  <p>
                    A young mother would come in with chronic migraines and severe weight loss. We would run tests, find no physical pathogen, and send her home. Weeks later, she would return worse. Nobody had asked about her living conditions, her anxiety, or her quiet grief.
                  </p>
                </div>
                <div className="space-y-4">
                  <p>
                    Physical illness and psychological distress are deeply intertwined. In rural districts, admitting to mental suffering carries immense social stigma. People suffer silently until it manifests as physical breakdown.
                  </p>
                  <p>
                    That is why we built Neelima Charitable Trust. Our mobile clinics bring physical diagnostics and compassionate tele-counselors directly to doorstep level, treating body and mind with equal dignity.
                  </p>
                </div>
              </div>

              {/* 5. Pull Quote */}
              <div className="my-8 p-8 bg-brand-tint/60 border-l-4 border-brand-teal rounded-r-3xl space-y-3">
                <Quote className="w-10 h-10 text-brand-teal/40" />
                <p className="text-lg sm:text-xl font-bold text-warm-charcoal italic leading-relaxed">
                  "Healthcare is incomplete when we treat physical illness but ignore the silent agony of mental distress. Neelima Charitable Trust exists to give dignity to both."
                </p>
                <span className="block text-xs font-bold text-brand-teal uppercase tracking-widest">
                  — Dr. Ananya Deshmukh, Founder's Vision Statement
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 6. Closing Band (Deep Teal Background with Quick Links & Helpline) */}
      <section className="bg-brand-teal-dark text-white py-16 border-t border-brand-teal-dark">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-white/20">
            {/* Col 1: Brand */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-white font-black text-xl">
                <HeartPulse className="w-6 h-6 text-brand-light" />
                <span>Neelima Charitable Trust</span>
              </div>
              <p className="text-xs text-white/80 leading-relaxed">
                Dedicated to making quality physical healthcare and crisis tele-counseling accessible to every individual.
              </p>
              <div className="pt-2 text-xs text-emerald-300 font-bold">
                80G Reg: {orgInfo.legal.section80G.split(' ')[0]} (50% Tax Exemption)
              </div>
            </div>

            {/* Col 2: Quick Links */}
            <div className="space-y-2 text-xs">
              <h4 className="font-bold text-white uppercase tracking-wider mb-2">Explore Initiatives</h4>
              <Link to="/programs" className="block text-white/80 hover:text-white transition-colors">Physical & Mental Programs</Link>
              <Link to="/about" className="block text-white/80 hover:text-white transition-colors">Our Full Story & Team</Link>
              <Link to="/stories" className="block text-white/80 hover:text-white transition-colors">Beneficiary Transformations</Link>
              <Link to="/donate" className="block text-coral-accent font-bold hover:underline">Donate Now (80G Tax Exemption)</Link>
            </div>

            {/* Col 3: 24/7 Helpline */}
            <div className="space-y-2 text-xs">
              <h4 className="font-bold text-white uppercase tracking-wider mb-2">Direct Triage Desk</h4>
              <div className="p-3 bg-white/10 rounded-xl space-y-1">
                <span className="text-[11px] text-emerald-300 font-bold block">Toll-Free 24/7 Crisis Helpline</span>
                <a href={`tel:${orgInfo.helpline.number.replace(/-/g, '')}`} className="text-base font-black text-white hover:underline block">
                  {orgInfo.helpline.number}
                </a>
                <span className="text-[10px] text-white/70 block">Free, multi-lingual, confidential</span>
              </div>
            </div>

            {/* Col 4: Newsletter */}
            <div className="space-y-3 text-xs">
              <h4 className="font-bold text-white uppercase tracking-wider">Stay Updated</h4>
              {subscribed ? (
                <div className="p-3 bg-emerald-900/60 rounded-xl text-emerald-200 text-xs">
                  ✓ Thank you for subscribing to Founder updates!
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-2">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 text-xs focus:outline-none focus:border-white"
                  />
                  <button
                    type="submit"
                    className="w-full py-2 rounded-xl bg-white text-brand-teal-dark font-bold text-xs hover:bg-brand-tint transition-colors flex items-center justify-center gap-1"
                  >
                    <span>Subscribe</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>

          <div className="pt-8 text-center text-xs text-white/60">
            © {new Date().getFullYear()} {orgInfo.name}. Founder's Note & Operational Governance Documentation.
          </div>
        </Container>
      </section>
    </main>
  );
};

export default FoundersNote;
