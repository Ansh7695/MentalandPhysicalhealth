import React from 'react';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { orgInfo } from '../data/orgInfo';

export const TermsOfUse = () => {
  return (
    <main className="bg-warm-base py-12">
      <section className="bg-white py-12 border-b border-warm-border/50">
        <Container size="prose">
          <SectionHeading badge="Terms & Conditions" title="Terms of Use" align="left" />
          <div className="space-y-6 text-sm text-warm-muted leading-relaxed">
            <p>
              Welcome to the official website of {orgInfo.name}. By accessing or using this website, you agree to comply with the following terms of use.
            </p>

            <h3 className="text-lg font-bold text-warm-charcoal">1. Non-Emergency Disclaimer</h3>
            <p>
              While our toll-free 24/7 helpline provides psychological first aid, this website does not replace immediate in-person emergency hospital triage during life-threatening physical trauma or acute medical emergencies.
            </p>

            <h3 className="text-lg font-bold text-warm-charcoal">2. Charitable Contributions</h3>
            <p>
              All donations made through this website are voluntary contributions dedicated to funding physical health camps, tele-counseling helplines, and rural medical clinics.
            </p>

            <h3 className="text-lg font-bold text-warm-charcoal">3. Intellectual Property</h3>
            <p>
              All content, logo trademarks, and published impact reports remain the exclusive intellectual property of {orgInfo.name}.
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default TermsOfUse;
