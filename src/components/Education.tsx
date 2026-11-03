import React from 'react';
import { Award, Calendar, GraduationCap, MapPin, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { RetroWindow } from './ui/RetroWindow';

export const Education: React.FC = () => {
  const { education, certifications } = portfolioData;

  return (
    <section id="education" className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
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
          <p className="font-serif italic text-sm text-olive-700 mt-1">
            "Formal foundations in computer science and professional software engineering certifications."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          {/* Formal Education (md:col-span-7) */}
          <div className="md:col-span-7 space-y-4">
            <div className="flex items-center gap-2 mb-1">
              <GraduationCap className="w-4 h-4 text-copper" />
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-olive-800">
                Academic Degrees
              </h3>
            </div>

            {education.map((edu) => (
              <div
                key={edu.school}
                className="bg-white border-2 border-olive-900 rounded-lg p-5 shadow-retro-sm"
              >
                <div className="flex flex-wrap items-start justify-between gap-2 pb-2 border-b border-olive-900/10">
                  <div>
                    <h4 className="font-serif font-bold text-lg text-copper">
                      {edu.degree}
                    </h4>
                    <p className="font-sans text-xs sm:text-sm font-semibold text-olive-800">
                      {edu.school}
                    </p>
                  </div>
                  <div className="flex flex-col sm:items-end text-xs font-mono text-olive-600">
                    <span className="inline-flex items-center gap-1 bg-olive-100 px-2 py-0.5 rounded-xs font-medium">
                      <Calendar className="w-3 h-3 text-copper" />
                      <span>{edu.period}</span>
                    </span>
                    <span className="inline-flex items-center gap-1 text-olive-500 mt-1 text-[11px]">
                      <MapPin className="w-3 h-3" />
                      <span>{edu.location}</span>
                    </span>
                  </div>
                </div>

                <p className="mt-2 text-xs font-sans text-olive-700 leading-relaxed">
                  {edu.details}
                </p>
              </div>
            ))}
          </div>

          {/* Professional Certification (md:col-span-5) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2 mb-1">
              <Award className="w-4 h-4 text-copper" />
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-olive-800">
                Certification
              </h3>
            </div>

            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="bg-white border-2 border-olive-900 rounded-lg p-5 shadow-retro-sm"
              >
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-peach text-olive-950 font-mono text-[11px] font-bold rounded-xs border border-olive-900/20 mb-2 uppercase">
                  <span>{cert.issuer}</span>
                  <span>•</span>
                  <span>{cert.year}</span>
                </div>

                <h4 className="font-serif font-bold text-lg text-copper leading-tight">
                  {cert.title}
                </h4>

                <p className="mt-1 text-xs font-sans text-olive-600">
                  Comprehensive full stack verification covering React, server architectures, databases, and CI/CD pipelines.
                </p>

                <div className="mt-3 pt-3 border-t border-olive-900/10 space-y-1.5">
                  <span className="font-mono text-[10px] font-bold text-olive-700 uppercase tracking-wider block">
                    Validated Competencies:
                  </span>
                  {cert.skillsVerified.map((skill, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-1.5 text-xs font-sans text-olive-800">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
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
