"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { navLinks } from "./navLinks";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [whoWeServeOpen, setWhoWeServeOpen] = useState(false);
  const [joinUsOpen, setJoinUsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const servicesRef = useRef<HTMLDivElement>(null);
  const whoWeServeRef = useRef<HTMLDivElement>(null);
  const joinUsRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
      if (whoWeServeRef.current && !whoWeServeRef.current.contains(event.target as Node)) {
        setWhoWeServeOpen(false);
      }
      if (joinUsRef.current && !joinUsRef.current.contains(event.target as Node)) {
        setJoinUsOpen(false);
      }
    }

    if (servicesOpen || whoWeServeOpen || joinUsOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [servicesOpen, whoWeServeOpen, joinUsOpen]);

  useEffect(() => {
    if (searchOpen) {
      searchInputRef.current?.focus();
    }
  }, [searchOpen]);

  const searchableLinks = navLinks.flatMap((link) =>
    link.children
      ? link.children
          .filter((child) => child.href !== "#")
          .map((child) => ({ label: child.label, href: child.href, group: link.label }))
      : link.href !== "#"
        ? [{ label: link.label, href: link.href, group: "" }]
        : []
  );

  const filteredSearchResults = searchTerm.trim()
    ? searchableLinks.filter((item) => item.label.toLowerCase().includes(searchTerm.trim().toLowerCase()))
    : searchableLinks;

  return (
    <header className="sticky top-0 w-full z-50 bg-red-600 text-white shadow-lg shadow-red-600/20">
      <div className="mx-auto flex w-full max-w-7xl items-start justify-between gap-4 px-6 py-5 sm:items-center">
        <div className="min-w-0 flex-1 pr-2">
          <Link
            href="/"
            className="block max-w-[10rem] whitespace-normal break-words sm:max-w-[13rem] md:max-w-none"
          >
            <span className="block text-[0.78rem] sm:text-sm md:text-xl font-extrabold leading-tight tracking-tight uppercase">
              Red Salamander
            </span>
            <span className="block -mt-1 text-[0.6rem] sm:text-xs md:text-sm font-light tracking-[0.22em] uppercase">
              SECURITY
            </span>
          </Link>
        </div>



        <div className="flex items-center gap-2">
          <button
            type="button"
            className="flex-shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-full bg-transparent text-white transition border-none outline-none focus:outline-none focus-visible:outline-none focus:ring-0 focus-visible:ring-0 shadow-none hover:bg-white/10"
            aria-label="Search"
            onClick={() => {
              setSearchOpen((prev) => !prev);
              setSearchTerm("");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.2-5.2m2.2-5.3a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
              />
            </svg>
          </button>

          <button
            type="button"
            className="flex-shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-full bg-transparent text-white transition border-none outline-none focus:outline-none focus-visible:outline-none focus:ring-0 focus-visible:ring-0 shadow-none hover:bg-white/10"
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
      </div>

      {searchOpen ? (
        <div
          className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm"
          onClick={() => {
            setSearchOpen(false);
            setSearchTerm("");
          }}
        >
          <div
            className="mx-auto mt-20 w-[min(92vw,32rem)] rounded-2xl bg-white p-4 text-slate-900 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5 text-slate-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.2-5.2m2.2-5.3a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
                />
              </svg>
              <input
                ref={searchInputRef}
                type="text"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search pages"
                className="w-full border-none bg-transparent text-sm outline-none"
              />
              <button
                type="button"
                onClick={() => {
                  setSearchOpen(false);
                  setSearchTerm("");
                }}
                className="text-sm font-semibold text-slate-500"
                aria-label="Close search"
              >
                ✕
              </button>
            </div>

            <div className="mt-3 max-h-[60vh] space-y-1 overflow-y-auto scrollbar-hide">
              {filteredSearchResults.length > 0 ? (
                filteredSearchResults.map((item) => (
                  <Link
                    key={`${item.href}-${item.label}`}
                    href={item.href}
                    onClick={() => {
                      setSearchOpen(false);
                      setSearchTerm("");
                      setOpen(false);
                      setServicesOpen(false);
                      setWhoWeServeOpen(false);
                    }}
                    className="block rounded-lg px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-100"
                  >
                    <span className="font-medium">{item.label}</span>
                    {item.group ? <span className="ml-2 text-xs text-slate-500">{item.group}</span> : null}
                  </Link>
                ))
              ) : (
                <p className="px-3 py-2 text-sm text-slate-500">No matching pages found.</p>
              )}
            </div>
          </div>
        </div>
      ) : null}

      <div
        className={`fixed inset-y-0 right-0 z-30 w-full max-w-xs transform bg-red-700 p-6 transition-transform duration-300 ease-in-out shadow-2xl shadow-black/25 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="mb-4 flex justify-end">
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-transparent bg-transparent text-white focus:outline-none focus-visible:outline-none focus:ring-0 hover:bg-white/10"
            aria-label="Close navigation"
            onClick={() => setOpen(false)}
          >
            ×
          </button>
        </div>
        <div className="space-y-3 overflow-y-auto max-h-[calc(100vh-120px)] scrollbar-hide">
          {navLinks.map((link) => {
            const isServicesDropdown = link.label === "What we do";
            const isWhoWeServeDropdown = link.label === "Who we serve";
            const isJoinUsDropdown = link.label === "Join Us";
            const isOpen = isServicesDropdown ? servicesOpen : isWhoWeServeDropdown ? whoWeServeOpen : isJoinUsDropdown ? joinUsOpen : false;
            const setIsOpen = isServicesDropdown ? setServicesOpen : isWhoWeServeDropdown ? setWhoWeServeOpen : isJoinUsDropdown ? setJoinUsOpen : () => {};
            const ref = isServicesDropdown ? servicesRef : isWhoWeServeDropdown ? whoWeServeRef : isJoinUsDropdown ? joinUsRef : null;

            return (
              <div key={`${link.label}-${link.href}`} ref={ref} className="border-b-2 border-white/60 py-2 last:border-b-0">
                {link.children ? (
                  <>
                    <button
                      type="button"
                      className="flex w-full items-center justify-between rounded-2xl border border-transparent bg-transparent px-4 py-4 text-left text-sm font-semibold text-white transition-colors duration-150 hover:bg-white/10 focus:outline-none focus-visible:outline-none focus:ring-0"
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
                            key={`${child.label}-${child.href}`}
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
                    className="block rounded-2xl border border-transparent bg-transparent px-4 py-4 text-sm font-semibold text-white transition-colors duration-150 focus:outline-none focus-visible:outline-none focus:ring-0 hover:bg-white/10"
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
