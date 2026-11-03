import React from 'react';

interface DesktopFolderProps {
  label: string;
  onClick?: () => void;
  href?: string;
  download?: string | boolean;
  className?: string;
  ariaLabel?: string;
}

export const DesktopFolder: React.FC<DesktopFolderProps> = ({
  label,
  onClick,
  href,
  download,
  className = '',
  ariaLabel,
}) => {
  const content = (
    <div className={`desktop-icon-btn group focus-visible:ring-2 focus-visible:ring-olive-900 focus-visible:outline-none rounded-lg p-2 ${className}`}>
      {/* Manila folder SVG with blue floppy disk/doc inside */}
      <div className="relative w-14 h-12 transition-transform duration-200 group-hover:scale-105 group-active:scale-95">
        <svg
          viewBox="0 0 56 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm"
          aria-hidden="true"
        >
          {/* Folder back tab */}
          <path
            d="M3 8C3 5.79086 4.79086 4 7 4H20C21.6 4 23 5.4 24.5 7L27 9.5H49C51.2091 9.5 53 11.2909 53 13.5V38C53 40.2091 51.2091 42 49 42H7C4.79086 42 3 40.2091 3 38V8Z"
            fill="#ECC85B"
            stroke="#36432C"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />

          {/* Blue Floppy Disk / Document */}
          <rect
            x="10"
            y="6"
            width="28"
            height="18"
            rx="2"
            fill="#5FA8D3"
            stroke="#36432C"
            strokeWidth="2"
          />
          <rect x="15" y="9" width="18" height="7" rx="1" fill="#FFFFFF" />

          {/* Folder front flap */}
          <path
            d="M3 17C3 15.3431 4.34315 14 6 14H50C51.6569 14 53 15.3431 53 17V39C53 40.6569 51.6569 42 50 42H6C4.34315 42 3 40.6569 3 39V17Z"
            fill="#F6D365"
            stroke="#36432C"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Label underneath */}
      <span className="font-mono text-xs font-semibold text-olive-900 tracking-wide text-center group-hover:text-copper transition-colors">
        {label}
      </span>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        download={download}
        onClick={onClick}
        aria-label={ariaLabel || `Open ${label} folder`}
        className="inline-block focus-visible:ring-2 focus-visible:ring-olive-900 focus-visible:outline-none rounded-lg"
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel || `Navigate to ${label} section`}
      className="inline-block focus-visible:ring-2 focus-visible:ring-olive-900 focus-visible:outline-none rounded-lg text-left"
    >
      {content}
    </button>
  );
};
