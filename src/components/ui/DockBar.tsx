import React from 'react';
import { portfolioData } from '../../data/portfolioData';

interface DockBarProps {
  className?: string;
}

export const DockBar: React.FC<DockBarProps> = ({ className = '' }) => {
  const { personal } = portfolioData;

  return (
    <nav
      aria-label="Quick Action Dock"
      className={`inline-flex items-center gap-4 bg-olive-500/95 border-[2.5px] border-olive-900 rounded-2xl px-6 py-2.5 shadow-retro transition-all duration-300 hover:shadow-retro-lg ${className}`}
    >
      {/* 1. LinkedIn: Official LinkedIn Blue rounded square */}
      <a
        href={personal.social.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="group dock-icon-bounce relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#0A66C2] border-2 border-olive-900 flex items-center justify-center shadow-xs active:translate-y-0 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
        title="LinkedIn Profile (opens in new tab)"
        aria-label="LinkedIn Profile (in)"
      >
        <span aria-hidden="true" className="font-sans font-bold text-lg sm:text-xl text-white tracking-tighter">
          in
        </span>
        <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity bg-olive-900 text-white text-[10px] font-mono px-2 py-0.5 rounded pointer-events-none whitespace-nowrap z-30 shadow-xs">
          LinkedIn
        </span>
      </a>

      {/* 2. GitHub: Dark Charcoal rounded square */}
      <a
        href={personal.social.github}
        target="_blank"
        rel="noopener noreferrer"
        className="group dock-icon-bounce relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#2B2D42] border-2 border-olive-900 flex items-center justify-center shadow-xs active:translate-y-0 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
        title="GitHub Profile (opens in new tab)"
        aria-label="GitHub Profile"
      >
        <svg
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="#FFFFFF"
          className="w-6 h-6 sm:w-7 sm:h-7"
          aria-hidden="true"
        >
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
        </svg>
        <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity bg-olive-900 text-white text-[10px] font-mono px-2 py-0.5 rounded pointer-events-none whitespace-nowrap z-30 shadow-xs">
          GitHub
        </span>
      </a>
    </nav>
  );
};
