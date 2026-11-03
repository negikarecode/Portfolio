import React from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { WashiTape } from './ui/WashiTape';

export const Skills: React.FC = () => {
  const { skills } = portfolioData;

  const colorClasses = {
    yellow: 'bg-brand-yellow text-ink-950 border-ink-950/20 hover:bg-amber-300',
    mint: 'bg-brand-mint text-ink-950 border-ink-950/20 hover:bg-emerald-300',
    pink: 'bg-brand-pink text-ink-950 border-ink-950/20 hover:bg-rose-300',
    sky: 'bg-brand-sky text-ink-950 border-ink-950/20 hover:bg-sky-300',
    lavender: 'bg-brand-lavender text-ink-950 border-ink-950/20 hover:bg-purple-300',
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-10">
        <span className="bg-brand-sky px-2.5 py-1 text-xs font-mono font-bold border border-ink-950/20 rounded-xs uppercase">
          # 04
        </span>
        <h2 className="font-pixel text-4xl sm:text-5xl font-bold text-ink-950 tracking-tight">
          SKILLS & TOOLKIT
        </h2>
        <div className="flex-1 border-b-2 border-dashed border-ink-200 ml-2" />
      </div>

      <div className="relative bg-white border-2 border-ink-950 rounded-sm shadow-brutal p-6 sm:p-10">
        <WashiTape className="-top-3 left-1/2 -translate-x-1/2" angle={0.5} width={90} />

        {/* Playful Handwritten Banner */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-ink-200">
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-brand-blue" />
            <h3 className="font-sans font-bold text-lg text-ink-950">
              Technical Competencies
            </h3>
          </div>
          <span className="font-handwriting text-xl text-ink-600">
            * no arbitrary 90% bars, just battle-tested tools
          </span>
        </div>

        {/* Skill Groups */}
        <div className="mt-8 space-y-8">
          {skills.map((category, catIdx) => (
            <div key={category.title} className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-ink-950" />
                <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-ink-600">
                  {category.title}
                </h4>
              </div>

              <div className="flex flex-wrap gap-2.5 sm:gap-3">
                {category.skills.map((skill, sIdx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.25, delay: (catIdx * 6 + sIdx) * 0.03 }}
                    whileHover={{ y: -3, scale: 1.04 }}
                    className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm border shadow-xs font-mono text-xs sm:text-sm font-semibold transition-all duration-150 cursor-default select-none ${
                      colorClasses[skill.tagColor]
                    }`}
                  >
                    <span className="text-[10px] opacity-70">✦</span>
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Feature Box */}
        <div className="mt-10 pt-6 border-t border-dashed border-ink-200 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono text-ink-700">
          <div className="bg-paper p-3 rounded-xs border border-ink-200">
            <span className="font-bold text-ink-950 block mb-0.5">⚡ FRONT-END SPEED</span>
            Semantic HTML, responsive Tailwind, zero layout shift, component reusability.
          </div>
          <div className="bg-paper p-3 rounded-xs border border-ink-200">
            <span className="font-bold text-ink-950 block mb-0.5">🛠 BACK-END INTEGRITY</span>
            Python, Django REST APIs, MySQL relational data modeling, secure auth.
          </div>
          <div className="bg-paper p-3 rounded-xs border border-ink-200">
            <span className="font-bold text-ink-950 block mb-0.5">🛒 E-COMMERCE LOGIC</span>
            Shopify Liquid custom sections, mobile cart journeys, storefront tuning.
          </div>
        </div>
      </div>
    </section>
  );
};
