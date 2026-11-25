import React from "react";
import Image from "next/image";
import { RESORT_IMAGES } from "@/config/images";
import Reveal from "./Reveal";
import { ArrowRightIcon, CheckCircleIcon, MapPinIcon } from "./Icons";

export default function IntroSection() {
  return (
    <section
      id="about"
      className="py-20 sm:py-28 bg-[#F5F2E9] text-[#282B26] overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Storytelling */}
          <div className="lg:col-span-6">
            <Reveal className="space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#596B4D]" />
                <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-[#596B4D]">
                  WELCOME TO MUNNAR VILLAS
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-bold text-[#344B39] leading-[1.15]">
                A Place to Slow Down and Reconnect.
              </h2>

              <p className="text-base sm:text-lg text-[#282B26]/85 leading-relaxed">
                Set amidst the beautiful hills of Suryanelli,{" "}
                <strong className="font-semibold text-[#344B39]">
                  Munnar Villas Suryanelli Wood Resort
                </strong>{" "}
                offers a welcoming escape from everyday life. Enjoy the charm of
                wooden accommodation, refreshing mountain surroundings and
                memorable moments with the people who matter.
              </p>

              <p className="text-sm sm:text-base text-[#282B26]/75 leading-relaxed">
                Situated at Suryanelli town hilltop along the scenic
                Chinnakanal–Suryanelli Road, our retreat places you away from
                busy town congestion while keeping you right at the doorstep of
                Munnar&apos;s high-altitude tea estates, misty viewpoints, and
                the starting point for Kolukkumalai sunrise expeditions.
              </p>

              {/* Key Verified Highlights */}
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2 text-left">
                {[
                  "Peaceful Suryanelli hilltop location",
                  "Warm wooden cottage ambiance",
                  "Prime base for Kolukkumalai Jeep Safari",
                  "Close to Anayirankal Dam & tea trails",
                ].map((point) => (
                  <div
                    key={point}
                    className="flex items-center gap-2.5 text-sm font-medium text-[#282B26] bg-white/60 px-3.5 py-2.5 rounded-[12px] border border-[#344B39]/10"
                  >
                    <CheckCircleIcon
                      size={18}
                      className="text-[#344B39] shrink-0"
                    />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <a
                  href="#stay"
                  className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-[14px] bg-[#344B39] hover:bg-[#282B26] text-white font-semibold text-sm transition-all duration-300 shadow-sm hover:-translate-y-0.5"
                >
                  <span>Explore More</span>
                  <ArrowRightIcon
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
                <a
                  href="#experiences"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-[14px] bg-white hover:bg-[#D9E1D3]/60 text-[#344B39] border border-[#344B39]/15 font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5"
                >
                  <span>Discover Experiences</span>
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Layered Photography Composition */}
          <div className="lg:col-span-6 relative">
            <Reveal delay={140} direction="scale">
              <div className="relative mx-auto max-w-lg lg:max-w-none pb-4 sm:pb-8">
                {/* Primary Image: Authentic Resort Exterior */}
                <div className="relative aspect-[4/3] w-full sm:w-[90%] rounded-[20px] overflow-hidden shadow-[0_24px_54px_rgba(52,75,57,0.16)] border border-[#344B39]/12 bg-[#D9E1D3]">
                  <Image
                    src={RESORT_IMAGES.resortExterior.src}
                    alt={RESORT_IMAGES.resortExterior.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-[#344B39] text-xs font-semibold flex items-center gap-1.5 shadow-xs">
                    <MapPinIcon size={14} className="text-[#596B4D]" />
                    <span>Munnar Villas Suryanelli Wood Resort</span>
                  </div>
                </div>

                {/* Overlapping Secondary Image: Authentic Wooden Bedroom Interior */}
                <div className="mt-4 sm:mt-0 sm:absolute sm:bottom-0 sm:right-0 w-full sm:w-[58%] aspect-[16/11] rounded-[18px] overflow-hidden shadow-[0_18px_44px_rgba(40,43,38,0.2)] border-4 border-[#F5F2E9] bg-[#D9E1D3]">
                  <Image
                    src={RESORT_IMAGES.villaInterior.src}
                    alt={RESORT_IMAGES.villaInterior.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 35vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent p-3.5 text-white">
                    <p className="text-xs font-semibold tracking-wide">
                      Natural Pine-Wood Interiors
                    </p>
                    <p className="text-[11px] text-white/80">
                      Cozy wood-panelled rooms at Suryanelli hilltop
                    </p>
                  </div>
                </div>

                {/* Subtle Floating Accent Badge */}
                <div className="hidden sm:flex items-center gap-3 absolute -top-5 right-4 bg-white px-4 py-3 rounded-[14px] shadow-md border border-[#344B39]/10 animate-float-slow">
                  <div className="h-9 w-9 rounded-[10px] bg-[#344B39] text-[#F5F2E9] flex items-center justify-center font-bold text-xs">
                    WOOD
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#344B39]">
                      Boutique Nature Stay
                    </p>
                    <p className="text-[11px] text-[#282B26]/70">
                      Suryanelli Hilltop Retreat
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
