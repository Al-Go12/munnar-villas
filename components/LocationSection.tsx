import React from "react";
import SectionHeading from "./SectionHeading";
import { SITE_INFO } from "@/config/siteData";
import {
  MapPinIcon,
  PhoneIcon,
  WhatsAppIcon,
  InstagramIcon,
  ArrowUpRightIcon,
  CompassIcon,
} from "./Icons";

export default function LocationSection() {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-white text-[#282B26]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="LOCATION & SURROUNDINGS"
          title="Find Your Way to the Hills."
          description="Conveniently located at Suryanelli town hilltop on the Chinnakanal–Suryanelli Road—your base camp for Kolukkumalai and the Munnar high ranges."
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Address, Contact Details & Nearby Landmarks */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-[18px] bg-[#F5F2E9] p-6 sm:p-8 border border-[#344B39]/15 space-y-6">
            <div className="space-y-6">
              {/* Property Address Block */}
              <div className="flex items-start gap-3.5">
                <div className="h-11 w-11 rounded-[12px] bg-[#344B39] text-[#F5F2E9] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPinIcon size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#344B39]">
                    Resort Address
                  </h3>
                  <p className="text-sm sm:text-base text-[#282B26]/85 mt-1 leading-relaxed">
                    {SITE_INFO.fullName}
                    <br />
                    {SITE_INFO.address.line1},
                    <br />
                    {SITE_INFO.address.district}, {SITE_INFO.address.state}{" "}
                    {SITE_INFO.address.postalCode}, {SITE_INFO.address.country}
                  </p>
                </div>
              </div>

              {/* Direct Phone & WhatsApp Block */}
              <div className="flex items-start gap-3.5 pt-4 border-t border-[#344B39]/10">
                <div className="h-11 w-11 rounded-[12px] bg-[#D9E1D3] text-[#344B39] flex items-center justify-center shrink-0 mt-0.5">
                  <PhoneIcon size={20} />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-[#344B39]">
                    Reservations & Enquiries
                  </h3>
                  <p className="text-sm text-[#282B26]/75">
                    Call or message us on WhatsApp for bookings, directions, and
                    Kolukkumalai jeep arrangements:
                  </p>
                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <a
                      href={SITE_INFO.contact.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="WhatsApp Munnar Villas"
                      title="WhatsApp Munnar Villas"
                      className="inline-flex items-center justify-center h-10 w-10 rounded-[10px] bg-[#344B39] hover:bg-[#282B26] text-white transition-colors"
                    >
                      <WhatsAppIcon size={18} />
                    </a>
                    <a
                      href={`tel:${SITE_INFO.contact.phoneRaw}`}
                      aria-label="Call Munnar Villas"
                      title="Call Munnar Villas"
                      className="inline-flex items-center justify-center h-10 w-10 rounded-[10px] bg-white hover:bg-[#D9E1D3]/60 text-[#344B39] border border-[#344B39]/20 transition-colors"
                    >
                      <PhoneIcon size={18} />
                    </a>
                    <a
                      href={SITE_INFO.contact.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Munnar Villas on Instagram"
                      title={SITE_INFO.contact.instagramHandle}
                      className="inline-flex items-center gap-1.5 px-3.5 h-10 rounded-[10px] bg-white hover:bg-[#D9E1D3]/60 text-[#344B39] border border-[#344B39]/20 text-xs font-semibold transition-colors"
                    >
                      <InstagramIcon size={16} />
                      <span>{SITE_INFO.contact.instagramHandle}</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Nearby Sightseeing Highlights */}
              <div className="pt-4 border-t border-[#344B39]/10 space-y-3">
                <div className="flex items-center gap-2 text-sm font-bold text-[#344B39]">
                  <CompassIcon size={18} className="text-[#596B4D]" />
                  <span>Nearby Sightseeing Highlights</span>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[#282B26]/85">
                  <li className="bg-white px-3 py-2 rounded-[10px] border border-[#344B39]/10">
                    <strong className="text-[#344B39] block">
                      Kolukkumalai Jeep Base
                    </strong>
                    <span>Suryanelli Town (~10–12 km trail)</span>
                  </li>
                  <li className="bg-white px-3 py-2 rounded-[10px] border border-[#344B39]/10">
                    <strong className="text-[#344B39] block">
                      Anayirankal Dam
                    </strong>
                    <span>~8–10 km scenic reservoir drive</span>
                  </li>
                  <li className="bg-white px-3 py-2 rounded-[10px] border border-[#344B39]/10">
                    <strong className="text-[#344B39] block">
                      Chokramudi Peak
                    </strong>
                    <span>~12–15 km via Gap Road</span>
                  </li>
                  <li className="bg-white px-3 py-2 rounded-[10px] border border-[#344B39]/10">
                    <strong className="text-[#344B39] block">
                      Mattupetty & Kundala
                    </strong>
                    <span>~22–30 km Munnar lake circuit</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={SITE_INFO.contact.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-[12px] bg-[#344B39] hover:bg-[#282B26] text-white font-semibold text-sm transition-colors shadow-xs"
              >
                <span>Get Directions</span>
                <ArrowUpRightIcon size={17} />
              </a>
              <a
                href={SITE_INFO.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-[12px] bg-white hover:bg-[#D9E1D3]/60 text-[#344B39] border border-[#344B39]/20 font-semibold text-sm transition-colors"
              >
                <WhatsAppIcon size={17} />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Google Maps Embed */}
          <div className="lg:col-span-7 rounded-[18px] overflow-hidden border border-[#344B39]/15 bg-[#F5F2E9] shadow-[0_12px_36px_rgba(40,43,38,0.07)] min-h-[360px] sm:min-h-[450px] relative flex flex-col">
            <iframe
              title="Munnar Villas Suryanelli Wood Resort Location Map"
              src={SITE_INFO.contact.googleMapsEmbedUrl}
              className="w-full flex-1 min-h-[360px] sm:min-h-[450px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <div className="bg-white px-4 py-3 border-t border-[#344B39]/10 flex flex-wrap items-center justify-between gap-2 text-xs text-[#282B26]/80">
              <span>
                📍 <strong>Suryanelli Town Hilltop</strong> • Chinnakanal–Suryanelli
                Road, Idukki, Kerala 685618
              </span>
              <a
                href={SITE_INFO.contact.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#344B39] hover:underline"
              >
                Open in Google Maps App →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
