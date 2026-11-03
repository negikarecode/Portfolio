import React, { useState, useEffect, useCallback } from 'react';
import { Terminal, FastForward } from 'lucide-react';

const BOOT_STORAGE_KEY = 'aryan_os_booted';

const BOOT_LINES = [
  'BOOTING ARYAN.SYS v2.6 [BUILD 2026]...',
  'MOUNTING CORE MODULES: REACT, DJANGO, SHOPIFY...',
  'CONFIGURING RETRO OS DESKTOP ENVIRONMENT...',
  'SYSTEM READY. LAUNCHING PORTFOLIO...',
];

export const BootSequence: React.FC = () => {
  const [shouldRender, setShouldRender] = useState(() => {
    try {
      if (typeof window === 'undefined') return false;
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false;
      if (sessionStorage.getItem(BOOT_STORAGE_KEY)) return false;
      return true;
    } catch {
      return false;
    }
  });
  const [lineIndex, setLineIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const completeBoot = useCallback(() => {
    setIsFading(true);
    try {
      sessionStorage.setItem(BOOT_STORAGE_KEY, 'true');
    } catch {
      // Ignore sessionStorage exceptions
    }
    setTimeout(() => {
      setShouldRender(false);
      // Return focus to main page
      const main = document.getElementById('main-content');
      if (main) {
        main.setAttribute('tabindex', '-1');
        main.focus({ preventScroll: true });
      }
    }, 280);
  }, []);

  useEffect(() => {
    if (!shouldRender) return;

    // Sequence lines across 1.4 seconds
    const t1 = setTimeout(() => setLineIndex(1), 320);
    const t2 = setTimeout(() => setLineIndex(2), 680);
    const t3 = setTimeout(() => setLineIndex(3), 1050);
    const t4 = setTimeout(() => completeBoot(), 1450);

    // Listen for any key or click to skip
    const handleKeyDown = () => completeBoot();
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [shouldRender, completeBoot]);

  if (!shouldRender) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="System boot sequence"
      onClick={completeBoot}
      className={`fixed inset-0 z-[100] bg-[#1A2216] text-[#E8ECE2] font-mono p-4 sm:p-10 flex flex-col justify-between select-none transition-opacity duration-250 cursor-pointer ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Top Bar with System Monogram & Skip CTA */}
      <div className="flex items-center justify-between border-b border-olive-700/60 pb-3">
        <div className="flex items-center gap-2 text-xs sm:text-sm text-peach font-bold tracking-wider">
          <Terminal className="w-4 h-4 animate-pulse" aria-hidden="true" />
          <span>ARYAN-DOS / BIOS 2.6.4</span>
        </div>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            completeBoot();
          }}
          aria-label="Skip boot sequence intro"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-olive-900 hover:bg-peach hover:text-olive-950 text-peach border border-olive-700 rounded-sm text-xs font-mono font-bold transition-colors min-h-[36px] focus-visible:ring-2 focus-visible:ring-peach focus-visible:outline-none"
        >
          <span>Skip [Esc / Click]</span>
          <FastForward className="w-3.5 h-3.5" aria-hidden="true" />
        </button>
      </div>

      {/* Terminal Output Stream */}
      <div className="my-auto max-w-2xl w-full mx-auto space-y-2.5 py-6">
        <div className="text-[11px] sm:text-xs text-olive-400 mb-2">
          CPU: DUAL-CORE SIMULATED 3.2 GHz // RAM: 640 KB CONVENTIONAL
        </div>

        {BOOT_LINES.slice(0, lineIndex + 1).map((line, idx) => (
          <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm">
            <span className="text-copper font-bold select-none">&gt;</span>
            <span className={idx === lineIndex ? 'text-white font-bold' : 'text-olive-200'}>
              {line}
            </span>
          </div>
        ))}

        {/* Blinking cursor on active line */}
        <div className="flex items-center gap-1.5 pt-1 text-peach">
          <span className="w-2.5 h-4 bg-peach animate-pulse inline-block" />
        </div>
      </div>

      {/* Bottom Hint */}
      <div className="flex items-center justify-between text-[11px] text-olive-400 border-t border-olive-700/60 pt-3">
        <span>MEM CHECK: 640K OK</span>
        <span>PRESS ANY KEY TO SKIP</span>
      </div>
    </div>
  );
};
