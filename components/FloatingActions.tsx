"use client";

import React from "react";
import { SITE_INFO } from "@/config/siteData";
import { PhoneIcon, WhatsAppIcon } from "./Icons";

export default function FloatingActions() {
  return (
    <>
      {/* Desktop & Tablet Floating Call + WhatsApp Icon Buttons */}
      <div className="hidden sm:flex fixed bottom-6 right-6 z-40 flex-col items-center gap-3">
        <a
          href={`tel:${SITE_INFO.contact.phoneRaw}`}
          aria-label="Call Munnar Villas"
          title="Call Munnar Villas"
          className="h-13 w-13 rounded-full bg-white hover:bg-[#F5F2E9] text-[#344B39] flex items-center justify-center shadow-[0_10px_26px_rgba(40,43,38,0.22)] border border-[#344B39]/20 transition-all hover:-translate-y-0.5"
        >
          <PhoneIcon size={22} />
        </a>

        <a
          href={SITE_INFO.contact.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Munnar Villas on WhatsApp"
          title="Chat on WhatsApp"
          className="h-14 w-14 rounded-full bg-[#344B39] hover:bg-[#282B26] text-white flex items-center justify-center shadow-[0_12px_30px_rgba(40,43,38,0.3)] border border-white/20 transition-all hover:-translate-y-0.5"
        >
          <WhatsAppIcon size={25} />
        </a>
      </div>

      {/* Mobile Sticky Bottom Call + WhatsApp Icon Bar */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#F5F2E9]/95 backdrop-blur-md border-t border-[#344B39]/15 px-4 py-2.5 shadow-[0_-4px_20px_rgba(40,43,38,0.1)]">
        <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
          <a
            href={`tel:${SITE_INFO.contact.phoneRaw}`}
            aria-label="Call Munnar Villas"
            className="py-2.5 px-3 rounded-[11px] bg-white border border-[#344B39]/25 text-[#344B39] font-bold text-xs flex items-center justify-center gap-2"
          >
            <PhoneIcon size={17} />
            <span>Call</span>
          </a>
          <a
            href={SITE_INFO.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp Munnar Villas"
            className="py-2.5 px-3 rounded-[11px] bg-[#344B39] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xs"
          >
            <WhatsAppIcon size={17} />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </>
  );
}
