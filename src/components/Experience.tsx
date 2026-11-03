import React from 'react';
import { Briefcase, Calendar, ChevronRight, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { RetroWindow } from './ui/RetroWindow';

export const Experience: React.FC = () => {
  const { experiences } = portfolioData;

  return (
    <section id="experience" className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <RetroWindow
        id="experience-window"
        title="C:\ARYAN\experience"
        showAccentBar={true}
        className="shadow-retro-lg"
      >
        <div className="text-center mb-8">
          <h2 className="font-mono text-xl sm:text-2xl font-bold uppercase tracking-widest text-olive-900">
            WORK EXPERIENCE
          </h2>
          <p className="font-serif italic text-sm text-olive-700 mt-1">
            "Hands-on engineering in fast-paced production environments."
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp) => (
            <div
              key={exp.company}
              className="bg-white border-2 border-olive-900 rounded-lg p-6 sm:p-7 shadow-retro-sm"
            >
              <div className="flex flex-wrap items-start justify-between gap-3 pb-3 border-b border-olive-900/15">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="inline-flex items-center gap-1 font-mono text-xs px-2.5 py-0.5 bg-olive-900 text-white rounded-xs font-bold uppercase">
                      <Briefcase className="w-3 h-3" />
                      <span>{exp.role}</span>
                    </span>
                    <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded-xs bg-peach text-olive-950 border border-olive-900/20">
                      {exp.duration}
                    </span>
                  </div>

                  <h3 className="text-2xl font-serif font-bold text-copper">
                    {exp.company}
                  </h3>
                </div>

                <div className="flex flex-col sm:items-end text-xs font-mono text-olive-700">
                  <span className="inline-flex items-center gap-1 bg-olive-100 px-2 py-0.5 rounded-xs border border-olive-900/15 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-copper" />
                    <span>{exp.period}</span>
                  </span>
                  <span className="inline-flex items-center gap-1 text-olive-600 mt-1">
                    <MapPin className="w-3 h-3" />
                    <span>{exp.location}</span>
                  </span>
                </div>
              </div>

              {/* Description & Bullets */}
              <div className="mt-4 space-y-3">
                <p className="text-xs sm:text-sm font-sans italic text-olive-800">
                  {exp.description}
                </p>

                <ul className="space-y-2 pt-1">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2 text-xs sm:text-sm text-olive-800 font-sans leading-relaxed">
                      <ChevronRight className="w-4 h-4 text-copper mt-0.5 shrink-0" />
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

              {/* Tech Stack Pills */}
              <div className="mt-5 pt-3 border-t border-dashed border-olive-900/15 flex flex-wrap gap-1.5">
                {exp.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[11px] px-2 py-0.5 bg-olive-100 text-olive-800 rounded-xs border border-olive-900/15 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </RetroWindow>
    </section>
  );
};
