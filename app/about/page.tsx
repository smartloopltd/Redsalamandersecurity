export default function About() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
      <div className="rounded-[2rem] border border-red-200 bg-white p-10 shadow-xl shadow-red-200/40">
        <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
          About Red Salamader Security
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          Red Salamader Security is a trusted security company focused on threat detection, incident response, and continuous protection for complex organizations.
          Our team combines advanced monitoring with expert security operations to keep your people and data safe.
        </p>
        <div className="mt-10 space-y-6 text-slate-700">
          <p>
            We build security programs that scale with your business, from proactive risk assessments to managed detection and response.
          </p>
          <p>
            Every page reflects our commitment to clarity, reliability, and operational confidence in the face of evolving cyber threats.
          </p>
        </div>
      </div>
    </section>
  );
}
