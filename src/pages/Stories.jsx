import React from 'react';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { IconContainer } from '../components/ui/IconContainer';
import { ImagePlaceholder } from '../components/ui/ImagePlaceholder';
import { impactStories, volunteerTestimonials } from '../data/stories';
import { Quote, Heart, ShieldCheck, MapPin, User, Play } from 'lucide-react';

export const Stories = () => {
  return (
    <main className="bg-warm-base py-12">
      <section className="bg-gradient-soft-tint py-12 sm:py-16 border-b border-warm-border/50">
        <Container>
          <SectionHeading
            badge="Human Transformation"
            title="Beneficiary Stories & Volunteer Testimonials"
            subtitle="Read complete narratives of individuals whose physical health and mental well-being were restored through donor support."
            align="center"
          />
        </Container>
      </section>

      {/* Full Impact Stories with Image Placeholders */}
      <section className="py-16 bg-white border-b border-warm-border/60">
        <Container>
          <div className="space-y-12">
            {impactStories.map((story) => (
              <Card key={story.id} variant="default" padding="spacious" className="shadow-lift">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  <div className="md:col-span-4 space-y-4">
                    <ImagePlaceholder
                      caption={`${story.name} Beneficiary Photo — pending`}
                      aspectRatio="aspect-square"
                      iconType="user"
                      badge={story.category}
                    />

                    <div className="bg-brand-tint/60 p-4 rounded-2xl border border-brand-teal/20 space-y-2">
                      <h3 className="text-xl font-bold text-warm-charcoal">{story.name}</h3>
                      <div className="text-xs text-warm-muted space-y-1">
                        <div>Age: <strong>{story.age} Years</strong></div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-brand-teal" />
                          <span>{story.location}</span>
                        </div>
                      </div>
                      <div className="p-2 bg-white rounded-xl text-[11px] font-bold text-emerald-800 border border-emerald-200">
                        🏆 {story.impactBadge}
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-8 space-y-4">
                    <Quote className="w-10 h-10 text-brand-teal/30" />
                    <h4 className="text-xl font-bold text-warm-charcoal italic">"{story.quote}"</h4>
                    <p className="text-warm-muted text-sm leading-relaxed">{story.fullStory}</p>
                    <div className="pt-4 border-t border-warm-border/60 flex items-center justify-between">
                      <span className="text-xs text-warm-muted font-medium">Care Sponsored by Neelima Donors</span>
                      <Button to="/donate" variant="coral" size="sm" icon={Heart}>
                        Sponsor a Similar Story
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Video Testimonials Section (§2.10) */}
      <section className="py-16 bg-brand-tint/30 border-b border-warm-border/50">
        <Container>
          <SectionHeading badge="Video Testimonials" title="Hear Directly From Our Beneficiaries" align="center" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: "Savitri Devi", title: "My Recovery from Postpartum Depression & Anemia", duration: "3:15 min" },
              { name: "Rahul M.", title: "Overcoming College Exam Anxiety Attacks", duration: "4:02 min" },
            ].map((v, i) => (
              <Card key={i} variant="default" padding="none" className="overflow-hidden group">
                <ImagePlaceholder
                  caption={`Watch ${v.name}'s Video Story (${v.duration})`}
                  aspectRatio="aspect-video"
                  badge="Video Story"
                  iconType="play"
                />
                <div className="p-5 flex justify-between items-center bg-white">
                  <div>
                    <h4 className="font-bold text-sm text-warm-charcoal">{v.title}</h4>
                    <span className="text-xs text-brand-teal font-semibold">{v.name}</span>
                  </div>
                  <Button variant="primary" size="sm" icon={Play}>
                    Play Video
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Volunteer Voices */}
      <section className="py-16 bg-warm-base">
        <Container>
          <SectionHeading badge="Grassroots Impact" title="Volunteer & Doctor Voices" align="center" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {volunteerTestimonials.map((vt, idx) => (
              <Card key={idx} variant="tint" padding="normal" className="space-y-3">
                <Quote className="w-8 h-8 text-brand-teal/30" />
                <p className="text-sm italic text-warm-charcoal leading-relaxed">"{vt.quote}"</p>
                <div className="pt-3 border-t border-brand-teal/15 flex items-center justify-between">
                  <div>
                    <span className="font-bold text-warm-charcoal text-sm block">{vt.name}</span>
                    <span className="text-xs text-brand-teal font-semibold">{vt.role}</span>
                  </div>
                  <span className="text-[11px] text-warm-muted bg-white px-2.5 py-1 rounded-full border border-warm-border">
                    {vt.duration}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
};

export default Stories;
