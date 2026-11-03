import React from 'react';
import { ExternalLink, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { RetroWindow } from './ui/RetroWindow';
import { GithubIcon } from './ui/Icons';

export const Works: React.FC = () => {
  const { projects } = portfolioData;

  return (
    <section id="works" className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <RetroWindow
        id="works-window"
        title="C:\ARYAN\works"
        showAccentBar={true}
        className="shadow-retro-lg"
      >
        <div className="text-center mb-8">
          <h2 className="font-mono text-xl sm:text-2xl font-bold uppercase tracking-widest text-olive-900">
            FEATURED WORKS
          </h2>
          <p className="font-serif italic text-base sm:text-lg text-olive-800 mt-1 leading-relaxed">
            "Full stack and storefront projects, built end to end."
          </p>
        </div>

        <div className="space-y-10 sm:space-y-12">
          {projects.map((project) => {
            const hasScreenshots = Boolean(project.screenshots && project.screenshots.length > 0);
            const hasDemo = Boolean(project.links?.demo);
            const hasCode = Boolean(project.links?.code);

            return (
              <div
                key={project.id}
                className="bg-white border-2 border-olive-900 rounded-lg p-6 sm:p-8 shadow-retro-sm transition-all duration-200 hover:shadow-retro"
              >
                {/* Header Tag & Role */}
                <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b-2 border-olive-900/15">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold px-2.5 py-1 bg-peach text-olive-950 rounded-xs border border-olive-900/20 uppercase tracking-wider">
                      {project.tag}
                    </span>
                    <span className="font-mono text-xs sm:text-sm text-olive-800">
                      Role: <strong className="text-olive-950 font-semibold">{project.role}</strong>
                    </span>
                  </div>
                  <span className="font-mono text-xs sm:text-sm text-olive-700">
                    // {project.period}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <div className="mb-4">
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-copper leading-tight tracking-normal">
                    {project.title}
                  </h3>
                  <p className="font-sans text-base sm:text-lg font-medium text-olive-900 mt-1 leading-snug">
                    {project.subtitle}
                  </p>
                </div>

                {/* Optional Screenshot Retro Frame: Rendered only if images exist */}
                {hasScreenshots && (
                  <div className="mb-6 rounded-md border-2 border-olive-900 overflow-hidden shadow-retro-sm bg-olive-50">
                    <div className="bg-olive-800 text-white px-3 py-1.5 flex items-center justify-between text-xs font-mono border-b border-olive-900">
                      <span className="font-bold truncate">preview:\{project.id}.png</span>
                      <span className="text-[10px] text-peach">2-UP DISPLAY</span>
                    </div>
                    <div className="p-3 grid grid-cols-1 sm:grid-cols-2 gap-3 bg-olive-100/40">
                      {project.screenshots?.map((src, sIdx) => (
                        <div key={sIdx} className="rounded border border-olive-900/30 overflow-hidden bg-white">
                          <img
                            src={src}
                            alt={`${project.title} screenshot ${sIdx + 1}`}
                            loading="lazy"
                            className="w-full h-auto object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Goal & Solution block */}
                <div className="bg-olive-50/70 p-4 sm:p-5 rounded-md border border-olive-900/15 space-y-3 text-sm sm:text-base font-sans mb-5 leading-relaxed">
                  <div>
                    <span className="font-mono font-bold text-rose-900 uppercase tracking-wider text-xs block mb-0.5">
                      Goal:
                    </span>
                    <p className="text-olive-900">{project.goal}</p>
                  </div>
                  <div className="pt-2.5 border-t border-olive-900/10">
                    <span className="font-mono font-bold text-emerald-900 uppercase tracking-wider text-xs block mb-0.5">
                      Solution:
                    </span>
                    <p className="text-olive-900">{project.solution}</p>
                  </div>
                </div>

                {/* 3 Strongest Bullets (No unverified claims, space-y-3, line-height 1.65, font-size 16px) */}
                <div className="space-y-3 mb-6">
                  <h4 className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-olive-800">
                    Implementation & Core Features:
                  </h4>
                  <ul className="space-y-3">
                    {project.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5 text-base text-olive-900 font-sans leading-[1.65]">
                        <CheckCircle2 className="w-5 h-5 text-emerald-700 mt-0.5 shrink-0" aria-hidden="true" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Pills & Action Links */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-olive-900/10">
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-xs px-2.5 py-1 bg-olive-100 text-olive-900 rounded-xs border border-olive-900/20 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Render buttons only if valid URLs exist */}
                  {(hasDemo || hasCode) && (
                    <div className="flex items-center gap-2">
                      {hasDemo && (
                        <a
                          href={project.links?.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2 min-h-[44px] bg-olive-900 text-white font-mono text-xs font-bold rounded-sm border-2 border-olive-900 hover:bg-copper transition-all duration-150 shadow-retro-sm active:translate-x-0.5 active:translate-y-0.5 active:shadow-none focus-visible:ring-2 focus-visible:ring-olive-900 focus-visible:outline-none"
                        >
                          <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                          <span>{project.isShopifyStore ? 'Store link' : 'Live Demo'}</span>
                          <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                        </a>
                      )}

                      {hasCode && (
                        <a
                          href={project.links?.code}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2 min-h-[44px] bg-white text-olive-900 font-mono text-xs font-bold rounded-sm border-2 border-olive-900 hover:bg-peach-light transition-all duration-150 shadow-retro-sm active:translate-x-0.5 active:translate-y-0.5 active:shadow-none focus-visible:ring-2 focus-visible:ring-olive-900 focus-visible:outline-none"
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                          <span>Code</span>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </RetroWindow>
    </section>
  );
};
