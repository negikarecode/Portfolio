import React from 'react';
import { Briefcase, Calendar, ChevronRight, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { RetroWindow } from './ui/RetroWindow';
import { useInView } from '../hooks/useInView';
import { ExperienceItem } from '../types';

const ExperienceCard: React.FC<{ exp: ExperienceItem; index: number }> = ({ exp, index }) => {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.1 });
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`bg-white border-2 border-olive-900 rounded-lg p-5 sm:p-6 shadow-retro-sm transition-all duration-200 hover:shadow-retro flex flex-col justify-between h-full ${
        isEven ? 'fade-rise-left' : 'fade-rise-right'
      } ${isInView ? 'is-visible' : ''}`}
    >
      <div className="space-y-3.5">
        <div className="pb-2.5 border-b border-olive-900/15">
          <div className="flex flex-wrap items-center justify-between gap-1.5 mb-2">
            <span className="inline-flex items-center gap-1 font-mono text-[11px] sm:text-xs px-2.5 py-0.5 bg-olive-900 text-white rounded-xs font-bold uppercase tracking-wide">
              <Briefcase className="w-3 h-3" aria-hidden="true" />
              <span>{exp.role}</span>
            </span>
            <span className="text-[11px] sm:text-xs font-mono font-semibold px-2 py-0.5 rounded-xs bg-peach text-olive-950 border border-olive-900/20">
              {exp.duration}
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-serif font-bold text-copper tracking-normal">
            {exp.company}
          </h3>

          <div className="flex flex-wrap items-center justify-between gap-1 text-xs font-mono text-olive-800 mt-2">
            <span className="inline-flex items-center gap-1 bg-olive-100 px-2 py-0.5 rounded-xs border border-olive-900/15 font-medium">
              <Calendar className="w-3 h-3 text-copper" aria-hidden="true" />
              <span>{exp.period}</span>
            </span>
            <span className="inline-flex items-center gap-1 text-olive-700">
              <MapPin className="w-3 h-3" aria-hidden="true" />
              <span>{exp.location}</span>
            </span>
          </div>
        </div>

        {/* Bullets: Key Points Only */}
        <ul className="space-y-2 pt-1">
          {exp.bullets.map((bullet, bIdx) => (
            <li
              key={bIdx}
              className={`flex items-start gap-2 text-xs sm:text-sm text-olive-900 font-sans leading-relaxed transition-all duration-300 ${
                isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
              }`}
              style={{ transitionDelay: `${bIdx * 40}ms` }}
            >
              <ChevronRight className="w-4 h-4 text-copper mt-0.5 shrink-0" aria-hidden="true" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Tech Stack Pills */}
      <div className="mt-5 pt-3 border-t border-dashed border-olive-900/15 flex flex-wrap gap-1.5">
        {exp.techStack.map((tech) => (
          <span
            key={tech}
            className="font-mono text-[11px] px-2 py-0.5 bg-olive-100 text-olive-900 rounded-xs border border-olive-900/20 font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export const Experience: React.FC = () => {
  const { experiences } = portfolioData;

  return (
    <section id="experience" className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-[1360px] mx-auto">
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
            "Front-end development, Shopify engineering, and business development across industry internships."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {experiences.map((exp, idx) => (
            <ExperienceCard key={exp.company} exp={exp} index={idx} />
          ))}
        </div>
      </RetroWindow>
    </section>
  );
};
