import React, { useState, useEffect } from 'react';
import { RetroWindow } from './ui/RetroWindow';
import { RetroToolIcon } from './ui/RetroToolIcon';
import { useInView } from '../hooks/useInView';

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
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1 });
  const [displayCount, setDisplayCount] = useState(0);
  const totalTools = 11;

  useEffect(() => {
    if (!isInView) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplayCount(totalTools);
      return;
    }

    const duration = 600;
    const startTime = performance.now();

    const animateCount = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / duration);
      const current = Math.floor(progress * totalTools);
      setDisplayCount(current);

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      } else {
        setDisplayCount(totalTools);
      }
    };

    const rafId = requestAnimationFrame(animateCount);
    return () => cancelAnimationFrame(rafId);
  }, [isInView]);

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

  let globalToolIndex = 0;

  return (
    <section id="tools" ref={ref} className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
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
            "What I use to build and ship."
          </p>
        </div>

        {/* 3 Equal-Height Columns on Desktop, Stacked on Mobile with staggered entrance */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {toolGroups.map((group, gIdx) => (
            <div
              key={group.category}
              className={`bg-white/80 border-2 border-olive-900/25 rounded-lg p-5 sm:p-6 shadow-retro-xs flex flex-col h-full fade-rise-item ${
                isInView ? 'is-visible' : ''
              }`}
              style={{ transitionDelay: `${gIdx * 100}ms` }}
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
              <div className="grid grid-cols-2 gap-4 items-center justify-items-center flex-1 content-start">
                {group.tools.map((tool, tIdx) => {
                  const currentIdx = globalToolIndex++;
                  return (
                    <div
                      key={tool.name}
                      className={
                        group.tools.length === 5 && tIdx === 4
                          ? 'col-span-2 justify-self-center'
                          : ''
                      }
                    >
                      <RetroToolIcon
                        name={tool.name}
                        iconType={tool.iconType}
                        delayMs={currentIdx * 35}
                        isVisible={isInView}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Footnote bar (Clean count: animated count-up to 11 with screen reader fallback) */}
        <div className="mt-8 pt-5 border-t-2 border-dashed border-olive-900/15 flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm font-mono text-olive-800">
          <span aria-label="11 tools">
            <span aria-hidden="true" className="tools-counter-badge">{displayCount} tools</span>
            <span className="sr-only">11 tools</span>
          </span>
          <span className="font-bold text-copper">Used across my projects</span>
        </div>
      </RetroWindow>
    </section>
  );
};
