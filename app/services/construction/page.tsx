import Link from "next/link";

export default function ConstructionPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="mx-auto flex max-w-4xl flex-col gap-8 px-6 py-20 sm:px-8 lg:px-12">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-600">What we do</p>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">Construction Security</h1>
          <p className="max-w-3xl text-lg leading-8 text-slate-700">
            We protect active construction environments with practical security that supports progress, access control, and the safety of people and assets.
          </p>
        </div>

        <div className="space-y-4 text-slate-700">
          <p>Our construction support helps keep projects on track by reducing risk around entry points, materials, crews, and evolving site conditions.</p>
        </div>

        <div className="flex flex-wrap gap-4 text-sm font-semibold text-red-600">
          <Link href="/contact" className="hover:text-red-700">Contact our team</Link>
          <Link href="/about" className="hover:text-red-700">Learn about Red Salamander</Link>
        </div>
      </section>
    </main>
  );
}
