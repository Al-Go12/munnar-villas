import React from "react";
import Image from "next/image";
import { RESORT_IMAGES } from "@/config/images";
import { DREAM_PROJECT_INFO, SITE_INFO } from "@/config/siteData";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import {
  MapPinIcon,
  LeafIcon,
  MountainIcon,
  HomeWoodIcon,
  CheckCircleIcon,
  WhatsAppIcon,
  PhoneIcon,
  ArrowUpRightIcon,
} from "./Icons";

export default function DreamProjectSection() {
  const whatsappEnquiryUrl = `https://wa.me/${
    SITE_INFO.contact.whatsappNumber
  }?text=${encodeURIComponent(DREAM_PROJECT_INFO.enquiryText)}`;

  return (
    <section
      id="dream-project"
      className="py-16 sm:py-24 lg:py-28 bg-gradient-to-b from-white via-[#F5F2E9]/70 to-[#F5F2E9] text-[#282B26] border-t border-[#344B39]/10 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <Reveal>
          <SectionHeading
            eyebrow={DREAM_PROJECT_INFO.eyebrow}
            title="Swargam Medu Sandalwood Villa Sanctuary."
            description="Our flagship dream villa project at Swargam Medu (Mangathotty, Audathi / Ottathi)—where bespoke hillside eco-villas meet 3 acres of newly planted sandalwood right beside Idukki's iconic 'Hill of Heaven' viewpoint."
          />
        </Reveal>

        {/* Main Centerpiece Showcase Card — Normal-Flow Responsive Layout (Zero Text Overlap) */}
        <Reveal delay={100}>
          <div className="mt-10 sm:mt-12 rounded-[20px] sm:rounded-[24px] bg-white border border-[#344B39]/14 shadow-[0_20px_55px_rgba(52,75,57,0.09)] overflow-hidden grid grid-cols-1 lg:grid-cols-12">
            {/* Left 7 Columns: Clean Unobstructed Hillside Eco-Pods Villa Photograph */}
            <div className="lg:col-span-7 relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto lg:min-h-[460px] w-full overflow-hidden bg-[#D9E1D3] group">
              <Image
                src={RESORT_IMAGES.swargamViewpoint.src}
                alt="Signature hillside eco-pod villas stepping down the green mountain ridge at Swargam Medu, Mangathotty"
                fill
                unoptimized
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

              {/* Single Compact Pill Badge at Top-Left */}
              <div className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4">
                <span className="inline-flex items-center px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/95 backdrop-blur-xs text-[#344B39] text-[11px] sm:text-xs font-bold tracking-wide shadow-sm">
                  Swargam Medu • Hillside Eco-Villas
                </span>
              </div>
            </div>

            {/* Right 5 Columns: Normal-Flow Responsive Text, Stats & Enquiry Actions */}
            <div className="lg:col-span-5 p-5 sm:p-7 lg:p-8 flex flex-col justify-between gap-6 bg-white">
              <div className="space-y-4">
                {/* Wrapping Location Tag */}
                <div className="inline-flex items-start sm:items-center gap-2 px-3 py-1.5 rounded-[10px] bg-[#F5F2E9] border border-[#344B39]/12 text-[#344B39] text-xs font-semibold max-w-full">
                  <MapPinIcon
                    size={14}
                    className="text-[#596B4D] shrink-0 mt-0.5 sm:mt-0"
                  />
                  <span className="leading-snug break-words">
                    Swargam Medu, Mangathotty (Audathi), Idukki
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl lg:text-[1.6rem] font-extrabold text-[#344B39] leading-snug break-words">
                  Where the &ldquo;Hill of Heaven&rdquo; Meets a 3-Acre
                  Sandalwood Sanctuary.
                </h3>

                <p className="text-sm sm:text-base text-[#282B26]/85 leading-relaxed">
                  Situated right beside the breathtaking{" "}
                  <strong className="font-semibold text-[#344B39]">
                    Swargam Medu Viewpoint
                  </strong>{" "}
                  in the peaceful highland hamlet of{" "}
                  <strong className="font-semibold text-[#344B39]">
                    Mangathotty, Audathi (Ottathi)
                  </strong>
                  , our dream villa project is designed as a rare nature
                  sanctuary in Idukki.
                </p>

                <p className="text-xs sm:text-sm text-[#282B26]/75 leading-relaxed">
                  Every hillside villa is harmonized around{" "}
                  <strong className="font-semibold text-[#344B39]">
                    3 acres of newly planted sandalwood
                  </strong>
                  —offering private viewing decks, cool mountain winds, and
                  uninterrupted 360-degree sunrise and sunset horizons over the
                  Western Ghats.
                </p>

                {/* Responsive Stat Pills — Stack cleanly on very narrow screens, 3 cols on sm+ */}
                <div className="pt-1 grid grid-cols-1 min-[420px]:grid-cols-3 gap-2.5">
                  <div className="rounded-[12px] bg-[#F5F2E9] px-3 py-2.5 border border-[#344B39]/10 text-left min-[420px]:text-center flex min-[420px]:flex-col items-center justify-between min-[420px]:justify-center gap-1">
                    <p className="text-sm sm:text-base font-extrabold text-[#344B39]">
                      3 Acres
                    </p>
                    <p className="text-[11px] font-medium text-[#596B4D] leading-tight">
                      Sandalwood Grove
                    </p>
                  </div>
                  <div className="rounded-[12px] bg-[#F5F2E9] px-3 py-2.5 border border-[#344B39]/10 text-left min-[420px]:text-center flex min-[420px]:flex-col items-center justify-between min-[420px]:justify-center gap-1">
                    <p className="text-sm sm:text-base font-extrabold text-[#344B39]">
                      360° View
                    </p>
                    <p className="text-[11px] font-medium text-[#596B4D] leading-tight">
                      Swargam Medu
                    </p>
                  </div>
                  <div className="rounded-[12px] bg-[#F5F2E9] px-3 py-2.5 border border-[#344B39]/10 text-left min-[420px]:text-center flex min-[420px]:flex-col items-center justify-between min-[420px]:justify-center gap-1">
                    <p className="text-sm sm:text-base font-extrabold text-[#344B39]">
                      Audathi
                    </p>
                    <p className="text-[11px] font-medium text-[#596B4D] leading-tight">
                      Mangathotty Hills
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Enquiry Footer inside Showcase Card */}
              <div className="pt-4 border-t border-[#344B39]/10 flex flex-wrap items-center justify-between gap-3">
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#596B4D]">
                    Project Enquiries & Visits
                  </p>
                  <p className="text-xs text-[#282B26]/75 mt-0.5">
                    Connect with our team for Swargam Medu villa details
                  </p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href={DREAM_PROJECT_INFO.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open Swargam Medu on Google Maps"
                    title="Swargam Medu Map"
                    className="inline-flex items-center gap-1.5 px-3.5 h-11 rounded-[12px] bg-[#F5F2E9] hover:bg-[#D9E1D3]/70 text-[#344B39] border border-[#344B39]/20 text-xs font-bold transition-all"
                  >
                    <MapPinIcon size={15} />
                    <span>Map</span>
                  </a>
                  <a
                    href={whatsappEnquiryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Enquire about Swargam Medu Dream Project on WhatsApp"
                    title="WhatsApp Enquiry"
                    className="inline-flex items-center justify-center h-11 w-11 rounded-[12px] bg-[#344B39] hover:bg-[#282B26] text-white transition-all shadow-xs"
                  >
                    <WhatsAppIcon size={19} />
                  </a>
                  <a
                    href={`tel:${SITE_INFO.contact.phoneRaw}`}
                    aria-label="Call about Swargam Medu Dream Project"
                    title="Call Direct"
                    className="inline-flex items-center justify-center h-11 w-11 rounded-[12px] bg-[#F5F2E9] hover:bg-[#D9E1D3]/70 text-[#344B39] border border-[#344B39]/20 transition-all shadow-xs"
                  >
                    <PhoneIcon size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Bottom 3-Card Bento Grid — Clean Normal-Flow Text Below Images (No Overlapping Overlays) */}
        <div className="mt-6 sm:mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: 3-Acre Sandalwood Plantation */}
          <Reveal delay={120}>
            <article className="luxury-card group h-full rounded-[20px] bg-white border border-[#344B39]/12 overflow-hidden shadow-[0_10px_28px_rgba(40,43,38,0.05)] flex flex-col">
              <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-[#D9E1D3]">
                <Image
                  src={RESORT_IMAGES.swargamSandalwood.src}
                  alt={RESORT_IMAGES.swargamSandalwood.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between gap-3">
                <div className="space-y-2.5">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5F2E9] text-[#344B39] text-xs font-bold border border-[#344B39]/10">
                    <LeafIcon size={13} className="text-[#596B4D] shrink-0" />
                    <span>3-Acre Sandalwood Estate</span>
                  </div>
                  <h4 className="text-lg font-bold text-[#344B39] leading-snug break-words">
                    Harmonized Around Newly Planted Sandalwood
                  </h4>
                  <p className="text-xs sm:text-sm text-[#282B26]/80 leading-relaxed">
                    Our villas are nestled inside 3 acres of newly planted
                    sandalwood groves at Mangathotty, Audathi—creating a calm,
                    aromatic high-range environment that matures into a private
                    botanical sanctuary.
                  </p>
                </div>
              </div>
            </article>
          </Reveal>

          {/* Card 2: Swargam Medu Viewpoint Proximity */}
          <Reveal delay={200}>
            <article className="luxury-card group h-full rounded-[20px] bg-white border border-[#344B39]/12 overflow-hidden shadow-[0_10px_28px_rgba(40,43,38,0.05)] flex flex-col">
              <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-[#D9E1D3]">
                <Image
                  src={RESORT_IMAGES.swargamHills.src}
                  alt={RESORT_IMAGES.swargamHills.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between gap-3">
                <div className="space-y-2.5">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5F2E9] text-[#344B39] text-xs font-bold border border-[#344B39]/10">
                    <MountainIcon
                      size={13}
                      className="text-[#596B4D] shrink-0"
                    />
                    <span>Swargam Medu Viewpoint</span>
                  </div>
                  <h4 className="text-lg font-bold text-[#344B39] leading-snug break-words">
                    Steps from the Iconic &ldquo;Hill of Heaven&rdquo;
                  </h4>
                  <p className="text-xs sm:text-sm text-[#282B26]/80 leading-relaxed">
                    Located right next to the famous Swargam Medu Viewpoint in
                    Senapathy Panchayat, giving guests direct access to
                    swirling valley clouds, green meadows, and panoramic
                    Western Ghats vistas.
                  </p>
                </div>
              </div>
            </article>
          </Reveal>

          {/* Card 3: Key Attractions Checklist Card */}
          <Reveal delay={280} className="md:col-span-2 lg:col-span-1">
            <div className="luxury-card h-full rounded-[20px] bg-white border border-[#344B39]/14 p-5 sm:p-6 shadow-[0_10px_28px_rgba(40,43,38,0.05)] flex flex-col justify-between gap-5">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-11 w-11 rounded-[12px] bg-[#D9E1D3]/75 text-[#344B39] flex items-center justify-center shrink-0">
                    <HomeWoodIcon size={22} />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#596B4D] block">
                      Signature Highlights
                    </span>
                    <h4 className="text-lg font-bold text-[#344B39] leading-snug break-words">
                      Why Swargam Medu Villas?
                    </h4>
                  </div>
                </div>

                <ul className="space-y-3 pt-1">
                  {[
                    "Directly adjacent to Swargam Medu Viewpoint",
                    "Set within 3 acres of newly planted sandalwood",
                    "Located at Mangathotty, Audathi (Ottathi), Senapathy",
                    "Elevated eco-pod villa decks with 360° mountain skies",
                  ].map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-[#282B26]/90"
                    >
                      <CheckCircleIcon
                        size={17}
                        className="text-[#344B39] shrink-0 mt-0.5"
                      />
                      <span className="leading-snug break-words">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={DREAM_PROJECT_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-[12px] bg-[#F5F2E9] hover:bg-[#344B39] text-[#344B39] hover:text-white text-xs font-bold tracking-wide transition-all duration-300 flex items-center justify-between gap-2 border border-[#344B39]/12"
              >
                <span className="truncate">
                  View Swargam Medu on Google Maps
                </span>
                <ArrowUpRightIcon size={15} className="shrink-0" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
