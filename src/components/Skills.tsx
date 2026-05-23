import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

interface Skill {
  name: string;
  // Short evidence phrase (project name + brief hook). Omit for generic skills
  // that should render as plain, non-expanding bubbles.
  evidence?: string;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    name: 'Project Management',
    skills: [
      { name: 'Milestone Tracking', evidence: 'Hudson Yards · Design Development schedule' },
      { name: 'Gantt Charts', evidence: 'Hudson Yards · 144,000 SF tower schedule' },
      { name: 'SOP Development', evidence: 'StemboostTutor · onboarding & billing systems' },
      { name: 'Client Management', evidence: 'StemboostTutor · clients, parents & tutors' },
      { name: 'Team Leadership', evidence: 'Hudson Yards · 4-person intern team; StemboostTutor · 3-tutor team' },
      { name: 'Upward Reporting', evidence: 'Syska Hennessy · biweekly QA reporting to senior PMs' },
      { name: 'Cross-functional Coordination', evidence: 'Hudson Yards · structural, architectural, MEP' },
      { name: 'Scope Management', evidence: 'Hudson Yards · ground-floor space programming' },
      { name: 'Risk Mitigation', evidence: 'Hudson Yards · early structural-conflict flags' },
      { name: 'Deadline Delivery', evidence: 'Hudson Yards · 2-3 days ahead of biweekly QA deadlines' },
    ],
  },
  {
    name: 'AI & Strategy',
    skills: [
      { name: 'Prompt Engineering (Claude, GPT-4, Gemini)', evidence: 'Deep-dive research & portfolio build' },
      { name: 'API Integration', evidence: 'StemboostTutor · EmailJS booking flow' },
      { name: 'A/B Testing', evidence: 'The Math Ghost · format & cadence testing' },
      { name: 'Data Analysis', evidence: 'Varsity Tutors teardown · financials & take rates' },
      { name: 'Literature Review', evidence: 'Zoe · scientific teardown of microbiome research' },
    ],
  },
  {
    name: 'Tools & Technologies',
    skills: [
      { name: 'AutoCAD', evidence: 'Hudson Yards · ground-floor floor plans' },
      // Generic tools — no evidence, render as plain bubbles
      { name: 'Google Colab' },
      { name: 'Microsoft Office' },
      { name: 'Google Suite' },
      { name: 'Slack' },
      { name: 'GitHub' },
      { name: 'Teams' },
    ],
  },
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const [hovered, setHovered] = useState<string | null>(null);
  const activeSkill = hovered;

  return (
    <section id="skills" className="w-full bg-white py-10 md:py-12">
      <div className="max-w-5xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="space-y-4">
          <div>
            <h2 className="font-display text-2xl font-bold text-gray-900">Skills</h2>
            <p className="mt-1 font-body text-xs text-gray-400">
              Hover a skill to see where it shows up.
            </p>
          </div>

          {skillCategories.map((category) => (
            <div
              key={category.name}
              className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
              <span className="flex-shrink-0 font-body text-xs font-semibold text-gray-400 uppercase tracking-wider sm:w-36 sm:pt-1.5 sm:text-right">
                {category.name}
              </span>
              <div className="flex flex-wrap gap-1.5 items-start">
                {category.skills.map((skill) => {
                  // Generic skill — plain non-expanding bubble
                  if (!skill.evidence) {
                    return (
                      <span
                        key={skill.name}
                        className="inline-block px-2.5 py-1 bg-accent-light text-gray-600 font-body text-xs font-medium rounded-full border border-orange-100 cursor-default transition-colors duration-200 hover:bg-accent hover:text-white hover:border-accent">
                        {skill.name}
                      </span>
                    );
                  }

                  // Evidence skill — expandable bubble
                  const isActive = activeSkill === skill.name;
                  return (
                    <div key={skill.name} className="relative">
                      <button
                        onMouseEnter={() => setHovered(skill.name)}
                        onMouseLeave={() => setHovered(null)}
                        className={`inline-flex items-center px-2.5 py-1 font-body text-xs font-medium rounded-full border transition-colors duration-200 ${
                          isActive
                            ? 'bg-accent text-white border-accent shadow-sm'
                            : 'bg-accent-light text-gray-600 border-orange-100 hover:bg-accent hover:text-white hover:border-accent'
                        }`}>
                        {skill.name}
                      </button>

                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, y: -2 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -2 }}
                            transition={{ duration: 0.15, ease: 'easeOut' }}
                            className="absolute left-0 top-full mt-1.5 z-20 whitespace-nowrap">
                            <div className="px-3 py-1.5 bg-white border border-orange-200 rounded-lg shadow-md">
                              <p className="font-body text-xs font-medium text-accent-dark leading-snug">
                                {skill.evidence}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
