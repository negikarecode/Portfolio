import React from 'react';
import { WindowProvider } from './context/WindowContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Works } from './components/Works';
import { Tools } from './components/Tools';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Taskbar } from './components/ui/Taskbar';

export const App: React.FC = () => {
  return (
    <WindowProvider>
      <div className="min-h-screen relative text-olive-900 selection:bg-peach selection:text-olive-950 flex flex-col justify-between">
        {/* Skip to Content for Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 px-4 py-2.5 bg-olive-900 text-white font-mono text-xs font-bold rounded-sm border-2 border-peach"
        >
          Skip to main content
        </a>

        {/* Persistent OS Top Bar */}
        <Navbar />

        {/* Main OS Desktop Canvas */}
        <main id="main-content" className="relative z-10 pt-14 flex-1">
          <Hero />
          <Works />
          <Tools />
          <Experience />
          <Education />
          <Contact />
        </main>

        {/* OS Desktop Bottom Taskbar & Fullscreen Modal */}
        <Taskbar />

        {/* OS Footer */}
        <Footer />
      </div>
    </WindowProvider>
  );
};

export default App;
