import React from 'react';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { orgInfo } from '../data/orgInfo';

export const PrivacyPolicy = () => {
  return (
    <main className="bg-warm-base py-12">
      <section className="bg-white py-12 border-b border-warm-border/50">
        <Container size="prose">
          <SectionHeading badge="Legal & Security" title="Privacy Policy" align="left" />
          <div className="space-y-6 text-sm text-warm-muted leading-relaxed">
            <p>
              Last Updated: August 2026. {orgInfo.name} ("Foundation", "we", "us") is committed to safeguarding the privacy of our donors, helpline callers, website visitors, and volunteers.
            </p>

            <h3 className="text-lg font-bold text-warm-charcoal">1. Helpline Triage Confidentiality</h3>
            <p>
              Calls and tele-counseling communications with our 24/7 Helpline Triage are 100% confidential. No audio recording or caller personally identifiable information is shared with third parties, advertisers, or corporate sponsors without explicit clinical consent.
            </p>

            <h3 className="text-lg font-bold text-warm-charcoal">2. Donor Financial Information</h3>
            <p>
              All online transactions are processed through 256-bit SSL encrypted Razorpay payment gateways. We collect PAN card details solely for issuing statutory 80G tax exemption receipts required by the Income Tax Department of India.
            </p>

            <h3 className="text-lg font-bold text-warm-charcoal">3. Contact Us</h3>
            <p>
              If you have questions regarding data privacy or wish to update your donor record, please contact our data privacy officer at <strong>{orgInfo.contact.email}</strong>.
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default PrivacyPolicy;
