import Image from "next/image";
import aboutHeroImage from "../img/img2/about_hero_section.jpg";

export default function About() {
  return (
    <div className="flex flex-col bg-white text-slate-950">
      <section className="w-full bg-neutral-950 text-white">
        <div className="relative overflow-hidden md:hidden">
          <div className="relative h-[500px] w-full sm:h-[560px]">
            <Image
              src={aboutHeroImage}
              alt="About hero section"
              fill
              className="h-full w-full object-cover object-center"
              sizes="100vw"
              priority
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
            <div className="absolute inset-0 flex items-center">
              <div className="mx-auto w-full max-w-6xl px-6 py-10 text-white sm:px-8">
                <div className="max-w-3xl">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-red-200">
                    About us
                  </p>
                  <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                    Security, logistics, and operations built on trust.
                  </h1>
                  <p className="mt-4 max-w-2xl text-base leading-7 text-slate-100 sm:text-lg">
                    Red Salamander Operations, Nigeria Ltd delivers dependable support across security, logistics, and practical business operations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:block">
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-6 py-12 lg:grid-cols-2 lg:px-8">
            <div className="bg-neutral-950 px-2 py-4 lg:px-4">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-red-200">
                About us
              </p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-white lg:text-5xl">
                Security, logistics, and operations built on trust.
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300 lg:text-lg">
                Red Salamander Operations, Nigeria Ltd delivers dependable support across security, logistics, and practical business operations.
              </p>
            </div>

            <div className="relative h-[450px] w-full overflow-hidden rounded-2xl lg:h-[550px]">
              <Image
                src={aboutHeroImage}
                alt="About hero section"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1023px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-24">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-600">
            Who we are
          </p>
          <h2 className="max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl">
            A professional operations company committed to protecting people, assets, and continuity.
          </h2>
          <p className="max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            Red Salamander Operations, Nigeria Ltd is a security and support-focused company built to serve organizations that require reliable protection, disciplined execution, and practical operational assistance. Our work reflects a clear commitment to professionalism, responsiveness, and long-term value.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-16 sm:pb-24">
        <div className="space-y-7">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-600">
            What we do
          </p>
          <h2 className="max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Delivering practical support across the core areas clients depend on most.
          </h2>
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-5">
              <p className="text-base leading-8 text-slate-600 sm:text-lg">
                We provide professional security services designed to protect people, premises, and assets through dependable guard deployment, escort support, and safety-focused consultancy. These services are rooted in discipline, visibility, and a strong sense of responsibility.
              </p>
              <p className="text-base leading-8 text-slate-600 sm:text-lg">
                Beyond security, our operational work extends into logistics, procurement, and broader business support that helps clients maintain continuity and stay responsive in demanding environments.
              </p>
            </div>

            <div className="space-y-5">
              <p className="text-base leading-8 text-slate-600 sm:text-lg">
                From on-site protection to practical service delivery, our role is to help clients move forward with greater confidence, better oversight, and stronger day-to-day resilience.
              </p>
              <p className="text-base leading-8 text-slate-600 sm:text-lg">
                We believe dependable performance is built through clear standards, consistent execution, and the ability to respond effectively when operations matter most.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-24 sm:pb-32">
        <div className="max-w-4xl space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-600">
            Our approach
          </p>
          <p className="text-base leading-8 text-slate-600 sm:text-lg">
            At Red Salamander Operations, we align our services with the realities of the environments our clients operate in. Every engagement is guided by professionalism, practical judgement, and a commitment to delivering dependable support where it is needed most.
          </p>
        </div>
      </section>
    </div>
  );
}
