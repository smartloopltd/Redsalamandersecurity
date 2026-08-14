import BlankHeroSection from "../components/BlankHeroSection";

export default function Features() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <BlankHeroSection
        eyebrow="Join us"
        title="Working at Red Salamander Security Operations"
        subtitle="We welcome professionals who value discipline, professionalism, and dependable service. At Red Salamander Security Operations, our team supports clients with calm judgment, strong execution, and a people-first approach to protection."
      />

      <section className="mx-auto flex max-w-4xl flex-col gap-8 px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-600">
            Join us
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Working at Red Salamander Security Operations
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-slate-700">
            We welcome professionals who value discipline, professionalism, and dependable service. At Red Salamander Security Operations, our team supports clients with calm judgment, strong execution, and a people-first approach to protection.
          </p>
        </div>

        <div className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-950">What we look for</h2>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-3 leading-7">
                <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-red-600" />
                <span>Professionals with strong situational awareness, integrity, and a calm approach under pressure.</span>
              </li>
              <li className="flex items-start gap-3 leading-7">
                <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-red-600" />
                <span>Team members who understand the importance of discretion, accountability, and reliable communication.</span>
              </li>
              <li className="flex items-start gap-3 leading-7">
                <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-red-600" />
                <span>Individuals committed to protecting people, property, and operations with professionalism at every step.</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-950">Why join us</h2>
            <p className="max-w-3xl text-lg leading-8 text-slate-700">
              We offer a workplace shaped by respect, responsibility, and purpose. Whether you are building experience in security operations or bringing specialist expertise, you will find a team that values competence, preparation, and service.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
