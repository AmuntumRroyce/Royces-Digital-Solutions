import React from 'react';

export const GlassCard = ({ children, className = '', hover = true, glow = false }) => {
  return (
    <div
      className={`glass-card rounded-2xl p-6 sm:p-8 relative overflow-hidden ${
        glow ? 'border-accent/40 shadow-glow-accent' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
};
