"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15, delayChildren: 2.6 },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] as const },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      id="hero"
    >
      {/* Background gradient layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-onyx via-onyx/95 to-onyx z-[1]" />

      {/* Decorative geometric elements */}
      <motion.div
        className="absolute top-[15%] right-[8%] w-32 h-32 border border-champagne/10 rotate-45 z-[2]"
        style={{ opacity }}
        animate={{ rotate: [45, 135] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-[20%] left-[5%] w-20 h-20 border border-champagne/8 rotate-12 z-[2]"
        style={{ opacity }}
        animate={{ rotate: [12, -78] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />

      {/* Split layout container */}
      <div className="relative z-[3] max-w-[1400px] mx-auto px-6 md:px-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 items-center pt-24 lg:pt-0">
        {/* Left — Text Content */}
        <motion.div
          style={{ y: textY, opacity }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="order-2 lg:order-1 max-w-xl"
        >
          {/* Eyebrow */}
          <motion.div variants={childVariants} className="flex items-center gap-4 mb-8">
            <div className="w-12 h-px bg-champagne" />
            <span className="text-champagne text-[10px] tracking-[0.35em] uppercase font-[var(--font-sans)]">
              Exclusive Coaching
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1 variants={childVariants} className="fluid-display text-alabaster mb-4">
            Master the
            <br />
            <span className="italic font-[var(--font-heading)] font-light">
              Art{" "}
            </span>
            of Pattern
            <br />
            <span className="text-gold-gradient">Drafting</span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            variants={childVariants}
            className="fluid-subheadline text-warm-gray-light mb-8"
          >
            For Ready-to-Wear, Custom Made &amp; Bridals
          </motion.p>

          {/* Description */}
          <motion.p
            variants={childVariants}
            className="text-warm-gray text-sm md:text-base leading-relaxed max-w-md mb-10 font-[var(--font-sans)]"
          >
            Intimate 1-on-1 private coaching — online or in&#8209;person. Not a
            group workshop. Your journey, your pace, your mastery.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={childVariants} className="flex flex-wrap gap-4">
            <a
              href="https://wa.me/2349090059964?text=Hello%2C%20I%E2%80%99m%20interested%20in%20the%20Pattern%20Drafting%20Course"
              target="_blank"
              rel="noopener noreferrer"
              className="magnetic-btn bg-champagne text-onyx px-8 py-4 text-xs tracking-[0.15em] uppercase font-medium cursor-hover group"
            >
              <span className="flex items-center gap-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Begin Your Journey
              </span>
            </a>
            <a
              href="#curriculum"
              className="border border-alabaster/20 hover:border-champagne/50 text-alabaster/80 hover:text-alabaster px-8 py-4 text-xs tracking-[0.15em] uppercase transition-all duration-500 cursor-hover"
            >
              View Curriculum
            </a>
          </motion.div>
        </motion.div>

        {/* Right — Hero Visual */}
        <motion.div
          className="order-1 lg:order-2 relative"
          style={{ y: imageY }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, clipPath: "inset(10% 10% 10% 10%)" }}
            animate={{ opacity: 1, scale: 1, clipPath: "inset(0% 0% 0% 0%)" }}
            transition={{ duration: 1.4, delay: 2.8, ease: [0.76, 0, 0.24, 1] }}
            className="relative aspect-[3/4] max-h-[75vh] lg:max-h-[85vh] overflow-hidden"
          >
            <motion.div style={{ scale: imageScale }} className="w-full h-full">
              <Image
                src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80"
                alt="Elegant bridal gown with intricate pattern details"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
            {/* Image overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-onyx/60 via-transparent to-onyx/20" />

            {/* Floating accent on image */}
            <motion.div
              className="absolute bottom-8 left-8 z-10"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 3.6 }}
            >
              <div className="glass-light px-5 py-3">
                <p className="text-[10px] tracking-[0.3em] uppercase text-champagne-light font-[var(--font-sans)]">
                  Est. Lagos, Nigeria
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Decorative frame offset */}
          <motion.div
            className="absolute -top-4 -right-4 w-full h-full border border-champagne/15 -z-10 hidden lg:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 3.2 }}
          />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[3] flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 1 }}
      >
        <span className="text-[9px] tracking-[0.3em] uppercase text-warm-gray font-[var(--font-sans)]">
          Scroll
        </span>
        <motion.div
          className="w-px h-12 bg-gradient-to-b from-champagne/60 to-transparent"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ transformOrigin: "top" }}
        />
      </motion.div>
    </section>
  );
}
