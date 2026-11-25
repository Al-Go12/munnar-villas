import React from "react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { WHY_CHOOSE_FEATURES, WhyChooseItem } from "@/config/siteData";
import {
  MountainIcon,
  HomeWoodIcon,
  LeafIcon,
  CompassIcon,
  HeartIcon,
} from "./Icons";

function FeatureIcon({ name }: { name: WhyChooseItem["iconName"] }) {
  switch (name) {
    case "mountain":
      return <MountainIcon size={24} />;
    case "home":
      return <HomeWoodIcon size={24} />;
    case "leaf":
      return <LeafIcon size={24} />;
    case "compass":
      return <CompassIcon size={24} />;
    case "heart":
      return <HeartIcon size={24} />;
  }
}

export default function WhyChooseSection() {
  return (
    <section className="py-20 sm:py-24 bg-[#F5F2E9] text-[#282B26] border-y border-[#344B39]/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="WHY CHOOSE MUNNAR VILLAS"
            title="Crafted for Peaceful Highland Stays."
            description="What makes our Suryanelli hilltop location a favourite base for nature lovers, families, and Kolukkumalai sunrise explorers."
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 lg:gap-6">
          {WHY_CHOOSE_FEATURES.map((feature, index) => (
            <Reveal key={feature.id} delay={index * 80} className="h-full">
              <div className="luxury-card group h-full rounded-[18px] bg-white p-6 border border-[#344B39]/10 shadow-[0_8px_24px_rgba(40,43,38,0.04)] flex flex-col justify-between text-center sm:text-left">
                <div className="space-y-4">
                  <div className="flex items-center justify-center sm:justify-between">
                    <div className="h-12 w-12 rounded-[12px] bg-[#D9E1D3]/70 text-[#344B39] group-hover:bg-[#344B39] group-hover:text-[#F5F2E9] transition-colors flex items-center justify-center">
                      <FeatureIcon name={feature.iconName} />
                    </div>
                    <span className="hidden sm:inline text-xs font-bold text-[#C8A982]">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#344B39] leading-snug">
                    {feature.title}
                  </h3>

                  <p className="text-sm text-[#282B26]/80 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
