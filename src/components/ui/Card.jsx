import React from 'react';
import clsx from 'clsx';

export const Card = ({
  children,
  className = '',
  hoverEffect = true,
  variant = 'default', // 'default' | 'tint' | 'outline' | 'highlight'
  padding = 'normal', // 'none' | 'compact' | 'normal' | 'spacious'
  onClick,
}) => {
  const paddings = {
    none: 'p-0',
    compact: 'p-4 sm:p-5',
    normal: 'p-6 sm:p-7',
    spacious: 'p-8 sm:p-10',
  };

  const variants = {
    default: 'bg-white border border-warm-border/70 shadow-soft',
    tint: 'bg-brand-tint/60 border border-brand-teal/15 shadow-sm',
    outline: 'bg-transparent border border-warm-border',
    highlight: 'bg-white border-2 border-coral-accent/30 shadow-lift',
  };

  return (
    <div
      onClick={onClick}
      className={clsx(
        'rounded-2xl transition-all duration-300 overflow-hidden',
        variants[variant],
        paddings[padding],
        hoverEffect && 'hover:-translate-y-1 hover:shadow-lift hover:border-brand-teal/30',
        onClick && 'cursor-pointer',
        className
      )}
    >
      {children}
    </div>
  );
};
