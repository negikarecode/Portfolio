import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, ChevronRight, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { WashiTape } from './ui/WashiTape';

export const Experience: React.FC = () => {
  const { experiences } = portfolioData;

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-10">
        <span className="bg-brand-mint px-2.5 py-1 text-xs font-mono font-bold border border-ink-950/20 rounded-xs uppercase">
          # 02
        </span>
        <h2 className="font-pixel text-4xl sm:text-5xl font-bold text-ink-950 tracking-tight">
          EXPERIENCE
        </h2>
        <div className="flex-1 border-b-2 border-dashed border-ink-200 ml-2" />
      </div>

      <div className="space-y-8">
        {experiences.map((exp, idx) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: idx * 0.15 }}
            className="relative bg-white border-2 border-ink-950 rounded-sm shadow-brutal p-6 sm:p-8 group hover:-translate-y-1 transition-all duration-300"
          >
            {/* Washi tape on alternating corners */}
            {idx % 2 === 0 ? (
              <WashiTape className="-top-3 left-10" angle={-1.5} width={70} />
            ) : (
              <WashiTape className="-top-3 right-10" angle={2} width={70} />
            )}

            {/* Top row: Dates and Company Header */}
            <div className="flex flex-wrap items-start justify-between gap-4 pb-4 border-b border-ink-200">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="inline-flex items-center gap-1 font-mono text-xs px-2.5 py-0.5 bg-ink-950 text-white rounded-xs font-bold uppercase tracking-wider">
                    <Briefcase className="w-3 h-3" />
                    <span>{exp.role}</span>
                  </span>
                  <span className={`text-xs font-mono font-semibold px-2 py-0.5 rounded-xs border border-ink-950/20 ${
                    exp.badgeColor === 'mint' ? 'bg-brand-mint' : 'bg-brand-yellow'
                  }`}>
                    {exp.duration}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-sans font-bold text-ink-950 flex items-center gap-2">
                  <span>{exp.company}</span>
                </h3>
              </div>

              {/* Period & Location Badge */}
              <div className="flex flex-col sm:items-end gap-1 text-xs font-mono text-ink-600">
                <span className="inline-flex items-center gap-1 bg-ink-100 px-2.5 py-1 rounded-xs border border-ink-200 text-ink-800 font-medium">
                  <Calendar className="w-3.5 h-3.5 text-brand-blue" />
                  <span>{exp.period}</span>
                </span>
                <span className="inline-flex items-center gap-1 text-ink-500">
                  <MapPin className="w-3 h-3" />
                  <span>{exp.location}</span>
                </span>
              </div>
            </div>

            {/* Role Context & Impact Bullets */}
            <div className="mt-5 space-y-3">
              <p className="text-sm font-sans font-medium text-ink-800 italic">
                {exp.description}
              </p>

              <ul className="space-y-2.5 pt-2">
                {exp.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2.5 text-sm sm:text-base text-ink-700 leading-relaxed font-sans">
                    <span className="text-brand-blue mt-1 shrink-0 font-bold">
                      <ChevronRight className="w-4 h-4" />
                    </span>
                    <span>
                      {/* Highlight placeholders if present */}
                      {bullet.includes('[ADD METRIC') ? (
                        <>
                          {bullet.split(/(\[ADD METRIC[^\]]*\])/g).map((part, pIdx) =>
                            part.startsWith('[ADD METRIC') ? (
                              <mark
                                key={pIdx}
                                className="bg-brand-yellow px-1.5 py-0.5 rounded-xs font-mono text-xs font-bold text-ink-950 border border-brand-yellow-border mx-0.5"
                                title="Placeholder: customize with your exact verified metric"
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
            <div className="mt-6 pt-4 border-t border-dashed border-ink-200 flex flex-wrap items-center gap-2">
              <span className="font-mono text-xs font-bold text-ink-500 uppercase tracking-wider mr-1">
                Tech:
              </span>
              {exp.techStack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs px-2.5 py-0.5 bg-paper rounded-xs border border-ink-950/20 text-ink-800 font-medium hover:bg-brand-yellow/50 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
