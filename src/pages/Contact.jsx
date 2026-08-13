import React, { useState } from 'react';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { IconContainer } from '../components/ui/IconContainer';
import { orgInfo } from '../data/orgInfo';
import { PhoneCall, Mail, MapPin, Clock, Send, ShieldCheck, CheckCircle2, HeartPulse } from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: 'General Query', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="bg-warm-base py-12">
      {/* Header */}
      <section className="bg-gradient-soft-tint py-12 sm:py-16 border-b border-warm-border/50">
        <Container>
          <SectionHeading
            badge="Reach Out to Us"
            title="We Are Here to Listen & Assist"
            subtitle="Connect with our administrative team, request a medical camp in your village, or call our 24/7 crisis helpline."
            align="center"
          />
        </Container>
      </section>

      {/* DISTINCT 24/7 HELPLINE CALLOUT BANNER (§2.11) */}
      <section className="py-8 bg-emerald-900 text-white">
        <Container>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 bg-emerald-950/60 p-6 rounded-2xl border border-emerald-500/40">
            <div className="flex items-start gap-4">
              <IconContainer icon={PhoneCall} size="lg" variant="teal" className="animate-pulse" />
              <div>
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block">Immediate Emotional Distress or Health Crisis?</span>
                <h3 className="text-2xl font-extrabold text-white mt-0.5">
                  Toll-Free 24/7 Helpline: <a href={`tel:${orgInfo.helpline.number.replace(/-/g, '')}`} className="underline text-emerald-300 hover:text-white">{orgInfo.helpline.number}</a>
                </h3>
                <p className="text-xs text-emerald-200/80 mt-1">100% Free, Confidential, and available in Hindi, English, Marathi, Bengali & Tamil.</p>
              </div>
            </div>

            <Button
              href={`tel:${orgInfo.helpline.number.replace(/-/g, '')}`}
              variant="coral"
              size="md"
              icon={PhoneCall}
              className="self-start sm:self-center"
            >
              Call Helpline Now
            </Button>
          </div>
        </Container>
      </section>

      {/* Main Contact Form & Address Info */}
      <section className="py-16 bg-white border-b border-warm-border/60">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Contact Form */}
            <div className="lg:col-span-7">
              <Card variant="default" padding="spacious" className="space-y-6 shadow-soft">
                <div>
                  <h3 className="text-2xl font-bold text-warm-charcoal">Send Us a Message</h3>
                  <p className="text-xs text-warm-muted mt-1">For program inquiries, camp requests, or administrative questions.</p>
                </div>

                {submitted ? (
                  <div className="p-6 bg-emerald-50 text-emerald-800 rounded-2xl text-center space-y-3 border border-emerald-200">
                    <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                    <h4 className="text-lg font-bold">Message Sent Successfully!</h4>
                    <p className="text-xs text-emerald-700">Thank you for reaching out. Our desk officer will respond within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 text-sm">
                    <div>
                      <label className="block text-xs font-bold text-warm-charcoal mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-warm-border text-sm focus:outline-none focus:border-brand-teal"
                        placeholder="e.g. Anish Sharma"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-warm-charcoal mb-1">Email Address *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-warm-border text-sm focus:outline-none focus:border-brand-teal"
                          placeholder="your.email@example.com"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-warm-charcoal mb-1">Phone Number *</label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-warm-border text-sm focus:outline-none focus:border-brand-teal"
                          placeholder="10-digit mobile number"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-warm-charcoal mb-1">Inquiry Subject *</label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-warm-border text-sm focus:outline-none focus:border-brand-teal bg-white"
                      >
                        <option value="General Query">General Query</option>
                        <option value="Request Health Camp">Request Rural Health Camp</option>
                        <option value="Volunteer Question">Volunteer / Internship Question</option>
                        <option value="Donation & Receipt">Donation 80G Receipt Query</option>
                        <option value="Media Inquiry">Media & Press Inquiry</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-warm-charcoal mb-1">Your Message *</label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-warm-border text-sm focus:outline-none focus:border-brand-teal"
                        placeholder="Write your message details..."
                      />
                    </div>

                    <Button type="submit" variant="primary" size="lg" icon={Send} className="w-full justify-center">
                      Submit Message
                    </Button>
                  </form>
                )}
              </Card>
            </div>

            {/* Office Info Cards with IconContainer (§2) */}
            <div className="lg:col-span-5 space-y-6">
              <Card variant="tint" padding="normal" className="space-y-4">
                <h4 className="font-bold text-lg text-warm-charcoal border-b border-brand-teal/15 pb-3">
                  Headquarters & Contact Hubs
                </h4>

                <div className="space-y-4 text-xs text-warm-charcoal">
                  <div className="flex items-start gap-3.5 p-3 rounded-xl bg-white border border-warm-border/60">
                    <IconContainer icon={MapPin} size="md" variant="teal" />
                    <div>
                      <strong className="block font-bold text-sm text-warm-charcoal">Main Office Address:</strong>
                      <span className="text-warm-muted">{orgInfo.contact.address.street}, {orgInfo.contact.address.city}, {orgInfo.contact.address.state} - {orgInfo.contact.address.pincode}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-3 rounded-xl bg-white border border-warm-border/60">
                    <IconContainer icon={Mail} size="md" variant="sage" />
                    <div>
                      <strong className="block font-bold text-sm text-warm-charcoal">Email Contacts:</strong>
                      <div className="text-warm-muted">Support: {orgInfo.contact.email}</div>
                      <div className="text-warm-muted">Donations: {orgInfo.contact.donationsEmail}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-3 rounded-xl bg-white border border-warm-border/60">
                    <IconContainer icon={Clock} size="md" variant="neutral" />
                    <div>
                      <strong className="block font-bold text-sm text-warm-charcoal">Administrative Hours:</strong>
                      <span className="text-warm-muted">{orgInfo.contact.officeHours}</span>
                      <div className="text-emerald-700 font-bold mt-0.5">Helpline operates 24 Hours / 365 Days</div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Interactive Embedded Map Mockup */}
              <Card variant="default" padding="none" className="overflow-hidden shadow-soft">
                <div className="bg-slate-200 h-56 relative flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-brand-teal text-white flex items-center justify-center mb-2 shadow-lg animate-bounce">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h5 className="font-extrabold text-sm text-warm-charcoal">Aura Foundation HQ</h5>
                  <p className="text-xs text-warm-muted mt-0.5">Harmony Wellness Complex, Green Park Road, Mumbai</p>
                  <span className="mt-3 px-3 py-1 bg-white/90 text-brand-teal font-bold text-[11px] rounded-full border border-warm-border">
                    📍 Interactive Map Location
                  </span>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default Contact;
