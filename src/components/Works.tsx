import React, { useState } from 'react';
import { ExternalLink, CheckCircle2, ArrowUpRight, Maximize2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { RetroWindow } from './ui/RetroWindow';
import { GithubIcon } from './ui/Icons';
import { ImageLightbox } from './ui/ImageLightbox';

export const Works: React.FC = () => {
  const { projects } = portfolioData;

  const [activeLightbox, setActiveLightbox] = useState<{
    projectId: string;
    index: number;
    triggerId?: string;
  } | null>(null);

  const activeProject = activeLightbox
    ? projects.find((p) => p.id === activeLightbox.projectId)
    : null;

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
            "Full stack web applications and customized Shopify storefronts."
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

                {/* Screenshot Retro Window Frame (Placed strictly between Goal/Solution block and Bullets) */}
                {hasScreenshots && (
                  <div className="mb-6 rounded-md border-2 border-olive-900 overflow-hidden shadow-retro-sm bg-olive-50">
                    <div className="bg-olive-800 text-[#F4EEDB] px-3 py-1.5 flex items-center justify-between text-xs font-mono border-b border-olive-900 select-none gap-2">
                      <div className="flex items-center gap-2 min-w-0">
                        <span className="w-2 h-2 rounded-full bg-peach shrink-0" />
                        <span className="font-bold tracking-wide text-[#F4EEDB] truncate">
                          preview:\{project.id}\screens
                        </span>
                      </div>
                      <span className="text-[11px] text-peach font-semibold uppercase shrink-0">
                        [{project.screenshots?.length} screens<span className="hidden sm:inline"> • click to expand</span>]
                      </span>
                    </div>

                    <div className="p-3 sm:p-4 grid grid-cols-1 md:grid-cols-2 gap-3.5 bg-olive-100/40">
                      {project.screenshots?.map((screenshot, sIdx) => {
                        const btnId = `screenshot-btn-${project.id}-${sIdx}`;
                        return (
                          <button
                            key={sIdx}
                            id={btnId}
                            type="button"
                            onClick={() =>
                              setActiveLightbox({
                                projectId: project.id,
                                index: sIdx,
                                triggerId: btnId,
                              })
                            }
                            aria-label={`Enlarge screenshot: ${screenshot.caption}`}
                            className="group relative text-left rounded border-2 border-olive-900/30 overflow-hidden bg-white hover:border-olive-900 focus-visible:ring-2 focus-visible:ring-olive-900 focus-visible:outline-none transition-all duration-150 shadow-retro-xs hover:shadow-retro-sm cursor-zoom-in"
                          >
                            <div className="relative aspect-[16/10] overflow-hidden bg-olive-950/5">
                              <img
                                src={screenshot.src}
                                alt={screenshot.alt}
                                width={screenshot.width}
                                height={screenshot.height}
                                loading="lazy"
                                decoding="async"
                                className="w-full h-full object-cover object-top transition-transform duration-200 group-hover:scale-[1.02]"
                              />
                              {/* Expand badge: positioned top-right, semi-transparent, visible on hover and keyboard focus */}
                              <span className="absolute top-2 right-2 px-2 py-0.5 bg-olive-950/75 backdrop-blur-xs text-[#F4EEDB] text-[10px] font-mono rounded-xs border border-olive-700/60 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-150 flex items-center gap-1 shadow-xs pointer-events-none">
                                <Maximize2 className="w-3 h-3 text-peach" aria-hidden="true" />
                                <span>Expand</span>
                              </span>
                            </div>
                            <div className="p-2.5 bg-olive-50/70 border-t border-olive-900/20">
                              <p className="font-mono text-xs text-olive-900 leading-snug">
                                {screenshot.caption}
                              </p>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Bullets: Implementation & Core Features */}
                <div className="space-y-3 mb-5">
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

                {/* Optional Next Improvement Field (Rendered strictly when filled by user) */}
                {project.nextImprovement && project.nextImprovement.trim() !== '' && (
                  <div className="mb-5 p-3 rounded-md bg-olive-50/80 border border-olive-900/15 flex items-start gap-2.5 text-xs sm:text-sm font-sans text-olive-900">
                    <span className="font-mono font-bold text-copper uppercase tracking-wider text-xs shrink-0 mt-0.5">
                      Next improvement:
                    </span>
                    <span className="leading-relaxed">{project.nextImprovement}</span>
                  </div>
                )}

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

      {/* Accessible Lightbox Modal */}
      {activeProject && activeProject.screenshots && (
        <ImageLightbox
          isOpen={Boolean(activeLightbox)}
          onClose={() => {
            const triggerId = activeLightbox?.triggerId;
            setActiveLightbox(null);
            if (triggerId) {
              setTimeout(() => {
                document.getElementById(triggerId)?.focus();
              }, 40);
            }
          }}
          images={activeProject.screenshots}
          currentIndex={activeLightbox?.index ?? 0}
          onNavigate={(newIndex) => {
            if (activeLightbox) {
              setActiveLightbox({ ...activeLightbox, index: newIndex });
            }
          }}
          projectTitle={activeProject.title}
        />
      )}
    </section>
  );
};
