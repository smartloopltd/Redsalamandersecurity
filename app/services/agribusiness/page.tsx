"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import img1 from "../../img/what we do imgs/agrochemical_img2.jpg";
import img2 from "../../img/what we do imgs/agrochemicals_1.jpg";
import img3 from "../../img/what we do imgs/agrochemicals_img3.jpg";

export default function AgribusinessPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="relative w-full overflow-hidden bg-red-600 text-white">
        <div className="relative isolate aspect-[16/9] min-h-[420px] w-full overflow-hidden lg:min-h-[580px]">
          {/* Slider images */}
          {([img1, img2] as any[]).map((src, i) => (
            <div key={i} className={`absolute inset-0 transition-opacity duration-700 ${i === 0 ? "opacity-100 z-10" : "opacity-0 -z-10"}`} data-slide-index={i} />
          ))}

          <SliderImages />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />
          <div className="relative z-20 mx-auto flex h-full max-w-7xl flex-col justify-center px-6 py-14 text-center sm:px-8 sm:text-left">
            <p className="text-sm uppercase tracking-[0.35em] text-red-200">What we do</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">Agribusiness and Hospitality</h1>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-white/80">We support agribusiness, hospitality, and event-focused environments with protective services that remain practical, responsive, and discreet.</p>
            <div id="agribusiness-slider-dots" className="mt-4 flex gap-2 justify-center sm:justify-start"></div>
          </div>
        </div>
      </section>

      {/* SliderImages component placed below to use hooks */}
      

      <section className="mx-auto flex max-w-4xl flex-col gap-8 px-6 py-16 sm:px-8 lg:px-12">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-950">Protecting people, places, and experience</h2>
          <p className="max-w-3xl text-lg leading-8 text-slate-700">
            Our approach helps organizations maintain secure, confident operations in environments where guest experience and continuity both matter.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 text-sm font-semibold text-red-600">
          <Link href="/contact" className="hover:text-red-700">Contact our team</Link>
          <Link href="/about" className="hover:text-red-700">Learn about Red Salamander</Link>
        </div>
      </section>
    </main>
  );
}

function SliderImages() {
  const images = [img1, img2, img3];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % images.length), 4000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const dots = document.getElementById('agribusiness-slider-dots');
    if (!dots) return;
    dots.innerHTML = '';
    images.forEach((_, i) => {
      const btn = document.createElement('button');
      btn.className = `h-2 w-2 rounded-full ${i === index ? 'bg-white' : 'bg-white/40'}`;
      btn.onclick = () => setIndex(i);
      dots.appendChild(btn);
    });
  }, [index]);

  return (
    <>
      {images.map((src, i) => (
        <div key={i} className={`absolute inset-0 transition-opacity duration-700 ${i === index ? 'opacity-100 z-10' : 'opacity-0 -z-10'}`}>
          <Image src={src} alt={`Agribusiness ${i + 1}`} fill sizes="100vw" loading={i === 0 ? 'eager' : 'lazy'} priority={i === 0} className="object-cover" />
        </div>
      ))}
    </>
  );
}
