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
            "Production applications delivering measurable performance and real user impact."
          </p>
        </div>

        <div className="space-y-10 sm:space-y-12">
          {projects.map((project) => (
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

              {/* Problem & Solution block */}
              <div className="bg-olive-50/70 p-4 sm:p-5 rounded-md border border-olive-900/15 space-y-3 text-sm sm:text-base font-sans mb-5 leading-relaxed">
                <div>
                  <span className="font-mono font-bold text-rose-900 uppercase tracking-wider text-xs block mb-0.5">
                    Challenge:
                  </span>
                  <p className="text-olive-900">{project.problem}</p>
                </div>
                <div className="pt-2.5 border-t border-olive-900/10">
                  <span className="font-mono font-bold text-emerald-900 uppercase tracking-wider text-xs block mb-0.5">
                    Engineered Solution:
                  </span>
                  <p className="text-olive-900">{project.solution}</p>
                </div>
              </div>

              {/* Key Deliverables & Bullets (No fake numbers, space-y-3, line-height 1.6-1.7, font-size >= 16px) */}
              <div className="space-y-3 mb-6">
                <h4 className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-olive-800">
                  Core Implementation & Outcomes:
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

              {/* Factual Stat Cards derived from actual bullets (minimum 12px labels, tracking-wider) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                {project.impact.map((metric) => (
                  <div
                    key={metric.label}
                    className="p-3.5 rounded-md bg-olive-100/70 border border-olive-900/20"
                  >
                    <div className="font-mono text-lg sm:text-xl font-bold text-copper leading-tight">
                      {metric.value}
                    </div>
                    <div className="font-mono text-xs font-bold uppercase tracking-wider text-olive-950 mt-1">
                      {metric.label}
                    </div>
                    <div className="font-sans text-xs text-olive-800 leading-normal mt-1">
                      {metric.description}
                    </div>
                  </div>
                ))}
              </div>

              {/* Tech Stack Pills & Verified Links */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-olive-900/10">
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-xs px-2.5 py-1 bg-olive-100 text-olive-900 rounded-xs border border-olive-900/20 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Only render links if confirmed URL exists; never link to '#' */}
                <div className="flex items-center gap-2">
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 min-h-[44px] bg-olive-900 text-white font-mono text-xs font-bold rounded-sm border-2 border-olive-900 hover:bg-copper transition-all duration-150 shadow-retro-sm active:translate-x-0.5 active:translate-y-0.5 active:shadow-none focus-visible:ring-2 focus-visible:ring-olive-900 focus-visible:outline-none"
                    >
                      <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>DEMO</span>
                      <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </a>
                  )}

                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 min-h-[44px] bg-white text-olive-900 font-mono text-xs font-bold rounded-sm border-2 border-olive-900 hover:bg-peach-light transition-all duration-150 shadow-retro-sm active:translate-x-0.5 active:translate-y-0.5 active:shadow-none focus-visible:ring-2 focus-visible:ring-olive-900 focus-visible:outline-none"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>CODE</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </RetroWindow>
    </section>
  );
};
