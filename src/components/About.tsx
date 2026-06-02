import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-80px'
  });
  return (
    <section id="about" className="w-full bg-warm-50 py-14 md:py-16">
      <div className="max-w-5xl mx-auto px-6" ref={ref}>
        <motion.div
          className="flex flex-col md:flex-row gap-8 md:gap-12 items-start"
          initial={{
            opacity: 0,
            y: 30
          }}
          animate={
          isInView ?
          {
            opacity: 1,
            y: 0
          } :
          {}
          }
          transition={{
            duration: 0.6,
            ease: 'easeOut'
          }}>
          
          {/* Left accent */}
          <div className="flex-shrink-0 md:pt-1">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900">
              About
            </h2>
            <div className="mt-2 w-12 h-1 bg-accent rounded-full" />
            <div className="hidden md:block mt-6 space-y-2">
              <div className="font-body text-xs text-gray-400 uppercase tracking-wider">
                Education
              </div>
              <div className="font-body text-sm font-semibold text-gray-700">
                Stony Brook University
              </div>
              <div className="font-body text-sm text-gray-500">
                Biochemistry, B.S.
              </div>
              <div className="font-body text-sm text-accent font-semibold">
                3.71 GPA · Magna Cum Laude
              </div>
              <div className="font-body text-xs text-gray-400">May 2026</div>
            </div>
          </div>

          {/* Right content */}
          <div className="flex-1">
            <p className="font-body text-gray-600 text-base md:text-lg leading-relaxed">
              I graduated with a Bachelor's in Biochemistry at Stony Brook University
              with hands-on experience across real estate project management, digital
              product growth, and quantitative research. I led a 4-person intern team
              on a 144,000 SF mixed-use tower in Hudson Yards, co-founded a TikTok
              brand that scaled to 1.2M followers and 100M+ views, and now work as a
              quantitative researcher at a stealth startup, where I own the
              research-rigor and risk-management pillar across futures and commodities.
            </p>
            <p className="mt-4 font-body text-gray-700 text-base md:text-lg leading-relaxed font-medium">
              Targeting product management and consulting roles where I can bring
              cross-functional coordination, structured problem solving, and a bias
              toward measurable outcomes.
            </p>
            {/* Mobile education info */}
            <div className="md:hidden mt-6 flex items-center gap-3 px-4 py-3 bg-white rounded-lg border border-warm-100">
              <div>
                <div className="font-body text-sm font-semibold text-gray-700">
                  Stony Brook University
                </div>
                <div className="font-body text-xs text-gray-500">
                  Biochemistry, B.S. · 3.71 GPA · Magna Cum Laude · May 2026
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>);

}