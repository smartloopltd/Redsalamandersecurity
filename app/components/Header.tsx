"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "./navLinks";

export default function Header() {
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement | null>(null);
  const [desktopOpenMenu, setDesktopOpenMenu] = useState<string | null>(null);
  const [mobileOpenMenu, setMobileOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const isActivePath = (href: string) => pathname === href || pathname.startsWith(`${href}/`);
  const isGroupActive = (link: (typeof navLinks)[number]) =>
    link.children?.some((child) => isActivePath(child.href)) ?? false;

  const suggestions = Array.from(
    new Set(
      navLinks.flatMap((link) => [
        link.label,
        ...(link.children?.map((child) => child.label) ?? []),
      ])
    )
  );

  const filteredSuggestions = suggestions.filter((suggestion) =>
    suggestion.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const closeAllPanels = useCallback(() => {
    setDesktopOpenMenu(null);
    setMobileOpen(false);
    setMobileSearchOpen(false);
    setMobileOpenMenu(null);
  }, []);

  useEffect(() => {
    const activeLink = navLinks.find((link) => isGroupActive(link));
    if (activeLink) {
      setDesktopOpenMenu(activeLink.label);
      setMobileOpenMenu(activeLink.label);
    } else {
      setDesktopOpenMenu(null);
      setMobileOpenMenu(null);
    }
  }, [pathname]);

  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      if (
        navRef.current &&
        event.target instanceof Node &&
        !navRef.current.contains(event.target)
      ) {
        setDesktopOpenMenu(null);
      }
    };

    document.addEventListener("mousedown", handleDocumentClick);
    window.addEventListener("closeMobilePanels", closeAllPanels);

    return () => {
      document.removeEventListener("mousedown", handleDocumentClick);
      window.removeEventListener("closeMobilePanels", closeAllPanels);
    };
  }, [closeAllPanels]);

  const mobilePanelFooter = (
    <div className="space-y-4 border-t border-white/15 pt-6 text-slate-100">
      <Link href="/" className="block" onClick={closeAllPanels}>
        <span className="block text-[0.78rem] font-extrabold leading-tight tracking-tight uppercase text-white">
          Red Salamander
        </span>
        <span className="block -mt-1 text-[0.6rem] font-light tracking-[0.22em] uppercase text-white">
          SECURITY
        </span>
      </Link>

      <p className="max-w-md text-sm leading-5 text-slate-200">
        <span className="block">Dependable protection</span>
        <span className="block">and calm operations</span>
      </p>

      <div className="text-sm leading-5 text-slate-200">
        Digital Solutions by
        <span className="mt-1 block leading-tight uppercase text-white">
          <span className="block text-[0.7rem] font-extrabold tracking-[0.24em] sm:text-[0.78rem] md:text-[0.95rem]">
            Smartloop
          </span>
          <span className="mt-1 block text-[0.62rem] font-light tracking-[0.24em] sm:text-[0.68rem] md:text-[0.8rem]">
            Limited
          </span>
        </span>
      </div>

      <p className="text-sm leading-5 text-red-100">
        © 2026 Red Salamander Security. Trusted protection for modern enterprises.
      </p>
    </div>
  );

  return (
    <header className="fixed left-0 right-0 top-0 z-50 w-full bg-gradient-to-b from-red-600 via-red-700 to-red-800 text-white">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-4 sm:px-8">
        <Link href="/" onClick={closeAllPanels} className="inline-flex flex-col items-start gap-0 font-extrabold tracking-tight text-white">
          <span className="block text-[0.78rem] sm:text-sm md:text-xl font-extrabold leading-tight tracking-tight uppercase text-white">
            Red Salamander
          </span>
          <span className="block -mt-1 text-[0.6rem] sm:text-xs md:text-sm font-light tracking-[0.22em] uppercase text-red-200">
            SECURITY
          </span>
        </Link>

        <div className="flex items-center gap-1 lg:gap-2">
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-white text-red-700 transition hover:bg-slate-100"
            onClick={() => {
              setMobileSearchOpen((current) => !current);
              setMobileOpen(false);
            }}
            aria-expanded={mobileSearchOpen}
            aria-label="Open search"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5">
              <circle cx="11" cy="11" r="7" strokeWidth="2" />
              <path d="M16.65 16.65L21 21" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-white/20 bg-white/10 p-2 text-white transition hover:bg-white/15 lg:hidden"
            onClick={() => {
              setMobileOpen((current) => !current);
              setMobileSearchOpen(false);
            }}
            aria-expanded={mobileOpen}
            aria-label="Open menu"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5">
              {mobileOpen ? (
                <path d="M6 6l12 12M6 18L18 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              ) : (
                <>
                  <path d="M4 7h16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M4 12h16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M4 17h16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </>
              )}
            </svg>
          </button>

          <nav ref={navRef} className="hidden items-center gap-3 text-sm font-medium text-white lg:flex">
            {navLinks.map((link, index) => {
              const alignRight = index >= navLinks.length - 2;

              return (
                <div key={link.label} className="relative">
                  {link.children ? (
                    <>
                      <button
                        type="button"
                        onClick={() => setDesktopOpenMenu((current) => (current === link.label ? null : link.label))}
                        aria-expanded={desktopOpenMenu === link.label}
                        aria-current={isGroupActive(link) ? "page" : undefined}
                        className={`inline-flex items-center gap-1 rounded-sm px-2 py-1 transition ${desktopOpenMenu === link.label || isGroupActive(link) ? "bg-white/10 text-white font-semibold shadow-sm shadow-white/10" : "text-white hover:text-red-200 hover:bg-white/10"}`}
                      >
                        {link.label}
                        <span className="text-xs">▾</span>
                      </button>

                      <div
                        className={`absolute top-full z-50 mt-2 w-max min-w-[220px] max-w-[calc(100vw-2rem)] whitespace-nowrap overflow-hidden rounded-none border border-slate-900/10 bg-white text-slate-950 shadow-lg transition duration-150 ${
                          alignRight ? "right-0 left-auto" : "left-0"
                        } ${desktopOpenMenu === link.label ? "opacity-100 visible" : "opacity-0 invisible"}`}
                      >
                        <div className="space-y-1 p-2 max-h-[70vh] overflow-y-auto">
                          {link.children.map((child) => (
                            <Link
                              key={`${link.label}-${child.label}`}
                              href={child.href}
                              aria-current={isActivePath(child.href) ? "page" : undefined}
                              className={`block px-4 py-2.5 whitespace-nowrap text-sm transition ${isActivePath(child.href) ? "bg-red-50 font-semibold text-red-700" : "text-slate-700 hover:bg-red-50 hover:text-red-700"}`}
                              onClick={() => setDesktopOpenMenu(null)}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link href={link.href} className="transition hover:text-red-200">
                      {link.label}
                    </Link>
                  )}
                </div>
              );
            })}
          </nav>
        </div>
      </div>

      <div className={`fixed inset-x-0 top-[4.5rem] bottom-0 z-40 flex flex-col bg-red-700/95 transform transition-transform duration-300 ease-out ${mobileSearchOpen ? "translate-x-0 opacity-100 visible pointer-events-auto" : "translate-x-full opacity-0 invisible pointer-events-none"}`}>
        <div className="flex-1 overflow-y-auto px-6 py-6">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 rounded-md border border-white/15 bg-white px-3 py-2">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5 text-slate-950">
                <circle cx="11" cy="11" r="7" strokeWidth="2" />
                <path d="M16.65 16.65L21 21" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <input
                type="search"
                placeholder="Search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                className="w-full bg-transparent text-slate-950 outline-none placeholder:text-slate-500"
              />
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-red-700 text-white transition hover:bg-red-800"
                aria-label="Submit search"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5">
                  <path d="M5 12h14" strokeWidth="2" strokeLinecap="round" />
                  <path d="M13 6l6 6-6 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            {searchQuery.trim().length > 0 ? (
              <div className="space-y-3 text-slate-950">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">Suggested searches</p>
                <div className="grid gap-1">
                  {filteredSuggestions.map((suggestion) => (
                    <button
                      key={suggestion}
                      type="button"
                      onClick={() => setSearchQuery(suggestion)}
                      className="w-full rounded-none bg-white px-4 py-3 text-left text-sm font-medium text-slate-900 transition hover:bg-slate-100"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>

        <div className="px-6 pb-6">
          {mobilePanelFooter}
        </div>
      </div>

      <div className={`fixed inset-x-0 top-[4.5rem] bottom-0 z-40 flex flex-col bg-red-700/95 lg:hidden transform transition-transform duration-300 ease-out ${mobileOpen ? "translate-x-0 opacity-100 visible pointer-events-auto" : "translate-x-full opacity-0 invisible pointer-events-none"}`}>
        <div className="flex-1 overflow-y-auto px-6 pb-6 pt-2">
          <div className="space-y-3">
            {navLinks.map((link) => (
              <div key={link.label} className="space-y-1 rounded-none border-b border-red-700/30 pb-3 last:border-b-0 last:pb-0">
                {link.children ? (
                  <>
                    <button
                      type="button"
                      onClick={() => setMobileOpenMenu((current) => (current === link.label ? null : link.label))}
                      aria-current={isGroupActive(link) ? "page" : undefined}
                      className={`flex w-full items-center justify-between rounded-sm px-2 py-2 text-left text-sm font-semibold transition ${isGroupActive(link) ? "bg-white/15 text-white" : "text-white hover:bg-white/10 hover:text-red-200"}`}
                    >
                      {link.label}
                      <span className="text-xs">{mobileOpenMenu === link.label ? "▴" : "▾"}</span>
                    </button>
                    {mobileOpenMenu === link.label ? (
                      <div className="mt-2 space-y-1 pl-4">
                        {link.children.map((child) => (
                          <Link
                            key={`${link.label}-${child.label}`}
                            href={child.href}
                            aria-current={isActivePath(child.href) ? "page" : undefined}
                            className={`block rounded-lg px-3 py-2 text-sm transition ${isActivePath(child.href) ? "bg-white/15 font-semibold text-white" : "text-slate-100 hover:bg-red-600"}`}
                            onClick={() => {
                              setMobileOpen(false);
                              setMobileOpenMenu(null);
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
                    className="block rounded-lg px-3 py-2 text-sm text-white transition hover:bg-red-600"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="px-6 pb-6">
          {mobilePanelFooter}
        </div>
      </div>
    </header>
  );
}
