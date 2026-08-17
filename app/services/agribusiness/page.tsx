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
          <div className="relative z-20 mx-auto flex h-full max-w-7xl flex-col justify-center px-6 py-6 text-left sm:px-8 sm:py-14">
            <p className="text-sm uppercase tracking-[0.35em] text-white">What we do</p>
            <h1 className="mt-2 text-2xl sm:text-4xl font-semibold tracking-tight text-white">Agro Inputs &amp; Security</h1>
            <p className="mt-3 max-w-3xl text-sm sm:text-base leading-relaxed text-white/80 line-clamp-2 sm:line-clamp-none">We secure agricultural inputs, supply quality farm products, and support agribusiness growth with practical protection for producers, distributors, and rural stakeholders.</p>
            <div id="agribusiness-slider-dots" className="mt-4 flex gap-2 justify-start"></div>
          </div>
        </div>
      </section>

      {/* SliderImages component placed below to use hooks */}
      

      <section className="mx-auto flex max-w-4xl flex-col gap-8 px-6 py-16 sm:px-8 lg:px-12">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-950">Professional agro inputs and agricultural security</h2>
          <p className="max-w-3xl text-lg leading-8 text-slate-700">
            We deliver comprehensive agro inputs and agricultural security solutions that combine quality product supply with professional protection to support agribusiness growth, safeguard rural operations, and strengthen agricultural value chains.
          </p>
        </div>

        <div className="space-y-6">
          <p className="text-lg leading-8 text-slate-700">
            At Red Salamander, we understand that agricultural success requires far more than just farming expertise—it demands reliable access to quality inputs, secure operations, and trusted partnerships that strengthen every dimension of the agribusiness value chain. We are directly engaged in supplying quality agrochemicals, farm products, and groceries to support agribusiness growth and household needs, while simultaneously providing professional security solutions that protect your operations and investments. Our integrated approach combines the roles of trusted supplier and security provider, ensuring that farmers and agricultural enterprises have both the materials they need and the protection necessary to operate safely and productively. We bring extensive expertise working across farming communities, agribusiness enterprises, and agricultural distribution networks, enabling us to deliver solutions that are both commercially competitive and deeply responsive to agricultural sector realities.
          </p>

          <p className="text-lg leading-8 text-slate-700">
            We take pride in providing comprehensive agro products supply and professional security services that work together to support agricultural success. As a direct supplier of agrochemicals, fertilizers, farm products, and groceries, we ensure that farmers and businesses have access to quality inputs at competitive prices when they need them. Simultaneously, our security services include storage and warehouse protection for agricultural products, distribution logistics and supply chain security, farm protection and rural security coordination, product quality assurance and inventory management, and collaborative partnerships with agricultural communities. We work closely with farmers, agribusiness operators, and retailers to understand your product needs, supply requirements, seasonal demand patterns, and security concerns, ensuring that our integrated solutions deliver both reliable supply and comprehensive protection. Our proactive approach—combining quality product availability, fair pricing, preventive security measures, real-time monitoring, and rapid response protocols—strengthens agricultural operations while reducing losses and protecting your investments.
          </p>

          <p className="text-lg leading-8 text-slate-700">
            Partnering with Red Salamander for agricultural products supply and security means gaining access to a trusted business partner who understands agricultural challenges intimately and is committed to supporting your success on every level. We believe that sustainable agricultural growth depends on reliable access to quality inputs, secure operations, and genuine partnerships—which is exactly what Red Salamander provides. By choosing us as your supplier of agrochemicals, farm products, and groceries, combined with professional security protection, you invest in operational reliability, supply security, and business sustainability. Whether you are a farmer building your operation, an agribusiness managing complex supply chains, or a retailer serving rural communities, Red Salamander is your integrated partner for quality agro products and reliable security. Grow with confidence. Supply securely. Succeed with Red Salamander's complete agro products and security solutions.
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
