import React from "react";
import Image from "next/image";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { EXPERIENCES_LIST, SITE_INFO } from "@/config/siteData";
import { ArrowUpRightIcon, WhatsAppIcon, PhoneIcon } from "./Icons";

export default function ExperiencesSection() {
  const getWhatsAppUrl = (text: string) =>
    `https://wa.me/${SITE_INFO.contact.whatsappNumber}?text=${encodeURIComponent(
      text
    )}`;

  return (
    <section
      id="experiences"
      className="py-20 sm:py-28 bg-white text-[#282B26]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <SectionHeading
              align="left"
              eyebrow="EXPERIENCES & OUTDOOR ACTIVITIES"
              title="Make Every Moment an Adventure."
              description="From early-morning 4x4 jeep ascents to Kolukkumalai's cloud-kissed sunrise ridge to tranquil lakeside boating and tea-trail exploration."
            />
            <div className="lg:max-w-xs text-xs sm:text-sm text-[#282B26]/75 bg-[#F5F2E9] p-4 rounded-[14px] border border-[#344B39]/12">
              <strong className="font-semibold text-[#344B39] block mb-0.5">
                Activity Coordination
              </strong>
              Outdoor experiences are arranged through authorised local operators
              around Suryanelli & Munnar. Connect with our desk to plan your
              schedule.
            </div>
          </div>
        </Reveal>

        {/* Modern Varied-Size Bento Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-7">
          {EXPERIENCES_LIST.map((exp, idx) => {
            const colSpanClass =
              idx === 0
                ? "lg:col-span-7"
                : idx === 1
                ? "lg:col-span-5"
                : "lg:col-span-6";

            return (
              <Reveal
                key={exp.id}
                delay={idx * 100}
                className={`${colSpanClass} h-full`}
              >
                <article className="luxury-card group relative h-full rounded-[20px] overflow-hidden border border-[#344B39]/15 bg-[#F5F2E9] shadow-[0_12px_32px_rgba(40,43,38,0.06)] flex flex-col justify-between">
                  {/* Top Visual Container */}
                  <div className="relative h-64 sm:h-72 lg:h-80 w-full overflow-hidden bg-[#D9E1D3]">
                    <Image
                      src={exp.image.src}
                      alt={exp.image.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 55vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#282B26]/85 via-[#282B26]/20 to-transparent" />

                    {/* Eyebrow Pill */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
                      <span className="px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-xs text-[#344B39] text-xs font-bold tracking-wider uppercase shadow-xs">
                        {exp.eyebrow}
                      </span>
                      <span className="h-9 w-9 rounded-full bg-[#344B39] text-white flex items-center justify-center shadow-sm group-hover:bg-[#C8A982] group-hover:text-[#282B26] transition-colors">
                        <ArrowUpRightIcon size={17} />
                      </span>
                    </div>

                    {/* Overlay Title */}
                    <div className="absolute bottom-4 left-5 right-5 text-white">
                      <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                        {exp.title}
                      </h3>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between gap-5 bg-[#F5F2E9]">
                    <div className="space-y-3">
                      <p className="text-sm sm:text-base text-[#282B26]/85 leading-relaxed">
                        {exp.description}
                      </p>
                      <p className="text-xs text-[#596B4D] bg-white/80 px-3.5 py-2.5 rounded-[10px] border border-[#344B39]/10">
                        <strong className="font-semibold text-[#344B39]">
                          Arrangement:
                        </strong>{" "}
                        {exp.arrangementNote}
                      </p>
                    </div>

                    <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-[#344B39]/10">
                      <a
                        href={getWhatsAppUrl(exp.whatsappText)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-bold text-[#344B39] hover:text-[#596B4D] transition-colors"
                      >
                        <WhatsAppIcon size={17} />
                        <span>Enquire About {exp.title}</span>
                        <span>→</span>
                      </a>
                      <a
                        href={`tel:${SITE_INFO.contact.phoneRaw}`}
                        aria-label="Call to arrange experience"
                        title="Call to Arrange"
                        className="inline-flex items-center justify-center h-9 w-9 rounded-lg bg-white hover:bg-[#D9E1D3]/60 text-[#344B39] border border-[#344B39]/15 transition-colors"
                      >
                        <PhoneIcon size={16} />
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
