import React from 'react';
import clsx from 'clsx';

export const IconContainer = ({
  icon: Icon,
  size = 'md', // 'sm' | 'md' | 'lg'
  variant = 'teal', // 'teal' | 'sage' | 'coral' | 'neutral'
  className = '',
}) => {
  const containerSizes = {
    sm: 'w-9 h-9 rounded-xl text-sm',
    md: 'w-12 h-12 rounded-2xl text-base',
    lg: 'w-14 h-14 rounded-2xl text-xl',
  };

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-7 h-7',
  };

  const variants = {
    teal: 'bg-brand-tint text-brand-teal border border-brand-teal/20 group-hover:bg-brand-teal group-hover:text-white group-hover:border-brand-teal',
    sage: 'bg-emerald-50 text-emerald-800 border border-emerald-200 group-hover:bg-emerald-700 group-hover:text-white',
    coral: 'bg-coral-light text-coral-accent border border-coral-accent/20 group-hover:bg-coral-accent group-hover:text-white',
    neutral: 'bg-warm-base text-warm-charcoal border border-warm-border group-hover:bg-warm-charcoal group-hover:text-white',
  };

  return (
    <div
      className={clsx(
        'flex items-center justify-center flex-shrink-0 transition-all duration-300 shadow-xs group-hover:shadow-soft group-hover:scale-105',
        containerSizes[size],
        variants[variant],
        className
      )}
    >
      {Icon && <Icon className={iconSizes[size]} />}
    </div>
  );
};

export default IconContainer;
