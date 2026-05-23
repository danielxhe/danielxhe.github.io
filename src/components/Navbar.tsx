import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { LinkedinIcon, MenuIcon, XIcon, DownloadIcon, ChevronDownIcon } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

const deepDiveLinks = [
  { label: 'StemboostTutor — Case Study', hash: 'stemboost' },
  { label: 'Varsity Tutors — Teardown', hash: 'varsity' },
  { label: 'Zoe — Scientific Teardown', hash: 'zoe' },
];

export function Navbar({ activeSection }: { activeSection: string }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [diveOpen, setDiveOpen] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (!el) return;

    const targetY = el.getBoundingClientRect().top + window.scrollY - 56;
    const startY = window.scrollY;
    const distance = targetY - startY;
    const duration = 600;
    let startTime: number | null = null;

    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      window.scrollTo(0, startY + distance * easeInOutCubic(progress));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-warm-100">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-14">
        <a
          href="#"
          className="font-display text-xl font-bold text-gray-900 tracking-tight">
          Daniel He
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className={`font-body text-sm font-medium transition-colors ${
                activeSection === link.id
                  ? 'text-accent font-semibold'
                  : 'text-gray-500 hover:text-accent'
              }`}>
              {link.label}
            </a>
          ))}

          {/* Deep Dives dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDiveOpen(true)}
            onMouseLeave={() => setDiveOpen(false)}>
            <Link
              to="/deep-dives"
              className="inline-flex items-center gap-1 font-body text-sm font-medium text-gray-500 hover:text-accent transition-colors">
              Deep Dives
              <ChevronDownIcon className="w-3.5 h-3.5" />
            </Link>
            <AnimatePresence>
              {diveOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 top-full pt-2 w-60">
                  <div className="bg-white rounded-lg border border-warm-100 shadow-lg overflow-hidden py-1">
                    {deepDiveLinks.map((d) => (
                      <Link
                        key={d.hash}
                        to={`/deep-dives#${d.hash}`}
                        className="block px-4 py-2 font-body text-sm text-gray-600 hover:bg-warm-50 hover:text-accent transition-colors">
                        {d.label}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a
            href="https://linkedin.com/in/h-dan/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-accent transition-colors"
            aria-label="LinkedIn">
            <LinkedinIcon className="w-4.5 h-4.5" />
          </a>
          <a
            href="https://docs.google.com/document/d/1iXoB_vjtoDMnBkyGnLgnEudGZLIPIOHMoooFakHZ06g/export?format=pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-accent text-white font-body text-sm font-semibold rounded-lg hover:bg-accent-dark transition-colors">
            <DownloadIcon className="w-3.5 h-3.5" />
            Resume
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-gray-600 hover:text-accent transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu">
          {mobileOpen ? <XIcon className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-white border-b border-warm-100">
            <div className="px-6 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    scrollToSection(e, link.href);
                    setMobileOpen(false);
                  }}
                  className={`font-body text-sm font-medium transition-colors ${
                    activeSection === link.id
                      ? 'text-accent font-semibold'
                      : 'text-gray-600 hover:text-accent'
                  }`}>
                  {link.label}
                </a>
              ))}
              <Link
                to="/deep-dives"
                onClick={() => setMobileOpen(false)}
                className="font-body text-sm font-medium text-gray-600 hover:text-accent transition-colors">
                Deep Dives
              </Link>
              <div className="flex items-center gap-3 pt-2 border-t border-warm-100">
                <a
                  href="https://docs.google.com/document/d/1iXoB_vjtoDMnBkyGnLgnEudGZLIPIOHMoooFakHZ06g/export?format=pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-accent text-white font-body text-sm font-semibold rounded-lg hover:bg-accent-dark transition-colors">
                  <DownloadIcon className="w-3.5 h-3.5" />
                  Resume
                </a>
                <a
                  href="https://linkedin.com/in/h-dan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-accent transition-colors"
                  aria-label="LinkedIn">
                  <LinkedinIcon className="w-4.5 h-4.5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
