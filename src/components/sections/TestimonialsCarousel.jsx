import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Quote, Heart, ArrowRight } from 'lucide-react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { ImagePlaceholder } from '../ui/ImagePlaceholder';

const testimonials = [
  {
    id: "t1",
    quote: "When panic overwhelmed me at 2 AM, the tele-counseling helpline listened without judgment. They stayed on the call until I was grounded and safe.",
    author: "Priya S.",
    role: "Engineering Student (22)",
    location: "Mumbai",
    program: "24/7 Tele-Counseling Helpline",
    photoCap: "Priya S. Beneficiary Photo — pending"
  },
  {
    id: "t2",
    quote: "The camp doctors diagnosed my mother's severe anemia early and supplied 3 months of iron supplements for free. Her strength and smile are back.",
    author: "Ramesh Pawar",
    role: "Farmer & Son",
    location: "Satara District",
    program: "Rural Mobile Health Camp",
    photoCap: "Ramesh Pawar Beneficiary Photo — pending"
  },
  {
    id: "t3",
    quote: "After losing my husband, the Tuesday grief circle gave me a safe space to speak his name and feel understood by people who knew the pain.",
    author: "Meenakshi Iyer",
    role: "Support Group Member",
    location: "Pune",
    program: "Healing Circles Support Group",
    photoCap: "Meenakshi Iyer Beneficiary Photo — pending"
  }
];

export const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-16 sm:py-24 bg-gradient-soft-tint border-y border-warm-border/50">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeading
            badge="Voices of Transformation"
            title="Real Beneficiary Stories & Testimonials"
            subtitle="Candid accounts of restored physical health, emotional stability, and family dignity."
            align="left"
            className="mb-0 max-w-2xl"
          />
          <Link
            to="/stories"
            className="mt-6 md:mt-0 self-start md:self-auto inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-brand-tint text-brand-teal font-bold text-xs hover:bg-brand-teal hover:text-white transition-all duration-200 border border-brand-teal/20"
          >
            <span>Read All 12 Impact Stories</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div
          className="max-w-5xl mx-auto relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <Card variant="default" padding="spacious" className="relative shadow-lift bg-white/95 border border-warm-border">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* Beneficiary Photo Placeholder */}
              <div className="md:col-span-4">
                <ImagePlaceholder
                  caption={current.photoCap}
                  aspectRatio="aspect-square"
                  badge={current.program}
                  iconType="user"
                  className="shadow-soft"
                />
              </div>

              {/* Story Quote Details */}
              <div className="md:col-span-8 flex flex-col justify-between space-y-6">
                <div>
                  <Quote className="w-10 h-10 text-brand-teal/30 mb-3" />
                  <p className="text-lg sm:text-xl text-warm-charcoal font-medium leading-relaxed italic">
                    "{current.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-warm-border/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h4 className="font-extrabold text-base text-warm-charcoal">{current.author}</h4>
                    <p className="text-xs text-warm-muted">{current.role} • {current.location}</p>
                  </div>

                  <span className="px-3.5 py-1 text-xs font-bold rounded-full bg-brand-tint text-brand-teal border border-brand-teal/20 self-start sm:self-auto">
                    {current.program}
                  </span>
                </div>
              </div>
            </div>
          </Card>

          {/* Controls */}
          <div className="flex items-center justify-between mt-6 px-2">
            {/* Slide Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    idx === currentIndex ? 'w-8 bg-brand-teal' : 'w-2.5 bg-warm-border hover:bg-brand-teal/50'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Prev / Next buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="p-2.5 rounded-xl bg-white border border-warm-border text-warm-charcoal hover:bg-brand-tint hover:text-brand-teal transition-colors focus:outline-none shadow-sm"
                aria-label="Previous story"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="p-2.5 rounded-xl bg-white border border-warm-border text-warm-charcoal hover:bg-brand-tint hover:text-brand-teal transition-colors focus:outline-none shadow-sm"
                aria-label="Next story"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TestimonialsCarousel;
