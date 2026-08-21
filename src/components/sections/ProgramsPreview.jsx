import React, { useRef, useEffect, useState } from 'react';
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

// Triple the programs array for seamless infinite looping
const infinitePrograms = [...programs, ...programs, ...programs];

export const ProgramsPreview = () => {
  const scrollContainerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  // Set initial scroll position to middle set on mount
  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const singleSetWidth = container.scrollWidth / 3;
      container.scrollLeft = singleSetWidth;
    }
  }, []);

  // Handle seamless loop reset on scroll
  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const singleSetWidth = container.scrollWidth / 3;

    if (container.scrollLeft <= 20) {
      // Jump forward to middle set
      container.scrollLeft += singleSetWidth;
    } else if (container.scrollLeft >= singleSetWidth * 2 - 20) {
      // Jump back to middle set
      container.scrollLeft -= singleSetWidth;
    }
  };

  // Auto-slide every 3.5 seconds when not hovered
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollBy({ left: 380, behavior: 'smooth' });
      }
    }, 3500);
    return () => clearInterval(interval);
  }, [isPaused]);

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

          <div className="mt-6 md:mt-0 flex items-center gap-2 self-start md:self-auto">
            {/* Infinite Slider Arrow Buttons */}
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
        </div>

        {/* Infinite Loop Horizontal Slider Track */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="flex gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory py-4 px-1 -mx-1"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {infinitePrograms.map((program, idx) => {
            const IconComponent = iconMap[program.icon] || Activity;
            return (
              <div
                key={`${program.id}-${idx}`}
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
                    {program.features.slice(0, 2).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-1.5 truncate">
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

        {/* Infinite Loop Status & Hint */}
        <div className="mt-4 text-center text-xs font-semibold text-warm-muted flex items-center justify-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse" />
          <span>Infinite Loop Slider • Swipe or use arrows to scroll endlessly</span>
        </div>
      </Container>
    </section>
  );
};

export default ProgramsPreview;
