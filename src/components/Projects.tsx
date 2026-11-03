import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Sparkles, Layers, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { WashiTape } from './ui/WashiTape';
import { GithubIcon } from './ui/Icons';

export const Projects: React.FC = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-10">
        <span className="bg-brand-pink px-2.5 py-1 text-xs font-mono font-bold border border-ink-950/20 rounded-xs uppercase">
          # 03
        </span>
        <h2 className="font-pixel text-4xl sm:text-5xl font-bold text-ink-950 tracking-tight">
          FEATURED WORKS
        </h2>
        <div className="flex-1 border-b-2 border-dashed border-ink-200 ml-2" />
      </div>

      <div className="space-y-16">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            className="relative bg-white border-2 border-ink-950 rounded-sm shadow-brutal-lg overflow-hidden group"
          >
            {/* Top Chamfered Header Bar (matching design reference) */}
            <div className="bg-ink-950 text-white px-6 py-3 flex flex-wrap items-center justify-between gap-3 border-b-2 border-ink-950">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold px-2 py-0.5 bg-brand-yellow text-ink-950 rounded-xs uppercase tracking-wider">
                  {project.tag}
                </span>
                <span className="font-mono text-xs text-ink-300">
                  Role: <strong className="text-white">{project.role}</strong>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-ink-400">
                  // {project.period}
                </span>
              </div>
            </div>

            {/* Main Content Grid */}
            <div className="p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Project Details & Bullets (lg:col-span-7) */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h3 className="font-pixel text-3xl sm:text-4xl text-ink-950 font-bold mb-2">
                    {project.title}
                  </h3>
                  <p className="font-sans text-base sm:text-lg font-medium text-brand-blue leading-snug">
                    {project.subtitle}
                  </p>
                </div>

                {/* Problem & Solution block */}
                <div className="bg-paper p-4 rounded-xs border border-ink-200 space-y-2 text-xs sm:text-sm">
                  <div>
                    <span className="font-mono font-bold text-rose-700 uppercase tracking-wider text-[11px] block">
                      The Challenge:
                    </span>
                    <p className="text-ink-700 font-sans mt-0.5">{project.problem}</p>
                  </div>
                  <div className="pt-2 border-t border-ink-200/60">
                    <span className="font-mono font-bold text-emerald-700 uppercase tracking-wider text-[11px] block">
                      The Engineered Solution:
                    </span>
                    <p className="text-ink-700 font-sans mt-0.5">{project.solution}</p>
                  </div>
                </div>

                {/* Outcome Bullets */}
                <div className="space-y-2">
                  <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-ink-500">
                    Key Deliverables & Architecture:
                  </h4>
                  <ul className="space-y-2">
                    {project.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2 text-sm text-ink-700 font-sans leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                        <span>
                          {bullet.includes('[ADD METRIC') ? (
                            <>
                              {bullet.split(/(\[ADD METRIC[^\]]*\])/g).map((part, pIdx) =>
                                part.startsWith('[ADD METRIC') ? (
                                  <mark
                                    key={pIdx}
                                    className="bg-brand-yellow px-1 py-0.5 rounded-xs font-mono text-xs font-bold text-ink-950 border border-brand-yellow-border mx-0.5"
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

                {/* Tech Stack Tags */}
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-xs px-2.5 py-0.5 bg-ink-100 text-ink-800 rounded-xs border border-ink-200 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links / CTAs */}
                <div className="flex flex-wrap items-center gap-3 pt-3">
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-ink-950 text-white font-mono text-xs font-bold rounded-sm border-2 border-ink-950 hover:bg-brand-blue hover:border-brand-blue transition-all duration-150 shadow-brutal-sm active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>LIVE DEMO</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-white text-ink-950 font-mono text-xs font-bold rounded-sm border-2 border-ink-950 hover:bg-brand-yellow transition-all duration-150 shadow-brutal-sm active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>SOURCE CODE</span>
                    </a>
                  )}

                  {project.isPlaceholderLink && (
                    <span className="font-mono text-[10px] text-ink-400 italic">
                      *(Links editable in portfolioData.ts)*
                    </span>
                  )}
                </div>
              </div>

              {/* Right Column: Metrics Cards & Visual Mockup (lg:col-span-5) */}
              <div className="lg:col-span-5 space-y-6">
                {/* Metrics Cards (matching design reference 47%, -55% style!) */}
                <div className="grid grid-cols-2 gap-3">
                  {project.impact.map((metric, mIdx) => (
                    <div
                      key={metric.label}
                      className={`p-3.5 rounded-xs border border-ink-950/20 shadow-xs ${
                        mIdx === 0
                          ? 'bg-brand-sky col-span-2'
                          : mIdx === 1
                          ? 'bg-brand-yellow'
                          : 'bg-brand-mint'
                      }`}
                    >
                      <div className="font-pixel text-2xl sm:text-3xl font-bold text-ink-950 leading-none mb-1">
                        {metric.value}
                      </div>
                      <div className="font-mono text-xs font-bold uppercase tracking-wider text-ink-800">
                        {metric.label}
                      </div>
                      <p className="text-[11px] font-sans text-ink-700 mt-1 leading-snug">
                        {metric.description}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Visual Preview / Code Mockup Card */}
                <div className="relative bg-ink-900 text-white rounded-sm p-4 border-2 border-ink-950 shadow-brutal-sm">
                  <WashiTape className="-top-3 right-6" angle={-2} width={65} />
                  
                  {/* Browser Bar */}
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-ink-800">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    </div>
                    <span className="font-mono text-[10px] text-ink-400">
                      preview://{project.id}
                    </span>
                  </div>

                  {/* Mockup Preview Content */}
                  {project.id === 'cuetmate' ? (
                    <div className="space-y-3 font-mono text-xs">
                      <div className="bg-ink-800 p-3 rounded-xs border border-ink-700">
                        <div className="flex items-center justify-between text-brand-yellow text-[11px] mb-1">
                          <span>DIAGNOSTIC TEST ENGINE</span>
                          <span className="bg-emerald-900 text-emerald-300 px-1.5 py-0.5 rounded-2xs text-[9px]">
                            ACTIVE
                          </span>
                        </div>
                        <div className="text-ink-200 text-xs">
                          Question 42 of 150 <span className="text-ink-500">•</span> Time remaining: 48:20
                        </div>
                        <div className="w-full bg-ink-950 h-1.5 rounded-full mt-2 overflow-hidden">
                          <div className="bg-brand-blue h-full w-[45%]" />
                        </div>
                      </div>

                      <div className="bg-ink-950 p-2.5 rounded-xs border border-ink-800 text-[11px] text-ink-300 space-y-1">
                        <div className="text-emerald-400 flex items-center gap-1 font-semibold">
                          <Sparkles className="w-3 h-3" />
                          <span>AI Learning Insight</span>
                        </div>
                        <p className="text-ink-400">
                          High accuracy in core modules. Recommended review in advanced analytical sets.
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-3 font-mono text-xs">
                      <div className="bg-ink-800 p-3 rounded-xs border border-ink-700">
                        <div className="flex items-center justify-between text-brand-mint text-[11px] mb-1">
                          <span>SHOPIFY THEME STOREFRONT</span>
                          <span className="bg-amber-900 text-amber-300 px-1.5 py-0.5 rounded-2xs text-[9px]">
                            OPTIMIZED
                          </span>
                        </div>
                        <div className="text-ink-200 text-xs">
                          Liquid Template Engine <span className="text-ink-500">•</span> Modular Sections
                        </div>
                        <div className="flex gap-1.5 mt-2">
                          <div className="flex-1 bg-ink-950 p-1.5 rounded text-[10px] text-center text-ink-300">
                            Mobile Cart: Fast
                          </div>
                          <div className="flex-1 bg-ink-950 p-1.5 rounded text-[10px] text-center text-emerald-400">
                            Zero Shift: 100%
                          </div>
                        </div>
                      </div>

                      <div className="bg-ink-950 p-2.5 rounded-xs border border-ink-800 text-[11px] text-ink-300 space-y-1">
                        <div className="text-brand-yellow flex items-center gap-1 font-semibold">
                          <Layers className="w-3 h-3" />
                          <span>Component Architecture</span>
                        </div>
                        <p className="text-ink-400">
                          Custom variant selector with instantaneous DOM price calculation and sticky CTA.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
