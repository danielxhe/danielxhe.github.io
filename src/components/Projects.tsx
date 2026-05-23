import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ExternalLinkIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ImageIcon } from
'lucide-react';

// Asset imports — required for Vite to bundle images correctly
import floorPlanSvg from '../assets/floor_plan.svg';
import floorPlanOriginal from '../assets/floor_plan_original.png';
import renderReflective from '../assets/render_reflective.png';
import renderMassing from '../assets/render_massing.png';
import tiktokProfile from '../assets/tiktok_profile.png';
import tiktokBrandDeal from '../assets/tiktok_brand_deal.png';
import tiktokTraffic from '../assets/tiktok_traffic.png';
import partnerly from '../assets/partnerly_logo.png';
import stemboostHero from '../assets/stemboost_hero.png';
import stemboostPricing from '../assets/stemboost_pricing.png';
import stemboostConsult from '../assets/stemboost_consult.png';
import stemboostTestimonial from '../assets/stemboost_testimonial.png';
interface SlideData {
  title: string;
  caption: string;
  image?: string;
  headerImage?: string;
}
interface ProjectData {
  title: string;
  anchorMetric: string;
  description: string;
  metrics: string[];
  illustration: React.ReactNode;
  slides: SlideData[];
  link?: {
    label: string;
    url: string;
  };
}
const projects: ProjectData[] = [
{
  title: 'Hudson Yards — Ground Floor Space Programming',
  anchorMetric: '144,000 SF · 4-person team',
  description:
  'Owned ground-floor space allocation for a 144,000 SF mixed-use tower in Hudson Yards, balancing vendor, grocery, and MEP requirements across structural, architectural, and MEP disciplines. Delivered documentation 2-3 days ahead of biweekly QA deadlines over 5+ design development cycles.',
  metrics: [
  '2-3 days ahead of QA deadlines',
  '5+ design cycles',
  '144,000 SF',
  '4-person team'],

  illustration: <FloorPlanSVG />,
  slides: [
  {
    title: '144,000 SF Mixed-Use Tower',
    caption: 'Owned ground-floor space allocation for a 144,000 SF mixed-use tower in Hudson Yards. Balanced vendor, grocery, and MEP requirements across structural, architectural, and MEP disciplines. Delivered documentation 2-3 days ahead of biweekly QA deadlines over 5+ design development cycles.',
    image: floorPlanOriginal
  },
  {
    title: 'Original Ground Floor Program',
    caption: 'The ground floor needed 10+ vendor spaces allocated against a fixed structural grid and curved commercial facade. Mapped structural requirements, flagged structural conflicts, and began space allocation. Every conflict caught here prevented a costly change order downstream.',
    image: renderReflective
  },
  {
    title: 'Developed Floor Plan',
    caption: 'Resolved open conflicts and produced a fully coordinated ground floor plan. 23 documented design decisions including MEP clustering, shared plumbing walls, HVAC isolation, inline kiosks, L-shaped walkway, dual egress, and a luxury retail corridor.',
    image: floorPlanSvg
  },
  {
    title: 'Building Massing and Concourse',
    caption: 'Coordinated ground floor space programming with the overall building massing to ensure the curved facade and arcing public concourse aligned from tower to street level. The concourse became the primary spine of the retail experience.',
    image: renderMassing
  }],

},
{
  title: 'The Math Ghost — TikTok Growth & Monetization',
  anchorMetric: '1.2M followers · 100M+ views',
  description:
  'Co-founded a math education TikTok brand and engineered a data-driven content model using A/B testing and engagement analytics. Owned the full product lifecycle from content strategy to brand partnership pipeline.',
  metrics: [
  '200K → 1.2M followers',
  '100M+ views',
  '8+ videos at 3M+ views',
  '$15,000+ brand deals'],

  illustration: <TikTokSVG />,
  slides: [
  {
    title: 'Channel Growth: 200K to 1.2M',
    caption: 'Built a repeatable content system over 18 months using A/B testing across format, length, and posting cadence. Scaled to 1.2M followers and 15.4M likes at peak. This screenshot reflects the account in 2026 following acquisition — organic decline is expected on dormant accounts after a change in management.',
    image: tiktokProfile
  },
  {
    title: 'Inbound Brand Partnership',
    caption: 'Example of inbound brand partnership outreach received at scale. Negotiated deliverable scope, format, and compensation structure with multiple companies including EdTech startup HiEmile. Part of $15,000+ in total brand deals closed across the channel lifetime.',
    image: tiktokBrandDeal,
    headerImage: partnerly
  },
  {
    title: 'Traffic Source Breakdown',
    caption: '83.3% of views came from the For You page, meaning growth was driven by algorithmic placement, not existing followers. Optimized hook structure, video length, and cadence to maximize reach. One video alone generated 1.2M views, 3,224 hours of watch time, and 411 new followers.',
    image: tiktokTraffic
  }],

},
{
  title: 'StemboostTutor — Product & Operations',
  anchorMetric: '10 clients · $0 CAC',
  description:
  'Founded a tutoring business and built the full operational stack — 3-tier pricing model, product website with integrated booking flow, and a referral acquisition system that achieved zero paid acquisition cost.',
  metrics: [
  '2 → 10 clients',
  '14-point avg improvement',
  'Zero CAC',
  'Live website'],

  illustration: <TutoringSVG />,
  link: {
    label: 'Visit Live Site',
    url: 'https://stemboosttutoring.netlify.app/'
  },
  slides: [
  {
    title: 'Landing Page',
    caption: 'Built a two-page product website with credential-forward hero, tutor profiles, testimonial slideshow, FAQ accordion, and direct booking CTAs. Designed to convert warm referral traffic into consultations. Live at stemboosttutoring.netlify.app.',
    image: stemboostHero
  },
  {
    title: '3-Tier Pricing Model',
    caption: 'Replaced flat hourly billing with three tiers: Crisis Fix ($50/hr pay-as-you-go), Mastery Track ($40/hr, 10hrs at $400 upfront), and Honors Bundle ($38/hr, 20hrs at $760 upfront). Credit-based system with upfront payment and 24-hour cancellation policy. Eliminated all manual invoicing.',
    image: stemboostPricing
  },
  {
    title: 'Integrated Booking Flow',
    caption: 'Onboarding used to take 6-8 emails. Built a consultation form with plan selector, grade and subject dropdowns, and EmailJS-powered submission that sends directly to inbox. Reduced the entire process to 3 touchpoints: form, confirmation email, call.',
    image: stemboostConsult
  },
  {
    title: 'Referral System and Outcomes',
    caption: 'Designed a referral system triggered after measurable grade improvements. No incentives, no ads, no marketing spend. Grew from 2 to 10 recurring clients at zero acquisition cost. Average 14-point score improvement per client. Documented results: D to B+, C to A-, B- to A.',
    image: stemboostTestimonial
  }],

}];

