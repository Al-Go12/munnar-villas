import React from "react";
import Image from "next/image";
import { RESORT_IMAGES } from "@/config/images";
import { DREAM_PROJECT_INFO, SITE_INFO } from "@/config/siteData";
import Reveal from "./Reveal";
import {
  MapPinIcon,
  LeafIcon,
  MountainIcon,
  HomeWoodIcon,
  CompassIcon,
  WhatsAppIcon,
  PhoneIcon,
  ArrowUpRightIcon,
} from "./Icons";

export default function DreamProjectSection() {
  const whatsappEnquiryUrl = `https://wa.me/${
    SITE_INFO.contact.whatsappNumber
  }?text=${encodeURIComponent(DREAM_PROJECT_INFO.enquiryText)}`;

  const highlightIcons = [
    <MountainIcon key="m" size={22} />,
    <LeafIcon key="l" size={22} />,
    <CompassIcon key="c" size={22} />,
    <HomeWoodIcon key="h" size={22} />,
  ];

  return (
    <section
      id="dream-project"
      className="py-20 sm:py-28 bg-[#344B39] text-white relative overflow-hidden"
    >
      {/* Subtle luxury radial glow accent */}
      <div
        className="pointer-events-none absolute -top-40 -right-40 h-96 w-96 rounded-full bg-[#C8A982]/12 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#D9E1D3]/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Header Row */}
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 border-b border-white/15">
            <div className="max-w-3xl space-y-3 text-center lg:text-left mx-auto lg:mx-0">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#C8A982] text-xs font-bold uppercase tracking-[0.2em]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C8A982]" />
                <span>{DREAM_PROJECT_INFO.eyebrow}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-white leading-[1.12] tracking-tight">
                {DREAM_PROJECT_INFO.title}
              </h2>

              <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs sm:text-sm text-[#D9E1D3] font-medium pt-1">
                <MapPinIcon size={16} className="text-[#C8A982] shrink-0" />
                <span>{DREAM_PROJECT_INFO.subtitle}</span>
              </div>
            </div>

            {/* Key Project Metrics Pills */}
            <div className="grid grid-cols-3 gap-2.5 sm:gap-4 w-full lg:w-auto">
              {DREAM_PROJECT_INFO.stats.map((stat) => (
                <div
                  key={stat.value}
                  className="rounded-[16px] bg-white/10 backdrop-blur-xs border border-white/15 px-3.5 py-3 sm:px-5 sm:py-4 text-center lg:text-left"
                >
                  <p className="text-base sm:text-xl font-extrabold text-[#F5F2E9]">
                    {stat.value}
                  </p>
                  <p className="text-[11px] sm:text-xs text-[#D9E1D3]/85 mt-0.5 leading-snug">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Main Two-Column Luxury Editorial Layout */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Visual Showcase of Swargam Medu & 3-Acre Sandalwood Estate (7 cols) */}
          <div className="lg:col-span-7 space-y-5">
            {/* Large Primary Feature Card: Swargam Medu Viewpoint */}
            <Reveal direction="scale">
              <div className="group relative aspect-[16/10] w-full rounded-[22px] overflow-hidden border border-white/20 shadow-[0_24px_60px_rgba(0,0,0,0.32)] bg-[#282B26]">
                <Image
                  src={RESORT_IMAGES.swargamViewpoint.src}
                  alt={RESORT_IMAGES.swargamViewpoint.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
                  <span className="px-3.5 py-1.5 rounded-full bg-[#F5F2E9] text-[#344B39] text-xs font-bold tracking-wide shadow-sm">
                    Swargam Medu Viewpoint • &ldquo;Hill of Heaven&rdquo;
                  </span>
                  <a
                    href={DREAM_PROJECT_INFO.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/50 hover:bg-black/75 text-white border border-white/25 text-xs font-semibold backdrop-blur-sm transition-colors"
                  >
                    <span>View Map</span>
                    <ArrowUpRightIcon size={14} />
                  </a>
                </div>

                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <h3 className="text-xl sm:text-2xl font-extrabold">
                    Steps Away from Swargam Medu Viewpoint
                  </h3>
                  <p className="text-xs sm:text-sm text-[#F5F2E9]/90 mt-1">
                    Panoramic 360° views of emerald ridges, drifting clouds, and
                    the Western Ghats at Mangathotty, Audathi.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Bottom Two Supporting Photographs: 3-Acre Sandalwood + Highland Villas Setting */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Reveal delay={100}>
                <div className="group relative aspect-[16/11] w-full rounded-[18px] overflow-hidden border border-white/15 shadow-lg bg-[#282B26]">
                  <Image
                    src={RESORT_IMAGES.swargamSandalwood.src}
                    alt={RESORT_IMAGES.swargamSandalwood.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 30vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-[#C8A982] text-[#282B26] text-[11px] font-bold">
                      3-Acre Sandalwood Grove
                    </span>
                  </div>
                  <div className="absolute bottom-3.5 left-4 right-4 text-white">
                    <p className="text-sm sm:text-base font-bold">
                      Newly Planted Sandalwood Estate
                    </p>
                    <p className="text-xs text-white/80 mt-0.5">
                      Villas harmonized within 3 acres of young sandalwood trees
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={180}>
                <div className="group relative aspect-[16/11] w-full rounded-[18px] overflow-hidden border border-white/15 shadow-lg bg-[#282B26]">
                  <Image
                    src={RESORT_IMAGES.swargamHills.src}
                    alt={RESORT_IMAGES.swargamHills.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 30vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-white/90 text-[#344B39] text-[11px] font-bold">
                      Mangathotty • Audathi
                    </span>
                  </div>
                  <div className="absolute bottom-3.5 left-4 right-4 text-white">
                    <p className="text-sm sm:text-base font-bold">
                      High-Altitude Cloud & Sunset Ridge
                    </p>
                    <p className="text-xs text-white/80 mt-0.5">
                      Senapathy Panchayat, Udumbanchola Taluk, Idukki
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Right Column: Storytelling, 4 Feature Pillars & Direct Enquiry Actions (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <Reveal delay={80}>
              <div className="rounded-[20px] bg-white/8 backdrop-blur-sm border border-white/15 p-6 sm:p-7 space-y-4">
                <p className="text-base sm:text-lg font-semibold text-[#F5F2E9] leading-relaxed">
                  {DREAM_PROJECT_INFO.leadStory}
                </p>
                <p className="text-sm text-[#D9E1D3]/90 leading-relaxed">
                  {DREAM_PROJECT_INFO.secondaryStory}
                </p>
              </div>
            </Reveal>

            {/* 4 Key Attraction Cards */}
            <div className="space-y-3.5">
              {DREAM_PROJECT_INFO.highlights.map((item, idx) => (
                <Reveal key={item.title} delay={120 + idx * 70}>
                  <div className="rounded-[16px] bg-[#F5F2E9] text-[#282B26] p-4 sm:p-5 border border-white/20 shadow-sm flex items-start gap-4 transition-transform duration-300 hover:-translate-y-0.5">
                    <div className="h-11 w-11 rounded-[12px] bg-[#344B39] text-[#F5F2E9] flex items-center justify-center shrink-0 mt-0.5">
                      {highlightIcons[idx]}
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-base font-bold text-[#344B39]">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#282B26]/80 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Bottom Action Bar: Location Map + WhatsApp & Phone Icons */}
            <Reveal delay={350}>
              <div className="rounded-[18px] bg-white/10 border border-white/20 p-5 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-bold text-white">
                    Enquire About Our Swargam Medu Villas
                  </p>
                  <p className="text-xs text-[#D9E1D3]/85 mt-0.5">
                    Connect with us for project updates & visit details
                  </p>
                </div>

                <div className="flex items-center gap-2.5">
                  <a
                    href={DREAM_PROJECT_INFO.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 h-11 rounded-[12px] bg-white/15 hover:bg-white/25 text-white border border-white/20 text-xs font-semibold transition-colors"
                  >
                    <MapPinIcon size={15} className="text-[#C8A982]" />
                    <span>Location</span>
                  </a>
                  <a
                    href={whatsappEnquiryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Enquire about Swargam Medu Villas on WhatsApp"
                    title="WhatsApp Enquiry"
                    className="inline-flex items-center justify-center h-11 w-11 rounded-[12px] bg-[#F5F2E9] hover:bg-white text-[#344B39] transition-colors shadow-sm"
                  >
                    <WhatsAppIcon size={20} />
                  </a>
                  <a
                    href={`tel:${SITE_INFO.contact.phoneRaw}`}
                    aria-label="Call about Swargam Medu Villas"
                    title="Call Us"
                    className="inline-flex items-center justify-center h-11 w-11 rounded-[12px] bg-white/15 hover:bg-white/25 text-white border border-white/20 transition-colors shadow-sm"
                  >
                    <PhoneIcon size={19} />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
