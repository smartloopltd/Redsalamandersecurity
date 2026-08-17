import Link from "next/link";
import BlankHeroSection from "../../components/BlankHeroSection";

export default function EscortsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <BlankHeroSection
        eyebrow="What we do"
        title="Armed Guards and Escorts"
        subtitle="We provide armed and unarmed escort support for secure movement, asset protection, and controlled transit across demanding environments."
      />

      <section className="mx-auto flex max-w-4xl flex-col gap-8 px-6 py-16 sm:px-8 lg:px-12">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-950">Secure movement with discretion</h2>
          <p className="max-w-3xl text-lg leading-8 text-slate-700">
            Our escort services are designed to preserve safety, discretion, and pace while supporting clients in sensitive or high-risk situations.
          </p>
        </div>

        <div className="space-y-6">
          <p className="text-lg leading-8 text-slate-700">
            At Red Salamander, we understand that security extends beyond physical protection—it encompasses peace of mind, professional discretion, and reliable presence when it matters most. Our armed guards and escorts are rigorously trained professionals equipped with the expertise to navigate complex security scenarios while maintaining the highest standards of professionalism. Whether you require protection for executive travel, high-value asset transport, or secure transit through challenging environments, our team delivers comprehensive solutions tailored to your unique needs. We combine advanced threat assessment capabilities with strategic planning to ensure every movement is executed with precision and minimal disruption to your operations.
          </p>

          <p className="text-lg leading-8 text-slate-700">
            We recognize that security challenges are as diverse as the clients we serve. From corporate executives requiring discreet protection during international travel to organizations managing high-value assets in volatile regions, our armed escorts provide adaptive, intelligent protection. Our personnel undergo continuous training in defensive tactics, emergency response, and cultural awareness to handle situations ranging from routine protective detail to high-threat scenarios. We employ cutting-edge communication systems, real-time threat monitoring, and pre-planned contingency protocols to ensure that you and your assets remain protected throughout every stage of transit. Each assignment is treated as a unique operation, with customized security postures developed specifically for your circumstances.
          </p>

          <p className="text-lg leading-8 text-slate-700">
            Your safety is our primary mission, and we are committed to delivering the peace of mind that comes with knowing you have the best in professional security support. Red Salamander's armed guards and escorts combine tactical expertise with unwavering commitment to duty, maintaining constant vigilance without being intrusive or intimidating. We work closely with clients to understand their specific concerns, preferences, and operational requirements, enabling us to provide seamless protection that integrates naturally into your daily activities. By choosing our services, you gain access to a security partner that prioritizes your safety, respects your confidentiality, and maintains the highest level of professionalism under all circumstances.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 text-sm font-semibold text-red-600">
          <Link href="/contact" className="hover:text-red-700">Contact our team</Link>
          <Link href="/about" className="hover:text-red-700">Learn about Red Salamander</Link>
        </div>
      </section>
    </main>
  );
}
