import React, { useState } from 'react';
import { Check, Copy, ExternalLink, Send, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { RetroWindow } from './ui/RetroWindow';
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
    <section id="contact" className="py-8 sm:py-12 pb-24 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
      <RetroWindow
        id="contact-window"
        title="C:\ARYAN\contact"
        showAccentBar={true}
        className="shadow-retro-lg text-center"
      >
        <div className="max-w-xl mx-auto space-y-3 mb-8">
          <span className="font-mono text-xs font-bold px-3 py-1 bg-peach text-olive-950 rounded-xs uppercase tracking-wider inline-block">
            STATUS: ONLINE & OPEN TO ROLES
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-copper tracking-normal">
            Let's Start a Conversation
          </h2>

          <p className="font-sans text-base text-olive-900 leading-[1.65]">
            I am currently applying for Full Stack Developer and Front-End engineering roles. Reach out directly for project inquiries, technical roles, or software engineering discussions.
          </p>
        </div>

        {/* Dispatch Box */}
        <div className="bg-white border-2 border-olive-900 rounded-lg p-6 sm:p-7 max-w-lg mx-auto shadow-retro-sm text-left mb-6">
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-olive-900/15">
            <span className="font-mono text-xs font-bold text-olive-800 uppercase tracking-wide">
              Direct Mail Dispatch
            </span>
            <span className="font-mono text-xs sm:text-sm font-semibold text-copper">
              {personal.email}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            {/* Working mailto: link */}
            <a
              href={`mailto:${personal.email}?subject=Opportunity%20Inquiry%20%E2%80%94%20Aryan%20Negi`}
              className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 min-h-[44px] bg-olive-900 text-white font-mono text-xs sm:text-sm font-bold rounded-sm border-2 border-olive-900 hover:bg-copper transition-all duration-150 shadow-retro-sm active:translate-x-0.5 active:translate-y-0.5 active:shadow-none focus-visible:ring-2 focus-visible:ring-olive-900 focus-visible:outline-none"
            >
              <Send className="w-4 h-4" aria-hidden="true" />
              <span>SEND EMAIL</span>
            </a>

            {/* Copy Email Button with visible feedback */}
            <button
              type="button"
              onClick={copyEmailToClipboard}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 min-h-[44px] bg-white text-olive-900 font-mono text-xs sm:text-sm font-bold rounded-sm border-2 border-olive-900 hover:bg-peach-light transition-all duration-150 shadow-retro-sm active:translate-x-0.5 active:translate-y-0.5 active:shadow-none focus-visible:ring-2 focus-visible:ring-olive-900 focus-visible:outline-none"
              title="Copy email to clipboard"
              aria-label="Copy email address to clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" aria-hidden="true" />
                  <span className="text-emerald-800 font-bold">COPIED!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" aria-hidden="true" />
                  <span>COPY EMAIL</span>
                </>
              )}
            </button>
          </div>

          {/* Location row */}
          <div className="mt-4 pt-3.5 border-t border-olive-900/10 flex items-center justify-between text-xs sm:text-sm font-mono text-olive-800">
            <span className="flex items-center gap-1.5 font-medium">
              <MapPin className="w-3.5 h-3.5 text-copper" aria-hidden="true" />
              <span>{personal.location}</span>
            </span>
          </div>
        </div>

        {/* Quick Social Links: LinkedIn & GitHub only */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <a
            href={personal.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 min-h-[44px] bg-white border-2 border-olive-900/30 rounded-sm text-xs sm:text-sm font-mono font-bold text-olive-900 hover:text-copper hover:border-olive-900 transition-colors shadow-xs focus-visible:ring-2 focus-visible:ring-olive-900 focus-visible:outline-none"
            aria-label="Visit Aryan Negi's GitHub Profile (opens in new tab)"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GITHUB</span>
            <ExternalLink className="w-3 h-3 text-olive-600" aria-hidden="true" />
          </a>

          <a
            href={personal.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 min-h-[44px] bg-white border-2 border-olive-900/30 rounded-sm text-xs sm:text-sm font-mono font-bold text-olive-900 hover:text-copper hover:border-olive-900 transition-colors shadow-xs focus-visible:ring-2 focus-visible:ring-olive-900 focus-visible:outline-none"
            aria-label="Visit Aryan Negi's LinkedIn Profile (opens in new tab)"
          >
            <LinkedinIcon className="w-4 h-4" />
            <span>LINKEDIN</span>
            <ExternalLink className="w-3 h-3 text-olive-600" aria-hidden="true" />
          </a>

          <a
            href={personal.resumePdfUrl}
            download="Aryan_Negi_Resume.pdf"
            className="inline-flex items-center gap-2 px-4 py-2 min-h-[44px] bg-peach text-olive-950 border-2 border-olive-900/40 rounded-sm text-xs sm:text-sm font-mono font-bold hover:bg-peach-dark hover:text-white transition-colors shadow-xs focus-visible:ring-2 focus-visible:ring-olive-900 focus-visible:outline-none"
            title="Download Aryan's Resume (PDF)"
          >
            <span>DOWNLOAD RESUME (PDF)</span>
          </a>
        </div>
      </RetroWindow>
    </section>
  );
};
