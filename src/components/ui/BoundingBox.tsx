import React from 'react';

interface BoundingBoxProps {
  children: React.ReactNode;
  className?: string;
  borderColor?: string;
  showHandles?: boolean;
  label?: string;
}

export const BoundingBox: React.FC<BoundingBoxProps> = ({
  children,
  className = '',
  borderColor = 'border-brand-blue/60',
  showHandles = true,
  label,
}) => {
  return (
    <div className={`relative border border-dashed ${borderColor} p-4 sm:p-6 transition-all duration-300 ${className}`}>
      {/* Figma Selection Handles */}
      {showHandles && (
        <>
          <span className="figma-handle -top-[4px] -left-[4px]" aria-hidden="true" />
          <span className="figma-handle -top-[4px] -right-[4px]" aria-hidden="true" />
          <span className="figma-handle -bottom-[4px] -left-[4px]" aria-hidden="true" />
          <span className="figma-handle -bottom-[4px] -right-[4px]" aria-hidden="true" />
          <span className="figma-handle -top-[4px] left-1/2 -translate-x-1/2" aria-hidden="true" />
          <span className="figma-handle -bottom-[4px] left-1/2 -translate-x-1/2" aria-hidden="true" />
          <span className="figma-handle -left-[4px] top-1/2 -translate-y-1/2" aria-hidden="true" />
          <span className="figma-handle -right-[4px] top-1/2 -translate-y-1/2" aria-hidden="true" />
        </>
      )}

      {/* Floating Tag / Label */}
      {label && (
        <div className="absolute -top-3 left-4 bg-brand-blue text-white text-[10px] font-mono px-2 py-0.5 rounded-xs tracking-wider uppercase select-none pointer-events-none z-30 shadow-xs">
          {label}
        </div>
      )}

      {children}
    </div>
  );
};
