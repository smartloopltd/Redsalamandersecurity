"use client";

import Link from "next/link";
import { useState } from "react";
import { navLinks } from "./navLinks";

export default function Footer() {
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({});

  function toggle(label: string) {
    setOpenGroups((prev) => ({ ...prev, [label]: !prev[label] }));
  }

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-red-600 via-red-700 to-red-800 text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.1),transparent_40%),linear-gradient(180deg,rgba(255,255,255,0.04)_0%,rgba(0,0,0,0.08)_100%)]" />
      <div className="relative z-10 mx-auto grid max-w-7xl gap-8 px-6 py-12 md:grid-cols-[1.3fr_0.8fr_1.1fr] md:items-start">
        <div className="space-y-3 border-b border-white/15 pb-6 md:border-b-0 md:border-r md:border-white/15 md:pr-8">
          <Link href="/" className="block">
            <span className="block text-[0.78rem] sm:text-sm md:text-xl font-extrabold leading-tight tracking-tight uppercase text-white">
              Red Salamander
            </span>
            <span className="block -mt-1 text-[0.6rem] sm:text-xs md:text-sm font-light tracking-[0.22em] uppercase text-white">
              SECURITY
            </span>
          </Link>
          <p className="max-w-md text-sm leading-5 text-slate-200">
            We provide trusted security, logistics, and consultancy support for organizations that value dependable protection and calm operational continuity.
          </p>
          <p className="text-sm leading-5 text-slate-200">
            Digital Solutions by
            <span className="mt-1 block leading-tight uppercase text-white">
              <span className="block text-[0.7rem] font-extrabold tracking-[0.24em] sm:text-[0.78rem] md:text-[0.95rem]">Smartloop</span>
              <span className="mt-1 block text-[0.62rem] font-light tracking-[0.24em] sm:text-[0.68rem] md:text-[0.8rem]">Limited</span>
            </span>
          </p>
          <p className="text-sm leading-5 text-red-100">© 2026 Red Salamander Security. Trusted protection for modern enterprises.</p>
        </div>

        <div className="space-y-3 border-b border-white/15 pb-6 md:border-b-0 md:border-r md:border-white/15 md:pr-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white">
            Quick links
          </p>

          <div className="flex flex-col gap-2 text-sm">
            {navLinks.map((link) => (
              <div key={link.label} className="">
                {link.children ? (
                  <div>
                    <button
                      type="button"
                      onClick={() => toggle(link.label)}
                      aria-expanded={!!openGroups[link.label]}
                      className="flex w-full items-center justify-between text-left text-slate-200 font-semibold px-0 py-1 hover:text-white"
                    >
                      <span>{link.label}</span>
                      <span className="transition duration-150">
                        +
                      </span>
                    </button>

                    {openGroups[link.label] ? (
                      <div className="mt-2 pl-3 space-y-1 max-h-[300px] overflow-y-auto scrollbar-hide">
                        {link.children.map((child) => (
                          <Link
                            key={child.href + child.label}
                            href={child.href}
                            className="block text-slate-200 hover:text-white text-sm"
                            onClick={() => setOpenGroups({})}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </div>
                ) : (
                  <Link href={link.href} className="transition hover:text-white/80 text-white/90">
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-3 border-b border-white/10 pb-6 md:border-b-0">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white">
            Find us
          </p>
          <p className="text-sm leading-6 text-slate-200">
            17 Luka Panya Street, Opposite Esu-Karu Residence, Karu LGC, Nasarawa State, Nigeria
          </p>
          <p className="text-sm leading-6 text-slate-200">
            Los Angeles Event Center & Mall: Located on Ahmadu Bello Way, Kado/Mabushi axis, Abuja, FCT
          </p>
          <p className="text-sm leading-6 text-slate-200">
            +234 802 127 5677<br />
            +234 817 289 0063
          </p>
        </div>
      </div>
    </footer>
  );
}
