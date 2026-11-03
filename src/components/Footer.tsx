import React from 'react';
import { ArrowUp } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-ink-950/10 bg-paper/80 py-10 px-4 sm:px-6 lg:px-8 mt-16 font-mono text-xs text-ink-600">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left text */}
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
          <span>
            {portfolioData.personal.name} © {new Date().getFullYear()} • Delhi University
          </span>
        </div>

        {/* Center note */}
        <div className="font-handwriting text-lg text-ink-700">
          built with precision & clean code 🌸
        </div>

        {/* Right back to top button */}
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-ink-950/20 rounded-xs text-ink-800 hover:bg-brand-yellow transition-colors shadow-xs active:translate-y-0.5"
          aria-label="Back to top of page"
        >
          <span>TOP</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
};
