import React, { useEffect, useState, useRef } from 'react';
import clsx from 'clsx';

export const StatCounter = ({ value, label, subtext, icon: Icon, className = '' }) => {
  const [displayedValue, setDisplayedValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef(null);

  // Extract number and suffix (e.g., "148,500+" -> number: 148500, suffix: "+")
  const numericMatch = value.toString().match(/\d[\d,]*/);
  const targetNumber = numericMatch ? parseInt(numericMatch[0].replace(/,/g, ''), 10) : 0;
  const suffix = value.toString().replace(/[\d,]/g, '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.2 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated || targetNumber === 0) return;

    let start = 0;
    const duration = 1800;
    const steps = 40;
    const increment = targetNumber / steps;
    const stepTime = duration / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= targetNumber) {
        setDisplayedValue(targetNumber);
        clearInterval(timer);
      } else {
        setDisplayedValue(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [hasAnimated, targetNumber]);

  return (
    <div ref={counterRef} className={clsx('flex flex-col items-center text-center p-6 rounded-2xl bg-white/80 border border-warm-border/60 shadow-soft hover:shadow-lift transition-all duration-300', className)}>
      {Icon && (
        <div className="w-12 h-12 rounded-xl bg-brand-tint flex items-center justify-center text-brand-teal mb-4">
          <Icon className="w-6 h-6" />
        </div>
      )}
      <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-teal tracking-tight">
        {hasAnimated ? displayedValue.toLocaleString() : '0'}{suffix}
      </div>
      <div className="mt-2 text-base font-bold text-warm-charcoal">{label}</div>
      {subtext && <div className="mt-1 text-xs text-warm-muted">{subtext}</div>}
    </div>
  );
};

export const ProgressBar = ({ progress, label, currentAmount, goalAmount, className = '' }) => {
  return (
    <div className={clsx('w-full flex flex-col gap-2', className)}>
      {(label || currentAmount || goalAmount) && (
        <div className="flex justify-between items-center text-sm font-medium">
          {label && <span className="text-warm-charcoal font-semibold">{label}</span>}
          {currentAmount && goalAmount && (
            <span className="text-warm-muted text-xs">
              <strong className="text-coral-accent font-bold">{currentAmount}</strong> raised of {goalAmount}
            </span>
          )}
        </div>
      )}
      <div className="w-full h-3 sm:h-4 bg-warm-border/60 rounded-full overflow-hidden p-0.5">
        <div
          className="h-full bg-coral-accent rounded-full transition-all duration-1000 ease-out shadow-sm"
          style={{ width: `${Math.min(Math.max(progress, 0), 100)}%` }}
        />
      </div>
      <div className="flex justify-between text-xs text-warm-muted">
        <span>0%</span>
        <span className="font-bold text-coral-accent">{progress}% Complete</span>
      </div>
    </div>
  );
};
