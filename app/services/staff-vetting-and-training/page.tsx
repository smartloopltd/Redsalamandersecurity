import Link from "next/link";
import StaffVettingHeroSlider from "../../components/StaffVettingHeroSlider";

export default function StaffVettingPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <StaffVettingHeroSlider
        eyebrow="What we do"
        title="Staff Vetting and Training"
        subtitle="Comprehensive vetting and tailored training programs to ensure staff reliability, competence, and readiness for operational roles."
      />

      <section className="mx-auto flex max-w-4xl flex-col gap-8 px-6 py-16 sm:px-8 lg:px-12">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-950">Vetting, training and workforce readiness</h2>
          <p className="max-w-3xl text-lg leading-8 text-slate-700">
            We combine rigorous background screening with practical training and assessment to deliver personnel who meet the security, operational, and cultural requirements of your organisation.
          </p>
        </div>

        <div className="space-y-6">
          <p className="text-lg leading-8 text-slate-700">
            At Red Salamander, we recognize that your workforce is your most valuable asset. Our comprehensive staff vetting and training programs are designed to ensure organizational confidence by placing only the most reliable, competent, and professionally prepared personnel in critical roles. We employ multi-layered screening processes that go beyond standard background checks, incorporating behavioral assessments, reference verification, and security clearance procedures tailored to your operational requirements. Every candidate undergoes thorough scrutiny to identify not only those with the right qualifications but also individuals who align with your organizational values and demonstrate the integrity necessary for positions of trust and responsibility.
          </p>

          <p className="text-lg leading-8 text-slate-700">
            Beyond vetting, we understand that competence requires ongoing development. Our customized training programs are designed to equip personnel with the practical skills, situational awareness, and professional protocols necessary for operational excellence. Whether your teams require security training, emergency response protocols, customer service excellence, or specialized operational competencies, we develop targeted curricula that transform candidates into fully operational professionals. We recognize that different sectors and roles demand different skill sets, which is why our training is never one-size-fits-all. From security personnel requiring defensive techniques and threat assessment capabilities to administrative staff needing customer engagement protocols, we ensure every team member is equipped to perform at the highest standard.
          </p>

          <p className="text-lg leading-8 text-slate-700">
            Investing in proper staff vetting and training is investing in organizational resilience and operational success. Red Salamander's holistic approach to workforce development provides you with the competitive advantage of knowing your team is not only thoroughly screened but also professionally trained and operationally ready. We take pride in supporting your organization's growth by delivering personnel who are reliable, competent, and committed to excellence. By choosing our vetting and training services, you gain the assurance that your workforce meets the highest professional standards, significantly reducing operational risks while maximizing your team's effectiveness and your organization's capacity to deliver exceptional results.
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
