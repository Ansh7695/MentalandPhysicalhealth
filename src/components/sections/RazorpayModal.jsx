import React, { useState } from 'react';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';
import { ShieldCheck, CheckCircle2, CreditCard, QrCode, Building, Lock, FileText, Download } from 'lucide-react';
import { orgInfo } from '../../data/orgInfo';

export const RazorpayModal = ({ isOpen, onClose, selectedAmount, frequency }) => {
  const [step, setStep] = useState('details'); // 'details' | 'payment' | 'processing' | 'receipt'
  const [formData, setFormData] = useState({
    name: 'Anish Sharma',
    email: 'anish.sharma@example.com',
    phone: '9876543210',
    pan: 'ABCDE1234F',
    paymentMethod: 'upi',
  });
  const [receiptData, setReceiptData] = useState(null);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleProceedToPayment = (e) => {
    e.preventDefault();
    setStep('payment');
  };

  const handleSimulatePayment = () => {
    setStep('processing');
    setTimeout(() => {
      const fakeReceiptNo = `80G-${Math.floor(100000 + Math.random() * 900000)}`;
      const fakeTxnId = `pay_AF_${Math.random().toString(36).substring(2, 11).toUpperCase()}`;
      setReceiptData({
        receiptNo: fakeReceiptNo,
        txnId: fakeTxnId,
        date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
        amount: selectedAmount,
        donorName: formData.name,
        donorEmail: formData.email,
        donorPan: formData.pan,
        frequency: frequency === 'monthly' ? 'Monthly Recurring' : 'One-Time Donation'
      });
      setStep('receipt');
    }, 1800);
  };

  const handleReset = () => {
    setStep('details');
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={step === 'receipt' ? "80G Donation Receipt Confirmed" : "Secure Payment via Razorpay Gateway"} maxWidth="max-w-xl">
      {step === 'details' && (
        <form onSubmit={handleProceedToPayment} className="space-y-4">
          <div className="p-3 bg-brand-tint/60 rounded-xl border border-brand-teal/20 text-xs text-warm-charcoal flex items-center justify-between">
            <div>
              <span className="text-warm-muted block">Selected Contribution:</span>
              <strong className="text-coral-accent text-lg font-extrabold">₹{selectedAmount.toLocaleString()}</strong> ({frequency === 'monthly' ? 'Monthly' : 'One-Time'})
            </div>
            <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 font-bold rounded-full">
              50% 80G Tax Deductible
            </span>
          </div>

          <div>
            <label className="block text-xs font-bold text-warm-charcoal mb-1">Full Donor Name *</label>
            <input
              type="text"
              required
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-3.5 py-2.5 rounded-xl border border-warm-border text-sm focus:outline-none focus:border-brand-teal"
              placeholder="Full name as per PAN card"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-warm-charcoal mb-1">Email Address *</label>
              <input
                type="email"
                required
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-3.5 py-2.5 rounded-xl border border-warm-border text-sm focus:outline-none focus:border-brand-teal"
                placeholder="For instant 80G receipt"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-warm-charcoal mb-1">Mobile Phone *</label>
              <input
                type="tel"
                required
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-3.5 py-2.5 rounded-xl border border-warm-border text-sm focus:outline-none focus:border-brand-teal"
                placeholder="10-digit mobile number"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-warm-charcoal mb-1">
              PAN Number (Required for 80G Tax Receipt Claim) *
            </label>
            <input
              type="text"
              required
              name="pan"
              value={formData.pan}
              onChange={handleInputChange}
              className="w-full px-3.5 py-2.5 rounded-xl border border-warm-border text-sm font-mono uppercase focus:outline-none focus:border-brand-teal"
              placeholder="e.g. ABCDE1234F"
            />
          </div>

          <div className="pt-3">
            <Button type="submit" variant="coral" size="lg" className="w-full justify-center">
              Proceed to Razorpay Checkout (₹{selectedAmount.toLocaleString()})
            </Button>
          </div>

          <div className="text-center text-[11px] text-warm-muted flex items-center justify-center gap-1.5 pt-2">
            <Lock className="w-3.5 h-3.5 text-brand-teal" /> 256-Bit SSL Encrypted • Razorpay Gateway Integration
          </div>
        </form>
      )}

      {step === 'payment' && (
        <div className="space-y-5">
          <div className="p-3 bg-slate-900 text-white rounded-xl flex items-center justify-between text-xs">
            <span>Razorpay Checkout Mock</span>
            <span className="font-bold text-emerald-400">Total: ₹{selectedAmount.toLocaleString()}</span>
          </div>

          <div className="space-y-3">
            <label className="block text-xs font-bold text-warm-charcoal">Choose Payment Method:</label>

            <label className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
              formData.paymentMethod === 'upi' ? 'border-brand-teal bg-brand-tint/50 font-bold' : 'border-warm-border'
            }`}>
              <input
                type="radio"
                name="paymentMethod"
                value="upi"
                checked={formData.paymentMethod === 'upi'}
                onChange={handleInputChange}
                className="text-brand-teal focus:ring-brand-teal"
              />
              <QrCode className="w-5 h-5 text-purple-600" />
              <span className="text-sm">UPI / Google Pay / PhonePe / BHIM</span>
            </label>

            <label className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
              formData.paymentMethod === 'card' ? 'border-brand-teal bg-brand-tint/50 font-bold' : 'border-warm-border'
            }`}>
              <input
                type="radio"
                name="paymentMethod"
                value="card"
                checked={formData.paymentMethod === 'card'}
                onChange={handleInputChange}
                className="text-brand-teal focus:ring-brand-teal"
              />
              <CreditCard className="w-5 h-5 text-blue-600" />
              <span className="text-sm">Credit / Debit Cards (Visa, Mastercard, RuPay)</span>
            </label>

            <label className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
              formData.paymentMethod === 'netbanking' ? 'border-brand-teal bg-brand-tint/50 font-bold' : 'border-warm-border'
            }`}>
              <input
                type="radio"
                name="paymentMethod"
                value="netbanking"
                checked={formData.paymentMethod === 'netbanking'}
                onChange={handleInputChange}
                className="text-brand-teal focus:ring-brand-teal"
              />
              <Building className="w-5 h-5 text-emerald-600" />
              <span className="text-sm">Netbanking (All Major Indian Banks)</span>
            </label>
          </div>

          <div className="pt-2 flex gap-3">
            <Button variant="outline" size="md" onClick={() => setStep('details')} className="w-1/3 justify-center">
              Back
            </Button>
            <Button variant="coral" size="md" onClick={handleSimulatePayment} className="w-2/3 justify-center">
              Pay ₹{selectedAmount.toLocaleString()} Now
            </Button>
          </div>
        </div>
      )}

      {step === 'processing' && (
        <div className="py-12 text-center flex flex-col items-center justify-center space-y-4">
          <div className="w-12 h-12 rounded-full border-4 border-brand-teal border-t-transparent animate-spin" />
          <h4 className="text-lg font-bold text-warm-charcoal">Processing Payment Securely...</h4>
          <p className="text-xs text-warm-muted">Communicating with Razorpay gateway servers and issuing 80G tax receipt.</p>
        </div>
      )}

      {step === 'receipt' && receiptData && (
        <div className="space-y-5">
          <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-center">
            <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto mb-2" />
            <h4 className="text-lg font-extrabold text-emerald-900">Donation Successful!</h4>
            <p className="text-xs text-emerald-700 mt-0.5">
              Your contribution will directly impact physical healthcare & tele-counseling programs.
            </p>
          </div>

          {/* Fake 80G Tax Receipt Preview */}
          <div className="p-5 bg-white border border-warm-border rounded-2xl shadow-inner text-xs space-y-3">
            <div className="flex justify-between items-center border-b border-warm-border pb-3">
              <div>
                <h5 className="font-extrabold text-sm text-warm-charcoal">{orgInfo.name}</h5>
                <p className="text-[10px] text-warm-muted">80G Reg: {orgInfo.legal.section80G.split(' ')[0]}</p>
              </div>
              <span className="px-2.5 py-1 bg-brand-tint text-brand-teal font-extrabold text-xs rounded-lg">
                RECEIPT #{receiptData.receiptNo}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 text-warm-muted">
              <div><strong>Donor Name:</strong> {receiptData.donorName}</div>
              <div><strong>PAN Number:</strong> {receiptData.donorPan}</div>
              <div><strong>Date:</strong> {receiptData.date}</div>
              <div><strong>Txn ID:</strong> {receiptData.txnId}</div>
              <div><strong>Type:</strong> {receiptData.frequency}</div>
              <div className="col-span-2 text-warm-charcoal text-sm">
                <strong>Amount Paid:</strong> <span className="text-coral-accent font-extrabold">₹{receiptData.amount.toLocaleString()}</span>
              </div>
            </div>

            <div className="p-2.5 bg-warm-base rounded-xl text-[11px] text-warm-muted leading-relaxed">
              📄 Official 80G Tax Deduction Certificate has been sent to <strong>{receiptData.donorEmail}</strong>.
            </div>
          </div>

          <div className="flex gap-3">
            <Button
              variant="primary"
              size="md"
              icon={Download}
              className="w-full justify-center"
              onClick={() => alert(`Simulated PDF receipt #${receiptData.receiptNo} downloaded!`)}
            >
              Download PDF Receipt
            </Button>
            <Button variant="outline" size="md" onClick={handleReset} className="w-auto">
              Close
            </Button>
          </div>
        </div>
      )}
    </Modal>
  );
};
