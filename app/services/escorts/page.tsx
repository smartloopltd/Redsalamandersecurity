import Link from "next/link";
import BlankHeroSection from "../../components/BlankHeroSection";

export default function EscortsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <BlankHeroSection
        eyebrow="What we do"
        title="Escorts"
        subtitle="We provide armed and unarmed escort support for secure movement, asset protection, and controlled transit across demanding environments."
      />

      <section className="mx-auto flex max-w-4xl flex-col gap-8 px-6 py-16 sm:px-8 lg:px-12">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-950">Secure movement with discretion</h2>
          <p className="max-w-3xl text-lg leading-8 text-slate-700">
            Our escort services are designed to preserve safety, discretion, and pace while supporting clients in sensitive or high-risk situations.
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
