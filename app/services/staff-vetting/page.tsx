import Link from "next/link";

export default function StaffVettingPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="mx-auto flex max-w-4xl flex-col gap-8 px-6 py-20 sm:px-8 lg:px-12">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-600">What we do</p>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">Staff Vetting</h1>
          <p className="max-w-3xl text-lg leading-8 text-slate-700">
            We support employers with careful screening, background review, and due diligence processes that strengthen hiring decisions.
          </p>
        </div>

        <div className="space-y-4 text-slate-700">
          <p>Our vetting approach helps organizations build confidence in the people they recruit, assign, or trust with sensitive responsibilities.</p>
        </div>

        <div className="flex flex-wrap gap-4 text-sm font-semibold text-red-600">
          <Link href="/contact" className="hover:text-red-700">Contact our team</Link>
          <Link href="/about" className="hover:text-red-700">Learn about Red Salamander</Link>
        </div>
      </section>
    </main>
  );
}
