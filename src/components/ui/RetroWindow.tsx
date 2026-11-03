import React, { useState } from 'react';
import { X, Minus, Square } from 'lucide-react';

interface RetroWindowProps {
  id?: string;
  title: string;
  children: React.ReactNode;
  showAccentBar?: boolean;
  className?: string;
  defaultExpanded?: boolean;
}

export const RetroWindow: React.FC<RetroWindowProps> = ({
  id,
  title,
  children,
  showAccentBar = false,
  className = '',
  defaultExpanded = true,
}) => {
  const [isMinimized, setIsMinimized] = useState(!defaultExpanded);
  const [isMaximized, setIsMaximized] = useState(false);

  return (
    <article
      id={id}
      className={`retro-window transition-all duration-300 scroll-mt-24 ${
        isMaximized ? 'w-full' : ''
      } ${className}`}
    >
      {/* Retro DOS Window Titlebar */}
      <div className="retro-titlebar">
        <div className="flex items-center gap-2 overflow-hidden">
          <span className="w-2 h-2 rounded-full bg-peach inline-block animate-pulse shrink-0" />
          <span className="truncate font-mono tracking-wider">{title}</span>
        </div>

        {/* Window controls */}
        <div className="flex items-center gap-1.5 shrink-0">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="w-5 h-5 bg-olive-700 hover:bg-olive-600 border border-olive-900 rounded-xs flex items-center justify-center text-white text-[10px] transition-colors"
            title={isMinimized ? "Restore" : "Minimize"}
            aria-label="Minimize Window"
          >
            <Minus className="w-3 h-3" />
          </button>
          <button
            onClick={() => setIsMaximized(!isMaximized)}
            className="w-5 h-5 bg-olive-700 hover:bg-olive-600 border border-olive-900 rounded-xs flex items-center justify-center text-white text-[9px] transition-colors"
            title={isMaximized ? "Restore size" : "Maximize"}
            aria-label="Maximize Window"
          >
            <Square className="w-2.5 h-2.5" />
          </button>
          <button
            onClick={() => setIsMinimized(true)}
            className="retro-close-btn"
            title="Close Window"
            aria-label="Close Window"
          >
            <X className="w-3 h-3 stroke-[3]" />
          </button>
        </div>
      </div>

      {/* Peach accent bar if enabled */}
      {showAccentBar && !isMinimized && <div className="retro-accent-bar" />}

      {/* Window Body */}
      {!isMinimized ? (
        <div className="p-6 sm:p-8 lg:p-10">{children}</div>
      ) : (
        <div className="p-3 text-center bg-olive-50 font-mono text-xs text-olive-700 flex items-center justify-center gap-2">
          <span>Window minimized: {title}</span>
          <button
            onClick={() => setIsMinimized(false)}
            className="underline font-bold text-copper hover:text-copper-dark"
          >
            Click to Restore
          </button>
        </div>
      )}
    </article>
  );
};
