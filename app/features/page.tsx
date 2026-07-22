export default function Features() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
      <div className="rounded-[2rem] border border-red-200 bg-white p-10 shadow-xl shadow-red-200/40">
        <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
          Security Capabilities
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          Red Salamader Security offers integrated capabilities for threat detection, response, and secure operations.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {[
            {
              title: "24/7 Monitoring",
              description: "Around-the-clock detection to spot suspicious activity before it affects your business.",
            },
            {
              title: "Rapid Incident Response",
              description: "Swift containment and recovery when threats are discovered.",
            },
            {
              title: "Compliance Support",
              description: "Guidance on security controls and reporting to meet regulatory demands.",
            },
            {
              title: "Secure Architecture",
              description: "Strategic design and implementation of robust, resilient defenses.",
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
