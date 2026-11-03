import React from 'react';
import { RotateCcw, X, Minimize2 } from 'lucide-react';
import { useWindows } from '../../context/WindowContext';

export const Taskbar: React.FC = () => {
  const { closedWindows, restoreWindow, maximizedWindow, exitMaximize } = useWindows();
  const closedList = Object.entries(closedWindows);

  return (
    <>
      {/* 1. Fullscreen Maximized Window Overlay */}
      {maximizedWindow && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={maximizedWindow.title}
          className="fixed inset-0 z-50 bg-olive-950/80 backdrop-blur-sm flex flex-col p-2 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
        >
          <div className="retro-window max-w-5xl w-full mx-auto my-auto flex flex-col max-h-[92vh] shadow-2xl">
            {/* Maximized Titlebar */}
            <div className="retro-titlebar sticky top-0 z-20">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-peach animate-pulse" />
                <span className="font-mono font-bold tracking-wider text-sm">
                  {maximizedWindow.title} [FULLSCREEN MODE]
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={exitMaximize}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-olive-700 hover:bg-olive-600 border border-olive-900 rounded-xs text-xs font-mono text-white transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
                  title="Exit fullscreen (or press Escape)"
                  aria-label="Exit fullscreen"
                >
                  <Minimize2 className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Exit Fullscreen (Esc)</span>
                </button>
                <button
                  type="button"
                  onClick={exitMaximize}
                  className="retro-close-btn focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
                  title="Close modal (Escape)"
                  aria-label="Close modal"
                >
                  <X className="w-3 h-3 stroke-[3]" />
                </button>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-10 overflow-y-auto bg-window-bg">
              {maximizedWindow.content}
            </div>
          </div>
        </div>
      )}

      {/* 2. Floating Bottom OS Taskbar for Closed Windows */}
      {closedList.length > 0 && (
        <aside
          aria-label="Closed windows restore taskbar"
          className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 bg-olive-900/95 text-white border-2 border-olive-950 rounded-xl px-4 py-2 shadow-retro flex items-center gap-3 backdrop-blur-md max-w-[95vw] overflow-x-auto"
        >
          <span className="font-mono text-xs font-bold text-peach shrink-0 uppercase tracking-wider">
            Taskbar ({closedList.length}):
          </span>

          <div className="flex items-center gap-2 overflow-x-auto py-0.5">
            {closedList.map(([id, info]) => (
              <button
                key={id}
                type="button"
                onClick={() => restoreWindow(id)}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-olive-800 hover:bg-copper border border-olive-700 text-xs font-mono font-medium transition-colors whitespace-nowrap focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
                title={`Restore ${info.title}`}
                aria-label={`Restore window ${info.title}`}
              >
                <RotateCcw className="w-3 h-3 text-peach" />
                <span>{info.title}</span>
              </button>
            ))}
          </div>
        </aside>
      )}
    </>
  );
};
