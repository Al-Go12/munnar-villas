"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { RESORT_IMAGES } from "@/config/images";
import { ArrowRightIcon } from "./Icons";

const HERO_SLIDES = [
  {
    id: "slide-hillside-resort",
    image: RESORT_IMAGES.heroHillsideResort,
    eyebrow: "MUNNAR VILLAS • SURYANELLI WOOD RESORT",
    headlineLine1: "Escape to the Hills.",
    headlineLine2: "Stay Close to Nature.",
    description:
      "Discover a peaceful wooden villa retreat nestled amidst the lush emerald tea slopes and mountain forests of Suryanelli, Munnar.",
  },
  {
    id: "slide-dawn-horizon",
    image: RESORT_IMAGES.heroDesktop,
    eyebrow: "GATEWAY TO KOLUKKUMALAI & HIGH RANGES",
    headlineLine1: "Wake Up Above",
    headlineLine2: "The Misty Clouds.",
    description:
      "Experience breathtaking mountain sunrises, cool highland breezes, and warm boutique hospitality in the heart of Suryanelli.",
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const activeContent = HERO_SLIDES[currentSlide];

  return (
    <section
      id="home"
      className="relative min-h-[88vh] sm:min-h-[92vh] w-full flex items-center justify-center overflow-hidden bg-[#1a221c]"
    >
      {/* Carousel Background Slides — Crystal-Clear Full Resolution without Muddy Full-Screen Haze */}
      {HERO_SLIDES.map((slide, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 z-0 transition-opacity duration-1200 ease-in-out ${
              isActive ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            aria-hidden={!isActive}
          >
            <Image
              src={slide.image.src}
              alt={slide.image.alt}
              fill
              priority={index === 0}
              unoptimized
              sizes="100vw"
              className="object-cover object-center"
            />
            {/* Clean, targeted vignette only behind the text and navbar so the resort & greenery stay vivid and razor-sharp */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/45" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/15 to-transparent" />
          </div>
        );
      })}

      {/* Main Hero Content Container — Responsively Aligned Across Mobile, Tablet & Desktop */}
      <div className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 pt-28 pb-20 sm:pt-36 sm:pb-24 flex flex-col justify-center">
        <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left flex flex-col items-center lg:items-start space-y-5 sm:space-y-6">
          {/* Crisp Luxury Eyebrow */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/35 backdrop-blur-xs border border-white/25 text-white text-[11px] sm:text-xs font-semibold uppercase tracking-[0.22em] shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C8A982]" />
            <span>{activeContent.eyebrow}</span>
          </div>

          {/* Large Responsive Headline with Optical Drop Shadow for Crystal-Clear Legibility */}
          <h1
            key={activeContent.id}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.15rem] font-extrabold text-white leading-[1.1] tracking-tight drop-shadow-[0_4px_24px_rgba(0,0,0,0.65)] animate-fade-up"
          >
            <span className="block">{activeContent.headlineLine1}</span>
            <span className="text-[#F5F2E9] block mt-1">
              {activeContent.headlineLine2}
            </span>
          </h1>

          {/* Supporting Description */}
          <p className="text-sm sm:text-lg md:text-xl text-white font-medium max-w-xl leading-relaxed drop-shadow-[0_2px_14px_rgba(0,0,0,0.75)]">
            {activeContent.description}
          </p>

          {/* Compact Single CTA Button — Properly Sized on Mobile & Desktop */}
          <div className="pt-2 flex items-center justify-center lg:justify-start">
            <a
              href="#stay"
              className="group inline-flex w-auto items-center justify-center gap-2.5 px-7 py-3.5 sm:px-8 sm:py-4 rounded-[14px] bg-[#344B39] hover:bg-[#282B26] text-white font-semibold text-sm sm:text-base transition-all duration-300 shadow-[0_12px_32px_rgba(0,0,0,0.38)] border border-white/25 hover:-translate-y-0.5"
            >
              <span>Explore Our Stay</span>
              <ArrowRightIcon
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
