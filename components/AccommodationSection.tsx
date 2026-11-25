"use client";

import React, { useState } from "react";
import Image from "next/image";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import {
  ACCOMMODATION_OPTIONS,
  AccommodationItem,
  SITE_INFO,
} from "@/config/siteData";
import {
  CheckCircleIcon,
  WhatsAppIcon,
  PhoneIcon,
  CloseIcon,
} from "./Icons";

export default function AccommodationSection() {
  const [selectedStay, setSelectedStay] = useState<AccommodationItem | null>(
    null
  );

  const getWhatsAppLink = (message: string) =>
    `https://wa.me/${SITE_INFO.contact.whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

  return (
    <section id="stay" className="py-20 sm:py-28 bg-white text-[#282B26]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="STAY WITH US • ACCOMMODATION"
            title="Comfort in the Heart of Nature."
            description="Rest in cozy wooden villa accommodation perched at Suryanelli hilltop. Every stay is designed to keep you close to Munnar's cool mountain air, peaceful tea slopes, and warm local hospitality."
          />
        </Reveal>

        {/* Accommodation Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8">
          {ACCOMMODATION_OPTIONS.map((stay, idx) => (
            <Reveal key={stay.id} delay={idx * 100} className="h-full">
              <article className="luxury-card group h-full rounded-[20px] bg-[#F5F2E9]/70 border border-[#344B39]/12 overflow-hidden shadow-[0_10px_30px_rgba(40,43,38,0.05)] flex flex-col justify-between">
              <div>
                {/* Image Wrapper */}
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#D9E1D3]">
                  <Image
                    src={stay.image.src}
                    alt={stay.image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2">
                    <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-xs text-[#344B39] text-xs font-semibold shadow-xs">
                      {stay.badge}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 space-y-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#344B39] group-hover:text-[#596B4D] transition-colors">
                    {stay.name}
                  </h3>
                  <p className="text-sm sm:text-base text-[#282B26]/80 leading-relaxed">
                    {stay.description}
                  </p>

                  {/* Highlights */}
                  <ul className="pt-2 space-y-2 border-t border-[#344B39]/10">
                    {stay.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2.5 text-xs sm:text-sm text-[#282B26]/90 font-medium"
                      >
                        <CheckCircleIcon
                          size={16}
                          className="text-[#596B4D] shrink-0"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer Actions: WhatsApp & Phone Icons + View Details */}
              <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-2 flex items-center justify-between gap-2.5">
                <button
                  type="button"
                  onClick={() => setSelectedStay(stay)}
                  className="flex-1 inline-flex items-center justify-center py-3 px-4 rounded-[12px] bg-white hover:bg-[#D9E1D3]/60 text-[#344B39] border border-[#344B39]/20 text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
                >
                  <span>View Details</span>
                </button>
                <a
                  href={getWhatsAppLink(stay.enquiryMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Enquire about ${stay.name} on WhatsApp`}
                  title="Enquire on WhatsApp"
                  className="inline-flex items-center justify-center h-11 w-11 rounded-[12px] bg-[#344B39] hover:bg-[#282B26] text-white transition-colors shadow-xs shrink-0"
                >
                  <WhatsAppIcon size={19} />
                </a>
                <a
                  href={`tel:${SITE_INFO.contact.phoneRaw}`}
                  aria-label="Call reservation desk"
                  title="Call Reservation Desk"
                  className="inline-flex items-center justify-center h-11 w-11 rounded-[12px] bg-white hover:bg-[#D9E1D3]/60 text-[#344B39] border border-[#344B39]/20 transition-colors shrink-0"
                >
                  <PhoneIcon size={18} />
                </a>
              </div>
            </article>
            </Reveal>
          ))}
        </div>

        {/* Custom Group / Direct Call Banner with WhatsApp & Phone Icons */}
        <div className="mt-12 rounded-[18px] bg-[#F5F2E9] border border-[#344B39]/15 p-6 sm:p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-2xl">
            <h3 className="text-lg sm:text-xl font-bold text-[#344B39]">
              Looking for current availability, group bookings, or meal options?
            </h3>
            <p className="text-sm sm:text-base text-[#282B26]/80">
              Connect directly with our Suryanelli property team for seasonal
              tariffs, check-in timings, homestyle breakfast options, and
              early-morning Kolukkumalai jeep coordination.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={SITE_INFO.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Enquire on WhatsApp"
              title="Enquire on WhatsApp"
              className="inline-flex items-center justify-center h-12 w-12 rounded-[14px] bg-[#344B39] hover:bg-[#282B26] text-white transition-all shadow-sm hover:-translate-y-0.5"
            >
              <WhatsAppIcon size={22} />
            </a>
            <a
              href={`tel:${SITE_INFO.contact.phoneRaw}`}
              aria-label="Call Reservation Desk"
              title="Call Reservation Desk"
              className="inline-flex items-center justify-center h-12 w-12 rounded-[14px] bg-white hover:bg-[#D9E1D3]/60 text-[#344B39] border border-[#344B39]/20 transition-all shadow-sm hover:-translate-y-0.5"
            >
              <PhoneIcon size={21} />
            </a>
          </div>
        </div>
      </div>

      {/* Interactive Accommodation Details Modal */}
      {selectedStay && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#282B26]/70 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-stay-title"
          onClick={() => setSelectedStay(null)}
        >
          <div
            className="relative w-full max-w-xl rounded-[18px] bg-[#F5F2E9] border border-[#344B39]/20 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/9] w-full bg-[#D9E1D3]">
              <Image
                src={selectedStay.image.src}
                alt={selectedStay.image.alt}
                fill
                sizes="(max-width: 640px) 100vw, 600px"
                className="object-cover"
              />
              <button
                type="button"
                onClick={() => setSelectedStay(null)}
                aria-label="Close room details"
                className="absolute top-4 right-4 h-10 w-10 rounded-full bg-black/55 text-white hover:bg-black/75 flex items-center justify-center transition-colors cursor-pointer"
              >
                <CloseIcon size={20} />
              </button>
              <div className="absolute bottom-3 left-4">
                <span className="px-3 py-1 rounded-full bg-white/95 text-[#344B39] text-xs font-semibold">
                  {selectedStay.badge}
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-5">
              <div>
                <h3
                  id="modal-stay-title"
                  className="text-2xl font-bold text-[#344B39]"
                >
                  {selectedStay.name}
                </h3>
                <p className="mt-2 text-sm sm:text-base text-[#282B26]/85 leading-relaxed">
                  {selectedStay.description}
                </p>
              </div>

              <div className="rounded-[14px] bg-white p-4 border border-[#344B39]/12 space-y-2.5">
                <p className="text-xs font-bold uppercase tracking-wider text-[#596B4D]">
                  Stay Highlights & Assistance
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedStay.highlights.map((h) => (
                    <div
                      key={h}
                      className="flex items-center gap-2 text-sm text-[#282B26]"
                    >
                      <CheckCircleIcon
                        size={16}
                        className="text-[#344B39] shrink-0"
                      />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between gap-3 pt-1">
                <span className="text-xs sm:text-sm font-semibold text-[#344B39]">
                  Enquire directly for availability:
                </span>
                <div className="flex items-center gap-2.5">
                  <a
                    href={getWhatsAppLink(selectedStay.enquiryMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Check availability on WhatsApp"
                    title="WhatsApp Enquiry"
                    className="inline-flex items-center justify-center h-11 w-11 rounded-[12px] bg-[#344B39] hover:bg-[#282B26] text-white transition-colors"
                  >
                    <WhatsAppIcon size={20} />
                  </a>
                  <a
                    href={`tel:${SITE_INFO.contact.phoneRaw}`}
                    aria-label="Call reservation desk"
                    title="Call Direct"
                    className="inline-flex items-center justify-center h-11 w-11 rounded-[12px] bg-white hover:bg-[#D9E1D3]/50 text-[#344B39] border border-[#344B39]/20 transition-colors"
                  >
                    <PhoneIcon size={19} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
