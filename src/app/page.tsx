"use client";

import Preloader from "@/components/Preloader";
import CustomCursor from "@/components/CustomCursor";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import QuoteSection from "@/components/QuoteSection";
import GalleryStrip from "@/components/GalleryStrip";
import CurriculumSection from "@/components/CurriculumSection";
import DifferenceSection from "@/components/DifferenceSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Preloader />
      <CustomCursor />
      <Navigation />

      <main>
        <HeroSection />
        <AboutSection />
        <QuoteSection />
        <GalleryStrip />
        <CurriculumSection />
        <DifferenceSection />
        <CTASection />
      </main>

      <Footer />

      {/* Floating Instagram badge */}
      <a
        href="https://instagram.com/cregofashion"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-12 h-12 glass flex items-center justify-center rounded-full hover:border-champagne/30 transition-all duration-300 cursor-hover group"
        aria-label="Follow on Instagram"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-warm-gray group-hover:text-champagne transition-colors duration-300"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
        </svg>
      </a>
    </>
  );
}
