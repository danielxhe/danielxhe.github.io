import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Timeline } from './components/Timeline';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ChevronUpIcon } from 'lucide-react';

export function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sections = ['about', 'projects', 'contact'];
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);

      // Active section tracking — use slice to avoid mutating original array
      const reversed = [...sections].reverse();
      for (const id of reversed) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full min-h-screen bg-warm-50 font-body">
      <Navbar activeSection={activeSection} />
      <Hero />
      <About />
      <Timeline />
      <Projects />
      <Skills />
      <Contact />
      <Footer />

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={() => {
            const startY = window.scrollY;
            const duration = 600;
            let startTime: number | null = null;
            const easeInOutCubic = (t: number) =>
              t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
            const step = (timestamp: number) => {
              if (!startTime) startTime = timestamp;
              const elapsed = timestamp - startTime;
              const progress = Math.min(elapsed / duration, 1);
              window.scrollTo(0, startY * (1 - easeInOutCubic(progress)));
              if (progress < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
          }}
          className="fixed bottom-6 right-6 z-50 w-10 h-10 bg-accent text-white rounded-full shadow-lg flex items-center justify-center hover:bg-accent-dark transition-all duration-200 hover:scale-110"
          aria-label="Scroll to top">
          <ChevronUpIcon className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}