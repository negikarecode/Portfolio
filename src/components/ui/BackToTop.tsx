import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setVisible(window.scrollY > window.innerHeight);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({
      top: 0,
      behavior: isReducedMotion ? 'auto' : 'smooth',
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`retro-btn back-to-top-btn fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40 inline-flex items-center justify-center gap-1.5 px-3 py-2 min-h-[44px] min-w-[44px] bg-white border-2 border-olive-900 rounded-sm text-olive-900 font-mono text-xs font-bold shadow-retro-sm hover:bg-peach focus-visible:ring-2 focus-visible:ring-olive-900 focus-visible:outline-none ${
        visible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <ArrowUp className="w-4 h-4 stroke-[2.5]" aria-hidden="true" />
      <span>TOP</span>
    </button>
  );
};
