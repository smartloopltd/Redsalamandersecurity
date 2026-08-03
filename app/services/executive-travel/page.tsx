import Link from "next/link";
import BlankHeroSection from "../../components/BlankHeroSection";

export default function ExecutiveTravelPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <BlankHeroSection
        eyebrow="What we do"
        title="Executive Travel Security"
        subtitle="We provide discreet, reliable protection for executives, travellers, and high-value movements where timing, discretion, and calm decision-making matter most."
      />

      <section className="mx-auto flex max-w-4xl flex-col gap-8 px-6 py-16 sm:px-8 lg:px-12">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-950">Travel protection designed around your schedule</h2>
          <p className="max-w-3xl text-lg leading-8 text-slate-700">
            Our support includes secure transport planning, route assessment, close protection coordination, and responsive operational oversight for sensitive travel requirements.
          </p>
          <p className="max-w-3xl text-lg leading-8 text-slate-700">
            Every engagement is shaped around the client’s environment, schedule, and risk profile so the experience remains calm and dependable.
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
