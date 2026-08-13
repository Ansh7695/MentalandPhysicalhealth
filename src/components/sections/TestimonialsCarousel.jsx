import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, Heart } from 'lucide-react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';

const testimonials = [
  {
    quote: "When panic overwhelmed me at 2 AM, the tele-counseling helpline listened without judgment. They stayed on the call until I was grounded and safe.",
    author: "Priya S.",
    role: "Engineering Student (22)",
    location: "Mumbai",
    program: "24/7 Tele-Counseling Helpline"
  },
  {
    quote: "The camp doctors diagnosed my mother's severe anemia early and supplied 3 months of iron supplements for free. Her strength is back.",
    author: "Ramesh Pawar",
    role: "Farmer & Son",
    location: "Satara District",
    program: "Rural Mobile Health Camp"
  },
  {
    quote: "After losing my husband, the Tuesday grief circle gave me a safe space to speak his name and feel understood by people who knew the pain.",
    author: "Meenakshi Iyer",
    role: "Support Group Member",
    location: "Pune",
    program: "Healing Circles Support Group"
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
        <SectionHeading
          badge="Voices of Transformation"
          title="Stories from Those We Serve"
          subtitle="Real experiences of restored health, mental resilience, and emotional safety."
          align="center"
        />

        <div
          className="max-w-4xl mx-auto relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <Card variant="default" padding="spacious" className="relative shadow-lift bg-white/95">
            <Quote className="w-12 h-12 text-brand-teal/20 mb-4" />

            <div className="min-h-[160px] flex flex-col justify-between">
              <p className="text-lg sm:text-xl md:text-2xl text-warm-charcoal font-medium leading-relaxed italic">
                "{current.quote}"
              </p>

              <div className="mt-8 pt-6 border-t border-warm-border/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h4 className="font-bold text-base text-warm-charcoal">{current.author}</h4>
                  <p className="text-xs text-warm-muted">{current.role} • {current.location}</p>
                </div>

                <span className="px-3.5 py-1 text-xs font-semibold rounded-full bg-brand-tint text-brand-teal border border-brand-teal/20 self-start sm:self-auto">
                  {current.program}
                </span>
              </div>
            </div>
          </Card>

          {/* Controls */}
          <div className="flex items-center justify-between mt-6 px-2">
            {/* Dots */}
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
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="p-2.5 rounded-xl bg-white border border-warm-border text-warm-charcoal hover:bg-brand-tint hover:text-brand-teal transition-colors focus:outline-none shadow-sm"
                aria-label="Next testimonial"
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
