import React from 'react';
import { WashiTape } from './WashiTape';

interface StickyNoteProps {
  children: React.ReactNode;
  color?: 'yellow' | 'mint' | 'pink' | 'blue';
  className?: string;
  angle?: number;
  tape?: boolean;
}

export const StickyNote: React.FC<StickyNoteProps> = ({
  children,
  color = 'yellow',
  className = '',
  angle = 1,
  tape = true,
}) => {
  const colorStyles = {
    yellow: 'bg-brand-yellow/90 border-brand-yellow-border text-ink-950',
    mint: 'bg-brand-mint/90 border-brand-mint-border text-ink-950',
    pink: 'bg-brand-pink/90 border-brand-pink-border text-ink-950',
    blue: 'bg-brand-sky/90 border-brand-sky-border text-ink-950',
  };

  return (
    <div
      className={`relative p-5 sm:p-6 border shadow-sm transition-all duration-300 hover:shadow-md ${colorStyles[color]} ${className}`}
      style={{ transform: `rotate(${angle}deg)` }}
    >
      {tape && (
        <WashiTape className="-top-2.5 left-1/2 -translate-x-1/2" angle={-0.5} width={70} />
      )}
      {children}
    </div>
  );
};
