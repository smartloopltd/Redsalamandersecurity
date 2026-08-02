import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Red Salamader Security",
  description: "A security services website offering threat detection, incident response, and managed protection.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-950">
        <div className="flex min-h-full flex-col">
          <Header />

          <main className="flex-1">{children}</main>

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
                  <Link href="/" className="transition hover:text-white/80">Home</Link>
                  <Link href="/about" className="transition hover:text-white/80">Who we are</Link>
                  <span className="text-white/80">What we do</span>
                  <Link href="/features" className="transition hover:text-white/80">Carriers & Employment</Link>
                  <Link href="/contact" className="transition hover:text-white/80">Contact</Link>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-red-100">
                  Contact
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
        </div>
      </body>
    </html>
  );
}
