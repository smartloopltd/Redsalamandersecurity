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
            <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-3">
                <Link href="/" className="text-2xl font-bold tracking-tight text-white">
                  Red Salamader Security
                </Link>
                <p className="text-sm text-red-100">© 2026 Red Salamader Security. Trusted protection for modern enterprises.</p>
              </div>
              <div className="flex flex-wrap items-center gap-4 text-sm sm:gap-6">
                <Link href="/" className="transition hover:text-red-200">Home</Link>
                <Link href="/about" className="transition hover:text-red-200">About</Link>
                <Link href="/services" className="transition hover:text-red-200">Services</Link>
                <Link href="/features" className="transition hover:text-red-200">Features</Link>
                <Link href="/contact" className="transition hover:text-red-200">Contact</Link>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
