import React from 'react';

interface WashiTapeProps {
  className?: string;
  angle?: number;
  width?: string | number;
}

export const WashiTape: React.FC<WashiTapeProps> = ({
  className = '',
  angle = -2,
  width = '70px',
}) => {
  return (
    <div
      aria-hidden="true"
      className={`washi-tape ${className}`}
      style={{
        width: typeof width === 'number' ? `${width}px` : width,
        transform: `rotate(${angle}deg)`,
      }}
    />
  );
};
