import React, { useState, useEffect } from 'react';
import { Download, Mail, Menu, X } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface NavbarProps {
  onContactClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: '# HOME', href: '#home' },
    { label: '# ABOUT', href: '#about' },
    { label: '# EXPERIENCE', href: '#experience' },
    { label: '# WORKS', href: '#projects' },
    { label: '# SKILLS', href: '#skills' },
    { label: '# EDUCATION', href: '#education' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 px-4 sm:px-6 lg:px-8 ${
        isScrolled
          ? 'bg-paper/90 backdrop-blur-md border-b border-ink-950/10 shadow-xs'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
        {/* Left: Window Tabs / Navigation Pills */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Logo / Monogram */}
          <a
            href="#home"
            className="flex items-center gap-2 bg-ink-950 text-white px-3 py-1 rounded-sm text-xs font-mono font-bold tracking-wider hover:bg-ink-800 transition-colors shadow-xs"
          >
            <span className="w-2 h-2 rounded-full bg-brand-yellow inline-block animate-pulse" />
            <span>AN.DEV</span>
          </a>

          {/* Desktop Navigation Tabs */}
          <nav className="hidden md:flex items-center gap-1.5 ml-2" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="px-2.5 py-1 text-xs font-mono font-medium text-ink-700 hover:text-ink-950 bg-white/70 hover:bg-brand-yellow/80 border border-ink-950/15 rounded-sm transition-all duration-150 shadow-xs active:translate-y-0.5"
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Right: Retro Window Controls + Action CTAs */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* macOS window dots */}
          <div className="hidden sm:flex items-center gap-1.5 px-2 py-1 bg-white/60 border border-ink-950/10 rounded-full" aria-hidden="true">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-400 border border-rose-500" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 border border-amber-500" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 border border-emerald-500" />
          </div>

          {/* Resume Download CTA */}
          <a
            href={portfolioData.personal.resumePdfUrl}
            download="Aryan_Negi_Resume.pdf"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono font-semibold bg-white text-ink-950 border border-ink-950 rounded-sm hover:bg-brand-yellow transition-all duration-150 shadow-brutal-sm active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
            title="Download Aryan's Resume (PDF)"
          >
            <Download className="w-3.5 h-3.5" />
            <span>RESUME</span>
          </a>

          {/* Contact Button */}
          <button
            onClick={() => {
              if (onContactClick) onContactClick();
              else handleNavClick('#contact');
            }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1 text-xs font-mono font-bold bg-ink-950 text-white rounded-sm hover:bg-brand-blue transition-all duration-150 shadow-brutal-sm active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>CONTACT</span>
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-sm border border-ink-950/20 bg-white text-ink-950 hover:bg-ink-100"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 p-4 bg-white/95 backdrop-blur-md border border-ink-950 shadow-brutal rounded-sm transition-all animate-in fade-in slide-in-from-top-2">
          <nav className="flex flex-col gap-2" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-left px-3 py-2 text-xs font-mono font-semibold text-ink-800 hover:bg-brand-yellow rounded-sm border border-transparent hover:border-ink-950/20 transition-colors"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-2 border-t border-ink-200 flex gap-2">
              <a
                href={portfolioData.personal.resumePdfUrl}
                download="Aryan_Negi_Resume.pdf"
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 text-xs font-mono font-semibold bg-brand-yellow text-ink-950 border border-ink-950 rounded-sm"
              >
                <Download className="w-3.5 h-3.5" />
                <span>RESUME (PDF)</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
