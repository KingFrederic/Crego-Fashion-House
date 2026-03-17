"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const images = [
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=500&q=80",
    alt: "Fashion design studio",
    aspect: "aspect-[3/4]",
  },
  {
    src: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&q=80",
    alt: "Fabric draping",
    aspect: "aspect-[4/5]",
  },
  {
    src: "https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?w=500&q=80",
    alt: "Pattern cutting tools",
    aspect: "aspect-[3/4]",
  },
  {
    src: "https://images.unsplash.com/photo-1559563458-527698bf5295?w=500&q=80",
    alt: "Dress form with garment",
    aspect: "aspect-[4/5]",
  },
  {
    src: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=500&q=80",
    alt: "Fashion sketches",
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
            The Atelier
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
