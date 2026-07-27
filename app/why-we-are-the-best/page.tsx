import Image from "next/image";

export default function WhyWeAreTheBestPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="relative isolate overflow-hidden px-6 py-20 sm:px-8 sm:py-24 md:min-h-[460px] md:py-28 lg:min-h-[560px] lg:px-12 lg:py-36 xl:min-h-[680px]">
        <Image
          src="/img/img2/learn_more_page_hero_section.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "center 20%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/70 to-slate-950/50" />
        <div className="relative mx-auto flex min-h-[240px] max-w-7xl flex-col justify-center sm:min-h-[280px] md:min-h-[320px] lg:min-h-[380px]">
          <p className="text-sm uppercase tracking-[0.35em] text-red-400">Why we lead</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            High performing people across the Nation
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
            Discover why we are the best at what we do through a commitment to excellence, trust, and dependable protection.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="p-0 sm:p-0">
          <h2 className="mb-8 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Red Salamader Security combines practical protection, rapid response, and genuine care to help organizations stay safe, secure, and confident.
          </h2>
          <div className="space-y-8 text-lg leading-8 text-slate-600">
            <div>
              <p className="mb-2 text-xl font-semibold text-slate-900">Trusted Protection, Delivered with Care</p>
              <p>
                We are trusted because we combine discipline, experience, and genuine care in every assignment. Our team brings together skilled professionals who understand that strong security is not just about presence, but about preparedness, judgment, and calm execution under pressure.
              </p>
            </div>
            <div>
              <p className="mb-2 text-xl font-semibold text-slate-900">Excellence in Security, Rooted in Responsibility</p>
              <p>
                What sets us apart is our ability to adapt quickly to changing environments while staying focused on the bigger picture. We protect people, property, and operations with a practical approach that is both strategic and hands-on, ensuring that solutions are effective from day one.
              </p>
            </div>
            <div>
              <p className="mb-2 text-xl font-semibold text-slate-900">Protection You Can Count On</p>
              <p>
                We believe the best protection is built on trust, communication, and accountability. That is why our teams work closely with clients, respond with purpose, and deliver services that are dependable, measurable, and tailored to real-world needs.
              </p>
            </div>
            <div>
              <p className="mb-2 text-xl font-semibold text-slate-900">Where Discipline Meets Dedication</p>
              <p>
                At Red Salamader Security, excellence is not just a promise; it is a standard we live by every day. We are committed to helping organizations feel safe, supported, and confident, knowing that their security is in capable and caring hands.
              </p>
            </div>
            <div>
              <p className="mb-2 text-xl font-semibold text-slate-900">Security Built on Trust and Commitment</p>
              <p>
                Every mission we take on is guided by a deep sense of responsibility and respect for the people and assets we protect. We remain steady, responsive, and focused on delivering security that strengthens confidence and supports long-term success.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
