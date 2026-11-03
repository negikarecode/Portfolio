import React, { useState } from 'react';

interface SmileyProps {
  size?: number;
  className?: string;
}

export const Smiley: React.FC<SmileyProps> = ({ size = 68, className = '' }) => {
  const [isWinking, setIsWinking] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsWinking(true)}
      onMouseLeave={() => setIsWinking(false)}
      onClick={() => setIsWinking(!isWinking)}
      role="button"
      tabIndex={0}
      aria-label="Interactive smiley face avatar"
      className={`relative inline-block cursor-pointer transition-transform duration-300 hover:scale-110 active:scale-95 focus:outline-none ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-sm transition-all"
      >
        {/* Yellow circle */}
        <circle cx="40" cy="40" r="36" fill="#FEF08A" stroke="#111113" strokeWidth="4.5" />

        {/* Left eye */}
        <rect x="26" y="28" width="6" height="10" rx="3" fill="#111113" />

        {/* Right eye (winks on hover) */}
        {isWinking ? (
          <path
            d="M48 35 Q53 30 58 35"
            stroke="#111113"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
          />
        ) : (
          <rect x="48" y="28" width="6" height="10" rx="3" fill="#111113" />
        )}

        {/* Friendly smile */}
        <path
          d="M28 48 Q40 62 52 48"
          stroke="#111113"
          strokeWidth="4.5"
          strokeLinecap="round"
          fill="none"
        />

        {/* Blush cheeks */}
        <circle cx="22" cy="46" r="3.5" fill="#FCA5A5" opacity="0.6" />
        <circle cx="58" cy="46" r="3.5" fill="#FCA5A5" opacity="0.6" />
      </svg>
    </div>
  );
};
