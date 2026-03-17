"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={sectionRef}
      className="relative py-section overflow-hidden"
    >
      {/* Ambient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-onyx via-deep-brown/30 to-onyx" />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-champagne/[0.03] blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.03, 0.06, 0.03],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative max-w-[800px] mx-auto px-6 md:px-10 text-center">
        {/* Decorative top element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-10"
        >
          <div className="w-16 h-16 border border-champagne/20 rotate-45 flex items-center justify-center">
            <div className="w-8 h-8 border border-champagne/30 rotate-0 flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-champagne" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="fluid-headline text-alabaster mb-6">
            Your Mastery{" "}
            <em className="not-italic text-gold-gradient">Starts Today</em>
          </h2>

          <p className="text-warm-gray text-sm md:text-base leading-[1.8] mb-4 max-w-lg mx-auto">
            Whether you&apos;re stepping into fashion for the first time or
            leveling up your existing skills, this program is your turning
            point.
          </p>
          <p className="text-warm-gray text-sm md:text-base leading-[1.8] mb-12 max-w-lg mx-auto">
            Spaces are limited to ensure every student receives the undivided
            attention they deserve. Secure yours now.
          </p>
        </motion.div>

        {/* The Invitation Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col items-center gap-6"
        >
          <a
            href="https://wa.me/2349090059964?text=Hello%2C%20I%E2%80%99m%20ready%20to%20begin%20my%20Pattern%20Drafting%20journey%20with%20Crego%20Fashion%20House"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-4 cursor-hover"
          >
            {/* Outer pulsing ring */}
            <span className="absolute inset-0 border border-champagne/20 group-hover:border-champagne/40 transition-all duration-500 scale-110 group-hover:scale-125 opacity-50 group-hover:opacity-100" />

            {/* Button body */}
            <span className="relative z-10 magnetic-btn bg-gradient-to-r from-champagne via-champagne-light to-champagne text-onyx px-10 py-5 text-xs tracking-[0.2em] uppercase font-semibold overflow-hidden">
              <span className="relative z-10 flex items-center gap-3">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Enroll via WhatsApp
              </span>
            </span>
          </a>

          <a
            href="https://instagram.com/cregofashion"
            target="_blank"
            rel="noopener noreferrer"
            className="text-warm-gray hover:text-champagne text-xs tracking-[0.2em] uppercase transition-colors duration-300 flex items-center gap-2 cursor-hover group"
          >
            Follow on Instagram
            <motion.span
              className="inline-block"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              &rarr;
            </motion.span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
