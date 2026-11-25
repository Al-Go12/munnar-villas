"use client";

import React, { useState } from "react";
import Image from "next/image";
import { RESORT_IMAGES } from "@/config/images";
import { SITE_INFO } from "@/config/siteData";
import { PhoneIcon, WhatsAppIcon, MapPinIcon } from "./Icons";

export default function BookStayCtaSection() {
  const [guestName, setGuestName] = useState("");
  const [travelDates, setTravelDates] = useState("");
  const [guestCount, setGuestCount] = useState("2 Adults");
  const [interest, setInterest] = useState(
    "Wooden Villa Stay + Kolukkumalai Jeep Safari"
  );

  const handleQuickWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      `Hello ${SITE_INFO.fullName},`,
      "I would like to enquire about booking a stay.",
      guestName ? `• Name: ${guestName}` : "",
      travelDates ? `• Preferred Dates: ${travelDates}` : "",
      guestCount ? `• Guests: ${guestCount}` : "",
      interest ? `• Interest: ${interest}` : "",
      "Please share availability and tariff details.",
    ]
      .filter(Boolean)
      .join("\n");

    const url = `https://wa.me/${
      SITE_INFO.contact.whatsappNumber
    }?text=${encodeURIComponent(lines)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="book-stay"
      className="relative py-20 sm:py-28 overflow-hidden bg-[#282B26] text-white"
    >
      {/* Background Mountain Photograph with Subtle Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={RESORT_IMAGES.ctaMountains.src}
          alt={RESORT_IMAGES.ctaMountains.alt}
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#282B26]/85 via-[#344B39]/75 to-[#282B26]/80" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Main CTA Copy & Direct Buttons */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-xs border border-white/20 text-[#F5F2E9] text-xs font-semibold uppercase tracking-widest">
              <MapPinIcon size={14} className="text-[#C8A982]" />
              <span>Plan Your Suryanelli Retreat</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-[1.12] tracking-tight">
              Your Mountain Escape Starts Here.
            </h2>

            <p className="text-base sm:text-xl text-[#F5F2E9]/90 max-w-2xl leading-relaxed">
              Come experience the beauty of Suryanelli and create unforgettable
              memories in the hills of Munnar. Connect directly with our
              property team to plan your stay.
            </p>

            {/* Primary CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={SITE_INFO.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-[14px] bg-[#F5F2E9] hover:bg-white text-[#344B39] font-bold text-sm sm:text-base transition-all shadow-lg"
              >
                <WhatsAppIcon size={20} className="text-[#344B39]" />
                <span>WhatsApp Enquiry</span>
              </a>

              <a
                href={`tel:${SITE_INFO.contact.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-[14px] bg-[#344B39] hover:bg-[#596B4D] text-white border border-white/25 font-bold text-sm sm:text-base transition-all shadow-lg"
              >
                <PhoneIcon size={19} />
                <span>Call Us</span>
              </a>
            </div>

            <p className="text-xs sm:text-sm text-[#D9E1D3]/90">
              Direct Reservation Desk • No middleman booking fees • Prompt
              assistance on WhatsApp & phone.
            </p>
          </div>

          {/* Right Column: Interactive Quick WhatsApp Enquiry Composer */}
          <div className="lg:col-span-5">
            <form
              onSubmit={handleQuickWhatsAppSubmit}
              className="rounded-[18px] bg-[#F5F2E9] text-[#282B26] p-6 sm:p-7 shadow-2xl border border-white/20 space-y-4"
            >
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#596B4D]">
                  Direct Property Enquiry
                </span>
                <h3 className="text-xl font-bold text-[#344B39] mt-0.5">
                  Send a Quick Stay Enquiry
                </h3>
                <p className="text-xs text-[#282B26]/75 mt-1">
                  Fill in your preferences below to open a pre-filled WhatsApp
                  chat directly with our Suryanelli desk.
                </p>
              </div>

              <div className="space-y-3">
                <div>
                  <label
                    htmlFor="enquiry-name"
                    className="block text-xs font-semibold text-[#344B39] mb-1"
                  >
                    Your Name
                  </label>
                  <input
                    id="enquiry-name"
                    type="text"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    placeholder="e.g. Rahul Nair"
                    className="w-full px-3.5 py-2.5 rounded-[10px] bg-white border border-[#344B39]/20 text-sm text-[#282B26] focus:outline-none focus:border-[#344B39]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label
                      htmlFor="enquiry-dates"
                      className="block text-xs font-semibold text-[#344B39] mb-1"
                    >
                      Preferred Travel Dates
                    </label>
                    <input
                      id="enquiry-dates"
                      type="text"
                      value={travelDates}
                      onChange={(e) => setTravelDates(e.target.value)}
                      placeholder="e.g. 12–14 Dec"
                      className="w-full px-3.5 py-2.5 rounded-[10px] bg-white border border-[#344B39]/20 text-sm text-[#282B26] focus:outline-none focus:border-[#344B39]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="enquiry-guests"
                      className="block text-xs font-semibold text-[#344B39] mb-1"
                    >
                      Number of Guests
                    </label>
                    <select
                      id="enquiry-guests"
                      value={guestCount}
                      onChange={(e) => setGuestCount(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-[10px] bg-white border border-[#344B39]/20 text-sm text-[#282B26] focus:outline-none focus:border-[#344B39]"
                    >
                      <option value="2 Adults (Couple)">2 Adults (Couple)</option>
                      <option value="Family (3–4 Guests)">
                        Family (3–4 Guests)
                      </option>
                      <option value="Group (5+ Guests)">Group (5+ Guests)</option>
                      <option value="Solo Traveller">Solo Traveller</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="enquiry-interest"
                    className="block text-xs font-semibold text-[#344B39] mb-1"
                  >
                    Stay & Experience Interest
                  </label>
                  <select
                    id="enquiry-interest"
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-[10px] bg-white border border-[#344B39]/20 text-sm text-[#282B26] focus:outline-none focus:border-[#344B39]"
                  >
                    <option value="Wooden Villa Stay + Kolukkumalai Jeep Safari">
                      Wooden Villa Stay + Kolukkumalai Jeep Safari
                    </option>
                    <option value="Hilltop Wooden Villa Stay Only">
                      Hilltop Wooden Villa Stay Only
                    </option>
                    <option value="Family / Group Stay & Munnar Sightseeing">
                      Family / Group Stay & Munnar Sightseeing
                    </option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-5 rounded-[12px] bg-[#344B39] hover:bg-[#282B26] text-white font-bold text-sm flex items-center justify-center gap-2 transition-colors shadow-sm cursor-pointer"
              >
                <WhatsAppIcon size={18} />
                <span>Send Enquiry via WhatsApp</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
