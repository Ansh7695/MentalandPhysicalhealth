import React from 'react';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';
import { AccentBadge } from '../components/ui/AccentBadge';
import { IconContainer } from '../components/ui/IconContainer';
import { ImagePlaceholder } from '../components/ui/ImagePlaceholder';
import { RegistrationLegalInfo } from '../components/sections/RegistrationLegalInfo';
import { teamMembers, boardMembers } from '../data/team';
import { orgInfo } from '../data/orgInfo';
import { HeartPulse, Brain, Target, ShieldCheck, Download, Award, Calendar, Quote } from 'lucide-react';

export const About = () => {
  return (
    <main className="bg-warm-base py-12">
      {/* Page Header */}
      <section className="bg-gradient-soft-tint py-12 sm:py-16 border-b border-warm-border/50">
        <Container>
          <SectionHeading
            badge="About Neelima Charitable Trust"
            title="Our Story, Mission & Dedication to Care"
            subtitle="Founded in 2017 to eradicate healthcare inequality and dismantle mental health stigma across Indian communities."
            align="center"
          />
        </Container>
      </section>

      {/* Mission Vision Values (3-col with tactile 3D soft claymorphism icons) */}
      <section className="py-16 bg-white border-b border-warm-border/50">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card variant="tint" padding="spacious" className="text-center group hover:border-brand-teal/40 transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 rounded-2xl bg-[#F4F9F7] text-brand-teal flex items-center justify-center mx-auto mb-5 shadow-[5px_5px_15px_rgba(75,155,148,0.15),-5px_-5px_15px_rgba(255,255,255,0.9)] border border-brand-teal/20 group-hover:scale-105 group-hover:bg-brand-teal group-hover:text-white transition-all duration-300">
                <HeartPulse className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-warm-charcoal mb-3 group-hover:text-brand-teal transition-colors">Our Mission</h3>
              <p className="text-warm-muted text-sm leading-relaxed">
                To deliver high-quality physical medical interventions, rural mobile clinics, and 24/7 free tele-counseling to every underserved individual without financial barrier.
              </p>
            </Card>

            <Card variant="tint" padding="spacious" className="text-center group hover:border-brand-teal/40 transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 rounded-2xl bg-[#F4F9F7] text-brand-sage-dark flex items-center justify-center mx-auto mb-5 shadow-[5px_5px_15px_rgba(123,168,140,0.18),-5px_-5px_15px_rgba(255,255,255,0.9)] border border-brand-sage/30 group-hover:scale-105 group-hover:bg-brand-sage-dark group-hover:text-white transition-all duration-300">
                <Brain className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-warm-charcoal mb-3 group-hover:text-brand-teal transition-colors">Our Vision</h3>
              <p className="text-warm-muted text-sm leading-relaxed">
                A nation where mental healthcare carries zero social stigma, physical illness is diagnosed early, and compassionate healthcare is a fundamental human right.
              </p>
            </Card>

            <Card variant="tint" padding="spacious" className="text-center group hover:border-brand-teal/40 transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 rounded-2xl bg-[#FDF1ED] text-coral-accent flex items-center justify-center mx-auto mb-5 shadow-[5px_5px_15px_rgba(232,106,69,0.15),-5px_-5px_15px_rgba(255,255,255,0.9)] border border-coral-accent/20 group-hover:scale-105 group-hover:bg-coral-accent group-hover:text-white transition-all duration-300">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-warm-charcoal mb-3 group-hover:text-brand-teal transition-colors">Our Core Values</h3>
              <p className="text-warm-muted text-sm leading-relaxed">
                Compassionate Empathy, Uncompromising Institutional Transparency, Clinical Triage Rigor, and Beneficiary Dignity in every interaction.
              </p>
            </Card>
          </div>
        </Container>
      </section>

      {/* Founder's Note Preview Block */}
      <section id="founders-note" className="py-16 sm:py-24 bg-warm-base">
        <Container>
          <Card variant="default" padding="spacious" className="max-w-4xl mx-auto shadow-lift border border-brand-teal/20">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-4 flex flex-col items-center text-center">
                <ImagePlaceholder
                  caption="Founder portrait — pending"
                  aspectRatio="aspect-square"
                  iconType="user"
                  badge="Founder & Director"
                  className="mb-4"
                />
                <h4 className="font-extrabold text-xl text-warm-charcoal">Dr. Ananya Deshmukh</h4>
                <p className="text-xs text-brand-teal font-semibold">Founder & Executive Director</p>
                <p className="text-[11px] text-warm-muted mt-1">MD (Community Medicine), MPH (Harvard)</p>
              </div>

              <div className="md:col-span-8 space-y-4 text-warm-charcoal leading-relaxed text-sm sm:text-base">
                <Quote className="w-8 h-8 text-brand-teal/30" />
                <h3 className="text-2xl font-bold tracking-tight">"Healthcare is incomplete when we treat the body but ignore the mind."</h3>
                <p className="text-warm-muted text-sm">
                  During my years of practicing community medicine in rural districts, I saw mothers struggling with severe anemia alongside unaddressed postpartum depression. Neelima Charitable Trust was created to bridge this divide.
                </p>
                <div className="pt-2">
                  <a
                    href="/about/founders-note"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-brand-tint text-brand-teal font-bold text-xs hover:bg-brand-teal hover:text-white transition-all duration-200"
                  >
                    <span>Read the Full Founder Story</span>
                    <span className="text-base">➔</span>
                  </a>
                </div>
              </div>
            </div>
          </Card>
        </Container>
      </section>

      {/* Timeline / Our Story with Milestones & Photo Placeholders */}
      <section className="py-16 bg-white border-y border-warm-border/60">
        <Container size="narrow">
          <SectionHeading badge="Milestones" title="Our Growth & Impact Timeline" align="center" />
          <div className="space-y-12">
            {[
              { year: "2017 • Foundation", title: "Established in Mumbai", desc: "Launched with 1 mobile clinic van and 5 volunteer doctors.", photoCap: "2017 Mobile Van Launch Photo — pending" },
              { year: "2020 • Pandemic Triage", title: "Launched 24/7 Crisis Helpline", desc: "Trained 100+ tele-counselors to support Covid-19 distress.", photoCap: "Helpline Desk Training Photo — pending" },
              { year: "2024 • School Expansion", title: "Youth Mind-Shield in Schools", desc: "Partnered with 145+ high schools across Maharashtra and Gujarat.", photoCap: "School Workshop Photo — pending" },
            ].map((milestone, idx) => (
              <div key={idx} className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center bg-warm-base p-6 rounded-2xl border border-warm-border">
                <div className="sm:col-span-4">
                  <ImagePlaceholder
                    caption={milestone.photoCap}
                    aspectRatio="aspect-[4/3]"
                    badge={milestone.year.split(' ')[0]}
                    iconType="camera"
                  />
                </div>
                <div className="sm:col-span-8 space-y-2">
                  <span className="text-xs font-bold text-brand-teal">{milestone.year}</span>
                  <h4 className="font-bold text-lg text-warm-charcoal">{milestone.title}</h4>
                  <p className="text-xs text-warm-muted leading-relaxed">{milestone.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Team Grid with Photo Placeholders per member */}
      <section id="team" className="py-16 sm:py-24 bg-warm-base">
        <Container>
          <SectionHeading
            badge="Leadership & Specialists"
            title="Our Dedicated Medical & Psychological Team"
            subtitle="Guided by clinical doctors, NIMHANS psychologists, and grassroots public health experts."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.id} variant="default" padding="normal" className="group">
                <ImagePlaceholder
                  caption={`${member.name} Photo — pending`}
                  aspectRatio="aspect-square"
                  iconType="user"
                  badge={member.category}
                  className="mb-4"
                />

                <h3 className="text-xl font-bold text-warm-charcoal">{member.name}</h3>
                <span className="text-xs font-bold text-brand-teal block mt-0.5">{member.role}</span>
                <span className="text-[11px] text-warm-muted block mb-3">{member.credentials}</span>
                <p className="text-warm-muted text-xs leading-relaxed">{member.bio}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Board of Directors with Photo Placeholders */}
      <section className="py-16 bg-white border-y border-warm-border/50">
        <Container>
          <SectionHeading badge="Governance" title="Governing Board & Trustees" align="center" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {boardMembers.map((bm, idx) => (
              <Card key={idx} variant="tint" padding="normal">
                <ImagePlaceholder
                  caption={`${bm.name} Photo — pending`}
                  aspectRatio="aspect-[4/3]"
                  iconType="user"
                  className="mb-4"
                />
                <h4 className="font-bold text-lg text-warm-charcoal">{bm.name}</h4>
                <span className="text-xs font-bold text-brand-sage-dark block mb-2">{bm.role}</span>
                <p className="text-xs text-warm-muted">{bm.bio}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Registration & Legal Info Component */}
      <RegistrationLegalInfo />

      {/* Downloadable Annual Reports */}
      <section className="py-16 bg-warm-base">
        <Container size="narrow">
          <SectionHeading
            badge="Audited Transparency"
            title="Download Annual Compliance Reports"
            subtitle="Access our KPMG-audited financial balance sheets and year-by-year impact metrics."
            align="center"
          />
          <div className="space-y-3">
            {[
              { year: "FY 2025-26", size: "4.2 MB PDF", title: "Annual Impact & Audited Balance Sheet Report" },
              { year: "FY 2024-25", size: "3.8 MB PDF", title: "KPMG Audited Statutory Compliance Report" },
              { year: "FY 2023-24", size: "3.5 MB PDF", title: "FCRA Foreign Contribution Audit Return" },
            ].map((report, idx) => (
              <div key={idx} className="p-4 bg-white rounded-xl border border-warm-border flex items-center justify-between text-sm shadow-sm hover:border-brand-teal transition-colors">
                <div>
                  <span className="font-bold text-warm-charcoal">{report.title} ({report.year})</span>
                  <span className="text-xs text-warm-muted block mt-0.5">{report.size} • 100% Transparency</span>
                </div>
                <button
                  onClick={() => alert(`Simulated download of ${report.title}`)}
                  className="px-4 py-2 bg-brand-tint text-brand-teal font-bold text-xs rounded-lg hover:bg-brand-teal hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <Download className="w-4 h-4" />
                  <span>PDF</span>
                </button>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
};

export default About;
