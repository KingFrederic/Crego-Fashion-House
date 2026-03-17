"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Footer() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer ref={ref} className="relative border-t border-alabaster/5">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          {/* Brand column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="md:col-span-5"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 border border-champagne/30 rotate-45 flex items-center justify-center">
                <span className="font-[var(--font-serif)] text-champagne text-sm -rotate-45">
                  C
                </span>
              </div>
              <span className="font-[var(--font-serif)] text-alabaster text-lg tracking-[0.15em] uppercase">
                Crego Fashion House
              </span>
            </div>
            <p className="text-warm-gray text-xs leading-relaxed max-w-sm">
              Bridal &amp; High-Profile Fashion — Pattern Drafting Training.
              Transforming aspiring designers into master pattern makers through
              intensive, private coaching.
            </p>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-3"
          >
            <h4 className="text-alabaster text-[10px] tracking-[0.2em] uppercase mb-4">
              Navigation
            </h4>
            <div className="flex flex-col gap-2">
              {["About", "Curriculum", "Why Us"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(" ", "-")}`}
                  className="text-warm-gray hover:text-champagne text-xs transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-4"
          >
            <h4 className="text-alabaster text-[10px] tracking-[0.2em] uppercase mb-4">
              Connect
            </h4>
            <div className="flex flex-col gap-2">
              <a
                href="https://wa.me/2349090059964"
                target="_blank"
                rel="noopener noreferrer"
                className="text-warm-gray hover:text-champagne text-xs transition-colors duration-300"
              >
                WhatsApp: +234 909 005 9964
              </a>
              <a
                href="https://instagram.com/cregofashion"
                target="_blank"
                rel="noopener noreferrer"
                className="text-warm-gray hover:text-champagne text-xs transition-colors duration-300"
              >
                Instagram: @cregofashion
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-6 border-t border-alabaster/5 flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <p className="text-warm-gray/60 text-[10px] tracking-[0.1em]">
            &copy; {new Date().getFullYear()} Crego Fashion House. All rights reserved.
          </p>
          <p className="text-warm-gray/40 text-[10px] tracking-[0.1em] italic font-[var(--font-heading)]">
            Crafted with precision
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
