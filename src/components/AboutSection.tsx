"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const features = [
  {
    number: "01",
    title: "Online",
    desc: "Learn from anywhere in the world via live private sessions",
  },
  {
    number: "02",
    title: "Physical",
    desc: "In-person coaching at our Lagos atelier for hands-on mastery",
  },
  {
    number: "03",
    title: "Personalized",
    desc: "Curriculum tailored to your skill level and creative goals",
  },
  {
    number: "04",
    title: "Portfolio",
    desc: "Leave with custom-fit blocks and a professional portfolio",
  },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-section overflow-hidden"
    >
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-champagne/[0.02] to-transparent" />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Asymmetrical grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left — Stacked Images */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
              className="relative aspect-[3/4] overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?w=700&q=80"
                alt="Designer working on pattern drafting"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-onyx/40 to-transparent" />
            </motion.div>

            {/* Overlapping smaller image */}
            <motion.div
              initial={{ opacity: 0, x: 40, y: 20 }}
              animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
              className="absolute -bottom-8 -right-4 lg:right-[-2rem] w-[55%] aspect-[4/5] overflow-hidden border-4 border-onyx z-10 hidden md:block"
            >
              <Image
                src="https://images.unsplash.com/photo-1558171813-4c088753af8f?w=500&q=80"
                alt="Close-up of fabric and pattern tools"
                fill
                className="object-cover"
                sizes="25vw"
              />
            </motion.div>

            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute top-6 -left-4 lg:-left-6 glass px-5 py-4 z-10 hidden md:block"
            >
              <p className="text-champagne text-3xl font-[var(--font-serif)] font-medium">
                9
              </p>
              <p className="text-warm-gray text-[10px] tracking-[0.15em] uppercase mt-1">
                Modules of
                <br />
                Mastery
              </p>
            </motion.div>
          </div>

          {/* Right — Content */}
          <div className="lg:col-span-6 lg:col-start-7">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Section label */}
              <div className="flex items-center gap-4 mb-6">
                <div className="editorial-line" />
                <span className="text-champagne text-[10px] tracking-[0.35em] uppercase">
                  The Atelier
                </span>
              </div>

              <h2 className="fluid-headline text-alabaster mb-6">
                Learn to draft patterns that fit{" "}
                <em className="text-champagne-light not-italic">any body</em>,
                <br className="hidden lg:block" /> every time.
              </h2>

              <p className="text-warm-gray text-sm md:text-base leading-[1.8] mb-4 max-w-lg">
                At Crego Fashion House, pattern drafting isn&apos;t taught — it&apos;s
                transferred. Through intensive 1-on-1 private coaching, you develop
                the eye, the hand, and the instinct of a master pattern maker.
              </p>
              <p className="text-warm-gray text-sm md:text-base leading-[1.8] mb-10 max-w-lg">
                Whether you&apos;re building a fashion brand from scratch or elevating
                your existing craft, this is the foundation that separates
                hobbyists from professionals.
              </p>
            </motion.div>

            {/* Feature grid — editorial numbered list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feat, i) => (
                <motion.div
                  key={feat.number}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: 0.4 + i * 0.1,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                  className="group relative pl-12 py-3 border-l border-alabaster/10 hover:border-champagne/40 transition-colors duration-500"
                >
                  <span className="absolute left-3 top-3 font-[var(--font-serif)] text-champagne/30 text-2xl group-hover:text-champagne/60 transition-colors duration-500">
                    {feat.number}
                  </span>
                  <h3 className="text-alabaster text-sm tracking-[0.1em] uppercase mb-1 font-medium">
                    {feat.title}
                  </h3>
                  <p className="text-warm-gray text-xs leading-relaxed">
                    {feat.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
