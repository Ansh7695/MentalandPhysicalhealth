import React from 'react';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { orgInfo } from '../data/orgInfo';

export const RefundPolicy = () => {
  return (
    <main className="bg-warm-base py-12">
      <section className="bg-white py-12 border-b border-warm-border/50">
        <Container size="prose">
          <SectionHeading badge="Financial Policy" title="Refund & Cancellation Policy" align="left" />
          <div className="space-y-6 text-sm text-warm-muted leading-relaxed">
            <p>
              {orgInfo.name} values transparency and donor trust. We recognize that accidental duplicate transactions or unauthorized payment errors may occur.
            </p>

            <h3 className="text-lg font-bold text-warm-charcoal">1. Refund Eligibility & Request Window</h3>
            <p>
              If a donation was made erroneously or duplicated due to payment gateway lag, a written refund request must be submitted to <strong>{orgInfo.contact.donationsEmail}</strong> within 7 days of the transaction date.
            </p>

            <h3 className="text-lg font-bold text-warm-charcoal">2. 80G Receipt & Audit Regulations</h3>
            <p>
              Refunds will be processed back to the original payment source (bank account / UPI / card) after verification. If an 80G tax receipt has already been claimed and filed, statutory tax adjustments will apply.
            </p>

            <h3 className="text-lg font-bold text-warm-charcoal">3. Recurring Monthly Subscription Cancellation</h3>
            <p>
              Monthly recurring donations can be paused or cancelled at any time by emailing <strong>{orgInfo.contact.donationsEmail}</strong> with subject "Cancel Monthly Subscription". No future charges will be billed.
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default RefundPolicy;
