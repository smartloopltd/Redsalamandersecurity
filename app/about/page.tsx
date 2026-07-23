import Image from "next/image";
import aboutHeroImage from "../img/img2/about_hero_section.jpg";

export default function About() {
  return (
    <>
      <section className="relative w-full overflow-hidden">
        <div className="relative w-full h-[60vh] lg:h-[85vh] xl:h-[90vh] min-h-[550px] overflow-hidden">
          <Image
            src={aboutHeroImage}
            alt="About hero section"
            fill
            className="w-full h-full object-cover object-top md:object-center"
            sizes="100vw"
            priority
          />
        </div>

        <div className="absolute inset-0 flex items-center bg-black/30">
          <div className="mx-auto w-full max-w-6xl px-6 py-10 text-white sm:px-8">
            <div className="max-w-3xl p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-red-200">
                About us
              </p>
              <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
                Total security coverage with unmatched experience
              </h1>
              <p className="mt-4 text-base leading-7 text-slate-100 sm:text-lg">
                Our team delivers end-to-end protection for people and assets, provides expert crowd control, and deploys advanced surveillance solutions across diverse environments and industries.
              </p>
            </div>
          </div>
        </div>
      </section>

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
    </>
  );
}
