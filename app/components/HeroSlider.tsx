"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import hero0 from "../img/hero.jpg";
import hero1 from "../img/hero2.jpg";
import hero2 from "../img/hero3.jpg";
import hero3 from "../img/53df16772bcc91e35ffde77571a5ca3d.jpg";
import hero4 from "../img/d209d97f3f9f6b700635816c8ad5e028.jpg";

const slides = [
  { src: hero0, alt: "Hero image 1" },
  { src: hero1, alt: "Hero image 2" },
  { src: hero2, alt: "Hero image 3" },
  { src: hero3, alt: "Hero image 4" },
  { src: hero4, alt: "Hero image 5" },
];

export default function HeroSlider() {
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
        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-6 py-14 text-center sm:px-8 sm:text-left" />

        <div className="absolute inset-x-0 bottom-5 z-20 flex justify-center gap-2 sm:bottom-6">
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
