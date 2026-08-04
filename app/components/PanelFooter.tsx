"use client";

import Link from "next/link";

type PanelFooterProps = {
  className?: string;
  onBrandClick?: () => void;
};

export default function PanelFooter({ className = "", onBrandClick }: PanelFooterProps) {
  return (
    <div
      className={`w-full px-6 py-4 mt-auto shrink-0 relative z-10 bg-transparent text-slate-100 space-y-3 ${className}`}
    >
      <div className="space-y-1">
        <Link
          href="/"
          className="block max-w-[12rem] whitespace-normal break-words"
          onClick={onBrandClick}
        >
          <span className="block text-[0.88rem] font-extrabold leading-tight tracking-tight uppercase">
            Red Salamander
          </span>
          <span className="block -mt-1 text-[0.68rem] font-light tracking-[0.28em] uppercase">
            SECURITY
          </span>
        </Link>
      </div>

      <div className="space-y-3">
        <p className="max-w-[18rem] text-left leading-6 text-white/90 sm:max-w-[24rem] md:max-w-[26rem] lg:max-w-[28rem]">
          We provide trusted security, logistics, and consultancy support for organizations that value dependable protection and calm operational continuity.
        </p>

        <p className="max-w-[18rem] text-left text-sm leading-6 text-white/90 sm:max-w-[24rem] md:max-w-[26rem] lg:max-w-[28rem]">
          Digital Solutions by
          <span className="mt-1 block leading-tight uppercase text-white">
            <span className="block text-[0.7rem] font-extrabold tracking-[0.24em] sm:text-[0.78rem] md:text-[0.95rem]">
              Smartloop
            </span>
            <span className="mt-1 block text-[0.62rem] font-light tracking-[0.24em] sm:text-[0.68rem] md:text-[0.8rem]">
              Limited
            </span>
          </span>
        </p>
      </div>

      <p className="max-w-[18rem] text-left text-sm leading-5 text-white/80 sm:max-w-[24rem] md:max-w-[26rem] lg:max-w-[28rem]">
        © 2026 Red Salamander Security. Trusted protection for modern enterprises.
      </p>
    </div>
  );
}
