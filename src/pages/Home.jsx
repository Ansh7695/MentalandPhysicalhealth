import React from 'react';
import { Hero } from '../components/sections/Hero';
import { ImpactSnapshot } from '../components/sections/ImpactSnapshot';
import { ProgramsPreview } from '../components/sections/ProgramsPreview';
import { HowWeWork } from '../components/sections/HowWeWork';
import { TestimonialsCarousel } from '../components/sections/TestimonialsCarousel';
import { BlogPreview } from '../components/sections/BlogPreview';
import { UpcomingEventsStrip } from '../components/sections/UpcomingEventsStrip';
import { SponsorsLogoStrip } from '../components/sections/SponsorsLogoStrip';
import { InstagramFeedSection } from '../components/sections/InstagramFeedSection';
import { NewsletterSignup } from '../components/sections/NewsletterSignup';
import { FinalCTABanner } from '../components/sections/FinalCTABanner';

export const Home = () => {
  return (
    <main>
      <Hero />
      <ImpactSnapshot />
      <ProgramsPreview />
      <HowWeWork />
      <TestimonialsCarousel />
      <UpcomingEventsStrip />
      <BlogPreview />
      <SponsorsLogoStrip />
      <InstagramFeedSection />
      <NewsletterSignup />
      <FinalCTABanner />
    </main>
  );
};

export default Home;
