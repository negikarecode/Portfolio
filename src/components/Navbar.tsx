import React, { useState, useEffect } from 'react';
import { Download, Mail, Menu, X, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { useWindows } from '../context/WindowContext';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [time, setTime] = useState<{ hours: string; minutes: string } | null>(null);
  const { activeWindowId, closedWindows, restoreWindow } = useWindows();
  const navContainerRef = React.useRef<HTMLElement>(null);
  const [sliderStyle, setSliderStyle] = useState<{ left: number; width: number; opacity: number }>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Retro system clock
    const updateClock = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      setTime({ hours, minutes });
    };
    updateClock();
    const interval = setInterval(updateClock, 10000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  const navLinks = [
    { id: 'portfolio-window', label: 'C:\\profile', href: '#portfolio-window' },
    { id: 'works-window', label: 'C:\\works', href: '#works-window' },
    { id: 'tools-window', label: 'C:\\tools', href: '#tools-window' },
    { id: 'experience-window', label: 'C:\\experience', href: '#experience-window' },
    { id: 'education-window', label: 'C:\\education', href: '#education-window' },
    { id: 'contact-window', label: 'C:\\contact', href: '#contact-window' },
  ];

  // Update sliding highlight indicator position
  useEffect(() => {
    if (!navContainerRef.current) return;
    const activeBtn = navContainerRef.current.querySelector<HTMLButtonElement>(`[data-nav-id="${activeWindowId}"]`);
    if (activeBtn) {
      setSliderStyle({
        left: activeBtn.offsetLeft,
        width: activeBtn.offsetWidth,
        opacity: 1,
      });
    }
  }, [activeWindowId]);

  // Handle ESC key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const id = href.replace('#', '');
    if (closedWindows[id]) {
      restoreWindow(id);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-1.5 sm:py-2 px-3 sm:px-6 lg:px-8 ${
        isScrolled
          ? 'bg-graph-bg/95 backdrop-blur-md border-b-2 border-olive-900/20 shadow-xs'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-1.5 sm:gap-3">
        {/* Left: OS Monogram / System Brand */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <a
            href="#profile"
            className="flex items-center gap-1.5 bg-olive-900 text-white px-2.5 sm:px-3 py-1 rounded-sm text-xs font-mono font-bold tracking-wider hover:bg-copper transition-colors shadow-retro-sm focus-visible:ring-2 focus-visible:ring-olive-900 focus-visible:outline-none shrink-0"
            aria-label="ARYAN.SYS — Portfolio Home"
          >
            <Terminal className="w-3.5 h-3.5 text-peach shrink-0" aria-hidden="true" />
            <span className="truncate">ARYAN.SYS</span>
          </a>

          {/* Desktop Navigation Links: Visible only >= 900px */}
          <nav ref={navContainerRef} className="relative hidden min-[900px]:flex items-center gap-1.5 p-0.5" aria-label="System Navigation">
            {/* Sliding highlight indicator */}
            <div
              className="absolute top-0.5 bottom-0.5 bg-olive-900 rounded-xs pointer-events-none transition-all duration-200 ease-out shadow-xs"
              style={{
                transform: `translateX(${sliderStyle.left}px)`,
                width: `${sliderStyle.width}px`,
                opacity: sliderStyle.opacity,
              }}
              aria-hidden="true"
            />
            {navLinks.map((link) => {
              const isActive = link.id === activeWindowId;
              return (
                <button
                  key={link.label}
                  data-nav-id={link.id}
                  type="button"
                  onClick={() => handleNavClick(link.href)}
                  className={`relative z-10 px-2.5 py-1 text-xs font-mono font-medium rounded-xs transition-colors duration-150 active:translate-y-0.5 focus-visible:ring-2 focus-visible:ring-olive-900 focus-visible:outline-none ${
                    isActive
                      ? 'text-white font-bold'
                      : 'text-olive-800 hover:text-olive-950 bg-white/60 hover:bg-peach/30 border border-olive-900/15'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Right: Retro System Clock & Action CTAs */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
          {/* OS Clock with Blinking Colon (paused when tab hidden) */}
          {time && (
            <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 bg-white/70 border border-olive-900/20 rounded-sm font-mono text-xs text-olive-800 select-none">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dot-pulse-slow" aria-hidden="true" />
              <span>
                {time.hours}
                <span className="clock-colon mx-0.5 font-bold">:</span>
                {time.minutes}
              </span>
            </div>
          )}

          {/* Resume CTA */}
          <a
            href={portfolioData.personal.resumePdfUrl}
            download="Aryan_Negi_Resume.pdf"
            className="inline-flex items-center justify-center gap-1 px-2 sm:px-3 py-1 min-h-[34px] sm:min-h-[38px] text-[11px] sm:text-xs font-mono font-bold bg-white text-olive-900 border-2 border-olive-900 rounded-sm hover:bg-peach transition-all duration-150 shadow-retro-sm active:translate-x-0.5 active:translate-y-0.5 active:shadow-none focus-visible:ring-2 focus-visible:ring-olive-900 focus-visible:outline-none"
            title="Download Aryan's Resume (PDF)"
          >
            <Download className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" aria-hidden="true" />
            <span>RESUME</span>
          </a>

          {/* Contact CTA */}
          <button
            type="button"
            onClick={() => handleNavClick('#contact-window')}
            className="inline-flex items-center justify-center gap-1 px-2.5 sm:px-3.5 py-1 min-h-[34px] sm:min-h-[38px] text-[11px] sm:text-xs font-mono font-bold bg-olive-900 text-white rounded-sm border-2 border-olive-900 hover:bg-copper transition-all duration-150 shadow-retro-sm active:translate-x-0.5 active:translate-y-0.5 active:shadow-none focus-visible:ring-2 focus-visible:ring-olive-900 focus-visible:outline-none"
          >
            <Mail className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" aria-hidden="true" />
            <span>CONTACT</span>
          </button>

          {/* Mobile Menu Toggle (Visible under 900px) */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="min-[900px]:hidden p-1.5 sm:p-2 rounded-sm border-2 border-olive-900 bg-white text-olive-900 hover:bg-olive-100 min-h-[34px] min-w-[34px] sm:min-h-[38px] sm:min-w-[38px] flex items-center justify-center focus-visible:ring-2 focus-visible:ring-olive-900 focus-visible:outline-none shrink-0"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open System Navigation Menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-drawer"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile / Tablet Drawer Menu under 900px */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          role="dialog"
          aria-label="Navigation Menu"
          className="min-[900px]:hidden mt-2 p-4 bg-white/98 backdrop-blur-md border-2 border-olive-900 shadow-retro rounded-lg transition-all animate-in fade-in slide-in-from-top-2"
        >
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-olive-900/15">
            <span className="font-mono text-xs font-bold text-copper uppercase tracking-wider">
              System Directory
            </span>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs font-mono text-olive-700 hover:text-olive-950 px-1 py-0.5"
              aria-label="Close menu"
            >
              [close]
            </button>
          </div>

          <nav className="flex flex-col gap-1.5" aria-label="Mobile Section Navigation">
            {navLinks.map((link) => (
              <button
                key={link.label}
                type="button"
                onClick={() => handleNavClick(link.href)}
                className="text-left px-3 py-2 text-xs font-mono font-semibold text-olive-900 hover:bg-peach/30 rounded-sm border border-transparent hover:border-olive-900/20 transition-colors focus-visible:ring-2 focus-visible:ring-olive-900 focus-visible:outline-none"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-2 mt-1 border-t border-olive-900/15 flex gap-2">
              <a
                href={portfolioData.personal.resumePdfUrl}
                download="Aryan_Negi_Resume.pdf"
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 min-h-[44px] text-xs font-mono font-bold bg-peach text-olive-950 border border-olive-900 rounded-sm hover:bg-peach-dark hover:text-white transition-colors"
              >
                <Download className="w-3.5 h-3.5" aria-hidden="true" />
                <span>RESUME (PDF)</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
