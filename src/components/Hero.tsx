import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { BoundingBox } from './ui/BoundingBox';
import { WashiTape } from './ui/WashiTape';

export const Hero: React.FC = () => {
  const { personal } = portfolioData;

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto overflow-hidden"
    >
      {/* Decorative top tags & handwriting */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6 sm:mb-8">
        <motion.div
          initial={{ opacity: 0.9, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="flex items-center gap-2"
        >
          <span className="bg-brand-mint text-ink-950 font-mono text-xs px-2.5 py-1 rounded-sm border border-ink-950/20 shadow-xs uppercase tracking-wider font-semibold">
            ✦ MAKE THINGS
          </span>
          <span className="bg-brand-yellow text-ink-950 font-mono text-xs px-2.5 py-1 rounded-sm border border-ink-950/20 shadow-xs uppercase tracking-wider font-semibold">
            ⚡ SOLVE REAL PROBLEMS
          </span>
        </motion.div>

        {/* Handwritten annotation */}
        <motion.div
          initial={{ opacity: 0.9, x: 4 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2 }}
          className="flex items-center gap-1.5 font-handwriting text-ink-700 text-xl sm:text-2xl"
        >
          <span>my name is</span>
          <span className="text-brand-blue text-2xl font-bold">↓</span>
        </motion.div>
      </div>

      {/* Main Name Bounding Box (Figma Canvas Style) */}
      <motion.div
        initial={{ opacity: 0.95, scale: 0.99 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
        className="relative my-4"
      >
        <BoundingBox
          borderColor="border-brand-blue"
          showHandles={true}
          label="DEV.PROD // 2026"
          className="bg-white/70 backdrop-blur-xs py-7 sm:py-12 px-4 sm:px-12 text-center shadow-xs"
        >
          {/* Subtle tape over top edge */}
          <WashiTape className="-top-3 left-44" angle={-1.5} width={75} />
          <WashiTape className="-top-3 right-12" angle={2} width={75} />

          {/* Availability pill above name */}
          <div className="inline-flex items-center gap-2 mb-3 bg-emerald-50 text-emerald-800 border border-emerald-300 px-3 py-0.5 rounded-full text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block" />
            <span>{personal.availability}</span>
          </div>

          {/* Candidate Name in Pixel Display Font */}
          <h1 className="font-pixel text-3xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-ink-950 font-bold leading-none select-none my-2 break-words">
            {personal.name}
          </h1>

          {/* Role & Location Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-4 text-xs sm:text-sm font-mono text-ink-700">
            <span className="bg-brand-sky/80 px-2.5 py-1 rounded-sm border border-brand-sky-border text-ink-900 font-semibold">
              {personal.title}
            </span>
            <span className="hidden sm:inline-block text-ink-400">•</span>
            <span className="flex items-center gap-1 bg-white/90 px-2.5 py-1 rounded-sm border border-ink-200 text-ink-700">
              <MapPin className="w-3.5 h-3.5 text-rose-500" />
              <span>{personal.location}</span>
            </span>
            <span className="hidden sm:inline-block text-ink-400">•</span>
            <span className="bg-brand-lavender/80 px-2.5 py-1 rounded-sm border border-brand-lavender-border text-ink-900 font-medium">
              Delhi University
            </span>
          </div>
        </BoundingBox>
      </motion.div>

      {/* Positioning Statement */}
      <motion.div
        initial={{ opacity: 0.95, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="text-center mt-6 sm:mt-8 max-w-2xl mx-auto"
      >
        <p className="text-xl sm:text-2xl md:text-3xl font-sans font-medium text-ink-900 leading-snug">
          I build software that{' '}
          <span className="relative inline-block font-semibold">
            gets out of your way.
            <span className="absolute bottom-0 left-0 w-full h-2 bg-brand-yellow/60 -z-10 rounded-sm -rotate-0.5" />
          </span>{' '}
          <span className="inline-block animate-pulse">🌸</span>
        </p>

        <p className="mt-3 text-sm sm:text-base text-ink-600 font-sans max-w-xl mx-auto leading-relaxed">
          Full Stack Developer with hands-on experience building custom Shopify themes, React web applications, and AI-driven platforms.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-8">
          {/* Primary CTA: Contact Me */}
          <button
            onClick={scrollToContact}
            className="group inline-flex items-center gap-2 px-6 py-3 bg-ink-950 text-white font-mono text-sm font-bold rounded-sm border-2 border-ink-950 hover:bg-brand-blue hover:border-brand-blue transition-all duration-200 shadow-brutal active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
          >
            <Mail className="w-4 h-4 transition-transform group-hover:scale-110" />
            <span>[ CONTACT ME ]</span>
          </button>

          {/* Secondary CTA: Download Resume */}
          <a
            href={personal.resumePdfUrl}
            download="Aryan_Negi_Resume.pdf"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-white text-ink-950 font-mono text-sm font-bold rounded-sm border-2 border-ink-950 hover:bg-brand-yellow transition-all duration-200 shadow-brutal active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
            title="Download Aryan's Resume (PDF)"
          >
            <Download className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
            <span>DOWNLOAD RESUME</span>
          </a>
        </div>

        {/* Scroll down indicator */}
        <div className="mt-12 flex justify-center">
          <a
            href="#about"
            className="inline-flex flex-col items-center gap-1 font-mono text-[11px] text-ink-500 hover:text-ink-950 transition-colors"
          >
            <span className="font-handwriting text-base text-ink-600">scroll to explore</span>
            <ArrowDown className="w-4 h-4 animate-bounce text-brand-blue" />
          </a>
        </div>
      </motion.div>
    </section>
  );
};
