"use client";

import Link from "next/link";
import { useState, useRef, useLayoutEffect, useEffect } from "react";
import { navLinks } from "./navLinks";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({});
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [headerHeight, setHeaderHeight] = useState(0);
  const searchInputRef = useRef<HTMLInputElement | null>(null);
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (searchOpen) {
      searchInputRef.current?.focus();
    }
  }, [searchOpen]);

  useLayoutEffect(() => {
    const updateHeaderHeight = () => {
      setHeaderHeight(headerRef.current?.offsetHeight ?? 0);
    };

    updateHeaderHeight();
    window.addEventListener("resize", updateHeaderHeight);
    return () => window.removeEventListener("resize", updateHeaderHeight);
  }, []);

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

  const isSearching = searchTerm.trim().length > 0;

  return (
    <header ref={headerRef} className="sticky top-0 w-full z-[70] bg-red-600 text-white shadow-lg shadow-red-600/20">
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
              setOpen(false);
              setOpenGroups({});
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
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            onClick={() => {
              setSearchOpen(false);
              setSearchTerm("");
              setOpen((prev) => !prev);
            }}
          >
            <span className="sr-only">{open ? "Close navigation" : "Open navigation"}</span>
            {open ? (
              <span className="text-2xl font-bold leading-none">×</span>
            ) : (
              <span className="flex h-5 w-5 flex-col justify-between">
                <span className="block h-0.5 w-full rounded-full bg-white" />
                <span className="block h-0.5 w-full rounded-full bg-white" />
                <span className="block h-0.5 w-full rounded-full bg-white" />
              </span>
            )}
          </button>
        </div>
      </div>

      {searchOpen ? (
        <button
          type="button"
          className="fixed z-[55] bg-black/40"
          style={{ top: headerHeight, bottom: 0, left: 0, right: 0 }}
          onClick={() => {
            setSearchOpen(false);
            setSearchTerm("");
          }}
          aria-label="Close search overlay"
        />
      ) : null}

      <div
        className={`fixed right-0 z-[60] w-full transform bg-red-700 p-6 transition-transform duration-300 ease-in-out shadow-2xl shadow-black/25 ${
          searchOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ top: headerHeight, bottom: 0, left: 0 }}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mx-auto w-full max-w-7xl text-white">
          <div className="w-full">
            <div className="relative">
              <div className="flex items-center gap-2 border border-white bg-white px-3 py-2 rounded-md">
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
                  className="w-full border-none bg-white text-sm text-slate-900 outline-none h-10"
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
                  →
                </button>
              </div>

              {isSearching ? (
                <div className="absolute inset-x-0 top-full z-20 mt-3 max-h-[60vh] overflow-y-auto bg-transparent text-white">
                  {filteredSearchResults.length > 0 ? (
                    filteredSearchResults.map((item) => (
                      <Link
                        key={`${item.href}-${item.label}`}
                        href={item.href}
                        onClick={() => {
                          setSearchOpen(false);
                          setSearchTerm("");
                          setOpen(false);
                          setOpenGroups({});
                        }}
                        className="block w-full px-4 py-4 text-sm font-medium text-white transition hover:text-red-200"
                      >
                        <span>{item.label}</span>
                        {item.group ? <span className="ml-2 text-xs text-white/70">{item.group}</span> : null}
                      </Link>
                    ))
                  ) : (
                    <p className="px-4 py-4 text-sm text-white/80">No matching pages found.</p>
                  )}
                </div>
              ) : null}
            </div>

            <div className={`mt-6 space-y-4 text-white ${isSearching ? "opacity-0 pointer-events-none" : ""}`}>
              <p className="text-sm text-white/90">
                Professional security, logistics, and consultancy support for organizations that require dependable protection and practical operational continuity.
              </p>

              <p className="text-sm text-white/80">© 2026 Red Salamander Security. Trusted protection for modern enterprises.</p>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`fixed right-0 z-[40] w-full transform bg-red-700 p-6 transition-transform duration-300 ease-in-out shadow-2xl shadow-black/25 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ top: headerHeight, bottom: 0, left: 0 }}
      >
        {/* close button removed from inside the drawer — header toggle transforms into cancel */}
        <div className="space-y-3 overflow-y-auto max-h-[calc(100vh-120px)] scrollbar-hide">
          {navLinks.map((link) => {
            const isOpen = !!openGroups[link.label];
            const toggleGroup = () => {
              setOpenGroups((prev) => ({
                ...prev,
                [link.label]: !prev[link.label],
              }));
            };

            return (
              <div key={`${link.label}-${link.href}`} className="border-b-2 border-white/60 py-2 last:border-b-0">
                {link.children ? (
                  <>
                    <button
                      type="button"
                      className="flex w-full items-center justify-between rounded-2xl border border-transparent bg-transparent px-4 py-4 text-left text-sm font-semibold text-white transition-colors duration-150 hover:bg-white/10 focus:outline-none focus-visible:outline-none focus:ring-0"
                      onClick={toggleGroup}
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
                              setOpenGroups({});
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
                    onClick={() => {
                      setOpen(false);
                      setOpenGroups({});
                    }}
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
          onClick={() => {
            setOpen(false);
            setOpenGroups({});
          }}
          className="fixed right-0 z-20 bg-black/40"
          style={{ top: headerHeight, bottom: 0, left: 0 }}
          aria-label="Close navigation overlay"
        />
      ) : null}
    </header>
  );
}
