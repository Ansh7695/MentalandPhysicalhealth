import React from 'react';
import clsx from 'clsx';

export const AccentBadge = ({ children, variant = 'teal', className = '' }) => {
  const variants = {
    teal: 'bg-brand-tint text-brand-teal-dark border-brand-teal/20',
    coral: 'bg-coral-light text-coral-accent border-coral-accent/20',
    sage: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    dark: 'bg-warm-charcoal text-white border-warm-charcoal',
  };

  return (
    <span
      className={clsx(
        'inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold tracking-wide uppercase rounded-full border',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
};

export default AccentBadge;
