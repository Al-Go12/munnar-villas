"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import SectionHeading from "./SectionHeading";
import {
  GALLERY_ITEMS,
  GALLERY_CATEGORIES,
  ImageAsset,
} from "@/config/images";
import {
  CloseIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ExpandIcon,
} from "./Icons";

export default function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [showAll, setShowAll] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages =
    selectedCategory === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((img) => img.category === selectedCategory);

  const visibleImages = showAll ? filteredImages : filteredImages.slice(0, 8);

  const handlePrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) =>
      prev === null
        ? null
        : (prev - 1 + filteredImages.length) % filteredImages.length
    );
  }, [lightboxIndex, filteredImages.length]);

  const handleNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) =>
      prev === null ? null : (prev + 1) % filteredImages.length
    );
  }, [lightboxIndex, filteredImages.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex, handlePrev, handleNext]);

  const openImageInLightbox = (img: ImageAsset) => {
    const idx = filteredImages.findIndex((item) => item.id === img.id);
    setLightboxIndex(idx >= 0 ? idx : 0);
  };

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-white text-[#282B26]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="PHOTO GALLERY"
          title="Moments Worth Remembering."
          description="Explore views of Suryanelli's misty hillsides, wooden stay settings, Kolukkumalai sunrise trails, and surrounding Munnar landscapes."
        />

        {/* Category Filter Tabs */}
        <div className="mt-9 flex flex-wrap items-center justify-center gap-2">
          {GALLERY_CATEGORIES.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => {
                  setSelectedCategory(category);
                  setShowAll(false);
                  setLightboxIndex(null);
                }}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#344B39] text-white shadow-xs"
                    : "bg-[#F5F2E9] text-[#282B26] hover:bg-[#D9E1D3]/70 border border-[#344B39]/12"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Asymmetric Masonry-Style Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-5 auto-rows-[250px] sm:auto-rows-[270px]">
          {visibleImages.map((item, idx) => {
            // Varied asymmetric column & row spans on desktop for rich visual rhythm
            const pattern = idx % 8;
            let spanClasses = "lg:col-span-4 lg:row-span-1";
            if (pattern === 0) {
              spanClasses = "sm:col-span-2 lg:col-span-7 lg:row-span-2";
            } else if (pattern === 1) {
              spanClasses = "lg:col-span-5 lg:row-span-1";
            } else if (pattern === 2) {
              spanClasses = "lg:col-span-5 lg:row-span-1";
            } else if (pattern === 3) {
              spanClasses = "lg:col-span-4 lg:row-span-1";
            } else if (pattern === 4) {
              spanClasses = "lg:col-span-4 lg:row-span-1";
            } else if (pattern === 5) {
              spanClasses = "lg:col-span-4 lg:row-span-1";
            } else if (pattern === 6) {
              spanClasses = "lg:col-span-6 lg:row-span-1";
            } else if (pattern === 7) {
              spanClasses = "lg:col-span-6 lg:row-span-1";
            }

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => openImageInLightbox(item)}
                className={`${spanClasses} group relative rounded-[16px] overflow-hidden bg-[#D9E1D3] border border-[#344B39]/12 text-left focus:outline-none focus:ring-2 focus:ring-[#344B39] cursor-pointer shadow-xs`}
                aria-label={`Open ${item.title} in full screen gallery`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                {/* Top Category Tag + Expand Icon */}
                <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-xs text-[#344B39] text-[11px] font-bold">
                    {item.category}
                  </span>
                  <span className="h-8 w-8 rounded-full bg-black/45 text-white flex items-center justify-center opacity-80 group-hover:opacity-100 group-hover:bg-[#344B39] transition-all">
                    <ExpandIcon size={15} />
                  </span>
                </div>

                {/* Bottom Caption */}
                <div className="absolute bottom-3.5 left-4 right-4 text-white">
                  <p className="text-base sm:text-lg font-bold leading-snug">
                    {item.title}
                  </p>
                  {item.caption && (
                    <p className="text-xs text-white/80 line-clamp-1 mt-0.5">
                      {item.caption}
                    </p>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* View All Photos / Show Less Button */}
        {filteredImages.length > 8 && (
          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-[14px] bg-[#344B39] hover:bg-[#282B26] text-white font-semibold text-sm transition-all shadow-sm cursor-pointer"
            >
              <span>
                {showAll
                  ? "Show Featured Photos"
                  : `View All Photos (${filteredImages.length})`}
              </span>
            </button>
          </div>
        )}
      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxIndex !== null && filteredImages[lightboxIndex] && (
        <div
          className="fixed inset-0 z-50 bg-[#282B26]/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label="Photo Lightbox"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Top Bar */}
          <div
            className="flex items-center justify-between text-white max-w-6xl w-full mx-auto z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-white/15 text-xs font-semibold">
                {lightboxIndex + 1} / {filteredImages.length}
              </span>
              <span className="text-xs sm:text-sm font-medium text-[#D9E1D3]">
                {filteredImages[lightboxIndex].category}
              </span>
            </div>

            <button
              type="button"
              onClick={() => setLightboxIndex(null)}
              aria-label="Close lightbox"
              className="h-10 w-10 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <CloseIcon size={22} />
            </button>
          </div>

          {/* Center Image & Navigation Controls */}
          <div
            className="relative flex-1 flex items-center justify-center my-4 max-w-6xl w-full mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous image"
              className="absolute left-1 sm:left-3 z-20 h-11 w-11 rounded-full bg-black/50 hover:bg-[#344B39] text-white border border-white/20 flex items-center justify-center transition-colors cursor-pointer"
            >
              <ChevronLeftIcon size={24} />
            </button>

            <div className="relative w-full h-[60vh] sm:h-[72vh] rounded-[16px] overflow-hidden">
              <Image
                src={filteredImages[lightboxIndex].src}
                alt={filteredImages[lightboxIndex].alt}
                fill
                sizes="95vw"
                className="object-contain"
                priority
              />
            </div>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Next image"
              className="absolute right-1 sm:right-3 z-20 h-11 w-11 rounded-full bg-black/50 hover:bg-[#344B39] text-white border border-white/20 flex items-center justify-center transition-colors cursor-pointer"
            >
              <ChevronRightIcon size={24} />
            </button>
          </div>

          {/* Bottom Caption Bar */}
          <div
            className="max-w-3xl w-full mx-auto text-center text-white space-y-1 pb-2"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-lg sm:text-xl font-bold">
              {filteredImages[lightboxIndex].title}
            </h3>
            {filteredImages[lightboxIndex].caption && (
              <p className="text-xs sm:text-sm text-[#D9E1D3]">
                {filteredImages[lightboxIndex].caption}
              </p>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
