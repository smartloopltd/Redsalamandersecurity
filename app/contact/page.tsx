import Image from "next/image";
import contactHeroImage from "../img/img2/contactpage_herosection.jpg";

export default function Contact() {
  return (
    <div className="flex flex-col bg-white text-slate-950">
      <section className="relative h-[500px] w-full overflow-hidden sm:h-[560px] md:h-[600px] lg:h-[70vh] lg:min-h-[540px]">
        <Image
          src={contactHeroImage}
          alt="Contact hero section"
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
                Contact us
              </p>
              <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                Let’s discuss your protection and operational needs.
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-100 sm:text-lg lg:text-xl">
                Reach out to Red Salamander Operations, Nigeria Ltd for dependable security support, logistics coordination, and professional consultancy.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-24">
        <div className="space-y-7">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-600">
            Visit or call us
          </p>
          <h2 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Connect with our team directly.
          </h2>
          <p className="max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            We are available to discuss your operational requirements, security concerns, and support needs with clarity and professionalism.
          </p>

          <div className="space-y-5 text-slate-700">
            <div>
              <h3 className="text-xl font-semibold text-slate-950">Office Address</h3>
              <p className="mt-2 text-base leading-7 text-slate-600 sm:text-lg">
                17 Luka Panya Street, Opposite Esu-Karu Residence, Karu LGC, Nasarawa State, Nigeria
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-950">Phone</h3>
              <p className="mt-2 text-base leading-7 text-slate-600 sm:text-lg">
                +234 802 127 5677<br />
                +234 817 289 0063
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full pb-8 pt-8 sm:pb-10 sm:pt-10">
        <iframe
          title="Red Salamander Operations Office Map"
          src="https://www.google.com/maps?q=17%20Luka%20Panya%20Street%2C%20Opposite%20Esu-Karu%20Residence%2C%20Karu%20LGC%2C%20Nasarawa%20State%2C%20Nigeria&z=15&output=embed"
          className="h-[60vh] min-h-[420px] w-full border-0"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </div>
  );
}
