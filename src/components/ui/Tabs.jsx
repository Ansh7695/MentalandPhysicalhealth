import React from 'react';
import clsx from 'clsx';

export const Tabs = ({ tabs, activeTab, onChange, className = '' }) => {
  return (
    <div className={clsx('flex items-center gap-2 p-1.5 bg-warm-border/40 rounded-xl overflow-x-auto no-scrollbar', className)}>
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={clsx(
              'px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 whitespace-nowrap flex items-center gap-2',
              isActive
                ? 'bg-white text-brand-teal shadow-soft'
                : 'text-warm-muted hover:text-warm-charcoal hover:bg-white/50'
            )}
          >
            {tab.icon && <tab.icon className={clsx('w-4 h-4', isActive ? 'text-brand-teal' : 'text-warm-muted')} />}
            <span>{tab.label}</span>
            {tab.count !== undefined && (
              <span
                className={clsx(
                  'px-2 py-0.5 text-xs rounded-full font-bold',
                  isActive ? 'bg-brand-tint text-brand-teal' : 'bg-warm-border text-warm-muted'
                )}
              >
                {tab.count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};
