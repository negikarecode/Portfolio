import React from 'react';
import { ArrowUp, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { useInView } from '../hooks/useInView';

export const Footer: React.FC = () => {
  const { ref: footerRef, isInView: isFooterInView } = useInView<HTMLElement>();

  const scrollToTop = () => {
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: isReducedMotion ? 'auto' : 'smooth' });
  };

  return (
    <footer
      ref={footerRef}
      className={`border-t-2 border-dashed border-olive-900/20 bg-graph-bg/90 py-8 px-4 sm:px-6 lg:px-8 font-mono text-xs text-olive-700 fade-rise-item ${
        isFooterInView ? 'is-visible' : ''
      }`}
    >
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left */}
        <div className="flex items-center gap-2">
          <Terminal className="w-3.5 h-3.5 text-copper" />
          <span>
            {portfolioData.personal.name} © {new Date().getFullYear()} • C:\SYSTEM\PORTFOLIO.EXE
          </span>
        </div>

        {/* Center: Location & Role */}
        <div className="font-mono text-xs text-olive-800">
          New Delhi, India // Full Stack Developer
        </div>

        {/* Right back to top */}
        <button
          onClick={scrollToTop}
          className="retro-btn inline-flex items-center gap-1.5 px-3 py-1 bg-white border-2 border-olive-900 rounded-sm text-olive-900 font-bold hover:bg-peach shadow-retro-sm focus-visible:ring-2 focus-visible:ring-olive-900 focus-visible:outline-none"
          aria-label="Back to top"
        >
          <span>TOP</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
};
