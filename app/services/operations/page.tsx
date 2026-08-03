import Link from "next/link";
import BlankHeroSection from "../../components/BlankHeroSection";

export default function OperationsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <BlankHeroSection
        eyebrow="What we do"
        title="Operations & Logistics"
        subtitle="We support movement-heavy operations with practical security and logistics coordination that preserves continuity and control."
      />

      <section className="mx-auto flex max-w-4xl flex-col gap-8 px-6 py-16 sm:px-8 lg:px-12">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-950">Keeping operations moving safely</h2>
          <p className="max-w-3xl text-lg leading-8 text-slate-700">
            Our support helps clients maintain reliable operating rhythms even in complex, time-sensitive, or high-demand circumstances.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 text-sm font-semibold text-red-600">
          <Link href="/contact" className="hover:text-red-700">Contact our team</Link>
          <Link href="/about" className="hover:text-red-700">Learn about Red Salamander</Link>
        </div>
      </section>
    </main>
  );
}
