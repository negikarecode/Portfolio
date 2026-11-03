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
    { name: 'HTML & CSS', iconType: 'html' },
    { name: 'MySQL', iconType: 'mysql' },
    { name: 'Tailwind CSS', iconType: 'tailwind' },
    { name: 'Git & GitHub', iconType: 'git' },
    { name: 'VS Code', iconType: 'vscode' },
    { name: 'REST APIs', iconType: 'api' },
  ];

  return (
    <section id="tools" className="py-12 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
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
          <p className="font-serif italic text-sm text-olive-700 mt-1">
            "Engineered with reliable tools, modern frameworks, and clean code."
          </p>
        </div>

        {/* 4-Column Tool Icon Grid (Matching Design 2 Panel 3) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 items-center justify-center py-2">
          {toolsList.map((tool) => (
            <RetroToolIcon
              key={tool.name}
              name={tool.name}
              iconType={tool.iconType}
            />
          ))}
        </div>

        {/* Footnote bar */}
        <div className="mt-8 pt-5 border-t-2 border-dashed border-olive-900/15 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-olive-700">
          <span>Total Modules: 11 Active</span>
          <span className="font-bold text-copper">Verified in Production</span>
        </div>
      </RetroWindow>
    </section>
  );
};