// --- SVG Illustrations ---
function FloorPlanSVG() {
  return (
    <svg
      viewBox="0 0 320 200"
      className="w-full h-48 rounded-lg"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      
      <rect width="320" height="200" rx="8" fill="#FFF7ED" />
      <rect
        x="40"
        y="30"
        width="240"
        height="140"
        rx="2"
        stroke="#F97316"
        strokeWidth="2"
        fill="none" />
      
      <line
        x1="140"
        y1="30"
        x2="140"
        y2="120"
        stroke="#FDBA74"
        strokeWidth="1.5" />
      
      <line
        x1="200"
        y1="80"
        x2="200"
        y2="170"
        stroke="#FDBA74"
        strokeWidth="1.5" />
      
      <line
        x1="40"
        y1="100"
        x2="140"
        y2="100"
        stroke="#FDBA74"
        strokeWidth="1.5" />
      
      <line
        x1="200"
        y1="80"
        x2="280"
        y2="80"
        stroke="#FDBA74"
        strokeWidth="1.5" />
      
      <text
        x="80"
        y="72"
        fontSize="10"
        fill="#EA580C"
        fontFamily="Nunito"
        textAnchor="middle"
        fontWeight="600">
        
        Retail
      </text>
      <text
        x="170"
        y="60"
        fontSize="10"
        fill="#EA580C"
        fontFamily="Nunito"
        textAnchor="middle"
        fontWeight="600">
        
        Lobby
      </text>
      <text
        x="240"
        y="60"
        fontSize="10"
        fill="#EA580C"
        fontFamily="Nunito"
        textAnchor="middle"
        fontWeight="600">
        
        MEP
      </text>
      <text
        x="80"
        y="140"
        fontSize="10"
        fill="#EA580C"
        fontFamily="Nunito"
        textAnchor="middle"
        fontWeight="600">
        
        Tenant A
      </text>
      <text
        x="170"
        y="150"
        fontSize="10"
        fill="#EA580C"
        fontFamily="Nunito"
        textAnchor="middle"
        fontWeight="600">
        
        Egress
      </text>
      <text
        x="240"
        y="140"
        fontSize="10"
        fill="#EA580C"
        fontFamily="Nunito"
        textAnchor="middle"
        fontWeight="600">
        
        Tenant B
      </text>
      <rect x="155" y="168" width="20" height="4" fill="#F97316" rx="1" />
      <rect x="85" y="28" width="20" height="4" fill="#F97316" rx="1" />
      <line
        x1="40"
        y1="185"
        x2="280"
        y2="185"
        stroke="#D1D5DB"
        strokeWidth="0.5"
        strokeDasharray="4 2" />
      
      <text
        x="160"
        y="196"
        fontSize="8"
        fill="#9CA3AF"
        fontFamily="Nunito"
        textAnchor="middle">
        
        144,000 SF
      </text>
    </svg>);

}
function TikTokSVG() {
  return (
    <svg
      viewBox="0 0 320 200"
      className="w-full h-48 rounded-lg"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      
      <rect width="320" height="200" rx="8" fill="#FFF7ED" />
      <rect
        x="115"
        y="20"
        width="90"
        height="160"
        rx="12"
        stroke="#F97316"
        strokeWidth="2"
        fill="white" />
      
      <rect x="120" y="30" width="80" height="135" rx="4" fill="#FFF7ED" />
      <circle cx="160" cy="90" r="20" fill="#F97316" opacity="0.9" />
      <polygon points="154,80 154,100 172,90" fill="white" />
      <rect x="130" y="130" width="60" height="6" rx="3" fill="#FDBA74" />
      <rect x="135" y="140" width="50" height="6" rx="3" fill="#FED7AA" />
      <rect x="140" y="150" width="40" height="6" rx="3" fill="#FFEDD5" />
      <text
        x="160"
        y="18"
        fontSize="9"
        fill="#EA580C"
        fontFamily="Nunito"
        textAnchor="middle"
        fontWeight="700">
        
        1.2M followers
      </text>
      <path
        d="M50 140 L50 70 L80 70"
        stroke="#F97316"
        strokeWidth="2"
        fill="none" />
      
      <line x1="50" y1="140" x2="50" y2="70" stroke="#F97316" strokeWidth="2" />
      <polygon points="78,65 78,75 88,70" fill="#F97316" />
      <text x="55" y="155" fontSize="8" fill="#9CA3AF" fontFamily="Nunito">
        Growth
      </text>
      <circle
        cx="260"
        cy="70"
        r="12"
        fill="#FFF7ED"
        stroke="#FDBA74"
        strokeWidth="1" />
      
      <text
        x="260"
        y="74"
        fontSize="10"
        fill="#F97316"
        fontFamily="Nunito"
        textAnchor="middle">
        
        ♥
      </text>
      <circle
        cx="260"
        cy="100"
        r="12"
        fill="#FFF7ED"
        stroke="#FDBA74"
        strokeWidth="1" />
      
      <text
        x="260"
        y="104"
        fontSize="10"
        fill="#F97316"
        fontFamily="Nunito"
        textAnchor="middle">
        
        ↗
      </text>
      <text
        x="260"
        y="130"
        fontSize="8"
        fill="#9CA3AF"
        fontFamily="Nunito"
        textAnchor="middle">
        
        100M+
      </text>
    </svg>);

}
function TutoringSVG() {
  return (
    <svg
      viewBox="0 0 320 200"
      className="w-full h-48 rounded-lg"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      
      <rect width="320" height="200" rx="8" fill="#FFF7ED" />
      <rect
        x="50"
        y="30"
        width="220"
        height="140"
        rx="6"
        stroke="#F97316"
        strokeWidth="1.5"
        fill="white" />
      
      <rect x="50" y="30" width="220" height="24" rx="6" fill="#FFF7ED" />
      <circle cx="65" cy="42" r="4" fill="#FED7AA" />
      <circle cx="78" cy="42" r="4" fill="#FDBA74" />
      <circle cx="91" cy="42" r="4" fill="#F97316" />
      <rect x="120" y="38" width="80" height="8" rx="4" fill="white" />
      <text
        x="160"
        y="72"
        fontSize="11"
        fill="#F97316"
        fontFamily="Nunito"
        textAnchor="middle"
        fontWeight="700">
        
        StemboostTutor
      </text>
      <rect
        x="65"
        y="82"
        width="55"
        height="70"
        rx="4"
        fill="#FFEDD5"
        stroke="#FED7AA"
        strokeWidth="1" />
      
      <text
        x="92"
        y="98"
        fontSize="8"
        fill="#EA580C"
        fontFamily="Nunito"
        textAnchor="middle"
        fontWeight="600">
        
        Basic
      </text>
      <text
        x="92"
        y="115"
        fontSize="12"
        fill="#F97316"
        fontFamily="Nunito"
        textAnchor="middle"
        fontWeight="700">
        
        $
      </text>
      <rect
        x="132"
        y="82"
        width="55"
        height="70"
        rx="4"
        fill="#FED7AA"
        stroke="#FDBA74"
        strokeWidth="1" />
      
      <text
        x="160"
        y="98"
        fontSize="8"
        fill="#EA580C"
        fontFamily="Nunito"
        textAnchor="middle"
        fontWeight="600">
        
        Standard
      </text>
      <text
        x="160"
        y="115"
        fontSize="12"
        fill="#F97316"
        fontFamily="Nunito"
        textAnchor="middle"
        fontWeight="700">
        
        $$
      </text>
      <rect
        x="200"
        y="82"
        width="55"
        height="70"
        rx="4"
        fill="#FDBA74"
        stroke="#F97316"
        strokeWidth="1" />
      
      <text
        x="228"
        y="98"
        fontSize="8"
        fill="#EA580C"
        fontFamily="Nunito"
        textAnchor="middle"
        fontWeight="600">
        
        Premium
      </text>
      <text
        x="228"
        y="115"
        fontSize="12"
        fill="#F97316"
        fontFamily="Nunito"
        textAnchor="middle"
        fontWeight="700">
        
        $$$
      </text>
      <rect x="125" y="135" width="70" height="18" rx="9" fill="#F97316" />
      <text
        x="160"
        y="148"
        fontSize="8"
        fill="white"
        fontFamily="Nunito"
        textAnchor="middle"
        fontWeight="600">
        
        Book Now
      </text>
    </svg>);

}
// --- Lightbox ---
function Lightbox({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      onClick={onClose}>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="relative max-w-5xl max-h-full"
        onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white/80 hover:text-white font-body text-sm font-semibold">
          ✕ Close
        </button>
        <img
          src={src}
          alt={alt}
          className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
        />
      </motion.div>
    </motion.div>
  );
}

