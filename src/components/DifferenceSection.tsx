"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const differenceCards = [
  {
    title: "Personalized Pace",
    description:
      "No rigid curriculum. Every session is tailored to your skill level, goals, and learning speed. You set the pace — we ensure the depth.",
    accent: "01",
    span: "md:col-span-2 md:row-span-2",
    image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=600&q=80",
    hasImage: true,
  },
  {
    title: "Pro Techniques",
    description:
      "Master insider techniques that go far beyond free YouTube tutorials. Learn the methods used in professional ateliers across Paris, Milan, and Lagos.",
    accent: "02",
    span: "md:col-span-1 md:row-span-1",
    hasImage: false,
  },
  {
    title: "Build a Portfolio",
    description:
      "Every module produces real, tangible outputs. You leave with custom-fit blocks, production-ready patterns, and a body of work that proves your skill.",
    accent: "03",
    span: "md:col-span-1 md:row-span-1",
    hasImage: false,
  },
  {
    title: "Private Coaching",
    description:
      "Not a group workshop. It's just you and the craft. Intensive, focused, and transformative — the way mastery has always been taught.",
    accent: "04",
    span: "md:col-span-1 md:row-span-1",
    hasImage: false,
  },
  {
    title: "Lifetime Foundation",
    description:
      "The patterns you learn to draft become the foundation for an entire career. Whether bridal, RTW, or couture — it all starts here.",
    accent: "05",
    span: "md:col-span-1 md:row-span-1",
    hasImage: false,
  },
];

export default function DifferenceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={sectionRef}
      id="difference"
      className="relative py-section overflow-hidden"
    >
      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="editorial-line" />
            <span className="text-champagne text-[10px] tracking-[0.35em] uppercase">
              The Difference
            </span>
          </div>
          <h2 className="fluid-headline text-alabaster max-w-2xl">
            Why Crego is{" "}
            <em className="not-italic text-gold-gradient">different</em>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {differenceCards.map((card, i) => (
            <motion.div
              key={card.accent}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.1 + i * 0.1,
                ease: [0.76, 0, 0.24, 1],
              }}
              className={`group relative overflow-hidden ${card.span} ${
                card.hasImage ? "min-h-[400px] md:min-h-[500px]" : "p-8 md:p-10"
              } glass-light hover:border-champagne/20 transition-all duration-700 cursor-hover`}
            >
              {card.hasImage && (
                <>
                  <Image
                    src={card.image!}
                    alt={card.title}
                    fill
                    className="object-cover opacity-40 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700"
                    sizes="(max-width: 768px) 100vw, 66vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                    <span className="font-[var(--font-serif)] text-champagne/30 text-6xl block mb-2 group-hover:text-champagne/50 transition-colors duration-500">
                      {card.accent}
                    </span>
                    <h3 className="font-[var(--font-heading)] text-alabaster text-2xl md:text-3xl mb-3">
                      {card.title}
                    </h3>
                    <p className="text-warm-gray-light text-sm leading-relaxed max-w-md">
                      {card.description}
                    </p>
                  </div>
                </>
              )}

              {!card.hasImage && (
                <div className="h-full flex flex-col justify-between">
                  <span className="font-[var(--font-serif)] text-champagne/20 text-5xl group-hover:text-champagne/40 transition-colors duration-500">
                    {card.accent}
                  </span>
                  <div className="mt-auto">
                    <h3 className="font-[var(--font-heading)] text-alabaster text-xl md:text-2xl mb-3">
                      {card.title}
                    </h3>
                    <p className="text-warm-gray text-sm leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              )}

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-0 w-0 h-px bg-champagne group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
