import React from 'react';
import { Award, Calendar, GraduationCap, MapPin, CheckCircle2, ExternalLink, FileText } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { RetroWindow } from './ui/RetroWindow';
import { useInView } from '../hooks/useInView';

export const Education: React.FC = () => {
  const { education, certifications } = portfolioData;
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section id="education" className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <RetroWindow
        id="education-window"
        title="C:\ARYAN\education"
        showAccentBar={true}
        className="shadow-retro-lg"
      >
        <div className="text-center mb-8">
          <h2 className="font-mono text-xl sm:text-2xl font-bold uppercase tracking-widest text-olive-900">
            EDUCATION & CREDENTIALS
          </h2>
          <p className="font-serif italic text-base sm:text-lg text-olive-800 mt-1 leading-relaxed">
            "Computer science foundations, plus an IBM full stack certification."
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          {/* Formal Education (md:col-span-7) */}
          <div className="md:col-span-7 space-y-4">
            <div className="flex items-center gap-2 mb-1">
              <GraduationCap className="w-4 h-4 text-copper" aria-hidden="true" />
              <h3 className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-olive-900">
                Academic Degrees
              </h3>
            </div>

            {education.map((edu, idx) => (
              <div
                key={edu.school}
                className={`bg-white border-2 border-olive-900 rounded-lg p-5 sm:p-6 shadow-retro-sm transition-all duration-200 hover:shadow-retro fade-rise-left ${
                  isInView ? 'is-visible' : ''
                }`}
                style={{ transitionDelay: `${idx * 80}ms` }}
              >
                <div
                  className={`flex flex-wrap items-start justify-between gap-2 ${
                    edu.details && edu.details.trim() !== ''
                      ? 'pb-2.5 border-b border-olive-900/15'
                      : ''
                  }`}
                >
                  <div>
                    <h4 className="font-serif font-bold text-xl text-copper tracking-normal">
                      {edu.degree}
                    </h4>
                    <p className="font-sans text-sm sm:text-base font-semibold text-olive-900 mt-0.5">
                      {edu.school}
                    </p>
                  </div>
                  <div className="flex flex-col sm:items-end text-xs sm:text-sm font-mono text-olive-800">
                    <span className="inline-flex items-center gap-1.5 bg-olive-100 px-2.5 py-0.5 rounded-xs font-semibold">
                      <Calendar className="w-3.5 h-3.5 text-copper" aria-hidden="true" />
                      <span>{edu.period}</span>
                    </span>
                    <span className="inline-flex items-center gap-1 text-olive-700 mt-1 text-xs">
                      <MapPin className="w-3 h-3" aria-hidden="true" />
                      <span>{edu.location}</span>
                    </span>
                  </div>
                </div>

                {edu.details && edu.details.trim() !== '' && (
                  <p className="mt-3 text-base text-olive-900 font-sans leading-[1.65]">
                    {edu.details}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Professional Certification (md:col-span-5) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2 mb-1">
              <Award className="w-4 h-4 text-copper" aria-hidden="true" />
              <h3 className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-olive-900">
                Certification
              </h3>
            </div>

            {certifications.map((cert) => (
              <div
                key={cert.title}
                className={`bg-white border-2 border-olive-900 rounded-lg p-5 sm:p-6 shadow-retro-sm transition-all duration-200 hover:shadow-retro fade-rise-right ${
                  isInView ? 'is-visible' : ''
                }`}
                style={{ transitionDelay: '100ms' }}
              >
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-peach text-olive-950 font-mono text-xs font-bold rounded-xs border border-olive-900/20 mb-2.5 uppercase tracking-wide">
                  <span>{cert.issuer}</span>
                  <span>•</span>
                  <span>{cert.year}</span>
                </div>

                <h4 className="font-serif font-bold text-xl text-copper leading-tight tracking-normal">
                  {cert.title}
                </h4>

                <p className="mt-2 text-sm sm:text-base font-sans text-olive-900 leading-relaxed">
                  Covers front-end development with React, back-end services, databases, and DevOps foundations.
                </p>

                {/* Primary Action: View Certificate PDF with subtle shine sweep on hover */}
                {cert.certificatePdfUrl && (
                  <div className="mt-4">
                    <a
                      href={cert.certificatePdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="retro-btn shine-sweep-btn inline-flex items-center justify-center gap-2 w-full sm:w-auto px-4 py-2.5 min-h-[44px] bg-olive-900 text-white font-mono text-xs font-bold rounded-sm border-2 border-olive-900 hover:bg-copper shadow-retro-sm focus-visible:ring-2 focus-visible:ring-olive-900 focus-visible:outline-none whitespace-nowrap"
                    >
                      <FileText className="w-4 h-4 text-peach shrink-0" aria-hidden="true" />
                      <span className="whitespace-nowrap">View certificate</span>
                      <ExternalLink className="w-3.5 h-3.5 opacity-80 shrink-0" aria-hidden="true" />
                    </a>
                  </div>
                )}

                {/* Secondary Action */}
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-mono font-bold text-copper hover:text-copper-dark mt-2.5 underline"
                  >
                    <span>Verify Credential</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}

                <div className="mt-4 pt-3.5 border-t border-olive-900/15 space-y-2">
                  <span className="font-mono text-xs font-bold text-olive-900 uppercase tracking-wider block">
                    Core Competencies:
                  </span>
                  {cert.topicsCovered.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className={`flex items-center gap-2 text-sm sm:text-base font-sans text-olive-900 transition-all duration-300 ${
                        isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
                      }`}
                      style={{ transitionDelay: `${sIdx * 40}ms` }}
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" aria-hidden="true" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </RetroWindow>
    </section>
  );
};
