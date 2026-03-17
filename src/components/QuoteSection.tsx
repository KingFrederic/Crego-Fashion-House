"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function QuoteSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-section overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-champagne/[0.02] to-transparent" />

      <div className="relative max-w-[900px] mx-auto px-6 md:px-10 text-center">
        {/* Decorative quote mark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 0.08, scale: 1 } : {}}
          transition={{ duration: 1 }}
          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/4 overflow-hidden"
        >
          <span className="font-[var(--font-serif)] text-[8rem] md:text-[12rem] lg:text-[15rem] text-champagne leading-none select-none">
            &ldquo;
          </span>
        </motion.div>

        <motion.blockquote
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        >
          <p className="font-[var(--font-heading)] text-alabaster text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-[1.5] italic font-light">
            &ldquo;With me, it&apos;s intensive and you have to be serious about
            learning. This isn&apos;t a group class where you fade into the
            background. It&apos;s just you and the craft.&rdquo;
          </p>
        </motion.blockquote>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 flex items-center justify-center gap-4"
        >
          <div className="w-8 h-px bg-champagne/40" />
          <cite className="text-champagne text-[10px] tracking-[0.3em] uppercase not-italic font-[var(--font-sans)]">
            Crego Fashion House
          </cite>
          <div className="w-8 h-px bg-champagne/40" />
        </motion.div>
      </div>
    </section>
  );
}
