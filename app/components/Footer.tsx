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
    <footer className="bg-red-600 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 md:grid-cols-[1.3fr_0.8fr_1.1fr] md:items-start">
        <div className="space-y-3 border-b-[3px] border-white/70 pb-6 md:border-b-0 md:border-r-[3px] md:border-white/70 md:pr-8">
          <Link href="/" className="block">
            <span className="block text-[0.78rem] sm:text-sm md:text-xl font-extrabold leading-tight tracking-tight uppercase text-white">
              Red Salamander
            </span>
            <span className="block -mt-1 text-[0.6rem] sm:text-xs md:text-sm font-light tracking-[0.22em] uppercase text-white">
              SECURITY
            </span>
          </Link>
          <p className="max-w-md text-sm leading-6 text-red-100">
            Professional security, logistics, and consultancy support for organizations that require dependable protection and practical operational continuity.
          </p>
          <p className="text-sm text-red-100">© 2026 Red Salamander Security. Trusted protection for modern enterprises.</p>
        </div>

        <div className="space-y-3 border-b-[3px] border-white/70 pb-6 md:border-b-0 md:border-r-[3px] md:border-white/70 md:pr-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-red-100">
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
                      className="flex w-full items-center justify-between text-left text-white/90 font-semibold px-0 py-1 hover:text-white"
                    >
                      <span>{link.label}</span>
                      <span className={`transition-transform duration-150 ${openGroups[link.label] ? "rotate-180" : "rotate-0"}`}>
                        ▼
                      </span>
                    </button>

                    {openGroups[link.label] ? (
                      <div className="mt-2 pl-3 space-y-1 max-h-[300px] overflow-y-auto scrollbar-hide">
                        {link.children.map((child) => (
                          <Link
                            key={child.href + child.label}
                            href={child.href}
                            className="block text-white/80 hover:text-white text-sm"
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

        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-red-100">
            Find us
          </p>
          <p className="text-sm leading-6 text-red-50">
            17 Luka Panya Street, Opposite Esu-Karu Residence, Karu LGC, Nasarawa State, Nigeria
          </p>
          <p className="text-sm leading-6 text-red-50">
            +234 802 127 5677<br />
            +234 817 289 0063
          </p>
        </div>
      </div>
    </footer>
  );
}
