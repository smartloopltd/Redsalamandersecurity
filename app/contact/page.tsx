export default function Contact() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
      <div className="rounded-[2rem] border border-red-200 bg-white p-10 shadow-xl shadow-red-200/40">
        <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
          Contact
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          Ready to strengthen your defense posture? Reach out with your security requirements and we’ll connect you with a tailored protection plan.
        </p>
        <div className="mt-10 space-y-6 text-slate-700">
          <div>
            <h2 className="text-xl font-semibold">Email</h2>
            <p className="mt-2 text-slate-600">security@redsalamader.example</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Phone</h2>
            <p className="mt-2 text-slate-600">+1 (555) 1234567</p>
          </div>
        </div>
      </div>
    </section>
  );
}
