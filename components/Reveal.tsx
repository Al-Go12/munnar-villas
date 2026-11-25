"use client";

import React, { useEffect, useRef, useState } from "react";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "scale";
}

export default function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const hiddenTransform =
    direction === "up"
      ? "translate-y-7"
      : direction === "left"
      ? "-translate-x-7"
      : direction === "right"
      ? "translate-x-7"
      : "scale-95";

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform ${
        isVisible
          ? "opacity-100 translate-y-0 translate-x-0 scale-100"
          : `opacity-0 ${hiddenTransform}`
      } ${className}`}
    >
      {children}
    </div>
  );
}
