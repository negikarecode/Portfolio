import React, { useState } from 'react';
import { Check, Copy, ExternalLink, Phone, Send } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { RetroWindow } from './ui/RetroWindow';
import { GithubIcon, LinkedinIcon } from './ui/Icons';
import { DockBar } from './ui/DockBar';

export const Contact: React.FC = () => {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-12 pb-24 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
      <RetroWindow
        id="contact-window"
        title="C:\ARYAN\contact"
        showAccentBar={true}
        className="shadow-retro-lg text-center"
      >
        <div className="max-w-xl mx-auto space-y-3 mb-8">
          <span className="font-mono text-xs font-bold px-2.5 py-0.5 bg-peach text-olive-950 rounded-xs uppercase tracking-wider inline-block">
            STATUS: ONLINE & OPEN TO ROLES
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-copper">
            Let's Start a Conversation
          </h2>

          <p className="font-sans text-xs sm:text-sm text-olive-800 leading-relaxed">
            I am currently applying for Full Stack Developer and Front-End engineering roles. Reach out directly for project collaborations, internships, or full-time opportunities.
          </p>
        </div>

        {/* Dispatch Box */}
        <div className="bg-white border-2 border-olive-900 rounded-lg p-6 max-w-lg mx-auto shadow-retro-sm text-left mb-8">
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-olive-900/10">
            <span className="font-mono text-xs font-bold text-olive-700 uppercase">
              Direct Mail Dispatch
            </span>
            <span className="font-mono text-xs font-semibold text-copper">
              {personal.email}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={`mailto:${personal.email}?subject=Opportunity%20Inquiry%20%E2%80%94%20Aryan%20Negi`}
              className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-olive-900 text-white font-mono text-xs font-bold rounded-sm border-2 border-olive-900 hover:bg-copper transition-all duration-150 shadow-retro-sm active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
            >
              <Send className="w-4 h-4" />
              <span>SEND EMAIL</span>
            </a>

            <button
              onClick={copyEmailToClipboard}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white text-olive-900 font-mono text-xs font-bold rounded-sm border-2 border-olive-900 hover:bg-peach-light transition-all duration-150 shadow-retro-sm active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
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

          <div className="mt-4 pt-3 border-t border-olive-900/10 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-olive-700">
            <a
              href={`tel:${personal.phone.replace(/[^0-9+]/g, '')}`}
              className="inline-flex items-center gap-1.5 hover:text-copper transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-copper" />
              <span>{personal.phone}</span>
            </a>
            <span>📍 {personal.location}</span>
          </div>
        </div>

        {/* Quick External Links Row */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <a
            href={personal.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-olive-900/20 rounded-xs text-xs font-mono font-bold text-olive-800 hover:text-copper transition-colors"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>GITHUB</span>
            <ExternalLink className="w-3 h-3 text-olive-500" />
          </a>

          <a
            href={personal.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-olive-900/20 rounded-xs text-xs font-mono font-bold text-olive-800 hover:text-copper transition-colors"
          >
            <LinkedinIcon className="w-3.5 h-3.5" />
            <span>LINKEDIN</span>
            <ExternalLink className="w-3 h-3 text-olive-500" />
          </a>

          <a
            href={personal.resumePdfUrl}
            download="Aryan_Negi_Resume.pdf"
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-peach text-olive-950 border border-olive-900/20 rounded-xs text-xs font-mono font-bold hover:bg-peach-dark hover:text-white transition-colors"
          >
            <span>DOWNLOAD RESUME (PDF)</span>
          </a>
        </div>
      </RetroWindow>

      {/* Dock Bar at bottom (Matching Design 2 Panel 1 & 2 & 3) */}
      <div className="mt-12 flex justify-center">
        <DockBar />
      </div>
    </section>
  );
};
