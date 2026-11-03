import React, { useEffect, useRef, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { ProjectScreenshot } from '../../types';

interface ImageLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  images: ProjectScreenshot[];
  currentIndex: number;
  onNavigate: (newIndex: number) => void;
  projectTitle: string;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({
  isOpen,
  onClose,
  images,
  currentIndex,
  onNavigate,
  projectTitle,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const lastActiveElementRef = useRef<HTMLElement | null>(null);

  const currentImage = images[currentIndex];
  const hasMultiple = images.length > 1;

  // Track previous active element for focus restoration
  useEffect(() => {
    if (isOpen) {
      lastActiveElementRef.current = document.activeElement as HTMLElement;
      // Lock background scrolling
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      // Focus close button on mount
      setTimeout(() => {
        closeBtnRef.current?.focus();
      }, 50);

      return () => {
        document.body.style.overflow = originalOverflow;
        const prevEl = lastActiveElementRef.current;
        setTimeout(() => {
          if (prevEl && typeof prevEl.focus === 'function') {
            prevEl.focus();
          }
        }, 20);
      };
    }
  }, [isOpen]);

  const handlePrev = useCallback(() => {
    if (!hasMultiple) return;
    const nextIdx = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    onNavigate(nextIdx);
  }, [currentIndex, images.length, hasMultiple, onNavigate]);

  const handleNext = useCallback(() => {
    if (!hasMultiple) return;
    const nextIdx = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    onNavigate(nextIdx);
  }, [currentIndex, images.length, hasMultiple, onNavigate]);

  // Handle keyboard navigation (Esc, ArrowLeft, ArrowRight, Tab focus trap)
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
        return;
      }

      if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNext();
        return;
      }

      if (e.key === 'Tab' && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, handlePrev, handleNext]);

  if (!isOpen || !currentImage) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${projectTitle} screenshot preview lightbox`}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-olive-950/80 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        ref={modalRef}
        className="w-full max-w-4xl max-h-[92vh] flex flex-col bg-cream border-2 border-olive-900 rounded-lg shadow-retro-xl overflow-hidden animate-in zoom-in-95 duration-150"
      >
        {/* Retro Window Titlebar */}
        <div className="bg-olive-800 text-[#F4EEDB] px-3 sm:px-4 py-2 flex items-center justify-between border-b-2 border-olive-900 select-none">
          <div className="flex items-center gap-2 overflow-hidden">
            <span className="w-2.5 h-2.5 rounded-full bg-peach border border-olive-900/30" />
            <span className="font-mono text-xs sm:text-sm font-bold tracking-wider truncate text-[#F4EEDB]">
              preview:\{projectTitle.toLowerCase().replace(/\s+/g, '-')}\{currentIndex + 1}.img
            </span>
            {hasMultiple && (
              <span className="hidden sm:inline-block font-mono text-[11px] px-2 py-0.5 bg-olive-900/80 text-peach rounded-xs border border-olive-700/60 ml-2">
                [{currentIndex + 1} of {images.length}]
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              ref={closeBtnRef}
              type="button"
              onClick={onClose}
              aria-label="Close preview"
              className="inline-flex items-center justify-center w-8 h-8 rounded-sm bg-olive-900 text-white hover:bg-peach hover:text-olive-950 border border-olive-700 transition-colors focus-visible:ring-2 focus-visible:ring-peach focus-visible:outline-none"
            >
              <X className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Modal Body / Image Viewer */}
        <div className="relative flex-1 bg-olive-950 flex items-center justify-center p-2 sm:p-4 min-h-[260px] max-h-[68vh] overflow-hidden">
          <img
            key={currentImage.src}
            src={currentImage.src}
            alt={currentImage.alt}
            width={currentImage.width}
            height={currentImage.height}
            className="max-h-[64vh] w-auto max-w-full object-contain rounded-sm shadow-md transition-all duration-200 animate-in fade-in slide-in-from-right-3"
          />

          {/* Navigation Arrows for Multi-image */}
          {hasMultiple && (
            <>
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous screenshot"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-sm bg-olive-900/90 text-white hover:bg-peach hover:text-olive-950 border border-olive-700 flex items-center justify-center transition-all shadow-retro-sm focus-visible:ring-2 focus-visible:ring-peach focus-visible:outline-none"
              >
                <ChevronLeft className="w-6 h-6" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={handleNext}
                aria-label="Next screenshot"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-sm bg-olive-900/90 text-white hover:bg-peach hover:text-olive-950 border border-olive-700 flex items-center justify-center transition-all shadow-retro-sm focus-visible:ring-2 focus-visible:ring-peach focus-visible:outline-none"
              >
                <ChevronRight className="w-6 h-6" aria-hidden="true" />
              </button>
            </>
          )}
        </div>

        {/* Modal Footer / Caption */}
        <div className="bg-olive-50 p-3 sm:p-4 border-t-2 border-olive-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs sm:text-sm font-sans">
          <div className="flex items-start gap-2 max-w-2xl">
            <Maximize2 className="w-4 h-4 text-copper shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <p className="font-semibold text-olive-950 leading-snug">
                {currentImage.caption}
              </p>
              <p className="font-mono text-[11px] text-olive-700 mt-0.5">
                {currentImage.width} × {currentImage.height}px • {currentImage.src.endsWith('.webp') ? 'WebP compressed' : 'Lossless PNG'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 self-end sm:self-auto shrink-0 font-mono text-xs">
            {hasMultiple && (
              <span className="sm:hidden font-mono text-xs text-olive-800 font-semibold mr-1">
                {currentIndex + 1} / {images.length}
              </span>
            )}
            <button
              type="button"
              onClick={onClose}
              className="px-3 py-1.5 min-h-[36px] bg-white border border-olive-900/40 hover:border-olive-900 text-olive-900 font-bold rounded-xs transition-colors focus-visible:ring-2 focus-visible:ring-olive-900 focus-visible:outline-none"
            >
              Close [Esc]
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
