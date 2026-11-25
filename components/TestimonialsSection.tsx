"use client";

import React, { useState } from "react";
import SectionHeading from "./SectionHeading";
import { GUEST_TESTIMONIALS, SITE_INFO } from "@/config/siteData";
import {
  StarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ArrowUpRightIcon,
} from "./Icons";

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex(
      (prev) =>
        (prev - 1 + GUEST_TESTIMONIALS.length) % GUEST_TESTIMONIALS.length
    );
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % GUEST_TESTIMONIALS.length);
  };

  return (
    <section className="py-20 sm:py-28 bg-[#F5F2E9] text-[#282B26] border-t border-[#344B39]/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <SectionHeading
            align="left"
            eyebrow="GUEST TESTIMONIALS"
            title="Stories from Our Guests."
            description="Genuine feedback shared by travellers who stayed with us at Suryanelli hilltop."
          />

          {/* Verified Google Rating Summary Badge */}
          <div className="flex items-center gap-4 bg-white px-5 py-4 rounded-[16px] border border-[#344B39]/15 shadow-xs self-start lg:self-end">
            <div className="h-12 w-12 rounded-[12px] bg-[#344B39] text-white flex flex-col items-center justify-center font-extrabold text-lg leading-none">
              <span>{SITE_INFO.verifiedRating.score}</span>
              <span className="text-[10px] font-medium text-[#D9E1D3] mt-0.5">
                / {SITE_INFO.verifiedRating.outOf}
              </span>
            </div>
            <div>
              <div className="flex items-center gap-1 text-[#C8A982]">
                {[1, 2, 3, 4, 5].map((star) => (
                  <StarIcon key={star} size={15} />
                ))}
              </div>
              <p className="text-sm font-bold text-[#344B39] mt-0.5">
                {SITE_INFO.verifiedRating.reviewCountText}
              </p>
              <a
                href={SITE_INFO.contact.googleHotelsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold text-[#596B4D] hover:text-[#344B39] hover:underline"
              >
                <span>View on {SITE_INFO.verifiedRating.source}</span>
                <ArrowUpRightIcon size={13} />
              </a>
            </div>
          </div>
        </div>

        {/* Desktop 3-Column Grid & Mobile Interactive Carousel */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {GUEST_TESTIMONIALS.map((item, idx) => {
            const isHighlighted = idx === activeIndex;
            return (
              <article
                key={item.id}
                onClick={() => setActiveIndex(idx)}
                className={`rounded-[18px] p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between cursor-pointer border ${
                  isHighlighted
                    ? "bg-white border-[#344B39] shadow-[0_16px_40px_rgba(52,75,57,0.12)]"
                    : "bg-white/75 border-[#344B39]/12 hover:bg-white"
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1 text-[#C8A982]">
                      {Array.from({ length: item.rating }).map((_, i) => (
                        <StarIcon key={i} size={16} />
                      ))}
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-[11px] font-semibold ${
                        item.isPlaceholder
                          ? "bg-[#C8A982]/25 text-[#282B26]"
                          : "bg-[#D9E1D3] text-[#344B39]"
                      }`}
                    >
                      {item.sourceLabel}
                    </span>
                  </div>

                  <blockquote className="text-base sm:text-lg text-[#282B26] leading-relaxed font-medium">
                    &ldquo;{item.reviewText}&rdquo;
                  </blockquote>
                </div>

                <div className="mt-6 pt-4 border-t border-[#344B39]/10 flex items-center gap-3.5">
                  <div className="h-11 w-11 rounded-full bg-[#344B39] text-[#F5F2E9] font-bold text-sm flex items-center justify-center shrink-0">
                    {item.initials}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#344B39]">
                      {item.guestName}
                    </p>
                    <p className="text-xs text-[#282B26]/70">
                      {item.stayContext}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Carousel Controls & Indicator */}
        <div className="mt-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {GUEST_TESTIMONIALS.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveIndex(idx)}
                aria-label={`Select testimonial ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all cursor-pointer ${
                  idx === activeIndex
                    ? "w-8 bg-[#344B39]"
                    : "w-2.5 bg-[#344B39]/25 hover:bg-[#344B39]/50"
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="h-10 w-10 rounded-full bg-white border border-[#344B39]/20 text-[#344B39] hover:bg-[#344B39] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <ChevronLeftIcon size={18} />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next testimonial"
              className="h-10 w-10 rounded-full bg-white border border-[#344B39]/20 text-[#344B39] hover:bg-[#344B39] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <ChevronRightIcon size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
