import React, { useState } from 'react';
import { User } from 'lucide-react';

interface ProfileAppIconProps {
  label?: string;
  onClick?: () => void;
  className?: string;
  staggerIndex?: number;
}

export const ProfileAppIcon: React.FC<ProfileAppIconProps> = ({
  label = 'profile',
  onClick,
  className = '',
  staggerIndex = 0,
}) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleClick = () => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      onClick?.();
      return;
    }

    setIsOpening(true);
    if (onClick) {
      setTimeout(() => {
        setIsOpening(false);
        onClick();
      }, 150);
    } else {
      setTimeout(() => {
        setIsOpening(false);
      }, 150);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`desktop-icon-btn desktop-folder-item folder-idle-float group focus-visible:ring-2 focus-visible:ring-olive-900 focus-visible:outline-none rounded-lg p-2 ${className}`}
      style={{ ['--stagger-idx' as any]: staggerIndex }}
      aria-label={`Open ${label} window`}
    >
      <div className={`w-12 h-12 rounded-xl bg-olive-800 border-2 border-olive-900 flex items-center justify-center shadow-sm desktop-folder-graphic ${isOpening ? 'folder-opening' : ''}`}>
        <User className="w-6 h-6 text-white stroke-[2.2]" aria-hidden="true" />
      </div>
      <span className="font-mono text-xs font-semibold text-olive-900 tracking-wide text-center group-hover:text-copper transition-colors">
        {label}
      </span>
    </button>
  );
};
