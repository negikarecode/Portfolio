import React from 'react';
import { motion } from 'framer-motion';
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
    <section id="profile" className="pt-8 sm:pt-14 pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* 1. TOP DESKTOP SCREEN (Matching Panel 1 of Design 2) */}
      <div className="relative py-8 sm:py-12 border-b-2 border-dashed border-olive-900/20 mb-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
          {/* Left Desktop Icons */}
          <div className="flex lg:flex-col items-center justify-center gap-4 sm:gap-6 shrink-0 order-2 lg:order-1">
            <ProfileAppIcon label="profile" onClick={() => scrollToSection('profile')} />
            <DesktopFolder label="works" onClick={() => scrollToSection('works')} />
            <DesktopFolder label="experience" onClick={() => scrollToSection('experience')} />
          </div>

          {/* Center: Grand Serif PORTFOLIO Display (From Design 2) */}
          <div className="text-center order-1 lg:order-2 flex-1 my-2 px-2">
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-olive-600/90 tracking-widest font-normal uppercase select-none leading-none">
              PORTFOLIO
            </h1>
            <p className="font-mono text-xs sm:text-sm text-olive-700 mt-2 tracking-widest uppercase">
              C:\ARYAN\DESKTOP // FULL STACK DEVELOPER
            </p>
          </div>

          {/* Right Desktop Icons */}
          <div className="flex lg:flex-col items-center justify-center gap-4 sm:gap-6 shrink-0 order-3">
            <DesktopFolder label="contact" onClick={() => scrollToSection('contact')} />
            <DesktopFolder
              label="resume"
              href={personal.resumePdfUrl}
              download="Aryan_Negi_Resume.pdf"
            />
            <DesktopFolder label="tools" onClick={() => scrollToSection('tools')} />
          </div>
        </div>

        {/* Center Dock Bar (Matching Design 2 Panel 1) */}
        <div className="mt-8 sm:mt-10 flex justify-center">
          <DockBar />
        </div>
      </div>

      {/* 2. PROFILE WINDOW (Matching Panel 2 C:\ELAINE\portfolio of Design 2) */}
      <motion.div
        initial={{ opacity: 0.95, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="max-w-3xl mx-auto"
      >
        <RetroWindow
          id="portfolio-window"
          title="C:\ARYAN\portfolio"
          showAccentBar={false}
          className="shadow-retro-lg"
        >
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 sm:gap-10">
            {/* Left: Circular Avatar Photo with dark outline (From Design 2) */}
            <div className="relative shrink-0">
              <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full border-4 border-olive-900 bg-olive-100 overflow-hidden shadow-sm flex items-center justify-center relative">
                {/* Stylized Developer Avatar */}
                <div className="w-full h-full bg-gradient-to-br from-olive-100 via-peach-light/40 to-olive-200 flex flex-col items-center justify-center p-4 text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-olive-800 text-white flex items-center justify-center font-serif text-3xl sm:text-4xl shadow-inner mb-1 border-2 border-olive-900">
                    AN
                  </div>
                  <span className="font-mono text-[11px] font-bold text-olive-900 bg-white/90 px-2 py-0.5 rounded-full border border-olive-300">
                    Delhi, IN 🇮🇳
                  </span>
                </div>
              </div>

              {/* Status Badge */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-emerald-100 text-emerald-900 border-2 border-olive-900 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold whitespace-nowrap shadow-xs flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>ONLINE</span>
              </div>
            </div>

            {/* Right: Bio & Name Hierarchy (Matching Design 2 typography) */}
            <div className="flex-1 text-center sm:text-left space-y-2">
              <span className="font-mono text-sm sm:text-base text-olive-700 block font-medium">
                hi! i'm
              </span>

              {/* Candidate Name in Copper Orange */}
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-copper leading-tight tracking-tight">
                {personal.firstName} {personal.lastName}
              </h2>

              {/* Role Title */}
              <p className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-olive-800">
                I'M A {personal.title.toUpperCase()}
              </p>

              {/* Quote / Positioning statement */}
              <blockquote className="font-serif italic text-base sm:text-lg text-olive-700 pt-1 leading-snug">
                "{personal.positioning}"
              </blockquote>

              <p className="text-xs sm:text-sm font-sans text-olive-800 pt-1 leading-relaxed">
                {personal.bio.short}
              </p>

              {/* Metadata tags */}
              <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-2 text-xs font-mono text-olive-800">
                <span className="inline-flex items-center gap-1 bg-olive-100 px-2.5 py-1 rounded-sm border border-olive-900/20 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-copper" />
                  <span>{personal.location}</span>
                </span>
                <span className="inline-flex items-center gap-1 bg-peach-light/40 px-2.5 py-1 rounded-sm border border-olive-900/20 font-medium">
                  <Sparkles className="w-3.5 h-3.5 text-copper" />
                  <span>Delhi University</span>
                </span>
              </div>

              {/* CTAs */}
              <div className="pt-5 flex flex-wrap items-center justify-center sm:justify-start gap-3">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-olive-900 text-white font-mono text-xs sm:text-sm font-bold rounded-sm border-2 border-olive-900 hover:bg-copper transition-all duration-150 shadow-retro-sm active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
                >
                  <Mail className="w-4 h-4" />
                  <span>CONTACT ME</span>
                </button>

                <a
                  href={personal.resumePdfUrl}
                  download="Aryan_Negi_Resume.pdf"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-olive-900 font-mono text-xs sm:text-sm font-bold rounded-sm border-2 border-olive-900 hover:bg-peach-light transition-all duration-150 shadow-retro-sm active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
                  title="Download Aryan's Resume (PDF)"
                >
                  <Download className="w-4 h-4" />
                  <span>DOWNLOAD RESUME</span>
                </a>
              </div>
            </div>
          </div>
        </RetroWindow>
      </motion.div>
    </section>
  );
};
