import React from 'react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { IconContainer } from '../ui/IconContainer';
import { Compass, Stethoscope, HeartHandshake, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    stepNumber: '01',
    title: 'Outreach & Awareness',
    desc: 'Mobile vans & health workers visit underserved rural villages and urban slums to conduct free baseline diagnostic screenings.',
    icon: Compass,
    badge: 'Step 1'
  },
  {
    stepNumber: '02',
    title: 'Clinical Assessment',
    desc: 'Certified medical doctors and NIMHANS-trained psychologists evaluate physical health and psychological distress.',
    icon: Stethoscope,
    badge: 'Step 2'
  },
  {
    stepNumber: '03',
    title: 'Integrated Care Triage',
    desc: 'Patients receive immediate free medication, therapy counseling, or direct hospital referral with full financial coverage.',
    icon: HeartHandshake,
    badge: 'Step 3'
  },
  {
    stepNumber: '04',
    title: 'Sustained Follow-up',
    desc: 'Community mentors monitor ongoing treatment compliance, tele-counseling progress, and family welfare for 12+ months.',
    icon: CheckCircle2,
    badge: 'Step 4'
  }
];

export const HowWeWork = () => {
  return (
    <section className="py-16 sm:py-24 bg-warm-base border-b border-warm-border/50 relative overflow-hidden">
      {/* Background Soft Blobs */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-brand-teal/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-brand-sage/10 blur-3xl pointer-events-none" />

      <Container>
        <SectionHeading
          badge="Our Healthcare Delivery Model"
          title="How We Work: 4 Steps from Outreach to Recovery"
          subtitle="A transparent, dignified care continuum bridging physical medicine and emotional first aid."
          align="center"
        />

        <div className="relative mt-12">
          {/* Subtle connecting path line for desktop */}
          <div className="hidden lg:block absolute top-14 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-brand-teal/20 via-brand-sage/40 to-brand-teal/20 z-0 border-t border-dashed border-brand-teal/40" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((item, idx) => (
              <Card
                key={idx}
                variant="tint"
                padding="normal"
                className="flex flex-col justify-between group hover:border-brand-teal/40 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div>
                  {/* Step Icon Badge Header */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="w-8 h-8 rounded-full bg-brand-teal/10 text-brand-teal font-extrabold text-xs flex items-center justify-center border border-brand-teal/20">
                      {item.stepNumber}
                    </span>
                    <IconContainer icon={item.icon} size="md" variant="teal-coral" />
                  </div>

                  <h3 className="text-lg font-bold text-warm-charcoal group-hover:text-brand-teal transition-colors mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-warm-muted leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-warm-border/40 text-[11px] font-semibold text-brand-teal-dark flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-teal" />
                  <span>{item.badge} • Triage Protocol</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HowWeWork;
