import React, { useState } from 'react';
import { ExternalLink, CheckCircle2, ArrowUpRight, Maximize2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { RetroWindow } from './ui/RetroWindow';
import { GithubIcon } from './ui/Icons';
import { ImageLightbox } from './ui/ImageLightbox';
import { useInView } from '../hooks/useInView';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onOpenLightbox: (projectId: string, index: number, triggerId: string) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenLightbox }) => {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.1 });
  const hasScreenshots = Boolean(project.screenshots && project.screenshots.length > 0);
  const hasDemo = Boolean(project.links?.demo);
  const hasCode = Boolean(project.links?.code);

  return (
    <div
      ref={ref}
      className={`bg-white border-2 border-olive-900 rounded-lg p-5 sm:p-6 shadow-retro-sm transition-all duration-200 hover:shadow-retro fade-rise-item flex flex-col justify-between h-full ${
        isInView ? 'is-visible' : ''
      }`}
    >
      <div className="space-y-4">
        {/* Header Tag, Role, Period */}
        <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 border-b-2 border-olive-900/15">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold px-2.5 py-0.5 bg-peach text-olive-950 rounded-xs border border-olive-900/20 uppercase tracking-wider">
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
        <div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-copper leading-tight tracking-normal">
            {project.title}
          </h3>
          <p className="font-sans text-xs sm:text-sm text-olive-800 mt-1 leading-relaxed">
            {project.subtitle}
          </p>
        </div>

        {/* Screenshot Retro Window Frame */}
        {hasScreenshots && (
          <div className="rounded-md border-2 border-olive-900 overflow-hidden shadow-retro-sm bg-olive-50">
            <div className="bg-olive-800 text-[#F4EEDB] px-3 py-1 flex items-center justify-between text-[11px] font-mono border-b border-olive-900 select-none gap-2">
              <div className="flex items-center gap-1.5 min-w-0">
                <span className="w-2 h-2 rounded-full bg-peach shrink-0" />
                <span className="font-bold tracking-wide text-[#F4EEDB] truncate">
                  preview:\{project.id}\screens
                </span>
              </div>
              <span className="text-[10px] text-peach font-semibold uppercase shrink-0">
                [{project.screenshots?.length} screens • click to expand]
              </span>
            </div>

            <div className="p-2.5 grid grid-cols-2 gap-2.5 bg-olive-100/40">
              {project.screenshots?.map((screenshot, sIdx) => {
                const btnId = `screenshot-btn-${project.id}-${sIdx}`;
                return (
                  <button
                    key={sIdx}
                    id={btnId}
                    type="button"
                    onClick={() => onOpenLightbox(project.id, sIdx, btnId)}
                    aria-label={`Enlarge screenshot: ${screenshot.caption}`}
                    className="group relative text-left rounded border border-olive-900/30 overflow-hidden bg-white hover:border-olive-900 focus-visible:ring-2 focus-visible:ring-olive-900 focus-visible:outline-none transition-all duration-150 shadow-retro-xs hover:shadow-retro-sm cursor-zoom-in"
                  >
                    <div className={`relative aspect-[16/10] overflow-hidden bg-olive-950/5 ${isInView ? 'screenshot-loading-flicker' : ''}`}>
                      <img
                        src={screenshot.src}
                        alt={screenshot.alt}
                        width={screenshot.width}
                        height={screenshot.height}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover object-top transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                      />
                      <span className="absolute top-1.5 right-1.5 px-1.5 py-0.5 bg-olive-950/75 backdrop-blur-xs text-[#F4EEDB] text-[9px] font-mono rounded-xs border border-olive-700/60 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-150 flex items-center gap-1 shadow-xs pointer-events-none">
                        <Maximize2 className="w-2.5 h-2.5 text-peach" aria-hidden="true" />
                        <span>Expand</span>
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Bullets: Implementation & Core Features */}
        <ul className="space-y-2 pt-1">
          {project.bullets.map((bullet, bIdx) => (
            <li key={bIdx} className="flex items-start gap-2 text-xs sm:text-sm text-olive-900 font-sans leading-relaxed">
              <div
                className={isInView ? 'check-icon-pop' : 'opacity-0'}
                style={{ animationDelay: `${bIdx * 50}ms` }}
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-700 mt-0.5 shrink-0" aria-hidden="true" />
              </div>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Tech Stack Pills & Action Links */}
      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 pt-3.5 border-t border-olive-900/10">
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map((tech, tIdx) => (
            <span
              key={tech}
              className={`font-mono text-[11px] sm:text-xs px-2 py-0.5 bg-olive-100 text-olive-900 rounded-xs border border-olive-900/20 font-medium transition-all duration-300 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'
              }`}
              style={{ transitionDelay: `${tIdx * 40}ms` }}
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
                className="retro-btn inline-flex items-center gap-1.5 px-3.5 py-1.5 min-h-[38px] bg-olive-900 text-white font-mono text-xs font-bold rounded-sm border-2 border-olive-900 hover:bg-copper shadow-retro-sm focus-visible:ring-2 focus-visible:ring-olive-900 focus-visible:outline-none"
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
                className="retro-btn inline-flex items-center gap-1.5 px-3.5 py-1.5 min-h-[38px] bg-white text-olive-900 font-mono text-xs font-bold rounded-sm border-2 border-olive-900 hover:bg-peach-light shadow-retro-sm focus-visible:ring-2 focus-visible:ring-olive-900 focus-visible:outline-none"
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
};

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
    <section id="works" className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-[1360px] mx-auto">
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
            "Selected web applications and client storefront projects."
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenLightbox={(projectId, index, triggerId) =>
                setActiveLightbox({ projectId, index, triggerId })
              }
            />
          ))}
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
