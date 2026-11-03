import React from 'react';
import { User } from 'lucide-react';

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
      className={`desktop-icon-btn group focus-visible:ring-2 focus-visible:ring-olive-900 focus-visible:outline-none rounded-lg p-2 ${className}`}
      aria-label={`Open ${label} window`}
    >
      <div className="w-12 h-12 rounded-xl bg-olive-800 border-2 border-olive-900 flex items-center justify-center shadow-sm transition-transform duration-200 group-hover:scale-105 group-active:scale-95">
        <User className="w-6 h-6 text-white stroke-[2.2]" aria-hidden="true" />
      </div>
      <span className="font-mono text-xs font-semibold text-olive-900 tracking-wide text-center group-hover:text-copper transition-colors">
        {label}
      </span>
    </button>
  );
};
