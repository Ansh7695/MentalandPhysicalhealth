import React from 'react';
import { HeartPulse, Brain, Truck, Users, ShieldCheck } from 'lucide-react';
import { Container } from '../ui/Container';
import { StatCounter } from '../ui/StatCounter';
import { orgInfo } from '../../data/orgInfo';

export const ImpactSnapshot = () => {
  return (
    <section className="py-16 sm:py-20 bg-warm-base relative">
      <Container>
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-warm-border shadow-lift relative overflow-hidden">
          {/* Decorative Tint Top Bar */}
          <div className="absolute top-0 inset-x-0 h-2 bg-gradient-teal-sage" />

          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-extrabold tracking-widest text-brand-teal uppercase">
              Measurable Human Impact
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-warm-charcoal mt-2">
              Every Number Represents a Restored Life
            </h2>
            <p className="text-warm-muted text-sm sm:text-base mt-2">
              Our integrated physical and mental health interventions deliver concrete outcomes across 38 districts.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCounter
              value={orgInfo.impactStats.livesImpacted}
              label="Lives Impacted"
              subtext="Physical health camps & diagnostics"
              icon={HeartPulse}
            />
            <StatCounter
              value={orgInfo.impactStats.counselingSessions}
              label="Tele-Counseling Hours"
              subtext="Confidential crisis sessions"
              icon={Brain}
            />
            <StatCounter
              value={orgInfo.impactStats.ruralCamps}
              label="Rural Health Camps"
              subtext="Mobile medical units in villages"
              icon={Truck}
            />
            <StatCounter
              value={orgInfo.impactStats.activeVolunteers}
              label="Active Volunteers"
              subtext="Doctors, psychologists & listeners"
              icon={Users}
            />
          </div>

          <div className="mt-10 pt-6 border-t border-warm-border/60 flex flex-wrap justify-center items-center gap-8 text-xs font-semibold text-warm-muted">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-brand-teal" /> KPMG Audited Financials
            </span>
            <span>•</span>
            <span>82% Direct Program Deployment</span>
            <span>•</span>
            <span>FCRA & 80G Certified</span>
          </div>
        </div>
      </Container>
    </section>
  );
};
