import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Tabs } from '../components/ui/Tabs';
import { Modal } from '../components/ui/Modal';
import { volunteerTestimonials } from '../data/stories';
import { sponsorshipPackages } from '../data/sponsors';
import { Users, Briefcase, Handshake, CheckCircle2, Heart, Send } from 'lucide-react';

export const GetInvolved = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('volunteer');
  
  // Application Modal state for Careers / Volunteer
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (location.pathname.endsWith('/careers')) {
      setActiveTab('careers');
    } else if (location.pathname.endsWith('/partner')) {
      setActiveTab('partner');
    } else {
      setActiveTab('volunteer');
    }
  }, [location]);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    navigate(`/get-involved/${tabId}`);
  };

  const openApplication = (title) => {
    setModalTitle(title);
    setSubmitted(false);
    setModalOpen(true);
  };

  return (
    <main className="bg-warm-base py-12">
      <section className="bg-gradient-soft-tint py-12 sm:py-16 border-b border-warm-border/50">
        <Container>
          <SectionHeading
            badge="Join Our Mission"
            title="Get Involved: Volunteer, Work, or Partner"
            subtitle="Whether you donate your time, clinical expertise, or corporate CSR support, your involvement transforms lives."
            align="center"
          />

          <div className="flex justify-center mt-6">
            <Tabs
              tabs={[
                { id: 'volunteer', label: 'Volunteer', icon: Users },
                { id: 'careers', label: 'Careers & Positions', icon: Briefcase },
                { id: 'partner', label: 'CSR & Partnerships', icon: Handshake },
              ]}
              activeTab={activeTab}
              onChange={handleTabChange}
            />
          </div>
        </Container>
      </section>

      {/* Tab Content 1: Volunteer */}
      {activeTab === 'volunteer' && (
        <section className="py-16 bg-white">
          <Container>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-extrabold text-warm-charcoal mb-4">Be a Voice of Comfort & Hope</h2>
              <p className="text-warm-muted leading-relaxed">
                Volunteers are the heart of Neelima Charitable Trust. We train empathetic listeners for our 24/7 tele-counseling helpline and deploy volunteer physicians and organizers to rural medical camps.
              </p>
            </div>

            {/* Volunteer Roles */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <Card variant="tint" padding="normal" className="flex flex-col justify-between">
                <div>
                  <span className="px-3 py-1 bg-brand-tint text-brand-teal text-xs font-bold rounded-full">Remote / On-Call</span>
                  <h3 className="text-xl font-bold text-warm-charcoal mt-3 mb-2">Helpline Crisis Listener</h3>
                  <p className="text-xs text-warm-muted leading-relaxed mb-4">
                    Receive 30 hours of clinical triage training to answer incoming distress calls with empathy and confidentiality.
                  </p>
                  <ul className="text-xs space-y-1.5 text-warm-charcoal mb-4">
                    <li>• 4 hours / week commitment</li>
                    <li>• Multi-lingual (Hindi/English/Regional)</li>
                  </ul>
                </div>
                <Button variant="primary" size="sm" onClick={() => openApplication('Helpline Crisis Listener')}>
                  Apply as Listener
                </Button>
              </Card>

              <Card variant="tint" padding="normal" className="flex flex-col justify-between">
                <div>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full">On-Field Camps</span>
                  <h3 className="text-xl font-bold text-warm-charcoal mt-3 mb-2">Volunteer Physician / Nurse</h3>
                  <p className="text-xs text-warm-muted leading-relaxed mb-4">
                    Join weekend mobile diagnostic camps in rural villages to conduct general health checkups and prescribe essential medicines.
                  </p>
                  <ul className="text-xs space-y-1.5 text-warm-charcoal mb-4">
                    <li>• MBBS / MD / BAMS / GNM credentials</li>
                    <li>• 1 camp weekend per month</li>
                  </ul>
                </div>
                <Button variant="primary" size="sm" onClick={() => openApplication('Volunteer Physician')}>
                  Apply as Medical Volunteer
                </Button>
              </Card>

              <Card variant="tint" padding="normal" className="flex flex-col justify-between">
                <div>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs font-bold rounded-full">Youth Ambassador</span>
                  <h3 className="text-xl font-bold text-warm-charcoal mt-3 mb-2">School Mental Health Peer</h3>
                  <p className="text-xs text-warm-muted leading-relaxed mb-4">
                    Help organize anti-stigma workshops and destigmatize panic and exam anxiety among high school students.
                  </p>
                  <ul className="text-xs space-y-1.5 text-warm-charcoal mb-4">
                    <li>• Students aged 16–24</li>
                    <li>• Certificate of Impact Provided</li>
                  </ul>
                </div>
                <Button variant="primary" size="sm" onClick={() => openApplication('Youth Ambassador')}>
                  Apply as Ambassador
                </Button>
              </Card>
            </div>

            {/* Volunteer Testimonials */}
            <div className="bg-warm-base p-8 rounded-3xl border border-warm-border">
              <h3 className="text-xl font-bold text-warm-charcoal text-center mb-6">What Our Volunteers Say</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {volunteerTestimonials.map((vt, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-2xl border border-warm-border/60">
                    <p className="text-sm italic text-warm-muted mb-4">"{vt.quote}"</p>
                    <div className="font-bold text-sm text-warm-charcoal">{vt.name}</div>
                    <div className="text-xs text-brand-teal font-medium">{vt.role} • {vt.duration}</div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* Tab Content 2: Careers */}
      {activeTab === 'careers' && (
        <section className="py-16 bg-white">
          <Container>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-extrabold text-warm-charcoal mb-4">Join Our Full-Time Clinical & Field Team</h2>
              <p className="text-warm-muted leading-relaxed">
                We offer competitive non-profit remuneration, clinical supervision, professional growth, and a warm, supportive organizational culture.
              </p>
            </div>

            <div className="space-y-4 max-w-4xl mx-auto mb-12">
              {[
                { title: "Clinical Psychologist - Helpline Supervisor", type: "Full-Time • Mumbai HQ", exp: "M.Phil / 3+ Yrs Exp", desc: "Oversee helpline triage quality, conduct clinical supervision sessions, and manage high-risk crisis protocol calls." },
                { title: "Public Health Medical Officer (Rural Camps)", type: "Full-Time • Field Trips", exp: "MBBS / MPH", desc: "Lead mobile medical van teams, manage diagnostic camp logistics, and coordinate tertiary hospital referrals." },
                { title: "CSR Manager & Donor Relations Lead", type: "Full-Time • Mumbai / Hybrid", exp: "5+ Yrs Non-Profit Experience", desc: "Manage corporate partner relationships, draft quarterly compliance impact reports, and organize CSR drives." },
              ].map((job, idx) => (
                <Card key={idx} variant="default" padding="normal" className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-bold text-brand-teal">{job.type}</span>
                    <h3 className="text-lg font-bold text-warm-charcoal mt-1">{job.title}</h3>
                    <p className="text-xs text-warm-muted mt-1">{job.desc}</p>
                    <span className="text-[11px] font-semibold text-warm-charcoal inline-block mt-2 bg-warm-base px-2.5 py-1 rounded-md border border-warm-border">
                      Req: {job.exp}
                    </span>
                  </div>
                  <Button
                    variant="primary"
                    size="md"
                    className="flex-shrink-0"
                    onClick={() => openApplication(job.title)}
                  >
                    Apply Now
                  </Button>
                </Card>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Tab Content 3: Partner / CSR */}
      {activeTab === 'partner' && (
        <section className="py-16 bg-white">
          <Container>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-extrabold text-warm-charcoal mb-4">Corporate Social Responsibility & Partnerships</h2>
              <p className="text-warm-muted leading-relaxed">
                Partner with Neelima Charitable Trust under MCA Schedule VII CSR guidelines. We offer end-to-end statutory compliance, geo-tagged impact reporting, and employee volunteering.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {sponsorshipPackages.map((pkg, idx) => (
                <Card key={idx} variant="tint" padding="spacious" className="flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-coral-accent uppercase tracking-wider">CSR Package</span>
                    <h3 className="text-xl font-bold text-warm-charcoal mt-2 mb-1">{pkg.title}</h3>
                    <div className="text-2xl font-extrabold text-brand-teal mb-4">{pkg.amount}</div>
                    
                    <ul className="space-y-2 text-xs text-warm-muted mb-6">
                      {pkg.benefits.map((b, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button variant="coral" size="md" onClick={() => openApplication(`CSR Partner: ${pkg.title}`)}>
                    Inquire CSR Partnership
                  </Button>
                </Card>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Shared Application Modal */}
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title={`Application Form: ${modalTitle}`}>
        {submitted ? (
          <div className="p-6 text-center space-y-3">
            <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
            <h4 className="text-lg font-bold text-warm-charcoal">Application Received!</h4>
            <p className="text-xs text-warm-muted">Our outreach coordinator will contact you via email/phone within 2 business days.</p>
            <Button variant="outline" size="sm" onClick={() => setModalOpen(false)}>Close Window</Button>
          </div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4 text-sm">
            <div>
              <label className="block text-xs font-bold text-warm-charcoal mb-1">Your Full Name *</label>
              <input type="text" required className="w-full px-3.5 py-2 rounded-xl border border-warm-border focus:outline-none focus:border-brand-teal" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-warm-charcoal mb-1">Email *</label>
                <input type="email" required className="w-full px-3.5 py-2 rounded-xl border border-warm-border focus:outline-none focus:border-brand-teal" />
              </div>
              <div>
                <label className="block text-xs font-bold text-warm-charcoal mb-1">Phone *</label>
                <input type="tel" required className="w-full px-3.5 py-2 rounded-xl border border-warm-border focus:outline-none focus:border-brand-teal" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-warm-charcoal mb-1">Brief Statement / Experience *</label>
              <textarea required rows={3} className="w-full px-3.5 py-2 rounded-xl border border-warm-border focus:outline-none focus:border-brand-teal" placeholder="Tell us why you wish to join..." />
            </div>
            <Button type="submit" variant="primary" size="md" icon={Send} className="w-full justify-center">
              Submit Application
            </Button>
          </form>
        )}
      </Modal>
    </main>
  );
};

export default GetInvolved;
