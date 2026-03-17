"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

const modules = [
  {
    number: "01",
    label: "Foundation",
    title: "Block Essentials",
    image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=600&q=80",
    topics: [
      "Understanding body measurements & ease",
      "Drafting the bodice block (front & back)",
      "Drafting the skirt block (straight & A-line)",
      "Drafting the sleeve block",
      "Fitting, trueing, and correcting blocks",
    ],
  },
  {
    number: "02",
    label: "Manipulation",
    title: "The Designer's Secret",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&q=80",
    topics: [
      "Dart manipulation techniques",
      "Creating princess lines & style lines",
      "Adding flare — circle skirts & godets",
      "Pleats, tucks, and gathers from blocks",
      "Combining techniques for unique designs",
    ],
  },
  {
    number: "03",
    label: "Trend-Focused",
    title: "Viral Styles",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80",
    topics: [
      "Corset & bustier drafting",
      "Off-shoulder & cold-shoulder patterns",
      "Puff sleeves, bishop sleeves & bell sleeves",
      "Palazzo pants & wide-leg trousers",
      "Trending bridal silhouettes",
    ],
  },
  {
    number: "04",
    label: "Advanced",
    title: "Concepts & Workflow",
    image: "https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?w=600&q=80",
    topics: [
      "Grading patterns across sizes",
      "Draping vs. flat pattern integration",
      "Production-ready pattern preparation",
      "Seam allowance, notches & grain lines",
      "Building your professional portfolio",
    ],
  },
  {
    number: "05",
    label: "Slopers",
    title: "Basic Blocks & Slopers",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    topics: [
      "Torso sloper for diverse body types",
      "Trouser block & variations",
      "Knit block vs. woven block",
      "Children's block construction",
      "Plus-size & petite adjustments",
    ],
  },
  {
    number: "06",
    label: "Techniques",
    title: "Pattern Manipulation Mastery",
    image: "https://images.unsplash.com/photo-1559563458-527698bf5295?w=600&q=80",
    topics: [
      "Advanced dart transfers",
      "Asymmetrical design lines",
      "Collar & neckline variations",
      "Contour drafting for fitted garments",
      "Combining multiple manipulation techniques",
    ],
  },
  {
    number: "07",
    label: "Garments",
    title: "Specific Garment Drafting",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=600&q=80",
    topics: [
      "Tailored jacket & blazer drafting",
      "Bridal gown construction patterns",
      "Jumpsuit & romper drafting",
      "Swimwear & activewear patterns",
      "Men's shirt & trouser blocks",
    ],
  },
  {
    number: "08",
    label: "Essentials",
    title: "Beginner Essentials",
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600&q=80",
    topics: [
      "Reading & understanding pattern markings",
      "Essential tools & their uses",
      "Fabric grain, drape & selection",
      "Your first bodice from scratch",
      "Common mistakes & how to avoid them",
    ],
  },
  {
    number: "09",
    label: "Creative",
    title: "Advanced & Creative Techniques",
    image: "https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?w=600&q=80",
    topics: [
      "Avant-garde & sculptural pattern work",
      "Bias-cut garment drafting",
      "Designing from mood board to pattern",
      "Fashion illustration to flat pattern",
      "Launching your pattern-making business",
    ],
  },
];

export default function CurriculumSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section
      ref={sectionRef}
      id="curriculum"
      className="relative py-section overflow-hidden"
    >
      {/* Section background */}
      <div className="absolute inset-0 bg-gradient-to-b from-onyx via-deep-brown/50 to-onyx" />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-champagne/40" />
            <span className="text-champagne text-[10px] tracking-[0.35em] uppercase">
              The Curriculum
            </span>
            <div className="w-12 h-px bg-champagne/40" />
          </div>
          <h2 className="fluid-headline text-alabaster">
            Nine Modules.{" "}
            <em className="not-italic text-gold-gradient">Complete Mastery.</em>
          </h2>
        </motion.div>

        {/* Interactive Accordion Gallery */}
        <div className="space-y-0">
          {modules.map((mod, i) => (
            <motion.div
              key={mod.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="border-t border-alabaster/10 last:border-b"
            >
              <button
                onClick={() =>
                  setActiveIndex(activeIndex === i ? null : i)
                }
                className="w-full py-5 md:py-6 flex items-center gap-4 md:gap-8 group cursor-hover text-left"
              >
                {/* Module number */}
                <span className="font-[var(--font-serif)] text-champagne/30 group-hover:text-champagne text-lg md:text-xl transition-colors duration-500 w-10 shrink-0">
                  {mod.number}
                </span>

                {/* Module label */}
                <span className="hidden sm:block text-warm-gray/60 group-hover:text-warm-gray text-[10px] tracking-[0.2em] uppercase transition-colors duration-500 w-24 shrink-0">
                  {mod.label}
                </span>

                {/* Module title */}
                <span className="font-[var(--font-heading)] text-alabaster/80 group-hover:text-alabaster text-lg sm:text-xl md:text-2xl transition-colors duration-500 flex-1">
                  {mod.title}
                </span>

                {/* Expand indicator */}
                <motion.span
                  className="text-champagne/40 group-hover:text-champagne text-xl md:text-2xl shrink-0 transition-colors duration-500"
                  animate={{ rotate: activeIndex === i ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  +
                </motion.span>
              </button>

              {/* Expanded Content */}
              <AnimatePresence>
                {activeIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 pl-10 md:pl-14">
                      {/* Image */}
                      <div className="md:col-span-4">
                        <motion.div
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.6, delay: 0.1 }}
                          className="relative aspect-[4/3] overflow-hidden"
                        >
                          <Image
                            src={mod.image}
                            alt={mod.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 33vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-onyx/50 to-transparent" />
                        </motion.div>
                      </div>

                      {/* Topics */}
                      <div className="md:col-span-7 md:col-start-6 flex flex-col justify-center">
                        <ul className="space-y-3">
                          {mod.topics.map((topic, j) => (
                            <motion.li
                              key={j}
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{
                                duration: 0.4,
                                delay: 0.15 + j * 0.07,
                              }}
                              className="flex items-start gap-3 text-warm-gray-light text-sm leading-relaxed"
                            >
                              <span className="w-1 h-1 rounded-full bg-champagne/60 mt-2 shrink-0" />
                              {topic}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
