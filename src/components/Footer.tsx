import React from 'react';
import { ArrowUp, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t-2 border-dashed border-olive-900/20 bg-graph-bg/90 py-8 px-4 sm:px-6 lg:px-8 font-mono text-xs text-olive-700">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left */}
        <div className="flex items-center gap-2">
          <Terminal className="w-3.5 h-3.5 text-copper" />
          <span>
            {portfolioData.personal.name} © {new Date().getFullYear()} • C:\SYSTEM\PORTFOLIO.EXE
          </span>
        </div>

        {/* Center */}
        <div className="font-serif italic text-sm text-olive-800">
          "Meaningful code starts with intention."
        </div>

        {/* Right back to top */}
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border-2 border-olive-900 rounded-sm text-olive-900 font-bold hover:bg-peach transition-colors shadow-retro-sm active:translate-y-0.5"
          aria-label="Back to top"
        >
          <span>TOP</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
};
