import React from 'react';
import { Download, Mail, MapPin, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { RetroWindow } from './ui/RetroWindow';
import { DesktopFolder } from './ui/DesktopFolder';
import { ProfileAppIcon } from './ui/ProfileAppIcon';
import { DockBar } from './ui/DockBar';

export const Hero: React.FC = () => {
  const { personal } = portfolioData;

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="profile" className="pt-2 sm:pt-4 pb-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* 1. TOP DESKTOP SCREEN (Hero Headline, Folders & Quick CTAs) */}
      <div className="relative py-4 sm:py-6 border-b-2 border-dashed border-olive-900/20 mb-8 sm:mb-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-6">
          {/* Left Desktop Folders (Desktop: vertical column; Mobile: horizontal row) */}
          <div className="flex lg:flex-col items-center justify-center gap-2 sm:gap-4 shrink-0 order-2 lg:order-1">
            <ProfileAppIcon label="profile" onClick={() => scrollToSection('portfolio-window')} />
            <DesktopFolder label="works" onClick={() => scrollToSection('works-window')} />
            <DesktopFolder label="tools" onClick={() => scrollToSection('tools-window')} />
          </div>

          {/* Center: Candidate Name in Serif Display with clamp() */}
          <div className="text-center order-1 lg:order-2 flex-1 my-1 px-2 max-w-full overflow-hidden">
            <h1 className="font-serif text-[clamp(2.25rem,6.5vw,5.5rem)] text-olive-800 tracking-wider font-normal uppercase select-none leading-none break-words">
              {personal.name}
            </h1>

            {/* Subtitle & Status Chip */}
            <div className="mt-2.5 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-mono text-olive-800">
              <span className="tracking-widest uppercase font-semibold">
                C:\ARYAN\DESKTOP // FULL STACK DEVELOPER
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300 font-mono text-xs font-bold shadow-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" aria-hidden="true" />
                <span>Open to roles</span>
              </span>
            </div>

            {/* First Viewport Primary CTAs */}
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => scrollToSection('contact-window')}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 min-h-[44px] bg-olive-900 text-white font-mono text-xs sm:text-sm font-bold rounded-sm border-2 border-olive-900 hover:bg-copper transition-all duration-150 shadow-retro-sm active:translate-x-0.5 active:translate-y-0.5 active:shadow-none focus-visible:ring-2 focus-visible:ring-olive-900 focus-visible:outline-none"
              >
                <Mail className="w-4 h-4" aria-hidden="true" />
                <span>Contact me</span>
              </button>

              <a
                href={personal.resumePdfUrl}
                download="Aryan_Negi_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 min-h-[44px] bg-white text-olive-900 font-mono text-xs sm:text-sm font-bold rounded-sm border-2 border-olive-900 hover:bg-peach-light transition-all duration-150 shadow-retro-sm active:translate-x-0.5 active:translate-y-0.5 active:shadow-none focus-visible:ring-2 focus-visible:ring-olive-900 focus-visible:outline-none"
                title="Download Aryan's Resume (PDF)"
              >
                <Download className="w-4 h-4" aria-hidden="true" />
                <span>Download resume</span>
              </a>
            </div>
          </div>

          {/* Right Desktop Folders */}
          <div className="flex lg:flex-col items-center justify-center gap-2 sm:gap-4 shrink-0 order-3">
            <DesktopFolder label="experience" onClick={() => scrollToSection('experience-window')} />
            <DesktopFolder label="education" onClick={() => scrollToSection('education-window')} />
            <DesktopFolder
              label="resume"
              href={personal.resumePdfUrl}
              download="Aryan_Negi_Resume.pdf"
            />
          </div>
        </div>

        {/* Center Single Social Dock (LinkedIn & GitHub only) */}
        <div className="mt-6 flex justify-center">
          <DockBar />
        </div>
      </div>

      {/* 2. PROFILE WINDOW (Starts Peeking Above the Fold on 1440x900) */}
      <div className="max-w-3xl mx-auto">
        <RetroWindow
          id="portfolio-window"
          title="C:\ARYAN\portfolio"
          showAccentBar={false}
          className="shadow-retro-lg"
        >
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8">
            {/* Left: Circular Avatar with Alt Text */}
            <div className="relative shrink-0">
              <div
                className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-olive-900 bg-olive-100 overflow-hidden shadow-sm flex items-center justify-center relative"
                aria-label="Aryan Negi initials avatar"
              >
                <div className="w-full h-full bg-gradient-to-br from-olive-100 via-peach-light/40 to-olive-200 flex flex-col items-center justify-center p-4 text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-olive-800 text-white flex items-center justify-center font-serif text-3xl sm:text-4xl shadow-inner mb-1 border-2 border-olive-900 select-none">
                    AN
                  </div>
                  <span className="font-mono text-xs font-bold text-olive-900 bg-white/90 px-2 py-0.5 rounded-full border border-olive-300">
                    New Delhi, IN 🇮🇳
                  </span>
                </div>
              </div>

              {/* Status Badge */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-emerald-100 text-emerald-900 border-2 border-olive-900 px-2.5 py-0.5 rounded-full text-xs font-mono font-bold whitespace-nowrap shadow-xs flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
                <span>ONLINE</span>
              </div>
            </div>

            {/* Right: Bio & Profile Details */}
            <div className="flex-1 text-center sm:text-left space-y-2.5">
              <span className="font-mono text-sm sm:text-base text-olive-800 block font-medium">
                hi! i'm
              </span>

              {/* Name in Copper Orange Serif */}
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-copper leading-tight tracking-normal">
                {personal.firstName} {personal.lastName}
              </h2>

              <p className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-olive-900">
                I'M A {personal.title.toUpperCase()}
              </p>

              {/* Positioning Quote */}
              <blockquote className="font-serif italic text-base sm:text-lg text-olive-800 pt-1 leading-snug">
                "{personal.positioning}"
              </blockquote>

              {/* High Readability Paragraph: line-height 1.6-1.7, font-size >= 16px, letter-spacing 0 */}
              <p className="text-base text-olive-900 pt-1 leading-[1.65] font-sans tracking-normal">
                {personal.bio.short}
              </p>

              {/* Metadata Badges */}
              <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-2.5 text-xs font-mono text-olive-900">
                <span className="inline-flex items-center gap-1.5 bg-olive-100 px-3 py-1 rounded-sm border border-olive-900/20 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-copper" aria-hidden="true" />
                  <span>{personal.location}</span>
                </span>
                <span className="inline-flex items-center gap-1.5 bg-peach-light/40 px-3 py-1 rounded-sm border border-olive-900/20 font-medium">
                  <Sparkles className="w-3.5 h-3.5 text-copper" aria-hidden="true" />
                  <span>Delhi University</span>
                </span>
              </div>

              {/* Window CTAs */}
              <div className="pt-4 flex flex-wrap items-center justify-center sm:justify-start gap-3">
                <button
                  type="button"
                  onClick={() => scrollToSection('contact-window')}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 min-h-[44px] bg-olive-900 text-white font-mono text-xs sm:text-sm font-bold rounded-sm border-2 border-olive-900 hover:bg-copper transition-all duration-150 shadow-retro-sm active:translate-x-0.5 active:translate-y-0.5 active:shadow-none focus-visible:ring-2 focus-visible:ring-olive-900 focus-visible:outline-none"
                >
                  <Mail className="w-4 h-4" aria-hidden="true" />
                  <span>Contact me</span>
                </button>

                <a
                  href={personal.resumePdfUrl}
                  download="Aryan_Negi_Resume.pdf"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 min-h-[44px] bg-white text-olive-900 font-mono text-xs sm:text-sm font-bold rounded-sm border-2 border-olive-900 hover:bg-peach-light transition-all duration-150 shadow-retro-sm active:translate-x-0.5 active:translate-y-0.5 active:shadow-none focus-visible:ring-2 focus-visible:ring-olive-900 focus-visible:outline-none"
                  title="Download Aryan's Resume (PDF)"
                >
                  <Download className="w-4 h-4" aria-hidden="true" />
                  <span>Download resume</span>
                </a>
              </div>
            </div>
          </div>
        </RetroWindow>
      </div>
    </section>
  );
};
