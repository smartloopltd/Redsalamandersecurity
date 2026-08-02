import Link from "next/link";

export default function ExecutiveTravelPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="mx-auto flex max-w-4xl flex-col gap-8 px-6 py-20 sm:px-8 lg:px-12">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-600">What we do</p>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">Executive Travel Security</h1>
          <p className="max-w-3xl text-lg leading-8 text-slate-700">
            We provide discreet, reliable protection for executives, travellers, and high-value movements where timing, discretion, and calm decision-making matter most.
          </p>
        </div>

        <div className="space-y-4 text-slate-700">
          <p>Our support includes secure transport planning, route assessment, close protection coordination, and responsive operational oversight for sensitive travel requirements.</p>
          <p>Every engagement is shaped around the client’s environment, schedule, and risk profile so the experience remains calm and dependable.</p>
        </div>

        <div className="flex flex-wrap gap-4 text-sm font-semibold text-red-600">
          <Link href="/contact" className="hover:text-red-700">Contact our team</Link>
          <Link href="/about" className="hover:text-red-700">Learn about Red Salamander</Link>
        </div>
      </section>
    </main>
  );
}
