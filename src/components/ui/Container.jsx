import React from 'react';
import clsx from 'clsx';

export const Container = ({ children, className = '', size = 'default' }) => {
  const sizes = {
    default: 'max-w-7xl',
    narrow: 'max-w-4xl',
    prose: 'max-w-3xl',
    wide: 'max-w-full px-4 sm:px-8',
  };

  return (
    <div className={clsx('mx-auto px-4 sm:px-6 lg:px-8', sizes[size], className)}>
      {children}
    </div>
  );
};
