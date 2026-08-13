import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import clsx from 'clsx';

export const Modal = ({ isOpen, onClose, title, children, maxWidth = 'max-w-2xl', className = '' }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-warm-charcoal/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Dialog */}
      <div
        className={clsx(
          'relative w-full bg-white rounded-2xl shadow-modal z-10 overflow-hidden transform transition-all duration-300 my-8',
          maxWidth,
          className
        )}
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-warm-border bg-warm-base/40">
          <h3 className="text-xl font-bold text-warm-charcoal">{title}</h3>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-warm-muted hover:text-warm-charcoal hover:bg-warm-border/50 transition-colors focus:outline-none"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">{children}</div>
      </div>
    </div>
  );
};
