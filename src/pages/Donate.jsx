import React, { useState } from 'react';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { AccentBadge } from '../components/ui/AccentBadge';
import { Accordion } from '../components/ui/Accordion';
import { IconContainer } from '../components/ui/IconContainer';
import { donationTiers, donationFaqs } from '../data/donationTiers';
import { orgInfo } from '../data/orgInfo';
import { FundAllocationChart } from '../components/sections/FundAllocationChart';
import { RazorpayModal } from '../components/sections/RazorpayModal';
import { Heart, ShieldCheck, CheckCircle2, Lock, Building, Landmark, Award, HeartPulse, Brain, Gift, Briefcase, FileCheck } from 'lucide-react';

export const Donate = () => {
  const [frequency, setFrequency] = useState('one-time'); // 'one-time' | 'monthly'
  const [selectedTierId, setSelectedTierId] = useState('tier-1500');
  const [customAmount, setCustomAmount] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const selectedTier = donationTiers.find((t) => t.id === selectedTierId);
  const finalAmount = customAmount ? parseFloat(customAmount) || 0 : (selectedTier ? selectedTier.amount : 1500);

  const handleSelectTier = (tierId) => {
    setSelectedTierId(tierId);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e) => {
    setCustomAmount(e.target.value);
    setSelectedTierId('');
  };

  return (
    <main className="bg-warm-base py-12">
      {/* Header */}
      <section className="bg-gradient-soft-tint py-12 sm:py-16 border-b border-warm-border/50">
        <Container>
          <SectionHeading
            badge="Your Generosity Saves Lives"
            title="Make a Direct Health & Mind Impact"
            subtitle="Every donation is 100% transparent and eligible for 50% Tax Exemption under Section 80G."
            align="center"
          />

          {/* Monthly vs One-Time Toggle */}
          <div className="flex justify-center mt-6">
            <div className="p-1.5 bg-warm-border/40 rounded-2xl flex items-center gap-2">
              <button
                onClick={() => setFrequency('one-time')}
                className={`px-6 py-3 rounded-xl font-bold text-sm transition-all ${
                  frequency === 'one-time'
                    ? 'bg-white text-coral-accent shadow-soft'
                    : 'text-warm-muted hover:text-warm-charcoal'
                }`}
              >
                One-Time Gift
              </button>
              <button
                onClick={() => setFrequency('monthly')}
                className={`px-6 py-3 rounded-xl font-bold text-sm transition-all flex items-center gap-1.5 ${
                  frequency === 'monthly'
                    ? 'bg-coral-accent text-white shadow-soft'
                    : 'text-warm-muted hover:text-warm-charcoal'
                }`}
              >
                <span>Monthly Partner</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/20 uppercase font-extrabold">2x Impact</span>
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Donation Matrix */}
      <section className="py-16 bg-white border-b border-warm-border/60">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left: Tier Selection */}
            <div className="lg:col-span-7 space-y-6">
              <h3 className="text-xl font-bold text-warm-charcoal">Select Impact Tier:</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {donationTiers.map((tier) => {
                  const isSelected = selectedTierId === tier.id && !customAmount;
                  return (
                    <div
                      key={tier.id}
                      onClick={() => handleSelectTier(tier.id)}
                      className={`p-5 rounded-2xl border-2 cursor-pointer transition-all duration-200 flex flex-col justify-between ${
                        isSelected
                          ? 'border-coral-accent bg-coral-light/40 shadow-lift'
                          : 'border-warm-border bg-white hover:border-coral-accent/50'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-2xl font-extrabold text-warm-charcoal">
                            ₹{tier.amount.toLocaleString()}
                          </span>
                          {tier.popular && (
                            <span className="px-2.5 py-0.5 rounded-full bg-coral-accent text-white font-extrabold text-[10px] uppercase">
                              Most Popular
                            </span>
                          )}
                        </div>
                        <h4 className="font-bold text-sm text-warm-charcoal mb-1">{tier.title}</h4>
                        <p className="text-xs text-warm-muted leading-relaxed mb-4">{tier.impact}</p>
                      </div>

                      <div className="flex items-center justify-between text-xs font-bold pt-3 border-t border-warm-border/40">
                        <span className={isSelected ? 'text-coral-accent' : 'text-warm-muted'}>
                          {isSelected ? '✓ Selected' : 'Click to Select'}
                        </span>
                        <span className="text-emerald-700">50% 80G Tax Exemption</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Custom Amount Box */}
              <div className="p-5 rounded-2xl bg-warm-base border border-warm-border space-y-2">
                <label className="block text-xs font-bold text-warm-charcoal">Or Enter a Custom Amount (₹):</label>
                <div className="relative">
                  <span className="absolute left-4 top-3 text-lg font-bold text-warm-muted">₹</span>
                  <input
                    type="number"
                    value={customAmount}
                    onChange={handleCustomAmountChange}
                    placeholder="Enter custom amount (e.g. 2500)"
                    className="w-full pl-8 pr-4 py-3 rounded-xl border border-warm-border text-base font-bold text-warm-charcoal focus:outline-none focus:border-coral-accent focus:ring-2 focus:ring-coral-accent/20"
                  />
                </div>
              </div>
            </div>

            {/* Right: Checkout Summary */}
            <div className="lg:col-span-5">
              <Card variant="highlight" padding="spacious" className="sticky top-28 space-y-6">
                <div className="flex justify-between items-center border-b border-warm-border pb-4">
                  <h3 className="text-xl font-bold text-warm-charcoal">Donation Summary</h3>
                  <span className="px-3 py-1 bg-coral-light text-coral-accent font-extrabold text-xs rounded-full">
                    {frequency === 'monthly' ? 'Monthly' : 'One-Time'}
                  </span>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-warm-muted">Selected Tier:</span>
                    <strong className="text-warm-charcoal">{customAmount ? 'Custom Gift' : (selectedTier ? selectedTier.title : 'Selected Gift')}</strong>
                  </div>

                  <div className="flex justify-between items-center text-lg font-extrabold text-warm-charcoal">
                    <span>Total Amount:</span>
                    <span className="text-coral-accent text-2xl">₹{finalAmount.toLocaleString()}</span>
                  </div>

                  <div className="p-3 bg-emerald-50 text-emerald-800 rounded-xl text-xs leading-relaxed font-semibold">
                    💡 <strong>Tax Savings:</strong> You save approximately ₹{(finalAmount * 0.15).toLocaleString()} in income tax under Section 80G.
                  </div>
                </div>

                <Button
                  variant="coral"
                  size="lg"
                  icon={Heart}
                  className="w-full justify-center text-lg py-4 shadow-xl"
                  onClick={() => setIsModalOpen(true)}
                >
                  Proceed to Secure Checkout (₹{finalAmount.toLocaleString()})
                </Button>

                <div className="text-center text-xs text-warm-muted flex flex-col gap-1.5">
                  <span className="flex items-center justify-center gap-1">
                    <Lock className="w-3.5 h-3.5 text-brand-teal" /> 256-Bit SSL Encrypted Razorpay Integration
                  </span>
                  <span>Instant 80G Tax Receipt Emailed PDF</span>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/* Fund Allocation Visualization */}
      <section className="py-12 bg-warm-base">
        <Container>
          <FundAllocationChart />
        </Container>
      </section>

      {/* Other Ways to Give (Secondary Block with IconContainer - §2) */}
      <section className="py-16 bg-white border-y border-warm-border/60">
        <Container>
          <SectionHeading
            badge="Alternative Giving Methods"
            title="Direct Bank Transfers, Cheque, In-Kind & Corporate Matching"
            subtitle="Prefer direct bank wire, cheque, or physical medical equipment donations? View details below."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card variant="tint" padding="normal" className="space-y-3 group">
              <IconContainer icon={Landmark} size="md" variant="teal" />
              <h4 className="font-bold text-warm-charcoal text-base">Direct Bank Wire</h4>
              <p className="text-xs text-warm-muted">NEFT / RTGS transfer directly to our registered 80G account.</p>
              <div className="text-[11px] font-mono text-warm-charcoal bg-white p-2.5 rounded-lg border border-warm-border">
                A/C: 50200049812948<br/>IFSC: HDFC0000060
              </div>
            </Card>

            <Card variant="tint" padding="normal" className="space-y-3 group">
              <IconContainer icon={FileCheck} size="md" variant="sage" />
              <h4 className="font-bold text-warm-charcoal text-base">Cheque / Demand Draft</h4>
              <p className="text-xs text-warm-muted">Payable to "Aura Health & Mind Foundation" payable at Mumbai.</p>
              <div className="text-[11px] font-mono text-warm-charcoal bg-white p-2.5 rounded-lg border border-warm-border">
                Courier to Mumbai HQ Address
              </div>
            </Card>

            <Card variant="tint" padding="normal" className="space-y-3 group">
              <IconContainer icon={Gift} size="md" variant="coral" />
              <h4 className="font-bold text-warm-charcoal text-base">In-Kind Medical Gifts</h4>
              <p className="text-xs text-warm-muted">Donate medical equipment, diagnostic kits, or medicines.</p>
              <div className="text-[11px] font-mono text-warm-charcoal bg-white p-2.5 rounded-lg border border-warm-border">
                Contact: donate@aurafoundation.org
              </div>
            </Card>

            <Card variant="tint" padding="normal" className="space-y-3 group">
              <IconContainer icon={Briefcase} size="md" variant="neutral" />
              <h4 className="font-bold text-warm-charcoal text-base">Employer Matching</h4>
              <p className="text-xs text-warm-muted">Double your donation through your company's CSR matching program.</p>
              <div className="text-[11px] font-mono text-warm-charcoal bg-white p-2.5 rounded-lg border border-warm-border">
                Submit 80G receipt to HR
              </div>
            </Card>
          </div>
        </Container>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16 bg-warm-base">
        <Container size="narrow">
          <SectionHeading badge="Donation FAQs" title="Frequently Asked Questions" align="center" />
          <Accordion items={donationFaqs} />
        </Container>
      </section>

      {/* Razorpay Mock Checkout Modal */}
      <RazorpayModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedAmount={finalAmount}
        frequency={frequency}
      />
    </main>
  );
};

export default Donate;
