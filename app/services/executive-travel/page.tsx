import Link from "next/link";
import BlankHeroSection from "../../components/BlankHeroSection";

export default function ExecutiveTravelPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <BlankHeroSection
        eyebrow="What we do"
        title="Executive Travel Security"
        subtitle="We provide discreet, reliable protection for executives, travellers, and high-value movements where timing, discretion, and calm decision-making matter most."
      />

      <section className="mx-auto flex max-w-4xl flex-col gap-8 px-6 py-16 sm:px-8 lg:px-12">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-950">Travel protection designed around your schedule</h2>
          <p className="max-w-3xl text-lg leading-8 text-slate-700">
            Our support includes secure transport planning, route assessment, close protection coordination, and responsive operational oversight for sensitive travel requirements.
          </p>
          <p className="max-w-3xl text-lg leading-8 text-slate-700">
            Every engagement is shaped around the client’s environment, schedule, and risk profile so the experience remains calm and dependable.
          </p>
        </div>

        <div className="space-y-6">
          <p className="text-lg leading-8 text-slate-700">
            At Red Salamander, we understand that executive travel security extends far beyond simple protection—it encompasses seamless integration into your professional lifestyle while maintaining comprehensive threat mitigation. Our executive travel security specialists combine extensive experience in international protection operations with sophisticated threat assessment capabilities to deliver discrete, intelligent protection for executives, dignitaries, and high-profile individuals. We recognize that your travel patterns, schedules, and destinations demand customized security solutions that respect your time, maintain confidentiality, and eliminate unnecessary disruptions to your business activities. Through meticulous pre-travel planning, real-time threat monitoring, and adaptive operational protocols, we ensure that every movement—whether domestic or international—is conducted with the precision and professionalism expected by those in positions of significance.
          </p>

          <p className="text-lg leading-8 text-slate-700">
            We recognize that no two travel assignments are identical, which is why our approach to executive protection is fundamentally flexible and responsive to your unique circumstances. Our team conducts comprehensive advance reconnaissance of travel routes, venues, accommodation facilities, and potential risk vectors to develop security postures tailored specifically to your itinerary and threat environment. From airport coordination and secure transport logistics to venue security assessment and close protection coordination, we manage every element of your travel security with meticulous attention to detail. We maintain constant situational awareness, employ discreet communication protocols, and prepare contingency responses for dynamic scenarios, ensuring that you can focus on your professional objectives while our team maintains vigilant, unobtrusive protection. Whether you require protection for high-level negotiations, international conferences, or sensitive business operations, our personnel deliver reliable, sophisticated security support.
          </p>

          <p className="text-lg leading-8 text-slate-700">
            Executive travel security is an investment in your personal safety, professional effectiveness, and organizational reputation. Red Salamander's commitment to discretion, reliability, and professional excellence ensures that your travel is both secure and seamless, allowing you to conduct your affairs with confidence and peace of mind. We understand the unique demands placed on executives in today's complex security environment, and we are dedicated to providing protection that is both comprehensive and inconspicuous. By partnering with our specialized executive travel security team, you gain access to professionals who recognize that your time is valuable, your safety is paramount, and your reputation requires the utmost discretion. Travel with confidence knowing you have the expertise and dedication of Red Salamander's elite protection specialists at every stage of your journey.
          </p>
        </div>
      </section>
    </main>
  );
}
