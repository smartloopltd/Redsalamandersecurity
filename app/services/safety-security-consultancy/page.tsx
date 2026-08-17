import Link from "next/link";
import BlankHeroSection from "../../components/BlankHeroSection";

export default function SafetySecurityConsultancyPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <BlankHeroSection
        eyebrow="What we do"
        title="Safety and Security Consultancy"
        subtitle="Strategic security assessments and customized consultancy services to identify vulnerabilities, develop security frameworks, and strengthen your organizational resilience."
      />

      <section className="mx-auto flex max-w-4xl flex-col gap-8 px-6 py-16 sm:px-8 lg:px-12">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-950">Expert guidance for comprehensive security strategy</h2>
          <p className="max-w-3xl text-lg leading-8 text-slate-700">
            We provide professional consultancy services that transform security challenges into strategic advantages through evidence-based assessment, expert analysis, and actionable recommendations.
          </p>
        </div>

        <div className="space-y-6">
          <p className="text-lg leading-8 text-slate-700">
            At Red Salamander, we recognize that effective security strategy requires far more than reactive responses—it demands deep expertise, systematic assessment, and strategic thinking aligned with your organizational objectives. Our safety and security consultancy services combine extensive operational experience with proven methodologies to deliver comprehensive security assessments and actionable recommendations tailored to your unique risk environment. We understand that every organization faces distinct security challenges shaped by its industry, operational scale, geographic context, and threat landscape. Our experienced security consultants bring decades of combined expertise across corporate security, government operations, and complex organizational environments, enabling us to deliver consultancy that is both strategically sophisticated and practically implementable.
          </p>

          <p className="text-lg leading-8 text-slate-700">
            We take pride in providing consultancy services that extend beyond surface-level recommendations to encompass comprehensive security frameworks and implementation strategies. Our security assessments include physical security audits, personnel vetting protocol evaluation, emergency response plan review, technology and access control system analysis, and threat assessment specific to your operational context. We work closely with your leadership and operational teams to understand your organizational priorities, risk tolerance, and resource constraints, ensuring that our recommendations are not only strategically sound but also financially realistic and operationally feasible. Our consultancy is designed to identify vulnerabilities before they become liabilities, establish security best practices, and create sustainable systems that protect your people, assets, and reputation while supporting your business objectives.
          </p>

          <p className="text-lg leading-8 text-slate-700">
            Investing in professional security consultancy is investing in organizational resilience and strategic preparedness. Red Salamander's commitment to evidence-based analysis and actionable recommendations ensures that your organization has the security framework and strategic clarity necessary to operate confidently in today's complex threat environment. We understand that security decisions impact every dimension of organizational operations, and we are dedicated to providing consultancy that balances comprehensive protection with operational efficiency. By partnering with Red Salamander's security consultancy team, you gain access to experienced professionals who can help you navigate security complexity, identify emerging risks, and build security capabilities that strengthen your organization's competitive position. Assess your security posture. Strengthen your strategy. Succeed with Red Salamander's expert consultancy.
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
