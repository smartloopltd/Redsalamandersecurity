import Image from "next/image";
import serviceHeroImage from "../img/img2/service_hero_section.jpg";

export default function Services() {
  return (
    <div className="flex flex-col">
      <div className="relative w-full h-[60vh] lg:h-[85vh] xl:h-[90vh] min-h-[550px] overflow-hidden">
        <Image
          src={serviceHeroImage}
          alt="Services hero section"
          fill
          sizes="100vw"
          className="w-full h-full object-cover object-top"
          priority
        />

        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-6xl px-6 py-10 text-white sm:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-red-200">
                What we do
              </p>
              <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
                Complete, unrivaled security expertise
              </h1>
              <p className="mt-4 text-base leading-7 text-slate-100 sm:text-lg">
                We provide complete asset and personnel protection, crowd control, and surveillance technology for a wide range of environments and industries.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div className="rounded-[2rem] border border-red-200 bg-white p-10 shadow-xl shadow-red-200/40">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Security Services
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            We provide end-to-end security services, from threat detection and incident response to risk assessments and compliance support.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Managed Detection & Response",
                description: "Continuous monitoring and rapid response to contain threats before they escalate.",
              },
              {
                title: "Risk Assessment",
                description: "Identify gaps, prioritize vulnerabilities, and build a stronger security posture.",
              },
              {
                title: "Security Architecture",
                description: "Design secure systems and processes that support resilient business operations.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-3xl border border-red-100 bg-red-50 p-6">
                <h2 className="text-xl font-semibold text-slate-950">{item.title}</h2>
                <p className="mt-3 text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
