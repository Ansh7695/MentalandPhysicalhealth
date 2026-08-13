import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import clsx from 'clsx';

export const AccordionItem = ({ title, children, isOpen, onToggle, icon: Icon, badge }) => {
  return (
    <div className="border border-warm-border rounded-xl bg-white overflow-hidden transition-all duration-200">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 text-left font-semibold text-warm-charcoal hover:bg-warm-base/50 transition-colors focus:outline-none focus:bg-warm-base/80"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-3 pr-4">
          {Icon && <Icon className="w-5 h-5 text-brand-teal flex-shrink-0" />}
          <span className="text-base sm:text-lg">{title}</span>
          {badge && (
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-brand-tint text-brand-teal font-medium">
              {badge}
            </span>
          )}
        </div>
        <ChevronDown
          className={clsx(
            'w-5 h-5 text-warm-muted transition-transform duration-300 flex-shrink-0',
            isOpen && 'transform rotate-180 text-brand-teal'
          )}
        />
      </button>
      {isOpen && (
        <div className="p-5 pt-0 text-warm-muted text-base leading-relaxed border-t border-warm-border/40 bg-warm-base/20">
          {children}
        </div>
      )}
    </div>
  );
};

export const Accordion = ({ items, allowMultiple = false, className = '' }) => {
  const [openIndexes, setOpenIndexes] = useState([0]); // default first open

  const handleToggle = (index) => {
    if (allowMultiple) {
      if (openIndexes.includes(index)) {
        setOpenIndexes(openIndexes.filter((i) => i !== index));
      } else {
        setOpenIndexes([...openIndexes, index]);
      }
    } else {
      setOpenIndexes(openIndexes.includes(index) ? [] : [index]);
    }
  };

  return (
    <div className={clsx('flex flex-col gap-3.5', className)}>
      {items.map((item, idx) => (
        <AccordionItem
          key={idx}
          title={item.question || item.title}
          icon={item.icon}
          badge={item.badge}
          isOpen={openIndexes.includes(idx)}
          onToggle={() => handleToggle(idx)}
        >
          {item.answer || item.content || item.desc}
        </AccordionItem>
      ))}
    </div>
  );
};
