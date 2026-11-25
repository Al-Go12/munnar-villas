"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { NAV_LINKS, SITE_INFO } from "@/config/siteData";
import { BRAND_LOGO } from "@/config/images";
import {
  MenuIcon,
  CloseIcon,
  PhoneIcon,
  WhatsAppIcon,
  MapPinIcon,
  InstagramIcon,
} from "./Icons";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 36);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#F5F2E9]/95 backdrop-blur-md shadow-[0_4px_24px_rgba(40,43,38,0.07)] border-b border-[#344B39]/10 py-3"
            : "bg-gradient-to-b from-black/55 via-black/25 to-transparent py-4 sm:py-5"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <a
            href="#home"
            className="group flex items-center focus:outline-none"
            aria-label="Munnar Villas Suryanelli Wood Resort Home"
          >
            <Image
              src={BRAND_LOGO.src}
              alt={BRAND_LOGO.alt}
              width={144}
              height={78}
              priority
              className="h-11 sm:h-13 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </a>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center gap-1 xl:gap-2"
            aria-label="Main Navigation"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-3.5 py-2 rounded-full text-sm font-medium transition-all ${
                  isScrolled
                    ? "text-[#282B26] hover:text-[#344B39] hover:bg-[#D9E1D3]/50"
                    : "text-white/95 hover:text-white hover:bg-white/15"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Primary CTA + Direct Call & WhatsApp Icons + Mobile Trigger */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            <a
              href={SITE_INFO.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Enquiry"
              title="WhatsApp Enquiry"
              className={`inline-flex items-center justify-center h-10 w-10 rounded-[12px] border transition-all ${
                isScrolled
                  ? "border-[#344B39]/20 text-[#344B39] bg-white hover:bg-[#D9E1D3]/40"
                  : "border-white/30 text-white bg-black/20 hover:bg-black/35"
              }`}
            >
              <WhatsAppIcon size={18} />
            </a>

            <a
              href={`tel:${SITE_INFO.contact.phoneRaw}`}
              aria-label="Call Resort"
              title="Call Resort"
              className={`inline-flex items-center justify-center h-10 w-10 rounded-[12px] border transition-all ${
                isScrolled
                  ? "border-[#344B39]/20 text-[#344B39] bg-white hover:bg-[#D9E1D3]/40"
                  : "border-white/30 text-white bg-black/20 hover:bg-black/35"
              }`}
            >
              <PhoneIcon size={17} />
            </a>

            <a
              href="#book-stay"
              className={`hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-[12px] text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-sm ${
                isScrolled
                  ? "bg-[#344B39] text-white hover:bg-[#282B26]"
                  : "bg-[#F5F2E9] text-[#344B39] hover:bg-white"
              }`}
            >
              BOOK YOUR STAY
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={mobileMenuOpen}
              className={`lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-[12px] border transition-colors ${
                isScrolled
                  ? "border-[#344B39]/20 text-[#344B39] bg-white hover:bg-[#D9E1D3]/40"
                  : "border-white/30 text-white bg-black/20 hover:bg-black/35"
              }`}
            >
              <MenuIcon size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 lg:hidden flex justify-end"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
        >
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-[#282B26]/60 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Content */}
          <div className="relative z-10 w-full max-w-sm bg-[#F5F2E9] h-full shadow-2xl flex flex-col justify-between overflow-y-auto border-l border-[#344B39]/15">
            <div className="p-5 sm:p-6">
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-5 border-b border-[#344B39]/15">
                <Image
                  src={BRAND_LOGO.src}
                  alt={BRAND_LOGO.alt}
                  width={130}
                  height={70}
                  className="h-11 w-auto object-contain"
                />
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close navigation menu"
                  className="h-10 w-10 rounded-[12px] bg-white border border-[#344B39]/15 text-[#282B26] flex items-center justify-center hover:bg-[#D9E1D3]/50 transition-colors"
                >
                  <CloseIcon size={20} />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="mt-6 flex flex-col gap-1.5">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-3 rounded-[12px] text-base font-semibold text-[#282B26] hover:bg-[#D9E1D3]/60 hover:text-[#344B39] transition-colors flex items-center justify-between"
                  >
                    <span>{link.label}</span>
                    <span className="text-[#596B4D] text-sm">→</span>
                  </a>
                ))}
              </nav>

              {/* Direct Booking & Contact Icon Actions inside Drawer */}
              <div className="mt-6 pt-6 border-t border-[#344B39]/15 grid grid-cols-2 gap-3">
                <a
                  href={SITE_INFO.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="WhatsApp Enquiry"
                  className="py-3.5 px-4 rounded-[12px] bg-[#344B39] text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-sm hover:bg-[#282B26] transition-colors"
                >
                  <WhatsAppIcon size={19} />
                  <span>WhatsApp</span>
                </a>

                <a
                  href={`tel:${SITE_INFO.contact.phoneRaw}`}
                  aria-label="Call Resort"
                  className="py-3.5 px-4 rounded-[12px] bg-white border border-[#344B39]/20 text-[#344B39] font-semibold text-sm flex items-center justify-center gap-2 hover:bg-[#D9E1D3]/40 transition-colors"
                >
                  <PhoneIcon size={18} />
                  <span>Call</span>
                </a>
              </div>
            </div>

            {/* Drawer Footer Address */}
            <div className="p-5 sm:p-6 bg-[#D9E1D3]/50 border-t border-[#344B39]/10 text-xs text-[#282B26]/80 space-y-2.5">
              <div className="flex items-start gap-2">
                <MapPinIcon size={16} className="text-[#344B39] shrink-0 mt-0.5" />
                <span>{SITE_INFO.address.full}</span>
              </div>
              <div className="flex items-center justify-between pt-2">
                <a
                  href={SITE_INFO.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-semibold text-[#344B39] hover:underline"
                >
                  <InstagramIcon size={15} />
                  <span>{SITE_INFO.contact.instagramHandle}</span>
                </a>
                <a
                  href={SITE_INFO.contact.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#344B39] hover:underline"
                >
                  Get Directions →
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
