import Image from "next/image";
import aboutHeroImage from "../../img/img2/about_hero_section.jpg";

export default function AboutProject() {
  return (
    <div className="flex flex-col bg-white text-slate-950">
      <section className="w-full bg-neutral-950 text-white">
        <div className="relative overflow-hidden md:hidden">
          <div className="relative h-[500px] w-full sm:h-[560px]">
            <Image
              src={aboutHeroImage}
              alt="Our project hero section"
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
                    Our project
                  </p>
                  <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                    Projects designed to improve security, logistics, and operational resilience.
                  </h1>
                  <p className="mt-4 max-w-2xl text-base leading-7 text-slate-100 sm:text-lg">
                    We deliver defined projects that enhance protection, support continuity, and streamline field operations for demanding environments.
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
                Our project
              </p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-white lg:text-5xl">
                Projects designed to improve security, logistics, and operational resilience.
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300 lg:text-lg">
                We deliver defined projects that enhance protection, support continuity, and streamline field operations for demanding environments.
              </p>
            </div>

            <div className="relative h-[450px] w-full overflow-hidden rounded-2xl lg:h-[550px]">
              <Image
                src={aboutHeroImage}
                alt="Our project hero section"
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
            Project focus
          </p>
          <h2 className="max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Tactical projects that strengthen operational performance.
          </h2>
          <p className="max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            Our projects are tailored to deliver targeted improvements in safety, logistics, and mission-critical operations. Each project is scoped to practical goals and executed with clear timelines, strong oversight, and measurable impact.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-24 sm:pb-32">
        <div className="space-y-7">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-600">
            What we deliver
          </p>
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-5">
              <p className="text-base leading-8 text-slate-600 sm:text-lg">
                From process optimization to security system rollouts, our projects are designed to deliver dependable, practical value.
              </p>
              <p className="text-base leading-8 text-slate-600 sm:text-lg">
                We focus on solutions that improve clarity, reduce risk, and maintain continuity in complex environments.
              </p>
            </div>

            <div className="space-y-5">
              <p className="text-base leading-8 text-slate-600 sm:text-lg">
                Each project is supported by experienced oversight, quality assurance, and the operational discipline clients expect from Red Salamander.
              </p>
              <p className="text-base leading-8 text-slate-600 sm:text-lg">
                This approach ensures every engagement delivers the tangible outcomes our clients need.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
