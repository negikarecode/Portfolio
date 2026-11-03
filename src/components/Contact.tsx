import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Copy, ExternalLink, Mail, Phone, Send } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { BoundingBox } from './ui/BoundingBox';
import { Smiley } from './ui/Smiley';
import { StickyNote } from './ui/StickyNote';
import { WashiTape } from './ui/WashiTape';
import { GithubIcon, LinkedinIcon } from './ui/Icons';

export const Contact: React.FC = () => {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
      {/* Section Header */}
      <div className="flex items-center justify-center gap-3 mb-8">
        <span className="bg-brand-yellow px-2.5 py-1 text-xs font-mono font-bold border border-ink-950/20 rounded-xs uppercase">
          # 06
        </span>
        <span className="font-mono text-xs font-bold uppercase tracking-wider text-ink-600">
          GET IN TOUCH
        </span>
      </div>

      {/* Interactive Smiley from Design */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="mb-6 flex justify-center"
      >
        <Smiley size={76} />
      </motion.div>

      {/* Bounding Box Title "LET'S TALK" */}
      <div className="max-w-xl mx-auto mb-8">
        <BoundingBox
          borderColor="border-ink-950"
          showHandles={true}
          label="STATUS: ONLINE"
          className="bg-white/80 py-6 sm:py-8 px-6 shadow-brutal-sm"
        >
          <WashiTape className="-top-3 left-6" angle={-2} width={70} />
          <WashiTape className="-top-3 right-6" angle={2} width={70} />

          <h2 className="font-pixel text-4xl sm:text-6xl font-bold text-ink-950 tracking-tight leading-none">
            LET'S TALK
          </h2>

          <p className="mt-4 font-sans text-sm sm:text-base text-ink-700 max-w-md mx-auto leading-relaxed">
            Got a project, a full-stack developer opening, or just want to discuss code and architecture? Send it over. I respond promptly.
          </p>
        </BoundingBox>
      </div>

      {/* Sticky Note Contact Card */}
      <div className="max-w-lg mx-auto">
        <StickyNote color="yellow" angle={-0.5} className="text-left p-6 sm:p-8">
          <div className="flex items-center justify-between border-b border-brand-yellow-border/70 pb-3 mb-4">
            <span className="font-handwriting text-2xl font-bold text-ink-950">
              direct dispatch ⚡
            </span>
            <span className="font-mono text-[11px] bg-white/90 px-2 py-0.5 rounded-xs border border-ink-950/15 text-ink-800 font-semibold">
              aryannegiofficial@gmail.com
            </span>
          </div>

          <p className="text-xs sm:text-sm font-sans text-ink-800 leading-relaxed mb-6">
            Currently open to full-time roles, developer internships, and select freelance engineering contracts. Let's make something remarkable together.
          </p>

          {/* Quick Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Direct Mailto */}
            <a
              href={`mailto:${personal.email}?subject=Hello%20Aryan%20%E2%80%94%20Opportunity%20Inquiry`}
              className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 bg-ink-950 text-white font-mono text-xs sm:text-sm font-bold rounded-sm border-2 border-ink-950 hover:bg-brand-blue hover:border-brand-blue transition-all duration-150 shadow-brutal-sm active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
            >
              <Send className="w-4 h-4" />
              <span>[ SEND EMAIL ]</span>
            </a>

            {/* Copy Email Button */}
            <button
              onClick={copyEmailToClipboard}
              className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-white text-ink-950 font-mono text-xs sm:text-sm font-bold rounded-sm border-2 border-ink-950 hover:bg-brand-mint transition-all duration-150 shadow-brutal-sm active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
              title="Copy email to clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700">COPIED!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>COPY EMAIL</span>
                </>
              )}
            </button>
          </div>

          {/* Phone & Direct details */}
          <div className="mt-5 pt-4 border-t border-brand-yellow-border/70 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-ink-700">
            <a
              href={`tel:${personal.phone.replace(/[^0-9+]/g, '')}`}
              className="inline-flex items-center gap-1.5 hover:text-ink-950 font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-brand-blue" />
              <span>{personal.phone}</span>
            </a>
            <span className="text-ink-500">📍 {personal.location}</span>
          </div>
        </StickyNote>
      </div>

      {/* Social Links Row (matching bottom panel of design reference) */}
      <div className="mt-12 pt-8 border-t border-dashed border-ink-200 flex flex-wrap items-center justify-center gap-4 sm:gap-6 font-mono text-xs font-bold uppercase tracking-wider text-ink-800">
        <a
          href={personal.social.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-ink-950/20 rounded-xs hover:bg-brand-yellow transition-colors shadow-xs"
        >
          <GithubIcon className="w-3.5 h-3.5" />
          <span>GITHUB</span>
          <ExternalLink className="w-3 h-3 text-ink-400" />
        </a>

        <a
          href={personal.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-ink-950/20 rounded-xs hover:bg-brand-sky transition-colors shadow-xs"
        >
          <LinkedinIcon className="w-3.5 h-3.5" />
          <span>LINKEDIN</span>
          <ExternalLink className="w-3 h-3 text-ink-400" />
        </a>

        <a
          href={`mailto:${personal.email}`}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-ink-950/20 rounded-xs hover:bg-brand-mint transition-colors shadow-xs"
        >
          <Mail className="w-3.5 h-3.5" />
          <span>EMAIL</span>
        </a>

        <a
          href={personal.resumePdfUrl}
          download="Aryan_Negi_Resume.pdf"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-brand-yellow border border-ink-950 rounded-xs hover:bg-amber-300 transition-colors shadow-xs"
        >
          <span>RESUME (PDF)</span>
        </a>
      </div>
    </section>
  );
};
