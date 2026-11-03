import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, GraduationCap, MapPin, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { WashiTape } from './ui/WashiTape';

export const Education: React.FC = () => {
  const { education, certifications } = portfolioData;

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-10">
        <span className="bg-brand-lavender px-2.5 py-1 text-xs font-mono font-bold border border-ink-950/20 rounded-xs uppercase">
          # 05
        </span>
        <h2 className="font-pixel text-4xl sm:text-5xl font-bold text-ink-950 tracking-tight">
          EDUCATION & CREDENTIALS
        </h2>
        <div className="flex-1 border-b-2 border-dashed border-ink-200 ml-2" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Left Column: Formal Education (md:col-span-7) */}
        <div className="md:col-span-7 space-y-6">
          <div className="flex items-center gap-2 mb-2">
            <GraduationCap className="w-5 h-5 text-brand-blue" />
            <h3 className="font-sans font-bold text-lg text-ink-950">
              Academic Background
            </h3>
          </div>

          <div className="space-y-4">
            {education.map((edu, idx) => (
              <motion.div
                key={edu.school}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.1 }}
                className="bg-white border-2 border-ink-950 rounded-sm p-6 shadow-brutal-sm hover:-translate-y-0.5 transition-transform"
              >
                <div className="flex flex-wrap items-start justify-between gap-2 pb-2 border-b border-ink-100">
                  <div>
                    <h4 className="font-sans font-bold text-lg text-ink-950">
                      {edu.degree}
                    </h4>
                    <p className="font-sans text-sm font-semibold text-brand-blue mt-0.5">
                      {edu.school}
                    </p>
                  </div>
                  <div className="flex flex-col sm:items-end text-xs font-mono text-ink-600">
                    <span className="inline-flex items-center gap-1 bg-ink-100 px-2 py-0.5 rounded-xs font-medium">
                      <Calendar className="w-3 h-3 text-ink-500" />
                      <span>{edu.period}</span>
                    </span>
                    <span className="inline-flex items-center gap-1 text-ink-500 mt-1">
                      <MapPin className="w-3 h-3" />
                      <span>{edu.location}</span>
                    </span>
                  </div>
                </div>

                <p className="mt-3 text-xs sm:text-sm text-ink-700 font-sans leading-relaxed">
                  {edu.details}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column: Professional Certification (md:col-span-5) */}
        <div className="md:col-span-5 space-y-6">
          <div className="flex items-center gap-2 mb-2">
            <Award className="w-5 h-5 text-amber-500" />
            <h3 className="font-sans font-bold text-lg text-ink-950">
              Certifications
            </h3>
          </div>

          {certifications.map((cert) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, x: 15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
              className="relative bg-white border-2 border-ink-950 rounded-sm p-6 shadow-brutal group"
            >
              <WashiTape className="-top-3 right-6" angle={1.5} width={65} />

              {/* Issuer Badge */}
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-brand-yellow text-ink-950 font-mono text-xs font-bold rounded-xs border border-ink-950/20 mb-3 uppercase tracking-wider">
                <span>{cert.issuer}</span>
                <span className="text-ink-400">•</span>
                <span>{cert.year}</span>
              </div>

              <h4 className="font-sans font-bold text-xl text-ink-950 leading-snug">
                {cert.title}
              </h4>

              <p className="mt-2 text-xs font-mono text-ink-500">
                Professional Full Stack Credential covering modern web frameworks, application development, and cloud services.
              </p>

              <div className="mt-4 pt-4 border-t border-ink-100 space-y-2">
                <span className="font-mono text-[11px] font-bold text-ink-600 uppercase tracking-wider block">
                  Key Skills Validated:
                </span>
                <ul className="space-y-1.5">
                  {cert.skillsVerified.map((skill, sIdx) => (
                    <li key={sIdx} className="flex items-center gap-2 text-xs font-sans text-ink-800">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
