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
    activeWindowId,
    toggleMinimize,
    toggleMaximize,
    closeWindow,
  } = useWindows();

  const isClosed = Boolean(closedWindows[id]);
  const isMinimized = Boolean(minimizedWindows[id]);
  const isMaximized = maximizedWindow?.id === id;
  const isActive = activeWindowId === id;

  const [hasRevealed, setHasRevealed] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const windowRef = React.useRef<HTMLElement>(null);

  const handleClose = () => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      closeWindow(id, title);
      return;
    }
    setIsClosing(true);
    setTimeout(() => {
      closeWindow(id, title);
    }, 150);
  };

  React.useEffect(() => {
    // If reduced motion is requested, reveal immediately
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setHasRevealed(true);
      return;
    }

    const node = windowRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  if (isClosed) {
    // Window is closed and available in bottom taskbar
    return null;
  }

  return (
    <article
      ref={windowRef}
      id={id}
      className={`retro-window scroll-mt-20 sm:scroll-mt-24 ${
        hasRevealed ? 'retro-window-entered' : 'retro-window-entering'
      } ${isActive ? 'window-active' : ''} ${isClosing ? 'window-closing' : ''} ${className}`}
      aria-labelledby={`${id}-title`}
    >
      {/* Retro DOS Window Titlebar */}
      <div className="retro-titlebar">
        <div className="flex items-center gap-2 overflow-hidden">
          <span className="w-2.5 h-2.5 rounded-full bg-peach inline-block animate-pulse shrink-0" aria-hidden="true" />
          <span id={`${id}-title`} className="truncate font-mono tracking-wider font-bold">
            {title}
          </span>
        </div>

        {/* Window Controls: Accessible hit area >= 32px desktop, >= 44px mobile touch */}
        <div className="flex items-center gap-1.5 shrink-0" role="toolbar" aria-label={`Window controls for ${title}`}>
          {/* Minimize / Collapse Body */}
          <button
            type="button"
            onClick={() => toggleMinimize(id)}
            className="w-8 h-8 sm:w-7 sm:h-7 min-w-[32px] min-h-[32px] sm:min-w-[28px] sm:min-h-[28px] bg-olive-700 hover:bg-olive-600 border border-olive-900 rounded-xs flex items-center justify-center text-white text-[10px] transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
            title={isMinimized ? `Expand ${title}` : `Minimize ${title}`}
            aria-label={isMinimized ? `Expand ${title}` : `Minimize ${title}`}
            aria-expanded={!isMinimized}
            aria-controls={`${id}-body`}
          >
            {isMinimized ? (
              <ChevronDown className="w-3.5 h-3.5 stroke-[2.5]" />
            ) : (
              <Minus className="w-3.5 h-3.5 stroke-[2.5]" />
            )}
          </button>

          {/* Maximize Fullscreen */}
          <button
            type="button"
            onClick={() => toggleMaximize(id, title, children)}
            className="w-8 h-8 sm:w-7 sm:h-7 min-w-[32px] min-h-[32px] sm:min-w-[28px] sm:min-h-[28px] bg-olive-700 hover:bg-olive-600 border border-olive-900 rounded-xs flex items-center justify-center text-white text-[9px] transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
            title={isMaximized ? "Exit fullscreen" : `Maximize ${title}`}
            aria-label={isMaximized ? "Exit fullscreen" : `Maximize ${title}`}
          >
            <Square className="w-3 h-3 stroke-[2.5]" />
          </button>

          {/* Close Window (Hides window and adds to restore taskbar) */}
          <button
            type="button"
            onClick={handleClose}
            className="retro-close-btn w-8 h-8 sm:w-7 sm:h-7 min-w-[32px] min-h-[32px] sm:min-w-[28px] sm:min-h-[28px] focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
            title={`Close ${title} (can restore from bottom taskbar)`}
            aria-label={`Close ${title}`}
          >
            <X className="w-3.5 h-3.5 stroke-[3]" />
          </button>
        </div>
      </div>

      {/* Peach accent bar if enabled */}
      {showAccentBar && !isMinimized && <div className="retro-accent-bar" aria-hidden="true" />}

      {/* Window Body: Smooth collapsible via grid-template-rows */}
      <div
        id={`${id}-body`}
        aria-hidden={isMinimized}
        className={`window-body-grid ${isMinimized ? 'is-minimized' : ''}`}
      >
        <div className="window-body-inner">
          <div className="p-6 sm:p-8 lg:p-10">
            {children}
          </div>
        </div>
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
