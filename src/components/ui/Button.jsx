import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

export const Button = ({
  children,
  to,
  href,
  variant = 'primary', // 'primary' | 'secondary' | 'coral' | 'outline' | 'ghost'
  size = 'md', // 'sm' | 'md' | 'lg'
  className = '',
  icon: Icon,
  iconPosition = 'left',
  onClick,
  disabled = false,
  type = 'button',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none';

  const variants = {
    primary: 'bg-brand-teal text-white hover:bg-brand-teal-dark shadow-soft hover:shadow-lift focus:ring-brand-teal',
    secondary: 'bg-brand-tint text-brand-teal-dark hover:bg-teal-100 border border-brand-teal/20 focus:ring-brand-teal',
    coral: 'bg-coral-accent text-white hover:bg-coral-hover shadow-md hover:shadow-lg focus:ring-coral-accent font-semibold tracking-wide', // EXCLUSIVE DONATE ACCENT
    outline: 'bg-transparent text-warm-charcoal border border-warm-border hover:bg-warm-base hover:border-warm-muted focus:ring-brand-teal',
    ghost: 'bg-transparent text-warm-charcoal hover:bg-warm-border/40 focus:ring-brand-teal',
  };

  const sizes = {
    sm: 'px-3.5 py-1.5 text-sm gap-1.5',
    md: 'px-5 py-2.5 text-base gap-2',
    lg: 'px-7 py-3.5 text-lg gap-2.5 font-semibold',
  };

  const combinedClasses = clsx(baseStyles, variants[variant], sizes[size], className);

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className={size === 'sm' ? 'w-4 h-4' : size === 'lg' ? 'w-6 h-6' : 'w-5 h-5'} />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className={size === 'sm' ? 'w-4 h-4' : size === 'lg' ? 'w-6 h-6' : 'w-5 h-5'} />}
    </>
  );

  if (to) {
    return (
      <Link to={to} class={combinedClasses} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" class={combinedClasses} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={combinedClasses} onClick={onClick} disabled={disabled} {...props}>
      {content}
    </button>
  );
};
