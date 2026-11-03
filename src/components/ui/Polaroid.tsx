import React from 'react';
import { WashiTape } from './WashiTape';

interface PolaroidProps {
  imageSrc?: string;
  imageAlt?: string;
  caption?: string;
  className?: string;
  angle?: number;
  tapePosition?: 'top-left' | 'top-right' | 'top-center';
  children?: React.ReactNode;
}

export const Polaroid: React.FC<PolaroidProps> = ({
  imageSrc,
  imageAlt = 'Polaroid photo',
  caption,
  className = '',
  angle = -1.5,
  tapePosition = 'top-center',
  children,
}) => {
  return (
    <div
      className={`polaroid-card relative inline-block group select-none ${className}`}
      style={{ transform: `rotate(${angle}deg)` }}
    >
      {/* Tape */}
      {tapePosition === 'top-center' && (
        <WashiTape className="-top-3 left-1/2 -translate-x-1/2" angle={-1} width={65} />
      )}
      {tapePosition === 'top-left' && (
        <WashiTape className="-top-3 -left-3" angle={-25} width={60} />
      )}
      {tapePosition === 'top-right' && (
        <WashiTape className="-top-3 -right-3" angle={25} width={60} />
      )}

      {/* Image or Custom Content */}
      <div className="bg-ink-100 overflow-hidden relative">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          children
        )}
      </div>

      {/* Caption in handwriting */}
      {caption && (
        <p className="font-handwriting text-lg text-ink-700 mt-2 text-center leading-tight">
          {caption}
        </p>
      )}
    </div>
  );
};
