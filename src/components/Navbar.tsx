import React, { useState, useEffect } from 'react';
import { Download, Mail, Menu, X, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [time, setTime] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Retro system clock
    const updateClock = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    };
    updateClock();
    const interval = setInterval(updateClock, 30000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  const navLinks = [
    { label: 'C:\\profile', href: '#profile' },
    { label: 'C:\\works', href: '#works' },
    { label: 'C:\\tools', href: '#tools' },
    { label: 'C:\\experience', href: '#experience' },
    { label: 'C:\\education', href: '#education' },
    { label: 'C:\\contact', href: '#contact' },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-2.5 px-4 sm:px-6 lg:px-8 ${
        isScrolled
          ? 'bg-graph-bg/95 backdrop-blur-md border-b-2 border-olive-900/20 shadow-xs'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
        {/* Left: OS Monogram / System Brand */}
        <div className="flex items-center gap-3">
          <a
            href="#profile"
            className="flex items-center gap-2 bg-olive-900 text-white px-3 py-1 rounded-sm text-xs font-mono font-bold tracking-wider hover:bg-copper transition-colors shadow-retro-sm"
          >
            <Terminal className="w-3.5 h-3.5 text-peach" />
            <span>ARYAN.SYS</span>
          </a>

          {/* Desktop Navigation Links (DOS path style) */}
          <nav className="hidden md:flex items-center gap-1.5" aria-label="System Navigation">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="px-2.5 py-1 text-xs font-mono font-medium text-olive-800 hover:text-olive-950 bg-white/60 hover:bg-peach/30 border border-olive-900/15 rounded-sm transition-all duration-150 active:translate-y-0.5"
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Right: Retro System Clock & Action CTAs */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* OS Clock */}
          {time && (
            <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 bg-white/70 border border-olive-900/20 rounded-sm font-mono text-xs text-olive-800">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
              <span>{time}</span>
            </div>
          )}

          {/* Resume CTA */}
          <a
            href={portfolioData.personal.resumePdfUrl}
            download="Aryan_Negi_Resume.pdf"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono font-bold bg-white text-olive-900 border-2 border-olive-900 rounded-sm hover:bg-peach transition-all duration-150 shadow-retro-sm active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
            title="Download Aryan's Resume (PDF)"
          >
            <Download className="w-3.5 h-3.5" />
            <span>RESUME</span>
          </a>

          {/* Contact CTA */}
          <button
            onClick={() => handleNavClick('#contact')}
            className="inline-flex items-center gap-1.5 px-3.5 py-1 text-xs font-mono font-bold bg-olive-900 text-white rounded-sm border-2 border-olive-900 hover:bg-copper transition-all duration-150 shadow-retro-sm active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>CONTACT</span>
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-sm border-2 border-olive-900 bg-white text-olive-900 hover:bg-olive-100"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 p-4 bg-white/95 backdrop-blur-md border-2 border-olive-900 shadow-retro rounded-lg transition-all">
          <nav className="flex flex-col gap-2" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-left px-3 py-2 text-xs font-mono font-semibold text-olive-900 hover:bg-peach/30 rounded-sm border border-transparent hover:border-olive-900/20 transition-colors"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-2 border-t border-olive-900/10 flex gap-2">
              <a
                href={portfolioData.personal.resumePdfUrl}
                download="Aryan_Negi_Resume.pdf"
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 text-xs font-mono font-bold bg-peach text-olive-950 border border-olive-900 rounded-sm"
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
