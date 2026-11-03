import React, { createContext, useContext, useState, useEffect } from 'react';

interface WindowState {
  closedWindows: Record<string, { title: string }>;
  minimizedWindows: Record<string, boolean>;
  maximizedWindow: { id: string; title: string; content?: React.ReactNode } | null;
  activeWindowId: string | null;
  toggleMinimize: (id: string) => void;
  toggleMaximize: (id: string, title: string, content?: React.ReactNode) => void;
  closeWindow: (id: string, title: string) => void;
  restoreWindow: (id: string) => void;
  exitMaximize: () => void;
}

const WindowContext = createContext<WindowState | undefined>(undefined);

export const WindowProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [closedWindows, setClosedWindows] = useState<Record<string, { title: string }>>({});
  const [minimizedWindows, setMinimizedWindows] = useState<Record<string, boolean>>({});
  const [maximizedWindow, setMaximizedWindow] = useState<{ id: string; title: string; content?: React.ReactNode } | null>(null);
  const [activeWindowId, setActiveWindowId] = useState<string | null>('portfolio-window');

  // Track active window closest to viewport center
  useEffect(() => {
    const windowIds = [
      'portfolio-window',
      'works-window',
      'tools-window',
      'experience-window',
      'education-window',
      'contact-window',
    ];

    let ticking = false;

    const calculateActiveWindow = () => {
      const centerY = window.innerHeight / 2;
      let minDistance = Infinity;
      let closestId: string | null = null;

      for (const id of windowIds) {
        if (closedWindows[id]) continue;
        const el = document.getElementById(id);
        if (!el) continue;

        const rect = el.getBoundingClientRect();
        if (rect.bottom < 60 || rect.top > window.innerHeight - 60) continue;

        const elCenter = rect.top + rect.height / 2;
        const distance = Math.abs(centerY - elCenter);

        if (distance < minDistance) {
          minDistance = distance;
          closestId = id;
        }
      }

      if (closestId) {
        setActiveWindowId(closestId);
      }
      ticking = false;
    };

    const onScrollOrResize = () => {
      if (!ticking) {
        window.requestAnimationFrame(calculateActiveWindow);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize, { passive: true });
    calculateActiveWindow();

    return () => {
      window.removeEventListener('scroll', onScrollOrResize);
      window.removeEventListener('resize', onScrollOrResize);
    };
  }, [closedWindows]);

  // Handle ESC key to exit maximized window
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && maximizedWindow) {
        setMaximizedWindow(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [maximizedWindow]);

  const toggleMinimize = (id: string) => {
    setMinimizedWindows((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const toggleMaximize = (id: string, title: string, content?: React.ReactNode) => {
    if (maximizedWindow?.id === id) {
      setMaximizedWindow(null);
    } else {
      setMaximizedWindow({ id, title, content });
    }
  };

  const closeWindow = (id: string, title: string) => {
    setClosedWindows((prev) => ({
      ...prev,
      [id]: { title },
    }));
    // If it was maximized, close maximized state too
    if (maximizedWindow?.id === id) {
      setMaximizedWindow(null);
    }
  };

  const restoreWindow = (id: string) => {
    setClosedWindows((prev) => {
      const next = { ...prev };
      delete next[id];
      return next;
    });
    // Ensure it's not minimized when restored
    setMinimizedWindows((prev) => ({
      ...prev,
      [id]: false,
    }));
    // Scroll restored window into view
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 50);
  };

  const exitMaximize = () => {
    setMaximizedWindow(null);
  };

  return (
    <WindowContext.Provider
      value={{
        closedWindows,
        minimizedWindows,
        maximizedWindow,
        activeWindowId,
        toggleMinimize,
        toggleMaximize,
        closeWindow,
        restoreWindow,
        exitMaximize,
      }}
    >
      {children}
    </WindowContext.Provider>
  );
};

export const useWindows = () => {
  const context = useContext(WindowContext);
  if (!context) {
    throw new Error('useWindows must be used within a WindowProvider');
  }
  return context;
};
