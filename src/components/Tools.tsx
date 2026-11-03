import React from 'react';
import { RetroWindow } from './ui/RetroWindow';
import { RetroToolIcon } from './ui/RetroToolIcon';

interface ToolItem {
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
}

interface ToolGroup {
  category: string;
  tools: ToolItem[];
}

export const Tools: React.FC = () => {
  const toolGroups: ToolGroup[] = [
    {
      category: 'Frontend',
      tools: [
        { name: 'React', iconType: 'react' },
        { name: 'JavaScript', iconType: 'javascript' },
        { name: 'Shopify Liquid', iconType: 'shopify' },
        { name: 'HTML5 & CSS3', iconType: 'html' },
        { name: 'Tailwind CSS', iconType: 'tailwind' },
      ],
    },
    {
      category: 'Backend and Data',
      tools: [
        { name: 'Python', iconType: 'python' },
        { name: 'Django', iconType: 'django' },
        { name: 'MySQL', iconType: 'mysql' },
        { name: 'RESTful APIs', iconType: 'api' },
      ],
    },
    {
      category: 'Tools',
      tools: [
        { name: 'Git & GitHub', iconType: 'git' },
        { name: 'VS Code', iconType: 'vscode' },
      ],
    },
  ];

  return (
    <section id="tools" className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
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
            "Technical stack grouped by engineering domain."
          </p>
        </div>

        {/* Grouped Tool Sections: Frontend, Backend and Data, Tools */}
        <div className="space-y-8">
          {toolGroups.map((group) => (
            <div
              key={group.category}
              className="bg-white/80 border-2 border-olive-900/25 rounded-lg p-5 sm:p-6 shadow-retro-xs"
            >
              {/* Group Header */}
              <div className="flex items-center justify-between pb-3 mb-5 border-b-2 border-olive-900/15">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-peach border border-olive-900/20" />
                  <h3 className="font-mono text-sm sm:text-base font-bold uppercase tracking-wider text-olive-950">
                    {group.category}
                  </h3>
                </div>
                <span className="font-mono text-xs text-olive-700 bg-olive-100 px-2 py-0.5 rounded-xs border border-olive-900/15">
                  {group.tools.length} items
                </span>
              </div>

              {/* Tool Icons Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5 sm:gap-6 items-center justify-items-center">
                {group.tools.map((tool) => (
                  <RetroToolIcon
                    key={tool.name}
                    name={tool.name}
                    iconType={tool.iconType}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footnote bar (Clean count: exactly 11 tools) */}
        <div className="mt-8 pt-5 border-t-2 border-dashed border-olive-900/15 flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm font-mono text-olive-800">
          <span>11 tools</span>
          <span className="font-bold text-copper">Used across my projects</span>
        </div>
      </RetroWindow>
    </section>
  );
};
