import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, ArrowRight, Clock } from 'lucide-react';
import { Container } from '../ui/Container';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { eventsData } from '../../data/events';

export const UpcomingEventsStrip = () => {
  const upcoming = eventsData.filter((e) => e.status === 'Upcoming').slice(0, 2);

  return (
    <section className="py-16 sm:py-20 bg-brand-tint/30 border-y border-warm-border/60">
      <Container>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <div>
            <span className="text-xs font-bold text-brand-teal uppercase tracking-wider">Join Us On The Field</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-warm-charcoal mt-1">Upcoming Health Camps & Workshops</h2>
          </div>
          <Button
            to="/events"
            variant="outline"
            size="md"
            icon={ArrowRight}
            iconPosition="right"
          >
            View Full Event Schedule
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {upcoming.map((event) => (
            <Card key={event.id} variant="default" padding="normal" className="flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full">
                    {event.category}
                  </span>
                  <span className="text-xs font-semibold text-warm-muted flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-brand-teal" />
                    {event.date}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-warm-charcoal mb-2">{event.title}</h3>
                <p className="text-warm-muted text-sm leading-relaxed mb-4">{event.description}</p>

                <div className="flex flex-col gap-1.5 text-xs text-warm-muted bg-warm-base p-3 rounded-xl border border-warm-border/50">
                  <span className="flex items-center gap-2 font-medium text-warm-charcoal">
                    <MapPin className="w-4 h-4 text-brand-teal flex-shrink-0" />
                    {event.location}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-brand-sage-dark flex-shrink-0" />
                    {event.time}
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-warm-border/60 flex items-center justify-between">
                <span className="text-xs text-emerald-700 font-bold">● RSVP / Registration Open</span>
                <Link
                  to={`/events/${event.slug}`}
                  className="px-4 py-2 bg-brand-teal text-white text-xs font-bold rounded-xl hover:bg-brand-teal-dark transition-colors inline-flex items-center gap-1"
                >
                  <span>RSVP Event</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};
