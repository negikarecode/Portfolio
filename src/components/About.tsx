import React from 'react';
import { Code2, Terminal, Award, BookOpen } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { WashiTape } from './ui/WashiTape';
import { StickyNote } from './ui/StickyNote';
import { Polaroid } from './ui/Polaroid';

export const About: React.FC = () => {
  const { personal, certifications } = portfolioData;

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-10">
        <span className="bg-brand-yellow px-2.5 py-1 text-xs font-mono font-bold border border-ink-950/20 rounded-xs uppercase">
          # 01
        </span>
        <h2 className="font-pixel text-4xl sm:text-5xl font-bold text-ink-950 tracking-tight">
          ABOUT
        </h2>
        <div className="flex-1 border-b-2 border-dashed border-ink-200 ml-2" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Left Column: Polaroid & Badges (md:col-span-5) */}
        <div className="md:col-span-5 flex flex-col items-center sm:items-start gap-6">
          {/* Polaroid Card */}
          <Polaroid
            angle={-2}
            tapePosition="top-left"
            caption="Aryan Negi — Developer & Creator 🚀"
            className="w-full max-w-[320px] mx-auto md:mx-0 shadow-polaroid"
          >
            {/* Visual Developer Avatar Graphic */}
            <div className="w-full h-64 bg-gradient-to-br from-amber-50 via-sky-50 to-emerald-50 flex flex-col items-center justify-center p-6 border border-ink-100 relative group overflow-hidden">
              {/* Background grid lines */}
              <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#111113_1px,transparent_1px)] [background-size:12px_12px]" />
              
              {/* Retro Terminal Window Illustration */}
              <div className="w-full max-w-[220px] bg-ink-950 text-white rounded-md p-3 shadow-brutal-sm font-mono text-xs z-10">
                <div className="flex items-center gap-1.5 mb-2 pb-1.5 border-b border-ink-800">
                  <span className="w-2 h-2 rounded-full bg-rose-500" />
                  <span className="w-2 h-2 rounded-full bg-amber-500" />
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="text-[10px] text-ink-400 ml-auto font-sans">terminal</span>
                </div>
                <div className="text-emerald-400 font-mono text-[11px] leading-relaxed">
                  <span className="text-ink-500">$</span> whoami<br />
                  <span className="text-brand-yellow font-bold">Aryan Negi</span><br />
                  <span className="text-ink-500">$</span> status<br />
                  <span className="text-sky-300">Building products</span><br />
                  <span className="text-ink-500">$</span> passion<br />
                  <span className="text-pink-300">Speed & Elegance</span>
                </div>
              </div>

              {/* Floating cute badge */}
              <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-xs px-2 py-0.5 rounded-full border border-ink-200 text-[10px] font-mono text-ink-700 shadow-xs">
                Delhi, India 🇮🇳
              </div>
            </div>
          </Polaroid>

          {/* Quick Snapshot Card */}
          <div className="w-full max-w-[320px] mx-auto md:mx-0 bg-white p-4 border border-ink-950/15 rounded-sm shadow-xs relative">
            <WashiTape className="-top-2 right-4" angle={1} width={50} />
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-ink-500 mb-2 flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-brand-blue" />
              <span>Verified Credential</span>
            </h3>
            <p className="font-sans text-sm font-bold text-ink-900">
              {certifications[0]?.title}
            </p>
            <p className="font-mono text-xs text-ink-600 mt-0.5">
              Issued by {certifications[0]?.issuer} • {certifications[0]?.year}
            </p>
          </div>
        </div>

        {/* Right Column: Sticky Note & Bio (md:col-span-7) */}
        <div className="md:col-span-7 flex flex-col gap-6">
          {/* Yellow Legal Pad / Sticky Note (from design reference) */}
          <StickyNote color="yellow" angle={0.5} className="w-full">
            <div className="flex items-center justify-between mb-3 border-b border-brand-yellow-border/60 pb-2">
              <span className="font-handwriting text-2xl font-bold text-ink-900">
                what's up! 👋
              </span>
              <span className="font-mono text-[10px] uppercase tracking-wider bg-white/80 px-2 py-0.5 rounded-xs border border-ink-950/10 text-ink-700">
                bio.note
              </span>
            </div>

            <p className="font-sans text-base sm:text-lg font-medium text-ink-950 leading-relaxed mb-3">
              "{personal.bio.headline}"
            </p>
            <p className="font-sans text-sm sm:text-base text-ink-800 leading-relaxed">
              {personal.bio.short}
            </p>

            {/* Quick Skill Tags (from design panel) */}
            <div className="flex flex-wrap gap-2 mt-4 pt-3 border-t border-brand-yellow-border/60">
              <span className="bg-brand-mint text-ink-950 font-mono text-xs px-2.5 py-1 rounded-sm border border-ink-950/20 font-medium">
                React & TypeScript
              </span>
              <span className="bg-brand-pink text-ink-950 font-mono text-xs px-2.5 py-1 rounded-sm border border-ink-950/20 font-medium">
                Shopify & Liquid
              </span>
              <span className="bg-brand-sky text-ink-950 font-mono text-xs px-2.5 py-1 rounded-sm border border-ink-950/20 font-medium">
                Python & Django
              </span>
              <span className="bg-ink-950 text-white font-mono text-xs px-2.5 py-1 rounded-sm font-bold inline-flex items-center gap-1">
                Full Stack &gt;&gt;
              </span>
            </div>
          </StickyNote>

          {/* Detailed Paragraphs */}
          <div className="bg-white/80 backdrop-blur-xs p-6 border border-ink-950/15 rounded-sm shadow-xs space-y-4 text-ink-700 font-sans text-sm sm:text-base leading-relaxed">
            {personal.bio.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}

            <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-ink-600 border-t border-ink-100">
              <div className="flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-brand-blue" />
                <span>Delhi University (B.Sc. CS)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>2 Production Internships</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-amber-600" />
                <span>Modern Web Architecture</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
