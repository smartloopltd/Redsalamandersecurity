"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Features", href: "/features" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative overflow-visible bg-red-600 text-white shadow-lg shadow-red-600/20">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Link href="/" className="text-2xl font-bold tracking-tight">
            Red Salamader Security
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-transparent text-white transition border-none outline-none focus:outline-none focus-visible:outline-none focus:ring-0 focus-visible:ring-0 shadow-none"
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
        <div className="space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block rounded-2xl border border-transparent bg-transparent px-4 py-4 text-sm font-semibold text-white transition-colors duration-150 focus:outline-none focus-visible:outline-none focus:ring-0 hover:border-white/20 focus:border-white/20"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
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