// --- Slide Placeholder ---
function SlidePlaceholder({
  slide,
  index
}: {slide: SlideData;index: number;}) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  const bgColors = ['#FFF7ED', '#FEF3C7', '#F0FDF4', '#EFF6FF'];
  const accentColors = ['#F97316', '#D97706', '#16A34A', '#2563EB'];
  const bg = bgColors[index % bgColors.length];
  const accent = accentColors[index % accentColors.length];

  if (slide.image) {
    return (
      <>
        <div className="flex-shrink-0 w-full flex flex-col rounded-lg overflow-hidden" style={{ minHeight: 300 }}>
          {slide.headerImage && (
            <div className="flex items-center justify-center p-3" style={{ background: '#111' }}>
              <img src={slide.headerImage} alt="brand header" className="h-10 object-contain" />
            </div>
          )}
          <div
            className="flex-1 bg-warm-50 flex items-center justify-center p-4 cursor-zoom-in relative group"
            onClick={() => setLightboxOpen(true)}>
            {!imgLoaded && <div className="absolute inset-4 rounded-lg skeleton" />}
            <img
              src={slide.image}
              alt={slide.title}
              className="max-w-full max-h-72 object-contain rounded-lg shadow-sm transition-all duration-300 group-hover:scale-[1.02]"
              style={{ opacity: imgLoaded ? 1 : 0, transition: 'opacity 0.4s ease, transform 0.2s ease' }}
              onLoad={() => setImgLoaded(true)}
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <span className="bg-black/50 text-white text-xs font-semibold px-3 py-1.5 rounded-full">Click to expand</span>
            </div>
          </div>
          <div className="px-6 py-4 bg-white border-t border-warm-100">
            <p className="font-display text-lg font-bold text-gray-800">{slide.title}</p>
            <p className="mt-1 font-body text-sm text-gray-500">{slide.caption}</p>
          </div>
        </div>
        <AnimatePresence>
          {lightboxOpen && <Lightbox src={slide.image} alt={slide.title} onClose={() => setLightboxOpen(false)} />}
        </AnimatePresence>
      </>
    );
  }

  return (
    <div
      className="flex-shrink-0 w-full flex flex-col items-center justify-center rounded-lg p-10 md:p-14 relative overflow-hidden"
      style={{ backgroundColor: bg, minHeight: 300 }}>
      {/* Shimmer skeleton background */}
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite]"
        style={{ background: `linear-gradient(90deg, transparent, ${accent}08, transparent)` }} />
      <div
        className="w-20 h-20 rounded-xl flex items-center justify-center mb-5 relative z-10"
        style={{ backgroundColor: `${accent}18` }}>
        <ImageIcon className="w-9 h-9" style={{ color: accent }} />
      </div>
      <p className="font-display text-xl md:text-2xl font-bold text-gray-800 text-center relative z-10">
        {slide.title}
      </p>
      <p className="mt-2 font-body text-sm md:text-base text-gray-500 text-center max-w-lg relative z-10">
        {slide.caption}
      </p>
    </div>
  );
}
// --- Carousel ---
function SlideCarousel({ slides }: {slides: SlideData[];}) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const goTo = (next: number) => {
    setDirection(next > current ? 1 : -1);
    setCurrent(next);
  };
  const prev = () => goTo(current === 0 ? slides.length - 1 : current - 1);
  const next = () => goTo(current === slides.length - 1 ? 0 : current + 1);
  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 400 : -400,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -400 : 400,
      opacity: 0
    })
  };
  return (
    <div>
      <div className="relative overflow-hidden rounded-xl bg-white border border-warm-100">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              type: 'spring',
              stiffness: 280,
              damping: 28
            }}>
            
            <SlidePlaceholder slide={slides[current]} index={current} />
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <button
          onClick={prev}
          className="p-2 rounded-full bg-white border border-warm-100 text-gray-400 hover:text-accent hover:border-accent transition-colors"
          aria-label="Previous slide">
          
          <ChevronLeftIcon className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-2">
          {slides.map((_, i) =>
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-2 rounded-full transition-all duration-300 ${i === current ? 'bg-accent w-6' : 'bg-gray-200 hover:bg-gray-300 w-2'}`}
            aria-label={`Go to slide ${i + 1}`} />

          )}
        </div>
        <button
          onClick={next}
          className="p-2 rounded-full bg-white border border-warm-100 text-gray-400 hover:text-accent hover:border-accent transition-colors"
          aria-label="Next slide">
          
          <ChevronRightIcon className="w-5 h-5" />
        </button>
      </div>
    </div>);

}
// --- Metric Badge ---
function MetricBadge({ text }: {text: string;}) {
  return (
    <span className="inline-block px-3 py-1 bg-accent-light text-accent font-body text-xs md:text-sm font-semibold rounded-full border border-orange-100">
      {text}
    </span>);

}
// --- Project Card (compact plaque) ---
function ProjectCard({
  project,
  index,
  isSelected,
  onSelect





}: {project: ProjectData;index: number;isSelected: boolean;onSelect: () => void;}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-60px'
  });
  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: 40
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
        duration: 0.5,
        delay: index * 0.15,
        ease: 'easeOut'
      }}
      className="flex flex-col h-full">
      
      <button
        onClick={onSelect}
      className={`relative w-full h-full text-left bg-white rounded-xl border overflow-hidden transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 ${isSelected ? 'border-accent shadow-md ring-1 ring-accent/20' : 'border-warm-100 shadow-sm hover:shadow-md hover:border-orange-200 hover:-translate-y-1'}`}>
        
        {/* Active indicator bar */}
        {isSelected &&
        <motion.div
          layoutId="activeIndicator"
          className="absolute top-0 left-0 right-0 h-1 bg-accent rounded-t-xl"
          transition={{
            type: 'spring',
            stiffness: 400,
            damping: 30
          }} />

        }
        <div className="p-1.5">{project.illustration}</div>
        <div className="px-5 pb-4 pt-2">
          <h3 className="font-display text-lg md:text-xl font-bold text-gray-900 leading-snug">
            {project.title}
          </h3>
          <p className="mt-1.5 font-display text-sm font-semibold text-accent tracking-wide">
            {project.anchorMetric}
          </p>
          <p className="mt-2 font-body text-gray-600 text-xs md:text-sm leading-relaxed line-clamp-3">
            {project.description}
          </p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.metrics.map((metric) =>
            <MetricBadge key={metric} text={metric} />
            )}
          </div>
          {project.link &&
          <a
            href={project.link.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="mt-3 inline-flex items-center gap-1.5 text-accent font-body font-semibold text-xs hover:text-accent-dark transition-colors">
            
              {project.link.label}
              <ExternalLinkIcon className="w-3 h-3" />
            </a>
          }
        </div>
      </button>
    </motion.div>);

}
// --- Projects Section ---
export function Projects() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: '-60px'
  });
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const handleSelect = (index: number) => {
    setSelectedIndex(selectedIndex === index ? null : index);
  };
  const selectedProject =
  selectedIndex !== null ? projects[selectedIndex] : null;

  const ExpansionPanel = ({ forIndex }: { forIndex: number }) => {
    if (selectedIndex !== forIndex || !selectedProject) return null;
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedIndex}
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="overflow-hidden col-span-1 md:col-span-2 lg:col-span-3">
          <div className="bg-white rounded-xl border border-warm-100 shadow-md mt-2">
            <div className="p-6 md:p-8">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="font-body text-xs font-semibold text-accent uppercase tracking-wider">
                    Project Details
                  </p>
                  <h3 className="font-display text-xl md:text-2xl font-bold text-gray-900 mt-1">
                    {selectedProject.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedIndex(null)}
                  className="p-2 rounded-full text-gray-400 hover:text-gray-600 hover:bg-warm-50 transition-colors"
                  aria-label="Close details">
                  ✕
                </button>
              </div>
              <p className="font-body text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                {selectedProject.description}
              </p>
              <SlideCarousel slides={selectedProject.slides} />
              {selectedProject.title === 'StemboostTutor — Product & Operations' && (
                <div className="mt-6 pt-6 border-t border-warm-100 flex items-center justify-between">
                  <p className="font-body text-sm text-gray-400">Want the full story?</p>
                  <Link
                    to="/deep-dives#stemboost"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-white font-body text-sm font-semibold rounded-lg hover:bg-accent-dark transition-colors">
                    Read the full case study →
                  </Link>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    );
  };

  return (
    <section id="projects" className="w-full bg-warm-50 py-20 md:py-24">
      <div className="max-w-5xl mx-auto px-6" ref={sectionRef}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900">
            Projects
          </h2>
          <div className="mt-2 mx-auto w-12 h-1 bg-accent rounded-full" />
          <p className="mt-3 font-body text-sm text-gray-400">
            Click a project to explore details
          </p>
        </motion.div>

        {/* All screen sizes: inline expand below clicked card */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {projects.map((project, i) => (
            <React.Fragment key={project.title}>
              <div className="flex flex-col">
                <ProjectCard
                  project={project}
                  index={i}
                  isSelected={selectedIndex === i}
                  onSelect={() => handleSelect(i)} />
                {/* On single column (mobile) expand inline */}
                <div className="sm:hidden col-span-1">
                  <ExpansionPanel forIndex={i} />
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>

        {/* On 2-col and 3-col: expand below all cards */}
        <div className="hidden sm:block">
          <AnimatePresence mode="wait">
            {selectedProject && selectedIndex !== null &&
              <motion.div
                key={selectedIndex}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                className="overflow-hidden">
                <div className="bg-white rounded-xl border border-warm-100 shadow-md mt-4">
                  <div className="p-6 md:p-8">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="font-body text-xs font-semibold text-accent uppercase tracking-wider">
                          Project Details
                        </p>
                        <h3 className="font-display text-xl md:text-2xl font-bold text-gray-900 mt-1">
                          {selectedProject.title}
                        </h3>
                      </div>
                      <button
                        onClick={() => setSelectedIndex(null)}
                        className="p-2 rounded-full text-gray-400 hover:text-gray-600 hover:bg-warm-50 transition-colors"
                        aria-label="Close details">
                        ✕
                      </button>
                    </div>
                    <p className="font-body text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                      {selectedProject.description}
                    </p>
                    <SlideCarousel slides={selectedProject.slides} />
                    {selectedProject.title === 'StemboostTutor — Product & Operations' && (
                      <div className="mt-6 pt-6 border-t border-warm-100 flex items-center justify-between">
                        <p className="font-body text-sm text-gray-400">Want the full story?</p>
                        <Link
                          to="/deep-dives#stemboost"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-white font-body text-sm font-semibold rounded-lg hover:bg-accent-dark transition-colors">
                          Read the full case study →
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            }
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}