import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Tabs } from '../components/ui/Tabs';
import { IconContainer } from '../components/ui/IconContainer';
import { ImagePlaceholder } from '../components/ui/ImagePlaceholder';
import { programs, howWeWorkSteps } from '../data/programs';
import { PhoneCall, Stethoscope, GraduationCap, Baby, Users, Activity, ArrowRight, CheckCircle2, Search, HeartHandshake, ShieldCheck, ClipboardCheck } from 'lucide-react';

const iconMap = {
  PhoneCall,
  Stethoscope,
  GraduationCap,
  Baby,
  Users,
  Activity,
};

const stepIcons = [Search, ShieldCheck, HeartHandshake, ClipboardCheck];

export const Programs = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredPrograms = activeCategory === 'all'
    ? programs
    : programs.filter((p) => p.category === activeCategory);

  return (
    <main className="bg-warm-base py-12">
      {/* Header */}
      <section className="bg-gradient-soft-tint py-12 sm:py-16 border-b border-warm-border/50">
        <Container>
          <SectionHeading
            badge="Our Clinical & Mental Outreach"
            title="Integrated Physical & Mental Health Programs"
            subtitle="Explore our 6 core initiatives designed to treat physical illness, provide emotional first aid, and build long-term community resilience."
            align="center"
          />

          <div className="flex justify-center mt-6">
            <Tabs
              tabs={[
                { id: 'all', label: 'All Programs', count: programs.length },
                { id: 'Mental Health', label: 'Mental Health Initiatives', count: 3 },
                { id: 'Physical Health', label: 'Physical Health Initiatives', count: 3 },
              ]}
              activeTab={activeCategory}
              onChange={setActiveCategory}
            />
          </div>
        </Container>
      </section>

      {/* Program Cards Grid with Image Placeholders */}
      <section className="py-16 bg-white border-b border-warm-border/60">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPrograms.map((program) => {
              const IconComponent = iconMap[program.icon] || Activity;
              return (
                <Card key={program.id} variant="default" padding="normal" className="flex flex-col justify-between group">
                  <div>
                    <ImagePlaceholder
                      caption={`${program.title} Photo — pending`}
                      aspectRatio="aspect-[16/9]"
                      badge={program.category}
                      iconType="camera"
                      className="mb-4"
                    />

                    <div className="flex items-center justify-between mb-3">
                      <span className={`px-3 py-1 text-xs font-bold rounded-full ${
                        program.category === 'Mental Health'
                          ? 'bg-purple-50 text-purple-700 border border-purple-200'
                          : 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                      }`}>
                        {program.category}
                      </span>
                      <IconContainer icon={IconComponent} size="md" variant={program.category === 'Mental Health' ? 'teal' : 'sage'} />
                    </div>

                    <h3 className="text-xl font-bold text-warm-charcoal group-hover:text-brand-teal transition-colors mb-2">
                      {program.title}
                    </h3>

                    <p className="text-warm-muted text-sm leading-relaxed mb-6">
                      {program.shortDesc}
                    </p>

                    <div className="space-y-2 mb-6 text-xs text-warm-charcoal">
                      {program.features.slice(0, 2).map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-teal flex-shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-warm-border/60 flex items-center justify-between">
                    <Button
                      to={`/programs/${program.slug}`}
                      variant="primary"
                      size="sm"
                      icon={ArrowRight}
                      iconPosition="right"
                      className="w-full justify-center"
                    >
                      View Program Details
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      {/* How We Work: 4-step visual with Numbered Icon Badges connected by subtle line (§2) */}
      <section className="py-16 sm:py-24 bg-warm-base">
        <Container>
          <SectionHeading
            badge="Healthcare Delivery Model"
            title="How We Work: 4 Steps from Outreach to Care"
            subtitle="A systematic, respectful workflow ensuring every individual receives clinical diagnosis, emotional support, and follow-up care."
            align="center"
          />

          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Subtle connecting line on desktop */}
            <div className="hidden lg:block absolute top-12 left-12 right-12 h-0.5 bg-brand-teal/20 pointer-events-none z-0" />

            {howWeWorkSteps.map((stepItem, idx) => {
              const StepIcon = stepIcons[idx] || Activity;
              return (
                <Card key={idx} variant="tint" padding="normal" className="relative z-10 flex flex-col justify-between group">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-black text-brand-teal tracking-tight">{stepItem.step}</span>
                      <IconContainer icon={StepIcon} size="md" variant="teal" />
                    </div>

                    <h4 className="text-lg font-bold text-warm-charcoal mb-2">{stepItem.title}</h4>
                    <p className="text-xs text-warm-muted leading-relaxed">{stepItem.desc}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>
    </main>
  );
};

export default Programs;
