import React from "react";
import Image from "next/image";
import {
  SITE_INFO,
  NAV_LINKS,
  EXPERIENCES_LIST,
  SIGHTSEEING_DESTINATIONS,
} from "@/config/siteData";
import { BRAND_LOGO } from "@/config/images";
import {
  MapPinIcon,
  PhoneIcon,
  WhatsAppIcon,
  InstagramIcon,
  ArrowUpRightIcon,
} from "./Icons";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#344B39] text-white pt-16 pb-24 lg:pb-12 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/15">
          {/* Column 1: Brand & Description (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="inline-flex items-center rounded-[16px] bg-[#F5F2E9] px-4 py-2.5 shadow-md">
              <Image
                src={BRAND_LOGO.src}
                alt={BRAND_LOGO.alt}
                width={150}
                height={81}
                className="h-12 sm:h-14 w-auto object-contain"
              />
            </div>

            <p className="text-sm text-[#F5F2E9]/85 leading-relaxed max-w-sm">
              A welcoming hilltop wooden villa retreat in Suryanelli, Munnar.
              Wake up to misty tea plantation views, warm hospitality, and
              seamless access to Kolukkumalai sunrise jeep safaris.
            </p>

            {/* Social & Maps Links */}
            <div className="pt-2 flex flex-wrap items-center gap-2.5">
              <a
                href={SITE_INFO.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Munnar Villas on Instagram"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-[10px] bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors"
              >
                <InstagramIcon size={15} />
                <span>{SITE_INFO.contact.instagramHandle}</span>
              </a>

              <a
                href={SITE_INFO.contact.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-[10px] bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors"
              >
                <MapPinIcon size={15} />
                <span>Google Maps</span>
                <ArrowUpRightIcon size={13} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[#C8A982]">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm text-[#F5F2E9]/90">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-white hover:underline transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Experiences & Sightseeing (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[#C8A982]">
              Experiences & Sightseeing
            </h3>
            <ul className="space-y-2 text-sm text-[#F5F2E9]/90">
              {EXPERIENCES_LIST.map((exp) => (
                <li key={exp.id}>
                  <a
                    href="#experiences"
                    className="hover:text-white hover:underline transition-colors"
                  >
                    {exp.title} ({exp.id === "jeep-safari" ? "Kolukkumalai" : "Munnar"})
                  </a>
                </li>
              ))}
              {SIGHTSEEING_DESTINATIONS.slice(0, 4).map((place) => (
                <li key={place.id}>
                  <a
                    href="#sightseeing"
                    className="hover:text-white hover:underline transition-colors"
                  >
                    {place.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Information (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[#C8A982]">
              Contact & Location
            </h3>
            <div className="space-y-3 text-sm text-[#F5F2E9]/90">
              <div className="flex items-start gap-2.5">
                <MapPinIcon
                  size={17}
                  className="text-[#C8A982] shrink-0 mt-0.5"
                />
                <span>{SITE_INFO.address.full}</span>
              </div>

              <div className="pt-2 flex items-center gap-3">
                <a
                  href={SITE_INFO.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp Booking Desk"
                  title="WhatsApp Booking Desk"
                  className="inline-flex items-center justify-center h-11 w-11 rounded-[12px] bg-[#F5F2E9] hover:bg-white text-[#344B39] transition-colors shadow-xs"
                >
                  <WhatsAppIcon size={20} />
                </a>

                <a
                  href={`tel:${SITE_INFO.contact.phoneRaw}`}
                  aria-label="Call Booking Desk"
                  title="Call Booking Desk"
                  className="inline-flex items-center justify-center h-11 w-11 rounded-[12px] bg-white/15 hover:bg-white/25 text-white border border-white/20 transition-colors shadow-xs"
                >
                  <PhoneIcon size={19} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#D9E1D3]/85">
          <p>
            © {currentYear} {SITE_INFO.fullName}. All rights reserved.
          </p>
          <p className="text-center sm:text-right">
            Suryanelli, Munnar, Idukki, Kerala 685618, India
          </p>
        </div>
      </div>
    </footer>
  );
}
