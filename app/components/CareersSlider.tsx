"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const slides = [
  {
    title: "Security Operations",
    description: "Frontline guarding, patrol, and incident response.",
  },
  {
    title: "Intelligence & Risk",
    description: "Threat detection, risk assessment, and analysis.",
  },
  {
    title: "Logistics Support",
    description: "Coordinating transport, deployment, and supply chains.",
  },
  {
    title: "Client Services",
    description: "Serving clients and managing stakeholder needs.",
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
    if (!viewportWidth || !visibleCount) return 0;
    const factor = viewportWidth < 640 ? 0.52 : viewportWidth < 1024 ? 0.72 : 0.82;
    const width = Math.floor((viewportWidth / visibleCount) * factor);
    const maxWidth = viewportWidth < 640 ? 280 : viewportWidth < 1024 ? 340 : 380;
    return Math.min(width, maxWidth);
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
            className="flex-none box-border px-2 py-2"
            style={slidePixelWidth ? { minWidth: `${slidePixelWidth}px` } : undefined}
          >
            <div className="flex h-full min-h-[160px] flex-col justify-between rounded-3xl bg-slate-950/95 p-4 ring-1 ring-white/10 transition hover:-translate-y-1 hover:bg-slate-950">
              <div>
                <p className="text-[0.625rem] uppercase tracking-[0.35em] text-red-400">Careers and employments</p>
                <h3 className="mt-2 text-sm font-semibold text-white">{slide.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-300">{slide.description}</p>
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
