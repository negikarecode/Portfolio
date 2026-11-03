import React from 'react';

interface ProfileAppIconProps {
  label?: string;
  onClick?: () => void;
  className?: string;
}

export const ProfileAppIcon: React.FC<ProfileAppIconProps> = ({
  label = 'profile',
  onClick,
  className = '',
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`desktop-icon-btn group focus:outline-none ${className}`}
      aria-label={`Open ${label}`}
    >
      <div className="w-12 h-12 rounded-xl bg-olive-800 border-2 border-olive-900 flex items-center justify-center shadow-sm transition-transform duration-200 group-hover:scale-105 group-active:scale-95">
        <span className="font-serif text-2xl font-bold text-white tracking-normal leading-none select-none">
          h
        </span>
      </div>
      <span className="font-mono text-xs font-semibold text-olive-900 tracking-wide text-center group-hover:text-copper transition-colors">
        {label}
      </span>
    </button>
  );
};
