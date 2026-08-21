import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight, PhoneCall, Stethoscope, GraduationCap, Baby, Users, Activity, CheckCircle2 } from 'lucide-react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
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
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -380, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 380, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-brand-tint/30 border-y border-warm-border/50 overflow-hidden">
      <Container>
        {/* Header with Title & Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <SectionHeading
            badge="Integrated Care Initiatives"
            title="Physical Health & Mental Wellness Programs"
            subtitle="We treat physical illnesses and mental health distress with equal clinical rigor and deep human empathy."
            align="left"
            className="mb-0 max-w-2xl"
          />

          <div className="mt-6 md:mt-0 flex items-center gap-4 self-start md:self-auto">
            {/* Slider Arrow Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={scrollLeft}
                className="p-3 rounded-xl bg-white border border-warm-border text-warm-charcoal hover:bg-brand-teal hover:text-white hover:border-brand-teal transition-all duration-200 shadow-xs focus:outline-none"
                aria-label="Previous Program"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={scrollRight}
                className="p-3 rounded-xl bg-white border border-warm-border text-warm-charcoal hover:bg-brand-teal hover:text-white hover:border-brand-teal transition-all duration-200 shadow-xs focus:outline-none"
                aria-label="Next Program"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <Button
              to="/programs"
              variant="outline"
              size="md"
              icon={ArrowRight}
              iconPosition="right"
              className="border-brand-teal/40 text-brand-teal-dark hover:bg-brand-teal hover:text-white shadow-xs"
            >
              All 6 Programs
            </Button>
          </div>
        </div>

        {/* Horizontal Slider Track with Hover Zoom & Shadow Highlight */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory py-4 px-1 -mx-1"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {programs.map((program) => {
            const IconComponent = iconMap[program.icon] || Activity;
            return (
              <div
                key={program.id}
                className="group relative flex-shrink-0 w-[300px] sm:w-[350px] md:w-[380px] snap-start bg-white rounded-2xl border border-warm-border p-6 shadow-soft hover:shadow-2xl hover:shadow-brand-teal/20 hover:border-brand-teal/60 hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Subtle Hover Highlight Gradient Backdrop */}
                <div className="absolute inset-0 bg-gradient-to-b from-brand-tint/0 via-brand-tint/20 to-brand-tint/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative z-10">
                  {/* Photo Placeholder Header with Hover Zoom Effect */}
                  <div className="overflow-hidden rounded-xl mb-5 border border-brand-teal/15">
                    <div className="transform group-hover:scale-110 transition-transform duration-500">
                      <ImagePlaceholder
                        caption={`${program.title} Photo — pending`}
                        aspectRatio="aspect-[16/9]"
                        badge={program.category}
                        iconType="camera"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`px-3 py-1 text-xs font-bold rounded-full ${
                        program.category === 'Mental Health'
                          ? 'bg-purple-50 text-purple-700 border border-purple-200'
                          : 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                      }`}
                    >
                      {program.category}
                    </span>
                    <IconContainer
                      icon={IconComponent}
                      size="md"
                      variant={program.category === 'Mental Health' ? 'teal' : 'sage'}
                    />
                  </div>

                  <h3 className="text-xl font-bold text-warm-charcoal group-hover:text-brand-teal transition-colors mb-2 line-clamp-2">
                    {program.title}
                  </h3>

                  <p className="text-warm-muted text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
                    {program.shortDesc}
                  </p>

                  <div className="space-y-1.5 mb-4 text-xs text-warm-charcoal">
                    {program.features.slice(0, 2).map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 truncate">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-teal flex-shrink-0" />
                        <span className="truncate text-warm-muted">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative z-10 pt-4 border-t border-warm-border/60 flex items-center justify-between text-xs font-semibold text-warm-charcoal mt-auto">
                  <span className="text-warm-muted truncate max-w-[170px]">
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
              </div>
            );
          })}
        </div>

        {/* Swipe/Scroll Hint */}
        <div className="mt-4 text-center text-xs font-semibold text-warm-muted flex items-center justify-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse" />
          <span>Swipe or click arrows to explore all 6 initiatives</span>
        </div>
      </Container>
    </section>
  );
};

export default ProgramsPreview;
