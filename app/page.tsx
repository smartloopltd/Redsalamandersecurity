import HeroSlider from "./components/HeroSlider";

export default function Home() {
  return (
    <>
      <HeroSlider />

      <section className="mx-auto max-w-7xl px-6 py-12 sm:px-8">
        <div className="mx-auto max-w-4xl space-y-6 bg-transparent p-0 text-slate-950">
          <p className="text-sm uppercase tracking-[0.35em] text-red-600">What we do</p>
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Red Salamader Security delivers practical, mission-ready protection with proactive monitoring and rapid response.
          </h2>
          <div className="max-w-3xl space-y-4 text-lg leading-8 text-slate-600">
            <p>
              We safeguard people and assets with continuous oversight, decisive action, and security services designed for complex organizations. Our team reduces exposure across digital and physical environments, responds quickly when risks emerge, and builds stronger controls that keep your operations running reliably.
            </p>
            <p>
              At Red Salamader Security, care is more than a value—it is the way we serve. We bring calm, commitment, and genuine attention to every duty, protecting what matters most with respect, vigilance, and a deep sense of responsibility.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 sm:px-8">
        <div className="mx-auto max-w-4xl space-y-6 bg-transparent p-0 text-slate-950">
          <p className="text-sm uppercase tracking-[0.35em] text-red-600">Who we serve</p>
          <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Organizations that rely on dependable protection for people, property, and operations.
          </h3>
          <ul className="max-w-3xl space-y-4 text-lg leading-8 text-slate-600 p-0">
            <li className="flex items-start gap-3">
              <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-red-600"></span>
              <span>Leadership teams and security operations groups seeking steady oversight, faster response, and clear operational control.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-red-600"></span>
              <span>Businesses protecting critical facilities, digital systems, and sensitive infrastructure across corporate campuses and remote sites.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-red-600"></span>
              <span>Regulated organizations needing practical compliance support, vendor management, and consistent policy execution.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-red-600"></span>
              <span>Facilities and executive protection teams requiring secure access, crowd management, and on-site incident coordination.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-red-600"></span>
              <span>Enterprises that want aligned protection across physical, operational, and information environments.</span>
            </li>
          </ul>
          <div className="max-w-3xl space-y-4 text-lg leading-8 text-slate-600">
            <p>
              Every client deserves protection that feels both dependable and personal. We build confidence by combining sharp operational discipline with a human approach that respects the pressure behind every decision.
            </p>
            <p>
              Whether the need is urgent, complex, or ongoing, our work is guided by care, consistency, and the belief that strong security should create peace of mind, not just control.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 sm:px-8">
        <div className="mx-auto max-w-4xl space-y-8 p-0 text-slate-950 sm:p-0">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.35em] text-red-600">Our track record</p>
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              High performing people across the Nation
            </h2>
            <p className="max-w-3xl text-lg leading-8 text-slate-600">
              Discover why we are the best at what we do
            </p>
            <a href="/why-we-are-the-best" className="inline-flex items-center gap-2 text-base font-semibold text-red-600 transition hover:text-red-700">
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
