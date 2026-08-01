"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "What we do",
    href: "#",
    children: [
      { label: "Executive Travel Security", href: "/services/executive-travel" },
      { label: "Escorts", href: "/services/escorts" },
      { label: "Staff Vetting", href: "/services/staff-vetting" },
      { label: "Operations / Logistics", href: "/services/operations" },
      { label: "Agribusiness & Hospitality", href: "/services/agribusiness" },
    ],
  },
  {
    label: "Who we serve",
    href: "#",
    children: [
      { label: "Commercial properties", href: "#" },
      { label: "Construction site", href: "#" },
      { label: "Data center", href: "#" },
      { label: "Financial industry", href: "#" },
      { label: "Government services", href: "#" },
      { label: "Healthcare", href: "#" },
      { label: "Higher education", href: "#" },
      { label: "Industrial security", href: "#" },
      { label: "Logistics and transportation", href: "#" },
      { label: "Malls, shopping centers and retail", href: "#" },
      { label: "Manufacturing", href: "#" },
      { label: "Oil, gas and energy sectors", href: "#" },
      { label: "Ports and logistics security", href: "#" },
      { label: "Residential", href: "#" },
    ],
  },
  { label: "Features", href: "/features" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [whoWeServeOpen, setWhoWeServeOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const whoWeServeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
      if (whoWeServeRef.current && !whoWeServeRef.current.contains(event.target as Node)) {
        setWhoWeServeOpen(false);
      }
    }

    if (servicesOpen || whoWeServeOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [servicesOpen, whoWeServeOpen]);

  return (
    <header className="sticky top-0 w-full z-50 bg-red-600 text-white shadow-lg shadow-red-600/20">
      <div className="mx-auto flex w-full max-w-7xl items-start justify-between gap-4 px-6 py-5 sm:items-center">
        <div className="min-w-0 flex-1 pr-2">
          <Link
            href="/"
            className="block max-w-[10rem] text-[0.78rem] font-bold leading-[1.15] tracking-tight whitespace-normal break-words sm:max-w-[13rem] sm:text-sm md:max-w-none md:text-xl"
          >
            Red Salamander Security
          </Link>
        </div>



        <button
          type="button"
          className="flex-shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-full bg-transparent text-white transition border-none outline-none focus:outline-none focus-visible:outline-none focus:ring-0 focus-visible:ring-0 shadow-none"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="flex h-5 w-5 flex-col justify-between">
            <span className="block h-0.5 w-full rounded-full bg-white" />
            <span className="block h-0.5 w-full rounded-full bg-white" />
            <span className="block h-0.5 w-full rounded-full bg-white" />
          </span>
        </button>
      </div>

      <div
        className={`fixed inset-y-0 right-0 z-30 w-full max-w-xs transform bg-red-700 p-6 transition-transform duration-300 ease-in-out shadow-2xl shadow-black/25 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          type="button"
          className="mb-6 inline-flex h-10 w-10 items-center justify-center rounded-full border border-transparent bg-transparent text-white focus:outline-none focus-visible:outline-none focus:ring-0 hover:border-white/20 hover:bg-transparent"
          aria-label="Close navigation"
          onClick={() => setOpen(false)}
        >
          ×
        </button>
        <div className="space-y-3 overflow-y-auto max-h-[calc(100vh-120px)] scrollbar-hide">
          {navLinks.map((link) => {
            const isServicesDropdown = link.label === "What we do";
            const isWhoWeServeDropdown = link.label === "Who we serve";
            const isOpen = isServicesDropdown ? servicesOpen : isWhoWeServeDropdown ? whoWeServeOpen : false;
            const setIsOpen = isServicesDropdown ? setServicesOpen : isWhoWeServeDropdown ? setWhoWeServeOpen : () => {};
            const ref = isServicesDropdown ? servicesRef : isWhoWeServeDropdown ? whoWeServeRef : null;

            return (
              <div key={link.href} ref={ref}>
                {link.children ? (
                  <>
                    <button
                      type="button"
                      className="flex w-full items-center justify-between rounded-2xl border border-transparent bg-transparent px-4 py-4 text-left text-sm font-semibold text-white transition-colors duration-150 hover:border-white/20 focus:outline-none focus-visible:outline-none focus:ring-0"
                      onClick={() => setIsOpen((prev: boolean) => !prev)}
                    >
                      {link.label}
                      <span className={`inline-block transition-transform duration-150 ${isOpen ? "rotate-180" : "rotate-0"}`}>
                        ▼
                      </span>
                    </button>

                    {isOpen ? (
                      <div className="mt-2 space-y-1 pl-4 max-h-[300px] overflow-y-auto scrollbar-hide">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block rounded px-3 py-2 text-sm font-medium text-white/95 hover:bg-white/10"
                            onClick={() => {
                              setOpen(false);
                              setIsOpen(false);
                            }}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className="block rounded-2xl border border-transparent bg-transparent px-4 py-4 text-sm font-semibold text-white transition-colors duration-150 focus:outline-none focus-visible:outline-none focus:ring-0 hover:border-white/20 focus:border-white/20"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {open ? (
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-20 bg-black/40"
          aria-label="Close navigation overlay"
        />
      ) : null}
    </header>
  );
}
