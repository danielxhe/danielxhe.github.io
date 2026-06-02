import React from 'react';
import { motion } from 'framer-motion';
import { DownloadIcon, ExternalLinkIcon, MapPinIcon } from 'lucide-react';
export function Hero() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-32 flex flex-col md:flex-row items-center gap-12 md:gap-16">
        {/* Left — text content */}
        <motion.div
          className="flex-1 max-w-xl"
          initial={{
            opacity: 0,
            x: -30
          }}
          animate={{
            opacity: 1,
            x: 0
          }}
          transition={{
            duration: 0.7,
            ease: 'easeOut'
          }}>
          
          <div className="flex items-center gap-2 text-sm font-body font-medium text-gray-400">
            <MapPinIcon className="w-3.5 h-3.5" />
            New York, NY
          </div>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 tracking-tight leading-[1.1]">
            Daniel He
          </h1>
          <p className="mt-2 font-body text-lg md:text-xl font-medium text-accent">
            Product · Operations · Strategy
          </p>
          <p className="mt-6 font-body text-gray-600 text-base md:text-lg leading-relaxed max-w-lg">
            Cross-functional coordinator with a track record of delivering ahead
            of schedule, building systems from scratch, and driving
            growth across real estate, digital product, and operations.
          </p>
          <div className="mt-8 flex items-center gap-4 flex-wrap">
            <a
              href="https://docs.google.com/document/d/1iXoB_vjtoDMnBkyGnLgnEudGZLIPIOHMoooFakHZ06g/export?format=pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-body font-semibold rounded-lg hover:bg-accent-dark transition-colors shadow-sm">
              
              <DownloadIcon className="w-4 h-4" />
              Download Resume
            </a>
            <a
              href="https://linkedin.com/in/h-dan/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-accent text-accent font-body font-semibold rounded-lg hover:bg-accent hover:text-white transition-colors">
              
              <ExternalLinkIcon className="w-4 h-4" />
              View LinkedIn
            </a>
          </div>
        </motion.div>

        {/* Right — floating metric cards */}
        <motion.div
          className="flex-shrink-0 hidden md:block"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}>
          
          <div className="relative w-72 h-72 lg:w-80 lg:h-80">
            <div className="absolute inset-0 rounded-full border-2 border-orange-200 opacity-60" />
            <div className="absolute inset-4 rounded-full border-2 border-orange-100 opacity-40" />
            <motion.div
              className="absolute top-4 right-0 bg-white rounded-xl shadow-md border border-warm-100 px-4 py-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6, ease: 'easeOut' }}>
              <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}>
                <p className="font-body text-xs text-gray-400 uppercase tracking-wider">Hudson Yards</p>
                <p className="font-display text-2xl font-bold text-accent">Led team of 4</p>
                <p className="font-body text-[10px] text-gray-400">144K SF tower</p>
              </motion.div>
            </motion.div>
            <motion.div
              className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-4 bg-white rounded-xl shadow-md border border-warm-100 px-4 py-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9, ease: 'easeOut' }}>
              <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}>
                <p className="font-body text-xs text-gray-400 uppercase tracking-wider">Math Ghost</p>
                <p className="font-display text-2xl font-bold text-accent">1.2M</p>
                <p className="font-body text-[10px] text-gray-400">followers · 100M views</p>
              </motion.div>
            </motion.div>
            <motion.div
              className="absolute bottom-0 right-4 bg-white rounded-xl shadow-md border border-warm-100 px-4 py-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2, ease: 'easeOut' }}>
              <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}>
                <p className="font-body text-xs text-gray-400 uppercase tracking-wider">Spread</p>
                <p className="font-display text-2xl font-bold text-accent">5-day ship</p>
                <p className="font-body text-[10px] text-gray-400">V1.1 · user interview</p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>);

}