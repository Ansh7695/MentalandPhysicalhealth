import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';
import { Tabs } from '../components/ui/Tabs';
import { ImagePlaceholder } from '../components/ui/ImagePlaceholder';
import { eventsData } from '../data/events';
import { Calendar, MapPin, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';

export const Events = () => {
  const [activeStatus, setActiveStatus] = useState('Upcoming');

  const filteredEvents = eventsData.filter((e) => e.status === activeStatus);

  return (
    <main className="bg-warm-base py-12">
      <section className="bg-gradient-soft-tint py-12 sm:py-16 border-b border-warm-border/50">
        <Container>
          <SectionHeading
            badge="On-Field Outreach"
            title="Medical Camps & Mental Health Summits"
            subtitle="Join our upcoming rural healthcare drives or review past camp outcomes and galleries."
            align="center"
          />

          <div className="flex justify-center mt-6">
            <Tabs
              tabs={[
                { id: 'Upcoming', label: 'Upcoming Events & Camps', count: eventsData.filter(e => e.status === 'Upcoming').length },
                { id: 'Past', label: 'Past Camp Outcomes & Recaps', count: eventsData.filter(e => e.status === 'Past').length },
              ]}
              activeTab={activeStatus}
              onChange={setActiveStatus}
            />
          </div>
        </Container>
      </section>

      {/* Events Grid with Photo Placeholders */}
      <section className="py-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredEvents.map((event) => (
              <Card key={event.id} variant="default" padding="none" className="flex flex-col justify-between overflow-hidden">
                <div>
                  <ImagePlaceholder
                    caption={`${event.title} Banner Photo — pending`}
                    aspectRatio="aspect-[16/9]"
                    badge={event.status}
                    iconType="camera"
                  />

                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`px-3 py-1 text-xs font-bold rounded-full ${
                        event.status === 'Upcoming' ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-800'
                      }`}>
                        {event.category}
                      </span>
                      <span className="text-xs text-warm-muted flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-brand-teal" />
                        {event.date}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-warm-charcoal mb-2">{event.title}</h3>
                    <p className="text-warm-muted text-xs leading-relaxed mb-4">{event.description}</p>

                    <div className="space-y-1.5 text-xs text-warm-muted bg-warm-base p-3.5 rounded-xl border border-warm-border/60 mb-4">
                      <div className="flex items-center gap-2 font-semibold text-warm-charcoal">
                        <MapPin className="w-4 h-4 text-brand-teal flex-shrink-0" />
                        <span>{event.location}</span>
                      </div>
                      {event.time && (
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-brand-sage-dark flex-shrink-0" />
                          <span>{event.time}</span>
                        </div>
                      )}
                      {event.outcomeStats && (
                        <div className="text-brand-teal font-extrabold pt-1">
                          🏆 Outcome: {event.outcomeStats}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-warm-border/60 flex items-center justify-between">
                  <span className="text-xs text-warm-muted font-medium">
                    {event.status === 'Upcoming' ? '● RSVP Registration Open' : 'Recap Available'}
                  </span>
                  <Link
                    to={`/events/${event.slug}`}
                    className="px-4 py-2 bg-brand-teal text-white text-xs font-bold rounded-xl hover:bg-brand-teal-dark transition-colors inline-flex items-center gap-1"
                  >
                    <span>{event.status === 'Upcoming' ? 'RSVP Event' : 'View Recap'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
};

export default Events;
