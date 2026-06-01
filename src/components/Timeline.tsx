import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const events = [
  { year: '2019', label: 'Project Management Intern', sub: 'Syska Hennessy', icon: '🏗️' },
  { year: '2020', label: 'Co-founder', sub: 'The Math Ghost', icon: '📱' },
  { year: '2021', label: 'Clinical Technician', sub: 'Costco Optical', icon: '👓' },
  { year: '2022', label: 'Stony Brook University', sub: 'Biochemistry, B.S.', icon: '📓' },
  { year: '2024', label: 'Cancer Researcher', sub: 'Ojima Research Group', icon: '🧪' },
  { year: '2026', label: 'Quantitative Researcher', sub: '19V Research', icon: '📈' },
  { year: '2026', label: 'Graduating', sub: 'Magna Cum Laude', icon: '🎓' },
];

export function Timeline() {
  const ref = useRef(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const [cursorX, setCursorX] = useState<number | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    setCursorX((e.clientX - rect.left) / rect.width);
  };

  const handleMouseLeave = () => setCursorX(null);

  const getScale = (index: number): number => {
    if (cursorX === null) return 1;
    const itemPos = index / (events.length - 1);
    const dist = Math.abs(cursorX - itemPos);
    const maxScale = 1.4;
    const falloff = 0.08;
    return Math.max(1, maxScale - (dist / falloff) * (maxScale - 1));
  };

  return (
    <section className="w-full bg-warm-50 py-12 md:py-16 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut' }}>

          <h2 className="font-display text-2xl font-bold text-gray-900 mb-2">Experience</h2>
          <div className="w-12 h-1 bg-accent rounded-full mb-10" />

          {/* Desktop — cursor-responsive wave */}
          <div
            className="hidden md:block relative select-none"
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}>

            {/* Emojis above line */}
            <div className="flex justify-between mb-2">
              {events.map((event, i) => {
                const scale = getScale(i);
                return (
                  <motion.div
                    key={i}
                    className="flex justify-center"
                    style={{ width: `${100 / events.length}%` }}
                    animate={{ scale, y: -(scale - 1) * 12 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 25 }}>
                    <span style={{ fontSize: '1.4rem', display: 'block' }}>{event.icon}</span>
                  </motion.div>
                );
              })}
            </div>

            {/* Line + ticks */}
            <div className="relative h-4">
              <div className="absolute top-2 left-0 right-0 h-0.5 bg-warm-200" />
              <motion.div
                className="absolute top-2 left-0 h-0.5 bg-accent origin-left"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 1.4, delay: 0.3, ease: 'easeOut' }}
                style={{ right: 0 }}
              />
              <div className="absolute top-0 left-0 right-0 flex justify-between">
                {events.map((_, i) => (
                  <div key={i} className="flex justify-center" style={{ width: `${100 / events.length}%` }}>
                    <div className="w-0.5 h-4 bg-accent" />
                  </div>
                ))}
              </div>
            </div>

            {/* Text below line */}
            <div className="flex justify-between mt-1">
              {events.map((event, i) => {
                const scale = getScale(i);
                return (
                  <motion.div
                    key={i}
                    className="flex flex-col items-center text-center"
                    style={{ width: `${100 / events.length}%` }}
                    animate={{ scale }}
                    transition={{ type: 'spring', stiffness: 400, damping: 25 }}>
                    <p className="font-body text-xs font-bold text-accent">{event.year}</p>
                    <p className="font-body text-xs font-semibold text-gray-700 leading-tight mt-0.5 px-1">{event.label}</p>
                    <p className="font-body text-xs text-gray-400 leading-tight mt-0.5">{event.sub}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Mobile swipeable */}
          <div className="md:hidden overflow-x-auto scrollbar-hide" style={{ WebkitOverflowScrolling: 'touch' }}>
            <div className="relative flex min-w-max pb-4">
              <div className="absolute top-8 left-0 right-0 h-0.5 bg-warm-200" />
              <motion.div
                className="absolute top-8 left-0 h-0.5 bg-accent origin-left"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 1.4, delay: 0.3, ease: 'easeOut' }}
                style={{ right: 0 }}
              />
              {events.map((event, i) => (
                <div key={i} className="flex flex-col items-center px-6 relative">
                  <span className="text-xl mb-2">{event.icon}</span>
                  <div className="w-0.5 h-3 bg-accent z-10" />
                  <div className="mt-2 text-center w-20">
                    <p className="font-body text-xs font-bold text-accent">{event.year}</p>
                    <p className="font-body text-xs font-semibold text-gray-700 leading-tight mt-0.5">{event.label}</p>
                    <p className="font-body text-xs text-gray-400 leading-tight mt-0.5">{event.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
