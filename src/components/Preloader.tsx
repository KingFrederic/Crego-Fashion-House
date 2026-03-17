"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-onyx"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Decorative top line */}
          <motion.div
            className="absolute top-0 left-0 h-[2px] bg-champagne"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.2, ease: [0.76, 0, 0.24, 1] }}
          />

          {/* Logo mark */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <div className="w-16 h-16 border border-champagne/30 rotate-45 flex items-center justify-center">
              <span className="font-[var(--font-serif)] text-champagne text-2xl -rotate-45">
                C
              </span>
            </div>
          </motion.div>

          {/* Brand name */}
          <motion.div className="overflow-hidden">
            <motion.h1
              className="font-[var(--font-serif)] text-alabaster text-xl tracking-[0.4em] uppercase"
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.76, 0, 0.24, 1] }}
            >
              Crego Fashion House
            </motion.h1>
          </motion.div>

          {/* Tagline */}
          <motion.p
            className="font-[var(--font-heading)] text-warm-gray text-sm tracking-[0.2em] mt-3 italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            The Art of Pattern Drafting
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
