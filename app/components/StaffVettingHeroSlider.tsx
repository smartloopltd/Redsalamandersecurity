"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import staffVetting1 from "../img/what we do imgs/staff_vetting&training1.jpg";
import staffVetting2 from "../img/what we do imgs/staff_vetting&training2.jpg";
import staffVetting3 from "../img/what we do imgs/staff_vetting&training3.jpg";

type StaffVettingHeroSliderProps = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
};

const slides = [
  { src: staffVetting1, alt: "Staff vetting and training image 1" },
  { src: staffVetting2, alt: "Staff vetting and training image 2" },
  { src: staffVetting3, alt: "Staff vetting and training image 3" },
];

export default function StaffVettingHeroSlider({
  eyebrow,
  title,
  subtitle,
}: StaffVettingHeroSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-red-600 text-white">
      <div className="relative isolate aspect-[4/3] min-h-[420px] w-full overflow-hidden sm:aspect-[16/9] lg:aspect-[16/9] lg:min-h-[580px]">
        {slides.map((slide, index) => (
          <div
            key={slide.alt}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              sizes="100vw"
              priority={index === 0}
              className="h-full w-full object-cover object-center"
            />
          </div>
        ))}

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-6 py-6 text-left sm:px-8 sm:py-14">
          {eyebrow ? (
            <p className="text-sm uppercase tracking-[0.35em] text-white">{eyebrow}</p>
          ) : null}
          {title ? (
            <h1 className="mt-2 text-2xl sm:text-4xl font-semibold tracking-tight text-white">
              {title}
            </h1>
          ) : null}
          {subtitle ? (
            <p className="mt-3 max-w-3xl text-sm sm:text-base leading-relaxed text-white/80 line-clamp-2 sm:line-clamp-none">
              {subtitle}
            </p>
          ) : null}
        </div>

        <div className="absolute inset-x-4 bottom-5 z-20 flex gap-2 sm:inset-x-6 sm:bottom-6 justify-start">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 w-2.5 rounded-full transition ${
                index === activeIndex ? "bg-white" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
