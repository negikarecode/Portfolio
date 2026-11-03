import React from 'react';

interface RetroToolIconProps {
  name: string;
  category?: string;
  delayMs?: number;
  isVisible?: boolean;
  iconType: 
    | 'react' 
    | 'python' 
    | 'javascript' 
    | 'django' 
    | 'shopify' 
    | 'html' 
    | 'mysql' 
    | 'tailwind' 
    | 'git' 
    | 'vscode' 
    | 'api';
}

export const RetroToolIcon: React.FC<RetroToolIconProps> = ({
  name,
  iconType,
  delayMs = 0,
  isVisible = true,
}) => {
  const renderIcon = () => {
    switch (iconType) {
      case 'react':
        return (
          <div className="w-12 h-12 rounded-full bg-[#E0F2FE] border-2 border-olive-900 flex items-center justify-center text-[#0284C7] shadow-xs">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7 animate-spin-slow">
              <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(0 12 12)" />
              <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
              <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
              <circle cx="12" cy="12" r="2" fill="currentColor" />
            </svg>
          </div>
        );
      case 'python':
        return (
          <div className="w-12 h-12 rounded-xl bg-[#FEF3C7] border-2 border-olive-900 flex items-center justify-center shadow-xs">
            <span className="font-mono text-xl font-bold text-[#D97706]">Py</span>
          </div>
        );
      case 'javascript':
        return (
          <div className="w-12 h-12 rounded-xl bg-[#FEF08A] border-2 border-olive-900 flex items-center justify-center shadow-xs">
            <span className="font-mono text-lg font-bold text-olive-900">JS</span>
          </div>
        );
      case 'django':
        return (
          <div className="w-12 h-12 rounded-xl bg-[#DCFCE7] border-2 border-olive-900 flex items-center justify-center shadow-xs">
            <span className="font-serif text-lg font-bold text-[#15803D]">dj</span>
          </div>
        );
      case 'shopify':
        return (
          <div className="w-12 h-12 rounded-xl bg-[#ECFDF5] border-2 border-olive-900 flex items-center justify-center shadow-xs">
            <svg viewBox="0 0 24 24" fill="#059669" className="w-7 h-7">
              <path d="M19.5 7.5L16 6l-2-4-7 2.5L5 19l14 2 3-12.5-2.5-1zM11 6l2.5-1 1 2-3.5 1V6zm-3.5 3.5l3.5-.5v2l-3.5.5v-2zm9.5 8l-9-1.5 1-8 8 1.5v8z" />
            </svg>
          </div>
        );
      case 'html':
        return (
          <div className="w-12 h-12 rounded-xl bg-[#FEE2E2] border-2 border-olive-900 flex items-center justify-center shadow-xs">
            <span className="font-mono text-sm font-bold text-[#DC2626]">&lt;/&gt;</span>
          </div>
        );
      case 'mysql':
        return (
          <div className="w-12 h-12 rounded-xl bg-[#EFF6FF] border-2 border-olive-900 flex items-center justify-center shadow-xs">
            <span className="font-mono text-xs font-bold text-[#2563EB]">SQL</span>
          </div>
        );
      case 'tailwind':
        return (
          <div className="w-12 h-12 rounded-xl bg-[#E0F2FE] border-2 border-olive-900 flex items-center justify-center shadow-xs">
            <span className="font-mono text-xs font-bold text-[#0284C7]">TW</span>
          </div>
        );
      case 'git':
        return (
          <div className="w-12 h-12 rounded-full bg-[#2B2D42] border-2 border-olive-900 flex items-center justify-center shadow-xs">
            <svg viewBox="0 0 24 24" fill="#FFFFFF" className="w-7 h-7">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
            </svg>
          </div>
        );
      case 'vscode':
        return (
          <div className="w-12 h-12 rounded-xl bg-[#E0E7FF] border-2 border-olive-900 flex items-center justify-center shadow-xs">
            <span className="font-mono text-base font-bold text-[#4F46E5]">&gt;_</span>
          </div>
        );
      case 'api':
      default:
        return (
          <div className="w-12 h-12 rounded-xl bg-[#FDF4FF] border-2 border-olive-900 flex items-center justify-center shadow-xs">
            <span className="font-mono text-xs font-bold text-[#C026D3]">API</span>
          </div>
        );
    }
  };

  return (
    <div
      className="flex flex-col items-center gap-2 group cursor-default select-none will-change-transform"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'scale(1) translateY(0)' : 'scale(0.85) translateY(4px)',
        transitionProperty: 'opacity, transform',
        transitionDuration: '240ms',
        transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        transitionDelay: `${delayMs}ms`,
      }}
    >
      <div className="transition-transform duration-150 group-hover:scale-110 group-hover:-translate-y-1.5" style={{ transitionTimingFunction: 'var(--ease-bounce)' }}>
        {renderIcon()}
      </div>
      <span className="font-mono text-xs font-medium text-olive-800 text-center tracking-tight group-hover:text-copper transition-colors">
        {name}
      </span>
    </div>
  );
};
