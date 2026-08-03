"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const slides = [
  {
    title: "Security Operations",
    description: "Frontline roles in guarding, patrol and incident response.",
  },
  {
    title: "Intelligence & Risk",
    description: "Analysis positions focused on threat detection and risk mitigation.",
  },
  {
    title: "Logistics Support",
    description: "Operational roles coordinating transport, deployment, and supplies.",
  },
  {
    title: "Client Services",
    description: "Customer-facing jobs serving clients and managing stakeholder needs.",
  },
  {
    title: "Training & Development",
    description: "Professional development roles for safety, skills, and readiness programs.",
  },
];

// duplicate slides for smooth continuous loop
const loopSlides = [...slides, ...slides];

export default function CareersSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const offsetRef = useRef(0);
  const requestRef = useRef<number | null>(null);
  const prevTimeRef = useRef<number | null>(null);

  const [visibleCount, setVisibleCount] = useState(1);
  const [viewportWidth, setViewportWidth] = useState(0);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      const count = w >= 1024 ? 3 : w >= 640 ? 2 : 1;
      setVisibleCount(count);
      setViewportWidth(viewportRef.current?.offsetWidth || window.innerWidth);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const slidePixelWidth = useMemo(() => {
    return viewportWidth && visibleCount ? Math.floor(viewportWidth / visibleCount) : 0;
  }, [viewportWidth, visibleCount]);

  useEffect(() => {
    const speed = 30; // pixels per second

    const animate = (time: number) => {
      if (prevTimeRef.current != null && slidePixelWidth > 0) {
        const delta = (time - prevTimeRef.current) / 1000;
        offsetRef.current += speed * delta;
        const maxOffset = slidePixelWidth * slides.length;
        if (offsetRef.current >= maxOffset) {
          offsetRef.current -= maxOffset;
        }
        const index = Math.floor(offsetRef.current / slidePixelWidth) % slides.length;
        setActiveIndex(index);
        if (containerRef.current) {
          containerRef.current.style.transform = `translateX(-${offsetRef.current}px)`;
        }
      }
      prevTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [slidePixelWidth]);

  return (
    <div className="relative overflow-hidden" ref={viewportRef}>
      <div
        className="flex will-change-transform"
        ref={containerRef}
        style={slidePixelWidth ? { width: `${loopSlides.length * slidePixelWidth}px` } : undefined}
      >
        {loopSlides.map((slide, index) => (
          <div
            key={`${slide.title}-${index}`}
            className="flex-none box-border px-2 py-3"
            style={slidePixelWidth ? { minWidth: `${slidePixelWidth}px` } : undefined}
          >
            <div className="flex h-full max-h-[280px] min-h-[220px] flex-col justify-between bg-slate-950 p-5 text-white">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-red-400">Slide</p>
                <h3 className="mt-3 text-lg font-semibold text-white">{slide.title}</h3>
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-300">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-0 left-1/2 flex -translate-x-1/2 translate-y-8 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => {
              const width = slidePixelWidth || 0;
              offsetRef.current = index * width;
              setActiveIndex(index);
              if (containerRef.current) {
                containerRef.current.style.transform = `translateX(-${offsetRef.current}px)`;
              }
            }}
            className={`h-2.5 w-2.5 rounded-full transition ${
              index === activeIndex ? "bg-red-600" : "bg-slate-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
