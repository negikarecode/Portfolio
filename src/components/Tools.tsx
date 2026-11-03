import React from 'react';
import { RetroWindow } from './ui/RetroWindow';
import { RetroToolIcon } from './ui/RetroToolIcon';

export const Tools: React.FC = () => {
  const toolsList: Array<{
    name: string;
    iconType: 
      | 'react' 
      | 'python' 
      | 'javascript' 
      | 'django' 
      | 'shopify' 
      | 'html' 
      | 'mysql' 
      | 'tailwind' 
      | 'git' 
      | 'vscode' 
      | 'api';
  }> = [
    { name: 'React', iconType: 'react' },
    { name: 'Python', iconType: 'python' },
    { name: 'JavaScript', iconType: 'javascript' },
    { name: 'Django', iconType: 'django' },
    { name: 'Shopify Liquid', iconType: 'shopify' },
    { name: 'HTML5 & CSS3', iconType: 'html' },
    { name: 'MySQL', iconType: 'mysql' },
    { name: 'Tailwind CSS', iconType: 'tailwind' },
    { name: 'Git & GitHub', iconType: 'git' },
    { name: 'VS Code', iconType: 'vscode' },
    { name: 'RESTful APIs', iconType: 'api' },
  ];

  return (
    <section id="tools" className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
      <RetroWindow
        id="tools-window"
        title="C:\ARYAN\tools"
        showAccentBar={true}
        className="shadow-retro-lg"
      >
        <div className="text-center mb-8">
          <h2 className="font-mono text-xl sm:text-2xl font-bold uppercase tracking-widest text-olive-900">
            TOOLS & STACK
          </h2>
          <p className="font-serif italic text-base sm:text-lg text-olive-800 mt-1 leading-relaxed">
            "Languages, frameworks, and tools I use to build and ship."
          </p>
        </div>

        {/* 4-Column Tool Icon Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 items-center justify-center py-3">
          {toolsList.map((tool) => (
            <RetroToolIcon
              key={tool.name}
              name={tool.name}
              iconType={tool.iconType}
            />
          ))}
        </div>

        {/* Footnote bar (Clean wording: 11 tools, used across my projects) */}
        <div className="mt-8 pt-5 border-t-2 border-dashed border-olive-900/15 flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm font-mono text-olive-800">
          <span>11 tools</span>
          <span className="font-bold text-copper">Used across my projects</span>
        </div>
      </RetroWindow>
    </section>
  );
};
