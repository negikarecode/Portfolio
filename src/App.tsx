import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Works } from './components/Works';
import { Tools } from './components/Tools';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen relative text-olive-900 selection:bg-peach selection:text-olive-950">
      {/* Skip to Content for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 px-4 py-2 bg-olive-900 text-white font-mono text-xs font-bold rounded-sm border-2 border-peach"
      >
        Skip to main content
      </a>

      {/* Persistent OS Top Bar */}
      <Navbar />

      {/* Main OS Desktop Canvas */}
      <main id="main-content" className="relative z-10 pt-10">
        <Hero />
        <Works />
        <Tools />
        <Experience />
        <Education />
        <Contact />
      </main>

      {/* OS Footer */}
      <Footer />
    </div>
  );
};

export default App;
