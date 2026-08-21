import React from 'react';
import { ShieldCheck, FileCheck, Landmark, Award, CheckCircle2 } from 'lucide-react';
import { Container } from '../ui/Container';
import { Card } from '../ui/Card';
import { orgInfo } from '../../data/orgInfo';

export const RegistrationLegalInfo = () => {
  return (
    <section id="legal" className="py-16 sm:py-24 bg-white border-y border-warm-border/60">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-extrabold text-brand-teal uppercase tracking-widest">
            Institutional Trust & Accountability
          </span>
          <h2 className="text-3xl font-extrabold text-warm-charcoal mt-2">
            Registration & Statutory Compliance
          </h2>
          <p className="text-warm-muted text-sm sm:text-base mt-2">
            Neelima Charitable Trust operates with total financial transparency, compliance under the Indian Trust Act, and annual KPMG independent audits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 80G Tax Benefit */}
          <Card variant="tint" padding="normal" className="flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-brand-teal text-white flex items-center justify-center mb-4 shadow-soft">
                <FileCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-warm-charcoal mb-2">Section 80G Tax Exemption</h3>
              <p className="text-xs text-warm-muted leading-relaxed mb-4">
                Donors are eligible for 50% tax deduction on all contributions under Section 80G of the Indian Income Tax Act 1961.
              </p>
              <div className="p-3 bg-white rounded-xl text-xs font-mono text-warm-charcoal border border-brand-teal/20">
                Reg No: <strong>{orgInfo.legal.section80G.split(' ')[0]}</strong>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-brand-teal/15 text-xs text-emerald-800 font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Instant Auto-Receipt Issued</span>
            </div>
          </Card>

          {/* Section 12A Trust Registration */}
          <Card variant="tint" padding="normal" className="flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-brand-sage text-white flex items-center justify-center mb-4 shadow-soft">
                <Landmark className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-warm-charcoal mb-2">Section 12A Registration</h3>
              <p className="text-xs text-warm-muted leading-relaxed mb-4">
                Registered non-profit entity ensuring all organization income is dedicated strictly to physical healthcare and mental wellness outreach.
              </p>
              <div className="p-3 bg-white rounded-xl text-xs font-mono text-warm-charcoal border border-brand-sage/20">
                12A Reg: <strong>{orgInfo.legal.section12A}</strong>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-brand-sage/15 text-xs text-emerald-800 font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>NITI Aayog Darpan: {orgInfo.legal.darpanId}</span>
            </div>
          </Card>

          {/* FCRA Approval for Overseas Donors */}
          <Card variant="tint" padding="normal" className="flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-warm-charcoal text-white flex items-center justify-center mb-4 shadow-soft">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-warm-charcoal mb-2">FCRA Foreign Contributions</h3>
              <p className="text-xs text-warm-muted leading-relaxed mb-4">
                Approved under Foreign Contribution Regulation Act (Ministry of Home Affairs) to receive international donations legally.
              </p>
              <div className="p-3 bg-white rounded-xl text-xs font-mono text-warm-charcoal border border-warm-border">
                FCRA Reg: <strong>{orgInfo.legal.fcraNo.split(' ')[0]}</strong>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-warm-border text-xs text-emerald-800 font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>{orgInfo.legal.auditStatus}</span>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
};
