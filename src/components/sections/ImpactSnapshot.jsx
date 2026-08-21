import React, { useEffect, useState, useRef } from 'react';
import { Container } from '../ui/Container';
import { HeartPulse, Brain, Truck, ShieldCheck } from 'lucide-react';
import { orgInfo } from '../../data/orgInfo';

function CountUpNumber({ value }) {
  const [displayed, setDisplayed] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  const numericMatch = value.toString().match(/\d[\d,]*/);
  const targetNumber = numericMatch ? parseInt(numericMatch[0].replace(/,/g, ''), 10) : 0;
  const suffix = value.toString().replace(/[\d,]/g, '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated || targetNumber === 0) return;
    let start = 0;
    const duration = 1800;
    const steps = 40;
    const increment = targetNumber / steps;
    const stepTime = duration / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= targetNumber) {
        setDisplayed(targetNumber);
        clearInterval(timer);
      } else {
        setDisplayed(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [hasAnimated, targetNumber]);

  return (
    <span ref={ref}>
      {hasAnimated ? displayed.toLocaleString() : '0'}{suffix}
    </span>
  );
}

export const ImpactSnapshot = () => {
  return (
    <section className="py-16 sm:py-24 bg-warm-base border-b border-warm-border/50">
      <Container>
        {/* Centered Intro (Normal typography, short heading + 1-line subtext) */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-warm-charcoal tracking-tight">
            Measurable Human Impact
          </h2>
          <p className="text-sm sm:text-base text-warm-muted mt-2 font-normal">
            Every metric represents audited physical healing and destigmatized mental health care.
          </p>
        </div>

        {/* Asymmetric Mosaic Grid of Solid Color Rounded-Rectangle Blocks (~22px radius, generous gaps) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Block 1: Wide Soft Cream Block */}
          <div className="md:col-span-7 bg-white p-8 rounded-[22px] border border-warm-border/80 shadow-xs hover:-translate-y-1 transition-transform duration-300 flex flex-col justify-between group">
            <div className="flex items-center justify-between mb-6">
              <span className="w-10 h-10 rounded-xl bg-brand-tint flex items-center justify-center text-brand-teal">
                <HeartPulse className="w-5 h-5" />
              </span>
              <span className="text-xs font-bold text-brand-teal uppercase tracking-widest">
                Physical Health Triage
              </span>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-black text-warm-charcoal tracking-tight">
                <CountUpNumber value={orgInfo.impactStats.livesImpacted} />
              </div>
              <div className="mt-2 text-base font-bold text-warm-charcoal">
                People Served Across Rural Districts
              </div>
              <p className="text-xs text-warm-muted mt-1 leading-relaxed">
                Free diagnostic screenings, prescription medicines, and maternal care delivered via mobile health vans.
              </p>
            </div>
          </div>

          {/* Block 2: Deep Teal Dark Anchor Block */}
          <div className="md:col-span-5 bg-brand-teal-dark text-white p-8 rounded-[22px] shadow-lift hover:-translate-y-1 transition-transform duration-300 flex flex-col justify-between relative overflow-hidden group">
            <div className="flex items-center justify-between mb-6">
              <span className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-emerald-300">
                <Brain className="w-5 h-5" />
              </span>
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-emerald-300">
                24/7 Helpline Desk
              </span>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                <CountUpNumber value={orgInfo.impactStats.counselingSessions} />
              </div>
              <div className="mt-2 text-base font-bold text-white">
                Tele-Counseling Hours Completed
              </div>
              <p className="text-xs text-white/80 mt-1 leading-relaxed">
                Free, multi-lingual emotional distress counseling handled by certified NIMHANS psychologists.
              </p>
            </div>
            {/* Small Italicized Caption in the corner */}
            <div className="mt-6 pt-4 border-t border-white/20 text-xs text-emerald-200/90 italic font-serif">
              *Care rooted in dignity*
            </div>
          </div>

          {/* Block 3: Light Sage Tint Block */}
          <div className="md:col-span-4 bg-[#EEF5F2] p-7 rounded-[22px] border border-brand-teal/20 shadow-xs hover:-translate-y-1 transition-transform duration-300 flex flex-col justify-between group">
            <div className="flex items-center justify-between mb-4">
              <span className="w-9 h-9 rounded-xl bg-white flex items-center justify-center text-brand-sage-dark shadow-xs">
                <Truck className="w-4 h-4" />
              </span>
              <span className="text-[11px] font-bold text-brand-sage-dark uppercase tracking-wider">
                Field Operations
              </span>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-black text-warm-charcoal tracking-tight">
                <CountUpNumber value={orgInfo.impactStats.ruralCamps} />
              </div>
              <div className="mt-1 text-sm font-bold text-warm-charcoal">
                Rural Health Camps Held
              </div>
              <p className="text-xs text-warm-muted mt-1 leading-relaxed">
                Conducting village health camps across Maharashtra, Gujarat & Rajasthan.
              </p>
            </div>
          </div>

          {/* Block 4: Warm Sand / Tan-Teal Blend Block */}
          <div className="md:col-span-8 bg-[#E8F1EE] p-7 rounded-[22px] border border-brand-teal/20 shadow-xs hover:-translate-y-1 transition-transform duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-6 group">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-brand-teal text-xs font-bold shadow-xs">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-teal" />
                <span>KPMG Audited Accountability</span>
              </div>
              <div className="text-3xl sm:text-4xl font-black text-warm-charcoal tracking-tight">
                <CountUpNumber value="82%" />
              </div>
              <div className="text-sm font-bold text-warm-charcoal">
                Direct Program Deployment Ratio
              </div>
              <p className="text-xs text-warm-muted leading-relaxed">
                82% of every donor rupee is deployed directly into patient care and clinical medicines.
              </p>
            </div>

            <div className="p-4 bg-white/90 rounded-2xl border border-warm-border text-center sm:text-right flex-shrink-0">
              <span className="block text-2xl font-black text-brand-teal">100%</span>
              <span className="text-[11px] font-bold text-warm-charcoal">12A & 80G Compliant</span>
              <span className="block text-[10px] text-warm-muted mt-0.5">Tax Receipts Issued Instantly</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ImpactSnapshot;
