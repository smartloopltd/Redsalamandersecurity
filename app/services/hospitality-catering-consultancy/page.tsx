import Link from "next/link";
import BlankHeroSection from "../../components/BlankHeroSection";

export default function HospitalityCateringConsultancyPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <BlankHeroSection
        eyebrow="What we do"
        title="Hospitality and Catering"
        subtitle="Providing expert catering, hospitality management, and tailored consultancy for events, businesses, and institutions."
      />

      <section className="mx-auto flex max-w-4xl flex-col gap-8 px-6 py-16 sm:px-8 lg:px-12">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-950">Expert hospitality and catering services</h2>
          <p className="max-w-3xl text-lg leading-8 text-slate-700">
            We deliver comprehensive hospitality and catering solutions that combine culinary excellence, professional service management, and strategic planning to create memorable experiences for events, businesses, and institutions.
          </p>
        </div>

        <div className="space-y-6">
          <p className="text-lg leading-8 text-slate-700">
            At Red Salamander, we understand that exceptional hospitality and catering experiences extend far beyond food preparation—they encompass strategic service delivery, professional management, guest satisfaction, and creating memorable moments that reflect positively on your organization. Our hospitality and catering services combine culinary expertise with sophisticated service management to deliver comprehensive solutions tailored to your specific event, business model, and guest expectations. We recognize that hospitality clients face unique challenges—from managing diverse guest populations and maintaining consistent service quality across multiple touchpoints, to coordinating complex logistics and creating distinctive experiences that enhance reputation and drive client satisfaction. Our experienced hospitality and catering teams bring extensive expertise across corporate events, celebrations, institutional dining, and specialized occasions, enabling us to deliver services that are both professionally executed and genuinely responsive to your unique requirements.
          </p>

          <p className="text-lg leading-8 text-slate-700">
            We take pride in providing integrated hospitality and catering services that extend beyond meal preparation to encompass comprehensive event management and guest experience optimization. Our services include menu development and culinary execution, service staff management and training, event logistics coordination, beverage service and bar management, dietary accommodation and food safety compliance, and strategic vendor coordination. We work closely with your event planning teams or institutional leadership to understand your objectives, guest demographics, budget parameters, and service requirements, ensuring that our hospitality and catering delivery exceeds expectations while maintaining operational efficiency. Our approach—combining culinary innovation with professional service standards and meticulous attention to detail—ensures that every guest interaction reflects the quality and professionalism of your organization while creating the distinctive experiences that guests remember and recommend.
          </p>

          <p className="text-lg leading-8 text-slate-700">
            Investing in professional hospitality and catering services is investing in event success, guest satisfaction, and organizational reputation. Red Salamander's commitment to culinary excellence, professional service delivery, and comprehensive management ensures that your events and institutional dining services reflect the quality and sophistication you expect. We understand that hospitality is ultimately about creating positive experiences and building relationships, and we are dedicated to delivering services that strengthen your organizational reputation and create lasting impressions. By partnering with Red Salamander for hospitality and catering, you gain access to experienced professionals who treat every event and dining experience with meticulous attention, culinary expertise, and genuine commitment to your success. Serve with excellence. Impress your guests. Succeed with Red Salamander's expert hospitality and catering services.
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
