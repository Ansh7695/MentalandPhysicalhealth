import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { AccentBadge } from '../components/ui/AccentBadge';
import { ImagePlaceholder } from '../components/ui/ImagePlaceholder';
import { IconContainer } from '../components/ui/IconContainer';
import { programs } from '../data/programs';
import { Heart, CheckCircle2, Quote, ArrowLeft, PhoneCall, ShieldCheck, Activity } from 'lucide-react';

export const ProgramDetail = () => {
  const { slug } = useParams();
  const program = programs.find((p) => p.slug === slug) || programs[0];

  return (
    <main className="bg-warm-base py-12">
      {/* Back Button */}
      <Container className="mb-6">
        <Link to="/programs" className="inline-flex items-center gap-2 text-xs font-bold text-brand-teal hover:underline">
          <ArrowLeft className="w-4 h-4" /> Back to All Programs
        </Link>
      </Container>

      {/* Program Hero */}
      <section className="bg-white py-12 sm:py-16 border-y border-warm-border/50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <AccentBadge variant={program.category === 'Mental Health' ? 'teal' : 'sage'} className="mb-4">
                {program.category} Initiative
              </AccentBadge>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-warm-charcoal tracking-tight mb-6">
                {program.title}
              </h1>
              <p className="text-lg sm:text-xl text-warm-muted leading-relaxed font-normal mb-8">
                {program.fullDesc}
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Button to="/donate" variant="coral" size="lg" icon={Heart}>
                  Support This Program
                </Button>
                <Button to="/get-involved/volunteer" variant="outline" size="lg">
                  Volunteer for Initiative
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <ImagePlaceholder
                caption={`${program.title} Field Operations Photo — pending`}
                aspectRatio="aspect-[4/3]"
                badge={program.category}
                iconType="camera"
                className="shadow-soft"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Impact Stats & Specs */}
      <section className="py-16 bg-warm-base">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 space-y-8">
              {/* Features List */}
              <Card variant="default" padding="spacious">
                <h3 className="text-xl font-bold text-warm-charcoal mb-4">Core Operational Services</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {program.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-warm-base border border-warm-border/60">
                      <IconContainer icon={CheckCircle2} size="sm" variant="teal" />
                      <span className="text-sm font-semibold text-warm-charcoal mt-1">{feat}</span>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Beneficiary Quote */}
              <Card variant="tint" padding="spacious">
                <Quote className="w-10 h-10 text-brand-teal/30 mb-3" />
                <p className="text-lg text-warm-charcoal italic leading-relaxed mb-4">
                  "{program.testimonial.quote}"
                </p>
                <div className="font-bold text-sm text-brand-teal">— {program.testimonial.author}</div>
              </Card>
            </div>

            {/* Right Specs Card */}
            <div className="lg:col-span-4 space-y-6">
              <Card variant="default" padding="normal" className="space-y-4">
                <h4 className="font-bold text-lg text-warm-charcoal border-b border-warm-border pb-3">
                  Program Metrics & Target
                </h4>

                <div className="space-y-3 text-sm">
                  {Object.entries(program.metrics).map(([key, val]) => (
                    <div key={key} className="flex justify-between items-center">
                      <span className="text-warm-muted capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span>
                      <strong className="text-brand-teal font-extrabold">{val}</strong>
                    </div>
                  ))}
                </div>

                <div className="pt-3 border-t border-warm-border text-xs text-warm-muted">
                  <strong>Target Audience:</strong> {program.targetAudience}
                </div>

                <div className="p-3 bg-emerald-50 text-emerald-800 text-xs font-semibold rounded-xl flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Audited 80G Tax Exemption Applicable</span>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default ProgramDetail;
