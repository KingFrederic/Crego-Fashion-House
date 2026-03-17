"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const images = [
  {
    src: "https://images.unsplash.com/photo-1605289355680-75fb41239154?w=500&q=80",
    alt: "Bridal gown on dress form",
    aspect: "aspect-[3/4]",
  },
  {
    src: "https://images.unsplash.com/photo-1520975916090-3105956dac38?w=500&q=80",
    alt: "Fabric swatches and measuring tape",
    aspect: "aspect-[4/5]",
  },
  {
    src: "https://images.unsplash.com/photo-1617019114583-affb34d1b3cd?w=500&q=80",
    alt: "Sewing machine close-up with white fabric",
    aspect: "aspect-[3/4]",
  },
  {
    src: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&q=80",
    alt: "Elegant white bridal fabric detail",
    aspect: "aspect-[4/5]",
  },
  {
    src: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=500&q=80",
    alt: "Pattern drafting workspace with tools",
    aspect: "aspect-[3/4]",
  },
];

export default function GalleryStrip() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="relative py-16 md:py-24 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <div className="w-12 h-px bg-champagne/30" />
          <span className="text-champagne/50 text-[10px] tracking-[0.35em] uppercase">
            Our Craft
          </span>
          <div className="w-12 h-px bg-champagne/30" />
        </motion.div>
      </div>

      {/* Horizontal scroll gallery */}
      <div className="flex gap-4 md:gap-6 px-6 md:px-10 overflow-x-auto hide-scrollbar">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            className={`relative shrink-0 w-[260px] md:w-[320px] ${img.aspect} overflow-hidden group cursor-hover`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              sizes="320px"
            />
            <div className="absolute inset-0 bg-onyx/20 group-hover:bg-onyx/10 transition-colors duration-500" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
