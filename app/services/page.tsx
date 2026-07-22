export default function Services() {
  return (
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
  );
}
