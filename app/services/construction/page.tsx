"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import img1 from "../../img/what we do imgs/construction_image1.jpg";
import img2 from "../../img/what we do imgs/construction_image2.jpg";
import img3 from "../../img/what we do imgs/construction_image3.jpg";

export default function ConstructionPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="relative w-full overflow-hidden bg-red-600 text-white">
        <div className="relative isolate aspect-[16/9] min-h-[420px] w-full overflow-hidden lg:min-h-[580px]">
          <SliderImages />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />
          <div className="relative z-20 mx-auto flex h-full max-w-7xl flex-col justify-center px-6 py-6 text-left sm:px-8 sm:py-14">
            <p className="text-sm uppercase tracking-[0.35em] text-white">What we do</p>
            <h1 className="mt-2 text-2xl sm:text-4xl font-semibold tracking-tight text-white">Construction and Maintenance</h1>
            <p className="mt-3 max-w-3xl text-sm sm:text-base leading-relaxed text-white/80 line-clamp-2 sm:line-clamp-none">Operational oversight, site security, and maintenance services that ensure project continuity and asset longevity.</p>
            <div id="construction-slider-dots" className="mt-4 flex gap-2 justify-start"></div>
          </div>
        </div>
      </section>

      <section className="mx-auto flex max-w-4xl flex-col gap-8 px-6 py-16 sm:px-8 lg:px-12">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-950">Professional construction and maintenance expertise</h2>
          <p className="max-w-3xl text-lg leading-8 text-slate-700">
            We deliver comprehensive construction and maintenance solutions that combine technical expertise, quality craftsmanship, and reliable project management to build assets that last and keep your facilities operating at peak performance.
          </p>
        </div>

        <div className="space-y-6">
          <p className="text-lg leading-8 text-slate-700">
            At Red Salamander, we are committed to providing professional construction and maintenance services that transform your vision into quality, durable assets. Our experienced construction teams bring extensive expertise across residential, commercial, and industrial projects, delivering work that meets the highest standards of craftsmanship and safety. We understand that construction projects demand more than just labor—they require meticulous planning, skilled execution, and unwavering attention to detail at every stage. From project initiation through completion, our teams manage timelines, coordinate resources, and maintain quality control to ensure your construction is completed on schedule, within budget, and to your exact specifications. We pride ourselves on transparent communication, professional conduct, and delivering results that exceed expectations.
          </p>

          <p className="text-lg leading-8 text-slate-700">
            Beyond construction, our maintenance services ensure that your assets remain in optimal condition for years to come. We provide planned and preventive maintenance programs tailored to your facility's specific needs, combined with rapid response to emergencies and unexpected issues. Our maintenance teams are equipped with the technical knowledge and tools necessary to keep your facilities running smoothly, minimize costly downtime, and extend the lifespan of your infrastructure and equipment. We understand that well-maintained facilities are the foundation of operational efficiency and asset value, which is why we treat every maintenance assignment with the same professionalism and commitment to excellence that defines all of our work. Whether you need routine upkeep, seasonal services, or comprehensive facility maintenance, our teams deliver reliable, high-quality support.
          </p>

          <p className="text-lg leading-8 text-slate-700">
            When you partner with Red Salamander for construction and maintenance, you invest in quality, reliability, and long-term value. We are committed to building lasting relationships with our clients based on trust, transparency, and consistently excellent work. Our construction teams deliver projects that stand the test of time, while our maintenance specialists ensure your facilities remain in peak condition. We understand that your assets are vital to your business success, and we take that responsibility seriously. Choose Red Salamander for construction and maintenance services that reflect our dedication to quality, professionalism, and your complete satisfaction. Build strong. Maintain well. Succeed with Red Salamander.
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
    const dots = document.getElementById('construction-slider-dots');
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
          <Image src={src} alt={`Construction ${i + 1}`} fill sizes="100vw" loading={i === 0 ? 'eager' : 'lazy'} priority={i === 0} className="object-cover" />
        </div>
      ))}
    </>
  );
}
