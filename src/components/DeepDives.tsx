import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeftIcon, ExternalLinkIcon, FileTextIcon } from 'lucide-react';

interface DeepDive {
  id: string;
  kind: string;
  title: string;
  tldr: string;
  skills: string[];
  readTime: string;
  url: string;
  status?: 'live' | 'in-progress';
}

// NOTE: replace the url fields with the real Google Doc links.
const deepDives: DeepDive[] = [
  {
    id: 'stemboost',
    kind: 'Case Study',
    title: 'StemboostTutor — Building a Tutoring Business from Zero',
    tldr:
      'How I founded and ran a tutoring business that grew from 2 to 10 recurring clients across a 3-tutor team, delivered 500+ billable hours, and averaged a 14-point score improvement per client, all with zero paid acquisition cost. Covers the pricing model, onboarding system, credit-based billing, and referral pipeline.',
    skills: [
      'Operations',
      'Pricing strategy',
      'Growth from zero',
      'Systems & process design',
      'Customer retention',
    ],
    readTime: 'Founder & Product Lead · ~7 min read',
    url: 'https://docs.google.com/document/d/1zZq0MF9gyF3s-q0borMyY5zoyW_niaD3/export?format=pdf',
    status: 'live',
  },
  {
    id: 'varsity',
    kind: 'Product Teardown',
    title: 'Varsity Tutors — A Marketplace Built to Extract',
    tldr:
      'Varsity Tutors takes 80% of every dollar parents pay, hides pricing behind a sales call, and relies on hard-to-cancel subscriptions to retain users. Its parent company has never been profitable, has lost over 90% of its stock value, and faces NYSE delisting. A breakdown of why those product decisions are structural, with a proposed alternative model.',
    skills: [
      'Product analysis',
      'Competitive teardown',
      'Market & financial research',
      'Business model strategy',
      'Data-backed argumentation',
    ],
    readTime: 'Self-initiated analysis · ~10 min read',
    url: 'https://docs.google.com/document/d/1gKVxLTgx2ghUfrQScA0IHmeE8Q7Os5gp/export?format=pdf',
    status: 'live',
  },
  {
    id: 'zoe',
    kind: 'Scientific Teardown',
    title: 'Zoe — Does the Science Match the Promise?',
    tldr:
      'Zoe is a personalized nutrition company built on real microbiome science — a published RCT, peer-reviewed research, honest caveats. But the evidence supports the premise more than the promise. A teardown of the gap between what the science establishes and what the product implies, evaluated against the primary literature.',
    skills: [
      'Product analysis',
      'Scientific literacy',
      'Evaluating evidence vs claims',
      'Health-tech domain knowledge',
    ],
    readTime: 'Self-initiated analysis · ~9 min read',
    url: 'https://docs.google.com/document/d/1s8ovCoycWKSYEoCX1Zl8QMQ9GLdYv6ol/export?format=pdf',
    status: 'live',
  },
];

export function DeepDives() {
  const location = useLocation();

  // Scroll the page to the top on load, or to a specific card if a hash is present
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        // small delay so entry animations do not fight the scroll
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="w-full min-h-screen bg-warm-50 font-body">
      {/* Minimal nav */}
      <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-warm-100">
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-14">
          <Link
            to="/"
            className="font-display text-xl font-bold text-gray-900 tracking-tight">
            Daniel He
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 font-body text-sm font-medium text-gray-500 hover:text-accent transition-colors">
            <ArrowLeftIcon className="w-4 h-4" />
            Back to portfolio
          </Link>
        </div>
      </nav>

      {/* Header */}
      <header className="max-w-5xl mx-auto px-6 pt-14 md:pt-20 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900">
            Deep Dives
          </h1>
          <div className="mt-3 w-14 h-1 bg-accent rounded-full" />
          <p className="mt-6 font-body text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl">
            Long-form analytical work: case studies of what I have built, and
            teardowns of products I have studied closely. Each piece is written
            to show how I think, not just what I have done.
          </p>
        </motion.div>
      </header>

      {/* Cards */}
      <main className="max-w-5xl mx-auto px-6 pb-20">
        <div className="flex flex-col gap-6">
          {deepDives.map((dive, index) => (
            <motion.article
              key={dive.title}
              id={dive.id}
              style={{ scrollMarginTop: '80px' }}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.12, ease: 'easeOut' }}
              className="bg-white rounded-xl border border-warm-100 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
              <div className="p-6 md:p-8">
                {/* Kind + status */}
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="inline-flex items-center gap-1.5 bg-accent-light text-accent font-body text-xs font-semibold px-2.5 py-1 rounded-full">
                    <FileTextIcon className="w-3 h-3" />
                    {dive.kind}
                  </span>
                  {dive.status === 'in-progress' && (
                    <span className="font-body text-xs font-medium text-gray-400 bg-warm-100 px-2.5 py-1 rounded-full">
                      In progress
                    </span>
                  )}
                </div>

                {/* Title */}
                <h2 className="mt-3 font-display text-xl md:text-2xl font-bold text-gray-900 leading-snug">
                  {dive.title}
                </h2>

                {/* TL;DR */}
                <div className="mt-3 border-l-2 border-accent/30 pl-4">
                  <p className="font-body text-gray-600 text-sm md:text-base leading-relaxed">
                    {dive.tldr}
                  </p>
                </div>

                {/* Skills */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {dive.skills.map((skill) => (
                    <span
                      key={skill}
                      className="font-body text-xs font-medium text-gray-600 bg-warm-50 border border-warm-100 px-2.5 py-1 rounded-md">
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Footer row */}
                <div className="mt-5 flex items-center justify-between gap-4 flex-wrap">
                  <span className="font-body text-xs text-gray-400 italic">
                    {dive.readTime}
                  </span>
                  {dive.status === 'in-progress' ? (
                    <span className="font-body text-sm font-semibold text-gray-400">
                      Coming soon
                    </span>
                  ) : (
                    <a
                      href={dive.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-accent text-white font-body text-sm font-semibold rounded-lg hover:bg-accent-dark transition-colors">
                      Read the full piece
                      <ExternalLinkIcon className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </main>
    </div>
  );
}
