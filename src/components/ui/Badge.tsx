import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  color?: 'yellow' | 'mint' | 'pink' | 'sky' | 'lavender' | 'dark' | 'white';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  color = 'yellow',
  size = 'md',
  className = '',
  onClick,
}) => {
  const colorMap = {
    yellow: 'bg-brand-yellow text-ink-950 border-ink-950/20',
    mint: 'bg-brand-mint text-ink-950 border-ink-950/20',
    pink: 'bg-brand-pink text-ink-950 border-ink-950/20',
    sky: 'bg-brand-sky text-ink-950 border-ink-950/20',
    lavender: 'bg-brand-lavender text-ink-950 border-ink-950/20',
    dark: 'bg-ink-950 text-white border-ink-950',
    white: 'bg-white text-ink-900 border-ink-200',
  };

  const sizeMap = {
    sm: 'text-[11px] px-2 py-0.5 tracking-wide',
    md: 'text-xs px-2.5 py-1 tracking-wider',
    lg: 'text-sm px-3.5 py-1.5 tracking-wider',
  };

  return (
    <span
      onClick={onClick}
      className={`inline-flex items-center gap-1 font-mono uppercase font-medium rounded-full border shadow-xs transition-transform duration-200 hover:-translate-y-0.5 select-none ${colorMap[color]} ${sizeMap[size]} ${className}`}
    >
      {children}
    </span>
  );
};
