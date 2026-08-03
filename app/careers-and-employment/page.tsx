import BlankHeroSection from "../components/BlankHeroSection";

export default function CareersAndEmploymentPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <BlankHeroSection
        eyebrow="Careers and Employment"
        title="Build a career in trusted protection"
        subtitle="We are always interested in professionals who bring discipline, service, and strong judgement to demanding environments. Explore opportunities to grow with a team committed to reliability, professionalism, and calm execution."
      />

      <section className="mx-auto flex max-w-4xl flex-col gap-8 px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-600">
            Careers and Employment
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Build a career in trusted protection
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-slate-700">
            We are always interested in professionals who bring discipline, service, and strong judgement to demanding environments. Explore opportunities to grow with a team committed to reliability, professionalism, and calm execution.
          </p>
        </div>

        <div className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-950">What we value</h2>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-3 leading-7">
                <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-red-600" />
                <span>Professionalism, integrity, and a dependable approach to duty.</span>
              </li>
              <li className="flex items-start gap-3 leading-7">
                <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-red-600" />
                <span>Clear communication, teamwork, and calm decision-making under pressure.</span>
              </li>
              <li className="flex items-start gap-3 leading-7">
                <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-red-600" />
                <span>A service mindset focused on protecting people, property, and operations.</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-950">Join our team</h2>
            <p className="max-w-3xl text-lg leading-8 text-slate-700">
              If you are looking for meaningful work in a respected security organization, we invite you to connect with us and learn more about current opportunities.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
