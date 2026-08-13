import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container } from '../components/ui/Container';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { AccentBadge } from '../components/ui/AccentBadge';
import { eventsData } from '../data/events';
import { ArrowLeft, Calendar, MapPin, Clock, CheckCircle2, Send, Users } from 'lucide-react';

export const EventDetail = () => {
  const { slug } = useParams();
  const event = eventsData.find((e) => e.slug === slug) || eventsData[0];
  const [rsvpForm, setRsvpForm] = useState({ name: '', email: '', phone: '', count: '1' });
  const [submitted, setSubmitted] = useState(false);

  const handleRSVP = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="bg-warm-base py-12">
      <Container className="mb-6">
        <Link to="/events" className="inline-flex items-center gap-2 text-xs font-bold text-brand-teal hover:underline">
          <ArrowLeft className="w-4 h-4" /> Back to All Events
        </Link>
      </Container>

      <section className="bg-white py-12 border-y border-warm-border/50">
        <Container>
          <div className="max-w-4xl">
            <AccentBadge variant={event.status === 'Upcoming' ? 'teal' : 'dark'} className="mb-4">
              {event.status} {event.category} Event
            </AccentBadge>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-warm-charcoal tracking-tight mb-4">
              {event.title}
            </h1>

            <p className="text-base sm:text-lg text-warm-muted leading-relaxed font-normal mb-8">
              {event.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-semibold text-warm-charcoal bg-warm-base p-4 rounded-2xl border border-warm-border">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-brand-teal" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-teal" />
                <span className="truncate">{event.location}</span>
              </div>
              {event.time && (
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-brand-teal" />
                  <span>{event.time}</span>
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* Details & RSVP Form */}
      <section className="py-16 bg-warm-base">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 space-y-6">
              <Card variant="default" padding="spacious">
                <h3 className="text-xl font-bold text-warm-charcoal mb-4">Key Event Highlights</h3>
                <div className="space-y-2.5 text-sm text-warm-muted">
                  {event.highlights ? (
                    event.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-brand-teal flex-shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))
                  ) : (
                    <p>{event.outcomeStats}</p>
                  )}
                </div>
              </Card>

              {event.recapGallery && (
                <Card variant="tint" padding="spacious">
                  <h3 className="text-lg font-bold text-warm-charcoal mb-3">Event Outcome Recap</h3>
                  <div className="p-3 bg-white rounded-xl text-xs text-warm-muted space-y-1">
                    {event.recapGallery.map((rg, idx) => (
                      <div key={idx}>• {rg}</div>
                    ))}
                  </div>
                </Card>
              )}
            </div>

            {/* RSVP Form */}
            <div className="lg:col-span-5">
              <Card variant="default" padding="spacious">
                <h3 className="text-xl font-bold text-warm-charcoal mb-2">RSVP / Free Registration</h3>
                <p className="text-xs text-warm-muted mb-4">Reserve your entry or volunteer spot for this event.</p>

                {submitted ? (
                  <div className="p-4 bg-emerald-50 text-emerald-800 rounded-xl text-xs font-semibold text-center space-y-2">
                    <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                    <p>RSVP Confirmed! Entry details have been sent to your email.</p>
                  </div>
                ) : (
                  <form onSubmit={handleRSVP} className="space-y-3 text-xs">
                    <div>
                      <label className="block font-bold text-warm-charcoal mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        value={rsvpForm.name}
                        onChange={(e) => setRsvpForm({ ...rsvpForm, name: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl border border-warm-border text-sm focus:outline-none focus:border-brand-teal"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-warm-charcoal mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={rsvpForm.email}
                        onChange={(e) => setRsvpForm({ ...rsvpForm, email: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl border border-warm-border text-sm focus:outline-none focus:border-brand-teal"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-warm-charcoal mb-1">Mobile Phone *</label>
                      <input
                        type="tel"
                        required
                        value={rsvpForm.phone}
                        onChange={(e) => setRsvpForm({ ...rsvpForm, phone: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl border border-warm-border text-sm focus:outline-none focus:border-brand-teal"
                      />
                    </div>
                    <Button type="submit" variant="coral" size="md" icon={Send} className="w-full justify-center mt-2">
                      Confirm Free RSVP Spot
                    </Button>
                  </form>
                )}
              </Card>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default EventDetail;
