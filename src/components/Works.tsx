import React from 'react';
import { ExternalLink, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { RetroWindow } from './ui/RetroWindow';
import { GithubIcon } from './ui/Icons';

export const Works: React.FC = () => {
  const { projects } = portfolioData;

  return (
    <section id="works" className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
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
          <p className="font-serif italic text-sm text-olive-700 mt-1">
            "Production applications delivering measurable performance and real user impact."
          </p>
        </div>

        <div className="space-y-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white border-2 border-olive-900 rounded-lg p-6 sm:p-8 shadow-retro-sm transition-all duration-200 hover:shadow-retro"
            >
              {/* Top tag & metadata */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b-2 border-olive-900/15">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold px-2.5 py-0.5 bg-peach text-olive-950 rounded-xs border border-olive-900/20 uppercase tracking-wider">
                    {project.tag}
                  </span>
                  <span className="font-mono text-xs text-olive-700">
                    Role: <strong className="text-olive-900">{project.role}</strong>
                  </span>
                </div>
                <span className="font-mono text-xs text-olive-600">
                  // {project.period}
                </span>
              </div>

              {/* Title & Subtitle */}
              <div className="mb-4">
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-copper leading-tight">
                  {project.title}
                </h3>
                <p className="font-sans text-sm sm:text-base font-medium text-olive-800 mt-1">
                  {project.subtitle}
                </p>
              </div>

              {/* Problem & Solution block */}
              <div className="bg-olive-50/70 p-4 rounded-md border border-olive-900/15 space-y-2 text-xs sm:text-sm font-sans mb-4">
                <div>
                  <span className="font-mono font-bold text-rose-800 uppercase tracking-wider text-[11px] block">
                    Challenge:
                  </span>
                  <p className="text-olive-800 mt-0.5">{project.problem}</p>
                </div>
                <div className="pt-2 border-t border-olive-900/10">
                  <span className="font-mono font-bold text-emerald-800 uppercase tracking-wider text-[11px] block">
                    Solution:
                  </span>
                  <p className="text-olive-800 mt-0.5">{project.solution}</p>
                </div>
              </div>

              {/* Key Deliverables & Bullets */}
              <div className="space-y-2 mb-5">
                <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-olive-700">
                  Core Implementation & Outcomes:
                </h4>
                <ul className="space-y-2">
                  {project.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2 text-xs sm:text-sm text-olive-800 font-sans leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 mt-0.5 shrink-0" />
                      <span>
                        {bullet.includes('[ADD METRIC') ? (
                          <>
                            {bullet.split(/(\[ADD METRIC[^\]]*\])/g).map((part, pIdx) =>
                              part.startsWith('[ADD METRIC') ? (
                                <mark
                                  key={pIdx}
                                  className="bg-peach-light px-1 py-0.5 rounded-xs font-mono text-xs font-bold text-olive-950 border border-olive-900/20 mx-0.5"
                                >
                                  {part}
                                </mark>
                              ) : (
                                part
                              )
                            )}
                          </>
                        ) : (
                          bullet
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Impact Metric Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-5">
                {project.impact.map((metric) => (
                  <div
                    key={metric.label}
                    className="p-3 rounded-md bg-olive-100/60 border border-olive-900/20"
                  >
                    <div className="font-mono text-xl font-bold text-copper leading-tight">
                      {metric.value}
                    </div>
                    <div className="font-mono text-[11px] font-bold uppercase tracking-wider text-olive-900 mt-0.5">
                      {metric.label}
                    </div>
                    <div className="font-sans text-[11px] text-olive-700 leading-tight mt-0.5">
                      {metric.description}
                    </div>
                  </div>
                ))}
              </div>

              {/* Tech Stack Pills & Links */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-olive-900/10">
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[11px] px-2 py-0.5 bg-olive-100 text-olive-900 rounded-xs border border-olive-900/15 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-olive-900 text-white font-mono text-xs font-bold rounded-sm border-2 border-olive-900 hover:bg-copper transition-all duration-150 shadow-retro-sm active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>DEMO</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-white text-olive-900 font-mono text-xs font-bold rounded-sm border-2 border-olive-900 hover:bg-peach-light transition-all duration-150 shadow-retro-sm active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
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
