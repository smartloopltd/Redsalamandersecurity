import HeroSlider from "./components/HeroSlider";

export default function Home() {
  return (
    <>
      <HeroSlider />

      <section className="mx-auto max-w-7xl px-6 py-12 sm:px-8">
        <div className="mx-auto max-w-4xl space-y-6 bg-transparent p-0 text-slate-950">
          <p className="text-sm uppercase tracking-[0.35em] text-red-600">What we do</p>
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Red Salamader Security delivers practical, mission-ready protection with proactive monitoring, fast incident response, and resilient operations.
          </h2>
          <p className="max-w-3xl text-lg leading-8 text-slate-600">
            We safeguard people and assets with continuous oversight, decisive action, and security services designed for complex organizations. Our team reduces exposure across digital and physical environments, responds quickly when risks emerge, and builds stronger controls that keep your operations running reliably.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 sm:px-8">
        <div className="mx-auto max-w-4xl space-y-6 bg-transparent p-0 text-slate-950">
          <p className="text-sm uppercase tracking-[0.35em] text-red-600">Who we serve</p>
          <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Organizations that rely on dependable protection for people, property, and operations.
          </h3>
          <ul className="max-w-3xl space-y-4 text-lg leading-8 text-slate-600 list-none p-0">
            <li>Leadership teams and security operations groups seeking steady oversight, faster response, and clear operational control.</li>
            <li>Businesses protecting critical facilities, digital systems, and sensitive infrastructure across corporate campuses and remote sites.</li>
            <li>Regulated organizations needing practical compliance support, vendor management, and consistent policy execution.</li>
            <li>Facilities and executive protection teams requiring secure access, crowd management, and on-site incident coordination.</li>
            <li>Enterprises that want aligned protection across physical, operational, and information environments.</li>
          </ul>
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
