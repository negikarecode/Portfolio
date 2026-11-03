import React from 'react';
import { X, Minus, Square, ChevronDown } from 'lucide-react';
import { useWindows } from '../../context/WindowContext';

interface RetroWindowProps {
  id: string;
  title: string;
  children: React.ReactNode;
  showAccentBar?: boolean;
  className?: string;
}

export const RetroWindow: React.FC<RetroWindowProps> = ({
  id,
  title,
  children,
  showAccentBar = false,
  className = '',
}) => {
  const {
    closedWindows,
    minimizedWindows,
    maximizedWindow,
    toggleMinimize,
    toggleMaximize,
    closeWindow,
  } = useWindows();

  const isClosed = Boolean(closedWindows[id]);
  const isMinimized = Boolean(minimizedWindows[id]);
  const isMaximized = maximizedWindow?.id === id;

  if (isClosed) {
    // Window is closed and available in bottom taskbar
    return null;
  }

  return (
    <article
      id={id}
      className={`retro-window transition-all duration-200 scroll-mt-24 ${className}`}
      aria-labelledby={`${id}-title`}
    >
      {/* Retro DOS Window Titlebar */}
      <div className="retro-titlebar">
        <div className="flex items-center gap-2 overflow-hidden">
          <span className="w-2 h-2 rounded-full bg-peach inline-block animate-pulse shrink-0" aria-hidden="true" />
          <span id={`${id}-title`} className="truncate font-mono tracking-wider font-bold">
            {title}
          </span>
        </div>

        {/* Window Controls with visible focus rings & aria-labels */}
        <div className="flex items-center gap-1.5 shrink-0" role="toolbar" aria-label={`Window controls for ${title}`}>
          {/* Minimize / Collapse Body */}
          <button
            type="button"
            onClick={() => toggleMinimize(id)}
            className="w-5 h-5 bg-olive-700 hover:bg-olive-600 border border-olive-900 rounded-xs flex items-center justify-center text-white text-[10px] transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
            title={isMinimized ? `Expand ${title}` : `Minimize ${title}`}
            aria-label={isMinimized ? `Expand ${title}` : `Minimize ${title}`}
            aria-expanded={!isMinimized}
            aria-controls={`${id}-body`}
          >
            {isMinimized ? (
              <ChevronDown className="w-3 h-3 stroke-[2.5]" />
            ) : (
              <Minus className="w-3 h-3 stroke-[2.5]" />
            )}
          </button>

          {/* Maximize Fullscreen */}
          <button
            type="button"
            onClick={() => toggleMaximize(id, title, children)}
            className="w-5 h-5 bg-olive-700 hover:bg-olive-600 border border-olive-900 rounded-xs flex items-center justify-center text-white text-[9px] transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
            title={isMaximized ? "Exit fullscreen" : `Maximize ${title}`}
            aria-label={isMaximized ? "Exit fullscreen" : `Maximize ${title}`}
          >
            <Square className="w-2.5 h-2.5 stroke-[2.5]" />
          </button>

          {/* Close Window (Hides window and adds to restore taskbar) */}
          <button
            type="button"
            onClick={() => closeWindow(id, title)}
            className="retro-close-btn focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
            title={`Close ${title} (can restore from bottom taskbar)`}
            aria-label={`Close ${title}`}
          >
            <X className="w-3 h-3 stroke-[3]" />
          </button>
        </div>
      </div>

      {/* Peach accent bar if enabled */}
      {showAccentBar && !isMinimized && <div className="retro-accent-bar" aria-hidden="true" />}

      {/* Window Body */}
      <div
        id={`${id}-body`}
        hidden={isMinimized}
        className={isMinimized ? 'hidden' : 'block p-6 sm:p-8 lg:p-10'}
      >
        {children}
      </div>

      {/* Collapsed notice if minimized */}
      {isMinimized && (
        <div className="p-3 text-center bg-olive-50 border-t border-olive-900/10 font-mono text-xs text-olive-800 flex items-center justify-center gap-2">
          <span>Window minimized: <strong className="font-bold">{title}</strong></span>
          <button
            type="button"
            onClick={() => toggleMinimize(id)}
            className="underline font-bold text-copper hover:text-copper-dark focus-visible:ring-2 focus-visible:ring-olive-900 focus-visible:outline-none px-1 rounded-xs"
          >
            Click to Expand
          </button>
        </div>
      )}
    </article>
  );
};
