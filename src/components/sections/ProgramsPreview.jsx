import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, PhoneCall, Stethoscope, GraduationCap, Baby, Users, Activity } from 'lucide-react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { IconContainer } from '../ui/IconContainer';
import { ImagePlaceholder } from '../ui/ImagePlaceholder';
import { programs } from '../../data/programs';

const iconMap = {
  PhoneCall,
  Stethoscope,
  GraduationCap,
  Baby,
  Users,
  Activity,
};

export const ProgramsPreview = () => {
  const featuredPrograms = programs.slice(0, 4);

  return (
    <section className="py-16 sm:py-24 bg-brand-tint/30 border-y border-warm-border/50">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeading
            badge="Integrated Care Initiatives"
            title="Physical Health & Mental Wellness Programs"
            subtitle="We treat physical illnesses and mental health distress with equal clinical rigor and deep human empathy."
            align="left"
            className="mb-0 max-w-2xl"
          />
          <Button
            to="/programs"
            variant="outline"
            size="md"
            icon={ArrowRight}
            iconPosition="right"
            className="mt-6 md:mt-0 self-start md:self-auto border-brand-teal/40 text-brand-teal-dark hover:bg-brand-teal hover:text-white"
          >
            Explore All 6 Programs
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredPrograms.map((program) => {
            const IconComponent = iconMap[program.icon] || Activity;
            return (
              <Card key={program.id} variant="default" padding="normal" className="flex flex-col justify-between group">
                <div>
                  {/* Photo Placeholder Header */}
                  <ImagePlaceholder
                    caption={`${program.title} Photo — pending`}
                    aspectRatio="aspect-[16/9]"
                    badge={program.category}
                    iconType="camera"
                    className="mb-5"
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
                </div>

                <div className="pt-4 border-t border-warm-border/60 flex items-center justify-between text-xs font-semibold text-warm-charcoal">
                  <span className="text-warm-muted truncate max-w-[200px]">
                    Target: {program.targetAudience.split(',')[0]}
                  </span>
                  <Link
                    to={`/programs/${program.slug}`}
                    className="inline-flex items-center gap-1 text-brand-teal hover:text-brand-teal-dark font-bold group-hover:translate-x-1 transition-transform"
                  >
                    <span>Read Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
