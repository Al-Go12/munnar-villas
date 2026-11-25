import React from "react";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  const isCenter = align === "center";
  return (
    <div
      className={`flex flex-col gap-3 ${
        isCenter ? "items-center text-center mx-auto max-w-3xl" : "items-start text-left max-w-2xl"
      }`}
    >
      <div className="inline-flex items-center gap-2">
        <span
          className={`h-1.5 w-1.5 rounded-full ${
            light ? "bg-[#C8A982]" : "bg-[#596B4D]"
          }`}
        />
        <span
          className={`text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] ${
            light ? "text-[#D9E1D3]" : "text-[#596B4D]"
          }`}
        >
          {eyebrow}
        </span>
      </div>
      <h2
        className={`text-3xl sm:text-4xl lg:text-[2.65rem] font-bold leading-[1.15] tracking-tight ${
          light ? "text-white" : "text-[#344B39]"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-base sm:text-lg leading-relaxed mt-1 ${
            light ? "text-[#F5F2E9]/90" : "text-[#282B26]/80"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
