import HeroSlider from "./components/HeroSlider";

export default function Home() {
  return (
    <>
      <HeroSlider />

      <section className="mx-auto max-w-7xl px-6 py-12 sm:px-8">
        <div className="mx-auto max-w-4xl space-y-6 bg-transparent p-0 text-slate-950">
          <p className="text-sm uppercase tracking-[0.35em] text-red-600">What we do</p>
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Red Salamader Security delivers a focused defense posture with proactive threat monitoring, rapid incident response, and enterprise grade resilience.
          </h2>
          <p className="max-w-3xl text-lg leading-8 text-slate-600">
            We protect your critical systems and data with continuous threat detection, hands on incident action, and strategic security operations tailored for enterprise risk. Our team helps reduce exposure across cloud, network, and application environments, provides real-time escalation when suspicious activity appears, and embeds security controls that make your business harder to breach.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 sm:px-8">
        <div className="mx-auto max-w-4xl space-y-6 bg-transparent p-0 text-slate-950">
          <p className="text-sm uppercase tracking-[0.35em] text-red-600">Who we serve</p>
          <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Organizations that need end to end protection for digital and physical operations.
          </h3>
          <ul className="max-w-3xl space-y-4 text-lg leading-8 text-slate-600 list-none p-0">
            <li>Security leaders and SOC teams seeking consistent threat visibility, rapid detection, and threat hunting support.</li>
            <li>Technology organizations and estates protecting critical infrastructure, cloud estates, and sensitive data stores.</li>
            <li>Compliance minded businesses that need reliable audit ready controls, vendor oversight, and policy enforcement.</li>
            <li>Facilities and executive protection teams requiring physical security planning, access control, and on site incident response.</li>
            <li>Enterprises that want unified defense across cyber, facility, and operational security environments.</li>
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 sm:px-8">
        <div className="mx-auto max-w-4xl space-y-8 p-0 text-slate-950 sm:p-0">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.35em] text-red-600">Our track record</p>
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              High performing people across the continent
            </h2>
            <p className="max-w-3xl text-lg leading-8 text-slate-600">
              Discover why we are the best at what we do
            </p>
            <a href="#" className="inline-flex items-center gap-2 text-base font-semibold text-red-600 transition hover:text-red-700">
              Learn more
              <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            <div className="p-6 text-center">
              <p className="text-5xl font-semibold text-red-600">50K+</p>
              <p className="mt-4 text-base text-slate-700">Staff in Nigeria</p>
            </div>
            <div className="p-6 text-center">
              <p className="text-5xl font-semibold text-red-600">76+</p>
              <p className="mt-4 text-base text-slate-700">Offices in 27 States</p>
            </div>
            <div className="p-6 text-center">
              <p className="text-5xl font-semibold text-red-600">30</p>
              <p className="mt-4 text-base text-slate-700">Years in Business</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
