import React from 'react';
import { Container } from '../ui/Container';
import { Card } from '../ui/Card';
import { fundAllocation } from '../../data/donationTiers';
import { ShieldCheck, TrendingUp } from 'lucide-react';

export const FundAllocationChart = () => {
  return (
    <Card variant="tint" padding="spacious" className="my-8">
      <div className="flex flex-col lg:flex-row items-center gap-8">
        {/* SVG Donut Visualization */}
        <div className="relative w-56 h-56 flex-shrink-0 flex items-center justify-center">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
            {/* Background Ring */}
            <path
              className="text-warm-border/60"
              strokeWidth="4"
              stroke="currentColor"
              fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            {/* 82% Direct Healthcare */}
            <path
              stroke="#4B9B94"
              strokeWidth="4.5"
              strokeDasharray="82, 100"
              strokeLinecap="round"
              fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            {/* 10% Helpline */}
            <path
              stroke="#6A9A7B"
              strokeWidth="4.5"
              strokeDasharray="10, 100"
              strokeDashoffset="-82"
              strokeLinecap="round"
              fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            {/* 5% Admin */}
            <path
              stroke="#95B8A6"
              strokeWidth="4.5"
              strokeDasharray="5, 100"
              strokeDashoffset="-92"
              strokeLinecap="round"
              fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            {/* 3% Outreach */}
            <path
              stroke="#E86A45"
              strokeWidth="4.5"
              strokeDasharray="3, 100"
              strokeDashoffset="-97"
              strokeLinecap="round"
              fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <span className="text-3xl font-extrabold text-brand-teal">82%</span>
            <span className="text-[11px] font-bold text-warm-charcoal uppercase tracking-wider">Direct Care</span>
          </div>
        </div>

        {/* Categories Legend */}
        <div className="flex-1 space-y-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-brand-teal uppercase tracking-wider mb-1">
              <TrendingUp className="w-4 h-4" />
              <span>Fund Allocation Transparency</span>
            </div>
            <h3 className="text-xl font-bold text-warm-charcoal">Where Your Contribution Goes</h3>
            <p className="text-xs text-warm-muted mt-1">
              We maintain minimal administrative overhead so maximum funds directly impact human lives.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {fundAllocation.map((item, idx) => (
              <div key={idx} className="p-3 bg-white rounded-xl border border-warm-border/60 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2.5">
                  <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: item.color }} />
                  <span className="font-semibold text-warm-charcoal">{item.category}</span>
                </div>
                <span className="font-extrabold text-warm-charcoal">{item.percentage}%</span>
              </div>
            ))}
          </div>

          <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800 flex items-center gap-2 font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span>Audited by KPMG India. 100% compliant with Ministry of Corporate Affairs CSR guidelines.</span>
          </div>
        </div>
      </div>
    </Card>
  );
};
