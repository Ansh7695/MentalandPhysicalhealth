import React, { useState, useEffect } from 'react';
import { Star, User } from 'lucide-react';
import { Container } from '../ui/Container';
import { ImagePlaceholder } from '../ui/ImagePlaceholder';

const testimonials = [
  {
    id: "t1",
    quote: "When panic overwhelmed me at 2 AM, the tele-counseling helpline listened without judgment. They stayed on the call until I was grounded and safe.",
    author: "Anjali Verma",
    role: "Beneficiary, 24/7 Tele-Counseling Program",
    initials: "AV"
  },
  {
    id: "t2",
    quote: "The camp doctors diagnosed my mother's severe anemia early and supplied 3 months of iron supplements for free. Her strength and smile are back.",
    author: "Ramesh Pawar",
    role: "Beneficiary, Rural Mobile Health Camp",
    initials: "RP"
  },
  {
    id: "t3",
    quote: "After losing my husband, the Tuesday grief circle gave me a safe space to speak his name and feel understood by people who knew the pain.",
    author: "Meenakshi Iyer",
    role: "Participant, Healing Circles Support Group",
    initials: "MI"
  }
];

// Collage Photo Blocks Data
const collageBlocks = [
  { caption: "Health camp — pending", badge: "Field Camp", aspectRatio: "aspect-[3/4]", pos: "top-4 left-4 lg:left-8 w-28 sm:w-36 hidden sm:block rotate-[-3deg]" },
  { caption: "Counseling session — pending", badge: "Helpline", aspectRatio: "aspect-[4/3]", pos: "top-6 right-4 lg:right-8 w-32 sm:w-40 hidden sm:block rotate-[3deg]" },
  { caption: "Community outreach — pending", badge: "Outreach", aspectRatio: "aspect-[4/3]", pos: "bottom-6 left-4 lg:left-10 w-32 sm:w-40 hidden lg:block rotate-[2deg]" },
  { caption: "Team at work — pending", badge: "Clinical Team", aspectRatio: "aspect-[3/4]", pos: "bottom-6 right-4 lg:right-10 w-28 sm:w-36 hidden lg:block rotate-[-2deg]" },
];

export const TestimonialsCarousel = () => {
  const [starsVisible, setStarsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStarsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-16 sm:py-24 bg-[#F4F7F5] border-y border-warm-border/60 relative overflow-hidden">
      <Container>
        {/* Outer Framed Panel Inset (White Rounded Panel with Mosaic Collage Photo Blocks) */}
        <div className="relative mx-auto max-w-6xl rounded-3xl bg-white p-6 sm:p-12 lg:p-16 border border-warm-border/80 shadow-lift overflow-hidden">
          
          {/* Organic Photo Collage Frame: Mosaic Photo Blocks Arranged Around Edges */}
          {collageBlocks.map((block, idx) => (
            <div
              key={idx}
              className={`absolute ${block.pos} z-0 opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-500 shadow-soft border border-brand-teal/20 pointer-events-none sm:pointer-events-auto`}
            >
              <ImagePlaceholder
                caption={block.caption}
                aspectRatio={block.aspectRatio}
                badge={block.badge}
                iconType="camera"
                className="text-[10px]"
              />
            </div>
          ))}

          {/* Centered Content Container */}
          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-4">
            {/* Pill-Shaped Eyebrow Badge */}
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-brand-tint border border-brand-teal/20 text-brand-teal text-xs font-extrabold uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse" />
              Testimonials
            </div>

            {/* Two-Tone Two-Line Heading */}
            <div className="space-y-1">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-warm-charcoal tracking-tight leading-tight">
                Trusted by families and communities
              </h2>
              <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-warm-muted/90 tracking-tight">
                across rural & urban India
              </p>
            </div>
          </div>

          {/* Three-Column Testimonial Row */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-4">
            {testimonials.map((item, idx) => (
              <div
                key={item.id}
                className="bg-warm-base/60 p-6 sm:p-7 rounded-2xl border border-warm-border/70 flex flex-col justify-between space-y-6 hover:bg-white hover:shadow-soft hover:border-brand-teal/30 hover:-translate-y-1 transition-all duration-300 group"
              >
                {/* 5-Star Rating Row with Sequential Fill-in Stagger */}
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 transition-all duration-300 ${
                        starsVisible
                          ? 'fill-amber-400 text-amber-400 scale-100'
                          : 'fill-warm-border text-warm-border scale-75'
                      }`}
                      style={{ transitionDelay: `${(idx * 5 + i) * 60}ms` }}
                    />
                  ))}
                </div>

                {/* Short Quote (2-3 Lines) */}
                <p className="text-sm sm:text-base text-warm-charcoal font-medium leading-relaxed italic">
                  "{item.quote}"
                </p>

                {/* Attribution Row at Bottom: Small Circular Avatar + Name + Specific Role */}
                <div className="pt-4 border-t border-warm-border/60 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-tint border border-brand-teal/30 flex items-center justify-center font-extrabold text-xs text-brand-teal flex-shrink-0 shadow-xs group-hover:bg-brand-teal group-hover:text-white transition-colors">
                    {item.initials}
                  </div>
                  <div className="text-left overflow-hidden">
                    <h4 className="font-extrabold text-sm text-warm-charcoal truncate">{item.author}</h4>
                    <p className="text-[11px] text-warm-muted font-medium truncate mt-0.5">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
};

export default TestimonialsCarousel;
