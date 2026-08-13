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

export const SectionHeading = ({
  badge,
  badgeVariant = 'teal',
  title,
  subtitle,
  align = 'center', // 'left' | 'center' | 'right'
  className = '',
  titleSize = 'default',
}) => {
  const alignment = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  };

  const titleSizes = {
    small: 'text-2xl sm:text-3xl font-bold',
    default: 'text-3xl sm:text-4xl lg:text-5xl font-extrabold',
    large: 'text-4xl sm:text-5xl lg:text-6xl font-black',
  };

  return (
    <div className={clsx('flex flex-col max-w-3xl mb-12 sm:mb-16', alignment[align], className)}>
      {badge && <AccentBadge variant={badgeVariant} className="mb-3">{badge}</AccentBadge>}
      {title && (
        <h2 className={clsx('text-warm-charcoal leading-tight tracking-tight', titleSizes[titleSize])}>
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="mt-4 text-lg text-warm-muted leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
};
