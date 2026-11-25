"use client";

import React, { useState } from "react";
import Image from "next/image";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { SIGHTSEEING_DESTINATIONS, SITE_INFO } from "@/config/siteData";
import { MapPinIcon, ArrowUpRightIcon, WhatsAppIcon } from "./Icons";

type FilterType = "All" | "Nearby Attraction" | "Day Trip Circuit";

export default function SightseeingSection() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("All");

  const filteredDestinations =
    activeFilter === "All"
      ? SIGHTSEEING_DESTINATIONS
      : SIGHTSEEING_DESTINATIONS.filter((d) => d.tripType === activeFilter);

  const planTripWhatsAppUrl = `https://wa.me/${
    SITE_INFO.contact.whatsappNumber
  }?text=${encodeURIComponent(
    "Hello Munnar Villas, I would like help planning our Munnar and Suryanelli sightseeing itinerary during our stay."
  )}`;

  return (
    <section
      id="sightseeing"
      className="py-20 sm:py-28 bg-[#F5F2E9] text-[#282B26] border-t border-[#344B39]/10 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="EXPLORE MUNNAR • SIGHTSEEING"
            title="Discover the Beauty Beyond Your Stay."
            description="Suryanelli places you right at the gateway to Kolukkumalai and Anayirankal Dam while serving as an effortless base for full-day scenic circuits across Munnar, Mattupetty, and Marayoor."
          />
        </Reveal>

        {/* Filter Pills Distinguishing Nearby Attractions from Longer Day Trips */}
        <Reveal delay={100}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            {(
              [
                { label: "All Destinations (8)", value: "All" },
                {
                  label: "Nearby Suryanelli Attractions (3)",
                  value: "Nearby Attraction",
                },
                {
                  label: "Munnar Day Trip Circuits (5)",
                  value: "Day Trip Circuit",
                },
              ] as const
            ).map((tab) => {
              const isActive = activeFilter === tab.value;
              return (
                <button
                  key={tab.value}
                  type="button"
                  onClick={() => setActiveFilter(tab.value)}
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-[#344B39] text-white shadow-[0_8px_20px_rgba(52,75,57,0.22)] scale-[1.02]"
                      : "bg-white text-[#282B26] hover:bg-[#D9E1D3]/60 border border-[#344B39]/15"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Redesigned Luxury Destination Cards Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {filteredDestinations.map((place, index) => {
            const isNearby = place.tripType === "Nearby Attraction";
            const displayIndex = String(index + 1).padStart(2, "0");

            return (
              <Reveal key={place.id} delay={(index % 4) * 90} className="h-full">
                <article className="luxury-card group h-full rounded-[20px] bg-white border border-[#344B39]/12 overflow-hidden shadow-[0_10px_30px_rgba(40,43,38,0.05)] flex flex-col justify-between">
                  <div>
                    {/* Luxury Image Header with Floating Badges */}
                    <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#D9E1D3]">
                      <Image
                        src={place.image.src}
                        alt={place.image.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#282B26]/85 via-[#282B26]/20 to-transparent" />

                      {/* Top Row: Trip Type Badge & Number Badge */}
                      <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2">
                        <span
                          className={`px-3 py-1 rounded-full text-[11px] font-bold tracking-wide shadow-xs backdrop-blur-md ${
                            isNearby
                              ? "bg-[#344B39]/90 text-white border border-white/20"
                              : "bg-white/90 text-[#344B39]"
                          }`}
                        >
                          {place.tripType}
                        </span>
                        <span className="h-7 w-7 rounded-full bg-black/40 backdrop-blur-md text-[#F5F2E9] border border-white/20 text-[11px] font-bold flex items-center justify-center">
                          {displayIndex}
                        </span>
                      </div>

                      {/* Bottom Image Overlay: Destination Title & Verified Distance */}
                      <div className="absolute bottom-3 left-4 right-4 text-white">
                        <h3 className="text-xl font-extrabold tracking-tight text-white group-hover:text-[#F5F2E9] transition-colors">
                          {place.name}
                        </h3>
                        <div className="mt-1 flex items-center gap-1.5 text-[11px] text-[#F5F2E9]/90 font-medium">
                          <MapPinIcon
                            size={13}
                            className="text-[#C8A982] shrink-0"
                          />
                          <span className="line-clamp-1">
                            {place.verifiedDistanceNote}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Card Content Body */}
                    <div className="p-5 sm:p-6 space-y-4">
                      <p className="text-xs sm:text-sm text-[#282B26]/80 leading-relaxed">
                        {place.description}
                      </p>

                      {/* Highlight Chips */}
                      <div className="pt-1 flex flex-wrap gap-1.5">
                        {place.highlights.map((h) => (
                          <span
                            key={h}
                            className="px-2.5 py-1 rounded-full bg-[#F5F2E9] text-[#344B39] text-[11px] font-semibold border border-[#344B39]/10"
                          >
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Sleek Interactive Footer Link */}
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-1">
                    <a
                      href={place.mapsQueryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn w-full py-3 px-4 rounded-[12px] bg-[#F5F2E9] hover:bg-[#344B39] text-[#344B39] hover:text-white text-xs font-bold tracking-wide transition-all duration-300 flex items-center justify-between border border-[#344B39]/10"
                    >
                      <span>Explore Location</span>
                      <span className="h-6 w-6 rounded-full bg-white/80 group-hover/btn:bg-white/20 flex items-center justify-center transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5">
                        <ArrowUpRightIcon size={14} />
                      </span>
                    </a>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* Bottom CTA: Plan Your Munnar Experience */}
        <Reveal delay={150}>
          <div className="mt-14 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-5 p-5 sm:px-8 sm:py-6 rounded-[20px] bg-white border border-[#344B39]/15 shadow-[0_14px_36px_rgba(52,75,57,0.08)]">
              <div className="text-center sm:text-left">
                <p className="text-base sm:text-lg font-bold text-[#344B39]">
                  Need local guidance for your Munnar itinerary?
                </p>
                <p className="text-xs sm:text-sm text-[#282B26]/75 mt-0.5">
                  Our team at Suryanelli can help coordinate local 4x4 jeeps and
                  point you to the best scenic routes.
                </p>
              </div>
              <a
                href={planTripWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-[14px] bg-[#344B39] hover:bg-[#282B26] text-white text-sm font-semibold transition-all duration-300 shrink-0 shadow-sm hover:-translate-y-0.5"
              >
                <WhatsAppIcon size={18} />
                <span>Plan Your Munnar Experience</span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
