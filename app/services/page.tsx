import Image from "next/image";
import serviceHeroImage from "../img/img2/service_hero_section.jpg";
import securityImage from "../img/hero2.jpg";
import operationsImage from "../img/hero3.jpg";

export default function Services() {
  return (
    <div className="flex flex-col bg-white text-slate-950">
      <section className="relative h-[500px] w-full overflow-hidden sm:h-[560px] md:h-[600px] lg:h-[70vh] lg:min-h-[540px]">
        <Image
          src={serviceHeroImage}
          alt="Services hero section"
          fill
          sizes="100vw"
          className="h-full w-full object-cover object-center"
          priority
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-6xl px-6 py-10 text-white sm:px-8 lg:px-10">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-red-200">
                What we do
              </p>
              <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                Professional support across security, logistics, and operations.
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-100 sm:text-lg lg:text-xl">
                Red Salamander Operations, Nigeria Ltd delivers dependable services designed to protect people, assets, and business continuity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-24">
        <div className="grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-600">
              Our focus
            </p>
            <h2 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
              Trusted operational support built around protection, movement, and continuity.
            </h2>
            <p className="max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
              We provide professional guard deployment, armed escort support, safety consultancy, and practical operational solutions that help clients protect their people, secure their assets, and maintain strong business performance in environments where reliability, discipline, and responsiveness matter.
            </p>
          </div>

          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src={securityImage}
              alt="Security operations"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-20 sm:pb-24">
        <div className="space-y-10">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-600">
              Core Security Services
            </p>
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Security services that balance protection with practical response.
            </h2>
            <p className="text-lg leading-8 text-slate-600">
              Our core security offerings are structured to strengthen safety, reduce risk, and support secure day-to-day operations.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start lg:gap-16">
            <div className="space-y-10">
              <div>
                <h3 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-[1.9rem]">
                  Guards&apos; Provisional Support
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                  Professional on-site guard deployment for premises, property, and asset protection, ensuring a visible and dependable layer of security for businesses, estates, facilities, and sensitive operational environments.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-[1.9rem]">
                  Armed Guards Escort Support
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                  Armed protection and tactical escort options for secure movement, monitored transit, and high-risk assignments where dependable protection and rapid response are essential.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-[1.9rem]">
                  Safety and Security Consultancy
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                  Risk analysis, site safety assessments, and tailored security recommendations that help clients identify vulnerabilities, strengthen operational readiness, and protect valuable assets more effectively.
                </p>
              </div>
            </div>

            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src={operationsImage}
                alt="Operational logistics support"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-24 pt-4 sm:pb-28 sm:pt-6">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-16">
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src={serviceHeroImage}
              alt="Additional operations"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>

          <div className="space-y-6">
            <h2 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
              Broader business support to keep your operations moving.
            </h2>
            <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Beyond security, we also provide practical support in transport, agribusiness, and hospitality-related operations, helping clients manage movement, supply continuity, and day-to-day operational needs with greater confidence.
            </p>

            <ul className="space-y-5 text-base leading-8 text-slate-600 sm:text-lg">
              <li>
                <span className="font-semibold text-slate-950">Transport and Logistics:</span> End-to-end supply chain and cargo movement solutions designed to strengthen delivery reliability, route coordination, and timely operational execution.
              </li>
              <li>
                <span className="font-semibold text-slate-950">Agribusiness and Groceries:</span> Farm inputs, agrochemicals, and general provisions that support productivity, continuity, and practical access to essential goods.
              </li>
              <li>
                <span className="font-semibold text-slate-950">Hospitality and Construction:</span> Event catering, facility management, and property maintenance support tailored to help maintain smooth operations and dependable service delivery.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
