import Link from "next/link";
import { notFound } from "next/navigation";

const contentBySlug: Record<
  string,
  {
    title: string;
    summary: string;
    points: string[];
  }
> = {
  "private-citizens": {
    title: "Private citizens",
    summary:
      "We provide calm, reliable protection for homes, families, and personal routines through thoughtful planning and discreet support.",
    points: [
      "Residential security support that is practical and respectful of daily life.",
      "Close protection and transport arrangements for high-value personal needs.",
      "Responsive support during sensitive events or travel commitments.",
    ],
  },
  "commercial-properties": {
    title: "Commercial properties",
    summary:
      "We help businesses protect physical sites, occupants, and assets with steady oversight and dependable operational support.",
    points: [
      "Access control and movement monitoring for offices, campuses, and mixed-use properties.",
      "Operational support for daily security management and incident response.",
      "Flexible coverage for properties that need consistent protection without disruption.",
    ],
  },
  "construction-site": {
    title: "Construction site",
    summary:
      "We support active construction environments with site protection that keeps people, equipment, and progress secure.",
    points: [
      "Site access control and secure movement around materials, tools, and work zones.",
      "Protection for contractors, visitors, and high-value equipment.",
      "Support for projects that require discretion, speed, and accountability.",
    ],
  },
  "data-center": {
    title: "Data center",
    summary:
      "We support highly sensitive environments with disciplined protection that complements technical resilience and business continuity.",
    points: [
      "Secure entry management and controlled site access for critical facilities.",
      "Operational support aligned with compliance and continuity requirements.",
      "Protection plans that balance security with smooth day-to-day operations.",
    ],
  },
  "financial-industry": {
    title: "Financial industry",
    summary:
      "We assist financial institutions with protection that supports trust, confidentiality, and operational continuity.",
    points: [
      "Secure handling of sensitive personnel and site access needs.",
      "Protection support for branch locations, executive movement, and events.",
      "Practical response planning for high-risk or sensitive operations.",
    ],
  },
  "government-and-diplomatic-missions": {
    title: "Government and diplomatic missions",
    summary:
      "We provide dependable support for high-stakes environments where professionalism, discretion, and calm execution are essential.",
    points: [
      "Protection planning tailored to sensitive government and diplomatic environments.",
      "Controlled access and movement support for personnel and visitors.",
      "Reliable operational support during events, transitions, and high-profile engagements.",
    ],
  },
  "healthcare": {
    title: "Healthcare",
    summary:
      "We support healthcare facilities with protective services that respect sensitive care environments and operational pressure.",
    points: [
      "Secure access and site protection for hospitals, clinics, and care centers.",
      "Support for staff safety and smooth movement across busy premises.",
      "Protection planning that is calm, practical, and unobtrusive.",
    ],
  },
  "higher-education": {
    title: "Higher education",
    summary:
      "We help universities and colleges protect campuses, staff, students, and events with reliable, people-focused support.",
    points: [
      "Campus safety and access management for academic and administrative spaces.",
      "Protection for high-traffic events, visitors, and sensitive locations.",
      "Flexible support for institutions with changing operational demands.",
    ],
  },
  "industrial-security": {
    title: "Industrial security",
    summary:
      "We support industrial environments where security and operational continuity must work hand in hand.",
    points: [
      "Protection for plant sites, operational areas, and critical infrastructure.",
      "Support for access control and movement management across large facilities.",
      "Reliable response planning for high-risk or fast-moving environments.",
    ],
  },
  "international-organizations": {
    title: "International organizations",
    summary:
      "We support international teams with security services that are responsive, professional, and adaptable to complex settings.",
    points: [
      "Secure support for staff movement, access, and site operations.",
      "Protection planning that respects cross-border and multi-stakeholder needs.",
      "Dependable support during missions, visits, and coordinated events.",
    ],
  },
  "logistics-and-transportation": {
    title: "Logistics and transportation",
    summary:
      "We help transport and logistics operations protect people, cargo, routes, and continuity across demanding environments.",
    points: [
      "Protection support for movement, checkpoints, and operational transit points.",
      "Security planning that reduces disruption while improving control.",
      "Reliable support for time-sensitive, high-volume operations.",
    ],
  },
  "malls-shopping-centers-and-retail": {
    title: "Malls, shopping centers and retail",
    summary:
      "We support retail and public-facing spaces with protection that helps maintain safety, order, and confidence.",
    points: [
      "Steady site presence for entrances, circulation areas, and public spaces.",
      "Support for crowd management, incident response, and visitor confidence.",
      "Protection approaches that are visible when needed and calm when not.",
    ],
  },
  manufacturing: {
    title: "Manufacturing",
    summary:
      "We support manufacturing environments with security that protects people, products, and operational continuity.",
    points: [
      "Site protection for production areas, stock, and sensitive operations.",
      "Support for access management and controlled movement around facilities.",
      "Practical protection planning for busy industrial settings.",
    ],
  },
  "oil-gas-and-energy-sectors": {
    title: "Oil, gas and energy sectors",
    summary:
      "We support energy operations with protection designed for complex sites, remote conditions, and demanding logistics.",
    points: [
      "Security support for critical infrastructure and field operations.",
      "Protection planning aligned with operational risk and access requirements.",
      "Reliable support for environments where continuity and safety are non-negotiable.",
    ],
  },
  "ports-and-logistics-security": {
    title: "Ports and logistics security",
    summary:
      "We provide security support for movement-heavy environments where control, timing, and visibility matter every day.",
    points: [
      "Protection for access points, transit areas, and operational zones.",
      "Support for personnel movement and secure handling of sensitive operations.",
      "Practical planning for environments that demand precision and steady response.",
    ],
  },
  residential: {
    title: "Residential",
    summary:
      "We support residential settings with protective services that feel calm, consistent, and tailored to the people involved.",
    points: [
      "Security support for estates, compounds, and private residential environments.",
      "Discreet protection for residents, staff, and visitors.",
      "Flexible arrangements for daily routines, events, and elevated personal needs.",
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(contentBySlug).map((slug) => ({ slug }));
}

export default async function WhoWeServePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = contentBySlug[slug];

  if (!page) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="mx-auto flex max-w-4xl flex-col gap-8 px-6 py-20 sm:px-8 lg:px-12">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-600">
            Who we serve
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            {page.title}
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-slate-700">{page.summary}</p>
        </div>

        <div className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-950">What this support looks like</h2>
            <ul className="space-y-3 text-slate-700">
              {page.points.map((point) => (
                <li key={point} className="flex items-start gap-3 leading-7">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-red-600" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-4 text-sm font-semibold text-red-600">
            <Link href="/contact" className="hover:text-red-700">
              Contact our team
            </Link>
            <Link href="/about" className="hover:text-red-700">
              Learn about Red Salamander
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
