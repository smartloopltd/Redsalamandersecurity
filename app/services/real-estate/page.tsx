"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import img1 from "../../img/what we do imgs/realestate_and_property_management1.jpg";
import img2 from "../../img/what we do imgs/realestate_and_propertymanagement2.jpg";
import img3 from "../../img/what we do imgs/realestate_and_propertymanagement3.jpg";

export default function RealEstatePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="relative w-full overflow-hidden bg-slate-900 text-white">
        <div className="relative isolate aspect-[16/9] min-h-[420px] w-full overflow-hidden lg:min-h-[580px]">
          <SliderImages />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />
          <div className="relative z-20 mx-auto flex h-full max-w-7xl flex-col justify-center px-6 py-6 text-left sm:px-8 sm:py-14">
            <p className="text-sm uppercase tracking-[0.35em] text-white">What we do</p>
            <h1 className="mt-2 text-2xl sm:text-4xl font-semibold tracking-tight text-white">Real Estate & Property Management</h1>
            <p className="mt-3 max-w-3xl text-sm sm:text-base leading-relaxed text-white/80 line-clamp-2 sm:line-clamp-none">Practical property management and real estate solutions that protect asset value, reduce vacancy, and deliver reliable tenant service.</p>
            <div id="realestate-slider-dots" className="mt-4 flex gap-2 justify-start"></div>
          </div>
        </div>
      </section>

      <section className="mx-auto flex max-w-4xl flex-col gap-8 px-6 py-16 sm:px-8 lg:px-12">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-950">Comprehensive property management for lasting value</h2>
          <p className="max-w-3xl text-lg leading-8 text-slate-700">
            We deliver professional real estate and property management services that protect your investment, optimize occupancy, and ensure your properties remain attractive, well-maintained, and financially productive.
          </p>
        </div>

        <div className="space-y-6">
          <p className="text-lg leading-8 text-slate-700">
            At Red Salamander, we recognize that successful real estate and property management requires more than administrative oversight—it demands strategic thinking, operational excellence, and genuine commitment to protecting your asset value while delivering exceptional tenant experiences. Our property management teams bring extensive experience managing diverse portfolios across residential, commercial, and mixed-use properties, enabling us to deliver sophisticated solutions tailored to each property's unique characteristics and market position. We understand that property owners face complex challenges—from balancing tenant satisfaction with cost management, to maintaining properties efficiently while protecting asset value, to navigating regulatory requirements and market dynamics. Our comprehensive approach combines professional tenant relations, proactive maintenance management, vendor coordination, and strategic financial oversight to create properties that thrive in competitive markets.
          </p>

          <p className="text-lg leading-8 text-slate-700">
            We take pride in providing integrated property management services that go beyond reactive problem-solving to encompass strategic asset optimization. Our teams manage all dimensions of property operations—from tenant screening and lease administration to preventive maintenance planning and emergency repairs—while maintaining transparent communication with property owners and stakeholders. We implement systems and protocols designed to minimize vacancy periods, reduce maintenance emergencies through preventive planning, and maximize tenant retention through responsive, professional service. Our vendor networks are carefully managed to ensure quality work at competitive costs, and our financial reporting provides clear visibility into property performance and operational expenses. We believe that well-managed properties attract quality tenants, maintain higher occupancy rates, and appreciate in value over time—outcomes that directly reflect our commitment to operational excellence.
          </p>

          <p className="text-lg leading-8 text-slate-700">
            Your real estate investment deserves professional management that protects and enhances its value. Red Salamander's commitment to comprehensive property management ensures that your properties are well-maintained, professionally administered, and positioned for long-term success in the market. We understand that property owners seek reliable partners who can handle the operational complexity of real estate while delivering predictable, positive results. By choosing Red Salamander for real estate and property management, you gain access to experienced professionals who treat your properties as if they were their own, combining strategic thinking with hands-on operational oversight. Maximize your property value, maintain occupancy, and achieve your real estate objectives with Red Salamander's dedicated property management expertise.
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
    const dots = document.getElementById('realestate-slider-dots');
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
          <Image src={src} alt={`Real estate ${i + 1}`} fill sizes="100vw" loading={i === 0 ? 'eager' : 'lazy'} priority={i === 0} className="object-cover" />
        </div>
      ))}
    </>
  );
}
