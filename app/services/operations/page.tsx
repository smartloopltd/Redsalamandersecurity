"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import img1 from "../../img/what we do imgs/logistics_and_operations1.jpg";
import img2 from "../../img/what we do imgs/logistics_and_operations2.jpg";
import img3 from "../../img/what we do imgs/logistics_and_operations3.jpg";

export default function OperationsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="relative w-full overflow-hidden bg-red-600 text-white">
        <div className="relative isolate aspect-[16/9] min-h-[420px] w-full overflow-hidden lg:min-h-[580px]">
          <SliderImages />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />
          <div className="relative z-20 mx-auto flex h-full max-w-7xl flex-col justify-center px-6 py-6 text-left sm:px-8 sm:py-14">
            <p className="text-sm uppercase tracking-[0.35em] text-white">What we do</p>
            <h1 className="mt-2 text-2xl sm:text-4xl font-semibold tracking-tight text-white">Transport and Logistics</h1>
            <p className="mt-3 max-w-3xl text-sm sm:text-base leading-relaxed text-white/80 line-clamp-2 sm:line-clamp-none">Delivering efficient transport, supply chain, and logistics solutions to support seamless movement of goods and services.</p>
            <div id="operations-slider-dots" className="mt-4 flex gap-2 justify-start"></div>
          </div>
        </div>
      </section>

      <section className="mx-auto flex max-w-4xl flex-col gap-8 px-6 py-16 sm:px-8 lg:px-12">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-950">Reliable transport and logistics expertise</h2>
          <p className="max-w-3xl text-lg leading-8 text-slate-700">
            We deliver comprehensive transport and logistics solutions that combine operational efficiency, strategic planning, and unwavering reliability to keep your goods, equipment, and services moving seamlessly from origin to destination.
          </p>
        </div>

        <div className="space-y-6">
          <p className="text-lg leading-8 text-slate-700">
            At Red Salamander, we understand that reliable transport and logistics operations are the foundation of business continuity and operational success. Our transport and logistics services combine extensive supply chain expertise with practical operational management to deliver solutions tailored to your specific movement requirements, industry demands, and operational constraints. We recognize that every logistics challenge is unique—from managing inventory movement across diverse geographic regions, to coordinating time-sensitive deliveries, to ensuring secure handling of high-value goods or sensitive materials. Our experienced logistics teams bring decades of combined expertise managing complex supply chains, coordinating multi-modal transport, and solving logistical challenges across commercial, industrial, and specialized sectors. We combine strategic route planning, real-time tracking capabilities, professional driver management, and vehicle maintenance protocols to deliver transport and logistics services that are both cost-effective and operationally reliable.
          </p>

          <p className="text-lg leading-8 text-slate-700">
            We take pride in providing integrated logistics solutions that extend beyond simple transport to encompass comprehensive supply chain management and operational coordination. Our services include route optimization and planning, fleet management and vehicle coordination, real-time cargo tracking and documentation, inventory movement and warehousing support, specialized handling protocols for sensitive materials, and proactive communication with stakeholders at every stage of transport. We work closely with your operations teams to understand your supply chain requirements, seasonal variations, peak demand periods, and specific handling or security needs, ensuring that our logistics solutions enhance your operational efficiency while maintaining budget discipline. Our proactive approach—combining advanced planning, predictive maintenance, traffic and route optimization, and rapid response to transport disruptions—significantly reduces delays, minimizes operational costs, and ensures that goods arrive predictably and in optimal condition.
          </p>

          <p className="text-lg leading-8 text-slate-700">
            Investing in professional transport and logistics services is investing in supply chain reliability, operational continuity, and competitive efficiency. Red Salamander's commitment to comprehensive logistics management ensures that your goods move predictably, safely, and cost-effectively from start to destination. We understand that transportation disruptions cascade through operations, affecting productivity and profitability, which is why we are dedicated to providing the reliable, professional logistics support that keeps your operations flowing smoothly. By partnering with Red Salamander for transport and logistics, you gain access to experienced professionals who understand supply chain complexity and are committed to delivering consistent, dependable service that strengthens your operational performance. Move with confidence. Ship reliably. Succeed with Red Salamander's expert transport and logistics solutions.
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
    const dots = document.getElementById('operations-slider-dots');
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
          <Image src={src} alt={`Operations ${i + 1}`} fill sizes="100vw" loading={i === 0 ? 'eager' : 'lazy'} priority={i === 0} className="object-cover" />
        </div>
      ))}
    </>
  );
}
