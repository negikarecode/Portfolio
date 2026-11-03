import React from 'react';
import { Briefcase, Calendar, ChevronRight, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { RetroWindow } from './ui/RetroWindow';

export const Experience: React.FC = () => {
  const { experiences } = portfolioData;

  return (
    <section id="experience" className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
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
          <p className="font-serif italic text-base sm:text-lg text-olive-800 mt-1 leading-relaxed">
            "Front-end and Shopify development across two internships."
          </p>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.company}
              className="bg-white border-2 border-olive-900 rounded-lg p-6 sm:p-8 shadow-retro-sm"
            >
              <div className="flex flex-wrap items-start justify-between gap-3 pb-3 mb-4 border-b border-olive-900/15">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="inline-flex items-center gap-1 font-mono text-xs px-2.5 py-1 bg-olive-900 text-white rounded-xs font-bold uppercase tracking-wide">
                      <Briefcase className="w-3 h-3" aria-hidden="true" />
                      <span>{exp.role}</span>
                    </span>
                    <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-xs bg-peach text-olive-950 border border-olive-900/20">
                      {exp.duration}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-copper tracking-normal">
                    {exp.company}
                  </h3>
                </div>

                <div className="flex flex-col sm:items-end text-xs sm:text-sm font-mono text-olive-800">
                  <span className="inline-flex items-center gap-1.5 bg-olive-100 px-2.5 py-1 rounded-xs border border-olive-900/15 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-copper" aria-hidden="true" />
                    <span>{exp.period}</span>
                  </span>
                  <span className="inline-flex items-center gap-1 text-olive-700 mt-1 text-xs">
                    <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>{exp.location}</span>
                  </span>
                </div>
              </div>

              {/* Description & Bullets (font-size >= 16px, line-height 1.6-1.7, space-y-3) */}
              <div className="space-y-3">
                <p className="text-sm sm:text-base font-sans italic text-olive-900 leading-relaxed">
                  {exp.description}
                </p>

                <ul className="space-y-3 pt-2">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5 text-base text-olive-900 font-sans leading-[1.65]">
                      <ChevronRight className="w-5 h-5 text-copper mt-0.5 shrink-0" aria-hidden="true" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Pills (spacing gap-2 to gap-2.5) */}
              <div className="mt-6 pt-4 border-t border-dashed border-olive-900/15 flex flex-wrap gap-2 sm:gap-2.5">
                {exp.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs px-2.5 py-1 bg-olive-100 text-olive-900 rounded-xs border border-olive-900/20 font-medium"
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
